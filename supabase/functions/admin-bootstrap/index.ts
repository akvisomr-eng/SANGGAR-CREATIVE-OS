import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.4";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });

  try {
    const url = Deno.env.get("SUPABASE_URL")!;
    const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const authz = req.headers.get("Authorization") || "";
    if (!authz.startsWith("Bearer ")) throw new Error("Unauthorized");

    const admin = createClient(url, service, { auth: { persistSession: false } });
    const token = authz.slice(7);
    const { data: { user }, error: ue } = await admin.auth.getUser(token);
    if (ue || !user) throw new Error("Unauthorized");

    const [{ count: membersCount }, { count: orgsCount }] = await Promise.all([
      admin.from("organization_members").select("*", { count: "exact", head: true }),
      admin.from("organizations").select("*", { count: "exact", head: true }),
    ]);

    const listed = await admin.auth.admin.listUsers({ page: 1, perPage: 1000 });
    if (listed.error) throw listed.error;

    if (
      (membersCount ?? 0) !== 0 ||
      (orgsCount ?? 0) !== 0 ||
      listed.data.users.length !== 1 ||
      listed.data.users[0].id !== user.id
    ) {
      return new Response(
        JSON.stringify({
          ok: false,
          code: "BOOTSTRAP_LOCKED",
          message: "Admin bootstrap hanya tersedia untuk satu-satunya akun pada project yang masih kosong.",
        }),
        { status: 403, headers: { ...cors, "Content-Type": "application/json" } },
      );
    }

    const { data: org, error: oe } = await admin
      .from("organizations")
      .insert({
        name: "SANGGAR CREATIVE OS",
        slug: "sanggar-creative-os",
        organization_type: "platform",
        status: "active",
      })
      .select("id,name,slug")
      .single();
    if (oe) throw oe;

    const { data: member, error: me } = await admin
      .from("organization_members")
      .insert({ organization_id: org.id, user_id: user.id, membership_status: "active" })
      .select("id")
      .single();
    if (me) throw me;

    const { data: role, error: re } = await admin
      .from("roles")
      .select("id")
      .eq("code", "platform_owner")
      .single();
    if (re || !role) throw re || new Error("platform_owner role missing");

    const { error: mre } = await admin
      .from("member_roles")
      .insert({ membership_id: member.id, role_id: role.id });
    if (mre) throw mre;

    return new Response(
      JSON.stringify({ ok: true, organization: org, role: "platform_owner" }),
      { status: 200, headers: { ...cors, "Content-Type": "application/json" } },
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ ok: false, error: String(e?.message || e) }),
      { status: 400, headers: { ...cors, "Content-Type": "application/json" } },
    );
  }
});
