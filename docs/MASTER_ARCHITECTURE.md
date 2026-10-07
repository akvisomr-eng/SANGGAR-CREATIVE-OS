# SANGGAR CREATIVE OS — Global Master Architecture

Version: 1.2 product-corrected foundation

## 1. Product identity

SANGGAR is a user-first, AI-powered Creative & Learning Operating System. It is not primarily a school administration system, ERP interface, or LMS-only product.

The primary product experience is the user's personal workspace:
- learn
- create
- practice
- improve
- prove skills
- build portfolio
- connect
- work
- grow

Supported users include students, individuals, creators, freelancers, professionals, job seekers, entrepreneurs and organizational users.

## 2. Product surfaces

### Public Website
Purpose:
- company/brand profile
- product explanation
- SEO and international discoverability
- public content/resources
- partner and business information
- portal entry to SANGGAR

### SANGGAR Web Application
Primary user workspace for desktop/laptop and broad browser access.

Core experiences:
- personal dashboard
- learning
- creative workspace
- AI assistance
- projects
- evidence
- skills
- portfolio
- Creative Passport
- opportunities/career
- collaboration
- notifications and personal settings

### SANGGAR Android Application
User-facing mobile companion for phones and tablets.

It should provide mobile-native experiences and device capabilities:
- camera/media capture
- microphone/voice
- notifications
- mobile workflows
- offline-aware experience
- secure local session/cache
- future device adapters

Android is not the primary administrative console.

### Platform / Back Office
Supporting system layer for:
- organization administration
- tenant management
- roles/policies
- finance/ERP/HR/CRM
- legal/compliance
- security
- audit
- governance
- platform operations

Back-office capabilities must not unnecessarily complicate the user experience.

## 3. Global-first architecture

Global capability is a platform property, not a later translation project.

Required foundations:
- multilingual UI/content architecture
- locale, timezone and currency abstraction
- country-specific policy/compliance layer
- tenant and organization isolation
- international identity/profile model
- configurable tax/payroll/accounting rules
- localized legal documents and consent
- accessibility
- regional data/privacy policy support
- extensible integrations/adapters

## 4. Unified platform domains

Identity & Access
- SANGGAR ID
- RBAC/ABAC/policy engine
- organization and tenant management
- MFA/passkeys
- consent and privacy

Creative
- Creative Workspace
- Project OS
- asset/version/provenance
- portfolio
- IP and licensing

Education & Skills
- Academy/LMS
- competency graph
- evidence
- assessment
- credential
- Creative Passport
- career development

Business
- CRM
- ERP
- procurement
- inventory/assets
- project operations
- customer success
- commerce/marketplace

People
- HRIS/HRD
- recruitment
- onboarding
- attendance/leave
- performance
- learning/development
- career path
- payroll

Finance
- accounting
- budgeting
- AR/AP
- cash/bank
- expense
- invoicing
- payroll finance
- project costing
- reporting

Legal & Governance
- contract management
- legal documents
- copyright/IP
- licensing
- compliance
- audit
- risk
- policy management

AI
- agent registry
- orchestrator
- model gateway
- scoped memory
- tool permissions
- evaluations
- human approval
- AI governance

Intelligence
- analytics
- operational intelligence
- personalization
- recommendation
- forecasting
- anomaly detection
- autonomous evolution

Growth
- SEO
- content intelligence
- marketing
- international discoverability
- knowledge/learning content

## 5. User intelligence

SANGGAR should build a governed User Capability & Context Model.

Signals may include:
- declared goals
- role/persona
- learning history
- demonstrated skill
- evidence quality
- interaction patterns
- preferred language
- accessibility preferences
- project context
- workflow behavior
- progress and outcomes

The system must distinguish:
- observed facts
- inferred preferences
- predictions
- uncertain signals

Sensitive profiling must be minimized, purpose-limited and governed by consent and policy.

## 6. Adaptive experience

The same platform should adapt its interface and recommendations to user capability and context.

Adaptation should never silently remove critical controls or rights.

## 7. Autonomous Evolution

SANGGAR may observe, diagnose, propose, test, validate, release and monitor improvements through controlled pipelines.

High-risk changes require human approval.

## 8. Data architecture

PostgreSQL is the relational system of record.
Object storage is used for large media/files.
AI memory is scoped and governed.
Audit/security/consent data are first-class domains.

No domain may create an isolated identity or uncontrolled shadow database.

## 9. Client architecture

The public website, web application and Android application are distinct product surfaces over the same governed platform.

All clients consume governed platform capabilities rather than duplicating business logic.

Future clients may include iOS, desktop-native, smart glasses, vehicle and embodied/robotic interfaces.

## 10. Quality gates

Every production change should pass applicable:
- unit tests
- integration tests
- security checks
- data/RLS checks
- migration checks
- accessibility checks
- performance checks
- regression tests
- observability checks

## 11. Strategic rule

Do not build isolated features merely because they are possible.

Every capability must strengthen:
Learn → Create → Practice → Improve → Prove → Publish → Connect → Work → Grow → Govern → Evolve.
