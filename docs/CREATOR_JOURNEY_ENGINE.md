# Creator Journey Engine

The Creator Journey Engine connects a creator's goal to measurable creative and commercial outcomes.

## Lifecycle

Goal → Skill Gap → Learning Path → Project → Evidence → Portfolio → Creative Passport → Marketplace Match → Submission Package → Sell / License / Hire → Revenue Signal → Next Recommendation

## Data model

- `creator_journeys` — one governed journey per user goal.
- `creator_journey_steps` — ordered execution stages and targets.
- `creator_journey_signals` — outcome/progress signals with provenance and confidence.
- `creator_journey_recommendations` — next-best actions generated from the journey context.

All four tables use RLS + FORCE RLS and are owner-scoped through `auth.uid()`.

## Governance

The engine is recommendation-first. It must not claim that an external marketplace will accept an asset. External platform acceptance remains controlled by that platform.

High-risk decisions involving employment, legal liability, finance, payments, IP ownership transfer, or destructive operations remain subject to existing SANGGAR policy and human approval gates.

## Production public surface

- `journey.html` — public explanation and entry point.
- Supabase — governed journey data foundation.
- Creative Marketplace Evaluator — pre-submission deterministic rule evaluation.
