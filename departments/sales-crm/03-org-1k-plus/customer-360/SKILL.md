---
name: customer-360
description: This skill should be used when the task involves build a unified view of every customer — their history, health, spending patterns, and signals for cross-sell and upsell opportunities.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 03-org-1k-plus
  type: skill
  scope: internal
---
# Customer 360

## What This Process Does

Customer 360 is the practice of bringing together everything you know about a customer into one place. Right now, your customer data is probably scattered across a dozen systems — the CRM has contact info and deal history, finance has invoices and payment records, support has tickets and satisfaction scores, marketing has email engagement and website visits, and product has usage data. Nobody has the full picture. The sales rep doesn't know the customer filed three support tickets last week. The support agent doesn't know the customer is up for renewal next month. The account manager doesn't know the customer's usage has dropped 40% — a churn warning sign. Customer 360 fixes this by creating a single unified view: who is this customer, what have they bought, how are they doing, what's their sentiment, and what should we do next? It also includes health scoring (is this customer at risk or thriving?) and signal detection (is this customer ready for an upsell or about to leave?).

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. ERP•AI's architecture is naturally suited for Customer 360 because the Customer doctype is the central hub — linked to Leads, Opportunities, Quotations, Sales Orders, Invoices, Payments, Support Tickets, and Projects. The CRM module provides activity timelines and communication logs. Deploy the CRM, Selling, Accounts, and Support modules together, and you'll have most of a Customer 360 view out of the box. Add custom dashboards and computed fields (like health score) on top.

## Build — Setting It Up

### With Agents

Tell your agent: "Build a Customer 360 view for our sales and success teams. We need to see everything about a customer in one place — purchases, support tickets, payments, usage, and a health score." The agent will:

- Audit all customer data sources and map which system holds what information
- Configure the Customer doctype as the single source of truth with linked records from all relevant modules
- Create a unified customer dashboard showing key metrics at a glance (lifetime value, current products, renewal date, last interaction, health score, open issues)
- Build a customer health score based on weighted factors (usage, support tickets, payment history, engagement, NPS/CSAT scores)
- Set up activity timeline pulling in sales calls, emails, support tickets, invoices, and meetings in chronological order
- Create cross-sell/upsell signal detection (e.g., customer uses Product A but not Product B, which 80% of similar customers also buy)
- Configure alerts for health score drops, churn risk indicators, and expansion opportunities
- Build customer segmentation views (by tier, industry, product mix, health score) for portfolio management

### Key Decisions

**What data goes into the 360 view?** Start with the essentials: contact info, purchase history, support history, payment history, and communication log. Add usage/product data if available. Don't try to include everything at once — a focused view with 10 key metrics beats a cluttered view with 50.

**Who is the "customer"?** For B2B, the customer is the company, but you need to track contacts within that company (buyer, champion, executive sponsor, end users). For B2C, the customer is the individual. For B2B2C (you sell to businesses who serve consumers), you might track both.

**Health score model: simple or complex?** A simple health score uses 4-5 factors: product usage (up or down?), support sentiment (happy or frustrated?), payment behavior (on time?), engagement (responding to outreach?), and contract status (renewing soon?). Weight them, score 0-100, and color-code red/yellow/green. Start here. Complex models add predictive ML — build those after you've validated the simple model.

**How do you handle data conflicts?** The CRM says the customer's address is in Chicago, but the billing system says New York. Which one wins? Define a master data source for each field type and build rules for handling conflicts.

**Who sees what?** Sales sees revenue potential and deal history. Support sees ticket history and satisfaction. Finance sees payment behavior. Each role needs a view tailored to their needs, built from the same underlying data. Don't overwhelm a support agent with pipeline data they don't need.

### Common Mistakes

**Building a data warehouse instead of a useful tool.** Aggregating data is pointless if nobody looks at it. Start with the questions people actually ask ("Is this customer healthy?" "What should I sell them next?" "Why are they calling?") and build views that answer those questions.

**Stale data.** A Customer 360 view that was accurate three months ago is worse than no view at all — it creates false confidence. Every data source must update in real time or near-real time. If a data source can't feed automatically, it shouldn't be in the 360 view.

**No actionability.** Showing a rep that a customer's health score dropped is useless without a suggested action. Pair every insight with a next step: "Health score dropped — schedule a check-in call. Here's a suggested talk track."

**Ignoring unstructured data.** Emails, call notes, and support ticket narratives contain the richest customer intelligence. If your 360 view only shows structured data (dates, amounts, scores), you're missing the story. Use AI to summarize unstructured data into actionable insights.

**Treating all customers the same.** A $1M enterprise customer and a $500 SMB customer need different 360 views. The enterprise view should show multiple contacts, a stakeholder map, and program-level engagement. The SMB view should be simple and action-focused.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Customer Health Distribution:** A histogram showing how many customers are green (healthy), yellow (at risk), and red (critical). Healthy means 70%+ green. If red is growing quarter over quarter, you have a systemic problem.

**Health Score Trends:** Track average health score over time — overall and by segment. A downward trend signals product issues, support problems, or competitive pressure. An upward trend after a product release validates the investment.

**Expansion Signals Dashboard:** Customers showing buying signals — increased usage, new stakeholders engaging, RFP from related departments, contract expansion inquiries. This is the cross-sell/upsell hit list for your account managers.

**Churn Risk Report:** Customers with declining health scores, approaching renewal dates, open escalations, or competitive activity detected. Prioritize intervention by revenue impact (risk amount = annual revenue x churn probability).

**Data Completeness Score:** What percentage of your customer records have all key fields populated? If only 60% of customers have a health score, your portfolio view has blind spots. Track completeness and improve it over time.

### Exception Handling

**Health score anomalies:** A customer's health score drops from 85 to 30 overnight. Usually it's a data issue (a support ticket miscategorized as critical) or a legitimate crisis. Investigate anomalies before acting on them. Set up alerts for score changes greater than 20 points in a week.

**Conflicting signals:** Usage is up but satisfaction is down. The customer is buying more but filing more complaints. These mixed signals require human judgment — an agent flags them, but a person needs to understand the story. Usually it means the customer is committed but frustrated.

**Contact data decay:** People change jobs, phone numbers go stale, email addresses bounce. Run quarterly data hygiene to identify and update stale contact records. A 360 view with wrong contacts is actively harmful — you're reaching out to people who left the company.

**Orphaned accounts:** Customers with no assigned account manager due to rep turnover, territory changes, or oversight. These are your highest-risk accounts because nobody is watching. Run a weekly report of customers with no owner and assign them immediately.

**Duplicate customer records:** The same company exists as three records because different teams created them independently. Implement automated deduplication rules and merge duplicates. Keep the richest record and redirect all links.

### Routine Tasks

**Daily (agent-automated):** Update health scores, detect new cross-sell/upsell signals, flag health score drops for account owners, refresh activity timelines, identify engagement anomalies.

**Weekly (agent-assisted):** Review at-risk customers with declining health, prepare account briefings for upcoming customer meetings, identify orphaned accounts, check data completeness metrics.

**Monthly (human-reviewed):** Portfolio health review with the customer success team, churn analysis for lost customers, cross-sell campaign targeting based on signals, data quality audit and cleanup.

**Quarterly (strategic):** Health score model calibration (are the weights still right?), customer segmentation review, signal detection model tuning, ROI analysis of interventions triggered by 360 insights.

## Scale — Growing It

### Adding Complexity

**Multi-entity customer views:** A parent company has five subsidiaries, each a separate customer. The 360 view needs to show both the subsidiary level and the parent-company roll-up. Revenue, health scores, and engagement should aggregate upward while remaining visible at each level.

**Partner-influenced customers:** If channel partners manage some of your customers, you need a 360 view that incorporates partner-reported data alongside your direct data. This requires data sharing agreements and API integrations with partner systems.

**Product usage telemetry:** For software and technology companies, product usage data is the richest signal for customer health. Integrate login frequency, feature adoption, error rates, and API consumption into the health score. A customer who stops logging in is more at risk than one who files support tickets.

**Social and sentiment monitoring:** Track what customers say about you on social media, review sites (G2, Capterra, Trustpilot), and industry forums. Sentiment shifts are early warning signals that often precede churn or expansion decisions.

**Predictive models:** Move beyond descriptive health scores to predictive models — "This customer has a 73% probability of churning in the next 90 days" or "This customer has a 60% probability of purchasing Product B based on their usage patterns." These require enough historical data to train reliably.

### Automation Opportunities

**AI-generated customer summaries:** Before a meeting with a customer, agents generate a one-page briefing: who they are, what they've bought, recent interactions, current health, open issues, and recommended talking points. No more spending 30 minutes digging through records.

**Automated health score alerts with context:** When a health score drops, agents don't just alert — they explain why (which factors changed) and recommend specific actions. "Health score dropped 15 points because support ticket volume increased 3x this month. Recommend executive check-in call."

**Cross-sell/upsell opportunity creation:** Agents detect expansion signals and automatically create opportunities in the pipeline with recommended products and suggested messaging based on the customer's profile and what similar customers bought.

**Proactive outreach triggers:** When a customer's usage drops, their contract renewal is 90 days away, or they haven't engaged with their account manager in 60 days, agents trigger automated outreach — a check-in email, a meeting scheduling request, or a value report.

**Customer intelligence digests:** Weekly email to account managers summarizing changes across their portfolio — health score movements, new signals, upcoming renewals, and recommended priorities. This replaces the need to manually review each account.

### When to Redesign

- Your customer success team spends more than 30% of their time gathering information instead of acting on it
- You can't answer "why did this customer churn?" within 5 minutes of looking at their record
- Your cross-sell rate is below 10% of eligible customers
- Customer data exists in more than 5 systems with no integration between them
- Your health score doesn't correlate with actual churn — unhealthy accounts renew and healthy accounts churn
- You've expanded into new products or segments that your current 360 model doesn't accommodate

## By Industry

**1. Manufacturing**
Customer 360 includes equipment installed base, service history, parts consumption patterns, warranty claims, and production line specifications. A complete view shows not just what the customer bought but how they're using it — uptime, maintenance compliance, and spare parts inventory. Predictive maintenance signals (equipment performance degradation) are health indicators.

**2. Healthcare**
Patient-centered 360 views include clinical history, insurance, scheduled appointments, medication adherence, and social determinants of health. HIPAA compliance requires strict access controls on the 360 view — not everyone can see clinical data. Provider 360 views (for B2B) track referral patterns, prescribing behavior, and formulary status.

**3. Education**
Student 360 includes enrollment history, academic performance, financial aid status, campus engagement, and career services interactions. For institutional customers (B2B), the 360 view tracks product adoption across departments, usage metrics, training completion, and renewal status. Student success signals predict retention.

**4. Retail**
Customer 360 for retail includes purchase history across channels (in-store, online, mobile), returns, loyalty program engagement, browsing behavior, marketing response, and lifetime value. Personalization engines use the 360 view to recommend products, customize promotions, and predict next purchase.

**5. Hospitality**
Guest 360 includes stay history, preferences (room type, pillow choice, dining preferences), loyalty tier, spending per visit, feedback scores, and booking patterns. A complete guest profile enables personalized experiences that drive loyalty. Corporate client 360 includes travel program spend, meeting volume, and contract compliance.

**6. Construction**
Client 360 includes project history, change order patterns, payment behavior, quality metrics (defect rates, warranty claims), and safety record on their sites. For subcontractors, the 360 view includes performance ratings, capacity, insurance status, and reliability scores. Project-level views differ from company-level views.

**7. Real Estate**
Client 360 for buyers includes search history, property viewings, offer history, financing status, and communication preferences. For property owners/investors, the 360 view includes portfolio holdings, property performance (occupancy, rent rolls, cap rates), and market comparable data. Transaction history spans buying, selling, leasing, and management.

**8. Agriculture**
Farmer 360 includes farm profile (acreage, crops, equipment), purchase history, yield data, soil testing results, and agronomic service interactions. A complete view helps ag reps recommend the right inputs for each field. Equipment dealer 360 includes machine hours, service history, and parts consumption for each piece of equipment.

**9. Banking & Financial Services**
Customer 360 is the holy grail of banking — seeing all relationships (deposits, loans, investments, cards, insurance) in one view. Household-level views aggregate individual family members. Relationship profitability analysis shows total margin across all products. Risk indicators (credit score changes, payment behavior shifts) feed early warning systems.

**10. Insurance**
Policyholder 360 includes all active policies, claims history, billing history, agent interactions, and risk profile. Household-level views show all family members' coverage and identify gaps (the family has auto and home but no umbrella). Claims experience drives health scoring — frequent claimants may be high-risk.

**11. Legal**
Client 360 includes all matters (active and historical), billing history, outstanding receivables, attorney relationships, and matter outcomes. For law firms, understanding a client's total relationship (all practice areas, all offices) is essential for cross-selling and relationship management. Conflict checking is a critical component.

**12. Government**
Citizen 360 includes all interactions across government agencies — permits, licenses, tax records, benefit enrollment, and service requests. This requires cross-agency data sharing, which is politically and technically challenging. For government contractors, agency 360 views track all contracts, past performance ratings, and relationship history across offices.

**13. Pharma**
HCP 360 includes prescribing patterns, sample history, medical education events attended, clinical trial participation, and publication history. Must comply with Sunshine Act reporting requirements. Patient 360 (for patient services) includes therapy history, adherence data, and hub interactions. All interactions must be audit-ready.

**14. Automotive**
Vehicle owner 360 includes vehicle(s) owned, service history, warranty status, recall compliance, financing status, trade cycle prediction, and marketing engagement. Connected vehicle data (mileage, driving patterns, maintenance alerts) enriches the profile. Dealer-level 360 includes sales performance, inventory, and customer satisfaction.

**15. Telecom**
Subscriber 360 includes all services (voice, data, TV, IoT), usage patterns, billing history, support interactions, network experience quality, and device portfolio. Usage trend analysis predicts upgrade timing and churn risk. Household-level views show opportunities for bundling. Network quality in the customer's area affects satisfaction.

**16. Media & Entertainment**
Audience 360 includes content consumption patterns, subscription status, ad exposure, engagement metrics, and social media activity. Advertiser 360 includes campaign history, spend patterns, performance metrics, and agency relationships. Content recommendation engines run on the audience 360 data.

**17. Energy & Utilities**
Customer 360 includes energy consumption patterns, billing history, rate plan, smart meter data, energy efficiency program participation, and outage history. Usage pattern analysis identifies efficiency opportunities and renewable energy candidates. Commercial customer 360 includes demand profiles, peak usage, and sustainability goals.

**18. Food & Beverage**
Retail customer 360 includes distribution footprint, sales velocity, promotional response, trade spend history, and category performance. Restaurant/foodservice customer 360 includes menu placement, order frequency, delivery requirements, and seasonal ordering patterns. Consumer 360 (D2C brands) includes purchase frequency, flavor preferences, and subscription status.

**19. Logistics & Transport**
Shipper 360 includes shipping volume by lane, rate history, claim frequency, service performance, and seasonal patterns. A complete view helps logistics companies identify growth opportunities (lanes with increasing volume) and retention risks (declining shipment frequency). Carrier 360 includes capacity, reliability, safety scores, and pricing competitiveness.

**20. Nonprofit**
Donor 360 includes giving history, event attendance, volunteer hours, communication preferences, and wealth indicators. Understanding donor engagement breadth (do they give, volunteer, attend, and advocate?) predicts future major gift potential. Grant funder 360 includes funding priorities, grant history, reporting requirements, and program officer relationships.

**21. SaaS / Technology**
Customer 360 in SaaS is product-usage-centric: daily active users, feature adoption, API consumption, support ticket sentiment, billing history, and NPS scores. Health scores heavily weight product engagement. Expansion signals include usage approaching plan limits, new departments onboarding, and API integration development. This data drives the entire customer success motion.

**22. Professional Services**
Client 360 includes project history, total spend, consultant feedback, project outcomes (on time, on budget?), and relationship map (who knows whom at the firm and the client). Understanding which practice areas have served the client reveals cross-sell opportunities. Client satisfaction data from post-project surveys feeds the health score.

**23. Defense & Aerospace**
Agency/program 360 includes contract history, past performance evaluations (CPARs), program office relationships, incumbent status, and competitive landscape. Understanding the customer's acquisition strategy (which programs are competed, which are sole-sourced) is essential. Security classification levels vary by program and affect data access.

**24. Mining**
Mine site 360 includes equipment fleet, production volumes, ore grades, operating costs, safety metrics, and environmental compliance status. Understanding the mine's life-of-mine plan helps predict future equipment and service needs. Commodity price sensitivity affects the customer's capital spending behavior.

**25. Chemicals**
Customer 360 includes formulation approvals (which of your products are qualified for their applications), volume history, quality performance, complaint history, and regulatory compliance. Technical relationships (your chemist to their chemist) are as important as commercial relationships. Switching costs are high once qualified.

**26. Textiles & Apparel**
Brand/retailer 360 includes order history by season, style, and fabric; return rates; payment history; and sell-through performance. Understanding which products performed well at which retail partners informs future design and sales strategy. Sustainability compliance and audit history are increasingly important.

**27. FMCG**
Retail customer 360 includes all-commodity-volume-weighted distribution, sales velocity by SKU, promotional effectiveness, shelf positioning, and trade spending efficiency. Point-of-sale data from retailers enriches the 360 view with real-time performance data. Category management insights demonstrate your value as a supplier partner.

**28. Electronics**
Customer 360 includes design-win history, production forecast, component consumption, quality metrics (PPM defect rates), and technical support interactions. Understanding the customer's product roadmap predicts future component needs. End-of-life management requires tracking which customers use components approaching discontinuation.

**29. Oil & Gas**
Operator 360 includes well inventory, production volumes, drilling activity, service history, equipment fleet, and capital budget. Understanding the operator's basin strategy and development plans predicts service demand. HSE (health, safety, environment) performance is a critical relationship factor.

**30. Jewelry & Luxury**
Client 360 includes purchase history, style preferences, metal/stone preferences, gifting occasions (anniversaries, birthdays), and wish list items. Life events (engagement, wedding, milestone birthday) are expansion opportunities. VIP clients expect the sales associate to know their preferences and history without asking. Privacy and discretion in data handling are paramount.


## ERP•AI & Proto

**ERP•AI**: The Customer doctype is the natural hub of a 360 view — linked to Leads, Opportunities, Quotations, Sales Orders, Invoices, Payments, Support Tickets, and Projects. Activity timelines, communication logs, and transaction history are accessible from the customer record. Custom dashboards and computed fields (like health scores) can be added without code changes.

**Proto**: Proto agents handle Customer 360 through the ORAI cycle — Observing customer data across all connected systems in real time, Reasoning about customer health by analyzing patterns in usage, support, payment, and engagement data, Acting by generating alerts for at-risk accounts and surfacing cross-sell opportunities to account managers, and Iterating by learning from customer outcomes (churn, expansion, renewal) to improve health scoring and signal detection accuracy.
