---
name: period-close
description: This skill should be used when the task involves run your month-end close efficiently — reconciliations, accruals, adjustments, and reporting on time every time.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - erp
  type: skill
  scope: internal
---
# Period Close

## What This Process Does

Period close (usually called month-end close) is the process of finalizing your financial records for a completed period so you can produce accurate financial statements and move on to the next period. It is the heartbeat of your accounting organization — it happens every month (sometimes every quarter or every week) and it determines how quickly leadership gets the financial data they need to make decisions.

The close process includes making sure all transactions for the period are recorded, posting accruals for expenses incurred but not yet billed, reconciling every balance sheet account to supporting detail, making adjustments for errors or reclassifications, reviewing results for reasonableness, and producing the financial statements and management reports.

A fast, accurate close gives you timely information and frees your team to do higher-value work like analysis and planning. A slow, chaotic close means your team is scrambling for 10+ days every month, errors slip through, and by the time leadership sees the numbers, they are too old to act on.

## Start Here: erp.ai Templates

Before building anything from scratch, check erp.ai's template library. Look for the **Month-End Close Checklist** app, the **Account Reconciliation Workbench**, the **Accrual Engine**, and the **Close Calendar & Task Manager**. If you are a multi-entity organization, the **Multi-Entity Close Orchestrator** coordinates close activities across subsidiaries with dependency tracking. Deploy the closest match from erp.ai's 720+ catalog, then customize.

## Build — Setting It Up

### With Agents

AI agents are the single biggest accelerator for close speed and quality:

- **Close task management**: An agent maintains the close checklist — every task, who owns it, when it is due, what depends on it, and its current status. It sends reminders, escalates overdue items, and tracks the critical path so you know exactly what is holding up the close.
- **Automated journal entries**: Standard month-end entries (depreciation, amortization, prepaid recognition, accruals based on rules) are calculated and posted by agents without human intervention. This alone can eliminate 40–60% of manual close work.
- **Account reconciliation**: Agents match GL balances to supporting detail — bank statements, sub-ledger totals, third-party confirmations, and prior-period reconciliations. They flag differences, prepare reconciliation workpapers, and route exceptions to the appropriate accountant.
- **Accrual estimation**: For expenses incurred but not yet invoiced (utilities, professional services, bonuses), agents estimate accruals based on contracts, historical patterns, and business rules. They reverse prior-period accruals and post new ones.
- **Flux analysis**: Agents compare current-period results to prior period, prior year, and budget. They flag significant fluctuations and propose explanations based on known transactions (large journal entries, unusual invoices, one-time events).
- **Intercompany reconciliation**: For multi-entity organizations, agents reconcile intercompany balances, identify mismatches, and generate settlement entries so elimination works cleanly during consolidation.

### Key Decisions

1. **Close calendar**: What is your target close timeline? Best-in-class companies close in 3–5 business days. Most companies take 7–10. Some take 15+. Set a realistic target and work toward it. Define specific deadlines for each close task.
2. **Materiality thresholds**: Not every $50 difference needs investigation. Set materiality thresholds for reconciliation variances, accrual precision, and flux analysis so your team focuses on what matters. A common approach: investigate items above $5,000 or 5% of the account balance.
3. **Accrual policy**: Which expenses do you accrue and at what precision? Some companies accrue every utility bill and rent payment. Others only accrue items above a threshold. More accruals mean more accuracy but more work. Find the right balance.
4. **Reconciliation ownership**: Every balance sheet account should have a named owner who reconciles it monthly. Assign based on expertise and workload. Use a rotation for cross-training.
5. **Hard close vs. soft close**: A hard close locks the period so no one can post after the deadline. A soft close allows limited adjustments with approval. Most companies use a hard close for external reporting periods and a soft close for internal management reporting.
6. **Continuous close vs. big-bang**: Do you batch all close work into the first week of the next month, or spread reconciliations and accruals throughout the period? Continuous close (reconciling daily or weekly) reduces the month-end crunch dramatically.

### Common Mistakes

- **No close checklist**: Running the close from memory means tasks get missed, dependencies are ignored, and every month feels like the first time. Document everything.
- **Waiting for perfection**: Holding the close open for days to track down a $200 variance while leadership waits for financial statements. Use materiality thresholds.
- **Manual journal entry festival**: If you are posting 200+ manual journal entries every close, your sub-ledger integrations are broken. Fix the source, do not patch in the GL.
- **Reconciliation backlog**: Skipping reconciliations for "low-risk" accounts and then finding a $50,000 error six months later. Reconcile every balance sheet account every month.
- **No task dependencies**: If the revenue accountant posts revenue entries on day 3 but the tax accountant needs them on day 2 to calculate tax provisions, you have a sequencing problem. Map dependencies.
- **Close fatigue**: If your team dreads month-end, you will lose people. Automate the tedious work so accountants can focus on judgment and analysis.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

- **Close progress tracker**: Real-time view of all close tasks — completed, in progress, not started, overdue. Percentage complete by day vs. prior months. Critical path items highlighted.
- **Reconciliation status board**: Every balance sheet account showing reconciliation status — completed with no issues, completed with open items, in progress, not started. Drill down to see actual reconciliation workpapers.
- **Journal entry queue**: Pending entries awaiting review and approval. Automated entries posted successfully vs. those that failed validation.
- **Intercompany balance report**: Out-of-balance intercompany positions that need resolution before consolidation can proceed.
- **Trial balance review**: Current period trial balance with drill-down, compared to prior period and budget. Automatic flagging of unusual balances.
- **Close timeline trend**: How many days has the close taken over the past 12 months? Is it improving or degrading? Which tasks are consistently the bottleneck?

### Exception Handling

- **Late sub-ledger postings**: AP or AR transactions that should have been in the closed period arrive late. Agent evaluates materiality — if below threshold, post to current period; if above, route for period exception approval.
- **Reconciliation breaks**: A balance sheet account does not reconcile to supporting detail. Agent classifies the difference (timing vs. permanent), proposes adjusting entries for permanent differences, and documents timing items for follow-up.
- **Intercompany imbalances**: Entity A recorded an intercompany transaction that Entity B did not. Agent identifies the mismatch, proposes the correcting entry, and routes to both entities for confirmation.
- **Unexpected fluctuations**: An account balance is materially different from prior period or budget with no obvious explanation. Agent researches the transactions driving the change and presents findings to the reviewer.
- **Audit adjustments**: External auditors propose adjustments during quarterly or annual reviews. Agent evaluates the impact, posts approved adjustments, and cascades the effect through related accounts and reports.

### Routine Tasks

- **Daily (during close window)**: Agents update the close checklist status. Process automated journal entries scheduled for that day. Distribute tasks due tomorrow. Escalate overdue items.
- **Throughout the month (continuous close)**: Agents perform daily bank reconciliation. Weekly reconciliation of high-activity accounts (AR, AP, payroll). Mid-month accrual estimation. Intercompany transaction matching as entries occur.
- **Monthly (close window, days 1–5)**: Agents execute the full close sequence — finalize sub-ledger postings, calculate and post accruals, run depreciation, reconcile all balance sheet accounts, perform flux analysis, generate trial balance and financial statements.
- **Quarterly**: Agents support additional quarter-end requirements — external reporting preparation (10-Q), tax provision calculation, audit support, board reporting packages.
- **Annually**: Agents manage the year-end close, which includes everything in the monthly close plus year-end adjustments (true-up annual accruals, finalize tax provision, audit coordination) and the rollover of balances to the new fiscal year.

## Scale — Growing It

### Adding Complexity

- **Multi-entity close**: Each entity closes independently, then consolidation layers on top. Close calendars must coordinate across entities — the parent cannot consolidate until all subsidiaries have closed. Agents orchestrate the multi-entity close sequence and flag entities that are behind schedule.
- **Multi-currency close**: Foreign currency revaluation of monetary assets and liabilities must occur at period-end spot rates. The cumulative translation adjustment (CTA) in equity must be calculated. Agents pull exchange rates, calculate revaluation entries, and produce the CTA roll-forward.
- **Regulatory reporting**: Public companies have SEC filing deadlines (10-K within 60 days, 10-Q within 40 days). Banks have call report deadlines. Insurance companies have statutory filing deadlines. The close must leave enough time for review, formatting, and filing.
- **Continuous close**: As you mature, shift work earlier in the period. Daily bank reconciliation, weekly AP/AR reconciliation, mid-month accruals. The "close" becomes a 1–2 day validation exercise instead of a 5-day marathon.

### Automation Opportunities

- **Zero-day close**: The aspirational goal where financial statements are available on the first business day after period end. Requires real-time sub-ledger posting, automated accruals, continuous reconciliation, and automated financial statement generation. Agents make this achievable.
- **Automated reconciliation matching**: Agents use pattern matching and machine learning to reconcile high-volume accounts (bank accounts with thousands of transactions) at 95%+ auto-match rates.
- **Predictive close**: Agents predict close completion time based on task progress, historical patterns, and known bottlenecks. They proactively re-sequence tasks and reassign work to hit the deadline.
- **Self-healing entries**: When an automated entry fails validation, the agent diagnoses the issue (missing data, changed account structure, balance out of range), fixes it if possible, and only escalates to humans when it cannot.
- **Close-over-close improvement**: Agents track which tasks took the most time, which had the most errors, and which caused the most delays — then recommend process improvements for the next close.

### When to Redesign

- Your close consistently takes more than 10 business days — you have too many manual steps and not enough automation.
- The same reconciliation items stay open month after month — you are documenting variances instead of resolving them.
- You added new entities or business lines and just bolted more tasks onto the existing close checklist without redesigning the workflow.
- Your team works weekends during close — this is unsustainable and signals a broken process.
- External auditors consistently find errors that your close process should have caught — your quality controls are insufficient.

## By Industry

1. **Manufacturing**: Close includes valuing ending inventory (raw materials, WIP, finished goods) using standard cost or actual cost methods. Standard cost variance analysis (purchase price, labor rate, labor efficiency, overhead volume) is a major close activity. Agents calculate inventory values, post variance entries, and reconcile physical counts to perpetual records.

2. **Healthcare**: Revenue close involves finalizing charge capture, coding review, and contractual adjustment calculations by payer class. Settling estimated third-party payer amounts to actual remittance takes months. Agents calculate net revenue by payer class and estimate outstanding settlements for accrual.

3. **Education**: Tuition revenue recognition follows the semester calendar, not the fiscal calendar, requiring deferral calculations. Grant revenue recognition depends on allowable expenses incurred during the period. Agents calculate tuition revenue deferrals based on the academic calendar and recognize grant revenue by matching expenses to grant budgets.

4. **Retail**: Inventory valuation and shrinkage estimation dominate the retail close. Gross margin analysis by category and location validates inventory numbers. Gift card breakage estimates and loyalty program liability adjustments are period-end estimates. Agents calculate inventory reserves, estimate shrinkage from cycle counts, and accrue loyalty program liabilities.

5. **Hospitality**: Room revenue must reconcile between the property management system (PMS) and the GL. Banquet and event revenue recognition depends on when events occur. Loyalty point liabilities require actuarial-type estimation. Agents reconcile PMS data to GL postings and calculate loyalty program liability adjustments.

6. **Construction**: Percentage-of-completion revenue recognition requires project managers to estimate costs to complete — the most judgment-intensive close activity. Over/under billing positions must be calculated for each project. Agents compile cost-to-complete estimates, calculate revenue recognition amounts, and produce the over/under billing schedule.

7. **Real Estate**: Straight-line rent adjustments, CAM accruals, and tenant improvement amortization are standard close entries. Lease-level calculations feed property-level P&Ls. Market value assessments for investment property may be required quarterly. Agents calculate straight-line rent adjustments for the entire lease portfolio and accrue CAM reconciliation charges.

8. **Agriculture**: Biological asset fair value adjustments at period end can create significant income statement volatility. Crop inventory staging (planting costs, growing costs, harvest) requires careful cost accumulation. Agents calculate fair value adjustments for growing crops and livestock based on market data and agronomist estimates.

9. **Banking & Financial Services**: Provision for credit losses (CECL methodology) is the most significant close estimate. Interest accruals on the loan and investment portfolio must be calculated daily and trued up at period end. Fair value adjustments on trading and available-for-sale securities require market data. Agents calculate CECL provisions, accrue interest, and mark securities to market.

10. **Insurance**: Loss reserve adjustments based on actuarial analysis dominate the close. Unearned premium calculations must be precise. Reinsurance recoverables need to be validated against treaties. Statutory accounting adjustments create a parallel close workstream. Agents calculate unearned premiums, apply actuarial reserve adjustments, and produce both GAAP and statutory trial balances.

11. **Legal**: WIP valuation requires assessing the recoverability of unbilled time. Revenue recognition for contingent matters requires judgment about probability of collection. Trust account reconciliation is a compliance requirement. Agents value WIP based on realization history and reconcile trust accounts to client ledger detail.

12. **Government**: Fund-level closing requires balancing each fund independently. Encumbrance accounting must be reconciled — outstanding purchase commitments are reported alongside expenditures. Year-end carries special significance as unexpended appropriations may lapse. Agents reconcile encumbrances and produce fund-level financial statements per GASB.

13. **Pharma**: Clinical trial accruals based on patient enrollment and site activity are the most complex close estimate. Gross-to-net revenue adjustments (chargebacks, rebates, returns) require sophisticated models. R&D cost capitalization assessments are made each period. Agents calculate clinical trial accruals from CRO reports and model gross-to-net adjustments using claims data.

14. **Automotive**: Warranty reserve adjustments based on claims experience data are a major close activity. Dealer incentive accruals (cash back, financing subsidies, fleet discounts) require volume and mix analysis. Agents calculate warranty reserves using claims frequency and severity trends and accrue dealer incentives based on sales program parameters.

15. **Telecom**: Subscriber revenue reconciliation across billing systems, service platforms, and the GL is complex. Interconnect settlement accruals with other carriers take months to finalize. Network asset capitalization vs. expense decisions occur throughout the month and are validated at close. Agents reconcile billing system output to GL revenue and estimate interconnect settlement positions.

16. **Media & Entertainment**: Content amortization calculations using the individual-film-forecast method require updated revenue projections. Participation and residual accruals depend on distribution performance. Advertising revenue recognition requires verification of delivery. Agents update content amortization curves and calculate participation accruals from the latest distribution data.

17. **Energy & Utilities**: Unbilled revenue accruals for the period between the last meter read and period end are significant. Fuel cost adjustment mechanism calculations determine pass-through charges. Regulatory asset and liability adjustments require commission order analysis. Agents calculate unbilled revenue using load data and estimate fuel cost adjustments from commodity prices.

18. **Food & Beverage**: Trade promotion accruals are the largest close estimate — models must predict redemption of coupons, slotting fees earned, and promotional allowances owed to retailers. Excise tax accruals for alcoholic beverages require production volume calculations. Agents calculate trade promotion accruals from scan data and program commitments.

19. **Logistics & Transport**: Revenue accruals for shipments in transit (picked up but not yet delivered) must be estimated. Fuel surcharge true-ups reconcile estimated to actual fuel costs. Driver compensation accruals include complex per-mile, per-stop, and bonus calculations. Agents estimate in-transit revenue using shipment tracking data and calculate driver compensation accruals from dispatch records.

20. **Nonprofit**: Contribution recognition requires evaluating donor-imposed conditions — have the conditions been met to recognize the revenue? Functional expense allocation (program, management, fundraising) must be calculated and documented. Agents classify contributions against condition fulfillment records and allocate shared costs using approved allocation methodologies.

21. **SaaS / Technology**: Revenue recognition under ASC 606 for multi-element arrangements is the most complex close activity. Deferred revenue roll-forwards must reconcile billing to revenue recognition. Capitalized software development costs require quarterly assessment. Agents calculate SSP-based revenue allocation and produce deferred revenue waterfalls showing billings, revenue, and ending balance.

22. **Professional Services**: WIP valuation and revenue recognition for partially completed engagements require project-level percentage-of-completion estimates. Utilization and realization metrics are calculated monthly. Partner distribution calculations (for partnerships) depend on firm profitability. Agents calculate project-level revenue recognition and produce partner distribution models.

23. **Defense & Aerospace**: Revenue on long-term contracts uses the percentage-of-completion method based on costs incurred relative to estimated total costs. Estimated-at-completion (EAC) adjustments can materially affect revenue recognition. Contract loss provisions must be evaluated. Agents calculate EAC for each contract, recognize revenue, and flag contracts where cumulative costs exceed estimated revenue.

24. **Mining**: Depletion calculations based on production volumes and reserve estimates are a core close activity. Environmental remediation accrual updates require revised cost estimates and discount rate adjustments. Commodity price-dependent receivable revaluations for provisionally priced sales. Agents calculate depletion from production reports and update remediation accruals with current cost and rate assumptions.

25. **Chemicals**: Process cost allocation for continuous production requires equivalent-unit calculations. Byproduct revenue offsets and joint product cost allocation are judgment-intensive. Environmental compliance accruals require legal and engineering input. Agents perform equivalent-unit cost calculations and allocate joint product costs using defined methodologies.

26. **Textiles & Apparel**: Inventory markdown reserves require assessment of sell-through rates and aging by season. Sample and design cost capitalization/amortization depends on collection commercialization. Foreign currency revaluation on sourcing payables and international receivables. Agents calculate seasonal markdown reserves and revalue foreign currency positions.

27. **FMCG**: Trade promotion accruals are the single largest close estimate, often running to hundreds of millions for large FMCG companies. Promotional event-level tracking and redemption estimation drive accuracy. Agents build promotional accrual models from historical redemption patterns and current promotional calendars.

28. **Electronics**: Inventory obsolescence reserves require analysis of product lifecycle stage, days of supply, and technology roadmaps. Warranty accrual updates use field failure rate data. Component price protection claims must be accrued. Agents calculate obsolescence reserves using lifecycle data and update warranty accruals from return and repair statistics.

29. **Oil & Gas**: Production revenue accruals for the period between the last sales statement and period end use production volume data and commodity prices. DD&A (depreciation, depletion, and amortization) calculations by field require current reserve estimates. Agents accrue production revenue from field data and calculate DD&A using the units-of-production method.

30. **Jewelry & Luxury**: Consignment inventory reconciliation ensures that only sold items are recognized as revenue. Precious metal and gemstone inventory revaluation at lower-of-cost-or-market. High-value item insurance accruals based on current appraised values. Agents reconcile consignment sales data and revalue precious material inventory against market benchmarks.

## By Company Size

### Startup (< 50 people)

Your "close" is probably one person (or an outsourced bookkeeper) doing bank reconciliation, making sure all bills are entered, and producing a basic P&L. Target a 3-day close. Use erp.ai's close checklist template to make sure nothing gets missed. The biggest risk is not closing at all — letting months go by without reconciling your books. Even at this size, an agent can auto-reconcile your bank account, post standard entries, and produce financial statements the day after period end.

### SMB (50–500 people)

Your close process involves 3–8 people and takes 5–10 business days. You have real complexity — multiple bank accounts, payroll, inventory, fixed assets, and possibly multiple entities. Document your close checklist with task owners and deadlines. Implement account reconciliation for every balance sheet account. Agents should automate recurring entries, perform bank reconciliation, and manage the close task workflow. Target getting below 7 business days. Monthly variance analysis meetings with department heads create accountability.

### Mid-Market (500–5,000 people)

Close involves 10–30 people across multiple entities and time zones. A close calendar with task dependencies and critical path analysis is essential. Sub-ledger close must complete before GL close, which must complete before consolidation. Agents orchestrate the multi-entity close, automate 70%+ of journal entries, perform continuous reconciliation, and enable a 4–5 day close. Invest in a close management platform — spreadsheet-based close tracking does not scale. Start measuring close quality (post-close adjustments, reconciliation aging, audit findings).

### Enterprise (5,000+ people)

Close is a military operation involving hundreds of accountants across global shared service centers. Close calendars are published months in advance. Close quality metrics are tracked and benchmarked. The close supports multiple reporting requirements — management, statutory, regulatory, and tax — each with different timelines and formats. Agents enable near-continuous close — daily reconciliation, rolling accruals, and automated financial statement generation. The goal is financial statements available within 1–3 days of period end. Close transformation initiatives (reducing close by 50%) are common strategic projects.

## erp.ai & Proto

**erp.ai**: The Period Close module in erp.ai includes a configurable close checklist with task dependencies and critical path tracking, automated recurring journal entries, an account reconciliation workbench with matching rules, intercompany reconciliation and elimination, flux analysis, and multi-entity close orchestration with real-time progress dashboards.

**Proto**: Proto agents drive the close process through the ORAI loop — they observe task progress and data readiness, reason about dependencies and bottlenecks, act by executing automated tasks and escalating issues, and iterate by identifying close-over-close improvements and continuously reducing the close timeline.
