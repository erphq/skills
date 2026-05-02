---
name: accounts-payable
description: This skill should be used when the task involves manage vendor invoices, match them to purchase orders and receipts, run payment batches, and keep supplier relationships healthy.
version: 1.0.0
agents:
related:
  - general-ledger
  - period-close
  - procurement
  - vendor-management
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 03-org-1k-plus
  type: skill
  scope: internal
---
# Accounts Payable

## What This Process Does

Accounts Payable (AP) is how your company pays its bills. Every time you buy something — raw materials, office supplies, a consulting engagement, cloud software — the vendor sends you an invoice. AP's job is to make sure every invoice is real, matches what you actually ordered and received, gets approved by the right person, and gets paid on time. Do it well, and you earn early-payment discounts, keep vendors happy, and always know how much cash you owe. Do it poorly, and you pay for things you never received, miss discounts, damage supplier relationships, and scramble at month-end to figure out what you actually owe.

The core loop is simple: receive an invoice, verify it against the purchase order and goods receipt (three-way match), get it approved, schedule it for payment, and record everything in the general ledger. The devil is in the exceptions — partial shipments, price variances, credit memos, rush payments, and vendors who send the same invoice twice.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Accounts Payable Automation** app, the **Vendor Portal** template, and the **Three-Way Matching Engine**. If you are in manufacturing or distribution, the **Procure-to-Pay Suite** bundles AP with purchasing and inventory receiving. Deploy the closest match from ERP•AI's 720+ catalog, then customize on top — you will save weeks compared to starting from zero.

## Build — Setting It Up

### With Agents

AI agents accelerate AP setup in several concrete ways:

- **Invoice ingestion**: An agent watches your AP inbox (or a shared mailbox) and automatically extracts vendor name, invoice number, date, line items, tax, and total from PDF or scanned invoices using OCR and document intelligence. It creates draft invoice records in your ERP without anyone typing a thing.
- **Vendor master cleanup**: Before you go live, an agent can scan your existing vendor list for duplicates (same company, different spellings), missing tax IDs, expired W-9s, and inactive vendors that should be archived. Clean vendor data prevents duplicate payments later.
- **PO matching**: The agent compares each invoice line to open purchase orders and goods receipts. If quantities, unit prices, and totals match within your tolerance, it auto-approves. If something is off, it routes the exception to the right buyer or approver with a clear explanation of what does not match.
- **Approval routing**: Based on rules you define (dollar thresholds, cost center, vendor category), the agent routes invoices to the correct approver and sends reminders if approvals stall.
- **Payment scheduling**: The agent groups approved invoices into payment runs based on due dates, early-payment discount deadlines, and your cash position. It drafts the payment batch for a human to review and release.

### Key Decisions

1. **Three-way match tolerance**: Will you allow a 1% variance between invoice and PO price, or zero tolerance? Manufacturing companies often allow small variances for weight-based goods; service companies may need exact matches.
2. **Payment terms strategy**: Will you standardize on Net 30, or negotiate different terms by vendor tier? Decide which early-payment discounts (2/10 Net 30) are worth taking based on your cost of capital.
3. **Approval matrix**: Who approves what? Common approach: under $1,000 auto-approved if PO-matched; $1,000–$10,000 requires department manager; above $10,000 requires VP or CFO. Keep it simple or approvals become a bottleneck.
4. **Payment methods**: Checks, ACH, wire, virtual card, or a mix? Virtual cards earn rebates. ACH is cheapest for domestic. Wires for urgent or international. Decide by vendor tier and geography.
5. **Non-PO invoices**: How will you handle invoices that do not have a purchase order (utilities, subscriptions, one-time services)? You need a separate approval workflow for these.
6. **Tax handling**: Will you validate sales tax and VAT on invoices, or trust the vendor? Getting this wrong creates tax audit exposure.

### Common Mistakes

- **Skipping vendor master cleanup**: If "Acme Corp" and "ACME Corporation" are two separate vendor records, you will eventually pay them both for the same invoice.
- **Setting tolerances too wide**: A 10% match tolerance means you could overpay by 10% on every invoice and never catch it.
- **No duplicate invoice detection**: Vendors resend invoices. Staff scan the same invoice twice. Without duplicate detection (same vendor + same invoice number + same amount), you will double-pay.
- **Approval bottlenecks**: If everything routes to the CFO, invoices sit for weeks. Delegate appropriately.
- **Ignoring credit memos**: If a vendor issues a credit memo and you do not apply it to the next payment, you overpay.
- **Going live without training**: AP clerks need to understand the new workflow, not just the old process on a new screen.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

- **Invoice aging dashboard**: How many invoices are waiting for matching, approval, or payment? Break it down by age bucket (0–7 days, 8–14, 15–30, 30+). If the approval queue is growing, you have a bottleneck.
- **Discount capture rate**: What percentage of available early-payment discounts are you actually taking? If vendors offer 2/10 Net 30 and you are paying on day 25, you are leaving money on the table.
- **Match exception rate**: What percentage of invoices fail three-way matching? If it is above 20%, something is wrong upstream — POs are not being created, goods receipts are late, or pricing is not maintained.
- **Duplicate invoice alert**: Real-time alert any time an invoice matches an existing record on vendor + invoice number + amount.
- **Payment forecast**: Rolling 30/60/90-day view of expected cash outflows based on approved and pending invoices.
- **Vendor scorecards**: Track on-time delivery, invoice accuracy, and dispute frequency by vendor.

### Exception Handling

- **Price variance**: Invoice unit price differs from PO. Agent flags it, shows the difference, and routes to the buyer who placed the order. Buyer can accept (if the vendor notified them of a price increase) or dispute.
- **Quantity variance**: Invoice says 100 units, goods receipt says 95. Agent holds the invoice and asks the warehouse to confirm. Common with weight-based or perishable goods.
- **Missing PO**: Invoice arrives with no PO reference. Agent tries to match by vendor, date range, and amount. If no match, routes to the requestor's department for retroactive PO creation or non-PO approval.
- **Duplicate invoice**: Agent detects a potential duplicate and holds it for review. Shows the original invoice side by side.
- **Vendor statement mismatch**: Vendor says you owe $50,000; your records say $45,000. Agent reconciles line by line and identifies the discrepancy.

### Routine Tasks

- **Daily**: Agent processes incoming invoices, runs matching, sends approval reminders for items older than 3 days.
- **Weekly**: Agent prepares payment run for review. Flags any invoices approaching due date that are still stuck in approval. Reconciles vendor statements received that week.
- **Monthly**: Agent generates AP aging report, calculates DPO (Days Payable Outstanding), identifies invoices accrued but not yet received, and prepares AP-related journal entries for month-end close.
- **Quarterly**: Agent reviews vendor master for inactive vendors, expired insurance certificates, and missing tax documents. Flags vendors with consistently poor invoice accuracy for buyer review.
- **Annually**: Agent assists with 1099 preparation by validating vendor tax IDs and calculating total payments by vendor. Flags vendors over the $600 threshold who are missing W-9s.

## Scale — Growing It

### Adding Complexity

- **Multi-entity**: When you add subsidiaries, each entity may have its own vendor relationships and payment methods, but you want consolidated visibility. Set up shared vendor masters with entity-specific payment terms. Agents can route invoices to the correct entity based on the ship-to or bill-to address.
- **Multi-currency**: International vendors invoice in their local currency. You need exchange rate management, realized/unrealized gain/loss tracking, and the ability to pay in the vendor's currency. Agents can flag rate movements that make early payment more or less attractive.
- **Intercompany**: When one subsidiary buys from another, the AP in one entity must mirror the AR in the other. Agents automate the creation of intercompany invoices and ensure they net out during consolidation.
- **Procurement integration**: As volume grows, tight integration between procurement, receiving, and AP eliminates manual handoffs. Agents bridge gaps by matching receipts to POs automatically as goods arrive.
- **Dynamic discounting**: At scale, you can offer vendors early payment in exchange for discounts through a supply chain finance platform. Agents evaluate which offers maximize your return based on current cash positions.

### Automation Opportunities

- **Touchless invoicing**: The ultimate goal — invoices that arrive, match, get approved, and get scheduled for payment without a human touching them. Best-in-class companies achieve 70–80% touchless rates.
- **Predictive cash management**: Agents forecast payment outflows and flag weeks where cash will be tight, allowing treasury to plan borrowing or delay non-critical payments.
- **Vendor communication**: Agents can auto-respond to vendor payment status inquiries ("Your invoice #1234 was approved on March 5 and is scheduled for payment on March 15 via ACH").
- **Fraud detection**: Agents monitor for red flags — invoices from new vendors with no PO, sudden increases in invoice amounts, bank account change requests, invoices just below approval thresholds.
- **Spend analytics**: Agents categorize spend by vendor, category, department, and project — giving procurement data to negotiate better contracts.

### When to Redesign

- Your touchless rate has plateaued below 50% despite good data quality — your matching rules or approval workflows need rethinking.
- You are processing more than 10,000 invoices per month and still relying on email-based approvals — you need a portal or workflow engine.
- You have acquired companies with different ERPs and are maintaining parallel AP processes — time to consolidate.
- Vendor complaints about late payments are increasing despite having the cash — your process has too many manual steps.
- Your AP team is growing linearly with invoice volume — automation should let you scale sublinearly.

## By Industry

1. **Manufacturing**: Three-way matching is critical because raw material invoices reference blanket POs with scheduled releases. Partial shipments are normal. Price variances occur when commodity prices fluctuate between PO date and delivery. Agents must handle tolerance-based matching for weight and volume goods and track landed cost components (freight, duties, insurance) as separate invoice lines tied to the same receipt.

2. **Healthcare**: Vendor invoices often come from Group Purchasing Organizations (GPOs) with contracted pricing tiers. AP must validate that the GPO price was applied, not list price. Implant and device invoices must match to specific patient procedures for cost accounting. Agents flag pricing discrepancies against GPO contracts and ensure implant tracking numbers reconcile.

3. **Education**: Spend is heavily seasonal (textbook purchases before semester, capital projects over summer). Budget encumbrance is critical — AP must check that a purchase does not exceed the department's remaining budget before approving payment. Grant-funded purchases require tracking to specific funding sources with their own rules about allowable expenses.

4. **Retail**: High volume of invoices from merchandise vendors with complex terms — markdown allowances, co-op advertising credits, volume rebates, and return-to-vendor deductions. AP must net these against gross invoices. Agents reconcile vendor deduction disputes that can drag on for months and track merchandise receipt at the distribution center level.

5. **Hospitality**: Invoices come from hundreds of food and beverage suppliers, often daily. Price volatility on perishable goods means purchase prices change constantly. AP must match against daily receiving logs, not just POs. Linen services, amenity suppliers, and OTA commission invoices each have unique matching requirements. Agents handle high-volume, low-value invoice processing.

6. **Construction**: Progress billing means invoices are based on percentage of project completion, not units delivered. Retention holdbacks (typically 5–10%) must be tracked and released only upon project milestones. Certified payroll requirements for government projects add a compliance layer. Agents track retention balances by project and flag when release conditions are met.

7. **Real Estate**: Common Area Maintenance (CAM) reconciliations create complex payable accruals. Property management companies invoice for multiple properties on a single statement. Tenant improvement allowances create payable obligations triggered by lease milestones. Agents allocate property-level invoices across the correct cost centers and track TI allowance draw-downs.

8. **Agriculture**: Commodity purchases fluctuate with market prices, and contracts often reference futures pricing. Cooperatives may have patronage dividend programs that create credits against future purchases. Seasonal cash flow means AP timing is critical — paying too early in the off-season strains working capital. Agents track commodity price references and adjust matching tolerances seasonally.

9. **Banking & Financial Services**: Regulatory vendor management requirements (OCC, FDIC guidance) mean AP must validate that vendors have current risk assessments, insurance, and compliance certifications before processing payments. Concentration risk monitoring ensures too much spend does not flow to a single vendor. Agents maintain vendor compliance dashboards and block payments to non-compliant vendors.

10. **Insurance**: Claims-related vendor payments (repair shops, medical providers, legal counsel) flow through a separate adjudication process but ultimately hit AP. Commissions to agents and brokers create complex payable calculations tied to policy premiums. Agents reconcile claim payment authorizations against AP disbursements and calculate broker commissions based on premium schedules.

11. **Legal**: Matter-based cost tracking means every invoice must code to a specific client matter for eventual billing or write-off. Outside counsel invoices must comply with billing guidelines (LEDES format, approved timekeeper rates, prohibited charges). Agents parse LEDES files, validate against rate cards, and flag guideline violations before approval.

12. **Government**: Procurement regulations (FAR for federal, state-specific rules) dictate vendor selection, pricing documentation, and payment timing. Prompt Payment Act requirements mandate interest penalties for late payments. Grant funding requires segregated tracking. Agents enforce regulatory payment timelines and calculate interest penalties when deadlines are missed.

13. **Pharma**: Contract Research Organization (CRO) invoices for clinical trials involve milestone-based billing tied to patient enrollment and study phases. Regulatory filing fees, patent maintenance fees, and licensing royalties have strict deadlines. Agents track trial milestones against CRO contracts and alert when milestone-based payments are due.

14. **Automotive**: Tier 1 suppliers invoice against complex delivery schedules with Evaluated Receipts Settlement (ERS) — no invoice is sent; payment is auto-calculated from goods receipt and contract terms. Tooling amortization charges add a per-unit component to parts invoices. Agents manage ERS calculations and reconcile tooling cost recovery schedules.

15. **Telecom**: Massive volume of site lease payments for cell towers and equipment locations, each with unique escalation clauses. Interconnect charges between carriers require complex reconciliation against call detail records. Agents reconcile circuit-level usage charges and track lease escalation triggers across thousands of site agreements.

16. **Media & Entertainment**: Residual payments to talent are calculated based on distribution revenue and union contracts (SAG-AFTRA, WGA). Music licensing royalties depend on usage metrics across platforms. Production invoices must map to specific show or film budgets. Agents calculate residuals against distribution reports and flag union rate changes.

17. **Energy & Utilities**: Fuel and commodity purchases settle at market prices that differ from contract estimates, creating true-up invoices. FERC-regulated costs must be tracked separately for rate case filings. Right-of-way payments to landowners recur annually with escalation clauses. Agents reconcile commodity settlement statements and track regulatory cost classifications.

18. **Food & Beverage**: Daily deliveries from dozens of suppliers with price lists that change weekly. Catch-weight billing (meat, fish, produce sold by actual weight, not ordered weight) requires matching against scale tickets at receiving. Trade spending (slotting fees, promotional allowances) creates complex deduction management. Agents reconcile catch-weight variances and track trade spend commitments.

19. **Logistics & Transport**: Freight invoices from carriers must match against bills of lading, rated at contracted tariffs. Accessorial charges (fuel surcharges, detention, lumper fees) are disputed frequently. Owner-operator settlements deduct advances, fuel purchases, and insurance from gross linehaul pay. Agents audit freight bills against rate agreements and flag accessorial overcharges.

20. **Nonprofit**: Donor-restricted funds require that purchases charged to a grant or restricted gift comply with donor stipulations. Fiscal sponsorship arrangements create payable obligations to sponsored projects. AP must produce documentation for audit trails required by grantors. Agents track restricted fund compliance and flag purchases that violate grant terms.

21. **SaaS / Technology**: Subscription and license invoices recur monthly or annually with auto-renewal clauses. True-up invoices for usage-based pricing (cloud compute, API calls) vary unpredictably. Software asset management requires matching licenses to actual deployment. Agents track renewal dates, validate usage-based charges against internal metrics, and flag upcoming auto-renewals for renegotiation.

22. **Professional Services**: Subcontractor invoices must map to client projects for pass-through billing. Time-and-materials contracts require validation of hours and rates against approved staffing plans. Expense reimbursements to staff follow complex per-diem and category rules. Agents validate subcontractor hours against project budgets and enforce expense policy compliance.

23. **Defense & Aerospace**: DCAA (Defense Contract Audit Agency) compliance requires meticulous cost segregation between government and commercial work. Cost Accounting Standards (CAS) govern overhead allocation. Progress payments on long-term contracts follow specific government milestones. Agents enforce CAS allocation rules and maintain DCAA-ready documentation.

24. **Mining**: Equipment rental and consumable invoices from remote site operations arrive with poor documentation. Ore haulage and processing fees reference tonnage and assay results. Environmental remediation obligations create long-tail payable accruals. Agents reconcile tonnage-based invoices against weighbridge records and track remediation cost accruals.

25. **Chemicals**: Pricing tied to chemical indices (ICIS, Platts) creates invoices that must be validated against published index prices on specific dates. Hazardous materials handling charges and environmental compliance fees add invoice complexity. Agents validate index-linked pricing and track environmental fee obligations.

26. **Textiles & Apparel**: Suppliers in multiple countries invoice in local currencies with complex Incoterms governing when title and risk transfer. Chargebacks for quality defects, late shipments, and labeling non-compliance are deducted from payments. Agents manage cross-border invoice reconciliation and track chargeback claims against supplier performance.

27. **FMCG**: Massive invoice volume from co-packers, raw material suppliers, and logistics providers. Trade promotion deductions (coupons, display allowances, scan-backs) create millions of dollars in adjustments annually. Agents automate trade promotion reconciliation and flag unauthorized deductions from distributor payments.

28. **Electronics**: Component pricing changes rapidly with market conditions. Long lead-time items may have prices renegotiated between PO and delivery. Tariff and import duty calculations depend on country of origin and HS codes. Agents track component price movements, validate tariff classifications, and reconcile broker duty invoices against customs entries.

29. **Oil & Gas**: Joint Interest Billing (JIB) from well operators allocates drilling, completion, and production costs among working interest owners. Revenue disbursement statements net production proceeds against operating expenses. Division order changes affect payment splits. Agents reconcile JIBs against Authorization for Expenditure (AFE) budgets and validate working interest percentages.

30. **Jewelry & Luxury**: Consignment inventory means AP only triggers when items sell, not when received. Precious metal and gemstone invoices reference fluctuating market prices and independent appraisals. Import duties on luxury goods are significant and vary by country of origin. Agents track consignment sales triggers and validate precious material pricing against market benchmarks.


## ERP•AI & Proto

**ERP•AI**: The Accounts Payable module in ERP•AI includes built-in OCR invoice capture, configurable three-way matching with tolerance rules, multi-level approval workflows, and payment run scheduling across ACH, wire, check, and virtual card. The vendor portal lets suppliers submit invoices and check payment status without calling your AP team.

**Proto**: Proto agents handle the full AP cycle through the ORAI (Observe-Reason-Act-Iterate) loop — they observe incoming invoices and match data, reason about exceptions and approval routing, act by creating records and sending notifications, and iterate by learning from exception patterns to reduce future manual intervention.
