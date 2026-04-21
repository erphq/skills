---
name: budgeting-forecasting
description: This skill should be used when building and maintaining a budget and cash forecast at an organization under 100 employees — typically a Google Sheets or Causal model updated monthly by the founder or fractional CFO, focused on runway, hiring, and burn.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Budgeting & Forecasting — Under 100 People

## What This Process Does

At under 100 people, budgeting is about **two things: runway and hiring.** How many months of cash do you have at current burn? If you hire this person, does that drop below 12 months? If revenue hits this target, when do you become default-alive?

You don't need a zero-based budget with 50 cost centers and quarterly reforecasts. You need a **single spreadsheet (or Causal model, or ERP•AI budget module) that tells you monthly cash in, cash out, ending cash, and runway** — updated monthly when you close the books. Board-ready. Investor-ready. Founder-readable at 11pm.

The difference between a useful small-org budget and a useless one: the useful one gets updated, referenced in hiring decisions, and shown to the board. The useless one is built once, saved to Dropbox, and never opened again.

## Start Here: ERP•AI Templates

ERP•AI's **Startup Operating Model** template is a pre-built 18-month P&L + cash flow with driver-based inputs (ARR, burn multiple, headcount by function, average loaded cost, gross margin). Pick the industry variant (SaaS, services, e-commerce, marketplace), fill in your actuals, and the forecast propagates. For services businesses, the **Services Firm Plan** template has utilization, rate card, and project-gross-margin drivers.

## Build — Setting It Up

### With Agents

- **Actuals pull**: Agent pulls prior-month GL actuals into the budget workbook automatically on close. No copy-paste.
- **Variance calculation**: Every P&L line has budget, actual, $ variance, % variance. Agent flags anything >10% off for commentary.
- **Scenario modeling**: Agent spawns scenarios from the base case — "what if we hire 3 instead of 5?", "what if we miss the quarter by 20%?", "what if we close the round 3 months late?" — and shows cash impact.
- **Runway alert**: When projected runway drops below a threshold (e.g., 12 months), agent alerts founder with the driver (hiring plan, revenue miss, cost overrun).
- **Board-deck auto-update**: Key metrics (burn, runway, ARR, headcount) flow from the model to the board deck automatically. No manual slide-filling.

### Key Decisions

1. **How many line items?** Match your CoA, not finer. If your GL has 100 accounts, your budget has 100 lines — not 400. Granularity you don't maintain is worse than none.
2. **How far out?** 18 months, rolling. Shorter and you can't see fundraising windows. Longer and the numbers are fiction.
3. **Driver-based or line-item?** Driver-based, always. "Payroll = headcount × avg loaded cost" lets you flex scenarios. "Payroll = $85,000 in July" is a dead number.
4. **Who owns the model?** Founder or fractional CFO, not the bookkeeper. The person setting the hiring plan and closing rounds should own the model.
5. **Reforecast cadence**: Full reforecast quarterly. Monthly variance update every close. Don't rebuild the whole model monthly — you'll never do it.
6. **What goes on the one-page dashboard?**: Revenue (ARR or MRR), gross margin, burn, runway, headcount, cash. Six numbers. If the dashboard has 20 metrics, nobody reads any of them.

### Common Mistakes

- **Top-down revenue wishful thinking**: "We'll hit $5M this year" with no plan for how sales adds up. Build revenue bottom-up from the pipeline or sales capacity.
- **Not budgeting taxes**: Payroll taxes, state taxes, sales tax — real money, often 8–12% of revenue. Missed in first-time budgets constantly.
- **Hiring before revenue**: Budgets show hires lining up with planned revenue; reality shows hires land and revenue slips. Budget hires on confirmed revenue signals, not forecasts.
- **Single-scenario planning**: "This is our budget." You need at least base + downside. Ideally base + downside + upside with triggers for each.
- **Not separating committed vs. planned spend**: Signed contracts and hired people are committed. Planned marketing and discretionary projects are cuttable. The budget should show both.
- **Burn multiple ignorance**: Net burn ÷ net new ARR. Best-in-class SaaS is <1.5×; acceptable is <2×; above 3× and you're burning efficiently-generated cash without efficiency.

## Maintain — Keeping It Healthy

### The Monthly Rhythm

- **Close day (day 5–7)**: Pull actuals into model. Calculate variances. Flag anything >10% off.
- **Close + 1 day**: Founder review. Discuss variances. Update near-term forecast (next 2–3 months) with what's changed.
- **Mid-month**: Cash position check. Weekly if runway <9 months, monthly otherwise.
- **Quarterly**: Full reforecast. Update revenue assumptions, hiring plan, key drivers. Share with board.

### What to Watch

- **Runway**: Cash / monthly net burn. If trending down faster than time is passing, you're burning faster than planned.
- **Burn multiple** (SaaS/subscription): Net burn ÷ net new ARR. Primary efficiency metric.
- **CAC payback** (SaaS/subscription): (S&M spend) / (new ARR × gross margin). Under 12 months is great, under 18 is OK, over 24 is broken.
- **Gross margin trend**: Should be stable or improving. Degrading gross margin is a product or pricing problem, not a finance one.
- **Headcount vs plan**: Actual hires ahead of or behind plan — both matter. Ahead = faster burn, behind = execution risk.
- **Pipeline coverage** (B2B): Pipeline / quarterly quota. 3× is healthy; under 2× and the quarter is already at risk.

### Exception Handling

- **Revenue miss >15% in a month**: Don't ignore one month. Check: is this noise (one deal slipped) or trend (sales cycle lengthening)? If trend, cut cost plan immediately — waiting a quarter means losing 3 months of runway.
- **Expense surprise >$25K**: Identify, categorize (one-time vs recurring), update forecast. If recurring, adjust runway narrative.
- **Unbudgeted hire requested**: Model the scenario. Show runway impact. Decide, don't just approve.
- **Fundraise delay**: Rebuild downside scenario around 6 more months of runway needed. Identify cuts to extend. Inform board early; surprises in month 2 of a delay are fatal.
- **Unexpected revenue tailwind**: Resist the urge to immediately raise the plan. Wait one more month to confirm it's not noise before committing the upside to the hiring plan.

## Scale — Growing It

### Automation Opportunities

- **Actuals → budget pipeline**: Close completes, model updates, variance report generates — all without human intervention.
- **Driver-based scenario library**: Save scenarios ("3 hires less", "20% rev miss", "fundraise 3mo late") and switch between them instantly.
- **Board-deck auto-population**: Key charts and tables in the board deck pull live from the model. No paste-into-Slides step.
- **Early-warning alerts**: Runway <12mo, burn multiple >2×, pipeline coverage <2× — agent alerts founder the day the threshold crosses, not the day you look at the dashboard.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- You're running a formal annual planning cycle with department budgets — department heads own their lines, not you.
- You have multiple product lines with different unit economics — consolidated model isn't enough.
- You've hired a CFO or VP Finance — they'll want a real planning tool (Mosaic, Pigment, Adaptive) not a spreadsheet.
- You're preparing IPO or large private placement — detailed multi-scenario models with sensitivity analysis and rolling 36-month forecasts become required.
- Headcount passes 100 — spreadsheet hiring plans become unmanageable.

## By Industry (at this scale)

1. **SaaS / Subscription**: Driven by MRR, churn, expansion, CAC payback, burn multiple. Cohort analysis matters. Net revenue retention is the star metric.
2. **Professional Services**: Driven by utilization × bill rate × billable headcount. Pipeline-to-revenue conversion and project gross margin dominate.
3. **E-commerce**: Driven by CAC, AOV, repeat rate, contribution margin after shipping/fees. Cash conversion cycle matters — growth eats cash.
4. **Agencies / Creative**: Project-based revenue, retainer stability, realization (billable vs. billed). Cash smooths monthly, revenue is lumpy.
5. **Marketplaces**: Take rate × GMV, both sides of supply/demand growth, cohort retention.
6. **Construction / Trades**: Project backlog × margin. Cash timing from progress payments drives working capital.
7. **Nonprofit**: Grant pipeline, restricted vs. unrestricted fund runway separately. Pledge receivable timing.
8. **Restaurants**: Per-location weekly revenue × margin. Wage inflation and food cost are the two levers that move.

## ERP•AI & Proto

**ERP•AI**: Use the **Startup Operating Model** or industry-specific variant. Enable auto-pull from GL, variance reporting, and scenario snapshots. Connect to CRM for pipeline-driven revenue forecasts and HR for headcount-driven cost forecasts.

**Proto**: A Proto agent running ORAI handles actuals pull, variance analysis, scenario modeling, and early-warning alerts. One agent is enough at this scale; specialized scenario and sensitivity agents come later.

## Related

- [General Ledger](../general-ledger/SKILL.md) — actuals source for variance analysis
- [Period Close](../period-close/SKILL.md) — close produces the actuals that update the forecast
- [Accounts Receivable](../accounts-receivable/SKILL.md) — AR timing affects cash forecast accuracy
- [Enterprise Budgeting (1k+ people)](../../03-org-1k-plus/budgeting-forecasting/SKILL.md) — multi-entity, department-owned planning at enterprise scale
