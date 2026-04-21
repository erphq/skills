---
name: warehouse
description: This skill should be used when the task involves how to receive, store, find, pick, pack, and ship products efficiently.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - scm
  type: skill
  scope: internal
---
# Warehouse Operations

## What This Process Does

Warehouse operations cover everything that happens to products inside your four walls — from the moment a truck pulls up to your receiving dock until a shipment leaves on another truck. The core flow is: receive goods in, put them away in the right spot, find them when someone needs them (picking), pack them for shipment, and send them out the door.

It also includes organizing your space — deciding where things go, labeling locations, managing zones for different types of products, and keeping the place running efficiently. A well-run warehouse gets the right products out the door quickly, accurately, and at the lowest cost. A poorly run warehouse is chaos — lost items, wrong shipments, wasted labor, and unhappy customers.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Warehouse Management** app, the **Pick-Pack-Ship Workflow**, and the **Receiving & Putaway** templates. ERP•AI's catalog of 720+ apps includes warehouse configurations ranging from simple single-location tracking to multi-zone, multi-dock setups. Deploy the template closest to your operation, then customize zones, bin naming conventions, and workflow steps.

## Build — Setting It Up

### With Agents

AI agents accelerate warehouse setup in several ways:

- **Location structure design**: Describe your warehouse dimensions and layout, and agents design your zone, aisle, rack, and bin numbering system. They can even work from a floor plan photo.
- **Bin assignment optimization**: Based on your product dimensions, weights, and movement velocity, agents recommend which products go in which locations — fast movers near the shipping dock, heavy items at floor level, small high-value items in secure zones.
- **Workflow configuration**: Describe your receiving and shipping processes in plain language, and agents build the step-by-step workflows — including which scans are required at each step, quality check points, and exception handling rules.
- **Label and barcode generation**: Agents create your location labels, bin barcodes, and product labels in the format your scanners need.
- **Staffing models**: Feed agents your order volume data and they estimate headcount needs by shift, identify peak periods, and suggest scheduling patterns.

### Key Decisions

**Zone strategy**: How do you divide your warehouse? Common approaches include zones by product type (dry goods, cold chain, hazmat), by velocity (fast-pick zone, reserve storage), or by process (receiving area, quality hold, shipping staging). Most warehouses combine these.

**Location naming convention**: This seems minor but matters a lot. A good convention is readable and logical — something like "A-01-03-B" (Zone A, Aisle 01, Rack 03, Bin B). Train your team so anyone can find any location without a map.

**Picking strategy**: Single-order picking (one order at a time) is simple but slow. Batch picking (multiple orders at once) is faster but requires a sorting step. Wave picking (group orders by shipping carrier or destination) optimizes shipping. Zone picking (each picker works one zone) reduces travel. Choose based on your order profile.

**Putaway logic**: When goods arrive, where do they go? Fixed locations (each SKU has an assigned bin) are simple and easy to learn. Dynamic putaway (system assigns the best available bin) uses space more efficiently but requires system discipline. Most companies use fixed locations for fast movers and dynamic for everything else.

**Paper vs. scanners vs. voice**: How do pickers get their instructions? Paper pick lists are cheap but error-prone. RF scanners with barcode scanning add accuracy. Voice-directed picking keeps hands free. Mobile devices with camera scanning are a middle ground. For most operations, scanner-based picking is the sweet spot of cost and accuracy.

### Common Mistakes

**Not measuring your space before designing zones**: You need to know exactly how many pallet positions, shelf locations, and floor spaces you have. Guessing leads to overflow areas, blocked aisles, and wasted space.

**Putting popular items far from the dock**: Your top 20% of SKUs by order frequency should be in the most accessible locations near the shipping area. This single change can cut picking time by 30%.

**No staging areas**: You need dedicated space for receiving (to process incoming shipments), quality hold (to quarantine suspect goods), packing (to prepare shipments), and shipping staging (to organize outbound loads). Trying to do all of this in the aisles creates chaos.

**Skipping the receiving check**: If you do not verify what comes in, you inherit the supplier's mistakes. Count it, inspect it, and confirm it matches the PO before putting it away.

**Over-engineering on day one**: You do not need pick-to-light, autonomous robots, and voice picking on day one. Start with good processes and basic technology (barcodes and scanners), get those working smoothly, then add sophistication where the data shows you need it.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Throughput dashboard**: Units received, picked, packed, and shipped per hour and per day. This is your pulse — any sudden change means something is wrong.

**Order accuracy rate**: Percentage of orders shipped without errors (wrong item, wrong quantity, wrong address). Target 99.5% or higher.

**Dock-to-stock time**: How long from when a truck arrives to when goods are in their assigned location and available in the system. Target same-day for standard freight.

**Picking productivity**: Lines picked per hour per picker. Track by zone and by person to identify bottlenecks and training needs.

**Space utilization**: What percentage of your locations are occupied? If you are consistently above 85%, you are probably running into congestion. Below 60% and you are paying for space you do not need.

**Aging orders alert**: Any order that has been in the system for more than its target ship time and has not shipped. Investigate immediately.

### Exception Handling

**Short shipments from vendors**: When you receive less than what the PO says, agents can update the PO receipt, notify procurement to follow up with the vendor, and adjust downstream allocations if those items were promised to customers.

**Damaged goods on receipt**: Agents trigger the damage documentation workflow — photos, carrier claim filing, vendor notification — and quarantine the items in a quality hold location so they do not accidentally get picked for orders.

**Pick shortages**: When a picker goes to a location and the item is not there (location shows stock but the shelf is empty), agents flag the discrepancy, search for the item in alternate locations, and trigger a cycle count for that location.

**Shipping carrier delays**: When a carrier is late for pickup, agents can reroute urgent shipments to an alternate carrier, adjust customer ETAs, and log the incident against the carrier's performance record.

**Returns processing**: When goods come back, agents assess the reason, determine disposition (restock, refurbish, scrap), update inventory, and trigger any customer credit or replacement shipment.

### Routine Tasks

**Daily pick wave generation**: Agents analyze pending orders, group them into efficient pick waves based on priority, shipping method, and warehouse zone, and release them to the floor.

**Receiving schedule coordination**: Agents manage inbound appointment scheduling, ensuring dock doors are allocated, labor is available, and there is staging space for expected deliveries.

**End-of-day reconciliation**: Agents compare planned vs. actual shipments, flag anything that did not go out, and prepare the next day's priority list.

**Replenishment from reserve to pick locations**: When forward pick locations run low, agents generate replenishment tasks to refill them from bulk reserve storage.

**Weekly slotting review**: Agents analyze the last week's pick data and recommend location changes — moving items that have become faster movers closer to the dock, and pushing slower items further back.

## Scale — Growing It

### Adding Complexity

**Multi-warehouse operations**: When you have more than one warehouse, you need to decide which warehouse fulfills which orders. Agents can optimize this in real time based on inventory availability, proximity to the customer, shipping cost, and warehouse workload.

**Temperature-controlled zones**: Adding cold storage, freezer, or climate-controlled areas means separate zones with monitoring equipment, different handling procedures, and stricter put-away timing (perishables cannot sit on the dock).

**Cross-docking**: For high-velocity items, receive them at one dock, move them across the warehouse, and ship them out the other dock without ever putting them in storage. This requires precise timing and coordination between inbound and outbound.

**Value-added services**: Kitting, labeling, light assembly, gift wrapping, or customization done in the warehouse. You need dedicated work areas, work order management, and component inventory tracking.

**Third-party logistics (3PL)**: If you operate as a 3PL, you are running multiple clients' inventory in the same space with different rules, billing rates, and SLAs. Your system needs client-level segregation and billing calculation.

### Automation Opportunities

**Automated receiving**: Agents read ASN (advance shipping notice) data, pre-assign putaway locations before the truck arrives, generate receiving labels, and create the receiving checklist — so the team just scans and verifies.

**Dynamic wave planning**: Instead of fixed pick waves, agents continuously release orders as they come in, optimizing batch size and picker routes in real time based on current floor conditions and labor availability.

**Slotting optimization**: Agents continuously analyze pick data and recommend or execute location changes to minimize picker travel time. This alone can improve picking productivity by 15-25%.

**Carrier rate shopping**: For each outbound shipment, agents compare rates across carriers and service levels in real time, selecting the cheapest option that meets the delivery commitment.

**Predictive labor planning**: Agents use incoming order forecasts, scheduled receipts, and historical productivity data to predict labor needs by hour and generate staffing recommendations.

### When to Redesign

- Order volume has doubled and you are consistently missing ship times
- Pick accuracy has dropped below 99%
- You are using more than 90% of your storage capacity
- You have added a second warehouse without integrating operations
- The average order profile has changed dramatically (e.g., shifted from pallets to individual units for e-commerce)
- You are spending more on overtime and temp labor than on permanent warehouse staff

## By Industry

**1. Manufacturing**: Warehouses serve the factory — receiving raw materials, staging them for production, storing WIP between operations, and shipping finished goods. The warehouse schedule is driven by the production plan. Kanban replenishment from warehouse to production line is common. You often have separate raw material and finished goods warehouses.

**2. Healthcare**: Warehouses handle medical supplies with strict temperature, sterility, and regulatory requirements. Lot and expiry tracking are mandatory. Controlled substances need secured storage with auditable access logs. Hospital supply rooms operate as mini-warehouses with par-level replenishment.

**3. Education**: Central warehouses distribute supplies, textbooks, and equipment to schools and departments. Volume spikes dramatically before school year starts. Summer is used for maintenance and reorganization. Universities manage receiving docks that handle everything from laboratory chemicals to furniture to food service supplies.

**4. Retail**: Distribution centers feed stores and fulfill online orders — often from the same building. Store replenishment uses case picking (full cases to stores). E-commerce uses each-picking (individual items to consumers). Peak season (holidays) can triple normal volume, requiring seasonal labor and extended shifts.

**5. Hospitality**: Central warehouses supply hotel properties, restaurants, or event venues with food, beverages, linens, and supplies. Daily deliveries of perishables require tight receiving schedules. Hotels manage par stock rooms on each floor for housekeeping supplies with regular replenishment from a central store.

**6. Construction**: Warehouses serve as material staging areas for job sites. Materials are received, organized by project, and shipped to sites on a schedule matching the construction sequence. Laydown yards for bulky materials (steel, pipe, lumber) operate alongside enclosed warehouses for finishes and fixtures.

**7. Real Estate**: Property management companies operate small warehouses for maintenance supplies, spare parts, and renovation materials. Tracking materials issued to specific properties for cost allocation is the key challenge. Many rely on vendor-managed inventory for high-use maintenance items.

**8. Agriculture**: Grain elevators, cold storage for produce, and equipment storage facilities are the main warehouse types. Harvest season creates massive inbound volume in a short window. Fumigation, drying, and conditioning of stored grain add processing steps within the warehouse.

**9. Banking & Financial Services**: Minimal warehouse operations — mostly secure document storage and archive management. Cash vaults at bank branches have warehouse-like management for currency and coin inventory. Secure destruction of sensitive documents is a regular outbound process.

**10. Insurance**: Limited warehouse needs — document archives, marketing material storage, and occasional equipment warehousing. Claims management for property insurance may involve salvage warehousing of recovered goods.

**11. Legal**: Document and evidence storage with strict chain-of-custody requirements. Physical evidence rooms operate like high-security warehouses with detailed access logs, check-in/check-out procedures, and retention schedule management.

**12. Government**: Government warehouses range from office supply distribution centers to massive military logistics depots. FEMA staging areas pre-position disaster relief supplies. Every movement must be documented for audit. Excess property programs manage disposal of surplus government goods.

**13. Pharma**: GDP (Good Distribution Practice) compliance governs every aspect of pharmaceutical warehousing. Temperature mapping validates storage conditions. Serialization requires scanning every package for track-and-trace. Quarantine areas hold product pending quality release. Product recalls require rapid identification and segregation of affected lots.

**14. Automotive**: Parts distribution centers support dealer networks with tens of thousands of SKUs. Just-in-sequence delivery to assembly plants means the warehouse must ship parts in the exact order they will be installed on the production line. Returnable container management tracks reusable shipping containers between plants and suppliers.

**15. Telecom**: Warehouses manage network equipment, subscriber devices, and field technician supplies. Equipment staging and configuration (loading software on devices before shipping to a technician) adds value-added services. Reverse logistics for returned or defective equipment is a significant volume.

**16. Media & Entertainment**: Prop houses and studio warehouses manage thousands of items for productions — costumes, furniture, set pieces, lighting equipment. Items are rented out to productions and must be tracked, maintained, and returned. Content archives manage physical media (film, tape) in climate-controlled vaults.

**17. Energy & Utilities**: Utility warehouses manage transformers, wire, poles, meters, and tools. Many items are bulky and heavy, requiring specialized handling equipment. Parts criticality drives storage — a spare transformer for a substation might sit for years but must be ready when needed. Material staging for planned outages requires precise scheduling.

**18. Food & Beverage**: Temperature zones (ambient, chilled, frozen) within the same warehouse. FIFO/FEFO management is critical. Food safety regulations (FSSC 22000, SQF) govern warehouse sanitation, pest control, and allergen segregation. Pick windows are tight — a grocery order received at 2 PM may need to ship by 6 PM for next-morning delivery.

**19. Logistics & Transport**: 3PL warehouses are the most complex — multiple clients, multiple processes, complex billing. Each client may have different receiving requirements, pick/pack rules, carrier preferences, and SLAs. Value-added services (labeling, kitting, returns processing) generate additional revenue streams.

**20. Nonprofit**: Warehouses store donated goods, disaster relief supplies, and program materials. Donated goods arrive in unpredictable quantities and conditions, requiring sorting and quality assessment at receiving. Food banks operate high-volume warehouses with cold chain requirements and FEFO management for perishable donations.

**21. SaaS / Technology**: Most SaaS companies have minimal warehousing — possibly shipping hardware devices, welcome kits, or marketing materials. Hardware technology companies operate sophisticated fulfillment centers for devices and accessories, with configuration and testing steps integrated into the warehouse workflow.

**22. Professional Services**: Very limited warehouse needs — office supplies, archived project files, and marketing materials. Event-based businesses (conferences, training) may warehouse event materials, booths, and equipment between events.

**23. Defense & Aerospace**: Military warehouses follow strict accountability standards (every serial number tracked, every movement documented). Ammunition storage has specialized requirements (explosive safety, compatibility grouping). Aircraft parts require controlled environment storage and full pedigree documentation to prevent counterfeit parts.

**24. Mining**: Remote site warehouses manage heavy equipment parts, explosives (with security requirements), processing chemicals, and safety equipment. Getting materials to and from remote sites adds logistics challenges — some mines are accessible only by air or seasonal roads. Container management is important for shipping to remote locations.

**25. Chemicals**: Hazmat storage requirements drive warehouse design — segregation of incompatible chemicals, containment for spills, ventilation, fire suppression systems, and safety equipment. Bulk tank farms operate alongside packed goods warehouses. Regulatory reporting on chemical inventory (EPCRA Tier II) is a regular compliance requirement.

**26. Textiles & Apparel**: Warehouses handle high SKU counts (every combination of style, size, color is a separate pick). Garment-on-hanger storage and shipping requires different infrastructure than folded/boxed goods. Seasonal inventory builds mean your warehouse is bursting in pre-season and half-empty in off-season.

**27. FMCG**: High-volume, high-velocity distribution centers that ship full pallets, mixed pallets, and cases to retailers. Promotional displays and point-of-sale materials add seasonal complexity. Product rotation is critical — retailers will reject deliveries with insufficient remaining shelf life.

**28. Electronics**: Anti-static handling and storage for sensitive components. High-value items require secure storage and accurate piece-counting. Rapid product life cycles mean today's hot product is next quarter's clearance item. Reverse logistics for warranties and repairs is a significant operation.

**29. Oil & Gas**: Offshore platform supply bases manage the logistics of getting materials to platforms via supply boats. Tubular (drill pipe, casing) storage requires specialized pipe racks. Hazmat and radioactive source management for well logging equipment adds safety requirements. Arctic or desert locations add environmental challenges.

**30. Jewelry & Luxury**: High-security warehouses with vault-level access control, cameras, and insurance requirements. Every piece is individually tracked and often photographed. Climate control protects sensitive materials. Packaging and presentation are critical — luxury goods require careful handling and premium packaging materials.


## ERP•AI & Proto

**ERP•AI**: ERP•AI provides warehouse management templates covering receiving, putaway, picking, packing, and shipping workflows with barcode support, zone management, and multi-warehouse configuration out of the box.

**Proto**: Proto agents use the ORAI cycle to run warehouse operations — Observing real-time floor activity and order queues, Reasoning about optimal pick waves and resource allocation, Acting on putaway assignments and shipping decisions, and Iterating on slotting and process improvements as patterns emerge from operational data.
