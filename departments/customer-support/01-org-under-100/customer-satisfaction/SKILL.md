---
name: customer-satisfaction
description: This skill should be used when measuring + improving customer satisfaction at an organization under 100 employees — typically post-resolution CSAT survey, occasional NPS, customer-feedback aggregation, founder-level visibility into negative feedback.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Customer Satisfaction — Under 100 People

## What This Process Does

Customer satisfaction at this size is **how you turn customer experience into improvement signal**. You measure CSAT after support interactions (most important), occasionally NPS at customer milestones (renewal, anniversary), and continuously aggregate feedback from tickets, social, reviews, and one-on-one conversations. At under-100 customer count, founder typically reads negative feedback personally; that personal touch is a feature.

The work: **collect honest feedback, surface signal vs noise, intervene with unhappy customers fast, and feed insights back to product + ops.** Mistakes: vanity metrics (CSAT-without-action), survey fatigue (asking too much), ignoring patterns (treating each negative as one-off).

## Start Here: ERP•AI Templates

ERP•AI's **Small Business CSAT + NPS** template provides post-resolution CSAT survey, periodic NPS survey, sentiment analysis from text feedback, negative-feedback alerting, and trend dashboards. Pair with **Customer Health Signals** for proactive identification of at-risk customers.

## Build — Setting It Up

### With Agents

- **Post-ticket CSAT collection**: Agent sends short survey after ticket closes (1–3 questions); high response rate at this scale (founder's brand).
- **NPS at lifecycle moments**: Annually + post-onboarding + at significant interactions.
- **Sentiment analysis on tickets**: AI scores ticket text for sentiment; surfaces frustrated customers even before survey.
- **Negative-feedback alerting**: Any rating ≤3/5 (or NPS ≤6) → immediate alert to founder + CS lead.
- **Public-review monitoring**: G2, Capterra, TrustRadius, Yelp, App Store reviews — agent monitors + alerts on negative.
- **Trend dashboards**: CSAT + NPS over time; by category, agent, channel.
- **Theme extraction from text feedback**: AI clusters open-text feedback into themes for product + ops visibility.
- **Closed-loop follow-up**: For every negative feedback, founder or CS reaches out personally.

### Key Decisions

1. **CSAT methodology**:
   - **Post-resolution**: 1-question rating (1–5 stars or 1–10 scale) + open comment.
   - **Sample size goal**: Aim for 20%+ response rate; auto-send 24 hours after ticket close.
   - **Threshold**: Target 90%+ "satisfied" (4–5 on 5-point scale) or NPS 30+.
2. **NPS methodology**:
   - **Frequency**: Quarterly or semi-annually; every customer eventually.
   - **Question**: Standard "How likely are you to recommend [Company] to a friend / colleague?" 0–10 scale.
   - **Threshold**: NPS 30+ healthy; 50+ excellent for B2B SaaS; 70+ exceptional.
3. **CES (Customer Effort Score)**: Optional at this scale; 1-question on ease-of-resolution. Useful for support specifically.
4. **Tool**: Helpdesk-native (Intercom, HubSpot, Zendesk all have CSAT) or standalone (Delighted, Wootric, AskNicely, Survicate).
5. **Survey-fatigue limits**: Cap survey requests per customer per month (1–2 max); don't survey on every ticket if multiple per week.
6. **Negative-feedback intervention**: Defined SLA for response (within 24 hours); founder or CS lead reaches out personally.
7. **Public-review strategy**: Encourage happy customers to leave G2/Capterra reviews; respond to all reviews (positive + negative) professionally.
8. **Internal visibility**: CSAT + NPS scores visible to entire team; not just management.

### Common Mistakes

- **Vanity-metric trap**: Track CSAT without acting on it; team gets "good number" without learning.
- **Survey fatigue**: Survey every interaction; customers stop responding; biased sample.
- **No-action on negative feedback**: Bad CSAT comment lands in dashboard, nobody follows up; customer churns silently.
- **Cherry-picking quotes**: Only positive testimonials shared internally; team loses honest view of state.
- **Aggregate hiding individual signal**: 90% CSAT looks great; the 10% are your highest-value churning customers.
- **Theme extraction without product feedback**: Patterns identified but never reach product/eng teams.
- **Public review reactive**: Only respond to negative reviews; positive reviews ignored = miss amplification.
- **NPS treated as score-only**: NPS open-text feedback is the gold; score is just the metric.

## Maintain — Keeping It Healthy

### The Daily / Weekly Rhythm

- **Daily**: Negative-feedback alerts → personal outreach within 24 hours.
- **Weekly**: CSAT + NPS dashboard review; theme aggregation.
- **Bi-weekly**: Founder reads representative sample of feedback (good + bad); maintains direct customer pulse.
- **Monthly**: CSAT + NPS scorecard with trends + themes shared org-wide; product + ops gets insights.
- **Quarterly**: Customer-experience review; significant feedback themes drive backlog priorities.

### What to Watch

- **Overall CSAT score**: Target 90%+ satisfied. Trending matters more than absolute.
- **NPS score**: Target 30+ B2B SaaS; 50+ excellent.
- **CSAT by category**: Bug-related vs how-to vs billing — patterns inform priorities.
- **CSAT by agent**: Agent-level differences inform coaching (or hiring).
- **Negative-feedback resolution rate**: % of negative feedback receiving outreach + resolution.
- **Public review velocity**: G2, Capterra, etc. New reviews per month; star average.
- **Theme volumes**: Top 3 negative themes — recurring? Track quarter-over-quarter.
- **Promoter / Detractor split (NPS)**: Promoters drive growth via referrals; Detractors signal churn risk.

### Exception Handling

- **Detractor (NPS 0–6)**: Personal outreach from CS lead or founder. Listen-first conversation. Identify root cause. Save-the-account if material.
- **Negative public review (G2, etc.)**: Respond publicly + professionally. Offer to discuss privately. Follow up.
- **Pattern emerging (multiple similar complaints)**: Escalate to product + ops. Root-cause investigation. Customer communication if material.
- **Misuse complaint (e.g., racism toward agent)**: Document. Decide if customer should be retained. Founder involvement.
- **Demand for refund tied to satisfaction**: Authority threshold + judgment call. Founder approves above threshold.
- **Promoter (NPS 9–10)**: Activate as referral source; case study; customer advisory board candidate.
- **Survey-rigging suspicion**: Investigate. Maintain methodology integrity.
- **Anonymous complaint vs identified**: Treat both seriously; identified easier to follow up.

## Scale — Growing It

### Automation Opportunities

- **AI sentiment analysis at scale**: Every customer interaction sentiment-scored; trends visible.
- **Theme clustering**: AI groups feedback into themes; tracks volume + sentiment per theme.
- **Predictive churn signal**: Customer-satisfaction trends predict churn; early intervention.
- **Personalized closed-loop response**: Agent drafts follow-up message tuned to specific feedback.
- **Cross-tool feedback unification**: Reviews + tickets + surveys + product analytics into single customer-feedback view.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Customer base passes 1,000; survey + analysis at scale requires dedicated function.
- Multi-product portfolio requires segmented satisfaction tracking.
- Voice-of-customer becomes formal program with executive sponsorship.
- Customer Advisory Board program with structured engagement.
- Predictive analytics + churn-modeling investment justified.

## By Industry (at this scale)

1. **SaaS / Subscription**: Post-ticket CSAT + annual NPS standard. G2 + Capterra reviews critical.
2. **E-commerce**: Post-purchase NPS + product-review collection. Trustpilot + Google reviews key.
3. **Professional Services**: Post-engagement satisfaction + project-level survey. Reference-ability tracking.
4. **Restaurants / Hospitality**: Yelp + Google Reviews + OpenTable + post-visit survey. Real-time critical.
5. **Construction / Trades**: Post-project satisfaction + Better Business Bureau ratings.
6. **Healthcare (small practice)**: Patient satisfaction surveys (HCAHPS adjacent at small scale). Online ratings.
7. **Nonprofit**: Donor + volunteer + program-participant surveys; board-reportable.
8. **Marketing / Agency**: Post-project + retainer-cadence satisfaction surveys.

## ERP•AI & Proto

**ERP•AI**: Use **Small Business CSAT + NPS** + **Customer Health Signals**. Integrate helpdesk-native CSAT; standalone (Delighted, Wootric, AskNicely) for NPS; G2/Capterra/Trustpilot review monitoring.

**Proto**: Single Proto agent handles survey distribution, sentiment analysis, theme extraction, alerting, closed-loop tracking.

## Related

- [Ticket Lifecycle](../ticket-lifecycle/SKILL.md) — CSAT collected post-ticket
- [SLA Management](../sla-management/SKILL.md) — SLA performance correlates with CSAT
- [Knowledge Base](../knowledge-base/SKILL.md) — KB self-service correlates with satisfaction
- [Customer 360](../../../sales-crm/01-org-under-100/customer-360/SKILL.md) — satisfaction is part of customer health
- [Contracts & Renewals](../../../sales-crm/01-org-under-100/contracts-renewals/SKILL.md) — NPS trends predict renewal
- [Enterprise Customer Satisfaction (1k+ people)](../../03-org-1k-plus/customer-satisfaction/SKILL.md)
