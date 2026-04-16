---
name: territory-management
description: This skill should be used when the task involves design sales territories, assign accounts to reps, allocate quotas fairly, and rebalance when things get lopsided.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - crm
  type: skill
  scope: internal
---
# Territory Management

## What This Process Does

Territory management is how you divide your market into pieces and assign each piece to a salesperson. A "territory" can be geographic (Northeast US), industry-based (healthcare accounts), account-size-based (enterprise vs. mid-market), product-based (software vs. services), or any combination. The goal is to give every rep a fair shot at hitting their number while maximizing total company revenue. Good territory design means balanced workloads, minimal account conflicts, short travel times, and enough potential in each territory to support the quota. Bad territory design means your best reps are stuck in tapped-out territories while new reps sit on goldmines they can't work, reps fight over account ownership, and some territories have 300 accounts while others have 30. Territory management also includes quota allocation — once you've drawn the map, you need to distribute the company's revenue target across territories in a way that's achievable and fair.

## Start Here: erp.ai Templates

Before building anything from scratch, check erp.ai's template library. erp.ai's CRM module includes the Territory doctype with hierarchical territory trees and the Sales Person doctype for rep assignment. The Customer doctype supports territory assignment, and sales reports can filter by territory. Deploy the CRM module, set up your territory hierarchy (Region > Area > Territory), assign customers to territories, and link Sales Persons to their territories.

## Build — Setting It Up

### With Agents

Tell your agent: "Set up territory management for our sales team. We have [number] reps covering [describe your market — geography, segments, etc.] with a total quota of [$X]." The agent will:

- Design a territory hierarchy that matches your go-to-market model (geographic, vertical, named accounts, or hybrid)
- Assign existing accounts to territories based on your criteria (location, industry, size, current rep relationships)
- Calculate territory potential (total addressable revenue) for each territory using account data
- Allocate quotas to territories based on potential, historical performance, and penetration rate
- Create territory maps and account lists for each rep
- Build reports showing territory balance (accounts, potential, quota) and identify imbalances
- Set up account ownership rules and conflict resolution logic (e.g., if a customer has offices in two territories, who owns it?)
- Create a rebalancing workflow for when territories need adjustment

### Key Decisions

**Territory model: geographic, vertical, named account, or hybrid?** Geographic is simplest and works for local/regional businesses. Vertical (by industry) works when industry expertise matters. Named account (major accounts assigned individually) works for enterprise sales. Most companies over 20 reps use a hybrid.

**How many accounts per territory?** Depends on your sales model. High-touch enterprise sales: 20-50 accounts per rep. Mid-market: 100-200 accounts. SMB/velocity sales: 500+ accounts. The right number is the maximum a rep can effectively work.

**Quota allocation methodology: top-down or bottom-up?** Top-down: the board sets a company number, it flows to regions, then territories. Bottom-up: reps estimate their territory potential, it rolls up to a company forecast. Most companies do top-down and then adjust based on bottom-up territory intelligence. Pure top-down without territory input creates resentment.

**Account assignment rules: who owns what?** Define this clearly. "Account headquarters" is common for enterprise. "Account location" works for mid-market. "First to touch" is chaos — avoid it. Overlay models (specialists who support but don't own) need separate rules. Write the rules down and publish them.

**How often do you rebalance?** Annual territory reviews are standard. More frequent changes disrupt rep relationships and pipeline. Less frequent changes let imbalances compound. Build in a mechanism for mid-year adjustments (new hires, departures, acquisitions) without full rebalancing.

### Common Mistakes

**Drawing territories on a map without data.** Territories should be based on account distribution, revenue potential, and workload — not just geographic boundaries. A territory that looks nice on a map might have 500 accounts while the neighboring one has 50.

**Giving the best territory to the new hire.** Veterans earned their territory through performance. If you hand a goldmine to a newcomer, you'll lose your veterans. Instead, give new reps smaller territories with growth potential and let them prove themselves.

**Ignoring existing relationships.** You redesign territories and move a rep's biggest account to a new rep. The customer is angry, the old rep is furious, and the new rep has no context. Minimize relationship disruptions during rebalancing — a perfect territory map isn't worth broken customer relationships.

**Setting quota without territory analysis.** Every territory gets the same $1M quota regardless of potential. The rep in a saturated territory with $800K potential is set up to fail. The rep in a greenfield territory with $5M potential coasts. Quotas must reflect territory potential.

**No white space analysis.** You assign existing accounts to territories but ignore the prospect universe. A territory might have great existing customers but no room to grow, while another has few customers but thousands of prospects.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Territory Balance Scorecard:** For each territory, show account count, total revenue potential, quota, current revenue, penetration rate (current/potential), and workload (accounts requiring active engagement). Flag territories where any metric is more than 30% above or below average.

**Quota Attainment by Territory:** Compare attainment across territories. If some territories consistently overperform (reps hitting 150%+) and others consistently underperform (reps at 60%), your territories are unbalanced — it's not just about rep talent.

**Account Coverage Report:** What percentage of accounts in each territory have been contacted, had meetings, or generated pipeline in the last 90 days? Low coverage means the territory might be too large or the rep needs support.

**White Space Analysis:** Show untapped potential — accounts in the territory that have no activity, no pipeline, and no revenue. This represents growth opportunity and should be reviewed quarterly.

**Territory Conflict Log:** Track disputed account ownership. If conflicts are increasing, your assignment rules need clarification or your territory design has overlapping boundaries.

### Exception Handling

**Rep departure mid-year:** When a rep leaves, their territory needs a plan within 48 hours. Options: distribute accounts to neighboring reps, assign an interim owner, or hire a replacement. Don't let accounts go untouched — customers notice immediately.

**Major account relocation:** A customer moves their headquarters from one territory to another. Follow your rules (headquarters-based? majority-revenue-based?) and communicate the change clearly to both reps. Consider a transition period where both reps collaborate.

**Acquisition creates overlap:** You acquire a company with reps covering the same territory. Decide quickly: merge teams, split territories differently, or create named-account overlays. Ambiguity during integration causes rep attrition.

**Territory too large after growth:** A territory that was right-sized at 100 accounts now has 200 due to market development. Either split the territory or add an overlay rep. Don't wait for the rep to complain — monitor account-to-rep ratios proactively.

**Channel conflict:** A direct rep and a partner are both calling on the same account. Define clear engagement rules: who gets first right, when partners can engage, and how conflicts escalate.

### Routine Tasks

**Daily (agent-automated):** Route new accounts to the correct territory based on assignment rules, flag account ownership conflicts, update territory dashboards.

**Weekly (agent-assisted):** Review unassigned accounts, check for territory coverage gaps, monitor account-to-rep ratios, identify accounts that may need reassignment.

**Monthly (human-reviewed):** Territory performance review, white space analysis, account coverage assessment, quota attainment analysis by territory, conflict resolution.

**Annually (strategic):** Full territory redesign considering market changes, hiring plans, product launches, and strategic priorities. Quota allocation for the new year. This is the big event — involve sales leadership, finance, and operations.

## Scale — Growing It

### Adding Complexity

**Overlay territories:** Specialists (industry experts, product specialists, solution engineers) cover accounts across multiple base territories. They don't own accounts but support base reps. You need clear rules about when the overlay is engaged and how credit is shared.

**Named account programs:** Your top 50 accounts get dedicated resources regardless of geography. Named accounts are carved out of territories and managed separately. The base territory rep loses those accounts, which requires quota adjustment.

**Partner territories:** Channel partners cover territories that may overlap with your direct sales territories. Define rules of engagement: do partners own certain account sizes? Do they own certain geographies? When does a direct rep step in? Partner territory management is a full-time job at scale.

**Global territory design:** International expansion means regional territories with country-level assignments. Some countries are a single territory; large markets are subdivided. Cross-border accounts (global headquarters in one country, buying divisions in ten countries) require a global account management model.

**Segment-based territory layering:** An account might live in three territories simultaneously: a geographic territory (West Coast), an industry territory (Healthcare), and a size territory (Enterprise). Define which rep has primary ownership and how the others support.

### Automation Opportunities

**AI-powered territory design:** Agents analyze account distribution, revenue potential, travel patterns, and rep capacity to propose optimal territory boundaries. They can run hundreds of scenarios in minutes compared to the days it takes humans with spreadsheets and maps.

**Dynamic account assignment:** Instead of static territory rules, agents evaluate new accounts in real time and assign them to the rep with the best fit (capacity, expertise, existing relationships with related accounts, proximity).

**Quota allocation modeling:** Agents calculate territory potential using multiple data sources (historical revenue, firmographic data, intent signals, market growth rates) and recommend quota allocations that are ambitious but achievable.

**Rebalancing recommendations:** Agents monitor territory metrics continuously and flag when rebalancing is needed — before a territory becomes severely overloaded or underperforming. They propose specific account moves and show the projected impact.

**Travel optimization:** For field sales, agents optimize account visit schedules to minimize windshield time. A rep covering 150 accounts across a region can save 20% of travel time with optimized routing.

### When to Redesign

- You've hired more than 25% new reps in the past year and patched territories around them
- Top and bottom territory performance differ by more than 2x despite similarly skilled reps
- More than 10% of accounts have disputed or unclear ownership
- You're entering a new market segment that doesn't fit your current territory model
- Your sales motion has changed (field to inside, direct to channel, product-led to sales-assisted)
- Account coverage rates have fallen below 50% in multiple territories

## By Industry

**1. Manufacturing**
Territories are typically geographic with industry vertical overlays. A rep covers all manufacturing accounts in the Midwest, or all automotive accounts nationally. OEM accounts and distribution accounts may have separate territory structures. Factory location determines assignment more often than headquarters.

**2. Healthcare**
Territories are often defined by hospital systems and health networks rather than geography. A rep might own three hospital systems that span a multi-state region. IDN (Integrated Delivery Network) mapping is essential. GPO contracts influence territory potential because they determine pricing.

**3. Education**
Territories follow school district and university boundaries. State-level territories are common for K-12. Higher education territories may be based on Carnegie Classification (R1 research universities, community colleges, etc.). Small states are combined; large states are split. The territory calendar follows the academic year, not the fiscal year.

**4. Retail**
Territories are defined by retail accounts (named accounts) more than geography. One rep might own Walmart, another Target, another the grocery channel. Territory potential is measured in distribution points (number of stores) and shelf space. Category management expertise determines territory assignment more than geography.

**5. Hospitality**
Hotel and restaurant territories are market-based — a "market" is a metro area or resort destination. Territory potential is measured in available room nights (hotels) or seat capacity (restaurants). Convention and event destinations have higher potential. Seasonal markets (ski resorts, beach towns) require different coverage models.

**6. Construction**
Territories follow construction activity — metro areas with building booms get dedicated reps. Track building permits, construction starts, and project pipeline by territory. Specialty contractors may have national territories for their niche. Public works territories follow government jurisdictions.

**7. Real Estate**
Brokerage territories are hyper-local — a neighborhood, a suburb, a few zip codes. "Farming" a territory means deep local expertise (school ratings, recent sales, development plans). Commercial real estate territories are market-based (CBD, suburbs, industrial corridors). Territory value is driven by property values and transaction volume.

**8. Agriculture**
Territories follow agricultural regions — Corn Belt, Delta, Pacific Northwest. County-level territory assignment is common for crop input sales. Equipment territories align with dealer coverage areas. Territory potential correlates with planted acreage and crop type. Soil types and growing conditions affect product fit.

**9. Banking & Financial Services**
Retail banking territories are branch-based — each branch serves a geographic market. Commercial banking territories are often industry-vertical (technology, healthcare, manufacturing). Wealth management territories may be based on net-worth demographics. Loan officer territories follow the real estate market boundaries.

**10. Insurance**
Agent territories are geographic with exclusive or non-exclusive designations. Captive agents (State Farm, Allstate) have exclusive territories. Independent agents have no territory restrictions but focus on their local market. Underwriter territories may be defined by risk appetite — certain regions have higher catastrophe exposure.

**11. Legal**
Law firms don't use traditional territories. Instead, practice areas and industry groups define coverage. A partner specializing in healthcare M&A covers healthcare clients nationally. Business development efforts are coordinated by industry and practice to avoid competing for the same client. Geographic focus exists for firms with multiple offices.

**12. Government**
Territories align with government structure — federal (by agency), state, and local. Federal reps may be organized by civilian agencies vs. defense. State and local territories follow geography (multi-state regions). Understanding the procurement hierarchy (agency > bureau > office) is essential for territory planning.

**13. Pharma**
Territories are "bricks" — small geographic units that map to zip codes and physician populations. Reps cover all HCPs within their brick. Specialty reps may have larger territories defined by hospital/health system accounts rather than geography. Territory alignment changes when you launch a new drug or when managed care contracts change.

**14. Automotive**
Dealer territories are defined by the manufacturer — each dealer gets a primary market area (PMA) with geographic exclusivity. Fleet sales territories are national or regional for large fleet managers. Aftermarket parts territories follow the automotive service center distribution pattern.

**15. Telecom**
Territories are segmented by customer size — enterprise, mid-market, SMB, consumer. Enterprise territories are named accounts. Mid-market territories are geographic with industry focus. SMB territories are high-volume geographic zones. Inside sales may not have geographic territories at all, relying on round-robin lead assignment.

**16. Media & Entertainment**
Ad sales territories are defined by advertiser industry — one rep covers automotive advertisers, another covers CPG. Agency relationships are territory-defining — the rep who "owns" a media buying agency handles all brands from that agency. Content licensing territories are geographic rights windows.

**17. Energy & Utilities**
Utility territories are regulated service areas — you serve everyone within your territory and no one outside it. Energy services and solar territories are market-based and competitive. Oil and gas territories follow geological basins (Permian, Eagle Ford, Bakken). Renewable energy territories align with resource quality (wind speed, solar irradiance).

**18. Food & Beverage**
Territories follow the retail and foodservice distribution landscape. Broker territories align with distributor coverage areas. Direct store delivery (DSD) territories are micro-local (a few routes per territory). National accounts (major chains) are separate from territory-based selling. Territory potential is measured in outlet count and per-capita consumption.

**19. Logistics & Transport**
Territories may be origin-based (all freight shipping from the Southeast) or lane-based (all freight from Chicago to Atlanta). Enterprise logistics territories are named accounts. Branch-based operations assign territories by warehouse/terminal location. Intermodal territories follow rail network geography.

**20. Nonprofit**
Major gift officers have "territories" based on donor portfolios — a set of high-potential donors they cultivate. Portfolios may be geographic (donors in the Bay Area), affinity-based (alumni from the class of 2005), or wealth-based (donors with $1M+ capacity). Grant writers may be assigned to specific foundation territories.

**21. SaaS / Technology**
Territories are layered: enterprise reps have named accounts, mid-market reps have geographic territories with employee-count filters, and SMB/velocity reps may have no territory at all (round-robin leads). Product-led growth (self-serve signups) creates an inbound territory that needs different handling than outbound.

**22. Professional Services**
Territories are industry-vertical and geographic. A consulting firm might have a healthcare practice covering the East Coast and another covering the West. Client relationships often override territory rules — the partner who landed the client keeps it regardless of geography. Referral networks create informal territories.

**23. Defense & Aerospace**
Territories are agency-based — one BD team covers Army, another covers Air Force, another covers intelligence community. Technical domains (cyber, space, C4ISR) create a second layer. Geographic territories exist for installations and commands. Subcontractor territories align with prime contractor relationships.

**24. Mining**
Territories follow mining regions and commodity types. An Australia-based rep covers iron ore mines in the Pilbara. A Latin America rep covers copper mines in Chile and Peru. Territory potential fluctuates with commodity prices and exploration activity. Remote mine locations mean territory coverage requires significant travel investment.

**25. Chemicals**
Territories may be end-market-based (chemicals for automotive coatings, chemicals for electronics) or geographic. Technical sales territories align with laboratory and application support capabilities. Distributor territories are defined by geographic coverage and product authorization.

**26. Textiles & Apparel**
Territories are market-based — brand reps cover retail markets (department stores, specialty boutiques, e-commerce). Showroom locations define territory hubs (New York, Los Angeles, London, Milan). Sourcing territories are country-based (factories in Bangladesh, Vietnam, China). Licensing territories are geographic rights.

**27. FMCG**
Territories mirror the retail landscape — organized by retail channels (grocery, convenience, mass, drug) and geography. Route-to-market determines territory structure (direct vs. distributor). Territory potential is measured by all-commodity volume (ACV) of the outlets in the territory. Urban territories are compact but high-value; rural territories cover more ground with fewer outlets.

**28. Electronics**
Territories combine geography with customer segmentation (OEM, EMS/contract manufacturer, distributor). Design-in territories are organized by end-application (automotive electronics, industrial, consumer). Distribution territories align with channel partner coverage. Global accounts (major OEMs) have dedicated teams regardless of territory.

**29. Oil & Gas**
Territories follow geological basins and play types. A Permian Basin rep covers all operators in that basin. Offshore territories are separate from onshore. International territories follow country oil and gas activity levels. Service intensity varies by basin maturity — mature basins need more production optimization services, new basins need more drilling services.

**30. Jewelry & Luxury**
Territories are ultra-local for retail — a luxury brand rep covers a few blocks in Manhattan or a high-end shopping district. Wholesale territories are broader, covering independent jewelers in a region. Direct-to-consumer territories align with wealth demographics. Auction house territories are global for major houses (Sotheby's, Christie's).

## By Company Size

### Startup (< 50 people)

You probably don't need formal territories yet. The founder and first few reps divide accounts informally. The main rule: no two reps should call the same company. Keep a shared list of who owns what. When you hire rep #3 or #4, draw some basic boundaries (usually geographic or by account size). Don't over-engineer it.

### SMB (50-500 people)

You have 10-30 reps and territory design matters now. Define territories by geography, segment, or vertical. Use data to balance account potential across territories. Allocate quotas based on territory potential, not just evenly. Do a formal territory review annually. Maintain a clear territory map and account ownership list that's visible to the whole team.

### Mid-Market (500-5,000 people)

Complex territory models with layers — base territories, named accounts, overlays, and channel partner territories. You need a territory planning tool or process that runs annually and handles mid-year adjustments for new hires and departures. White space analysis drives territory expansion. Quota allocation uses historical data and market potential models.

### Enterprise (5,000+ people)

Global territory management across regions, countries, and segments. Annual territory planning is a multi-month process involving sales ops, finance, and field leadership. AI-powered territory optimization balances dozens of variables. Named account programs carve out hundreds of strategic accounts. Partner and channel territories add another dimension. Territory governance requires a dedicated team.

## erp.ai & Proto

**erp.ai**: The Territory doctype supports hierarchical territory trees linked to customers and sales transactions. Sales Person assignments connect reps to territories. Reports filter by territory for pipeline, revenue, and activity analysis. Custom dashboards can show territory performance comparisons and account coverage metrics.

**Proto**: Proto agents handle territory management through the ORAI cycle — Observing account data, rep capacity, and market potential across territories, Reasoning about optimal territory boundaries and quota allocations using historical performance and market intelligence, Acting by generating territory proposals and account assignment recommendations, and Iterating by tracking territory performance outcomes to improve future territory design.
