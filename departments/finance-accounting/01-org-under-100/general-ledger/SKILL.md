---
name: general-ledger
description: This skill should be used when setting up and maintaining the general ledger at an organization under 100 employees — typically in QuickBooks Online, Xero, or ERP•AI's built-in GL, with a simple chart of accounts, a single entity, and monthly reporting to the founder and maybe investors.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# General Ledger — Under 100 People

## What This Process Does

The general ledger (GL) is **every financial transaction your company has ever made, categorized into accounts.** At this size, you have one entity, one base currency (usually), and a chart of accounts with 50–150 accounts total. Every bill paid, every invoice collected, every payroll run, every credit card charge posts to the GL — the GL is the single source of truth for what your company owns, owes, earns, and spends.

The goal at this size is simple: **clean categorization, reliable monthly financials, and books that don't embarrass you when a VC or auditor asks to look at them.** The risks are equally simple: miscoded transactions that confuse runway math, missing entries that understate expenses, and a chart of accounts so messy that no two months can be compared.

## Start Here: ERP•AI Templates

ERP•AI's **Small Business Chart of Accounts** template gives you 80–100 accounts organized by type (assets, liabilities, equity, revenue, expenses) with sensible US-GAAP naming. Industry-specific variants exist for SaaS, services, e-commerce, and nonprofit. Deploy the closest match, then *resist the urge to add accounts*. Most bookkeeping problems at this scale come from overly granular CoAs — keep it tight and use dimensions (department, project, class) instead of separate accounts for related spend.

## Build — Setting It Up

### With Agents

- **Transaction coding**: Agent watches bank feeds and categorizes transactions based on vendor, amount, and history. For new vendors, it asks once and remembers. Should handle 80%+ of transactions without human input within 30 days.
- **Journal-entry drafting**: Month-end journal entries (depreciation, prepaid expense amortization, payroll accruals, subscription revenue deferrals) agent drafts from templates and queues for review.
- **Bank reconciliation**: Agent matches GL transactions to bank and credit card feeds daily, flags anything unmatched for review.
- **Month-end close assistance**: Agent runs pre-close checks — unreconciled bank items, orphaned AR/AP, coding anomalies — and surfaces a punch list before close begins.
- **Variance explanation**: When a GL account spikes month-over-month, agent drills in and drafts a "what changed" summary for the founder.

### Key Decisions

1. **Chart of accounts depth**: Keep it flat and narrow. 80–120 accounts is enough at this size. Split "Software Subscriptions" into 20 accounts and you're making bookkeeping harder with no analysis benefit. Use dimensions instead.
2. **Cash basis vs accrual**: Under ~$5M revenue, cash basis is legal for tax and simple to run. Accrual is GAAP, required for investor reporting, and worth adopting day one if you plan to raise. Many founders run cash for tax and accrual for management reporting — that's fine at this scale.
3. **Dimensions to track**: At minimum, **department** (or team) and **class** (if you have product lines or services vs. products). Skip projects, customers, and locations as GL dimensions unless a specific business need forces them — too many dimensions make coding slow.
4. **Accounting software choice**: QBO for most, Xero for international/multi-currency, ERP•AI GL if you want the AP/AR/GL fully integrated with everything else on one platform. Pick one, migrate once, don't switch annually.
5. **Who does bookkeeping?**: Bookkeeper (in-house or outsourced) codes daily. Founder or fractional CFO reviews monthly. Tax CPA pulls from the GL annually. This separation matters even at small scale.
6. **Fiscal year**: Usually calendar. Pick something else (e.g., June 30) only if there's a compelling seasonal reason — every integration assumes calendar.

### Common Mistakes

- **Adding accounts instead of tagging**: "We need to track our conference spend separately." No — add a `conference` tag/class to the existing travel account. New accounts forever is how a 100-account CoA becomes 600 accounts in three years.
- **Coding to catch-all accounts**: "Office Expenses" and "Other Income" should be near-zero. If they're your biggest accounts, something's miscoded.
- **Ignoring the balance sheet**: Founders fixate on P&L. The balance sheet is where mistakes hide — prepaid expenses never amortized, deferred revenue never recognized, loans coded as expenses.
- **No monthly close discipline**: If September isn't closed until December, your data is useless for decisions.
- **Bookkeeper running bank rec without a review step**: Someone other than the coder should eyeball the reconciliation monthly. At this size, that's the founder or a fractional CFO.

## Maintain — Keeping It Healthy

### The Monthly Rhythm

- **Day 1–2**: Bookkeeper finishes coding prior-month transactions, completes bank recs, posts standard journal entries.
- **Day 3–4**: Pre-close review — aging reports, unreconciled items, coding anomalies resolved.
- **Day 5**: Close the month. Lock the period. Generate P&L, balance sheet, cash flow.
- **Day 6–7**: Founder review meeting. Variance discussion. Decisions (cut, invest, hire, raise) made off fresh numbers.

Best-in-class small-org close is 5 business days. 10 is workable. 20 is a problem.

### What to Watch

- **Uncategorized transactions**: Target zero. Anything in limbo is an excuse not to close.
- **Suspense or "ask my accountant" account balance**: Same — target zero before close.
- **Large balance-sheet accounts not rolling the way they should**: Prepaid expenses going up forever = no amortization happening. Deferred revenue growing = no recognition happening.
- **Revenue vs cash collected gap**: If accrual revenue is $500K but cash collected is $200K, AR is building — check concentration and aging.
- **Retained earnings not tying to prior year**: Classic sign of a miscoded JE that needs tracking down.

### Exception Handling

- **Vendor refund**: Don't treat it as revenue. Credit the expense account the original purchase was coded to.
- **Expense paid by founder personally**: Record as a shareholder loan or expense reimbursement — not income, not capital contribution (unless explicitly structured as one).
- **Credit card annual fee credited back**: Wipe the original expense; don't create new revenue.
- **Bounced/reversed bank transaction**: Reverse the original entry; do not create offsetting entries that leave both sides on the books.
- **Prior period discovered error**: If material, restate with a signed-off journal entry and note; if immaterial, correct in current period with a memo line explaining.

## Scale — Growing It

### Automation Opportunities

- **Bank-feed rules**: Every recurring vendor has a rule. Target >90% auto-coding within 90 days of adopting the system.
- **Subscription amortization**: Agent automatically sets up prepaid amortization for annual SaaS invoices — no manual schedule spreadsheet.
- **Payroll-to-GL mapping**: Payroll system (Gusto, Rippling, ADP) pushes journal entries directly; no manual monthly JE.
- **Reporting automation**: Management P&L with department breakdown, runway chart, and key ratios generated automatically day-of-close.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- You're adding a second legal entity (subsidiary, international entity, SPV) — intercompany accounting and consolidation kick in.
- You've hired a controller — their first instinct will be to rationalize a CoA you've been accumulating. Let them.
- You have >3 departments with real P&L ownership — dimension reporting gets serious.
- You're doing your first audit (investor-required or regulatory) — audit-ready journal entry documentation and close calendar become required.
- Revenue passes ~$10M — tax accrual, deferred tax, and more formal GAAP treatments matter.

## By Industry (at this scale)

1. **SaaS / Subscription**: Deferred revenue and MRR reconciliation dominate. Stripe-to-GL sync is the single biggest lift.
2. **Professional Services**: WIP and revenue recognition over time (ASC 606) matter even at small scale. Track by project.
3. **E-commerce**: Inventory and COGS require real discipline — cost layers, landed cost. Shopify/Amazon fee reconciliation is a constant headache.
4. **Agencies / Creative**: Pass-through expenses to clients need clear booking — agency commission vs. gross billings.
5. **Construction / Trades**: Job costing by project is the whole game. Standard GL without job costing = useless reporting.
6. **Healthcare (small practice)**: Insurance adjustments, patient write-offs, and bad debt are material and need clean tracking.
7. **Nonprofit**: Fund accounting (restricted vs. unrestricted) is the core structural difference from for-profit GL.
8. **Restaurants**: Daily sales close, cash-over/short, tip allocation — POS-to-GL sync is non-trivial even at one-location scale.

## ERP•AI & Proto

**ERP•AI**: Use the **Small Business GL** with an industry-specific CoA template. Enable bank-feed coding, auto-reconciliation, and the monthly close checklist. Skip multi-entity, advanced tax, and intercompany features until you actually need them.

**Proto**: A single Proto agent handles coding, reconciliation, journal entries, and close assistance through the ORAI loop. Add specialized close-and-audit agents when monthly close grows past 10 days or audit requirements emerge.

## Related

- [Accounts Payable](../accounts-payable/SKILL.md) — where bills post to GL expense accounts
- [Accounts Receivable](../accounts-receivable/SKILL.md) — where invoices post to GL revenue accounts
- [Period Close](../period-close/SKILL.md) — the monthly ritual that turns GL transactions into reliable financials
- [Budgeting & Forecasting](../budgeting-forecasting/SKILL.md) — GL actuals feed variance analysis
- [Enterprise GL (1k+ people)](../../03-org-1k-plus/general-ledger/SKILL.md) — multi-entity, multi-currency, segmented CoA at enterprise scale
