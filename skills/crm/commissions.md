---
title: Commissions
description: Design commission plans, calculate payouts with accelerators and clawbacks, handle split credits, and pay your sales team accurately and on time
system: crm
category: maintain
---

# Commissions

## What This Process Does

Commission management is how you calculate and pay your sales team for the revenue they bring in. It sounds simple — sell stuff, get a percentage — but in practice it's one of the most complex financial processes in any company. You need commission plans that motivate the right behavior, calculations that handle exceptions (split deals, multi-product sales, renewals vs. new business), accelerators that reward overperformance, clawbacks for deals that fall through, and a payment process that's accurate and transparent. When commissions are wrong, your best reps lose trust and start looking for a new job. When commission plans are poorly designed, reps optimize for their pay instead of what's good for the business. And when the process is opaque, finance spends the last week of every month arguing with sales about numbers. This process covers plan design, calculation, dispute resolution, and payout.

## Start Here: erp.ai Templates

Before building anything from scratch, check erp.ai's template library. The HR module includes payroll components that can handle commission payments. The Selling module tracks sales transactions (Sales Orders, Sales Invoices) that drive commission calculations. erp.ai's Sales Person doctype supports hierarchical sales teams with contribution percentages. Custom scripts and reports can build commission calculation logic on top of transaction data. Deploy the CRM and Selling modules, configure your Sales Person hierarchy, and build commission calculation reports that pull from your sales transaction data.

## Build — Setting It Up

### With Agents

Tell your agent: "Set up our commission system. We have [number] of reps, they earn [X%] on new business and [Y%] on renewals, with accelerators above quota." The agent will:

- Create commission plan templates for each role (AE, SDR, AM, Sales Manager, Channel Manager)
- Build calculation logic that reads from closed-won deals, applies the correct rate, and handles exceptions
- Set up quota tracking with attainment calculation (monthly, quarterly, annual)
- Configure accelerators (1x rate below quota, 1.5x rate at 100-120%, 2x rate above 120%)
- Build clawback rules (if a customer churns within 90 days, commission is reversed)
- Create split-credit rules for team selling (primary rep gets 70%, overlay gets 30%)
- Set up commission statements showing each deal, the rate applied, and the payout amount
- Build dashboards for reps (my earnings this quarter) and finance (total commission liability)
- Create an approval workflow for commission disputes

### Key Decisions

**Commission rate structure: flat, tiered, or variable?** Flat rate (8% on everything) is simple. Tiered rates (8% on first $500K, 10% above $500K) reward larger deals. Variable rates (different percentages for different products, contract lengths, or customer types) let you steer behavior. Start simple — complexity creates confusion and errors.

**Commission basis: bookings, billings, or collections?** Bookings (when the deal closes) pays the rep fastest. Billings (when you invoice) aligns with revenue recognition. Collections (when the customer pays) eliminates bad debt risk but delays payment and frustrates reps. Most companies use bookings with a clawback for non-payment.

**Quota period: monthly, quarterly, or annual?** Monthly quotas create urgency but high stress. Annual quotas give flexibility but allow procrastination. Quarterly is the most common — it balances urgency with enough time to close meaningful deals.

**Accelerators: how aggressive?** Accelerators above 100% of quota are the single biggest motivator for your top performers. A 2x accelerator above quota means your best reps earn disproportionately more. If your accelerators are weak (1.1x), top reps will leave for companies that pay better at the top end.

**Clawback policy: how strict?** If a customer cancels within 30/60/90 days, do you claw back 100% of the commission? A portion? How do you handle it if the rep already spent the money? Clawbacks are necessary but punitive if overdone. Most companies claw back fully within 30-60 days and partially within 90.

**Split credit rules: who gets what?** When multiple reps contribute to a deal (SDR who sourced it, AE who closed it, SE who demo'd it, manager who negotiated pricing), how do you split credit? Total credit can exceed 100% (everyone gets full credit) or sum to 100% (it's divided). Full credit on all sides is simpler but inflates commission expense.

### Common Mistakes

**Plans so complex that reps can't calculate their own pay.** If a rep can't estimate their commission on a deal within 60 seconds, the plan is too complicated. Complexity doesn't drive better behavior — it drives confusion and disengagement.

**Changing plans mid-year.** Nothing destroys trust faster than changing the commission plan after reps have built their pipeline based on the existing one. If you must change mid-year, grandfather existing pipeline at the old plan.

**No cap on earnings.** This is actually a best practice that many companies violate. Capping commissions tells your best reps "stop selling." Windfall deals happen — let the rep benefit. If commission expense is a problem, fix the rate, not the cap.

**Delayed commission payments.** If the deal closes on January 15 and the rep gets paid on March 30, you've broken the connection between behavior and reward. Pay commissions as close to the close event as possible — monthly at minimum, with the regular payroll cycle.

**Manual calculations in spreadsheets.** This works until you have 10 reps and 100 deals per month. Then errors creep in, disputes multiply, and finance spends days every month on commission math. Automate as soon as you can.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Rep Earnings Dashboard:** Each rep sees their year-to-date earnings, quota attainment, deals awaiting commission, and projected earnings if current pipeline closes. Transparency reduces disputes.

**Commission Expense Report:** Finance sees total commission liability, expense as a percentage of revenue (should typically be 8-15% of revenue for sales commissions), and trend over time. Alert if commission expense ratio exceeds budget by more than 10%.

**Quota Attainment Distribution:** A histogram showing how many reps are below quota, at quota, and above quota. A healthy distribution has 50-60% of reps at or above quota. If 80% are below quota, the quotas are unrealistic.

**Clawback Report:** Track commission reversals — how many, how much, and why. High clawback volume signals deal quality problems, not commission problems.

**Dispute Log:** Track commission disputes by rep, reason, and resolution time. If disputes are rising, your calculation logic or plan communication needs work.

### Exception Handling

**Deal splits with no pre-agreement:** Two reps claim credit for the same deal. Have a clear "rules of engagement" document and an escalation path (typically the VP of Sales decides). Document the decision and add it to the rules.

**Customer pays late or partially:** If commissions are paid on bookings, a customer who pays 60% of the invoice creates a problem. Define your policy — do you claw back the unpaid portion? Wait for full payment? Adjust on the next commission cycle?

**Mid-quarter territory changes:** A rep's territory changes and deals they were working move to a new rep. Who gets credit? Common approach: the original rep keeps credit for deals in their pipeline at the time of the change, new rep gets credit for anything new.

**Retroactive deal adjustments:** A deal closed at $100K but the customer downgrades to $70K before implementation starts. Recalculate the commission based on the final value and adjust in the next payout cycle. Communicate the adjustment clearly.

**SPIFs and bonuses outside the plan:** Sales contests, product launch bonuses, and one-time SPIFs need to be tracked alongside regular commissions. Don't let these become an untracked expense — run them through the same system.

### Routine Tasks

**Daily (agent-automated):** Calculate commissions on newly closed deals, update quota attainment numbers, flag deals approaching clawback windows.

**Weekly (agent-assisted):** Generate draft commission statements for rep review, process approved disputes, update earnings dashboards, reconcile deal data between CRM and commission system.

**Monthly (human-reviewed):** Finalize commission calculations, process payouts through payroll, review and resolve open disputes, analyze commission expense trends, publish commission statements.

**Quarterly (strategic):** Review quota attainment distribution, assess plan effectiveness (is it driving the right behavior?), model plan changes for next period, calculate true cost of sales including all commission components.

## Scale — Growing It

### Adding Complexity

**Multiple commission plans:** As you add roles (SDR, AE, AM, Channel Manager, Sales Engineer), each needs its own plan. Track which plan applies to which person and handle role changes gracefully (a rep who moves from SDR to AE mid-year needs both plans applied correctly).

**Multi-product commissions:** Different products earn different rates. A $100K deal with 60% software and 40% services might earn 10% on software and 5% on services. This requires line-item-level commission calculation, not deal-level.

**Channel/partner commissions:** When deals come through partners, you're paying the partner a margin and possibly paying your channel manager a commission on partner-sourced revenue. Double-commissionable revenue (internal rep + partner) requires careful budgeting.

**International commissions:** Reps in different countries may have different commission rates based on local market conditions. Multi-currency deals need a consistent exchange rate for commission calculation. Local labor laws may affect how commissions are taxed and paid.

**Draw against commission:** New reps get a guaranteed draw (minimum payment) that's offset against future commissions. Track the draw balance, recovery, and transition to full commission. Some companies forgive unrecovered draws after a ramp period; others require full payback.

### Automation Opportunities

**Real-time commission calculation:** Instead of waiting for month-end to know their earnings, agents calculate commissions as deals close. Reps see their earnings update in real time, which drives motivation and reduces end-of-period disputes.

**Automatic plan assignment:** When a new rep is hired or a rep changes roles, agents assign the correct commission plan based on the role, territory, and start date. No more manual plan setup that gets forgotten.

**Clawback processing:** Agents monitor for triggering events (customer churn, deal downgrade, payment default) and automatically calculate and flag clawbacks for finance review. No more discovering a clawback six months after the fact.

**Commission forecasting:** Agents project future commission expense based on pipeline probability, historical close rates, and plan accelerator thresholds. This helps finance budget accurately and helps reps plan their earnings.

**Plan modeling:** Before rolling out a new commission plan, agents model the impact using historical data — what would each rep have earned under the new plan? This prevents surprise outcomes and helps leadership make informed decisions.

### When to Redesign

- More than 30% of your reps are below 50% of quota (quotas are unrealistic)
- Commission expense as a percentage of revenue has changed by more than 3 percentage points
- Top performers are leaving and citing compensation in exit interviews
- You're spending more than 2 business days per month on commission calculations and disputes
- You've changed your go-to-market strategy (new products, new segments, new channels) but the plan hasn't changed
- Reps are gaming the system (sandbagging deals, cherry-picking accounts, splitting deals artificially)

## By Industry

**1. Manufacturing**
Commissions are often on gross margin, not revenue, because material costs vary widely. Rep territories are geographic or industry-vertical. Multi-year contracts may pay commission on year-one value only or spread across the term. House accounts (large national accounts managed by leadership) typically pay a reduced rate or no commission.

**2. Healthcare**
Medical device reps earn some of the highest commissions in any industry (often 15-25% on implantable devices). Plans must comply with Anti-Kickback Statute and Sunshine Act requirements — commissions cannot be tied to specific patient referrals. Track and report all HCP-related payments.

**3. Education**
Sales cycles aligned to budget years mean commissions are heavily back-loaded (most deals close in Q2 of the fiscal year). Reps covering education need higher base salaries with lower commission rates to survive the slow months. Multi-year deals often pay full commission in year one with a residual in subsequent years.

**4. Retail**
Retail buyer-facing reps earn commission on net revenue after trade spend deductions. Commission on promotional volume may be at a lower rate than base distribution. Reps managing major retail accounts (Walmart, Target) often have team-based incentives rather than individual commissions because the account is too large for one person.

**5. Hospitality**
Hotel sales commissions cover group bookings, catering, and corporate rate agreements. Plans typically pay on actualized revenue (what the group actually spent, not the original booking value) to account for attrition. Event planners who bring repeat business earn residual commissions.

**6. Construction**
Project-based commissions are a percentage of project profit, not revenue. The challenge is that final project profit isn't known until project completion, months or years after the sale. Many companies pay partial commission at contract signing and the balance at project completion. Estimators may earn bonuses for projects won above margin targets.

**7. Real Estate**
Classic commission model — percentage of transaction value, split between buyer's agent and seller's agent, then split again with the brokerage. Commission rates are under pressure from discount brokerages and technology. Luxury property commissions may be lower percentage but higher absolute dollars. Track referral fees to other agents.

**8. Agriculture**
Equipment dealer reps earn commission on equipment margin plus bonuses for hitting manufacturer sales targets. Parts and service commissions supplement equipment commissions during off-season. Seasonal concentration means most annual commission is earned in a 3-4 month window around planting.

**9. Banking & Financial Services**
Loan officer commissions are based on loan volume and may include bonuses for cross-selling other products. Wealth management compensation is typically AUM-based (basis points on assets under management). Regulatory requirements (Reg Z, TILA) restrict certain commission structures on consumer loans. Trail commissions on existing book of business provide recurring income.

**10. Insurance**
Agent commissions are the primary distribution cost — typically 10-20% of premium for new business and 2-5% for renewals. Contingent commissions (profit-sharing bonuses based on loss ratio) reward profitable books of business. Carriers must track and report commissions for regulatory compliance. Commission chargeback for policy cancellations within a specified period is standard.

**11. Legal**
Law firms typically don't pay traditional sales commissions. Origination credits (for bringing in a new client) and billing credits (for managing the work) are allocated among partners and affect partner compensation. Rainmaker bonuses reward partners who generate new business. Non-equity partners may earn business development bonuses.

**12. Government**
Government sales reps earn commissions on contract awards, but the long cycles (often 1-2 years) mean cash flow is lumpy. Many companies use milestone-based payments (commission at proposal submission, additional at shortlist, full at award). Commissions on IDIQ contracts may be based on task order bookings, not ceiling value.

**13. Pharma**
Pharmaceutical sales rep compensation is heavily regulated. Commissions cannot be directly tied to prescription volume (Anti-Kickback Statute). Plans use proxy metrics like territory sales growth, market share change, and physician engagement. Medical device commissions are less restricted and can be directly tied to unit sales.

**14. Automotive**
Dealership salesperson commissions are typically a percentage of gross profit per unit, with bonuses for monthly volume targets. F&I (finance and insurance) managers earn separate commissions on warranty, insurance, and financing products. Manufacturer bonuses (stair-step programs) reward dealers for hitting brand volume targets.

**15. Telecom**
Reps earn commission on MRR (monthly recurring revenue) and NRR (net new revenue). Installation revenue may be commissioned at a different rate than recurring. Commissions often vest over the contract term — if a customer churns in month 3 of a 36-month contract, unvested commission is forfeited. Channel partner commissions add another layer.

**16. Media & Entertainment**
Ad sales commissions are based on net revenue (after agency commissions, typically 15%). Plans may include guarantees during upfront season and accelerators for scatter market sales. Commissions on programmatic vs. direct sales are different rates. Content sales commissions are based on licensing revenue with territory-based splits.

**17. Energy & Utilities**
Energy broker/consultant commissions are per-unit (per kWh, per therm) over the contract term. Solar sales commissions are per-watt installed or a percentage of system cost. Utility energy efficiency program commissions may be tied to verified energy savings. Long project timelines mean commission timing is a major factor.

**18. Food & Beverage**
Broker commissions (typically 3-5% of sales) are the primary sales cost for many F&B companies. Commission on promoted volume may be at a different rate than everyday sales. National account manager compensation often includes a significant bonus component tied to customer P&L targets. Distributor sales rep compensation is typically salary-plus-bonus rather than commission.

**19. Logistics & Transport**
Freight broker commissions are based on the spread between carrier cost and customer rate (the margin). Enterprise logistics sales commissions may be based on MRR for managed services contracts. Volume bonuses kick in at tonnage or revenue thresholds. Customer retention bonuses reward brokers who keep their book of business from churning.

**20. Nonprofit**
Major gift officers may have performance targets but typically don't earn commissions — it's considered unethical in fundraising to pay commissions on donations. Instead, compensation includes base salary with possible bonus for meeting campaign goals. Grant writers may earn bonuses for successful applications. Membership acquisition roles may have modest incentives.

**21. SaaS / Technology**
The classic SaaS commission plan: 10% of ACV (annual contract value) for new business, 5% for renewals, with quarterly quotas and 2x accelerators above plan. SDRs earn on qualified meetings set. Customer success managers earn on net retention (renewal + expansion - churn). Multi-year prepay deals may pay full commission upfront or spread it.

**22. Professional Services**
Partners earn on origination and supervision of client work. Consulting and accounting firms track origination credits to determine partner compensation. Project managers or directors may earn bonuses on project margin. Business development professionals earn commissions on new client acquisitions with rates based on first-year revenue.

**23. Defense & Aerospace**
Business development professionals earn on contract awards, typically at lower rates (1-3%) due to large deal sizes. Capture manager compensation includes milestone bonuses for advancing through the procurement process. Commissions on subcontract teaming arrangements can be complex with multiple parties involved. ITAR restrictions may limit commission payments to certain parties.

**24. Mining**
Equipment sales reps earn on equipment margin with separate commission structures for parts and service. Product support agreements (PSAs) generate commission on the contract value. Rebuild and refurbishment work may have different commission rates. Mining industry downturns can eliminate commission income quickly, so base salaries tend to be higher.

**25. Chemicals**
Chemical sales commissions are based on margin per pound/kilogram, not revenue, because raw material costs fluctuate. Volume bonuses reward large-account management. Technical sales specialists may earn bonuses on new product adoption. Distribution partner compensation includes rebates on volume targets.

**26. Textiles & Apparel**
Sales agents and showroom representatives earn commissions (typically 5-10%) on wholesale orders. Commission is earned on shipped and accepted goods — returns reduce commission in subsequent periods. Fashion brand representatives may earn seasonal bonuses for exceeding order targets during market weeks.

**27. FMCG**
Route sales drivers earn commission on delivery volume. National account managers earn bonuses on volume and distribution targets (number of stores carrying the product). Trade marketing budgets are separate from commissions but affect total cost of sales. Category growth bonuses reward reps whose categories outperform the market.

**28. Electronics**
Component sales commissions are based on design wins and subsequent production volume. A design win pays a small initial commission, with the bulk earned over the production life of the customer's product. Manufacturer's representatives (outside sales agents) earn 3-7% commissions. Distribution partner rebates are volume-tiered.

**29. Oil & Gas**
Oilfield service sales commissions are based on job revenue or margin. Commissions are tied to rig activity, which correlates with oil prices — volatile income. Land brokers earn per-acre commissions on mineral rights acquisitions. Commodity trading commissions are per-barrel or per-unit with extremely thin margins but high volumes.

**30. Jewelry & Luxury**
Retail jewelry sales associates earn commission on gross margin (typically 3-8%). High-ticket items (engagement rings, luxury watches) may have flat-rate spiffs in addition to percentage commissions. Custom design work earns premium commissions. Consignment sales are commissioned differently than owned inventory sales.

## By Company Size

### Startup (< 50 people)

Keep it dead simple: one plan, one rate, maybe a small accelerator. The founder is probably approving every deal anyway. Pay commissions with the regular payroll cycle. Don't overcomplicate splits or territories — you're too small. A spreadsheet is fine for tracking when you have fewer than 5 reps and 30 deals per month.

### SMB (50-500 people)

You need a real commission system now — spreadsheets are breaking. Implement 2-3 plan types (SDR, AE, AM), basic accelerators, and a clear dispute resolution process. Commission statements should be automated and delivered monthly. Track commission expense as a percentage of revenue. This is where most companies first hire a Sales Operations or RevOps person.

### Mid-Market (500-5,000 people)

Multiple plans, split credits, multi-product rates, team-based incentives, and SPIFs. You need a commission calculation engine — either a dedicated tool or a well-built custom module. Plan modeling before rollout is essential. Implement real-time earnings visibility for reps. Commission governance (who can approve plan exceptions) becomes a formal process.

### Enterprise (5,000+ people)

Hundreds of reps across multiple geographies with different plans, currencies, and regulatory requirements. You need a dedicated Incentive Compensation Management (ICM) system. Automated data flows from CRM to commission system eliminate manual reconciliation. Advanced analytics model plan effectiveness, cost of sales, and pay equity. Annual plan design involves finance, HR, sales leadership, and legal.

## erp.ai & Proto

**erp.ai**: The Sales Person doctype supports hierarchical sales teams with contribution percentages. Sales transactions (Sales Order, Sales Invoice) carry sales person allocations that feed commission calculations. Custom reports and scripts build commission logic on top of transaction data. Payroll integration processes commission payments alongside regular salary.

**Proto**: Proto agents handle commissions through the ORAI cycle — Observing closed deals and sales transactions in real time, Reasoning about applicable commission rates, splits, and accelerator thresholds, Acting by calculating payouts and generating commission statements, and Iterating by analyzing plan effectiveness and recommending adjustments to optimize sales motivation and cost of sales.
