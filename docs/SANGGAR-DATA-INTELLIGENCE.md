# SANGGAR Data Intelligence Layer

SANGGAR adopts the architectural principles represented by `oxnr/awesome-bigdata` as a **Data Intelligence Layer**, not as a collection of third-party dependencies. The upstream list covers databases, distributed processing, ingestion, data quality, observability, scheduling, ML, search, BI, visualization, IoT and streaming. SANGGAR translates those patterns into product capabilities. 

## Strategic role

```
DATA SOURCES
    ↓
INGEST
    ↓
NORMALIZE
    ↓
VALIDATE
    ↓
STORE
    ↓
INDEX
    ↓
ANALYZE
    ↓
DECIDE
    ↓
AUTOMATE
    ↓
LEARN
```

Supabase remains the application system of record in the current phase. Large-scale engines, warehouses, lakehouses, streaming systems or external vector databases are **future scale options**, not dependencies to introduce prematurely.

## SANGGAR Data Intelligence modules

### 1. Data Ingestion Gateway — P1
Canonical event ingestion for:
- creator activity
- academy progress
- evidence and portfolio
- marketplace opportunities
- orders and economy
- AI interactions
- automation events
- operational telemetry

Every event should carry an event id, actor, tenant/context, event type, occurred_at, schema version and provenance.

### 2. Data Quality Guard — P1
Before data reaches AI, analytics or automation:
- completeness
- validity
- uniqueness
- consistency
- freshness
- schema compatibility
- quarantine for invalid records

This extends the Reality Intelligence principles from the falsehood integration.

### 3. Data Lineage — P1
Track:

```
SOURCE → TRANSFORMATION → DATASET → AI/REPORT → DECISION → ACTION
```

This gives SANGGAR explainability for analytics, AI recommendations and governance.

### 4. Semantic Data Search — P1
Combine:
- structured filters
- full-text search
- semantic/vector retrieval
- creator context
- skill graph
- evidence
- marketplace context

This becomes the search foundation for Creator Passport, Knowledge/RAG and Marketplace Intelligence.

### 5. Analytics Intelligence — P1
Turn product events into:
- funnel
- cohort
- retention
- learning progress
- creator growth
- marketplace conversion
- revenue
- automation health
- operational KPIs

### 6. Realtime Signal Engine — P2
Near-real-time signals for:
- new opportunities
- creator activity
- marketplace changes
- anomaly alerts
- notifications
- workflow triggers

The architecture should remain event-driven so a future stream processor can be introduced without rewriting product modules.

### 7. Recommendation Engine — P1
Data + AI becomes:

```
CREATOR
 ↓
SKILLS
 ↓
EVIDENCE
 ↓
BEHAVIOR
 ↓
GOALS
 ↓
MARKET SIGNALS
 ↓
RANKING
 ↓
NEXT-BEST-ACTION
```

This powers learning recommendations, opportunity matching, portfolio recommendations and creator growth.

### 8. Data Governance Guard — P1
Every sensitive data operation should consider:
- ownership
- access policy
- retention
- sensitive fields
- auditability
- purpose/context
- human approval where required

### 9. Data Anomaly Detector — P2
Detect unusual:
- revenue
- traffic
- learning activity
- marketplace activity
- automation failures
- duplicate events
- data freshness
- KPI changes

## Big-data scale path

SANGGAR should not become a Hadoop/Spark platform simply because those technologies exist. The architecture should be **scale-ready**.

### Phase A — current
```
GitHub Pages
   ↓
Server/API
   ↓
Supabase PostgreSQL + Storage
   ↓
AI / Automation
```

### Phase B — growing data
```
Supabase
   ↓
Event / Queue Layer
   ↓
Analytics Store
   ↓
BI + AI
```

### Phase C — large-scale
```
Event Streams
   ↓
Stream Processing
   ↓
Lakehouse / Warehouse
   ↓
Feature / Vector / Search Layer
   ↓
AI + Decision Engine
```

Possible technologies can be evaluated later based on actual workload: PostgreSQL/Supabase, object storage, queue/stream systems, columnar analytics, lakehouse formats, vector databases, search engines and orchestration platforms.

## Data contract

SANGGAR events should move toward a canonical envelope:

```json
{
  "event_id": "unique-id",
  "event_type": "evidence.created",
  "schema_version": 1,
  "actor_id": "creator-id",
  "context": {
    "organization_id": "optional",
    "project_id": "optional"
  },
  "occurred_at": "ISO-8601 timestamp",
  "source": "web|mobile|automation|api",
  "payload": {},
  "provenance": {}
}
```

The exact production schema should be implemented in Supabase only after checking the existing database schema and RLS policies.

## Failure model

Big-data architecture must not assume every event succeeds.

```
EVENT
 ↓
VALIDATE
 ↓
IDEMPOTENCY
 ↓
QUEUE
 ↓
PROCESS
 ↓
RETRY
 ↓
DEAD LETTER / QUARANTINE
 ↓
AUDIT
 ↓
RESULT
```

A failed recommendation, notification or analytics job must not corrupt the creator's core evidence, portfolio or financial records.

## Integration with the seven intelligence layers

```
DESIGN INTELLIGENCE
        +
CREATIVE INTELLIGENCE
        +
REALITY INTELLIGENCE
        +
AUTOMATION INTELLIGENCE
        +
CEO INTELLIGENCE
        +
CTO INTELLIGENCE
        +
DATA INTELLIGENCE
        ↓
SANGGAR DECISION ENGINE
        ↓
SUPABASE
        ↓
CREATOR / ACADEMY / MARKETPLACE / ECONOMY
```

## Principle

SANGGAR should **use big-data architecture as an invisible capability**.

Creators should see:
- faster search
- better recommendations
- smarter analytics
- reliable automation
- relevant opportunities
- stronger AI

They should not need to know whether the underlying workload eventually runs on PostgreSQL, a warehouse, a lakehouse, a stream processor or a vector engine.

The product abstraction is **Creative Intelligence**, while big-data infrastructure is the scale layer underneath it.
