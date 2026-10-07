# SANGGAR Workforce Analytics & People Intelligence

## Purpose
A governed intelligence layer over existing People, Performance, Competency, Learning, Skill Gap, Workforce Planning, and Internal Mobility data. It does not create a duplicate HR system.

## Core entities
- workforce_analytics_snapshots: reusable organization/unit metrics and dashboard facts.
- workforce_risk_signals: explainable operational signals requiring human review.
- capability_demand_forecasts: projected future skill/competency demand.

## Intelligence
Executive views can derive:
- workforce capacity
- capability coverage
- skill/competency gaps
- development completion
- internal mobility flow
- succession coverage
- performance support needs
- projected capability demand
- workforce planning variance

## AI boundary
AI may detect patterns, summarize evidence, forecast capability demand, explain gaps, and propose actions. It must not infer protected/sensitive traits, silently profile people, or autonomously decide hiring, promotion, termination, compensation, or other employment outcomes.

## Privacy
Analytics should prefer aggregated organizational/unit-level views. Individual-level evidence is exposed only where authorized and necessary. Signals retain source, confidence, evidence, and review status for auditability.

## Operating loop
OBSERVE → MEASURE → DETECT GAP/RISK → EXPLAIN → RECOMMEND → HUMAN REVIEW → ACT → MEASURE AGAIN.
