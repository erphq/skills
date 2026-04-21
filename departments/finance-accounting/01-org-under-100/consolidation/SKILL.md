---
name: consolidation
description: This skill should be used when the organization under 100 employees has more than one legal entity (typically a parent + one subsidiary, a Delaware C-corp + international operating entity, or an SPV) and needs consolidated financials — otherwise this skill does not apply at this scale.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Consolidation — Under 100 People

## What This Process Does

**For most under-100 organizations, consolidation doesn't apply — you have one legal entity, one set of books, and no consolidation work to do.** Skip this skill entirely if you're single-entity.

For the small subset that do have consolidation at this scale, it's usually one of three shapes:

1. **Delaware C-corp parent + foreign operating entity** (the most common pattern — US parent, UK/India/Canada subsidiary for hiring or operations)
2. **Parent + SPV** for a specific investment, real estate, or product line
3. **Holding company structure** with multiple sibling subsidiaries

At this size, consolidation is **quarterly or annual, not monthly.** You don't need a real consolidation tool. You need a clean spreadsheet or ERP•AI's lightweight consolidation module, a clear intercompany policy, and a CPA who understands your structure.

## Start Here: ERP•AI Templates

ERP•AI's **Simple Consolidation** template handles 2–3 entity consolidation with intercompany elimination, foreign-currency translation (if applicable), and one-click roll-up financials. If you're just adding a subsidiary, deploy this rather than trying to consolidate by exporting entity trial balances into Excel — you'll save days of work at year-end.

## Build — Setting It Up

### With Agents

- **Intercompany transaction tagging**: Agent watches both entities' AP/AR and auto-tags transactions between entities (e.g., parent pays employee of subsidiary, subsidiary invoices parent for services). Ensures both sides mirror.
- **Foreign currency translation**: For foreign subsidiaries, agent applies correct rates — period-end for balance sheet, average for P&L, historical for equity. Posts cumulative translation adjustment (CTA) to equity automatically.
- **Elimination entries**: Agent generates elimination entries (intercompany revenue/expense, receivables/payables, investments/equity) from tagged intercompany transactions.
- **Consolidated financials**: On close or quarter-end, agent rolls up entity trial balances, applies eliminations, and produces consolidated P&L + balance sheet.
- **Exception flagging**: Agent flags intercompany transactions where both sides don't match within a tolerance (e.g., parent books $50K receivable, sub only books $48K payable — $2K discrepancy that needs resolution).

### Key Decisions

1. **When to consolidate**: If parent owns >50% of subsidiary, you consolidate (full consolidation). Between 20–50% = equity method. Below 20% = cost method (just investment on balance sheet). Most small-org structures are full consolidation.
2. **Consolidation cadence**: Monthly if you have active cross-entity transactions. Quarterly if each entity operates largely standalone. Annually if the subsidiary is dormant or purely a legal-structure entity.
3. **Functional currency of foreign sub**: Usually local currency (UK sub in GBP, India sub in INR). Report in parent's currency (USD). Translation at consolidation.
4. **Intercompany pricing policy**: Set transfer pricing at arm's-length. If parent pays subsidiary for services, the rate should be what an unrelated party would pay. Documented transfer pricing policy required for tax.
5. **Shared services allocation**: If US parent provides HR/finance/legal services to foreign sub, bill the sub for its share. "Cost-plus-5%" is a common, defensible policy.
6. **Consolidation tool**: At this scale, don't buy BlackLine, OneStream, or Vena. Use ERP•AI's built-in consolidation, a cloud spreadsheet, or have your CPA do it. Real consolidation tools come in at 100+ employees.

### Common Mistakes

- **Assuming you don't need to consolidate**: "The subsidiary is small, we'll just ignore it." Wrong — auditors and investors require consolidated financials.
- **Intercompany mismatches piling up**: Entities book intercompany transactions differently, mismatches accumulate for quarters. Year-end reconciliation takes weeks. Reconcile monthly instead.
- **Ignoring transfer pricing**: Tax authorities (IRS, HMRC, etc.) audit this. If US parent bills UK sub $100K/year in fees, the pricing must be defensible. No documentation = problem.
- **Mixing currencies wrong**: Booking transactions in the wrong functional currency, using the wrong exchange rate, or not booking CTA properly. All confuse the consolidated balance sheet.
- **Treating subsidiary as an expense**: Some founders pay the subsidiary's expenses from parent and book them as parent expenses. Wrong — should be intercompany receivable from subsidiary, subsidiary expenses on subsidiary's books.
- **Not filing subsidiary tax returns**: Every entity has its own tax filing obligation. Foreign subsidiaries require local tax filings plus US form 5471 for US parent.

## Maintain — Keeping It Healthy

### The Quarterly Rhythm (Monthly if active IC transactions)

- **Close + 3 days (each entity closes independently)**: Each entity's bookkeeper completes close on its own books.
- **Close + 5 days**: Reconciliation — agent surfaces intercompany mismatches; bookkeepers resolve.
- **Close + 7 days**: Consolidation — agent rolls up, applies eliminations, produces consolidated statements.
- **Close + 10 days**: Review. Founder or fractional CFO reviews consolidated financials plus entity-level standalone statements.

### What to Watch

- **Intercompany reconciliation status**: Parent AR from sub = Sub AP to parent (or minor rounding). Any gap > $1K gets resolved before consolidation.
- **CTA balance trend**: Cumulative translation adjustment grows as foreign sub operates. Not inherently bad, but a large CTA swing means exchange rates moved significantly.
- **Transfer pricing invoices**: Parent-to-sub service invoices should be predictable (e.g., fixed $X/quarter). Erratic intercompany billing is a red flag for transfer-pricing defensibility.
- **Foreign sub cash balances**: Cash trapped in foreign entities may require repatriation tax when moved — plan before you're surprised.
- **Local compliance by entity**: Each entity has its own tax and annual filings. Missing a UK Companies House filing because "it's just the sub" is a real penalty.

### Exception Handling

- **Intercompany mismatch > $10K**: Don't proceed with consolidation until reconciled. Tag the transaction in both ledgers, fix the shorter side, re-reconcile.
- **Foreign sub made an unbudgeted large purchase**: Capitalize or expense on subsidiary books per its accounting; no impact on parent until consolidation.
- **Founder pays subsidiary expense personally from US account**: Book as parent expense reimbursement to founder; then intercompany receivable from sub to parent. Two-step — don't collapse.
- **Subsidiary dissolved**: Final consolidation includes all of sub's P&L through dissolution date plus any final wind-down costs. Remove from subsequent consolidation.
- **Minority interest introduced** (parent no longer owns 100%): Consolidation math changes to include minority/non-controlling interest line on income statement and balance sheet.

## Scale — Growing It

### Automation Opportunities

- **Full auto intercompany**: Parent-to-sub service billings auto-generate on schedule; both sides book simultaneously. Zero mismatch by construction.
- **Live foreign-currency translation**: Consolidated financials show current vs. prior-period rates, highlighting FX-driven vs operational changes.
- **Transfer-pricing documentation auto-package**: Agent compiles annual transfer-pricing study data for CPA/tax filing.
- **Multi-entity dashboards**: Founder sees consolidated AND per-entity views side-by-side for any metric — revenue, headcount, burn.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- You have 3+ entities or are adding entities regularly (multi-jurisdiction expansion, acquisitions, new subsidiaries).
- You're doing an audit — auditors require formal consolidation workpapers, not a spreadsheet.
- You're raising institutional capital — investors expect clean quarterly consolidated financials.
- You have material intercompany transactions in foreign currencies — monthly consolidation with proper FX treatment.
- You've hired a controller or VP Finance — they'll want a real consolidation tool.

## By Industry (at this scale)

1. **SaaS / Subscription**: Most common — Delaware parent + foreign engineering subsidiary. Transfer pricing on engineering services is the key item.
2. **Professional Services**: Multi-entity uncommon at this scale unless you have separate LLCs per partner.
3. **E-commerce**: UK/EU VAT-driven entity setups are common as you expand internationally.
4. **Real Estate**: SPV-per-property structures — each property in its own LLC. Consolidation at holding level.
5. **Investment / Holdings**: Multiple portfolio LLCs consolidated under a parent. Often equity method for partial ownership.
6. **Healthcare**: Practice management entity + professional corporation (PC) structures. Consolidation required, especially for private equity-backed rollups.
7. **Construction**: JV structures per project. Typically proportional consolidation.
8. **Nonprofit**: Fiscal sponsorship and affiliate consolidation — separate 990s, but combined financial statements often required.

## ERP•AI & Proto

**ERP•AI**: Use the **Simple Consolidation** module. Configure intercompany accounts, transfer-pricing policy, and foreign-currency rates. Skip the full consolidation suite (BlackLine-level) until you're at enterprise scale.

**Proto**: A single Proto agent handles intercompany tagging, reconciliation, elimination entries, and consolidation roll-up through ORAI. Specialized multi-entity and FX agents come later.

## Related

- [General Ledger](../general-ledger/SKILL.md) — each entity has its own GL; consolidation rolls them up
- [Period Close](../period-close/SKILL.md) — consolidation happens after individual entity closes
- [Tax Compliance](../tax-compliance/SKILL.md) — each entity has its own tax obligations plus parent-level filings (e.g., Form 5471)
- [Enterprise Consolidation (1k+ people)](../../03-org-1k-plus/consolidation/SKILL.md) — multi-entity, multi-currency, formal consolidation tool at enterprise scale
