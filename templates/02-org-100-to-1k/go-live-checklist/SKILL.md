---
name: go-live-checklist
description: This template should be used when launching enterprise systems at an organization of 100-1,000 employees — multi-workstream go-live coordination covering data, users, integrations, change management, compliance, rollback, and executive readiness for material platform rollouts.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  size_tier: 02-org-100-to-1k
  type: template
  scope: internal
---
# Go-Live Checklist — 100 to 1,000 People

## Purpose

At mid-market, go-live is **a coordinated multi-workstream event with material consequences if mismanaged.** You're launching NetSuite, Salesforce Enterprise, Workday, Rippling, or similar — touching 100–1,000 users, feeding $50M+ of revenue operations, touching payroll, billing, or other business-critical functions. Go-lives at this scale are rarely single-day events; they're multi-phase rollouts with staged user onboarding, parallel-run periods, and formal go/no-go decisions.

Checklist spans: data, user enablement, integrations, business process, compliance, change management, rollback readiness, monitoring, executive communication. 150–300 items typical.

## Structure

- **T-90 days**: Planning + infrastructure
- **T-60 days**: Build + configuration complete
- **T-30 days**: UAT + training
- **T-14 days**: Cutover rehearsal (dry run)
- **T-7 days**: Final preparation
- **T-1 day**: Pre-launch freeze
- **T-0 (Launch Day)**: Cutover execution
- **T+1 to T+30**: Hypercare monitoring

## T-90 Days: Foundation

### Workstream: Program Management
- [ ] **Program charter** — scope, objectives, success criteria documented
- [ ] **Steering committee** formed — exec sponsor + department heads + program lead
- [ ] **RACI** clarified across workstreams
- [ ] **Communications plan** drafted (internal + external stakeholders)
- [ ] **Budget tracked** — implementation partner invoices + internal effort + contingency

### Workstream: Data
- [ ] **Data mapping** complete per migration runbook
- [ ] **Data cleansing** in progress
- [ ] **Historical data strategy** — migrate vs archive vs drop

### Workstream: Users + Training
- [ ] **Role matrix** defined — who gets what access
- [ ] **Training plan** drafted — delivery method + schedule + owner
- [ ] **Super-users** identified — 1 per 10–20 end users

### Workstream: Integrations
- [ ] **Integration architecture** documented
- [ ] **API access** provisioned
- [ ] **Data flows** mapped

### Workstream: Business Process
- [ ] **Process documentation** — SOPs drafted for new workflows
- [ ] **Change impact assessment** per department
- [ ] **Policy updates** identified (financial, HR, IT)

### Workstream: Compliance
- [ ] **Regulatory review** — SOX, GDPR, HIPAA, industry-specific
- [ ] **Access controls** + segregation-of-duties designed
- [ ] **Audit trail** requirements defined
- [ ] **Data retention** policies configured

## T-60 Days: Build Complete

### Data
- [ ] **Test migration** executed; validated; issues logged
- [ ] **Production-load rehearsal** dry-runs successful
- [ ] **Edge cases** identified + resolved

### Users
- [ ] **Training materials** finalized (guides, videos, cheat sheets)
- [ ] **Super-user training** complete; they're now trainers
- [ ] **Training schedule** published; attendance tracked

### Integrations
- [ ] **Integration development** complete
- [ ] **End-to-end testing** — data flows validated in UAT environment
- [ ] **Error-handling + alerting** configured

### Business Process
- [ ] **UAT test plans** per process — test cases documented
- [ ] **UAT executed** — defects logged + resolved

### Compliance
- [ ] **Security review** passed
- [ ] **Controls testing** — SoD, approval workflows, audit-trail
- [ ] **Pen test** if applicable

## T-30 Days: UAT + Training

### Data
- [ ] **Go-live data extraction plan** finalized
- [ ] **Validation scripts** ready

### Users
- [ ] **End-user training** underway (target: 100% completion by T-14)
- [ ] **Access provisioning** — user accounts created + role-assigned
- [ ] **Training-completion tracking** — no access without training completed

### Integrations
- [ ] **Cutover integration testing** — rehearsal of go-live integration activation
- [ ] **Monitoring + alerting** operational
- [ ] **Runbooks** for integration failures

### Communications
- [ ] **All-company announcement** drafted + reviewed
- [ ] **Customer-facing communication** drafted (if applicable)
- [ ] **Day-1 support structure** announced

## T-14 Days: Cutover Rehearsal (Dress Rehearsal)

- [ ] **Full cutover rehearsal** — mock execution end-to-end
- [ ] **Timing validated** — cutover fits within planned window
- [ ] **Issues documented + resolved**
- [ ] **Playbook refined** based on rehearsal learnings

## T-7 Days: Final Preparation

- [ ] **Go / no-go checkpoint meeting** — steering committee + exec sponsor
- [ ] **Any unresolved Must-Have issues** — decisions on accept-risk vs. delay
- [ ] **Day-1 team** identified + available (on-call through first week)
- [ ] **Vendor support** confirmed — priority support active; account manager on-call
- [ ] **Rollback criteria** formally approved
- [ ] **Rollback procedure** tested

## T-1 Day: Pre-Launch Freeze

- [ ] **Source system freeze** initiated (read-only mode)
- [ ] **Final delta extraction** — changes since last test migration
- [ ] **Backup** — source-system state archived
- [ ] **Go/No-Go final call** — final decision from steering committee

## T-0: Launch Day

### Cutover Execution
- [ ] **Source system read-only** (confirmed)
- [ ] **Target system data load** (if applicable)
- [ ] **Validation complete** — counts + samples + financial totals reconcile
- [ ] **Integration activation** — sync-targets re-pointed
- [ ] **User access active** — login works
- [ ] **Production verification** — critical transactions tested
- [ ] **Status page / comms** — go-live announced internally + externally

### Day-1 Support
- [ ] **War room** or dedicated Slack channel active
- [ ] **Tier 1 support** staffed + responsive
- [ ] **Tier 2 / engineering** on-call for escalations
- [ ] **Vendor support** engaged; priority response confirmed

## T+1 to T+30: Hypercare

- [ ] **Daily standup** (first week) — issue review + triage
- [ ] **Weekly steering committee** — status + major issues
- [ ] **Issue log** maintained — severity + resolution tracking
- [ ] **User-satisfaction pulse** — CSAT / NPS survey at T+7 and T+30
- [ ] **Performance monitoring** — system + data + user metrics
- [ ] **Training gaps** identified + addressed
- [ ] **Source system decommissioning plan** activated (typically T+30 to T+90)
- [ ] **Post-mortem** scheduled at T+30 — lessons learned formally captured

## Go / No-Go Decision Criteria

Predetermined criteria to evaluate at T-7 and T-1:

### Red flags (No-Go triggers)
- **Data integrity issues** in UAT not resolved
- **Integration failures** in cutover rehearsal
- **Training completion <90%** of users
- **Security / compliance review** failure
- **Rollback procedure** untested or broken
- **Critical staffing gaps** (project-lead, engineering, vendor-support)
- **Customer-facing disruption** expected beyond acceptable window

### Acceptable risks (Go with mitigation)
- **Minor UAT issues** — workaround identified + documented
- **Non-critical-path features** deferred to later phase
- **Staffing-backup plan** activated for minor gap

## Rollback Triggers (post-launch)

If any of these within 24–48 hours of launch:

- **Data corruption** affecting >5% of records
- **Financial totals** don't reconcile (AR, AP, revenue, headcount)
- **Critical integration failure** unrecoverable within 4 hours
- **Customer-facing outage** (revenue-impacting)
- **Security incident**
- **Legal / compliance breach**

Rollback = controlled revert to source system; formal communication; re-plan.

## Output Deliverables

1. **Go-Live Playbook** (comprehensive runbook)
2. **Issue Log** + severity tracking
3. **Training Completion Report**
4. **UAT Test Results**
5. **Post-Go-Live Retrospective** (30 days post)
6. **Executive summary** for board / CEO

## Common Mistakes

- **Underestimating data-migration complexity**: "It's mostly ready" ≠ ready. Validate with rehearsals.
- **Skipping cutover rehearsal**: Discover real timing + issues on launch day. Too late.
- **Training-completion check skipped**: Users launch without training. Day-1 chaos.
- **No rollback rehearsal**: "We won't need it." Rollback procedure must be tested.
- **Vendor-support blindspot**: Day 1, vendor response SLA inadequate. Pre-negotiate priority support.
- **No hypercare plan**: Project team demobilized post-launch; issues pile up.
- **Executive-comms delays**: Board learns of issues from employees rather than program lead.
- **Change-management underinvestment**: System works; nobody uses it. Training + communication + leadership visibility.

## Related

- [Fit-Gap Matrix](../fit-gap-matrix/SKILL.md) — precedes implementation
- [Migration Runbook](../migration-runbook/SKILL.md) — data-migration runbook paired with go-live
- [Requirements Traceability](../requirements-traceability/SKILL.md) — requirements-satisfied validation
- [Small-Org Go-Live (<100 people)](../../01-org-under-100/go-live-checklist/SKILL.md)
- [Enterprise Go-Live (1k+)](../../03-org-1k-plus/go-live-checklist/SKILL.md)
