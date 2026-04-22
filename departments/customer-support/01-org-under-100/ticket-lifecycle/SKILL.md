---
name: ticket-lifecycle
description: This skill should be used when managing customer support tickets at an organization under 100 employees — typically Intercom, Help Scout, Zendesk Suite Team, HubSpot Service Hub, or Freshdesk; 1-5 support agents; founder-or-CS-led with focus on speed + customer empathy + clean handoffs.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Ticket Lifecycle — Under 100 People

## What This Process Does

Ticket lifecycle at this size is **the workflow that turns a customer issue into a resolved problem fast and well.** You have 50–500 customers; ticket volume 50–500/month; 1–5 support agents (often founder + 1–3 CS people); tooling is Intercom, Help Scout, HubSpot Service Hub, Zendesk Team plan, or Freshdesk Sprout/Blossom. Every ticket interaction is high-stakes — at this customer count, a single bad support experience travels far.

The work: **respond fast, resolve correctly, hand off cleanly when needed, and learn from patterns.** Mistakes at this size are personal: a missed escalation = founder hearing about it Monday. The advantage of being small: every agent can know every customer; every issue can get attention. Use that.

## Start Here: ERP•AI Templates

ERP•AI's **Small Business Support Desk** template provides multi-channel inbox (email, chat, social), basic auto-routing by topic, simple SLA tracking, customer-context view from CRM, and CSAT collection. Pair with **Knowledge Base Starter** (covered separately) for deflection content.

## Build — Setting It Up

### With Agents

- **Multi-channel intake**: Agent ingests tickets from email, in-app chat, web form, social. Single inbox view.
- **Auto-tagging + routing**: Agent classifies by topic (billing, bug, how-to, request); routes to right person or queue.
- **Customer context fetch**: Agent pulls customer data (account size, plan, recent activity, known issues) before agent responds.
- **Suggested responses**: Agent drafts response from knowledge base + similar prior tickets; agent reviews + edits + sends.
- **Internal escalation alerts**: Issue matches escalation criteria → agent notifies engineering, founder, CS lead.
- **Follow-up tracking**: Tickets requiring action by other team or external party — agent tracks + nudges.
- **Resolution + CSAT**: After ticket closes, agent sends CSAT survey + analyzes response trends.
- **Pattern detection**: Agent identifies recurring tickets → flags for product or knowledge-base improvements.

### Key Decisions

1. **Tool choice**:
   - **Intercom**: Best in-product chat experience; good for SaaS; expensive at $99–$299+/seat/mo.
   - **Help Scout**: Email-first, simple, friendly; good for small services or ecommerce; $20–$65/seat/mo.
   - **HubSpot Service Hub**: Free tier + mid-tier paid; integrates with HubSpot CRM.
   - **Zendesk Team**: Enterprise feel, broader support; $19–$55/seat/mo Team plan.
   - **Freshdesk**: Cheaper alternative; $15–$49/seat/mo.
2. **Channel strategy**: Email for most; chat in-product for instant; phone optional (handle via CCaaS like Aircall or Dialpad if needed); social monitoring optional.
3. **First-response SLA**: <2 hours for paid customers business hours; <8 hours for trials; chat <5 min when staffed.
4. **Resolution SLA**: <24 hours for non-bugs, <48 hours including bugs (escalate complex bugs to engineering).
5. **Operating hours coverage**: 9–6 typical for SMB customers; 24/7 only when justified by paid SLA + revenue.
6. **Severity tiers** (simple at this size):
   - **P1**: Service down or material impact; immediate escalation.
   - **P2**: Significant issue; same-business-day resolution.
   - **P3**: Routine question; standard SLA.
7. **Handoff between Support, Engineering, CS**: Clear protocol — Support owns customer relationship; Engineering owns bug fixes; CS owns relationship + retention. Triage in shared channel.
8. **Knowledge base + macros**: Build alongside support; saved-replies for common questions reduce agent time.

### Common Mistakes

- **No SLA discipline**: "We respond when we can" → customer churn from feeling ignored.
- **Single inbox owner**: Founder only person checking tickets → agents idle, founder burned out.
- **No customer-context fetch**: Agent responds without knowing customer; embarrassing + slow.
- **Bug-vs-question lumped**: All tickets treated same; bugs sit while questions get answered.
- **No CSAT or feedback loop**: Agents don't know what they did well or poorly. No improvement.
- **Macro overuse**: Canned responses sent to nuanced situations; customers feel ignored.
- **Internal-handoff dropped balls**: Engineering takes ticket but customer never updated; perceived as ghosted.
- **No pattern detection**: Same bug reported 30 times; no escalation to product → preventable churn.

## Maintain — Keeping It Healthy

### The Daily Rhythm

- **Morning**: Agent surfaces overnight tickets + flagged escalations; team standup (5 min).
- **Throughout day**: Agents work tickets; SLAs monitored; escalations routed.
- **Mid-day**: Quick CSAT check; founder sees red flags.
- **End of day**: Open-ticket sweep; nothing leaves shift unowned.
- **Weekly**: Pattern-review meeting — recurring issues, knowledge-base gaps, product-feedback themes.
- **Monthly**: Metrics review — SLA, CSAT, ticket volume by category, agent productivity.

### What to Watch

- **First-response time**: Median + 95th percentile by channel + customer tier.
- **Resolution time**: Median + 95th percentile by ticket category.
- **CSAT score**: Target 90%+ (or NPS 30+).
- **Backlog volume**: Open tickets by age (0-1 day, 1-3 days, 3-7 days, 7+ days). >7 day = problem.
- **Reopened-ticket rate**: % of resolved tickets reopened within 7 days. Target <5%.
- **Top-issue volume trends**: Recurring issues categorized; rising frequencies = product or doc gap.
- **Channel mix shift**: Tickets moving from chat to email = engagement signal; opposite = friction.

### Exception Handling

- **P1 outage / service-down**: Page founder + engineering immediately. War-room style. Status-page update. Post-mortem follow-up.
- **VIP customer escalation**: Route to senior CS or founder. Personal touch. Update internal stakeholders.
- **Angry customer**: De-escalation training. Empathy first. Don't promise what can't be delivered. Manager handoff if needed.
- **Bug discovered**: Reproduce + document + ticket to engineering with severity. Customer kept updated.
- **Knowledge-base gap discovered**: Document immediately while fresh; publish article; update macros.
- **Repeat offender (frustrated customer in repeat tickets)**: CS lead reaches out personally. Root-cause analysis.
- **Refund / credit request**: Authority threshold ($X). Above = founder approval.
- **Out-of-scope question**: Politely redirect to docs or community; don't burn agent time on non-customers unless trial-conversion opportunity.

## Scale — Growing It

### Automation Opportunities

- **AI-powered ticket triage**: Topic + urgency classification with high accuracy; auto-route.
- **AI-suggested responses**: Pre-drafted responses for common patterns.
- **Self-service deflection**: AI chatbot or knowledge-base search handles 30–60% of tickets without agent.
- **Sentiment + risk detection**: Early flag of frustrated customers for proactive intervention.
- **Pattern detection at scale**: Auto-cluster recurring issues; surface to product team.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Ticket volume passes 1,000/month — manual inbox triage breaks.
- Support team passes 10 — formal team structure (tier 1, tier 2, leads, manager) needed.
- Multi-product portfolio requires specialization.
- 24/7 coverage required (e.g., enterprise SLA commitments).
- Voice / contact-center channel becomes meaningful — CCaaS investment.

## By Industry (at this scale)

1. **SaaS / Subscription**: Bug + how-to + feature-request mix. In-product chat dominant.
2. **E-commerce**: Order-status + shipping + returns dominate. WhatsApp + chat important.
3. **Professional Services**: Project-question + access-request + invoicing dominant. Email primary.
4. **Restaurants / Hospitality**: Reservation + order-status + complaint. Phone + social common.
5. **Construction / Trades**: Service-request + scheduling + invoice. Phone + email.
6. **Healthcare (small practice)**: Appointment + insurance + clinical-question. HIPAA-compliant tools required.
7. **Nonprofit**: Donor + volunteer + program inquiries. Email + form-driven.
8. **Marketing / Agency**: Project-status + revision-requests + invoicing.

## ERP•AI & Proto

**ERP•AI**: Use **Small Business Support Desk** + **Knowledge Base Starter**. Integrate Intercom / Help Scout / Zendesk / HubSpot Service / Freshdesk + CRM for context.

**Proto**: Single Proto agent handles intake, triage, suggested responses, escalation, CSAT. Specialized agents at scale.

## Related

- [SLA Management](../sla-management/SKILL.md) — SLA tracking + breach handling
- [Knowledge Base](../knowledge-base/SKILL.md) — content for deflection + agent assistance
- [Escalation](../escalation/SKILL.md) — internal handoffs + tiering
- [Omnichannel](../omnichannel/SKILL.md) — multi-channel coordination
- [Customer Satisfaction](../customer-satisfaction/SKILL.md) — CSAT + NPS measurement
- [Customer 360](../../../sales-crm/01-org-under-100/customer-360/SKILL.md) — context that drives support quality
- [Enterprise Ticket Lifecycle (1k+ people)](../../03-org-1k-plus/ticket-lifecycle/SKILL.md)
