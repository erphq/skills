---
name: omnichannel
description: This skill should be used when orchestrating support across multiple channels at an organization of 100-1,000 employees — typically email + chat + voice (CCaaS) + social + WhatsApp + community + AI chatbot, with unified routing, conversation-threading across channels, and channel-specific staffing models.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Omnichannel — 100 to 1,000 People

## What This Process Does

Omnichannel at this scale is **the orchestration of customer support across 5–10+ channels with consistent quality, unified context, and channel-specific staffing efficiency.** Channels: email, in-product chat, voice (via CCaaS like NICE / Five9 / 8x8 / Genesys), social (Twitter/X, LinkedIn, Facebook), WhatsApp + SMS, community forum, AI chatbot. Volume: 1,000–25,000 interactions/month. Unified inbox via helpdesk + CCaaS integration; agents work multiple channels simultaneously.

The work: **meet customers on their preferred channel without spreading team thin, route correctly per channel + customer + topic, preserve context across channel-switching, optimize staffing per channel, and continuously refine the channel mix.** Mistakes at scale: channel silos break customer experience; understaffed channels create SLA breach; over-staffed channels waste resources.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Omnichannel Operations** template provides multi-channel ingestion, unified conversation-threading, channel-specific routing + SLA, AI-assisted responses tuned per channel, voice + CCaaS integration, social listening + response, community-forum integration, and channel-mix analytics. Pair with **Workforce Management** for staffing optimization + **AI Conversational Layer** for chatbot.

## Build — Setting It Up

### With Agents

- **Multi-channel ingestion**: Email, chat, voice (CCaaS CTI), social (X/LinkedIn/Facebook listening), WhatsApp/SMS, web form, in-product, community forum.
- **Unified conversation threading**: Customer who emails + chats + calls = single conversation thread; agents see history.
- **Channel-specific SLA + routing**: Voice immediate, chat <2 min, email <8h, social <2h (visibility-driven), community-forum 24h.
- **AI-assisted responses tuned per channel**: Chat = quick + casual; email = detailed + formal; social = brief + brand-aware; voice = conversational + empathy.
- **Channel-routing intelligence**: Topic + customer-tier + channel determine routing; specialty channels route to specialty teams.
- **Conversation-channel switching**: "Let me email you the details" — context follows; "Let me call you back" — call scheduled.
- **Multi-channel agent workload**: Agents handle multiple channels concurrently with workload-balancing.
- **Voice integration (CCaaS)**: NICE inContact / Five9 / 8x8 / Genesys integrated; CTI shows customer context on call; call recording + transcription.
- **Social listening + response**: Twitter/X mentions + LinkedIn comments + Facebook posts monitored; brand + product mentions surfaced.
- **Community-forum integration**: Customers help customers; expert customers earn recognition; staff monitors + escalates.
- **AI chatbot first-tier**: 30–60% of routine queries handled by AI; escalation to human when needed.

### Key Decisions

1. **Channel mix** (typical mid-market):
   - **Email**: Default async; everyone has it
   - **In-product chat**: SaaS-product key; AI-augmented
   - **Voice (CCaaS)**: Required for higher-tier customers + specific industries
   - **Social monitoring + response**: Brand-protection + customer-amplification
   - **WhatsApp / SMS**: International + mobile-first markets
   - **Community forum**: Discourse, Vanilla Forums, custom — peer-to-peer + long-tail
   - **AI chatbot**: First-touch deflection layer
   - **Video / screen-share**: Specific complex issues; not a primary channel

2. **CCaaS platform** (when voice material):
   - **NICE inContact**: Enterprise-grade
   - **Five9**: Cloud-native, mid-market sweet spot
   - **8x8**: UCaaS + CCaaS
   - **Genesys Cloud**: Enterprise + private equity-owned
   - **Talkdesk**: Modern, cloud-native
   - **AWS Connect**: For AWS-heavy infrastructure

3. **Channel-coverage hours**:
   - **Phone**: Business hours typically; 24/7 for higher-tier
   - **Chat**: Business hours with AI fallback off-hours
   - **Email**: Async; 24/7 queue; SLA-based response
   - **Social**: Business hours + weekend monitoring
   - **WhatsApp**: Business hours + AI off-hours

4. **AI vs. human first-touch**: AI handles common queries; clear escalation triggers to human.

5. **Channel-specific tone + branding**: Documented + trained.

6. **Channel-specific SLA**: Tiered per channel + customer tier.

7. **Channel deflection design**: Direct customers to most appropriate channel for their issue (billing → email, urgent → chat, social → brand).

8. **WFM (workforce management)**: Forecasting + scheduling per channel based on demand patterns.

9. **Tool integration**: Helpdesk-native unified inbox preferred; CCaaS integration for voice; standalone tools for niche channels.

### Common Mistakes

- **Channel silos**: Email in helpdesk, chat in standalone, voice separate. Customer history fragmented.
- **Channel coverage gaps**: Chat available but unstaffed; appears broken.
- **AI chatbot deployed without quality gate**: Frustrates customers; CSAT collapse.
- **Channel-mismatched SLA**: 24h SLA on chat = customer left long ago.
- **Channel-tone mismatch**: Email-formal in chat; cold + robotic.
- **Phone half-staffed**: Lines unanswered; trust damage.
- **Social ignored**: Negative posts sit; reputation compounds.
- **WFM under-investment**: Manual staffing; predictable SLA breach.
- **No channel-mix optimization**: Static channel allocation despite demand shifts.
- **Voice agents siloed from text agents**: Specialization without flexibility.

## Maintain — Keeping It Healthy

### The Daily Rhythm

- **Morning**: Channel coverage + staffing reviewed; AI bot-quality check.
- **Throughout day**: Real-time SLA monitoring per channel; agent workload-balancing; supervisor intervention as needed.
- **End of day**: Open-conversation sweep; channel-handoff protocols.
- **Daily standup**: Team leads review prior-day metrics + issues.
- **Weekly**: Channel-performance review — volume, SLA, CSAT per channel.
- **Monthly**: Channel-mix + ROI analysis; tooling effectiveness; AI chatbot accuracy.
- **Quarterly**: Strategic channel review — add/drop, investment, regional expansion.

### What to Watch

- **Volume + mix per channel**: Distribution shifts; reveal customer-behavior changes.
- **First-response time per channel**: Channel-specific SLA performance.
- **Resolution time per channel**: Channel-specific patterns.
- **CSAT per channel**: Channel-specific issues.
- **Channel-deflection performance**: Are customers landing on right channel?
- **AI-handoff rate**: % of AI-initiated chats requiring human takeover. Track for AI tuning.
- **Off-channel escalation rate**: Conversations switched to higher-touch channel.
- **Phone metrics**: Average handle time, average wait, abandon rate, first-call resolution.
- **Social mention volume + sentiment**: Brand pulse.
- **Community engagement**: Active users, expert contributions, deflection from community.
- **Cost per channel**: Voice expensive; chat moderate; email cheap. Track + optimize.

### Exception Handling

- **Channel outage** (chat tool, CCaaS down): Quick failover; status page; vendor escalation.
- **Volume spike on one channel**: WFM-driven re-routing; AI escalation; supervisor coordination.
- **Negative social storm**: Comms team + support coordination; rapid response; private-channel handoff.
- **Multi-channel customer issue**: Same customer escalating across email + chat + social + voice = significant unhappiness; senior + personal handling.
- **Spam / abuse on public channels**: Block + report + flag.
- **Off-hours emergency**: Channel-agnostic mass communication via status page + email + social.
- **Cross-channel ownership confusion**: Clear handoff with context preservation.
- **AI chatbot major-error**: Quick rollback or override; root-cause investigation; AI training.
- **Compliance issue** (regulatory): Channel-specific compliance review.

## Scale — Growing It

### Adding Complexity

- **Global 24/7 follow-the-sun**: Multiple regional teams handing off across time zones.
- **Multi-language support**: Native-speaker agents per major language; AI translation for long-tail.
- **Specialized channel teams**: Voice agents distinct from text agents; specific channels with specialty staff.
- **Customer-segment-specific channels**: Premium-customer voice tier; standard-customer chat-first.
- **Video + screen-share**: For specific complex issues (banking, technical support).
- **Conversational AI evolution**: Multi-turn AI handling complex queries.

### Automation Opportunities

- **AI chat for tier-1 deflection**: 40–70% of chat queries handled by AI at maturity.
- **Cross-channel context unification real-time**: Single customer view live.
- **Predictive channel-suggestion**: Agent suggests best channel for customer-issue.
- **Sentiment + urgency detection**: Real-time across all channels for proactive routing.
- **Multilingual AI**: Real-time translation; agent handles non-native customers seamlessly.
- **Voice AI**: Inbound calls handled by AI for routine queries; transfer to human for complex.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Channel volume requires dedicated channel-managers (social media community manager, voice operations manager).
- 24/7 global coverage with regional + multilingual.
- Voice / contact-center investment material — enterprise CCaaS with 100+ agents.
- Channel-specific specialization economically justified.
- Customer base segments require differentiated channel experience.

## By Industry (at this scale)

1. **SaaS / Subscription**: Email + in-product chat + AI dominant; voice for enterprise; social for visibility.
2. **E-commerce**: Email + WhatsApp + chat + voice; phone meaningful for high-value.
3. **Telecom**: Voice dominant; chat + AI growing for routine.
4. **Financial Services (B2B)**: Voice + secure-message; regulated channels.
5. **Healthcare (B2B)**: Phone + portal; HIPAA-bound; some channels excluded.
6. **Restaurants / Hospitality**: Phone + chat + social; reservation systems integrated.
7. **Construction / Trades**: Phone primary; SMS for crews; email for office.
8. **Insurance**: Phone + portal + chat; claim-specific workflows.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Omnichannel Operations** + **Workforce Management** + **AI Conversational Layer**. Integrate helpdesk + CCaaS (NICE/Five9/8x8/Genesys) + AI chat (Intercom Fin / Zendesk AI / ada) + social tools (Sprout Social, Hootsuite).

**Proto**: Specialized agents — channel-routing, voice-agent-assist, social-listening, AI-conversational, channel-mix-optimization, WFM.

## Related

- [Ticket Lifecycle](../ticket-lifecycle/SKILL.md) — multi-channel tickets enter lifecycle
- [SLA Management](../sla-management/SKILL.md) — channel-specific SLAs
- [Knowledge Base](../knowledge-base/SKILL.md) — KB surfaces in chat + AI
- [Customer Satisfaction](../customer-satisfaction/SKILL.md) — channel-specific CSAT
- [Escalation](../escalation/SKILL.md) — escalation across channels
- [Campaign Management](../../../sales-crm/02-org-100-to-1k/campaign-management/SKILL.md) — marketing channels intersect support
- [Small-Org Omnichannel (<100 people)](../../01-org-under-100/omnichannel/SKILL.md)
- [Enterprise Omnichannel (1k+)](../../03-org-1k-plus/omnichannel/SKILL.md)
