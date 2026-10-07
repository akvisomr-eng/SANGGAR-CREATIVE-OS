# SANGGAR Learning & Development Intelligence

Connects competency/skill gaps and career goals to learning and measurable development outcomes.

## Flow
Assessment → Gap Snapshot → Learning Recommendation → Development Plan → Learning/Practice → Evidence → Outcome → Reassessment.

## Core entities
- learning_recommendations: explainable recommendations tied to skill, competency, learning path, career path, goals, or manual input.
- skill_gap_snapshots: time-stamped current vs target capability snapshots.
- learning_development_outcomes: measurable outcomes linked to development items and optional evidence.

## AI governance
AI may recommend learning paths, summarize gaps, rank options, and explain recommendations. It must expose uncertainty/source type and cannot autonomously determine promotion, termination, compensation, or other high-impact employment outcomes.

## Design principles
- Existing Skill Graph remains canonical.
- Learning Path remains canonical learning content.
- Evidence remains the provenance layer.
- Development Plan remains the execution layer.
- Recommendations are dismissable and auditable.
- Workforce data remains organization-scoped and protected by RLS.
