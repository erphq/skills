---
name: vendor-management
description: This skill should be used when the task involves how to find, evaluate, and work with the companies that supply what you need.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - scm
  type: skill
  scope: internal
---
# Vendor Management

## What This Process Does

Vendor management is how you build and maintain relationships with the companies that supply your business. It starts with finding and onboarding new vendors, continues with measuring how well they perform, and includes ongoing activities like risk assessment, performance reviews, and strategic development.

Think of it this way: procurement is about buying things; vendor management is about managing the companies you buy from. A purchase order is a transaction. A vendor relationship is an ongoing partnership that determines whether those transactions go smoothly or become constant headaches.

Good vendor management means you have reliable suppliers who deliver quality products on time at fair prices. You know who your best vendors are, you develop them, and you have backup plans when things go wrong. Bad vendor management means you are constantly firefighting — late deliveries, quality problems, surprise price increases, and scrambling when a critical supplier goes under.

## Start Here: erp.ai Templates

Before building anything from scratch, check erp.ai's template library. Look for the **Vendor Onboarding Portal**, **Supplier Scorecard**, **Vendor Risk Assessment**, and **Supplier Performance Dashboard** templates. erp.ai's catalog of 720+ apps includes vendor management configurations that cover the full lifecycle from discovery through ongoing performance management. Deploy the template closest to your needs and customize evaluation criteria, scoring weights, and review cadences.

## Build — Setting It Up

### With Agents

AI agents help you build a systematic vendor management program:

- **Vendor database creation**: Agents consolidate vendor information from your invoices, POs, contracts, emails, and spreadsheets into a clean vendor master database with contact details, capabilities, certifications, and spend history.
- **Scorecard design**: Describe what matters to you (quality, delivery, price, responsiveness, innovation) and agents build weighted scorecards tailored to your industry and vendor categories. They can suggest category-specific metrics based on industry best practices.
- **Risk profile building**: Agents assess vendor risk by analyzing financial health (pulling public financial data), geographic concentration, single-source dependencies, news and social media sentiment, and compliance status.
- **Onboarding workflow creation**: Agents design the vendor onboarding process — what information you need to collect, what verifications to perform, what approvals are required — based on your industry regulations and internal policies.
- **Contract template generation**: Feed agents your existing contracts or describe your standard terms, and they create contract templates for different vendor categories with appropriate legal, commercial, and performance terms.

### Key Decisions

**Vendor segmentation**: Not all vendors deserve the same level of management attention. Segment your vendors by strategic importance and spend level. Your top 20 vendors by spend probably account for 80% of your purchasing — these need active management. Your tail-end vendors (hundreds of them, each small) need efficient processes but not strategic attention.

**Single source vs. multi-source**: For critical materials, do you use one vendor or qualify multiple sources? Single-source is simpler and may get you better pricing. Multi-source reduces risk but increases management overhead. The right answer depends on supply risk, switching costs, and market availability.

**Performance metrics and weights**: What do you measure and how do you weight it? Quality (defect rates, rejection rates), delivery (on-time, complete), cost (price competitiveness, cost reduction contributions), and service (responsiveness, flexibility, communication). The weights should reflect what actually matters for each category.

**Review cadence**: How often do you formally review vendor performance? Quarterly is standard for strategic vendors. Semi-annual or annual is fine for routine vendors. The key is that reviews actually happen and lead to action.

**Diversity and sustainability goals**: Does your company have targets for spending with minority-owned, women-owned, veteran-owned, or small businesses? Do you need to track vendor environmental practices, labor standards, or sustainability certifications? Set these up from the start if they matter to your organization or customers.

### Common Mistakes

**Treating all vendors the same**: A strategic supplier of a critical component deserves regular business reviews and development investment. The company that delivers your office water does not. Match your management intensity to the vendor's importance.

**Measuring everything and acting on nothing**: A vendor scorecard that nobody reviews or acts on is a waste of time. Keep your metrics focused and tie them to actions — when a score drops below a threshold, something specific happens (a conversation, a corrective action plan, a volume shift).

**Onboarding without offboarding**: Companies are great at adding vendors but terrible at removing inactive ones. Duplicate and dormant vendors clutter your system, dilute your spend analysis, and create control risks. Set up a process to deactivate vendors with no transactions in the past 12-18 months.

**Ignoring vendor financial health**: Your best vendor in terms of quality and delivery is also your biggest risk if they are about to go bankrupt. Monitor the financial health of your critical vendors — late filings, executive departures, and news about layoffs are early warning signs.

**Not sharing feedback**: Vendors cannot improve if they do not know what is wrong. Share your scorecard results with vendors openly. The best vendor relationships are built on transparent communication about performance, expectations, and mutual improvement.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Vendor performance dashboard**: Composite scores for your top vendors across quality, delivery, cost, and service dimensions. Trend line showing whether performance is improving or declining.

**Spend concentration view**: What percentage of your spend is with your top 5, 10, and 20 vendors? High concentration means high risk if any of those vendors has a problem. Diversification targets should be set by category.

**Onboarding pipeline**: How many vendors are in the onboarding process, where are they stuck, and how long has onboarding taken on average? Slow onboarding delays purchasing.

**Risk heat map**: Visual display of vendor risk by category, showing which vendors are high-risk (single source, financial concerns, geographic concentration, compliance gaps) and which categories have inadequate backup sources.

**Diversity dashboard**: Spending with diverse suppliers (minority, women, veteran, disability, LGBTQ, small business) as a percentage of total spend, tracked against targets.

**Contract expiration alerts**: Vendors with contracts expiring in the next 90, 60, and 30 days, so you have time to renegotiate or re-bid before you are operating without an agreement.

### Exception Handling

**Performance drops**: When a vendor's score drops below threshold, agents trigger the corrective action process — formal notification to the vendor, request for a root cause analysis and improvement plan, escalation to vendor management leadership, and scheduling of a performance review meeting.

**Financial distress signals**: When agents detect signs of vendor financial trouble (credit rating downgrade, late SEC filings, news of layoffs, lawsuits), they alert the risk team and trigger a contingency planning review — identifying backup sources and assessing the impact of losing this vendor.

**Compliance lapses**: When a vendor's certification, insurance, or license expires, agents notify the vendor and the buyer, place a hold on new POs until compliance is restored, and flag any open orders that might be affected.

**Capacity constraints**: When a vendor indicates they cannot meet your volume requirements, agents assess the gap, identify alternate sources, calculate the cost and time to shift volume, and recommend an allocation strategy.

**Ethical or sustainability violations**: When news, audit results, or whistleblower reports indicate a vendor may be violating labor, environmental, or ethical standards, agents flag the issue for immediate investigation, document the concern, and prepare for potential vendor suspension.

### Routine Tasks

**Monthly scorecard calculation**: Agents pull quality data, delivery data, and cost data from procurement and quality systems, calculate scores for each vendor, and distribute scorecards to buyers and vendor management.

**Quarterly business reviews**: Agents prepare the agenda and data package for quarterly reviews with strategic vendors — performance trends, upcoming projects, improvement action status, market updates, and innovation opportunities.

**Annual vendor assessments**: Agents compile the full-year performance data, contract compliance review, and risk assessment for each strategic vendor, preparing the recommendation for contract renewal, renegotiation, or replacement.

**Continuous news monitoring**: Agents monitor news, regulatory filings, and social media for mentions of your vendors — flagging anything that might indicate a risk or opportunity.

**Diversity spend reporting**: Agents calculate diversity spend metrics and prepare reports for internal stakeholders, customers (many large customers require diversity spend reporting from suppliers), and regulatory submissions.

## Scale — Growing It

### Adding Complexity

**Global vendor management**: When your supply base spans countries, you deal with different business cultures, legal systems, currencies, and risk profiles. You need regional vendor management capability with global visibility and coordination. Agents help by monitoring country-specific risks (political instability, currency devaluation, trade policy changes).

**Vendor development programs**: For strategic vendors that are important but underperforming, invest in helping them improve — sharing best practices, providing technical assistance, or funding capability upgrades. The return on vendor development often exceeds the return on switching vendors.

**Vendor portals**: Give your vendors a self-service portal to update their information, view their scorecards, respond to RFQs, track their POs, submit invoices, and communicate with your team. This reduces administrative burden on both sides and improves data quality.

**Sustainability and ESG tracking**: As sustainability reporting requirements grow (EU CSRD, SEC climate rules), you need to collect and verify sustainability data from your supply base — carbon emissions, water usage, waste, labor practices, and governance. Agents can distribute questionnaires, validate responses, and aggregate data for reporting.

**Supply chain mapping**: Beyond your direct vendors (Tier 1), map your critical supply chains to Tier 2 and Tier 3. Understanding who your vendors buy from reveals hidden risks — a single Tier 3 supplier that feeds multiple Tier 1 vendors creates concentration risk you would not see otherwise.

### Automation Opportunities

**Automated onboarding**: Agents manage the entire onboarding workflow — sending the vendor registration form, verifying tax ID and banking information, checking sanctions lists and debarment databases, collecting insurance certificates, routing for approval, and activating the vendor in the system.

**Continuous risk monitoring**: Instead of periodic risk assessments, agents continuously monitor vendor financial health (credit data, SEC filings), compliance status (certifications, insurance), news and sentiment, and operational signals (delivery trends, quality trends) — alerting you to changes in real time.

**Intelligent vendor matching**: When a new purchasing need arises, agents match it to qualified vendors based on capabilities, certifications, performance history, capacity, and risk profile — reducing the time to find the right source.

**Automated compliance tracking**: Agents track every vendor's certifications, licenses, insurance policies, and regulatory registrations against expiration dates and requirements, sending renewal reminders and flagging gaps.

**Performance prediction**: Agents analyze historical patterns to predict which vendors are likely to have problems in the coming quarter — declining delivery performance, quality trend shifts, or financial deterioration — enabling proactive intervention.

### When to Redesign

- You have more than 300 active vendors and no segmentation strategy
- More than 30% of your spend is with vendors who have not been formally evaluated in the past year
- A single vendor failure has caused a significant business disruption in the past year
- Your customer requires supply chain transparency or sustainability reporting that you cannot currently provide
- Vendor onboarding takes more than 30 days on average
- You are expanding into new regions or industries that bring different vendor compliance requirements

## By Industry

**1. Manufacturing**: Vendor management is critical — your suppliers determine your product quality, cost, and delivery reliability. Supplier quality programs (audits, certifications, process approvals) are standard. Just-in-time manufacturing requires vendors who deliver consistently. Long-term agreements with annual price negotiations balance stability and cost competitiveness.

**2. Healthcare**: Vendor credentialing for anyone entering clinical areas (repair technicians, sales reps) is required. Medical device suppliers must be evaluated for regulatory compliance and product safety. Group purchasing organization (GPO) contracts define terms with major suppliers. Physician preference items add complexity — doctors want specific brands, which limits competitive sourcing.

**3. Education**: Vendor management follows public procurement rules for public institutions — competitive bidding requirements, set-asides, and board approval thresholds. Educational technology vendors are evaluated on data privacy practices (FERPA compliance). Textbook publisher relationships are long-term and cyclical.

**4. Retail**: Merchandise vendor management combines traditional supplier evaluation with brand and market considerations. Vendor compliance programs penalize suppliers for shipping errors (wrong quantities, late shipments, labeling issues). Private label programs require deeper vendor evaluation including factory audits and product testing.

**5. Hospitality**: Food supplier management requires food safety certifications, delivery reliability on daily schedules, and quality consistency. Brand standards from hotel and restaurant chains dictate approved vendor lists. Local sourcing relationships are valued for freshness and community engagement. Linen and uniform service vendors are evaluated on turnaround time and quality.

**6. Construction**: Subcontractor management is the core of construction vendor management. Pre-qualification evaluates safety record, financial capacity, bonding capability, and work history. Performance tracking focuses on schedule adherence, quality of work, safety incidents, and change order rates. Material supplier evaluation emphasizes lead time reliability and technical support.

**7. Real Estate**: Property management vendors include maintenance contractors, cleaning services, landscaping, security, and specialty trades. Vendor insurance verification is critical — you need adequate liability coverage. Performance evaluation focuses on response time, work quality, and tenant satisfaction. Multi-property portfolios leverage volume for better rates.

**8. Agriculture**: Input suppliers (seed, fertilizer, chemicals) are evaluated on product efficacy, technical support, and pricing. Equipment dealers are assessed on service capability and parts availability. Crop buyers and commodity brokers are selected based on pricing, reliability of contracts, and payment terms.

**9. Banking & Financial Services**: Third-party risk management (TPRM) is a regulatory requirement — OCC, FDIC, and Fed guidelines mandate formal vendor risk assessments for material service providers. Cybersecurity assessments (SOC 2 reports, penetration test results) are standard evaluation criteria. Business continuity and disaster recovery plans must be reviewed for critical vendors.

**10. Insurance**: Similar to banking, with state insurance department regulations adding oversight requirements for outsourced functions. Managing general agents (MGAs) and third-party administrators (TPAs) require detailed performance and compliance monitoring. Data security and privacy assessments are mandatory for vendors handling policyholder information.

**11. Legal**: Law firms evaluate outside counsel, expert witnesses, legal technology vendors, and service providers (e-discovery, process serving, court reporting). Conflict of interest screening applies to vendor relationships. Ethical rules may restrict certain vendor arrangements. Client engagement letters may specify approved or prohibited subcontractors.

**12. Government**: Vendor management follows FAR/DFAR and agency-specific regulations. Responsibility determinations assess vendor financial capacity, performance history, and integrity. Small business utilization targets (SBA goals) drive diversity in the vendor base. Past performance ratings (CPARS for federal) directly affect vendors' ability to win future contracts.

**13. Pharma**: Vendor qualification is extensive — quality audits, regulatory history review, financial assessment, and technical evaluation. Qualified supplier lists are maintained and adding a new supplier can take 6-12 months. Change control governs any modification to supplier processes or materials. Annual quality reviews assess supplier quality trends.

**14. Automotive**: Supplier management follows IATF 16949 requirements. APQP (Advanced Product Quality Planning) governs new supplier and part development. Annual supplier conferences communicate expectations and recognize top performers. Cost reduction expectations (year-over-year price-downs) are standard. Suppliers are rated on a red/yellow/green system with consequences for underperformance.

**15. Telecom**: Network equipment vendors are evaluated on technology roadmap alignment, interoperability, and support capability. Service contractors for tower work and fiber installation are assessed on safety record, certifications, and geographic coverage. Technology vendor management must account for rapid standards evolution and equipment lifecycle management.

**16. Media & Entertainment**: Talent agencies, production companies, and service providers are managed based on creative quality, availability, and cost. Content licensing vendors are evaluated on catalog quality and deal terms. Technology vendors for content delivery and streaming are assessed on reliability and scalability.

**17. Energy & Utilities**: Regulated utilities may need to justify vendor selections to regulators. Safety-critical equipment suppliers undergo extensive qualification. Long-term maintenance service agreements with original equipment manufacturers (OEMs) are evaluated on response time and parts availability. Environmental services vendors must hold proper permits and certifications.

**18. Food & Beverage**: Ingredient supplier approval requires food safety audits (GFSI-benchmarked standards like SQF or BRC), allergen management verification, and regulatory compliance documentation. Co-manufacturer management is critical when outsourcing production. Supply chain transparency for ingredient origin and ethical sourcing is increasingly expected.

**19. Logistics & Transport**: Carrier management is the core vendor management activity. Carrier safety ratings (CSA scores), insurance verification, equipment condition, and driver quality are evaluation criteria. Broker-carrier relationships require trust verification and payment reliability assessment. Capacity commitments and rate agreements are managed through annual bid processes.

**20. Nonprofit**: Vendor management balances cost effectiveness with mission alignment. Donors may restrict which vendors can be used for grant-funded activities. Social enterprise vendors (employing disadvantaged populations) may receive preference. In-kind donation partners are managed for reliability and quality of donated goods and services.

**21. SaaS / Technology**: Software vendor management focuses on SLA compliance (uptime, response time), data security (SOC 2, ISO 27001), data portability, and contract flexibility. Cloud provider management evaluates cost optimization, performance, and lock-in risk. Open source dependency management tracks license compliance and security vulnerabilities.

**22. Professional Services**: Subcontractor management is critical — the quality of your subcontractors reflects on your firm. Evaluation focuses on expertise, availability, work quality, and cultural fit. Non-compete and non-solicitation agreements are common. Technology vendor management for professional tools (research databases, collaboration platforms) evaluates productivity impact.

**23. Defense & Aerospace**: ITAR compliance screening for all vendors handling defense articles. Cybersecurity maturity (CMMC) assessments are required for defense contractors. Industrial security clearance requirements apply to vendors accessing classified information. Counterfeit parts prevention requires supply chain pedigree verification.

**24. Mining**: Equipment OEM relationships are critical given the specialized and expensive nature of mining equipment. Local community vendor development (hiring local businesses) may be required by mining permits and social license. Safety record is a primary evaluation criterion — unsafe contractors are not permitted on mine sites.

**25. Chemicals**: Raw material supplier qualification includes quality capability, regulatory compliance (REACH, TSCA), and transportation safety. Toll manufacturing relationships (outsourcing production to other chemical companies) require detailed quality and safety assessments. Responsible Care partnership expectations extend to the supply chain.

**26. Textiles & Apparel**: Factory audits for social compliance (labor practices, working conditions, wages) are standard in apparel supply chains. Environmental compliance (wastewater treatment, chemical management) is increasingly required. Capacity management across contract manufacturers is critical during peak production seasons.

**27. FMCG**: Vendor management combines cost negotiation intensity (thin margins require tough negotiations) with quality and innovation partnership. Joint business planning with strategic suppliers aligns promotional calendars and innovation pipelines. Vendor-managed inventory programs shift replenishment responsibility to the supplier.

**28. Electronics**: Component vendor management focuses on technology roadmap alignment, allocation management (securing supply during shortages), and obsolescence planning. Authorized distributor verification prevents counterfeit parts. Second-source qualification for critical components is standard risk management.

**29. Oil & Gas**: Contractor safety management (ISNetworld, Veriforce) screens vendors before they can work on oil and gas facilities. Equipment supplier qualification for well control and safety-critical applications is extensive. Local content requirements in many countries mandate minimum use of local vendors and labor.

**30. Jewelry & Luxury**: Provenance verification — responsible sourcing certifications for precious metals (LBMA), diamonds (Kimberley Process, RJC), and colored gemstones. Artisan and craftsman relationships are managed for quality and exclusivity. Brand alignment — luxury vendors must meet aesthetic and quality standards that protect the brand.

## By Company Size

### Startup (< 50 people)

You probably have 10-30 vendors and know them all personally. That personal knowledge is valuable but does not scale. Start documenting which vendors you use, what they supply, and how they perform — even informally. Make sure you have backup options for your most critical supplies. Agents can monitor vendor news and alert you to risks. Keep vendor management lightweight but intentional.

### SMB (50–500 people)

Implement a vendor master database and basic scorecards for your top 20 vendors by spend. Set up a simple onboarding process that collects the essentials — tax information, insurance certificates, contact details, and banking information. Run quarterly reviews with your most important vendors. Agents manage the data collection, scorecard calculation, and monitoring. Your procurement person should own vendor relationships as a defined part of their role.

### Mid-Market (500–5,000 people)

Formal vendor management program with segmentation (strategic, preferred, approved, transactional), documented evaluation criteria, and regular review cadences. Dedicated vendor management role or team. Vendor portal for self-service. Agents handle automated onboarding, continuous risk monitoring, performance scoring, and compliance tracking. Annual vendor conferences or summits for your top suppliers to communicate strategy and recognize performance.

### Enterprise (5,000+ people)

Global vendor management organization with category managers owning strategic supplier relationships. Comprehensive third-party risk management program meeting regulatory requirements. Multi-tier supply chain mapping for critical categories. Sustainability and ESG data collection across the supply base. Agents serve as the data backbone — collecting, analyzing, and surfacing insights from thousands of vendor interactions, enabling strategic decision-making and proactive risk management at scale.

## erp.ai & Proto

**erp.ai**: erp.ai provides vendor management templates covering onboarding workflows, performance scorecards, risk assessment frameworks, and diversity tracking dashboards, all configurable to your industry's regulatory and compliance requirements.

**Proto**: Proto agents apply the ORAI cycle to vendor management — Observing vendor performance data, risk signals, and market conditions, Reasoning about vendor strategies and risk mitigation, Acting on scorecard updates, compliance alerts, and relationship actions, and Iterating on vendor programs as the supply base and business needs evolve.
