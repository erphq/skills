---
name: tax-compliance
description: This skill should be used when handling tax filings and obligations at an organization under 100 employees — typically managed with an external CPA and tools like Avalara or TaxJar for sales tax, Gusto/Rippling for payroll taxes, and annual income tax prep with the CPA.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Tax Compliance — Under 100 People

## What This Process Does

Tax compliance at this size is mostly about **not missing deadlines, not missing nexus, and not surprising your CPA at year-end.** You have five tax buckets to manage:

1. **Federal income tax** (annual, CPA-prepared)
2. **State income tax** (annual, wherever you have nexus)
3. **Payroll taxes** (pay-period, auto-handled by Gusto/Rippling/ADP)
4. **Sales & use tax** (monthly/quarterly, wherever you have nexus)
5. **1099s and W-2s** (annual, January filing)

Your job isn't to become a tax expert — it's to **keep clean books, provide clean data, track nexus, and hand it all to a CPA who does the actual filings.** The risks are missed registrations (fines), missed filings (penalties), misclassified workers (back taxes plus interest), and undetected nexus expansion (years of back-owed sales tax).

## Start Here: ERP•AI Templates

ERP•AI's **Tax Compliance Calendar** template surfaces filing deadlines across all your jurisdictions with 30/14/7/1-day reminders. The **Sales Tax Nexus Tracker** monitors where you have employees, inventory, and revenue above economic-nexus thresholds — flagging when a new state registration is needed. Pair with Avalara or TaxJar for actual sales-tax calculation and filing, and Gusto/Rippling for payroll taxes. Don't try to run tax compliance without dedicated tax software at this scale.

## Build — Setting It Up

### With Agents

- **Deadline tracking**: Agent maintains your tax calendar across all jurisdictions — federal, state income, sales/use tax, payroll, 1099/W-2. Alerts at 30/14/7/1 days before each deadline.
- **Nexus monitoring**: Agent tracks where you have employees (physical nexus), where you have inventory (physical nexus), and where revenue + transaction counts exceed state economic-nexus thresholds. Flags new states as you approach thresholds.
- **Sales tax calculation**: Agent sits between your invoicing system and Avalara/TaxJar, validates tax calculations on each invoice, and files monthly returns via the tool.
- **Contractor classification**: When a new 1099 contractor is onboarded, agent runs IRS 20-factor test questions and flags potential misclassification risk (looks like an employee, paid as a contractor).
- **Year-end prep**: Agent compiles GL data, payroll summaries, 1099 vendor totals, and nexus reports into a CPA-ready package by January 31.

### Key Decisions

1. **In-house CPA vs. outsourced**: Below $20M revenue, outsourced (fractional CFO + CPA firm) is normal. Bring in-house tax expertise when multi-entity or international.
2. **Sales tax software**: Avalara (most mature), TaxJar (simpler), Stripe Tax (built-in if already on Stripe). Pick one on day one of selling into taxable jurisdictions. Don't try to calculate state-by-state manually.
3. **Payroll software**: Gusto (most SMB), Rippling (best if you also want IT onboarding), ADP (scale), Paychex (legacy). Handles federal + state + local payroll tax automatically.
4. **Nexus threshold policy**: Register proactively in states you know you'll exceed this year vs. reactively when you cross. Proactive = slightly more admin work; reactive = risk of back-owed tax if you miscalculate.
5. **Delaware vs other state of incorporation**: Delaware is default for venture-backed. Adds a Delaware franchise tax (up to $250K/year if you have lots of authorized shares) — make sure you file it and you elect the "assumed par value capital" method to minimize cost.
6. **R&D credits**: If you're doing engineering work, you likely qualify for federal + state R&D tax credits. Worth $50K–$500K+ depending on spend. Requires documentation discipline during the year, not retrofitted. Hire a specialist firm.

### Common Mistakes

- **Ignoring nexus**: "We only ship from California" — but you have a remote employee in Texas, and inventory in an Amazon FBA warehouse in Florida. Three nexus states, one registered. Classic.
- **Contractor vs employee misclassification**: "They're 1099, we don't pay payroll tax." IRS and state agencies audit this. If they look like an employee, they're an employee — re-classify before they complain.
- **Missing 1099 deadlines**: January 31 for 1099-NEC to recipient and IRS. Penalties scale with how late.
- **Not paying estimated taxes**: Q1/Q2/Q3/Q4 federal estimated payments if taxable. Under-withholding triggers underpayment penalty.
- **Delaware franchise surprise**: Many founders get a $75K franchise tax bill because they used default "authorized share method" instead of "assumed par value capital." Fixable annually.
- **Foreign employees/contractors**: International workers trigger international tax treaty considerations, backup withholding, and form W-8BEN collection. Don't DIY.

## Maintain — Keeping It Healthy

### The Monthly Rhythm

- **1st of month**: Sales tax software files prior-month returns. Agent verifies filings confirmed, payments drafted.
- **Close + 1 day**: Nexus monitoring check — any new states approaching thresholds? Any new employees or inventory locations to register?
- **Weekly**: Payroll system processes the pay run and remits federal/state/local taxes. Agent verifies every remittance.
- **Mid-month**: Estimated tax payment deadlines (when applicable). Agent drafts and founder approves.
- **Monthly**: R&D spend tagging — engineering time, qualifying materials. Quick entry, compounds value at year-end.

### What to Watch

- **Nexus dashboard**: States where you have employees, inventory, or approaching revenue/transaction thresholds.
- **Contractor totals**: YTD payments per 1099 vendor. Anyone >$600 needs a W-9 on file.
- **Sales tax reconciliation**: Tax collected per GL vs. tax remitted per filings. Should match within rounding.
- **Payroll tax remittance**: Every payroll remittance should be confirmed by the tax authority — failures happen and compound.
- **Estimated tax paid vs. estimated owed**: Running comparison. If you're behind, catch up at next estimated payment, not April 15.

### Exception Handling

- **New state with nexus realized**: Register immediately. Voluntary Disclosure Agreement (VDA) may limit back-tax exposure vs. waiting for a state audit.
- **Contractor threatens to file SS-8 (employee status determination)**: They're serious. Re-evaluate classification immediately; re-classify as employee if close call.
- **Missed filing deadline**: File late but file. Penalties are usually lower than non-filing penalties. Send payment immediately.
- **Sales tax audit letter**: Don't respond alone. Get CPA or sales-tax specialist involved. Provide requested data; don't volunteer more.
- **IRS notice**: Most are "we think you owe X." Read carefully. Often resolvable with a letter. Don't ignore — escalates.
- **State payroll-tax mismatch**: Usually a rate change the payroll system didn't catch. Verify current rate; submit amended return.

## Scale — Growing It

### Automation Opportunities

- **Full auto sales tax**: Invoice → Avalara/TaxJar → monthly filings, no human touch.
- **Nexus-driven registration automation**: Threshold crossed → registration paperwork auto-generated → CPA filing → done.
- **R&D substantiation**: Engineering time-tracking auto-tagged for R&D credit eligibility; agent compiles documentation package for annual R&D study.
- **Year-end package assembly**: Agent compiles CPA-ready package in days, not weeks.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- You have employees in 5+ states — multi-state payroll and income tax apportionment get real.
- International expansion starts — VAT/GST, transfer pricing, permanent establishment risk.
- Revenue passes ~$10M — corporate income tax planning (NOLs, credits, deferrals) needs a tax strategist, not just a filer.
- You start raising from US investors requiring QSBS eligibility — careful tracking of qualified small business stock.
- You acquire another company or get acquired — tax structure of the transaction is strategic.

## By Industry (at this scale)

1. **SaaS / Subscription**: Sales tax on software varies state-by-state (taxable in NY, exempt in CA, mixed in TX). Nexus from remote employees a constant factor.
2. **Professional Services**: Usually sales-tax-exempt for services. Nexus from employees dominates. Contractor classification risk very high.
3. **E-commerce**: Sales tax nexus in every state where you ship (economic nexus via Wayfair decision). Inventory in warehouses (FBA etc.) creates physical nexus.
4. **Construction / Trades**: Sales tax on materials, labor often exempt. Use tax on out-of-state purchases. Worker classification (subs vs employees) is a perennial audit topic.
5. **Restaurants**: Sales tax on most items, exemptions for some food categories. Payroll tax includes tipped-employee specifics.
6. **Healthcare**: Complex — services often exempt from sales tax, supplies may not be. Medicare/Medicaid payments have their own tax treatment.
7. **Nonprofit**: Federal income tax exempt but still files 990. Payroll taxes still apply. Unrelated Business Income Tax (UBIT) on side ventures.
8. **Manufacturing (small)**: Sales tax exemption on raw materials with resale/manufacturing certificates. Use tax on capital equipment in most states.

## ERP•AI & Proto

**ERP•AI**: Use the **Tax Compliance Calendar** + integrations with Avalara/TaxJar (sales) and Gusto/Rippling/ADP (payroll). Connect to your GL so tax accrual and cash remittances reconcile automatically. Skip in-house income-tax prep — that's still CPA territory.

**Proto**: A Proto agent runs calendar tracking, nexus monitoring, and year-end package assembly through ORAI. Specialized international-tax and R&D-credit agents come later as complexity warrants.

## Related

- [Accounts Payable](../accounts-payable/SKILL.md) — 1099 vendor tracking starts at AP
- [General Ledger](../general-ledger/SKILL.md) — tax accrual accounts (sales tax payable, payroll tax payable, income tax payable)
- [Period Close](../period-close/SKILL.md) — tax accruals are standard monthly close items
- [Payroll](../../../human-resources/01-org-under-100/payroll/SKILL.md) — payroll taxes handled at payroll
- [Enterprise Tax Compliance (1k+ people)](../../03-org-1k-plus/tax-compliance/SKILL.md) — multi-entity, international, complex tax planning at enterprise scale
