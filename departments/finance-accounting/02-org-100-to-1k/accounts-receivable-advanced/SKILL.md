---
name: accounts-receivable-advanced
description: This skill should be used when AR runs as a dedicated standalone invoicing application (not as a sub-module within a books app) — typically a US mid-market company that has outgrown sub-module AR and needs branded invoice templates, recurring billing, structured dunning, dispute management, credit holds, and a formal write-off workflow. The 19-table form of accounts receivable.
version: 0.1.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---

# Accounts Receivable — Standalone Invoicing App

> **Status: stub.** This skill exists to unblock build-time `composes:`
> expansion for [`apps/020-02-fin-invoicing-ar.md`](https://github.com/erphq/appskills/blob/main/apps/020-02-fin-invoicing-ar.md)
> in [erphq/appskills](https://github.com/erphq/appskills). The deeper
> Build / Maintain / Scale content needs domain-expert authorship —
> see TODO markers below. Filed via [erphq/skills#4](https://github.com/erphq/skills/issues/4).

## What This Process Does

`accounts-receivable-advanced` is the **full standalone invoicing-app form** of AR — distinct from the [basic `accounts-receivable` skill at this tier](../accounts-receivable/SKILL.md) which assumes AR is a sub-module within a general-ledger books app.

The differentiator: this is what an organization composes when they need a **dedicated invoicing application** — branded customer-facing invoice templates, recurring billing schedules, formal dunning programs, structured dispute management, collections cases, write-offs, late fees, and a credit-hold workflow. Typical fit: US mid-market company (200–1,000 employees, 500–10k active customers, 500–5k invoices/month) that has outgrown sub-module AR but isn't on a full ERP.

## Materializes as 19 tables

15 entities + 4 line-item children:

| # | Entity | Purpose |
|---|---|---|
| 1 | `Customer` (AR-grain) | Credit limit, payment-terms defaults, billing contact |
| 2 | `InvoiceTemplates` | Branded customer-facing PDF templates |
| 3 | `Invoices` | The core invoice with status lifecycle (draft → sent → partially-paid → paid → written-off) |
| 4 | `InvoiceLines` | Line-item children of `Invoices` |
| 5 | `RecurringInvoiceSchedules` | Subscription / annual-contract auto-billing |
| 6 | `CreditMemos` | Negative-direction adjustments (returns, billing corrections) |
| 7 | `CreditMemoLines` | Line-item children of `CreditMemos` |
| 8 | `PaymentsReceived` | Customer-initiated cash-in |
| 9 | `PaymentApplications` | Many-to-many mapping of `PaymentsReceived` to `Invoices` |
| 10 | `BankFeedTransactions` | Inbound bank stream (raw transactions before matching) |
| 11 | `DunningPolicies` | Cadence + tone config per customer segment |
| 12 | `DunningEvents` | Generated send-history child of dunning runs |
| 13 | `Disputes` | Customer-raised dispute records, drives dunning pause |
| 14 | `WriteOffs` | Formal uncollectible recognition |
| 15 | `LateFees` | Auto-applied or manual late charges |
| 16 | `ARAgingSnapshots` | Periodic point-in-time aging captures (for reporting) |
| 17 | `CollectionsCases` | Long-running collections workstream per dispute / aging trigger |
| 18 | `CreditHolds` | Block on new orders when credit limit exceeded |
| 19 | (the 4th line-item child completes the count — see app spec for the exact decomposition) |

(The app spec at [`020-02-fin-invoicing-ar.md`](https://github.com/erphq/appskills/blob/main/apps/020-02-fin-invoicing-ar.md) is the source of truth for the table specs, foreign keys, and column-level recipe.)

## TODO — needs domain-expert authorship

This stub captures the differentiator and the table inventory. The following sections from the standard SKILL.md template still need to be written:

- [ ] **Start Here: ERP•AI Templates** — which template artifacts seed this skill
- [ ] **Build — Setting It Up** (with Agents / Key Decisions / Common Mistakes)
- [ ] **Maintain — Keeping It Healthy** (Weekly Rhythm / What to Watch / Exception Handling)
- [ ] **Scale — Growing It** (Adding Complexity / Automation Opportunities / When You Outgrow This Tier)
- [ ] **By Industry (at this scale)**
- [ ] **ERP•AI & Proto** — agent integration patterns
- [ ] **Related** — cross-links to neighboring skills

Reference: the [neighboring `accounts-receivable` SKILL.md](../accounts-receivable/SKILL.md) at this tier follows the standard structure and is the closest sibling for stylistic reference.

## Related

- [`accounts-receivable`](../accounts-receivable/SKILL.md) — basic AR (this skill's superset replaces sub-module AR)
- [`general-ledger`](../general-ledger/SKILL.md) — AR posts through the ledger; cash receipts hit AR-clearing
- [`tax-compliance`](../tax-compliance/SKILL.md) — invoice-line tax computation
