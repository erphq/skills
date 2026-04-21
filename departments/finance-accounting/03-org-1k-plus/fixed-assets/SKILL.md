---
name: fixed-assets
description: This skill should be used when the task involves track company property and equipment, calculate depreciation, handle disposals and revaluations, and manage lease accounting.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - erp
  type: skill
  scope: internal
---
# Fixed Assets

## What This Process Does

Fixed assets are the big-ticket items your company owns and uses for more than one year — buildings, machinery, vehicles, computer equipment, furniture, and software. Unlike office supplies or raw materials that get consumed quickly, fixed assets have a long useful life and lose value gradually over time. That gradual loss of value is called depreciation, and tracking it correctly is essential for accurate financial reporting and tax compliance.

The fixed assets process covers the full lifecycle: acquire an asset (buy it, build it, or lease it), record it in the asset register, calculate depreciation each period, track its physical location and condition, revalue it if necessary, and eventually dispose of it (sell, scrap, or trade in). Along the way, you need to handle improvements (capital expenditures that extend the asset's life), impairments (sudden drops in value), transfers between departments or locations, and increasingly complex lease accounting rules.

Get this wrong and you overstate or understate your net worth, pay the wrong amount in taxes, and cannot answer basic questions like "How old is our equipment?" or "What is our building worth?"

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Fixed Asset Register** template, the **Depreciation Engine**, and the **Lease Accounting (ASC 842 / IFRS 16)** app. If you are in manufacturing or construction, the **Capital Project Tracker** bundles asset creation with project cost accumulation. Deploy the closest match from ERP•AI's 720+ catalog, then customize.

## Build — Setting It Up

### With Agents

AI agents streamline fixed asset management significantly:

- **Asset register population**: An agent can scan your existing records (spreadsheets, prior system exports, purchase orders above your capitalization threshold) and create asset records with acquisition date, cost, location, department, and useful life. It flags items that might be assets but were expensed, and items capitalized that probably should not have been.
- **Capitalization decision support**: When a new purchase arrives, the agent evaluates it against your capitalization policy (amount threshold, useful life) and recommends whether to capitalize or expense. It handles gray areas like leasehold improvements, software implementation costs, and component replacements.
- **Depreciation calculation**: Agents calculate depreciation for every asset every period — straight-line, declining balance, units of production, or sum-of-years-digits — and post the journal entries automatically. They maintain both book and tax depreciation schedules simultaneously.
- **Physical verification**: Agents generate cycle count lists, compare asset register records to physical scan results, and flag discrepancies (ghost assets that are on the books but not physically present, or unrecorded assets that exist but are not in the register).
- **Lease classification and measurement**: Under ASC 842 and IFRS 16, virtually all leases go on the balance sheet. Agents classify leases, calculate right-of-use assets and lease liabilities, build amortization schedules, and handle modifications like renewals, terminations, and rent changes.
- **Disposal processing**: When an asset is sold, scrapped, or traded in, the agent calculates the gain or loss (proceeds minus net book value), removes the asset and accumulated depreciation from the books, and posts the disposal entry.

### Key Decisions

1. **Capitalization threshold**: What dollar amount determines whether a purchase is an asset or an expense? $500, $1,000, $5,000? Lower thresholds mean more items tracked as assets (more work but better visibility). Higher thresholds simplify tracking but may understate assets for smaller companies. Tax rules may differ from book policy.
2. **Depreciation methods**: Straight-line is the simplest and most common for book purposes. Tax depreciation often uses MACRS (Modified Accelerated Cost Recovery System) in the US, which front-loads deductions. You will likely maintain at least two depreciation books — one for financial reporting and one for tax.
3. **Useful life estimates**: How long will each asset category last? Office furniture: 7 years. Computer equipment: 3–5 years. Buildings: 30–40 years. Vehicles: 5–7 years. These estimates drive your depreciation expense and need to be reasonable and consistent.
4. **Asset categories**: Group similar assets for reporting and policy purposes — land, buildings, machinery, vehicles, furniture, IT equipment, software, leasehold improvements. Each category typically has its own depreciation method and useful life.
5. **Component accounting**: Do you track a building as one asset or break it into components (roof, HVAC, elevator)? Component accounting is more work but gives more accurate depreciation and makes partial replacements easier to handle.
6. **Lease accounting policy**: Under ASC 842, you must decide whether to use the practical expedients (short-term lease exception for leases under 12 months, low-value asset exception under IFRS 16). You also need to determine your incremental borrowing rate for discounting lease liabilities.

### Common Mistakes

- **Ghost assets**: Assets that are on the books but no longer physically exist — they were scrapped, lost, or stolen but never removed from the register. You are depreciating things you do not have and overstating your net assets.
- **Wrong capitalization**: Expensing items that should be capitalized (understating assets and overstating current-period expenses) or capitalizing items that should be expensed (overstating assets and understating expenses). Repair vs. improvement is the classic gray area.
- **Ignoring impairment**: An asset's value drops significantly (flood damage, technology obsolescence, market decline) but you keep depreciating on the original schedule. You must test for impairment when indicators exist.
- **Tax/book confusion**: Using tax depreciation for financial reporting or vice versa. They are different calculations for different purposes. Maintain both.
- **No physical verification**: If you have never physically verified your asset register, it is probably 10–20% inaccurate. Ghost assets, missing assets, and location errors accumulate quickly.
- **Lease accounting procrastination**: ASC 842 and IFRS 16 are mandatory. Companies that procrastinated on implementation are now dealing with audit qualifications and restatements.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

- **Asset register summary**: Total assets by category, location, department, and age. Net book value trending over time. Capital expenditure vs. budget.
- **Depreciation forecast**: Projected depreciation expense for the next 12 months. Useful for budgeting and understanding when assets will be fully depreciated.
- **Fully depreciated assets**: List of assets with zero net book value that are still in use. These may need replacement planning or useful life reassessment.
- **Lease portfolio dashboard**: All active leases with key dates (commencement, expiration, renewal option, termination option), remaining lease liability, and upcoming payment schedules.
- **Physical verification status**: Which asset categories or locations have been verified this year and which are due? Discrepancy rates by location.
- **Capital budget tracker**: Approved capital projects vs. actual spending. Forecast when assets will be placed in service and begin depreciating.

### Exception Handling

- **Capitalization threshold borderline items**: Purchases near the capitalization threshold require judgment. Agents flag items within 20% of the threshold and route them to the controller for consistent treatment.
- **Unusual depreciation patterns**: An asset depreciating faster or slower than its peers in the same category may have incorrect useful life, wrong method, or a data entry error. Agents flag outliers.
- **Lease modifications**: When lease terms change (rent increase, term extension, early termination), agents recalculate the right-of-use asset and lease liability using the modified terms and current discount rate.
- **Impairment triggers**: Agents monitor for impairment indicators — significant market decline, physical damage reports, technology changes, or operating losses in a business unit. They flag assets requiring impairment testing.
- **Disposal without authorization**: An asset is physically removed but no disposal entry is posted. Agents detect discrepancies between the asset register and physical verification results.

### Routine Tasks

- **Monthly**: Agents calculate and post depreciation for all assets. Post lease amortization entries. Reconcile the fixed asset sub-ledger to the GL. Review assets placed in service this month for correct categorization and useful life. Process any disposals.
- **Quarterly**: Agents review impairment indicators. Update the capital expenditure forecast. Reconcile tax and book depreciation schedules. Review lease modifications and renewals.
- **Annually**: Agents conduct or support physical verification of all assets (or a cycle count covering a portion each quarter). Calculate annual tax depreciation including bonus depreciation and Section 179 elections. Prepare fixed asset schedules for auditors. Review and update useful life estimates and capitalization policies.

## Scale — Growing It

### Adding Complexity

- **Multi-entity**: Assets owned by different entities require entity-level registers with consolidated reporting. Intercompany asset transfers need gain/loss calculations and proper tax treatment.
- **Multi-country**: Different countries have different depreciation rules, useful lives, revaluation requirements, and tax incentives. Agents maintain country-specific depreciation books alongside group reporting standards.
- **Capital projects**: Large assets (buildings, production lines) go through a construction-in-progress phase where costs accumulate before the asset is placed in service. Agents track CIP costs by project and convert them to fixed assets upon completion.
- **Asset-intensive operations**: Companies with thousands of assets (utilities, telecom, fleet operators) need barcode or RFID tracking, mobile verification apps, and automated condition assessment.
- **Lease portfolio growth**: As lease count grows, managing renewal options, termination options, purchase options, and variable lease payments becomes a full-time job. Agents manage the lease lifecycle and calculate the balance sheet impact of exercising or not exercising options.

### Automation Opportunities

- **Smart capitalization**: Agents review all purchases above a lower threshold and automatically capitalize or expense based on policy rules, routing only true judgment calls to humans.
- **Predictive maintenance integration**: When maintenance systems predict an asset is nearing end of life, agents automatically update useful life estimates and flag potential impairment.
- **Automated physical verification**: Integration with IoT sensors, RFID readers, or image recognition to continuously verify asset existence and condition without manual counts.
- **Lease abstraction**: When new leases are signed, agents extract key terms (commencement, term, payments, options, escalations) from the lease document and create the accounting entries automatically.
- **Tax optimization**: Agents model different tax depreciation strategies (bonus depreciation, Section 179, cost segregation) and recommend the approach that minimizes tax liability.

### When to Redesign

- Your asset register has more than 10% discrepancy with physical counts — ghost assets and missing assets indicate a broken process.
- Tax and book depreciation schedules diverge in ways you cannot explain — your tracking system cannot handle the complexity.
- You have acquired companies with different asset systems and are maintaining spreadsheets to bridge them.
- Lease accounting is consuming more than a week of effort each close — you need better tools and automation.
- You cannot answer basic questions about your asset base (average age, replacement cost, utilization) — your data model is insufficient.

## By Industry

1. **Manufacturing**: The asset register is dominated by production machinery and tooling. Component accounting matters — a $2 million CNC machine has a spindle, control system, and hydraulics with different useful lives. Agents track maintenance events that may trigger component replacement capitalization and calculate units-of-production depreciation based on machine hours.

2. **Healthcare**: Medical equipment (MRI machines, CT scanners, surgical robots) involves high acquisition costs and rapid technology obsolescence. FDA compliance requires tracking equipment calibration, maintenance, and end-of-life disposition. Agents manage regulatory maintenance schedules alongside depreciation and flag equipment approaching end of useful life for replacement planning.

3. **Education**: Campus buildings are long-lived assets (50+ years) but require periodic major renovations that must be distinguished from maintenance. Library collections, lab equipment, and IT infrastructure rotate on different cycles. Endowment-funded assets require tracking the funding source. Agents manage the capital renewal cycle and track deferred maintenance backlogs.

4. **Retail**: Store fixtures, point-of-sale systems, and leasehold improvements dominate the asset register. Store remodels create complex accounting — which costs extend life (capitalize) and which are maintenance (expense)? Lease accounting for hundreds of store locations is a major workstream. Agents manage store-level asset tracking and lease portfolio administration.

5. **Hospitality**: Hotel assets include the building, FF&E (furniture, fixtures, and equipment), kitchen equipment, and technology systems. FF&E reserves (typically 4–5% of revenue) fund periodic replacements. Brand standards dictate renovation cycles. Agents track FF&E reserve funding against planned replacements and ensure renovations meet brand timeline requirements.

6. **Construction**: Construction companies own heavy equipment (excavators, cranes, loaders) tracked by serial number and current job site. Equipment utilization and idle time affect depreciation. Equipment transfers between job sites must be tracked for cost allocation. Agents monitor equipment location via GPS integration and calculate job-site-level equipment costs.

7. **Real Estate**: Buildings are the primary asset, often held at fair value (investment property under IAS 40) or historical cost with depreciation. Land improvements, tenant improvements, and building improvements each have different treatment. Cost segregation studies reclassify building components into shorter-lived categories for tax purposes. Agents maintain property-level asset registers and support cost segregation analysis.

8. **Agriculture**: Land, irrigation systems, orchards, vineyards, and livestock are the primary fixed assets. Bearer plants (orchards, vineyards) are capitalized during the growing period and depreciated once mature. Livestock may be depreciated or valued at fair value depending on the accounting standard. Agents track biological asset maturity stages and calculate depreciation commencement dates.

9. **Banking & Financial Services**: The asset base is relatively simple — buildings, ATMs, IT infrastructure, and office equipment. Leased premises for branches are a significant lease accounting workstream. Foreclosed real estate (OREO — Other Real Estate Owned) has specific accounting rules. Agents manage branch lease portfolios and track OREO carrying values against market assessments.

10. **Insurance**: Similar to banking — primarily office buildings, IT systems, and leased premises. Investment real estate held for portfolio returns follows different accounting than operational assets. Agents manage the distinction between operational and investment property accounting and track investment property fair values.

11. **Legal**: Law firm assets are primarily leasehold improvements, office furniture, and IT equipment. Library collections (increasingly digital) may be capitalized or expensed depending on type and policy. Partner capital contributions may fund asset acquisitions, requiring tracking by partner. Agents manage lease accounting for multiple office locations and track technology refresh cycles.

12. **Government**: Government assets follow GASB standards with specific capitalization thresholds and depreciation methods. Infrastructure assets (roads, bridges, water systems) can use either depreciation or the modified approach (maintaining condition assessments). Capital asset reporting in the government-wide statements is mandatory. Agents maintain condition assessments for infrastructure assets and calculate depreciation per GASB requirements.

13. **Pharma**: Laboratory equipment, clean room facilities, and manufacturing equipment (bioreactors, fill-finish lines) are capital-intensive and highly regulated. Equipment validation and qualification costs may be capitalized. In-process R&D acquired in business combinations has specific accounting rules. Agents track GMP equipment qualification status alongside financial depreciation.

14. **Automotive**: Assembly line equipment, stamping presses, and robotic welding systems are major capital assets with long useful lives. Tooling (dies, molds, fixtures) is specific to vehicle models and becomes obsolete when models are discontinued. Agents track tooling amortization per model lifecycle and flag tooling assets tied to models approaching end of production.

15. **Telecom**: Network infrastructure (cell towers, fiber optic cable, switches, spectrum licenses) represents billions in capital assets. Spectrum licenses may be indefinite-lived intangible assets not subject to amortization but tested for impairment. Asset retirement obligations for tower decommissioning require accrual. Agents manage massive network asset registers and calculate ARO present values for decommissioning.

16. **Media & Entertainment**: Content libraries (film, TV, music catalogs) are the most valuable intangible assets, amortized using the individual-film-forecast method based on projected revenues. Broadcast equipment and studio facilities are depreciable fixed assets. Digital infrastructure (streaming platforms, CDN) is increasingly significant. Agents calculate content amortization curves and update revenue forecasts seasonally.

17. **Energy & Utilities**: Generation assets (power plants, turbines, solar panels, wind farms), transmission assets (power lines, substations), and distribution assets (transformers, meters) form a massive asset base. Regulatory rate cases determine the return earned on the rate base. Asset retirement obligations for nuclear decommissioning are enormous. Agents maintain regulatory asset databases and calculate composite depreciation rates approved by utility commissions.

18. **Food & Beverage**: Processing equipment (pasteurizers, bottling lines, freezers), warehouse facilities, and delivery fleets are the primary assets. Food safety regulations require equipment meeting specific standards — replacement due to regulatory changes may need accelerated depreciation. Agents track equipment compliance with food safety standards and flag assets that may need early replacement.

19. **Logistics & Transport**: Fleet vehicles, aircraft, containers, ships, and material handling equipment dominate the asset register. Asset utilization rates directly impact profitability — idle assets still depreciate. Residual value estimates for vehicles and aircraft are significant and require periodic reassessment. Agents track fleet utilization, update residual value estimates based on market data, and optimize replacement timing.

20. **Nonprofit**: Donated assets must be recorded at fair value on the date of donation, which may require appraisals. Collections (art, historical artifacts) may be exempt from capitalization if specific conditions are met. Grant-funded assets may have restrictions on disposition. Agents manage fair value determination for donated assets and track grant-imposed restrictions on disposition.

21. **SaaS / Technology**: Capitalized software development costs (ASC 350-40 for internal use, ASC 985-20 for external sale) require careful tracking of development phases — preliminary stage costs are expensed, application development stage costs are capitalized. Cloud computing arrangement costs (ASC 350-40 guidance) determine whether hosting fees are capitalized. Agents track software development hours by project phase and apply capitalization rules.

22. **Professional Services**: Asset base is typically light — office leases, furniture, IT equipment, and possibly vehicles. The most significant fixed-asset decision is often whether to buy or lease office space. Agents manage office lease portfolios, especially for firms with multiple locations across cities.

23. **Defense & Aerospace**: Government-furnished equipment (GFE) must be tracked but is not owned by the contractor. Contractor-acquired property on government contracts has specific accounting and disposition rules (FAR 45). ITAR-controlled equipment requires export control tracking. Agents maintain GFE records alongside owned assets and enforce ITAR compliance on equipment transfers.

24. **Mining**: Mine development costs, processing plants, haul roads, and heavy earth-moving equipment are the primary assets. Mining asset depreciation often uses units-of-production based on ore reserves. Mine closure obligations create significant asset retirement obligations. Agents calculate UOP depreciation based on production tonnage and update mine closure cost estimates annually.

25. **Chemicals**: Chemical processing plants, reactors, storage tanks, and pipeline systems are long-lived, high-value assets. Turnaround and catalyst replacement costs are significant — some are capitalized, others expensed depending on whether they extend useful life. Environmental compliance upgrades may be separately capitalized. Agents track turnaround costs by component and apply capitalization criteria.

26. **Textiles & Apparel**: Weaving, knitting, dyeing, and finishing equipment are the primary manufacturing assets. Fashion industry cycles may obsolete equipment when production shifts to different materials or techniques. Retail store buildouts and leasehold improvements cycle with lease terms. Agents track equipment utilization against production orders and flag underutilized assets.

27. **FMCG**: High-speed production lines, packaging equipment, and warehouse automation systems require significant capital investment. Asset tagging and tracking across multiple manufacturing and distribution sites is challenging. Equipment is often shared across product lines, complicating cost allocation. Agents manage asset tracking across sites and allocate shared equipment costs to product lines.

28. **Electronics**: Semiconductor fabrication equipment costs hundreds of millions per fab and has a relatively short useful life (5–7 years) due to technology node progression. Clean room facilities and testing equipment are also capital-intensive. Agents track fab equipment against technology roadmaps and calculate accelerated depreciation when equipment cannot support next-generation processes.

29. **Oil & Gas**: Upstream assets include wells, platforms, pipelines, and processing facilities. Successful efforts accounting capitalizes only costs of successful wells. Depletion is calculated on a field-by-field basis using units of production. Asset retirement obligations for well plugging and platform decommissioning are substantial. Agents calculate field-level depletion and maintain ARO estimates updated with current cost data.

30. **Jewelry & Luxury**: Store buildouts for luxury retail locations are significant assets — flagship stores can cost millions in leasehold improvements. Display cases, security systems, and vault facilities are specialized assets. Manufacturing assets include precision cutting and polishing equipment. Agents manage luxury retail lease accounting and track high-security asset installations.

## By Company Size

### Startup (< 50 people)

Your asset register is short — maybe some computers, furniture, and leasehold improvements. Use ERP•AI's basic fixed asset template. Set your capitalization threshold high enough ($2,500 or more) to avoid tracking every desk lamp. Your tax accountant handles depreciation at year-end. The main thing an agent does for you is flag purchases that should be capitalized but were expensed (or vice versa). If you have leases, use the agent to calculate your ASC 842 entries — this is complex enough that even a small company should automate it.

### SMB (50–500 people)

You probably have 100–1,000 assets across a few locations. Monthly depreciation needs to be automated — posting manual entries for 500 assets is not practical. Implement barcode tracking for physical verification. Your biggest risk is ghost assets — equipment that was disposed of but never removed from the books. Run your first physical count (you will be surprised at the results). An agent should calculate monthly depreciation, maintain both book and tax schedules, and flag fully depreciated assets for replacement planning.

### Mid-Market (500–5,000 people)

Thousands of assets across multiple locations, entities, and countries. Capital project management becomes a major workstream — you are building facilities, installing production lines, and managing construction-in-progress. Lease accounting for office and warehouse space is a significant effort. Agents manage the full asset lifecycle, maintain multi-book depreciation (book, tax, IFRS), support physical verification programs, and handle lease portfolio accounting. Start benchmarking your capital efficiency (revenue per dollar of fixed assets) against peers.

### Enterprise (5,000+ people)

Tens of thousands to millions of assets across global operations. Asset-intensive enterprises (utilities, telecom, manufacturing) have dedicated asset management teams. Integration with engineering asset management (EAM), maintenance management (CMMS), and GIS systems is essential. Agents handle high-volume depreciation, complex tax optimization (cost segregation, bonus depreciation strategies), global lease portfolio management, and regulatory compliance across jurisdictions. Fixed asset data feeds into capital allocation models, replacement planning, and insurance valuations.

## ERP•AI & Proto

**ERP•AI**: The Fixed Assets module in ERP•AI includes a full asset register with barcode/RFID integration, multi-book depreciation engines (book, tax, IFRS, statutory), lease accounting per ASC 842 and IFRS 16, capital project tracking with CIP-to-asset conversion, physical verification workflows, and disposal processing with gain/loss calculations.

**Proto**: Proto agents manage fixed assets through the ORAI loop — they observe asset acquisitions and condition changes, reason about capitalization decisions and impairment indicators, act by calculating depreciation and posting entries, and iterate by refining useful life estimates and identifying optimization opportunities like cost segregation or early replacement.
