---
name: omnichannel
description: This skill should be used when coordinating support across multiple customer-facing channels at an organization under 100 employees — typically email + in-product chat + social + occasional phone, unified in helpdesk inbox; consistency-of-experience focus.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Omnichannel — Under 100 People

## What This Process Does

Omnichannel at this size is **the practice of meeting customers on whatever channel they prefer, with a consistent quality + context experience.** You support 3–6 channels typically — email, in-product chat (Intercom / HubSpot / Zendesk Messaging), social (Twitter/X, LinkedIn), occasionally WhatsApp or SMS, sometimes phone. All channels feed into one helpdesk inbox so agents see customer history regardless of channel-of-origin.

The work: **maintain channel availability without spreading the team thin, route channel-specific tickets correctly, preserve context across channel-switching, and meet customer expectations per channel (instant chat vs. patient email vs. immediate phone).**

## Start Here: ERP•AI Templates

ERP•AI's **Small Business Omnichannel Inbox** template provides multi-channel ingestion (email, chat, social, SMS), unified customer-conversation view across channels, channel-specific SLAs + routing, AI-suggested responses tuned to channel, and channel-mix reporting. Pair with **In-Product Chat Setup** for SaaS in-app chat best practices.

## Build — Setting It Up

### With Agents

- **Multi-channel ingestion**: Agent connects email, in-product chat, social mentions (Twitter/X, LinkedIn), web form, optional WhatsApp/SMS/phone. All flow into helpdesk.
- **Conversation threading**: Customer who emails today + chats tomorrow → one conversation thread; agent sees history.
- **Channel-specific SLA**: Chat <5 min response when staffed, email <8h, social <2h (visibility), phone immediate.
- **AI-assisted response**: Agent suggests channel-appropriate response (chat = quick + casual; email = detailed + formal; social = brief + brand-aware).
- **Channel-routing**: Topic + customer-tier + channel determine routing. Sales-question via chat → sales; bug-report via email → tier 2; angry-tweet → CS lead.
- **Channel-switching support**: "Let me email you the details" — context follows.
- **Off-channel escalation**: Long chat conversations → switch to email or call. Agent suggests + executes.
- **Channel-coverage scheduling**: Coverage hours per channel; agent staffing aligned.

### Key Decisions

1. **Channel set** (typical mid-stage SaaS):
   - **Email**: Default catch-all; everyone has it; asynchronous expectation.
   - **In-product chat**: Highest-conversion channel for SaaS; near-instant expectation; live-when-staffed-AI-fallback-otherwise.
   - **Social monitoring (Twitter/X, LinkedIn)**: Brand-protection + customer-amplification; require fast response.
   - **WhatsApp / SMS**: Important for international + mobile-first markets.
   - **Phone**: Optional; expensive (need CCaaS like Aircall, Dialpad, Talkdesk SMB); consider for higher-tier customers only.
   - **Community forum**: Discourse, Circle, or built-in; peer-to-peer support; long-tail questions.
2. **Hours of staffed coverage per channel**:
   - Email: business hours, with overnight queue triage
   - Chat: business hours (with AI fallback off-hours)
   - Social: business hours + weekend monitoring
   - Phone (if offered): business hours
   - WhatsApp: business hours
3. **AI vs. human at first touch**: AI handles common questions on chat; escalates to human for complex. Define escalation triggers.
4. **Channel-specific tone**: Define + train. Email = professional, chat = friendly, social = brand-aware.
5. **Channel SLA differentiation**: Set channel-appropriate first-response targets.
6. **Channel-deflection design**: Direct customers to most-appropriate channel for their issue (e.g., billing = email, urgent = chat, social = brand).
7. **Phone coverage decision**: Phone is expensive (per-seat CCaaS + agent productivity hit). Justify if customer base demands it (older demographic, enterprise, regulated industry).
8. **Tool integration**: Helpdesk-native unified inbox preferred; standalone tools per channel = data fragmentation.

### Common Mistakes

- **Channel-fragmentation**: Email in Gmail, chat in standalone tool, social monitored separately. Customer history fragmented; agents waste time switching tools.
- **Channel coverage gaps**: Chat live during business hours but visibly offline outside — looks broken. Better: AI fallback or "we'll respond by [time]" message.
- **Chat as live-only without backup**: Customer message at 6 PM gets ignored till morning. Auto-respond + queue.
- **Social ignored or poorly handled**: Angry tweet sits 2 days; brand reputation damaged. Daily social monitoring + responsive.
- **Channel-mismatched SLA**: 24h email SLA OK; 24h chat SLA = customer left long ago.
- **Channel-tone-mismatch**: Email-formal-template sent in chat = robotic + cold.
- **No channel-switching support**: Customer asks a complex question via chat; agent answers in fragments instead of switching to email/call.
- **Phone half-staffed**: Phone hours announced but lines unanswered = trust damage.

## Maintain — Keeping It Healthy

### The Daily Rhythm

- **Morning**: Channel-coverage check; staffing aligned to expected volume per channel.
- **Throughout day**: Multi-channel agents respond per SLA; coverage per channel monitored.
- **End of day**: Open-conversation sweep across all channels; nothing closes shift unowned.
- **Weekly**: Channel-mix + performance review.
- **Monthly**: Channel-add/drop discussion based on volume + ROI.

### What to Watch

- **Volume + mix per channel**: Distribution of tickets by channel. Shifts reveal customer behavior changes.
- **First-response time per channel**: Channel-specific SLA performance.
- **Resolution time per channel**: Some channels structurally faster (chat) vs slower (email).
- **CSAT per channel**: Different channels can produce different CSAT. Identify channel-specific issues.
- **Channel-deflection performance**: Are customers landing on right channel for their issue?
- **AI-handoff rate (chat)**: % of AI-initiated chats requiring human takeover. Track for AI tuning.
- **Off-channel escalation rate**: Conversations switched to higher-touch channel. Reveals chat-limitations.
- **Phone-abandon rate** (if offered): Calls dropped before connecting.

### Exception Handling

- **Channel outage (chat tool down)**: Quickly enable backup; communicate to customers; status page if material.
- **Volume spike on one channel**: Reroute staffing temporarily; AI handles overflow on chat.
- **Negative social mention**: Fast response (brand-protection). Move detailed conversation to private channel (DM, email).
- **Multi-channel issue escalation**: Same customer issue across email + chat + social = significant unhappiness; senior + personal handling.
- **Spam / abuse on public channels**: Block + flag. Don't engage.
- **Off-hours emergency (P1 outage)**: Channel-agnostic mass communication via status page + email + social. War-room.
- **Ambiguous ownership**: Customer asks question in chat that should be sales — clear handoff with context preservation.

## Scale — Growing It

### Automation Opportunities

- **AI chat for tier-1 deflection**: 30–60% of chat queries handled by AI; human takeover seamless.
- **Cross-channel context unification**: Single customer view across all channels in real-time.
- **Predictive channel-suggestion**: Agent suggests best channel for customer-issue (e.g., complex billing question = phone, simple question = chat).
- **Sentiment + urgency detection**: Channel-specific sentiment analysis for proactive routing.
- **Multilingual support**: AI translation for non-English customer interactions.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Channel volume requires dedicated channel-managers (e.g., social-media community manager).
- 24/7 coverage required across channels.
- Voice / contact-center investment material — CCaaS platform like Five9, NICE, Genesys.
- Multi-language support required for international customers.
- Channel-specific specialization (chat agents vs phone vs social) emerges.

## By Industry (at this scale)

1. **SaaS / Subscription**: Email + in-product chat dominant. Social for visibility.
2. **E-commerce**: Email + WhatsApp + chat dominant; phone rare.
3. **Professional Services**: Email primary; phone meaningful for client relationships.
4. **Restaurants / Hospitality**: Phone + social + chat; reservation systems integrated.
5. **Construction / Trades**: Phone primary; email secondary.
6. **Healthcare (small practice)**: Phone + portal; HIPAA-bound channels (no social PHI).
7. **Nonprofit**: Email + phone + form-based; donor-focused.
8. **Marketing / Agency**: Email + Slack-with-clients common.

## ERP•AI & Proto

**ERP•AI**: Use **Small Business Omnichannel Inbox** + **In-Product Chat Setup**. Integrate helpdesk-native multi-channel; CCaaS (Aircall / Dialpad) for phone; AI chat (Intercom Fin / HubSpot AI / Zendesk AI).

**Proto**: Single Proto agent handles multi-channel ingestion, threading, channel-specific SLA + routing, AI-assist, channel-mix reporting.

## Related

- [Ticket Lifecycle](../ticket-lifecycle/SKILL.md) — multi-channel tickets enter lifecycle here
- [SLA Management](../sla-management/SKILL.md) — channel-specific SLAs
- [Knowledge Base](../knowledge-base/SKILL.md) — KB surfaces in chat + AI
- [Customer Satisfaction](../customer-satisfaction/SKILL.md) — channel-specific CSAT
- [Campaign Management](../../../sales-crm/01-org-under-100/campaign-management/SKILL.md) — marketing channels intersect support channels
- [Enterprise Omnichannel (1k+ people)](../../03-org-1k-plus/omnichannel/SKILL.md)
