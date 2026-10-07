# Production Workspace Release

## Current flow

Public Portal → Authenticated Workspace → Creator Journey → Learning → Project/Evidence → Portfolio → Creative Passport → Marketplace Assessment → Submission Package → External Sell/License/Hire → Outcome Loop.

## Workspace

`app.html` provides:
- Supabase Auth sign-in/sign-up
- user-owned Creator Journey listing/creation
- learning enrollment summary
- portfolio summary
- Creative Passport summary
- submission package summary

The browser uses only the Supabase publishable key. Authorization is enforced by database RLS; privileged service credentials are not placed in the client.

## Submission Package

`creator_submission_packages` stores a governed preparation package:
- journey
- marketplace assessment
- platform
- content type
- metadata
- rights evidence
- release evidence
- provenance
- package manifest
- external submission reference

This is a preparation/audit layer. It does not bypass or impersonate external marketplaces.

## Release boundary

External platform acceptance remains external. Payment providers, automated third-party submission, and high-risk decisions remain gated by policy and authorization.
