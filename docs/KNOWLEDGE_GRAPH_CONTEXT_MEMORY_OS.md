# SANGGAR Knowledge Graph + Context & Memory OS

## Purpose
Provide governed cross-domain context for AI agents without granting unrestricted access to the operational database or treating every interaction as permanent memory.

## Knowledge Graph
Knowledge entities connect users, skills, competencies, projects, evidence, portfolios, opportunities, organizations, customers, contracts, IP and other governed domain objects. Relationships preserve provenance and confidence.

Core tables:
- knowledge_entities
- knowledge_relationships

## AI Memory
`ai_memory_items` separates durable memory from operational records. Memory is typed as fact, preference, goal, decision, outcome, instruction, summary or inference and records source, confidence, sensitivity, retention and lifecycle status.

Observed facts and inferred preferences must remain distinguishable. Sensitive memory is purpose-limited and policy governed.

## Context Snapshots
`ai_context_snapshots` records the bounded context used by a task/run, including source references and expiry. Agents should receive the minimum context required for the task.

## Evaluation
`ai_evaluations` captures quality, safety, tool accuracy, latency, cost estimates and findings for continuous improvement.

## Governance
- Least-privilege context access.
- No unrestricted database access for agents.
- Memory must have provenance and lifecycle controls.
- Sensitive data is not inferred merely because it is technically available.
- Context snapshots can expire.
- AI inference is not silently promoted to fact.

## Strategic relationship
Knowledge Graph → Context Builder → AI Agent Run → Tool Policy → Result → Evaluation → Memory/Outcome → Operating Intelligence.
