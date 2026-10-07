# SANGGAR CLOUD PLATFORM v1

## Mission
Cloud-native foundation for SANGGAR CREATIVE OS with Rp0-first infrastructure, secure multi-tenant data, API contracts, AI orchestration, observability, and device portability.

## Architecture
- Public Web: GitHub Pages / future CDN
- Application API: Supabase Data API + Edge Functions when server-side logic is required
- Database: Supabase PostgreSQL
- Auth: Supabase Auth
- Storage: Supabase Storage
- Async: GitHub Actions for CI/automation initially; queue/worker services only when workload justifies them
- AI: provider-agnostic model router behind policy/capability controls
- Clients: Web, Android, future iOS/glasses/vehicle/robot
- Source of truth: GitHub repository + controlled database migrations

## Core contract
Clients never own business rules. They consume governed platform capabilities.

Client -> Auth -> API/Function -> Policy -> Domain -> Database -> Audit

AI execution:

Request -> Context -> Agent Route -> Capability Policy -> Tool -> Validation -> Approval -> Result -> Audit -> Evaluation

## Environments
- local
- CI
- staging
- production

Production changes require passing tests and security gates. High-risk changes require human approval.

## Rp0 strategy
No paid cloud service is required for the foundation. Supabase remains the primary backend while its free capacity is sufficient. GitHub provides source control and CI/CD; GitHub Pages provides the public static portal. Paid compute is introduced only when measured workload requires it.

## Security
- RLS on exposed tables
- FORCE RLS where appropriate
- authorization from app metadata / database membership, never editable user metadata
- no service-role secrets in clients
- audit trail for privileged actions
- least privilege
- explicit AI capability policies
- human approval for high-risk operations

## Reliability
- automated tests on every main-branch change
- database security advisor gate
- migration verification
- production smoke tests
- observable releases
- rollback-ready deployment design

## Evolution
The platform follows:

OBSERVE -> UNDERSTAND -> DIAGNOSE -> PLAN -> BUILD -> TEST -> SECURITY VALIDATE -> QUALITY VALIDATE -> APPROVE -> RELEASE -> MONITOR -> LEARN -> IMPROVE

## Scaling path
1. Rp0 foundation
2. measured traffic and workload
3. optimize database/query/indexes
4. add caching/async only where measurements justify it
5. add dedicated API/worker compute
6. add CDN/edge and regional services
7. multi-region only when availability and economics require it