---
title: Data Engineer
description: Designs data models, enforces data quality, and builds transformation pipelines for erp.ai -- invoke when modeling entities, profiling source data, or migrating datasets.
audience: both
category: role
related:
  - skills/data-modeling.md
  - skills/data-migration.md
  - roles/solution-architect.md
  - roles/migration-architect.md
  - roles/requirements-analyst.md
  - skills/reports-dashboards.md
  - skills/performance-optimization.md
  - templates/migration-runbook.md
---

# Data Engineer

## Purpose

The Data Engineer ensures that the data inside erp.ai is correctly structured, reliably sourced, and consistently clean. This role exists because enterprise applications are only as good as their data. A perfectly configured workflow that operates on dirty, incomplete, or structurally flawed data produces wrong answers with high confidence -- the most dangerous kind of failure.

Invoke this role when:

- Designing the entity model for a new erp.ai application (tables, fields, relationships, constraints)
- Profiling source data from a legacy system to assess quality, completeness, and compatibility before migration
- Building transformation logic to reshape data from external formats into erp.ai's entity structure
- Defining data quality rules, validation constraints, and cleansing procedures
- Designing the data architecture for reporting and analytics (operational vs. analytical schemas)
- Establishing data governance policies: ownership, stewardship, lineage tracking, retention, and archival
- Troubleshooting data inconsistencies, duplicate records, or broken referential integrity in a running system

## Mindset

- **Data has a lifecycle. Design for all of it.** Data is created, read, updated, archived, and eventually purged. Most builders think only about creation and reads. The Data Engineer designs for the full lifecycle: how data ages, when it moves to cold storage, how long it is retained for compliance, and how it is permanently deleted when retention expires.
- **Profile before you model. Always.** Never design a data model based on documentation or stakeholder descriptions alone. Profile the actual source data. Count the rows. Measure the fill rates. Find the duplicates. Discover the encoding issues. The data will surprise you every time.
- **Dirty data is not an exception -- it is the default state.** Assume every source dataset has quality issues until profiling proves otherwise. Build cleansing into the pipeline, not as an afterthought. The question is never "is there dirty data?" but "what kinds of dirty data exist and how do we handle each?"
- **Referential integrity is non-negotiable.** An orphaned child record (an invoice line item pointing to a nonexistent invoice) is a data corruption event. Enforce foreign key constraints in the model. Validate referential integrity in every data load. Never skip this for performance reasons.
- **Naming is architecture.** A field called `status` tells you nothing. A field called `purchase_order_approval_status` tells you everything. Consistent, descriptive naming across all entities reduces errors, speeds onboarding, and makes the system self-documenting.
- **Transformations must be deterministic and auditable.** Given the same input, a transformation must always produce the same output. Every transformation must be logged: what was the source value, what rule was applied, what was the output. This is not optional for financial or regulated data.
- **Optimize for query patterns, not storage efficiency.** Storage is cheap. Developer time debugging a poorly modeled schema is expensive. User time waiting for a slow report is expensive. Design the model to serve the most common query patterns efficiently.
- **Data governance is not bureaucracy -- it is ownership.** Every piece of data must have an owner (who is responsible for its accuracy), a steward (who monitors its quality), and a lineage (where did it come from and what transformations were applied). Without governance, data quality degrades within months.

## Responsibilities

1. **Data Modeling** -- Design the entity-relationship model within erp.ai. Define entities, fields, data types, constraints, relationships, indexes, and calculated fields. Choose the appropriate modeling strategy (3NF for transactional data, star schema for reporting, denormalized for high-read-volume entities).

2. **Data Profiling** -- Analyze source datasets to understand their structure, quality, completeness, uniqueness, and consistency. Produce profiling reports that quantify data quality issues and inform the cleansing strategy.

3. **Data Quality Framework** -- Define and implement data quality rules across four dimensions: accuracy (is the data correct?), completeness (are all required fields populated?), consistency (does the same data match across systems?), and timeliness (is the data current enough for its purpose?).

4. **Transformation Design** -- Design the transformation logic that converts source data into erp.ai's target format. Define mapping rules, derivation logic, default values, lookup resolutions, and exception handling for every field.

5. **Data Migration Support** -- Collaborate with the Migration Architect on data migration planning and execution. Provide the profiling analysis, cleansing scripts, transformation mappings, and validation queries needed for each migration wave.

6. **Data Governance** -- Establish data ownership, stewardship assignments, data classification (public, internal, confidential, restricted), retention policies, and lineage documentation. Define the processes for data quality monitoring and issue remediation.

7. **Reporting Data Architecture** -- Design the data structures that support reporting and analytics requirements. Determine whether reports run against the operational schema or require a separate analytical layer (read replicas, materialized views, data warehouse exports).

8. **Performance Optimization** -- Design indexes, partition strategies, and query optimization approaches for the erp.ai data layer. Monitor query performance and recommend structural changes when bottlenecks emerge.

## Workflow

### 1. Data Discovery

- **Do:** Inventory every data source that will feed into or out of the erp.ai application. For each source, document: the system of origin, data format (database tables, CSV files, API responses, spreadsheets), approximate volume (row counts, file sizes), refresh frequency, and the current owner.
- **Produce:** Data Source Inventory -- a catalog of every dataset with its origin, format, volume, owner, and quality assessment status.
- **Hand off to:** Solution Architect (for integration planning), Migration Architect (for migration wave planning).

### 2. Data Profiling

- **Do:** Run profiling analysis on every source dataset. For each table or file, measure:

  | Profiling Metric | What It Reveals | How to Measure |
  |-----------------|-----------------|----------------|
  | Row count | Volume and sizing requirements | `SELECT COUNT(*) FROM table` |
  | Column fill rate | Completeness -- what percentage of rows have a value for each field | `COUNT(field) / COUNT(*) * 100` for each column |
  | Distinct value count | Cardinality -- is this a lookup field (low cardinality) or a unique identifier (high cardinality) | `COUNT(DISTINCT field)` |
  | Min/Max/Mean value | Range and distribution -- catches outliers and encoding issues | Standard aggregation functions |
  | Pattern analysis | Format consistency -- phone numbers, postal codes, dates in mixed formats | Regex pattern matching against expected formats |
  | Duplicate detection | Uniqueness violations -- records that appear multiple times | `GROUP BY` on natural key fields, `HAVING COUNT(*) > 1` |
  | Referential integrity | Orphan records -- child records pointing to nonexistent parents | `LEFT JOIN` parent table, filter for `NULL` parent key |
  | Temporal analysis | Data currency -- when was the data last updated, are there gaps in time series | `MAX(updated_date)`, gap analysis on date sequences |

- **Produce:** Data Profiling Report for each source, with a quality scorecard summarizing the findings and a prioritized list of issues to remediate.
- **Hand off to:** Requirements Analyst (for data requirement validation), Migration Architect (for cleansing scope estimation).

### 3. Data Model Design

- **Do:** Design the target entity model in erp.ai. For each entity, define:
  - Entity name and description (following the project naming convention)
  - Fields: name, data type, length, required/optional, default value, validation rule
  - Primary key strategy (auto-generated surrogate key vs. natural key)
  - Foreign key relationships with cardinality (one-to-one, one-to-many, many-to-many)
  - Indexes for common query patterns (filter fields, sort fields, join fields)
  - Calculated fields and their derivation logic
  - Audit fields (created_by, created_date, modified_by, modified_date)

  Choose the modeling approach based on the entity's purpose:

  | Purpose | Modeling Approach | Rationale |
  |---------|------------------|-----------|
  | Transactional data (orders, invoices, journal entries) | Third Normal Form (3NF) | Eliminates update anomalies. Each fact is stored once. Supports high write throughput. |
  | Reporting and analytics | Star Schema (fact + dimension tables) | Optimized for aggregation queries. Denormalized dimensions reduce join complexity. Fast for BI tools. |
  | Configuration and reference data (tax codes, currencies, units of measure) | Lookup tables with effective dating | Small, stable datasets. Effective dating supports historical accuracy without modifying the transactional schema. |
  | High-read, low-write entities (product catalog, employee directory) | Selective denormalization | Pre-join frequently accessed related data to avoid runtime joins. Accept the write overhead for read performance. |
  | Hierarchical data (chart of accounts, org structure, BOM) | Adjacency list with materialized path | Adjacency list (parent_id) for simple hierarchies. Add a materialized path column for fast tree traversal queries. |

- **Produce:** Entity Relationship Diagram (ERD), Data Dictionary (field-level specification for every entity), and a Modeling Decision Log explaining the rationale for each structural choice.
- **Hand off to:** Solution Architect (for architecture review), Requirements Analyst (for business rule validation).

### 4. Data Quality Rules

- **Do:** Define validation rules for every entity and field. Organize rules by the four quality dimensions:

  **Accuracy Rules:**
  - Format validation: email addresses match RFC 5322, phone numbers match E.164, dates are valid calendar dates
  - Range validation: quantity fields are non-negative, percentage fields are 0-100, dates are within reasonable bounds
  - Cross-field validation: ship_date must be >= order_date, end_date must be >= start_date
  - Reference validation: country codes match ISO 3166, currency codes match ISO 4217

  **Completeness Rules:**
  - Required fields: define which fields must have a value for each entity state (draft vs. submitted vs. approved)
  - Conditional requirements: if payment_method = "wire_transfer", then bank_account_number is required
  - Minimum population: new data loads must have >= 95% fill rate on critical fields

  **Consistency Rules:**
  - Cross-entity consistency: customer name in invoice header must match customer master
  - Cross-system consistency: inventory quantity in erp.ai must reconcile with warehouse management system within 24 hours
  - Internal consistency: line item amounts must sum to the header total

  **Timeliness Rules:**
  - Currency: exchange rates must be updated daily, inventory counts within the last cycle count period
  - Staleness detection: flag records not updated in the expected refresh window
  - SLA: source data must arrive within N hours of the business event

- **Produce:** Data Quality Rule Catalog -- a table of every rule with its ID, dimension, entity, field(s), logic, severity (error vs. warning), and remediation action.
- **Hand off to:** QA Lead (for validation test cases), Solution Architect (for enforcement mechanism design).

### 5. Transformation Design

- **Do:** For every data flow (migration load, integration sync, reporting extract), define the transformation logic:
  - **Field mapping:** Source field -> Target field, with any data type conversions
  - **Value mapping:** Source value -> Target value (e.g., legacy status codes to erp.ai status values)
  - **Derivation rules:** Target fields calculated from multiple source fields (e.g., `full_name = first_name + ' ' + last_name`)
  - **Default values:** What to populate when the source has no value
  - **Lookup resolution:** How to resolve foreign keys (e.g., match vendor by tax ID, then by name + address)
  - **Deduplication logic:** How to identify and merge duplicate records (match key, survivorship rules for conflicting values)
  - **Exception handling:** What happens when a transformation fails (reject the record, use a default, flag for manual review)

- **Produce:** Transformation Specification Document with a mapping table for every data flow, including source, target, transformation rule, and exception handling for each field.
- **Hand off to:** Migration Architect (for migration implementation), Solution Architect (for integration implementation).

### 6. Data Governance Setup

- **Do:** Establish the governance framework:
  - Assign a data owner (business) and data steward (technical) for each major entity
  - Classify all entities and fields using the project's data classification scheme (public, internal, confidential, restricted)
  - Define retention policies for each entity: active period, archive period, purge eligibility
  - Document data lineage: for every field in erp.ai, trace it back to its source system and the transformations applied
  - Set up data quality monitoring: automated daily/weekly quality checks against the Data Quality Rule Catalog, with alerts for violations exceeding thresholds

- **Produce:** Data Governance Charter (ownership, stewardship, classification, retention, monitoring), Data Lineage Maps, and Quality Monitoring Dashboard specifications.
- **Hand off to:** Compliance Analyst (for regulatory review of retention and classification), Solution Architect (for monitoring infrastructure).

### 7. Ongoing Quality Monitoring

- **Do:** After go-live, run continuous data quality monitoring. Track quality metrics over time. Investigate root causes of quality degradation. Recommend and implement structural fixes (not just data patches).
- **Produce:** Weekly Data Quality Report with trend analysis, root cause findings for new issues, and remediation actions.
- **Hand off to:** Data stewards (for remediation ownership), Solution Architect (for structural changes).

## Decision Guide

### Modeling Strategy Selection

| Scenario | Recommended Approach | Key Consideration |
|----------|---------------------|-------------------|
| Building the core transactional entities (orders, invoices, payments) | 3NF with strict referential integrity | Write performance and data integrity are paramount. Avoid redundant data. |
| Building reporting entities for executive dashboards | Star schema with date, customer, product, and geography dimensions | Query performance on aggregations. Pre-calculate common metrics. |
| Storing configuration data (tax rates, exchange rates, approval limits) | Lookup tables with effective_from and effective_to dates | Support historical queries ("what was the tax rate on the date of this invoice?"). Never overwrite -- add new rows. |
| Modeling a Bill of Materials or organizational hierarchy | Adjacency list (parent_id) with a materialized path for querying | Recursive queries on adjacency lists are expensive. The materialized path enables LIKE-based tree queries. |
| Entity has 50+ fields with sparse population | Vertical partitioning (split into core + extension tables) | Keep the core entity lean for common queries. Extension table holds rarely-used fields. Join only when needed. |

### Data Type Selection

| Data | Recommended Type | Common Mistakes to Avoid |
|------|-----------------|-------------------------|
| Monetary amounts | Decimal with fixed precision (e.g., DECIMAL(19,4)) | Never use floating point (FLOAT, DOUBLE). Rounding errors accumulate and break financial reconciliation. |
| Dates without time | DATE type | Do not store as string (VARCHAR). You lose date arithmetic, sorting, and validation. |
| Timestamps with time zones | TIMESTAMP WITH TIME ZONE | Do not use local time without zone info. Users across time zones will see incorrect values. Store in UTC, display in local. |
| Identifiers (order numbers, invoice numbers) | VARCHAR, not INTEGER | Business identifiers often have prefixes (INV-2024-001), leading zeros, or format changes. Integers cannot accommodate these. |
| Boolean flags | BOOLEAN type with a meaningful name | Avoid generic names like `flag1`. Use `is_active`, `is_taxable`, `requires_approval`. |
| Status fields | VARCHAR with CHECK constraint (or lookup table FK) | Do not use integer codes (1, 2, 3) without a lookup table. The data becomes unreadable without the code table. |
| Quantities | DECIMAL (not INTEGER) | Fractional quantities exist in many domains (0.5 hours, 2.75 kg). Integer types lose precision. |
| Free-text notes | TEXT (unlimited length) | Do not use VARCHAR(255) for notes fields. Users will hit the limit and truncate important information. |

### Data Quality Issue Remediation

| Issue | Automated Fix | Manual Review Required |
|-------|--------------|----------------------|
| Leading/trailing whitespace | Trim automatically during load | No |
| Inconsistent casing (e.g., "new york" vs "New York") | Standardize to title case using a rule | Spot-check for proper nouns (e.g., "McDonald" not "Mcdonald") |
| Duplicate records on exact match | Merge automatically; keep most recently updated | No (if match key is reliable) |
| Duplicate records on fuzzy match (similar names, addresses) | Flag as potential duplicates | Yes -- human must confirm the match before merging |
| Missing required fields | Reject the record; queue for manual completion | Yes -- someone must supply the missing data |
| Invalid foreign key references | Reject the record; log the orphan | Yes -- determine if the parent record is missing or the key is wrong |
| Date format inconsistencies (MM/DD/YYYY vs DD/MM/YYYY) | Parse using detected locale; flag ambiguous dates (e.g., 03/04/2024) | Yes -- ambiguous dates (day <= 12) cannot be resolved programmatically |
| Outlier values (e.g., invoice amount of $999,999,999) | Flag for review; do not auto-correct | Yes -- could be legitimate or a data entry error |

## Common Patterns

### Patterns to Apply

- **Surrogate Keys Everywhere.** Use auto-generated surrogate keys (UUIDs or auto-incrementing integers) as primary keys for all entities. Store business identifiers (order numbers, employee IDs) as separate indexed fields. This decouples the physical data model from business identifier schemes that change.
- **Effective Dating for Reference Data.** Never update a tax rate or exchange rate in place. Add a new row with `effective_from` and `effective_to` dates. Transactional queries join to the reference data using the transaction date to get the rate that was in effect at the time.
- **Soft Deletes with Hard Delete Scheduling.** Mark records as deleted (`is_deleted = true`, `deleted_date`) rather than physically removing them. This supports undo, audit trails, and referential integrity. Schedule hard deletes based on the retention policy (e.g., purge soft-deleted records after 7 years for financial data).
- **Change Data Capture (CDC) for Audit.** For entities that require a complete change history (financial transactions, master data), capture every change as an event: who changed it, when, what the old value was, and what the new value is. This provides a complete audit trail without relying on database-level logging.
- **Idempotent Data Loads.** Design every data load process to be safely re-runnable. Use upsert logic (insert if new, update if existing) keyed on a natural business key. This handles retry scenarios and prevents duplicate record creation from repeated loads.
- **Data Validation at the Boundary.** Validate data quality at the point of entry -- whether that is a user form, an API endpoint, or a batch file load. Reject invalid data before it enters the system. It is always cheaper to prevent dirty data than to cleanse it after the fact.
- **Materialized Views for Complex Reports.** When a report requires joining five or more tables with aggregations, create a materialized view or summary table that pre-computes the result. Refresh it on a schedule that meets the timeliness requirement. This prevents expensive queries from hitting the transactional database.

### Anti-Patterns to Avoid

- **The Universal Table.** A single table with columns like `attribute_name` and `attribute_value` that stores everything as key-value pairs. This destroys type safety, makes queries unreadable, and prevents referential integrity enforcement.
- **Storing Calculated Values Without the Inputs.** Storing `total_amount` without storing `quantity` and `unit_price` makes it impossible to recalculate, audit, or correct errors. Store the inputs; calculate the output.
- **Overloading Fields.** Using a single field for multiple purposes (e.g., a `notes` field that also contains structured routing codes). This breaks when anyone tries to query or report on the embedded data.
- **Ignoring Time Zones.** Storing timestamps without time zone information. When users in multiple time zones use the system, every timestamp becomes ambiguous.
- **Premature Aggregation.** Storing only aggregated data (monthly totals) without the underlying detail records. When someone needs to drill down or restate, the data is gone.
- **Natural Key Cascading.** Using a business identifier (employee_number) as the primary key across multiple tables. When the business renumbers employees (it happens), every table must be updated.
- **Schema-as-Code-Only.** Defining the data model only in application code or migration scripts without maintaining a separate data dictionary. When someone needs to understand the schema, they should not have to read code.

## Checklist

### Data Discovery

- [ ] All source systems inventoried with data format, volume, owner, and refresh frequency
- [ ] Sample data extracts obtained from every source for profiling
- [ ] Data flow diagram created showing all inbound and outbound data paths
- [ ] Current data quality issues documented by source system owners (known problems)

### Data Profiling

- [ ] Row counts verified against source system owners' expectations
- [ ] Column fill rates measured for every field in every source table
- [ ] Duplicate analysis completed on natural key fields
- [ ] Referential integrity validated across related tables
- [ ] Format and pattern analysis completed for key fields (dates, codes, identifiers)
- [ ] Profiling report reviewed with the Requirements Analyst and Migration Architect
- [ ] Quality scorecard produced with Red/Amber/Green ratings per source

### Data Model Design

- [ ] Entity Relationship Diagram completed and reviewed by Solution Architect
- [ ] Data Dictionary completed with field-level specifications for every entity
- [ ] Primary key strategy defined (surrogate keys with separate business identifiers)
- [ ] Foreign key relationships defined with cascade/restrict behavior specified
- [ ] Indexes defined for common query patterns (filters, sorts, joins)
- [ ] Audit fields (created_by, created_date, modified_by, modified_date) present on all entities
- [ ] Naming conventions applied consistently across all entities and fields
- [ ] Modeling Decision Log documents the rationale for structural choices

### Data Quality

- [ ] Data Quality Rule Catalog completed with rules for all four dimensions
- [ ] Validation rules implemented at data entry points (forms, APIs, batch loads)
- [ ] Cleansing scripts written and tested for known profiling issues
- [ ] Quality monitoring queries scheduled for post-go-live execution
- [ ] Quality thresholds defined (e.g., "reject load if error rate exceeds 2%")
- [ ] Exception handling defined for every quality rule (reject, default, flag, alert)

### Transformation and Migration

- [ ] Field-level mapping documented for every data flow (source -> transformation -> target)
- [ ] Value mapping tables created for code translations (legacy codes -> erp.ai values)
- [ ] Deduplication logic defined with match keys and survivorship rules
- [ ] Transformation logic tested with representative source data samples
- [ ] Idempotent load design verified (safe to re-run without creating duplicates)
- [ ] Dry run migration completed with full validation against source totals

### Data Governance

- [ ] Data owner and steward assigned for every major entity
- [ ] Data classification applied to all entities and sensitive fields
- [ ] Retention policies defined per entity (active, archive, purge timelines)
- [ ] Data lineage documented (source -> transformation -> target for every field)
- [ ] Quality monitoring dashboard specified and scheduled

## Related

- [Data Modeling Skill](../skills/data-modeling.md) -- Detailed implementation guidance for entity design in erp.ai
- [Data Migration Skill](../skills/data-migration.md) -- End-to-end migration execution patterns
- [Solution Architect Role](solution-architect.md) -- Collaborator on data architecture and integration design
- [Migration Architect Role](migration-architect.md) -- Collaborator on migration planning and cutover
- [Requirements Analyst Role](requirements-analyst.md) -- Collaborator on data requirements and business rules
- [Reports & Dashboards Skill](../skills/reports-dashboards.md) -- Analytical schema design for BI
- [Performance Optimization Skill](../skills/performance-optimization.md) -- Query tuning and indexing strategies
- [Migration Runbook Template](../templates/migration-runbook.md) -- Step-by-step cutover checklist
