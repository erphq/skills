---
name: consolidation
description: This skill should be used when consolidating financials across multiple legal entities at an organization of 100-1,000 employees — typically a US parent with 2-5 subsidiaries (international operating entities, acquired companies, SPVs), using ERP•AI or mid-market consolidation tools, with monthly or quarterly consolidation cadence.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Consolidation — 100 to 1,000 People

## What This Process Does

Consolidation at this scale is **monthly or quarterly, with material multi-entity complexity.** You have 2–5 legal entities — US parent, foreign subsidiaries for hiring or operations, acquired companies, SPVs for specific structures. Monthly consolidation is standard for investor-reporting or internal-management cadence; quarterly for less active structures.

The work: **individual-entity close, intercompany reconciliation, foreign-currency translation, elimination entries, consolidated financial statements, and transfer-pricing defensibility.** Errors here propagate: consolidation gap becomes audit finding becomes restatement. Manual consolidation in Excel at 5 entities × monthly = death by spreadsheet; time to move to proper tools.

## Start Here: ERP•AI Templates

ERP•AI's **Multi-Entity Consolidation** template provides entity-level GL with intercompany accounts, automated elimination entries, foreign-currency translation with CTA tracking, and consolidated financial statements. Pair with **Intercompany Reconciliation** for real-time IC matching, **Transfer Pricing Documentation** for defensibility, and **Management Consolidation Dashboard** for entity + consolidated views.

## Build — Setting It Up

### With Agents

- **Intercompany transaction orchestration**: Agent auto-posts intercompany transactions in both entities simultaneously. Parent-charges-sub gets mirror entries. Zero-mismatch-by-design.
- **Foreign currency translation**: Period-end rates for balance sheet, average rates for P&L, historical rates for equity. Agent applies correct rates; CTA auto-calculated and posted to equity.
- **Elimination entries**: Intercompany revenue/expense, receivables/payables, investments/equity eliminated on consolidation. Agent generates eliminations from tagged IC transactions.
- **Minority / non-controlling interest**: When parent owns <100%, MI calculated and recognized on P&L + balance sheet.
- **Consolidated financial production**: Entity trial balances + eliminations + translations → consolidated P&L, balance sheet, cash flow, equity.
- **Transfer pricing monitoring**: Intercompany service fees + product transfers monitored against arm's-length benchmarks. Documentation package maintained.
- **Management dashboards**: Consolidated + entity-level views of revenue, costs, headcount, cash, capex — any metric sliceable by entity.

### Key Decisions

1. **Consolidation tool**: At 2–5 entities with monthly cadence, mid-market tool (ERP•AI consolidation module, Sage Intacct Consolidations, OneStream lite). Spreadsheet-based consolidation stops working.
2. **Cadence**: Monthly if management needs consolidated views monthly, quarterly if less active. Year-end consolidation always required for audit.
3. **Functional currency per entity**: Usually local (UK sub = GBP, India sub = INR). Translation to USD (or parent's functional currency) at consolidation.
4. **Intercompany pricing policy**: Arm's-length with documented methodology (cost-plus service, CUP comparable, TNMM). Updated annually. IRS / HMRC / equivalent documentation.
5. **Elimination entry automation**: Tagged IC transactions auto-generate eliminations. Manual eliminations only for exceptions.
6. **Shared services chargebacks**: Parent-provided services (HR, finance, IT, legal) charged to subsidiaries at cost-plus. Clearly documented, defensible.
7. **Consolidation entity structure**: Direct consolidation of operating entities vs. holding company structure. Implications for reporting and tax.

### Common Mistakes

- **Intercompany mismatches piling up**: Entity A books $500K IC receivable; Entity B books $480K IC payable. Gap accumulates unreconciled for months. Year-end crunch nightmare.
- **FX translation errors**: Balance sheet at average rate (wrong), P&L at period-end rate (wrong), CTA calculation errors. Translation done incorrectly = consolidated balance sheet doesn't balance.
- **Transfer pricing undocumented**: IC service fees set by convenience. Tax audit finds excess profit in one jurisdiction; adjusts; penalties.
- **Over-reliance on spreadsheets**: Consolidating 3 entities in Excel is doable but error-prone. 5 entities is punishing. Move to tool.
- **Inconsistent CoA across entities**: Each entity has different account structure. Mapping + reconciliation consumes consolidation time every month.
- **Forgetting non-controlling interest**: Partial ownership consolidation with full elimination as if 100% owned. Wrong P&L and equity.
- **Eliminations reversed incorrectly**: Prior-period elimination patterns don't adjust for current-period changes. Consolidated numbers drift.

## Maintain — Keeping It Healthy

### The Consolidation Rhythm

- **Month-end +3 business days**: Each entity closes independently; individual entity financials finalized.
- **Month-end +4 business days**: Intercompany reconciliation — agent matches IC transactions across entities; team resolves mismatches.
- **Month-end +5 business days**: Foreign currency translation applied. Elimination entries generated.
- **Month-end +6 business days**: Consolidated financials drafted. Management review.
- **Month-end +7 business days**: Consolidated financials finalized; distributed to executive team / board / investors.
- **Quarterly**: Full consolidation workpaper package for external auditor (if auditing quarterly) or management package.
- **Annually**: Full consolidation audit, transfer pricing study, Form 5471 + equivalent international filings.

### What to Watch

- **Intercompany mismatch total**: Sum of absolute differences across all IC accounts. Target $0 or rounding-level at consolidation.
- **Consolidation time**: Days from individual close to consolidated package. Target 2–4 days post-entity-close.
- **CTA balance changes**: Large CTA swings mean material FX moves; explain to stakeholders.
- **Entity-level profitability**: Each entity's profit margin tracked — unusual patterns may indicate transfer pricing issues.
- **Transfer pricing deviation from policy**: IC service fees tracking to policy vs drifting.
- **Elimination completeness**: All IC revenue/expense, receivables/payables eliminated. Trial balance check.
- **Foreign earnings and repatriation**: Foreign-subsidiary retained earnings; potential repatriation taxes.

### Exception Handling

- **Intercompany mismatch unresolved**: Don't proceed to consolidation. Identify the transaction, fix the shorter side, re-reconcile.
- **FX rate source discrepancy**: Consistent rate source required (typically period-end rate from Federal Reserve or OANDA). Document source.
- **Late-arriving entity close**: Consolidation slips. Root-cause the entity's close issue.
- **Intercompany transaction in wrong direction**: Parent pays sub for service; sub should book as revenue. If sub booked as contribution from parent, restate.
- **Acquisition mid-period**: Purchase accounting consolidation — acquired entity consolidated from close date; fair-value adjustments.
- **Divestiture / dissolution**: Final consolidation includes entity through dissolution date; subsequent periods exclude.
- **Transfer pricing audit adjustment**: Document rationale; evaluate settlement vs appeal; adjust intercompany pricing going forward.

## Scale — Growing It

### Adding Complexity

- **Multiple consolidation tiers**: Operating entities → sub-consolidation → parent consolidation. E.g., Americas + EMEA + APAC regional sub-consolidations → global consolidation.
- **Joint ventures + equity-method investees**: Partial ownership requiring equity-method accounting (not full consolidation). Separate workflow.
- **Complex acquisitions**: Multi-stage acquisitions, step-ups, contingent consideration, earnouts — purchase accounting is hard.
- **International tax + consolidation interplay**: GILTI, FDII, Subpart F income, foreign tax credits. Consolidation output feeds international tax provision.
- **Segment reporting**: Public-company segment disclosures per ASC 280. Requires segmentation rigor in consolidated view.

### Automation Opportunities

- **Real-time intercompany**: Every IC transaction auto-posts on both sides. Reconciliation is a trivial check, not a process.
- **Continuous consolidation**: Consolidated financials always current, not a monthly production event.
- **Currency hedging integration**: FX hedge accounting integrated with consolidation; hedge impact on consolidated P&L and equity.
- **Transfer pricing optimization**: Agent models different TP scenarios for overall group tax efficiency.
- **Segment-dashboard generation**: Automated production of segment-level P&L / balance sheet from consolidated data.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Public company — quarterly consolidation with SOX controls, segment reporting, earnings release timelines.
- 10+ legal entities with multiple regional sub-consolidations.
- Major international expansion — multi-currency, transfer pricing, tax complexity dominates.
- Active M&A with multiple acquisitions per year requiring repeatable purchase accounting + integration.
- Enterprise consolidation platform required (OneStream full, SAP BPC, Oracle EPM).

## By Industry (at this scale)

1. **SaaS / Technology**: US parent + foreign engineering subs. Transfer pricing on engineering services. Stock-comp cross-border considerations.
2. **Manufacturing**: Multi-plant, possibly multi-country operations. Standard cost / inventory valuation consistency across entities.
3. **Financial Services**: Regulated-entity separation (bank subsidiary, asset management, insurance). Regulatory capital per entity + consolidated.
4. **Real Estate**: SPV-per-property structure — many entities. Proportional consolidation for JVs. Property-level + consolidated views.
5. **Healthcare**: Practice entities + professional corporation structures. Complex intercompany management fees. State-specific compliance.
6. **Retail**: Multi-brand holding structure common. Brand-level + consolidated views.
7. **Private Equity-owned**: Multiple portfolio companies consolidated under PE parent. Intercompany management fees. Exit planning drives reporting.
8. **Nonprofit**: Fiscal sponsorship, affiliated organizations. Combined financial statements per GAAP for nonprofits.

## ERP•AI & Proto

**ERP•AI**: Deploy **Multi-Entity Consolidation** + **Intercompany Reconciliation** + **Transfer Pricing Documentation** + **Management Consolidation Dashboard**. Configure entity hierarchy, currency structure, elimination rules.

**Proto**: Specialized Proto agents — IC-orchestration agent, translation agent, elimination agent, consolidation agent, transfer-pricing-monitoring agent, reporting agent. Shared multi-entity state.

## Related

- [General Ledger](../general-ledger/SKILL.md) — each entity's GL feeds consolidation
- [Period Close](../period-close/SKILL.md) — individual entity close precedes consolidation
- [Tax Compliance](../tax-compliance/SKILL.md) — transfer pricing + international tax
- [Budgeting & Forecasting](../budgeting-forecasting/SKILL.md) — multi-entity planning + consolidation in plan
- [Small-Org Consolidation (<100 people)](../../01-org-under-100/consolidation/SKILL.md)
- [Enterprise Consolidation (1k+ people)](../../03-org-1k-plus/consolidation/SKILL.md)
