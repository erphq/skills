---
name: customer-360
description: This skill should be used when building unified customer view at an organization of 100-1,000 employees — typically a CDP (Segment, Hightouch, Census) + data warehouse (Snowflake, BigQuery) architecture, dedicated CustomerOps/RevOps function, predictive health scoring, and integrated activation across CRM + product + support + finance.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Customer 360 — 100 to 1,000 People

## What This Process Does

Customer 360 at this scale is **a unified customer view powered by a CDP + data-warehouse architecture serving multiple stakeholder workflows**. Customer base of 500–10,000 active customers; 10–30+ data types per customer (CRM, product analytics, support, billing, contracts, NPS, marketing engagement, partner activity); CDP (Segment via Twilio, Hightouch, Census) + warehouse (Snowflake / BigQuery / Databricks) integrated; CRM (Salesforce Enterprise, HubSpot Enterprise) is system of engagement; reverse-ETL syncs warehouse data back to operational systems.

The work: **maintain a clean unified customer record, activate it across all customer-facing functions (Sales, CS, Support, Marketing, Product, Finance), enable predictive health scoring + intervention, and serve executives the data they need on-demand.** Bad customer 360 = data inconsistency across teams + missed revenue opportunities + customer-experience failures. Good customer 360 = aligned organization + predictive retention + data-driven product + GTM optimization.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Customer 360** template provides multi-source data integration via CDP + warehouse, identity resolution + dedupe, account hierarchy + relationship mapping, predictive health scoring, role-based dashboard delivery, and reverse-ETL activation back to operational systems. Pair with **Customer Health Predictive Models** and **Account Intelligence Briefs** for sales + CS workflows.

## Build — Setting It Up

### With Agents

- **Multi-source ingestion + ETL**: Agent integrates CRM + product analytics + support + billing + contracts + marketing + engagement tools via CDP + warehouse. Fivetran / Airbyte / native pipes.
- **Identity resolution + dedup**: Multi-system matching (domain + email + account-id + name fuzzy) with confidence scoring. Manual review queue for low-confidence.
- **Account hierarchy management**: Parent-child relationships (corporate → subsidiaries) maintained.
- **Predictive health scoring**: ML model trained on historical churn + expansion outcomes; produces forward-looking risk/opportunity scores.
- **Role-based 360 view**: Sales sees pipeline + competitive context; CS sees usage + support + sentiment; product sees feature adoption; finance sees billing + AR.
- **Account-intelligence brief**: On-demand executive 1-pager — strategic context, key contacts + roles, contract status, health, recent activity.
- **Reverse-ETL activation**: Warehouse data flows back to CRM, marketing platform, support platform, ad platforms for activation.
- **Anomaly detection**: Sudden behavioral changes (usage drop, support spike, contact-loss) trigger alerts.
- **GDPR + CCPA compliance**: Customer data-deletion requests + consent management orchestrated.
- **Real-time dashboards**: Account health, segment performance, expansion-opportunity inventory.

### Key Decisions

1. **CDP vs warehouse-centric architecture**:
   - **CDP-centric**: Segment, Rudderstack, mParticle. Pre-built integrations + identity resolution + governance. Faster setup; less flexible.
   - **Warehouse-centric**: Snowflake/BigQuery as source-of-truth + Hightouch/Census for reverse-ETL. More flexible; longer setup.
   - **Hybrid**: Both. Most common at this scale.
2. **Source-of-truth per data type**:
   - Contact + opportunity: CRM (Salesforce Enterprise)
   - Product usage: Product analytics (Mixpanel, Amplitude, Heap, Segment-tracked events)
   - Support: Zendesk / Salesforce Service / Intercom / Freshdesk
   - Billing: Stripe / Zuora / Salesforce Revenue Cloud / Maxio
   - Contracts: CLM (Ironclad / SpotDraft)
   - Engagement: HubSpot / Marketo / Salesforce Marketing Cloud
   - NPS / sentiment: Delighted / Wootric / native
3. **Identity-resolution rules**: Domain-match + email + account-id with confidence-based override. Document tiebreakers.
4. **Account hierarchy strategy**: Parent + subsidiary modeling for enterprise customers; rollup metrics for executive view.
5. **Health-score architecture**: Multi-factor weighted; ML-trained where data volume justifies. Start simple, iterate.
6. **Access + permissions**: Role-based access controls across teams; sensitive data (support escalations, billing disputes) requires permissions.
7. **Privacy + compliance**: GDPR/CCPA/HIPAA where applicable. Customer data-mapping + deletion workflows.
8. **Integration cadence**: Real-time for critical signals (e.g., usage drops, churn risk); batch for historical analysis.
9. **Activation channels**: Sales, marketing, ads, support — each receives relevant subset of customer 360.

### Common Mistakes

- **Customer-360-as-vanity-project**: CDP set up, dashboards built, no team uses it for actual decisions.
- **Identity resolution glitches**: Subsidiaries treated as separate accounts; multi-product customers fragmented.
- **Warehouse silos despite "warehouse-centric" claim**: Different teams build different views; inconsistency reigns.
- **Privacy compliance gaps**: GDPR-deletion requests received, customer data scattered, can't fully comply within deadline.
- **Health-score over-engineering**: 25-factor weighted model; nobody trusts it; CSMs ignore.
- **Activation underutilized**: Data flows in to warehouse but rarely flows out to operational systems.
- **Tool sprawl + integration debt**: 8 customer-facing tools, 30+ integrations, manual reconciliation common.
- **Decision-data lag**: Real-time data available but quarterly reviews use last-quarter data.

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent ingests + integrates + activates. Real-time customer-360 always current.
- **Daily**: Health-score alerts processed by CS team. Anomaly investigations.
- **Weekly**: Account-team reviews (CS + AE + SE) using 360 data as foundation.
- **Monthly**: Health-score distribution review. Customer-cohort trend analysis. Risk-pipeline visibility.
- **Quarterly**: Data-quality audit. Integration health check. Health-score model recalibration.
- **Annually**: Tool stack review. Architecture review. Governance refresh.

### What to Watch

- **Data integration completeness**: % of accounts with full data across all sources. Target 98%+.
- **Account-match accuracy**: % of events matched to correct account. Target 99%+.
- **Health-score predictive accuracy**: Correlation between score + actual outcomes. Calibrate quarterly.
- **Alert-response SLA**: % of alerts actioned within target time. Target 95%+.
- **Real-time data freshness**: Lag between event occurring + showing in 360. Target near-real-time for critical.
- **Customer-data-deletion compliance**: GDPR/CCPA request → deletion completed within regulatory deadline (typically 30 days).
- **Decision-velocity improvement**: How quickly do customer-team decisions follow customer-data signals?
- **Activation utilization**: % of customer-data activated downstream (ads, marketing, support routing).

### Exception Handling

- **Material identity-resolution conflict**: Manual review queue. Document decision.
- **Customer GDPR deletion request**: Coordinate deletion across all systems (CDP / warehouse / CRM / support / billing / backups). Document compliance.
- **Major data-source outage**: Communication to teams about staleness. Manual workarounds during outage.
- **Account-merge required**: Customer reorganization → consolidate accounts in CRM + warehouse. Preserve history.
- **New data source addition**: Integration project with QA + governance review.
- **Reverse-ETL sync failure**: Operational systems get stale data. Alert + manual sync if critical.
- **Suspected-bad-data flagged by user**: Investigation. Root-cause + remediation. Improve detection.

## Scale — Growing It

### Adding Complexity

- **Multi-product portfolio**: Each product produces its own data; cross-product customer view requires deeper integration.
- **International + multi-jurisdiction**: Multi-region data residency; GDPR vs CCPA vs LGPD vs other.
- **Predictive AI at scale**: Beyond churn + expansion — predicting next-best-action, optimal pricing, support-need.
- **Real-time personalization activation**: 360 data flows back to product for personalized in-app experience.
- **Customer-data clean rooms**: Privacy-preserving data collaboration with partners.

### Automation Opportunities

- **AI-driven insight generation**: Agent surfaces non-obvious patterns ("these 12 customers have characteristic X; usually predicts Y").
- **Account-brief auto-generation**: Comprehensive briefs for any meeting on-demand; tuned to audience.
- **Predictive-action orchestration**: Health-score change triggers specific intervention playbook automatically.
- **Cross-product analytics**: Customer adoption of one product predicts another; expansion targeting.
- **Customer-journey mapping**: Multi-touch attribution + journey analysis across all systems.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Customer base passes 5,000 + multi-product portfolio.
- International data complexity material.
- Customer-data clean rooms + privacy-preserving collaboration with partners.
- Real-time personalization + dynamic pricing at scale.
- Customer-data team passes 10+ people.

## By Industry (at this scale)

1. **SaaS / Subscription**: Product usage primary. Adoption + retention metrics drive everything.
2. **Professional Services**: Engagement health + project status + satisfaction.
3. **E-commerce (B2B)**: Purchase patterns + LTV + repeat-rate.
4. **Manufacturing (B2B)**: Forecast + demand + service. Account-manager relationship-based.
5. **Healthcare (B2B)**: Buying-committee complex; regulatory data sensitivity.
6. **Financial Services**: Asset balances + fee structures + regulatory.
7. **Construction**: Project history + margin + safety + relationship.
8. **Marketing / Agency**: Project history + campaign performance + relationship intensity.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Customer 360** + **Customer Health Predictive Models** + **Account Intelligence Briefs**. Integrate CDP (Segment / Hightouch / Census), warehouse (Snowflake / BigQuery / Databricks), CRM (Salesforce / HubSpot Enterprise), product analytics, support, billing, contracts.

**Proto**: Specialized agents — ingestion agent, identity-resolution agent, health-scoring agent, alerting agent, brief-generation agent, activation agent.

## Related

- [Lead Management](../lead-management/SKILL.md) — lead-to-customer transitions feed 360
- [Pipeline & Forecasting](../pipeline-forecasting/SKILL.md) — deal data part of 360
- [Contracts & Renewals](../contracts-renewals/SKILL.md) — contract data drives renewal management
- [Commissions](../commissions/SKILL.md) — commission-relevant data flows from 360
- [Campaign Management](../campaign-management/SKILL.md) — marketing engagement feeds 360
- [Ticket Lifecycle](../../../customer-support/02-org-100-to-1k/ticket-lifecycle/SKILL.md) — support data part of 360
- [Accounts Receivable](../../../finance-accounting/02-org-100-to-1k/accounts-receivable/SKILL.md) — billing data part of 360
- [Small-Org Customer 360 (<100 people)](../../01-org-under-100/customer-360/SKILL.md)
- [Enterprise Customer 360 (1k+ people)](../../03-org-1k-plus/customer-360/SKILL.md)
