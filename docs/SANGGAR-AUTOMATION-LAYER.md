# SANGGAR Automation Layer v1

This layer translates useful patterns from the `awesome-n8n-templates` catalog into **SANGGAR-native workflow specifications**. We intentionally do not copy third-party workflow JSON into the product.

## Selected capabilities

- **AI + memory:** contextual assistant, long-term memory, multilingual support, human handoff.
- **Creator pipeline:** onboarding, evidence intake, portfolio curation, learning progress, submission validation.
- **Knowledge/RAG:** document ingestion, extraction, indexing, semantic retrieval and cited answers.
- **Economy:** marketplace matching, order operations and opportunity notifications.
- **Growth:** content repurposing, SEO intelligence and social trend monitoring.
- **Operations:** scheduled analytics digest, notification routing.
- **Governance:** human approval gates and immutable-style audit events.

## Runtime boundary

GitHub Pages remains the presentation layer. Workflow execution belongs in a server-side automation runtime such as n8n, with Supabase as the application data/memory layer. Browser code must never contain private n8n credentials.

## Deployment phases

1. **Now:** Automation Center UI + canonical workflow catalog.
2. **Next:** n8n webhook/API adapter behind a server-side endpoint.
3. **Then:** connect Supabase events, queues, retries, audit logs and per-plan usage limits.
4. **Production:** activate only workflows whose credentials, data permissions and licensing have been reviewed.

## Governance

The upstream repository states that its templates are collected from online sources and that original creators retain rights. Therefore SANGGAR uses the repository as an architectural reference and builds original workflow specifications rather than redistributing third-party JSON.
