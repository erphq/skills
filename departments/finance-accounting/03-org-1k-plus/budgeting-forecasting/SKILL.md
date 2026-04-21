---
name: budgeting-forecasting
description: This skill should be used when the task involves create budgets, run variance analysis, build rolling forecasts, and model scenarios so you can plan with confidence.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - erp
  type: skill
  scope: internal
---
# Budgeting & Forecasting

## What This Process Does

Budgeting and forecasting is how your company plans its financial future and tracks whether reality matches the plan. A budget is your financial roadmap for the year — it says how much revenue you expect to earn, how much you plan to spend, and what profit you are targeting. A forecast is an updated prediction of where you will actually end up, revised as new information comes in throughout the year.

The budget is set once (usually in Q4 for the following year) and generally does not change. The forecast updates monthly or quarterly based on actual results and new intelligence. Together, they answer the questions that keep executives up at night: Are we going to hit our numbers? Where are we overspending? Can we afford that new hire? Do we need to cut costs? What happens if we lose that big customer?

Variance analysis is the bridge — comparing actual results to the budget and explaining why they differ. "Revenue was $200K below budget because the enterprise deal slipped to next quarter" is more useful than just knowing you missed by $200K.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Annual Budget Builder**, the **Rolling Forecast Engine**, the **Variance Analysis Dashboard**, and the **Scenario Planning Workbench**. If you are a SaaS company, the **SaaS Metrics & Planning Suite** includes subscription-based revenue modeling. If you are in manufacturing, the **Production Budget Template** links sales forecasts to production plans and material requirements. Deploy the closest match from ERP•AI's 720+ catalog, then customize.

## Build — Setting It Up

### With Agents

AI agents transform budgeting from a painful annual exercise into a continuous planning capability:

- **Budget template generation**: An agent builds budget templates from your actual GL structure — every cost center, every account, every revenue stream gets a line. It pre-populates with prior-year actuals and growth/inflation assumptions so budget owners start with context, not blank cells.
- **Assumption management**: Agents maintain a central repository of budget assumptions (headcount growth, salary increases, price changes, volume projections, FX rates) so every department works from the same set of facts. When an assumption changes, agents cascade the impact across all affected budgets.
- **Bottom-up compilation**: As department managers submit their budgets, agents compile them into a consolidated view, check for mathematical errors, validate against constraints (total spending cannot exceed X), and flag outliers (one department projecting 50% growth while others project 10%).
- **Variance analysis**: Each month, agents compare actuals to budget by account, department, and revenue stream. They calculate the variance, classify it (volume, price, mix, timing, one-time), and produce a narrative explaining what drove the difference.
- **Rolling forecast updates**: Agents take actual results for completed months and combine them with the forecast for remaining months, producing a continuously updated full-year estimate. They can adjust the forecast based on trends, pipeline data, and leading indicators.
- **Scenario modeling**: Agents build what-if scenarios — what happens if revenue drops 20%, if you hire 50 more people, if a key customer churns, if raw material costs spike? They model the P&L, balance sheet, and cash flow impact so you can plan contingencies.

### Key Decisions

1. **Budget methodology**: Top-down (leadership sets targets, departments allocate within them), bottom-up (departments build from detailed plans), or a hybrid? Most companies use a hybrid — revenue targets top-down, expense budgets bottom-up within a spending envelope.
2. **Budget calendar**: When does the process start and end? A typical cycle: kick off in September, department submissions in October, reviews in November, board approval in December, effective January 1. Compressed timelines create sloppy budgets.
3. **Level of detail**: Budget by month or quarter? By department, by team, or by individual cost center? Detailed budgets enable better accountability but take longer to build and maintain. Budget at the level you are willing to manage.
4. **Forecast frequency**: Monthly forecasts give the freshest data but require more effort. Quarterly forecasts are common for companies that do not change rapidly. Some companies use continuous rolling forecasts (always looking 12–18 months out).
5. **Variance materiality**: Not every variance deserves analysis. Set thresholds — investigate variances above $10,000 or 10% of budget, whichever is greater. This focuses attention where it matters.
6. **Driver-based vs. line-item**: Do you budget each expense line individually, or do you build the budget from business drivers (number of employees times average cost, number of units times variable cost per unit)? Driver-based budgets are more accurate and easier to flex when volumes change.

### Common Mistakes

- **Budget season trauma**: If budgeting takes four months and involves 15 rounds of revisions, the budget is stale before it is approved. Streamline the process to 6–8 weeks.
- **Sandbagging**: Managers pad their budgets to make targets easy to hit. This misallocates resources. Address it culturally and with agent-driven benchmarking that compares budget requests to historical spending and peer departments.
- **Set it and forget it**: A budget that no one looks at after January is worthless. Monthly variance review and quarterly forecast updates keep the budget relevant.
- **Spreadsheet hell**: Hundreds of linked spreadsheets with broken formulas, version control issues, and no audit trail. This is the number-one reason to move to a real budgeting tool.
- **No scenarios**: If you have only one budget and reality differs, you are flying blind. Build at minimum a base case, an upside, and a downside scenario.
- **Ignoring cash**: A profitable budget that runs out of cash is useless. Budget the cash flow statement, not just the income statement.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

- **Budget vs. actual summary**: P&L view showing budget, actual, and variance by line item, with drill-down to department and cost center. Highlight items exceeding variance thresholds.
- **Forecast tracker**: Current full-year forecast compared to original budget. Shows how the forecast has evolved month over month — is it trending up or down?
- **Revenue waterfall**: Visual breakdown of what changed between budget and forecast — new deals added, deals lost, deals delayed, price changes, volume changes.
- **Spending alerts**: Real-time notification when a department is on pace to exceed its budget. "Marketing has spent 60% of its annual budget in the first 4 months" is an alert that prevents surprise.
- **Cash forecast**: Rolling 13-week and 12-month cash forecast based on AR collections, AP payments, payroll, capital expenditures, and debt service.
- **Headcount tracker**: Actual headcount vs. budgeted headcount by department, including open requisitions and expected start dates.

### Exception Handling

- **Budget overruns**: Department exceeds monthly budget by more than threshold. Agent notifies the department head and their manager, shows the year-to-date position, and asks whether this is a timing issue (spend was pulled forward) or a permanent overrun requiring a budget transfer.
- **Revenue shortfall**: Actual revenue trails forecast by more than threshold. Agent analyzes whether the shortfall is volume (fewer units), price (lower ASP), or mix (lower-margin products). Recommends expense adjustments to protect margin.
- **Unbudgeted expenses**: A cost hits a line item with zero budget. Agent flags it and asks whether this is a misclassification (should be coded elsewhere), a new initiative (needs a budget transfer), or an error.
- **Assumption breaks**: A key assumption (e.g., FX rate, raw material price, headcount) deviates significantly from what was budgeted. Agent quantifies the full-year impact and recommends forecast adjustments.
- **Capital expenditure overrun**: A capital project exceeds its approved budget. Agent alerts the project sponsor and finance team, shows the variance, and blocks additional spending above the approved amount until re-approved.

### Routine Tasks

- **Monthly**: Agents produce variance analysis reports within 5 business days of close. Update the full-year forecast with actual results. Flag departments with year-to-date spending above plan. Prepare management discussion materials for leadership review.
- **Quarterly**: Agents conduct a deep forecast review — reassess revenue pipeline, hiring plans, capital projects, and key assumptions. Model updated scenarios. Prepare board-level reporting packages.
- **Annually**: Agents kick off the budget cycle by distributing templates with prior-year actuals and assumptions. Compile department submissions, validate for consistency, and produce consolidated budget drafts. Support the review and approval process.

## Scale — Growing It

### Adding Complexity

- **Multi-entity**: Each entity budgets independently but consolidation must work. Intercompany transactions (transfer pricing, shared services allocations) must be budgeted and eliminated in consolidation. Agents manage entity-level budget compilation and consolidated budget production.
- **Multi-currency**: International entities budget in local currency but report in the parent's functional currency. Budget exchange rates must be set and locked. Agents calculate the FX impact on consolidated results — separating operational performance from currency effects.
- **Driver-based planning**: As the business grows, line-item budgeting becomes unwieldy. Shifting to driver-based models (revenue per sales rep, cost per unit, infrastructure cost per customer) makes budgets more flexible and accurate. Agents maintain driver assumptions and calculate the resulting line-item budgets.
- **Workforce planning integration**: Headcount is usually 60–70% of expenses. Integrating HR headcount planning (new hires, promotions, departures, benefits elections) into the financial budget eliminates the biggest source of budget error. Agents sync headcount plans to financial models.
- **Capital planning**: Multi-year capital investment plans need to be integrated with the annual budget and long-range plan. Agents model the depreciation, maintenance, and operational impact of capital decisions.

### Automation Opportunities

- **AI-powered forecasting**: Machine learning models that predict revenue, expenses, and cash flow based on historical patterns, pipeline data, market indicators, and macroeconomic factors. These augment (not replace) human judgment.
- **Continuous planning**: Instead of annual budgets with monthly forecasts, agents maintain a continuously updated financial plan that incorporates real-time data. The "budget" becomes a living document.
- **Automated variance narratives**: Agents produce written explanations of variances, not just numbers. "SG&A was $150K over budget due to $120K in unplanned legal fees related to the patent dispute and $30K in higher travel costs for the new sales territory launch."
- **Scenario triggers**: Define scenarios tied to leading indicators — if the pipeline drops below $X, automatically model the cost-reduction scenario. If a competitor announces a price cut, model the market share impact. Agents monitor triggers and activate relevant scenarios.
- **Board reporting automation**: Agents compile board-ready financial packages with commentary, charts, and KPIs — turning a 2-day manual process into a few hours.

### When to Redesign

- Your budget cycle takes more than 10 weeks — your process has too many review iterations and not enough delegation.
- Variance analysis consistently says "timing" for everything — you are not doing real root-cause analysis.
- Management has stopped looking at the budget because it was irrelevant by March — your forecasting is not frequent or accurate enough.
- You cannot model a basic scenario (10% revenue decline) without a week of spreadsheet work — you need driver-based models and better tools.
- Revenue forecasting accuracy is consistently off by more than 15% — your forecasting inputs or methodology need an overhaul.

## By Industry

1. **Manufacturing**: Production budgets drive everything — sales forecasts feed production plans, which drive raw material purchases, direct labor scheduling, and overhead allocation. Standard cost budgets set expected costs for the period. Agents link the sales forecast to the production budget, calculate material requirements, and model the impact of production volume on unit costs.

2. **Healthcare**: Budgeting centers on patient volume by service line, payer mix assumptions, and reimbursement rates. Physician compensation models, staffing ratios per patient, and supply costs per procedure are the key drivers. Agents model the financial impact of payer mix shifts and reimbursement rate changes on operating margins.

3. **Education**: Tuition revenue depends on enrollment projections and financial aid assumptions. State appropriations (for public institutions) and endowment draws add revenue complexity. Faculty compensation is largely fixed once contracts are signed. Agents model enrollment scenarios against fixed-cost structures to identify financial sustainability thresholds.

4. **Retail**: Sales budgets are built by store, by week, incorporating seasonality, promotions, and new store openings. Gross margin budgets require merchandise planning (markdowns, shrinkage, promotional costs). Agents build store-level sales budgets using comparable-store growth assumptions and new store ramp curves.

5. **Hospitality**: Revenue budgets are built from occupancy rates, average daily rate (ADR), and RevPAR targets by property. Seasonal patterns are pronounced. Labor costs are budgeted as a percentage of revenue by department (rooms, F&B, spa). Agents model revenue scenarios using demand curves and competitor rate intelligence.

6. **Construction**: Project-based budgets estimate revenue and cost for each contract. Overhead budgets cover equipment not billed to projects, general office, and business development. Cash flow forecasting is critical because project payments are lumpy and often delayed. Agents build project-level budgets from bid estimates and aggregate into a company budget with cash flow projections.

7. **Real Estate**: Operating budgets are built property by property based on rent rolls, lease expirations, and market rent assumptions. Capital expenditure budgets cover tenant improvements, building maintenance, and development projects. Agents model rent roll changes (expirations, renewals, new leases) and their impact on NOI by property and portfolio.

8. **Agriculture**: Revenue budgets depend on crop yields (weather-dependent), commodity prices (market-dependent), and acreage planted. Input costs (seed, fertilizer, chemicals, fuel) are significant and volatile. Agents model revenue scenarios using yield projections and commodity futures prices, highlighting the range of possible outcomes.

9. **Banking & Financial Services**: Net interest income is budgeted using loan and deposit volume assumptions and interest rate scenarios. Fee income budgets come from transaction volumes and pricing. Provision for credit losses is a major expense budget driven by portfolio quality assumptions. Agents model NII sensitivity to rate changes using repricing gap analysis.

10. **Insurance**: Premium revenue budgets depend on policy count growth, retention rates, and rate adequacy. Loss ratio budgets use actuarial projections of claims frequency and severity. Investment income depends on portfolio allocation and yield assumptions. Agents build premium budgets from underwriting pipeline data and model combined ratio scenarios.

11. **Legal**: Revenue budgets are built from billable hour targets by attorney, realization rates, and hourly rate increases. Alternative fee arrangements complicate revenue forecasting. Expense budgets focus on compensation (the largest cost) and office occupancy. Agents model revenue based on attorney utilization targets and historical realization rates.

12. **Government**: Government budgeting follows a formal appropriation process — legislative bodies approve spending authority by fund and program. Budgets are legally binding spending limits (not just plans). Revenue budgets depend on tax base assumptions and collection rates. Agents manage the appropriation process workflow and model revenue sensitivity to economic assumptions.

13. **Pharma**: R&D budgets are built by program and clinical trial phase, with spending escalating dramatically from Phase I to Phase III. Commercial launch budgets include massive marketing and sales force investments. Revenue forecasts for new drugs use probability-weighted peak sales models. Agents build program-level R&D budgets with phase-transition probability adjustments.

14. **Automotive**: Volume budgets drive everything — units sold by model, by market. Variable costs per unit, fixed manufacturing costs, and capacity utilization are the key budget drivers. Model launch costs and end-of-life costs create budget spikes. Agents link sales volume assumptions to production plans and model the contribution margin by model and market.

15. **Telecom**: Subscriber growth and churn rates drive revenue budgets. ARPU (average revenue per user) assumptions reflect plan mix and usage trends. Network capital expenditure budgets are the largest investment — driven by coverage expansion, capacity upgrades, and technology transitions (4G to 5G). Agents model subscriber economics and forecast capex requirements from network demand projections.

16. **Media & Entertainment**: Content investment budgets for original programming are the largest discretionary spend. Advertising revenue budgets depend on audience metrics and CPM rates. Subscription revenue budgets use subscriber growth and pricing assumptions. Agents model content ROI based on projected viewership and forecast advertising revenue from audience and rate assumptions.

17. **Energy & Utilities**: Revenue budgets depend on volume forecasts (customer count, usage per customer, weather normalization) and rate structures (base rates, riders, fuel adjustments). Capital budgets for generation, transmission, and distribution are massive and multi-year. Agents model revenue under different weather scenarios and link capital budgets to regulatory rate case filings.

18. **Food & Beverage**: Sales budgets are built by brand, SKU, and channel with promotional lift assumptions. Commodity input costs (grains, dairy, sugar, packaging) are budgeted using futures prices. Trade promotion spending is a major budget line. Agents model brand-level P&Ls incorporating promotional plans and commodity cost scenarios.

19. **Logistics & Transport**: Revenue budgets come from volume (shipments, miles, containers) and yield (revenue per unit) assumptions by lane and customer. Fuel costs are a major variable budgeted against fuel futures or hedging contracts. Driver compensation and equipment costs drive operating ratio. Agents build lane-level revenue budgets and model operating ratio under different fuel price scenarios.

20. **Nonprofit**: Revenue budgets combine earned income, individual donations (with retention rate assumptions), grants (with application success probabilities), and events. Program budgets must demonstrate impact and efficiency for grantors. Agents model fundraising scenarios and track budget-to-actual against grant deliverables and compliance requirements.

21. **SaaS / Technology**: Revenue budgets are built from subscription metrics — existing ARR, expansion, contraction, churn, and new bookings. Sales and marketing budgets target specific customer acquisition cost (CAC) and LTV/CAC ratios. R&D budgets balance feature development with infrastructure investment. Agents build cohort-based revenue models and forecast key SaaS metrics (ARR, NRR, CAC payback).

22. **Professional Services**: Revenue budgets are capacity-driven — billable headcount times utilization target times billing rate. Hiring plans directly drive both revenue capacity and cost. Utilization is the critical swing variable. Agents model revenue based on headcount ramp plans and utilization scenarios, alerting when planned hiring does not align with pipeline.

23. **Defense & Aerospace**: Contract backlog provides revenue visibility for 2–5 years. New business budgets depend on proposal pipeline and win rates. IRAD (Independent Research and Development) budgets are strategic investments recoverable through overhead rates. Agents model contract-level revenue and cost profiles and aggregate into a long-range budget tied to backlog and pipeline.

24. **Mining**: Production budgets depend on mine plans, ore grades, and processing recovery rates. Revenue budgets combine production volumes with commodity price assumptions. Capital budgets cover mine development, processing plant upgrades, and exploration. Agents model production economics using current mine plan data and commodity price scenarios.

25. **Chemicals**: Volume budgets by product line drive revenue and variable costs. Raw material costs (often index-linked) are the largest variable input. Plant utilization rates determine overhead absorption and unit economics. Agents model product-line profitability under different volume and input cost scenarios.

26. **Textiles & Apparel**: Seasonal collections require budgeting 6–12 months ahead of selling season. Sourcing costs depend on country of origin, material prices, and order volumes. Wholesale and direct-to-consumer channels have very different margin structures. Agents build seasonal budgets by collection and channel with material cost sensitivity analysis.

27. **FMCG**: Brand-level P&L budgets include trade spending (15–30% of gross sales), advertising and promotion, and distribution costs. Revenue growth is broken into volume, price, and mix components. Agents build brand P&Ls with trade promotion scenarios and model the revenue impact of pricing actions.

28. **Electronics**: Rapid product cycles mean budgets must account for product launches, ramp-up curves, and end-of-life rundown. Component cost reduction curves (learning effects) lower costs over product lifecycle. Agents model product lifecycle revenue and cost curves and flag products where margin will cross below threshold.

29. **Oil & Gas**: Revenue budgets depend on production volumes and commodity price assumptions. Lifting costs per barrel, royalty rates, and transportation costs vary by well and field. Exploration budgets are discretionary and risk-weighted. Agents model field-level economics under different commodity price decks and aggregate into a corporate budget with sensitivity tables.

30. **Jewelry & Luxury**: Revenue budgets by product category and sales channel (boutique, wholesale, e-commerce). Precious material cost assumptions drive COGS budgets. Marketing budgets emphasize brand-building over performance marketing. Agents model revenue by channel with precious material cost sensitivity and seasonal demand patterns for gifting periods.

## By Company Size

### Startup (< 50 people)

Your budget is a 12-month cash runway model. How much money do you have? How fast are you spending it? When do you need to raise more? Keep it simple — revenue forecast, headcount plan, and major expense categories. Update monthly. An agent can build this from your bank transactions and payroll data in minutes. The CEO and one finance person should own it. Do not build complex department-level budgets — you do not have departments yet. Focus on the questions investors will ask: burn rate, months of runway, and path to breakeven.

### SMB (50–500 people)

Budget by department with monthly granularity. Revenue budgets should come from sales leadership based on pipeline and capacity. Expense budgets should be bottom-up from department heads within a top-down spending envelope. Implement monthly variance reviews — department heads own their variances and explain them. Agents compile department budgets, produce monthly variance reports, and maintain a rolling forecast. Start building scenarios (what if revenue is 20% below plan?). Your finance team is probably 2–5 people; agents keep them from drowning in spreadsheet maintenance.

### Mid-Market (500–5,000 people)

Multi-entity, multi-currency budgeting with driver-based models for major cost categories. Workforce planning integration is critical — headcount is your biggest cost. Rolling 18-month forecasts give visibility beyond the calendar year. Sophisticated scenario planning (pricing changes, M&A, market downturns) supports strategic decision-making. Agents manage the entire planning cycle — template distribution, compilation, consolidation, variance analysis, and board reporting. Finance Business Partners embedded in operating units use agent-driven analytics to advise business leaders.

### Enterprise (5,000+ people)

Enterprise planning involves hundreds of budget owners across dozens of entities and countries. The planning cycle is tightly governed with stage gates, executive reviews, and board approvals. Long-range plans (3–5 years) complement annual budgets. Capital allocation across business units is a strategic exercise. Agents enable connected planning — linking financial plans to operational plans (sales, production, workforce, capital) in a unified model. Real-time scenario modeling supports rapid decision-making during disruptions. Benchmarking against peers and industry averages provides context for target-setting.

## ERP•AI & Proto

**ERP•AI**: The Budgeting & Forecasting module in ERP•AI includes template-driven budget building with GL integration, driver-based planning models, multi-entity consolidation, rolling forecast automation, scenario planning with unlimited what-if models, and executive dashboard reporting with variance analysis at every level.

**Proto**: Proto agents manage the planning cycle through the ORAI loop — they observe actual financial performance and business signals, reason about variance drivers and forecast adjustments, act by updating forecasts and generating management reports, and iterate by improving forecast accuracy through machine learning on historical prediction errors.
