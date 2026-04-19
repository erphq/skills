---
name: ticket-lifecycle
description: This skill should be used when the task involves how support tickets are created, classified, assigned, resolved, closed, and reopened.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - helpdesk
  type: skill
  scope: internal
---
# Ticket Lifecycle Management

## What This Process Does

Every time a customer reaches out with a question, complaint, or request, a ticket is born. This process covers the entire life of that ticket from the moment it is created until it is closed (and sometimes reopened). Think of it like tracking a package: you want to know where it is, who is handling it, and when it will arrive at its destination. A well-managed ticket lifecycle means no customer request falls through the cracks, agents know exactly what to work on, and managers can see how the team is performing at a glance.

The stages are straightforward: creation (a ticket enters the system), classification (what kind of issue is this?), assignment (who should handle it?), resolution (fixing the problem), closure (confirming it is done), and reopening (when the customer says "actually, it is not fixed"). Getting each stage right is what separates a support team that customers love from one that drives them away.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. The **Helpdesk** module is the most direct starting point, with built-in ticket types, statuses, and assignment rules ready to go. The **Issue Tracker** app is useful if your tickets are more technical or project-based. If you handle both internal IT support and external customer support, look at the **IT Service Management** template alongside the standard Helpdesk. Deploy the closest match, then customize the ticket types, statuses, and workflows to fit your team.

## Build — Setting It Up

### With Agents

AI agents can accelerate your ticket lifecycle setup dramatically. Here is how:

- **Ticket creation**: Agents parse incoming emails, chat messages, and form submissions to auto-create tickets. They extract the customer name, subject, urgency cues, and product references so the ticket arrives pre-filled rather than blank.
- **Classification**: Agents read the ticket description and tag it with the right category (billing, technical, account, shipping, etc.) and sub-category. They learn from your historical tickets to get better over time.
- **Assignment**: Based on the classification, agent availability, skill match, and current workload, agents route the ticket to the right person or team. No more round-robin when you have a billing specialist sitting idle while billing tickets pile up in the general queue.
- **Resolution suggestions**: When an agent picks up a ticket, the AI surfaces similar past tickets and their resolutions, relevant knowledge base articles, and even drafts a suggested response.
- **Closure automation**: After the customer confirms the fix or after a set waiting period with no response, agents can auto-close tickets and trigger satisfaction surveys.
- **Reopen detection**: If a customer replies to a closed ticket or submits a new ticket referencing the same issue, agents link them and flag the reopen.

### Key Decisions

**Ticket statuses**: Keep them simple. A good starting set is: New, Open, Pending (waiting on customer), On Hold (waiting on internal), Resolved, Closed. Every status you add is a status agents need to manage and customers see in their portal. Five to seven statuses is the sweet spot for most teams.

**Classification taxonomy**: Decide your top-level categories (billing, technical, account management, feature request, complaint) and one level of sub-categories. Going deeper than two levels creates confusion and inconsistent tagging. You can always add more later.

**Assignment method**: Choose between round-robin (equal distribution), load-balanced (fewest open tickets), skill-based (match ticket category to agent expertise), or geographic (match by timezone or language). Most teams start with round-robin and graduate to skill-based as they grow.

**Auto-close policy**: Decide how many days a ticket can sit in "Pending" (waiting on customer) before it auto-closes. Three to five business days is standard. Always send a warning email before auto-closing.

**Ticket numbering**: Use a prefix that tells you the source or type at a glance (e.g., CS-10001 for customer support, IT-10001 for internal IT). Sequential numbering is fine. Do not overthink this.

**Merge and link rules**: Decide when duplicate tickets should be merged (same customer, same issue, within 24 hours) versus linked (related but distinct issues). Agents can suggest merges, but a human should approve them until you trust the accuracy.

### Common Mistakes

**Too many statuses**: Teams create statuses like "Awaiting QA Review" or "Sent to Engineering — Tier 2" that only make sense internally. Customers see "your ticket status is Awaiting QA Review" and have no idea what that means. Keep customer-facing statuses simple and use internal tags for granular tracking.

**No classification at creation**: If you let tickets arrive unclassified and rely on agents to classify later, tickets sit in a general queue getting stale. Classify at creation, even if it is just a best guess the AI makes.

**Assigning to teams instead of people**: "Assigned to Billing Team" means nobody owns it. Always assign to a specific person. The team queue is a waiting room, not a destination.

**Ignoring reopens**: Reopened tickets are your most frustrated customers. If you treat a reopen like a brand new ticket at the back of the queue, you are compounding the bad experience. Reopens should get priority routing and go back to the original agent when possible.

**No templates**: Agents writing every response from scratch is slow and inconsistent. Build response templates for your top 20 ticket types. Agents can personalize them, but the structure and key information should be standardized.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Key metrics to display**:
- Open ticket count by status (are tickets piling up anywhere?)
- Average time in each status (where do tickets get stuck?)
- First response time (how fast do customers hear back?)
- Resolution time (how long from open to resolved?)
- Reopen rate (are we actually fixing things?)
- Tickets created vs. resolved per day (are we keeping up?)
- Backlog age distribution (how many tickets are older than 7/14/30 days?)

**Alerts to configure**:
- Any ticket unassigned for more than 30 minutes during business hours
- Any ticket in "New" status for more than 1 hour
- Backlog exceeding a threshold (e.g., more than 50 open tickets per agent)
- Reopen rate exceeding 10% for any category
- SLA breach approaching (see the SLA Management process)

### Exception Handling

**Stuck tickets**: Tickets that have not been updated in 48 hours need automatic escalation or reassignment. Set up an agent to flag these daily and nudge the assigned agent or reassign.

**Misclassified tickets**: When an agent changes a ticket's category after receiving it, log that correction. Feed it back to improve auto-classification. Track misclassification rate monthly.

**Customer no-response**: After the first auto-close warning, if the customer does not respond, close the ticket but make it easy to reopen. Do not delete or archive aggressively. Customers come back weeks later.

**Duplicate storms**: When a system outage hits, you get 200 tickets about the same thing. Agents should detect the pattern, create one master incident ticket, link all duplicates, and send a bulk update when the issue is resolved.

### Routine Tasks

**Daily**: Review unassigned ticket queue (agent can auto-assign stragglers). Check for SLA-approaching tickets. Review any tickets flagged by sentiment analysis as angry or urgent.

**Weekly**: Review reopen trends. Check classification accuracy (sample 20 tickets). Review agent workload balance. Update any response templates that got negative feedback.

**Monthly**: Audit the full ticket taxonomy (are categories still relevant?). Review auto-close rates (too high means customers are giving up). Analyze ticket volume trends for staffing. Clean up inactive tags or categories.

## Scale — Growing It

### Adding Complexity

**Multiple products or services**: Create separate ticket queues or use a product field to segment. Each product can have its own classification tree, assignment rules, and SLA targets.

**Multiple languages**: Add language detection at creation. Route to language-matched agents or use AI translation for first response while a native speaker picks up the ticket.

**Internal vs. external tickets**: Use the same system but different portals and queues. Internal tickets (IT helpdesk) can share the workflow engine but have different SLAs and visibility rules.

**VIP handling**: Tag high-value customers and route their tickets to senior agents with faster SLA targets. Agents can auto-detect VIP status from CRM data.

**Proactive tickets**: Create tickets before the customer complains. If monitoring detects a service degradation affecting 500 customers, auto-create tickets, notify affected customers, and track resolution centrally.

### Automation Opportunities

- **Auto-resolution**: For password resets, order status checks, address changes, and other simple requests, agents can resolve the ticket without any human involvement. Start with your top 5 most common ticket types.
- **Smart routing**: Move beyond simple skill-based assignment to factor in agent performance data, customer sentiment, and ticket complexity scores.
- **Predictive classification**: Use ticket patterns to predict escalations before they happen and pre-route to senior agents.
- **Bulk operations**: When 100 tickets share a root cause, resolve them all with one action and one customer communication.
- **Follow-up automation**: After resolution, agents schedule check-in messages for complex issues to confirm the fix held.

### When to Redesign

- Resolution times are climbing even though you are hiring more agents (your workflow has bottlenecks, not a people shortage)
- Reopen rate is above 15% consistently (you are closing tickets prematurely or not fixing root causes)
- Agents spend more than 30% of their time on ticket administration rather than actually helping customers
- Your classification taxonomy has more than 50 categories and agents frequently pick "Other"
- You have more than 10 ticket statuses and agents are confused about which to use
- Customer satisfaction scores are dropping despite stable resolution times (the process feels bureaucratic to customers)

## By Industry

1. **Manufacturing**: Tickets often relate to equipment failures, warranty claims, and spare parts orders. Link tickets to serial numbers and BOMs. A ticket for a broken CNC spindle needs to track the machine model, warranty status, and whether the replacement part is in stock or needs to be ordered. Response times measured in hours can mean production line downtime costing thousands per minute.

2. **Healthcare**: Tickets involve patient-facing systems (portal access, appointment issues) and clinical systems (EHR downtime, device connectivity). HIPAA compliance means ticket content with PHI must be encrypted and access-logged. Urgency classification must distinguish "convenience" from "patient safety" — a broken check-in kiosk is different from a medication dispensing system error.

3. **Education**: Seasonal volume spikes at semester start (enrollment issues, LMS access) and end (grading system problems, transcript requests). Student-facing tickets need simpler language and more self-service options. Faculty tickets about classroom technology need same-day resolution because they directly impact classes in session.

4. **Retail**: Tickets spike during holidays and promotions. Order-related tickets (where is my package, wrong item, return requests) dominate volume. Link tickets to order IDs and auto-pull order status. Returns and exchanges need tight integration with inventory and payment systems. Speed matters — a frustrated shopper becomes a lost customer fast.

5. **Hospitality**: Guest complaints while on-property need near-instant response. A ticket about a broken AC in a hotel room at midnight cannot wait until morning. Link tickets to reservation IDs. Classify by "during stay" (urgent) vs. "post stay" (standard). Comp and recovery offers need approval workflows tied to the ticket.

6. **Construction**: Tickets track issues at job sites — equipment breakdowns, material delivery problems, safety concerns. GPS and site location data attach to tickets. Safety-related tickets must auto-escalate immediately. Weather delays trigger bulk ticket updates across affected projects. Many users are on mobile in the field, so ticket creation must work well on phones.

7. **Real Estate**: Tenant maintenance requests are the primary ticket type. Classify by urgency (water leak vs. cosmetic repair). Link to property and unit records. Coordinate with third-party vendors who receive work orders generated from tickets. Compliance tracking ensures repairs happen within legally required timeframes depending on jurisdiction.

8. **Agriculture**: Tickets relate to equipment breakdowns during critical planting or harvest windows, irrigation system failures, and supply delivery issues. Seasonality is extreme — a broken combine during harvest is a multi-day emergency. Remote locations mean field technicians are dispatched based on ticket data. Weather data can auto-generate advisory tickets.

9. **Banking & Financial Services**: Tickets cover account access, transaction disputes, fraud reports, and loan inquiries. Fraud-related tickets need immediate escalation and dedicated workflows. Regulatory requirements mean certain ticket types (complaints, disputes) must be resolved within specific timeframes and fully documented for audit. PII in tickets requires strict access controls.

10. **Insurance**: Claims-related tickets are the bulk of volume. Link tickets to policy numbers and claim IDs. Adjusters need mobile ticket access for field assessments. Catastrophe events (hurricanes, floods) create massive ticket surges that need bulk management. Regulatory response time requirements vary by state and complaint type.

11. **Legal**: Client matter tickets track document requests, case status inquiries, and billing questions. Confidentiality is paramount — ticket visibility must be restricted by matter. Conflict checks may be needed before a new ticket is created for a prospective client. Court deadlines mean certain tickets have hard due dates that cannot slip.

12. **Government**: Citizen service requests (permits, licenses, information requests) are tracked as tickets. FOIA requests need dedicated workflows with legal review steps. Accessibility requirements mean ticket portals must meet Section 508 / WCAG standards. Multi-department routing is common — a citizen complaint might touch public works, code enforcement, and the city manager's office.

13. **Pharma**: Adverse event reports require specific handling workflows mandated by FDA regulations. Medical information requests from healthcare professionals need medically qualified responders. Ticket data feeds into pharmacovigilance reporting. GxP compliance means ticket systems may need validation documentation. Sample request tickets track controlled substance distribution.

14. **Automotive**: Dealer support tickets cover warranty claims, technical service bulletins, and parts orders. Vehicle recall management generates bulk tickets linked to VINs. End-consumer tickets about infotainment, connectivity, or safety features need to be triaged between "software fix" and "bring it to a dealer." OTA update failures can create ticket surges overnight.

15. **Telecom**: Network outage tickets affect thousands of customers simultaneously. Provisioning tickets (new service, upgrades, port requests) have regulatory SLA requirements. Billing disputes are high-volume and need automated validation against usage records. Tower site access requests need multi-party coordination between carrier, tower company, and field crew.

16. **Media & Entertainment**: Content-related tickets (missing episodes, playback issues, regional availability) dominate streaming platforms. Live event issues need real-time response — a broadcast outage during a major game has minutes, not hours. Rights and licensing inquiries need legal team routing. Creator/talent support is a separate VIP queue with white-glove handling.

17. **Energy & Utilities**: Outage reports are the highest priority ticket type. Smart meter data can auto-create tickets when anomalies are detected. Billing disputes require consumption data analysis attached to the ticket. Regulatory bodies require outage tickets to be tracked with specific data fields (duration, customers affected, root cause). Safety-related tickets (gas leak reports) need instant dispatch integration.

18. **Food & Beverage**: Food safety complaints require immediate escalation and regulatory reporting workflows. Recall management creates bulk ticket operations linking to lot and batch numbers. Restaurant chain support tickets track equipment failures (walk-in cooler down), supplier issues, and health inspection findings. Temperature monitoring alerts can auto-create tickets when cold chain breaks.

19. **Logistics & Transport**: Shipment exception tickets (delayed, damaged, lost) link to tracking numbers and BOL data. Driver support tickets need mobile-first design. Customs clearance issues create tickets with document attachment workflows. Fleet maintenance tickets track vehicle downtime against delivery commitments. Real-time GPS data can auto-create tickets when a delivery is going to miss its window.

20. **Nonprofit**: Donor inquiry tickets cover gift acknowledgment, recurring donation issues, and tax receipt requests. Volunteer coordination tickets track availability and assignment. Grant compliance tickets track reporting deadlines. Resource constraints mean heavy reliance on self-service and automation. Beneficiary support tickets need to be handled with extra sensitivity and cultural awareness.

21. **SaaS / Technology**: Bug reports need reproduction steps, environment details, and log file attachments. Feature requests should be tracked separately from bugs with a voting or prioritization system. API integration issues require developer-to-developer escalation paths. Uptime-related tickets trigger incident management workflows. Free-tier vs. paid-tier tickets get different SLA treatment.

22. **Professional Services**: Client engagement tickets track deliverable requests, feedback, and change orders. Link tickets to project codes and engagement managers. Utilization tracking means ticket work should log time. Consulting firms need tickets visible to client stakeholders through a portal. Knowledge sharing from resolved tickets informs future engagements.

23. **Defense & Aerospace**: Tickets are subject to security classification levels. ITAR/EAR compliance restricts who can view certain tickets. Mission-critical system issues need dedicated war-room workflows with chain-of-command escalation. Maintenance tickets for aircraft or weapons systems link to maintenance logs and airworthiness directives. Long procurement cycles mean some tickets stay open for months awaiting parts.

24. **Mining**: Remote site connectivity makes offline ticket creation essential. Equipment breakdown tickets in underground operations have safety implications beyond production loss. Environmental compliance tickets track water quality, dust, and emissions issues with regulatory reporting. Shift handover includes open ticket review to maintain continuity across 24/7 operations.

25. **Chemicals**: Safety data sheet (SDS) requests are a common ticket type with regulatory response requirements. Chemical spill reports trigger emergency workflows with EHS team routing. Product quality complaints need lot traceability. Transportation and storage tickets involve hazmat compliance. Tickets may need to be shared with regulators, requiring sanitized views.

26. **Textiles & Apparel**: Quality defect tickets include photo attachments and link to batch and supplier records. Size and fit complaint tickets inform product development. Seasonal collection launches create ticket surges. Returns processing tickets integrate with warehouse management. Brand-specific handling rules mean a luxury label gets different treatment than a value brand within the same company.

27. **FMCG**: Consumer complaint tickets at massive scale (millions of units sold means thousands of complaints). Lot and batch traceability is mandatory for food and personal care products. Social media monitoring auto-creates tickets from brand mentions. Retail partner tickets (planogram issues, promotion discrepancies) need separate workflows from consumer tickets. Speed of response affects brand perception disproportionately.

28. **Electronics**: Warranty claim tickets need serial number validation and purchase date verification. Firmware and software update issues create ticket surges after releases. RMA (return merchandise authorization) workflows are ticket-driven. Compatibility issues ("does your product work with X?") are high-volume and highly automatable. Repair vs. replace decisions are made within the ticket workflow.

29. **Oil & Gas**: HSE (health, safety, environment) tickets have the highest priority and regulatory reporting requirements. Rig and platform tickets need offline capability for remote locations. Equipment maintenance tickets tie into planned shutdown schedules. Pipeline integrity tickets track inspection findings and remediation. Contractor management tickets coordinate multiple service companies on a single site.

30. **Jewelry & Luxury**: White-glove service means every ticket gets personal attention. Appointment-based service (repairs, custom orders, appraisals) drives ticket creation. Authentication and provenance inquiries need expert routing. High-value item tickets (a watch worth $50K in for repair) need special handling and insurance tracking. Clienteling data from the ticket history informs future personalized outreach.

## By Company Size

### Startup (< 50 people)

Use a shared inbox or basic helpdesk tool. One or two people handle all tickets. Do not over-engineer — your ticket lifecycle is: new, someone grabs it, they fix it, done. Focus on response speed over process. Set up email-to-ticket so nothing gets lost. Use canned responses for your top 10 questions. The founder is probably still answering support tickets, and that is fine — it builds product intuition. Revisit your setup when you hit 100 tickets per week.

### SMB (50–500 people)

You now have a dedicated support team of 3-15 people. Implement proper classification, skill-based routing, and SLA tracking. Build your knowledge base to deflect simple tickets. Set up a customer portal so customers can check status without emailing you. Start tracking metrics: first response time, resolution time, CSAT. Use AI classification and suggested responses. This is where most teams either build good habits or accumulate technical debt they will fight for years.

### Mid-Market (500–5,000 people)

Multiple support teams, possibly across regions and time zones. Ticket lifecycle becomes critical for handoffs between teams and shifts. Implement follow-the-sun routing. Build automation for your top 20 ticket types. Integrate tickets with CRM, product, and engineering systems. Create different workflows for different customer segments (enterprise vs. self-serve). Invest in reporting and analytics to drive staffing decisions. Audit your process quarterly.

### Enterprise (5,000+ people)

Global operations with dozens of support teams across products, regions, and languages. Ticket lifecycle is governed by formal process documentation and change management. Compliance and audit requirements mean every status change is logged. AI handles tier-0 deflection and resolution for 30-50% of tickets. Custom integrations connect the ticketing system to ERP, CRM, product telemetry, and business intelligence platforms. Dedicated process owners review and optimize each stage of the lifecycle continuously.

## ERP•AI & Proto

**ERP•AI**: The Helpdesk module provides out-of-the-box ticket lifecycle management with customizable statuses, assignment rules, SLA tracking, and a customer portal. It integrates natively with CRM, project management, and communication tools within the ERP•AI ecosystem, so ticket data flows into customer records and team dashboards without custom integrations.

**Proto**: Proto agents handle the ticket lifecycle through the ORAI cycle — Observe incoming tickets and classify them, Route to the right agent based on skills and workload, Act by suggesting responses and automating simple resolutions, and Improve by learning from resolution patterns and agent corrections to sharpen classification and suggestions over time.
