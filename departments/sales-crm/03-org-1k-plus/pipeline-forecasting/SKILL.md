---
name: pipeline-forecasting
description: This skill should be used when the task involves track deals through stages, weight them by probability, build reliable revenue forecasts, and hold reps accountable to their numbers.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 03-org-1k-plus
  type: skill
  scope: internal
---
# Pipeline & Forecasting

## What This Process Does

Pipeline management is how you track every deal your sales team is working on, from first qualified conversation to closed-won or closed-lost. Forecasting is how you predict future revenue based on what's in that pipeline. Together, they answer the two questions every business leader asks: "What are we working on?" and "How much will we close this quarter?" A healthy pipeline gives you visibility. Good forecasting gives you predictability. Without both, you're flying blind — you don't know if you'll make the quarter until the last week, hiring decisions are guesses, and the board loses confidence in your numbers. This process covers opportunity stages, win probability, weighted pipeline value, forecast categories, and the cadence of reviews that keep everything honest.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. The CRM module includes the Opportunity doctype with customizable sales stages, the Sales Pipeline report, and forecast dashboards. ERP•AI also includes a Quotation workflow that ties directly to Opportunities. Deploy the CRM app, configure your sales stages to match your actual sales process, and set up the pipeline reports. The default stages (Prospecting, Qualification, Proposal, Negotiation, Closed Won, Closed Lost) work for most B2B companies — tweak them rather than starting over.

## Build — Setting It Up

### With Agents

Tell your agent: "Set up our sales pipeline with forecasting. We have a B2B sales cycle that averages 90 days with deal sizes from $10K to $500K." The agent will:

- Configure opportunity stages that match your actual sales process (not a textbook — your process)
- Set default win probabilities for each stage based on industry benchmarks, which you'll refine with real data
- Create required fields at each stage gate (e.g., you can't move to "Proposal" without a budget confirmed)
- Build weighted pipeline reports that multiply deal value by probability at each stage
- Set up forecast categories (Commit, Best Case, Pipeline, Upside) so reps can overlay their judgment on the math
- Create pipeline dashboards broken down by rep, team, region, product, and time period
- Configure alerts for deals that stall in a stage too long, deals with close dates that keep pushing out, and pipeline coverage ratios that fall below target
- Build a weekly forecast snapshot process so you can track how the forecast changes over time

### Key Decisions

**How many stages?** Five to seven is the sweet spot for most B2B companies. Fewer than four and you can't see where deals get stuck. More than eight and reps stop updating because it's too much work. Each stage should represent a meaningful milestone in the buyer's journey, not just your internal process.

**What are your stage definitions?** Write a one-sentence exit criterion for each stage. "Discovery" ends when you've confirmed the prospect has a problem you can solve, the budget exists, and the decision-maker is identified. If two reps would put the same deal in different stages, your definitions are too vague.

**What probability model do you use?** Stage-based probability is simplest (e.g., Qualification = 20%, Proposal = 50%, Negotiation = 75%). Historical probability is more accurate — look at the last 12 months and calculate actual conversion rates stage by stage. Predictive probability uses AI to score each deal individually.

**How do you define forecast categories?** Common approach: Commit (90%+ confidence, something catastrophic would have to happen to lose it), Best Case (60-89%, likely but not locked), Pipeline (20-59%, real deals but uncertain), Upside (below 20%, long shots you'd love to win). Reps assign categories; managers validate.

**What's your pipeline coverage target?** The standard rule of thumb is 3x — you need $3M in qualified pipeline to close $1M. But this varies wildly by industry and deal size. Measure your own historical coverage-to-close ratio and use that.

### Common Mistakes

**Happy ears.** Reps hear what they want to hear and keep deals in high stages when the buyer has gone cold. Combat this with objective exit criteria and manager inspection.

**Sandbagging.** The opposite problem — reps hide deals in low stages to create upside surprise. This makes forecasting just as useless. Track reps whose deals jump from "Qualification" to "Closed Won" without passing through middle stages.

**Close date fantasies.** A deal that's been pushed from Q1 to Q2 to Q3 is probably not closing in Q4 either. Alert on deals where the close date has moved more than twice. Require a written justification for every push.

**Ghost pipeline.** Deals that were created months ago and haven't had any activity — no calls, no emails, no meetings. They inflate your pipeline coverage numbers but will never close. Auto-flag and archive deals with no activity in 30+ days.

**One giant deal distorting the forecast.** If one $2M deal represents 40% of your quarterly pipeline, your forecast is really just a bet on one deal. Track "forecast without top 3 deals" as a separate number to understand your base.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Pipeline Value by Stage:** Stacked bar chart showing total value in each stage. A healthy pipeline looks like a funnel — more value in early stages, less in later stages. If it's an inverted funnel (more in negotiation than discovery), you're not feeding the top.

**Weighted Pipeline:** Deal value multiplied by stage probability, summed up. This is your mathematical forecast. Compare it weekly to your quota to see if you're on track.

**Pipeline Movement Report:** Shows deals created, advanced, pushed back, won, and lost this week. This is the single most useful report for weekly pipeline reviews. It tells you the story of what happened.

**Forecast Accuracy Over Time:** Track what you forecasted 30/60/90 days out vs. what actually closed. Plot this monthly. If your 30-day forecast accuracy is below 80%, your pipeline hygiene has serious problems.

**Stage Velocity:** Average days a deal spends in each stage. If your "Proposal" stage averages 14 days but one deal has been there for 45, something is wrong with that deal.

**Pipeline Coverage Ratio:** Total qualified pipeline divided by remaining quota. Track this weekly. If it drops below your target (e.g., 3x), sound the alarm — you need more pipeline now.

### Exception Handling

**Stalled deals:** Set automatic alerts when a deal has been in the same stage for more than 1.5x the average stage duration. Escalate to the manager after 2x. Require a next-step update to keep the deal active.

**Commit misses:** When a rep marks a deal as "Commit" and it doesn't close that quarter, do a post-mortem. Track commit-to-close rate per rep. Reps who consistently over-commit need coaching, not punishment.

**Deal size changes:** A deal that was $500K last week and is $200K this week tells a story. Alert managers to deal value changes greater than 20% and require a note explaining why.

**Late-stage losses:** Deals lost from "Negotiation" or later stages are expensive — you invested significant time. Track reasons for late-stage losses and look for patterns (pricing, competition, internal champion left).

**Quarter-end hockey stick:** If 50%+ of your deals close in the last two weeks of every quarter, your pipeline process is a fiction. Reps are doing month-long negotiations in the last week. This creates feast-or-famine revenue patterns and kills forecast accuracy.

### Routine Tasks

**Daily (agent-automated):** Update deal scores, flag stalled deals, send next-step reminders to reps, refresh pipeline dashboards.

**Weekly (manager-led with agent support):** Pipeline review with each rep — agents prepare a briefing showing what moved, what stalled, what's at risk. Forecast roll-up for leadership. Pipeline coverage check.

**Monthly (leadership review):** Forecast accuracy analysis, pipeline health metrics, stage conversion rate trends, win/loss analysis, pipeline generation vs. pipeline needed.

**Quarterly (strategic):** Recalibrate stage probabilities using actual conversion data, review pipeline coverage targets, adjust forecast categories, evaluate sales process changes.

## Scale — Growing It

### Adding Complexity

**Multiple pipelines:** When you sell different products (or sell to different segments) with fundamentally different sales processes, you need separate pipelines. A 6-month enterprise pipeline and a 2-week self-serve pipeline can't share stages or probabilities.

**Multi-currency deals:** International expansion means deals in different currencies. Forecast in local currency but roll up to a corporate currency using consistent exchange rates. Decide: do you use budgeted rates (stable but potentially inaccurate) or spot rates (accurate but volatile)?

**Overlay and team selling:** When specialists, solutions engineers, or channel partners contribute to deals, you need to track involvement without creating duplicate pipeline. Use a "sales team" model where one deal has multiple team members with defined roles.

**Product line forecasting:** The CFO wants to forecast by product line, not just total revenue. Break deals into line items and forecast each product category separately. This requires reps to enter product-level detail, which they'll resist.

**Consumption-based revenue:** If you sell usage-based products (cloud, API calls, consumption models), traditional deal-based pipeline doesn't capture expansion revenue from existing customers. Add a "land" pipeline for new logos and an "expand" pipeline for growth within existing accounts.

### Automation Opportunities

**AI-powered deal scoring:** Agents analyze deal attributes (size, industry, competition, engagement patterns) and predict win probability more accurately than stage-based defaults. Override stage probability with ML-scored probability for each deal individually.

**Automated pipeline inspection:** Agents read deal notes, email threads, and meeting transcripts to assess deal health — flagging deals where sentiment has turned negative, the champion hasn't responded in two weeks, or a competitor was mentioned.

**Forecast assembly:** Instead of manual forecast calls where managers interrogate reps, agents compile a draft forecast based on commit deals, historical patterns, and rep track records. Managers review and adjust.

**Next-best-action recommendations:** For each deal, agents suggest what to do next based on what worked for similar deals in the past. "Deals like this that stalled at Proposal converted 3x more often when the VP of Sales was brought into the next meeting."

**Pipeline gap analysis:** Agents calculate how much pipeline you need to generate this month to hit next quarter's target, based on your historical stage conversion rates and average cycle time. They flag the gap before it becomes a crisis.

### When to Redesign

- Your forecast accuracy has been below 70% for three consecutive quarters
- Stage definitions were last updated more than two years ago and your product/market has changed significantly
- You've launched a major new product line that doesn't fit existing stages
- Win rates have declined 20%+ and you can't pinpoint where deals are dying
- You've moved from one sales motion (e.g., field sales) to multiple (field + inside + channel + PLG)
- Your CRO or VP Sales is new and wants to implement a different methodology

## By Industry

**1. Manufacturing**
Pipeline stages often include "Technical Evaluation" and "Sample/Prototype" phases that don't exist in other industries. Deals can sit in technical validation for months while engineers test your product. Forecast by project delivery quarter, not purchase order date. Track long-lead items that require early commitment.

**2. Healthcare**
Sales cycles are extremely long (6-18 months) with committee-based decisions. Stages should include "Value Analysis Committee" and "Clinical Evaluation." Many deals are tied to fiscal year budgets, so timing accuracy matters more than probability. Pipeline concentration risk is high — a few large hospital systems dominate.

**3. Education**
Budget cycles are annual and rigid. A deal that misses the July 1 budget window waits until next year. Build your pipeline around the academic procurement calendar. Stages should include "Budget Approved" and "Board Authorization." Summer months are dead — adjust forecasts accordingly.

**4. Retail**
Retail buying cycles are seasonal and tied to merchandise planning calendars. Pipeline for holiday merchandise closes by June. Stages include "Line Review," "Planogram Approval," and "Purchase Order." Forecast by season, not quarter. Track sell-through rates from prior seasons to predict reorder pipeline.

**5. Hospitality**
Pipeline is a mix of group bookings (events, conferences) and corporate contracts. Event pipeline is date-specific — if you don't close by the event date, the deal evaporates. Forecast by event date, not close date. Track tentative vs. definite bookings separately. Cancellation rates are a key pipeline adjustment factor.

**6. Construction**
Every deal is a project. Pipeline stages mirror the project lifecycle: Pre-bid, Bid Submitted, Shortlisted, Awarded, Contract Signed. Win rates on competitive bids are 10-25%, so you need massive pipeline coverage (5-10x). Forecast by project start date and track bid/no-bid decisions as a separate metric.

**7. Real Estate**
Pipeline for developers is project-based (land acquisition through sell-out). For brokerages, pipeline is transaction-based with stages like Listing, Showing, Offer, Under Contract, Closed. Forecast by expected close month. Track days on market and price reductions as deal health indicators. Market conditions (rates, inventory) affect the entire pipeline simultaneously.

**8. Agriculture**
Pipeline is seasonal and commodity-price sensitive. Equipment deals close before planting season. Input deals (seed, fertilizer) close in late winter. Forecast must account for weather disruptions and crop price fluctuations. A bad harvest in your territory can kill an entire quarter's pipeline overnight.

**9. Banking & Financial Services**
Loan pipeline is measured in volume and yield. Stages include Application, Underwriting, Approval, Documentation, and Funding. Track pull-through rate (approved loans that actually fund). Wealth management pipeline is AUM-based — forecast on assets under management, not fees. Regulatory changes can freeze entire deal categories.

**10. Insurance**
Pipeline is policy-based with stages like Quote, Proposal, Binding, and Issuance. Renewal pipeline is as important as new business. Forecast retention rate separately from new policy acquisition. Catastrophe events can create sudden pipeline spikes (everyone re-shopping after a hurricane). Track loss ratio to ensure profitable growth.

**11. Legal**
"Pipeline" is matter-based — potential cases or engagements. For contingency firms, forecast on expected settlement values weighted by win probability. For hourly firms, forecast on estimated matter hours. Stages include "Conflict Check," "Engagement Letter," and "Active Matter." Track referral sources to feed future pipeline.

**12. Government**
Pipeline is driven by the federal procurement calendar (Q4 "use it or lose it" spending), state budget cycles, and specific contract vehicles. Stages include "Pre-RFP Shaping," "RFP Response," "Evaluation," and "Award." Protests can delay awards by months. Track pipeline by contract vehicle (IDIQ, BPA, GSA Schedule).

**13. Pharma**
Pipeline has dual meaning — drug development pipeline (clinical stages) and commercial sales pipeline (hospital formulary access). For commercial, stages include "Medical Affairs Review," "P&T Committee," and "Formulary Listed." Forecast prescription volume, not deal value. Patent cliffs create revenue cliffs to forecast around.

**14. Automotive**
Dealership pipeline tracks individual units (ups, quotes, test drives, finance applications, deliveries). Fleet pipeline tracks corporate accounts with stages like "Needs Analysis," "Configuration," "Bid," and "PO." Forecast by units and gross margin. Allocation constraints (inventory limits from manufacturer) cap what you can close regardless of demand.

**15. Telecom**
Pipeline is measured in MRR/ARR for recurring services. Stages include "Site Survey," "Solution Design," "Proposal," "Contract," and "Provisioning." Provisioning can take 30-90 days after contract signing — track revenue recognition timeline separately from booking. Churn creates negative pipeline that offsets new sales.

**16. Media & Entertainment**
Ad sales pipeline follows the upfront/scatter model — big commitments made months ahead, leftover inventory sold closer to air date. Stages include "Media Plan Requested," "Proposal," "IO Signed," and "Campaign Live." Forecast on booked revenue vs. delivered revenue. Cancellation clauses mean "closed" deals aren't actually guaranteed.

**17. Energy & Utilities**
Project pipeline for energy infrastructure has 2-5 year cycles. Stages include "Feasibility," "Environmental Review," "Permitting," "Financing," and "Construction." Regulatory approval is the single biggest risk to any deal. Forecast by megawatt for generation projects, by mile for transmission. Policy changes can create or destroy pipeline overnight.

**18. Food & Beverage**
Pipeline tracks retail distribution gains — new stores, chains, or shelf placements. Stages include "Category Review Scheduled," "Presentation," "Authorization," and "First Ship." Forecast by distribution points (stores carrying your product) and velocity (units per store per week). Delistings create negative pipeline.

**19. Logistics & Transport**
Contract pipeline tracks shippers with stages like "Lane Analysis," "Rate Proposal," "Trial Shipment," and "Contract Signed." Spot market pipeline is near-zero cycle time. Forecast on contracted volume vs. spot volume. Rate fluctuations make revenue forecasting harder than volume forecasting.

**20. Nonprofit**
"Pipeline" is a gift pipeline — pledges and prospective major gifts. Stages include "Identification," "Cultivation," "Solicitation," "Negotiation," and "Stewardship." Forecast on pledged dollars, expected fulfillment timeline, and pledge fulfillment rates. Capital campaigns have their own pipeline with multi-year pledge schedules.

**21. SaaS / Technology**
Pipeline metrics are well-established: ARR pipeline, weighted pipeline, and forecast by new, expansion, and renewal. Stages are standardized (SAL, SQL, Discovery, Demo, Proposal, Negotiation, Closed). Track pipeline generation rate, pipeline velocity, and stage-to-stage conversion. Product-led growth adds self-serve pipeline that behaves completely differently from sales-assisted.

**22. Professional Services**
Pipeline is project-based. Stages include "Opportunity Identified," "Scoping," "Proposal," "Negotiation," and "SOW Signed." Forecast on total contract value and monthly resource utilization. The constraint is often capacity, not demand — you might have pipeline but lack the consultants to deliver it. Track sold-but-not-started backlog.

**23. Defense & Aerospace**
Pipeline is dominated by large, multi-year programs. Stages align with government acquisition milestones (sources sought, draft RFP, final RFP, proposal submission, evaluation, award). Win probability is low (often 20-30% on competitive bids). Forecast by program year funding. Congressional budget actions can add or kill pipeline with no warning.

**24. Mining**
Pipeline for mining equipment and services correlates with commodity prices. When iron ore is at $150/ton, every miner is buying. At $80/ton, pipeline evaporates. Stages include "Mine Planning," "Feasibility," "Board Approval," and "Procurement." Forecast by commodity exposure and include a sensitivity analysis for price fluctuations.

**25. Chemicals**
Pipeline tracks new formulation approvals and volume contracts. Stages include "Sample Request," "Lab Trial," "Plant Trial," "Qualification," and "Supply Agreement." Qualification alone can take 6-12 months. Forecast on contracted volume times price. Raw material cost volatility means margin forecasting is as important as revenue forecasting.

**26. Textiles & Apparel**
Pipeline follows fashion seasons — Spring/Summer and Fall/Winter, plus any pre-season and resort collections. Stages include "Design Collaboration," "Sample Approval," "Order," and "Production." Forecast by season, not by quarter. Minimum order quantities and fabric availability constrain what can close.

**27. FMCG**
Pipeline is retail distribution — shelf space wins and new account openings. Stages include "Buyer Meeting Scheduled," "Category Review," "Authorization," and "Shipment." Forecast on distribution-weighted volume. Promotional pipeline (temporary displays, features, ads) is separate from base distribution pipeline.

**28. Electronics**
Pipeline tracks design wins — getting your component specified into a customer's next product. Stages include "Design Evaluation," "Prototype," "Design Win," "Mass Production." The design win is the critical milestone — once won, revenue follows for the product's life. Forecast by design-win pipeline value and expected production ramp schedule.

**29. Oil & Gas**
Pipeline is tied to E&P capital budgets and rig counts. Stages include "Well Planning," "AFE Approval," "Drilling," and "Completion." Forecast by basin and well type. Commodity price sensitivity means building three forecasts: base, upside, and downside. Service companies track pipeline by equipment utilization rate.

**30. Jewelry & Luxury**
Pipeline is relationship-driven with high-net-worth clients. Stages include "Client Introduction," "Consultation," "Custom Design," "Approval," and "Delivery." Forecast on average transaction value and client visit frequency. Seasonal spikes around holidays, engagement season, and auction events. Bespoke/custom work has longer cycles than retail purchases.


## ERP•AI & Proto

**ERP•AI**: The CRM Opportunity doctype supports custom sales stages, probability fields, weighted pipeline calculations, and comprehensive reporting. Pipeline dashboards, forecast snapshots, and deal activity timelines are built in. Integration with Quotation and Sales Order doctypes provides closed-loop reporting from pipeline to revenue.

**Proto**: Proto agents handle pipeline and forecasting through the ORAI cycle — Observing deal activity and stage movements across the pipeline, Reasoning about deal health and forecast risk based on patterns in the data, Acting by flagging stalled deals and generating forecast recommendations, and Iterating by learning from forecast accuracy over time to improve predictions.
