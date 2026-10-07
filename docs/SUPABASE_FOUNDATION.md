# SANGGAR CREATIVE OS — Supabase Foundation

## Purpose

Supabase is the core application data platform for SANGGAR CREATIVE OS under the Rp0 initial infrastructure strategy.

The database foundation is intentionally built before feature domains:

**Identity → Organization → Authorization → Audit → Legal/Compliance → Domain data**

## Current Project

- Supabase project: SANGGAR CREATIVE
- Region: ap-southeast-1
- PostgreSQL: 17
- Initial database state: clean
- Core infrastructure policy: GitHub + Supabase
- Cost target: Rp0 during the initial build

## Foundation tables

### Identity & organization

- `profiles`
- `organizations`
- `organization_members`

### Authorization

- `roles`
- `permissions`
- `role_permissions`
- `member_roles`

### Governance

- `audit_logs`

### Legal & compliance reference

- `legal_entities`
- `business_registrations`
- `jurisdictions`
- `regulations`
- `compliance_obligations`

## Security contract

1. RLS is enabled on every exposed public foundation table.
2. Authorization uses explicit roles and permissions; authentication alone is not authorization.
3. User ownership uses `auth.uid()` through policies.
4. Sensitive legal data is organization-scoped.
5. Audit records are append-oriented and actor-attributed.
6. Service-role credentials must never be shipped to public clients.
7. Security-definer functions, where unavoidable, stay outside exposed schemas and use a restricted search path.
8. Indexes are added for ownership, foreign-key and audit access paths.
9. Security advisors must be clean before each foundation milestone is considered complete.

## Auth bootstrap

A private trigger creates a corresponding `profiles` row when a new Supabase Auth user is created. The trigger is idempotent.

## RBAC baseline

Initial system roles:

- platform_owner
- org_admin
- mentor
- creator
- learner
- professional

Initial permission families:

- profile
- organization
- project
- evidence
- portfolio
- learning
- AI
- compliance

The RBAC model is deliberately extensible; domain-specific permissions should be added without redesigning identity.

## Next database milestones

1. Digital Locker and asset metadata
2. Projects and creative workspace
3. Learning and competency graph
4. Evidence and Creative Passport
5. AI orchestration and memory metadata
6. Marketplace and transaction primitives
7. Career and organization workflows
8. Compliance automation and regulatory change tracking

No feature domain should bypass the identity, organization, authorization, audit and data-governance contracts.
