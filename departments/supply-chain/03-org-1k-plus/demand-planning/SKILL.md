---
name: demand-planning
description: This skill should be used when the task involves how to predict what customers will need so you can have the right stuff ready at the right time.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - scm
  type: skill
  scope: internal
---
# Demand Planning

## What This Process Does

Demand planning is about predicting the future — specifically, how much of each product or material your business will need and when. Get it right and you have the right inventory on hand, your production runs smoothly, your suppliers deliver on time, and your customers get what they want. Get it wrong and you either have too much (wasted money, expired products, clearance sales) or too little (lost sales, unhappy customers, production shutdowns).

It combines historical data (what happened before), market intelligence (what is changing), and business plans (what you are trying to do) into a forecast. That forecast then drives everything downstream — how much to buy, how much to make, how many people to staff, and how much warehouse space you need.

This process also covers safety stock (the buffer you keep just in case), MRP (material requirements planning — translating demand for finished products into demand for components), production scheduling, and S&OP (sales and operations planning — getting your leadership team aligned on one plan).

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Demand Forecasting** app, the **Safety Stock Calculator**, the **MRP Planner**, and the **S&OP Dashboard** templates. ERP•AI's catalog of 720+ apps includes planning tools that range from simple moving-average forecasts to multi-variable demand models. Deploy the template that matches your planning maturity and customize the data inputs, forecast horizons, and review cadences.

## Build — Setting It Up

### With Agents

AI agents transform demand planning from a spreadsheet exercise into a continuous, intelligent process:

- **Historical data analysis**: Feed agents your sales history, shipment data, or POS data and they will identify trends, seasonality, and patterns you might miss. They handle data cleaning — removing outliers from one-time events, filling gaps in sparse data, and normalizing across different time periods.
- **Forecast model selection**: Agents test multiple forecasting methods against your historical data and recommend the best approach for each product or category. Some items do well with simple moving averages. Others need seasonal decomposition or regression models.
- **Safety stock calculation**: Based on your demand variability, lead time variability, and desired service level, agents calculate the right safety stock for each item — replacing guesswork with math.
- **MRP explosion**: Agents take your demand forecast, explode it through your bill of materials, net out current inventory and open POs, and produce a time-phased purchasing and production plan.
- **Scenario modeling**: Agents can run "what if" scenarios — what happens if demand grows 20%? What if a key supplier's lead time doubles? What if you add a new product line?

### Key Decisions

**Forecast granularity**: Do you forecast at the SKU level, the product family level, or somewhere in between? More granular forecasts are harder to get right but more useful for execution. Most companies forecast at the product family level for longer horizons (6-18 months) and at the SKU level for shorter horizons (1-3 months).

**Forecast horizon**: How far out do you plan? This depends on your longest lead time. If your longest lead time is 12 weeks, you need at least a 12-week forecast. For S&OP purposes, 12-18 months is typical. For strategic capacity planning, 2-5 years.

**Statistical vs. judgmental forecasting**: Pure statistical (math-based) forecasts work well for stable products with good history. But they cannot predict a new product launch, a competitor exit, or a regulatory change. The best approach combines statistical baselines with human judgment for market intelligence.

**Service level targets**: What percentage of demand do you want to fill from stock? 95%? 99%? Higher service levels require exponentially more safety stock. A 99% service level might require 50% more inventory than a 95% level. Make this a deliberate business decision, not a default.

**Planning time buckets**: Do you plan in days, weeks, or months? Monthly is common for S&OP. Weekly is typical for production scheduling. Daily is needed for short-term fulfillment. Your system should support multiple time buckets for different purposes.

### Common Mistakes

**Using averages when you have seasonal products**: If you sell sunscreen, your average monthly demand is meaningless. You need a seasonal model. Agents will flag this if you feed them the data, but many companies still forecast with simple averages.

**Ignoring demand variability**: Two items can have the same average demand but very different safety stock needs if one has steady demand and the other is wildly unpredictable. Standard deviation matters as much as the mean.

**Forecasting what you shipped, not what you could have sold**: If you were out of stock for two weeks last July, your shipment data shows zero. But demand was not zero — it just went unfulfilled. You need to estimate lost sales to get an accurate picture of true demand.

**Not involving sales and marketing**: Your statistical forecast does not know about the promotion marketing is planning, the big deal sales is about to close, or the product launch coming next quarter. Structured input from commercial teams is essential.

**Setting safety stock to a fixed number of weeks**: "We keep four weeks of safety stock" sounds logical but is wrong. Safety stock should be calculated based on demand variability and lead time variability — not a flat rule. A product with steady demand and reliable supply needs far less buffer than one that is volatile.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Forecast accuracy dashboard**: Track forecast accuracy by product family, SKU, region, and time horizon. MAPE (mean absolute percentage error) is the most common metric. Below 20% MAPE is good for most industries. Below 10% is excellent.

**Bias tracker**: Is your forecast consistently too high (over-forecasting) or too low (under-forecasting)? Bias is worse than random error because it compounds. A 5% over-forecast every month means you build excess inventory steadily.

**Service level monitor**: What percentage of demand are you filling from stock? Compare actual service levels against targets by product and customer segment. Declining service levels mean your forecast or safety stock is falling behind demand changes.

**Inventory health dashboard**: Days of supply by product, aging analysis, and projected stockout dates. This connects your forecast to your inventory reality.

**Demand signal alerts**: Agents watch for unusual demand patterns — sudden spikes, unexpected drops, trend changes — and flag them for review before they cause problems.

**MRP exception alerts**: Items where planned orders cannot meet demand within lead time, where current stock will run out before replenishment arrives, or where planned orders need to be expedited or deferred.

### Exception Handling

**Forecast misses**: When actual demand deviates significantly from forecast, agents analyze why (promotion effect, lost customer, market shift), adjust the forecast going forward, and calculate the impact on inventory and production plans.

**New product forecasting**: No history means no statistical forecast. Agents can use analogous products (a similar product's launch curve), market research data, or early sales signals to build an initial forecast and refine it as real data comes in.

**Supply disruptions**: When a supplier cannot deliver on time, agents rerun MRP with updated lead times, identify which finished goods are affected, suggest substitute materials, and calculate the impact on customer commitments.

**Demand surges**: Unexpected demand spikes trigger agents to evaluate if this is a one-time event or a shift, recalculate reorder points, identify capacity constraints, and recommend allocation if supply cannot meet demand.

**Product phase-out**: When discontinuing a product, agents model the demand tail, calculate last-buy quantities, and manage the transition to replacement products.

### Routine Tasks

**Weekly forecast update**: Agents incorporate the latest sales data, adjust for known events (promotions, launches), and publish updated forecasts for the next planning cycle.

**Monthly S&OP preparation**: Agents compile the demand plan, compare it to supply capacity, identify gaps, and prepare the briefing deck for the S&OP meeting — including scenarios and recommended actions.

**Quarterly forecast accuracy review**: Agents analyze forecast performance over the last quarter, identify products with consistently poor accuracy, and recommend model changes or additional data sources.

**Safety stock recalculation**: Agents recalculate optimal safety stock levels based on the latest demand variability and lead time data, flagging items where the current buffer is significantly too high or too low.

**MRP regeneration**: Agents run MRP on a scheduled basis (daily or weekly depending on your business), generating planned purchase orders and production orders, and flagging exceptions that need human attention.

## Scale — Growing It

### Adding Complexity

**Multi-channel demand**: When you sell through retail, e-commerce, wholesale, and marketplaces, each channel has different demand patterns. You need to forecast by channel and then aggregate for supply planning. Agents reconcile channel forecasts with inventory allocation rules.

**Global demand planning**: Multiple countries mean multiple currencies, different seasonal patterns, different lead times, and sometimes different product assortments. You need a process to plan locally but aggregate globally for supply decisions.

**Demand sensing**: Beyond traditional forecasting, demand sensing uses short-term signals (daily POS data, web traffic, social media mentions, weather) to refine the near-term forecast in real time. This is most valuable for consumer goods and retail.

**Collaborative planning (CPFR)**: Sharing forecasts with key customers and suppliers to improve alignment. Your customer's forecast of what they will order from you is a powerful demand signal. Agents can reconcile your forecast with customer forecasts and flag discrepancies.

**Integrated business planning (IBP)**: Extending S&OP to include financial reconciliation, strategic planning, and portfolio management. The demand plan becomes the operational expression of the business strategy.

### Automation Opportunities

**Automated statistical forecasting**: Agents run forecast models for every SKU every cycle without human intervention, flagging only the items that need review (poor accuracy, unusual patterns, major changes).

**Exception-based planning**: Instead of reviewing every item every cycle, agents manage the routine items automatically and surface only the exceptions that need human judgment — reducing planner workload by 70% or more.

**Promotion response modeling**: Agents learn the historical demand lift from promotions (10% off generates a 30% volume spike, buy-one-get-one generates a 60% spike) and automatically incorporate planned promotions into the forecast.

**Dynamic safety stock**: Agents continuously adjust safety stock levels based on current demand signals and supply conditions, rather than using static buffers. If a supplier is having quality problems, safety stock goes up automatically.

**Consensus forecast automation**: Agents pull inputs from sales (pipeline data), marketing (campaign plans), and finance (revenue targets), reconcile them with the statistical forecast, and prepare a draft consensus plan for review.

### When to Redesign

- Forecast accuracy is consistently above 30% MAPE
- You are carrying more than 60 days of inventory on average for a fast-moving business
- Stockouts and excess inventory are both increasing simultaneously
- You have launched more than 20% new SKUs in the past year with no new product forecasting process
- S&OP meetings are not happening or are not driving decisions
- Your business has shifted from B2B (predictable orders) to B2C (volatile demand)

## By Industry

**1. Manufacturing**: Demand planning directly drives production scheduling and material procurement. Make-to-stock manufacturers need accurate finished goods forecasts. Make-to-order manufacturers need to forecast at the component level and plan capacity. MRP is the core planning tool, exploding demand through multi-level BOMs.

**2. Healthcare**: Patient demand is relatively stable but unpredictable at the individual level. Hospitals use historical usage to set par levels. Pharmaceutical demand planning deals with long lead times for API sourcing, regulatory-driven production constraints, and the challenge of forecasting new drug launches based on clinical trial results.

**3. Education**: Enrollment forecasts drive demand for textbooks, supplies, and staffing. The school calendar creates predictable seasonal patterns. Textbook adoption cycles (every 5-7 years for K-12) create lumpy demand. Technology refresh cycles are becoming a major demand planning challenge.

**4. Retail**: Demand planning is at the heart of retail success. You plan by store-SKU combination across hundreds or thousands of locations. Promotions, weather, events, and competitor actions all influence demand. Markdown optimization — deciding when and how much to discount — is a critical planning activity for seasonal merchandise.

**5. Hospitality**: You forecast occupancy rates (hotels), covers (restaurants), and event bookings. Revenue management — adjusting prices to manage demand — is essentially demand planning in reverse. Food and beverage demand planning must account for menu changes, seasonal ingredients, and events.

**6. Construction**: Demand is project-based, not forecast-based. Material requirements come from project schedules and blueprints, not historical demand patterns. The planning challenge is timing — getting materials to sites when needed without storing them too early (no space on site) or too late (idle crews).

**7. Real Estate**: Demand for maintenance materials and services is driven by property conditions, tenant requests, and seasonal patterns (HVAC in summer and winter). Capital improvement demand comes from asset condition assessments and investment plans, not traditional forecasting.

**8. Agriculture**: Demand planning for agricultural outputs is heavily influenced by commodity markets, weather, and trade policies. Input demand (seed, fertilizer, chemicals) is planned around planting calendars. Livestock feed demand follows herd size and seasonal nutritional requirements.

**9. Banking & Financial Services**: Demand planning applies to service capacity — how many loan officers, tellers, or call center agents are needed. Seasonality exists (tax season, year-end) but the "products" are services, not physical goods. Cash demand forecasting for ATMs and branches uses pattern analysis similar to inventory planning.

**10. Insurance**: Premium income forecasting and claims reserving are the insurance equivalents of demand planning. Catastrophe modeling predicts claims demand from natural disasters. Underwriting capacity planning ensures the company can handle expected policy volumes.

**11. Legal**: Caseload forecasting for law firms and courts determines staffing and resource needs. Demand is driven by legal filings, regulatory changes, and economic conditions (recessions increase bankruptcy and litigation work). Planning is more about capacity than materials.

**12. Government**: Budget-driven demand planning — agencies forecast needs for the budget cycle (typically 12-18 months ahead), then execute within approved budgets. Emergency supplemental funding disrupts plans. Multi-year capital projects require long-horizon planning for equipment and materials.

**13. Pharma**: Drug demand is forecast from epidemiological data, prescription trends, and market share models. New drug launches require especially careful planning because the ramp-up of API production takes months. Tender business (government vaccination programs, hospital formulary wins) creates lumpy, high-volume demand that must be anticipated.

**14. Automotive**: Vehicle demand is forecast by model, trim, and option combination — creating an enormous planning matrix. A production change takes weeks to implement, so the forecast must be stable within the production lead time. Aftermarket parts demand uses different models — declining demand curves for aging models, spike forecasts for recall parts.

**15. Telecom**: Subscriber growth forecasts drive network capacity planning and device procurement. New technology rollouts (5G, fiber) require infrastructure demand planning years in advance. Prepaid usage patterns differ from postpaid, requiring separate forecasting approaches.

**16. Media & Entertainment**: Content demand forecasting — predicting which shows will be hits — is notoriously difficult. Production supply needs are project-based. Advertising demand is seasonal (Q4 holidays) and cyclical (election years). Streaming services forecast bandwidth demand to manage infrastructure.

**17. Energy & Utilities**: Load forecasting predicts electricity or gas demand by time of day, season, and weather. This drives generation dispatch, fuel procurement, and capacity planning. Renewable energy intermittency (wind and solar depend on weather) adds complexity. Long-term demand forecasts drive infrastructure investment decisions spanning decades.

**18. Food & Beverage**: Short shelf life means demand planning accuracy directly impacts waste. Promotion forecasting is critical — a supermarket feature can increase demand 5-10x for a week. Weather significantly affects demand (ice cream, beverages). New product demand is estimated from test market results and analogous product launches.

**19. Logistics & Transport**: Capacity demand forecasting determines fleet size, warehouse space, and staffing. Peak season planning (holiday shipping volumes can triple normal levels) requires months of preparation. Customer contract renewals and new wins create step changes in demand.

**20. Nonprofit**: Demand for services is forecast from population data, economic indicators, and program expansion plans. Donation forecasting — predicting when and how much donors will give — drives budget planning. Disaster response organizations use risk models to pre-position supplies in likely disaster zones.

**21. SaaS / Technology**: Demand planning applies to infrastructure capacity (servers, bandwidth), support staffing, and hardware inventory if applicable. User growth models replace traditional product demand forecasts. Feature release calendars drive support demand spikes. Free-to-paid conversion rates are a key demand signal.

**22. Professional Services**: Demand planning is revenue pipeline management. You forecast billable hours by practice area and skill set to plan hiring and subcontracting. Utilization rates (percentage of available hours that are billable) drive profitability. Proposal win rates convert pipeline to demand.

**23. Defense & Aerospace**: Military demand is determined by force structure plans, operational tempo, and sustainment budgets over multi-year horizons. Production rates for aircraft and weapon systems are planned years ahead. Spare parts demand follows fleet age and usage profiles with mathematical models calibrated to operational data.

**24. Mining**: Production volume is planned based on ore body models, equipment capacity, and market prices. When commodity prices drop, production may be curtailed. Consumables demand (fuel, tires, explosives) scales with production volume. Equipment replacement is planned on maintenance-hours or condition-based models.

**25. Chemicals**: Demand is driven by downstream industry conditions — construction drives paint demand, agriculture drives fertilizer demand, auto production drives plastics demand. Commodity chemicals face price-driven demand elasticity. Specialty chemicals have more stable demand driven by customer qualification and formulation lock-in.

**26. Textiles & Apparel**: Fashion forecasting happens 6-18 months before the selling season. Initial orders are based on trend prediction and buyer feedback. In-season replenishment uses early sales data to adjust quantities. Fast fashion compresses this to weeks, requiring extremely responsive demand sensing.

**27. FMCG**: Among the most sophisticated demand planning in any industry. You forecast by SKU-store-week for thousands of items across thousands of locations. Trade promotion forecasting is critical — a buy-one-get-one promotion on laundry detergent might increase volume 200%. Cannibalization effects (your promotion steals from your other sizes) must be modeled.

**28. Electronics**: Product life cycles are short — a smartphone model might have a 12-month window. Launch quantity decisions are high-stakes with limited data. Component demand planning must account for design changes and technology obsolescence. End-of-life management requires forecasting the demand tail accurately to avoid both excess and shortages.

**29. Oil & Gas**: Demand for petroleum products follows economic cycles, seasonal patterns (gasoline in summer, heating oil in winter), and long-term energy transition trends. Refinery output planning balances crude input characteristics with product demand mix. Exploration and production activity is driven by price forecasts and reserve estimates.

**30. Jewelry & Luxury**: Demand is driven by economic confidence, gifting occasions (holidays, weddings), and fashion trends. Limited-edition and custom pieces make forecasting irrelevant at the item level — planning focuses on material requirements and craftsman capacity. Brand perception and exclusivity sometimes benefit from intentional scarcity rather than demand fulfillment.


## ERP•AI & Proto

**ERP•AI**: ERP•AI provides demand planning templates including statistical forecasting tools, safety stock calculators, MRP engines, and S&OP dashboards that connect demand plans to procurement and production execution.

**Proto**: Proto agents run the ORAI cycle for demand planning — Observing sales patterns, market signals, and supply conditions, Reasoning about forecast adjustments and optimal inventory buffers, Acting on replenishment and production triggers, and Iterating as forecast accuracy data reveals model improvements and changing market dynamics.
