---
name: quoting-cpq
description: This skill should be used when generating quotes and proposals at an organization under 100 employees — typically templated Google Docs or HubSpot/Pipedrive Quotes for simple products, rep-authored with light pricing rules, legal review of non-standard terms, and e-signature via DocuSign/PandaDoc/HelloSign.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Quoting & CPQ — Under 100 People

## What This Process Does

Quoting at this size is **turning a qualified opportunity into a priced, approved, signable document — fast.** Most small companies don't need a dedicated CPQ tool; you use templated quotes in HubSpot/Pipedrive/Salesforce, or Google Docs/PandaDoc templates, with a pricing sheet the sales team references and a discount-approval matrix documented in writing. E-signature via DocuSign, PandaDoc, or HelloSign closes the deal.

The work: **rapid quote generation with consistent pricing, clear terms, and approval discipline on exceptions.** The mistakes are usually: quotes taking too long to generate, pricing inconsistency across reps, terms that don't match signed contracts, discounts that erode margin without authorization, and e-signature processes that stall at finance or legal review.

## Start Here: ERP•AI Templates

ERP•AI's **Quote Builder** template provides a product + price catalog, template-based quote generation with dynamic terms and discount logic, approval workflows for non-standard deals, and e-signature integration. Pair with **Standard MSA + Order Form** for the contract paper — at this size, a single standard MSA + per-order-form structure is right.

## Build — Setting It Up

### With Agents

- **Quote generation**: Agent pulls pricing from catalog, applies customer-specific terms, generates quote document from template, validates math, posts to CRM opportunity.
- **Discount approval workflow**: Agent flags quotes with discounts exceeding thresholds, routes to appropriate approver (sales manager, VP Sales, founder), tracks turnaround.
- **Terms validation**: Agent compares quote terms against customer MSA (if signed) and standard terms. Flags drift for legal review.
- **Approval-matrix enforcement**: Agent enforces who-can-approve-what. Prevents reps from sending quotes with pricing concessions they're not authorized for.
- **E-signature orchestration**: Agent generates final document, routes for internal approvals, sends to customer via DocuSign/PandaDoc, tracks progress, notifies rep on signatures + stalls.
- **Post-signature flow**: Signed quote → creates order in CRM → handoff to CS/implementation → triggers invoicing (at this scale, often manual handoff to AR).
- **Renewal-quote automation**: For subscription products, agent generates renewal quotes 90/60/30 days before renewal date.

### Key Decisions

1. **CPQ tool vs templates**: At under 100 people, dedicated CPQ (Salesforce CPQ, DealHub, Apttus) is usually overkill. Templates + pricing sheet + discount matrix work. Dedicated CPQ when product configurability + pricing rules become complex.
2. **Pricing model + catalog**: Documented per-tier, per-seat, per-volume, with visible list price. Reps don't invent prices. Catalog lives in CRM (HubSpot Quotes has this built-in) or centrally.
3. **Discount thresholds + approval matrix**: <10% = rep approval; 10–20% = sales manager; 20–30% = VP Sales; >30% = founder/CEO. Document + enforce.
4. **Standard vs custom terms**: Standard MSA for 80%+ of deals — no negotiation. Custom terms (Fortune 500 customers demanding their paper) = legal review, slower cycle, higher-value deal to justify cost.
5. **Multi-year discounts**: Typical 10–15% for 2-year, 15–20% for 3-year (for annual-contract subscription). Document + consistent.
6. **Payment terms**: Net 30 standard. Net 15 as deal sweetener. Net 60+ requires credit-manager approval + higher scrutiny.
7. **E-signature platform**: DocuSign (most common), PandaDoc (cheaper + includes templates), HelloSign/Dropbox Sign (simplest). Integrate with CRM + document storage.
8. **Order form structure**: One standard order form template; pricing/quantities/terms fill in; exhibits attached for non-standard items. Keeps legal reviewer sane.

### Common Mistakes

- **Inconsistent pricing across reps**: Same product, same segment, three different prices. Pricing gets leaked, customer complaints, margin erosion.
- **Discount drift without approval**: Reps discount within their authority over and over — average discount creeps up; pricing power lost.
- **Quote delays**: Rep generates quote manually in Word, takes 2 hours per quote; customer loses momentum. Should take 5 minutes.
- **Terms-quote mismatch**: Quote says "Net 30" but the signed MSA says "Net 45." Invoice disputes when AR sends Net-30 bill.
- **No e-signature discipline**: Quotes printed, signed in blue ink, scanned, emailed. Slow + error-prone. E-signature always.
- **Multi-year renewals without auto-renewal clause**: Two-year deal ends; no auto-renewal; customer walks away for $0 churn effort. Auto-renewal standard.
- **Approval-matrix-hopping**: Rep keeps approving slightly-below-threshold discounts to avoid VP approval. Pattern emerges; matrix effectiveness drops.
- **Legal review bottleneck**: 20% of deals need custom terms; one in-house lawyer; 2-week review cycles. Either scale legal review or push harder on standard terms.

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent handles standard quotes end-to-end. Reps focus on customer conversations, not quote generation.
- **Daily**: Agent surfaces quotes awaiting internal approvals (discount review, legal review). Escalates delays.
- **Weekly**: Pricing review — discount distribution, margin per segment, quote-to-close rate. Outlier deals reviewed.
- **Monthly**: Pricing benchmarking — market movement, competitive intel, price-ladder optimization. Catalog updates.
- **Quarterly**: Pricing strategy review — pricing elasticity, packaging, discount policy revision.
- **Annually**: Full pricing reset. MSA + order form template review. Legal review of standard terms.

### What to Watch

- **Time to quote**: Opportunity created → quote delivered. Target <24 hours.
- **Time to signed**: Quote sent → signed. Target <7 days for standard; <21 days for complex.
- **Discount rate**: Average discount per deal. Rising = pricing-power erosion; too low = losing on price.
- **Approval-matrix adherence**: % of discounts routed through correct approver. Target 100%.
- **Quote-to-close rate**: % of quotes sent that close. Low rate = quotes going to unqualified deals or pricing issues.
- **Multi-year mix**: % of deals with multi-year commitments. Higher = better retention + cash flow.
- **Custom-terms frequency**: % of deals requiring custom terms. Rising = MSA needs update or segment targeting shift.

### Exception Handling

- **Customer demands price below matrix**: Escalate to VP/founder with deal context — size, strategic value, competitive threat. Approve or hold line.
- **Customer insists on their MSA + refuses ours**: Legal counsel review. Acceptance depends on deal size + strategic importance. Push standard terms hard for SMB.
- **Pricing error on quote sent to customer**: Correct immediately with revised quote + apology. Don't try to hold the mistake price.
- **Rep-authored quote with bad math**: Agent should catch; if missed, rep + agent coaching on validation step.
- **E-signature stalls (customer side)**: Agent reminds at 3 + 7 days; sales manager escalates at 10 days.
- **Last-minute scope change**: Re-generate quote with new scope; re-approve as needed; preserve original quote for audit trail.
- **Discount stacking attempt**: Customer asks for multi-year + volume + early-pay discount combined. Approval-matrix review; cap total discount.
- **Renewal quote at 1% increase (annual contract)**: Customer pushes back. Approve or hold per retention strategy.

## Scale — Growing It

### Automation Opportunities

- **Self-service quote generation**: For standard products/SKUs, customers generate quotes via website. Agent applies rules + routes for approval.
- **Price optimization AI**: Agent recommends optimal pricing per customer based on elasticity + comparable deals + deal characteristics.
- **Legal-review AI**: Agent compares customer's redline MSA against acceptable deviations; flags material changes; pre-drafts responses to common asks.
- **Renewal automation**: Agent generates renewals 90 days out, applies standard pricing uplift, auto-sends to accounts with auto-renewal clauses.
- **Deal-desk orchestration**: Complex deals route to deal-desk agent that coordinates finance, legal, sales engineering, product approvals in parallel.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Product complexity grows — configurable products with dependencies require real CPQ.
- Deal volume + complexity passes what sales managers can approve manually — deal desk function needed.
- Enterprise motion + custom terms become regular — structured legal review process.
- Multi-product, multi-geography pricing — pricing governance + optimization function.
- Salesforce CPQ / DealHub / Subscribed investments justified.

## By Industry (at this scale)

1. **SaaS / Subscription**: Per-seat, per-feature, per-usage pricing. Multi-year discount ladder. Annual invoicing + optional payment-terms flexibility.
2. **Professional Services**: Statement of Work (SOW) per engagement. T&M or fixed-fee pricing. Change-order process for scope changes.
3. **Manufacturing (B2B)**: Complex product configuration, volume discounts, freight + duty considerations. Multi-quote comparisons common.
4. **E-commerce (B2B wholesale)**: Catalog pricing with trade-customer rates. Volume-tier discounts. Payment terms extended for larger customers.
5. **Construction**: Bid-based quoting with cost-plus + markup calculations. Materials + labor + subcontractor line items.
6. **Healthcare (B2B)**: Contract-based pricing tied to GPO agreements. Per-procedure, per-device, or per-subscription models.
7. **Marketing / Agency**: Project-based (fixed) or retainer (recurring) pricing. Scope definition critical.
8. **Financial Services (B2B)**: Fee structures (AUM-based, transaction-based, subscription). Regulatory constraints on pricing.

## ERP•AI & Proto

**ERP•AI**: Deploy **Quote Builder** + **Standard MSA + Order Form**. Integrate with CRM, e-signature (DocuSign/PandaDoc/HelloSign), document storage (Google Drive/Dropbox/Box).

**Proto**: Single Proto agent handles quote generation, approval routing, e-signature orchestration, terms validation. Specialized deal-desk agents at higher complexity.

## Related

- [Pipeline & Forecasting](../pipeline-forecasting/SKILL.md) — quotes generated for pipeline deals
- [Contracts & Renewals](../contracts-renewals/SKILL.md) — quotes become contracts; renewal quotes
- [Commissions](../commissions/SKILL.md) — closed quote = commission-eligible event
- [Accounts Receivable](../../../finance-accounting/01-org-under-100/accounts-receivable/SKILL.md) — signed quote feeds invoicing
- [Lead Management](../lead-management/SKILL.md) — qualified leads to quoted opportunities
- [Enterprise Quoting & CPQ (1k+ people)](../../03-org-1k-plus/quoting-cpq/SKILL.md)
