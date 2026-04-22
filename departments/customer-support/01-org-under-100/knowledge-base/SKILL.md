---
name: knowledge-base
description: This skill should be used when building a customer-facing knowledge base at an organization under 100 employees — typically Intercom Articles, HubSpot KB, Zendesk Guide, Help Scout Docs, or Notion-public; agent-led content creation; deflection + agent-assist focus.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Knowledge Base — Under 100 People

## What This Process Does

The knowledge base at this size is **the multiplier of every support agent**. It serves customers directly (self-service deflection) and agents internally (faster answers, fewer-mistakes). At under-100 scale you have 30–200 articles covering top customer questions; written + maintained by support team alongside daily ticket work; surfaced via in-product help, public help-center URL, and AI search.

The work: **identify what customers actually ask, write good clear answers, surface them where customers look, and keep them current as the product evolves.** Done well, knowledge-base reduces support load 30–60% over 12 months. Done poorly, articles are stale, hard to find, ignored by both customers + agents.

## Start Here: ERP•AI Templates

ERP•AI's **Knowledge Base Starter** template provides article structure (problem → solution → next steps), category taxonomy, customer-facing search optimization, in-product surfacing patterns, agent-assist for ticket responses, and stale-content detection. Pair with **Self-Service Deflection** for measuring KB impact on ticket volume.

## Build — Setting It Up

### With Agents

- **Article-need identification**: Agent surfaces top recurring questions from ticket data → drafts article-need backlog.
- **Article drafting**: Agent drafts article from successful ticket resolution + product docs; human reviews + edits.
- **Article surfacing**: Embedded in in-product help, public help-center, agent-side suggested-articles.
- **Search optimization**: Agent improves discoverability — synonyms, related-articles, search-keyword tagging.
- **Stale-content detection**: Agent identifies articles unviewed for >90 days, articles with declining helpfulness ratings, articles referring to outdated features.
- **Helpfulness signal collection**: "Was this helpful?" + open feedback. Iterate on low-rated articles.
- **Ticket-deflection measurement**: Track tickets prevented (article-view-then-no-ticket-created).
- **Internal vs external split**: Customer-facing articles vs internal-only (sensitive procedures, escalation contacts).

### Key Decisions

1. **Tool**: Helpdesk-native KB (Intercom Articles, Zendesk Guide, HubSpot KB, Help Scout Docs, Freshdesk) — simplest at this scale. Or Notion-public for ultra-lean. Standalone (Document360, GitBook) when KB is differentiating.
2. **Categorization scheme**: Customer-mental-model (e.g., "Getting Started" / "Billing" / "Integrations") rather than internal-org-chart. Maintain 6–12 top categories; subcategories beneath.
3. **Article structure** (consistent template):
   - Problem statement (what user is trying to do)
   - Solution steps (numbered, screenshot-supported)
   - Common variations / troubleshooting
   - Related articles
   - "Was this helpful?" feedback
4. **Voice + tone**: Friendly, direct, no jargon, written for the customer not the engineer.
5. **Maintenance ownership**: Support team primarily; product updates trigger KB updates; engineering doesn't write KB articles directly (they help vet).
6. **Public vs private articles**: Most public; sensitive (refund policies, internal escalation) private or in agent-internal KB.
7. **Update cadence**: Review + refresh every 90 days; retire stale; add for new features at launch.
8. **AI integration**: AI chat that searches + answers from KB articles; AI-assist for agents in helpdesk.

### Common Mistakes

- **No KB at all**: All knowledge in agents' heads. Doesn't scale.
- **KB exists but not maintained**: Articles 18 months stale referring to old UI. Trust eroded.
- **Engineering-written articles**: Technical jargon; customers don't understand. Support owns voice.
- **No measurement**: KB built, no idea if it deflects tickets or helps anyone.
- **Articles not surfaced where customers look**: KB exists at help.company.com but no in-product link, no AI chat search.
- **Categorization mismatch**: Org-chart categories ("Engineering" / "Marketing" / "Finance") instead of customer-task categories.
- **Article-overload without curation**: 500 articles, 80% irrelevant; impossible to find what matters.
- **Internal-only knowledge in public KB**: Refund policies + edge-case workarounds publicly visible; competitive intelligence leaked.

## Maintain — Keeping It Healthy

### The Rhythm

- **Weekly**: Article-creation backlog review — what new questions are coming in? Draft articles for top patterns.
- **Bi-weekly**: KB health check — search performance, helpfulness ratings, top + bottom articles.
- **Monthly**: Stale-content review — retire / refresh.
- **Quarterly**: Category-taxonomy review; major content reorganization if needed.
- **Per product release**: KB updates for new + changed features; outdated articles flagged.

### What to Watch

- **Ticket-deflection rate**: % of users who view KB article + don't create ticket. Track via helpdesk reporting.
- **Article-helpfulness rating**: % marked helpful (target 75%+ across portfolio).
- **Search-success rate**: % of searches resulting in article-click. <70% = search or content gap.
- **Top viewed articles**: Patterns reveal content gaps in product (if "how to do X" is top viewed, X might need product fix).
- **Top searched-for-but-not-found**: Reveals article gaps.
- **Article-creation velocity**: Articles created + updated per month vs ticket-volume growth.
- **Stale article %**: Articles unviewed in 90 days. Target <10%.

### Exception Handling

- **Article causes confusion (low helpfulness)**: Rewrite + re-test. Get user feedback live if possible.
- **Customer reports incorrect article info**: Acknowledge + fix immediately. Apology if material misdirection.
- **Product changes mid-quarter**: Coordinated KB updates pre-launch.
- **Compliance-sensitive content (legal, security)**: Legal review before publishing.
- **Internal-info accidentally public**: Audit + remove + investigate how it got there.
- **Translation requirement (international customers)**: Consider — manual translation expensive; AI-translation imperfect; native-language support adds material complexity.

## Scale — Growing It

### Automation Opportunities

- **AI-powered KB search + chat**: Conversational interface to KB content; answer questions in natural language.
- **AI article generation**: Drafts new articles from successfully-resolved tickets + product docs.
- **Auto-stale-detection + recommended updates**: Agent identifies articles needing refresh based on product changes.
- **Personalized article surfacing**: Different articles surface to different customer profiles based on usage + history.
- **Multilingual auto-translation with human review**: Scale international support.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Article count passes 200; navigation + taxonomy complexity grows.
- Multi-product portfolio requires segmented KB.
- International expansion drives translation requirements.
- Dedicated content team (technical writers) economically justified.
- Self-service deflection becomes strategic priority — investment in KB UX + AI.

## By Industry (at this scale)

1. **SaaS / Subscription**: Feature-walkthrough + integration + troubleshooting dominate. Strong KB = retention asset.
2. **E-commerce**: Order-status + shipping + returns + sizing dominate. Visual-rich content important.
3. **Professional Services**: Project-process + deliverable + tool-usage articles.
4. **Restaurants / Hospitality**: Reservation + policies + menu-info.
5. **Construction / Trades**: Service-area + scheduling + warranty + DIY articles.
6. **Healthcare (small practice)**: Appointment + insurance + clinical-info (HIPAA-bound).
7. **Nonprofit**: Donor + volunteer + program guides.
8. **Marketing / Agency**: Process + tool + brand-guideline content.

## ERP•AI & Proto

**ERP•AI**: Use **Knowledge Base Starter** + **Self-Service Deflection**. Integrate helpdesk-native KB; AI chat layer (Intercom Fin, HubSpot Chatbot, Zendesk AI).

**Proto**: Single Proto agent handles article-need identification, drafting, surfacing, stale-detection, deflection-measurement.

## Related

- [Ticket Lifecycle](../ticket-lifecycle/SKILL.md) — KB reduces ticket creation + speeds resolution
- [Customer Satisfaction](../customer-satisfaction/SKILL.md) — KB self-service correlates with CSAT
- [Omnichannel](../omnichannel/SKILL.md) — KB surfaces in chat, AI, support
- [Onboarding](../../../human-resources/01-org-under-100/onboarding/SKILL.md) — KB helps new-hire ramp + customer onboarding
- [Enterprise Knowledge Base (1k+ people)](../../03-org-1k-plus/knowledge-base/SKILL.md)
