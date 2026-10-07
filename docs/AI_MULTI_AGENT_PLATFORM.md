# SANGGAR AI Multi-Agent Platform

## Purpose
Governed orchestration layer for SANGGAR AI agents across learning, creative work, projects, talent, CRM, finance, procurement, legal, marketplace and future domains.

## Core flow
REQUEST → CONTEXT → AGENT ROUTING → PLAN → TOOL POLICY CHECK → EXECUTION → VALIDATION → APPROVAL WHEN REQUIRED → RESULT → AUDIT → LEARN

## Core entities
- ai_agents
- ai_agent_tools
- ai_tasks
- ai_runs
- ai_messages
- ai_approvals
- ai_tool_executions
- ai_audit_events

## Agent model
Agent types include assistant, analyst, workflow, specialist, orchestrator and guardian. Each agent has an explicit autonomy level and tool capability registry.

## Governance
Low-risk operations may run within configured policy. Medium/high/critical actions require explicit policy handling and, where configured, human approval. Tool execution is separately recorded from approval. Audit events preserve the execution trail.

## AI boundaries
Agents may reason, retrieve context, summarize, classify, forecast and propose actions. Agents must not independently sign contracts, alter ownership, approve payroll, execute financial settlement, make irreversible hiring decisions, change security policy, or bypass governance controls.

## Architecture direction
The platform will later connect to the Operating Intelligence layer, Knowledge Graph, Creative Passport, compliance controls and external capability adapters. Agent memory and context must distinguish observed facts, derived insights, user-provided information and uncertain inference.
