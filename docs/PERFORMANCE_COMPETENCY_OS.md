# SANGGAR Performance & Competency OS

## Purpose
Connect workforce execution with the existing People OS, Skill Graph, Learning OS, Evidence, and Career/Talent systems without duplicating identity or skill data.

## Core flow
People Profile → Position → Competency/Skill expectations → Goals → Check-ins → Review → Gap Analysis → Learning/Development Plan → Career Path.

## Modules
- Performance Cycles: annual, semiannual, quarterly, monthly, probation, project, or custom cycles.
- Performance Goals: outcome, development, behavior, project, and team goals with weighted targets.
- Goal Updates: timestamped progress/check-ins with optional evidence linkage.
- Performance Reviews: self, manager, peer, project, mentor, and other review contexts.
- Review Items: competency/skill-specific assessment with score, level, commentary, and optional evidence.
- Competency Assessments: structured assessment of an existing competency for a person, including target level and confidence.
- Career Paths: reusable organizational progression paths through existing job positions.
- Development Plans: person-specific development objectives linked to career paths, learning paths, skills, and competencies.

## Governance
- Organization-scoped data is visible only to active organization members.
- Mutations for organizational configuration are restricted to org_admin/platform_owner.
- Employees can author their own goals/development plans and reviewers can author their own reviews/assessments.
- Workforce data is not public by default.
- SANGGAR ID remains the canonical identity; People Profile remains employment/workforce context.
- Skills and competencies reference the existing Skill Graph rather than creating duplicate skill taxonomies.
- Evidence may be linked to performance updates and review items for provenance.

## AI boundaries
AI may assist with:
- goal drafting and normalization
- review summarization
- competency-gap analysis
- development recommendations
- learning-path recommendations
- career-path exploration
- explainable workforce insights

AI must not autonomously make irreversible or high-impact employment decisions such as termination, promotion, compensation decisions, or candidate/employee rejection. Human decision-makers remain accountable and decisions must remain auditable.

## Future evolution
This layer becomes the bridge toward:
Performance Intelligence → Competency Intelligence → Learning Recommendations → Internal Mobility → Workforce Planning → People/Operating Intelligence.
