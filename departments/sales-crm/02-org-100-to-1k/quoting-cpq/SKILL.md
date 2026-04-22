---
name: quoting-cpq
description: This skill should be used when generating quotes and managing CPQ at an organization of 100-1,000 employees — typically Salesforce CPQ, DealHub, or Conga, with formal product configuration rules, multi-level approval workflows, deal-desk function for complex deals, and integrated e-signature.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Quoting & CPQ — 100 to 1,000 People

## What This Process Does

CPQ at this scale is **a configurable rules engine generating thousands of quotes per quarter** with consistent pricing, automated discount governance, and integrated paper. Salesforce CPQ (formerly Steelbrick), DealHub, Conga, or Subskribe handle the configuration + pricing rules; deal-desk function (often inside RevOps) reviews complex deals; e-signature via DocuSign Enterprise or PandaDoc enterprise. Sales engineers + solution consultants increasingly involved on enterprise quotes.

The job: **fast accurate quotes with airtight pricing discipline, defensible discount approvals, and minimal cycle time from "we have a deal" to "we have a signature."** Mistakes at scale are expensive — a 1% pricing leak on $200M ARR is $2M/year of margin gone. Quote cycle time variance kills win rates on competitive deals.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market CPQ** template provides product catalog with configuration rules, dynamic pricing engine, multi-level approval matrix (rep, manager, VP, deal-desk, CFO), e-signature integration, and contract data flow to AR + provisioning. Pair with **Deal Desk Workflows** for complex-deal orchestration and **MSA + Order Form Library** for legal-blessed paper.

## Build — Setting It Up

### With Agents

- **Configuration engine**: Agent applies product-configuration rules (compatibility, dependencies, prerequisites). Prevents reps from quoting impossible combinations.
- **Pricing engine**: Lookup table with tiered pricing, volume discounts, customer-specific rates (negotiated), promotional pricing, currency. Auto-calculated.
- **Discount-approval orchestration**: Multi-level approval based on discount %, product type, customer segment, deal size. Routes to correct approver, escalates on stalls.
- **Deal-desk routing**: Complex deals (custom terms, pricing exceptions, non-standard products) route to deal-desk. Deal desk coordinates legal + finance + product approvals.
- **Quote-document generation**: Branded quote/order form with current-date pricing, terms, T&Cs. PDF + e-signable.
- **Renewal-quote automation**: Subscription renewals auto-generated with standard uplift; AE reviews + sends.
- **Multi-currency + multi-entity**: Customer entity drives currency + tax + legal-entity issuing. Auto-handled.
- **Contract data flow**: Signed quote → CRM opportunity closed-won → CPQ generates internal order → flows to provisioning + AR for invoicing.

### Key Decisions

1. **CPQ tool**: Salesforce CPQ (most common with SFDC), DealHub (modern UX, fast deployment), Conga CPQ (legacy enterprise), Subskribe (subscription-native), Tacton (industrial config). Migration is a 6–12 month project; choose for 5+ year horizon.
2. **Product catalog structure**: SKU-based vs configurable products. Configurable adds power, complexity. Hybrid common.
3. **Pricing rules architecture**:
   - **List price** + **discount tiers** + **customer-specific overrides** + **promotional** + **multi-product bundles**.
   - Pricing rules engine often complex — build rationally, document, test.
4. **Discount approval matrix**: Typical mid-market — rep approval to 10%, manager to 20%, VP Sales to 30%, deal desk + CFO above 30%.
5. **Deal-desk function**: 1–3 person team owns complex-deal review, pricing exceptions, custom terms, executive escalation. Reports to RevOps or VP Sales.
6. **Multi-year + multi-product discount stacking policy**: Cap total discount; document max-allowed combinations.
7. **MSA strategy**: Strict standard MSA + customer-paper-resistance is procurement strategy. Some customers (large enterprise) require their paper; allow with legal review + deal-size minimum.
8. **Auto-renewal language**: Standard auto-renewal clause with proper notice period; customer-specific exceptions tracked.
9. **CPQ-to-billing integration**: Critical — signed quote should flow cleanly to invoicing without re-keying. Stripe Billing, Zuora (now private), Salesforce Revenue Cloud are billing platforms.

### Common Mistakes

- **CPQ rules complexity exceeds team capacity**: Over-engineered configuration; reps confused; quote errors common.
- **Discount-approval-matrix exceptions piling up**: One-off approvals normalize; matrix becomes ineffective. Audit + reset annually.
- **Deal-desk bottleneck**: Deal desk overwhelmed with marginal deals; complex deals don't get attention.
- **CPQ-billing handoff manual**: Salesforce closes-won, billing-team re-keys order. Delays + errors.
- **Multi-currency mistakes**: Wrong currency code, wrong entity, wrong tax. Correctable but slow + customer-facing embarrassment.
- **Custom-terms creep**: Procurement-customer redlines accepted, become precedent for next customer. MSA gradually weakened.
- **Quote-cycle latency**: Time-to-quote drifting from <24 hours to >3 days. Loses competitive deals.
- **Pricing leakage**: Unauthorized discounts at scale. Audit pricing-vs-list at quarter-end.

## Maintain — Keeping It Healthy

### The Rhythm

- **Daily**: Agent monitors quotes-in-process; flags stalled approvals + impending close-date deals.
- **Weekly**: Deal-desk meeting — complex deal review + escalations.
- **Weekly**: CPQ-rules QA — test recent quote configurations.
- **Monthly**: Pricing-discipline audit — discount distribution, approval-matrix compliance, exceptions review.
- **Quarterly**: Pricing strategy review — market data, competitive intelligence, packaging effectiveness.
- **Annually**: Full pricing reset. CPQ rules + product-catalog review.

### What to Watch

- **Time-to-quote**: Opportunity → quote sent. Target <24 hours standard; <72 hours complex.
- **Time-to-signed**: Quote sent → signed. Target <14 days standard; <30 days complex.
- **Discount distribution**: Average + median + 95th percentile by segment. Drift signals issues.
- **Approval-matrix compliance**: % of discounts routed correctly. Target 100%.
- **Quote-to-close rate**: % of quotes that close. Tracks pricing-discipline + qualification.
- **Multi-year mix**: % deals with multi-year commitment. Higher = better LTV.
- **Order-error rate**: % of signed orders requiring correction. Target <1%.
- **CPQ-billing-flow latency**: Closed-won → billable. Target <24 hours.

### Exception Handling

- **Customer requests price below matrix**: Deal-desk + VP/CFO approval workflow. Strategic justification documented.
- **Custom contract terms requested**: Legal-counsel review. Approval based on deal value + strategic importance + risk.
- **Multi-jurisdictional deal complexity**: Multi-entity, multi-currency, multi-tax. Subject-matter expert engagement (international tax + legal).
- **Quote-to-billing-handoff failure**: Manual escalation to RevOps. Root-cause determines fix (CPQ rule, integration error, bad data).
- **Discount-stacking limit hit**: Cap total discount; deal-desk decides whether to grant exception.
- **Last-minute product change at signature**: Re-generate quote; re-approve; ensure paper is current.
- **Auto-renewal disputed by customer**: Verify notification compliance; renegotiate if appropriate.
- **Pricing leak detected (rep selling below allowed)**: Investigation + coaching + potential corrective action.

## Scale — Growing It

### Adding Complexity

- **Subscription + perpetual + services hybrid pricing**: Different revenue recognition; CPQ engine must handle all three.
- **Usage-based billing + entitlements**: Configure entitlements (volume, features, limits); flow to billing for true-up.
- **Multi-product cross-sell automation**: Agent recommends product additions based on customer profile + adoption.
- **Channel + partner pricing**: Distributor + reseller tiers + partner discounts. Complex matrices.
- **International pricing complexity**: FX hedging, regional pricing, regulatory pricing requirements (e.g., Brazil tax).

### Automation Opportunities

- **Self-service quoting for repeat / standard products**: Customers configure + price online; deal-desk reviews + signs.
- **AI-driven pricing recommendations**: Agent suggests optimal pricing per customer based on willingness-to-pay + deal characteristics.
- **Continuous-pricing-leak detection**: Real-time pricing-vs-list monitoring; anomaly flags.
- **Renewal-quote AI optimization**: Per-customer renewal-pricing recommendation based on usage + market + retention risk.
- **Legal-redline-AI**: Compare customer redlines against acceptable variations; pre-draft responses.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Sales team passes 100 reps; CPQ usage scales to multi-thousands quotes/quarter.
- Multi-product portfolio with deep configurability (industrial, hardware-software combos).
- Enterprise deal complexity requires deal-desk team of 5–15+.
- Public company SOX controls on pricing + discount approvals.
- Multi-region operations with regional pricing strategies.

## By Industry (at this scale)

1. **SaaS / Subscription**: Per-seat + per-feature + usage-based hybrid. Multi-year discount ladder. Annual upfront cash.
2. **Professional Services**: SOW per engagement. Time-and-materials vs fixed fee. Change-order management critical.
3. **Manufacturing (B2B)**: Configurable products with engineering-specific options. CPQ for quote-to-order-to-manufacture flow.
4. **E-commerce (B2B wholesale)**: Trade-customer rates + volume discounts. Channel-pricing strategies.
5. **Healthcare (B2B)**: GPO contracts override list pricing. Contract-pricing complexity.
6. **Financial Services (B2B)**: Fee structures (AUM, transaction, subscription). Regulatory constraints on pricing.
7. **Construction**: Bid pricing with materials + labor + subcontractor + markup math.
8. **Marketing / Agency**: Project pricing (fixed) + retainer (recurring). Scope definition critical for change-orders.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market CPQ** + **Deal Desk Workflows** + **MSA + Order Form Library**. Integrate Salesforce CPQ / DealHub / Conga, e-signature (DocuSign), billing (Stripe Billing / Zuora / Salesforce Revenue Cloud).

**Proto**: Specialized agents — configuration agent, pricing agent, discount-approval agent, deal-desk agent, e-signature orchestration, renewal-automation agent.

## Related

- [Pipeline & Forecasting](../pipeline-forecasting/SKILL.md) — quotes generated for pipeline deals
- [Contracts & Renewals](../contracts-renewals/SKILL.md) — quotes become contracts
- [Commissions](../commissions/SKILL.md) — closed quote = commission event
- [Customer 360](../customer-360/SKILL.md) — customer data drives pricing decisions
- [Accounts Receivable](../../../finance-accounting/02-org-100-to-1k/accounts-receivable/SKILL.md)
- [Small-Org Quoting & CPQ (<100 people)](../../01-org-under-100/quoting-cpq/SKILL.md)
- [Enterprise Quoting & CPQ (1k+ people)](../../03-org-1k-plus/quoting-cpq/SKILL.md)
