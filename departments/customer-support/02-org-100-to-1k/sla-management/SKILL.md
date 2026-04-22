---
name: sla-management
description: This skill should be used when managing Service Level Agreements at an organization of 100-1,000 employees — typically formal contractual SLAs for enterprise customers, multi-tier customer SLAs, service-credit accounting, automated breach management, and SLA performance reporting to executives + customers.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# SLA Management — 100 to 1,000 People

## What This Process Does

SLA management at this scale is **a formal governance function with contractual + financial implications.** Enterprise customers have negotiated SLAs with service-credit penalties (typically 5–25% of monthly fee per breach); mid-market has target SLAs; SMB has aspirational SLAs. Uptime commitments (99.9%, 99.95%, 99.99%) are enforced via monitoring + status-page + incident-response. Support-ticket SLAs tracked in helpdesk with automated breach alerting.

The work: **meet contracted commitments, pay service credits accurately when breached, use SLA data to drive staffing + tooling decisions, and demonstrate compliance to customers + auditors.** At this scale, SLA performance is a retention driver — enterprise customers audit it.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market SLA Operations** template provides tiered SLA definitions, contract-integration for negotiated SLAs, automated breach detection + escalation, service-credit calculation, uptime-monitoring integration, customer-facing SLA reporting, and audit-ready compliance documentation. Pair with **Incident Management** for operational response + **Status Page Operations** for customer communication.

## Build — Setting It Up

### With Agents

- **Tier + contract-based SLA assignment**: Agent applies appropriate SLA based on customer tier + contract-specific negotiated terms.
- **Real-time breach-prediction**: Agent flags tickets + incidents approaching SLA breach; escalates proactively.
- **Automated breach detection**: SLA breaches logged automatically; service-credit calculation triggered.
- **Service-credit accounting**: Breaches → credit calculation → finance team notification → invoice credit applied.
- **Uptime monitoring**: Production monitoring (Datadog, New Relic) feeds uptime calculation; downtime triggers SLA assessment.
- **Incident-response orchestration**: P1 + P2 incidents trigger war-room + customer comms + post-mortem.
- **Customer-facing SLA dashboard**: Enterprise customers see their SLA performance via portal.
- **Audit-ready reporting**: SLA attainment reports for customers, internal leadership, auditors.
- **Trend analysis**: Breach patterns surfaced — systematic causes vs. one-off.

### Key Decisions

1. **SLA matrix** (example mid-market SaaS):

   | Tier | First Response | P1 Resolution | P2 Resolution | P3 Resolution | Coverage | Service Credit |
   |---|---|---|---|---|---|---|
   | Enterprise | 30 min | 4h | 8h | 24h | 24/7 | 5% per SLA breach |
   | Mid-market | 2h | 8h | 24h | 3d | Business + on-call P1 | — (target only) |
   | SMB | 4h | 24h | 3d | 5d | Business hours | — |
   | Free | Best-effort | — | — | — | Business hours | — |

2. **Uptime SLA**: Typical 99.9% (43 min/month downtime budget) for paid tiers; 99.95% for enterprise (22 min/month); 99.99% rare + expensive to maintain.

3. **Severity definitions** (documented contractually):
   - **P1**: Service down or material impact; production-blocking
   - **P2**: Feature broken; workaround exists
   - **P3**: Minor issue; how-to or low-impact bug
   - **P4**: Enhancement request

4. **Service-credit mechanics**:
   - Percentage of monthly fee per breach
   - Cap on total monthly credit (typical 50% of monthly fee)
   - Application mechanism (auto-credit vs. customer-request vs. next-invoice)
   - Calculation transparency (documented formula)

5. **Exclusions** (contractually defined):
   - Scheduled maintenance (announced X days ahead)
   - Force majeure
   - Customer-caused issues
   - Beta or preview features

6. **Coverage**:
   - 24/7 for enterprise P1; regional for lower-severity
   - Follow-the-sun across global offices for 24/7 ops
   - On-call rotation (PagerDuty, Opsgenie) for engineering support

7. **Status-page commitment**:
   - Real-time incident reporting
   - Historical uptime published (typically 90-day)
   - Subscribe-to-updates functionality
   - Post-mortem links for material incidents

8. **Customer reporting cadence**:
   - Monthly SLA reports for enterprise customers
   - Quarterly business reviews including SLA trend
   - Ad-hoc reports for disputes or RFP responses

### Common Mistakes

- **SLA promises in sales cycle without support input**: AE commits to 24/7 <1h response; support team can't deliver.
- **No pause-clock rules**: Customer unresponsive during ticket; clock runs; apparent breach that isn't.
- **Service-credit accounting errors**: Customer entitled to credit; manually missed; discovery → large retroactive credit + trust damage.
- **Status page delayed updates**: Outage 30 min; status page updated 15 min after; customer experienced 30 min + tweeted before status.
- **Uptime calculation disputes**: Customer claims 45 min downtime; company claims 20 min (based on specific monitoring). Monitoring transparency matters.
- **Breach investigation skipped**: SLA missed; logged; nobody investigates root cause. Same breach recurs.
- **Scheduled-maintenance abuse**: Labeling ongoing outages as "scheduled" to avoid SLA counting. Discovered → serious trust damage.
- **Coverage gaps** (weekend, holiday, timezone): Undefined handoffs; SLA breaches predictable.
- **Customer-tier misclassification**: Customer paid for enterprise tier; support treats as SMB; slow response → escalation.

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent monitors SLA timers + uptime; surfaces at-risk.
- **Daily**: Support lead reviews at-risk tickets + overnight incidents.
- **Weekly**: SLA performance review — trends, breach root-causes, corrective actions.
- **Monthly**: Customer-tier SLA reporting + service-credit calculation + finance handoff. Internal scorecard to leadership.
- **Quarterly**: Strategic SLA review — tier definitions, customer-feedback, competitive benchmarking.
- **Annually**: Contract renewal cycle — renegotiate SLAs where appropriate. Platform-capability review.

### What to Watch

- **SLA attainment by tier + severity**: % met vs. missed. Target 95%+ first-response, 90%+ resolution for contracted tiers.
- **Uptime actual vs. SLA**: Current-month, trailing 3-month, trailing 12-month uptime vs. SLA target.
- **Service-credit $ volume + count**: Trending; high = systemic issue.
- **Breach root-cause distribution**: Staffing? Tooling? Incidents? Customer-specific? Fix biggest cause.
- **Customer-dispute rate**: Customers contesting breach determinations. Investigate + improve transparency.
- **P1 incident frequency + MTTR** (mean time to resolve).
- **Customer-satisfaction during incidents**: CSAT during outage-month vs. normal-month.
- **Status-page timely-updates %**: Target 95%+ of incidents updated within 15 min of detection.
- **Audit-finding resolution**: Any SLA or uptime audit findings addressed.

### Exception Handling

- **P1 outage**: War-room; status-page update; mass-customer comms; post-mortem within 5 business days; service credits per contract.
- **Service-credit dispute**: Reconcile monitoring data; explain calculation; honor customer-correct interpretations; escalate to legal if impasse.
- **SLA renegotiation request** (customer): Commercial + support collaboration; often tied to contract renewal; pricing-tradeoff discussion.
- **Multi-customer breach from shared-cause outage**: Bulk service-credit application; proactive customer communication.
- **Compliance audit (SOC 2, ISO 27001) SLA review**: Controls evidence; breach log; remediation documentation.
- **Customer terminates citing SLA breach**: Legal review; contract-specific termination terms; relationship repair effort.
- **Agent staffing shortfall causing breach**: Immediate triage + temporary coverage; root-cause (hiring, attrition, training).
- **Tooling (monitoring, helpdesk) failure obscuring SLA data**: Vendor escalation; backup procedure; potentially affects SLA calculation.

## Scale — Growing It

### Adding Complexity

- **Multi-product SLA matrix**: Each product with distinct SLA structure
- **Custom enterprise contracts**: Negotiated per-customer SLAs requiring tracking
- **Global 24/7 with regional SLAs**: Time-zone aware SLA application
- **Service-credit programs at scale**: Automated credit; audit-grade documentation
- **Premium support tiers**: Paid premium support with enhanced SLAs

### Automation Opportunities

- **Predictive breach intervention**: Agent identifies breach risk hours in advance; routing or escalation.
- **Auto-service-credit application**: Breaches → credits posted without manual intervention.
- **Real-time customer SLA portal**: Customers see their SLA live.
- **AI incident-pattern detection**: Recurring incident patterns auto-identified + flagged.
- **Dynamic staffing**: WFM adjusts real-time based on SLA pressure.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Multi-region operations with regional SLAs + local teams.
- Public company with SOX-like SLA reporting requirements.
- Enterprise customer base with heavy customization + negotiated SLAs.
- Premium support tiers as paid SKU.
- Dedicated incident-response organization.

## By Industry (at this scale)

1. **SaaS / Subscription**: 99.9%+ uptime standard; customer-facing SLA portals common.
2. **E-commerce**: Order-status + checkout-uptime SLAs.
3. **Financial Services (B2B)**: Regulatory + compliance-bound SLAs (FINRA, SEC).
4. **Healthcare (B2B)**: HIPAA-bound; clinical-uptime sensitive.
5. **Manufacturing (B2B)**: Integration + EDI uptime SLAs.
6. **Telecom**: Industry-standard 99.999% (5-min/year) uptime for core; complex.
7. **Energy / Utilities**: Regulated service commitments.
8. **Insurance**: Claim-response + policy-access SLAs.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market SLA Operations** + **Incident Management** + **Status Page Operations**. Integrate helpdesk + CRM + monitoring (Datadog, New Relic) + status page (Statuspage.io, Better Uptime) + PagerDuty.

**Proto**: Specialized agents — SLA-monitoring, breach-prediction, service-credit calculation, incident-orchestration, customer-reporting, audit-documentation.

## Related

- [Ticket Lifecycle](../ticket-lifecycle/SKILL.md) — tickets are SLA-managed
- [Escalation](../escalation/SKILL.md) — SLA breach triggers escalation
- [Omnichannel](../omnichannel/SKILL.md) — SLA consistency across channels
- [Customer Satisfaction](../customer-satisfaction/SKILL.md) — SLA performance correlates with CSAT
- [Contracts & Renewals](../../../sales-crm/02-org-100-to-1k/contracts-renewals/SKILL.md) — contractual SLAs
- [Small-Org SLA (<100 people)](../../01-org-under-100/sla-management/SKILL.md)
- [Enterprise SLA (1k+)](../../03-org-1k-plus/sla-management/SKILL.md)
