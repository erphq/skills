---
name: campaign-management
description: This skill should be used when the task involves plan marketing campaigns, segment your audience, execute across channels, track what influenced revenue, and prove ROI.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - crm
  type: skill
  scope: internal
---
# Campaign Management

## What This Process Does

Campaign management is how you plan, execute, and measure your marketing efforts to generate demand for your sales team. It covers the entire lifecycle: figuring out who you want to reach (audience segmentation), creating the right message and offer (campaign planning), getting it in front of them across the right channels (execution), tracking who responded and what they did next (attribution), and proving that the money you spent actually generated revenue (ROI tracking). Without a system, marketing sends emails to the entire database, can't tell which campaigns generated pipeline, spends budget on channels that don't work, and gets blamed by sales for "bad leads." With a system, you know exactly which campaigns drive revenue, which audiences respond best, and where your next marketing dollar should go. This isn't about creative — it's about the operational machinery that makes campaigns work and makes their impact measurable.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. The CRM module includes a Campaign doctype for tracking campaigns and linking them to leads and opportunities. The Email Campaign feature handles email sequences. The Website module includes web forms and landing pages for lead capture. ERP•AI's Newsletter tool manages email distribution. Deploy the CRM and Website modules, set up your campaign tracking structure, and build your email templates. The built-in lead source tracking on the Lead doctype connects campaigns to leads automatically.

## Build — Setting It Up

### With Agents

Tell your agent: "Set up campaign management for our marketing team. We run email campaigns, webinars, trade shows, and digital ads targeting [describe your audience]." The agent will:

- Create a campaign taxonomy (campaign type, channel, target audience, offer, budget) so every campaign is consistently categorized
- Build audience segments based on your customer and lead data (by industry, company size, role, engagement level, product interest)
- Set up email campaign templates with dynamic personalization fields
- Configure landing pages and web forms that capture leads and tag them with the source campaign
- Create a campaign calendar showing all planned campaigns, channels, and key dates
- Build attribution tracking that connects campaigns to leads to opportunities to closed-won revenue
- Set up campaign performance dashboards showing cost, leads, pipeline, and revenue by campaign
- Configure A/B testing workflows for email subject lines, send times, and content variations
- Create budget tracking tied to campaigns so marketing can see spend vs. return

### Key Decisions

**Attribution model: first-touch, last-touch, multi-touch, or custom?** First-touch credits the campaign that first captured the lead. Last-touch credits the campaign that happened right before the deal closed. Multi-touch distributes credit across all campaigns that influenced the deal. First-touch is simplest but undervalues nurture. Multi-touch is most accurate but harder to implement. Start with first-touch and layer on multi-touch when you have the data infrastructure.

**Campaign hierarchy: flat or structured?** A flat list of campaigns works when you run 20 per year. At 100+ campaigns, you need structure: Campaign Program > Campaign > Campaign Tactic. Example: Product Launch (program) > Webinar Series (campaign) > Individual Webinar (tactic). Structure enables roll-up reporting.

**Segmentation approach: static or dynamic?** Static segments are built once (all healthcare companies with 500+ employees). Dynamic segments update automatically as data changes (all leads who opened an email in the last 30 days). Dynamic is more powerful but requires data integrity and real-time updates.

**Channel strategy: few and deep, or broad and thin?** With a limited budget, it's better to dominate two channels than be mediocre across ten. Pick the channels where your audience actually spends time. For B2B, this is usually email + content + events. For B2C, it might be social + search + email.

**Budget allocation: fixed or performance-based?** Fixed budgets allocate a set amount per channel or campaign. Performance-based budgets shift money toward what's working mid-quarter. Performance-based is better but requires fast enough measurement to make real-time decisions.

### Common Mistakes

**No campaign-to-revenue tracking.** Marketing reports on leads and clicks but can't show pipeline or revenue impact. If you can't connect a campaign to closed-won revenue, you can't calculate ROI and you can't defend your budget.

**Blasting the entire database.** Sending every email to every contact is lazy and destructive. It kills deliverability (spam complaints, unsubscribes), wastes budget, and trains your audience to ignore you. Segment ruthlessly.

**No control over send frequency.** Three different people on the marketing team each send an email on the same day. The customer gets bombarded. Implement send frequency caps (no more than 2 emails per contact per week) and a campaign calendar that prevents collisions.

**Chasing vanity metrics.** Open rates and click rates feel good but don't pay the bills. Track conversion rate (lead to opportunity) and cost per qualified pipeline dollar. A campaign with a 5% click rate and zero pipeline is worse than a campaign with a 1% click rate and $500K in pipeline.

**Skipping the post-campaign review.** The campaign ends and everyone moves on to the next one. Without reviewing results — what worked, what didn't, what to repeat — you never improve. Build a mandatory post-mortem into every campaign.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Campaign Performance Overview:** For each active campaign, show cost to date, leads generated, pipeline influenced, and revenue attributed. Color-code by ROI (green = above target, red = below). This is the marketing team's primary operating dashboard.

**Channel ROI Report:** Aggregate performance by channel (email, events, paid digital, organic, partner). Show cost per lead, cost per opportunity, and cost per dollar of pipeline. This drives budget allocation decisions.

**Audience Engagement Trends:** Track engagement rates (open, click, respond, attend) over time by segment. Declining engagement in a key segment signals message fatigue or audience shift. Alert when a segment's engagement drops more than 20% month over month.

**Lead Source Waterfall:** Show how leads flow from campaign response to MQL to SQL to opportunity to closed-won. This reveals where leads drop out — is it a sourcing problem (bad leads) or a conversion problem (bad follow-up)?

**Budget vs. Spend Tracker:** Real-time view of marketing budget consumed vs. planned, by campaign and channel. Alert at 80% burn rate so there are no end-of-quarter surprises.

### Exception Handling

**Email deliverability problems:** If bounce rates exceed 2% or spam complaints exceed 0.1%, pause the campaign immediately. Clean your list (remove invalids, suppress complainers) before sending again. Deliverability damage compounds — each bad send makes the next one worse.

**Campaign underperformance:** A campaign is halfway through its budget with results at 50% of target. Decision: optimize and continue, or cut losses and reallocate budget. Have a clear threshold (e.g., pause if CPA is 2x target after 30% of budget spent) and a reallocation process.

**Attribution data gaps:** An opportunity has no campaign source — the lead came in and nobody knows where. This usually means the lead was entered manually without source tracking. Fix the data entry process and implement required fields for lead source. Run a quarterly audit of unattributed pipeline.

**Channel saturation:** You've been running the same ad for three months and performance is declining (ad fatigue). Rotate creative, expand audience targeting, or shift budget to a different channel. Set up automated alerts for declining performance.

**Compliance violations:** An email goes out without an unsubscribe link, or you send to a contact who opted out, or you violate GDPR consent requirements. This is serious — fines and reputation damage. Implement compliance checks as automated gates before any campaign sends.

### Routine Tasks

**Daily (agent-automated):** Update campaign performance metrics, send scheduled campaign communications, flag deliverability issues, process new campaign responses into the lead pipeline.

**Weekly (agent-assisted):** Review active campaign performance, adjust bids and targeting on paid campaigns, update audience segments with new data, review the campaign calendar for conflicts.

**Monthly (human-reviewed):** Campaign ROI review, budget reallocation decisions, content performance analysis, audience segment refresh, competitive campaign monitoring, new campaign planning.

**Quarterly (strategic):** Full marketing performance review, channel strategy assessment, attribution model evaluation, audience persona refresh, budget planning for next quarter, campaign calendar finalization.

## Scale — Growing It

### Adding Complexity

**Multi-channel orchestration:** Instead of running email, events, and ads as separate campaigns, orchestrate them into coordinated programs. A product launch includes a teaser email sequence, a webinar, a targeted ad campaign, a sales enablement kit, and a press release — all timed together and tracked as one program.

**Account-based marketing (ABM):** Instead of individual leads, target accounts. Build campaigns for specific companies or company clusters. Track account-level engagement (multiple people from the same company attending your webinar is a stronger signal than one person). ABM requires tight marketing-sales alignment.

**Personalization at scale:** Move beyond {First_Name} personalization. Customize email content, landing pages, and ads based on industry, role, stage in the buying journey, and past behavior. Dynamic content blocks assemble personalized experiences without building separate campaigns for each segment.

**Global campaigns with local execution:** A global product launch requires local adaptation — language, cultural relevance, regulatory compliance, and channel preferences differ by market. Build a global framework with local flexibility. Track performance both locally and globally.

**Partner co-marketing:** Joint campaigns with technology partners, channel partners, or industry associations. These require shared leads (who gets which leads?), co-branded content, shared budgets, and joint reporting. Define the rules of engagement before launching.

### Automation Opportunities

**AI-generated campaign content:** Agents draft email copy, social posts, ad copy, and landing page text based on your brand voice, target audience, and campaign goals. A human reviews and refines — the agent does the first 80% of the creative work.

**Predictive audience targeting:** Agents analyze your customer data to build lookalike audiences — prospects who resemble your best customers. They identify which attributes (industry, size, technology stack, behavioral patterns) predict conversion and build segments accordingly.

**Automated A/B testing:** Agents set up tests, monitor results, and automatically shift traffic to winning variants. Subject line A outperforms B by 30% after 1,000 sends — the agent switches all remaining sends to A without manual intervention.

**Campaign performance optimization:** Agents monitor real-time campaign performance and make adjustments — increasing bids on high-performing ad placements, pausing underperforming creative, shifting email send times based on engagement patterns.

**Attribution analysis:** Agents map the complete customer journey across touchpoints and calculate influence-weighted attribution. They identify which campaign combinations (the three-touch sequence of webinar + case study + sales call) convert at the highest rate.

### When to Redesign

- More than 40% of your pipeline has no campaign attribution
- Cost per qualified lead has increased more than 25% year over year
- Your marketing team is spending more time on execution than strategy
- Email engagement rates have declined for three straight quarters
- You're launching into new markets or segments with different buying behavior
- Sales and marketing are fundamentally misaligned on lead quality

## By Industry

**1. Manufacturing**
Campaigns center on trade shows, product demonstrations, and technical content (whitepapers, case studies, application guides). Digital ads target engineers and procurement managers on industry-specific platforms. Email campaigns promote new products, certifications, and capacity announcements. Long sales cycles mean nurture campaigns lasting 6-12 months.

**2. Healthcare**
Campaigns must comply with HIPAA (no patient-identifiable information) and FDA regulations (can't make unsubstantiated clinical claims). Physician-targeted campaigns go through medical-legal review. KOL (key opinion leader) engagement programs are a major campaign type. CME (continuing medical education) sponsorships generate leads while providing value.

**3. Education**
Campaign timing follows the academic calendar — decision-makers are reachable August-November and February-May. Conference season (ISTE, EDUCAUSE) is the biggest campaign period. Campaigns targeting professors differ from those targeting administrators. Free pilot programs are the most effective lead generation tactic.

**4. Retail**
Campaigns are seasonal and promotional — Black Friday, back-to-school, holiday. Consumer campaigns use social media, search, email, and in-store promotion. B2B campaigns to retail buyers use trade shows, sample kits, and category data. Campaign velocity is high — you might run 50+ campaigns per quarter.

**5. Hospitality**
Campaigns target meeting planners, travel agents, and corporate travel managers. Fam trips (familiarization tours) are the most effective high-touch campaign. Digital campaigns focus on visual content — virtual tours, event galleries, and guest testimonials. Seasonal campaigns promote off-peak pricing and packages.

**6. Construction**
Campaigns target architects, engineers, general contractors, and owners. Project case studies are the strongest content asset. Lunch-and-learn programs at architecture firms generate leads. Trade show presence (World of Concrete, Greenbuild) is essential. AIA and CSI continuing education credits drive attendance to educational campaigns.

**7. Real Estate**
Residential campaigns use hyper-local targeting — social media ads for specific neighborhoods, direct mail to homeowners in target areas, and open house events. Commercial campaigns target tenant reps and investors with market reports and property tours. Just-listed and just-sold campaigns build neighborhood credibility.

**8. Agriculture**
Campaigns align with the agronomic calendar — seed campaigns in fall/winter, crop protection in spring, harvest equipment in late summer. Field days and demonstration plots are the most effective tactic — farmers need to see it work in their conditions. Farm publications and ag radio still reach this audience effectively.

**9. Banking & Financial Services**
Campaigns promote products (new account bonuses, mortgage rates, business lending programs) and must comply with financial advertising regulations (Reg Z, TILA, FDIC disclosures). Community event sponsorships build local brand. Digital campaigns target life events (first home, retirement, business start) that trigger financial needs.

**10. Insurance**
Campaigns target policyholders before renewal season with retention offers and prospects with competitive rate comparisons. Content campaigns educate about coverage gaps and risk management. Agent recruitment campaigns are a separate but critical campaign track. Digital quoting tools are both a product feature and a campaign conversion mechanism.

**11. Legal**
Law firm campaigns focus on thought leadership — legal alerts, webinars on regulatory changes, and conference speaking. Client seminars are high-touch campaigns for existing relationships. For consumer law firms (personal injury, family law), digital campaigns use search and social with strict bar advertising rules. Rankings and recognition campaigns (Chambers, Best Lawyers) build credibility.

**12. Government**
Marketing to government differs fundamentally — you don't "campaign" in the traditional sense. Instead, you build awareness through government-specific events (industry days), respond to sources sought notices, and build relationships through industry associations (e.g., AFCEA, PSC). Content focuses on past performance and capability demonstrations.

**13. Pharma**
HCP campaigns must pass medical-legal-regulatory (MLR) review before execution. Key campaign types: journal advertising, conference booth and symposia, sampling programs, and speaker programs. Direct-to-consumer (DTC) advertising requires FDA-compliant fair balance disclosures. Patient assistance program campaigns support access and adherence.

**14. Automotive**
Manufacturer campaigns (national advertising, incentive programs) support dealer campaigns (local market advertising, service promotions). Co-op advertising programs share costs between manufacturer and dealer. Digital campaigns target in-market shoppers based on search behavior and third-party intent data. Service retention campaigns drive post-sale revenue.

**15. Telecom**
Campaigns target business buyers with TCO (total cost of ownership) comparisons and technology upgrade messaging. Retention campaigns fire before contract expiration to prevent competitive shopping. Bundle campaigns cross-sell additional services to existing customers. Channel partner campaigns enable resellers to generate demand locally.

**16. Media & Entertainment**
Ad sales campaigns target advertisers with audience data, programming highlights, and ROI case studies. Subscription acquisition campaigns use free trials, content teasers, and promotional pricing. Content marketing (about your content) drives audience growth. Upfront presentations to advertisers are the highest-stakes annual campaign event.

**17. Energy & Utilities**
Utility campaigns promote energy efficiency programs, renewable energy options, and new rate plans. Regulatory requirements often mandate spending on customer education and low-income programs. Solar and wind companies campaign on TCO, environmental impact, and tax incentives. Community engagement campaigns build social license for new projects.

**18. Food & Beverage**
Consumer campaigns use social media, influencer partnerships, and in-store sampling. Trade campaigns target retail buyers with sell-in data, promotional calendars, and category insights. Food shows (PLMA, Fancy Food) are critical for new product launches. Recipe content and lifestyle marketing build brand in digital channels.

**19. Logistics & Transport**
Campaigns target shippers with service capability messaging, lane rate promotions, and technology differentiators (tracking, visibility, APIs). Freight rate campaigns are time-sensitive — spot market promotions have 24-48 hour relevance. Industry event sponsorships (CSCMP, FreightWaves) generate enterprise leads.

**20. Nonprofit**
Campaigns are fundraising appeals (annual fund, capital campaign, giving day), awareness campaigns (cause marketing, advocacy), and event promotion (galas, walks, auctions). Donor segmentation drives personalization — lapsed donors get a re-engagement message, major donor prospects get a cultivation invite. Storytelling is the most effective content strategy.

**21. SaaS / Technology**
Content marketing (blog, webinars, ebooks, podcasts) is the engine. Product-led growth campaigns focus on free trial and freemium conversion. Account-based campaigns target enterprise prospects with personalized content. Developer marketing (documentation, community, hackathons) targets technical buyers. Event campaigns drive pipeline at industry conferences.

**22. Professional Services**
Thought leadership is the primary campaign vehicle — research reports, benchmarking studies, executive roundtables, and conference presentations. Campaign success is measured in relationship development, not immediate leads. Alumni networks are a powerful campaign channel. Credentials-based campaigns (new certifications, industry recognitions) build credibility.

**23. Defense & Aerospace**
"Campaigns" are long-term positioning efforts: white papers on technical capabilities, sponsorship of military conferences (AUSA, Sea-Air-Space, AFA), and demonstrations at events. Industry day participation shapes requirements before RFPs are released. Campaign cycles align with budget cycles and acquisition timelines — multi-year efforts.

**24. Mining**
Campaigns target mining engineers, procurement managers, and mine operators through mining-specific media (Mining Journal, International Mining), industry events (Minexpo, PDAC), and on-site demonstrations. Technical papers and case studies from operating mines are the strongest campaign assets. Commodity price context matters — campaign messaging shifts with market cycles.

**25. Chemicals**
Technical marketing campaigns include application guides, formulation bulletins, and webinars on new chemistry. Trade show presence (CHINACOAT, European Coatings Show) is critical for specialty chemicals. Regulatory compliance content (REACH, TSCA guides) provides value while generating leads. Distributor co-marketing programs extend campaign reach.

**26. Textiles & Apparel**
Fashion marketing campaigns are seasonal and visual — lookbooks, runway shows, and influencer partnerships. Trade campaigns target buyers during market weeks with showroom invitations and line previews. Sustainability campaigns (organic, recycled, fair trade) are increasingly important for both B2B and B2C. Pop-up retail campaigns test new markets.

**27. FMCG**
Campaign velocity is extreme — 100+ promotions per year per brand. In-store campaigns (displays, shelf tags, coupons) drive the majority of incremental sales. Digital and social campaigns build brand awareness. Sampling programs for new products generate trial. Trade promotion management is a campaign discipline unto itself.

**28. Electronics**
Campaigns target design engineers with technical content — evaluation boards, reference designs, application notes, and webinars. Distribution partners run demand-creation campaigns on your behalf. Product launch campaigns coincide with industry design cycles. Online design tools and calculators serve as both campaign assets and qualification mechanisms.

**29. Oil & Gas**
Campaigns target through industry publications (Journal of Petroleum Technology, Hart Energy), conferences (OTC, SPE events), and direct outreach to operators. Technical papers demonstrating field performance are the most credible campaign asset. Campaign spending correlates with rig count and commodity prices — budget increases when the industry is spending.

**30. Jewelry & Luxury**
Campaign channels are high-end: magazine advertising (Vogue, Town & Country), exclusive events (private viewings, trunk shows), and targeted digital (social media with luxury lifestyle targeting). Bridal campaigns peak January-February and June. Holiday campaigns drive gifting. Brand heritage and craftsmanship storytelling are the core narrative. Influencer partnerships must be carefully curated to protect brand image.


## ERP•AI & Proto

**ERP•AI**: The CRM Campaign doctype tracks campaigns with budget, schedule, and lead source links. Email Campaign automates multi-step email sequences. The Website module provides landing pages and web forms for lead capture. Newsletter manages email distribution. Lead source tracking on the Lead doctype connects campaign effort to pipeline generation.

**Proto**: Proto agents handle campaign management through the ORAI cycle — Observing campaign performance data across all channels in real time, Reasoning about audience response patterns and budget allocation effectiveness, Acting by optimizing active campaigns, generating content, and adjusting targeting, and Iterating by learning from campaign-to-revenue attribution to improve future campaign planning and execution.
