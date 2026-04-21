---
name: lead-management
description: This skill should be used when the task involves capture leads from every source, score them, route them to the right rep, nurture the ones not ready to buy, and track what converts.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - crm
  type: skill
  scope: internal
---
# Lead Management

## What This Process Does

Lead management is how you turn strangers into prospects and prospects into customers. It covers everything from the moment someone fills out a form, calls your office, walks into your store, or gets referred by a friend, all the way through to the point where a salesperson says "this person is ready for a real conversation." Along the way you need to figure out which leads are worth your time (scoring), get them to the right person fast (routing), stay in touch with the ones who aren't ready yet (nurturing), and know which of your efforts actually produced revenue (conversion tracking). Without a system, leads fall through the cracks. Reps cherry-pick the easy ones. Marketing has no idea what worked. And your boss asks "where did that trade show lead go?" and nobody knows.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the CRM module, the Lead Management app, and the Web Form builder. ERP•AI ships with a ready-made lead lifecycle out of the box — lead capture forms, lead source tracking, lead scoring rules, and assignment rules. There are also email campaign templates and landing page builders in the Website module. Deploy the CRM app first, then layer on the Website module if you need web forms. Customize the scoring and routing rules on top rather than reinventing the wheel.

## Build — Setting It Up

### With Agents

Tell your agent: "Set up lead management for our sales team. We get leads from our website, trade shows, cold outreach, and partner referrals." The agent will:

- Create custom fields on the Lead doctype for your specific qualification criteria (budget range, timeline, decision authority, pain points)
- Build web forms that capture the right information without asking for too much upfront
- Configure lead sources so every lead gets tagged with where it came from
- Set up auto-assignment rules that route leads to reps based on territory, product interest, or round-robin
- Create a scoring model using field values (job title, company size, industry) and behavioral signals (pages visited, emails opened, forms filled)
- Build notification workflows so reps get pinged immediately when a hot lead comes in
- Set up nurture email sequences for leads that aren't sales-ready
- Create dashboards showing lead volume by source, conversion rates by stage, and rep response times

You can also ask the agent to import your existing leads from spreadsheets or another CRM, map the fields, deduplicate, and assign owners.

### Key Decisions

**What counts as a lead vs. a contact vs. an opportunity?** Define this clearly before you build anything. A lead is unqualified. Once qualified, it becomes an opportunity (or gets disqualified). Mixing these up creates chaos.

**How many lead stages do you need?** Keep it simple: New, Contacted, Qualified, Unqualified, Converted. You can always add more later. Five is enough to start.

**What makes a lead "qualified"?** Pick a framework. BANT (Budget, Authority, Need, Timeline) is classic. MEDDIC is more thorough. The key is that everyone agrees on the definition so "qualified" means the same thing to every rep.

**Who owns lead response?** If marketing generates leads but sales doesn't follow up, you've wasted money. Set clear SLAs: web form leads get a call within 5 minutes, trade show leads within 24 hours, etc.

**Scoring: simple or complex?** Start with a simple point system. Job title is VP or above: +20 points. Company has 500+ employees: +15 points. Visited pricing page: +10 points. You can get fancy with predictive scoring later.

### Common Mistakes

**Capturing too much information upfront.** Every field you add to a form drops conversion rates. Ask for name, email, company, and one qualifying question. Get the rest during follow-up.

**No lead source tracking.** If you can't tell where leads came from, you can't tell what's working. Tag every lead with a source from day one.

**Letting leads age.** A lead that sits untouched for 48 hours is nearly dead. Set up alerts for aging leads and have a process to reassign them.

**Overcomplicating scoring.** A 47-variable AI model is not better than a simple point system when you only have 200 leads. Start simple, iterate when you have data.

**Skipping deduplication.** The same person fills out three forms. Now three reps are calling them. Run dedup rules on email and phone number before assignment.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Lead Volume Dashboard:** Track daily/weekly lead volume by source. Spot drops immediately — if web leads fall 40% on a Tuesday, something broke (form, landing page, ad spend).

**Response Time Dashboard:** Measure time from lead creation to first rep contact. Best practice is under 5 minutes for inbound web leads. Set alerts if average response time exceeds 1 hour.

**Conversion Funnel:** Show leads moving through stages. If 500 leads enter "New" but only 20 make it to "Qualified," either your lead sources are poor or your qualification criteria are too strict.

**Lead Aging Report:** Flag leads stuck in a stage for more than X days. Alert the rep's manager if a lead hasn't been touched in 72 hours.

**Source ROI Report:** Cost per lead and cost per qualified lead by source. This tells you where to spend your next marketing dollar.

### Exception Handling

**Duplicate leads:** Set up automated dedup rules that merge leads with matching email addresses or phone numbers. When a merge happens, keep the richer record and notify the affected reps.

**Bounced emails:** If a lead's email bounces, flag it for manual review. Don't keep sending to dead addresses — it kills your sender reputation.

**Unresponsive leads:** After X contact attempts with no response, auto-move to a "Nurture" or "Recycled" pool. Don't let reps waste time on ghosts.

**Reassignment conflicts:** When a rep leaves or territories change, have a bulk reassignment process ready. Agents can handle this in minutes.

**Data quality decay:** Phone numbers go stale, people change jobs. Run quarterly data enrichment to update company info, titles, and contact details.

### Routine Tasks

**Daily (agent-automated):** Route new leads, send first-touch emails, flag hot leads for immediate follow-up, deduplicate incoming leads.

**Weekly (agent-assisted):** Review aging leads, reassign untouched leads, update lead scores based on new activity, send nurture emails to warm leads.

**Monthly (human-reviewed):** Analyze source performance, adjust scoring weights based on actual conversion data, clean up dead leads, review and update nurture content.

**Quarterly (strategic):** Recalibrate lead definitions with sales and marketing, evaluate new lead sources, audit scoring model accuracy, review SLA compliance.

## Scale — Growing It

### Adding Complexity

**New lead channels:** As you add channels (chatbot, social media DMs, partner portals, event apps), make sure each one feeds into the same lead pipeline with proper source tagging. Don't create parallel systems.

**Multi-product leads:** When you sell multiple products, leads need to be routed by product interest, not just territory. Add product interest fields and create routing rules per product line.

**International leads:** Different languages, time zones, and compliance requirements (GDPR, CCPA). Set up region-specific forms, consent tracking, and routing to local teams.

**Partner-sourced leads:** When channel partners send you leads, you need a partner portal, deal registration to avoid conflicts, and visibility rules so partners only see their own leads.

**Account-based marketing (ABM):** Instead of scoring individual leads, score accounts. Multiple people from the same company showing interest is a stronger signal than one person's activity.

### Automation Opportunities

**Chatbot qualification:** A website chatbot can ask qualifying questions 24/7, score the lead in real time, and book a meeting on the rep's calendar before they even know the lead exists.

**Predictive lead scoring:** Once you have 6+ months of conversion data, agents can build models that predict which leads are most likely to close based on historical patterns.

**Automated nurture sequences:** Agents can build and manage multi-touch email sequences that adapt based on lead behavior — someone who opens every email gets a different track than someone who never engages.

**Lead enrichment:** Agents can pull in firmographic data (company size, revenue, industry) and technographic data (what software they use) from third-party sources automatically.

**Intent data:** Agents can monitor third-party intent signals (topics a company is researching) and surface leads that are in-market before they ever fill out your form.

### When to Redesign

- Your lead-to-opportunity conversion rate has been declining for three straight quarters
- Reps spend more than 30% of their time on lead admin instead of selling
- Marketing and sales fundamentally disagree on what a "good lead" is
- You've acquired a company and need to merge two lead systems
- Your average lead response time has crept above 4 hours despite automation
- You're expanding into a new market segment with completely different buying patterns

## By Industry

**1. Manufacturing**
Leads often come from trade shows, distributor referrals, and RFQ portals. Qualification involves technical fit (can you make what they need?) and volume requirements. Lead cycles are long — a manufacturing lead might take 6-18 months to convert. Score heavily on project timeline and engineering approval status.

**2. Healthcare**
Leads come from conferences, peer referrals, and group purchasing organizations (GPOs). HIPAA compliance matters even at the lead stage — don't capture patient data in lead forms. Decision-making involves committees, so track multiple stakeholders per lead. Budget cycles are annual and rigid.

**3. Education**
Leads are driven by grant cycles, budget approvals, and academic calendars. A lead captured in March might not convert until September when the school year budget kicks in. Track the funding source (federal grant, state budget, endowment) because it determines timeline and procurement process.

**4. Retail**
High volume, low touch. Leads might be franchise inquiries, wholesale buyer requests, or B2B partnership proposals. For D2C, "leads" are really email subscribers — manage them with marketing automation, not traditional lead management. Seasonal spikes around holidays require surge capacity.

**5. Hospitality**
Leads are event planners, corporate travel managers, and group booking coordinators. Speed matters enormously — an event planner requesting proposals will book the first three venues that respond. Qualify on event size, date flexibility, and budget. Track repeat business because the same planner books 20 events a year.

**6. Construction**
Leads are project-based: someone needs a building, a renovation, or infrastructure work. Qualification is about project scope, timeline, permitting status, and funding. Many leads come from plan rooms and bid boards. Track the general contractor, architect, and owner separately because they all influence the decision.

**7. Real Estate**
Leads are buyers, sellers, and renters — each needs a different pipeline. Web leads from property listings are high volume but low intent (lots of tire-kickers). Score based on mortgage pre-approval, timeline to move, and property viewing activity. Speed to contact is critical — the first agent to call often wins.

**8. Agriculture**
Leads are seasonal and tied to planting/harvest cycles. A farmer evaluating new equipment in January is buying in March. Leads often come through dealer networks, ag shows, and field days. Qualify on acreage, crop type, and existing equipment. Rural connectivity means phone calls and texts matter more than email.

**9. Banking & Financial Services**
Leads for loans, accounts, and financial products are heavily regulated. You must track consent and communication preferences meticulously. Score based on creditworthiness indicators (without running unauthorized checks). Leads from branch walk-ins, website applications, and referral programs all need different handling.

**10. Insurance**
Leads are quote requests — high volume, time-sensitive, and highly competitive. An insurance shopper is comparing five quotes simultaneously. Response time under 2 minutes dramatically improves close rates. Qualify on coverage needs, current provider, renewal date, and risk profile. Leads near their renewal date are gold.

**11. Legal**
Leads are potential clients with legal needs — often urgent (accident, arrest, contract dispute). For personal injury firms, speed is everything. For corporate law, leads come through referrals and RFPs. Conflict checks must happen before any substantive conversation. Track practice area, matter value, and urgency.

**12. Government**
You don't really "generate" government leads in the traditional sense. Opportunities come from RFPs, GSA schedules, and relationship-building over years. Track agency contacts, upcoming procurements, and budget cycles. The "lead" is knowing that an agency will issue an RFP six months from now and positioning yourself early.

**13. Pharma**
Leads are healthcare providers (HCPs) who might prescribe your drug or medical device. Heavily regulated — every interaction must be logged for compliance. Leads come from medical conferences, journal publications, and KOL (key opinion leader) networks. Track specialties, prescribing patterns, and formulary status at their hospitals.

**14. Automotive**
Leads are dealership inquiries (walk-ins, web configurator submissions, test drive requests) or fleet buyer RFQs. For dealerships, internet leads must be contacted within minutes. Score on trade-in status, financing pre-approval, and purchase timeline. For fleet sales, qualify on fleet size, replacement cycle, and procurement process.

**15. Telecom**
Leads are businesses needing connectivity, UCaaS, or managed services. High volume for SMB, relationship-driven for enterprise. Score on contract expiration date (someone 90 days from renewal is actively shopping), number of locations, and current spend. Bundling opportunities (voice + data + security) increase deal value.

**16. Media & Entertainment**
Leads are advertisers, content partners, and distribution clients. For ad sales, leads are tied to campaign timelines and budget cycles (upfronts, tentpole events). Qualify on budget, target audience overlap, and campaign dates. Programmatic has made small-spend leads viable, but direct sales still drives the big deals.

**17. Energy & Utilities**
Leads for energy projects (solar, wind, grid infrastructure) have very long cycles — 2-5 years from initial inquiry to contract. Qualification involves site assessment, regulatory approval status, and financing. For utility services, leads are commercial customers evaluating energy management, EV charging, or efficiency programs.

**18. Food & Beverage**
Leads are restaurant chains, grocery retailers, and distributors. Qualification involves volume requirements, distribution capabilities, and compliance (FDA, organic certification, allergen labeling). Trade shows (like the National Restaurant Association show) generate huge lead spikes that need fast follow-up and demo scheduling.

**19. Logistics & Transport**
Leads are shippers needing freight, warehousing, or last-mile delivery. Qualify on lanes (origin/destination), volume, freight type, and current provider contract expiration. Spot market leads are urgent (ship tomorrow), while contract leads have a longer sales cycle. Track seasonal volume patterns per customer.

**20. Nonprofit**
"Leads" are potential donors, grant-making foundations, and corporate sponsors. Scoring is based on giving capacity, affinity to your cause, and past engagement. Major gift leads come from wealth screening and board referrals. Event attendees and small donors are nurtured over years before a major gift ask.

**21. SaaS / Technology**
Leads are product signups, demo requests, and content downloads. Product-led growth means free-tier users are leads — score them on product usage (features activated, seats added, API calls made). Marketing-qualified leads (MQLs) and product-qualified leads (PQLs) need different routing and follow-up cadences.

**22. Professional Services**
Leads are RFP responses, referrals from existing clients, and thought leadership engagement. The person downloading your whitepaper is a lead, but the partner at a client firm recommending you to a colleague is a much better one. Track relationship networks — who knows whom. Qualify on project scope, budget, and decision timeline.

**23. Defense & Aerospace**
Leads are government contracts and prime contractor subcontracting opportunities. Security clearance requirements affect who can even respond to an inquiry. Track program offices, IDIQ vehicles, and teaming partner networks. Lead cycles are measured in years, and relationship continuity through personnel changes is critical.

**24. Mining**
Leads are mining companies needing equipment, services, or technology. Qualification involves mine type (open pit vs. underground), commodity being mined, production volume, and geographic accessibility. Leads cluster around commodity price booms — when gold hits $2,000, every gold miner starts buying equipment.

**25. Chemicals**
Leads are formulators, manufacturers, and distributors needing raw materials or specialty chemicals. Qualification involves volume, purity requirements, regulatory compliance (REACH, TSCA), and supply chain requirements. Technical pre-sales is essential — a lead needs to know your product works in their formulation before commercial discussions begin.

**26. Textiles & Apparel**
Leads are brands, retailers, and garment manufacturers. Qualification involves order minimums, fabric specifications, sustainability certifications, and lead times. Fashion calendars drive everything — a lead in January is sourcing for Fall/Winter. Missing the design calendar means waiting six months for the next buying cycle.

**27. FMCG**
Leads are retail buyers and distributors. Getting a meeting with a Walmart or Tesco buyer is the hard part — once you have it, the "lead" is really a category review opportunity. Qualify on shelf space availability, category fit, promotional calendar alignment, and margin expectations. Trade promotions drive most new placements.

**28. Electronics**
Leads are OEMs, contract manufacturers, and system integrators needing components or subsystems. Qualification involves technical specifications (tolerances, certifications, compliance), volume projections, and design-in timeline. A "design win" lead is someone designing your component into their next product — this is the highest-value lead type.

**29. Oil & Gas**
Leads are E&P companies, refineries, and oilfield service companies. Lead volume correlates directly with commodity prices and rig counts. Qualify on basin/region, well type, production stage, and capital budget. Safety certifications and environmental compliance are table stakes — don't waste time on leads where you can't meet their HSE requirements.

**30. Jewelry & Luxury**
Leads are high-net-worth individuals, bridal couples, and collectors. Volume is low but deal values are high. Qualification is about purchasing power, occasion (engagement, anniversary, investment), and brand affinity. Leads come from events, referrals, and exclusive previews. Privacy and discretion are paramount — never blast a luxury lead with mass emails.

## By Company Size

### Startup (< 50 people)

You probably have one or two people doing all the selling. Keep it dead simple: a single lead list, manual scoring (gut feel is fine with 20 leads a week), and basic email follow-up. Use ERP•AI's built-in lead form and auto-assignment (assign everything to the founder). Focus on speed — respond to every lead within an hour. Don't build nurture campaigns until you have more leads than you can personally follow up with.

### SMB (50-500 people)

You have a real sales team now, maybe 5-20 reps. You need routing rules, basic scoring, and territory or product-based assignment. Implement SLAs (web leads contacted within 30 minutes). Set up a simple nurture sequence for leads that aren't ready. Start tracking source ROI so you know where to invest your limited marketing budget. Weekly pipeline reviews should include lead quality discussions.

### Mid-Market (500-5,000 people)

Multiple sales teams, possibly selling different products to different segments. You need sophisticated scoring (demographic + behavioral), multi-touch attribution, SDR/BDR teams for outbound, and marketing-sales SLAs with teeth. Implement lead recycling — leads that don't convert go back to marketing for re-nurture. Build predictive models once you have enough conversion data. Territory management becomes critical.

### Enterprise (5,000+ people)

Global operations, dozens of lead sources, multiple business units that might be pursuing the same account. You need centralized lead governance, account-based scoring, global deduplication across business units, compliance workflows for every region you operate in, and AI-driven predictive scoring. Lead management becomes a full-time job for a team — RevOps or Marketing Ops — not something a sales manager handles on the side.

## ERP•AI & Proto

**ERP•AI**: The CRM module includes a complete lead lifecycle with web forms, lead scoring, auto-assignment rules, email integration, and conversion tracking. The Website module adds landing pages and marketing automation. Everything connects natively to Opportunity, Customer, and Sales Order doctypes for full funnel visibility.

**Proto**: Proto agents handle lead management through the ORAI cycle — Observing new leads as they arrive, Reasoning about score and fit based on your qualification criteria, Acting by routing to the right rep and triggering the right nurture sequence, and Iterating by learning from conversion outcomes to improve scoring accuracy over time.
