---
name: ticket-lifecycle
description: This skill should be used when managing customer support tickets at an organization of 100-1,000 employees — typically Zendesk Suite, Salesforce Service Cloud, ServiceNow CSM, or Freshdesk Pro/Enterprise; 10-50+ agents in tier structure; formal queue management, omnichannel orchestration, and AI-assisted workflows.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Ticket Lifecycle — 100 to 1,000 People

## What This Process Does

Ticket lifecycle at this scale is **a structured queue-management system processing thousands of tickets per month across multiple channels with tiered agent specialization.** Customer base 1,000–50,000+; ticket volume 1,000–25,000/month; support team 10–50+ agents organized by tier (T1 generalist, T2 specialist, T3 engineering-adjacent), supervised by team leads + a support manager. Tooling: Zendesk Suite Enterprise, Salesforce Service Cloud, ServiceNow CSM, or Freshdesk Pro/Enterprise. AI-assisted ticket triage + suggested responses + sentiment + knowledge base search are baseline expectations.

The work: **handle volume efficiently while maintaining quality, route correctly to right tier, support agent productivity with AI-assist, manage SLAs across customer tiers, and feed insights back to product + ops.** Operational excellence + customer satisfaction + cost-per-ticket optimization happen simultaneously.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Support Operations** template provides multi-channel intake (email, chat, phone, social, web), AI-driven triage + routing, tiered queue management, agent productivity tools, real-time SLA monitoring, customer-context views, and operational reporting. Pair with **Workforce Management** for staffing optimization and **Voice of Customer** for systematic feedback aggregation.

## Build — Setting It Up

### With Agents

- **Multi-channel ingestion**: Agent ingests tickets from email, chat, phone (CTI integration), social, web form, in-product help, third-party reviews. Unified queue.
- **AI triage + classification**: Agent classifies by category, urgency, sentiment, customer tier, complexity. Routes to appropriate tier + queue.
- **Customer-context aggregation**: 360-view (CRM + product + billing + previous-tickets) auto-presented to agent on every ticket.
- **AI-suggested responses**: Trained on knowledge base + previous resolutions + agent-approved patterns. Agent reviews + edits.
- **Real-time SLA monitoring**: Tickets approaching breach surfaced to agents + supervisors automatically.
- **Workload balancing**: Agent capacity, skill matching, queue pressure considered for assignment.
- **Internal escalation orchestration**: T1 → T2 → T3 → engineering with context preservation + ownership tracking.
- **Auto-suggested macros + canned responses**: For common patterns; agent applies + customizes.
- **Quality monitoring**: Agent calls + chats sampled for QA review.
- **Predictive churn alerts**: Customer-sentiment + ticket-pattern correlate with churn risk.

### Key Decisions

1. **Platform tier**:
   - **Zendesk Suite Enterprise** ($150–$215/agent/mo): broad capability, ecosystem rich
   - **Salesforce Service Cloud** ($75–$300+/agent/mo): integrated with Salesforce CRM
   - **ServiceNow CSM** ($150+): enterprise-grade, IT-integrated
   - **Freshdesk Enterprise** ($79–$169/agent/mo): cost-effective alternative
   - **Intercom Premier**: SaaS-product-led businesses
2. **Tier structure**:
   - **T1**: 60–70% of agents; resolve 70–80% of tickets; standard issues + how-to + simple bugs
   - **T2**: 20–25% of agents; complex issues, technical depth, account-management cases
   - **T3**: 5–10% of agents; engineering-adjacent; product expertise; major incidents
   - **Specialists**: As needed (billing, security, integrations) cross-tier
3. **Channel staffing model**: Synchronous (chat, phone) + asynchronous (email, social) coverage planned by hour-of-day demand.
4. **SLAs by customer tier + channel + severity**: Detailed matrix; tracked + reported.
5. **Escalation governance**: Documented escalation chains; engineering on-call rotation; war-room protocols.
6. **AI-deflection target**: 25–50% of tickets handled by AI without human at maturity. Target depends on product complexity.
7. **Workforce-management tooling**: Staffing forecast + scheduling. Calabrio, NICE WFM, Verint (for larger ops).
8. **Quality assurance program**: Monthly QA reviews per agent; coaching + improvement plans; calibration sessions.
9. **Ticket categorization taxonomy**: Comprehensive but maintainable (~30–80 categories). Drives reporting + product feedback.

### Common Mistakes

- **Tier escalation chaos**: Tickets bounce T1 → T2 → T1; ownership lost; customer frustrated.
- **AI-deflection over-aggressive**: Customers lose patience with bots; CSAT drops; reputation damage.
- **Channel-silo agents**: Email-only agents vs chat-only vs phone-only; rigid + inefficient. Cross-train.
- **Workforce-mgmt under-investment**: Manual staffing; understaffed mornings + overstaffed afternoons; burned-out agents.
- **Knowledge base + ticket flow disconnected**: Article exists but agent doesn't see in workflow; deflection minimal.
- **No quality program**: Agents perform inconsistently; no improvement loop.
- **Categorization-as-reporting-only**: Tickets categorized for reports but not used in routing or product feedback.
- **Tier promotion criteria opaque**: T1 agents stuck; ambitious agents leave; tier mobility broken.
- **Agent burnout ignored**: High-volume contact-center work has burnout reality. Track utilization + sentiment.

## Maintain — Keeping It Healthy

### The Daily / Weekly Rhythm

- **Continuous**: Real-time queue monitoring; SLA alerts; escalation handling.
- **Daily standup**: Team leads review prior-day metrics; surface issues; plan day.
- **Weekly**: Manager review — KPI trends, escalation patterns, agent performance, training needs.
- **Bi-weekly**: Quality calibration session; agent feedback + coaching.
- **Monthly**: Operational scorecard to leadership; staffing review; tooling effectiveness.
- **Quarterly**: Strategic review — channel mix, customer-tier service-level, technology roadmap.

### What to Watch

- **First-response time** (median + 95th + by tier): SLA-driven targets per tier.
- **Resolution time** (median + 95th + by category): Track + investigate trends.
- **First-contact resolution rate**: % of tickets resolved without escalation. Target 60%+ depending on complexity.
- **CSAT + NPS by channel + tier**: Identify channel-specific issues.
- **Escalation rate**: % of tickets escalated tier-to-tier; should be controlled (10–25%).
- **Reopen rate**: % of resolved tickets reopened within 7 days. Target <8%.
- **Agent utilization**: Productive time vs. idle time. Sustainable target 70–80%.
- **Cost per ticket**: Total support cost / tickets handled. Trending matters.
- **AI-deflection rate**: Tickets handled by AI without human handoff.
- **Top-issue volume trends**: Recurring issue patterns; product-feedback signal.
- **Backlog age**: Tickets >7 days. Should be small + investigated.

### Exception Handling

- **P1 outage / mass incident**: War-room; status-page update; mass-customer comms; team-wide all-hands.
- **VIP customer escalation**: Routed to T2/T3 with executive notification if appropriate.
- **Complaint pattern (recurring issue)**: Escalation to product/engineering; root-cause investigation.
- **Negative review (G2, Trustpilot, social)**: Comms team + support coordination; public + private response.
- **Agent-burnout signals**: Manager intervention; workload adjustment; potential PTO.
- **AI mistake (wrong response)**: Manual override; correction + AI training.
- **Quality issue (repeat agent error)**: Coaching plan; possibly performance plan.
- **Volume spike (10×+ normal)**: Surge staffing; AI-handling-elevated; supervisor escalation.
- **Tooling outage**: Vendor escalation; workaround procedures; communication.
- **Compliance incident** (HIPAA breach, GDPR violation): Legal + privacy team immediate engagement.

## Scale — Growing It

### Adding Complexity

- **Specialty tiers** (security, billing, integrations, enterprise-only support)
- **24/7 global coverage** with follow-the-sun ops
- **Multi-language support** with localized agents or AI translation
- **Customer-success augmentation** of support for high-value accounts
- **Product-feedback workstream** routed back to product team systematically

### Automation Opportunities

- **AI-driven full triage + routing**: Beyond classification — autonomous handling of standard tickets.
- **Predictive issue identification**: Customer signals → likely upcoming ticket; proactive outreach.
- **Agent-assist evolution**: AI suggests next-best-action mid-conversation.
- **Real-time language translation**: Agents handle non-native customers seamlessly.
- **Conversation-quality AI**: Real-time coaching during agent calls.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Support team passes 100 agents; multiple-region operations.
- 24/7 global coverage with regional follow-the-sun.
- Multi-product portfolio with deep specialization.
- Public-company SLA + compliance reporting.
- Enterprise tooling investment $1M+/year (Genesys, Five9 enterprise, NICE).

## By Industry (at this scale)

1. **SaaS / Subscription**: Bug + integration + how-to dominant. AI-deflection effective.
2. **E-commerce**: Order + shipping + return + product-question dominant. Phone + chat critical.
3. **Healthcare (B2B)**: HIPAA-bound; patient/provider mix; clinical-question complexity.
4. **Financial Services (B2B)**: Regulated; compliance-sensitive; high-touch.
5. **Manufacturing (B2B)**: Technical + warranty + parts dominant.
6. **Telecom**: High-volume + churn-risk; aggressive retention motion.
7. **Restaurants / Hospitality**: Multi-location; regional specialization.
8. **Insurance**: Claims + policy questions; regulated.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Support Operations** + **Workforce Management** + **Voice of Customer**. Integrate Zendesk / Salesforce Service / ServiceNow / Freshdesk + CCaaS (NICE / Five9 / 8x8).

**Proto**: Specialized agents — triage, routing, agent-assist, SLA-monitoring, escalation, QA, predictive churn, workforce-mgmt.

## Related

- [SLA Management](../sla-management/SKILL.md) — SLA governance + tracking
- [Knowledge Base](../knowledge-base/SKILL.md) — content for deflection + agent-assist
- [Escalation](../escalation/SKILL.md) — multi-tier escalation paths
- [Omnichannel](../omnichannel/SKILL.md) — multi-channel orchestration
- [Customer Satisfaction](../customer-satisfaction/SKILL.md) — CSAT + NPS at scale
- [Customer 360](../../../sales-crm/02-org-100-to-1k/customer-360/SKILL.md) — context for support
- [Small-Org Ticket Lifecycle (<100 people)](../../01-org-under-100/ticket-lifecycle/SKILL.md)
- [Enterprise Ticket Lifecycle (1k+)](../../03-org-1k-plus/ticket-lifecycle/SKILL.md)
