# SANGGAR AI Policy & Capability Engine

## Purpose
Govern every AI capability before execution. Intelligence does not imply authority.

## Decision flow
AGENT → CAPABILITY REQUEST → CAPABILITY REGISTRY → POLICY MATCH → RISK CHECK → ALLOW / DENY / REQUIRE APPROVAL / HUMAN ONLY → EXECUTE → AUDIT

## Core entities
- ai_capabilities
- ai_agent_capabilities
- ai_policies
- ai_capability_requests
- ai_policy_decisions

## Capability model
Each capability declares domain, action type, risk level, reversibility and approval requirement. Agents receive explicit grants rather than unrestricted tool access.

## Policy model
Policies are organization-scoped and can define domain/risk rules, priority and decision behavior. Sensitive operations default toward approval or human-only handling.

## Auditability
Every policy evaluation can be persisted as an `ai_policy_decisions` record containing agent, task, run, capability, policy, risk, decision, reason and context.

## High-risk boundaries
Authentication/authorization, RLS, financial settlement, payroll approval, legal execution, IP ownership/licensing, destructive data operations, production infrastructure and irreversible employment decisions require explicit governance and cannot be silently delegated to an AI agent.

## Design principle
**Least privilege + explicit capability + policy evaluation + human control + audit trail.**
