# SANGGAR CLOUD RELEASE GATES

## Mandatory gates
| Gate | Requirement | Result policy |
|---|---|---|
| Build | Site/API artifacts build successfully | BLOCK on failure |
| Static quality | HTML, assets, links and required metadata valid | BLOCK |
| Security | No secrets; Supabase Security Advisor has zero lints | BLOCK |
| RLS | Every exposed public table has RLS | BLOCK |
| Authorization | Tests cover ownership and organization boundaries | BLOCK |
| Database | Migration/query verification passes | BLOCK |
| AI policy | Capability and risk controls pass | BLOCK for governed AI paths |
| Accessibility | Keyboard/focus/semantic checks pass | BLOCK for production |
| Responsive | Mobile/tablet/desktop layouts pass | BLOCK |
| SEO | canonical, robots, sitemap, metadata, structured content | BLOCK |
| Performance | No critical regression; optimize measured bottlenecks | BLOCK on severe regression |
| Smoke | Production URL, auth, critical navigation and API health verified | BLOCK |
| Rollback | Known-good release can be restored | BLOCK for production |

## Test layers
1. Unit tests
2. Static validation
3. Integration tests
4. Database/RLS tests
5. Security tests
6. AI evaluation and reliability tests
7. Accessibility tests
8. Browser/responsive tests
9. Production smoke tests
10. Regression tests

## High-risk release policy
Changes affecting identity, authorization, RLS, financial logic, payroll, legal execution, IP ownership/licensing, destructive data operations, production infrastructure, or irreversible employment decisions require explicit human approval.

## Rp0 operating policy
Use GitHub Actions and Supabase capabilities available on the current plan before introducing paid infrastructure. A paid service may be introduced only when measured traffic, latency, storage, queue depth, reliability, or compliance requirements demonstrate the need.

## Production incident loop
DETECT -> TRIAGE -> CONTAIN -> ROLLBACK/REMEDIATE -> VERIFY -> AUDIT -> ROOT CAUSE -> PREVENTION