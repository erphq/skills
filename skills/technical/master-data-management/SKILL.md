---
name: master-data-management
description: This skill should be used when the task involves design and operate master data management programs in erp.ai -- use when establishing golden records, data stewardship, duplicate detection, data quality frameworks, and cross-system synchronization for enterprise master data.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - technical
  type: skill
  scope: internal
---
# Master Data Management

## Purpose

Master Data Management (MDM) is the discipline of ensuring that an organization's shared, critical data entities -- customers, products, suppliers, employees, accounts -- are accurate, consistent, and controlled across every system that touches them. Builders need this skill whenever they are:

- Consolidating customer or product records from multiple source systems into a single source of truth
- Establishing data quality rules and measurement frameworks across the enterprise
- Designing duplicate detection and golden record resolution logic
- Building a data stewardship program with clear ownership and escalation paths
- Setting up reference data management for code tables, classifications, and cross-reference mappings
- Implementing cross-system synchronization of master data via publish/subscribe or CDC patterns
- Defining data governance structures including data councils, SLAs, and change control

Without disciplined MDM, every downstream process -- reporting, analytics, integrations, compliance -- inherits the errors and inconsistencies of unmanaged master data. MDM is the single highest-impact data initiative an enterprise can undertake, yet it fails most often when treated as a technology project rather than a business capability.

## Key Concepts

### Master Data Domains

Master data is the slowly changing, high-value reference data shared across business processes and systems. The most common domains in ERP are:

| Domain | Examples | Why It Matters |
|---|---|---|
| **Customer** | Account, contact, address, hierarchy | Drives billing, shipping, CRM, revenue recognition |
| **Product** | Item, SKU, variant, BOM, category | Drives procurement, inventory, pricing, sales |
| **Supplier/Vendor** | Vendor, contact, payment terms, certifications | Drives procurement, AP, compliance |
| **Employee** | Person, position, org unit, cost center | Drives HR, payroll, access control |
| **Finance** | Chart of accounts, cost centers, profit centers | Drives all financial reporting and consolidation |
| **Location** | Plant, warehouse, site, region | Drives logistics, tax jurisdiction, reporting |

Master data is distinct from **transactional data** (orders, invoices, journal entries) and **analytical data** (aggregated metrics, KPIs). Transactional data references master data; analytical data summarizes it.

### MDM Architecture Styles

There are four canonical MDM architecture styles. The right choice depends on the number of source systems, the organization's data maturity, and the degree of control required.

| Style | How It Works | Golden Record Location | Best For |
|---|---|---|---|
| **Registry** | Each source system retains its own master data. The MDM hub stores only cross-reference keys and metadata, pointing to records in source systems. No data is physically consolidated. | Stays in source systems | Organizations that cannot centralize data due to politics, regulation, or legacy constraints. Low disruption. |
| **Consolidation** | Source system data is copied into the MDM hub, where it is cleansed, matched, and merged into golden records. The golden records are read-only -- they feed analytics and reporting but do not write back to source systems. | MDM hub (read-only) | Organizations that need a single view for reporting/analytics but cannot change source system behavior. |
| **Coexistence** | Like consolidation, but the golden records in the MDM hub are published back to source systems. Source systems can also create and update records, which flow back to the hub. Bidirectional sync. | MDM hub + source systems | Organizations that need a single source of truth AND source systems that must stay operational with local data entry. Most complex style. |
| **Centralized** | All master data creation and maintenance happens in the MDM hub. Source systems consume master data from the hub and are not allowed to create or modify master data records. | MDM hub (authoritative) | Greenfield deployments or organizations with strong governance. Simplest data flow but requires the most organizational discipline. |

**Decision matrix for choosing a style:**

| Factor | Registry | Consolidation | Coexistence | Centralized |
|---|---|---|---|---|
| Number of source systems | Many, entrenched | Many | Moderate | Few or new |
| Governance maturity | Low | Medium | High | Very high |
| Implementation effort | Low | Medium | High | Medium |
| Data quality improvement | Minimal | Moderate (read-only) | High | Highest |
| Source system disruption | None | None | Moderate | High |
| Ongoing operational cost | Low | Medium | High | Medium |

In erp.ai, the **centralized** style is the default for new deployments. When integrating with existing source systems, **coexistence** or **consolidation** is typical.

### Golden Record Resolution

A **golden record** is the single, best-available representation of a master data entity, assembled from one or more source records. Constructing golden records requires three capabilities: duplicate detection, survivorship rules, and merge/unmerge.

#### Duplicate Detection

Duplicate detection identifies records across (or within) source systems that represent the same real-world entity. Techniques:

- **Exact match**: Fields match character-for-character (e.g., tax ID, DUNS number). Fast but brittle -- misses typos, formatting differences.
- **Deterministic match**: Defined rules combine multiple fields (e.g., "same last name + same date of birth + same postal code" = match). Reliable when rules are well-designed. Fails on missing data.
- **Probabilistic/fuzzy match**: Algorithms score similarity across multiple fields. Each field match contributes a weight; a combined score above a threshold triggers a match candidate. Catches typos, nicknames, abbreviations.
- **Machine learning match**: Trained models score match likelihood based on labeled training data. Most accurate for complex domains but requires training data and ongoing model maintenance.

Common fuzzy matching algorithms:

| Algorithm | Good For | Limitation |
|---|---|---|
| Levenshtein distance | Typos, character transpositions | Slow on large datasets; position-sensitive |
| Jaro-Winkler | Person names (weights prefix matches) | Less effective on non-name fields |
| Soundex / Metaphone | Phonetic similarity ("Smith" vs "Smyth") | English-centric; limited to names |
| N-gram similarity | Addresses, descriptions | Requires tuning of n-gram size |
| TF-IDF + cosine similarity | Long text fields, product descriptions | Computationally expensive |

**Blocking** is critical for performance: instead of comparing every record to every other record (O(n^2)), group records into blocks by a coarse key (first 3 characters of last name + postal code) and only compare within blocks. This reduces comparisons by orders of magnitude.

In erp.ai, configure duplicate detection rules in the MDM module per entity type. Define blocking keys, matching fields, algorithms, and thresholds. Candidate matches above the auto-merge threshold are merged automatically; those between the auto-merge and review thresholds go to stewards for manual review.

#### Survivorship Rules

When duplicates are found, survivorship rules determine which source value wins for each field in the golden record.

| Rule Type | Logic | Example |
|---|---|---|
| **Source priority** | Prefer the value from the most authoritative system | CRM wins for customer name; ERP wins for payment terms |
| **Most recent** | Prefer the most recently updated value | Latest address update wins |
| **Most frequent** | Prefer the value that appears in the most sources | If 3 of 4 systems say "New York", that wins |
| **Most complete** | Prefer the non-null, longest, or most detailed value | A full address beats a partial one |
| **Manual override** | A steward's explicit selection always wins | Steward resolves a name dispute |

Survivorship rules are defined per field, not per record. A golden customer record might take its name from CRM, its tax ID from the ERP, its address from the most recent update, and its industry classification from a manual override.

#### Merge and Unmerge

**Merge** combines two or more source records into a single golden record. All transactional references (orders, invoices, tickets) from the merged source records must be re-pointed to the surviving golden record ID.

**Unmerge** reverses an incorrect merge. This is operationally difficult because transactional references must be re-split. Design the data model to preserve the original source record IDs even after merge, so unmerge is always possible.

In erp.ai, the MDM module maintains a `source_records` junction table linking each golden record to its contributing source records. Merge creates new links; unmerge restores the prior state from this history.

### Data Quality Dimensions

Data quality is measured across six standard dimensions:

| Dimension | Definition | How to Measure | Example |
|---|---|---|---|
| **Accuracy** | Data correctly represents the real-world entity | Comparison to authoritative source, field-level audits | Customer phone number matches actual phone |
| **Completeness** | Required fields are populated | Percentage of non-null values for mandatory fields | 94% of customers have a valid email |
| **Consistency** | Same fact is represented the same way across systems | Cross-system reconciliation, referential integrity checks | Customer name in CRM matches ERP |
| **Timeliness** | Data is up-to-date and available when needed | Age of last update vs freshness SLA | Address updated within 30 days of change |
| **Uniqueness** | Each entity is represented once (no duplicates) | Duplicate detection scan results | 0.3% duplicate rate across customer base |
| **Validity** | Data conforms to defined formats and business rules | Validation rule pass rate | 99.2% of postal codes match country format |

Each dimension should have:
- **Metric**: A quantitative score (percentage, count, ratio)
- **Threshold**: Acceptable quality level (e.g., completeness > 95%)
- **Owner**: Who is accountable for maintaining the threshold
- **Remediation process**: What happens when quality drops below threshold

### Data Quality Rules Engine

The rules engine is the operational core of data quality management. It profiles, monitors, scores, and remediates data issues.

**Profiling** examines data to discover patterns, anomalies, and statistics:
- Column profiling: min/max, cardinality, null percentage, value distribution, format patterns
- Cross-column profiling: functional dependencies, correlations
- Cross-table profiling: referential integrity, orphan records

**Monitoring** runs quality rules on a schedule or on data change events:
- Validation rules: format checks, range checks, referential integrity
- Business rules: cross-field logic, cross-entity consistency
- Anomaly detection: statistical outliers, sudden distribution shifts

**Scoring** aggregates rule results into quality scores at multiple levels:
- Field score: percentage of records passing all rules for that field
- Record score: weighted average of field scores for a single record
- Entity score: aggregate across all records of an entity type
- Domain score: aggregate across all entities in a master data domain

**Remediation** routes quality issues to the right handler:
- Auto-fix: Rules that can be safely applied automatically (standardize phone format, trim whitespace)
- Steward queue: Issues requiring human judgment (possible duplicate, conflicting values)
- Escalation: Issues that affect business processes (missing tax ID blocks invoicing)

In erp.ai, data quality rules are configured in the Data Quality module. Rules fire on record create/update and on scheduled scans. Results feed the quality scorecard dashboard.

### Data Stewardship Program

A stewardship program defines who is responsible for data quality, what they do, and how issues escalate.

**Steward roles:**

| Role | Scope | Responsibilities |
|---|---|---|
| **Executive Data Sponsor** | Organization-wide | Champions MDM at the executive level, secures funding, resolves cross-department disputes |
| **Data Domain Owner** | One master data domain (e.g., Customer) | Defines business rules, approves policy, owns quality SLAs for the domain |
| **Data Steward** | One or more entity types within a domain | Reviews and resolves data quality issues, approves merges/unmerges, maintains reference data |
| **Data Custodian** | Technical/operational | Implements rules in systems, manages ETL/sync, monitors technical data quality |

**Escalation path:** Data Custodian (technical issue) -> Data Steward (business judgment) -> Data Domain Owner (policy decision) -> Executive Sponsor (cross-domain conflict) -> Data Governance Council (enterprise-level).

**Remediation workflow:**
1. Quality rule detects an issue and creates a work item
2. Work item is routed to the appropriate steward based on domain, entity, and issue type
3. Steward reviews the issue, investigates root cause, and applies a fix or escalates
4. Fix is applied to the golden record and optionally propagated to source systems
5. Root cause is logged for trend analysis (is this a systemic issue or a one-off?)
6. If systemic, steward proposes a new rule or process change to prevent recurrence

**Steward workbench** in erp.ai provides:
- Queue of assigned data quality issues, sorted by severity and SLA
- Side-by-side comparison of source records for merge/unmerge decisions
- Data lineage view showing where a value originated and how it flowed
- Audit trail of all stewardship actions

### Reference Data Management

Reference data is the subset of master data that defines the valid values for classifying and categorizing other data: country codes, currency codes, industry classifications, unit of measure codes, status values.

**Lifecycle of reference data:**
1. **Proposal**: Business user requests a new code or change to an existing code
2. **Review**: Data steward reviews the proposal against standards (no duplicates, correct hierarchy placement)
3. **Approval**: Domain owner approves or rejects
4. **Activation**: Code is added to the reference table with an effective date
5. **Deprecation**: Code is marked as deprecated (not deleted) with an end date; existing references remain valid but new usage is blocked
6. **Retirement**: After a grace period, deprecated codes are hidden from all selection UIs

**Cross-reference mapping** links equivalent codes across systems. Example: CRM uses country code "US", ERP uses "USA", logistics system uses "840" (ISO numeric). The cross-reference table maps all three to the same canonical value.

| Source System | Source Code | Canonical Code | Canonical Description |
|---|---|---|---|
| CRM | US | USA | United States of America |
| ERP | USA | USA | United States of America |
| Logistics | 840 | USA | United States of America |

In erp.ai, reference data is managed through the Reference Data module. Each reference set has a defined lifecycle, change approval workflow, and cross-reference mapping table. Reference data changes are versioned and auditable.

### Cross-System Synchronization

Master data must flow between the MDM hub and connected systems. The synchronization pattern depends on the MDM architecture style.

**Publish/Subscribe (Pub/Sub):**
- The MDM hub publishes master data change events to a message bus (Kafka, RabbitMQ, erp.ai Event Bus).
- Subscribing systems consume events and update their local copies.
- Pros: Loose coupling, scalable, supports many consumers.
- Cons: Eventual consistency; subscribers may lag.

**Change Data Capture (CDC):**
- Database-level capture of inserts, updates, and deletes on master data tables.
- Change events are streamed to the MDM hub or from the hub to consumers.
- Pros: No application code changes needed to capture changes; captures all changes including direct DB edits.
- Cons: Tight coupling to database schema; requires DB-level permissions.

**API-based synchronization:**
- Source systems call the MDM hub's API to create/update records. The hub validates, deduplicates, and responds with the golden record ID.
- The hub calls source system APIs to push updates.
- Pros: Strong consistency (synchronous); full validation on every change.
- Cons: Tight coupling; latency; must handle API failures.

**Conflict resolution** is necessary in coexistence and bidirectional patterns:
- **Last-write-wins**: Simplest. The most recent update overwrites. Risk: legitimate earlier updates are lost.
- **Source-priority**: The most authoritative source wins regardless of timing. Safer for critical fields.
- **Field-level merge**: Different fields may come from different sources; apply survivorship rules per field.
- **Manual resolution**: Conflicts are queued for steward review. Slowest but safest for high-value data.

In erp.ai, cross-system sync is configured in the Integration Hub. Each master data entity can have a defined sync direction (inbound, outbound, bidirectional), sync frequency (real-time, near-real-time, batch), and conflict resolution strategy per field.

### Master Data Governance

Governance is the organizational framework that ensures MDM policies are defined, enforced, and evolved.

**Governance structures:**

| Structure | Purpose | Cadence |
|---|---|---|
| **Data Governance Council** | Enterprise-level policy decisions, cross-domain arbitration, funding | Quarterly |
| **Domain Working Groups** | Domain-specific rules, quality targets, issue resolution | Monthly |
| **Stewardship Stand-ups** | Operational review of quality metrics, issue queues, blockers | Weekly |

**Change control for master data:**
1. All schema changes to master data entities (new fields, changed validation rules, new reference codes) go through a formal change request process.
2. Impact assessment: What systems consume this data? What reports will be affected?
3. Approval: Domain owner and impacted system owners approve.
4. Implementation: Coordinated across hub and all consuming systems.
5. Validation: Post-change quality checks confirm no degradation.

**SLAs for data quality:**
- Define SLAs per domain and dimension (e.g., "Customer completeness > 95%, measured weekly")
- SLA breaches trigger escalation to the domain owner
- SLA trends are reported to the governance council quarterly

### Data Quality Dashboards and Scorecards

Dashboards make data quality visible and actionable. Design at three levels:

**Executive scorecard:**
- Overall quality score per domain (single number: red/yellow/green)
- Trend over time (improving, stable, degrading)
- Top 3 issues by business impact
- SLA compliance percentage

**Domain dashboard:**
- Quality score breakdown by dimension (accuracy, completeness, consistency, timeliness, uniqueness, validity)
- Drill-down by entity type within the domain
- Duplicate rate trend
- Steward queue depth and resolution time

**Operational dashboard:**
- Rule execution results (pass/fail counts per rule)
- Data quality issues by status (new, in progress, resolved, escalated)
- Source system contribution to quality issues (which system creates the most problems?)
- Sync lag and conflict rates per integration

In erp.ai, quality dashboards are built with the Analytics Designer, sourcing data from the Data Quality module's rule execution history and scoring tables.

## Workflow

### 1. Assess Current State

- Inventory all systems that create, store, or consume master data.
- Profile data quality in each system: completeness, duplicates, format inconsistencies.
- Map data flows: which system is the source of truth for which fields?
- Identify pain points: Where does bad data cause business problems (failed shipments, duplicate invoices, compliance issues)?
- **Tool**: erp.ai's Data Profiler and System Inventory.
- **Watch out for**: Assuming one system is authoritative when, in practice, multiple departments maintain their own versions.
- **Output**: Current-state assessment document with quality baseline metrics.

### 2. Define MDM Strategy

- Select the MDM architecture style based on organizational readiness and system landscape.
- Define which master data domains are in scope for the first phase (start with one or two, not all).
- Identify the golden record resolution approach per domain.
- Define governance structures: council, domain owners, stewards.
- **Tool**: Decision matrix from Key Concepts above.
- **Watch out for**: Trying to boil the ocean. Start with the domain causing the most business pain.
- **Output**: MDM strategy document with architecture style, scope, and governance model.

### 3. Design the Master Data Model

- Define the canonical data model for each in-scope domain (the golden record schema).
- Map source system fields to the canonical model.
- Define survivorship rules per field.
- Define reference data sets and cross-reference mappings.
- **Tool**: erp.ai's Entity Builder and MDM Configuration module.
- **Watch out for**: Designing the canonical model as a union of all source fields. Be selective -- include only fields that are genuinely shared across systems.
- **Output**: Canonical data model with field mappings and survivorship rules.

### 4. Implement Data Quality Rules

- Define validation, completeness, consistency, and uniqueness rules per entity.
- Configure duplicate detection: blocking keys, matching algorithms, thresholds.
- Set up quality scoring and thresholds.
- Implement auto-fix rules for safely automatable corrections.
- **Tool**: erp.ai's Data Quality Rules Engine.
- **Watch out for**: Writing rules that are too strict initially. Start with high-confidence rules and tighten over time based on steward feedback.
- **Output**: Configured and tested quality rules with baseline scores.

### 5. Build Synchronization Pipelines

- Configure inbound pipelines from source systems to the MDM hub (initial load + ongoing sync).
- Configure outbound pipelines from the MDM hub to consuming systems.
- Implement conflict resolution logic.
- Test with production-like data volumes.
- **Tool**: erp.ai's Integration Hub with CDC or API connectors.
- **Watch out for**: Underestimating the volume and frequency of changes. Load test sync pipelines before go-live.
- **Output**: Working sync pipelines with monitoring and alerting.

### 6. Launch Stewardship Operations

- Train stewards on the steward workbench and escalation procedures.
- Process the initial backlog of duplicate candidates and quality issues.
- Establish weekly stewardship stand-ups to review metrics and blockers.
- **Tool**: erp.ai's Steward Workbench.
- **Watch out for**: Dumping thousands of issues on stewards at launch. Prioritize by business impact and triage in manageable batches.
- **Output**: Operational stewardship program with cleared initial backlog.

### 7. Monitor and Improve

- Review quality dashboards weekly (stewards), monthly (domain owners), quarterly (governance council).
- Refine rules based on false positive/negative rates from steward feedback.
- Add new domains incrementally once the first domains are stable.
- Track and communicate business value: reduced duplicates, fewer failed shipments, faster customer onboarding.
- **Tool**: erp.ai's Analytics Designer for quality dashboards.
- **Watch out for**: Declaring victory after initial cleanup. MDM is an ongoing capability, not a one-time project.
- **Output**: Continuous improvement loop with measurable quality trends.

## Decision Guide

### Choosing an MDM Architecture Style

| Situation | Recommended Style |
|---|---|
| New erp.ai deployment, no legacy systems | Centralized |
| Multiple legacy systems, need single view for reporting only | Consolidation |
| Multiple legacy systems, need authoritative data flowing back to sources | Coexistence |
| Highly federated organization, no appetite for centralization | Registry |
| Regulated industry requiring data lineage and control | Centralized or Coexistence |

### Choosing Duplicate Detection Approach

| Situation | Recommended Approach |
|---|---|
| Unique business identifiers exist (tax ID, DUNS) | Exact match on identifier, fuzzy match as fallback |
| Person records (customers, employees) | Jaro-Winkler on names + deterministic on DOB/address + blocking by postal code |
| Product records | N-gram on description + exact match on manufacturer part number |
| Address matching | Standardize first (USPS/postal API), then exact match on standardized form |
| High-volume dataset (>10M records) | Aggressive blocking + probabilistic scoring; avoid O(n^2) comparisons |

### Choosing Sync Pattern

| Situation | Recommended Pattern |
|---|---|
| Real-time requirements, low volume | API-based synchronous sync |
| Near-real-time, moderate to high volume | Pub/Sub with event bus |
| Legacy systems with no API | CDC on database |
| Batch-oriented source systems | Scheduled batch extract and load |
| Bidirectional sync with conflict potential | Pub/Sub with field-level survivorship |

## Common Patterns

### Customer MDM (B2B)

A B2B customer MDM program typically manages a hierarchy: Legal Entity > Account > Site > Contact.

- **Golden record schema**: `Customer` (legal name, tax ID, DUNS, industry, segment) -> `CustomerAccount` (billing entity, payment terms, credit limit) -> `CustomerSite` (address, ship-to, bill-to flags) -> `CustomerContact` (name, role, email, phone).
- **Duplicate detection**: Block by postal code + first 3 chars of name. Match on Jaro-Winkler(name) + exact(tax ID) + fuzzy(address). Auto-merge above 95% confidence; steward review between 80-95%.
- **Survivorship**: CRM wins for name, contact info. ERP wins for tax ID, payment terms. Most recent wins for address.
- **Sync**: CRM creates prospects (inbound to MDM). MDM creates golden record and publishes to ERP, billing, and analytics (outbound). Bidirectional updates with source-priority conflict resolution.

### Product MDM

Product MDM manages the item master across procurement, manufacturing, sales, and logistics.

- **Golden record schema**: `Product` (description, category, UOM, manufacturer, lifecycle status) -> `ProductIdentifier` (SKU, UPC, EAN, manufacturer part number -- one product may have many identifiers) -> `ProductAttribute` (domain-specific attributes like weight, dimensions, hazmat class).
- **Duplicate detection**: Block by category + manufacturer. Match on N-gram(description) + exact(manufacturer part number). Lower auto-merge threshold (90%) because product descriptions vary widely.
- **Survivorship**: PLM/engineering system wins for specifications. Procurement wins for supplier info. Marketing wins for descriptions and images.
- **Reference data**: Product categories, units of measure, hazmat classifications. All managed with lifecycle and cross-reference mappings.

### Initial Data Load Pattern

When launching MDM, the initial load of existing data from source systems follows this sequence:

1. **Extract**: Pull full data from all source systems into a staging area.
2. **Profile**: Run data quality profiling on staged data to understand baseline quality.
3. **Standardize**: Apply formatting rules (address standardization, name parsing, phone formatting).
4. **Match**: Run duplicate detection across all staged records from all sources.
5. **Merge**: Apply survivorship rules to create initial golden records from matched clusters.
6. **Steward review**: Route low-confidence matches and conflicts to stewards.
7. **Load**: Push golden records into the MDM hub. Establish cross-reference links back to source systems.
8. **Publish**: Push golden records to consuming systems. Replace local master data references with golden record IDs.

This process typically takes 2-6 weeks per domain depending on data volume and quality.

## Anti-Patterns

- **"Everyone is a steward" (so no one is)**: When data quality is "everyone's responsibility" without named stewards, accountability dissolves. Every domain needs a specific, named steward with dedicated time allocation (not just added to their existing job).
- **MDM as IT project**: MDM is a business capability enabled by technology. When IT drives MDM without business ownership, the rules are technically correct but business-irrelevant, and adoption fails. Business domain owners must own the program; IT enables it.
- **Big bang MDM**: Trying to bring all master data domains into MDM simultaneously. Start with one domain (usually Customer or Product), prove value, then expand. Each domain takes 3-6 months to mature.
- **Golden record without governance**: Building the technology to create golden records without the governance to maintain them. Quality degrades immediately. MDM without governance is just a fancy database.
- **Over-matching (false merges)**: Setting duplicate detection thresholds too low, causing distinct entities to be incorrectly merged. False merges are far more damaging than false non-merges because they corrupt transactional references. Start conservative and loosen thresholds based on steward feedback.
- **Ignoring data decay**: Master data degrades over time (people move, companies rename, products are discontinued). Without proactive quality monitoring and refresh cycles, the golden record becomes stale. Define freshness SLAs per domain.
- **Synchronous everything**: Requiring real-time, synchronous sync between all systems for all master data changes. This creates fragile, tightly coupled integrations. Use async pub/sub as the default; reserve synchronous sync for fields where immediate consistency is truly required (e.g., credit limit changes).
- **No unmerge capability**: Designing merge as a one-way operation. Incorrect merges happen. If unmerge is impossible, the only remedy is manual data reconstruction, which is slow and error-prone. Always preserve source record identity post-merge.

## Checklist

- [ ] Master data domains identified and prioritized by business impact
- [ ] MDM architecture style selected with documented rationale
- [ ] Canonical data model defined for each in-scope domain
- [ ] Source system field mappings completed and validated
- [ ] Survivorship rules defined per field with source priority documented
- [ ] Duplicate detection configured: blocking keys, algorithms, thresholds
- [ ] Auto-merge and steward-review thresholds tuned on test data
- [ ] Data quality rules implemented for all six dimensions
- [ ] Quality scoring configured at field, record, entity, and domain levels
- [ ] Quality thresholds and SLAs defined and approved by domain owners
- [ ] Reference data sets identified with lifecycle and cross-reference mappings
- [ ] Cross-system synchronization pipelines built and load-tested
- [ ] Conflict resolution strategy defined per field for bidirectional sync
- [ ] Data stewards named with clear role definitions and time allocations
- [ ] Steward workbench configured with queues, escalation paths, and tools
- [ ] Escalation path documented: steward -> domain owner -> governance council
- [ ] Initial data load completed: profile, standardize, match, merge, review
- [ ] Quality dashboards built at executive, domain, and operational levels
- [ ] Governance council established with quarterly review cadence
- [ ] Change control process defined for master data schema changes
- [ ] Unmerge capability tested and operational
- [ ] Business value metrics defined and baseline measurements captured

## erp.ai & Proto

**erp.ai**: Entity deduplication engine, lookup table management, and configurable data quality rules that enforce survivorship and standardization across all master data domains.

**Proto**: Applies survivorship rules during data reconciliation missions, matching and merging records in the REASON phase and retaining golden record patterns in the L3 knowledge graph for consistent resolution across future missions.

## Related

- [Data Modeling](../data-modeling/SKILL.md) -- designing the schemas that master data entities follow
- [Data Migration](../data-migration/SKILL.md) -- migrating master data from legacy systems into the MDM hub
- [Integrations](../integrations/SKILL.md) -- building the sync pipelines between MDM hub and connected systems
- [Security & Roles](../security-roles/SKILL.md) -- controlling who can create, modify, merge, and approve master data
