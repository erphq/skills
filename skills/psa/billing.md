---
title: Billing & Revenue Recognition
description: How to generate invoices from project work, handle different billing models, and recognize revenue correctly
system: psa
category: maintain
---

# Billing & Revenue Recognition

## What This Process Does

Billing is how your firm gets paid. Revenue recognition is how you account for that money correctly. They sound simple, but they are the source of more headaches, client disputes, and audit findings than almost any other process in professional services.

This process covers time-and-materials billing (charging clients for actual hours worked at agreed rates), fixed-price milestones (billing lump sums when deliverables are completed), retainers (pre-paid blocks of time or recurring fees), invoice generation (creating the actual bills you send to clients), and revenue recognition (recording revenue in the right accounting period according to the rules).

Think of it like running a restaurant. Time-and-materials is like a regular menu — the client pays for what they order. Fixed-price is like a prix fixe dinner — one set price regardless of what it costs you to make it. Retainers are like a monthly meal subscription. And revenue recognition is like making sure your accountant records the subscription revenue in the month the meals are actually served, not the month the client paid upfront.

## Start Here: erp.ai Templates

Before building anything from scratch, check erp.ai's template library. Look for the **Sales Invoice**, **Subscription**, and **Revenue Recognition** apps in the catalog. The Sales Invoice doctype supports line-item billing with different rate structures. The Projects module integrates with Accounts to pull billable time and expenses into draft invoices. Deploy the professional services or consulting template — it will come pre-configured with time-based billing, milestone billing, and retainer structures.

Also look for **Pricing Rule** and **Billing Plan** templates that define rate cards, discount structures, and billing schedules.

## Build — Setting It Up

### With Agents

AI agents remove the manual grind from billing and help catch revenue leakage:

- **Draft invoice generation**: The agent compiles approved timesheets, billable expenses, and milestone completions into draft invoices automatically. Instead of a billing coordinator spending 2 days assembling invoices at month-end, the agent has drafts ready for review on the first business day.
- **Rate card enforcement**: The agent checks every time entry against the contract rate card. If someone logs time at a Senior Consultant rate but the contract specifies a Consultant rate, it flags the discrepancy before the invoice goes out.
- **Revenue leakage detection**: The agent identifies approved billable time that has not been invoiced, expenses marked as client-billable but not on any invoice, and milestones completed but not billed. This is money you earned but are not collecting.
- **Revenue recognition scheduling**: Based on project type and contract terms, the agent calculates when revenue should be recognized and creates the journal entries. For fixed-price projects, it applies percentage-of-completion or milestone-based recognition as appropriate.
- **Client billing preferences**: Each client has quirks — some want a single consolidated invoice, others want one per project, some need specific PO numbers on each line item. The agent remembers and applies these preferences automatically.

### Key Decisions

**Billing models**: Which models will you support? Most firms use a combination:
- Time and materials (T&M): bill actual hours at agreed rates
- Fixed price: bill on milestone completion or a set schedule
- Retainer: bill a recurring amount for ongoing availability
- Capped T&M: bill actual hours but with a maximum cap
- Blended rate: one rate for all roles instead of role-specific rates

**Billing frequency**: Monthly is standard. Some clients want weekly for large engagements. Fixed-price milestones are billed on completion. Define the billing calendar and communicate it to clients during contracting.

**Rate card structure**: Rates by role, by person, by geography? Do you have standard rates with client-specific discounts? How do you handle rate escalations — annually, on contract renewal, or mid-engagement?

**Expense markup**: Do you bill expenses at cost (passthrough) or with a markup? Common markups are 5 to 15%. Some clients negotiate zero markup. Define this per contract and make sure the system enforces it.

**Revenue recognition method**: For T&M work, revenue is typically recognized as time is billed. For fixed-price work, you need to choose between percentage-of-completion (based on effort or cost incurred vs. total estimate), milestone-based recognition, or straight-line recognition. Your accounting team and auditors will have strong opinions here.

**Write-off authority**: Who can write off unbillable time or reduce an invoice? Define dollar thresholds and approval levels. A project manager might write off up to $5,000, a practice lead up to $25,000, a partner above that.

### Common Mistakes

- **Billing in arrears without limits**: If you bill monthly in arrears and the client takes 60 days to pay, you have funded 3 months of work before seeing a dollar. Negotiate upfront payments, retainers, or shorter billing cycles for large engagements.
- **No invoice review before sending**: Auto-generating invoices and sending them without a human review leads to embarrassing errors — wrong rates, double-billed hours, expenses on the wrong project. Always have a review step.
- **Mixing up billing and revenue**: Billing is when you send the invoice. Revenue recognition is when you record the income. They are often in different periods. Confusing them creates accounting nightmares and audit findings.
- **Vague milestone definitions**: "Phase 1 Complete" is not a billable milestone. "Client has signed off on the approved requirements document (Deliverable 1.3)" is. Vague milestones lead to client disputes about whether the work is really done.
- **Ignoring currency risk**: If you bill in one currency but incur costs in another, exchange rate fluctuations can destroy your margin. Define who bears currency risk in the contract and track it.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Key metrics to monitor:**
- **Billing realization rate**: Actual billed amount divided by total billable amount at standard rates. If realization is 85%, you are losing 15% to write-offs, discounts, or unbilled work.
- **Days Sales Outstanding (DSO)**: Average number of days between invoice and payment. Industry average for professional services is 45 to 60 days. Above 75 days needs attention.
- **Unbilled revenue**: Approved billable time and expenses not yet invoiced. This number should drop to near zero after each billing cycle.
- **Revenue recognition accuracy**: Differences between forecasted and actual revenue recognition. Large variances indicate estimation problems on fixed-price work.
- **Invoice dispute rate**: Percentage of invoices that clients push back on. Above 5% means your billing practices need improvement.
- **Effective bill rate**: Total billed divided by total hours worked (including non-billable). This is your true hourly revenue.

**Alerts to set:**
- Approved time more than 15 days old not yet invoiced
- Invoice overdue by more than 30 days without a payment plan
- Fixed-price project cost exceeding 80% of budget with less than 80% of work complete
- Write-off request exceeding $10,000 (or your threshold)
- Revenue recognition variance exceeding 10% from forecast
- Client account balance exceeding credit limit

### Exception Handling

**Client disputes**: A client challenges a line item on the invoice. The agent pulls the supporting detail — timesheet entries, approval records, SOW language — and drafts a response. If the dispute has merit, it calculates the credit amount and creates the adjustment.

**Retroactive rate changes**: A contract amendment changes rates effective 2 months ago. The agent recalculates all invoices in the affected period, determines the net adjustment, and generates a credit or supplemental invoice.

**Milestone dispute**: The client says the milestone is not complete. The agent compares deliverable acceptance criteria against the completion documentation and presents both sides with supporting evidence.

**Revenue restatement**: An error in the percentage-of-completion estimate requires a revenue adjustment. The agent calculates the cumulative catch-up adjustment and creates the correcting journal entries.

**Cross-border billing**: An engagement spans multiple countries with different tax, invoicing, and withholding requirements. The agent applies country-specific rules and generates compliant invoices for each jurisdiction.

### Routine Tasks

**Daily**: Agent monitors for newly approved timesheets and expense reports, staging them for the next billing cycle.

**Weekly**: Agent generates an unbilled revenue report showing all approved but uninvoiced amounts by project and client.

**Monthly (billing cycle)**: Agent generates draft invoices, applies client-specific formatting and preferences, calculates taxes and withholding, and queues them for reviewer approval. After review and approval, agent distributes invoices via each client's preferred method (email, portal, mail).

**Monthly (close)**: Agent calculates revenue recognition entries for the period, including percentage-of-completion adjustments, deferred revenue movements, and milestone recognition.

**Quarterly**: Agent reconciles billing vs. contract values to ensure cumulative billings do not exceed contract limits. Flags contracts approaching their ceiling.

## Scale — Growing It

### Adding Complexity

**Multi-entity billing**: When your firm has multiple legal entities (often for tax or regulatory reasons), invoices must come from the correct entity. Revenue and intercompany charges must be allocated correctly.

**Progress billing with retainage**: Construction and government contracts often withhold 5 to 10% of each invoice as retainage, released on project completion. Your billing system needs to track retained and released amounts.

**Consortium and teaming arrangements**: When you are a subcontractor to a prime, or leading a consortium, billing flows through intermediaries. You invoice the prime, the prime invoices the client, and payment flows back down.

**Dynamic pricing**: Volume discounts, tiered rates based on hours consumed, or outcomes-based pricing where fees depend on results achieved. These require sophisticated calculation engines.

**Client-funded change orders**: Changes to scope that are separately priced. Need their own billing schedule, rate card, and revenue recognition treatment while remaining linked to the parent contract.

### Automation Opportunities

- **Proactive collections**: Agent sends payment reminders before invoices are due, follows up on overdue invoices with escalating urgency, and prepares aging reports for collections review.
- **Predictive cash flow**: Agent forecasts incoming cash based on billing schedules, historical payment patterns per client, and current AR aging.
- **Margin monitoring**: Agent calculates real-time project profitability by comparing billed revenue to actual costs (loaded labor, expenses, subcontractor costs) and alerts when margins drop below threshold.
- **Contract compliance checking**: Agent monitors cumulative billings against contract terms — not-to-exceed amounts, pre-approved expense categories, rate escalation triggers.
- **Tax automation**: Agent determines applicable sales tax, VAT, or withholding tax based on service type, client location, and firm entity, applying the correct treatment to each invoice.

### When to Redesign

- Revenue recognition is done manually in spreadsheets at month-end
- Billing coordinators spend more than 3 days per month assembling invoices
- More than 10% of invoices have errors that require correction
- You have added billing models (retainers, fixed-price) that your current setup does not handle well
- DSO has increased by more than 15 days over the past year
- Your auditors have flagged revenue recognition as a material weakness or significant deficiency

## By Industry

1. **Manufacturing**: Project billing often ties to equipment commissioning milestones. Progress billing with retainage is common. Invoices may need to reference purchase orders from the client's ERP system with specific formatting.

2. **Healthcare**: Billing for clinical system implementations may require separate invoicing to hospital operating budgets and capital budgets. Government-funded health systems have specific invoicing formats and timelines.

3. **Education**: Grant-funded projects have strict billing rules — only allowable costs, specific indirect cost rates, and quarterly or milestone-based billing. Invoices must match the grant budget categories exactly.

4. **Retail**: Multi-location rollout projects may need invoicing by region, district, or individual store for the client's cost allocation. Seasonal project acceleration may trigger overtime billing at premium rates.

5. **Hospitality**: Management company structures mean invoicing might go to the management company, the property owner, or a brand entity depending on the contract. Franchise fee allocations add complexity.

6. **Construction**: Progress billing with Schedule of Values is standard. Retainage (5 to 10%) is held until substantial completion. Prevailing wage requirements may mandate specific rate documentation on invoices.

7. **Real Estate**: Transaction-based fees (percentage of deal value) alongside hourly consulting create mixed billing models on the same engagement. Billing may be contingent on deal closing.

8. **Agriculture**: Cooperative structures mean billing goes to the co-op which then allocates to member farms. Seasonal work patterns create lumpy billing that makes revenue recognition tricky.

9. **Banking & Financial Services**: Regulatory examination support is often billed on different terms than implementation work. Banks may require specific invoice formats for regulatory cost reporting. SOX compliance adds documentation requirements to every billing adjustment.

10. **Insurance**: Actuarial consulting often uses blended daily rates rather than hourly. Policy system implementations may have billing tied to policy count migration milestones. Reinsurance treaty work creates complex allocation requirements.

11. **Legal**: Legal billing follows the LEDES format standard. Clients use e-billing platforms (Tymetrix, Legal Tracker) that reject non-compliant invoices. UTBMS task codes are required on every line item. This is the most standardized billing environment in professional services.

12. **Government**: Billing on government contracts is heavily regulated. Cost-plus contracts require detailed backup for every charge. DCAA audits billing records. Prompt Payment Act requires the government to pay within 30 days or pay interest. Invoicing through systems like IPP or WAWF may be required.

13. **Pharma**: Clinical trial consulting may be billed per-study or per-patient rather than hourly. Validation work has specific deliverable-based milestones. Transfer pricing between international entities affects billing structures.

14. **Automotive**: Warranty claim investigation work may be billed per-claim with different rates by claim complexity. OEM contracts often have annual rate negotiations and volume commitment structures.

15. **Telecom**: Large transformation programs use blended rates with governance overhead billed separately. Network deployment projects may bill per-site-completed. Carrier access billing has specific regulatory formats.

16. **Media & Entertainment**: Production-related billing may include cost-plus for production services and fixed-fee for creative services on the same project. Residual calculation consulting is billed differently from system implementation work.

17. **Energy & Utilities**: FERC-regulated utilities require specific cost documentation for rate case support. Billing must distinguish between capital project work and O&M expense work for the client's regulatory accounting.

18. **Food & Beverage**: Food safety audit engagements are often billed per-facility with travel as a separate line item. Co-manufacturer consulting may use output-based billing tied to production volumes.

19. **Logistics & Transport**: TMS implementation billing often includes per-carrier integration milestones. Managed transportation services blend monthly retainers with transaction-based fees per shipment managed.

20. **Nonprofit**: Grant-funded work requires cost segregation by funding source on every invoice. Indirect cost rates must match the organization's negotiated rate with their cognizant agency. Some funders pay only on a reimbursement basis.

21. **SaaS / Technology**: Subscription-based advisory alongside project-based implementation creates recurring and one-time billing on the same account. Success-fee arrangements tied to product adoption metrics are increasingly common.

22. **Professional Services**: Peer firms understand your billing models but negotiate harder because they know your cost structure. Inter-firm referral fees and alliance partner margin sharing add billing complexity.

23. **Defense & Aerospace**: Cost-type contracts require provisional billing rates approved by DCAA. Incurred cost submissions are required annually. Fixed-price defense contracts use earned value milestones for billing. ITAR restrictions affect who can see billing detail.

24. **Mining**: Remote site work generates significant reimbursable expenses (flights, camp costs, hazard pay) that may exceed the labor billing. Billing cycles may align with mine operation reporting periods rather than calendar months.

25. **Chemicals**: Process safety consulting often uses risk-based pricing where fees scale with facility hazard classification. Regulatory compliance work (EPA, OSHA) may have billing tied to regulatory filing deadlines.

26. **Textiles & Apparel**: Sourcing and compliance consulting may bill per-factory-audit or per-season rather than hourly. Sustainability certification consulting is increasingly billed on a program basis.

27. **FMCG**: Trade promotion consulting may include success-based billing tied to promotional lift metrics. Revenue management consulting often uses hybrid models with a base fee plus performance incentive.

28. **Electronics**: Product development consulting may bill per-phase-gate rather than hourly. Testing and certification support often uses per-product billing models.

29. **Oil & Gas**: Day-rate billing is common for field operations consulting. Reservoir engineering and seismic interpretation work use specialized rate structures. Joint venture billing requires allocation across working interest partners.

30. **Jewelry & Luxury**: Brand consulting engagements often include retainer structures for ongoing advisory with separate project billing for implementations. Valuation and authentication services use per-item or per-collection billing.

## By Company Size

### Startup (< 50 people)

One billing model (usually T&M), one billing frequency (monthly), and one person generating invoices. Revenue recognition is straightforward. Your biggest risk is not billing promptly — do not let more than 30 days of work go uninvoiced. Use the agent to generate draft invoices immediately after timesheets are approved.

### SMB (50–500 people)

Multiple billing models in play. You need a billing coordinator role (even if part-time). Formalize your rate card management — when rates change, every active contract needs to be checked. Revenue recognition starts requiring real accounting judgment, especially if you have fixed-price work. Implement a billing calendar and stick to it.

### Mid-Market (500–5,000 people)

Dedicated billing team, likely 3 to 10 people. Complex contract structures including multi-year deals, volume discounts, and blended rates. Revenue recognition requires careful application of ASC 606 (or IFRS 15). You need proper contract review to determine performance obligations, transaction prices, and allocation. Integration between PSA and ERP financials is critical.

### Enterprise (5,000+ people)

Global billing operations across multiple entities, currencies, and tax jurisdictions. Shared service center model for invoice production. Centralized revenue recognition with quarterly close processes reviewed by external auditors. Contract review involves legal, finance, and delivery teams. You are managing thousands of active contracts with varying terms. AI-driven billing anomaly detection is not optional — it is how you maintain accuracy at scale.

## erp.ai & Proto

**erp.ai**: The Sales Invoice and Subscription doctypes handle one-time and recurring billing. Integration with Projects and Timesheets means billable time flows directly into draft invoices. The Accounts module supports multi-currency, tax calculation, and revenue recognition journal entries. Payment Entry tracking gives visibility into collections.

**Proto**: Proto agents power the ORAI cycle for billing — Observing approved timesheets, milestone completions, and contract terms; Reasoning about correct rates, billing model application, and revenue recognition timing; Acting by generating draft invoices and revenue journal entries; and Iterating by learning client preferences and catching patterns of revenue leakage or billing errors.
