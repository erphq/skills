---
name: campaign-management
description: This skill should be used when planning and running marketing campaigns at an organization under 100 employees — typically a small marketing team (1-5 people), HubSpot/Mailchimp/Marketo for email, LinkedIn/Google Ads for paid, Webflow/HubSpot CMS for landing pages, and attribution through UTM + CRM reporting.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Campaign Management — Under 100 People

## What This Process Does

Campaign management at this size is **the rhythm of creating, launching, measuring, and iterating on marketing programs that generate pipeline.** A small marketing team (1–5 people, often including a founder-marketer or a head of marketing + 1–2 ICs) runs 3–10 campaigns per quarter — content-driven inbound (SEO, blog, whitepapers, webinars), paid acquisition (Google Ads, LinkedIn Ads), ABM outbound, email nurture, and events. HubSpot/Marketo/Mailchimp for email automation; Webflow/HubSpot CMS for landing pages; UTM tagging + CRM attribution for measurement.

The work: **ship campaigns fast, attribute outcomes honestly, and compound learnings.** At this scale, a well-run campaign engine is the difference between predictable pipeline and "why is August slow?" panic. Marketing team owns sourced-pipeline metric; sales owns closing; alignment on pipeline targets drives cadence.

## Start Here: ERP•AI Templates

ERP•AI's **Small Business Campaign Engine** template provides campaign planning (OKRs, targets, channel allocation), landing-page templates (high-converting patterns), email-nurture sequences, paid-campaign briefs, attribution tracking (first-touch + multi-touch), and post-campaign analysis. Pair with **Marketing Ops Dashboard** for campaign performance and **Content Library** for asset management.

## Build — Setting It Up

### With Agents

- **Campaign planning**: Agent supports campaign brief — target audience, offer, channel mix, timeline, budget, targets (leads, MQLs, pipeline $). Reviewer approves.
- **Landing-page generation**: Agent drafts landing pages from campaign brief using high-converting patterns. Connects to form-submission workflow, UTM capture.
- **Email-sequence creation**: Agent drafts nurture sequences (5–8 emails, tuned to campaign offer + persona). Scheduled + personalized via HubSpot/Marketo/Mailchimp.
- **Paid-campaign launch**: Agent generates Google/LinkedIn Ads campaigns from brief — audience targeting, creative, ad copy, budget pacing. Monitors daily.
- **Webinar + event orchestration**: Agent manages webinar promotion (email, paid, content), registration, reminder sequences, post-event follow-up.
- **Attribution tracking**: Agent captures UTM parameters on every touch, maps to CRM contacts + deals, calculates first-touch + multi-touch attribution.
- **Performance monitoring**: Real-time dashboards — MQLs generated, cost-per-MQL, conversion rates, sourced-pipeline, ROI.
- **Iteration support**: Post-campaign analysis — what worked, what didn't, what to try next. Iteration captured in knowledge base.

### Key Decisions

1. **Channel mix**: Typical early-stage: content/SEO (30–40%), paid (30–40%), events/webinars (10–20%), outbound (10–20%), partnerships/community (10%). Evolves per category + ICP.
2. **Budget allocation**: 5–15% of revenue typical for growth-stage B2B (higher for earlier-stage; lower for mature). Channels weighted per CAC + scalability.
3. **MQL definition**: Aligned with sales (from lead-management skill). Too loose = bad sales handoff; too tight = overfiltering real demand.
4. **Campaign lifecycle (planned → live → retrospective)**: Every campaign has brief + launch + measurement + retro. Skipping any step = learnings lost.
5. **Attribution model**: First-touch (credit first channel); last-touch (credit last channel); multi-touch (distribute credit). Multi-touch more accurate but more complex. Start with first + last; evolve.
6. **Content strategy + velocity**: 2–8 pieces of substantive content per month (blog, whitepaper, webinar, video). Velocity matters more than perfection for SEO + thought leadership.
7. **ABM vs demand-gen mix**: ABM for targeted-enterprise motion; demand-gen for volume-driven sales. Most at this scale start demand-gen-heavy and layer in ABM as ACV grows.
8. **Tools stack**: HubSpot (all-in-one Marketing + CRM + CMS) simplest for under-100 orgs; Marketo + Salesforce for larger motions; Mailchimp + Webflow for lean. Consolidation beats best-of-breed at this scale.

### Common Mistakes

- **Campaigns without briefs**: Launch first, figure out target + measurement later. No way to iterate.
- **UTM discipline missing**: Ad clicks show up as "direct traffic" in CRM. Attribution breaks. Rigorous UTM tagging on every outbound URL.
- **Content without distribution**: Blog post published, nobody promotes it, 50 views in month 1. Distribution plan = 50% of content work.
- **Vanity metrics**: Celebrating impressions + opens + pageviews without tracking pipeline impact. Marketing-bubble activity without business outcome.
- **No post-campaign retro**: Campaigns end, team moves on. Same mistakes repeat next quarter.
- **Paid-campaign neglect**: Launch, set budget, forget. Campaigns drift; poor-performers drain budget. Daily monitoring + weekly optimization.
- **MQL-to-sales handoff weak**: Marketing declares MQL; sales disqualifies 80%. Joint definition + feedback loop essential.
- **Event ROI unclear**: $25K trade show — how many opportunities? Measurement weak. Treating events as "brand investment" without pipeline target.
- **Brand inconsistency**: Different campaigns with different voice/design/messaging. Confusing to prospects.

## Maintain — Keeping It Healthy

### The Rhythm

- **Weekly**: Campaign-performance review — metrics, pacing, optimization levers. Paid-campaigns daily check-in.
- **Monthly**: Cross-campaign performance review. MQL + pipeline source-of-truth reporting. Budget adjustments.
- **Quarterly**: Campaign planning for next quarter — OKRs, targets, channel allocation, content calendar.
- **Per-campaign**: Brief → launch → mid-campaign review → end-of-campaign retro → iteration notes.

### What to Watch

- **MQL volume**: vs plan, vs prior period. Trending down = campaign or channel issue.
- **Cost per MQL**: by channel. Paid scaling = CAC watching.
- **MQL-to-SQL conversion**: handoff quality check. Declining = MQL definition drift or lead quality.
- **Sourced pipeline**: $ of pipeline attributed to marketing campaigns. Primary marketing-contribution metric.
- **Pipeline-to-closed-won conversion**: per campaign-source. Different channels convert differently.
- **Content performance**: Traffic + engagement + lead-gen per content piece. Winners get republished, promoted, repurposed.
- **Event ROI**: $ invested → pipeline generated → closed-won. Measure within 6–12 months.
- **Email performance**: Open rate, click rate, unsubscribe rate. Benchmark + optimize.

### Exception Handling

- **Campaign underperforms by 50%**: Mid-campaign review + intervention. Adjust creative, targeting, budget, offer. Kill if unsalvageable.
- **High-volume lead spike**: Validate quality before routing to sales (spam bot? scraper?). Rate-limit if real + overwhelming sales.
- **PR crisis mid-campaign**: Pause campaigns. Messaging review. Adjust + restart when appropriate.
- **Creative-approval delay**: Campaign brief went to legal, 2-week review. Plan calendar to accommodate.
- **Attribution disagreement**: Sales credits referral; marketing credits paid-campaign that influenced. Multi-touch attribution surfaces shared credit.
- **Tool outage (email-send fails)**: Support + communication with customers. Compensate later if material miss.
- **Compliance issue (CAN-SPAM, GDPR)**: Legal review. Content/opt-in adjustments. Documented compliance approach.
- **Budget cut mid-quarter**: Reassess campaign priorities — protect highest-ROI channels; cut experimental + lowest-performers.

## Scale — Growing It

### Automation Opportunities

- **Campaign-generation agent**: Agent drafts campaign briefs, landing pages, emails, paid-campaign structures from strategic input.
- **Predictive campaign-performance**: Agent forecasts MQL + pipeline based on campaign characteristics + historical patterns.
- **Real-time optimization**: Agent optimizes paid-campaign bids, audience targeting, creative rotation continuously.
- **Content-performance optimization**: Agent identifies high-performing content patterns, suggests new content topics based on pipeline impact.
- **Multi-touch attribution refinement**: Agent continuously improves attribution model from closed-won outcomes.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Marketing team passes 10 people — specialization (demand gen, content, events, ops) emerges.
- Multi-product or multi-segment — campaign portfolio complexity.
- ABM becomes a distinct motion with dedicated orchestration.
- Marketing-automation investment justified — Marketo, Eloqua, Pardot integration with enterprise CRM.
- Attribution function matures — dedicated marketing-analytics team.

## By Industry (at this scale)

1. **SaaS / Subscription**: Content-marketing-heavy. Product-led-growth signals as campaign targets. Free-trial + freemium funnel optimization.
2. **Professional Services**: Thought-leadership content + industry events. Account-based approach for enterprise.
3. **E-commerce (B2B)**: Product-catalog SEO + paid search + trade shows. Channel-partner enablement.
4. **Manufacturing (B2B)**: Technical content + trade shows + distributor enablement. Long sales cycles require long nurture.
5. **Healthcare (B2B)**: Industry-specific media + conferences + peer-referral networks. Compliance-constrained messaging.
6. **Financial Services (B2B)**: Regulated content review + compliance-bound messaging. Event-heavy.
7. **Marketing / Agency**: Portfolio-driven credibility. Content-marketing via own work as case studies.
8. **Construction**: Trade publications + project-specific marketing + referral networks.

## ERP•AI & Proto

**ERP•AI**: Deploy **Small Business Campaign Engine** + **Marketing Ops Dashboard** + **Content Library**. Integrate with HubSpot/Marketo/Mailchimp, Google Ads/LinkedIn Ads, CMS (Webflow/HubSpot), events tools (Bizzabo, Hopin, Zoom Events), attribution tools.

**Proto**: Specialized Proto agents — campaign-planning agent, landing-page agent, email-sequence agent, paid-campaign agent, attribution agent, performance-analytics agent.

## Related

- [Lead Management](../lead-management/SKILL.md) — campaign leads flow to lead-management
- [Customer 360](../customer-360/SKILL.md) — campaign interactions feed 360
- [Pipeline & Forecasting](../pipeline-forecasting/SKILL.md) — sourced pipeline from campaigns
- [Contracts & Renewals](../contracts-renewals/SKILL.md) — customer campaigns drive renewal + expansion
- [Budgeting & Forecasting](../../../finance-accounting/01-org-under-100/budgeting-forecasting/SKILL.md) — marketing budget ties to revenue plan
- [Enterprise Campaign Management (1k+ people)](../../03-org-1k-plus/campaign-management/SKILL.md)
