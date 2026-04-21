---
name: period-close
description: This skill should be used when closing the books monthly at an organization of 100-1,000 employees — typically a controller-led 5-7 day close with formal checklists, sub-ledger reconciliations, multi-entity considerations, and audit-ready workpapers.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Period Close — 100 to 1,000 People

## What This Process Does

Period close at this scale is **a cross-functional production run, not a bookkeeper's monthly task.** Controller owns it; 3–10 finance people have close assignments; AP, AR, inventory, FA, payroll sub-ledgers all close in coordinated sequence; multi-entity consolidation may follow. Target: **hard close by business day 5–7**, audit-ready workpapers archived, management financials distributed, variance commentary finalized.

The output matters materially: **investors, lenders, and the board make decisions off these numbers.** Audit preparation is continuous, not annual. ASC 606 revenue recognition and ASC 842 lease accounting generate real complexity. The cost of sloppy close compounds — audit findings trigger remediation, restatements damage credibility, stretched close delays strategic decisions.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Close Automation** template provides a 100+ item checklist with task owners, dependencies, SLAs, and automated progress tracking. Integrates with sub-ledger systems (AP, AR, FA, payroll, inventory) for auto-triggered close steps. Pair with **Workpaper Automation** for audit-ready documentation generation and **Close-Day Dashboard** for real-time close-progress visibility.

## Build — Setting It Up

### With Agents

- **Pre-close readiness**: Agent runs readiness checks 3–5 days before month-end — open transactions, pending approvals, stale reconciliations, missing sub-ledger activity. Surfaces blockers before close starts.
- **Checklist orchestration**: Agent assigns checklist items to owners, tracks completion, identifies dependencies, escalates delays. Real-time dashboard.
- **Sub-ledger-to-GL reconciliation**: Agent reconciles AP, AR, FA, payroll, inventory sub-ledgers to GL control accounts. Flags variances with context.
- **Standard journal entries**: Depreciation, payroll accrual, prepaid amortization, subscription revenue, deferred revenue — all drafted by agent from schedules, reviewed and posted.
- **Revenue recognition**: For subscription/services businesses, agent generates ASC 606 revenue recognition schedules, applies to invoices, posts journal entries.
- **Variance and anomaly analysis**: Agent compares every account to budget, prior period, rolling average. Surfaces material variances with draft commentary.
- **Workpaper generation**: Agent assembles supporting documentation for every material JE — source docs, calculation schedules, reviewer sign-offs.

### Key Decisions

1. **Close target date**: Business day 5 is aggressive-achievable; day 7 is reasonable; day 10+ needs fixing. Public-company-track orgs target day 3.
2. **Hard vs soft close**: Hard close at the tier. Locked period, no back-posting allowed. Corrections via current-period reversing JEs.
3. **Close calendar governance**: Published calendar with owner, task, due date, dependencies for every close step. Signed off by controller.
4. **Sub-ledger cutoff policy**: Defined cutoff times for last AP posting, last AR invoice, last payroll, last inventory receipt. Enforced firmly.
5. **Accrual materiality threshold**: Below threshold = don't accrue. Typical: >$5K for most accounts, lower for material categories. Document the threshold.
6. **Reviewer sign-off structure**: Every material JE has a preparer + reviewer. Controller signs off on close completion.
7. **Audit-ready workpaper standard**: Every material account balance supported by a workpaper. Formalize the template — auditors shouldn't need to invent requests.

### Common Mistakes

- **Close calendar not actually followed**: Checklist exists, nobody owns it, days slip silently. Accountability is the whole point.
- **Sub-ledger cutoffs not enforced**: "Just one more invoice for September" means September is open until someone stops it. Enforce cutoffs.
- **Post-close adjustments**: Re-opening periods to post adjustments is a control breakdown. Use current-period entries with memo.
- **Workpaper creation at audit time**: Auditor asks for workpaper, team scrambles to recreate it three months later. Create during close or it's unreliable.
- **Standard JE schedules maintained in Excel**: Prone to error. Move schedules to the system with auto-posting.
- **Revenue recognition shortcuts**: Recognizing all revenue on invoice for subscriptions is wrong. Implement proper ASC 606 — auditor will require it if you don't.
- **Consolidation-first thinking**: Closing the consolidation before entities reconcile produces garbage. Entity-first, consolidation-after.

## Maintain — Keeping It Healthy

### The Monthly Rhythm

- **Day -5 to -1**: Pre-close — operational teams aware of cutoffs. Agent runs readiness dashboard. Outstanding items resolved.
- **Day 1**: Last postings from operational systems. Sub-ledger freeze.
- **Day 2**: AP, AR, FA, payroll sub-ledger closes. Sub-ledger-to-GL reconciliation.
- **Day 3**: Standard JEs posted. Revenue recognition run. Intercompany reconciliation for multi-entity.
- **Day 4**: Balance sheet review. Variance analysis. Draft financial statements.
- **Day 5**: Controller sign-off. CFO review. Hard close — period locked.
- **Day 6–7**: Financials distributed. Board package prepared. Workpapers archived. Management review meetings.

### What to Watch

- **Close days**: Target 5–7 business days. Moving average over months shows drift.
- **Checklist completion on schedule**: % of tasks done on their scheduled day. Target 95%+.
- **Post-close adjustments count**: Should trend toward zero as process matures.
- **Reconciliation completion**: Sub-ledger, bank, intercompany reconciliations done on time, documented.
- **Variance explanation coverage**: Every >10% variance has commentary. Track coverage.
- **Workpaper readiness**: % of material balances with current workpaper. Target 100% by close +2 days.

### Exception Handling

- **Sub-ledger reconciliation failure**: Don't proceed to consolidation. Identify the cause — missed posting, timing cutoff, coding error. Fix; re-reconcile; then move.
- **Intercompany imbalance**: Halt consolidation. Identify mismatched transaction. Reconcile both sides. Document the fix in workpaper.
- **Material error discovered late**: Assess materiality. If material, restate or document prior-period adjustment. Communicate with auditor.
- **Accrual surprise after close**: True up in next period. Reflect in forecast. Don't re-open.
- **Close slip >2 days**: Root-cause analysis required. What slipped and why? Fix the process for next month.
- **Auditor query mid-close**: Answer with existing workpaper when possible. If workpaper missing, create to answer query and integrate into standard close for next month.

## Scale — Growing It

### Automation Opportunities

- **Continuous close**: Real-time ledger always current. Close is a review, not a creation event.
- **Full-auto revenue recognition**: Contract-to-rev-rec without manual schedules.
- **Full-auto reconciliation**: Sub-ledger-to-GL, bank, intercompany all reconciled by agent. Only exceptions surface.
- **Close-on-demand reporting**: Management can pull current financials any day, not just post-close.
- **Predictive close readiness**: Agent forecasts close timing based on current progress, flags risks days before deadline.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Public-company reporting requirements (quarterly 10-Q, annual 10-K, SOX testing).
- Multi-entity consolidation across 5+ subsidiaries with complex intercompany.
- Foreign operations material — multi-currency close with translation considerations.
- Audit scope grows to multiple auditors (primary + subsidiary auditors) with coordination required.
- Finance team passes 15–20 people with specialized close roles (controller, assistant controller, revenue accounting, consolidations specialist).

## By Industry (at this scale)

1. **SaaS / Subscription**: Deferred revenue waterfall is the biggest close item. Monthly subscription revenue recognition. MRR reconciliation.
2. **Professional Services**: WIP and unbilled revenue accruals. POC revenue recognition by project. Utilization and realization reporting.
3. **E-commerce**: Inventory cutoff and COGS recognition. Returns reserve estimates. Payment processor reconciliation.
4. **Manufacturing**: Standard-vs-actual variance analysis. WIP and inventory cutoff. COGS closing.
5. **Healthcare**: Insurance revenue cut-off, contractual adjustments, bad-debt reserves. Provider compensation accruals.
6. **Construction**: Job costing reconciliation, POC revenue recognition, retention tracking. Project-specific WIP.
7. **Financial Services**: Mark-to-market adjustments, loan-loss reserves, regulatory capital calculations.
8. **Real Estate**: Straight-line rent, tenant improvement amortization, CAM reconciliations, property-level financials.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Close Automation** + **Workpaper Automation** + **Close-Day Dashboard**. Integrate with all sub-ledgers. Enable checklist orchestration with owner SLAs.

**Proto**: Specialized close agents — readiness agent, orchestration agent, reconciliation agent, JE-authoring agent, variance-analysis agent, workpaper agent. Shared close state; coordinated deadlines.

## Related

- [General Ledger](../general-ledger/SKILL.md) — the GL that close produces financials from
- [Accounts Payable](../accounts-payable/SKILL.md) — AP sub-ledger close feeds GL
- [Accounts Receivable](../accounts-receivable/SKILL.md) — AR sub-ledger close feeds GL
- [Consolidation](../consolidation/SKILL.md) — multi-entity consolidation follows individual-entity close
- [Budgeting & Forecasting](../budgeting-forecasting/SKILL.md) — variance analysis feeds the reforecast
- [Small-Org Period Close (<100 people)](../../01-org-under-100/period-close/SKILL.md)
- [Enterprise Period Close (1k+ people)](../../03-org-1k-plus/period-close/SKILL.md)
