---
name: migration-runbook
description: This skill should be used when the task involves step-by-step cutover checklist with rollback procedures — use when executing data migration from legacy systems to ERP•AI.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  size_tier: 03-org-1k-plus
  type: template
  scope: internal
---
# Migration Runbook

## Purpose
The Migration Runbook is the minute-by-minute execution plan for moving data from legacy systems into your ERP•AI application. It covers every step from the final extract to post-migration validation, with clear owners, duration estimates, rollback triggers, and communication checkpoints. This is the single source of truth during cutover weekend.

Use this when: you're preparing for or executing a data migration cutover.

## Template Structure

### Runbook Header

| Field | Value |
|-------|-------|
| Project | [Project Name] |
| Migration Window | [Start Date/Time] to [End Date/Time] |
| Cutover Lead | [Name] |
| War Room Location | [Physical/Virtual location] |
| Communication Channel | [Slack channel / Teams / Bridge line] |
| Rollback Deadline | [Point of no return — time after which rollback is no longer viable] |
| Go/No-Go Decision Time | [When the final go/no-go is called] |

### Contact List

| Role | Name | Phone | Availability |
|------|------|-------|-------------|
| Cutover Lead | | | On-site entire window |
| Data Engineer | | | On-call |
| Solution Architect | | | On-call |
| Business Validator | | | Available for validation hours |
| DBA / Infrastructure | | | On-call |
| Executive Sponsor | | | Available for go/no-go |

## Pre-Migration Checklist (T-minus 1 week)

- [ ] All dress rehearsals completed successfully (minimum 2)
- [ ] Dress rehearsal timing documented — total duration fits within migration window
- [ ] Source system data freeze communicated to all users
- [ ] Target environment provisioned and validated (correct version, config, integrations disabled)
- [ ] ETL scripts tested against production-volume data
- [ ] Validation scripts tested and producing correct results
- [ ] Rollback procedure tested in staging
- [ ] Communication templates drafted (start, checkpoints, go/no-go, completion)
- [ ] War room / bridge line set up and tested
- [ ] All team members confirmed availability for migration window
- [ ] Legacy system backup scheduled and verified
- [ ] Target system backup/snapshot capability confirmed

## Cutover Execution Steps

### Phase 1: Preparation (T-0 to T+1h)

| Step | Task | Owner | Duration | Rollback |
|------|------|-------|----------|----------|
| 1.1 | Send "Migration Started" communication to stakeholders | Cutover Lead | 5 min | N/A |
| 1.2 | Disable user access to legacy system (read-only mode) | DBA | 15 min | Re-enable access |
| 1.3 | Take final backup/snapshot of legacy system | DBA | 20 min | N/A |
| 1.4 | Take snapshot of target system (clean state) | DBA | 10 min | Restore snapshot |
| 1.5 | Disable integrations and scheduled jobs in target system | Solution Architect | 10 min | Re-enable |
| 1.6 | Verify target system is in maintenance mode | Solution Architect | 5 min | N/A |

### Phase 2: Extract (T+1h to T+2h)

| Step | Task | Owner | Duration | Rollback |
|------|------|-------|----------|----------|
| 2.1 | Execute final extract from legacy system | Data Engineer | 30 min | Re-extract |
| 2.2 | Validate extract record counts against source | Data Engineer | 15 min | Investigate discrepancy |
| 2.3 | Validate extract file checksums | Data Engineer | 5 min | Re-extract |
| 2.4 | Stage extracted data in landing zone | Data Engineer | 10 min | Clear and re-stage |
| 2.5 | Send "Extract Complete" checkpoint | Cutover Lead | 5 min | N/A |

### Phase 3: Transform & Load (T+2h to T+5h)

| Step | Task | Owner | Duration | Rollback |
|------|------|-------|----------|----------|
| 3.1 | Execute transformation scripts (cleansing, mapping, enrichment) | Data Engineer | 45 min | Re-run from extract |
| 3.2 | Validate transformation output (spot check + automated rules) | Data Engineer | 30 min | Fix and re-transform |
| 3.3 | Load reference data (codes, lookups, hierarchies) | Data Engineer | 20 min | Truncate and reload |
| 3.4 | Load master data (customers, vendors, employees, products) | Data Engineer | 45 min | Truncate and reload |
| 3.5 | Load transactional data (orders, invoices, journal entries) | Data Engineer | 60 min | Truncate and reload |
| 3.6 | Load historical data (if applicable) | Data Engineer | 30 min | Skip — load in Phase 2 |
| 3.7 | Send "Load Complete" checkpoint | Cutover Lead | 5 min | N/A |

### Phase 4: Validation (T+5h to T+7h)

| Step | Task | Owner | Duration | Rollback |
|------|------|-------|----------|----------|
| 4.1 | Run automated record count reconciliation (source vs target) | Data Engineer | 15 min | Investigate |
| 4.2 | Run automated checksum/hash validation on key fields | Data Engineer | 15 min | Investigate |
| 4.3 | Run business rule validation (balances, totals, relationships) | Data Engineer | 30 min | Investigate |
| 4.4 | Business user spot-check validation (sample records) | Business Validator | 45 min | Document issues |
| 4.5 | Validate referential integrity (no orphaned records) | Data Engineer | 15 min | Fix or flag |
| 4.6 | Compile validation results — pass/fail summary | Cutover Lead | 15 min | N/A |
| 4.7 | Send "Validation Complete" checkpoint with results | Cutover Lead | 5 min | N/A |

### Phase 5: Go/No-Go Decision (T+7h)

| Criteria | Status | Threshold |
|----------|--------|-----------|
| Record count reconciliation | Pass/Fail | 100% match on master data, 99.5%+ on transactional |
| Checksum validation | Pass/Fail | 100% match on financial fields |
| Business rule validation | Pass/Fail | Zero critical failures |
| Business user spot-check | Pass/Fail | No blocking issues found |
| Referential integrity | Pass/Fail | Zero orphaned records in critical entities |
| Timeline | On track / Delayed | Must complete before rollback deadline |

**Decision**: If all criteria pass → proceed to Phase 6. If any critical criteria fail → initiate rollback.

### Phase 6: Activation (T+7h to T+8h)

| Step | Task | Owner | Duration | Rollback |
|------|------|-------|----------|----------|
| 6.1 | Re-enable integrations and scheduled jobs | Solution Architect | 15 min | Disable again |
| 6.2 | Run integration connectivity tests | Solution Architect | 15 min | Troubleshoot |
| 6.3 | Enable user access to target system | DBA | 10 min | Disable access |
| 6.4 | Disable user access to legacy system (full lockout) | DBA | 5 min | Re-enable if rollback |
| 6.5 | Send "Migration Complete" communication | Cutover Lead | 5 min | N/A |
| 6.6 | Begin hypercare monitoring | Support Engineer | Ongoing | N/A |

## Rollback Procedure

**When to trigger**: Any critical validation failure, data corruption detected, or timeline exceeding the rollback deadline.

1. **Stop all load processes** immediately
2. **Restore target system** from pre-migration snapshot (Step 1.4)
3. **Re-enable legacy system** user access
4. **Re-enable legacy integrations**
5. **Send "Rollback Initiated" communication** with brief reason
6. **Conduct post-mortem** within 24 hours — identify root cause and remediation before attempting again
7. **Schedule retry window** — typically 1-2 weeks out to allow for fixes and another dress rehearsal

## Post-Migration (First 48 Hours)

- [ ] Monitor error logs every 2 hours for the first 24 hours
- [ ] Verify batch jobs and scheduled reports run successfully
- [ ] Verify integration data flows are processing correctly
- [ ] Collect user-reported issues — triage as migration-related vs training
- [ ] Run Day 1 reconciliation (compare critical balances: GL trial balance, open AP/AR, inventory counts)
- [ ] Run Day 2 reconciliation (verify transactional processing is correct)
- [ ] Confirm legacy system is archived per data retention policy
- [ ] Close migration project — lessons learned document

## Common Patterns

**Pattern: The Dress Rehearsal** — Run the entire runbook end-to-end in staging at least twice before the real cutover. Time every step. The dress rehearsal timing IS your migration window estimate. Add 20% buffer.

**Pattern: The Data Freeze** — Stop all data entry in the legacy system 24-48 hours before cutover. This ensures your final extract captures everything. Communicate the freeze early and often.

**Pattern: The Parallel Run** — For financial data, run both systems in parallel for one close cycle. Post the same transactions in both systems and compare results. This is expensive but provides the highest confidence.

**Anti-pattern: The Friday Night Cutover** — Don't start cutover Friday evening expecting to be done by Monday. If something goes wrong, you've lost the weekend and people are exhausted. Start Saturday morning instead.

**Anti-pattern: Skipping Dress Rehearsal** — "We tested the scripts, that's enough." No. Run the full runbook, with the full team, on production-volume data. Every time.

## Related

- [Migration Architect](../../../departments/information-technology/role-overviews/migration-architect.md) — The role that owns this runbook
- [Data Migration](../../../departments/information-technology/03-org-1k-plus/data-migration/SKILL.md) — The skill guide for building the migration pipeline
- [Go-Live Checklist](../go-live-checklist/SKILL.md) — Migration completion feeds into the go-live decision
- [Data Engineer](../../../departments/information-technology/role-overviews/data-engineer.md) — Responsible for extract, transform, load execution
