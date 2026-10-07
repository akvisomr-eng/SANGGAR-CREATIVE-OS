import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

type Input = {
  content_type: string;
  attributes?: Record<string, unknown>;
  platform_keys?: string[];
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json" }
  });

const readPath = (obj: Record<string, unknown>, path: string): unknown =>
  path.split(".").reduce((v: unknown, k) =>
    v && typeof v === "object" && k in (v as Record<string, unknown>)
      ? (v as Record<string, unknown>)[k]
      : undefined, obj);

function matches(actual: unknown, operator: string, expected: unknown): boolean | null {
  switch (operator) {
    case "eq": return JSON.stringify(actual) === JSON.stringify(expected);
    case "neq": return JSON.stringify(actual) !== JSON.stringify(expected);
    case "in": return Array.isArray(expected) ? expected.some(v => JSON.stringify(v) === JSON.stringify(actual)) : null;
    case "not_in": return Array.isArray(expected) ? !expected.some(v => JSON.stringify(v) === JSON.stringify(actual)) : null;
    case "exists": return expected === true ? actual !== undefined && actual !== null : actual === undefined || actual === null;
    default: return null;
  }
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);
  const auth = req.headers.get("authorization");
  if (!auth) return json({ error: "missing_authorization" }, 401);

  const body = (await req.json()) as Input;
  if (!body.content_type) return json({ error: "content_type_required" }, 400);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: auth } } }
  );

  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) return json({ error: "unauthorized" }, 401);

  let query = supabase
    .from("creative_platforms")
    .select("id,platform_key,name,website_url,contributor_url,status,supported_content_types")
    .eq("status", "active");

  if (body.platform_keys?.length) query = query.in("platform_key", body.platform_keys);
  const { data: platforms, error: platformError } = await query;
  if (platformError) return json({ error: "platform_lookup_failed", detail: platformError.message }, 500);

  const results = [];
  const attrs = body.attributes ?? {};

  for (const platform of platforms ?? []) {
    const { data: rules, error: ruleError } = await supabase
      .from("creative_platform_submission_rules")
      .select("content_type,rule_key,operator,expected_value,severity,source_url,policy_version,active")
      .eq("platform_id", platform.id)
      .eq("content_type", body.content_type)
      .eq("active", true);

    if (ruleError) return json({ error: "rule_lookup_failed", detail: ruleError.message }, 500);

    const blockers: unknown[] = [];
    const requirements: unknown[] = [];
    const evaluated: unknown[] = [];

    for (const rule of rules ?? []) {
      const actual = readPath(attrs, rule.rule_key);
      const result = matches(actual, rule.operator, rule.expected_value);
      evaluated.push({ rule_key: rule.rule_key, result, source_url: rule.source_url, policy_version: rule.policy_version });
      if (result === false && rule.severity === "blocker") {
        blockers.push({ rule_key: rule.rule_key, expected: rule.expected_value, actual, source_url: rule.source_url });
      } else if (result === false || result === null) {
        requirements.push({ rule_key: rule.rule_key, expected: rule.expected_value, actual, severity: rule.severity, source_url: rule.source_url });
      }
    }

    const supported = Array.isArray(platform.supported_content_types)
      ? platform.supported_content_types.includes(body.content_type)
      : true;

    let eligibility_status = "unknown";
    if (!supported) eligibility_status = "ineligible";
    else if (blockers.length) eligibility_status = "ineligible";
    else if (!(rules?.length)) eligibility_status = "unknown";
    else if (requirements.length) eligibility_status = "conditional";
    else eligibility_status = "eligible";

    const match_score = Math.max(0, Math.min(100,
      60 + (supported ? 15 : -50) + (rules?.length ? Math.min(20, rules.length * 2) : 0) - blockers.length * 40 - requirements.length * 8
    ));

    results.push({
      platform: {
        key: platform.platform_key,
        name: platform.name,
        website_url: platform.website_url,
        contributor_url: platform.contributor_url
      },
      eligibility_status,
      match_score,
      blockers,
      requirements,
      evaluated_rules: evaluated
    });
  }

  results.sort((a, b) => b.match_score - a.match_score);
  return json({
    evaluator_version: "1.1.0",
    user_id: user.id,
    content_type: body.content_type,
    disclaimer: "Pre-submission assessment only. Final acceptance remains with the external platform.",
    results
  });
});