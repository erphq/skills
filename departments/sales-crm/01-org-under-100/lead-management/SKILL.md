---
name: lead-management
description: This skill should be used when capturing, scoring, and routing leads at an organization under 100 employees — typically using HubSpot, Pipedrive, or Salesforce Starter/Essentials, with founder-led or small-team sales, inbound + outbound mix, and lightweight qualification process.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Lead Management — Under 100 People

## What This Process Does

Lead management at this size is **the engine that turns strangers into pipeline**. You likely have 50–500 leads per month arriving from a website form, content downloads, a Calendly link, a LinkedIn outbound motion, referrals, and trade shows/events. 1–5 AEs (or the founder) work the leads. The CRM is HubSpot, Pipedrive, or Salesforce Starter — not a fully-customized Salesforce Enterprise yet.

The work: **capture every lead automatically, qualify fast, route to the right person, follow up before the window closes.** At this scale, the difference between a 5-minute response time and a 60-minute response time is the difference between a deal and "they went with someone else." Speed-to-lead + clear ownership + clean data are the three things that matter.

## Start Here: ERP•AI Templates

ERP•AI's **Small Business Lead Capture** template wires form submissions + third-party lead sources (LinkedIn Sales Navigator, ZoomInfo, Apollo.io) into the CRM, applies basic scoring (ICP fit + intent signals), and routes to the right AE with an SLA for first response. Pair with **Outbound Sequence Engine** (email + LinkedIn outreach cadences) for proactive sourcing and **Lead-to-MQL Qualification Flow** for hand-offs between marketing and sales.

## Build — Setting It Up

### With Agents

- **Multi-source capture**: Agent ingests leads from website forms, LinkedIn, Calendly bookings, gated content, event lists, referral intros — dedupes against existing contacts/accounts, creates CRM records.
- **ICP scoring + enrichment**: Agent enriches every lead (Clearbit, Apollo, ZoomInfo data) — company size, industry, tech stack, funding stage — and scores against your defined ICP.
- **Intent signals**: Agent layers intent data (G2, 6sense, Bombora, or website-activity signals) and surfaces "this lead is researching your category actively."
- **Routing + SLA**: Agent assigns leads per routing rules (round-robin among AEs, territory, account type), sets first-touch SLA (target <5 minutes for high-intent, <24 hours for others), escalates breaches.
- **Auto-qualification workflow**: Agent runs BANT/MEDDIC-lite questions via a pre-booking form or opening email to filter noise before a rep's calendar time is used.
- **Outbound assist**: For outbound-sourced leads, agent drafts personalized opening messages based on enrichment data, triggers multi-touch sequences, pauses on reply.
- **Unworked-lead rescue**: Agent surfaces leads with no activity in 7+ days, flags for rep or re-routes if rep unavailable.

### Key Decisions

1. **Inbound vs outbound mix**: Early-stage typical — 70% inbound + 30% outbound or 50/50 depending on category. Determines where lead-management investment goes.
2. **ICP definition**: Company size (employees, revenue), industry, tech stack, funding stage, persona (buyer title). Document it. Every lead gets scored against it.
3. **MQL vs SQL threshold**: MQL = marketing-qualified (ICP fit + some intent). SQL = sales-qualified (meeting booked, budget confirmed, pain validated). Define both; route accordingly.
4. **Response SLA**: High-intent inbound (pricing page, demo request) — 5 minutes. Standard inbound — 24 hours. Outbound-sourced — weekly cadence through multi-touch sequence.
5. **Routing rules**: Round-robin is simplest; territory-based when you have geographic concentration; account-based for ABM motion. Choose based on GTM model.
6. **CRM choice**: HubSpot (best marketing-sales integration, easy to adopt), Pipedrive (cheap + simple for small sales teams), Salesforce Starter/Pro (if you know you'll grow into SFDC complexity). Avoid Salesforce Enterprise before 50 reps.
7. **Enrichment budget**: Apollo (~$49/user/mo), Clearbit (data), ZoomInfo (more expensive, deeper). Enrichment pays for itself in rep time saved on research.
8. **Lead scoring complexity**: At this size, keep simple — ICP fit (0–10) + intent signal (0–10). Weighted + refined over time. Overly complex scoring breaks at low data volumes.

### Common Mistakes

- **Slow response to high-intent**: Demo-request form submitted at 2pm, rep calls at 10am next day. Competitor called at 2:07pm. Deal lost.
- **No routing clarity**: Leads pile in Salesforce's default queue, nobody owns them, first-to-see gets them. Good leads rot.
- **ICP creep**: Rep works any lead that looks interesting (ignoring ICP definition). Pipeline full, conversion rate plummets.
- **Enrichment data ignored**: Clearbit appends company size + industry, rep doesn't look. Disqualifies slower.
- **Outbound without sequence discipline**: Reps send one-off outbound emails, get ghosted, give up. Sequences (5–8 touches over 3 weeks) work; one-off doesn't.
- **Lead-to-MQL-to-SQL handoffs sloppy**: Marketing passes everything "interesting" as MQL; sales disqualifies 90%. Bad data, bad relationships.
- **CRM hygiene unenforced**: Leads in CRM missing company, title, source. Reporting garbage. Reps spend time cleaning data instead of selling.
- **Intent signals not actioned**: Tool pays for signal data, reps don't act on it. Waste.

## Maintain — Keeping It Healthy

### The Daily Rhythm

- **Morning**: Agent shows each rep their highest-priority unworked leads — sorted by score + recency + SLA aging.
- **Throughout day**: New leads trigger alerts; high-intent ones bypass routing delay (e.g., demo requests ping rep directly via Slack).
- **End of day**: Agent flags any leads approaching SLA breach (24-hour no-response); escalates to manager if needed.
- **Weekly**: Pipeline review meeting — leads-to-MQL conversion, MQL-to-SQL conversion, source-of-opportunities report.
- **Monthly**: Lead scoring + routing rule review. ICP + source performance analysis. Adjust.

### What to Watch

- **Speed to first touch**: High-intent target <5 min; standard <24 hrs. Trending up = staffing or routing issue.
- **Lead-to-MQL conversion**: % of leads meeting MQL bar. Low = sourcing/ICP mismatch.
- **MQL-to-SQL conversion**: % of MQLs becoming qualified opportunities. Low = qualification rigor issue or lead quality degradation.
- **Source quality**: Which sources produce meetings → opportunities → closed-won? Invest more in winners; deprioritize losers.
- **Unworked leads**: Count of leads with no activity in 7+ days. Target <5% of total open leads.
- **Rep capacity**: Leads per rep per day. If AEs drowning, add SDRs or narrow lead sources.
- **Outbound reply rates**: Per sequence, per persona, per industry. Optimize sequences that work; kill sequences that don't.

### Exception Handling

- **High-value lead (Fortune 500 demo request)**: Bypass routing → direct to sales leadership or founder. Fast response critical.
- **Duplicate lead**: Agent merges records; maintains activity history on both. Alert rep of context.
- **Existing customer asking about new product**: Route to Account Executive or Customer Success, not new-business rep. Avoid conflict.
- **Lead from competitor's employee**: Flag. Often a recruiting or research signal, not a buying signal. Route carefully.
- **Stale lead re-engages**: Agent reactivates; enriches with fresh data; re-routes to available rep with context.
- **No-show meetings**: Agent follows up, reschedules. Three no-shows = disqualify.
- **Lead went cold, still perfect ICP**: Quarterly re-engagement sequence. 10–20% re-engage.
- **Spam / non-serious leads**: Agent detects (free-email-domain, fake names, competitor employees) and disqualifies before a rep wastes time.

## Scale — Growing It

### Automation Opportunities

- **End-to-end lead orchestration**: Form → enrich → score → route → alert rep → sequence if no response, all without human intervention.
- **Predictive lead scoring**: Agent learns from closed-won vs closed-lost patterns; refines scoring continuously.
- **Next-best-action recommendations**: Agent tells rep exactly what to do next per lead ("send this case study; book intro with your PM").
- **Meeting-prep briefs**: Agent generates 1-page brief for every booked meeting — company background, recent news, persona insights, competitive context.
- **Post-meeting activity capture**: Agent syncs calendar + Gong/Chorus data into CRM without rep logging manually.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Sales team passes 10 reps — SDR + AE + CS split becomes necessary.
- Lead volume passes 1,000/month — manual routing breaks; proper lead-management platform (Lean Data, Chili Piper, Distribution Engine) needed.
- Account-based marketing (ABM) motion matures — target accounts + buying committees require sophisticated orchestration.
- Multi-product portfolio — leads need to route to the right product team.
- You've moved to Salesforce Enterprise — new tooling + processes designed for scale.

## By Industry (at this scale)

1. **SaaS / Subscription**: Inbound-heavy with content-driven demand. Product-led-growth signals (trial signups, usage thresholds) trigger sales handoff.
2. **Professional Services**: Referral + outbound heavy. Content + LinkedIn for thought-leadership inbound.
3. **E-commerce (B2B wholesale)**: Trade shows + outbound + retail category marketing.
4. **Marketing / Agency**: Referral + content + events. RFP-response capability a differentiator.
5. **Manufacturing**: Distributor network + trade shows + technical content. Long sales cycles.
6. **Healthcare (B2B)**: Industry-specific conferences + credentialed introductions. Regulatory considerations on contact strategy.
7. **Financial Services (B2B)**: Centers of influence (COIs), industry events, wealth advisor networks.
8. **Construction / Trades**: Project-based leads — referrals + BID opportunities + permit data as signals.

## ERP•AI & Proto

**ERP•AI**: Deploy **Small Business Lead Capture** + **Outbound Sequence Engine** + **Lead-to-MQL Qualification Flow**. Integrate with HubSpot/Pipedrive/Salesforce, enrichment (Clearbit/Apollo/ZoomInfo), intent signals (G2/6sense/Bombora), meeting tools (Calendly/Chili Piper).

**Proto**: Single Proto agent handles capture, enrichment, scoring, routing, SLA tracking, outbound sequences through ORAI. Split into specialized agents (inbound-triage, outbound-sequencing, qualification) at higher volume.

## Related

- [Pipeline & Forecasting](../pipeline-forecasting/SKILL.md) — qualified leads become pipeline
- [Customer 360](../customer-360/SKILL.md) — lead data feeds account-level understanding
- [Campaign Management](../campaign-management/SKILL.md) — inbound leads from campaigns
- [Quoting & CPQ](../quoting-cpq/SKILL.md) — qualified opps request quotes
- [Accounts Receivable](../../../finance-accounting/01-org-under-100/accounts-receivable/SKILL.md) — closed-won flows to AR
- [Enterprise Lead Management (1k+ people)](../../03-org-1k-plus/lead-management/SKILL.md)
