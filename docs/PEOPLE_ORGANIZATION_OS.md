# SANGGAR People & Organization OS

## Purpose
People & Organization OS converts an accepted hiring outcome into governed organizational membership and workforce structure while keeping SANGGAR ID as the canonical identity.

## Flow
Hiring Candidate → Job Position → Position Assignment → People Profile → Organization Membership → Onboarding → Workforce.

## Core entities
- organization_units: hierarchical company/division/department/team/branch structure.
- job_positions: positions, employment type, reporting line and status.
- position_assignments: links positions to SANGGAR users and optionally the originating hiring candidate.
- people_profiles: organization-scoped workforce profile; does not replace SANGGAR ID profile.
- onboarding_plans / onboarding_tasks: reusable onboarding templates.
- people_onboarding / people_onboarding_tasks: execution state for each person.

## Governance
Organization data is organization-scoped. Members can read appropriate organizational records; administrative mutation is restricted to organization administrators/platform owners. Personal workforce data remains controlled and should be minimized.

## Design rule
Identity is canonical in SANGGAR ID. Talent Profile remains the professional-facing talent record. People Profile is the organization employment/workforce context. No duplicate identity system is introduced.

## Next
Performance & competency management → workforce planning → L&D integration → attendance/leave → payroll and finance integration.
