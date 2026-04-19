---
name: accounts-receivable
description: This skill should be used when the task involves send customer invoices, track who owes you money, collect payments, apply cash, and manage aging and dunning.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - erp
  type: skill
  scope: internal
---
# Accounts Receivable

## What This Process Does

Accounts Receivable (AR) is the other side of the cash equation — it is how your company gets paid. When you sell a product or deliver a service, you send the customer an invoice. AR's job is to make sure that invoice is accurate, track the outstanding balance, collect payment when it is due, apply the cash correctly when it arrives, and escalate when customers do not pay on time. Do it well, and your cash flow is predictable, bad debt is minimal, and customer relationships stay healthy. Do it poorly, and you are constantly chasing money, writing off balances you should have collected, and surprising the CFO with cash shortfalls.

The core loop: generate an invoice from a sales order or contract, deliver it to the customer, monitor aging, send reminders (dunning), receive and apply payment, and resolve disputes. The complexity comes from partial payments, short payments, credit memos, deductions, payment plans, and customers who pay one invoice but dispute another.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Accounts Receivable Automation** app, the **Customer Portal** template, the **Collections Workbench**, and the **Cash Application Engine**. If you run a subscription business, the **Recurring Billing Suite** handles subscription invoicing and dunning out of the box. Deploy the closest match from ERP•AI's 720+ catalog, then customize on top.

## Build — Setting It Up

### With Agents

AI agents transform AR from a reactive collections function into a proactive cash management engine:

- **Invoice generation**: Agents automatically generate invoices from completed sales orders, service delivery confirmations, or time-and-billing records. They validate pricing, tax, customer terms, and billing address before sending.
- **Invoice delivery**: Agents route invoices via each customer's preferred channel — email, portal, EDI, or even paper. They confirm delivery and flag bounced emails or failed transmissions.
- **Cash application**: When payments arrive (via lockbox, ACH, wire, or check), agents match them to open invoices using remittance data, invoice numbers, amounts, and customer references. They handle partial payments, overpayments, and short payments by applying business rules you define.
- **Collections prioritization**: Agents score overdue accounts by amount, aging, customer history, and payment behavior to build a prioritized worklist. They tell your collectors exactly who to call first and what to say.
- **Dunning automation**: Agents send increasingly firm payment reminders on a schedule you define — friendly reminder at 3 days past due, firm notice at 15 days, final demand at 30 days, escalation to collections agency at 90 days.
- **Dispute management**: When a customer contests an invoice, agents create a dispute record, route it to the right internal team (sales, shipping, billing), track resolution, and either adjust the invoice or reaffirm the charge.

### Key Decisions

1. **Credit policy**: Who gets credit, how much, and on what terms? You need a process for evaluating new customers (credit checks, trade references) and reviewing existing customers (payment history, credit score changes). Decide your default terms (Net 30, Net 60) and who can grant exceptions.
2. **Dunning strategy**: How aggressive will you be? B2B relationships require more diplomacy than B2C collections. Define your escalation timeline and the tone of each communication. Decide when to involve sales reps versus keeping it purely in finance.
3. **Cash application rules**: When a customer pays $9,500 against a $10,000 invoice, is that a short payment (dispute the $500), an earned discount (they took 5%), or a partial payment (they will pay the rest later)? Define rules for each scenario.
4. **Write-off authority**: Who can write off bad debt, and at what thresholds? Common approach: AR manager up to $1,000, controller up to $10,000, CFO above that.
5. **Customer portal**: Will you give customers self-service access to view invoices, make payments, and submit disputes? This dramatically reduces AR workload but requires setup and customer adoption.
6. **Payment methods accepted**: Credit card (you pay processing fees), ACH (cheapest), wire (fastest), check (slowest). Consider offering a small discount for preferred payment methods.

### Common Mistakes

- **Invoicing late**: Every day you delay sending an invoice is a day you delay getting paid. If your invoicing process takes a week after delivery, you just added a week to your cash cycle.
- **Inaccurate invoices**: Billing errors are the number-one cause of payment delays. Wrong price, wrong quantity, wrong PO number, wrong address — the customer disputes it, and now you wait another 30 days.
- **No credit policy**: Extending unlimited credit to every customer guarantees bad debt. At minimum, check credit before extending terms above $5,000.
- **Collections too late**: If your first outreach is at 60 days past due, you have already lost leverage. The probability of collecting drops sharply after 90 days.
- **Manual cash application**: Manually matching checks to invoices is slow and error-prone. A single misapplication can trigger an incorrect dunning letter to a good customer, damaging the relationship.
- **Ignoring small balances**: A hundred $50 past-due amounts add up to $5,000. Automate collection of small balances instead of ignoring them.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

- **AR aging report**: The fundamental tool. Break down outstanding balances by current, 1–30, 31–60, 61–90, and 90+ days past due. Track the trend — is aging improving or deteriorating?
- **DSO (Days Sales Outstanding)**: How many days on average it takes to collect. Compare to your payment terms — if terms are Net 30 and DSO is 52, you have a collections problem.
- **Cash application rate**: What percentage of incoming payments are auto-applied without human intervention? Target 80%+ for mature AR operations.
- **Top overdue accounts**: Real-time view of your largest past-due balances with customer contact info, last collection activity, and promise-to-pay dates.
- **Dispute aging**: How long are disputes taking to resolve? Slow dispute resolution is a hidden cause of high DSO.
- **Bad debt reserve**: Track your allowance for doubtful accounts against actual write-offs. If write-offs consistently exceed the reserve, your credit policy needs tightening.
- **Collection effectiveness index (CEI)**: Measures how much of your receivables you actually collect during a period. More meaningful than DSO alone because it accounts for new sales.

### Exception Handling

- **Short payments**: Customer pays less than the invoice amount. Agent checks if the difference matches a known credit memo, a contractual discount, or an open dispute. If none, it creates a deduction record and routes to the collections team.
- **Unapplied cash**: Payment arrives with no remittance detail. Agent checks amount against open invoices for that customer, proposes matches, and flags for human review if ambiguous.
- **Overpayments**: Customer pays more than owed. Agent applies to open invoices and creates a credit balance for future application or refund.
- **Returned payments**: ACH returns or bounced checks. Agent reverses the payment application, reinstates the invoice, adds a returned-payment fee if contractually allowed, and escalates the customer for alternative payment.
- **Customer disputes**: Agent logs the dispute, categorizes it (pricing, quantity, quality, delivery, unauthorized deduction), routes to the responsible internal team, and tracks against SLA for resolution.

### Routine Tasks

- **Daily**: Agents process incoming payments and apply cash. Send automated dunning notices per the schedule. Flag any new accounts entering the 60+ day aging bucket.
- **Weekly**: Agents generate a collections priority list. Produce a cash forecast based on expected collections (using customer payment history patterns). Reconcile bank deposits to AR cash application.
- **Monthly**: Agents calculate DSO and CEI. Review and update the bad debt reserve. Generate customer statements. Identify accounts for potential write-off. Prepare AR entries for month-end close.
- **Quarterly**: Agents analyze customer payment trends to flag deteriorating accounts. Review credit limits against current exposure. Produce an AR performance report for management.

## Scale — Growing It

### Adding Complexity

- **Multi-entity**: Customers who buy from multiple subsidiaries need consolidated statements but entity-level invoicing. Agents manage cross-entity customer master data and produce consolidated views for collections while maintaining entity-level accounting.
- **Multi-currency**: International customers pay in their local currency, but you report in your functional currency. Agents calculate realized gain/loss at payment time and unrealized gain/loss at period end. They can also optimize timing of collections based on currency movements.
- **Subscription billing**: Recurring revenue models add complexity — prorations, upgrades, downgrades, usage-based components, and revenue recognition rules. Agents handle billing cycle management and usage metering.
- **Contract billing**: Long-term contracts with milestone billing, retainage, and progress-based invoicing require project-level tracking. Agents generate invoices when milestones are certified and track retention balances.
- **Electronic invoicing**: E-invoicing mandates (PEPPOL in Europe, CFDI in Mexico, GST e-invoice in India) require specific formats and government submission. Agents format and transmit compliant e-invoices.

### Automation Opportunities

- **Predictive collections**: Agents score each invoice's likelihood of on-time payment based on customer history, industry, invoice size, and economic conditions. Collectors focus on high-risk invoices before they become past-due.
- **Automated payment reminders**: Move from scheduled dunning to intelligent reminders — agents learn which customers respond to email versus phone, which day of week gets the best response, and adjust timing accordingly.
- **Customer payment portals**: Self-service reduces inbound inquiries by 40–60%. Customers can view invoices, make payments, set up autopay, and submit disputes without calling your AR team.
- **AI-powered cash application**: Machine learning models match payments to invoices even when remittance data is missing or garbled, achieving 90%+ auto-match rates.
- **Credit monitoring**: Agents continuously monitor customer credit scores and financial news, alerting you to deteriorating credit before the customer starts paying late.

### When to Redesign

- DSO has been climbing for three consecutive quarters despite stable payment terms — your collections process is not keeping up with growth.
- Cash application takes more than 24 hours — you are making credit decisions on stale data.
- More than 30% of invoices generate a customer dispute — your billing accuracy or order process needs an overhaul.
- You have acquired a company with its own customer base and billing system — time to consolidate.
- Bad debt write-offs exceed 2% of revenue — your credit policy and collections strategy need fundamental changes.

## By Industry

1. **Manufacturing**: Invoicing is tied to shipping — invoice triggers when the bill of lading is created. Trade discounts, volume rebates, and contractual pricing tiers create complex invoice calculations. Deductions for quality claims, short shipments, and late deliveries must be resolved through root-cause investigation involving production and shipping teams.

2. **Healthcare**: Patient billing involves insurance claim submission (primary and secondary), patient responsibility calculation, and self-pay collections. Revenue cycle management includes charge capture, coding, claim submission, denial management, and patient billing. Agents manage the complex payer-specific rules and appeal denied claims automatically.

3. **Education**: Tuition billing follows semester cycles with financial aid, scholarships, and payment plan offsets. Student account balances combine tuition, housing, meal plans, and fees. Collections must comply with FERPA privacy rules. Agents manage the enrollment-to-billing lifecycle and coordinate with financial aid disbursement schedules.

4. **Retail**: Consumer AR is minimal (point-of-sale), but wholesale and B2B retail channels involve complex trade terms — markdown money, advertising allowances, return-to-vendor authorizations, and chargeback deductions from retailers. Agents reconcile retailer chargebacks against supporting documentation and dispute invalid deductions.

5. **Hospitality**: Group and event billing involves master accounts, split billing, and post-stay reconciliation. Corporate customers negotiate rates with volume commitments. Travel agent commissions and OTA receivables add complexity. City ledger management (charges billed to accounts rather than collected at checkout) requires active follow-up.

6. **Construction**: Progress billing based on percentage of completion, with retention holdbacks (5–10%) that are not billable until project completion or acceptance. AIA billing format (G702/G703 forms) is industry standard. Change order billing must be documented and approved before invoicing. Agents generate progress billing certificates and track retention receivable balances.

7. **Real Estate**: Tenant invoicing includes base rent, CAM charges, percentage rent (retail), and utility reimbursements. Lease escalation schedules drive automatic billing adjustments. Tenant improvement allowances offset against rent. Agents manage complex lease-based billing calendars and calculate CAM reconciliation charges annually.

8. **Agriculture**: Commodity sales may be invoiced at spot prices or against forward contracts. Cooperative members receive patronage statements instead of invoices. Seasonal revenue concentration means AR peaks during harvest and is minimal otherwise. Agents manage forward contract billing and reconcile commodity settlement statements.

9. **Banking & Financial Services**: Loan receivables, fee income, and interest accruals create distinct AR streams. Regulatory capital requirements affect how receivables are classified and reserved. Agents manage fee billing, interest calculations, and regulatory reporting of impaired receivables.

10. **Insurance**: Premium receivables from policyholders and agents follow complex billing schedules (monthly, quarterly, annual). Commission clawbacks when policies cancel create receivable adjustments. Reinsurance recoverables are high-value, long-duration receivables requiring specialized tracking. Agents manage premium billing cycles and calculate commission adjustments on policy changes.

11. **Legal**: Time-and-expense billing requires detailed narrative descriptions that comply with client billing guidelines. Alternative fee arrangements (flat fee, success fee, blended rates) create non-standard invoice calculations. Trust account management adds regulatory requirements. Agents generate invoices from timekeeper entries and validate against client-specific billing rules.

12. **Government**: Government agencies bill other agencies (intergovernmental), citizens (permits, fines, taxes), and grantees. Federal receivables follow Treasury guidance. Grant monitoring includes tracking grantee compliance and recapturing funds for non-performance. Agents manage grant draw-down schedules and flag non-compliant expenditures.

13. **Pharma**: Gross-to-net revenue calculations involve chargebacks, rebates, returns, and patient assistance programs that reduce reported receivables. Medicaid/Medicare pricing rules create complex rebate obligations that offset AR. Agents calculate gross-to-net adjustments and reconcile chargeback claims from wholesalers.

14. **Automotive**: Dealer invoicing involves vehicle pricing (MSRP, dealer invoice, holdback), floor plan financing arrangements, and warranty claim receivables from manufacturers. Parts and service receivables from fleet accounts require specialized aging. Agents manage dealer incentive calculations and reconcile warranty claim payments.

15. **Telecom**: Millions of customer accounts with usage-based billing create massive AR volumes. Bill shock disputes (unexpectedly high bills) require usage analysis and often result in credits. Wholesale interconnect receivables from other carriers require CDR-level reconciliation. Agents manage bill presentment and automate dispute resolution for common scenarios.

16. **Media & Entertainment**: Advertising receivables follow complex rate cards with make-goods for under-delivery. Licensing revenue from content distribution involves minimum guarantees and royalty calculations. Syndication receivables span years. Agents reconcile ad delivery metrics against contracted impressions and calculate make-good credits.

17. **Energy & Utilities**: Regulated utility billing involves metered usage, demand charges, fuel adjustments, and rider charges. Customer payment plans and low-income assistance programs create billing complexity. Bad debt is regulated — utilities cannot easily refuse service for non-payment. Agents manage rate-based billing calculations and comply with regulated collection timelines.

18. **Food & Beverage**: Distributor billing includes complex trade spend programs — slotting fees, promotional allowances, and scan-back rebates that create receivable offsets. Direct-store-delivery (DSD) invoicing must reconcile to route driver handheld records. Agents reconcile trade promotion deductions against authorized programs.

19. **Logistics & Transport**: Freight billing is based on rated shipments — weight, distance, mode, and accessorial charges. Broker receivables involve matching carrier settlements to customer charges. Detention and demurrage charges are frequently disputed. Agents rate shipments, generate freight invoices, and manage accessorial charge disputes.

20. **Nonprofit**: Pledge receivables are commitments that may or may not be collected and require different recognition treatment based on conditions vs. restrictions. Grant receivables are earned as allowable expenses are incurred. Membership dues billing recurs annually. Agents track conditional pledges, manage grant reimbursement requests, and produce donor acknowledgment letters.

21. **SaaS / Technology**: Subscription billing involves annual and monthly plans, usage metering, seat-based pricing, and mid-term changes (upgrades, downgrades, cancellations). Revenue recognition (ASC 606) requires careful alignment between billing and revenue schedules. Agents manage subscription lifecycle billing and flag revenue recognition mismatches.

22. **Professional Services**: Time-and-materials billing requires timesheet approval, rate validation, and expense markup. Fixed-fee engagements bill on milestones. Work-in-progress (WIP) represents unbilled but completed work that must be tracked. Agents generate invoices from approved timesheets and track WIP aging to ensure timely billing.

23. **Defense & Aerospace**: Government contract billing follows FAR/DFAR rules — cost-plus, firm-fixed-price, and time-and-materials contracts each have specific invoicing requirements. Incurred Cost Submissions for cost-type contracts require detailed cost documentation. Progress payments follow completion milestones. Agents prepare compliant government invoices (SF-1034, SF-1035 forms) and track milestone certifications.

24. **Mining**: Offtake agreements set pricing based on commodity indices with provisional invoicing at shipment and final invoicing after assay results. Mark-to-market adjustments on provisionally priced receivables create fair value gains and losses. Agents generate provisional invoices, track assay results, and calculate final settlement adjustments.

25. **Chemicals**: Contract pricing tied to published indices (ICIS, Platts) requires invoicing at the applicable index price on the pricing date. Volume commitment true-ups occur quarterly or annually. Agents validate index pricing, generate invoices with supporting price references, and calculate volume rebates or shortfall charges.

26. **Textiles & Apparel**: Wholesale invoicing involves complex terms — early-order discounts, markdown money, return-to-vendor authorizations, and cooperative advertising allowances. Retail customer chargebacks for compliance failures (wrong labels, late shipments, missing ASN) are deducted from payments. Agents manage chargeback disputes and validate compliance documentation.

27. **FMCG**: High-volume invoicing to retailers and distributors with complex trade terms. Promotional deductions, slotting fees, and volume rebates can represent 15–30% of gross sales. Cash application must handle massive payment volumes with numerous deductions. Agents provide deduction management and trade promotion reconciliation at scale.

28. **Electronics**: Component sales involve blanket orders with scheduled releases, consignment billing triggered by pull signals, and ship-and-debit programs for distributor price protection. End-of-life product billing includes last-time-buy provisions. Agents manage scheduled release billing and reconcile distributor inventory reports for consignment and ship-and-debit programs.

29. **Oil & Gas**: Revenue disbursement to working interest owners is based on production volumes, market prices, and contractual terms. Joint Interest Billing (JIB) to non-operating partners allocates well costs. Gas balancing provisions track imbalances between parties. Agents calculate revenue distributions, generate JIB statements, and maintain gas balancing accounts.

30. **Jewelry & Luxury**: Consignment sales to retailers mean invoicing occurs when the piece sells, not when delivered. High-value items require individual serial-number-level tracking. Memo receivables track goods out on approval. Agents monitor consignment inventory sell-through and generate invoices upon sale confirmation.

## By Company Size

### Startup (< 50 people)

You probably send invoices from accounting software or even a spreadsheet. The founder or office manager does collections by email when they remember. This works until you have more than 20 active customers. At that point, deploy ERP•AI's basic AR template to centralize invoicing and aging. Set up a simple dunning sequence (three emails over 30 days). Use an agent to auto-generate invoices from your CRM's closed-won deals. Focus on getting invoices out the same day as delivery and following up within a week of the due date. Do not worry about cash application automation yet — your payment volume does not justify it.

### SMB (50–500 people)

Cash flow is the lifeblood of an SMB, and AR is where it enters the body. You need structured credit policies (do not extend Net 60 to every customer who asks), professional invoicing (branded templates with clear payment instructions), and consistent collections follow-up. Agents should auto-generate and deliver invoices, apply incoming payments, and manage dunning. Implement a customer portal so customers can self-serve. Track DSO religiously — if it is over 45 days on Net 30 terms, you have a problem. Your AR team is probably 1–3 people; agents should prevent it from needing to grow to 6 as revenue doubles.

### Mid-Market (500–5,000 people)

You have thousands of customers across segments — some pay reliably, others require constant attention. Segment your customers into tiers and apply different credit and collection strategies to each. Agents should provide predictive analytics (which invoices are at risk of going past-due), automate cash application at 85%+ rates, and manage the dispute lifecycle end-to-end. Multi-entity invoicing requires careful attention to which legal entity bills which customer. Revenue recognition complexity increases — ensure billing and revenue schedules are aligned. Consider a shared service center for AR if you have multiple operating units.

### Enterprise (5,000+ people)

AR at scale involves millions of invoices, complex global operations, and sophisticated financial instruments. You may factor receivables or use securitization programs. Cash application must handle high payment volumes across multiple banks and currencies. Collections is a specialized team with workload balancing and performance metrics. Agents operate across the entire order-to-cash cycle — from credit decisioning to invoice generation to cash application to collections to dispute management. Integration with CRM, order management, and revenue recognition systems must be seamless. Benchmark against industry DSO, CEI, and bad debt ratios.

## ERP•AI & Proto

**ERP•AI**: The Accounts Receivable module in ERP•AI includes automated invoice generation from sales orders, multi-channel delivery (email, portal, EDI), AI-powered cash application, configurable dunning sequences, dispute management workflows, and a customer self-service portal for viewing invoices and making payments.

**Proto**: Proto agents manage the entire order-to-cash cycle through the ORAI loop — they observe payment patterns and customer behavior, reason about collection priority and credit risk, act by generating invoices and sending dunning communications, and iterate by continuously improving cash application matching and collection strategies based on outcomes.
