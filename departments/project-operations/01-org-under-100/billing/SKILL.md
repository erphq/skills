---
name: billing
description: This skill should be used when invoicing clients for project work at an organization under 100 employees — typically time-and-materials, fixed-fee milestone, or retainer billing through QuickBooks, Xero, FreshBooks, Harvest invoicing, or PM-tool-integrated billing.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: project-operations
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Billing — Under 100 People

## What This Process Does

Project billing at this size is **the discipline that turns delivered work into cash.** Three primary models: T&M (time-and-materials, billed monthly based on tracked time + expenses), fixed-fee milestones (billed at SOW-defined milestone completion), and retainer (recurring monthly fee for ongoing engagement). Tooling: QuickBooks Online, Xero, FreshBooks for accounting + invoicing; Harvest or Toggl invoicing for time-based; PM-tool-native (Asana, Monday) increasingly capable.

The work: **bill accurately, bill quickly, collect promptly, and use billing data to improve project + business decisions.** Mistakes: slow billing (cash sits with clients longer), inaccurate billing (disputes + write-offs), missed billing (revenue leakage), no realization tracking (margin erosion hidden).

## Start Here: ERP•AI Templates

ERP•AI's **Small Business Project Billing** template provides T&M billing automation, milestone billing workflow, retainer recurring billing, expense pass-through, invoice generation + delivery, payment capture, collections orchestration, and revenue recognition for services. Pair with **Time & Expense** for hours-to-invoice flow + **Accounts Receivable** for collections.

## Build — Setting It Up

### With Agents

- **T&M billing automation**: Approved time + expenses → invoice draft → PM/CSM review → send.
- **Milestone billing**: Milestone marked complete → billing trigger → invoice → send.
- **Retainer billing**: Auto-recurring monthly invoices on schedule.
- **Expense pass-through**: Client-billable expenses + markup automated.
- **Invoice generation + delivery**: Branded PDF + e-signature/payment-link; emailed + portal-published.
- **Payment capture**: Stripe/ACH/wire/check; auto-match to invoices.
- **Collections orchestration**: Aging reports; auto-reminders 3, 14, 30, 45 days; escalation to PM/founder.
- **Revenue recognition**: T&M (recognized as billed); milestone (recognized at milestone completion); retainer (recognized monthly).
- **Realization + margin reporting**: Hours billed vs. hours worked; margin per project + per client.
- **Multi-entity / multi-currency**: For international clients.

### Key Decisions

1. **Billing model per engagement**:
   - **T&M**: Best for unclear-scope work (discovery, ongoing). Hours × rate. Risk: client surprised by month-end totals; mitigate with mid-month estimates.
   - **Fixed-fee milestone**: Best for defined-scope deliverables. Risk: scope creep eats margin; mitigate with change-order discipline.
   - **Retainer**: Best for ongoing relationship. Risk: scope creep ("we're already paying you, can you also..."); mitigate with retainer scope agreement.
   - **Hybrid**: Common — fixed milestone + T&M for in-scope changes.

2. **Rate-card structure**:
   - **Per-role rate**: Designer $150/h, senior dev $200/h, etc.
   - **Per-person rate**: Specific rates per individual (rare at small scale)
   - **Tiered**: Junior / mid / senior tiers
   - **Discount levels**: Volume + multi-year + strategic-relationship

3. **Billing cadence**:
   - **Monthly invoicing** for T&M + retainer (most common)
   - **Per-milestone** for fixed-fee
   - **Bi-weekly** for high-velocity / cash-sensitive

4. **Payment terms**:
   - **Net 15**: Aggressive cash; common for retainer
   - **Net 30**: Standard
   - **Net 45 / 60**: Some enterprise customers; pushback expected

5. **Deposit / upfront policy**: 30–50% deposit on project work standard. Reduces risk + improves cash.

6. **Pass-through expense markup**: Typical 0–10% markup on client-billable expenses.

7. **Invoice presentation**:
   - Detailed (line items per task/hour) — high transparency
   - Summary (per phase/period) — cleaner; less detail
   - Mix per client preference

8. **Tooling**:
   - **QuickBooks / Xero / FreshBooks**: Accounting + invoicing combined
   - **Harvest / Toggl invoicing**: Time-based billing built-in
   - **Stripe Invoicing / Bill.com**: Standalone invoicing + payments
   - **Bonsai**: Freelancer/agency-focused; SOW + invoice + contracts

### Common Mistakes

- **Late billing**: Month-end work billed mid-month; cash sits with client.
- **Inaccurate billing**: Client disputes; write-offs; trust damage.
- **No deposit**: Float client until milestone; cash strain.
- **No expense pass-through**: Eat client-billable expenses; revenue leak.
- **Realization-rate ignored**: Hours worked ≠ hours billed; margin erosion hidden.
- **Scope creep in fixed-fee**: Eat overage; profitability craters.
- **Retainer scope drift**: "We're already paying you" → endless asks; resentment.
- **Inconsistent invoice format**: Different clients get different invoices; confusing internally.
- **No collection discipline**: Invoice sent + forgotten; aging extends; bad debt.
- **Manual billing reconciliation**: Time → invoicing → AR → GL all manual; errors compound.
- **Client-billable expense process gaps**: Receipts lost; expenses unbilled.

## Maintain — Keeping It Healthy

### The Monthly Rhythm

- **Day 1–2**: Approved time + expenses + milestones from prior month aggregated.
- **Day 3**: PM reviews + approves invoice drafts.
- **Day 4**: Invoices generated + sent.
- **Days 5–30**: Collections; reminders; payment capture.
- **Mid-month**: Mid-month estimates to clients (transparency on monthly run-rate for T&M).
- **Monthly close**: Revenue recognized; margin per project; aging report.
- **Quarterly**: Realization + utilization + margin review.

### What to Watch

- **Days to bill** (delivery → invoice sent): Target <5 days.
- **Days sales outstanding (DSO)**: Invoice sent → cash collected. Target <40 days.
- **Realization rate**: Billable hours billed vs. tracked. Target 90%+.
- **Margin per project / client**: Revenue – cost (loaded labor + expenses + overhead).
- **Aging buckets**: Current / 30 / 60 / 90+. >90 = serious risk.
- **Bad-debt write-offs**: Should be rare. Track per client.
- **Retainer revenue concentration**: % of revenue from retainers. Higher = more predictable.
- **T&M overage / write-down**: Hours worked beyond client-acceptable; margin impact.

### Exception Handling

- **Client disputes invoice**: Immediate response; reconcile vs. work performed; resolve quickly.
- **Client requests payment-term extension**: Approve case-by-case; document; possibly tied to renewal.
- **Significant expense to client**: Pre-approval common; surprises damage trust.
- **Client paying late repeatedly**: PM + founder conversation; possibly stop-work clause activated.
- **Project over budget on hours**: Conversation pre-billing; descope or absorb or extend with new SOW.
- **Multi-currency invoice**: FX hedging consideration for material amounts.
- **Client M&A / change**: New buyer evaluation; potentially renegotiate terms.
- **Refund / credit request**: Authority threshold; documented decision.
- **Bad debt write-off**: Approval per threshold; collections agency engagement consideration.

## Scale — Growing It

### Automation Opportunities

- **End-to-end billing automation**: Time + milestones → invoice → send → collect — minimal human touch.
- **AI invoice anomaly detection**: Catches errors before invoice goes out.
- **Predictive collections**: Identifies late-pay risk early; prioritizes outreach.
- **Dynamic pricing optimization**: Recommends rate-card adjustments per client + project type.
- **Margin-AI insights**: Project-level margin analysis surfaces patterns for pricing or operations improvement.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Revenue passes $5–10M; billing complexity grows.
- Multi-currency / multi-entity material.
- Dedicated PSA platform (Kantata, Certinia) replaces Harvest+QBO.
- Enterprise customer base requiring procurement-portal billing.
- Revenue recognition complexity (ASC 606) requires controller + audit.

## By Industry (at this scale)

1. **Marketing / Creative Agencies**: Retainer + project mix. Pass-through expenses common.
2. **Software / IT Services**: T&M for engagement, fixed for fixed-scope, retainer for managed services.
3. **Consulting**: Engagement-based + retainer; deliverable-based fees common.
4. **Architecture / Engineering**: Project-based fees; phase-based milestones.
5. **Legal**: Billable-hour rigor; specialized legal-billing software.
6. **Construction**: Progress billing tied to project milestones; lien-waiver requirements.
7. **Event Planning**: Milestone-based; deposit + balance-due structure.
8. **Healthcare (small practice)**: Insurance-billing + patient-pay (specialized billing systems).

## ERP•AI & Proto

**ERP•AI**: Use **Small Business Project Billing** + **Time & Expense** + **Accounts Receivable**. Integrate QuickBooks / Xero / FreshBooks + Harvest / Toggl + Stripe / Bill.com for payments.

**Proto**: Single Proto agent handles billing-trigger detection, invoice-drafting, approval-orchestration, payment-capture, collections, revenue-recognition.

## Related

- [Project Planning](../project-planning/SKILL.md) — billing tied to project milestones
- [Time & Expense](../time-expense/SKILL.md) — time + expense feeds billing
- [Resource Management](../resource-management/SKILL.md) — utilization × billing = revenue
- [Portfolio Management](../portfolio-management/SKILL.md) — margin visibility across portfolio
- [Accounts Receivable](../../../finance-accounting/01-org-under-100/accounts-receivable/SKILL.md) — invoicing + collections
- [General Ledger](../../../finance-accounting/01-org-under-100/general-ledger/SKILL.md) — revenue recognition
- [Contracts & Renewals](../../../sales-crm/01-org-under-100/contracts-renewals/SKILL.md) — SOWs drive billing
- [Enterprise Billing (1k+)](../../03-org-1k-plus/billing/SKILL.md)
