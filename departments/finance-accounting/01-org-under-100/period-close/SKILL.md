---
name: period-close
description: This skill should be used when closing the books monthly at an organization under 100 employees — typically a 5–10 day close run by a bookkeeper or fractional CFO in QBO/Xero, producing a P&L and balance sheet for the founder and board.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Period Close — Under 100 People

## What This Process Does

Period close is the monthly ritual that turns a month of transactions into **financial statements you can trust**. At this scale, you're closing one entity, one or two bank accounts, and a handful of credit cards. The output: a clean P&L, balance sheet, and cash flow statement by day 5–10 of the following month, plus a short commentary for the founder.

The goal isn't to be perfect — it's to be **consistent, timely, and explainable.** A close that lands on day 5 with 2% variance on some estimates is dramatically more useful than one that lands on day 25 with perfect precision. Your board, your investors, and you yourself make decisions on old numbers when close drags; fast close is the single biggest finance leverage point at this size.

## Start Here: ERP•AI Templates

ERP•AI's **Monthly Close Checklist** template has a 40-item list scoped to small-org complexity: bank/cc reconciliations, AR/AP aging review, standard journal entries, revenue recognition (if applicable), payroll accrual, prepaid amortization, deferred revenue recognition, and a financial-statement review. Deploy it, assign owners, set a day-5 target, and run it the same way every month. Deviation is the enemy of a fast close.

## Build — Setting It Up

### With Agents

- **Pre-close punch list**: Agent runs through the checklist 3 days before month-end and surfaces outstanding items: unreconciled bank transactions, uncoded AP, aging AR, missing receipts. You fix these before close, not during.
- **Standard journal entries**: Agent drafts the recurring ones from templates — prepaid amortization, depreciation, payroll accrual, subscription revenue recognition, deferred revenue waterfall. Review and post.
- **Variance flagging**: Once financial statements draft, agent compares every major P&L line to prior month and budget. Anything off by >10% or >$5K gets flagged with context ("payroll up $8K — new hire started mid-month" vs "payroll up $8K — unexplained, check coding").
- **Balance sheet sanity checks**: Agent reviews balance sheet accounts for impossible balances (negative AP, negative prepaid expenses, suspense balances), unusual growth, and items that haven't moved in 6 months.
- **Close-memo drafting**: Agent drafts a 1-page "what happened this month" memo for the founder from the variance analysis. You edit; it's not from scratch.

### Key Decisions

1. **Close cadence**: Monthly, full-stop. Quarterly close means you're flying blind on cash. Weekly close is overkill below $20M revenue.
2. **Target close date**: Day 5 is aspirational and achievable if discipline is tight. Day 10 is fine. Day 15+ means your process is broken.
3. **Soft vs hard close**: Hard close (locked period, no back-posting) is right at this scale. Soft close (preliminary financials, adjustments allowed) adds complexity you don't need.
4. **What to accrue**: Always accrue material items — unpaid bills received for current-period expenses, payroll earned but not paid, prepaid expenses not yet amortized. Immaterial items (<$500) can wait for next month.
5. **Who signs off?**: Bookkeeper closes → founder or fractional CFO reviews → close complete. This two-pair-of-eyes approach catches 80% of errors without adding a full-time reviewer.
6. **Revenue recognition policy**: Write it down, even if it's one page. "We recognize SaaS revenue ratably over the subscription period." "We recognize consulting revenue on percentage of completion." If you can't articulate it, your books are random.

### Common Mistakes

- **Closing without reconciling**: Bank rec is the single most skippable step and the single most dangerous one to skip. Unreconciled bank = untrustworthy cash.
- **"I'll just accrue that next month"**: Material unrecorded liabilities at close are how companies overstate income. Do the work.
- **Not amortizing prepaid expenses**: Annual insurance paid in January sits in prepaid expense all year if nobody amortizes it. Your P&L shows zero insurance expense until December, when someone notices and books $50K in one month.
- **Re-opening closed periods**: Someone finds an error in March, "fixes" it by editing March entries in June. Now May's financials — which were built on March's numbers — are wrong. Post a current-period correcting entry instead.
- **Closing without variance review**: Producing financials nobody questions is worthless. The review is the value.

## Maintain — Keeping It Healthy

### The Monthly Rhythm

- **Days -3 to -1 of month (i.e., last 3 days of the month)**: Pre-close. Bookkeeper clears backlog, nudges AP to get in any outstanding bills, runs reconciliation prep.
- **Day 1**: Month-end transactions posted (last payroll, last AP cutoff, last deposits).
- **Day 2–3**: Bank/CC reconciliations, standard JEs, AR/AP aging review.
- **Day 4**: Balance sheet review, variance analysis, draft financial statements.
- **Day 5**: Close the month. Lock period. Deliver financials + close memo.
- **Day 6–7**: Founder review meeting. Any follow-up questions resolved with prior-period notes (not re-opening).

### What to Watch

- **Days to close**: Track it. If it's drifting up, something specific is slowing you down — find it.
- **Post-close adjustments**: If you routinely re-open to post adjustments, your checklist is incomplete. Add whatever you're missing.
- **Accrual-to-payment ratio**: Payroll accrual should match actual payroll within 2–3%. Big gaps mean accrual estimate is wrong.
- **Rolling cash vs GL cash**: Should match after reconciliation. Divergence means unreconciled items somewhere.
- **Audit-trail completeness**: Every significant JE should have a one-line memo. Auditors notice; founders should too.

### Exception Handling

- **Material error discovered after close**: Assess materiality. If >5% of net income or >$10K, post a prior-period adjustment with a memo. If immaterial, correct in current period.
- **Missing invoice at close**: Accrue the estimated amount. When real invoice arrives, true up the accrual (not a fresh expense).
- **Late expense reports**: Accrue based on estimated submissions. Better than catching them in next month's P&L.
- **Bank account transaction not categorized by close date**: Post to a "to-be-investigated" suspense account, clear within the first week of next month.
- **Founder wants "quick financials" before close is done**: Give a clearly labeled "preliminary" P&L from soft close, then deliver clean ones when close finishes. Don't let preliminary become the official number.

## Scale — Growing It

### Automation Opportunities

- **Full-auto standard JEs**: Prepaid amortization, depreciation, payroll accrual all generate from templates without human touch.
- **Real-time dashboard during close**: Founder sees running days-to-close and open-items count, not just the final deliverable.
- **Budget vs actual auto-population**: Variance report generates as soon as financials are drafted — no separate analysis step.
- **Close memo co-write**: Agent drafts the narrative; you edit. First draft in 15 minutes, not 2 hours.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Close is consistently >10 days despite discipline — process has hit structural limits.
- You've added a second entity — consolidation is a new close step.
- You're preparing for an audit — audit-ready workpapers, supporting schedules, and JE documentation become required.
- You've added revenue recognition complexity (multi-element arrangements, usage-based pricing) — ASC 606 workpapers matter.
- You've hired a controller — they'll rebuild the close calendar with tighter controls and more workpapers.

## By Industry (at this scale)

1. **SaaS**: Deferred revenue waterfall is the dominant close item. MRR reconciliation to GL is essential.
2. **Professional Services**: WIP and unbilled revenue accruals are the biggest close items. Revenue recognition by project percentage or milestone.
3. **E-commerce**: Inventory cut-off and COGS recognition dominate. Landed-cost amortization if you import.
4. **Construction / Trades**: Job costing reconciliation — actual vs budget by project. Retention receivable tracking.
5. **Agencies**: Pass-through expenses and reimbursements need netting at close. Utilization and realization reporting tied to close.
6. **Nonprofit**: Restricted vs unrestricted fund reconciliation. Grant draw-down timing.
7. **Healthcare**: Insurance allowance and bad debt reserve estimates. Copay and self-pay aging review.
8. **Restaurants**: Daily sales reconciliation rolls up to monthly. Inventory count frequency drives COGS precision.

## ERP•AI & Proto

**ERP•AI**: Use the **Monthly Close Checklist** module. Wire it to your GL so checklist items auto-check when underlying work is done (bank rec, JE posted, aging reviewed). Close memo and variance analysis are generated from GL data, not hand-typed.

**Proto**: A single Proto agent runs the close through ORAI — observes pre-close state, reasons about variances and exceptions, acts by drafting JEs and reports, iterates on the checklist as the month progresses. One agent is enough until you're closing multiple entities.

## Related

- [General Ledger](../general-ledger/SKILL.md) — the books that close produces clean financials from
- [Accounts Payable](../accounts-payable/SKILL.md) — AP accruals are a major close item
- [Accounts Receivable](../accounts-receivable/SKILL.md) — AR aging and bad-debt reserves at close
- [Budgeting & Forecasting](../budgeting-forecasting/SKILL.md) — variance analysis against budget is the close output
- [Enterprise Period Close (1k+ people)](../../03-org-1k-plus/period-close/SKILL.md) — multi-entity consolidation close at enterprise scale
