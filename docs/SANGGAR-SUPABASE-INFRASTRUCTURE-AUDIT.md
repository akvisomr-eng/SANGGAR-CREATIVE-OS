# SANGGAR Supabase Infrastructure Audit — 2026-10-08

## Result

The previously blocked SANGGAR Supabase project is now exposed to the engineering connector and healthy.

- Project: **SANGGAR CREATIVE**
- Ref: `auclznarnfooikmfmfvp`
- Region: `ap-southeast-1`
- PostgreSQL: 17.11
- Status: `ACTIVE_HEALTHY`

## Schema audit

Production currently contains:

- 208 public tables
- 208/208 public tables with RLS enabled
- 0 public tables without RLS
- 375 RLS policies
- 3 extensions
- 0 functions in the exposed `public` schema

This confirms the database is already strongly aligned with the SANGGAR governance model: identity, evidence, learning, creative assets, marketplace, AI orchestration, audit, billing, and revenue domains are present.

## Migration audit

The production project contains 30 recorded migrations. The ordered migration ledger is tracked in `supabase/PRODUCTION-MIGRATION-LEDGER.md`.

The live migration history is currently the authoritative production record. The next database change must be committed as a version-controlled migration rather than another untracked production-only DDL change.

## Edge Functions

Active production functions:

- `creative-marketplace-evaluator` — version 2, JWT verification enabled
- `admin-bootstrap` — version 1, JWT verification enabled

Both functions are now represented by repository source. The evaluator source matches the production implementation.

`admin-bootstrap` is intentionally locked to the initial empty-project bootstrap condition and uses the service-role secret only inside the server-side Edge Function. That secret is not placed in GitHub Pages or client code.

## Security audit

Supabase security advisor currently reports one warning:

- leaked-password protection is disabled.

This is an Auth project setting rather than a database DDL issue and should be enabled in the Supabase Auth security settings before public onboarding is considered production-ready.

No public-table-without-RLS finding was observed.

## Performance audit

The performance advisor reports 136 unindexed foreign keys. These are currently informational rather than a production failure. Because SANGGAR has a very broad schema and many of these relationships are not yet exercised, indexes should be added based on measured query paths rather than blindly creating 136 indexes.

The advisor also reports a small number of multiple-permissive-policy cases. They were reviewed and represent intentional admin/member access overlap; they should be consolidated later only when the access model can be preserved exactly.

## Frontend / hosting integration

The Render security headers previously blocked:

- the Supabase client CDN used by `app.html`
- browser connections to the SANGGAR Supabase project

The Render CSP has now been corrected to allow only the required Supabase project and jsDelivr client origin.

GitHub Pages remains the current production frontend deployment path.

## Canonical architecture

```
GitHub source
   ↓
Supabase production schema
   ↓
Auth + RLS
   ↓
Edge Functions
   ↓
SANGGAR Workspace
   ↓
Creative data → AI intelligence → marketplace → economy
```

Core engineering infrastructure remains **GitHub + Supabase**.
