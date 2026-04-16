---
name: go-live-checklist
description: This skill should be used when the task involves go/no-go decision criteria across all workstreams — use to make the final decision on whether to launch.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - template
  type: template
  scope: internal
---
# Go-Live Checklist

## Purpose
The Go-Live Checklist is the final gate before flipping the switch on a new enterprise application. It consolidates readiness criteria across every workstream — data, configuration, integration, testing, training, support, and infrastructure — into a single go/no-go decision framework. This is the document the steering committee reviews when they ask "are we ready?"

Use this when: you're within 2 weeks of planned go-live and need to assess readiness, or when the steering committee needs a structured decision framework.

## Go/No-Go Decision Framework

### Decision Rules

- **GO**: All Critical items are green. No more than 2 High items are yellow with approved mitigation plans.
- **CONDITIONAL GO**: All Critical items are green. 3+ High items are yellow but have mitigation plans and executive sponsor approval.
- **NO-GO**: Any Critical item is red. Or 2+ High items are red. Requires new target date and remediation plan.

### Severity Definitions

| Severity | Definition | Red Threshold |
|----------|-----------|---------------|
| **Critical** | Go-live is impossible without this | Any gap = NO-GO |
| **High** | Significant risk to operations if not addressed | Unmitigated gap = NO-GO |
| **Medium** | Important but can be addressed post-go-live with workaround | Document workaround |
| **Low** | Nice to have — defer to Phase 2 | Note for backlog |

## Checklist by Workstream

### 1. Data Migration

| # | Item | Severity | Status | Owner | Notes |
|---|------|----------|--------|-------|-------|
| 1.1 | All data migration loads completed successfully | Critical | | | |
| 1.2 | Record count reconciliation: source vs target (100% match on master data) | Critical | | | |
| 1.3 | Financial balance reconciliation: GL trial balance matches source | Critical | | | |
| 1.4 | Open items migrated: AP/AR aging matches source | Critical | | | |
| 1.5 | Referential integrity validated: zero orphaned records | High | | | |
| 1.6 | Historical data loaded (if in scope) | Medium | | | |
| 1.7 | Data quality issues documented and accepted by business | High | | | |
| 1.8 | Legacy system archived per retention policy | Medium | | | |

### 2. Configuration & Build

| # | Item | Severity | Status | Owner | Notes |
|---|------|----------|--------|-------|-------|
| 2.1 | All Must Have requirements from RTM are configured and signed off | Critical | | | |
| 2.2 | Workflows and approval chains tested with production users | Critical | | | |
| 2.3 | Security roles and permissions configured per approved role matrix | Critical | | | |
| 2.4 | Segregation of duties (SoD) conflicts reviewed and resolved | High | | | |
| 2.5 | Number sequences configured (invoice numbers, PO numbers, etc.) | High | | | |
| 2.6 | Email templates and notifications configured | Medium | | | |
| 2.7 | Print layouts configured (invoices, POs, receipts, reports) | Medium | | | |
| 2.8 | Production configuration matches approved blueprint | High | | | |

### 3. Integrations

| # | Item | Severity | Status | Owner | Notes |
|---|------|----------|--------|-------|-------|
| 3.1 | All critical integrations tested end-to-end with production endpoints | Critical | | | |
| 3.2 | Error handling and retry logic validated | High | | | |
| 3.3 | Integration monitoring and alerting configured | High | | | |
| 3.4 | API rate limits and throttling validated under expected load | Medium | | | |
| 3.5 | Integration credentials stored securely (not hardcoded) | Critical | | | |
| 3.6 | Fallback/manual process documented for each integration failure scenario | High | | | |

### 4. Testing

| # | Item | Severity | Status | Owner | Notes |
|---|------|----------|--------|-------|-------|
| 4.1 | UAT complete: 100% of Must Have test cases executed | Critical | | | |
| 4.2 | UAT pass rate: 100% of Must Have test cases passing | Critical | | | |
| 4.3 | All Critical and High severity defects resolved | Critical | | | |
| 4.4 | Medium severity defects: resolved or accepted with workaround | High | | | |
| 4.5 | Regression testing completed after final defect fixes | High | | | |
| 4.6 | Performance testing: response times within SLA thresholds | High | | | |
| 4.7 | Business sign-off obtained from all functional area owners | Critical | | | |

### 5. Training & Change Management

| # | Item | Severity | Status | Owner | Notes |
|---|------|----------|--------|-------|-------|
| 5.1 | All end users completed role-based training | High | | | |
| 5.2 | Training completion rate above 90% per department | High | | | |
| 5.3 | Quick reference guides distributed to all users | Medium | | | |
| 5.4 | Super-users / champions identified and trained per department | High | | | |
| 5.5 | Help desk / support team trained on new system | Critical | | | |
| 5.6 | Change communication sent to all affected users | High | | | |

### 6. Support & Operations

| # | Item | Severity | Status | Owner | Notes |
|---|------|----------|--------|-------|-------|
| 6.1 | Hypercare plan in place: team, hours, escalation paths | Critical | | | |
| 6.2 | Support ticketing system configured for new application | High | | | |
| 6.3 | Known issues list published with workarounds | Medium | | | |
| 6.4 | Monitoring dashboards live: system health, error rates, user activity | High | | | |
| 6.5 | Incident escalation path defined and communicated | High | | | |
| 6.6 | Rollback procedure documented and tested | Critical | | | |

### 7. Infrastructure & Security

| # | Item | Severity | Status | Owner | Notes |
|---|------|----------|--------|-------|-------|
| 7.1 | Production environment provisioned and performance-validated | Critical | | | |
| 7.2 | SSL/TLS certificates valid and not expiring within 90 days | High | | | |
| 7.3 | Backup and disaster recovery procedures tested | Critical | | | |
| 7.4 | SSO / authentication configured and tested with production IdP | Critical | | | |
| 7.5 | Audit logging enabled and validated | High | | | |
| 7.6 | Data encryption at rest and in transit confirmed | High | | | |

## Go/No-Go Meeting Agenda

1. **Roll call** — Confirm all workstream leads and decision-makers are present (10 min)
2. **Workstream readiness review** — Each lead presents their section status (30 min)
3. **Open issues review** — Walk through any yellow/red items with mitigation plans (15 min)
4. **Risk assessment** — Summarize residual risks and accepted workarounds (10 min)
5. **Decision** — Executive sponsor calls GO, CONDITIONAL GO, or NO-GO (5 min)
6. **Next steps** — If GO: confirm cutover start time. If NO-GO: agree on remediation timeline (10 min)

## Common Patterns

**Pattern: The Two-Week Countdown** — Start the checklist review 2 weeks before go-live. Review daily in the final week. Items should be turning green steadily. If you're still turning items yellow in the final 3 days, that's a signal.

**Pattern: The Conditional Go** — Most enterprise go-lives are conditional. There are always a few medium items that aren't perfect. The key is: are the workarounds viable for the first 2-4 weeks until fixes are deployed?

**Pattern: The War Room** — For the first 48 hours post-go-live, have the full team available in a dedicated channel or room. Issues will surface. Fast triage and resolution during hypercare prevents escalation.

**Anti-pattern: The Forced Go** — Going live despite red Critical items because "we already communicated the date." Dates are cheaper to change than production outages. Communicate early if there's risk.

**Anti-pattern: The Missing Rollback** — Having a rollback procedure that's never been tested. If you can't restore to the pre-go-live state within 4 hours, you don't have a rollback plan.

## Checklist

- [ ] All Critical items are green across all workstreams
- [ ] All High items are green or yellow with approved mitigation plans
- [ ] Go/no-go meeting scheduled with all workstream leads and executive sponsor
- [ ] Cutover runbook finalized with confirmed timing and owners
- [ ] Communication plan ready: go-live announcement, support contacts, known issues
- [ ] Hypercare team confirmed: who, when, how to reach them
- [ ] Rollback procedure tested within the last 2 weeks
- [ ] Post-go-live monitoring dashboards are live and baselined
- [ ] Day 1 and Day 2 validation scripts ready

## Related

- [Deployment & Go-Live](../skills/deployment-golive.md) — The skill guide for the full go-live process
- [Migration Runbook](migration-runbook.md) — Data cutover execution plan
- [Requirements Traceability](requirements-traceability.md) — Proves all requirements are tested and signed off
- [QA Lead](../roles/qa-lead.md) — Owns testing readiness
- [Compliance Analyst](../roles/compliance-analyst.md) — Validates regulatory readiness
