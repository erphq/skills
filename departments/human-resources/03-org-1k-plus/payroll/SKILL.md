---
name: payroll
description: This skill should be used when the task involves calculate pay, withhold taxes, process deductions, run pay cycles, and stay compliant with wage laws.
version: 1.0.0
agents:
  - approvals
related:
  - general-ledger
  - leave-attendance
  - tax-compliance
metadata:
  author: erphq
  domain: erpai.studio
  department: human-resources
  size_tier: 03-org-1k-plus
  type: skill
  scope: internal
---
# Payroll

## What This Process Does

Payroll is the process of paying your employees correctly and on time, every pay period. It sounds simple, but it involves calculating gross pay (salary, hourly wages, overtime, commissions, bonuses), subtracting the right amounts for taxes (federal, state, local income tax, Social Security, Medicare), applying deductions (health insurance premiums, retirement contributions, garnishments, union dues), and delivering the net amount to each employee's bank account. Then you have to report everything to multiple government agencies, file taxes quarterly and annually, and keep records that survive an audit. Getting payroll wrong means unhappy employees, government penalties, and potential lawsuits.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Payroll Management** app, the **Pay Run** workflow, and the **Tax Compliance** template in the 720+ catalog. There are also country-specific payroll templates for US multi-state, UK PAYE, Indian statutory compliance, and EU payroll configurations. Deploy the closest match, then customize your pay schedules, earning codes, deduction types, and tax configurations on top.

## Build — Setting It Up

### With Agents

Agents remove the tedium and error-prone manual steps from payroll processing.

- **Pay run preparation**: The agent pulls time and attendance data, validates hours against schedules and overtime rules, flags exceptions (missed punches, unapproved overtime, leave without pay), and presents a clean dataset for the payroll administrator to review before processing.
- **Tax calculation**: The agent applies current federal, state, and local tax rates based on each employee's W-4 elections, work location, and resident state. It handles multi-state employees who work in different jurisdictions and applies reciprocity agreements where they exist.
- **Deduction management**: The agent calculates pre-tax and post-tax deductions in the correct order — 401(k) contributions before tax, then federal tax, then state tax, then after-tax deductions like Roth contributions, garnishments, and voluntary deductions. It ensures deduction caps (like the Social Security wage base) are respected.
- **Payslip generation**: The agent creates detailed pay stubs showing gross pay, each tax withholding, each deduction, YTD totals, and net pay. It distributes them electronically or prepares them for printing.
- **Exception detection**: The agent compares each pay run to the previous one and flags anomalies — an employee's pay changed by more than 15%, a new deduction appeared, someone's hours are significantly above or below normal. This catches data entry errors before money moves.
- **Compliance filing**: The agent prepares quarterly tax filings (941, state equivalents), annual W-2s, and other required reports. It tracks filing deadlines and initiates preparation with enough lead time for review.

### Key Decisions

**Pay frequency**: Weekly, biweekly, semi-monthly, or monthly? Hourly workers typically get weekly or biweekly pay. Salaried workers often get semi-monthly or monthly. Some states have minimum pay frequency requirements — check before deciding. Each frequency adds a pay run cycle to manage.

**Pay method**: Direct deposit is standard, but you may need to support paper checks for employees without bank accounts, pay cards for the unbanked, and wire transfers for international employees. Each method has different processing timelines and costs.

**In-house vs. outsourced**: Will you run payroll in-house using your HRMS, outsource to a provider like ADP or Paychex, or use a hybrid? In-house gives you control and lower per-employee costs at scale. Outsourced gives you expertise and liability transfer. The agent works with either model.

**Earning codes**: Define every way someone can earn money — regular time, overtime (1.5x and 2x), shift differentials, on-call pay, commissions, bonuses, tips, retroactive adjustments, severance. Each needs a code, a calculation method, and tax treatment rules.

**Approval workflow**: Who approves timesheets? Who approves the pay run? Who approves off-cycle payments? Most companies require the manager to approve time, payroll to review the run, and finance or a senior leader to approve the final payment batch.

### Common Mistakes

**Not staying current on tax rates**: Federal rates change annually. State and local rates change unpredictably. If your system is using last year's rates, every paycheck is wrong. Set up automatic rate updates or agent-monitored alerts.

**Misclassifying employees**: Treating someone as an independent contractor (1099) when they should be an employee (W-2) creates back-tax liability, penalties, and potential lawsuits. Get classification right from the start.

**Ignoring multi-state complexity**: A remote employee in New York working for a company in Texas creates New York withholding obligations. Every state where you have employees creates a nexus. Track this from day one.

**Manual data entry**: Manually entering hours, rates, or deductions is the number one source of payroll errors. Automate the data flow from time tracking, HR records, and benefits systems into payroll.

**Missing garnishment compliance**: Court-ordered garnishments (child support, tax levies, student loans) have specific priority rules and maximum withholding percentages. Getting these wrong has legal consequences.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

Track these metrics on a live dashboard:

- **Payroll accuracy rate**: Percentage of employees paid correctly without adjustments needed. Target is 99.5% or higher.
- **On-time pay rate**: Percentage of pay runs completed by the scheduled date. Should be 100%. Any miss is a serious issue.
- **Exception count per pay run**: How many anomalies are flagged each cycle. Rising exceptions indicate upstream data quality problems.
- **Cost per payroll run**: Total processing cost (staff time, system costs, vendor fees) divided by pay runs. Track to ensure efficiency.
- **Tax filing accuracy**: Percentage of quarterly and annual filings accepted without amendment.
- **Average processing time**: Hours from pay period close to payment disbursement. Shorter is better but not at the expense of accuracy.

Set alerts for: employees missing direct deposit information, tax rate updates from government agencies, garnishment orders approaching maximum limits, overtime hours exceeding budget thresholds, pay run not started within 24 hours of the scheduled processing window, and any employee with zero net pay.

### Exception Handling

**Retroactive pay adjustments**: When a raise is approved backdated, the agent calculates the difference for each affected pay period, applies correct tax adjustments, and adds the retro amount to the next pay run with clear documentation.

**Overpayments**: The agent calculates the net overpayment amount (not gross — taxes were already withheld), generates a recovery plan (lump sum or installment), creates the employee communication, and adjusts future pay runs accordingly.

**Terminated employee final pay**: State laws dictate when final pay is due — some require it on the last day, others allow until the next regular pay date. The agent knows the rules for each state, calculates unused PTO payout if your policy requires it, and processes the final payment on time.

**Tax notice response**: When you receive a notice from a tax agency about a discrepancy, the agent pulls the relevant pay records, compares them to filed reports, identifies the source of the difference, and drafts a response.

**Payroll tax deposit failures**: If an electronic tax deposit is rejected, the agent immediately alerts the payroll team, identifies the error (wrong account number, insufficient funds, incorrect amount), and re-initiates the deposit to avoid late penalties.

### Routine Tasks

**Each pay period**: Agent pulls and validates time data, calculates pay, generates exception report for review, processes approved pay run, distributes pay stubs, initiates tax deposits, and records journal entries.

**Monthly**: Agent reconciles payroll accounts to the general ledger. Agent reviews benefit deduction accuracy against enrollment records. Agent processes any mid-month changes (new hires, terminations, rate changes).

**Quarterly**: Agent prepares and files 941 (or equivalent) tax returns. Agent reconciles YTD withholdings against expected amounts. Agent generates compliance reports for review.

**Annually**: Agent prepares W-2s and distributes by January 31. Agent files W-3 with SSA. Agent reconciles annual totals against quarterly filings. Agent updates tax tables for the new year. Agent distributes new W-4s if tax law changes require re-election.

## Scale — Growing It

### Adding Complexity

**Multi-state payroll**: Each state has its own income tax rates (or no income tax), unemployment insurance rates, disability insurance requirements, paid family leave mandates, and reporting obligations. Some cities add local taxes (NYC, Philadelphia, San Francisco). Reciprocity agreements between states determine where taxes are withheld for cross-border commuters. This gets complex fast — build it into your system from the first multi-state hire, not as an afterthought.

**International payroll**: Each country has its own pay frequency norms, mandatory deductions (social insurance, pension contributions), statutory bonuses (13th month pay in many countries), and reporting requirements. Currency conversion, exchange rate timing, and cross-border tax treaties add layers. Consider using a global payroll provider for countries where you have few employees.

**Union payroll**: Collective bargaining agreements define pay rates, overtime rules, shift differentials, dues deductions, and benefit contribution formulas. Different unions at the same company may have different agreements. The agent must apply the correct CBA rules to each union member.

**Commission and variable pay**: Sales compensation plans with accelerators, decelerators, clawbacks, and split credits are essentially mini-programs within payroll. Build a separate calculation engine that feeds results into the main pay run.

**Equity compensation**: Stock options, RSUs, and ESPP transactions create taxable events with specific withholding requirements. The agent needs to coordinate between your equity management platform and payroll to apply correct supplemental withholding rates.

### Automation Opportunities

- **Continuous payroll**: Instead of batch processing on a schedule, agents can calculate pay in real-time as time data flows in. The "pay run" becomes a review-and-approve step rather than a calculation event.
- **Predictive error detection**: Agents learn patterns from historical pay data and flag likely errors before they happen — an employee who always works 40 hours suddenly showing 20, a deduction that should have started but did not, a tax rate that seems wrong for the jurisdiction.
- **Automated reconciliation**: The agent reconciles payroll to the general ledger after every pay run, matching journal entries to payment records and flagging discrepancies before month-end close.
- **Self-service corrections**: For simple errors (wrong bank account, name misspelling), the agent enables employees to submit corrections through self-service that flow through approval and take effect in the next pay run without payroll team intervention.
- **Tax jurisdiction management**: As employees move or start working from new locations, the agent automatically identifies new tax obligations, registers with the appropriate agencies, and updates withholding calculations.

### When to Redesign

- You are filing amended tax returns more than once a year.
- Payroll processing takes more than 3 business days per cycle.
- You have employees in more than 10 states and are managing each one manually.
- Error rates exceed 1% of employees per pay run.
- You are paying significant penalties for late tax deposits or filings.
- Your payroll team is growing faster than your employee count.
- Audit findings reveal systematic compliance gaps.

## By Industry

1. **Manufacturing**: Shift differentials (second shift, third shift, weekend premiums) and piece-rate pay complicate calculations. Union CBAs define overtime rules that may differ from FLSA standards. Production bonuses tied to output metrics need real-time data feeds. Payroll must handle seasonal fluctuations in overtime during peak production periods.

2. **Healthcare**: Complex shift structures — 12-hour shifts, rotating schedules, on-call pay, callback pay, and holiday premiums. Travel nurse agencies add vendor management complexity. Residents and fellows have different pay structures than attending physicians. Per-diem workers need daily rate calculations.

3. **Education**: Nine-month contracts paid over twelve months require annualization calculations. Stipend payments for coaching, advising, and committee work run outside regular pay cycles. Adjunct faculty are paid per credit hour. Summer session pay is separate. Student worker payroll has hour limitations and tax implications.

4. **Retail**: High hourly worker count means large pay runs with many small transactions. Commission structures for sales staff vary by department and product category. Tip reporting for some retail environments (car washes, salons in retail settings). Seasonal worker onboarding and offboarding creates payroll churn.

5. **Hospitality**: Tip credit calculations (where employers pay below minimum wage with tips making up the difference) require careful compliance. Tip pooling and tip sharing arrangements need specific tracking. Service charge distribution rules vary by state. Seasonal resorts process hundreds of terminations and hires within weeks.

6. **Construction**: Prevailing wage requirements on government contracts (Davis-Bacon Act) mean the same worker may earn different rates on different projects in the same week. Certified payroll reporting is required for federal projects. Per-diem and travel pay for workers assigned to distant job sites adds complexity.

7. **Real Estate**: Commission-only agents may be classified as independent contractors, but misclassification risk is high. Split commissions between agents and brokerages need clear calculation rules. Transaction-based pay means irregular income and withholding adjustments. Desk fees and marketing chargebacks against commissions require tracking.

8. **Agriculture**: Piece-rate pay (per bushel, per row) must still meet minimum wage when calculated hourly. H-2A workers have specific wage requirements (Adverse Effect Wage Rate). Employer-provided housing deductions have federal limits. Seasonal payroll processing runs from minimal to massive within weeks.

9. **Banking & Financial Services**: Bonus structures tied to portfolio performance, loan origination, and fee income are significant portions of total compensation. Deferred compensation and clawback provisions complicate annual payroll. Regulatory requirements mean bonus payments may need compliance review before processing.

10. **Insurance**: Producer commissions based on policy type, premium volume, and renewal rates require complex calculation engines. Override commissions for agency managers add layers. Contingent commissions from carriers are reconciled annually. First-year and renewal commission rates differ and need tracking over the policy lifecycle.

11. **Legal**: Partner draws versus profit distributions create different tax treatments. Associate bonus calculations based on billable hours require time system integration. Staff and attorney payroll often run on different schedules. Origination and finder fee credits in compensation calculations need partnership agreement rules.

12. **Government**: Step-and-grade pay systems with automatic progression require scheduled rate changes. Cost-of-living adjustments (COLAs) apply across bargaining units on specific dates. Locality pay differentials vary by geographic area. Multiple retirement system contributions (FERS, state pension plans) have different calculation rules.

13. **Pharma**: Sales rep incentive compensation based on prescription data, market share, and call activity is complex and heavily regulated (Sunshine Act reporting). R&D bonus structures tied to milestone achievements. Stock option exercises during clinical trial milestones create concentrated tax events.

14. **Automotive**: Dealership technician pay combines flat-rate hours (book time for repairs) with hourly guarantees. Sales staff earn commissions on front-end and back-end profits with minimum draw guarantees. Manufacturer spiff payments for selling specific models add variable components.

15. **Telecom**: Field technician overtime during outage events can be massive and unpredictable. On-call pay structures for network operations center staff need clear rules. Sales commissions on new activations, upgrades, and accessories each have different rates.

16. **Media & Entertainment**: Residual payments for actors and writers based on broadcast, streaming, and syndication usage require complex tracking over years. Per-project payments for production crew. Union minimum scale rates with overtime after specific daily and weekly thresholds. Foreign location premiums for international shoots.

17. **Energy & Utilities**: Callout pay for emergency response during storms or outages. Nuclear plant workers have radiation exposure tracking tied to work assignment limits. Shift premiums for continuous operations facilities. Regulatory-required staffing levels mean mandatory overtime calculations are common.

18. **Food & Beverage**: Restaurant tip compliance including tip credit, tip pooling, and the new tip tax regulations. Food processing plant workers may earn piece rates or shift premiums. Franchise payroll for multi-unit operators needs location-level tracking within a consolidated run.

19. **Logistics & Transport**: Driver pay combines mileage rates, hourly rates, per-stop payments, and wait time. DOT hours-of-service regulations cap driving hours and create complex overtime scenarios. International routes add cross-border pay complications. Owner-operator settlements are not technically payroll but are processed similarly.

20. **Nonprofit**: Grant-funded positions require payroll cost allocation by funding source with audit trails. Executive compensation has public disclosure requirements (Form 990). Some nonprofits have volunteer stipends that have specific tax treatments. Housing allowances for clergy have unique tax rules.

21. **SaaS / Technology**: Stock-based compensation (RSUs, options, ESPP) creates tax events at vesting and exercise. High salaries and equity push many employees past the Social Security wage base mid-year. Remote workers across multiple states create withholding complexity. Signing bonuses with repayment clauses need tracking.

22. **Professional Services**: Billable hour bonuses require time system integration. Partner compensation is often profit-based, not salary-based, with complex allocation formulas. Per-diem and travel expense reimbursements run alongside payroll. Multi-entity structures for tax purposes complicate consolidated payroll.

23. **Defense & Aerospace**: Cost-plus contracts require certified payroll with specific labor category rates. DCAA (Defense Contract Audit Agency) audits payroll for allowable costs. Overtime premiums on cost-type contracts have different rules than commercial work. Foreign assignment premiums for deployed personnel.

24. **Mining**: Remote location allowances and FIFO (fly-in, fly-out) travel reimbursements are standard. Hazard pay premiums for underground work. Production bonuses tied to tonnage or grade. Roster-based scheduling (2 weeks on, 1 week off) creates unusual pay period calculations.

25. **Chemicals**: Shift premiums for continuous process operations (24/7 plants). Hazard pay for workers handling specific chemicals. On-call pay structures for emergency response teams. Annual shutdown maintenance periods create overtime spikes that need budget planning and payroll capacity.

26. **Textiles & Apparel**: Piece-rate pay for factory workers must comply with minimum wage requirements. Seasonal production fluctuations create variable overtime. Multi-country manufacturing means running parallel payrolls with different statutory requirements. Design team bonuses tied to seasonal sell-through metrics.

27. **FMCG**: Sales force incentive calculations based on volume, distribution, and market share data from retail scanning services. Trade promotion funding affects sales compensation. Route driver pay combines hourly rates with delivery bonuses. Seasonal production workers have different pay structures.

28. **Electronics**: Engineer bonuses tied to patent filings and product launches. Clean room premiums for semiconductor workers. Assembly line piece rates and quality bonuses. International R&D operations with tax treaty implications for employee assignments between countries.

29. **Oil & Gas**: Rotation schedules (28 days on, 28 days off) create unique pay period structures. Offshore premiums and hazard pay. Foreign assignment packages with hardship allowances, housing, and tax equalization. Boom-bust cycles mean rapid scaling of payroll up and down.

30. **Jewelry & Luxury**: Sales commissions on high-value transactions with split credit for team selling. Artisan and craftsperson pay may include piece-rate and quality bonuses. Seasonal peaks around holidays and wedding season create overtime spikes. International luxury brands need multi-currency payroll for global retail operations.


## ERP•AI & Proto

**ERP•AI**: The Payroll module handles multi-frequency pay runs, tax calculations across jurisdictions, statutory compliance, and integration with time tracking and benefits, with pre-built configurations for major countries.

**Proto**: Proto agents apply the ORAI cycle to payroll processing — they Observe incoming time and compensation data for anomalies, Reason about whether flagged exceptions are errors or legitimate changes, Act by processing pay runs and filing tax reports, and Iterate by learning from correction patterns to prevent recurring errors.
