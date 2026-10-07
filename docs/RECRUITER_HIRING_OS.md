# SANGGAR Recruiter & Hiring OS

## Purpose
Recruiter & Hiring OS extends Career & Talent into an organization-controlled hiring workflow without duplicating Talent Profile, Skills, Evidence, Portfolio, or Marketplace Opportunity data.

## Core flow
Talent Profile → Talent Pool → Opportunity/Application → Candidate → Hiring Pipeline → Stage → Interview → Decision → Talent Engagement.

## Entities
- talent_pools: organization-owned reusable candidate pools.
- talent_pool_members: links talent profiles into pools; does not copy skill data.
- hiring_pipelines: organization-specific hiring workflows.
- hiring_stages: ordered stages such as screening, interview, assessment, offer, hired, rejected.
- hiring_candidates: organization-side candidate record linked to talent/application/opportunity where available.
- hiring_interviews: scheduled interview records and participants.
- hiring_stage_events: auditable stage/status/decision history.

## Governance
Organization membership is required for visibility. Administrative mutation is restricted to organization administrators or platform owners. Candidate data remains organization-scoped and must not become public by default.

## AI boundaries
AI may assist with candidate search, explainable matching, summarization, interview preparation, scheduling suggestions, and competency-gap analysis. AI must not make irreversible hiring decisions, infer sensitive traits, or silently rank people using protected/sensitive characteristics.

## Data principles
Talent Profile remains the source of professional identity. Skill Graph remains the source of skills/competencies. Evidence and Portfolio remain sources of proof. Hiring OS references these records rather than duplicating them.

## Next expansion
- recruiter workspace
- hiring analytics
- structured interview scorecards
- offer workflow
- onboarding handoff to People OS
- workforce planning
- internal mobility
