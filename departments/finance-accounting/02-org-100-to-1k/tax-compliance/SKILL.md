---
name: tax-compliance
description: This skill should be used when handling tax filings and obligations at an organization of 100-1,000 employees — typically a dedicated tax director or tax manager, external Big 4 or regional tax firm, multi-state nexus, first international exposure, R&D credits, and deferred-tax accounting.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Tax Compliance — 100 to 1,000 People

## What This Process Does

Tax at this scale is **a specialized function with real strategic impact.** You have a tax director or manager (often reporting to controller or CFO), external tax firm handling filings, and a tax calendar spanning federal, 10–40 states, international (if applicable), sales/use, payroll, property, franchise, and R&D credits. Annual tax return is a 3–6 month process involving CPA, internal tax, controllers, and finance ops.

Dollars are real — state sales tax exposure, R&D credit value, transfer pricing, nexus decisions, and deferred tax all reach seven-figure materiality. Mistakes compound: undetected nexus creates years of back-owed tax; missed R&D documentation loses credits; improper transfer pricing triggers adjustments and penalties.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Tax Compliance** template provides multi-state calendar with filing deadlines and thresholds, sales-tax nexus monitoring, R&D credit documentation, Form 1099 automation, and property tax filings. Pair with Avalara Connector (sales tax), Gusto/Rippling integration (payroll tax), and **Deferred Tax Tracker** (book-tax differences, NOLs, credits).

## Build — Setting It Up

### With Agents

- **Multi-jurisdiction calendar**: Agent maintains comprehensive tax calendar — federal, state, local, international. Deadline alerts with 30/14/7/1 day warnings.
- **Nexus monitoring**: Agent tracks nexus triggers — employees, inventory, revenue thresholds, transaction counts. Alerts when new state nexus is triggered.
- **Sales tax at scale**: Agent orchestrates with Avalara/Vertex — ensures invoice-level tax accuracy, reconciles to sub-ledger, files monthly returns.
- **1099 automation**: Contractor payments tracked year-round. Q4 prep surfaces any vendor exceeding $600 without W-9, missing TINs, classification concerns.
- **R&D credit documentation**: Agent tags engineering time, qualifying expenses, project research activities. Year-end package auto-generated for R&D study.
- **Deferred tax tracking**: Book-tax differences tracked monthly (depreciation timing, deferred revenue, stock comp, reserves). Deferred tax rollforward maintained.
- **Transfer pricing monitoring**: Intercompany transactions tracked for arm's-length defensibility. Annual transfer pricing documentation supported.

### Key Decisions

1. **In-house tax staffing**: Tax manager + external firm typical. Tax director when international or complex transactions become regular.
2. **Sales tax technology**: Avalara, Vertex, or Sovos — select and commit. Manual state-by-state filing doesn't scale past 5–10 states.
3. **State nexus strategy**: Register proactively in states with clear nexus and planning to scale. Reactive registration only for minimal-exposure states.
4. **R&D credit approach**: In-house documentation discipline + external specialist for annual study + IRS defense preparation. High-value skill; worth the investment.
5. **International structure timing**: When to set up foreign subsidiary vs use employer-of-record. Tax consequences (transfer pricing, local income tax, withholding) factor heavily.
6. **Stock compensation tax**: ISO vs NSO employee tax treatment; employer withholding obligations; state-by-state sourcing rules for mobile employees.
7. **Entity structure decisions**: Single-entity, parent-subsidiary, LLC vs C-corp, check-the-box elections. Tax consequences drive structure; structure drives tax complexity.
8. **Audit readiness**: All tax positions documented. Support files maintained for 7+ years. Auditor inquiries anticipated, not fire-drilled.

### Common Mistakes

- **Nexus surprise**: Company grows, adds remote employees in 20 states, nobody monitors. Audit letter from a state three years later, back-owed sales tax + penalties.
- **Contractor misclassification at scale**: 50 "contractors" who meet employee criteria. State or federal audit reclassifies; back-payroll-tax liability is material.
- **R&D credit documentation gap**: Credit claimed, insufficient supporting documentation for the qualified research activities. Audit disallows.
- **Transfer pricing neglect**: Intercompany service fees set arbitrarily, no contemporaneous documentation. Tax authorities adjust with penalties.
- **Stock comp tax withholding gaps**: Mobile workforce, multi-state exposure, employer withholding requirements missed. Reassessment + penalties.
- **Sales tax over-collection**: Collecting tax where not required, not remitting correctly. Consumer fraud / class-action exposure.
- **Tax calendar single-point-of-failure**: One tax person holding calendar in their head. Departure = crisis.

## Maintain — Keeping It Healthy

### The Monthly Rhythm

- **1st of month**: Prior-month sales tax filings across all registered states. Agent verifies filings + remittances.
- **Close + 2 days**: Tax accrual entries posted. Deferred tax rollforward updated. Book-tax differences tracked.
- **Weekly**: Payroll tax remittances confirmed across federal + state + local jurisdictions.
- **Quarterly**: Estimated tax payments. Sales/use tax true-up. Nexus threshold review.
- **Annually**: Federal + state income tax returns (Q1–Q2). R&D study (Q1–Q2). 1099/W-2 filings (Jan 31). Annual reports/franchise taxes (varies by state).
- **Continuously**: Nexus monitoring, R&D documentation, transfer pricing oversight.

### What to Watch

- **Nexus approaching thresholds**: Revenue and transaction counts approaching state economic nexus triggers. Flag 3 months ahead of threshold crossing.
- **Filing compliance rate**: % of filings on time. Target 100%. Any misses investigated and root-caused.
- **Sales tax collected vs remitted**: Reconciliation — should match within rounding.
- **Effective tax rate stability**: ETR drift signals underlying changes in structure, mix, credits, reserves. Explain variance.
- **Deferred tax asset valuation allowance**: Requires judgment. If DTA exceeds expected future taxable income, valuation allowance required.
- **Uncertain tax positions (ASC 740-10)**: Documented, measured, reviewed quarterly.

### Exception Handling

- **New state nexus triggered**: Register immediately. VDA (voluntary disclosure agreement) may limit back-tax exposure. Don't wait for audit letter.
- **Auditor inquiry letter (state)**: Respond with tax counsel. Don't volunteer information beyond request. Audit can expand scope — contain it.
- **R&D credit challenged**: Produce contemporaneous documentation. If documentation weak, negotiate settlement vs defend.
- **Transfer pricing adjustment proposed by tax authority**: Engage transfer pricing specialist. Defend with arm's-length study or negotiate settlement.
- **Employee reclassification threat**: Quickly evaluate: is position defensible? If marginal, reclassify proactively with catch-up to prevent audit.
- **Material tax position change**: Document rationale with tax counsel. Disclose uncertain positions per ASC 740-10.

## Scale — Growing It

### Adding Complexity

- **International expansion**: Foreign sub setup, VAT/GST registrations, transfer pricing documentation (local file + master file), controlled-foreign-corporation (CFC) rules, permanent-establishment risk.
- **M&A tax structuring**: 338(h)(10) elections, stock vs asset acquisition, tax attribute planning, post-close tax integration.
- **Stock comp complexity at scale**: Equity plan scaling, mobile workforce state sourcing, international stock comp, IRS Section 409A valuation.
- **State tax optimization**: Apportionment strategies, credits + incentives, state nexus planning for cost efficiency.
- **Indirect tax systems**: VAT/GST compliance at scale across many countries — Avalara Global, Vertex Global, Sovos.

### Automation Opportunities

- **Continuous nexus monitoring**: Real-time tracking of revenue, transactions, employees, inventory by state with threshold alerting.
- **Tax provision automation**: ASC 740 current + deferred provision calculation from GL + tax schedules; reduces manual prep by 70%+.
- **R&D credit real-time tagging**: Engineering project time automatically tagged for qualification. Annual study becomes review, not recreation.
- **Transfer pricing dashboard**: Intercompany transactions + arm's-length benchmarks + real-time profitability per entity.
- **Audit-ready positions library**: Every tax position documented, supported, accessible. Audits become queries, not fire drills.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Public company — SOX controls on tax processes, quarterly tax provisions for earnings, uncertain tax positions disclosed.
- Global operations across 10+ countries with material foreign earnings.
- Material M&A activity with recurring tax structuring needs.
- Tax team passes 10+ people with specialized functions (federal, state, international, indirect, transfer pricing).
- Hedging / treasury / structured finance raises specialized tax issues (derivatives, foreign currency, financing structures).

## By Industry (at this scale)

1. **SaaS / Subscription**: Sales tax taxability varies by state + product configuration. Nexus from remote workforce. R&D credits highly material.
2. **Manufacturing**: Inventory-tax treatment, manufacturing credits, property tax on equipment. R&D credits for product development.
3. **E-commerce**: Marketplace facilitator laws; Amazon collects but does your platform? Warehouse locations create physical nexus.
4. **Professional Services**: Multi-state income tax apportionment by service location. Employee sourcing rules.
5. **Healthcare**: Tax-exempt status compliance (nonprofit), UBIT, state medical provider taxes, medical device tax history.
6. **Financial Services**: Premium tax, bank taxes, insurance tax, securities transfer tax — specialized indirect taxes.
7. **Nonprofit**: Federal 990 filing, UBIT calculation, state exemption maintenance, donor-advised fund reporting.
8. **Construction**: Contract income recognition for tax (POC vs completed-contract), multi-state construction sourcing, sales tax on materials vs labor.
9. **Real Estate**: Property tax, depreciation optimization, 1031 exchanges, opportunity zones, REIT-qualification (if applicable).
10. **Energy / Utilities**: Severance tax, energy credits, regulatory tax treatment, state-specific energy incentives.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Tax Compliance** + Avalara/Vertex integration + Gusto/Rippling payroll-tax sync + **Deferred Tax Tracker**. Enable continuous nexus monitoring + R&D documentation + 1099 automation.

**Proto**: Specialized Proto agents — compliance-calendar agent, nexus-monitoring agent, sales-tax agent, R&D-documentation agent, transfer-pricing agent, 1099 agent, deferred-tax agent. Shared tax state.

## Related

- [Accounts Payable](../accounts-payable/SKILL.md) — 1099 vendor tracking
- [General Ledger](../general-ledger/SKILL.md) — tax accrual, deferred tax accounts
- [Period Close](../period-close/SKILL.md) — tax accrual is standard close item
- [Payroll](../../../human-resources/02-org-100-to-1k/payroll/SKILL.md) — payroll tax details
- [Small-Org Tax Compliance (<100 people)](../../01-org-under-100/tax-compliance/SKILL.md)
- [Enterprise Tax Compliance (1k+ people)](../../03-org-1k-plus/tax-compliance/SKILL.md)
