# SANGGAR Legal, Contract & IP OS

## Purpose
The Legal, Contract & IP OS governs contracts, legal documents, intellectual property ownership, licensing, royalties, provenance, legal review, and legal tasks across SANGGAR.

## Core flow
CRM / Project / Marketplace / Procurement / Creative Locker
→ Legal Party
→ Contract
→ Version
→ Review
→ Approval / Execution
→ Obligations
→ Renewal
→ IP Ownership / License
→ Royalty
→ Provenance
→ Audit

## Core entities
- legal_parties
- contracts
- contract_parties
- contract_versions
- contract_obligations
- contract_renewals
- legal_documents
- ip_assets
- ip_ownership
- ip_licenses
- ip_license_terms
- ip_royalties
- ip_provenance
- legal_reviews
- legal_tasks

## Governance
- Organization-scoped.
- RLS and FORCE RLS are enabled on every table.
- Legal records are not public by default.
- Binding legal changes require authorized human action.
- Contract versions preserve content hashes and provenance metadata.
- IP ownership supports co-creators and assignment history.
- Licensing captures exclusivity, commercial use, territory, duration, and source contract.
- Royalty records are separated from payment execution.
- Legal reviews and tasks preserve review status, risk level, findings, and due dates.

## AI boundaries
AI may:
- classify and summarize legal documents;
- extract obligations and dates;
- identify potential contractual risks;
- draft non-binding templates;
- suggest review tasks;
- monitor renewals;
- organize IP provenance;
- calculate/forecast royalty scenarios.

AI must not:
- provide binding legal decisions;
- sign or accept contracts;
- falsely claim certification/compliance;
- accept legal liability;
- change ownership or licensing rights without authorization;
- make irreversible legal decisions without human approval.

## Integration map
- CRM: companies, contacts, leads, deals
- Creative Locker / Projects: source creative assets and project provenance
- Marketplace: listings, opportunities, orders
- Procurement: vendors and purchase orders
- Finance: future royalty/invoice/payment integration
- Compliance OS: obligations, registrations, certifications and audit evidence
- Identity: SANGGAR ID and organization/legal entity records

## Next extensions
- signature workflow and authorized signatories
- quotation/order/contract conversion
- legal templates
- external e-signature adapters
- IP registration tracking
- jurisdiction-specific legal obligation packs
- royalty settlement integration
- legal knowledge graph
- compliance evidence linkage
