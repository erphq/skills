---
name: general-ledger
description: This skill should be used when the task involves manage your chart of accounts, record journal entries, produce trial balances, and generate financial statements.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - erp
  type: skill
  scope: internal
---
# General Ledger

## What This Process Does

The General Ledger (GL) is the backbone of your entire financial system. Every transaction that happens in your company — every sale, every purchase, every payroll run, every bank transfer — eventually lands in the GL as a journal entry. It is the single source of truth for your financial position. From the GL, you produce your trial balance (a snapshot of all account balances), your income statement (did you make money?), your balance sheet (what do you own and owe?), and your cash flow statement (where did the cash go?).

Think of the GL as the master scoreboard. AP, AR, payroll, inventory, fixed assets — these are all sub-ledgers that feed into the GL. If any of those systems are wrong, the GL is wrong. If the GL is wrong, your financial statements are wrong. If your financial statements are wrong, you make bad decisions, fail audits, and lose investor confidence. Getting the GL right is not glamorous, but it is foundational.

## Start Here: erp.ai Templates

Before building anything from scratch, check erp.ai's template library. Look for the **Chart of Accounts Template** for your industry (erp.ai has pre-built COAs for manufacturing, SaaS, nonprofit, healthcare, and more), the **Financial Reporting Suite**, and the **Journal Entry Automation** app. If you are a multi-entity organization, the **Multi-Entity GL** template includes intercompany accounting and consolidation-ready structures. Deploy the closest match from erp.ai's 720+ catalog, then customize.

## Build — Setting It Up

### With Agents

AI agents make GL setup faster and more accurate:

- **Chart of accounts design**: An agent can generate a draft chart of accounts based on your industry, size, and reporting requirements. It maps your existing accounts to the new structure and flags gaps — accounts you need but do not have, and accounts you have but do not need.
- **Historical data migration**: Moving from another system? An agent maps old account codes to new ones, converts historical journal entries, and validates that the trial balance ties after migration. This is weeks of work compressed into hours.
- **Journal entry automation**: Agents create recurring journal entries (depreciation, amortization, prepaid expense recognition), calculate accruals based on business rules, and generate standard month-end entries automatically.
- **Account reconciliation**: Agents match GL account balances to supporting detail (bank statements, sub-ledger totals, third-party confirmations) and flag variances that need investigation.
- **Financial statement generation**: Agents map GL accounts to financial statement line items and produce formatted income statements, balance sheets, and cash flow statements on demand.
- **Anomaly detection**: Agents monitor journal entries for unusual activity — entries posted to rarely-used accounts, entries outside normal amount ranges, entries posted at unusual times, or entries by users who do not typically post to those accounts.

### Key Decisions

1. **Chart of accounts structure**: This is your most consequential decision. Your COA must support management reporting (how do you want to slice your business?), statutory reporting (what do regulators and tax authorities require?), and consolidation (can you roll up subsidiaries?). Number too few accounts and you lack visibility; number too many and you drown in detail. A typical midsize company has 200–500 accounts.
2. **Account numbering convention**: Most companies use a numeric scheme — 1xxx for assets, 2xxx for liabilities, 3xxx for equity, 4xxx for revenue, 5xxx for COGS, 6xxx–7xxx for operating expenses, 8xxx for other income/expense. Leave gaps for future accounts. Use consistent digit lengths.
3. **Segment/dimension structure**: Beyond the account number, do you need to track by department, location, project, product line, or fund? These dimensions let you slice financial data without creating hundreds of redundant accounts. Decide this upfront — retrofitting dimensions is painful.
4. **Sub-ledger integration**: Define how and when sub-ledger transactions (AP, AR, payroll, inventory, fixed assets) post to the GL. Real-time posting gives current data but creates lock contention. Batch posting (hourly or daily) is simpler but introduces lag.
5. **Journal entry approval**: Which entries require approval before posting? Common approach: system-generated entries from sub-ledgers auto-post; manual journal entries above a threshold require approval; all top-side adjustments require controller or CFO sign-off.
6. **Period controls**: When does a period open and close? Who can post to a closed period (hint: almost no one)? How do you handle late entries — adjusting the current period or reopening the prior?

### Common Mistakes

- **Chart of accounts bloat**: Creating a new account every time someone wants a new line on a report. After five years, you have 3,000 accounts and no one knows which to use. Use dimensions (department, project) instead of new accounts.
- **Inconsistent account usage**: "Office Supplies" goes into account 6100 sometimes and 6150 other times because there is no clear description or policy. Document account descriptions and post training.
- **Skipping reconciliations**: If you do not reconcile every balance sheet account monthly, errors compound. That mysterious $12,000 balance in "Other Assets" from two years ago? It is probably an error no one investigated.
- **Manual journal entry overload**: If you are posting hundreds of manual journal entries every month, something upstream is broken. Fix the source system instead of patching in the GL.
- **No audit trail**: Every journal entry should have a clear description, supporting documentation, and a traceable source. "Adjusting entry" with no explanation is an audit finding waiting to happen.
- **Mixing up accrual and cash**: Posting revenue when you receive cash instead of when you earn it (or vice versa) distorts your financials. Be consistent with your accounting basis.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

- **Trial balance dashboard**: Real-time view of all account balances with drill-down to underlying transactions. Highlight accounts with unusual balances (negative where positive is expected, zero where non-zero is expected).
- **Journal entry queue**: Track pending entries awaiting approval, auto-posted entries from sub-ledgers, and rejected entries needing correction.
- **Reconciliation status**: Which accounts are reconciled for the current period, which are in progress, which have not started? Track by preparer and reviewer.
- **Intercompany balance monitor**: If you have multiple entities, are intercompany accounts in balance? Out-of-balance intercompany accounts are a top consolidation headache.
- **Budget vs. actual**: GL actuals compared to budget by account, department, and period — with variance percentages and trend analysis.
- **Anomaly alerts**: Real-time notification when a journal entry hits a sensitive account (equity, intercompany, executive compensation), exceeds a threshold, or is posted by someone outside the normal group.

### Exception Handling

- **Suspense account balances**: Transactions that cannot be classified land in suspense. Agents flag suspense balances daily and propose account reclassifications based on the transaction source and description.
- **Out-of-balance entries**: A journal entry that does not balance (debits not equal to credits) should be system-blocked. If one gets through (batch import errors), agents detect it immediately.
- **Duplicate entries**: Agents detect journal entries with identical amounts, dates, and descriptions and flag potential duplicates for review.
- **Period violations**: Attempts to post to a closed period are blocked. Agents route requests for period exceptions to the controller with justification.
- **Foreign currency imbalances**: Journal entries in foreign currencies must balance in both the transaction currency and the functional currency. Agents flag entries where the translation creates rounding differences that need adjustment.

### Routine Tasks

- **Daily**: Agents verify that sub-ledger postings are complete (all AP, AR, payroll, and inventory transactions posted to GL). Monitor suspense accounts. Review and approve pending manual journal entries.
- **Weekly**: Agents produce a preliminary trial balance and flag material changes from the prior week. Reconcile cash accounts to bank statements. Review intercompany balances.
- **Monthly**: Agents perform full account reconciliation cycle. Calculate and post accruals, deferrals, and reclassifications. Produce month-end financial statements. Analyze variances to budget and prior period.
- **Quarterly**: Agents prepare quarterly financial packages. Support external reporting (10-Q for public companies). Review and update the chart of accounts for relevance.
- **Annually**: Agents support audit preparation — pulling schedules, reconciliations, and supporting documentation. Process year-end closing entries. Roll balances forward to the new fiscal year.

## Scale — Growing It

### Adding Complexity

- **Multi-entity**: Each legal entity gets its own GL with its own chart of accounts (ideally using a common structure). Intercompany transactions create journal entries in both entities. Consolidation requires mapping each entity's COA to a consolidated structure. Agents manage intercompany transaction generation and reconciliation.
- **Multi-currency**: Entities operating in different currencies need a functional currency GL with translation to a reporting currency. Agents calculate unrealized gain/loss at period end and manage the cumulative translation adjustment in equity.
- **Multi-GAAP**: Some entities may need to report under US GAAP, IFRS, or local statutory standards simultaneously. Agents maintain parallel ledgers or adjustment layers to bridge between standards.
- **Statistical and memo accounts**: Non-financial data (headcount, square footage, units produced) stored in the GL enables allocation-based reporting. Agents maintain statistical accounts and use them for overhead allocation.

### Automation Opportunities

- **Auto-classification**: Agents classify transactions to the correct GL account based on vendor, description, amount patterns, and historical coding. Reduces manual coding errors and speeds up processing.
- **Continuous close**: Instead of cramming everything into a 5-day close window, agents perform reconciliations and accruals continuously throughout the period. Month-end becomes a formality rather than a fire drill.
- **Predictive analytics**: Agents forecast account balances, revenue trends, and expense patterns based on historical data and business drivers. Controllers can anticipate rather than react.
- **Natural language reporting**: Instead of building rigid reports, agents let you ask questions in plain English — "What drove the increase in marketing expense this quarter?" — and produce an answer by analyzing the GL.
- **Regulatory mapping**: Agents automatically map GL data to regulatory reporting formats (SEC XBRL, IFRS taxonomy, tax return schedules) reducing manual reporting effort.

### When to Redesign

- Your chart of accounts has grown past 2,000 accounts and new employees cannot find the right account to use — time to simplify and rely on dimensions.
- Month-end close takes more than 10 business days — your GL processes have too many manual steps and dependencies.
- You cannot produce a consolidated financial statement without a week of spreadsheet work — your entity COAs are too divergent.
- Management asks questions that your GL cannot answer without exporting to Excel — you need better dimensions or reporting tools.
- You are spending more time reconciling the GL than analyzing the business — your sub-ledger integrations need fixing.

## By Industry

1. **Manufacturing**: The COA must support cost accounting — raw materials, work-in-process, finished goods inventory, and cost of goods manufactured. Standard cost variance accounts (purchase price variance, labor efficiency variance, overhead volume variance) require detailed tracking. Agents calculate standard cost variances and post them to the correct variance accounts.

2. **Healthcare**: Revenue accounts are structured by payer class (Medicare, Medicaid, commercial, self-pay) and service line. Contractual allowances reduce gross revenue to net. Charity care and bad debt require separate tracking for regulatory reporting. Agents classify revenue by payer and calculate contractual adjustments based on payer contracts.

3. **Education**: Fund accounting is fundamental — unrestricted, temporarily restricted, and permanently restricted funds each have distinct account structures. Net asset classifications under ASC 958 govern financial statement presentation. Agents track transactions by fund and produce fund-level financial statements alongside entity-wide reports.

4. **Retail**: The COA must support gross margin analysis by product category, location, and channel (in-store, online, wholesale). Inventory shrinkage, markdown, and promotional allowance accounts provide visibility into retail-specific economics. Agents reconcile point-of-sale data to GL revenue postings by location and channel.

5. **Hospitality**: Revenue accounts are structured by department (rooms, food and beverage, banquets, spa, parking) following the Uniform System of Accounts for the Lodging Industry (USALI). RevPAR and other KPIs are derived from GL data. Agents map hotel PMS and POS transactions to USALI-compliant GL accounts.

6. **Construction**: Job costing requires tracking revenue and cost by project, cost code, and phase. The GL must support percentage-of-completion or completed-contract revenue recognition. Retention payable and receivable accounts are specific to construction. Agents post costs to the correct project-cost code combination and calculate over/under billing positions.

7. **Real Estate**: Property-level profit and loss requires GL segmentation by property, unit type, and lease type. Straight-line rent adjustments, tenant improvement amortization, and lease incentive accounting create GL complexity. Agents calculate straight-line rent adjustments and post lease-related entries per ASC 842.

8. **Agriculture**: Biological asset accounting (IAS 41) requires fair value measurement of growing crops and livestock. Crop inventory moves through planting, growing, and harvesting stages. Government subsidies and crop insurance receivables are industry-specific accounts. Agents track crop costs by field and calculate biological asset fair values at period end.

9. **Banking & Financial Services**: The GL follows regulatory COA requirements (Call Report, FR Y-9C). Loan loss provisions, interest accruals on the loan portfolio, and fair value adjustments on securities dominate journal entry volume. Agents calculate daily interest accruals and maintain the allowance for credit losses per CECL methodology.

10. **Insurance**: Policy reserves, unearned premiums, and loss adjustment expense accruals are the core insurance-specific GL accounts. Statutory accounting principles (SAP) differ from GAAP, requiring dual basis or adjustment entries. Agents calculate actuarial reserve entries and maintain SAP-to-GAAP bridging schedules.

11. **Legal**: The GL must support matter-level profitability tracking. Trust and escrow accounts (IOLTA) require segregated accounting with strict compliance rules. Revenue recognition for contingency fees requires careful judgment. Agents track trust account activity by client matter and ensure compliance with bar association rules.

12. **Government**: Governmental accounting follows GASB standards with fund-based accounting — general fund, special revenue, capital projects, debt service, enterprise funds. Budgetary accounting tracks appropriations, encumbrances, and expenditures. Agents maintain both budgetary and GAAP-basis ledgers and produce GASB-compliant financial statements.

13. **Pharma**: R&D capitalization versus expensing decisions significantly impact the GL. Clinical trial costs must be tracked by study, phase, and site. Milestone payments for in-licensed compounds create complex accrual entries. Agents track R&D spend against capitalization criteria and calculate clinical trial accruals based on patient enrollment and site activity data.

14. **Automotive**: The GL must support both manufacturing cost accounting and dealer financial services (floor plan financing, lease residual tracking, warranty reserves). Recall provisions and product liability reserves are significant estimate-based accounts. Agents calculate warranty reserve adjustments based on claims experience and estimate recall costs.

15. **Telecom**: Revenue accounts are structured by service type (wireless, wireline, broadband, enterprise), plan type, and customer segment. Network asset accounts are massive (cell towers, fiber, spectrum rights) with complex depreciation. Agents classify revenue from millions of subscribers and manage depreciation schedules for network infrastructure.

16. **Media & Entertainment**: Film and content costs are capitalized and amortized based on revenue forecasts (individual-film-forecast method). Participation and residual liabilities accrue as content generates revenue. Agents calculate content amortization using viewership data and accrue participation liabilities against distribution revenue.

17. **Energy & Utilities**: Regulatory accounting requires tracking rate base assets, deferred regulatory assets and liabilities, and fuel adjustment mechanisms. Unbilled revenue accruals for meter-reading lag are significant. Agents calculate unbilled revenue accruals and maintain regulatory asset/liability accounts per Public Utility Commission orders.

18. **Food & Beverage**: Cost accounting must handle byproducts and joint products that share production costs. Excise tax accounts (for alcoholic beverages) track tax liability by production volume. Trade promotion accruals represent significant estimates. Agents allocate joint production costs using net realizable value or physical measure methods.

19. **Logistics & Transport**: The GL must support route-level, lane-level, or shipment-level profitability analysis. Fuel surcharge revenue and expense accounts track the pass-through mechanism. Equipment lease accounting (fleet vehicles, containers, aircraft) under ASC 842 creates significant right-of-use asset entries. Agents reconcile fuel surcharge pass-through and calculate route profitability.

20. **Nonprofit**: Net asset classifications (without donor restrictions, with donor restrictions) replace traditional equity. Contribution revenue must be classified by donor-imposed restrictions. Functional expense allocation (program, management, fundraising) is required for Form 990. Agents classify contributions by restriction type and allocate shared costs across functional categories.

21. **SaaS / Technology**: Revenue accounts must support ASC 606 performance obligation tracking — license, subscription, professional services, and support revenue recognized on different bases. Capitalized software development costs (ASC 350-40) require careful tracking of the development stage. Agents manage multi-element revenue allocation and track development costs against capitalization criteria.

22. **Professional Services**: Revenue accounts track by practice area, engagement type, and client. Work-in-progress and unbilled receivables are significant balance sheet items. Per-partner equity and draw accounts are specific to partnership structures. Agents calculate WIP valuations and manage partner capital account entries.

23. **Defense & Aerospace**: Cost Accounting Standards (CAS) require specific indirect cost pool structures and allocation methodologies. Incurred cost submissions require detailed GL support. Progress payment receivables and advance billing liabilities are defense-specific. Agents maintain CAS-compliant cost pools and calculate overhead rates for government contract pricing.

24. **Mining**: Exploration and evaluation costs follow IFRS 6 or ASC 932, with specific capitalization criteria. Mineral reserve depletion calculations are based on units-of-production. Mine closure and environmental remediation provisions require long-duration present value calculations. Agents calculate depletion based on production reports and update remediation provisions with revised cost estimates.

25. **Chemicals**: Process costing in the GL allocates manufacturing costs across continuous production runs. Byproduct accounting recognizes revenue from secondary chemical products. Environmental compliance cost accounts track remediation obligations. Agents allocate process costs using equivalent units of production and maintain environmental accrual calculations.

26. **Textiles & Apparel**: Seasonal inventory builds require careful cost layer tracking (FIFO is standard). Sample and development costs for new collections are either capitalized or expensed depending on the likelihood of commercialization. Markdown reserves reduce inventory to net realizable value. Agents calculate markdown reserves based on aging and sell-through rates.

27. **FMCG**: Trade promotion accruals are one of the largest estimate-based GL entries — often 15–25% of gross revenue. Promotional spending must be classified correctly between revenue reduction and operating expense. Agents estimate trade promotion accruals based on committed programs and historical redemption rates.

28. **Electronics**: Inventory valuation is challenging due to rapid obsolescence — lower-of-cost-or-market adjustments are frequent. Warranty reserve calculations depend on failure rates and repair costs. Component price hedging gains and losses flow through the GL. Agents calculate obsolescence reserves based on inventory aging and product lifecycle data.

29. **Oil & Gas**: Successful efforts or full cost accounting methods determine how exploration costs are treated in the GL. Depletion of proved reserves uses units-of-production. Asset retirement obligations (ARO) for well plugging and abandonment require long-duration present value calculations. Agents track exploration costs by well status and calculate ARO adjustments annually.

30. **Jewelry & Luxury**: Inventory valuation for precious metals and gemstones requires mark-to-market or lower-of-cost-or-market adjustments based on commodity and appraisal values. Consignment inventory must be tracked off-balance-sheet until sale. High-value individual items may warrant serial-number-level GL tracking. Agents update precious metal valuations against market prices and manage consignment memo inventory records.

## By Company Size

### Startup (< 50 people)

You need a simple chart of accounts — probably 50–100 accounts. Do not over-engineer it. Use erp.ai's startup COA template and focus on tracking revenue, COGS, and your main expense categories (people, rent, software, marketing). Your "GL process" is probably the founder or a bookkeeper posting transactions from bank feeds and AP/AR. An agent can auto-categorize bank transactions, flag anything unusual, and produce a monthly P&L in minutes. The main risk at this stage is sloppy record-keeping that creates a mess for your first audit or funding round.

### SMB (50–500 people)

Your GL needs to support departmental reporting, possibly multi-location tracking, and enough detail for meaningful financial analysis. You probably have 200–400 accounts with 2–3 dimensions (department, location). A controller or accounting manager owns the GL and close process. Agents should automate recurring entries, perform account reconciliations, and produce financial statements. Focus on month-end close efficiency — if it takes more than 7 business days, identify the bottlenecks. Start building a reconciliation discipline for every balance sheet account.

### Mid-Market (500–5,000 people)

Multiple entities, multiple currencies, and possibly multiple GAAP standards. Your COA is 300–700 accounts with 3–5 dimensions. You have a team of accountants, a close calendar, and an audit committee asking questions. Agents should enable continuous close processes — daily reconciliations, automated accruals, and real-time reporting. Intercompany accounting becomes a major workstream. You need GL controls — segregation of duties, journal entry approvals, and period lockdown. Start benchmarking your close timeline against peers and driving it under 5 business days.

### Enterprise (5,000+ people)

The GL is a complex, multi-ledger environment supporting dozens of entities across jurisdictions. You maintain parallel reporting (GAAP, IFRS, statutory, tax) from the same underlying data. Your chart of accounts is a governed asset with a formal change request process. Hundreds of people touch the GL through sub-ledger transactions. Agents operate at scale — processing thousands of automated journal entries, performing continuous reconciliations, detecting anomalies in real time, and producing regulatory filings. GL is not just accounting infrastructure; it is a strategic data asset that feeds enterprise analytics and decision-making.

## erp.ai & Proto

**erp.ai**: The General Ledger module in erp.ai includes industry-specific chart of accounts templates, multi-dimensional accounting (up to 8 dimensions), automated recurring entries, real-time sub-ledger integration, account reconciliation workbench, and a financial statement builder that maps GL accounts to any reporting format.

**Proto**: Proto agents manage the GL through the ORAI loop — they observe transaction flows and account balances, reason about classifications and anomalies, act by posting entries and performing reconciliations, and iterate by refining auto-classification rules and close processes based on each period's results.
