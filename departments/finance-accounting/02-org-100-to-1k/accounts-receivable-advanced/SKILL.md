---
name: accounts-receivable-advanced
description: This skill should be used when AR runs as a dedicated standalone invoicing application rather than as a sub-module inside a books app — typically a US mid-market company that needs branded invoice templates, recurring billing, structured dunning, dispute management, credit holds, and a formal write-off workflow. The 19-table form of accounts receivable.
version: 1.0.0
agents:
  - collections
  - reconciliation
  - approvals
related:
  - accounts-receivable
  - general-ledger
  - tax-compliance
  - period-close
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---

# Accounts Receivable — Standalone Invoicing App

## What This Process Does

`accounts-receivable-advanced` is the **standalone invoicing-app form** of AR. Use it when a mid-market company has outgrown basic books-module AR but is not yet running a full enterprise ERP billing stack. The work is not just "send invoice and wait." It is customer master data, branded invoice templates, recurring schedules, payment application, dunning policy, disputes, credit holds, late fees, write-offs, and aging snapshots as one operational system.

The differentiator from the neighboring [basic `accounts-receivable` skill](../accounts-receivable/SKILL.md) is ownership of the invoicing application itself. This skill covers the 19-table app pattern that composes with [`apps/020-02-fin-invoicing-ar.md`](https://github.com/erphq/erpai-app-registry/blob/main/apps/020-02-fin-invoicing-ar.md): 15 business entities plus 4 line-item children.

Typical fit: 200-1,000 employees, 500-10k active customers, 500-5k invoices/month, branded customer-facing invoice requirements, multiple billing cadences, and a collections process formal enough that "check the aging spreadsheet" is no longer acceptable.

## Materializes as 19 Tables

15 entities + 4 line-item children:

| # | Entity | Purpose |
|---|---|---|
| 1 | `Customer` | Credit limit, payment terms, billing contacts, portal preferences |
| 2 | `InvoiceTemplates` | Branded customer-facing PDF/email templates |
| 3 | `Invoices` | Draft -> sent -> partially-paid -> paid -> written-off lifecycle |
| 4 | `InvoiceLines` | Line-item children of `Invoices` |
| 5 | `RecurringInvoiceSchedules` | Subscription, annual contract, retainer, or milestone auto-billing |
| 6 | `CreditMemos` | Negative-direction adjustments for returns, concessions, and corrections |
| 7 | `CreditMemoLines` | Line-item children of `CreditMemos` |
| 8 | `PaymentsReceived` | Customer-initiated cash in, regardless of channel |
| 9 | `PaymentApplications` | Many-to-many mapping of payments to invoices |
| 10 | `BankFeedTransactions` | Raw inbound bank movement before matching |
| 11 | `DunningPolicies` | Cadence and tone by customer segment and aging bucket |
| 12 | `DunningEvents` | Generated send/call/escalation history |
| 13 | `Disputes` | Customer-raised dispute records; pauses dunning where appropriate |
| 14 | `WriteOffs` | Formal uncollectible recognition and approval trail |
| 15 | `LateFees` | Auto-applied or manual late charges |
| 16 | `ARAgingSnapshots` | Periodic point-in-time aging captures for reporting |
| 17 | `CollectionsCases` | Long-running collections workstream per dispute or aging trigger |
| 18 | `CreditHolds` | Blocks new orders/services when credit policy says stop |
| 19 | App-specific line child | The app registry spec is the source of truth for the final decomposition |

## Start Here: ERP•AI Templates

Start from ERP•AI's **Standalone Invoicing** app pattern. Pair it with **Customer Portal** for self-service invoice views and payments, **Credit Management** for customer exposure controls, and **General Ledger Integration** so the app can post clean summaries into the books without pretending to be the whole ERP.

For subscription or retainer-heavy businesses, add **Recurring Billing**. For services businesses, connect to time, expense, project milestone, or delivery-confirmation sources. For product businesses, connect to shipment or fulfillment events. The invoicing app should own invoice lifecycle, but it should not invent source-of-truth delivery data.

## Build — Setting It Up

### With Agents

- **Invoice assembly**: Agent builds draft invoices from source events, applies the correct template, validates customer terms, PO requirements, tax treatment, and required supporting documents.
- **Recurring schedule control**: Agent watches recurring schedules and drafts invoices before the billing date, handling proration, pauses, contract end dates, and renewal reminders.
- **Cash application**: Agent matches `BankFeedTransactions` and `PaymentsReceived` against open invoices using customer, amount, invoice number, remittance text, and payment history.
- **Dunning orchestration**: Agent selects the right `DunningPolicy`, sends or drafts messages, logs `DunningEvents`, and pauses the cadence when a valid dispute opens.
- **Collections case management**: Agent groups invoices into `CollectionsCases` by customer, aging bucket, risk, and relationship owner so collectors work the account, not a pile of disconnected invoices.
- **Credit-hold enforcement**: Agent evaluates customer exposure, overdue balance, and open disputes before creating or clearing `CreditHolds`.
- **Write-off approval**: Agent prepares write-off packets with invoice history, dunning attempts, dispute status, and approval routing.

### Key Decisions

1. **Invoice grain**: Decide whether invoices are per customer, contract, project, shipment, location, or billing account. This drives `InvoiceLines`, portal display, and collections work.
2. **Template ownership**: Finance owns legal/tax language; brand or operations owns customer-facing presentation. Lock template versions so old invoices can be reproduced.
3. **Payment application rules**: Define how to handle partial payments, short pays, overpayments, credit memos, unapplied cash, and customer-level payment plans.
4. **Dunning policy**: Segment by customer value and risk. Strategic accounts may route through account managers before automated notices; transactional accounts can run stricter automation.
5. **Dispute pause rules**: Pause dunning only for the disputed amount or invoice, not the entire customer balance unless policy requires it.
6. **Credit-hold authority**: Document thresholds, override approvers, expiry, and what operational actions are blocked.
7. **GL posting boundary**: Decide whether this app posts detailed journal entries directly or sends summarized AR, revenue, tax, cash, and write-off entries to the ledger.

### Common Mistakes

- **Treating templates as decoration**: Templates encode tax language, payment instructions, PO references, and customer-specific requirements. Bad templates create disputes.
- **No immutable invoice version**: If an invoice can be edited after send without versioning, customer trust and auditability collapse.
- **Dunning disputed invoices**: Chasing disputed amounts without a pause rule burns relationships and creates noisy collections metrics.
- **One customer, many unlinked balances**: Customer-level exposure must include open invoices, credit memos, unapplied cash, payment plans, and pending disputes.
- **Credit holds without release logic**: Holds that never auto-clear create manual work and frustrate sales and service teams.
- **Write-offs as cleanup**: Write-offs need approval and root-cause analysis. Otherwise bad billing, bad credit policy, and weak collections hide inside accounting entries.

## Maintain — Keeping It Healthy

### Weekly Rhythm

- **Daily**: Generate approved invoices, send scheduled recurring invoices, process bank feed, and clear same-day cash application exceptions.
- **Monday**: Review aging movements, high-risk accounts, new `CollectionsCases`, and customers crossing credit thresholds.
- **Wednesday**: Work disputes with operations, sales, support, or delivery owners; clear stale disputes that are blocking cash.
- **Thursday**: Run dunning batches and review messages for strategic accounts before send.
- **Friday**: Review unapplied cash, overpayments, credit balances, open holds, and promised-payment follow-ups.
- **Month close**: Freeze aging snapshot, reconcile AR subledger to GL, review bad-debt reserve, and approve write-off candidates.

### What to Watch

- **Days-to-invoice**: Billable event to invoice sent. Target same day for recurring billing and under 3 days for services.
- **Auto-match rate**: Percent of payments applied without human touch. Target 80%+ before adding more collectors.
- **Unapplied cash age**: Cash older than 7 days should have an owner and next action.
- **Dispute dollars and age**: Separate collectable past-due from blocked-by-dispute past-due.
- **Dunning conversion**: Payment or promise-to-pay rate by dunning step. If later steps do all the work, earlier messaging is weak.
- **Credit-hold accuracy**: Holds should stop avoidable exposure without blocking customers who are current or legitimately disputed.
- **Write-off rate**: Rising write-offs mean credit policy, invoice accuracy, or collections follow-up is failing upstream.

### Exception Handling

- **Customer short-pays**: Apply the undisputed amount, create a dispute or deduction for the short amount, and route to the owner.
- **Customer overpays**: Apply to open invoices first; otherwise create a credit balance or refund case based on policy.
- **Payment without remittance**: Match by customer and amount; if ambiguous, hold in unapplied cash and contact the customer before applying.
- **Invoice sent with wrong template**: Void/reissue if not legally valid; otherwise issue corrected copy with version history intact.
- **Credit hold blocks an urgent order**: Require override approval with expiry and exposure amount. Do not clear the hold permanently unless policy is satisfied.
- **Dispute resolution grants a concession**: Issue a credit memo and link it to the original dispute, invoice, and approval.

## Scale — Growing It

### Adding Complexity

- **Customer portal**: Let customers view invoices, pay, download statements, update contacts, and open disputes without emailing AR.
- **Multi-entity billing**: One customer may buy from multiple legal entities. Preserve entity-level invoices while giving collectors a consolidated exposure view.
- **Multi-currency**: Store invoice currency, payment currency, exchange rate, and realized FX gain/loss. Revalue open balances during close.
- **E-invoicing and portals**: Support PEPPOL, customer procurement portals, and PDF/email side-by-side. Track delivery confirmation per channel.
- **Usage billing**: Bring metered usage into invoice drafts with validation, threshold checks, and customer-readable detail.
- **Deductions management**: Retail/wholesale customers may short-pay for allowances, shortages, or chargebacks. Track as structured deductions, not mystery discounts.

### Automation Opportunities

- **Predictive collections**: Score invoices before due date based on customer payment behavior, dispute history, and invoice attributes.
- **Smart remittance parsing**: Extract invoice references from emails, PDFs, bank memo fields, and portal exports.
- **Dynamic dunning**: Adjust tone and timing by customer segment, promise-to-pay history, and relationship owner.
- **Credit-limit refresh**: Recalculate exposure and recommended limits monthly using actual payment behavior.
- **Root-cause analytics**: Categorize disputes and credit memos so product, operations, sales, or billing can fix the upstream cause.

### When You Outgrow This Tier

Move to the enterprise AR playbook when:

- Multiple legal entities bill the same customers and intercompany AR becomes material.
- Revenue recognition complexity requires a dedicated ASC 606 engine.
- Customer procurement portals and deductions are a dominant workload.
- Invoice volume exceeds what one AR manager and a small collections team can control with lightweight workflow.
- International e-invoicing mandates, withholding tax, or FX exposure become board-level risks.

## By Industry

1. **SaaS / Subscription**: Recurring schedules, proration, failed payment retries, annual-prepay invoices, and usage true-ups are the core workload.
2. **Professional Services**: Time, expense, milestone, retainer, and write-up/write-down workflows must feed clean invoice drafts.
3. **Wholesale / Retail Distribution**: Deductions, chargebacks, allowances, and short-pays need structured cases and supporting evidence.
4. **Manufacturing**: Invoices follow shipment or delivery confirmation. Customer portals and PO matching drive payment timing.
5. **Construction / Field Services**: Progress billing, retention, site-level approvals, and partial disputes are common.
6. **Healthcare Services**: Patient, payer, and employer billing may need separate invoice templates and dispute routes.
7. **Logistics**: Accessorial charges, re-billing, and rate disputes require invoice-line evidence.
8. **Media / Agencies**: Campaign delivery, impressions, and make-goods must reconcile before invoicing.
9. **Education / Training**: Cohort billing, payment plans, and sponsor-paid invoices need clear billing-account structure.
10. **Nonprofit / Membership**: Pledges, dues, sponsorships, and grant reimbursements need different recognition and collection behavior.

## ERP•AI & Proto

**ERP•AI**: Use this skill when ERP•AI is composing a standalone invoicing app rather than a full ERP finance module. Connect the app to General Ledger, Tax Compliance, Customer 360, and payment providers. Keep the AR app responsible for invoice lifecycle and cash application; keep the ledger responsible for official accounting books.

**Proto**: Proto agents run the AR cycle through observation, routing, action, and improvement: observe invoices, payments, disputes, and customer exposure; route exceptions to the right owner; act on dunning, matching, and holds; improve by learning which invoice patterns create late payment or disputes.

## Related

- [Accounts Receivable](../accounts-receivable/SKILL.md) — basic mid-market AR when invoicing is still a books sub-module
- [General Ledger](../general-ledger/SKILL.md) — summary postings, AR control, cash, write-offs, and revenue entries
- [Tax Compliance](../tax-compliance/SKILL.md) — invoice-line tax calculation and jurisdiction evidence
- [Period Close](../period-close/SKILL.md) — AR subledger reconciliation, aging snapshot, and reserve review
- [Accounts Payable](../accounts-payable/SKILL.md) — payment workflow counterpart on the vendor side
