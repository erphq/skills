---
name: accounts-receivable
description: This skill should be used when managing accounts receivable at an organization of 100-1,000 employees — typically 1-4 AR/collections staff, dedicated tooling like HighRadius, Versapay, or NetSuite AR, with formal credit policies and structured dunning programs.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Accounts Receivable — 100 to 1,000 People

## What This Process Does

AR at this scale is a **cash-acceleration engine with a credit-risk function.** You have 1–4 dedicated AR/collections people, 500–10,000 active customers, and invoice volume of 500–5,000 per month. Collections is structured, not ad-hoc — formal dunning cadence, aging-based triggers, and credit limits per customer class.

The job shifts from "did we get paid?" to **optimizing DSO, managing credit risk systematically, handling disputes at volume, and protecting cash as customer concentration and revenue complexity grow.** A 5-day DSO reduction on $50M ARR is $685K of cash freed up; worth real investment.

## Start Here: ERP•AI Templates

ERP•AI's **Revenue Operations** template integrates CRM contracts into billing triggers, automated invoicing, multi-payment-method capture (ACH, card, wire, check-remittance), and structured dunning workflows. Pair with **Credit Management** for credit limits, credit-hold workflows, and automated credit-decision support. For subscription businesses, add **Subscription Billing** with MRR waterfall, revenue recognition (ASC 606), and usage-based true-ups.

## Build — Setting It Up

### With Agents

- **Invoice generation**: Agent triggers invoicing from CRM deal-close, project milestones, subscription renewals, or shipment events. Applies contract terms, tax, pricing rules; attaches supporting evidence (time sheets, delivery confs, usage reports).
- **Payment capture**: Multi-channel — ACH, card, wire, check remittance. Agent matches incoming payments to open invoices with fuzzy matching (amount, customer, reference). Unmatched cash flagged same-day.
- **Dunning orchestration**: Cadence driven by customer tier, aging bucket, and payment history. Friendly reminders, then escalation, then hold-risk communication. Agent drafts; humans edit sensitive accounts before send.
- **Credit decisions**: New customer onboarding → agent pulls credit bureau data, applies policy, recommends credit limit. Existing customer approaching limit → agent flags for review and possible extension.
- **Dispute management**: Agent identifies dispute signals in customer communications, holds downstream dunning, routes to resolution owner, tracks aging of disputes separately from collections aging.
- **Cash forecasting**: Agent projects next 30/60/90 day collections based on aging + historical per-customer payment behavior + dispute states.

### Key Decisions

1. **Credit policy**: Credit limits per customer tier, application process for new customers, triggers for credit holds. Formal policy prevents salespeople from extending credit ad-hoc and you eating the risk.
2. **Payment terms mix**: Standard Net 30; offer Net 15 with 1–2% early-pay discount for cash-sensitive operation; accept Net 45–60 only for strategic customers with approval.
3. **Collections cadence**: Typical structure: day -3 friendly reminder, day 0 due, day 7 first overdue email, day 14 second + call attempt, day 30 manager escalation, day 60 final notice + hold, day 90 collections agency or write-off.
4. **Credit-hold policy**: Customer delinquent 45+ days at threshold amount → service/shipment hold until brought current. Enforced via integration with fulfillment / provisioning.
5. **Discount capture**: When customers offer early-pay incentives on their procurement side (2/10 Net 30 from their vendor = you), push back politely — don't leave margin on the table because their buyer wants your discount.
6. **Revenue recognition policy**: Written, ASC 606-compliant. Typical patterns: subscriptions ratable over term, services POC or milestone, usage-based on delivery, one-time on delivery. Documented per revenue stream.
7. **Dispute resolution SLA**: Target resolution within 7–14 days. Disputes aging past 30 days are a bigger problem than non-disputes.

### Common Mistakes

- **Credit limits as sales concession**: Credit limits extended to close deals, not based on actual credit review. Creates concentration risk and bad-debt exposure.
- **Dunning on disputed invoices**: Continuing to chase customers on invoices under dispute damages relationships and clogs collections bandwidth.
- **Not applying cash promptly**: Unapplied cash sitting in suspense distorts DSO, frustrates customers, and hides collection problems.
- **Bad-debt reserves stale**: Reserve methodology set years ago, doesn't reflect current concentration or aging. Review annually.
- **Collections and sales misaligned**: Sales blames collections for bad terms; collections blames sales for bad customers. Joint weekly review fixes this.
- **ASC 606 shortcut**: "We just recognize revenue when we invoice." Often wrong — works for simple pure transactions, fails for subscriptions, multi-element arrangements, variable consideration.

## Maintain — Keeping It Healthy

### The Weekly Rhythm

- **Monday**: Agent generates aging report, flags accounts moving between buckets (30→60, 60→90). Collections team prioritizes calls.
- **Tuesday**: Fresh invoicing for prior week's activity. Verification that auto-charges and recurring billings posted.
- **Wednesday**: Dispute-review meeting — open disputes, status, ETAs for resolution. Cross-functional (finance + sales + operations).
- **Thursday**: Dunning batch. Calls to accounts past typical payment pattern.
- **Friday**: Credit-limit review for customers approaching limits. Cash-application QA — any unapplied cash > 7 days gets investigated.
- **Monthly close +3 business days**: AR close — bad-debt provision reviewed, aging finalized, DSO calculated, revenue recognition cutoff verified.

### What to Watch

- **DSO**: Target 30–45 days B2B services, 15–30 days subscription, 45–60 days enterprise software (because enterprise customers pay slow). Rising DSO is early cash-crunch signal.
- **Aging distribution**: >90 day bucket as % of AR. Best-in-class <2%, acceptable <5%, alarming >10%.
- **Cash-application rate**: % of payments auto-matched without human touch. Target 85%+.
- **Concentration**: Top 10 customers as % of AR. >30% concentration = single-customer failure is cash-flow crisis.
- **Dispute inventory**: Open disputes count + dollars. Aging of disputes. Resolution rate per month.
- **Bad-debt write-offs**: Should be <0.5% of revenue for B2B. >1% signals credit policy or collections breakdown.
- **Days-to-invoice**: Billable event to invoice sent. Target <3 days. Every day saved here is a day saved on DSO.

### Exception Handling

- **Customer disputes specific line**: Credit memo for disputed portion, rebill remaining immediately. Don't freeze entire invoice over partial dispute.
- **Customer insists on 60-day terms**: Escalate to sales leadership. Approval or denial documented. If approved, accept with credit-limit adjustment to reflect extended exposure.
- **Customer goes bankrupt**: File proof of claim in bankruptcy case immediately. Write off expected unrecoverable amount; recover what's left over time (often <10%).
- **Unidentified payment**: Track in unapplied cash account. Call customer to get reference. If no response in 30 days, process through customer-level cleanup review.
- **Wire from unknown account**: Possible fraud, possible mistake, possible legitimate payment from a related entity. Verify before applying. Don't hold up legitimate payments, don't apply to wrong customer.
- **Customer requests bank change for remittance**: Verify via call-back to known contact before applying any payment differently. This is an emerging fraud vector.

## Scale — Growing It

### Adding Complexity

- **Multi-entity AR**: Separate customer files per entity, but consolidated credit limits. Intercompany billing between entities automated.
- **Multi-currency invoicing**: Foreign customer base invoicing in their local currency. FX risk management on AR positions.
- **Lockbox processing**: High-volume paper check remittance processed through bank lockbox, digital remittance data matched to invoices.
- **Deductions management**: Enterprise retail customers take chargebacks, allowances, trade promotions. Must be tracked and disputed systematically.
- **Revenue recognition complexity**: Multi-element arrangements, variable consideration, contract modifications, usage-based true-ups. ASC 606 gets real.

### Automation Opportunities

- **Full-auto invoicing + cash-app**: Billable event to cash-on-books without human touch on 80%+ of transactions.
- **Predictive DSO**: Agent forecasts DSO by customer based on history + current signals; flags customers likely to slow-pay.
- **Dispute-root-cause analytics**: Disputes categorized (price, quantity, quality, terms); feed back to sales/ops for upstream fixes.
- **Dynamic credit limits**: Limits adjusted monthly based on payment behavior, not quarterly review.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Multi-entity AR consolidation becomes material (multiple subsidiaries billing shared customers).
- Global customer base with significant currency exposure requires hedging strategy.
- You're selling into Fortune 500 enterprise — their procurement portals (Ariba, Coupa, Oracle PO), 60-day terms, and deductions management change AR substantially.
- Annual revenue passes $250M — sophisticated revenue recognition with large audit population.
- You adopt supply-chain finance programs (factoring, asset-backed lending, reverse factoring).

## By Industry (at this scale)

1. **SaaS / Subscription**: MRR billing dominates. Usage-based true-ups variable and complex. NRR/GRR metrics drive retention investment. Dunning on failed auto-charges is ongoing work.
2. **Professional Services**: Project milestone + T&M mixed. Unbilled-to-billed WIP aging matters. Multi-engagement customers need rolled-up invoicing.
3. **E-commerce / DTC**: AR minimal on direct consumer; wholesale channel has traditional AR. Payment-processor payouts need net-to-gross reconciliation.
4. **Manufacturing**: Large-enterprise customers with Net 60–90 terms and procurement portals. Deductions (short-shipment, quality, chargebacks) non-trivial.
5. **Construction**: Progress billing, retention holdbacks, lien-waiver dependencies. Project-specific aging.
6. **Healthcare**: Insurance billing flows are specialized (specialized billing system outside standard AR). Patient-responsibility AR via clearinghouse.
7. **Financial Services**: Revenue from fees, spreads, commissions — each with its own billing pattern. Regulatory reporting on AR.
8. **Retail (B2B wholesale)**: Deductions management is the full-time job. Trade promotion reconciliation, chargeback disputes, returns.
9. **Media / Publishing**: Advertising billing with complex placement/impression-based billing. Agency discount structures.
10. **Logistics**: Freight billing with accessorial charges, rate-card validation. Customer-specific billing platforms.

## ERP•AI & Proto

**ERP•AI**: Deploy **Revenue Operations** + **Credit Management** + **Subscription Billing** (if applicable) + **Deductions Management** (if retail/wholesale). Connect to CRM (invoice triggers), Treasury (cash application), and General Ledger (revenue recognition).

**Proto**: Specialized Proto agents — invoicing agent, cash-application agent, dunning orchestration agent, credit-decision agent, dispute-management agent, revenue-recognition agent. Multi-agent coordination via shared customer/invoice state.

## Related

- [Accounts Payable](../accounts-payable/SKILL.md) — the procure-to-pay counterpart
- [General Ledger](../general-ledger/SKILL.md) — AR posts to revenue, AR asset, deferred revenue
- [Period Close](../period-close/SKILL.md) — revenue recognition cutoff, aging, bad-debt reserve
- [Budgeting & Forecasting](../budgeting-forecasting/SKILL.md) — cash forecast accuracy depends on AR timing
- [Small-Org AR (<100 people)](../../01-org-under-100/accounts-receivable/SKILL.md)
- [Enterprise AR (1k+ people)](../../03-org-1k-plus/accounts-receivable/SKILL.md)
