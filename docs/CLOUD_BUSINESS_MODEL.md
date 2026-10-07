# SANGGAR CLOUD BUSINESS MODEL

## Position
SANGGAR becomes a platform business, not only a software application.

## Revenue layers
1. Free ecosystem access
2. Creator / Professional subscriptions
3. Business / Enterprise subscriptions
4. AI usage
5. API and platform usage
6. Storage and compute-related usage where economically justified
7. Marketplace transaction fees
8. Course and learning revenue share
9. Creative services and freelance transactions
10. Recruitment / talent services
11. Enterprise implementation and managed services
12. Partner / integration ecosystem

## Product packaging
Plans are represented by capabilities and entitlements, not hard-coded UI rules.

Core entities:
- business_plans
- business_plan_features
- customer_subscriptions
- usage_meters
- usage_events

This allows SANGGAR to change packaging without rewriting every client.

## Metering
Initial platform meters:
- AI requests
- AI tokens
- storage bytes
- API calls
- workflow runs
- marketplace orders

Usage events are immutable business telemetry inputs. Financial settlement must remain a separate governed layer.

## Monetization principles
- Free access remains meaningful.
- Paid plans unlock higher limits, advanced capabilities, collaboration, governance and enterprise controls.
- Usage-based pricing is used where marginal platform cost is measurable.
- Marketplace fees apply to completed/eligible transactions, not merely listings.
- Enterprise pricing may be custom.
- Never hide critical safety, privacy, legal or account controls behind payment.

## Financial boundary
The cloud business layer does not directly execute bank payments or statutory financial settlement. It records commercial entitlement and usage signals; the Finance/Payroll OS remains the governed accounting boundary.

## Future billing flow
Customer -> Plan -> Entitlement -> Usage -> Rating -> Invoice -> Payment Provider -> Settlement -> Finance -> Revenue Analytics

## AI monetization boundary
AI may be packaged as included quota, usage-based metering, or premium capability. AI policy and safety controls remain identical across paid and free plans.

## Rp0-first rollout
Stage 1: build and validate product with zero paid infrastructure.
Stage 2: instrument usage.
Stage 3: validate product-market fit.
Stage 4: introduce pricing and payment provider.
Stage 5: scale infrastructure from measured revenue/workload.

## Strategic objective
Create a flywheel:

Learn -> Create -> Prove -> Publish -> Work -> Earn -> Grow -> Buy/Sell -> Use AI -> Generate more value -> Return to SANGGAR
