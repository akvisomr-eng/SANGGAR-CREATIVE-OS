# SANGGAR CREATIVE OS — Legal Master Data & Regulatory Foundation

## Purpose

Legal and regulatory data are first-class platform data. They provide the foundation for compliance workflows, launch readiness, audit evidence and future jurisdiction expansion.

## Business master data

The initial legal source data supplied in the SANGGAR CREATIVE OS library includes:

- NIB
- KBLI
- business activity
- business/location information
- risk-based business licensing documents
- electronic-system related information and supporting documents

The source documents remain evidence. Structured database records should reference their source documents and provenance rather than replacing them.

## Core domain model

Business Entity
→ Business Registration
→ Business Activity
→ KBLI
→ Electronic System
→ Data Processing
→ Applicable Regulation
→ Obligation
→ Control
→ Evidence
→ Review
→ Submission
→ Approval/Certification
→ Renewal

## Proposed entities

- legal_entities
- business_registrations
- business_activities
- kbli_codes
- electronic_systems
- system_services
- data_processing_activities
- jurisdictions
- regulators
- regulations
- obligations
- applicability_rules
- licenses
- registrations
- certifications
- certification_bodies
- compliance_controls
- compliance_evidence
- audits
- submissions
- submission_documents
- approvals
- renewals
- regulatory_changes
- compliance_tasks
- authorized_signatories
- audit_logs

## Required governance

Every regulatory record should have:
- source
- jurisdiction
- effective date
- status
- owner
- evidence reference
- review status
- audit trail

Legal documents must not be exposed as public user data by default.

Binding legal actions require authorized human approval, including:
- legal declarations
- signatures
- payments
- accepting legal liability
- regulator submissions where authorization is required

## Data principle

The existing legal documents in the project library are authoritative source evidence for initial modeling. Personal identifiers and other sensitive fields must be minimized in application exposure and protected by access policy.

## Launch-readiness objective

SANGGAR should be able to answer:
- Which legal entity operates this service?
- Which NIB/KBLI supports the activity?
- What electronic system is being operated?
- What data is processed?
- Which obligations apply?
- What evidence proves compliance?
- Which registrations/certifications are pending?
- Who is authorized to approve or submit?
- When must an obligation be renewed or reviewed?
