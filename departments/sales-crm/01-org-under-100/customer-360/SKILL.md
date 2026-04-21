---
name: customer-360
description: This skill should be used when building a unified customer view at an organization under 100 employees — typically centered on the CRM (HubSpot, Pipedrive, Salesforce Starter/Pro) with CRM activity + email + meeting notes + product usage + support tickets + billing status joined into one account view.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Customer 360 — Under 100 People

## What This Process Does

Customer 360 at this size is **one place where any employee (AE, CSM, support, exec) can see everything relevant about a customer in 30 seconds.** You have 20–500 customers; 5–20 data types per customer (contacts, deals, emails, meetings, product usage, support tickets, invoices, contracts, NPS); the CRM is the hub (HubSpot, Pipedrive, Salesforce Starter/Pro); product analytics flow from Mixpanel/Amplitude/Heap; support from Zendesk/Intercom/Help Scout; billing from Stripe/QuickBooks.

The work: **join these streams cleanly into account-level views, make them queryable, and empower the right internal audience with the right context.** Good customer 360 = reps always know where they stand, CS sees health signals early, executives can understand account dynamics without 5 tabs. Bad customer 360 = data scattered, conflicting stories across tools, reps duplicating research, account-team conflicts from misaligned context.

## Start Here: ERP•AI Templates

ERP•AI's **Unified Customer View** template builds a single account-level dashboard pulling from CRM + product-analytics + support + billing + contracts. Pair with **Account Health Scoring** for proactive customer-success triggers and **Executive Customer Briefs** for on-demand 1-pagers for leadership.

## Build — Setting It Up

### With Agents

- **Data-source integration**: Agent connects CRM + product analytics + support + billing + contracts + engagement tools; reconciles accounts across systems (matching on domain, SFDC-ID, account-name variants).
- **Activity timeline**: Agent composes a single timeline of all customer interactions — meetings, emails, product-usage signals, support tickets, billing events. Ordered chronologically.
- **Account summary**: Agent generates on-demand account summary — company context, key contacts + roles, deals (open + closed), health score, recent activity, escalations, upcoming events (renewal, milestone).
- **Health scoring**: Agent computes composite account-health score — product engagement, support volume/sentiment, NPS, contract proximity, executive-relationship strength, billing status. Surfaces trends + triggers.
- **Alert-worthy events**: Agent surfaces high-signal events — executive champion leaves, product usage drops, support ticket-surge, missed payment, contract approaching renewal, expansion opportunity signal.
- **Search + ask**: "What's the status of ACME?" — agent returns synthesized answer from all sources. Beats tab-hunting.
- **Brief generation**: For executive or strategic discussions, agent generates customer brief with everything relevant — business context, relationship history, open issues, strategic fit.

### Key Decisions

1. **Source-of-truth per data type**:
   - Contact data: CRM
   - Deal data: CRM
   - Product usage: Product analytics tool
   - Support tickets: Support platform
   - Billing: Accounting system
   - Contracts: CLM or Drive + metadata
   - NPS/CSAT: Dedicated tool (Delighted, Wootric) or via support platform
2. **Account-matching strategy**: Domain-match primary (e.g., @acme.com → ACME account). Manual override for subsidiaries, acquisitions, typos.
3. **CRM discipline**: CRM is the hub. Reps log activities, notes, tasks. Gaps in CRM = gaps in 360.
4. **Product-usage data integration**: Reverse ETL (Hightouch, Census) or native integration (HubSpot + Amplitude) brings usage into account view. Critical for CS + retention.
5. **Health-score model**: Weighted composite. Start simple (3–5 factors). Refine over time.
6. **Access + permissions**: Everyone can see customer 360 (transparency); some data sensitive (support escalations) requires role-based access.
7. **Privacy + compliance**: GDPR/CCPA — customer data handling, deletion rights. Don't store sensitive personal data beyond what's needed.
8. **Communication logging**: Email sync (HubSpot Outlook plugin, Superhuman-HubSpot, etc.), meeting-notes integration (Gong/Chorus + CRM sync). Minimize rep manual-logging burden.

### Common Mistakes

- **Data silos despite tools**: CRM has sales view, support has support view, product has usage view — nobody sees complete picture. Integration is the whole point.
- **Duplicate accounts**: ACME Inc. + ACME Corporation + ACME.com as three different accounts. Customer confused; data fragmented.
- **Overreliance on rep-logged activity**: Reps log partial. CRM data sparse. Use automation for logging (Gong syncs call notes, HubSpot syncs email threads).
- **Ignored health signals**: Alerts fire, nobody acts. Need clear ownership + response SLA per alert type.
- **Privacy compliance gaps**: GDPR-deletion request received, customer data scattered across 5 systems, can't fully comply. Plan for data handling.
- **Over-engineering health score**: 15-factor weighted algorithm that nobody understands. Simple + trusted > complex + ignored.
- **360 for sales only**: Customer 360 used only in sales context. Support, CS, product, finance should all use it. Each gets their relevant view.
- **Manual data reconciliation**: Rep copies data from product-analytics to CRM manually; stale within days. Automate.

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent keeps 360 up-to-date as events happen across systems. Real-time integration.
- **Daily**: Alert queue for health signals — CS reviews, takes action.
- **Weekly**: Account-review meetings (CS, AE, exec sponsor) with 360 data as foundation.
- **Monthly**: Health-score distribution review — account cohort trends, at-risk pipeline.
- **Quarterly**: Data-quality audit — duplicates, missing data, match-confidence. Integration-health check. Health-score model tuning.
- **Annually**: Tools stack review — what's working, what's not, where to invest.

### What to Watch

- **Data-integration completeness**: % of accounts with full data across all sources. Target 95%+.
- **Account-match accuracy**: % of events matched to correct account. Target 98%+.
- **Health-score reliability**: Correlation between health score + retention outcomes. Calibrate.
- **Alert resolution SLA**: % of alerts responded to within SLA. Target 95%+.
- **Customer-view adoption**: % of customer-facing team using 360 weekly. Target 100%.
- **Data-freshness**: Time-lag between event occurring + showing in 360. Target near-real-time for critical signals.
- **Duplicate-account rate**: # of known duplicate accounts. Target ≤1%.

### Exception Handling

- **Duplicate accounts discovered**: Merge via CRM tool; preserve activity history. Document source of duplicate for prevention.
- **Data-quality issue (stale contact, wrong email)**: Agent surfaces; rep corrects; data pipeline pulls fresh data.
- **Multi-entity customer** (parent + subsidiaries): Relationship model in CRM (parent-account + child-accounts). Rolling-up data appropriately.
- **Account transfer between reps**: 360 shows history to new rep; activity context preserved.
- **Customer requests data deletion (GDPR)**: Agent locates all data across systems; coordinates deletion per compliance.
- **Customer data-sensitivity concern**: Role-based access controls enforced; access audited.
- **Integration outage**: Data stale for hours. Monitor + alert. Rep aware when querying.
- **Data-source change**: Support platform migration, product-analytics change. Re-integrate; validate completeness.

## Scale — Growing It

### Adding Complexity

- **Warehouse-centric CDP**: As data complexity grows, move to data warehouse (Snowflake, BigQuery) as source-of-truth; CDP (Segment, Hightouch, Census) for activation.
- **Predictive signals**: Agent predicts churn, expansion, health changes from historical patterns.
- **Multi-entity + hierarchy**: Parent-subsidiary relationships, cross-entity activities, consolidated views.
- **Buying-committee modeling**: Map all decision-makers + influencers per account with relationship strength.
- **Industry-specific views**: Industry vertical-specific metrics + context.

### Automation Opportunities

- **Full-auto logging**: Email, meetings, calls, Slack messages all auto-logged to account timeline.
- **Intelligent summarization**: Agent generates account briefs on-demand, tuned to audience (rep, CSM, exec, engineer).
- **Predictive health scoring**: Machine-learned from historical outcomes; continuously improving.
- **Next-best-action per account**: "Based on current state + history, here's what I'd do next."
- **Cross-system reconciliation**: Continuous; handles edge cases (domain changes, rebrands, acquisitions).

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Customer base passes 500 — CRM-native 360 strained; data-warehouse + reverse ETL needed.
- Multi-product portfolio requires product-specific views.
- Customer Data Platform investment justified (Segment, Rudderstack, Snowplow at $50K+/year).
- Customer Success function mature — health scoring + playbooks drive material retention.
- BI/analytics function mature — customer insights drive product + marketing + GTM.

## By Industry (at this scale)

1. **SaaS / Subscription**: Product usage dominates. Seat activation, feature adoption, support volume, NPS. CS function critical.
2. **Professional Services**: Engagement status, billable hours, satisfaction surveys, project milestones. Client-portal integration.
3. **E-commerce / Retail (B2B)**: Purchase history, order frequency, return rates, margin. Merchandiser relationships.
4. **Manufacturing (B2B)**: Purchase patterns, forecast/demand, service interactions. Account-manager + engineering relationship.
5. **Healthcare (B2B)**: Buying-committee complex (clinical + purchasing + administration). Regulatory context.
6. **Financial Services (B2B)**: Asset balances (if applicable), fee structures, regulatory interactions.
7. **Construction**: Project history, margin-per-project, safety record, relationship-based.
8. **Marketing / Agency**: Project history, campaign performance, renewal patterns, relationship intensity.

## ERP•AI & Proto

**ERP•AI**: Deploy **Unified Customer View** + **Account Health Scoring** + **Executive Customer Briefs**. Integrate CRM, product analytics, support platform, billing, contracts, engagement tools.

**Proto**: Specialized Proto agents — data-integration agent, matching/deduplication agent, health-scoring agent, alerting agent, brief-generation agent. Shared account state.

## Related

- [Lead Management](../lead-management/SKILL.md) — lead-to-customer transition builds 360 history
- [Pipeline & Forecasting](../pipeline-forecasting/SKILL.md) — deal data part of 360
- [Contracts & Renewals](../contracts-renewals/SKILL.md) — contract data part of 360
- [Commissions](../commissions/SKILL.md) — closed-won activity feeds commission
- [Campaign Management](../campaign-management/SKILL.md) — campaign interactions feed 360
- [Ticket Lifecycle](../../../customer-support/01-org-under-100/ticket-lifecycle/SKILL.md) — support data part of 360
- [Accounts Receivable](../../../finance-accounting/01-org-under-100/accounts-receivable/SKILL.md) — billing data part of 360
- [Enterprise Customer 360 (1k+ people)](../../03-org-1k-plus/customer-360/SKILL.md)
