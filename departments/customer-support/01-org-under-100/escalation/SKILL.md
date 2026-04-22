---
name: escalation
description: This skill should be used when managing ticket escalation at an organization under 100 employees — typically tier 1 + 2 with founder backup, simple escalation triggers, internal-handoff discipline, and engineering-bug routing.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Escalation — Under 100 People

## What This Process Does

Escalation at this size is **the structured process for moving tickets that exceed the front-line agent's authority or expertise**. You have a small support team (1–5 agents), occasional involvement of CS lead + founder, frequent handoffs to engineering for bugs. Most tickets resolve at first touch; ~10–25% need some form of escalation. Process keeps escalations from falling through cracks while preventing all-tickets-go-to-founder bottleneck.

The work: **clear escalation triggers, fast handoffs without losing context, ownership tracking through escalation chain, and customer-update discipline so customers don't feel ghosted during internal coordination.**

## Start Here: ERP•AI Templates

ERP•AI's **Small Business Escalation Workflow** template provides escalation criteria definition, tier-2 + engineering routing, ownership-handoff with context preservation, customer-communication automation during escalation, and resolution-tracking back to closure. Pair with **Bug Triage Workflow** for engineering-coordinated bug resolution.

## Build — Setting It Up

### With Agents

- **Escalation-trigger detection**: Agent identifies tickets matching escalation criteria (P1 severity, VIP customer, repeat issue, complex bug, refund > threshold).
- **Routing to next tier**: Tier 1 → Tier 2 (senior support); Tier 2 → engineering / product / founder. Clear ownership transfer.
- **Context preservation**: Full ticket history + customer context + prior interactions visible to next-tier owner. No re-asking customer.
- **Customer-communication automation**: When ticket escalates, customer auto-notified ("we're looking into this with our engineering team"); agent commitment for follow-up time.
- **Engineering-bug-ticket-creation**: When ticket is bug, agent creates Linear/Jira/GitHub issue with full repro + customer context; tracks status back.
- **Status-update-cadence**: For long-running escalations (>24h), automated customer-update at defined intervals.
- **Resolution-tracking**: Engineering fix deployed → ticket-loop-closure with customer.
- **Pattern-detection**: Recurring escalations to same area = systemic issue surfaced for product fix.

### Key Decisions

1. **Escalation criteria** (define + train):
   - **P1 severity** (service down, data loss, material impact)
   - **VIP customer** (top X customers, enterprise tier)
   - **Repeat issue** (same customer 3+ tickets in 30 days, or same issue 5+ tickets in 30 days)
   - **Bug requiring code change** (not config / how-to)
   - **Refund / credit > threshold** (e.g., $X requires CS lead, $Y requires founder)
   - **Legal / compliance / security flag** (immediate to founder + counsel)
   - **Negative escalation by customer** ("I want to speak to your manager")

2. **Tier structure**:
   - **Tier 1**: Front-line agents handle ~75% of tickets.
   - **Tier 2**: Senior agents / leads handle complex tickets, training tier 1, escalation backstop.
   - **Engineering**: Bug fixes, technical investigations.
   - **CS Lead**: Account-level escalations, retention conversations.
   - **Founder / CEO**: Highest VIP, strategic accounts, crisis, legal.

3. **Internal communication channel**: Shared Slack channel (#support-escalations) for visibility + collaboration. Avoid DM-only escalations (lost in noise).

4. **SLA on escalation**: Tier 2 acknowledges within 4 hours; engineering acknowledges P1 within 1 hour, P2 within 1 business day.

5. **Customer-update cadence**: For escalated tickets — first internal handoff communicated within X minutes; then update customer every Y hours until resolved.

6. **Authority delegation**: Refund/credit thresholds + service-credit authority defined. Tier 1: $50; Tier 2: $500; CS Lead: $5K; Founder: above.

7. **Engineering-bug routing**: Process for converting customer ticket into engineering issue (Linear/Jira). Bug-tracker integration with helpdesk preferred.

### Common Mistakes

- **Everything escalates to founder**: Founder bottleneck; tier 1 + 2 not empowered. Develop authority delegation.
- **Escalation drops context**: Engineering gets ticket without history; customer re-explains. Agents lose patience.
- **Customer not updated during escalation**: Internal coordination 3 days; customer never hears. Perceived as ghosted.
- **No tier-2 + engineering SLA**: Tickets sit in escalation queue; no urgency.
- **Engineering-as-tier-3 without process**: Engineers reactive, no triage; bugs lost; customers frustrated.
- **Ad-hoc Slack DMs for escalations**: Lost in noise, no audit trail, dependencies unclear.
- **Escalation pattern not analyzed**: Same issue escalated repeatedly; nobody addresses root cause.
- **No closure protocol**: Engineering fixes bug, ticket languishes, customer never told. Re-opens later.

## Maintain — Keeping It Healthy

### The Daily Rhythm

- **Continuous**: Agent identifies + routes escalations; tracks ownership + SLA.
- **Daily**: Tier 2 + engineering escalation queue review; standup if needed.
- **Weekly**: Escalation-pattern review — what types are escalating? Where are bottlenecks?
- **Monthly**: Authority + threshold review — are delegations working? Update if needed.
- **Quarterly**: Escalation process retrospective — are SLAs met, are tier-2 + engineering staffing adequate?

### What to Watch

- **Escalation rate**: % of tickets escalated. Target 10–25% range. Higher = tier 1 under-empowered or under-trained; lower = escalations being avoided.
- **Tier 2 acknowledgment SLA**: % within 4-hour target. <90% = capacity issue.
- **Engineering bug-acknowledgment SLA**: P1 within 1h, P2 within 1 business day.
- **Average escalation resolution time**: By type. Trending up = process or staffing issue.
- **Repeat-escalation rate**: % of escalated tickets re-escalating. Target <10%.
- **Customer-NPS-on-escalated-tickets**: Compare to non-escalated. Gap reveals customer-experience erosion in escalation.
- **Pattern recurrence**: Same root cause showing up repeatedly = product or doc fix needed.

### Exception Handling

- **VIP customer escalation**: Personal handling. CS lead or founder. Update VIP frequently. Document outcome.
- **P1 outage / service-down**: War-room style; founder + engineering + support coordinated. Status page update. Post-mortem.
- **Angry customer demanding refund**: De-escalation first. Authority threshold determines who can approve. Document.
- **Engineering bug fix delayed beyond commitment**: Update customer; revised ETA. Don't go silent.
- **Cross-team handoff dropped**: Re-engage. Identify what failed. Improve process.
- **Customer threatens churn during escalation**: CS lead engagement immediately. Save-the-account playbook.
- **Legal / compliance flag**: Founder + counsel notification immediately. Document.
- **Security incident**: Established incident-response plan kicks in. CISO/founder. Customer-comms via legal review.

## Scale — Growing It

### Automation Opportunities

- **AI-powered escalation triage**: Agent automatically detects criteria + escalates without human classification.
- **Predictive escalation flagging**: Agent identifies tickets likely-to-escalate early; proactive intervention.
- **Engineering-bug auto-routing**: Customer ticket → automatic Linear/Jira issue with all context.
- **Customer-update auto-cadence**: Long-running escalations update customer at defined intervals automatically.
- **Pattern detection at scale**: Auto-cluster escalations; surface root causes for fix.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Support team passes 10; tier structure deepens (T1 / T2 / T3 / lead / manager).
- Multi-product specialization required.
- Dedicated incident-response + on-call rotation (PagerDuty / Opsgenie).
- Service-credit calculations material at scale.
- Engineering escalation requires dedicated DevOps / SRE function.

## By Industry (at this scale)

1. **SaaS / Subscription**: Bug-escalation dominant. Engineering-handoff process critical.
2. **E-commerce**: Order/refund escalations dominant. Refund-authority levels matter.
3. **Professional Services**: Project-issue escalations involve PM + delivery lead.
4. **Manufacturing (B2B)**: Quality-issue escalation involves QA + production.
5. **Healthcare (small practice)**: Clinical-question escalation to clinician; HIPAA-bound.
6. **Financial Services**: Compliance + fraud-flag immediate escalation.
7. **Construction**: Field-service escalations (project delays, safety, warranty).
8. **Marketing / Agency**: Client-issue escalations to account director + creative lead.

## ERP•AI & Proto

**ERP•AI**: Deploy **Small Business Escalation Workflow** + **Bug Triage Workflow**. Integrate helpdesk + Linear/Jira + Slack + status page.

**Proto**: Single Proto agent handles trigger detection, routing, context preservation, customer-update cadence, pattern detection.

## Related

- [Ticket Lifecycle](../ticket-lifecycle/SKILL.md) — escalation is part of ticket flow
- [SLA Management](../sla-management/SKILL.md) — SLA breach often triggers escalation
- [Knowledge Base](../knowledge-base/SKILL.md) — repeated escalations surface KB gaps
- [Customer 360](../../../sales-crm/01-org-under-100/customer-360/SKILL.md) — context that drives VIP identification
- [Enterprise Escalation (1k+ people)](../../03-org-1k-plus/escalation/SKILL.md)
