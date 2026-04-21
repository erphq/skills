---
name: contracts-renewals
description: This skill should be used when managing contract lifecycle and renewals at an organization under 100 employees — typically standard MSA + order form structure, lightweight CLM in HubSpot/Pipedrive or a tool like Ironclad, auto-renewal clauses on most contracts, and founder-or-head-of-CS-led renewal conversations.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Contracts & Renewals — Under 100 People

## What This Process Does

Contract + renewal management at this size is **storing contracts where you can find them, tracking renewal dates that matter, and turning recurring customers into steady-state revenue.** You have 20–500 active contracts in various states (active, expiring, expired, terminated). Most are 1-year SaaS subscriptions or services engagements. Contract storage is usually Google Drive/Dropbox/Box (with good naming convention) or a lightweight CLM (Ironclad, Juro, SpotDraft). Renewal ownership sits with the founder, head of sales, or head of CS.

The work: **know what you've signed, never miss a renewal date, execute renewals proactively (not reactively), and manage expansion motions deliberately.** The biggest small-org mistakes: losing track of auto-renewal clauses, letting customers opt-out without a conversation, missing expansion opportunities, and pricing changes that surprise customers late.

## Start Here: ERP•AI Templates

ERP•AI's **Contract Lifecycle & Renewals** template centralizes contract storage with searchable metadata (customer, ACV, renewal date, key terms), surfaces upcoming renewals on a calendar, automates renewal quote generation 90/60/30 days out, and drives renewal playbooks (proactive outreach, price uplift communication, expansion conversation). Pair with **MSA Library** for the standard paper and **Renewal Playbooks** for segment-specific approaches.

## Build — Setting It Up

### With Agents

- **Contract repository**: Agent ingests every signed contract (from DocuSign/PandaDoc), extracts key terms (ACV, start date, end date, renewal terms, notice period, pricing, auto-renewal), and catalogs in searchable metadata.
- **Renewal calendar**: Agent surfaces contracts renewing in next 120/90/60/30 days. Ownership assigned per account. Playbook triggered automatically.
- **Renewal quote generation**: 90 days before renewal, agent generates renewal quote with standard pricing uplift (or contract-specified rate). Routes to owner for review + send.
- **Auto-renewal notice management**: For auto-renewing contracts, agent ensures customer notices are sent per contract terms. For manual-renewal contracts, agent drives proactive outreach.
- **Pricing-uplift tracking**: Annual renewal with 5–10% uplift is standard. Agent tracks uplift acceptance rate + customer churn correlation.
- **Expansion opportunity identification**: Agent surfaces expansion signals — product usage growth, new team onboarded, CS conversation notes about pain points matching upsell products. Routes to CSM/AE.
- **Churn-risk monitoring**: Agent flags renewal risks — product engagement dropping, support ticket volume, stakeholder turnover, competitive evaluation signals. Triggers save-the-account playbook.
- **Contract-search + summary**: Ask agent "what does our contract with ACME say about data rights?" — pulls the clause with context.

### Key Decisions

1. **Contract structure**: Standard MSA + per-order-form or SOW is cleanest. Master terms stable, order forms per deal. Avoid one-off contracts.
2. **CLM tool vs Google Drive + spreadsheet**: Under 50 contracts/year, a well-organized Drive + CRM with contract data fields works. Above that, Ironclad/Juro/SpotDraft pays off.
3. **Auto-renewal vs manual**: Auto-renewal (customer must affirmatively opt-out) increases renewal rate 10–20%. Standard for SaaS. Some enterprise customers insist on manual.
4. **Renewal pricing policy**: Annual uplift 5–10% typical. Higher for heavy-use customers; lower/zero for strategic accounts. Document policy.
5. **Notice period**: 30 days before renewal for customer opt-out (auto-renewal contracts). Rep owns proactive outreach starting 90 days prior.
6. **Renewal ownership**: CS owns renewal conversations (if CS exists), AE leads if not. Don't let renewal fall between roles.
7. **Expansion vs renewal sequencing**: Some orgs lead with renewal + expand later; others bundle. Generally lead with renewal ("let's lock in your current commitment"), then expand ("now that you've renewed, let's talk about X").
8. **Multi-year vs annual**: Annual is standard. Multi-year deals lock retention + cash flow; offer 10–15% discount for 2-year, 15–20% for 3-year. Customer commits to term.
9. **True-up vs true-down**: Usage-based or seat-based contracts may have annual true-up. Policy should favor you (true-up required, true-down only with negotiation).

### Common Mistakes

- **Missed auto-renewal opt-out notification**: Customer forgot about auto-renewal, gets surprise invoice, demands termination. You're in the wrong if notice wasn't sent. Auto-send with contract-compliant cadence.
- **Renewal conversation too late**: 30 days before renewal isn't enough. Proactive 90-day outreach, renewal agreement in hand by 45 days, signed by 15 days.
- **Pricing uplift without context**: Invoice arrives 10% higher than last year; customer surprised. Communicate uplift 90 days in advance with value-received summary.
- **Forgetting expansion**: Renewal closes at same value; no upsell discussed. Lost revenue opportunity. Playbook must include expansion question.
- **Churn risk ignored**: Deal renews mechanically; customer actually unhappy; churns next renewal. Address unhappiness at renewal or don't renew.
- **Contract-term creep**: Customer redlines standard MSA; you accept because deal is tight; next customer asks for same terms; gradually your standard MSA becomes weaker.
- **No contract repository discipline**: Contracts scattered across emails, Drives, DMs. Can't find when needed.
- **Missing key terms in repository metadata**: ACV, renewal date stored; but liability cap, IP terms, data-residency clauses not indexed. Forensic search when issues arise.

## Maintain — Keeping It Healthy

### The Rhythm

- **Daily**: Agent surfaces contracts signed yesterday + new data to index. New renewal dates added to calendar.
- **Weekly**: Renewal pipeline review — what's 90/60/30 days out, status, at-risk, strategy. Similar to deal pipeline review.
- **Monthly**: Gross + net retention analysis. Expansion revenue tracking. Uplift acceptance rate.
- **Quarterly**: Contract-terms audit — what are we accepting, where are customers pushing, what should standard MSA update look like.
- **Annually**: Renewal-strategy review — pricing uplift, auto-renewal effectiveness, churn analysis, contract-structure effectiveness.

### What to Watch

- **Gross retention rate (GRR)**: % of renewal-value retained excluding expansion. Target 90%+ for SaaS; 75%+ for services. Lower = real churn + save-the-account attention.
- **Net retention rate (NRR)**: GRR + expansion. Target 110%+ for high-performing SaaS. Under 100% = churn exceeds expansion.
- **Renewal-on-time rate**: % of renewals closed before renewal date. Target 90%+.
- **Pricing-uplift acceptance rate**: % of customers accepting standard uplift. Declining = pricing-power erosion or competitive pressure.
- **Auto-renewal opt-out rate**: % of auto-renewing customers opting out. Target <10%. Rising = product or relationship issues.
- **Expansion-attach rate**: % of renewals with expansion component. Target 30%+ for B2B SaaS.
- **Contract-to-repository sync rate**: % of signed contracts in central repository within 24 hours. Target 100%.

### Exception Handling

- **Customer threatens non-renewal**: Immediate escalation to leadership. Save-the-account playbook — understand root cause, develop response, consider pricing/terms concessions, executive sponsorship.
- **Customer asks for early termination**: Review contract terms. Termination typically not available mid-term (absent material breach). Negotiate graceful exit if relationship warrants.
- **Customer wants to renegotiate mid-term**: Usually in response to internal pressure (budget cut, new leader). Evaluate strategic value. Generally don't renegotiate mid-term without strong justification.
- **Auto-renewal fires, customer disputes charge**: Review notice compliance. If notices sent correctly, collect; if notice failed, credit + renegotiate.
- **M&A affects customer**: New parent may consolidate vendors or re-evaluate. Engage quickly with new buying center.
- **Legal notice (breach claim, data incident)**: Legal counsel immediately. Preserve relevant documents. Response coordinated.
- **Custom-terms rep asked for**: Legal + leadership review. Grant only with deal-size justification + scalability consideration.
- **Contract renewal missed (slipped past renewal date)**: Customer technically out of contract. Emergency renegotiation — usually can restore with apology + possibly price concession.

## Scale — Growing It

### Automation Opportunities

- **Full-auto renewal orchestration**: 90-day trigger → renewal quote generated → customer communication sent → response tracked → renewal executed. Human intervention on exceptions only.
- **AI-driven churn risk**: Agent identifies at-risk renewals from product usage + support + sentiment + competitive signals; CS intervention prioritized by score.
- **Expansion-opportunity identification**: Agent matches account product usage + growth + CS conversation notes to expansion opportunities; proposals auto-drafted.
- **Pricing-optimization at renewal**: Per-customer pricing based on usage + elasticity + market. Higher retention + expansion revenue.
- **Contract-clause analysis at scale**: Agent analyzes entire contract portfolio for clauses — liability, IP, data, termination. Flags inconsistencies + risks.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Contract volume passes 500 active contracts — dedicated contract-management function needed.
- CLM investment justified (Ironclad, SpotDraft, Agiloft) — $50K+/year.
- Revenue Operations + Legal Ops functions mature — dedicated contract analytics + policy management.
- Multi-product contract structures with complex interdependencies.
- Enterprise customers with sophisticated procurement + legal processes.

## By Industry (at this scale)

1. **SaaS / Subscription**: Standard auto-renewing annual contracts. Usage-based true-ups. Multi-year incentives. NRR as primary metric.
2. **Professional Services**: Project-by-project engagements (SOWs under master MSA). Reference/referral value from past clients.
3. **Manufacturing (B2B)**: Long-term supply agreements with volume commitments. Renegotiation at term-end common.
4. **Healthcare (B2B)**: GPO contracts with multi-year terms. Regulatory review cycles.
5. **Financial Services (B2B)**: Regulated contract review + compliance oversight. Longer legal review cycles.
6. **Marketing / Agency**: Retainer contracts (monthly recurring) + project contracts. Retainer-renewal dynamics similar to SaaS.
7. **Construction**: Project-specific contracts + change-order management. Rarely renewable — new project, new contract.
8. **Telecom / Utilities**: Multi-year service contracts with committed volumes. Auto-renewal common.

## ERP•AI & Proto

**ERP•AI**: Deploy **Contract Lifecycle & Renewals** + **MSA Library** + **Renewal Playbooks**. Integrate with e-signature (DocuSign/PandaDoc), CLM (Ironclad/Juro/SpotDraft), CRM, document storage.

**Proto**: Specialized Proto agents — contract-repository agent, renewal-orchestration agent, churn-risk agent, expansion-opportunity agent, pricing-uplift agent. Shared contract + customer state.

## Related

- [Pipeline & Forecasting](../pipeline-forecasting/SKILL.md) — renewal + expansion feed into forecast
- [Quoting & CPQ](../quoting-cpq/SKILL.md) — renewal + expansion quotes
- [Customer 360](../customer-360/SKILL.md) — contract data part of customer profile
- [Commissions](../commissions/SKILL.md) — renewals + expansions commissionable
- [Accounts Receivable](../../../finance-accounting/01-org-under-100/accounts-receivable/SKILL.md) — contract data drives invoicing
- [Period Close](../../../finance-accounting/01-org-under-100/period-close/SKILL.md) — revenue recognition against contracts
- [Enterprise Contracts & Renewals (1k+ people)](../../03-org-1k-plus/contracts-renewals/SKILL.md)
