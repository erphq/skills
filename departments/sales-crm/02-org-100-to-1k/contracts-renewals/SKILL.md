---
name: contracts-renewals
description: This skill should be used when managing contract lifecycle and renewals at an organization of 100-1,000 employees — typically a CLM platform (Ironclad, SpotDraft, Agiloft), dedicated renewal management function (CS-led for SaaS), structured renewal playbooks, and active expansion-attach motion.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Contracts & Renewals — 100 to 1,000 People

## What This Process Does

Contract + renewal management at this scale is **a structured retention + expansion engine**. You have 500–10,000 active contracts, $20M–$500M ARR or annual contract value to defend. Customer Success owns renewals (subscription businesses) or AE owns (services); CLM platform (Ironclad, SpotDraft, Agiloft) manages contract lifecycle; renewal playbooks per customer segment (enterprise vs mid-market vs SMB) drive consistent execution. Annual GRR + NRR are CFO + board metrics.

The job: **defend the revenue base, expand where possible, manage churn risk proactively, and keep contract data clean.** Mistakes are expensive — a 5% churn delta on $100M ARR is $5M/year. Missed expansion opportunities + unmanaged auto-renewals + last-minute customer surprises all compound.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Contract & Renewal Operations** template provides CLM integration, contract-data extraction + repository, renewal-pipeline management with playbooks, churn-risk scoring + intervention workflows, expansion-opportunity identification, and pricing-uplift tracking. Pair with **Customer Success Playbooks** for retention-and-expansion motions and **Legal Operations** for contract-policy management.

## Build — Setting It Up

### With Agents

- **CLM-driven contract repository**: Agent maintains contract repository with structured metadata (ACV, renewal date, key terms, contract type). Searchable + queryable.
- **AI-driven contract clause extraction**: Agent extracts material clauses from new contracts (auto-renewal, termination, liability, IP, data terms). Surfaces deviations from standard.
- **Renewal-pipeline orchestration**: 120/90/60/30/15 day windows trigger playbooks. CS or AE owner per renewal.
- **Pricing-uplift management**: Per-customer uplift calculation (standard %, contract-defined CPI-linked, or negotiated). Communicated 90+ days before renewal.
- **Churn-risk scoring**: Real-time score from product engagement + support volume + sentiment + contract proximity + relationship signals. CS team prioritizes interventions.
- **Expansion-opportunity identification**: Agent surfaces upsell/cross-sell signals — usage approaching tier limits, new team onboarded, support requests for adjacent functionality.
- **Contract-clause analytics at portfolio scale**: Identify contract terms inconsistent across portfolio; flag risks (e.g., 10 customers with non-standard liability cap).
- **Renewal-quote generation**: Auto-generated 90 days out; CS reviews + sends.
- **Auto-renewal management**: Notice cadence, customer-affirmation tracking, payment processing.

### Key Decisions

1. **CLM platform**: Ironclad (most popular for B2B SaaS), SpotDraft (modern + fast-growing), Agiloft (enterprise + customizable), DocuSign CLM (integrated), LinkSquares (analytics-strong). $30–100K+/year. Migration is 3–6 month project.
2. **Renewal ownership**: CS-led (SaaS), AE-led (services), or hybrid. Define clearly. Avoid renewal-falling-between-roles.
3. **Renewal playbook tiers**:
   - **Enterprise**: 120-day pre-renewal kickoff, executive sponsor engagement, multi-touch renewal motion, custom QBR cycle.
   - **Mid-market**: 90-day playbook, CSM-led, structured touchpoints.
   - **SMB**: 60-day playbook, lighter-touch, often auto-renewal.
4. **Pricing-uplift policy**: Standard 5–10% annual uplift typical. Higher for heavy-use customers; capped for strategic; CPI-linked for some industries.
5. **Auto-renewal default**: Auto-renew is industry standard for SaaS — increases retention rate 10–15%. Some enterprise customers insist on opt-in renewal.
6. **Multi-year strategy**: Discount 10–15% for 2-year, 15–20% for 3-year. Trade off cash + retention.
7. **Churn-risk-intervention thresholds**: Score-driven escalation. Define what triggers CSM action vs executive escalation.
8. **Expansion-attach goal**: % of renewals with expansion. Target 30%+ for healthy SaaS.
9. **Save-the-account playbook**: Documented escalation path for at-risk renewals. Discount authority defined.

### Common Mistakes

- **Renewal as transaction**: CSM gets-the-renewal-signed without strategic conversation. Misses expansion + churn-prevention.
- **Pricing-uplift inconsistency**: Some customers pay uplift, others don't, no rationale. Margin leak + customer-equity issues.
- **Auto-renewal disputes**: Notice not sent properly; customer surprised by charge; trust damaged.
- **Save-the-account knee-jerk discounts**: Save customer with 30% discount; sets precedent for portfolio.
- **CLM-as-storage-only**: Repository exists, contract intelligence not extracted. Missed risk identification.
- **Custom-terms creep across portfolio**: Each negotiation adds wrinkle; portfolio becomes unmanageable.
- **Renewal-CSM-AE confusion**: Customer hears from multiple people with different messages.
- **Multi-year deals without proper recognition**: Booking $300K 3-year deal but not properly amortizing — reveals at audit.

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent monitors contracts, churn signals, expansion signals.
- **Daily**: Renewal pipeline review — 90/60/30 day windows; at-risk accounts surfaced.
- **Weekly**: CSM + AE renewal-coordination meeting. Save-the-account discussions.
- **Monthly**: Renewal-pipeline metrics: GRR + NRR + expansion-attach + at-risk inventory.
- **Quarterly**: Full retention strategy review. Cohort analysis. Pricing-uplift effectiveness.
- **Annually**: Contract-portfolio audit. Standard-terms review. Renewal-playbook refresh.

### What to Watch

- **Gross retention rate (GRR)**: Target 90%+ SaaS, 75%+ services. Trending down = real churn issue.
- **Net retention rate (NRR)**: Target 110%+ healthy SaaS; 100%+ acceptable. Below 100% = churn exceeds expansion.
- **Renewal-on-time rate**: Target 90%+. Slipping renewals = process or proactivity issue.
- **Pricing-uplift acceptance rate**: Target 90%+. Declining = pricing-power erosion.
- **Auto-renewal opt-out rate**: Target <10%. Rising = product or relationship issues.
- **Expansion attach rate**: % of renewals with expansion. Target 30%+ for SaaS.
- **Time-to-renewal-quote**: 90 days before renewal date. Late = reactive renewal motion.
- **Churn-risk-resolution time**: At-risk identified → resolved or churned. Response speed matters.
- **Customer concentration**: Top 10 / Top 25 customers as % of ACV. >40% concentration = strategic risk.
- **Contract-data-completeness**: 100% of contracts in CLM with extracted metadata.

### Exception Handling

- **Customer threatens non-renewal**: Save-the-account playbook. Executive engagement. Root-cause investigation. Discount as last resort, not first.
- **Customer requests early termination**: Review contract terms. Termination typically not available mid-term except material breach. Negotiate graceful exit if relationship warrants.
- **M&A affects customer (acquired by competitor)**: New buyer evaluation. Engage new procurement quickly.
- **Auto-renewal dispute**: Verify notice compliance per contract terms. If notice failed, credit + renegotiate.
- **Pricing-uplift hard-rejection**: Rep uplift acceptance push; if customer firm, document + escalate.
- **Expansion ask: customer wants 30% discount on add-on**: Evaluate strategic value. Approve or counter at lower discount.
- **Custom contract terms requested mid-term**: Legal review. Approve only with significant strategic justification.
- **Auditor / customer-procurement contract review**: Provide CLM-stored documents promptly. Audit-ready repository pays off.

## Scale — Growing It

### Adding Complexity

- **Multi-product contract structures**: Customer with multiple products + cross-product entitlements + multi-product renewals.
- **Channel + partner contracts**: Distributor + reseller + referral arrangements with revenue-share + dispute mechanisms.
- **Enterprise procurement complexity**: Vendor onboarding portals (Coupa, Ariba), security questionnaires, compliance certifications.
- **International contract complexity**: Multi-jurisdiction terms, GDPR, data residency, local-language requirements.
- **Public-company customer contract demands**: SOX-related provisions, audit-rights, sub-processor disclosures.

### Automation Opportunities

- **Full-auto renewal orchestration**: 90-day trigger → quote generated → customer outreach → response tracked → execution. Human only on exceptions.
- **AI-driven churn prediction**: Real-time risk scoring with intervention recommendations.
- **Pricing optimization at portfolio level**: Per-customer pricing recommendations balancing retention + revenue + strategic fit.
- **Contract-clause AI analysis**: Real-time risk identification across portfolio (e.g., new GDPR ruling impacts these 50 customers' DPAs).
- **Procurement-portal-automation**: Customer Coupa/Ariba/etc. interactions handled by agent.
- **Legal-redline AI**: Customer redlines auto-analyzed against acceptable variations.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Contract volume passes 5,000 active — dedicated contract-management team.
- Multi-product portfolio with 3+ products requires sophisticated CLM + entitlements.
- International operations + regional contract complexity.
- Public company SOX controls on contract management + revenue recognition.
- Enterprise customer base (Fortune 500 majority) with sophisticated procurement.

## By Industry (at this scale)

1. **SaaS / Subscription**: Auto-renewing annual contracts. NRR/GRR primary metrics. Multi-year incentives. Expansion-led growth.
2. **Professional Services**: SOW per engagement. Reference + case-study value beyond contract value.
3. **Manufacturing (B2B)**: Long-term supply agreements. Renegotiation at term-end common.
4. **Healthcare (B2B)**: GPO contracts with multi-year terms. Regulatory review cycles. Group-purchasing dynamics.
5. **Financial Services (B2B)**: Regulated contract review. Compliance attestations. Long legal cycles.
6. **Marketing / Agency**: Retainer (monthly recurring) + project. Retainer-renewal dynamics + project-pipeline.
7. **Construction**: Project-specific contracts. Rarely renewable but referral + repeat-customer dynamics.
8. **Telecom / Utilities**: Multi-year service contracts with committed volumes.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Contract & Renewal Operations** + **Customer Success Playbooks** + **Legal Operations**. Integrate CLM (Ironclad / SpotDraft / Agiloft), CRM, billing, customer-success platform.

**Proto**: Specialized Proto agents — contract-repository agent, churn-risk-prediction agent, renewal-orchestration agent, expansion-opportunity agent, pricing-uplift agent, save-the-account agent.

## Related

- [Pipeline & Forecasting](../pipeline-forecasting/SKILL.md) — renewal + expansion feed forecast
- [Quoting & CPQ](../quoting-cpq/SKILL.md) — renewal + expansion quotes
- [Customer 360](../customer-360/SKILL.md) — contract data is core 360 data
- [Commissions](../commissions/SKILL.md) — renewals + expansions commissionable
- [Accounts Receivable](../../../finance-accounting/02-org-100-to-1k/accounts-receivable/SKILL.md) — contract data drives invoicing
- [Period Close](../../../finance-accounting/02-org-100-to-1k/period-close/SKILL.md) — revenue recognition against contracts
- [Small-Org Contracts (<100 people)](../../01-org-under-100/contracts-renewals/SKILL.md)
- [Enterprise Contracts (1k+ people)](../../03-org-1k-plus/contracts-renewals/SKILL.md)
