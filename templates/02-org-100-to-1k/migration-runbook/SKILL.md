---
name: migration-runbook
description: This template should be used when executing data migrations at an organization of 100-1,000 employees — formal multi-phase ETL runbook covering enterprise platforms, multi-entity data, integrations, parallel runs, reconciliation, and rollback. For material platform migrations (ERP, CRM, HCM).
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  size_tier: 02-org-100-to-1k
  type: template
  scope: internal
---
# Migration Runbook — 100 to 1,000 People

## Purpose

At mid-market, data migrations are **multi-month, multi-million-dollar, multi-workstream efforts** — migrating to NetSuite, Workday, Salesforce Enterprise, UKG, or similar. Data volumes are 10–1,000× small-org (millions of records, multi-entity, multi-currency, deep historical requirements for audit + compliance). Risks are material: a botched migration reported to a public-company auditor is a restatement event; a sales-team migration losing pipeline means revenue miss.

The runbook is **the single source of truth** orchestrating extract, transform, load, validate, cutover, and decommission across data objects + integrations + users. Enterprise complexity without enterprise scale — hence formal but not overwhelming.

## Structure

Runbook phases:

1. **Discovery** (weeks 1–4): Source inventory, mapping, strategy
2. **Build** (weeks 5–12): Migration tooling + logic
3. **Test** (weeks 13–16): Multiple test migrations + validation
4. **Cutover** (days 1–3 of go-live weekend): Production migration
5. **Hypercare** (weeks 17–20): Post-migration validation + fix
6. **Decommission** (months 4–6): Source retirement

Typical total duration: 4–6 months for enterprise-class platform migration.

## Phase 1: Discovery

### Source Inventory
- [ ] **Data assets catalog** — every source system + object + field
- [ ] **Record-count baselines** — per object per entity per year
- [ ] **Data-quality assessment** — duplicates, nulls, outliers, corrupt data
- [ ] **Business-rule documentation** — implicit rules encoded in source behavior
- [ ] **Historical-data retention requirements** — legal + audit + business
- [ ] **Regulatory requirements** — GDPR data-mapping, SOX audit-trail, HIPAA PHI handling

### Target System Review
- [ ] **Target schema documentation** — field structure, required fields, validation rules
- [ ] **Integration architecture** — target system's APIs + data-model
- [ ] **Capacity planning** — target system sized for our volumes

### Migration Strategy
- [ ] **Approach decision** — big-bang vs. phased vs. parallel-run
- [ ] **Data scope decision** — active records only, 1-year history, full history
- [ ] **Historical data strategy** — migrate to target, archive read-only, or drop
- [ ] **Multi-entity considerations** — subsidiaries, currencies, tax-jurisdictions
- [ ] **Dependencies mapped** — what must happen first

## Phase 2: Build

### Mapping Documentation
- [ ] **Source-to-target field mapping** per object — complete + reviewed + signed off
- [ ] **Transformation logic** documented — filter rules, enrichment, derived fields
- [ ] **Gap decisions** — fields with no target; drop, create custom field, or archive-only

### Migration Tooling
- [ ] **Tool selected** — vendor migration service, ETL platform (Matillion, Fivetran+custom, Informatica), bespoke scripts
- [ ] **Environments** — source connector + transformation + target load configured
- [ ] **Version control** — migration code + mapping docs under Git
- [ ] **Monitoring + logging** — every record traceable end-to-end

### Integration Handling
- [ ] **Dependent integrations** inventoried — what feeds data into target?
- [ ] **Integration cutover plan** — for each, sequence of connection change
- [ ] **Dual-write or pause?** — decisions per integration

### Data Cleansing
- [ ] **Cleansing workstream** run in parallel — dedupe, standardize, archive stale
- [ ] **Business-owner sign-off** on cleansing rules
- [ ] **Unresolvable data** — logged + decision per exception

## Phase 3: Test

### Sandbox Migration
- [ ] **Test migration #1** — full data, sandbox target
- [ ] **Record counts** match source → target
- [ ] **Field-level validation** — sample 100 records per object; field-by-field match
- [ ] **Business-rule validation** — totals reconcile (AR, AP, revenue, headcount, GL trial balance)
- [ ] **Data-quality validation** — target system accepts all records (validation-rule compliance)

### UAT + Parallel Run
- [ ] **UAT migration #2** — test users run real workflows with migrated data
- [ ] **Parallel-run period** — source + target both operating for defined period
- [ ] **Reconciliation** — daily / weekly comparison of source vs target
- [ ] **Issue log** — defects + resolution status

### Cutover Rehearsal (Dress Rehearsal)
- [ ] **Full cutover rehearsal** — mock production migration end-to-end
- [ ] **Timing validated** — cutover fits within planned window (typically weekend)
- [ ] **Rollback rehearsal** — revert procedure tested

## Phase 4: Cutover (Go-Live Weekend)

### Hour-by-Hour Runbook

Typical 48–72 hour window. Example structure:

- **Friday 5 PM**: Source system freeze — read-only mode
- **Friday 5-8 PM**: Final data validation on source
- **Friday 8-midnight**: Extract all data from source
- **Saturday 0-8 AM**: Transform + validate in ETL
- **Saturday 8-noon**: Load to target production
- **Saturday noon-5 PM**: Validation (counts, samples, totals)
- **Saturday 5 PM**: Go / no-go checkpoint
- **Saturday 6 PM**: Integrations re-pointed (if go)
- **Saturday 7-9 PM**: Integration validation
- **Sunday 9 AM**: User access enabled (limited group)
- **Sunday morning**: Limited user validation
- **Sunday afternoon**: All-user access
- **Sunday evening**: All-hands verification
- **Monday morning**: Normal business operations on target

### Go / No-Go Decision Points
- After extract: data quality acceptable?
- After load: validation passing?
- After integration: end-to-end working?
- Each decision point has defined criteria + authority.

### Communication
- **Internal status updates** — hourly during cutover
- **User communication** — go-live announcement with day-1 support info
- **Executive updates** — each major milestone

## Phase 5: Hypercare

- [ ] **Daily issue triage** meeting (first week)
- [ ] **Data-quality monitoring** — target system integrity checks ongoing
- [ ] **Reconciliation reports** — target vs. archived source, weekly for first month
- [ ] **User-feedback channel** — open + actively monitored
- [ ] **Issue-resolution SLA** — defined per severity
- [ ] **Weekly status** to steering committee
- [ ] **30-day post-mortem** with documented lessons

## Phase 6: Decommission

- [ ] **Source system retained read-only** for 60–180 days
- [ ] **Final archive** — complete source-system export + indexed for future reference
- [ ] **Compliance + audit** — archive validated for SOX / GDPR / HIPAA retention requirements
- [ ] **Subscription canceled** — source vendor contract terminated per notice period
- [ ] **Knowledge transfer** — any source-system expertise documented for historical lookup

## Rollback Triggers

Rollback if within 24–72 hours of cutover:

- **Data corruption** affecting >1% of records, unrecoverable
- **Financial totals** unreconcilable (critical for public-company-track + regulated entities)
- **Critical integration failure** unrecoverable within defined window
- **Customer-facing disruption** revenue-impacting
- **Legal / compliance breach** surfaces

Rollback = return to source (still read-only) as source-of-truth; target cleanup; formal incident post-mortem; re-plan.

## Common Mistakes

- **Underestimating discovery phase**: Jumped to build; surprises surface at test.
- **Insufficient test migrations**: "We tested once." Need 3+ test migrations with increasing realism.
- **Parallel-run period skipped**: Skips chance to validate target in real business conditions.
- **Business-owner sign-off missing**: Data cleansing rules applied without business approval; wrong outcomes.
- **Historical data undersized**: Decided to migrate only 2 years of history; tax audit 3 years later reveals gap.
- **Integration-cutover timing**: Source and target both touching same integration; conflicts.
- **Reconciliation limited to counts**: Counts match but totals don't. Financial reconciliation is essential.
- **Rollback-not-tested**: Untested rollback = no rollback. Test.
- **Executive-comm plan thin**: Board + customers surprised; trust damaged.
- **Hypercare underplanned**: Project demobilized too fast; issues backlog.

## Output Deliverables

1. **Migration Runbook** (living document)
2. **Data Mapping Sheet** (source → target, per object)
3. **Transformation Logic Documentation**
4. **Test Migration Results** (counts, samples, reconciliation)
5. **Cutover Hour-by-Hour Playbook**
6. **Rollback Procedure** (tested)
7. **Hypercare Issue Log + Resolution Tracking**
8. **Post-Mortem Report** (30 days post-migration)

## Related

- [Fit-Gap Matrix](../fit-gap-matrix/SKILL.md) — platform selection
- [Go-Live Checklist](../go-live-checklist/SKILL.md) — go-live coordination
- [Requirements Traceability](../requirements-traceability/SKILL.md) — requirements validation
- [Small-Org Migration Runbook (<100 people)](../../01-org-under-100/migration-runbook/SKILL.md)
- [Enterprise Migration Runbook (1k+)](../../03-org-1k-plus/migration-runbook/SKILL.md)
