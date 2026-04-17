---
name: sla-management
description: This skill should be used when the task involves how to set response times, resolution targets, escalation rules, and handle breaches.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - helpdesk
  type: skill
  scope: internal
---
# SLA Management

## What This Process Does

An SLA (Service Level Agreement) is a promise you make to your customers about how fast you will respond to and resolve their issues. SLA management is the process of defining those promises, tracking whether you are keeping them, and taking action when you are about to break one. Think of it like delivery guarantees for an online store — you promise 2-day shipping, and your entire operation is built around making that happen. When you miss it, you need to know why and fix it.

This covers setting the right targets (not too ambitious, not too lazy), building the rules that escalate tickets before they breach, monitoring compliance across teams, and reporting on performance to both internal stakeholders and customers. Done well, SLA management builds customer trust and gives your support team clear priorities. Done poorly, it creates a culture of panic, gaming the numbers, and closing tickets prematurely just to hit targets.

## Start Here: erp.ai Templates

Before building anything from scratch, check erp.ai's template library. The **Helpdesk** module includes SLA rule configuration with priority-based response and resolution targets. The **Service Level Agreement** template within the Helpdesk module lets you define multiple SLA policies and assign them to customer groups or ticket types. If you are managing IT support internally, the **IT Service Management** template follows ITIL-aligned SLA structures. Deploy the closest match and adjust the time targets to fit your actual capacity.

## Build — Setting It Up

### With Agents

AI agents transform SLA management from reactive firefighting to proactive control:

- **SLA assignment**: When a ticket is created, agents automatically determine which SLA policy applies based on the customer's contract tier, the ticket priority, the product involved, and the time of day. No manual lookup required.
- **Clock management**: Agents track SLA clocks accurately, pausing when the ticket is waiting on the customer (pending status), adjusting for business hours vs. calendar hours, and accounting for holidays across different regions.
- **Breach prediction**: Instead of alerting when an SLA is about to breach, agents predict breaches hours in advance based on current agent workload, ticket complexity, and historical resolution times for similar tickets. This gives you time to act.
- **Escalation execution**: When a ticket is approaching its SLA threshold, agents automatically escalate — reassigning to a faster agent, elevating priority, notifying a supervisor, or pulling in additional resources.
- **Reporting**: Agents compile SLA compliance reports by team, agent, customer tier, ticket category, and time period. They highlight trends (Tuesday afternoons are your worst SLA window) and recommend actions (add a part-time agent for Tuesday/Wednesday overlap).
- **Contract alignment**: Agents cross-reference customer contracts to ensure the correct SLA terms are applied and flag mismatches when a customer is getting better or worse treatment than their contract specifies.

### Key Decisions

**What to measure**: At minimum, track First Response Time (how long until the customer hears back) and Resolution Time (how long until the issue is fixed). Some teams also track Next Response Time (ongoing communication gaps), Time to Assign, and Time to Escalate. Start with two metrics and add more once you are consistently hitting those.

**Business hours vs. calendar hours**: Most B2B SLAs run on business hours (e.g., 8 hours means 8 business hours, not 8 clock hours). B2C support often runs on calendar hours because customers do not care about your office schedule. High-priority tickets for enterprise customers often run 24/7 regardless of your standard hours. Define this clearly for each SLA tier.

**Priority levels and targets**: A common starting framework:

- Critical (system down, revenue impact): 15-minute first response, 4-hour resolution
- High (major feature broken, workaround exists): 1-hour first response, 8-hour resolution
- Medium (minor feature issue, no workaround needed urgently): 4-hour first response, 24-hour resolution
- Low (question, feature request, cosmetic issue): 8-hour first response, 72-hour resolution

These are examples. Set targets based on what you can actually achieve 90-95% of the time, not aspirational numbers you will miss constantly.

**SLA pause rules**: Decide exactly which statuses pause the SLA clock. Typically, "Pending Customer" pauses the clock because you are waiting on them. "On Hold — Internal" usually does NOT pause the clock because the delay is on your side. Be precise — ambiguity here leads to SLA gaming.

**Breach consequences**: What happens internally when an SLA breaches? Options range from a notification to the team lead, to automatic escalation to management, to financial penalties in the contract. Define this upfront so everyone knows the stakes.

**Grace periods and warnings**: Set warning thresholds at 50% and 75% of the SLA window. At 50%, the assigned agent gets a nudge. At 75%, the team lead is notified and the ticket is flagged. At 90%, it is escalated. Do not wait until 100% to take action.

### Common Mistakes

**Setting targets you cannot meet**: If your average resolution time is 18 hours, do not promise 4-hour resolution. You will breach constantly, erode customer trust, and burn out your team chasing impossible targets. Set targets at your 85th percentile and improve from there.

**One SLA for all customers**: A startup on your free plan and an enterprise customer paying $100K/year should not have the same response time promise. Create SLA tiers that match your customer segments and pricing.

**Ignoring business hours configuration**: Your SLA says 8-hour response. A ticket comes in at 5 PM Friday. Is the deadline 1 AM Saturday or 1 PM Monday? If you have not configured business hours, holidays, and timezone handling, your SLA tracking is meaningless.

**Gaming the metrics**: Agents learn to send a quick "we are looking into this" reply to stop the first response clock, then take another day to actually investigate. If your SLA only measures first response and not quality of first response, you incentivize this behavior. Pair SLA metrics with CSAT scores.

**Not pausing correctly**: If the SLA clock keeps running while you wait 3 days for the customer to send you their account details, your metrics look terrible for something that is not your fault. Configure pause rules properly.

**Measuring everything, acting on nothing**: A dashboard with 30 SLA metrics that nobody reviews weekly is worse than 3 metrics that drive daily decisions. Focus on the metrics that change behavior.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Key metrics to display**:
- SLA compliance rate by tier (what percentage of tickets are resolved within SLA?)
- Current tickets approaching SLA breach (sorted by time remaining)
- Average response time vs. SLA target by priority level
- Breach count by team, agent, category, and time period
- SLA clock time breakdown (active time vs. paused time)
- Trend lines: weekly and monthly SLA compliance over time
- Worst-performing categories (which ticket types breach most?)

**Alerts to configure**:
- Ticket at 50% of SLA window with no first response
- Ticket at 75% of SLA window with no resolution path identified
- Ticket at 90% of SLA window — escalate to team lead
- SLA breached — escalate to manager and log the breach
- Daily SLA compliance dropping below target threshold (e.g., below 90%)
- A specific customer's tickets breaching repeatedly (relationship risk)

### Exception Handling

**Mass incidents**: When a system outage creates 500 tickets, normal SLA tracking breaks. Implement an incident mode that groups related tickets under one master incident, pauses individual SLA clocks, and measures the incident SLA instead (time to acknowledge, time to resolve the root cause, time to communicate).

**Unreasonable tickets**: Some tickets are impossible to resolve within SLA — a feature request classified as a bug, a third-party issue outside your control, or a customer demanding something not covered by their contract. Have a process for SLA exceptions: document the reason, get manager approval, exclude from compliance reporting with a tagged justification.

**Clock disputes**: Customers may disagree with your SLA calculations, especially around pause time. Keep detailed audit logs of every clock start, pause, resume, and stop with timestamps. Make these logs available in customer-facing reports for transparency.

**Holiday and timezone conflicts**: A ticket from a customer in Singapore submitted during your US-based team's holiday. Which business calendar applies? Define this in the SLA policy — typically the customer's business hours govern, not yours.

### Routine Tasks

**Daily**: Review the SLA breach risk queue (tickets closest to breaching). Check for any tickets where the SLA clock should be paused but is not. Verify that overnight tickets were assigned and responded to within SLA.

**Weekly**: Review SLA compliance by team and agent. Identify repeat offenders (agents or ticket types) and dig into root causes. Check that SLA policies are correctly assigned to customer tiers (new customers sometimes get the wrong tier).

**Monthly**: Report SLA compliance to management and key customers. Analyze breach patterns (time of day, day of week, category, agent). Adjust SLA targets if they are consistently too easy (below 98% compliance with no effort) or too hard (below 85% despite best efforts). Review customer contracts for SLA changes on renewal.

**Quarterly**: Benchmark your SLA targets against industry standards. Review whether your SLA tiers still align with your customer segments. Audit SLA pause usage for potential gaming. Recalibrate breach prediction models based on recent data.

## Scale — Growing It

### Adding Complexity

**Multi-product SLAs**: Each product line may need different SLA targets. A mission-critical infrastructure product needs 15-minute response; a consumer app needs 4-hour response. Build SLA policies per product and let the system auto-select based on the product field in the ticket.

**Contractual SLAs with penalties**: Enterprise customers negotiate specific SLA terms with financial penalties (service credits) for breaches. Your system needs to track contract-specific SLAs, calculate credits owed, and report compliance at the individual customer level. This requires tighter integration between your helpdesk and contract management systems.

**Follow-the-sun**: With support teams in multiple timezones, SLA clocks do not stop at 5 PM — they transfer to the next region's team. Configure handoff rules so tickets in progress are picked up seamlessly without resetting the SLA clock.

**Tiered SLAs within a single customer**: An enterprise customer might have different SLA targets for different severity levels, products, or user groups within their organization. The CEO's tickets get 15-minute response; general staff gets 4-hour response. This requires per-user or per-group SLA rules linked to the customer contract.

### Automation Opportunities

- **Predictive breach prevention**: Agents analyze current workload, agent schedules, and ticket complexity to predict which tickets will breach and proactively redistribute work before it happens.
- **Automatic priority adjustment**: When a ticket's context changes (customer reports revenue impact, multiple users affected), agents can auto-escalate the priority and apply the corresponding SLA target.
- **SLA compliance reporting**: Automated weekly and monthly reports sent to team leads, managers, and customers without manual compilation.
- **Contract-to-SLA mapping**: When a new customer contract is signed, agents automatically configure the correct SLA policies based on the contract terms.
- **Root cause analysis**: Agents analyze breached tickets to identify systemic causes (understaffing on Mondays, a product module that always takes longer to troubleshoot) and recommend structural fixes.

### When to Redesign

- Your SLA compliance is above 99% for three consecutive months (your targets are too easy and you are not challenging the team)
- Your SLA compliance is below 80% for three consecutive months despite adequate staffing (your targets are unrealistic or your process has structural problems)
- Customers frequently dispute your SLA calculations (your measurement methodology lacks transparency or accuracy)
- Agents spend significant time manipulating ticket statuses to manage SLA clocks rather than solving customer problems
- Your SLA framework cannot accommodate new products, customer segments, or contract structures without manual workarounds
- You have SLA penalties in contracts that your system cannot accurately calculate or report

## By Industry

1. **Manufacturing**: SLAs tied to production line impact. A machine-down ticket has a 1-hour response SLA because every hour of downtime costs real production output. Warranty SLAs are governed by customer contracts that may specify on-site response within 4 hours. Spare parts availability directly affects whether resolution SLAs can be met — track parts inventory alongside ticket SLAs.

2. **Healthcare**: Clinical system SLAs are driven by patient safety, not just convenience. EHR downtime SLAs might be 15-minute response with 2-hour resolution. HIPAA breach notification has its own regulatory timeline (60 days for individual notification, but investigate within 24 hours). Patient portal issues during clinic hours have tighter SLAs than after hours. Differentiate life-safety from convenience SLAs explicitly.

3. **Education**: SLAs flex with the academic calendar. During finals week, LMS issues need 30-minute response. During summer break, 8-hour response is fine. Accreditation-related system issues (student records, financial aid) have regulatory deadlines that override standard SLAs. Student-facing SLAs are often looser than faculty-facing because professors have less flexibility to wait.

4. **Retail**: E-commerce SLAs tighten dramatically during peak shopping events (Black Friday, holiday season). Order-related SLAs must account for shipping deadlines — a shipping address change request 2 hours before dispatch needs faster handling than a general inquiry. In-store POS system issues during business hours need 15-minute response because every minute means lost sales and frustrated customers.

5. **Hospitality**: Guest-on-property SLAs are measured in minutes, not hours. A front desk system failure during check-in peak (3-6 PM) needs immediate response. Reservation system SLAs depend on booking volume — stricter during high season. OTA (online travel agency) integration issues affect revenue directly. Different SLAs for property management system vs. guest WiFi vs. in-room entertainment.

6. **Construction**: Job site SLAs align with project schedules. During critical path activities, equipment and system support needs same-day resolution. Safety system issues (fall detection, gas monitoring) have zero-tolerance SLAs — immediate response required. Weather and site access can make on-site SLAs unpredictable; build buffer time into targets for remote sites.

7. **Real Estate**: Tenant maintenance SLAs are often legally mandated. Many jurisdictions require emergency repairs (no heat, no water, gas leak) within 24 hours. Non-emergency repairs typically have 30-day SLA by regulation. Property management companies track SLA compliance by property and maintenance category for owner reporting and regulatory compliance.

8. **Agriculture**: Seasonal urgency means SLAs must be configurable by crop cycle. During planting and harvest, equipment support SLAs drop from 24 hours to 4 hours. Irrigation system failures in drought conditions get emergency SLA treatment. Remote locations and limited connectivity mean response time starts when the request reaches the system, not when it was submitted from the field.

9. **Banking & Financial Services**: Regulatory SLAs override internal ones. Reg E requires provisional credit within 10 business days for disputed transactions. Complaint SLAs are audited by regulators (CFPB, OCC). Wire transfer issues need immediate SLA because delayed wires can have legal and financial consequences. Different SLAs for consumer banking, commercial banking, wealth management, and institutional services.

10. **Insurance**: Claims processing SLAs vary by state regulation — some states mandate acknowledgment within 15 days and resolution within 30. Catastrophe events (CAT) trigger modified SLA frameworks with relaxed timelines but higher volume expectations. Agent (broker) support SLAs differ from policyholder SLAs. First Notice of Loss (FNOL) needs near-immediate handling for auto and property claims.

11. **Legal**: Client SLAs are implicit in engagement letters and often tie to court deadlines that are non-negotiable. A filing deadline missed because of IT system failure has malpractice implications. E-discovery support during litigation has SLAs measured in days, not weeks. Different practice areas have different urgency profiles — M&A deal closings vs. estate planning.

12. **Government**: Citizen service SLAs are often published publicly and mandated by ordinance or policy. FOIA requests have statutory response deadlines (20 business days federally). 311 service requests have published resolution targets by category (potholes: 48 hours, streetlight repair: 5 days). Performance against SLAs is reported to elected officials and may be published in annual reports.

13. **Pharma**: Adverse event reporting SLAs are FDA-mandated — serious AE reports within 15 calendar days, fatal within 7 days. Medical information request SLAs (48-72 hours) are industry standard though not always legally required. Clinical trial site support SLAs affect enrollment timelines. Drug shortage inquiries from hospitals need expedited handling. GxP system issues follow validated process SLAs.

14. **Automotive**: Dealer support SLAs affect vehicle turnaround time — a technician waiting for a technical service bulletin answer cannot release the car. Recall-related SLAs have NHTSA reporting requirements. Connected vehicle platform SLAs (OTA updates, remote services) are customer-facing with contractual commitments. Supplier quality issue SLAs tie to production schedules.

15. **Telecom**: Network outage SLAs are contractual with enterprise customers and often include service credits calculated per minute of downtime. FCC regulatory SLAs apply to certain service types. Provisioning SLAs (new service activation) are competitive differentiators — promising 24-hour activation vs. the industry standard of 3-5 days. Number portability SLAs are federally regulated.

16. **Media & Entertainment**: Live broadcast support has SLAs measured in minutes during airtime. Content delivery platform SLAs guarantee uptime percentages (99.99%) with credit structures for misses. Advertising system SLAs tie to campaign launch dates that cannot slip. Creator support SLAs for top-tier talent may be contractually specified in talent agreements.

17. **Energy & Utilities**: Outage restoration SLAs are regulated by public utility commissions with mandatory reporting. Gas leak response SLAs are safety-critical (30-60 minute on-site response). Billing dispute SLAs vary by state regulation. Smart meter and smart grid system SLAs affect grid reliability. Renewable energy production monitoring SLAs ensure generation optimization.

18. **Food & Beverage**: Food safety complaint SLAs require investigation initiation within 24 hours. Restaurant equipment SLAs (cooler, fryer, POS) are measured against store operating hours. Supply chain disruption SLAs affect menu availability and customer experience. Health department inquiry response SLAs are regulatory. QA lab result SLAs affect production hold and release decisions.

19. **Logistics & Transport**: Shipment exception SLAs are tied to delivery commitments and vary by service level (next-day vs. ground). Customs clearance issue SLAs affect transit times and can incur demurrage charges. Fleet management system SLAs affect dispatch operations. Driver app support SLAs during delivery windows need 15-minute response. Carrier partner SLAs are contractual with financial penalties.

20. **Nonprofit**: Donor-facing SLAs around gift processing (receipt within 48 hours) affect donor retention. Grant reporting system SLAs tie to funder deadlines. Beneficiary service SLAs may be governed by government contract requirements. Volunteer management system SLAs flex with event schedules. Budget constraints mean SLAs must be achievable with minimal staff.

21. **SaaS / Technology**: SLAs are contractual and published, typically in a public status page and customer agreement. Uptime SLAs (99.9%, 99.95%, 99.99%) define service credit structures. API response time SLAs matter for customer integrations. Tier-based support SLAs (free: community only, paid: 8-hour response, enterprise: 1-hour response with dedicated CSM) are standard. Incident communication SLAs (status updates every 30 minutes during outages) are as important as resolution SLAs.

22. **Professional Services**: SLAs are embedded in engagement agreements and vary by client. Deliverable review turnaround SLAs affect project timelines. Internal knowledge management SLAs ensure consultants can access materials within hours, not days. Travel and expense system SLAs matter because delayed reimbursement affects contractor retention. Different SLAs for different engagement models (fixed-fee vs. time-and-materials).

23. **Defense & Aerospace**: Mission-critical system SLAs are defined in government contracts (often DFARs/FARs requirements). Classified system SLAs involve cleared personnel availability. Weapon system support SLAs tie to operational readiness rates. Maintenance SLAs for aircraft follow strict regulatory frameworks (FAA, military regulations). Response time SLAs may depend on security clearance level of available staff.

24. **Mining**: Equipment support SLAs account for remote site access time. Underground communication system SLAs are safety-critical. Environmental monitoring system SLAs have regulatory compliance implications. Production system SLAs tie to extraction targets and stockpile management. Shift-based operations mean SLAs must cover 24/7 with handoff protocols.

25. **Chemicals**: Safety system SLAs (emergency shutdown, gas detection) are immediate response by regulation. Process control system SLAs affect batch quality and yield. Regulatory reporting system SLAs tie to EPA and OSHA deadlines. Customer order management SLAs vary by product type (commodity vs. specialty chemicals). Lab information system SLAs affect quality release timelines.

26. **Textiles & Apparel**: Sample request SLAs affect sales cycles and retailer buyer deadlines. Production tracking system SLAs tie to delivery windows that retailers enforce with chargebacks. Quality inspection SLAs affect defect rates and returns. Seasonal collection launch SLAs are hard deadlines — miss the buying window and you lose the season. E-commerce platform SLAs tighten during sale events.

27. **FMCG**: Consumer complaint SLAs vary by severity — a foreign object complaint gets 4-hour response while a packaging question gets 48 hours. Retail partner system SLAs (EDI, portal) affect order fulfillment and relationship health. Promotion management system SLAs tie to launch dates. Recall system SLAs are FDA/USDA mandated with specific timelines. Distributor support SLAs affect route-to-market efficiency.

28. **Electronics**: Warranty claim SLAs start from the moment the claim is submitted and vary by product value and warranty tier. RMA processing SLAs affect customer wait time for replacements. Firmware update issue SLAs may be heightened if the issue is a security vulnerability. Enterprise product SLAs differ significantly from consumer SLAs. International SLAs must account for import/export logistics for physical replacements.

29. **Oil & Gas**: HSE incident SLAs are regulatory with OSHA reporting timelines. Production system SLAs are measured against barrel-per-day output targets. Offshore platform SLAs account for helicopter and vessel logistics for on-site response. Pipeline SCADA system SLAs are continuous monitoring with immediate alert response. Refinery process control SLAs tie to throughput and safety.

30. **Jewelry & Luxury**: Repair SLAs account for artisan availability and parts sourcing for vintage pieces. Authentication inquiry SLAs balance thoroughness with customer anxiety about a major purchase. VIP client SLAs are individually negotiated and may include personal courier service for high-value items. After-sales SLAs (engraving, resizing, cleaning) are part of the luxury experience and should never feel rushed.

## By Company Size

### Startup (< 50 people)

You probably do not need formal SLAs yet. What you need is a commitment to respond to customers within a reasonable time — same day for email, within minutes for chat. Track your response times informally. When you start getting complaints about slow responses or when you sign your first enterprise customer who asks for SLA commitments in the contract, it is time to formalize. Start with two tiers: urgent (4-hour response) and everything else (24-hour response).

### SMB (50–500 people)

Implement 3-4 SLA tiers matched to customer value or plan level. Configure business hours with holiday calendars. Set up automated warnings at 50% and 75% of SLA window. Track SLA compliance weekly at team meetings. Build a simple dashboard showing compliance by tier. When a customer churns and cites slow support, you should be able to pull their ticket history and SLA data to understand what happened.

### Mid-Market (500–5,000 people)

SLAs are now contractual commitments with financial implications. Implement per-customer SLA policies for enterprise accounts. Build SLA reporting into quarterly business reviews with customers. Configure breach prediction and proactive escalation. Track SLA compliance by product, team, region, and shift. Integrate SLA data with revenue data to quantify the cost of breaches. Have a formal exception process for SLA adjustments during incidents.

### Enterprise (5,000+ people)

SLA management is a dedicated function. Contract-specific SLAs for hundreds of enterprise customers, each potentially unique. Automated SLA policy assignment from contract management systems. Real-time SLA dashboards visible to operations, management, and customers. Financial penalty calculation and service credit processing. SLA performance feeds into executive compensation metrics. Regular benchmarking against industry standards and competitors. SLA data drives capacity planning and hiring decisions.

## erp.ai & Proto

**erp.ai**: The Helpdesk module includes configurable SLA policies with priority-based targets, business hours with holiday calendars, automatic escalation rules, and SLA compliance dashboards. SLA policies can be assigned to service level agreements linked to customer contracts, ensuring the right targets apply automatically to every ticket.

**Proto**: Proto agents monitor SLA clocks across all open tickets in real time through the ORAI cycle — Observing ticket aging and workload patterns, Routing at-risk tickets to available agents, Acting on escalation rules before breaches occur, and Improving SLA predictions by learning from historical breach patterns and resolution times.
