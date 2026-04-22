---
name: finance-accounting
description: This skill should be used when the task involves general ledger, accounts payable/receivable, fixed assets, budgeting, period close, revenue recognition, and financial consolidation.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  type: department-overview
  scope: internal
---
# Finance & Accounting

## Purpose

This domain covers the financial backbone of any enterprise application: recording transactions, managing money in and out, tracking assets, planning budgets, closing books, and producing compliant financial statements. A builder works in this space when the application must maintain a general ledger, process invoices, bill customers, manage fixed assets, enforce budgets, or produce financial reports that satisfy auditors and regulators.

Finance touches every other domain. Payroll feeds from HR. Procurement feeds from supply chain. Revenue feeds from sales. Project costs feed from operations. Getting the data model and process flows right here determines whether the entire system produces trustworthy numbers.

## Key Entities

### Chart of Accounts (CoA)

- **Description**: The hierarchical classification of all financial accounts. Every transaction posts to at least one account.
- **Key Fields**: `account_code`, `account_name`, `account_type` (asset, liability, equity, revenue, expense), `parent_account_id`, `currency_code`, `is_active`, `department_id`, `cost_center_id`, `intercompany_flag`
- **Relationships**: Parent/child hierarchy within CoA. Referenced by every journal entry line. Linked to cost centers, departments, and business units.
- **Design Notes**: Use a segmented account string (e.g., `company-department-account-project-intercompany`) rather than a flat code. Typical segment count is 4-7. Keep the natural account segment to 4-6 digits. Reserve ranges by type: 1000-1999 assets, 2000-2999 liabilities, 3000-3999 equity, 4000-4999 revenue, 5000-9999 expenses.

### Journal Entry

- **Description**: The atomic unit of financial recording. Every financial event produces a journal entry with balanced debits and credits.
- **Key Fields**: `journal_entry_id`, `entry_date`, `posting_date`, `period_id`, `source` (manual, sub-ledger, integration), `status` (draft, posted, reversed), `created_by`, `approved_by`, `reversal_entry_id`, `description`
- **Relationships**: Contains multiple journal entry lines. Links to the fiscal period. May reference a source document (invoice, payment, receipt).

### Journal Entry Line

- **Key Fields**: `line_id`, `account_code`, `debit_amount`, `credit_amount`, `currency_code`, `exchange_rate`, `functional_amount`, `cost_center_id`, `project_id`, `intercompany_partner_id`, `description`
- **Constraint**: Sum of debits must equal sum of credits for each journal entry.

### Vendor (AP)

- **Key Fields**: `vendor_id`, `legal_name`, `tax_id`, `payment_terms_code`, `default_payment_method`, `bank_account_details`, `currency_code`, `credit_limit`, `1099_reportable`, `hold_status`, `address`, `primary_contact`
- **Relationships**: Links to purchase orders, AP invoices, payment records. May have multiple addresses and contacts.

### AP Invoice

- **Key Fields**: `invoice_id`, `vendor_id`, `invoice_number`, `invoice_date`, `due_date`, `total_amount`, `tax_amount`, `currency_code`, `payment_terms`, `status` (draft, pending_approval, approved, paid, voided), `three_way_match_status`, `po_reference`, `receiving_reference`
- **Relationships**: Links to vendor, purchase order lines, goods receipt, payment batch. Each line links to a GL account.

### Customer (AR)

- **Key Fields**: `customer_id`, `legal_name`, `billing_address`, `tax_id`, `payment_terms_code`, `credit_limit`, `credit_hold_flag`, `currency_code`, `dunning_level`, `primary_contact`, `sales_rep_id`
- **Relationships**: Links to sales orders, AR invoices, cash receipts, credit memos.

### AR Invoice

- **Key Fields**: `invoice_id`, `customer_id`, `invoice_number`, `invoice_date`, `due_date`, `total_amount`, `tax_amount`, `currency_code`, `revenue_recognition_schedule_id`, `status` (draft, sent, partially_paid, paid, written_off), `dunning_status`
- **Relationships**: Links to customer, sales order, revenue schedule, cash application records.

### Fixed Asset

- **Key Fields**: `asset_id`, `asset_tag`, `description`, `acquisition_date`, `acquisition_cost`, `salvage_value`, `useful_life_months`, `depreciation_method`, `asset_class`, `location`, `custodian`, `status` (active, fully_depreciated, disposed, impaired), `accumulated_depreciation`, `net_book_value`
- **Relationships**: Links to GL accounts (asset account, accumulated depreciation account, depreciation expense account). Links to purchase records.

### Budget

- **Key Fields**: `budget_id`, `budget_name`, `fiscal_year`, `version` (original, revised_1, revised_n), `status` (draft, approved, active, closed), `type` (operating, capital, project), `methodology` (top_down, bottom_up, zero_based)
- **Relationships**: Contains budget lines by account and period. Links to actuals for variance reporting.

### Fiscal Period

- **Key Fields**: `period_id`, `period_name`, `start_date`, `end_date`, `fiscal_year`, `quarter`, `status` (open, soft_close, hard_close), `close_date`, `closed_by`
- **Relationships**: Referenced by all journal entries, budget lines, and reporting.

### Tax Configuration

- **Key Fields**: `tax_code`, `tax_name`, `tax_type` (sales, use, VAT, GST, withholding), `rate`, `effective_date`, `expiration_date`, `jurisdiction`, `tax_account_id`, `recoverable_flag`
- **Relationships**: Applied to invoice lines, purchase order lines, and revenue transactions.

## Core Business Processes

### Procure-to-Pay (AP Cycle)

1. **Purchase Requisition** -- Requester submits need with account coding and budget check.
2. **Purchase Order** -- Approved requisition converts to PO sent to vendor.
3. **Goods Receipt** -- Warehouse confirms receipt of goods; creates receiving document.
4. **Invoice Receipt** -- AP clerk enters or auto-captures vendor invoice.
5. **Three-Way Match** -- System compares PO line, receiving document, and invoice line. Tolerances: typically 1-5% on quantity, 0-2% on price. Mismatches route to exception queue.
6. **Approval Routing** -- Invoices exceeding threshold or failing match go through approval workflow. Common thresholds: <$5K auto-approve, $5-50K manager, >$50K director.
7. **Posting** -- Approved invoice posts to GL: debit expense/asset, credit AP.
8. **Payment Run** -- Scheduled batch (weekly/biweekly). Group by vendor, payment method, due date. Apply early payment discounts. Generate check, ACH, wire, or virtual card. Record: debit AP, credit cash.
9. **Vendor Statement Reconciliation** -- Periodic comparison of vendor statements to AP ledger.

### Order-to-Cash (AR Cycle)

1. **Sales Order Entry** -- Order captured from CRM or direct entry. Credit check against customer limit.
2. **Fulfillment** -- Goods shipped or service delivered. Creates delivery document.
3. **Invoice Generation** -- Auto-generate from fulfilled sales order or manual creation. Apply tax rules by jurisdiction.
4. **Invoice Delivery** -- Send via email, portal, or EDI. Track delivery confirmation.
5. **Revenue Recognition** -- Apply ASC 606 five-step model: identify contract, identify performance obligations, determine transaction price, allocate price, recognize when/as obligations satisfied. Create revenue schedule entries.
6. **Cash Application** -- Match incoming payments to open invoices. Handle partial payments, overpayments, and unidentified receipts. Lockbox integration for high-volume. Auto-match rules: invoice number, amount, customer reference.
7. **Collections** -- Age-based dunning: 30/60/90/120 days. Escalation: automated reminder > collector call > demand letter > collection agency > write-off. Track promise-to-pay commitments.
8. **Credit Memo / Adjustment** -- Issue credit for returns, disputes, or billing errors. Requires approval above threshold.

### Period Close

1. **Sub-Ledger Reconciliation** -- AP, AR, FA, payroll, inventory sub-ledgers reconcile to GL control accounts.
2. **Bank Reconciliation** -- Match bank statement transactions to cash GL. Investigate unmatched items. Book bank fees and interest.
3. **Accruals** -- Record expenses incurred but not yet invoiced. Reverse prior month accruals. Common: utilities, professional services, unbilled revenue.
4. **Intercompany Eliminations** -- Match and eliminate intercompany transactions across entities. Resolve imbalances before consolidation.
5. **Foreign Currency Revaluation** -- Revalue open AP/AR balances to period-end exchange rates. Book unrealized gain/loss.
6. **Depreciation Run** -- Calculate and post monthly depreciation for all active fixed assets.
7. **Revenue Recognition Entries** -- Post scheduled revenue recognition journal entries for the period.
8. **Trial Balance Review** -- Review trial balance for anomalies. Investigate significant variances from prior period and budget.
9. **Management Adjustments** -- Post any top-side adjustments with documentation.
10. **Soft Close** -- Restrict posting to authorized users. Run preliminary financial statements.
11. **Hard Close** -- Lock period. No further postings allowed. Archive.

**Typical Timeline**: Soft close by business day 3, hard close by business day 5-7, board-ready financials by day 10.

### Fixed Asset Lifecycle

1. **Capitalization** -- Create asset record when acquisition meets capitalization threshold (typically $1,000-$5,000). Link to PO or project. Assign asset class and depreciation parameters.
2. **Depreciation** -- Monthly calculation. Methods: straight-line (most common), declining balance (accelerated), units of production (variable), sum-of-years-digits. Tax vs. book depreciation may differ (MACRS vs. straight-line).
3. **Transfer** -- Move asset between locations, departments, or entities. Update responsible custodian.
4. **Impairment** -- Write down when recoverable amount falls below carrying value. Requires impairment test documentation.
5. **Disposal** -- Record sale, scrap, or retirement. Calculate gain/loss: proceeds minus net book value. Remove from asset register.

### Budgeting & Forecasting

- **Top-Down**: Executive sets revenue/expense targets. Departments allocate within constraints.
- **Bottom-Up**: Departments build detailed budgets. Roll up for executive review.
- **Zero-Based**: Every line item justified from zero each cycle. More thorough but time-intensive.
- **Rolling Forecast**: Drop elapsed month, add new month. Always maintain 12-18 month forward view. Updated monthly or quarterly.
- **Budget Control**: Hard stop (reject transaction exceeding budget) vs. soft warning (allow with notification). Configure by account group and threshold.

### Consolidation

1. **Collect** -- Gather trial balances from all entities. Standardize CoA mapping if entities use different charts.
2. **Currency Translation** -- Translate foreign subsidiaries: assets/liabilities at closing rate, income/expense at average rate, equity at historical rate. CTA (cumulative translation adjustment) to equity.
3. **Intercompany Elimination** -- Eliminate intercompany revenue/expense, receivables/payables, investments/equity.
4. **Minority Interest** -- Calculate non-controlling interest share.
5. **Adjustments** -- Post consolidation adjustments (goodwill amortization, fair value adjustments).
6. **Produce Consolidated Statements** -- Balance sheet, income statement, cash flow, changes in equity.

## Regulatory & Compliance

| Requirement | Scope | What to Track |
|---|---|---|
| **GAAP / IFRS** | Financial reporting standards | Ensure CoA and reporting align with applicable framework. GAAP for US, IFRS for international entities. |
| **ASC 606** | Revenue recognition | Five-step model. Track performance obligations, contract modifications, variable consideration. Maintain revenue waterfall schedules. |
| **SOX (Sarbanes-Oxley)** | US public companies | Segregation of duties, approval workflows, audit trails on all financial transactions. No deletion of posted entries; only reversals. |
| **1099 / 1096 Reporting** | US vendor payments | Track payments to vendors exceeding $600/year. File 1099-NEC, 1099-MISC by January 31. |
| **Sales/Use Tax** | Transaction tax | Nexus determination, tax rate by jurisdiction, exemption certificate management. Consider tax engine integration (Avalara, Vertex). |
| **VAT/GST** | International | Input/output tax tracking, periodic returns, reverse charge mechanism, place of supply rules. |
| **Transfer Pricing** | Multi-national | Intercompany pricing must be at arm's length. Document transfer pricing policies. |
| **Audit Trail** | All financial data | Immutable log of who changed what, when. Every posted entry must be traceable to source document. |
| **Data Retention** | Tax records | 7 years for US federal tax. Varies by jurisdiction. Financial statements: permanent. |

## Common Configuration Patterns

- **Multi-Company**: Separate legal entities share a common CoA template but maintain independent ledgers. Consolidation entity sits above. Each entity has its own fiscal calendar, currency, and tax configuration.
- **Multi-Currency**: Each entity has a functional (reporting) currency. Transactions may be entered in any currency. Exchange rates maintained in a rate table (daily, monthly average, period-end). Realized gain/loss on payment; unrealized on revaluation.
- **Cost Center Hierarchy**: Typically mirrors org structure. 3-4 levels: division > department > team > project. Used for expense allocation and responsibility reporting.
- **Approval Matrices**: Define by document type, amount range, and department. Example: AP invoice <$5K auto-approved, $5-50K department head, >$50K VP Finance.
- **Number Sequences**: Auto-generated sequences by document type and entity. Format: entity prefix + year + sequence (e.g., US-2026-INV-000001).
- **Fiscal Calendar**: Most common: calendar year (Jan-Dec). Alternatives: 4-4-5, 5-4-4, 4-5-4 week patterns (retail). Some use non-calendar year-end (Jun 30, Sep 30).
- **Intercompany Setup**: Define trading partners. Configure intercompany accounts (due-to/due-from). Auto-generate offsetting entries in partner entity. Reconciliation reports to catch mismatches.

## Integration Points

| System | Direction | Data | Pattern |
|---|---|---|---|
| **Banking / Treasury** | Bidirectional | Bank statements in, payment files out | BAI2/MT940 import, NACHA/ISO 20022 payment files. Daily automated import. |
| **Payroll (HR)** | Inbound | Payroll journal entries | Summary or detail journal per pay run. Map earnings/deductions to GL accounts. |
| **Procurement (SCM)** | Bidirectional | PO commitments, goods receipts, invoices | Real-time or batch. Three-way match data. |
| **Sales / CRM** | Inbound | Sales orders, AR invoices, cash receipts | Order-to-cash automation. Revenue data for ASC 606. |
| **Tax Engine** | Outbound/Inbound | Transaction data out, tax calculation back | Real-time API call during invoice creation. Avalara, Vertex, Sovos. |
| **Expense Management** | Inbound | Employee expense reports | Approved expenses post as journal entries. Concur, Expensify, Brex. |
| **Fixed Asset System** | Bidirectional | Asset acquisitions, depreciation schedules | If external FA system, sync asset register and monthly depreciation entries. |
| **Consolidation Tool** | Outbound | Trial balances, eliminations | If using external consolidation (OneStream, Planful), export period-end trial balances. |
| **Audit / GRC** | Outbound | Transaction logs, control evidence | SOX control testing data. Continuous audit feeds. |

## KPIs & Reporting

### Operational Metrics

- **Days Payable Outstanding (DPO)**: AP balance / (COGS / 365). Target varies by industry; 30-45 days typical.
- **Days Sales Outstanding (DSO)**: AR balance / (Revenue / 365). Lower is better; 30-45 days target.
- **Cash Conversion Cycle**: DSO + DIO - DPO. Days to convert inventory investment to cash.
- **AP Invoice Processing Cost**: Total AP department cost / invoices processed. Benchmark: <$5 per invoice with automation.
- **Straight-Through Processing Rate**: Percentage of invoices auto-matched and posted without manual intervention. Target: >80%.
- **Period Close Duration**: Business days from period end to hard close. Best-in-class: 3-4 days.

### Financial Statements

- **Income Statement**: Revenue, COGS, gross margin, operating expenses by category, operating income, net income. Monthly, quarterly, annual. Comparative (vs prior period, vs budget).
- **Balance Sheet**: Assets (current/non-current), liabilities (current/non-current), equity. Period-end.
- **Cash Flow Statement**: Operating, investing, financing activities. Direct or indirect method.
- **Budget vs Actuals**: Variance analysis by account, department, project. Dollar and percentage variance. Favorable/unfavorable flagging.
- **Aging Reports**: AP aging (current, 30, 60, 90, 120+ days). AR aging (same buckets). Used for cash management and collections.
- **Trial Balance**: All accounts with period debits, credits, and ending balances. Foundation for all financial statements.

## Checklist

- [ ] Design chart of accounts with proper segmentation (company, department, account, project, intercompany)
- [ ] Configure fiscal calendar and period structure
- [ ] Set up multi-currency with exchange rate tables and revaluation process
- [ ] Define approval workflows for AP invoices, journal entries, and budget changes
- [ ] Implement three-way matching logic with configurable tolerances
- [ ] Configure payment run process with support for multiple payment methods
- [ ] Build AR invoicing with tax calculation and revenue recognition scheduling
- [ ] Set up cash application with auto-match rules
- [ ] Configure dunning process with escalation levels
- [ ] Define fixed asset classes with depreciation methods and capitalization thresholds
- [ ] Build period close checklist with task assignments and deadlines
- [ ] Set up intercompany transaction processing and elimination rules
- [ ] Configure consolidation process for multi-entity reporting
- [ ] Implement budget entry, approval, and variance reporting
- [ ] Ensure audit trail on all financial transactions (no hard deletes)
- [ ] Configure tax codes by jurisdiction with tax engine integration
- [ ] Set up 1099 tracking for US vendor payments
- [ ] Build aging reports for AP and AR
- [ ] Validate SOX controls: segregation of duties, approval thresholds, access controls
- [ ] Test period-end foreign currency revaluation

## Related

- [Supply Chain](../supply-chain/OVERVIEW.md) -- procurement and inventory transactions feed AP and GL
- [Human Resources](../human-resources/OVERVIEW.md) -- payroll journals post to GL; benefits accruals
- [Sales & CRM](../sales-crm/OVERVIEW.md) -- order-to-cash cycle, revenue recognition, commissions
- [Project Operations](../project-operations/OVERVIEW.md) -- project accounting, WIP, revenue recognition for services
- [Customer Support](../customer-support/OVERVIEW.md) -- credit memos and billing adjustments from support cases
