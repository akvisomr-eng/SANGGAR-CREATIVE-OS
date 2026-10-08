# SANGGAR Supabase Production Migration Ledger

This file records the migration history observed in the canonical **SANGGAR CREATIVE** Supabase project.

- Project ref: `auclznarnfooikmfmfvp`
- Region: `ap-southeast-1`
- PostgreSQL: 17.11
- Last audited: 2026-10-08

The live Supabase migration history remains authoritative until the SQL bodies are reconstructed into version-controlled migration files. This ledger prevents the repository from silently drifting from the production migration sequence.

## Migration sequence

| Version | Name |
|---|---|
| 20261007014701 | foundation_identity_governance |
| 20261007014712 | foundation_rls_hardening |
| 20261007014721 | foundation_auth_rbac_bootstrap |
| 20261007014729 | rbac_project_read_permission |
| 20261007040726 | learning_skill_evidence_creative_passport_foundation |
| 20261007041849 | add_recruiter_hiring_pipeline_os |
| 20261007041906 | harden_recruiter_rls_and_indexes |
| 20261007042059 | add_people_organization_os |
| 20261007042112 | add_people_org_admin_policies |
| 20261007042321 | performance_competency_career_development_os |
| 20261007042745 | learning_development_intelligence |
| 20261007042857 | internal_mobility_workforce_planning_os |
| 20261007042944 | workforce_analytics_people_intelligence |
| 20261007043003 | harden_workforce_analytics_policies_and_indexes |
| 20261007043253 | succession_leadership_os_final |
| 20261007044505 | legal_contract_ip_os_foundation |
| 20261007044748 | operating_intelligence_foundation |
| 20261007053654 | business_cloud_monetization_foundation |
| 20261007053812 | platform_gateway_entitlements_foundation |
| 20261007053911 | billing_invoices_foundation |
| 20261007053916 | billing_credit_foundation |
| 20261007054149 | create_revenue_intelligence_core |
| 20261007054152 | create_revenue_cost_events |
| 20261007054156 | harden_revenue_intelligence_rls |
| 20261007055258 | expand_creative_platform_registry_rules_v1_fix |
| 20261007055308 | seed_creative_submission_rules_v1_fix |
| 20261007060128 | creator_distribution_network_and_gallery_v1_fix |
| 20261007060659 | creative_learning_commercialization_os |
| 20261007060720 | consolidate_creator_gallery_read_policy |
| 20261007083343 | creator_asset_storage_foundation |
| 20261007083357 | creator_gallery_public_storage |

## Drift policy

1. New production schema changes must be represented by a migration before they are considered complete.
2. Do not create a replacement SANGGAR Supabase project.
3. Keep Edge Function source under `supabase/functions/`.
4. Regenerate `supabase/database.types.ts` after schema changes.
5. Run security and performance advisors after DDL changes.
6. Never commit service-role secrets or private keys.
