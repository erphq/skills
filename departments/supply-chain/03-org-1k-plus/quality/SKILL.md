---
name: quality
description: This skill should be used when the task involves how to make sure what you buy, make, and sell meets your standards every time.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - scm
  type: skill
  scope: internal
---
# Quality Management

## What This Process Does

Quality management is how you make sure things are right. When materials arrive from a supplier, are they good enough? When your production line makes something, does it meet spec? When a customer gets your product, does it work as promised? And when something goes wrong, how do you find the root cause and make sure it does not happen again?

The core activities are: incoming inspection (checking what suppliers send you), in-process quality checks (catching problems during production before they become finished goods), non-conformance reporting (documenting when something fails), corrective and preventive action or CAPA (fixing the root cause), lot traceability (knowing exactly which batch of materials went into which products), and recalls (getting defective products back when something slips through).

Quality management is not about being perfect — it is about being consistent and catching problems early when they are cheap to fix instead of late when they are expensive or dangerous.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Quality Inspection** app, the **Non-Conformance Tracker**, the **CAPA Management** workflow, and the **Lot Traceability** templates. ERP•AI's catalog of 720+ apps includes quality management configurations for different regulatory environments — from basic inspection checklists to full GMP-compliant quality systems. Deploy the template that matches your industry's requirements and customize inspection criteria, disposition workflows, and reporting formats.

## Build — Setting It Up

### With Agents

AI agents make quality management more consistent and less paperwork-heavy:

- **Inspection plan creation**: Describe your products and specifications, and agents build inspection checklists with the right measurements, tolerances, sampling plans, and pass/fail criteria for each item.
- **Specification import**: Feed agents your product specs, engineering drawings, or supplier quality agreements, and they extract the quality requirements into structured inspection criteria.
- **Risk-based inspection rules**: Agents analyze your supplier and item history to recommend inspection intensity — full inspection for new suppliers or problem items, skip-lot inspection for proven ones.
- **CAPA workflow design**: Describe your organization structure and agents set up CAPA workflows with appropriate investigation steps, escalation paths, and closure criteria.
- **Regulatory crosswalk**: Tell agents which regulations apply to you (ISO 9001, FDA 21 CFR, GMP, IATF 16949) and they map requirements to specific quality system elements, identifying gaps in your current setup.

### Key Decisions

**Inspection strategy**: Do you inspect everything (100% inspection), use statistical sampling (AQL-based), or inspect nothing and rely on supplier certifications? The answer depends on the risk. Safety-critical items get more inspection. Trusted suppliers with track records get less. New suppliers and new items get more until they earn trust.

**Sampling plans**: If you are sampling, which standard do you follow? AQL (acceptable quality level) plans from ISO 2859 are most common. You need to decide your acceptable defect rate and the sample size — tighter standards mean more inspection but catch more problems.

**Disposition authority**: Who can decide what happens to non-conforming material? Someone has to authorize whether to accept, reject, rework, or use-as-is. This decision has quality, cost, and schedule implications. Define who can make each type of disposition decision before you need to make one.

**Lot size and lot numbering**: How do you define a lot? For manufacturers, it might be a production run, a batch, or a day's output. For distributors, it might be a purchase receipt. Your lot definition determines the scope of a recall — smaller lots mean a smaller recall but more tracking overhead.

**Quality data retention**: How long do you keep inspection records, test results, and CAPA documentation? Regulations often specify minimums (FDA requires records for the life of the product plus additional years). Even without regulations, keep data long enough to spot trends.

### Common Mistakes

**Making quality everyone's job and nobody's responsibility**: Yes, everyone should care about quality. But someone specific needs to own the quality system, run inspections, manage CAPAs, and maintain certifications. Without dedicated ownership, quality processes atrophy.

**Inspecting only at the end**: If you only check quality on finished products, you have already wasted all the material and labor that went into defective units. In-process checks catch problems when they are cheap to fix. The goal is to prevent defects, not just detect them.

**Filing CAPAs and forgetting them**: A CAPA that is opened, investigated, and then sits unresolved is worse than useless — it gives the illusion of a quality system without actually fixing anything. Track CAPA aging and escalate overdue items.

**Not validating supplier certificates of analysis**: Your supplier says this batch meets spec and provides a certificate. How do you know? Periodic verification testing of supplier-certified lots keeps suppliers honest.

**Treating all defects the same**: A cosmetic scratch and a structural crack are not the same thing. Your quality system needs severity classifications that drive different responses. Critical defects stop the line. Minor defects get logged and trended.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Incoming quality dashboard**: Rejection rate by supplier, item, and defect type. Trending up means a supplier is slipping. Trending down means your supplier development efforts are working.

**In-process quality dashboard**: Defect rates by production line, product, and shift. This tells you where your process is unstable.

**CAPA status tracker**: Open CAPAs by age, type, and responsible party. Anything open more than 90 days should be escalated. Your closure rate should exceed your creation rate over time.

**Cost of quality report**: What are you spending on prevention (inspections, training), appraisal (testing, audits), internal failure (scrap, rework), and external failure (returns, warranties, recalls)? The goal is to shift spending from failure to prevention.

**Supplier quality alerts**: When a supplier's rejection rate crosses a threshold, trigger an immediate alert to procurement and quality. Do not wait for the monthly report.

**Lot hold alert**: Any time a lot is placed on quality hold, alert the relevant teams immediately — especially if that lot has already been partially shipped or used in production.

### Exception Handling

**Failed incoming inspections**: Agents document the failure with photos and measurements, quarantine the lot in the system, notify the supplier, create a return authorization or rework plan, and check if any open POs from the same supplier need additional scrutiny.

**In-process quality failures**: Agents stop the workflow for the affected lot, notify the production supervisor, calculate the scope of the issue (how many units might be affected), and initiate containment — identifying and quarantining all suspect material.

**Customer complaints**: Agents log the complaint, link it to the relevant lot or serial number, search for patterns (is this the same issue reported by others?), initiate a CAPA if warranted, and prepare a response for the customer.

**Recall initiation**: When a recall is necessary, agents identify all affected lots, trace forward to find every customer who received them, draft recall notifications, and create a tracking system for returns and replacements.

**Audit findings**: When internal or external audits identify non-conformances, agents create CAPAs from audit findings, assign responsible parties, set timelines, and track closure.

### Routine Tasks

**Daily inspection reports**: Agents compile the day's inspection results, highlight failures, and distribute summaries to quality, production, and procurement teams.

**Weekly quality review**: Agents prepare a quality summary including trending defect rates, open CAPA status, supplier performance, and any emerging patterns.

**Monthly supplier scorecards**: Agents calculate quality scores for each supplier based on inspection results, on-time delivery of conforming material, and CAPA responsiveness.

**Quarterly management review prep**: Agents compile the data package for management review — quality metrics, trends, CAPA effectiveness, audit results, and customer feedback — as required by ISO 9001 and similar standards.

**Certificate and calibration tracking**: Agents monitor expiration dates for supplier certifications, equipment calibrations, and employee training certifications, alerting well in advance of lapses.

## Scale — Growing It

### Adding Complexity

**Multi-site quality systems**: When you have multiple locations, you need a common quality system with consistent standards and shared data, but allow for local variations where regulations differ. A centralized quality team sets policy; local quality teams execute.

**Supplier quality management**: As your vendor base grows, you need a formal supplier quality program — supplier audits, approved supplier lists, supplier development plans for underperformers, and second-source qualification processes.

**Statistical process control (SPC)**: Move beyond pass/fail inspection to real-time process monitoring with control charts. SPC tells you when a process is drifting toward out-of-spec before it actually produces defects, enabling preventive intervention.

**Advanced traceability**: Full chain traceability from raw material supplier lot through production lot to customer delivery. This is essential in regulated industries and increasingly expected in consumer goods for transparency and recall readiness.

**Laboratory information management (LIMS)**: When your testing operations grow — more tests, more instruments, more regulatory reporting — you need a LIMS to manage samples, test methods, results, and certifications.

### Automation Opportunities

**Automated inspection data capture**: Agents connect to measurement instruments (scales, calipers, spectrometers, vision systems) and capture inspection data directly, eliminating manual recording errors and speeding up the process.

**Intelligent sampling**: Instead of fixed sampling plans, agents adjust inspection intensity dynamically based on supplier history, lot history, and risk signals — inspecting more when risk is high and less when track records are clean.

**Automated CAPA creation and routing**: When defect patterns emerge (same failure three times in a week), agents automatically create a CAPA, assign it to the appropriate owner based on the defect type and source, and set a timeline.

**Predictive quality**: Agents analyze process parameters (temperature, pressure, speed, raw material lot) alongside quality results to predict which conditions will produce defects, enabling proactive adjustment before problems occur.

**Regulatory report generation**: Agents compile data into the specific formats required by regulators — FDA MDR reports, EU IVDR vigilance reports, automotive PPAPs — reducing the compliance burden.

### When to Redesign

- Customer complaints are increasing despite steady or growing inspection effort
- CAPA backlog exceeds 50 open items or average closure time exceeds 120 days
- You are entering a new regulated market (medical devices, food, pharma) that requires a step-change in quality systems
- A major customer or regulatory audit results in critical findings
- Your cost of quality (especially external failure costs) exceeds 5% of revenue
- You have expanded to more than three manufacturing or distribution locations

## By Industry

**1. Manufacturing**: Quality management is central to operations. Incoming material inspection, in-process SPC, final inspection, and outbound quality verification are standard. ISO 9001 is the baseline certification. Industry-specific standards add requirements — IATF 16949 for automotive, AS9100 for aerospace, ISO 13485 for medical devices.

**2. Healthcare**: Quality covers patient safety — device performance, sterile processing, drug compounding accuracy, and clinical outcomes. FDA 21 CFR Part 820 governs medical device quality systems. Joint Commission and CMS standards drive hospital quality programs. Adverse event reporting (MDR/MedWatch) is mandatory for device and drug problems.

**3. Education**: Quality focuses on educational outcomes, accreditation standards, and facility safety. Accreditation bodies (SACSCOC, HLC) review institutional quality. Lab equipment calibration and chemical safety in science programs follow industry standards. Food quality in school nutrition programs follows USDA requirements.

**4. Retail**: Quality is about product safety and customer satisfaction. Incoming inspection of merchandise ensures items match specifications and safety standards. Private label products require more extensive quality programs including factory audits. Consumer product safety compliance (CPSC) and labeling accuracy are key focuses.

**5. Hospitality**: Quality is guest experience — room cleanliness, food safety, service consistency. HACCP and local health department standards govern food safety. Brand standards for hotel chains define everything from thread count to check-in time. Mystery shopper programs and guest surveys are the "inspection" methods.

**6. Construction**: Quality control covers materials testing (concrete compressive strength, steel tensile strength), workmanship inspection (welds, finishes, installations), and code compliance. Third-party inspections and building code inspectors provide external quality verification. Punch lists at project completion capture deficiencies.

**7. Real Estate**: Quality in property management means building condition — HVAC performance, structural integrity, code compliance, and tenant satisfaction. Property condition assessments are periodic "inspections." Tenant complaints serve as a quality signal. Energy performance monitoring catches building system degradation.

**8. Agriculture**: Quality grading of crops (USDA grades for grain, produce) determines value and marketability. Food safety certifications (GlobalGAP, FSMA) cover growing practices. Pesticide residue testing ensures compliance. Livestock quality involves health inspections, vaccination records, and grading standards.

**9. Banking & Financial Services**: Quality means accuracy and compliance — correct transactions, proper documentation, regulatory adherence. Transaction error rates and audit findings are quality metrics. SOX compliance controls are quality checkpoints. Customer complaint tracking identifies service quality issues.

**10. Insurance**: Quality means claims accuracy, policy issuance accuracy, and regulatory compliance. Claims audits check for proper investigation, accurate reserves, and correct payments. Underwriting quality reviews verify risk assessment accuracy. State regulatory examinations serve as external quality audits.

**11. Legal**: Quality is about work product accuracy, legal research thoroughness, and client outcomes. Peer review of legal documents is the quality check. Malpractice claims data reveals quality failures. Bar association standards and ethics rules set minimum quality requirements.

**12. Government**: Quality management in government follows specific standards — MIL-STD for defense, FAR quality clauses for contractors, agency-specific quality programs. Inspector General audits serve as quality reviews. Performance reporting (GPRA) tracks program quality outcomes against targets.

**13. Pharma**: The most heavily regulated quality system. GMP (Good Manufacturing Practice) governs every aspect. Batch records document every step and measurement. Deviation management, CAPA, change control, and validation are core processes. FDA inspections (Form 483 observations) can shut down operations. Data integrity is under intense regulatory focus.

**14. Automotive**: IATF 16949 certification is required to supply most automakers. PPAP (Production Part Approval Process) qualifies each part with dimensional data, material testing, and process capability studies. FMEA (failure mode and effects analysis) drives preventive quality planning. Warranty data feeds back to identify field quality issues.

**15. Telecom**: Network quality means uptime, call quality, and data speeds — measured by SLAs and regulatory standards. Equipment quality testing follows telecom-specific standards (TL 9000). Customer-reported network issues serve as quality signals. Service quality is measured through technical KPIs (dropped calls, latency) and customer satisfaction surveys.

**16. Media & Entertainment**: Quality is production value — broadcast signal quality, content accuracy, production standards. Technical quality control ensures media files meet format specifications. Editorial review processes are quality checks for content accuracy and standards compliance. Equipment maintenance ensures production quality.

**17. Energy & Utilities**: Quality covers equipment performance, power reliability, and regulatory compliance. Equipment testing (transformers, breakers, meters) follows IEEE and utility standards. Power quality (voltage stability, frequency) is monitored continuously. Nuclear plants operate under NRC quality programs with the highest standards in any industry.

**18. Food & Beverage**: HACCP is the foundation — identifying critical control points where food safety hazards must be controlled. FSSC 22000 or SQF certification covers the broader food safety management system. Environmental monitoring (pathogen testing of production surfaces) catches contamination risks. Allergen management prevents cross-contact.

**19. Logistics & Transport**: Quality means shipment accuracy (right items, right quantity, right destination), on-time delivery, and damage prevention. Carrier performance tracking is a quality metric. Warehouse pick accuracy is monitored continuously. Claims rates for lost and damaged shipments indicate quality problems.

**20. Nonprofit**: Quality relates to program effectiveness and donor accountability. Program evaluations measure whether interventions achieve intended outcomes. Grant compliance audits verify proper use of funds. Service delivery standards ensure consistent quality across locations or delivery partners.

**21. SaaS / Technology**: Quality is software quality — defect rates, uptime, performance, and user experience. QA testing (automated and manual) catches defects before release. Production monitoring catches issues that reach customers. Bug tracking and resolution SLAs drive quality improvement. SOC 2 Type II audits verify security and operational controls.

**22. Professional Services**: Quality is deliverable quality and client satisfaction. Peer review of work products (reports, analyses, designs) is the primary quality control. Client satisfaction surveys and NPS scores track service quality. Professional certifications and continuing education maintain competency standards.

**23. Defense & Aerospace**: AS9100 and MIL-Q-9858 quality standards govern defense contractors. First article inspection verifies initial production meets all specifications. Non-destructive testing (X-ray, ultrasonic, magnetic particle) finds hidden defects in critical parts. Counterfeit parts prevention requires documented supply chain pedigree.

**24. Mining**: Quality means ore grade, product purity, and safety compliance. Assay results verify mineral content at each processing stage. Environmental quality monitoring tracks air, water, and soil contamination. Equipment inspection programs prevent catastrophic failures. Safety quality programs (ISO 45001) address the high-risk working environment.

**25. Chemicals**: Quality testing verifies purity, concentration, and composition at each processing stage. Certificate of analysis accompanies each batch shipped. Process safety management (PSM) is a quality discipline preventing catastrophic releases. Stability testing determines shelf life. Analytical method validation ensures test results are reliable.

**26. Textiles & Apparel**: Quality covers fabric testing (strength, colorfastness, shrinkage, pilling), garment construction (seam strength, stitching, sizing consistency), and compliance testing (flammability, restricted substances like azo dyes and formaldehyde). Factory audits verify working conditions and quality capabilities. Pre-shipment inspection is standard for imports.

**27. FMCG**: Quality combines food/personal care safety with consumer satisfaction. Line-side quality checks catch packaging defects and fill accuracy issues. Shelf-life testing validates product stability. Sensory panels evaluate taste, texture, and appearance. Consumer complaint analysis identifies emerging quality issues.

**28. Electronics**: Quality testing includes functional testing, environmental stress screening (temperature, vibration, humidity), and reliability testing (accelerated life testing). IPC standards govern PCB assembly quality. Electrostatic discharge (ESD) control prevents latent damage. Failure analysis of returned products identifies design and manufacturing weaknesses.

**29. Oil & Gas**: Quality covers pipe and vessel integrity (welding inspection, hydrostatic testing, corrosion monitoring), product quality (fuel specifications), and safety-critical equipment testing. API standards govern equipment quality. Pipeline integrity management programs monitor quality over the life of the asset. Refinery product quality testing ensures fuel meets specifications.

**30. Jewelry & Luxury**: Quality is about authenticity, craftsmanship, and materials. Gemstone grading (4 Cs for diamonds) follows GIA or equivalent standards. Precious metal assay verifies purity (hallmarking). Craftsmanship inspection examines setting security, finish quality, and overall presentation. Provenance documentation ensures ethical sourcing claims are verified.

## By Company Size

### Startup (< 50 people)

Quality might just be "the founder checks things before they ship." Formalize this into a basic inspection checklist even if it is just a Google Form. Start tracking defects and complaints from day one — this data is gold when you grow. If you are in a regulated industry, get professional quality help early. Agents can monitor customer feedback channels and flag quality signals that you might miss while focused on growth.

### SMB (50–500 people)

Time for a real quality system. Assign someone to own quality, implement incoming and in-process inspections, and set up a CAPA process. If your industry requires ISO 9001 or similar certification, start the journey now — it takes 6-12 months. Agents manage inspection scheduling, CAPA tracking, and supplier quality reporting, freeing your quality person to focus on root cause analysis and process improvement.

### Mid-Market (500–5,000 people)

Dedicated quality department with inspectors, quality engineers, and a quality manager. Formal quality management system certified to your industry's standard. SPC on critical processes. Supplier audit program. Laboratory for testing if your products require it. Agents handle the data-intensive work — analyzing defect trends, generating control charts, preparing regulatory submissions, and managing the document control system.

### Enterprise (5,000+ people)

Full quality organization with corporate quality leadership setting standards and site quality teams executing. Integrated quality data across all sites for enterprise-wide visibility. Advanced analytics identifying subtle quality patterns that span sites, products, and time periods. Agents serve as the quality intelligence layer — continuously monitoring all quality signals, predicting emerging issues, automating routine compliance documentation, and enabling real-time quality decision-making across the organization.

## ERP•AI & Proto

**ERP•AI**: ERP•AI offers quality management templates covering incoming inspection, in-process checks, CAPA management, lot traceability, and supplier quality tracking, configurable to industry-specific regulatory requirements.

**Proto**: Proto agents apply the ORAI cycle to quality management — Observing inspection results, defect patterns, and process parameters, Reasoning about root causes and quality risks, Acting on containment measures and CAPA assignments, and Iterating as quality data accumulates to shift from detection to prevention.
