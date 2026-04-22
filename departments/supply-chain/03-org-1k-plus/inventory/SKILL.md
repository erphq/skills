---
name: inventory
description: This skill should be used when the task involves how to track what you have, where it is, and when to order more.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: supply-chain
  size_tier: 03-org-1k-plus
  type: skill
  scope: internal
---
# Inventory Management

## What This Process Does

Inventory management is about knowing what you have, where it is, and when you need more. It sounds simple, but getting it wrong is expensive in both directions — too much inventory ties up cash and fills your warehouse with stuff that might become obsolete, and too little inventory means you cannot fulfill orders, production stops, or customers go elsewhere.

A good inventory system answers five questions at any moment: What do we have? Where is it? How much is it worth? When do we need more? And how much should we order? Everything else — cycle counts, ABC analysis, safety stock calculations — is just a way to answer those questions more accurately.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Inventory Tracker**, **Warehouse Stock Manager**, and **Reorder Point Calculator** templates. ERP•AI's catalog of 720+ apps includes inventory management configurations for different industries and complexity levels — from a simple stock ledger to multi-warehouse, multi-unit-of-measure setups. Deploy the one that fits your starting point, then customize item categories, locations, and reorder rules on top.

## Build — Setting It Up

### With Agents

AI agents make inventory setup dramatically faster:

- **Item master creation**: Give agents your product catalogs, vendor price lists, or even photos of warehouse shelves, and they will build your item master with descriptions, categories, units of measure, and initial stock levels.
- **Historical analysis**: Agents analyze your past sales data, purchase history, and any existing spreadsheets to recommend reorder points, safety stock levels, and order quantities for each item.
- **ABC classification**: Agents automatically classify your inventory by value and velocity — your A items (high value, needs tight control), B items (moderate), and C items (low value, simpler management) — and suggest different management approaches for each class.
- **Location mapping**: Describe your warehouse layout in plain language and agents set up your location hierarchy (warehouses, zones, aisles, racks, bins).
- **Counting schedules**: Based on your ABC classification and item count, agents create a cycle counting calendar that covers all items at appropriate frequencies.

### Key Decisions

**Perpetual vs. periodic inventory**: Perpetual means your system updates every time something moves in or out. Periodic means you count everything at set intervals (monthly, quarterly). Almost everyone should use perpetual now — the technology cost is minimal and the visibility is far better.

**Valuation method**: How do you value your inventory? FIFO (first in, first out) is the most common and usually matches physical flow. Weighted average smooths out price fluctuations. LIFO (last in, first out) is less common and banned under IFRS. Your accountant has strong opinions here — ask them.

**Unit of measure handling**: Do you buy in cases but sell in units? Buy in kilograms but issue in grams? You need to define the stocking unit, purchasing unit, and selling unit for each item, plus the conversion factors.

**Lot and serial tracking**: Do you need to track inventory by lot number (batch of items made together) or serial number (individual item)? Regulated industries require lot tracking. High-value items often need serial tracking. But tracking adds overhead, so only turn it on where you need it.

**Negative stock policy**: Do you allow the system to show negative inventory (shipped more than what was on hand)? Some companies allow it to keep operations moving and fix the count later. Others block it to maintain accuracy. Allowing negatives is convenient but masks problems.

### Common Mistakes

**Not doing a physical count before going live**: Your opening balances must be accurate. If you load garbage data, every report and every reorder suggestion will be wrong. Do a complete physical count, reconcile it, and then go live.

**Over-complicating the item master**: You do not need 50 fields for every item on day one. Start with the essentials — SKU, description, category, unit of measure, location, reorder point, cost — and add complexity as you need it.

**Ignoring units of measure**: If you buy in cases of 24 and your system thinks you bought 1 unit, your stock is wrong by a factor of 24. Get your UOM conversions right from the start.

**Setting reorder points once and forgetting them**: Demand changes. Lead times change. Seasonality shifts. Reorder points need regular review — at least quarterly.

**Not accounting for in-transit inventory**: The stock you ordered but has not arrived yet matters. If you reorder based only on what is on hand without considering what is already coming, you will double-order.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Stock level dashboard**: Current stock by item and location, color-coded by status — green (healthy), yellow (approaching reorder point), red (below safety stock), black (stockout).

**Inventory value report**: Total inventory value by category, location, and aging. This tells you how much cash is sitting on shelves.

**Stockout tracker**: Which items are currently at zero? How long have they been out? What is the estimated impact (lost sales, production downtime)?

**Slow-moving and dead stock alert**: Items that have not moved in 60, 90, or 180 days. This is cash you need to recover through markdowns, returns to vendor, or disposal.

**Accuracy metric**: Your count accuracy percentage — how often does the physical count match the system? Target 95% or higher for A items, 90% for B items.

**Days of supply**: For each item, how many days of demand can current stock cover? This is more actionable than just seeing a quantity.

### Exception Handling

**Stockouts**: When an item hits zero, agents can immediately check open POs (is more coming?), suggest substitute items, alert affected departments, and fast-track a purchase if needed.

**Count discrepancies**: When a cycle count does not match the system, agents investigate — check recent transactions for data entry errors, look for items in the wrong location, and flag patterns (if the same item is always off, there might be a receiving or theft issue).

**Expiring inventory**: For items with shelf life, agents track expiration dates and alert you in time to use, sell, donate, or dispose of items before they expire.

**Unexpected demand spikes**: When consumption suddenly jumps, agents recalculate reorder points, check if this is a one-time event or a trend, and recommend whether to increase safety stock.

**Vendor lead time changes**: When deliveries consistently arrive later (or earlier) than expected, agents adjust lead time assumptions in reorder calculations.

### Routine Tasks

**Daily cycle counts**: Agents generate the day's count list based on the counting schedule, prioritizing items with recent discrepancies or high value.

**Weekly reorder review**: Agents identify items at or below reorder point, calculate suggested order quantities, and prepare draft purchase requisitions.

**Monthly ABC reclassification**: Agents recalculate ABC classifications based on the latest sales and consumption data and flag items that changed class.

**Quarterly dead stock review**: Agents compile a list of items with no movement, calculate holding cost, and recommend disposition actions.

**Annual valuation**: Agents prepare inventory valuation reports for finance, reconcile with the general ledger, and flag discrepancies.

## Scale — Growing It

### Adding Complexity

**Multi-warehouse**: When you have inventory in multiple locations, you need transfer orders, location-specific reorder points, and a way to see total stock across all locations. Agents can optimize which warehouse fulfills which order based on proximity, stock levels, and shipping costs.

**Multi-company inventory**: If you have multiple legal entities sharing warehouse space or transferring goods between them, you need inter-company pricing and transfer documentation.

**Consignment inventory**: Stock owned by your vendor sitting in your warehouse, or your stock sitting at a customer's location. You need to track ownership separately from physical location.

**Kitting and bundling**: Selling items together that are stored separately. Your system needs to show "available to promise" based on the limiting component and decrement all component stocks when the kit sells.

**Batch and lot management**: As you scale, you may need to track which batch of raw material went into which batch of finished product, for traceability and recall purposes.

### Automation Opportunities

**Automated reordering**: When stock hits the reorder point, agents generate the PO, select the vendor (based on price, lead time, and performance), route for approval, and send to the supplier — no human involvement for routine replenishment.

**Demand-driven replenishment**: Instead of static reorder points, agents use real-time demand signals (sales trends, seasonal patterns, promotions, weather forecasts) to dynamically adjust when and how much to order.

**Intelligent allocation**: When stock is limited, agents allocate available inventory across channels and customers based on priority, profitability, and commitments.

**Automated classification**: Agents continuously reclassify items based on changing demand patterns and value, adjusting management intensity accordingly.

**Shrinkage detection**: Agents analyze count discrepancies, transaction patterns, and variance trends to identify potential causes of inventory loss — process errors, damage, theft — before they become major problems.

### When to Redesign

- Your inventory accuracy is consistently below 90%
- Stockouts are occurring more than once a week on A items
- You are carrying more than 90 days of supply on average
- You have expanded to more than three warehouse locations
- Dead stock exceeds 15% of total inventory value
- You are spending more than 10 hours per week on manual inventory tasks
- Your business has shifted to e-commerce or omnichannel fulfillment

## By Industry

**1. Manufacturing**: Inventory spans raw materials, work-in-progress (WIP), and finished goods — each managed differently. MRP drives raw material replenishment based on production schedules. WIP tracking requires linking inventory to work orders. Finished goods need demand-driven replenishment. Yield rates and scrap factors affect calculations.

**2. Healthcare**: You manage medical supplies, pharmaceuticals, implants, and surgical instruments. Many items have expiration dates requiring FEFO (first expiry, first out) management. High-value implants like joint replacements are often consignment stock owned by the manufacturer until used in surgery.

**3. Education**: Inventory includes textbooks, lab supplies, IT equipment, and facilities maintenance materials. Demand is highly seasonal — back to school drives spikes. Many items are grant-funded with restricted use, so you need to track inventory by funding source.

**4. Retail**: Inventory is merchandise for resale, tracked by SKU, size, color, and location. Seasonal inventory builds and markdowns drive your cash cycle. Omnichannel (store, online, marketplace) means the same stock may be available for multiple channels, requiring allocation rules and real-time visibility.

**5. Hospitality**: You track perishable food and beverage inventory, linens, guest amenities, and maintenance supplies. Food inventory turns over in days, not months. Par levels per outlet (restaurant, bar, room service) drive daily requisitions from a central store. Spoilage and waste tracking is essential for cost control.

**6. Construction**: Inventory is project-based — materials allocated to specific job sites with separate budgets. You need to track what is at each site, what is in your central yard, and what is in transit. Unused materials from completed jobs need to be returned to stock or transferred to other projects.

**7. Real Estate**: Property management inventory includes maintenance parts, cleaning supplies, and common-area materials. Each property is a separate stocking location. Tracking costs per property is critical for tenant billing and operating budget management.

**8. Agriculture**: Inventory includes seeds, fertilizers, chemicals, harvested crops, and livestock. Crop inventory is seasonal — you build it during harvest and deplete it through the year via sales. Commodities require quality grading (grade A wheat vs. grade B) and storage condition monitoring (moisture, temperature).

**9. Banking & Financial Services**: Physical inventory is minimal — mostly office supplies, marketing materials, and IT equipment. The inventory management concepts that matter most here are applied to managing paper documents, forms, and cards (credit cards, debit cards) that need secure tracking.

**10. Insurance**: Similar to banking — minimal physical inventory beyond office supplies and marketing materials. Some insurers manage inventory of branded promotional items or welcome kits for new policyholders.

**11. Legal**: Law firms have minimal inventory needs — office supplies, printed materials, and file storage supplies. Document and file management (physical case files, evidence) has some inventory-like qualities in terms of tracking location and chain of custody.

**12. Government**: Government inventory ranges from office supplies to military equipment, vehicles, and emergency response supplies. Strict accountability rules require detailed tracking. Asset management (tracking government property) is a major focus, with annual inventory certifications required by law for federal agencies.

**13. Pharma**: You track raw APIs, excipients, packaging materials, and finished drugs. Serialization requirements (unique identifier on every saleable unit) add complexity. Cold chain products need temperature-monitored storage. Controlled substances require additional security and reconciliation. Expiry management is critical — you cannot sell expired drugs.

**14. Automotive**: Massive parts catalogs — a single vehicle has thousands of components. You manage production inventory (assembly line stock), service parts (dealer inventories), and aftermarket parts. Dealers carry slow-moving service parts that tie up capital but are necessary for customer service on older models.

**15. Telecom**: Inventory includes network equipment (towers, antennas, switches), subscriber devices (phones, modems, set-top boxes), SIM cards, and maintenance parts. Subscriber devices are high-value and high-theft-risk, requiring serial number tracking. Field technician truck stock adds mobile inventory locations.

**16. Media & Entertainment**: Production companies manage props, costumes, set materials, and equipment rentals. Libraries manage physical and digital media archives. Broadcasters track tapes, equipment, and spare parts. Digital inventory (content rights, licenses) is increasingly the most valuable type.

**17. Energy & Utilities**: You manage spare parts for generating plants, transmission equipment, distribution materials (wire, poles, meters), and fuel. Critical spare parts for power plants can cost millions but must be available immediately if something fails — the cost of a plant outage dwarfs the carrying cost.

**18. Food & Beverage**: Perishable inventory requires strict FEFO management, temperature monitoring, and rapid turns. You track ingredients by lot for allergen and recall traceability. Finished goods have short shelf lives so overproduction becomes waste. Many items have multiple units of measure (cases, units, weight).

**19. Logistics & Transport**: You manage fleet parts and supplies, fuel, and the inventory your clients store in your warehouses (third-party logistics). For 3PL operations, you are managing inventory on behalf of multiple clients with different rules, SLAs, and system integrations in the same physical space.

**20. Nonprofit**: Inventory includes donated goods, program supplies, and emergency relief materials. Donated goods need valuation for tax receipts. Grant-funded inventory must be tracked by funding source. Disaster relief organizations need rapid deployment of pre-positioned supplies from multiple warehouse locations.

**21. SaaS / Technology**: Physical inventory is limited — maybe some hardware for customers, marketing materials, or office supplies. The real inventory management challenge is digital — software licenses, cloud resource capacity, and API usage credits. If you sell hardware alongside software, you need to manage those physical goods.

**22. Professional Services**: Minimal inventory needs — office supplies, marketing collateral, and client deliverable materials. Some consultancies manage pools of loaner equipment (laptops, presentation equipment) that function like reusable inventory requiring check-out/check-in tracking.

**23. Defense & Aerospace**: Extremely detailed tracking of parts with full traceability to manufacturer, lot, and certification. Shelf-life management for pyrotechnics, lubricants, and rubber components. Counterfeit part prevention requires careful supply chain documentation. War reserve stock must be maintained at specified readiness levels.

**24. Mining**: You manage explosives (tightly regulated), heavy equipment spare parts, processing chemicals, and safety equipment at remote sites. Getting emergency parts to a mine site quickly is critical — downtime on a haul truck or crusher costs enormous money. Harsh environments cause faster wear and higher consumption of consumables.

**25. Chemicals**: Inventory includes raw chemicals, intermediates, and finished products. Hazmat classification drives storage, handling, and reporting requirements. Many chemicals have shelf-life limitations. You need to track quantities by weight, volume, and packaging, and manage tank inventory for bulk liquids alongside packed inventory for smaller quantities.

**26. Textiles & Apparel**: Inventory is tracked by style, size, color, and season — a single garment can have dozens of SKU combinations. Fashion inventory depreciates rapidly — unsold seasonal items lose most of their value. Fabric inventory is measured in linear or square meters with variability in usable yield per roll.

**27. FMCG**: High-volume, fast-moving products with thin margins where inventory efficiency directly impacts profitability. You manage thousands of SKUs across multiple distribution centers. Promotional inventory builds (producing extra ahead of a promotion) require careful planning to avoid both stockouts and excess.

**28. Electronics**: Components depreciate rapidly — a chip that costs $10 today might cost $3 in six months. You manage thousands of small, high-value components. End-of-life management is critical — when a component is discontinued, you need to secure lifetime buys. Moisture-sensitive components require special storage conditions.

**29. Oil & Gas**: You manage drilling supplies, production chemicals, pipeline materials, and maintenance parts across remote platforms and field locations. Offshore platforms have extremely limited storage, so inventory levels must be precisely managed. Criticality-based sparing ensures you have the right parts for equipment where failure risks environmental or safety disaster.

**30. Jewelry & Luxury**: High-value, low-volume inventory requiring secure storage and individual item tracking. Every diamond, watch, or designer piece is essentially serialized. Consignment is common — designers place goods in retail stores that remain the designer's inventory until sold. Insurance and valuation require regular reappraisal.


## ERP•AI & Proto

**ERP•AI**: ERP•AI offers inventory management templates covering stock tracking, reorder management, cycle counting, and multi-location inventory control, all configurable to your industry's requirements without coding.

**Proto**: Proto agents apply the ORAI cycle to inventory — Observing stock levels, consumption patterns, and supply signals in real time, Reasoning about optimal reorder quantities and timing, Acting on replenishment and allocation decisions, and Iterating as demand patterns evolve to keep your inventory lean and service levels high.
