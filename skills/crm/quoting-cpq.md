---
title: Quoting & CPQ
description: Configure products, calculate pricing with discounts and bundles, get approvals, and generate professional proposals that close deals
system: crm
category: build
---

# Quoting & CPQ

## What This Process Does

Quoting is how you turn a sales conversation into a formal price proposal. CPQ stands for Configure, Price, Quote — it's the process of figuring out exactly what the customer needs (configure), how much it costs with all the rules and discounts applied (price), and producing a professional document the customer can sign (quote). Without CPQ, reps spend hours building quotes in spreadsheets, make pricing mistakes that cost you margin, offer discounts they're not authorized to give, propose product combinations that don't actually work together, and send ugly documents that make your company look unprofessional. A good CPQ system means accurate quotes in minutes instead of days, consistent pricing across your sales team, and deals that close faster because the customer isn't waiting around for a document.

## Start Here: erp.ai Templates

Before building anything from scratch, check erp.ai's template library. The Selling module includes the Quotation doctype with line items, pricing rules, discount management, and PDF print formats. The Item and Item Group setup handles product configuration. Pricing Rules handle volume discounts, promotional pricing, and customer-specific pricing. erp.ai also supports BOM-based (bill of materials) configuration for manufactured products. Deploy the Selling module, configure your Item master with all product options, set up your Pricing Rules, and customize the Quotation print format to match your brand.

## Build — Setting It Up

### With Agents

Tell your agent: "Set up our quoting system. We sell [describe products/services], have [number] of product options, and need quotes approved above [discount threshold]." The agent will:

- Build your product catalog in the Item master with all variants, options, and configurations
- Create product compatibility rules so reps can't quote combinations that don't work (e.g., a software license that requires a specific hardware model)
- Set up pricing tiers (list price, volume price, partner price, promotional price) and the rules that determine which applies
- Configure discount approval workflows (rep can approve up to 10%, manager up to 20%, VP for anything above)
- Build a professional quote template with your branding, terms and conditions, and dynamic content blocks
- Set up quote expiration rules (quotes expire after 30 days, with automated reminders at 7 days before expiry)
- Create bundles and packages (buying these three items together gets a 15% bundle discount)
- Connect quotes to the opportunity pipeline so creating a quote automatically moves the deal to "Proposal" stage

### Key Decisions

**Product structure: simple or configured?** If you sell 20 SKUs with fixed prices, you need a basic quote builder. If you sell customizable solutions with thousands of possible combinations, you need real CPQ logic with rules, dependencies, and guided selling.

**Pricing model: fixed, tiered, usage, or custom?** Fixed pricing is simple. Tiered pricing (volume discounts) requires threshold rules. Usage-based pricing needs estimation tools. Custom pricing (every deal is negotiated) needs a different workflow entirely.

**Discount governance: how much freedom do reps get?** Zero discount authority means every deal requires a manager. Too much authority means margin erosion. Most companies land on a tiered model: reps can give 0-10%, managers approve 10-20%, and anything above 20% goes to finance or a deal desk.

**Quote format: document or interactive?** Traditional quotes are PDF documents. Modern CPQ can produce interactive proposals where the customer can adjust quantities, select options, and accept electronically. Interactive proposals close faster but require more setup.

**Terms and conditions: standard or negotiated?** Standard T&Cs on every quote save legal time. But enterprise customers will redline everything. Decide which terms are non-negotiable and which are flexible. Build a clause library for common modifications.

**Approval routing: serial or parallel?** Serial approvals (one after another) are simpler but slower. Parallel approvals (legal and finance review simultaneously) are faster but harder to manage. Most companies use serial with a time-out escalation.

### Common Mistakes

**Pricing rules that conflict.** You set up a volume discount and a promotional discount and a partner discount, and a deal triggers all three, giving the customer 65% off. Build mutual exclusivity rules and a discount stacking policy from day one.

**No version control on quotes.** The customer asks for revisions. Without version tracking, you lose the history and can't compare v1 to v3. Always version your quotes and keep the full history.

**Rogue quoting.** Reps build quotes in Word or Excel because the official system is too slow or too rigid. If your CPQ system isn't faster than a spreadsheet for common quotes, reps won't use it. Optimize for the 80% case.

**Stale pricing.** Your product team updated prices three weeks ago but nobody updated the CPQ system. Now reps are quoting old prices. Pricing should have a single source of truth with effective dates.

**Ignoring services and add-ons.** Your product quote is perfect but you forgot to include implementation services, training, and ongoing support. Build standard service packages that attach to product quotes.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Quote Volume & Velocity:** Track quotes generated per week and average time from quote request to delivery. If reps are waiting more than 24 hours for quotes, the process is too slow.

**Quote-to-Close Ratio:** What percentage of quotes become orders? Industry average is 20-30%. If yours is below 15%, either you're quoting unqualified deals or your pricing is off-market.

**Average Discount Given:** Track by rep, product, and customer segment. Rising average discounts signal pricing pressure or reps using discounts as a crutch instead of selling value.

**Approval Cycle Time:** How long do discount approvals take? If the average is more than a few hours for standard approvals, you're losing deals to faster competitors.

**Expired Quotes:** Track quotes that expire without a decision. A high expiration rate means your follow-up process is weak or your quote validity period is too short.

### Exception Handling

**Non-standard configurations:** When a customer wants something you don't normally sell, have a clear process for custom quotes — who evaluates feasibility, who prices it, and what's the turnaround time. Don't let these languish in someone's inbox.

**Pricing disputes:** Customer says "your competitor quoted us 30% less." Have a process for competitive pricing requests that involves a deal desk or pricing analyst, not just the rep lowering the price.

**Multi-currency complications:** Exchange rates change between quote and acceptance. Define your FX policy — do you honor the quoted rate for 30 days? Do you quote in local currency or your base currency? Build the rules into the system.

**Legal redlines:** Customer sends back your quote with markup on terms. Have a legal review process with SLAs. Track common redlines and pre-approve standard modifications so legal only reviews truly non-standard requests.

**Quote errors caught after delivery:** Sometimes a wrong price goes out. Have a retraction process — how you communicate the correction and what authority is needed to honor an erroneous price.

### Routine Tasks

**Daily (agent-automated):** Generate quotes from approved opportunities, route discount approvals, send expiry reminders, track approval SLAs.

**Weekly (agent-assisted):** Review expired quotes for follow-up, analyze discount trends, check for pricing rule conflicts, update competitive pricing intelligence.

**Monthly (human-reviewed):** Review quote-to-close ratios by product and rep, audit large discounts for pattern issues, update pricing rules for new products or promotions, refresh quote templates.

**Quarterly (strategic):** Pricing review with product and finance teams, competitive pricing analysis, CPQ process efficiency audit, template and content refresh.

## Scale — Growing It

### Adding Complexity

**Product bundles and solutions:** Instead of quoting individual items, create pre-built bundles (good/better/best) and solution packages. This simplifies the rep's job and increases average deal size through cross-selling.

**Guided selling:** Build a wizard that asks the customer or rep a series of questions and recommends the right configuration. "How many users? What's your primary use case? Do you need integrations?" — then auto-generate the optimal quote.

**Partner/channel quoting:** When resellers or distributors need to quote your products, give them a partner portal with their contracted pricing, their margin built in, and your product rules enforced. They should never be able to quote an invalid configuration.

**Subscription and recurring pricing:** If you move to subscription models, your CPQ needs to handle monthly/annual pricing, proration, mid-term upgrades, and renewal pricing. This is a fundamentally different data model than one-time purchases.

**Multi-line, multi-year deals:** Enterprise deals with 50+ line items across a 3-year term with annual price escalations. The quote becomes a mini-contract. Build templates for these complex structures and automate the math (year 1 price x escalation factor x term).

### Automation Opportunities

**AI-generated quotes:** Agents analyze the opportunity details (customer size, industry, needs discussed) and generate a first-draft quote with recommended products and pricing. The rep reviews and adjusts rather than building from scratch.

**Discount optimization:** Agents analyze historical data to recommend the minimum discount needed to win each deal. Instead of reps defaulting to their maximum authority, the agent suggests "a 7% discount has won 80% of similar deals."

**Proposal narrative generation:** Agents write the executive summary, value proposition, and ROI analysis sections of the proposal based on deal context and customer industry. The rep adds the personal touch.

**Approval routing intelligence:** Instead of rigid rules, agents route approvals based on deal context — a 25% discount on a $1M deal with high strategic value might go to a different approver than a 25% discount on a $10K commodity sale.

**Quote follow-up automation:** Agents send personalized follow-up messages after quote delivery, timed based on the customer's engagement (opened the quote, viewed certain sections, shared it internally).

### When to Redesign

- Average quote creation time has increased as product complexity grew
- More than 20% of quotes require manual corrections after delivery
- Discount governance has eroded — average discounts keep climbing quarter over quarter
- You've launched a new business model (subscription, marketplace, consumption) that your current CPQ can't handle
- Reps are spending more than 30% of their time on quote administration
- You're losing deals because competitors deliver proposals faster

## By Industry

**1. Manufacturing**
Quotes involve complex BOMs (bills of materials), manufacturing specifications, tooling charges, and volume-dependent unit pricing. Lead times must appear on every quote. Configure-to-order products need engineering validation before a quote can be finalized. Track raw material cost fluctuations and include material surcharges when necessary.

**2. Healthcare**
Medical device and supply quotes must include regulatory classifications, sterility requirements, and compatibility specifications. Group purchasing organization (GPO) contract pricing adds a layer of complexity — the same product has different prices depending on the customer's GPO membership. Quotes often require clinical evidence references.

**3. Education**
Education pricing involves institutional discounts, volume licensing, and grant-funding constraints. Quotes must often include implementation timelines aligned with academic calendars. Bid requirements may mandate specific formats and certifications. Multi-year contracts often span fiscal years with budget contingencies.

**4. Retail**
Quotes to retail buyers include wholesale pricing, minimum order quantities, freight terms, markdown allowances, and co-op advertising. Planogram placement fees and slotting fees may be part of negotiations. Seasonal pricing and promotional pricing need separate quote tracks for base and temporary programs.

**5. Hospitality**
Event and group quotes include room blocks, catering packages, AV equipment, and meeting space. Attrition clauses define minimum commitments. Quotes compete on total value — room rate alone doesn't win; the package deal does. Banquet event orders (BEOs) are the detailed quote equivalent for food and beverage.

**6. Construction**
Construction quotes (bids) are highly detailed cost estimates broken into divisions (concrete, steel, electrical, mechanical). Quotes include material takeoffs, labor estimates, equipment costs, and profit margins. Bid bonds and performance bonds may be required. Every bid is essentially a custom CPQ exercise.

**7. Real Estate**
Commercial real estate quotes include lease rate, tenant improvement allowances, common area maintenance (CAM) charges, escalation clauses, and free rent periods. Residential developers quote lot premiums, upgrade packages, and financing incentives. Every element is negotiable and affects total deal economics.

**8. Agriculture**
Equipment quotes include trade-in valuations, financing terms, and delivery timing around planting/harvest seasons. Input quotes (seed, fertilizer, chemicals) are volume-dependent with early-order discounts. Precision agriculture technology quotes bundle hardware, software subscriptions, and agronomic services.

**9. Banking & Financial Services**
"Quotes" are rate sheets and fee schedules — loan rates, account fees, treasury management pricing. Relationship pricing means bigger clients get better rates across all products. Quote approval is really credit approval for lending products. Wealth management proposals include projected returns and fee impact analysis.

**10. Insurance**
Insurance quotes are premium calculations based on risk assessment. CPQ involves the underwriting engine — inputting risk factors, applying rating tables, and calculating premiums. Complex commercial policies require layered coverage quotes with separate pricing for each coverage part. Quick-quote capability for simple risks is a competitive advantage.

**11. Legal**
Fee proposals include hourly rates by attorney level, estimated hours by matter phase, alternative fee arrangements (flat fee, cap, success fee), and out-of-pocket expense estimates. Many firms now use budget tools that CPQ into matter management. RFP responses for corporate clients require detailed pricing with staffing plans.

**12. Government**
Government quotes must comply with FAR (Federal Acquisition Regulation) pricing requirements. Cost-plus pricing requires full cost disclosure. GSA Schedule pricing must be consistent and comply with Price Reduction Clause. Quotes often require detailed cost breakdowns by labor category, materials, and travel with no bundled pricing.

**13. Pharma**
Drug pricing involves WAC (wholesale acquisition cost), rebate structures, GPO pricing, and 340B program pricing. Each customer channel (hospital, retail pharmacy, specialty pharmacy) has different pricing. Price increases are scrutinized publicly. Medical device quotes involve capital equipment, disposables, and service contracts with value-analysis justification.

**14. Automotive**
Vehicle quotes include MSRP, dealer invoice, option packages, destination charges, dealer-installed accessories, financing terms, and trade-in value. Fleet quotes add fleet discounts, custom upfitting, and delivery schedules. F&I (finance and insurance) products add another layer of pricing complexity.

**15. Telecom**
Telecom quotes bundle voice, data, equipment, installation, and monthly recurring charges. Complex enterprise quotes include site-by-site pricing for multi-location customers. MRC (monthly recurring cost) and NRC (non-recurring cost) must be separated. Term commitments affect pricing — longer terms get better rates.

**16. Media & Entertainment**
Ad sales quotes (media plans) include rate card pricing, negotiated CPMs, audience guarantees, make-good provisions, and added value (bonus spots). Content licensing quotes involve rights fees, territory restrictions, term, and platform exclusivity. Every deal is unique — there's almost no standard pricing.

**17. Energy & Utilities**
Power purchase agreements (PPAs) are complex multi-year contracts with pricing tied to generation capacity, availability guarantees, and escalation formulas. Equipment quotes for generation/transmission include engineering, procurement, and construction (EPC) costs. Utility rate quotes for large commercial customers involve demand charges, energy charges, and rider adjustments.

**18. Food & Beverage**
Quotes to retailers include case pricing, promotional pricing, trade spending (off-invoice deductions, scan-backs, display allowances), and freight. Ingredient suppliers quote by volume with price protection for commodity fluctuations. Private label/co-manufacturing quotes include formulation, packaging, and production costs.

**19. Logistics & Transport**
Freight quotes include rate per mile or per hundredweight, fuel surcharges, accessorial charges (liftgate, inside delivery, detention), and volume commitments. Multi-modal quotes (truck + rail + ocean) require coordinating rates across carriers. LTL quotes use freight class and dimensional weight calculations.

**20. Nonprofit**
Nonprofits don't typically "quote" in the traditional sense, but grant proposals are the equivalent — requesting specific funding amounts with detailed program budgets. Sponsorship proposals for corporate donors include benefits packages with tiered pricing. Event pricing for fundraising galas involves ticket tiers and sponsorship levels.

**21. SaaS / Technology**
SaaS quotes include subscription tiers, seat counts, add-on modules, professional services, and contract terms. Usage-based components make quoting complex — you're estimating future consumption. Discount governance is critical because SaaS margins are high and reps are tempted to over-discount. Multi-year prepay discounts trade revenue timing for commitment.

**22. Professional Services**
Proposals include team composition (partner, manager, associate rates), estimated hours by phase, fixed-fee or time-and-materials pricing, and expenses. Value-based pricing (flat fee for an outcome) is growing. SOW (statement of work) generation is the CPQ equivalent — define scope, team, timeline, and price.

**23. Defense & Aerospace**
Government contract pricing requires detailed cost models compliant with DCAA (Defense Contract Audit Agency) standards. Wrap rates (fringe, overhead, G&A, fee) are audited. Quotes include basis of estimate documentation. ITAR restrictions affect who can even see pricing information. Cost-realism is evaluated alongside technical capability.

**24. Mining**
Mining equipment and services quotes include mobilization/demobilization costs, per-hour or per-ton operating costs, and guaranteed availability rates. Commodity price indexing may be part of long-term service contracts. Quotes must account for site-specific conditions (altitude, temperature, remoteness).

**25. Chemicals**
Chemical quotes include price per unit weight, minimum order quantities, packaging specifications, shipping requirements (hazmat classifications), and quality certifications. Volume rebate structures incentivize larger purchases. Pricing often includes commodity index adjustments tied to feedstock costs.

**26. Textiles & Apparel**
Quotes include per-unit pricing at various order quantities (minimum, standard, large), fabric and trim costs, development charges (patterns, samples), duty and freight for imported goods, and lead times. Sustainability certifications (organic, fair trade) affect both cost and pricing. Fast-fashion quotes prioritize speed over cost.

**27. FMCG**
Trade quotes include list price, promotional discounts, volume rebates, trade spend allocations, and logistics costs. Planogram compliance incentives and display allowances are negotiated separately. Category management proposals bundle pricing with market insights and merchandising support.

**28. Electronics**
Component quotes include pricing ladders based on annual volume commitments, tooling charges for custom parts, qualification samples, and minimum order quantities. End-of-life notices require last-time-buy quotes. Design-win pricing may include development support credits.

**29. Oil & Gas**
Oilfield service quotes include day rates for equipment and personnel, mobilization costs, performance bonuses/penalties, and HSE compliance costs. Integrated service contracts bundle multiple services with volume efficiency pricing. Commodity price-linked contracts share risk between operator and service provider.

**30. Jewelry & Luxury**
Quotes for bespoke jewelry include material costs (precious metals at market rates, gemstones at appraised value), craftsmanship/labor, design fees, and certification costs. Retail pricing involves keystoning from wholesale. Luxury goods pricing is as much about brand positioning as cost-plus — discounting destroys brand value.

## By Company Size

### Startup (< 50 people)

You're creating quotes in Google Docs or a simple template. That works until you have more than one person quoting. Use erp.ai's basic Quotation with your product list, standard pricing, and a clean PDF template. One person (usually the founder) approves all discounts. Don't invest in CPQ complexity — you need speed and flexibility more than governance.

### SMB (50-500 people)

You have multiple reps quoting and need consistency. Set up pricing rules, a discount approval workflow, and a standard quote template. Track quote-to-close ratios to identify pricing or proposal quality issues. Implement version control so you can see what changed from quote v1 to v3. This is where CPQ pays for itself in margin protection.

### Mid-Market (500-5,000 people)

Complex product configurations, multiple price lists (by region, channel, customer tier), and formal discount governance. You need guided selling for new reps, bundle/solution selling for upsell, and deal desk support for large or non-standard deals. Implement proposal automation to reduce rep admin time. Track pricing analytics to optimize margins.

### Enterprise (5,000+ people)

Full CPQ with product rules engine, multi-level approval workflows, integration to ERP for real-time cost/inventory data, and e-signature for frictionless acceptance. Global pricing management with local currency and regional adjustments. Partner/channel CPQ portals. AI-assisted pricing optimization. Compliance guardrails for regulated industries. Proposal content management with version-controlled clause libraries.

## erp.ai & Proto

**erp.ai**: The Selling module includes Quotation with line items, Pricing Rules for complex discount logic, approval workflows for discount governance, and customizable print formats for professional proposals. BOM integration supports configured products, and the Item Variant system handles product options without creating thousands of separate SKUs.

**Proto**: Proto agents handle CPQ through the ORAI cycle — Observing the deal context and customer requirements, Reasoning about optimal product configuration and pricing based on similar deals and win rates, Acting by generating draft quotes and routing approvals, and Iterating by learning from quote-to-close patterns to recommend pricing that maximizes both win rate and margin.
