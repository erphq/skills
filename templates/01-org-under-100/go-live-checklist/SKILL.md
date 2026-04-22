---
name: go-live-checklist
description: This template should be used when launching a new system or tool at an organization under 100 employees — a pragmatic go/no-go checklist covering data readiness, user enablement, integrations, rollback, and communication, scaled to small-org implementations.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  size_tier: 01-org-under-100
  type: template
  scope: internal
---
# Go-Live Checklist — Under 100 People

## Purpose

At this size, go-live is **the day you flip from "old way" to "new way" on a system that matters** — accounting platform migration, CRM switch, HR platform adoption, new billing system, etc. The risks are smaller than enterprise go-lives (no 1,000-user training nightmares) but real — a botched accounting-migration means your books are broken for weeks; a bad CRM cutover means lost deals.

This template is the **pragmatic minimum-viable checklist** — not 200 items. It covers: data ready, users ready, integrations working, rollback possible, communications sent. One spreadsheet or Notion page. One meeting to review. Decision: go or no-go.

## When to Use

- New SaaS platform being rolled out (>50 users affected OR >$500/mo cost OR business-critical)
- Data migration from legacy tool to new
- Major process change requiring adoption
- Annual-cycle event (year-end close, benefits open enrollment, etc.)

Not every change needs a go-live checklist. Use judgment — if impact is small + reversible, skip this overhead.

## The Checklist

### Section 1: Data Readiness

- [ ] **All data migrated** from old to new system (or confirmed minimum viable subset)
- [ ] **Data validated** — sample verified; totals reconcile; no obvious corruption
- [ ] **Historical data accessible** — either migrated or archived read-only
- [ ] **Cleanup completed** — duplicates merged, stale records deleted
- [ ] **Ownership + responsibility clear** per major data domain

### Section 2: Users Ready

- [ ] **Accounts provisioned** for all users who need access
- [ ] **Permissions configured** correctly per role
- [ ] **Training delivered** (30-min live session or async video + docs)
- [ ] **Quick-reference cheat sheet** distributed
- [ ] **Power users identified** (1–2 internal champions to help others)

### Section 3: Integrations

- [ ] **Critical integrations working** — tested end-to-end (e.g., new CRM → old ERP sync)
- [ ] **Webhooks + automations** configured + tested
- [ ] **Payment / billing integration** validated if applicable
- [ ] **Data-sync cadence** defined (real-time vs. nightly)
- [ ] **Failure-mode alerting** configured for critical integrations

### Section 4: Communications

- [ ] **All-hands announcement** sent (Slack, email) with: why, what's changing, when, what users need to do
- [ ] **External communication** if customer-facing (e.g., new support-ticket URL)
- [ ] **Key stakeholders aware** (board, customers with unusual access)
- [ ] **Support contact defined** — who do users ask when stuck day 1?

### Section 5: Rollback Plan

- [ ] **Rollback criteria defined** — what triggers a rollback?
- [ ] **Rollback procedure documented** — specific steps to revert
- [ ] **Old system availability** — kept live in read-only mode for 30–90 days
- [ ] **Rollback decision-maker identified** + contact available day 1

### Section 6: Business Process

- [ ] **New-process documented** — written SOP or video
- [ ] **Legal / compliance review** completed if applicable
- [ ] **Financial impact validated** — pricing, billing, invoicing unchanged from customer perspective (unless intentional)
- [ ] **Vendor support ready** — account manager contact available day 1, priority support enabled

### Section 7: Monitoring

- [ ] **Health metrics defined** — what do we watch to know it's working?
- [ ] **Who monitors** day 1, day 2–7, day 8–30
- [ ] **Issue-escalation path** clear
- [ ] **Post-mortem meeting scheduled** 2 weeks post-launch

## Go / No-Go Decision Meeting

Hold **1 hour** before launch with:

- Project lead
- System owner (CS / IT / Finance / HR lead depending on system)
- Founder or CEO (for material launches)

Review:
1. Walk through checklist — any unchecked items
2. Unchecked items: blocker (no-go) or risk-accept (go with mitigation)?
3. Final go / no-go decision
4. If go: launch time + contacts confirmed
5. If no-go: new target date + what's needed to close gaps

**Decision is explicit. Recorded. Communicated.**

## Day-Of Runbook

- **T-4 hours**: Final smoke tests on production environment
- **T-1 hour**: Freeze old system (read-only); confirm rollback readiness
- **T-0**: Launch. Announcement sent. Monitoring active.
- **T+1 hour**: First check-in — any user issues?
- **T+4 hours**: Second check-in — aggregate feedback.
- **T+24 hours**: Day-1 review. Surface issues + resolutions.
- **T+1 week**: Early retrospective + adjustments.

## Common Mistakes

- **Over-engineering the checklist**: 200-item list for a HubSpot rollout — nobody follows it.
- **Under-engineering**: "We'll figure it out day-of." One broken integration = week of chaos.
- **No rollback plan**: "It'll work." Real go-lives need a plan-B.
- **Users surprised**: No comms or training, first email Monday morning from confused employee.
- **Old system decommissioned too fast**: Week 2, need to look up old invoice; data gone.
- **No post-mortem**: Issues happen, nobody captures learnings, repeats next time.
- **Vendor support blindspot**: Day 1, vendor 3-day-response SLA, you're stuck.

## Output

- Completed checklist (spreadsheet or Notion)
- Go/no-go decision doc (1 page)
- Launch-day runbook
- 1-week retrospective with lessons

## Related

- [Fit-Gap Matrix](../fit-gap-matrix/SKILL.md) — precedes go-live in tool-selection flow
- [Migration Runbook](../migration-runbook/SKILL.md) — data-migration-specific runbook
- [Mid-Market Go-Live Checklist (100–1k)](../../02-org-100-to-1k/go-live-checklist/SKILL.md)
- [Enterprise Go-Live Checklist (1k+)](../../03-org-1k-plus/go-live-checklist/SKILL.md)
