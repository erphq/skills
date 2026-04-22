---
name: customer-satisfaction
description: This skill should be used when running a Voice of Customer program at an organization of 100-1,000 employees — formal CSAT + NPS + CES program with executive visibility, sentiment analysis, dashboards across customer touchpoints, customer advisory board, and product-feedback integration.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Customer Satisfaction — 100 to 1,000 People

## What This Process Does

Customer satisfaction at this scale is **a formal Voice of Customer (VoC) program with executive sponsorship + product/ops integration.** Multi-touchpoint measurement (post-ticket CSAT, periodic NPS, journey-CES, post-onboarding, post-renewal); sentiment analysis on text feedback; dashboards across functions; customer advisory board; closed-loop intervention; product-feedback systematic. Tools: Qualtrics, Medallia (both private now), or modern alternatives (Delighted, Wootric/InMoment, AskNicely, native helpdesk-CSAT).

The work: **systematically capture customer voice, surface signal vs. noise, drive action across functions, and use data for retention + product + reputation.** Mistakes at scale: vanity metrics without action, survey fatigue (over-asking), themes hidden in aggregates, slow response to detractors.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Voice of Customer** template provides multi-touchpoint measurement program (CSAT/NPS/CES), sentiment analysis on tickets + reviews + social, real-time dashboards, closed-loop workflow for negative feedback, customer-advisory-board program, and product-feedback aggregation. Pair with **Predictive Churn Models** and **Customer Health Scoring**.

## Build — Setting It Up

### With Agents

- **Multi-touchpoint survey orchestration**: Post-ticket CSAT, periodic NPS, journey-CES, milestone-specific (post-onboarding, post-renewal, post-incident).
- **Sentiment analysis at scale**: AI scores ticket text, social mentions, review content, NPS comments for sentiment + theme.
- **Negative-feedback alerting**: Detractor (NPS 0–6) or low CSAT (<3/5) triggers immediate alert to CS team + escalation if pattern.
- **Public-review monitoring**: G2, Capterra, TrustRadius, Trustpilot, App Store, Google Reviews — agent monitors + alerts.
- **Trend dashboards**: CSAT + NPS + CES + theme trends over time; segmented by tier, product, region, agent.
- **Theme extraction**: AI clusters open-text feedback into themes; tracks volume + sentiment per theme.
- **Closed-loop tracking**: Negative feedback → assigned owner → outreach → resolution → documented.
- **Customer Advisory Board (CAB) management**: Membership, agendas, feedback aggregation, action items.
- **Product-feedback integration**: Themes flow to product team; tracked through prioritization + roadmap.
- **Retention correlation**: Customer-satisfaction trends predict churn; early intervention.

### Key Decisions

1. **Measurement program design**:
   - **Post-ticket CSAT**: 1–3 questions, 24h post-resolution; target 25%+ response rate
   - **Quarterly NPS**: All customers; "How likely to recommend" + open comment
   - **Annual relationship NPS**: Deeper survey with customer-experience attributes
   - **Journey CES** (Customer Effort Score): At specific journey stages — onboarding, renewal, support
   - **Post-incident**: After major incident, specific survey
   - **Win/loss surveys**: For deal closures (won/lost) — sales-marketing alignment

2. **Tooling**:
   - **Native helpdesk CSAT** (Zendesk, Salesforce Service): Easy, integrated
   - **Standalone**: Delighted (acquired by Qualtrics), Wootric (now InMoment), AskNicely, Survicate, Refiner
   - **Enterprise VoC**: Qualtrics, Medallia (both private), InMoment
   - **Sentiment analysis**: Native (Zendesk AI, Salesforce Einstein), standalone (Lexalytics, MonkeyLearn)

3. **Survey-fatigue management**: Cap surveys per customer per period; don't survey on every interaction.

4. **Negative-feedback intervention SLA**: Within 24h for detractors; CS-lead-or-exec-personal-outreach for material accounts.

5. **Public-review strategy**: Encourage advocacy from promoters; respond to all reviews professionally; engage with critique constructively.

6. **Internal visibility**: Dashboards visible to all teams; not management-only.

7. **Customer Advisory Board**: 8–15 customer members; quarterly meetings; structured agenda; documented action items.

8. **Product-feedback flow**: Themes → product PM aggregation → roadmap prioritization → customer follow-up.

9. **Executive engagement**: CSAT/NPS in board materials; CEO reads representative customer feedback; QBRs include customer voice.

### Common Mistakes

- **Vanity-metric trap**: CSAT tracked, no action; team gets "good number" without learning.
- **Survey fatigue**: Customers stop responding; biased sample.
- **No-action on negative feedback**: Bad CSAT lands in dashboard; nobody follows up; customer churns silently.
- **Cherry-picked quotes**: Only positive shared internally; team loses honest view.
- **Aggregate hides individual signal**: 90% CSAT looks great; the 10% are highest-value churning.
- **Theme extraction without product feedback flow**: Patterns identified but never reach product team.
- **Public-review reactive only**: Only respond to negatives; positive ignored = miss amplification.
- **NPS treated as score-only**: NPS comments are gold; score is just metric.
- **CAB as advisory theater**: Quarterly meetings + nothing happens to feedback. Trust eroded.
- **Sentiment analysis ignored**: Tool deployed; nobody acts on signals.
- **Closed-loop loop incomplete**: Outreach happens; resolution unclear; pattern repeats.

## Maintain — Keeping It Healthy

### The Daily / Weekly Rhythm

- **Continuous**: Agent surveys + sentiment analysis + alerting.
- **Daily**: Negative-feedback alerts → CS-team outreach within 24h.
- **Weekly**: CSAT/NPS dashboard review; theme aggregation; CS-team review.
- **Bi-weekly**: Founder/CEO reads representative sample of feedback — direct customer pulse.
- **Monthly**: VoC scorecard org-wide; product/ops insights; theme-driven action items.
- **Quarterly**: Customer-experience review; significant themes drive backlog priorities; CAB meeting.
- **Annually**: VoC program effectiveness review; tool stack assessment.

### What to Watch

- **Overall CSAT score**: Target 90%+ satisfied. Trending matters more than absolute.
- **NPS score**: Target 30+ B2B SaaS; 50+ excellent; 70+ exceptional.
- **CES (Customer Effort Score)**: Lower = easier; track per touchpoint.
- **Channel-specific CSAT**: Per channel performance.
- **Agent-specific CSAT**: Coaching opportunity per agent.
- **Negative-feedback resolution rate**: % of detractors receiving outreach + resolution.
- **Public review velocity + average**: G2, Capterra, etc. star average + new-review pace.
- **Theme volumes**: Top 3 negative themes — recurring quarter-over-quarter?
- **Promoter / Detractor split**: Promoters drive growth; Detractors signal churn.
- **Survey response rate**: Track + investigate declines.
- **VoC-to-product-action rate**: % of themes converted to product backlog items.
- **CAB engagement**: CAB-member participation + feedback velocity.

### Exception Handling

- **Detractor (NPS 0–6)**: Personal outreach from CS lead or executive within 24h. Listen-first conversation. Identify root cause. Save-the-account if material.
- **Negative public review**: Respond publicly + professionally. Offer private discussion. Follow up.
- **Pattern emerging (multiple similar complaints)**: Escalate to product/ops. Root-cause investigation. Customer communication if material.
- **Misuse complaint** (racism toward agent, etc.): Document. Decide if customer should be retained.
- **Refund demand tied to satisfaction**: Authority threshold + judgment. Founder/exec approves above threshold.
- **Promoter** (NPS 9–10): Activate as referral source; case study; CAB candidate.
- **Survey-rigging suspicion**: Investigate; methodology integrity matters.
- **Anonymous vs. identified complaint**: Both treated seriously; identified easier to follow up.
- **CAB member negative feedback in meeting**: Take seriously; respond constructively; visible action items.
- **Major customer-perception event** (CEO comment, viral incident): Coordinated comms + CS + product response.

## Scale — Growing It

### Adding Complexity

- **Multi-product VoC**: Each product with distinct measurement + dashboards.
- **Geographic / regional VoC**: Country-specific satisfaction; cultural variation in scoring.
- **Customer-segment-specific programs**: Enterprise vs. mid-market vs. SMB different measurement.
- **Predictive churn modeling**: VoC data + product data + financial data → churn-risk score.
- **Customer health programs**: Beyond satisfaction — composite health score.
- **Customer marketing integration**: Promoters drive case studies + references + advocacy.

### Automation Opportunities

- **AI sentiment analysis at scale**: Every interaction sentiment-scored; trends visible.
- **Theme clustering + tracking**: AI groups feedback into evolving themes.
- **Predictive churn signal**: VoC trends + behavioral data predict churn weeks ahead.
- **Personalized closed-loop response**: AI drafts outreach tuned to specific feedback.
- **Cross-source feedback unification**: Reviews + tickets + surveys + product analytics into single view.
- **Real-time agent-coaching from CSAT**: During or post-interaction, AI provides agent feedback.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Customer base passes 10,000; survey + analysis at scale requires dedicated VoC team.
- Multi-product portfolio with segmented satisfaction tracking.
- VoC becomes formal program with C-level executive sponsorship.
- Customer Advisory Board program with structured engagement (multiple boards, board governance).
- Predictive analytics + churn-modeling investment material.
- Industry benchmarks via formal services (Bain NPS, Forrester).

## By Industry (at this scale)

1. **SaaS / Subscription**: Post-ticket CSAT + annual NPS standard. G2, Capterra critical for buying signal.
2. **E-commerce**: Post-purchase NPS + product-review collection. Trustpilot, Google Reviews key.
3. **Professional Services**: Post-engagement satisfaction + project-level. Reference-ability tracking.
4. **Healthcare (B2B)**: Patient/provider satisfaction (HCAHPS-like). Online ratings critical.
5. **Financial Services (B2B)**: Satisfaction tied to regulatory + risk metrics.
6. **Telecom**: NPS particularly important — historically poor industry NPS.
7. **Insurance**: Claim-experience NPS specifically; policy-renewal NPS.
8. **Restaurants / Hospitality**: Yelp + Google Reviews + OpenTable + post-visit; real-time matters.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Voice of Customer** + **Predictive Churn Models** + **Customer Health Scoring**. Integrate helpdesk-native CSAT + standalone NPS (Delighted, AskNicely, Survicate) + sentiment AI + review monitoring (G2 / Capterra / Trustpilot APIs).

**Proto**: Specialized agents — survey-orchestration, sentiment-analysis, theme-extraction, alerting, closed-loop, CAB-management, predictive-churn.

## Related

- [Ticket Lifecycle](../ticket-lifecycle/SKILL.md) — CSAT post-ticket
- [SLA Management](../sla-management/SKILL.md) — SLA correlates with CSAT
- [Knowledge Base](../knowledge-base/SKILL.md) — KB self-service correlates with satisfaction
- [Customer 360](../../../sales-crm/02-org-100-to-1k/customer-360/SKILL.md) — satisfaction is part of customer health
- [Contracts & Renewals](../../../sales-crm/02-org-100-to-1k/contracts-renewals/SKILL.md) — NPS predicts renewal
- [Small-Org CSAT (<100 people)](../../01-org-under-100/customer-satisfaction/SKILL.md)
- [Enterprise CSAT (1k+)](../../03-org-1k-plus/customer-satisfaction/SKILL.md)
