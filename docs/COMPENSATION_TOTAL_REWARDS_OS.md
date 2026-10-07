# SANGGAR Compensation & Total Rewards OS

## Purpose

Compensation & Total Rewards OS connects organizational structure, positions, performance, competency, contribution and rewards into a governed compensation framework.

Scope of this phase:
- compensation frameworks and salary bands
- position-to-band mapping
- individual compensation profiles
- compensation components
- reward cycles and recommendations
- benefit plans and enrollments

Out of scope:
- payroll calculation and payslip generation
- accounting / general ledger
- tax filing execution
- statutory payroll remittance

Those belong to the later Payroll & Finance OS.

## Core Flow

**Organization Strategy → Job Position → Compensation Band → People Compensation Profile → Components/Benefits → Performance & Contribution Evidence → Reward Cycle → Human Approval**

## Data Model

### compensation_frameworks
Organization-level compensation policy/version. Supports effective dates, currency and lifecycle.

### compensation_bands
Range structure with minimum, midpoint and maximum compensation.

### position_compensation_profiles
Maps a job position to its compensation band and optional target position level.

### compensation_components
Reusable reward components:
- base
- allowance
- bonus
- incentive
- commission
- benefit
- equity
- other

### people_compensation_profiles
Sensitive individual compensation record linked to a People Profile and optionally a position assignment.

### compensation_assignments
Individual component assignments with amount/percentage and effective dates.

### reward_cycles
Controlled reward review periods such as annual, semiannual, quarterly or spot rewards.

### reward_recommendations
Proposed rewards with rationale, evidence and source provenance.

### benefit_plans
Organization benefit definitions, eligibility rules, provider and employer cost metadata.

### benefit_enrollments
Person-level benefit enrollment lifecycle.

## Security Model

Compensation data is more sensitive than normal workforce data.

- RLS + FORCE RLS on every table.
- Organization administrators and platform owners manage organization compensation records.
- Employees can view their own compensation profile, compensation components, reward recommendations and benefit enrollments where applicable.
- Compensation is not exposed to ordinary organization members.
- AI-generated recommendations retain source metadata and require human review.
- No autonomous salary setting, bonus approval, promotion, termination or employment decision.

## AI Governance

AI may:
- compare compensation against defined internal bands
- summarize performance/contribution evidence
- identify potential pay-range anomalies
- propose reward scenarios
- explain the factors behind a recommendation
- support aggregate pay-equity analysis
- recommend development actions connected to competency and performance

AI may not:
- autonomously set compensation
- approve bonuses or incentives
- make promotion/termination decisions
- infer protected or sensitive traits
- override compensation policy or authorized human approval

## Integration

Reuses canonical entities:
- SANGGAR ID / profiles
- organizations and organization membership
- job positions
- position assignments
- people profiles
- performance goals and reviews
- competency assessments
- skills and competencies
- development plans
- succession and leadership data
- workforce analytics

This phase deliberately does not duplicate identity, position, skill or performance systems.

## Future Payroll Boundary

The next finance-oriented layer can consume approved compensation outcomes to calculate payroll, deductions, taxes, reimbursements, payslips and accounting entries.

The compensation layer remains the **policy, range, assignment, reward and benefit source**, while Payroll becomes the **calculation and payment execution layer**.
