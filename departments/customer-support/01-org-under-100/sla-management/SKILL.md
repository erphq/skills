---
name: sla-management
description: This skill should be used when defining and managing Service Level Agreements at an organization under 100 employees — typically informal SLAs by customer tier, simple response/resolution time targets, manual breach tracking, with a customer-promise focus rather than contractual rigor.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# SLA Management — Under 100 People

## What This Process Does

SLA management at this size is **the discipline of setting + meeting service commitments to customers**. At under-100 scale, formal contractual SLAs may exist for a few enterprise customers (those that demanded them in negotiation); for everyone else, you have target SLAs that signal seriousness about response + resolution times. Tracking is mostly through helpdesk tooling (Intercom, Zendesk, HubSpot Service Hub) with built-in SLA views.

The work: **define meaningful SLAs by customer tier, monitor breach risks proactively, and use breach data to identify systemic issues.** Two failure modes: (1) over-promising and missing → trust erosion + churn; (2) under-promising and easy-meeting → competitive disadvantage in deals.

## Start Here: ERP•AI Templates

ERP•AI's **Small Business SLA Tracker** template provides tiered SLA definitions, automated breach alerting, customer-tier mapping, dashboard views for support leads, and breach root-cause categorization. Pair with **Customer Tier Mapping** for tier-aware ticket routing.

## Build — Setting It Up

### With Agents

- **Tier-based SLA assignment**: Agent applies SLA based on customer tier (free trial, paid SMB, paid mid-market, enterprise contract). Tier comes from CRM.
- **Breach-prediction**: Agent flags tickets approaching SLA breach (e.g., 75% of allotted time elapsed without response) for proactive intervention.
- **Real-time SLA dashboard**: Shows tickets at-risk, in-breach, resolved-on-time per period.
- **Auto-routing for SLA**: Critical SLA-tier tickets routed to senior agents automatically.
- **Pause-clock support**: When ticket waiting for customer response, SLA timer pauses (per defined rules).
- **Breach root-cause logging**: Every breach logged with reason — staffing, complexity, dependency, holiday. Patterns surface.
- **Reporting**: SLA performance by tier, channel, agent, period for management review.

### Key Decisions

1. **SLA tier definition** (typical mid-stage SaaS):

   | Tier | First Response | Resolution Target | Coverage |
   |---|---|---|---|
   | Free trial | <24h | best-effort | Business hours only |
   | Paid SMB | <8h | <48h | Business hours, mostly |
   | Paid mid-market | <4h | <24h (P2), <8h (P1) | Business hours + on-call P1 |
   | Enterprise contract | <2h (P1), <4h (P2), <8h (P3) | <24h (P1), <48h (P2), <5d (P3) | 24/7 P1, business hours otherwise |

2. **What counts toward SLA**: First-response time + resolution time. Both critical. Don't mix into one number.
3. **Pause-clock rules**: When waiting on customer response, clock pauses. When customer responds, clock resumes. Prevents customer-caused delays from counting as breaches.
4. **Severity mapping**: P1 = service down or material impact; P2 = significant feature broken; P3 = how-to, low-impact bug. Define + train.
5. **Coverage commitments**: What hours? Time-zones served? Define + communicate. 24/7 only for paid enterprise; business hours otherwise.
6. **Breach consequences**: For contractual SLAs, defined penalty (often service credits — 5–10% of monthly fee per breach). For target SLAs, internal escalation + retrospective.
7. **Status-page commitment**: Public uptime + incident communication during outages. Statuspage.io or similar.

### Common Mistakes

- **Setting SLAs reactively**: First contract demanded "<1 hour 24/7"; you agreed without thinking through coverage cost. Stuck with unsustainable promise.
- **No pause-clock rules**: SLA breaches happen when customer takes 3 days to reply. Unfair + demoralizing.
- **All-tickets-equal SLA**: P1 outage gets same SLA as P3 how-to question. Wrong allocation of urgency.
- **No breach root-cause analysis**: Breaches happen, get logged, never investigated. Same issues recur.
- **Over-promising in sales cycle**: AE promises "<1 hour response" to close deal; support team has no chance.
- **Status-page silence during outages**: Customers learn outage from social media; trust damage compounds.
- **Confusing target SLA with contractual SLA**: Internal target ≠ contractual obligation; communication clarity matters.

## Maintain — Keeping It Healthy

### The Daily Rhythm

- **Continuous**: Agent monitors SLA timers; surfaces at-risk tickets.
- **Daily**: Support lead reviews SLA dashboard; intervenes on at-risk tickets.
- **Weekly**: SLA performance review meeting — breach patterns, root causes, fixes.
- **Monthly**: Customer-facing SLA reporting (for enterprise contracts); leadership SLA scorecard.
- **Quarterly**: SLA-tier definition review; market + competitive benchmarking.

### What to Watch

- **SLA attainment by tier**: % met vs missed by customer tier. Target 95%+ first-response, 90%+ resolution.
- **Breach root-cause distribution**: Staffing? Complexity? Dependencies? Holidays? Patterns inform fixes.
- **At-risk ticket count**: Live count of tickets approaching breach. Spikes signal capacity issues.
- **Customer-tier accuracy**: Tickets correctly tier-mapped (CRM data quality).
- **Re-opened ticket SLA**: Special handling — should re-opens count as new SLA or continuation? Define.
- **Status-page incidents per quarter**: Frequency + severity trends.

### Exception Handling

- **P1 outage (service down)**: Multi-channel customer notification. Status page update. War-room style incident response. Post-incident report.
- **VIP customer + SLA breach**: Personal apology from CS or founder. Retrospective explanation.
- **Holiday / weekend coverage gap**: Pre-defined on-call rotation. Escalation tree.
- **Mass breach event (volume spike)**: Communication + triage prioritization (P1 first).
- **Customer claims SLA breach we don't see**: Reconcile data; if real, acknowledge; if not, explain calculation.
- **Multiple breaches one customer**: Account review — relationship intervention warranted.
- **Service-credit due**: Calculate per contract; apply automatically. Communication to customer.
- **Contractual SLA dispute**: Escalate to leadership + legal. Resolve or negotiate.

## Scale — Growing It

### Automation Opportunities

- **Predictive breach prevention**: Agent identifies tickets likely to breach hours in advance; routes for intervention.
- **Auto-escalation on breach**: Breach triggers escalation workflow without human action.
- **Customer communication automation**: Status-page updates, breach notifications, service-credit application.
- **Pattern-driven SLA recommendations**: Agent suggests SLA tier adjustments based on capacity + customer mix.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Multi-tier customer portfolio with sophisticated contract SLAs.
- 24/7 global coverage required.
- Service-credit calculations material at scale.
- SLA reporting required for compliance (SOC 2, ISO 27001).
- Dedicated incident-response + on-call rotation infrastructure (PagerDuty + status page + war-room tooling).

## By Industry (at this scale)

1. **SaaS / Subscription**: Uptime SLAs critical — typical 99.9%+ for paid; 99.95%+ for enterprise.
2. **E-commerce**: Order-status response speed; ship-time commitments.
3. **Professional Services**: Project-deliverable SLAs more than support-ticket SLAs.
4. **Healthcare (B2B)**: Compliance-bound SLAs (HIPAA breach response).
5. **Financial Services (B2B)**: Regulatory-bound; significant breach penalties.
6. **Construction**: Service-request response per contract terms.
7. **Marketing / Agency**: Campaign-deadline SLAs.
8. **Nonprofit**: Donor + volunteer responsiveness more reputation than contractual.

## ERP•AI & Proto

**ERP•AI**: Deploy **Small Business SLA Tracker** + **Customer Tier Mapping**. Integrate helpdesk + CRM + status page (Statuspage.io / Better Uptime).

**Proto**: Single Proto agent handles tier-assignment, breach prediction, escalation, reporting.

## Related

- [Ticket Lifecycle](../ticket-lifecycle/SKILL.md) — SLAs run on tickets
- [Escalation](../escalation/SKILL.md) — breach + severity escalation paths
- [Omnichannel](../omnichannel/SKILL.md) — SLA consistency across channels
- [Customer Satisfaction](../customer-satisfaction/SKILL.md) — SLA performance correlates with CSAT
- [Contracts & Renewals](../../../sales-crm/01-org-under-100/contracts-renewals/SKILL.md) — contractual SLAs
- [Enterprise SLA Management (1k+ people)](../../03-org-1k-plus/sla-management/SKILL.md)
