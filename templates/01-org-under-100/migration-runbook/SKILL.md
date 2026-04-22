---
name: migration-runbook
description: This template should be used when migrating data from one system to another at an organization under 100 employees — typical use cases include QBO→NetSuite, Salesforce→HubSpot, Intercom→Zendesk. Pragmatic runbook scaled to small-org complexity.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  size_tier: 01-org-under-100
  type: template
  scope: internal
---
# Migration Runbook — Under 100 People

## Purpose

At this size, data migrations happen regularly — you're outgrowing the tool you picked 18 months ago. Typical migrations: QuickBooks → NetSuite as revenue grows; HubSpot → Salesforce for sales complexity; Intercom → Zendesk for support scale; Pipedrive → HubSpot for marketing integration; Google Workspace → Microsoft 365 (or vice versa).

The runbook isn't enterprise-scale complexity — it's **a pragmatic checklist that prevents data loss, customer disruption, and post-migration panic.** One document. Maybe 10–30 records of "this happened when." Single engineer or ops person typically executes.

## When to Use

- Moving customer data, financial data, or employee data between systems
- Switching core-business SaaS (CRM, accounting, helpdesk, HR)
- Consolidating tools (e.g., two CRMs → one)

Not every data move needs a runbook. Moving a team's Notion docs from one workspace to another = skip. Moving AP history from QBO to NetSuite = definitely runbook.

## Structure

The runbook has 6 phases: **Plan → Extract → Transform → Load → Validate → Cutover → Decommission**. At this scale, phases 1–4 might take 1–4 weeks; cutover is often a weekend; decommission is 30–90 days of keeping old system read-only.

## Phase 1: Plan (Pre-Migration, Week 1)

- [ ] **Inventory current data** — what tables/objects, how many records, any quirks?
- [ ] **Source + target fields mapped** — spreadsheet: source field → target field + transformation rule
- [ ] **Gaps identified** — fields with no target home; decide: drop, create custom field, or archive-only
- [ ] **Migration tool selected** — native import, ETL tool, paid service (many vendors offer migration)?
- [ ] **Timeline + cutover date set** — with business-window awareness (avoid month-end, quarter-end, payroll)
- [ ] **Stakeholders informed** — who needs to know? Typically: founder, team leads for affected teams, customers if material
- [ ] **Budget approved** — migration tool + consultant hours if needed

## Phase 2: Extract (Week 2)

- [ ] **Full export from source** — usually CSV or API-based
- [ ] **Validation count** — record counts per table match source
- [ ] **Backup saved** — archive-quality source-system export kept indefinitely
- [ ] **Test extract run** — identify quirks before production

## Phase 3: Transform (Week 2–3)

- [ ] **Field mapping applied** — source values transformed per mapping sheet
- [ ] **Data cleanup** — duplicates, orphans, known-bad records addressed (easier in transformation than production)
- [ ] **Custom fields created** in target system if needed
- [ ] **Validation rules verified** — target system's required-field + format rules
- [ ] **Relationships preserved** — accounts → contacts → opportunities etc., foreign keys intact

## Phase 4: Load (Week 3)

- [ ] **Sandbox / test environment load first** (most tools have this)
- [ ] **Test migration of subset** (100 records per major object)
- [ ] **Edge-cases surfaced** — records with weird characters, long fields, boundary cases
- [ ] **Production load scheduled** — during quiet window (typically weekend evening)

## Phase 5: Validate (Post-Load)

- [ ] **Record counts match** source → target per object
- [ ] **Sample-record verification** — pick 20 records across object types; verify field-by-field accuracy
- [ ] **Relationships intact** — account has its contacts; invoice has its line items
- [ ] **Financial totals reconcile** — total AR, total AP, total open pipeline, headcount total match source
- [ ] **Key users validate** — functional test by AE, controller, CS lead etc.
- [ ] **Integration sync works** — upstream / downstream systems see the new data correctly

## Phase 6: Cutover (Day-Of)

- [ ] **Source system frozen** (read-only mode) — no new data going in
- [ ] **Final delta migration** — any records changed since Phase 4 load
- [ ] **User access flipped** — target system available; source system links redirected
- [ ] **Integrations re-pointed** — Stripe → target instead of source
- [ ] **Go-live announcement** sent
- [ ] **Monitoring active** — you're watching for issues first 24 hours

## Phase 7: Decommission (30–90 Days)

- [ ] **Source kept read-only** for 30–90 days for reference + cleanup
- [ ] **Outstanding issues logged** — anything surfacing that needs source-system lookup
- [ ] **Final archive** — before decommission, export + archive source fully (compliance, audit, worst-case recovery)
- [ ] **Subscription canceled** — stop paying for source system
- [ ] **Retrospective** — what worked, what didn't, what would we do differently?

## Rollback Triggers

If any of these happen within 24 hours of cutover, **rollback**:

- **Data corruption** discovered (>5% of records missing or broken)
- **Critical integration failure** that can't be fixed within 4 hours
- **Customer-facing breakage** (invoices not sending, support tickets lost)
- **Financial totals don't reconcile** and can't be explained
- **Legal / compliance concern** surfaces

Rollback = return to source as source-of-truth; target system delete / archive; resume operations; retrospective + re-plan.

## Common Mistakes

- **Skipping the sandbox test** — discovering target-system quirks in production is expensive.
- **No data cleanup before migration** — you bring the mess forward. Clean in transformation.
- **No rollback plan** — "it'll be fine." Real migrations need plan-B.
- **Migrating during busy period** — month-end close + migration = disaster.
- **Underestimating edge cases** — customers with weird characters in names break loading.
- **No one accountable** — "the consultant handles it." You own the outcome.
- **Source decommissioned too fast** — need to look something up week 3; data gone.
- **Financial-totals not reconciled** — post-migration books don't match; audit nightmare.
- **Integration assumptions** — "Stripe will just work with the new tool." Test.

## Typical Small-Org Migration Examples

### QuickBooks Online → NetSuite

Timeline: 6–12 weeks. Engage implementation partner. Concurrent parallel-run period (old + new) 30–60 days. High financial-reconciliation bar.

### HubSpot → Salesforce (or vice versa)

Timeline: 4–8 weeks. Historical activity data frequently lost or incomplete. Contact + company + deal counts easy; activity timeline hard.

### Intercom → Zendesk (or vice versa)

Timeline: 2–4 weeks. Historical conversation data may not migrate cleanly. Chat widget + knowledge base re-deployment required.

### Google Workspace → Microsoft 365

Timeline: 2–6 weeks. Email + calendar straightforward; Drive → OneDrive has quirks; permissions reset.

### Gusto → Rippling (or vice versa)

Timeline: 4–8 weeks aligned with payroll cycle. Payroll history + tax filings historical, benefits enrollment data, equity records. Ideally migrate at quarter-end.

## Output

- Completed runbook (Notion or spreadsheet)
- Data-mapping spreadsheet (source field → target field)
- Validation report (counts, sample checks, financial reconciliation)
- Retrospective notes

## Related

- [Fit-Gap Matrix](../fit-gap-matrix/SKILL.md) — precedes migration (which tool?)
- [Go-Live Checklist](../go-live-checklist/SKILL.md) — general launch-day checklist
- [Requirements Traceability](../requirements-traceability/SKILL.md) — requirement-to-config mapping
- [Mid-Market Migration Runbook (100–1k)](../../02-org-100-to-1k/migration-runbook/SKILL.md)
- [Enterprise Migration Runbook (1k+)](../../03-org-1k-plus/migration-runbook/SKILL.md)
