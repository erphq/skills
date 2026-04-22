---
name: knowledge-base
description: This skill should be used when building + maintaining a customer-facing knowledge base at an organization of 100-1,000 employees — typically a dedicated content/technical-writing team, formal taxonomy, AI-powered search + chat, multi-product + multi-language coverage, and aggressive deflection-rate targets.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Knowledge Base — 100 to 1,000 People

## What This Process Does

Knowledge base at this scale is **a strategic deflection + agent-productivity multiplier requiring dedicated investment.** 200–2,000 articles across multiple products + customer types; dedicated content team (1–5 technical writers + content manager); AI-powered search + chat layer; multi-language for global customers; integrated into product, helpdesk, and customer touchpoints. Deflection-rate targets 40–70% for mature KBs. Savings: AI deflection at 50% rate at $10/ticket ÷ 50,000 tickets/month = $250K/month support savings.

The work: **identify gaps, write quality content fast, surface optimally, measure deflection, iterate on what works.** Mistakes: stale content (loses trust), bad search (deflection-rate plummets), no measurement (can't improve), engineering-written articles (customers don't understand).

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Knowledge Operations** template provides article-need identification (from ticket data + search-no-results), content management with workflow (draft → review → publish), AI-search optimization, in-product surfacing patterns, agent-assist integration, multi-language management, and deflection-rate analytics. Pair with **AI Customer Chatbot** for KB-powered conversational interface.

## Build — Setting It Up

### With Agents

- **Article-gap identification**: Agent surfaces top recurring tickets + top failed searches → backlog prioritization.
- **Article-drafting from tickets**: Agent drafts article from successful ticket-resolution; technical writer reviews + polishes.
- **Content-workflow**: Draft → SME review → editing → translation → publishing. Tracked + audited.
- **Search optimization**: Continuous tuning — synonyms, misspellings, content tagging, freshness signals.
- **AI chatbot integration**: KB content powers AI chat answers. Chatbot escalates to human when KB lacks answer.
- **Agent-assist integration**: Tickets surface relevant articles to agent automatically.
- **Multi-language management**: AI translation + native-speaker review for customer-facing content.
- **Stale-content detection**: Agent flags articles with declining views, low ratings, references to deprecated features.
- **Deflection measurement**: Track tickets prevented (search-then-no-ticket-created), customer self-resolution.
- **Content performance dashboard**: Article-level views, ratings, search-rank, deflection contribution.

### Key Decisions

1. **Tooling**:
   - **Helpdesk-native KB**: Zendesk Guide Enterprise, Salesforce Knowledge, Freshdesk Pro/Enterprise — integrated with ticket system.
   - **Standalone KB**: Document360, Stonly, Helpjuice, GitBook — when KB is differentiating + needs deeper capability.
   - **Hybrid**: Native KB + standalone for product-documentation.
2. **Content-team structure**: 1–5 technical writers + content manager + SME network (engineers + product managers).
3. **Article-style guide**: Voice, tone, terminology, structure, screenshot standards. Documented + enforced.
4. **AI chatbot integration**: Intercom Fin, Zendesk AI, ada, Cognigy, custom (LLM API + RAG over KB).
5. **Categorization taxonomy**: Customer-task-based (not org-chart). 6–15 top categories; depth-2 subcategories.
6. **Multi-language strategy**: Top languages translated by native speakers; long-tail by AI; mark AI-translated explicitly.
7. **In-product help surfacing**: Help widget, contextual articles per page, smart search.
8. **Internal vs. external content split**: Customer-facing vs. agent-only KB. Different access controls.
9. **Content-freshness SLA**: 90-day refresh review; auto-flag for stale articles.

### Common Mistakes

- **Engineering-written articles**: Technical jargon; customers don't understand.
- **No measurement infrastructure**: Article performance opaque; can't optimize.
- **AI chatbot rolled out without quality gate**: Low-quality answers damage trust faster than no-answer.
- **Translation-without-review**: Pure AI translation in customer-facing content; embarrassing errors.
- **Categorization-by-org-chart**: "Engineering articles" / "Product articles" — not how customers think.
- **Article-bloat**: 5,000 articles, 60% irrelevant; search struggles.
- **Stale articles unpublished**: Outdated content not retired; trust erodes.
- **In-product help disconnected from KB**: Customers Google for answers vs. find in product.
- **Internal-only content accidentally public**: Edge-case workarounds + refund policies leaked.
- **Content team disconnected from ticket data**: Articles created without knowing what customers actually ask.

## Maintain — Keeping It Healthy

### The Rhythm

- **Daily**: Article-creation backlog + new-content drafting.
- **Weekly**: Search analytics review; content-gap identification; chatbot quality monitoring.
- **Bi-weekly**: Article-performance review; bottom-decile articles flagged for refresh or retire.
- **Monthly**: Deflection-rate reporting; content-velocity vs. ticket-volume; ROI analysis.
- **Quarterly**: Taxonomy review; chatbot quality + accuracy review; multi-language coverage refresh.
- **Annually**: KB platform review; content strategy refresh; investment case for next year.

### What to Watch

- **Deflection rate**: % of customers self-resolving via KB (KB-view-then-no-ticket). Target 40–70%.
- **Article-helpfulness rating**: Aggregate target 80%+; per-article track + improve.
- **Search-success rate**: % of searches resulting in article-click. Target 75%+.
- **Top failed searches**: Reveals article gaps + product-issue signals.
- **Top viewed articles**: Patterns reveal content gaps in product (frequent how-to-X may indicate UX issue).
- **AI chatbot accuracy**: % of bot-answered queries customer-rated helpful. Target 75%+.
- **Article-creation velocity**: New + updated articles per month vs. ticket-volume growth.
- **Stale-article %**: Articles 90+ days unviewed. Target <10%.
- **Multi-language coverage**: Coverage by language vs. customer-base distribution.
- **Article-to-ticket conversion**: Articles that DON'T deflect (customer reads + still creates ticket) — analyze why.

### Exception Handling

- **Article-causes-confusion (low rating)**: Investigation + rewrite + re-test.
- **Customer reports article-error**: Acknowledge + fix immediately; apology if material.
- **Product release = significant KB update**: Coordinated content refresh pre-launch.
- **AI chatbot major-error**: Quick rollback or override; root-cause investigation; AI training improvement.
- **Translation error reported**: Quick fix; re-evaluate language + reviewer.
- **Compliance-sensitive content** (legal, security): Legal + security review before publishing.
- **Content-strategy disagreement**: SME wants extensive technical depth, customer needs simple. Customer wins; technical doc separate from KB.
- **Internal-info accidentally public**: Audit + remove + investigate; retraining.
- **KB platform outage**: Quick communication; deflection-rate temporary collapse; vendor escalation.

## Scale — Growing It

### Adding Complexity

- **Multi-product KB segmentation**: Each product with distinct KB instance or segmented within shared KB.
- **Customer-segment-specific content**: Enterprise content vs. SMB content differentiation.
- **Conversational AI evolution**: Beyond Q&A — multi-turn reasoning, action-taking AI agents.
- **Video + interactive content**: Beyond text articles — video walk-throughs, interactive guides.
- **Localization beyond translation**: Cultural adaptation; region-specific content.

### Automation Opportunities

- **AI-generated articles**: Drafts created from ticket-resolution patterns + product docs; human-reviewed.
- **Predictive content recommendations**: AI suggests articles users may need based on usage patterns.
- **Real-time chatbot agents**: Generative AI conversational interface answering complex multi-turn questions.
- **Auto-translation with quality scoring**: AI translates; quality scored; high-confidence auto-publish, low-confidence flagged for review.
- **Cross-product content discovery**: AI surfaces relevant content from other product KBs when applicable.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Article count passes 2,000; navigation complexity grows.
- Multi-product, multi-language, multi-region operations.
- Dedicated knowledge-management organization with formal governance.
- AI-powered chat + search investment becomes business-critical.
- Compliance + audit requirements (SOC 2, regulated content).

## By Industry (at this scale)

1. **SaaS / Subscription**: Feature + integration + troubleshooting dominant. AI chat critical for deflection.
2. **E-commerce**: Order + shipping + return + product-question dominant. Visual-rich.
3. **Financial Services (B2B)**: Regulated content; compliance-cleared.
4. **Healthcare (B2B)**: HIPAA + clinical-content sensitivity.
5. **Manufacturing (B2B)**: Technical + warranty + parts catalog content.
6. **Telecom**: Service + technical + billing content; high-volume self-service.
7. **Insurance**: Policy + claims + coverage content; regulated.
8. **Travel / Hospitality**: Reservation + cancellation + policy content.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Knowledge Operations** + **AI Customer Chatbot**. Integrate helpdesk-native or standalone KB (Document360, Stonly, GitBook), AI chat (Intercom Fin, Zendesk AI, ada, custom LLM).

**Proto**: Specialized agents — content-gap identification, drafting, workflow, translation-quality, AI-chat-quality, deflection-measurement.

## Related

- [Ticket Lifecycle](../ticket-lifecycle/SKILL.md) — KB feeds agent-assist + deflection
- [SLA Management](../sla-management/SKILL.md) — KB self-service supports SLA attainment
- [Customer Satisfaction](../customer-satisfaction/SKILL.md) — KB quality correlates with CSAT
- [Omnichannel](../omnichannel/SKILL.md) — KB surfaces in chat + AI + product
- [Onboarding](../../../human-resources/02-org-100-to-1k/onboarding/SKILL.md) — KB supports new-hire ramp
- [Small-Org KB (<100 people)](../../01-org-under-100/knowledge-base/SKILL.md)
- [Enterprise KB (1k+)](../../03-org-1k-plus/knowledge-base/SKILL.md)
