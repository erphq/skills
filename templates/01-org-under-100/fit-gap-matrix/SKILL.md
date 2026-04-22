---
name: fit-gap-matrix
description: This template should be used when evaluating SaaS tools or platforms at an organization under 100 employees — simplified requirements scoring for vendor selection, with emphasis on out-of-the-box fit vs. custom work required.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  size_tier: 01-org-under-100
  type: template
  scope: internal
---
# Fit-Gap Matrix — Under 100 People

## Purpose

At under-100-people scale, the fit-gap matrix is **a lightweight vendor-selection tool**. You're not implementing SAP — you're choosing between HubSpot vs Salesforce, or Gusto vs Rippling, or Pipedrive vs. HubSpot. The goal: evaluate whether a SaaS tool does what you need out of the box, or whether you'll need workarounds / integrations / custom work. The deeper enterprise methodology (10+ segment categorization, multi-workstream analysis) is overkill. Keep it to one page.

Use this when: founder or head-of-X is evaluating 2–4 SaaS tools for a specific function (CRM, payroll, accounting, helpdesk, etc.) and needs a structured way to compare them.

## Template Structure

Use a Google Sheet or Notion table. ~15–30 requirements max; anything more at this scale means scope creep.

### Columns

| Column | Content |
|---|---|
| Req ID | Simple counter (R1, R2, R3…) |
| Requirement | One sentence, plain language |
| Priority | Must / Should / Nice |
| Category | (e.g., Pipeline mgmt, Email automation, Reporting) |
| Vendor A | Fit rating 1–5 + notes |
| Vendor B | Fit rating 1–5 + notes |
| Vendor C | Fit rating 1–5 + notes |

### Fit Rating Scale

- **5 = Out-of-the-box**: Works natively, no setup required.
- **4 = Configurable**: Works with vendor-provided settings, no code.
- **3 = Workaround**: Achievable with 3rd-party tool, Zapier/Make, or scripting.
- **2 = Heavy custom**: Requires significant engineering (days+).
- **1 = No**: Not achievable without another tool.

### Priority Definitions

- **Must**: Deal-breaker. If vendor doesn't have this (≥3), they're disqualified.
- **Should**: Strong preference. Score here differentiates finalists.
- **Nice**: Bonus. Tiebreaker only.

## Scoring Workflow

1. **List requirements** — 10–25 specifics from stakeholder interviews + your own usage.
2. **Assign priority** — be honest. If everything is "Must," you'll pick the wrong tool.
3. **Demo / trial each vendor** — 2–4 hours minimum per vendor; include real team members.
4. **Rate each requirement** — write brief rationale, don't just assign a number.
5. **Compute weighted score**: Must = ×3, Should = ×2, Nice = ×1. Sum by vendor.
6. **Apply Must-kill rule**: Any "Must" requirement scoring ≤2 disqualifies the vendor regardless of total score.

## Decision Framework (quick)

Beyond the raw score, weigh:

- **Total 3-year cost**: subscription + setup + migration. At this scale often dominant.
- **Team fit**: Will your 5 users actually use it? Beautiful tools nobody uses are waste.
- **Ecosystem + integrations**: Native Slack / Google Workspace / Stripe / QuickBooks / Zapier integration matters disproportionately at small scale.
- **Support quality**: SMB customers get less white-glove; will vendor respond in <24h?
- **Exit cost**: Data portability if you outgrow or dislike. Hostile-to-export = red flag.

## When to Skip This Exercise

Sometimes you don't need a matrix:

- **Obvious winner** (category leader strongly recommended by peers): just pick it.
- **Under $500/yr total cost**: time spent evaluating > tool cost; just try one.
- **30-day free trials available**: sometimes "try both for a month" beats a spreadsheet.

Save the matrix discipline for decisions that are higher-stakes — hiring a PEO, committing to a CRM platform, choosing an accounting system.

## Common Mistakes

- **Over-scoping requirements**: 100-row spreadsheet for picking a task tracker. Nobody reads it; decision stalled.
- **Marking everything "Must"**: Defeats prioritization. Force a ratio — roughly 30% Must / 50% Should / 20% Nice.
- **Scoring without trial**: Demo deck ≠ real usage. Always trial before final scoring.
- **Ignoring total-cost-of-ownership**: Sticker price is half the picture.
- **No team input**: You chose; nobody else likes it. Include actual end users.
- **Committing without exit plan**: Data export + contract-termination terms matter.

## Output

A 1-page summary + the sheet. Shows:
- Final scores per vendor
- Any Must-kill disqualifications
- Decision + rationale (3–5 sentences)
- Rollout timeline + owner

## Related

- [Small-org equivalent next step: Go-Live Checklist](../go-live-checklist/SKILL.md)
- [Migration Runbook](../migration-runbook/SKILL.md) — if you're switching from another tool
- [Mid-Market Fit-Gap Matrix (100–1k people)](../../02-org-100-to-1k/fit-gap-matrix/SKILL.md)
- [Enterprise Fit-Gap Matrix (1k+ people)](../../03-org-1k-plus/fit-gap-matrix/SKILL.md)
