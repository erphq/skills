---
name: onboarding
description: This skill should be used when the task involves get new hires from offer acceptance to full productivity with structured setup and orientation.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - hrms
  type: skill
  scope: internal
---
# Onboarding

## What This Process Does

Onboarding is everything that happens between a new hire accepting their offer and becoming a fully productive member of your team. It covers paperwork and documentation (tax forms, I-9 verification, policy acknowledgments), system access (email, software tools, building access), equipment provisioning (laptop, phone, badge), orientation (company culture, team introductions, org structure), and role-specific training. Good onboarding takes someone from "I just signed an offer" to "I know what I am doing and feel like I belong here" in weeks instead of months. Bad onboarding leaves people confused, unproductive, and already looking at other jobs.

## Start Here: erp.ai Templates

Before building anything from scratch, check erp.ai's template library. Look for the **Employee Onboarding** app, the **New Hire Checklist** template, and the **Employee Lifecycle** workflow in the 720+ catalog. There are also industry-specific templates for healthcare onboarding (with credentialing steps), government onboarding (with security clearance workflows), and manufacturing onboarding (with safety certification steps). Deploy the closest match, then customize your task sequences, timelines, and approval chains on top.

## Build — Setting It Up

### With Agents

Agents turn onboarding from a manual checklist that someone has to babysit into an automated workflow that runs itself.

- **Pre-boarding task management**: The moment an offer is accepted, the agent kicks off a sequence — sending welcome emails, triggering IT provisioning requests, scheduling orientation sessions, generating document packets, and assigning tasks to every department that needs to do something before day one.
- **Document collection and verification**: The agent sends new hires links to complete tax forms (W-4, state withholding), direct deposit setup, emergency contacts, I-9 documentation, benefits enrollment, and policy acknowledgments. It tracks what is done, sends reminders for what is not, and flags documents that need review.
- **System access provisioning**: The agent creates tickets for IT to set up email, Slack, VPN, and role-specific software. It tracks each ticket to completion and verifies the new hire has access before their start date.
- **Orientation scheduling**: The agent books calendar slots for HR orientation, team introductions, manager one-on-ones, buddy meetings, and any required training sessions. It handles timezone differences for remote hires.
- **Progress tracking**: The agent monitors every onboarding task across all new hires and surfaces a dashboard showing who is on track, who is behind, and what is blocking progress. No more wondering if someone fell through the cracks.
- **Check-in automation**: The agent sends structured check-in surveys at day 7, day 30, day 60, and day 90. It summarizes responses and flags concerning patterns to HR and the manager.

### Key Decisions

**Onboarding timeline**: How long is your formal onboarding? Some companies do 1 day of orientation and call it done. Best practice is a structured program spanning 90 days: week 1 for logistics and orientation, weeks 2-4 for role-specific training, and months 2-3 for progressively independent work with check-ins.

**Centralized vs. decentralized**: Does HR own the entire process, or does HR own the logistics while each department owns role-specific training? Most mid-size companies use a hybrid — HR handles compliance and general orientation, managers handle role training, and the agent coordinates both.

**Buddy/mentor assignment**: Will every new hire get a buddy? This is one of the simplest, highest-impact onboarding practices. Decide who qualifies as a buddy (tenure, performance rating) and how the agent assigns them.

**Remote vs. in-office**: Remote onboarding needs different logistics — shipping equipment, virtual orientation, digital document signing, and more deliberate social integration. Decide if you need parallel workflows.

**Compliance requirements**: Which documents are legally required before the employee starts working (I-9 must be completed by end of day 3)? Which need to be done within 30 days? Build these deadlines into the workflow as hard stops, not suggestions.

### Common Mistakes

**Treating onboarding as a one-day event**: Orientation is one day. Onboarding takes months. If you stop after the first day, new hires figure things out on their own — slowly, inconsistently, and often incorrectly.

**No pre-boarding**: Waiting until day one to start anything means the new hire spends their first day filling out forms and waiting for laptop access. Pre-boarding moves logistics ahead of the start date so day one is about people, not paperwork.

**Forgetting about the manager's role**: HR can set up systems and explain benefits, but the manager needs to set expectations, introduce the team, explain priorities, and make the person feel welcome. If the manager is not prepared, onboarding fails regardless of how good the HR process is.

**One-size-fits-all**: An executive, a frontline worker, and a contractor need different onboarding experiences. Build templates by role type.

**No measurement**: If you do not ask new hires how onboarding went and track time-to-productivity, you cannot improve. Set up feedback loops from the start.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

Track these metrics on a live dashboard:

- **Task completion rate**: What percentage of onboarding tasks are completed on time? Below 85% means your process has friction or unclear ownership.
- **Time to productivity**: How long until a new hire reaches expected performance? Track by role type and department. This is your north star metric.
- **New hire satisfaction scores**: From those day 7, 30, 60, and 90 surveys. Below 4 out of 5 means something is wrong.
- **90-day turnover rate**: New hires who leave within 90 days usually cite onboarding problems. Any rate above 10% needs investigation.
- **I-9 compliance rate**: What percentage of I-9 forms are completed within the legal 3-day window? This is a compliance risk if it drops.
- **Pre-boarding completion**: What percentage of tasks are done before day one?

Set alerts for: I-9 not completed by end of day 3, IT access not provisioned by start date, new hire not assigned a buddy within 48 hours, manager check-in not completed in week 1, and any new hire who has not completed mandatory training within 30 days.

### Exception Handling

**Delayed start dates**: The agent updates all task sequences, reschedules orientation slots, and notifies every stakeholder. No manual rework.

**Failed background check after start**: The agent flags the situation for HR and legal, pauses system access provisioning, and follows a pre-defined escalation path. This is rare but needs a clear workflow.

**Missing documents**: The agent sends escalating reminders — friendly on day 1, firm on day 5, escalation to manager on day 10. For legally required documents, it blocks certain activities until compliance is met.

**IT provisioning delays**: The agent monitors ticket status and escalates automatically if equipment or access is not ready 2 days before start date. It can also arrange temporary workarounds (loaner laptop, shared account).

**International hires**: Work permit and visa status verification adds steps. The agent tracks visa type, expiration dates, and work authorization documents separately from the standard I-9 flow.

### Routine Tasks

**Daily**: Agent checks for new hires starting within the next 2 weeks and verifies their pre-boarding is on track. Agent sends reminders for overdue tasks. Agent confirms IT tickets are progressing.

**Weekly**: Agent generates onboarding status reports for HR leaders. Agent sends manager reminders for upcoming check-ins. Agent reviews new hire survey responses and flags issues.

**Monthly**: Agent produces 90-day turnover analysis. Agent audits onboarding documentation for compliance gaps. Agent updates onboarding content based on feedback trends (if the same question comes up repeatedly, add it to orientation materials).

## Scale — Growing It

### Adding Complexity

**Multi-country onboarding**: Each country has different employment documentation, tax forms, benefits enrollment, mandatory training, and probation periods. Germany requires works council notification. Brazil has specific document registration timelines. Build country-specific task templates that layer onto your core workflow.

**Mergers and acquisitions**: Onboarding 500 people from an acquired company is not the same as hiring 500 individuals. You need bulk onboarding with data migration, system conversion, policy transition communications, and culture integration programs.

**Contractor and contingent worker onboarding**: Different access levels, different documents, different training requirements, different offboarding timelines. Build a separate but parallel workflow.

**Rehires**: Someone coming back to the company needs a lighter process — some documents are still valid, they already know the culture, but systems and policies may have changed. Build a rehire variation.

### Automation Opportunities

- **Smart document routing**: The agent determines which documents are needed based on role, location, employment type, and citizenship, then sends only the relevant packet. A US citizen in Texas gets different forms than a visa holder in California.
- **Chatbot for new hire questions**: An agent-powered chatbot answers the same questions every new hire asks — "Where do I park?" "How do I submit expenses?" "What is the dress code?" — without HR spending time on repetitive inquiries.
- **Automated compliance verification**: The agent cross-checks that every legally required step is completed on time, maintains an audit trail, and generates compliance reports for legal review.
- **Personalized learning paths**: Based on the role, department, and skills assessment, the agent creates a customized training schedule that adapts as the new hire progresses.
- **Social integration**: The agent suggests lunch meetings with cross-functional colleagues, adds the new hire to relevant Slack channels, and schedules introductory coffee chats based on org structure and shared interests.

### When to Redesign

- Your 90-day turnover exceeds 15%.
- New hire surveys consistently score below 3.5 out of 5.
- Time to productivity is increasing quarter over quarter.
- You are onboarding in more than 5 countries and each one is a separate manual process.
- Hiring managers regularly complain that new hires are not ready.
- Compliance audits reveal documentation gaps.
- You are growing by more than 50% headcount per year and the process cannot keep up.

## By Industry

1. **Manufacturing**: Safety training is non-negotiable before a new hire sets foot on the production floor. OSHA-required training, PPE fitting, machine-specific lockout/tagout procedures, and emergency protocols must be completed and documented before work begins. Union orientations and shift assignment logistics add steps.

2. **Healthcare**: Credentialing verification continues into onboarding — hospital privileges, DEA registration, malpractice insurance setup, and EMR system training. New clinical staff often shadow experienced colleagues for a set period. HIPAA training must be completed before any patient data access.

3. **Education**: Onboarding aligns with academic calendars. New faculty need syllabus review, LMS setup, academic policy orientation, and sometimes faculty senate introduction. Background check clearance for minors must be verified before classroom assignment. Adjuncts need a streamlined version.

4. **Retail**: Speed is everything — a new associate might need to be customer-facing by day two. POS system training, loss prevention procedures, customer service standards, and product knowledge are the priorities. Seasonal hires get an abbreviated onboarding focused on immediate competency.

5. **Hospitality**: Brand standards training is extensive — everything from greeting scripts to table setting to room cleaning checklists. Tip reporting and cash handling procedures must be covered. Multi-language orientation materials are common. Uniform fitting and grooming standards are part of day one.

6. **Construction**: Safety certification (OSHA 10 or 30) must be verified or completed before site access. Project-specific safety orientations happen at each new job site, not just at hire. Tool and equipment checkout procedures, hazard communication training, and daily tailgate meeting expectations are onboarding essentials.

7. **Real Estate**: License verification and brokerage affiliation paperwork are the first steps. MLS system access, CRM setup, and transaction management platform training follow. New agents need market area orientation, listing presentation coaching, and commission structure walkthroughs.

8. **Agriculture**: Seasonal worker onboarding must be fast and often multilingual. Pesticide handling certifications, equipment operation training, and heat illness prevention protocols are mandatory. Housing arrangement orientation (for employer-provided housing) and field safety procedures are day-one items.

9. **Banking & Financial Services**: Regulatory training is extensive — BSA/AML, KYC procedures, information security, and customer privacy. System access requires multiple levels of approval due to sensitive financial data. FINRA-registered employees have additional compliance paperwork and continuing education requirements.

10. **Insurance**: State-specific licensing verification and appointment processing with carriers can take weeks. New producers need product training, quoting system access, and underwriting guidelines orientation. Claims adjusters require additional certification verification and authority-level assignments.

11. **Legal**: Bar admission verification for the practicing jurisdiction, conflict-of-interest screening against the firm's client database, malpractice insurance enrollment, and trust account handling procedures. Associates need practice group orientation, matter management system training, and billing rate setup.

12. **Government**: Security clearance onboarding can take months and involves interim access decisions. Ethics and financial disclosure requirements, union orientation (for bargaining unit positions), and mandatory diversity training are standard. System access follows strict least-privilege protocols.

13. **Pharma**: GxP training (Good Manufacturing Practice, Good Clinical Practice, Good Laboratory Practice) is required before any regulated work. Standard operating procedure review for the specific role, clean room gowning procedures for manufacturing staff, and pharmacovigilance reporting training are onboarding necessities.

14. **Automotive**: Dealership hires need manufacturer certification programs, F&I training for finance roles, and DMS (Dealer Management System) access. Manufacturing plant workers need specific station training, quality control procedures, and lean manufacturing orientation.

15. **Telecom**: Field technicians need vehicle assignment, tool kit provisioning, safety harness fitting, and route/territory orientation. Network operations staff need security clearance for critical infrastructure access. Customer-facing roles need billing system and troubleshooting workflow training.

16. **Media & Entertainment**: Production hires are project-based with compressed timelines — someone might need to be productive on day one of a shoot. Union paperwork (SAG-AFTRA, IATSE) has specific processing requirements. Creative tool access (editing suites, asset management systems) must be ready immediately.

17. **Energy & Utilities**: NERC CIP training for bulk electric system access, control room orientation for operations staff, and emergency response procedure training are mandatory. Substation and power plant access requires specific safety certifications. Environmental compliance training covers EPA requirements.

18. **Food & Beverage**: Food safety certification (ServSafe or equivalent) must be current before food handling. Allergen awareness training, HACCP plan orientation, and GMP compliance are day-one requirements. Plant workers need sanitation procedure training. Restaurant staff need menu knowledge and POS training.

19. **Logistics & Transport**: CDL verification, DOT physical confirmation, and drug testing must be complete before driving. Hours-of-service regulation training, ELD (Electronic Logging Device) training, and route familiarization are critical. Warehouse workers need forklift certification and WMS (Warehouse Management System) training.

20. **Nonprofit**: Mission and values alignment sessions are more extensive than in for-profit companies. Grant-funded positions need orientation on reporting requirements and allowable expenses. Volunteer coordination training is common even for paid staff. Donor database and CRM access requires trust and training.

21. **SaaS / Technology**: Developer onboarding includes repository access, development environment setup, code review standards, deployment procedures, and architecture walkthroughs. Everyone needs security awareness training. Remote-first companies need deliberate virtual culture integration. First-week coding tasks help engineers ramp quickly.

22. **Professional Services**: Client assignment happens during onboarding — new consultants need project briefings, client org chart reviews, and engagement-specific tool training. Utilization tracking and time entry training are first-week priorities. Business development expectations should be set early for senior hires.

23. **Defense & Aerospace**: Security clearance processing dominates the timeline. ITAR/EAR compliance training is mandatory. Classified information handling procedures, SCIF access protocols, and program-specific briefings are required before project work begins. Many hires wait weeks in an unclassified holding pattern.

24. **Mining**: MSHA Part 46 or Part 48 training must be completed before underground or surface mine access. Site-specific hazard orientation, emergency evacuation procedures, and equipment certification are mandatory. Remote site logistics (FIFO schedules, camp orientation) are part of onboarding.

25. **Chemicals**: OSHA PSM training, hazard communication (GHS/SDS), emergency response procedures, and PPE fitting are required before plant access. Laboratory staff need instrument qualification training. Process-specific SOPs must be reviewed and acknowledged before independent work.

26. **Textiles & Apparel**: Factory workers need machine safety training, quality control standards orientation, and ergonomic practice training. Design staff need PLM (Product Lifecycle Management) system access and seasonal calendar orientation. Retail staff follow the retail onboarding model.

27. **FMCG**: Speed-to-shelf knowledge is critical. New hires in brand management need market data access, competitor analysis tools, and trade promotion management system training. Sales reps need territory data, retail account histories, and distribution partner introductions during the first week.

28. **Electronics**: Clean room protocol training for semiconductor roles, ESD (Electrostatic Discharge) handling procedures, and quality management system orientation are essential. R&D staff need lab access provisioning and IP assignment acknowledgment. Supply chain roles need ERP and component database training.

29. **Oil & Gas**: SafeGulf, HUET (Helicopter Underwater Escape Training), and H2S safety certifications must be current before offshore deployment. TWIC card processing should begin pre-boarding. Rig-specific safety orientation and emergency muster procedures are mandatory. Camp and logistics orientation for remote postings.

30. **Jewelry & Luxury**: Brand immersion is extensive — new hires learn brand heritage, craftsmanship standards, and customer service rituals. Inventory handling procedures and vault access protocols require specific training. High-net-worth customer relationship management training is expected for client-facing roles.

## By Company Size

### Startup (< 50 people)

Onboarding is personal and informal. The founder probably greets the new hire. Setup means getting a laptop, Slack access, and a 30-minute chat about what the company does. Keep it lightweight but do not skip the basics — direct deposit setup, emergency contacts, and a clear explanation of what success looks like in the first 30 days. A shared document with "everything you need to know" is your onboarding program.

### SMB (50-500 people)

You need a repeatable process now. Create role-specific checklists, assign buddies, and build a first-week schedule template. Agents manage the checklist and reminders so the HR generalist is not manually tracking 10 new hires in various stages. Invest in a self-service portal where new hires complete paperwork before day one.

### Mid-Market (500-5,000 people)

Onboarding becomes a program, not a checklist. You likely have cohort-based orientation sessions (monthly or biweekly), standardized training paths by job family, and multiple stakeholders involved in each new hire's ramp-up. Agents coordinate across HR, IT, facilities, department managers, and training teams. You need dashboards tracking completion rates and time-to-productivity by department.

### Enterprise (5,000+ people)

Onboarding is a function with dedicated staff, technology, and budget. You are onboarding across countries, business units, and employee types simultaneously. Compliance tracking is critical — you need audit-ready documentation for every hire. Agents handle cross-system integration, automated compliance checks, multi-language document generation, and executive reporting. Local customization within global standards is the key challenge.

## erp.ai & Proto

**erp.ai**: The Employee Onboarding module provides pre-built task sequences, document collection workflows, and integration with IT provisioning and payroll setup, all customizable by role type and location.

**Proto**: Proto agents drive onboarding through the ORAI cycle — they Observe each new hire's progress against the onboarding plan, Reason about what tasks are falling behind and why, Act by sending reminders, escalating blockers, and rescheduling missed steps, and Iterate by analyzing patterns across cohorts to continuously improve the onboarding experience.
