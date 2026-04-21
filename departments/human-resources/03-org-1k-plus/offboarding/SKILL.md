---
name: offboarding
description: This skill should be used when the task involves manage exit interviews, access revocation, knowledge transfer, final pay, COBRA, and alumni relationships.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - hrms
  type: skill
  scope: internal
---
# Offboarding

## What This Process Does

Offboarding is everything that happens when an employee leaves your company — whether they resign, retire, get laid off, or are terminated for cause. It covers the exit interview (understanding why they are leaving), knowledge transfer (making sure critical information does not walk out the door), system access revocation (deactivating accounts, collecting devices, removing building access), final pay processing (last paycheck, PTO payout, severance if applicable), benefits continuation (COBRA notification, retirement account rollover information), return of company property (laptop, badge, keys, credit cards), and alumni relationship management (staying connected for rehires, referrals, and professional networking). A good offboarding process protects the company from security and legal risks, captures valuable institutional knowledge, and leaves the departing employee with a positive final impression. A bad one — or no process at all — creates security vulnerabilities, knowledge loss, compliance violations, and a former employee who tells everyone to avoid your company.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Employee Offboarding** app, the **Exit Checklist** template, the **Knowledge Transfer** workflow, and the **COBRA Administration** template in the 720+ catalog. There are also templates for involuntary separation workflows, severance agreement management, and alumni program setup. Deploy the closest match, then customize your exit task sequences, approval chains, and compliance requirements on top.

## Build — Setting It Up

### With Agents

Agents ensure nothing falls through the cracks during what is usually a chaotic and emotional process.

- **Exit workflow orchestration**: The moment a departure is confirmed (resignation accepted, termination decided, layoff list finalized), the agent kicks off a comprehensive checklist tailored to the separation type, employee level, department, and access level. Tasks are assigned to HR, IT, facilities, the manager, finance, and the departing employee with deadlines for each.
- **Access revocation coordination**: The agent generates a complete list of the employee's system access — email, VPN, cloud services, internal applications, physical badge, building access, parking — and creates deactivation tickets for IT. For terminations, this happens immediately. For resignations, it is scheduled for the last day. The agent verifies each deactivation is completed.
- **Knowledge transfer management**: The agent identifies what the departing employee knows that others need — active projects, key contacts, process documentation, passwords to shared accounts, recurring tasks, and tribal knowledge. It creates a transfer plan, assigns recipients for each knowledge area, and tracks completion.
- **Final pay calculation**: The agent calculates the final paycheck including remaining salary, accrued and unused PTO payout (per state law and company policy), prorated bonuses, expense reimbursements, severance payments, and any deductions for unreturned equipment or outstanding advances. It ensures the payment is processed by the legally required deadline.
- **COBRA administration**: The agent generates the COBRA election notice within the required timeline (14 days from qualifying event), sends it to the departing employee, tracks whether they elect coverage, processes premium payments if they do, and manages the coverage period (typically 18 months, extended to 36 months for certain qualifying events).
- **Exit interview coordination**: The agent schedules exit interviews, provides the interviewer with the employee's tenure history and role context, collects responses (in-person or via survey), and analyzes trends across all exit interviews to surface systemic issues.

### Key Decisions

**Separation types**: Define distinct workflows for voluntary resignation, involuntary termination for cause, layoff/reduction in force, retirement, and end of contract. Each type has different legal requirements, emotional dynamics, and process steps. A resignation gets a two-week knowledge transfer period. A termination for cause may require same-day access revocation and escort from the building.

**Notice period**: Will you require or accept notice periods? Two weeks is standard for individual contributors in the US, longer for senior roles. Some companies immediately accept resignation without a working notice period (garden leave). International locations often have legally mandated notice periods of 1-3 months.

**Exit interview approach**: Who conducts exit interviews — HR, the direct manager, or a skip-level? HR provides neutrality but may miss role-specific insights. The manager may get less honest feedback. Many companies use a combination of an HR conversation and an anonymous survey. Decide how the data will be used and communicated to leadership.

**Severance policy**: Under what circumstances do you offer severance? How is it calculated (weeks per year of service, flat amount by level)? What is included (pay continuation, benefits extension, outplacement services)? Is it contingent on signing a release of claims? Define this before you need it, not during a stressful situation.

**Alumni program**: Will you maintain a formal relationship with former employees? Alumni networks generate rehires, referrals, client leads, and brand advocacy. Decide if you will maintain a platform, host events, or simply keep contact information for potential future engagement.

### Common Mistakes

**Delayed access revocation**: A disgruntled terminated employee with active system access for days or weeks after departure is a security breach waiting to happen. For involuntary separations, access should be revoked before or simultaneously with the notification. For voluntary departures, have a precise cutoff schedule.

**No knowledge transfer**: When someone leaves and takes critical process knowledge, customer relationship context, or project history with them, the team suffers for months. Start knowledge transfer the day a departure is confirmed, not on the last day.

**Ignoring final pay deadlines**: States have specific rules about when final pay is due. California requires it on the last day of work for involuntary terminations and within 72 hours for resignations without notice. Penalties for late final pay can be significant — up to 30 days of additional wages in California.

**Skipping exit interviews or ignoring the data**: Exit interviews are gold mines of honest feedback. If you collect the data but never analyze it or act on it, you miss the chance to fix problems that are driving good people away.

**Treating all departures the same**: A high-performing senior leader who got recruited away needs a very different offboarding experience than a probationary employee who did not work out. The process should flex based on tenure, level, performance, and separation type.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

Track these metrics on a live dashboard:

- **Turnover rate**: Overall and by department, role, tenure, and manager. Segment into voluntary and involuntary. Benchmark against industry averages.
- **Exit interview completion rate**: What percentage of departing employees participate? Below 70% means you are missing critical feedback.
- **Access revocation time**: Hours from departure to full access deactivation. For involuntary terminations, this should be under 1 hour. For voluntary, by end of last day.
- **Final pay compliance**: Percentage of final paychecks delivered within the legally required timeline. Should be 100%.
- **COBRA notice timeliness**: Percentage of COBRA notices sent within the 14-day window. Again, 100% is the target.
- **Company property return rate**: Percentage of issued equipment returned within 14 days of departure.
- **Knowledge transfer completion**: Percentage of identified knowledge areas successfully transferred before departure.

Set alerts for: involuntary termination initiated without access revocation plan, final pay deadline approaching without payroll submission, COBRA notice deadline within 3 days and not yet sent, company property not returned within 7 days of departure, departing employee with elevated system privileges (admin access, financial systems), and high-tenure or senior departures without knowledge transfer plans.

### Exception Handling

**Immediate termination**: When someone is terminated for gross misconduct, security concerns, or a safety incident, the standard timeline compresses to immediate. The agent triggers same-day access revocation, accelerated final pay processing, building escort coordination, and immediate company property collection. It ensures legal holds are placed on relevant data if litigation is possible.

**Contested termination**: If the employee disputes the termination or threatens legal action, the agent ensures all documentation is preserved, places a litigation hold on relevant records, routes the case to legal counsel, and pauses any standard destruction of files or records related to the employee.

**Layoff events**: Mass layoffs trigger additional requirements — WARN Act notifications (60 days advance notice for layoffs of 100+ employees), coordinated severance offer management, outplacement service activation, and communication plans for remaining employees. The agent manages the logistics at scale.

**Death of an employee**: A sensitive situation requiring life insurance claim processing, final pay to beneficiary or estate, benefits continuation for dependents, and communication to the team. The agent handles the administrative tasks with appropriate sensitivity, routing personal touches to HR leadership.

**International departures**: Each country has specific termination requirements — mandatory notice periods (often months), severance calculations defined by law, works council consultation requirements (Germany, France), social plan obligations for mass layoffs, and government notification requirements. The agent applies country-specific rules.

### Routine Tasks

**At departure notification**: Agent initiates the appropriate separation workflow. Agent creates task assignments for all stakeholders. Agent schedules exit interview. Agent begins knowledge transfer planning.

**During notice period**: Agent monitors knowledge transfer progress. Agent tracks company property return. Agent processes benefits termination timing. Agent prepares final pay calculation.

**On last day**: Agent verifies all access is revoked. Agent confirms company property is returned. Agent confirms final tasks are complete. Agent triggers COBRA notice generation.

**Post-departure**: Agent sends COBRA election notice within legal timeline. Agent processes final pay by legal deadline. Agent monitors company property return for outstanding items. Agent distributes exit interview summary to relevant stakeholders.

**Monthly**: Agent generates turnover analytics report. Agent analyzes exit interview themes and trends. Agent audits COBRA compliance. Agent follows up on unreturned company property.

**Quarterly**: Agent produces detailed turnover analysis with root cause themes. Agent reviews offboarding process effectiveness. Agent benchmarks turnover against industry data.

## Scale — Growing It

### Adding Complexity

**Multi-country offboarding**: Employment termination laws vary enormously by country. In many European countries, employees cannot be terminated at-will — you need documented cause, progressive discipline, and sometimes labor court approval. Severance is legally mandated and calculated by formula. Works councils must be consulted. Notice periods of 3-6 months are common for senior employees. Build country-specific offboarding workflows.

**Reduction in force (RIF) management**: Large-scale layoffs require strategic planning — selection criteria that avoid disparate impact, WARN Act or equivalent compliance, severance package design, outplacement services, communication plans for affected and remaining employees, and workflow to process hundreds of separations simultaneously while maintaining dignity and compliance.

**Contractor and contingent worker offboarding**: Different from employee offboarding — no COBRA, no severance, different access revocation timelines, and contract termination documentation instead of employment separation. But the knowledge transfer and security steps are just as important.

**Executive departures**: Senior leaders departing (voluntarily or involuntarily) need board notification, succession plan activation, client and stakeholder communication, non-compete enforcement, equity vesting calculations, and sometimes public announcements (SEC filing for public companies). Build a separate high-touch workflow.

**Acquisition-related departures**: When employees leave because their roles are eliminated in a merger, they need transition support — extended severance, outplacement, priority rehire consideration for remaining roles, and sometimes retention bonuses to keep them through a transition period.

### Automation Opportunities

- **Automated access revocation**: The agent integrates with identity management systems to deactivate all accounts simultaneously at the scheduled cutoff time — no manual IT ticket processing, no forgotten systems. It generates a confirmation report for audit purposes.
- **Predictive turnover modeling**: The agent analyzes patterns in employee data (tenure, performance, engagement scores, pay relative to market, manager changes) to predict which employees are at risk of leaving. This gives managers and HR time to intervene before a resignation happens.
- **Exit interview analytics**: The agent uses natural language analysis to identify themes, sentiment, and trends across all exit interviews. Instead of reading individual summaries, leadership sees "37% of departing employees cited lack of career growth in Q3, up from 22% in Q2."
- **Automated compliance tracking**: The agent monitors final pay deadlines, COBRA notice timelines, and separation agreement signature periods across all active departures and all applicable jurisdictions, generating alerts for any approaching deadline.
- **Alumni network management**: The agent maintains alumni profiles, sends periodic company updates, shares relevant job openings, and tracks alumni referrals and boomerang hires. It turns departed employees into a talent pipeline.

### When to Redesign

- Voluntary turnover exceeds industry benchmarks by more than 25%.
- Security incidents have been traced to delayed access revocation.
- Final pay compliance is below 95%.
- Exit interview themes have been consistent for 3+ quarters without action.
- A reduction in force is poorly handled and damages employer brand.
- You are expanding internationally and your offboarding process does not account for local labor law.
- Knowledge loss from departures is creating measurable operational disruptions.

## By Industry

1. **Manufacturing**: Production floor departures need immediate equipment and PPE collection, safety system access removal, and shift coverage planning. Skilled trades departures create training gaps that take months to fill — knowledge transfer is critical. Union departures follow contractually defined procedures including bumping rights and recall lists. Plant closures trigger WARN Act obligations and mass offboarding.

2. **Healthcare**: Clinical staff departures require credential deactivation (hospital privileges, DEA number disassociation), patient care handoff for active cases, medical records access revocation, and compliance with patient privacy rules during transition. Physician non-compete enforcement varies by state. Credentialing bodies need to be notified.

3. **Education**: Teacher departures mid-year require immediate substitute coverage and student transition plans. Grade records, curriculum materials, and classroom supplies need transfer. Tenure protections create specific procedures for involuntary separations. Research faculty departures involve grant transfer or closeout, lab equipment inventory, and student advising reassignment.

4. **Retail**: High-turnover environment means offboarding must be fast and efficient. POS system access, store keys, alarm codes, and discount privileges need immediate revocation. Inventory reconciliation at departure protects against loss. Store manager departures require cash handling audit and safe code changes.

5. **Hospitality**: Guest-facing departures need immediate uniform and name tag collection. Room key master access revocation is a security priority. Reservation system and loyalty program access must be terminated. Tip pool adjustments for the pay period. Chef and sommelier departures may require recipe and wine list documentation transfer.

6. **Construction**: Project-based departures need tool and equipment inventory, project documentation handoff, and client relationship transition. Safety certifications (OSHA cards) belong to the individual, but site access must be revoked. Union workers may transfer to the union hall rather than truly separating. Bonding and insurance coverage adjustments.

7. **Real Estate**: Agent departures from brokerages trigger listing assignment transfers, client notification, and commission calculation for pending transactions. MLS access termination and lockbox code revocation. Broker license supervision end notification to the state. Marketing materials and signs using the brokerage brand must be returned or destroyed.

8. **Agriculture**: Seasonal worker departure processing happens in bulk at harvest end. H-2A worker departures require specific documentation and transportation provisions. Equipment keys and farm access revocation. Housing vacating timeline and inspection for employer-provided housing. Pesticide applicator license notification if applicable.

9. **Banking & Financial Services**: Financial system access revocation is highest priority — any delay creates fraud risk. Regulatory notification may be required (FINRA U5 filing within 30 days for registered representatives). Customer account reassignment requires client notification. Safe deposit box access removal. Compliance hold on trade data and communications for regulatory retention periods.

10. **Insurance**: Licensed producer departures require carrier appointment termination, book-of-business transfer or retention decisions, and state department of insurance notification. Policy renewal assignment for departing underwriters. Claims file transfer for adjusters. E&O tail coverage determination. Agency management system access revocation.

11. **Legal**: Attorney departures trigger client conflict checks for the new firm, file transfer for client matters (with client consent), trust account reconciliation, court appearance substitution filings, and bar notification. Partner departures may involve capital account settlement and client origination credit disputes. Document retention obligations are extensive.

12. **Government**: Civil service protections create specific procedures for involuntary separations including appeal rights. Security clearance debriefing is required for cleared personnel. Government-issued credentials, PIV cards, and classified material return. Ethics restrictions on post-government employment (cooling-off periods for lobbying and contractor employment).

13. **Pharma**: R&D departures require IP assignment verification, lab notebook and data transfer, and research project handoff. Patent application status review for departing inventors. GxP documentation access revocation and audit trail preservation. Adverse event reporting responsibility transfer. Non-compete and trade secret agreement enforcement.

14. **Automotive**: Dealership departures involve customer relationship transfer, DMS access revocation, and manufacturer certification status update. Demo vehicle return and inspection. Service advisor departures need repair order and warranty claim handoff. F&I manager departures require deal jacket and compliance documentation transfer.

15. **Telecom**: Network operations access is a critical security concern — field technicians and network engineers have infrastructure access. Customer account access revocation prevents unauthorized changes. Company vehicle return with equipment inventory. SIM card and device deactivation. Tower access credential revocation.

16. **Media & Entertainment**: Project-based departures may coincide with project completion and require no transition, or may leave mid-production requiring immediate creative handoff. Content and asset access revocation is important for unreleased material. Social media account access changes if the departing person managed company channels. Union exit paperwork.

17. **Energy & Utilities**: NERC CIP access revocation for bulk electric system controls is time-critical and audited. Nuclear plant departures require NRC notification for licensed operators. Emergency response team roster updates. Utility vehicle and equipment return. Environmental compliance responsibility transfer documentation.

18. **Food & Beverage**: Restaurant staff departures need POS access removal, tip pool adjustment, and uniform return. Kitchen staff departures may require recipe documentation (though often informally held). Food manufacturing departures need GMP-area access badge deactivation. Health department notification if the departing person held the food safety certification for the establishment.

19. **Logistics & Transport**: Driver departures require DOT file closeout, vehicle and fuel card return, ELD device collection, and customer route reassignment. CDL and drug testing records retention per DOT requirements. Warehouse worker departures need forklift key return and WMS access revocation. Freight broker departures involve customer account and carrier relationship transfer.

20. **Nonprofit**: Donor relationship transfer is critical for development staff departures — donors may have personal relationships with the departing person. Program continuity for beneficiaries must be maintained. Grant reporting responsibility transfer. Board notification for executive departures. Volunteer management transition for community-facing roles.

21. **SaaS / Technology**: Code repository access, production environment access, and cloud service credentials are high-priority revocations. Open pull requests and in-progress features need reassignment. On-call rotation updates. Customer-facing API keys and tokens the employee may have created need rotation. Knowledge transfer for undocumented systems and architecture decisions.

22. **Professional Services**: Client engagement transition is the top priority — active projects need new leads, clients need introduction to successors, and engagement letters may need reissuing. Billing rate adjustments for replacement staff. Work-in-progress documentation handoff. Business development pipeline transfer for senior departures.

23. **Defense & Aerospace**: Security clearance debriefing with the facility security officer is mandatory. Classified material inventory and return. Program access list updates across all government contracts. ITAR-controlled information access revocation. Export-controlled technology access review. Final security badge return and visitor escort until departure.

24. **Mining**: Remote site departures require logistics coordination — flight scheduling for FIFO workers, camp accommodation checkout. Mine-specific safety access and emergency muster list updates. Equipment operator certification records transfer. Environmental monitoring responsibility handoff. Community relations role transition for site-based leaders.

25. **Chemicals**: Process safety management documentation access revocation. Emergency response team roster updates. Chemical handling certification status documentation. Regulatory permit holder notification if the departing employee was the named responsible person. Environmental compliance responsibility transfer. OSHA recordable injury history preservation.

26. **Textiles & Apparel**: Design file and intellectual property review for departing designers — samples, sketches, and digital assets. Supplier and vendor relationship transfer for sourcing roles. Pattern and specification documentation for production-critical roles. Brand guideline and marketing asset access revocation. Sample room key and archive access return.

27. **FMCG**: Route and territory customer relationship transfer for field sales. Trade promotion commitment documentation handoff. Market data and analytics tool access revocation. Product formulation and packaging specification access review for R&D departures. Broker and distributor relationship transition.

28. **Electronics**: Clean room access badge deactivation. Engineering design file and IP review. Test equipment and lab access revocation. Component supplier relationship transfer. Product roadmap and technical specification access control. Customer quality interface handoff for quality engineering departures.

29. **Oil & Gas**: Offshore access credential revocation — heliport manifests and platform access lists. Well data and production information access revocation. Safety-critical role replacement for offshore installation manager or control room operator positions. International assignment closeout including housing, tax equalization settlement, and repatriation. Regulatory operating license holder notification.

30. **Jewelry & Luxury**: Vault and secure inventory access revocation is the highest security priority. Client book and purchase history transfer for relationship-based sales. High-value sample and display inventory audit. Brand standards and unreleased collection confidentiality. Luxury market contact and vendor relationship documentation.


## ERP•AI & Proto

**ERP•AI**: The Employee Offboarding module provides separation-type workflows, automated access revocation coordination, final pay calculation, COBRA administration, and exit interview management, with built-in compliance tracking for multi-state and multi-country operations.

**Proto**: Proto agents apply the ORAI cycle to offboarding — they Observe departures for compliance risks and knowledge loss exposure, Reason about the right process steps based on separation type and jurisdiction, Act by orchestrating tasks across HR, IT, finance, and management, and Iterate by analyzing turnover patterns and exit feedback to reduce future attrition and improve the departure experience.
