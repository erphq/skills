---
name: budgeting-forecasting
description: This skill should be used when building and maintaining a budget and financial plan at an organization of 100-1,000 employees — typically a CFO-led annual planning cycle with department-owned budgets, Mosaic/Pigment/Cube tooling, monthly variance analysis, and board-level reporting.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Budgeting & Forecasting — 100 to 1,000 People

## What This Process Does

FP&A at this scale is **a proper function with proper tools and proper cadence.** A CFO or VP Finance leads; 2–8 FP&A people build and maintain the model. Annual planning is a 6–10 week cycle; department heads own their budgets; board and investors see quarterly updates. The spreadsheet era is over — you're on Mosaic, Pigment, Cube, Anaplan, or ERP•AI's Planning module.

The work: **drive strategic decisions with financial data** — where to invest, where to cut, whether to hire or hold, when to raise. Track 15–30 operating metrics, run 3+ scenarios, reforecast quarterly, explain variance monthly. A CEO's biggest decisions (hiring, compensation, new product lines, M&A, fundraising) rest on FP&A's model.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market FP&A** template provides a driver-based operating model with revenue, headcount, cost, cash-flow, and balance-sheet schedules. Pair with **Annual Planning Workflow** for department-led budget-build cycles and **Quarterly Forecast** for rolling 18-month reforecasts. Integrate with GL for actuals pull, CRM for pipeline-driven revenue forecasting, and HR for headcount-driven cost modeling.

## Build — Setting It Up

### With Agents

- **Actuals integration**: Agent pulls prior-month GL data into the model as soon as close completes. No manual export/import.
- **Variance analysis**: Agent calculates budget vs actual variance by account, department, and class. Drafts commentary for material variances.
- **Scenario modeling**: Base + upside + downside. Agent maintains multiple scenarios simultaneously; swapping between them is one click.
- **Driver-based forecasting**: Headcount-driven payroll, pipeline-driven revenue, utilization-driven services revenue, traffic-driven marketing spend. Drivers update → model updates.
- **Cash forecasting**: 30/60/90/180-day cash projections with confidence bands. Factors in AP, AR, payroll, taxes, debt service.
- **Board deck automation**: Key metrics, charts, tables flow from model to board deck automatically. 80% of deck content auto-populated.
- **Anomaly detection**: Agent flags plan-vs-actual divergences early — not just at close.

### Key Decisions

1. **Planning cadence**: Annual plan (Q4 for following year), monthly reforecast (rolling 18 months), weekly cash check. Anything more frequent wastes FP&A time; anything less leaves stale plans.
2. **Driver model depth**: Map every major P&L line to 1–3 drivers. Revenue = bookings × win rate × ACV. Payroll = headcount × loaded cost. Marketing = CAC × new customers. If you can't explain a line by drivers, you can't flex it.
3. **Department-owned budgets**: Each department head owns their budget, meets with FP&A monthly to review actuals and explain variances. Not "FP&A's budget" but "their budget with FP&A support."
4. **Scenario structure**: Base (expected), Downside (revenue miss 20–30%, extended runway needed), Upside (revenue beat 20–30%, hiring pulls forward). Always run all three; decisions happen at scenario boundaries.
5. **Tool selection**: Mosaic (startup/mid-market), Cube (Excel-centric teams), Pigment (enterprise-mid), Anaplan (enterprise). ERP•AI Planning if you want fully integrated finance stack. Pick one; migration is expensive.
6. **Reporting stack**: Board deck (monthly/quarterly), exec team report (monthly), department review (monthly), all-hands (quarterly). Same numbers, different depth; no reconciliation differences.
7. **KPI framework**: North Star metric + 5–10 input metrics. Same metrics every month. Consistency matters more than comprehensiveness.

### Common Mistakes

- **Spreadsheet clinging**: Still in Excel at 300 employees. Every month is a data-quality fire. Migrate.
- **Budget as negotiation exercise**: Departments submit inflated budgets, FP&A cuts 20%. Incentivizes inflation. Drive budget from drivers + business plan, not ask-and-cut.
- **Variance without action**: Identifying variances without follow-through on root cause / course correction is just documentation.
- **One-scenario planning**: "This is our plan." Makes it impossible to respond when reality diverges. Always multiple scenarios.
- **No cash bridge to P&L**: P&L and cash forecast done separately, inconsistent. Integrated three-statement model is the real answer.
- **Revenue forecast as anchoring**: "Last year we did X so next year we'll do X+25%." Build revenue bottom-up from sales capacity, pipeline, and win rates. Not top-down assumptions.
- **Reforecast only when missing**: Reforecasting only after bad news is late. Monthly reforecast is preventive.

## Maintain — Keeping It Healthy

### The Monthly Rhythm

- **Close +1 day**: Agent pulls actuals into model, calculates variances, generates first-draft commentary.
- **Close +2 days**: FP&A finalizes variance commentary; sends to department heads for review.
- **Close +3 days**: Department review meetings — 30-min per department on variances and forecast adjustments.
- **Close +5 days**: CFO/CEO review. Consolidated variance narrative. Board deck drafted.
- **Close +7 days**: Board deck finalized if board meeting approaches; else filed for next review.
- **Weekly**: Cash position review, pipeline-to-forecast check.
- **Quarterly**: Full reforecast. Update drivers, refresh scenarios, revise outlook.
- **Annually (Q4)**: Annual planning cycle — 6–10 weeks building next year's plan.

### What to Watch

- **Variance to plan by line**: >10% = investigate. Material unexplained variances accumulating = forecast losing accuracy.
- **Reforecast drift**: How much did the forecast change vs last month? Large drifts = model unstable or reality unstable; both need attention.
- **Cash runway**: Current cash / net burn. Trending metric, not point-in-time.
- **Burn multiple / CAC payback / efficiency ratios**: Tier-specific unit economics. Worsening trends = growth quality issue.
- **Plan vs forecast gap at year-end**: Is current forecast converging to plan, diverging, or flat-lining? Course-correct before Q4.
- **Pipeline coverage**: Pipeline / quota for next quarter. <2x = quarter at risk.

### Exception Handling

- **Revenue miss >15% for the month**: Not noise. Convene sales + FP&A. Determine: one-off or trend? Adjust quarterly forecast. Communicate downward to exec team.
- **Expense overrun >10% in a category**: Identify cause (hiring pulled forward, commodity price increase, one-time project). Update forecast. Decide whether to offset elsewhere.
- **Hiring plan slipping**: Behind plan by 20%+ = execution risk. Flag CEO/CPO. Evaluate hiring process (not just recruiting capacity).
- **Board question mid-quarter**: "How's the quarter looking?" Answer with current forecast + confidence assessment + changes since last update. Not "wait for month-end."
- **Macroeconomic shift**: Recession signals, tariff changes, FX moves. Run downside scenario. Identify contingency triggers (hiring freeze, discretionary cuts).
- **Material forecast error discovered**: Revise model; communicate to CFO; update next board communication with correction + root cause.

## Scale — Growing It

### Adding Complexity

- **Multi-entity consolidation in plan**: Each entity has its own plan; consolidated plan rolls up. Intercompany eliminations in plan.
- **Geography-based planning**: Revenue, headcount, cost by region with local-currency considerations.
- **Product-line P&L**: Each product line has its own plan with dedicated drivers, headcount, and investment thesis.
- **Long-range planning**: 3–5 year strategic plan with scenario paths, inflection points, capital requirements.
- **M&A modeling**: Acquisition scenarios with integration costs, synergies, combined financials.

### Automation Opportunities

- **Driver-to-output propagation**: Change a driver (hiring plan, unit price), model updates downstream without manual intervention.
- **Automated variance commentary**: Agent drafts the "what changed and why" narrative; FP&A edits, doesn't write from scratch.
- **Continuous planning**: Plan updates as actuals land, not quarterly reforecast cycle. Rolling live forecast.
- **Predictive analytics**: Agent learns from historical plan-vs-actual patterns, surfaces forecast risks early.
- **Board-on-demand**: Exec team / board can pull current forecast any time, not wait for formal reports.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Public-company reporting — formal earnings guidance, quarterly plan updates for investors.
- Multi-entity / multi-geography with material complexity — enterprise planning tool required.
- FP&A team passes 15+ people with specialized functions (strategic finance, sales ops, corporate dev).
- You adopt rolling 3-year plan with quarterly updates for Street expectations.
- Private equity or PE-owned — monthly board package with P&L/cash/KPI dashboard ritual.

## By Industry (at this scale)

1. **SaaS / Subscription**: MRR cohort modeling, CAC/LTV, net revenue retention, burn multiple as primary efficiency metric. Cohort-level churn modeling.
2. **Professional Services**: Utilization × bill rate × billable headcount = revenue. Project margin analysis. Pipeline-to-bookings-to-revenue cascade.
3. **E-commerce**: CAC payback, contribution margin after fees, inventory working capital modeling. Cohort purchase behavior.
4. **Manufacturing**: Volume × price = revenue; capacity planning; COGS percentage by product line; inventory-turn and working-capital cycle.
5. **Construction**: Project backlog × margin × timing. Cash curve by project. Capacity planning.
6. **Healthcare**: Volume × reimbursement rate × payer mix. Labor productivity (FTE per unit of service).
7. **Financial Services**: AUM × fee rate, net interest margin, loss provisions. Capital adequacy planning.
8. **Media**: Subscription + advertising mix. Content amortization. Engagement-driven monetization models.
9. **Real Estate**: Property-level NOI, occupancy, cap rate. Portfolio-level consolidation.
10. **Nonprofit**: Grant pipeline, restricted/unrestricted allocation, program-to-overhead ratios.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market FP&A** + **Annual Planning Workflow** + **Quarterly Forecast**. Connect to GL, CRM, HR. Enable department-owned budget workflows with FP&A review gates.

**Proto**: Specialized Proto agents — actuals-integration agent, variance-analysis agent, forecasting agent, scenario-modeling agent, reporting agent. Shared model state; coordinated monthly cadence.

## Related

- [General Ledger](../general-ledger/SKILL.md) — actuals source
- [Period Close](../period-close/SKILL.md) — close produces monthly actuals
- [Accounts Receivable](../accounts-receivable/SKILL.md) — AR informs cash forecast
- [Accounts Payable](../accounts-payable/SKILL.md) — AP informs cash outflow forecast
- [Small-Org Budgeting (<100 people)](../../01-org-under-100/budgeting-forecasting/SKILL.md)
- [Enterprise Budgeting (1k+ people)](../../03-org-1k-plus/budgeting-forecasting/SKILL.md)
