---
name: production-planning
description: This skill should be used when the task involves how to figure out what to make, when to make it, and how to keep the shop floor running smoothly.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - scm
  type: skill
  scope: internal
---
# Production Planning

## What This Process Does

Production planning is how manufacturers figure out what to produce, in what quantities, in what sequence, and with what resources. It bridges the gap between customer demand ("we need 5,000 units by March") and factory reality ("we have three machines, 20 operators, and these raw materials in stock").

The core activities are: managing bills of materials (BOMs — the recipe for making each product), creating and tracking work orders (the instructions that tell the shop floor what to make), scheduling production (deciding which jobs run on which machines when), controlling the shop floor (tracking progress, managing queues, handling problems), and capacity planning (making sure you have enough machine time and labor to meet the plan).

Get this right and your factory runs smoothly — the right materials are ready, machines are utilized well, labor is productive, and products ship on time. Get it wrong and you have idle machines waiting for materials, overtime costs to catch up on late orders, and customers calling about their deliveries.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **BOM Manager**, **Work Order Tracker**, **Production Scheduler**, **Shop Floor Control** app, and **Capacity Planning Dashboard** templates. ERP•AI's catalog of 720+ apps includes production planning configurations for different manufacturing types — discrete, process, batch, and make-to-order. Deploy the template that matches your manufacturing style and customize BOMs, routing steps, work centers, and scheduling rules.

## Build — Setting It Up

### With Agents

AI agents make production planning setup and execution significantly easier:

- **BOM creation**: Feed agents your product specs, engineering drawings, or even photos of finished products, and they build structured BOMs with components, quantities, units of measure, and assembly sequences. For existing operations, agents can extract BOM data from historical work orders or production records.
- **Routing definition**: Describe your manufacturing process steps and agents create routings with operation sequences, work centers, setup times, run times, and labor requirements.
- **Work center modeling**: Agents configure your work centers (machines, assembly stations, testing areas) with capacity, shift schedules, efficiency factors, and capabilities.
- **Schedule optimization**: Given your work orders, BOMs, routings, and capacity constraints, agents generate production schedules that minimize changeover time, balance workload across resources, and meet delivery dates.
- **What-if analysis**: Agents model scenarios — what happens if we add a second shift? What if that big order comes in? What if machine 3 is down for maintenance next week? — helping you make better decisions before committing.

### Key Decisions

**Manufacturing strategy**: Make-to-stock (produce and hold inventory for anticipated demand), make-to-order (produce only when a customer order exists), assemble-to-order (keep components in stock and assemble to order), or engineer-to-order (design and produce custom products). Each requires a fundamentally different planning approach.

**Scheduling method**: Forward scheduling (start now and figure out when you will finish) vs. backward scheduling (start from the due date and figure out when to start). Backward scheduling is more common because it minimizes work-in-progress inventory. Finite vs. infinite capacity — finite scheduling respects machine and labor limits, infinite scheduling ignores them and shows you where you are overloaded.

**BOM structure depth**: How many levels deep are your BOMs? A simple assembled product might have a single-level BOM. A complex manufactured product might have 5 or more levels. Deeper BOMs give you more planning precision but more complexity. Start with the level of detail you actually need for planning decisions.

**Planning time fence**: How far in the future can you change the production schedule without disruption? Inside the time fence, changes are costly (materials already purchased, setup already done). Outside the time fence, changes are easy. Defining this boundary helps you manage customer expectations and plan stability.

**Batch sizing**: How much do you produce in one run? Larger batches have lower per-unit setup cost but higher inventory carrying cost and less flexibility. Smaller batches are more flexible but you spend more time setting up. Economic order quantity (EOQ) balances these trade-offs, but practical constraints (minimum batch size, container fill) often override the math.

### Common Mistakes

**Inaccurate BOMs**: If your BOM says you need 10 bolts per unit but production actually uses 12, your MRP will under-order bolts. Every BOM inaccuracy cascades through planning. Before going live, validate every BOM on the shop floor with the people who actually make the product.

**Ignoring setup time**: Changeover time between different products on the same machine is real and often significant. If your schedule does not account for it, you lose hours every day to unplanned changeovers. Sequence-dependent setup (changing from product A to B takes 30 minutes, but A to C takes 2 hours) adds another layer.

**Planning to 100% capacity**: Machines break down. Materials arrive late. People call in sick. Quality issues cause rework. If your plan uses every minute of available capacity, any disruption cascades through the entire schedule. Plan to 80-85% of theoretical capacity to absorb variability.

**Not tracking actual vs. planned**: A plan that you cannot compare to reality is just wishful thinking. Track actual production quantities, times, and resource usage against the plan. The variance is where your improvement opportunities hide.

**Over-relying on expediting**: If half your orders are "rush" or "hot," you do not have a scheduling problem — you have a planning problem. Constant expediting disrupts the floor, increases setup frequency, and demoralizes workers who keep getting reprioritized. Fix the root cause.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Production progress dashboard**: Work orders by status (planned, released, in progress, complete) with on-time performance. Color-coded by whether each order is on track, at risk, or late.

**Schedule adherence**: Are you producing what the schedule says when the schedule says? Measure the percentage of planned production that was actually completed on time. Below 90% means your schedule or your execution has problems.

**OEE (Overall Equipment Effectiveness)**: The gold standard manufacturing metric. Availability (uptime) times Performance (speed) times Quality (good units). World-class OEE is 85%. Most plants run 60-70%. Tracking by machine and shift reveals where to focus improvement.

**Capacity utilization view**: How loaded is each work center? Displayed as a time-phased chart showing available capacity vs. planned load. Red zones indicate overload; green zones indicate available capacity.

**Material availability alert**: Before releasing a work order, verify that all components are available or will be by the time they are needed. Alert when a work order is about to be released but materials are short.

**WIP aging alert**: Work-in-progress that has been sitting on the floor beyond its expected cycle time. Old WIP means something is stuck — a quality issue, a missing component, a machine bottleneck, or a forgotten order.

### Exception Handling

**Machine breakdowns**: Agents immediately assess the impact — which work orders are affected, which customer deliveries are at risk — and reschedule. They reassign work to alternate machines if available, adjust downstream operations, and notify affected customers of revised dates.

**Material shortages**: When a component is not available when needed, agents identify the work orders affected, check if substitute materials are acceptable, expedite the purchase if possible, and reschedule the affected orders while protecting the highest-priority ones.

**Quality rejections**: When a batch fails quality inspection, agents calculate the rework or replacement time, adjust the schedule, determine whether raw materials are available for a rerun, and assess the impact on customer delivery dates.

**Rush orders**: When a high-priority order comes in, agents evaluate where to fit it into the schedule with minimum disruption. They identify which existing orders can shift without missing their delivery dates and calculate the cost of any overtime or expediting needed.

**Absenteeism**: When operators do not show up, agents reassign work based on available skills, reschedule operations that require specific qualifications, and flag if production commitments are at risk due to labor shortages.

### Routine Tasks

**Daily production scheduling**: Agents generate the next day's production schedule based on current work order priorities, material availability, machine status, and labor availability.

**Work order release**: Agents review planned work orders, verify material availability, confirm machine and labor availability, and release orders to the shop floor with all necessary documentation (work instructions, quality specs, labels).

**Production reporting**: Agents compile daily production results — units produced, scrap, downtime, labor hours — and compare against plan, flagging significant variances.

**Weekly capacity review**: Agents look ahead 4-8 weeks, compare the planned load against available capacity, and flag weeks where overload or underload is expected so you can adjust.

**Monthly BOM review**: Agents compare BOM quantities against actual material consumption, flagging items where there is a persistent variance that suggests the BOM needs updating.

## Scale — Growing It

### Adding Complexity

**Multi-plant production**: When you have more than one factory, you need to decide which plant makes which products. Load balancing across plants, inter-plant transfers, and centralized scheduling with local execution add complexity. Agents can optimize product-plant assignments based on capability, capacity, cost, and customer proximity.

**Advanced scheduling**: Move from simple priority-based scheduling to constraint-based optimization that considers setup sequences, material availability, labor skills, tooling requirements, and due dates simultaneously. This is where AI agents excel — they can evaluate millions of possible schedules to find better solutions than manual planning.

**Make-to-order with configuration**: When customers specify options and configurations, you need configurable BOMs that adjust based on customer selections. A standard product with 10 options, each with 3 choices, creates thousands of possible configurations — each with a unique BOM.

**Lean manufacturing integration**: Kanban-driven production, one-piece flow, level loading (heijunka), and pull-based replenishment change how production planning works. Instead of pushing a schedule to the floor, you enable the floor to pull work based on downstream demand signals.

**Subcontract operations**: When some operations are performed by outside vendors (heat treating, plating, machining), your schedule needs to account for outbound shipping, vendor processing time, return shipping, and receiving inspection. These external operations add lead time variability.

### Automation Opportunities

**Automated scheduling**: Agents generate and update production schedules continuously based on real-time data — current machine status, material receipts, quality results, and order changes. Instead of a daily scheduling run, the schedule adapts throughout the day.

**Predictive maintenance integration**: Agents incorporate machine health data into scheduling — avoiding scheduling critical jobs on machines that maintenance data suggests are likely to break down. Planned maintenance windows are scheduled into gaps in the production plan.

**Automated work order management**: From creation to closure, agents manage the work order lifecycle — creating orders from demand signals, releasing them when materials are ready, tracking progress through shop floor data, and closing them with actual cost calculations.

**Dynamic sequencing**: Agents optimize the sequence of jobs on each machine to minimize changeover time, considering product characteristics (running similar colors together on a paint line, similar sizes together on a press) and due dates.

**Real-time yield adjustment**: When actual yields differ from planned yields, agents recalculate material requirements and adjust downstream production quantities in real time, preventing both shortages and overproduction.

### When to Redesign

- Schedule adherence is consistently below 85%
- OEE is below 50% and you cannot identify the reasons with current data
- You are adding a second plant or a fundamentally different production process
- Customer lead time expectations have shortened beyond what your current planning process supports
- WIP inventory is growing while shipments remain flat
- You are spending more time replanning than executing the plan
- Your product mix has shifted significantly (e.g., from few high-volume products to many low-volume custom products)

## By Industry

**1. Manufacturing**: This is the home turf. Every manufacturing subsector (discrete, process, batch, repetitive) uses production planning, but the approach varies widely. Discrete manufacturing (machinery, electronics) schedules by work order. Process manufacturing (chemicals, food) schedules by batch and campaign. Repetitive manufacturing (fasteners, packaging) schedules by rate per hour or shift.

**2. Healthcare**: Production planning applies to hospital operations — scheduling surgeries (ORs are the "machines"), managing sterile processing cycles, and planning pharmaceutical compounding batches. Central sterile supply departments plan instrument set reprocessing to meet surgery schedules. Hospital pharmacies plan drug compounding batches.

**3. Education**: Production planning concepts apply to course scheduling (classrooms are machines, instructors are labor) and facilities project planning. Lab scheduling in research universities allocates expensive equipment time among competing research groups, similar to job shop scheduling.

**4. Retail**: Private label product development involves production planning with contract manufacturers. Promotional display production has tight timelines. In-store bakery and food preparation operations use simple production planning for daily output.

**5. Hospitality**: Kitchen production planning schedules meal preparation across stations (the "work centers") for expected covers. Banquet and event production follows a project-like plan. Housekeeping operations plan room turnovers as a production schedule — each room is a "job" with defined operations and time standards.

**6. Construction**: The construction schedule IS the production plan. Critical path method (CPM) scheduling sequences activities with dependencies, resource constraints, and milestone dates. Prefabrication and modular construction move portions of the work into factory environments that use traditional production planning.

**7. Real Estate**: Property development uses project scheduling for construction and renovation. Property turnover (make-ready) between tenants follows a compressed production schedule — cleaning, repairs, painting, upgrades — with a hard deadline (new tenant move-in date).

**8. Agriculture**: Production planning covers planting schedules, cultivation timing, harvest planning, and post-harvest processing. Crop rotation plans span multiple seasons. Livestock production plans breeding cycles, feeding programs, and processing schedules. Weather is the dominant uncontrollable variable.

**9. Banking & Financial Services**: Production planning applies to operations processing — loan processing workflows, account opening, and statement production. Batch processing of transactions follows a nightly production schedule. Month-end and year-end processing peaks require capacity planning.

**10. Insurance**: Claims processing is a production operation — incoming claims are work orders, adjusters and processors are resources, and SLA turnaround times are due dates. Policy issuance and renewal processing follows seasonal patterns. Catastrophe events create surge demand that overwhelms normal processing capacity.

**11. Legal**: Case management follows a workflow that resembles job shop production. Court deadlines are hard due dates. Document production (discovery) has volume and deadline pressures. Litigation support operations plan around court calendars and filing deadlines.

**12. Government**: Defense production (weapons, vehicles, aircraft) follows formal production planning with government oversight. Government printing offices plan document production runs. Benefits processing (Social Security, VA claims) is a high-volume production operation with quality and timeliness requirements.

**13. Pharma**: Pharmaceutical manufacturing uses batch production with extensive documentation (batch records). Campaign scheduling runs multiple batches of the same product before cleaning and changeover. Cleaning validation between different products adds significant changeover time. Regulatory requirements (FDA, EMA) mandate specific production documentation and quality hold points.

**14. Automotive**: Assembly line scheduling is the most sophisticated form of production planning — balancing thousands of option combinations across a moving line while maintaining takt time. Sequenced part delivery from suppliers must synchronize with the assembly schedule. Model changeover planning is a major event planned months in advance.

**15. Telecom**: Network build-out follows project-based production planning. Equipment installation and commissioning schedules coordinate multiple work crews across geography. Subscriber activation has a "production" component — provisioning services, shipping and activating devices, and porting numbers.

**16. Media & Entertainment**: Production planning for film, TV, and events is project-based — call sheets, shooting schedules, and production calendars coordinate dozens of departments. Post-production (editing, visual effects, sound mixing) follows a workflow schedule with dependencies. Broadcasting schedules daily content production for news and live programming.

**17. Energy & Utilities**: Power generation scheduling dispatches generating units based on demand forecasts and unit economics (merit order). Plant maintenance outage planning is critical — you cannot maintain a power plant when demand is at peak. Refinery scheduling optimizes crude oil processing to maximize high-value product output.

**18. Food & Beverage**: Batch production with strict sanitation requirements between allergen changeovers. Campaign production (running all chocolate flavors before changing to vanilla) minimizes cleaning. Short shelf life products require make-to-order or very short-cycle make-to-stock. Seasonal production (canning harvest crops) compresses the production year.

**19. Logistics & Transport**: Fleet operations planning schedules vehicles, drivers, and routes — similar to shop floor scheduling. Cross-dock operations plan inbound-to-outbound flow with tight timing. Warehouse labor planning allocates staff across receiving, picking, and shipping operations based on expected workload.

**20. Nonprofit**: Program delivery planning applies production concepts — scheduling workshops, coordinating service delivery, and managing volunteer labor. Meal programs (food banks, shelters) plan daily production. Disaster response operations plan logistics, shelter setup, and service delivery under urgent conditions.

**21. SaaS / Technology**: Hardware manufacturing (servers, devices, accessories) uses traditional production planning. Software "production" (release management) plans feature development sprints, testing cycles, and deployment windows. Data center capacity planning manages server provisioning and decommissioning.

**22. Professional Services**: Resource planning in professional services is production planning for people. Project staffing allocates consultants and specialists to engagements based on skills, availability, and utilization targets. Deliverable production follows workflows similar to manufacturing routings.

**23. Defense & Aerospace**: Long-cycle production with extensive testing and documentation at each stage. Earned value management (EVM) tracks production progress against cost and schedule baselines. Production lot acceptance testing verifies each batch. Configuration management ensures every unit is built to the correct specification revision.

**24. Mining**: Mine production planning optimizes the sequence of extraction to balance ore grade, waste removal, and equipment utilization. Processing plant scheduling maximizes throughput while meeting product quality specifications. Blasting schedules coordinate with all site activities for safety.

**25. Chemicals**: Reactor scheduling optimizes batch sequencing for yield and changeover time. Continuous process plants adjust production rates rather than schedule discrete batches. Campaign planning runs compatible products in sequence to minimize cleaning. Multi-product plants optimize the allocation of reactor time across products based on demand and margin.

**26. Textiles & Apparel**: Production planning coordinates cutting, sewing, finishing, and packaging across multiple styles and sizes. Fabric utilization (marker efficiency) optimizes cutting layouts to minimize waste. Sample production for pre-season approval follows a different workflow from bulk production. Multi-factory allocation assigns styles to factories based on capability, capacity, and cost.

**27. FMCG**: High-speed production lines with frequent changeovers between product variants. Line scheduling optimizes the sequence to minimize changeover time while meeting demand for each variant. Co-packing operations (producing private label products for retailers) add scheduling complexity with different specifications on the same line.

**28. Electronics**: SMT (surface mount technology) line scheduling plans PCB assembly runs to maximize equipment utilization. Test scheduling allocates automated test equipment time. Box build (final assembly) scheduling follows electronics assembly. Firmware loading and configuration are production steps that must be sequenced correctly.

**29. Oil & Gas**: Refinery production planning (LP modeling) optimizes the blend of crude oils and operating conditions to maximize margin given product demands and crude costs. Upstream production planning manages well output, artificial lift programs, and facility throughput. Pipeline scheduling sequences different products through shared pipelines with interface management.

**30. Jewelry & Luxury**: Production planning for handcrafted items is artisan-based — scheduling individual craftspeople with unique skills. Stone setting, engraving, and finishing require sequential operations with quality checkpoints. Custom orders follow individual routings. Batch production of standard pieces uses more traditional scheduling for casting and machine operations.


## ERP•AI & Proto

**ERP•AI**: ERP•AI provides production planning templates covering BOM management, work order processing, production scheduling, shop floor tracking, and capacity planning, configurable to discrete, process, or batch manufacturing environments.

**Proto**: Proto agents apply the ORAI cycle to production planning — Observing shop floor status, material availability, and demand changes in real time, Reasoning about optimal schedules and resource allocation, Acting on work order releases and schedule adjustments, and Iterating on planning parameters as actual production data reveals improvement opportunities.
