---
name: lead-management
description: This skill should be used when capturing, scoring, and routing leads at an organization of 100-1,000 employees — typically a RevOps/MOPs team managing Salesforce Enterprise, HubSpot Professional/Enterprise, or Marketo, with SDR/AE/CS functional split, sophisticated scoring (fit + intent + engagement), and lead-routing platforms (LeanData, Chili Piper, Distribution Engine).
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Lead Management — 100 to 1,000 People

## What This Process Does

Lead management at this scale is **a high-throughput engine run by a Marketing Ops or RevOps team** coordinating 5–40 sales development reps, 10–80 account executives, and a marketing org generating inbound at volume (500–10,000 leads/month). Salesforce Enterprise is typical for CRM; HubSpot Pro/Marketo is typical for marketing automation; LeanData, Chili Piper, or Distribution Engine handle sophisticated lead routing. Lead-scoring models combine fit (ICP), intent (6sense, Bombora, G2), and engagement (email, website, content). Conversion rates at each funnel stage are tightly measured + optimized.

The work: **hit MQL volume targets, maintain MQL quality (MQL→SQL→opp→closed-won conversion rates), enable specialized SDR/AE functions, and scale responsibly as inbound and outbound motions mature.** Speed-to-lead stays critical (5-minute SLA for high-intent), but at volume the optimization focus shifts to handoff quality (MQL-SQL acceptance rate, disqualification reasons), routing precision (right lead to right rep), and attribution rigor (which channels drive pipeline).

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Lead Operations** template provides lead-capture (multi-source), sophisticated scoring (fit + intent + engagement), routing with ABM support, SDR → AE handoff workflows, and funnel-analytics dashboards. Pair with **ABM Orchestration** for named-account playbooks and **Outbound Sequence Platform** integration (Outreach, Salesloft) for rep productivity.

## Build — Setting It Up

### With Agents

- **Multi-source capture + dedupe**: Agent ingests leads from forms, chat, content downloads, events, paid campaigns, referrals, partner integrations. Dedupes against contacts + accounts using fuzzy matching (domain, email, name patterns).
- **Sophisticated scoring**: Agent runs multi-dimensional scoring — ICP fit (firmographic + tech stack + funding), intent (6sense/Bombora/G2 signals), engagement (email clicks, content downloads, website pages), recency (decay on stale signals). Threshold drives MQL designation.
- **Intent-data orchestration**: Agent enriches + correlates intent signals — "ACME is showing surge intent on your category + competitors" triggers priority routing to the account owner.
- **Routing engine**: Agent routes leads by territory (geo/segment/vertical), account ownership (if existing), SDR/AE assignment, capacity-balancing. Handles overflow and round-robin with business-rule complexity.
- **Meeting-booking orchestration**: Chili Piper/Calendly integration books meetings directly from inbound; SDR-assisted booking for higher-intent leads.
- **SDR → AE handoff**: Structured handoff (SDR qualifies → AE accepts/rejects with reason). Agent tracks handoff quality; coaches on rejection patterns.
- **Outbound coordination**: Agent feeds outbound sequences (Outreach, Salesloft, Groove) with prioritized account lists; tracks reply rates, sequence performance.
- **Attribution + analytics**: Agent maintains first-touch + multi-touch attribution, lead source quality scorecards, funnel conversion dashboards.

### Key Decisions

1. **Lead-scoring model**: Fit + Intent + Engagement, weighted. Start with data + refine quarterly. Model complexity should match data volume — over-engineered model at low data = noise.
2. **Routing engine**: LeanData (most sophisticated), Distribution Engine (robust), Chili Piper (meeting-booking focused + routing), Salesforce native Flow (simpler). Commitment + cost increase with sophistication.
3. **SDR/AE split policy**: SDR qualifies inbound + outbound-to-meetings; AE takes meetings to close. SDR-to-AE ratio typically 2:1 in inbound-heavy orgs, 1:1 in outbound-heavy.
4. **Meeting-SLA tiering**: <5 min for high-intent (demo request, pricing page); <1 hour for mid-intent; <24 hours for low-intent nurture. Dependent on rep capacity + coverage hours.
5. **ABM coverage**: Named-account lists per AE (100–300 accounts each typical). ABM-specific orchestration + playbooks. Target-account routing overrides normal routing for named accounts.
6. **MQL-SQL acceptance SLA**: AE accepts/rejects MQL within 24 hours. Rejection requires reason code (not ICP, bad contact, timing, etc.). Rejection feedback loops to marketing.
7. **Attribution approach**: First-touch + multi-touch + last-touch. Each tells different story. Revenue-credit model (U-shaped, W-shaped, or time-decay) aligned with GTM strategy.
8. **Data enrichment stack**: ZoomInfo + Clearbit + Apollo often combined. Cost $50–200K/year at mid-market. Agent reconciles + prioritizes sources.

### Common Mistakes

- **Routing complexity outpacing team maturity**: 15-factor routing rules that nobody can debug. Keep simpler where possible; document exhaustively.
- **Score inflation**: Scoring model doesn't decay; accounts show as "hot" forever. Calibration + decay policy needed.
- **MQL volume over quality**: Marketing incentivized on MQL count; floods sales with junk. Joint metrics on SQL-acceptance rate + sourced pipeline.
- **SDR/AE handoff friction**: Tribal knowledge on what makes an accepted SQL. Document + train + audit rejection reasons.
- **Routing rules not aligned with compensation**: SDR paid on demos set, routed based on territory — rep games territory rules. Alignment required.
- **Intent data under-utilized**: Team pays for 6sense/Bombora, signals arrive, reps don't act on them. Operationalize via playbooks + coaching.
- **Data-quality decay**: Enrichment happens at creation; contact data ages; no refresh cadence. Quarterly enrichment refresh + data-quality monitoring.
- **Attribution religion**: Team insists on single-touch attribution, misses multi-channel reality. Acknowledge multi-touch; use as guide not gospel.
- **Tools proliferation without integration**: 8 point solutions, disconnected data, manual reconciliation. Consolidate or invest in integration layer (Hightouch, Census).

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent captures, enriches, scores, routes leads in real-time.
- **Daily**: SDR + AE pipeline standup. Inbound-queue review. High-intent immediate attention.
- **Weekly**: Funnel metrics (MQL, SQL, Opp, CW) with source + rep breakdown. Rejection-reason analysis. Sequence-performance tuning.
- **Monthly**: Scoring-model review. Attribution analysis. Rep capacity + territory coverage. Tool-utilization audit.
- **Quarterly**: Comprehensive ICP + scoring-model calibration. Routing-rule refinement. Lead-source quality deep-dive. Cost-per-MQL + Cost-per-Opp analysis.

### What to Watch

- **Speed to first touch**: High-intent <5 min, mid <1 hour, low <24 hrs. Breach monitoring.
- **MQL volume + quality**: Volume trending vs plan; quality via SQL-acceptance rate (target 60–80%).
- **SQL-to-opportunity conversion**: 50–70% typical. Low = rep disqualifying at opportunity stage (bad SQL definition).
- **Pipeline velocity**: Opportunity to closed-won cycle time. Watch stage durations.
- **Source-of-pipeline**: Distribution of $ sourced by channel. Enables investment decisions.
- **Rep capacity utilization**: Leads per rep per day vs target. Over-capacity = hire more; under-capacity = scale inbound or outbound.
- **Routing accuracy**: % of leads routed correctly. Target 98%+. Errors investigated.
- **Attribution-model integrity**: Data consistency across systems; touch-point capture completeness.

### Exception Handling

- **High-value inbound (Fortune 500 demo request)**: Bypass normal routing; alert sales leadership; account research initiated immediately.
- **Existing customer inbound**: Route to CSM/AM or CS-and-sales-joint motion. Avoid new-business rep touching current customers.
- **Partner-referred lead**: Apply partner credit per partnership agreement. Route to joint-selling rep.
- **Duplicate lead (common)**: Merge cleanly preserving activity. Alert rep.
- **Spam/junk volume spike**: reCAPTCHA + email validation + phone validation + form-field-hardening. Agent flags pattern for review.
- **Specific account on Do-Not-Contact list (compliance reasons)**: Agent blocks routing. Flag for review.
- **ABM account contact arrives via inbound**: Agent detects; routes to named-account AE regardless of normal routing.
- **Rep unavailable (PTO, coverage issue)**: Agent re-routes to backup or round-robin. No lead orphaned.

## Scale — Growing It

### Adding Complexity

- **Multi-product lead management**: Product-specific routing, scoring, AE assignment. Prevents lead "for Product A" going to "AE for Product B."
- **Multi-motion (inbound + outbound + channel + product-led)**: Each motion with distinct lead lifecycle. Attribution complex.
- **International operations**: Time-zone-aware SLA, localized routing, country-specific lead sources.
- **Self-serve + sales-assisted (PLG)**: Product-signup leads routed based on usage signals + size signals.
- **Partner-generated leads**: Deal registration, partner attribution, revenue split complexity.

### Automation Opportunities

- **AI-driven lead scoring**: Model learns from closed-won patterns; refines weights continuously.
- **Conversational AI for immediate engagement**: Chatbot handles initial qualification for low-risk inbound; schedules meetings.
- **Predictive routing**: Agent learns which rep-lead matches convert best; routes accordingly.
- **Intent-driven outbound**: Agent identifies accounts in surge-intent; automatically triggers outbound sequences to known contacts.
- **Attribution-model optimization**: Agent continuously refines multi-touch model based on outcomes.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Lead volume >10,000/month — dedicated marketing-ops + sales-ops teams with specialized roles.
- Multi-country operations — regional SDR + AE structures with local playbooks.
- Full ABM motion — dedicated ABM infrastructure (Demandbase, 6sense orchestration, dedicated target-account teams).
- Product-led-growth + sales-led coexisting — sophisticated PLG-to-sales handoff playbooks.
- Enterprise marketing automation (Marketo + Bizible, Eloqua, Pardot + Salesforce) business-critical.

## By Industry (at this scale)

1. **SaaS / Subscription**: Content + paid + events + outbound mix. ICP segments (SMB/MM/Enterprise) with distinct routing. PLG signals feed sales.
2. **Professional Services**: Thought-leadership-driven inbound; industry events; partner referrals. ABM to target-account industry vertical.
3. **E-commerce (B2B)**: Trade shows + distributor partnerships + merchandiser-referral. Long sales cycles.
4. **Manufacturing**: Technical content + conferences + distributor channel. Complex-product lead qualification.
5. **Healthcare (B2B)**: Industry-specific events + credentialed introductions + regulatory-compliant messaging.
6. **Financial Services (B2B)**: COI networks + wealth-advisor referrals + industry conferences. Regulatory constraints on contact.
7. **Construction / Trades**: Project-pipeline data (Dodge, BuildingConnected) + bid opportunities. Referral-heavy.
8. **Marketing / Agency**: Portfolio + case studies + RFP responses. Strong referral network.
9. **Education / Nonprofit (B2B)**: Institution-type segmentation; funding-source alignment; academic-calendar-driven.
10. **Real Estate / Property**: Market-data-driven prospecting + referral networks.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Lead Operations** + **ABM Orchestration**. Integrate with Salesforce/HubSpot Enterprise, Marketo, 6sense/Bombora/G2 intent data, ZoomInfo/Clearbit/Apollo enrichment, LeanData/Chili Piper routing, Outreach/Salesloft sequencing.

**Proto**: Specialized Proto agents — capture agent, enrichment agent, scoring agent, routing agent, ABM orchestration agent, sequence-optimization agent, attribution agent. Shared lead + account state.

## Related

- [Pipeline & Forecasting](../pipeline-forecasting/SKILL.md) — qualified leads feed pipeline
- [Customer 360](../customer-360/SKILL.md) — lead data becomes account history
- [Campaign Management](../campaign-management/SKILL.md) — campaigns generate leads; attribution ties back
- [Territory Management](../territory-management/SKILL.md) — territory drives routing
- [Small-Org Lead Management (<100 people)](../../01-org-under-100/lead-management/SKILL.md)
- [Enterprise Lead Management (1k+ people)](../../03-org-1k-plus/lead-management/SKILL.md)
