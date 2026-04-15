---
title: Data Migration
description: Plan and execute data migration from legacy systems into erp.ai -- use when performing source discovery, data profiling, field mapping, transformation, loading, validation, reconciliation, and cutover execution.
audience: both
category: skill
related:
  - skills/data-modeling.md
  - skills/integrations.md
  - skills/security-roles.md
---

# Data Migration

## Purpose

Data migration is the process of moving data from one or more legacy systems into erp.ai. It is typically the highest-risk activity in an enterprise implementation. Data migration failures cause go-live delays, financial reporting errors, regulatory violations, and user distrust.

Builders need this skill when:

- Replacing a legacy ERP, CRM, or HR system with erp.ai
- Consolidating multiple systems into a single erp.ai instance (M&A, standardization projects)
- Loading historical data for reporting continuity (prior-year financials, customer history)
- Onboarding a new tenant in a multi-tenant SaaS deployment
- Performing a one-time bulk data import from spreadsheets, databases, or files

The core challenge: legacy data is dirty, inconsistent, undocumented, and structured differently than the target. Migration is not just moving data -- it is cleaning, transforming, and validating it against the new system's rules.

## Key Concepts

### Migration Lifecycle

Data migration follows a structured lifecycle. Skipping phases leads to failures.

```
Discovery -> Profiling -> Mapping -> Transformation -> Loading -> Validation -> Reconciliation -> Cutover
```

Each phase produces artifacts that feed the next. The lifecycle is iterative -- expect 3-5 full test cycles before production cutover.

### Discovery (Source System Inventory)

Discovery answers: "What data exists, where does it live, and who owns it?"

Artifacts to produce:

- **Source system inventory**: List every system that holds data to be migrated. Include the system name, technology (Oracle DB, SQL Server, flat files, Excel), data owner (business contact), and technical contact.
- **Entity inventory**: For each source system, list the tables/objects/files that contain migration-relevant data. Note row counts.
- **Data dictionary**: Document each field's name, data type, description, and sample values. Legacy systems often lack documentation, so this requires reverse engineering.
- **Dependency map**: Which entities reference other entities? What is the load order? (e.g., Customers must be loaded before Orders.)

### Profiling (Data Quality Assessment)

Profiling answers: "How good is this data? What problems will we encounter?"

Key profiling activities:

- **Completeness**: What percentage of records have values for each field? A "required" field in the target with 40% nulls in the source is a problem.
- **Uniqueness**: Are supposed-to-be-unique fields actually unique? Duplicate customer IDs, duplicate employee numbers.
- **Validity**: Do values conform to expected formats? Dates stored as strings in inconsistent formats (MM/DD/YYYY vs DD-Mon-YY). Phone numbers with and without country codes.
- **Consistency**: Are the same real-world entities represented the same way? "IBM", "I.B.M.", "International Business Machines" -- all the same customer.
- **Referential integrity**: Do foreign key references point to existing records? Orphaned order lines pointing to deleted products.
- **Outliers**: Extreme values that may indicate data entry errors. An invoice for $999,999,999.99.

Profiling tools: erp.ai's Data Profiler, SQL queries against source databases, or tools like Informatica Data Quality, Talend, Trifacta.

**Output**: Data Quality Report with issue counts, severity ratings, and remediation recommendations.

### Mapping (Source-to-Target)

Mapping answers: "Which source field goes to which target field, and what happens in between?"

A mapping specification is a table with these columns:

| Column | Description |
|---|---|
| Target Entity | The erp.ai entity (e.g., `Customer`) |
| Target Field | The erp.ai field (e.g., `customer_name`) |
| Source System | Which source system provides this data |
| Source Table/File | The source table or file name |
| Source Field | The source column or position |
| Transformation Rule | How to convert source to target (direct copy, lookup, concatenation, default value, derived) |
| Data Type Mapping | Source type -> Target type (e.g., `VARCHAR(100)` -> `string`) |
| Default Value | Value to use when source is null or missing |
| Notes | Edge cases, business rules, open questions |

Mapping requires close collaboration between:

- **Business SMEs**: Know what the data means and what the target should look like.
- **Technical team**: Know how to extract and transform the data.
- **Data owners**: Approve decisions about defaults, deduplication, and data cleansing.

### Transformation Rules

Transformations convert source data to match target requirements.

| Transformation Type | Example |
|---|---|
| **Direct copy** | Source `first_name` -> Target `first_name` (no change) |
| **Concatenation** | Source `first_name` + " " + `last_name` -> Target `full_name` |
| **Lookup/Translation** | Source `country_name` = "United States" -> Target `country_code` = "US" (via lookup table) |
| **Date reformatting** | Source `"03/15/2024"` -> Target `2024-03-15` (ISO 8601) |
| **Default value** | Source `payment_terms` is null -> Target `payment_terms` = "Net 30" |
| **Derivation** | Target `line_total` = Source `quantity` * Source `unit_price` |
| **Deduplication** | Multiple source records for same customer merged into one target record (match on name + tax ID) |
| **Splitting** | Source `address` (single field) -> Target `street`, `city`, `state`, `zip` (parsed) |
| **Enrichment** | Source provides `zip_code`; target also needs `state` (looked up from zip code reference) |
| **Filtering** | Exclude records where `status = "Archived"` or `last_activity_date < 2015-01-01` |

### Loading Strategies

| Strategy | How It Works | When to Use |
|---|---|---|
| **Full load (bulk insert)** | Truncate target, load all records from scratch. | Initial load. Small-to-medium datasets. Clean-slate approach. |
| **Upsert (merge)** | Insert new records, update existing ones based on a match key. | Incremental loads. Delta migrations during parallel run. |
| **Incremental (CDC)** | Only load records that changed since last load (using timestamps or change data capture). | Ongoing synchronization during parallel run period. |
| **Staged load** | Load into a staging area first, run validation, then promote to production tables. | Complex transformations. Any production migration. Always recommended. |

**erp.ai recommendation**: Always use staged loads. Load data into erp.ai's staging tables, run validation rules, review exception reports, then promote to production. Never load directly into production entities.

Load order matters. Respect entity dependencies:

1. Reference data first (countries, currencies, units of measure, chart of accounts)
2. Master data next (customers, vendors, products, employees)
3. Transactional data last (orders, invoices, journal entries, time records)
4. Cross-references and associations last (M:N junction records)

### Validation

Validation answers: "Did the data land correctly in the target?"

Validation levels:

- **Technical validation**: Did the load complete without errors? Record counts match? No constraint violations?
- **Field-level validation**: Do values conform to target field rules (types, formats, ranges, required fields)?
- **Business rule validation**: Do records satisfy business logic? "Every Sales Order has at least one line item." "GL journal entries balance to zero." "Employee start date is before termination date."
- **Cross-entity validation**: Do references resolve? "Every Order Line references a valid Product." "Every Journal Entry references a valid Account."

### Reconciliation

Reconciliation answers: "Does the target match the source?"

Reconciliation checks:

- **Record count reconciliation**: Source has 50,000 Customers; target has 50,000 Customers. If not, explain the delta (filtered, merged, rejected).
- **Financial reconciliation**: Sum of invoice amounts in source = sum in target. Trial balance matches. This is the most critical check for financial data.
- **Checksum reconciliation**: Hash key fields and compare source vs target hashes for a random sample.
- **Visual spot-check**: Business users manually verify a sample of records by comparing source screens to target screens.

Document all reconciliation results with sign-off from the data owner.

### Cutover Execution

Cutover is the production migration event. It has a narrow time window (often a weekend) and must be meticulously planned.

Cutover runbook should include:

1. **Pre-cutover**: Freeze source system (no new transactions). Take source backup. Communicate blackout period to users.
2. **Extract**: Run final data extracts from source systems.
3. **Transform and Load**: Execute migration scripts against production target. Use the same scripts tested in rehearsals.
4. **Validate**: Run all validation and reconciliation checks against production data.
5. **Go/No-Go Decision**: Checkpoint with stakeholders. If validation fails, execute rollback plan.
6. **Post-cutover**: Enable user access to new system. Monitor for issues. Keep source system available (read-only) for reference.
7. **Hypercare**: Dedicated support team for 2-4 weeks post-cutover to handle data issues.

## Workflow

### 1. Plan the Migration

- Identify all source systems and data owners.
- Estimate data volumes (row counts, storage size).
- Define the migration scope: what data is in scope, what is excluded, what is the historical cutoff.
- Choose the migration strategy (big bang, phased, or parallel run -- see Decision Guide).
- Build the project timeline with 3-5 test cycles before production cutover.
- **Tool**: Project plan (MS Project, Jira, erp.ai's Migration Planner).
- **Watch out for**: Underestimating the time for data cleansing. It typically takes 40-60% of the total migration effort.
- **Output**: Migration plan with scope, timeline, and resource assignments.

### 2. Discover and Profile Source Data

- Extract data dictionaries from source systems.
- Run profiling queries/tools to assess data quality.
- Document all data quality issues with severity and remediation options.
- Present the Data Quality Report to business stakeholders for decisions (cleanse in source vs cleanse during migration vs accept as-is).
- **Tool**: erp.ai Data Profiler, SQL queries, Informatica/Talend.
- **Watch out for**: Source system documentation being outdated or non-existent. Trust the data, not the docs.
- **Output**: Source system inventory, data dictionary, Data Quality Report.

### 3. Build the Mapping Specification

- For each target entity/field, identify the source and transformation rule.
- Resolve ambiguities with business SMEs (e.g., "Which source system is the golden record for customer addresses?").
- Document defaults for missing values.
- Document filtering rules for excluded records.
- **Tool**: Mapping spreadsheet or erp.ai's Migration Mapper.
- **Watch out for**: One-to-many mappings where multiple source systems feed the same target. Define precedence rules.
- **Output**: Mapping specification document, approved by business SMEs and data owners.

### 4. Build and Test Migration Scripts

- Write extraction scripts for each source system.
- Write transformation scripts implementing the mapping specification.
- Write load scripts targeting erp.ai's staging tables.
- Write validation scripts (count checks, sum checks, business rule checks).
- Run Test Cycle 1 with a subset of data. Review results. Fix issues. Repeat.
- **Tool**: erp.ai's Migration Toolkit (extract, transform, load, validate modules). SQL, Python, or ETL tools for complex transformations.
- **Watch out for**: Scripts that work on a sample but fail on full volume (memory, timeout, duplicate key errors).
- **Output**: Migration scripts, test cycle results.

### 5. Execute Test Cycles (Rehearsals)

- Run full end-to-end migration rehearsals (minimum 3, ideally 5).
- Each rehearsal uses a fresh target environment.
- Measure execution time (must fit within cutover window).
- Run all validation and reconciliation checks.
- Have business users perform User Acceptance Testing (UAT) on migrated data.
- Track defects and resolve between cycles.
- **Tool**: erp.ai sandbox environments. Defect tracker.
- **Watch out for**: Rehearsals that "pass" because business users did not actually validate. Require sign-off with specific test scripts.
- **Output**: Rehearsal results, defect log, reconciliation reports, execution timing.

### 6. Execute Production Cutover

- Follow the cutover runbook step-by-step.
- Communicate blackout window to all stakeholders.
- Execute extract, transform, load, validate, reconcile.
- Hold the go/no-go meeting with data owners and project sponsors.
- If go: enable user access, begin hypercare.
- If no-go: execute rollback plan, schedule next cutover attempt.
- **Tool**: Cutover runbook, war room communication (Teams/Slack channel), erp.ai production environment.
- **Watch out for**: Last-minute source system changes. Freeze the source system before extraction begins.
- **Output**: Production data in erp.ai, signed reconciliation reports, hypercare team activated.

### 7. Hypercare and Cleanup

- Monitor production data for 2-4 weeks post-cutover.
- Track and resolve data issues reported by end users.
- Run daily reconciliation reports for the first week.
- Decommission source system access (or set to read-only) after hypercare period.
- Document lessons learned.
- **Tool**: Issue tracker, reconciliation dashboards, user feedback channels.
- **Watch out for**: Users reverting to the old system "because the data looks wrong." Investigate every complaint promptly.
- **Output**: Clean production data, closed issue log, lessons learned document.

## Decision Guide

### Big Bang vs Phased vs Parallel Run

| Strategy | How It Works | When to Use | Risks |
|---|---|---|---|
| **Big Bang** | All data migrated at once during a single cutover weekend. Old system turned off Monday morning. | Small-to-medium data volume. Simple source landscape (1-2 systems). Strong testing confidence. | All-or-nothing. If it fails, rollback is the only option. High stress. |
| **Phased** | Migrate one module or entity group at a time (e.g., Finance first, then HR, then Supply Chain). Old system runs for un-migrated modules. | Large, complex implementations. Reduces risk per phase. | Requires integration between old and new systems during transition. Longer total timeline. |
| **Parallel Run** | Both old and new systems run simultaneously for a period. Same transactions entered in both. Results compared. | Regulated industries (banking, insurance). When data accuracy is critical and must be proven. | Most expensive. Doubles workload for users during parallel period. Requires reconciliation. |

**Default recommendation**: Use **phased** for large implementations, **big bang** for smaller ones. Use **parallel run** only when regulators or auditors require it.

### When to Cleanse Data in Source vs During Migration

| Factor | Cleanse in Source | Cleanse During Migration |
|---|---|---|
| Source system will continue to be used | Yes -- fix it where it lives | Not necessary |
| Source system is being decommissioned | Wasted effort | Yes -- cleanse as you transform |
| Data owners available to validate source changes | Yes | May not need them for rule-based cleansing |
| Cleansing is rule-based (format correction, default fill) | Either works | Yes -- apply in transformation scripts |
| Cleansing requires human judgment (deduplication, merge decisions) | Yes -- business users work in familiar system | Harder -- users must review in staging |

### How to Handle Historical Data

| Business Need | Approach |
|---|---|
| Users need to query historical transactions in the new system | Migrate with full detail |
| Users need historical summaries but not line-level detail | Migrate aggregated balances (opening balances, summary records) |
| Regulatory retention requires data preservation but not in-app access | Archive to a data warehouse or cold storage, not the operational system |
| No business or regulatory need for history | Do not migrate. Capture opening balances only. |

**Rule of thumb**: Migrate the minimum history needed. Each year of transactional history dramatically increases migration complexity, load time, and storage.

### Parallel Run Operations

In a parallel run, both the legacy system and erp.ai process the same transactions simultaneously for a defined period. The goal is to prove that erp.ai produces identical results before cutting over.

**Dual-Write Strategies**:

- **Manual dual entry**: Users enter the same transaction in both systems. Most expensive in labor but produces the cleanest test because each system processes the transaction independently. Used in regulated industries (banking, insurance) where auditors require proof of system equivalence.
- **Primary-with-replication**: Users enter transactions in one system (typically the legacy system during early parallel run, then erp.ai in later phases). An integration replicates the transaction to the other system. Reduces user burden but introduces integration complexity -- if replication fails, the parallel run comparison is invalid.
- **Shadow mode**: erp.ai receives a copy of all transactions but its outputs are not used for business operations. The legacy system remains the system of record. erp.ai outputs are compared against legacy outputs for validation only. Lowest risk but requires the integration to shadow all relevant transaction types.

**Reconciliation During Parallel Run**: Run daily reconciliation comparing key outputs:

- Financial: Trial balance, AR aging, AP aging, bank reconciliation figures.
- Operational: Inventory levels, open order counts, headcount.
- Timing: Some differences are expected due to processing order. Reconciliation must account for in-flight transactions. Define a reconciliation window (e.g., "compare balances as of 6pm after both systems have processed all day's transactions").

**Conflict Resolution**: During dual-write, the same record may be modified in both systems. Define which system wins:

- During early parallel run: legacy system is authoritative. erp.ai discrepancies are investigated and corrected.
- During late parallel run: erp.ai becomes authoritative. Legacy discrepancies are expected and documented.
- Never leave conflict resolution ambiguous. Document the authority hierarchy before the parallel run begins.

**Cutover Criteria**: Define objective, measurable criteria that must be met before ending the parallel run and cutting over to erp.ai exclusively:

- Financial reconciliation variance below threshold (e.g., < $0.01 per account for 5 consecutive business days).
- Zero data loss in replication (100% of transactions from primary appear in secondary).
- User acceptance: key business users confirm that erp.ai outputs are correct and complete.
- Performance: erp.ai meets SLA targets under parallel run load.
- Minimum parallel run duration met (typically 1-2 full business cycles -- e.g., 2 month-end closes).

### Timezone and Calendar Complexity

Enterprise migrations across geographies must handle the full complexity of human timekeeping. This is a frequent source of subtle, hard-to-detect data corruption.

**Timezone Conversions**: Legacy systems may store timestamps in local time without timezone information, in a single corporate timezone, or in UTC. The target must be consistent.

- Determine each source system's timezone convention. This is often undocumented -- test by comparing timestamps with known real-world events.
- Convert all timestamps to UTC for storage in erp.ai. Store the original timezone as metadata if the local time has business meaning (e.g., "the transaction was entered at 5pm local time" matters for cutoff rules).
- Beware of ambiguous timestamps: "2024-11-03 01:30:00" in US Eastern time is ambiguous -- it occurred twice due to DST fall-back. If the source does not store offset, you cannot resolve this deterministically. Document the assumption (e.g., "assume standard time for ambiguous timestamps").

**DST Edge Cases**:

- Durations calculated across DST boundaries can be off by an hour. A 24-hour SLA that starts at 2024-03-09 23:00 EST should end at 2024-03-10 23:00 EDT, not 2024-03-11 00:00 EDT.
- Scheduled jobs set to run at "2:30 AM" will skip on spring-forward day (2:30 AM does not exist) and may run twice on fall-back day. Convert scheduled times to UTC to avoid this.
- Date-only fields (`DATE` type) are generally timezone-safe but become problematic when a legacy system stores a datetime and the migration truncates to a date -- which timezone's date? A transaction at 2024-01-15 23:00 EST is 2024-01-16 04:00 UTC. Truncating to date gives different results depending on whether you truncate before or after timezone conversion.

**Fiscal Calendar Mapping**: Many organizations use fiscal years that do not align with calendar years. A company with a fiscal year starting April 1 calls January 2025 "Fiscal Month 10 of FY2025." Legacy systems may store fiscal period codes that must be translated to erp.ai's fiscal calendar configuration.

- Map every source fiscal period to the target fiscal calendar. Watch for: fiscal years that changed mid-history (the company once had a June fiscal year-end but switched to December), 13-period fiscal calendars (4-4-5, 4-5-4, or 5-4-4 week patterns), and non-standard fiscal period adjustments.

**Historical Date Normalization**: Legacy data may contain dates in dozens of formats, embedded in free-text fields, or stored as integers (Excel serial dates, Unix timestamps, Julian dates). Build a comprehensive date parsing library that handles all observed formats and log every date that cannot be parsed for manual review.

### Performance Tuning for Large Volumes

Migrations of 100M+ records require deliberate performance engineering. The difference between a naive load and an optimized one can be 10-50x in elapsed time.

**Batch Sizing Optimization**: Inserting one record at a time is catastrophically slow. Inserting 10 million records in a single transaction risks memory exhaustion and rollback. Find the optimal batch size empirically:

- Start with batches of 1,000 records. Measure throughput (records/second).
- Double the batch size and measure again. Continue until throughput plateaus or degrades.
- Typical sweet spot: 1,000-10,000 records per batch, depending on record size and database engine.
- Commit after each batch. This limits rollback scope and allows progress tracking.

**Parallel Loading Strategies**: Split the dataset into partitions and load partitions concurrently:

- Partition by a natural key that distributes evenly (e.g., `customer_id MOD 8` for 8 parallel workers).
- Ensure partitions do not create FK conflicts (do not load an order and its line items in separate parallel streams if the line items reference the order).
- Monitor database CPU and I/O during parallel load. If the database saturates at 4 parallel streams, adding an 8th stream will not help -- it will increase contention.

**Index Management During Loads**: Indexes dramatically slow bulk inserts because each insert must update every index.

- For initial (full) loads: drop non-essential indexes before loading, load data, then recreate indexes. Keep primary keys and unique constraints active to catch data quality issues.
- For incremental loads: keep indexes in place (the overhead is acceptable for smaller volumes).
- Rebuilding indexes after a large load is faster than maintaining them during the load. A 10M-row load with 5 indexes can be 3-5x faster with the drop-load-rebuild approach.

**Bulk API Patterns**: When loading via erp.ai's API rather than direct database access:

- Use the Bulk Import API endpoint, not individual record creation endpoints. The Bulk API accepts arrays of records (typically up to 200 per request) and processes them in a single database transaction.
- Respect rate limits. Even internal bulk APIs have concurrency limits to protect the platform.
- Use async bulk operations for very large loads: submit a bulk job, receive a job ID, poll for completion. This avoids HTTP timeout issues for operations that take minutes.

**Memory Management**: Large migration scripts frequently fail due to memory exhaustion.

- Stream source data rather than loading entire tables into memory. Use cursor-based reads (database cursors or paginated API calls) to process chunks.
- Release references to processed records. In garbage-collected languages, ensure that processed batches are dereferenced so the GC can reclaim memory.
- Monitor the migration process's memory consumption. Set memory limits and implement graceful failure (checkpoint and stop) when limits are approached.

### Data Lineage During Migration

Migration lineage provides traceability from every target record back to its source, through every transformation applied. This is essential for debugging data issues post-cutover and for regulatory compliance.

**Traceability from Source to Target**: For every record in erp.ai, it must be possible to answer: "Where did this data come from?" Implementation:

- Maintain a cross-reference table: `(target_entity, target_id, source_system, source_table, source_id)`. Populated during the load step.
- For merged records (deduplication), store all contributing source IDs.
- Preserve the cross-reference table permanently (not just during migration). Post-migration support and audit inquiries will reference it for months or years.

**Transformation Audit Trail**: For non-trivial transformations (value translations, calculations, merges), log the transformation applied:

- Input value(s), transformation rule name/ID, output value.
- Store in a migration audit log table, keyed by target record and field.
- This answers the question: "The customer's credit limit in erp.ai is $50,000. Where did that number come from?" The audit trail shows: "Source system A had $30,000, source system B had $50,000, transformation rule 'take maximum' selected $50,000."

**Lineage Metadata Capture**: Beyond record-level lineage, capture migration-run metadata:

- Migration run ID, start/end timestamps, source system version, target schema version, record counts (extracted, transformed, loaded, rejected).
- Link every cross-reference and audit log entry to a migration run ID.
- This enables time-travel: "Show me all records loaded in migration run #47 on March 15" for investigating batch-specific issues.

### Rollback and Recovery

Every migration must have a recovery plan for when things go wrong -- during testing and especially during production cutover.

**Point-in-Time Recovery**: Before every migration run, take a database snapshot or backup of the target environment. If the migration produces unacceptable results, restore to the pre-migration state. Verify that backups are actually restorable (test the restore process during rehearsals, not for the first time during production cutover).

**Partial Rollback Strategies**: Sometimes only a subset of the migration needs to be reversed:

- **Entity-level rollback**: If the Customer load succeeded but the Order load failed, roll back only Orders. This requires that the Order load was isolated (no other entities reference the newly loaded Orders, or references can be cleaned up).
- **Batch-level rollback**: If batch 47 of 100 contained bad data, roll back only batch 47's records. Requires that each batch's records are identifiable (via the migration run ID and batch sequence number stored in the lineage metadata).
- **Field-level rollback**: If a transformation rule produced incorrect values for one field, update only that field from the source data. Requires the transformation audit trail to identify affected records.

**Data Tombstoning**: When rolling back, do not hard-delete the incorrectly migrated records (you may need them for analysis). Instead, mark them with a tombstone flag (`migration_status = 'rolled_back'`, `rolled_back_at`, `rollback_reason`). Reload the corrected data in a subsequent migration run.

**Recovery Time Objectives (RTO)**: Define the maximum acceptable time to recover from a failed migration:

- During test cycles: RTO can be lenient (hours). Restore from snapshot.
- During production cutover: RTO must fit within the cutover window. If the cutover window is 48 hours and the migration takes 12 hours, you need enough time to detect failure, decide to rollback, and execute the rollback (restore from backup) within the remaining 36 hours.
- Measure actual rollback time during rehearsals. If restoring a 500GB database takes 4 hours, that is your rollback floor.

### Data Residency and Sovereignty

Cross-border migrations face legal and regulatory constraints on where data can be stored, processed, and transferred.

**Cross-Border Migration Constraints**: Regulations like GDPR (EU), PIPL (China), LGPD (Brazil), and POPIA (South Africa) restrict the transfer of personal data outside their jurisdictions. Before migrating data across borders:

- Identify which records contain personal data (customer PII, employee records, contact information).
- Determine the data's jurisdiction of origin (based on the data subject's location, not the server's location).
- Verify that the target system's hosting region is compliant. erp.ai's multi-region deployment allows tenants to specify their data residency region.
- If cross-border transfer is necessary, ensure legal mechanisms are in place: Standard Contractual Clauses (EU), binding corporate rules, or consent.

**Data Residency Requirements**: Some data must remain within specific geographic boundaries:

- Configure erp.ai's data residency settings before migration begins. Data loaded into a US-East region cannot be moved to EU-West after the fact without a full re-migration.
- For multi-national organizations, consider whether a single global instance or regional instances are appropriate. A single instance is simpler but may not comply with residency requirements. Regional instances comply but require cross-region integration for consolidated reporting.

**Encryption in Transit During Migration**: Data moving from legacy systems to erp.ai must be encrypted in transit, especially when crossing network boundaries:

- Use TLS 1.2+ for all API-based data transfers.
- Use SFTP (not plain FTP) for file-based transfers.
- For direct database-to-database transfers, use encrypted connections (SSL-enabled database connections).
- For migration scripts running on developer laptops or CI/CD pipelines, ensure that extracted data files are encrypted at rest on the local machine and deleted after loading.
- Log all data transfers with source, destination, timestamp, record count, and encryption method for compliance audit.

## Common Patterns

### Chart of Accounts Migration

- Source: Legacy GL account list with codes, descriptions, and balances.
- Target: erp.ai Account entity with hierarchical structure.
- Key steps: Map legacy account codes to new account codes (use a cross-reference table). Restructure the hierarchy if the new chart of accounts differs. Migrate opening balances as a journal entry on the go-live date. Validate that the trial balance in the new system matches the legacy trial balance to the penny.
- Critical check: Debits = Credits in the opening balance journal entry.

### Customer Master Deduplication

- Problem: Legacy systems have the same customer entered multiple times with slight variations ("Acme Corp", "ACME Corporation", "Acme Corp.").
- Approach: Run fuzzy matching on name + address + tax ID. Group potential duplicates. Present to business users for merge/keep decisions. Assign a "golden record" -- the surviving master record. Map all legacy transactions pointing to non-surviving duplicates to the golden record ID.
- Tool: erp.ai's Deduplication Wizard or external tools (Informatica MDM, Reltio).
- Risk: Incorrect merges lose customer history. Always preserve the original legacy IDs as cross-references.

### Opening Balance Load (Financial)

- Instead of migrating years of transaction history, migrate only the ending balances from the legacy system as opening balances in erp.ai.
- Create a single journal entry per legal entity on the go-live date with all GL account balances.
- Subledger balances (AR, AP, FA) must be loaded as individual open items (unpaid invoices, outstanding payables, active assets) so aging and payment matching work correctly.
- Trial balance reconciliation is mandatory: legacy TB = erp.ai TB, down to the cent.

### Anti-Patterns to Avoid

- **"Lift and Shift"**: Migrating data exactly as-is without cleansing or transformation. You inherit all the legacy system's data quality problems.
- **No Test Cycles**: Going straight to production cutover without rehearsals. Always run at least 3 full-cycle rehearsals.
- **Missing Reconciliation**: Loading data and declaring success without comparing source totals to target totals. Financial data must reconcile to the penny.
- **Ignoring Load Order**: Loading transactions before master data, causing foreign key violations and orphaned records.
- **Over-Migrating History**: Loading 20 years of transaction history when only 2 years are needed. Increases complexity, load time, and storage for minimal business value.
- **Undocumented Transformations**: Transformation logic exists only in scripts with no mapping document. When a field looks wrong in production, nobody knows what the intended mapping was.
- **Single-Threaded Migration**: One person owns the entire migration. Migration requires business SMEs, technical engineers, data owners, and testers working in parallel.

## Checklist

- [ ] Source system inventory completed (systems, contacts, technologies)
- [ ] Data profiling completed with Data Quality Report
- [ ] Data quality issues triaged with remediation plans
- [ ] Migration scope defined (entities in scope, historical cutoff, exclusions)
- [ ] Migration strategy selected (big bang, phased, parallel run)
- [ ] Mapping specification completed and approved by business SMEs
- [ ] Transformation rules documented for every non-trivial mapping
- [ ] Load order defined (reference data -> master data -> transactions -> associations)
- [ ] Staging tables configured in erp.ai
- [ ] Migration scripts developed (extract, transform, load, validate)
- [ ] Validation rules implemented (count checks, sum checks, business rule checks)
- [ ] Reconciliation procedures defined (record counts, financial totals, checksums)
- [ ] Test cycle 1 completed and defects logged
- [ ] Test cycle 2 completed with reduced defect count
- [ ] Test cycle 3 (minimum) completed with business user UAT sign-off
- [ ] Cutover runbook written with step-by-step instructions and timing
- [ ] Rollback plan documented and tested
- [ ] Production cutover executed
- [ ] Reconciliation reports signed off by data owners
- [ ] Hypercare team activated and monitoring
- [ ] Legacy system set to read-only or decommissioned
- [ ] Lessons learned documented
- [ ] Parallel run strategy defined (if applicable) with dual-write approach and reconciliation procedures
- [ ] Timezone conversion rules documented per source system; DST edge cases handled
- [ ] Batch sizing optimized empirically; parallel loading tested without FK conflicts
- [ ] Data lineage captured: cross-reference table, transformation audit trail, migration run metadata
- [ ] Rollback strategy defined with RTO measured during rehearsals
- [ ] Data residency requirements verified; encryption in transit confirmed for all transfer paths

## erp.ai & Proto

**erp.ai**: Bulk import APIs and data mapping tools handle extract, transform, and load operations. Staging tables, validation rules, and reconciliation reports are managed through the platform's migration workspace.

**Proto**: Runs full ORAI cycles for migration missions -- OBSERVE profiles the source system and data quality, REASON selects the migration strategy (big bang vs phased vs parallel run), ACT executes ETL scripts and load operations, and ITERATE reconciles record counts, financial totals, and business rule checks until sign-off thresholds are met.

## Related

- [Data Modeling](data-modeling.md) -- the target schema you are migrating data into
- [Integrations](integrations.md) -- ongoing data synchronization after migration (vs one-time migration)
- [Security & Roles](security-roles.md) -- access control for migration tools, staging data, and production loads
