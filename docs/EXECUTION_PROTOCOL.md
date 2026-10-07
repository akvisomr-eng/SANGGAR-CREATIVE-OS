# SANGGAR CREATIVE OS — Autonomous Execution Protocol

## Operating rule

Work is executed in parallel where dependencies permit, using the locked Blueprint and Phase Roadmap as the governing contract.

## Engineering loop

Blueprint
→ Phase Gate
→ GitHub
↔ Supabase
→ Test
→ Security
→ Data validation
→ Fix
→ Verify
→ Commit
→ Release
→ Monitor
→ Next Gate

## CTO operating principles

1. Prefer the simplest architecture that satisfies the long-term requirement.
2. Do not create duplicate services or databases.
3. Do not introduce external infrastructure outside the approved core stack.
4. Detect gaps before implementation.
5. Fix root causes rather than repeatedly patching symptoms.
6. Every schema/security change is verified.
7. Every autonomous action has an audit trail.
8. High-risk production changes require human approval.
9. Mobile and future device clients consume shared platform contracts.
10. Global readiness is designed into the foundation, not bolted on later.

## Current stack constraint

Core engineering infrastructure:
- GitHub
- Supabase

No additional infrastructure dependency is introduced unless the project owner explicitly changes this rule.

## Current execution status

GitHub repository: available, currently initialized with architecture foundation.

Supabase: the connected account currently exposes other projects but not the SANGGAR project. Do not create a replacement project. The correct existing project must become accessible before database inspection or schema work.

## Next gate

Once the existing SANGGAR Supabase project is exposed:
1. inspect project metadata
2. inspect schemas/tables/constraints/indexes
3. inspect migrations
4. inspect extensions
5. run security/performance advisors
6. compare actual database to the master domain map
7. establish Phase 0 database baseline
8. generate the canonical schema/migration plan
9. implement with verification
