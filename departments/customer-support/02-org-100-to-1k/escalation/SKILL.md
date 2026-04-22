---
name: escalation
description: This skill should be used when managing escalation processes at an organization of 100-1,000 employees — typically formal multi-tier escalation (T1 → T2 → T3 → engineering → exec), on-call rotation with PagerDuty, war-room protocols, customer-success integration for relationship-saving, and incident-management discipline.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Escalation — 100 to 1,000 People

## What This Process Does

Escalation at this scale is **a structured multi-tier system handling thousands of escalations per quarter without breaking customer relationships or burning out engineering teams.** Tier structure: T1 generalists (60–70% of agents), T2 specialists (20–25%), T3 engineering-adjacent (5–10%); engineering on-call rotation via PagerDuty/Opsgenie; customer-success function for relationship-saving on at-risk accounts; incident-management discipline for major outages with post-mortems.

The work: **right escalation to right tier at right time, context preservation, customer communication discipline, engineering-handoff cleanliness, pattern detection for systemic issues.** Mistakes at scale are expensive: bottleneck at one tier = mass SLA breach; bad engineering escalation = engineering productivity lost; war-room misfire = compounding customer impact.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Escalation Operations** template provides multi-tier routing rules, on-call rotation integration, war-room orchestration for major incidents, customer-success-handoff for at-risk accounts, post-mortem documentation, and pattern-detection analytics. Pair with **Incident Management** + **Customer Success Save Playbooks**.

## Build — Setting It Up

### With Agents

- **Multi-tier routing**: T1 → T2 → T3 → engineering with skills-based + workload-balanced assignment.
- **Context preservation**: Full ticket history + customer 360 + previous-interaction summary delivered to next-tier owner.
- **On-call orchestration**: PagerDuty / Opsgenie integration. Engineering on-call rotation. Escalation-policy auto-engaged based on severity.
- **War-room orchestration**: P1 incident → war-room (Slack channel + video bridge) created automatically with relevant team members.
- **Customer-success integration**: Customer with churn-risk-signal → CS team notified for relationship-save play.
- **Customer-update automation**: During long-running escalations, customer auto-updated at defined intervals.
- **Engineering bug-creation**: Customer ticket → Linear/Jira bug ticket with full context + automated status sync back.
- **Service-credit application**: Major incident → service-credit calculated + applied per contract.
- **Post-mortem orchestration**: Material incidents → post-mortem template + attendees + due-date.
- **Pattern detection**: Recurring escalation themes surfaced for product/engineering attention.

### Key Decisions

1. **Tier structure + responsibilities**:
   - **T1**: Standard issues, how-to, simple bugs (60–70% of agents)
   - **T2**: Complex issues, technical-depth, account-specific (20–25%)
   - **T3**: Engineering-adjacent, product-expert, escalation-backstop (5–10%)
   - **Engineering**: Bug fixes, infrastructure issues, deep technical investigation
   - **CS / Account Manager**: Account-level escalations, relationship-saving
   - **Sales**: Re-engagement on at-risk accounts
   - **Executive**: Strategic accounts, crisis, legal/compliance

2. **Escalation criteria**:
   - **P1 severity**: Service down, material data loss, security incident
   - **VIP customer**: Top X customers, enterprise contract, executive sponsor
   - **Repeat issue**: Same customer N+ tickets in window OR same issue Y+ tickets
   - **Bug requiring code change**: Beyond config, beyond workaround
   - **Refund/credit > threshold**: Authority-based escalation
   - **Legal / compliance / security**: Immediate to founder + counsel
   - **Customer-explicit**: "I want to speak to your manager"

3. **On-call rotation**:
   - Engineering on-call covers P1 incidents 24/7
   - Rotation period: weekly typical
   - Compensation: on-call pay + incident pay
   - PagerDuty / Opsgenie / Splunk On-Call manage routing

4. **Internal communication**:
   - Dedicated Slack channels per tier (#support-escalations-t2, #engineering-incidents)
   - War-room channel created per major incident
   - Cross-functional standup for major incident response

5. **Customer-update cadence**:
   - First update within X minutes of escalation
   - Then every Y hours until resolved
   - Major incidents: status-page real-time updates

6. **Authority delegation**:
   - Refund/credit thresholds documented per role
   - Service-credit application authority per role
   - Escalation-decision authority documented

7. **Engineering-bug routing**:
   - Customer ticket → Linear/Jira issue with full context
   - Bug-tracker integration with helpdesk
   - Status sync back to customer ticket

8. **Post-mortem requirements**:
   - All P1 incidents
   - P2 incidents affecting multiple customers
   - Any customer-experience incident with material reputation impact

### Common Mistakes

- **Bottleneck at tier 2**: T2 understaffed; T1 escalations queue; downstream SLA breach.
- **Engineering-as-tier-3 abuse**: Front-line tickets escalated to engineering; engineers reactive; bugs not fixed; customers frustrated.
- **No customer-update during escalation**: Internal-coordination drama 5 days; customer never hears.
- **War-room fatigue**: Every minor incident gets war-room; engineers never focus on planned work.
- **Post-mortem theater**: Post-mortems happen but no learning + no action items completed.
- **Cross-team escalation drops context**: Engineering gets ticket without context; customer frustrated by re-explaining.
- **On-call burnout**: Frequent pages; no compensation adjustment; on-call rotation breaks.
- **Customer-success disconnect**: At-risk customer pattern surfaced but CS doesn't engage; customer churns.
- **Authority not delegated**: Every escalation goes to manager; bottleneck.
- **Pattern-detection ignored**: Same issue escalated 50 times; nobody addresses root cause.

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent identifies + routes escalations; tracks ownership.
- **Daily**: Tier 2 + engineering escalation queue review; standup if needed.
- **Daily war-room** (during active P1): Status + ETA + comms.
- **Weekly**: Escalation-pattern review; root-cause patterns.
- **Bi-weekly**: Engineering-team support-burden discussion; bug-prioritization sync.
- **Monthly**: Operational scorecard — escalation rate, MTTR, post-mortem closure, on-call burden.
- **Quarterly**: Process retrospective; tier staffing review; tooling assessment.

### What to Watch

- **Escalation rate**: % of tickets escalated per tier. Target 10–25% range.
- **Tier-2 acknowledgment SLA**: % within target. <90% = capacity issue.
- **Engineering bug-acknowledgment SLA**: P1 within 1h, P2 within 1 business day.
- **Average escalation resolution time**: Per type + severity.
- **Repeat-escalation rate**: % of escalated tickets re-escalating. Target <10%.
- **Post-mortem closure %**: P1 + P2 post-mortems completed within target. Target 100%.
- **Action-item-completion rate**: Post-mortem actions completed within agreed timeframe. Target 90%+.
- **MTTR (mean time to resolve)**: Major incident resolution time. Track + improve.
- **On-call burden**: Pages per on-call shift. Sustainable target <3 pages/week.
- **War-room frequency**: P1 incidents per quarter; trend matters.
- **Customer-NPS-during-escalation**: Compared to non-escalated; gap reveals escalation experience issues.
- **Pattern recurrence**: Same root cause showing up; reveal product/engineering issue.

### Exception Handling

- **Major P1 outage**: War-room + status page + mass comms + executive briefing + post-mortem.
- **VIP customer escalation**: Personal handling by CS lead or executive.
- **Multi-customer impact incident**: Bulk customer comms + service-credit application.
- **Engineering bug delayed**: Update customer; revised ETA; transparency about why.
- **Cross-team handoff dropped**: Re-engage; identify what failed; improve process.
- **Customer threatens churn**: CS engagement immediately; save-the-account playbook.
- **Legal / compliance flag**: Founder + legal counsel immediate; documented.
- **Security incident**: Established incident-response plan; CISO engagement; customer comms via legal review.
- **Major customer-data exposure**: Privacy team + legal + executive; regulatory notification per requirements.
- **On-call rotation disruption** (vacation, illness): Backup arrangement; documented coverage.
- **Engineering team escalation-overload**: Triage; deferral discussion; potential staffing decision.

## Scale — Growing It

### Adding Complexity

- **Geographic / 24/7 escalation routing**: Follow-the-sun ops with regional teams + cross-region escalation.
- **Specialist sub-teams** (security incident response, billing escalations, integrations).
- **Strategic-customer dedicated escalation paths** (named CS + named engineering).
- **Vendor-managed escalation** (third-party escalation for non-core services).
- **Premium-support program** with paid enhanced escalation.

### Automation Opportunities

- **AI-powered escalation triage**: Autonomous classification + routing without human triage.
- **Predictive escalation intervention**: Tickets likely to escalate flagged early; proactive treatment.
- **Engineering bug auto-routing**: Customer ticket → automatic bug ticket with full context + repro.
- **Customer-update auto-cadence**: Long-running escalations auto-update customer.
- **Pattern detection at scale**: Auto-cluster + surface recurring issues for product feedback.
- **AI-assisted post-mortem drafting**: Initial post-mortem draft generated; team refines.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Multiple-region 24/7 ops with regional escalation chains.
- Multi-product portfolio with product-specific escalation paths.
- Dedicated incident-response organization.
- SOX-controlled escalation processes.
- Enterprise customer base requiring formal escalation contracts.

## By Industry (at this scale)

1. **SaaS / Subscription**: Bug-escalation dominant; engineering-handoff process critical.
2. **E-commerce**: Order/refund + payment escalations; financial authority levels matter.
3. **Healthcare (B2B)**: HIPAA-bound; clinical-escalation chains; compliance-sensitive.
4. **Financial Services**: Regulated escalation; fraud + security flag handling.
5. **Manufacturing**: Quality-issue + production-impact escalations.
6. **Telecom**: Network-incident escalation; high-volume.
7. **Insurance**: Claim-escalation + dispute escalation; compliance-bound.
8. **Energy / Utilities**: Service-disruption + regulatory escalations.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Escalation Operations** + **Incident Management** + **Customer Success Save Playbooks**. Integrate helpdesk + Linear/Jira + Slack + PagerDuty + status-page + Salesforce/HubSpot.

**Proto**: Specialized agents — escalation-routing, war-room-orchestration, customer-update, engineering-bug-handoff, post-mortem-orchestration, pattern-detection.

## Related

- [Ticket Lifecycle](../ticket-lifecycle/SKILL.md) — escalation is part of ticket flow
- [SLA Management](../sla-management/SKILL.md) — SLA breach often triggers escalation
- [Knowledge Base](../knowledge-base/SKILL.md) — repeat escalations surface KB gaps
- [Customer Satisfaction](../customer-satisfaction/SKILL.md) — escalation quality drives CSAT
- [Customer 360](../../../sales-crm/02-org-100-to-1k/customer-360/SKILL.md) — customer context for VIP identification
- [Small-Org Escalation (<100 people)](../../01-org-under-100/escalation/SKILL.md)
- [Enterprise Escalation (1k+)](../../03-org-1k-plus/escalation/SKILL.md)
