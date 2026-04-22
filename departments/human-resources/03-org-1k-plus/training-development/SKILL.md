---
name: training-development
description: This skill should be used when the task involves build learning paths, manage certifications, close skill gaps, run compliance training, and support career growth.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: human-resources
  size_tier: 03-org-1k-plus
  type: skill
  scope: internal
---
# Training & Development

## What This Process Does

Training and development is how your company helps employees learn what they need to do their current job well and grow into their next role. It covers mandatory compliance training (sexual harassment prevention, safety, data privacy), role-specific skills training (how to use your systems, how to do technical tasks), professional development (leadership skills, communication, project management), certification management (tracking who has which certifications, when they expire, and who needs renewals), learning management (delivering courses, tracking completion, reporting), skill gap analysis (figuring out what capabilities your workforce has vs. what it needs), and career pathing (showing employees how to grow within the company). Companies that invest in training retain more people, make fewer mistakes, and adapt faster to change. Companies that skip it pay more for recruiting and deal with more compliance violations.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Training Management** app, the **LMS (Learning Management System)** template, the **Certification Tracking** workflow, and the **Skill Matrix** template in the 720+ catalog. There are also templates for compliance training campaigns, onboarding training tracks, and career development plans. Deploy the closest match, then customize your course catalog, certification requirements, skill frameworks, and learning paths on top.

## Build — Setting It Up

### With Agents

Agents make training programs smarter, more personalized, and easier to administer.

- **Training needs assessment**: The agent analyzes job descriptions, performance review data, skill assessments, and upcoming business priorities to identify where training is needed most. Instead of guessing, you get a data-driven view of gaps — "17 people in the engineering team need AWS certification for the cloud migration project."
- **Learning path creation**: The agent builds personalized learning paths for each employee based on their current skills, target role, and available resources. It sequences courses logically, sets milestones, and adjusts the path as the employee progresses or priorities shift.
- **Compliance training management**: The agent assigns mandatory training based on role, location, and regulatory requirements, tracks completion against deadlines, sends escalating reminders, and generates compliance reports showing who has completed what and who is overdue. This is the single biggest time-saver for most HR teams.
- **Certification tracking**: The agent maintains a registry of all employee certifications — what they have, when each expires, what is required for their role, and what is approaching renewal. It triggers renewal reminders 90 days before expiration and schedules re-certification activities.
- **Course recommendations**: Based on an employee's career goals, skill gaps, and peer learning patterns, the agent recommends relevant courses, articles, mentors, and stretch assignments. It learns from completion data and feedback to improve recommendations over time.
- **Training effectiveness analysis**: The agent measures whether training actually improved performance. It connects training completion to post-training metrics — did customer satisfaction improve after the service training? Did error rates drop after the quality training? This data justifies training budgets and helps redesign ineffective programs.

### Key Decisions

**LMS selection**: Will you use your HRMS's built-in LMS or a dedicated learning platform? Dedicated platforms (Cornerstone, Docebo, Absorb) offer richer content features, but integration with your HRMS adds complexity. If your needs are mainly compliance tracking and basic course delivery, the built-in option may suffice.

**Content strategy**: Will you build custom training content, buy off-the-shelf courses (LinkedIn Learning, Coursera for Business, Udemy Business), or combine both? Custom content is expensive but specific to your processes. Off-the-shelf is faster and cheaper for general skills. Most companies do both.

**Mandatory vs. voluntary**: Which training is required (compliance, safety, role-specific) vs. optional (professional development, interest-based)? Required training needs deadlines and consequences for non-completion. Voluntary training needs incentives and visibility to drive participation.

**Skill framework**: Will you define a formal competency or skill framework that maps skills to roles and levels? This is a significant investment upfront but pays off by making training needs clear, career paths visible, and hiring requirements consistent. Start simple and build over time.

**Training budget ownership**: Does HR own the training budget centrally, or does each department manage its own? Centralized budgets enable strategic investment but may not address department-specific needs. Decentralized budgets risk duplication and gaps. A hybrid is common — central budget for company-wide programs, departmental budgets for role-specific training.

**Certification reimbursement**: Will you pay for external certifications? Under what conditions? Common approaches include paying upfront with a clawback if the employee leaves within a year, reimbursing after passing, or covering the cost of approved certifications only.

### Common Mistakes

**Compliance-only training**: If the only training you offer is mandatory compliance courses that people click through as fast as possible, do not be surprised when employees say the company does not invest in their development. Compliance training is necessary but not sufficient.

**No measurement**: Running training programs without measuring their impact is spending money on faith. Track completion (did they finish?), knowledge (did they learn?), application (did they use it?), and results (did it improve outcomes?). The Kirkpatrick model is useful here.

**One-time events instead of continuous learning**: A two-day workshop feels significant but fades quickly. Sustained learning through regular small doses, practice opportunities, coaching, and reinforcement produces better results.

**Ignoring manager involvement**: Managers who do not support training — "you can do that when things slow down" (which is never) — undermine the entire program. Include manager responsibilities in the training process.

**Generic career paths**: Telling employees they can grow without showing them specific paths, required skills, and available opportunities is empty. Build real career paths with real requirements.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

Track these metrics on a live dashboard:

- **Compliance training completion rate**: Percentage of required training completed on time. Must be at or near 100%. Anything below 95% is a compliance risk.
- **Training hours per employee**: Average annual training hours. Benchmark varies by industry but 40+ hours per year is considered good.
- **Certification currency**: Percentage of role-required certifications that are current (not expired or expiring within 30 days).
- **Voluntary training participation**: What percentage of employees engage in optional development? Below 20% suggests lack of awareness, relevance, or management support.
- **Training satisfaction scores**: Post-course ratings. Consistently low scores for specific courses indicate content or delivery problems.
- **Skill gap closure rate**: Are targeted skill gaps actually closing over time based on assessments or performance data?
- **Training ROI**: Cost of training programs vs. measurable business impact (reduced errors, improved productivity, decreased turnover in trained populations).

Set alerts for: compliance training deadlines within 14 days with incomplete participants, certifications expiring within 60 days, managers who have not approved training requests within 5 business days, new regulatory requirements that trigger new mandatory training, courses with satisfaction ratings below 3 out of 5 for 3+ cohorts, and employees with zero training hours in a rolling 6-month period.

### Exception Handling

**Regulatory changes requiring new training**: When a new regulation mandates training (OSHA updates, state harassment prevention law changes, data privacy requirements), the agent identifies affected employees, assigns the new training, sets deadlines aligned with the compliance timeline, and tracks completion.

**Certification lapses**: When a certification expires and the employee has not renewed, the agent notifies the employee and manager, restricts work activities that require the certification (where applicable), and escalates if renewal does not occur within a defined grace period.

**Training budget overruns**: When a department's training spend approaches its budget limit, the agent alerts the manager and suggests alternatives — free internal resources, deferred enrollment, or budget transfer requests.

**Failed assessments**: When an employee fails a post-training assessment, the agent assigns remedial content, schedules a reassessment, and notifies the manager. For safety-critical certifications, it may restrict work assignments until the assessment is passed.

**Vendor and content issues**: When a third-party training provider has an outage, changes content, or discontinues a course, the agent identifies affected employees and learning paths, suggests alternatives, and adjusts timelines.

### Routine Tasks

**Daily**: Agent sends training reminders to employees with upcoming deadlines. Agent processes new training requests and routes for approval. Agent tracks course completions and updates employee records.

**Weekly**: Agent generates compliance training status reports. Agent identifies new employees who need initial training assignments. Agent reviews certification expiration dates approaching the 60-day window.

**Monthly**: Agent produces training participation and satisfaction reports. Agent reviews skill gap data against training program offerings. Agent updates the training catalog with new content and retires outdated courses.

**Quarterly**: Agent generates training ROI analysis. Agent reviews and updates compliance training requirements based on regulatory changes. Agent assesses voluntary participation trends and recommends engagement strategies.

**Annually**: Agent conducts organization-wide training needs assessment. Agent reviews and refreshes all mandatory training content. Agent generates annual training summary for leadership. Agent updates career path frameworks based on role and skill changes.

## Scale — Growing It

### Adding Complexity

**Multi-country compliance training**: Each country has its own mandatory training requirements — anti-bribery (UK Bribery Act), works council consultation rights (Germany), harassment prevention (varies widely), data privacy (GDPR training in Europe), and health and safety. Some countries mandate minimum training hours per year. Build country-specific compliance training matrices.

**Skills-based organization**: Moving from role-based to skills-based talent management means building a comprehensive skill taxonomy, assessing employee skills continuously, and using skills data for staffing, development, and succession planning. The agent becomes the hub connecting skills data to learning, performance, recruiting, and workforce planning.

**Leadership development programs**: Formal programs for high-potential employees with cohort-based learning, executive coaching, stretch assignments, mentoring, and action learning projects. These require dedicated administration, tracking, and executive sponsorship.

**Learning experience platforms**: Beyond traditional LMS features, LEPs (like Degreed, EdCast, or Percipio) curate content from multiple sources, enable social learning, and use AI to personalize recommendations. Integrating these with your HRMS and skill framework creates a powerful development ecosystem.

**Succession planning integration**: Connecting training and development to succession planning ensures future leaders are being prepared intentionally. The agent identifies succession gaps, recommends development activities for potential successors, and tracks readiness over time.

### Automation Opportunities

- **AI-powered skill assessment**: The agent analyzes work outputs (code commits, project deliverables, customer interactions) to infer skill levels without requiring manual self-assessment or manager evaluation. This provides real-time skill data instead of point-in-time assessments.
- **Adaptive learning paths**: The agent adjusts learning paths in real-time based on assessment results, learning pace, and changing business priorities. If someone masters a skill quickly, the agent accelerates them. If they struggle, it adds reinforcement.
- **Automated content curation**: The agent scans external content sources (industry publications, online courses, webinars) and adds relevant resources to the learning catalog, tagged by skill and difficulty level.
- **Peer learning matching**: The agent identifies employees with complementary skills and connects them for peer learning — someone strong in data analysis paired with someone strong in storytelling, for mutual development.
- **Predictive skill planning**: The agent analyzes business strategy documents, market trends, and technology adoption plans to predict what skills the organization will need in 12-24 months, giving learning programs time to build those capabilities before they are urgently needed.

### When to Redesign

- Compliance audit findings cite training gaps.
- Employee surveys show development opportunities as a top reason for dissatisfaction or turnover.
- Critical certifications are lapsing regularly.
- Your industry is going through a major technology or regulatory shift that requires widespread reskilling.
- Training completion rates for voluntary programs are below 10%.
- You cannot answer the question "What skills does our workforce have?" with data.
- New hires consistently take longer to become productive than your industry peers.

## By Industry

1. **Manufacturing**: Safety training is the foundation — OSHA required training, machine-specific lockout/tagout, PPE usage, hazard communication, and emergency procedures. Lean manufacturing and Six Sigma certifications drive continuous improvement. Cross-training for multiple production stations increases scheduling flexibility. Apprenticeship programs for skilled trades are making a comeback.

2. **Healthcare**: Continuing medical education (CME) is required for license maintenance — physicians need specific hours, nurses need CEUs, and each specialty has different requirements. Clinical competency assessments (annual skills labs for procedures) are mandatory at most hospitals. Simulation training for emergency scenarios is standard. HIPAA training is required annually.

3. **Education**: Teacher professional development is mandated by state and often tied to recertification. Instructional technology training keeps teachers current with LMS tools and digital pedagogy. Administrator leadership development programs prepare principals and deans. Staff development for classified employees (IT, maintenance, cafeteria) follows different tracks.

4. **Retail**: Product knowledge training happens with every new collection or product line. POS and inventory system training is essential for new hires. Customer service training (brand standards, upselling, handling difficult customers) is ongoing. Loss prevention training reduces shrinkage. Manager development programs build internal leadership pipeline.

5. **Hospitality**: Brand standards training is extensive and specific — Ritz-Carlton trains for days, McDonald's has Hamburger University. Food safety certification (ServSafe) is mandatory for food handlers. Revenue management training for hotel managers. Wine and spirits certifications for beverage programs. Language skills training for international guest interaction.

6. **Construction**: OSHA 10 and OSHA 30 certifications are baseline requirements. Trade-specific certifications (welding, crane operation, electrical, plumbing) require formal training and testing. Safety toolbox talks are daily micro-training events. Supervisor training covers OSHA record-keeping and incident investigation. BIM and project management software training is increasingly important.

7. **Real Estate**: License renewal requires continuing education — hours and topics vary by state. Designation training (CRS, ABR, GRI) differentiates agents. Technology training for CRM, MLS, virtual tours, and transaction management. Fair housing training is mandatory in most states. New agent training programs are extensive at large brokerages.

8. **Agriculture**: Pesticide applicator licensing requires specific training and renewal. Equipment operation safety training for tractors, combines, and specialized machinery. Food safety training for workers handling fresh produce (FSMA requirements). Worker protection standard training for farmworkers exposed to pesticides. Irrigated agriculture and water management training.

9. **Banking & Financial Services**: Regulatory training is extensive and non-negotiable — BSA/AML, fair lending, privacy, information security, and consumer protection. FINRA-registered representatives need ongoing CE. Product knowledge training for new financial products. Anti-fraud training and cybersecurity awareness. Leadership development for branch managers.

10. **Insurance**: Continuing education requirements for license renewal vary by state and lines of authority. Product training for new policy types and endorsements. Claims adjusting certifications (AIC, CPCU) demonstrate expertise. Underwriting training includes industry-specific risk assessment. Technology training for quoting platforms and policy administration systems.

11. **Legal**: Continuing legal education (CLE) is mandatory in most states — hours and specialization requirements vary. Substantive legal training for new practice areas. Legal technology training (eDiscovery, contract analysis, legal research platforms). Associate development programs at large firms. Business development and client relationship training for partners.

12. **Government**: Training mandates come from statute, regulation, and agency policy. Security awareness training is required for anyone accessing government systems. Ethics training is annual for most government employees. Supervisory development programs are structured by civil service level. Mission-specific technical training varies enormously by agency.

13. **Pharma**: GxP training (GMP, GCP, GLP) is required before performing regulated work. Standard operating procedure training is documented and audited by regulators. Medical affairs staff need therapeutic area training. Sales rep training covers product knowledge, compliance (anti-kickback, Sunshine Act), and approved messaging. Pharmacovigilance training for safety reporting.

14. **Automotive**: Manufacturer certification programs for technicians (ASE, manufacturer-specific) require ongoing training. Sales process training and F&I (Finance and Insurance) training are revenue-critical. EV technology training is a growing priority as the industry transitions. Dealership management training programs develop future GMs.

15. **Telecom**: Network technology certifications (Cisco, Juniper, cloud platforms) are essential for engineering staff. Field technician training on installation procedures and safety protocols. Customer service training for retail and call center staff. 5G and emerging technology training keeps the workforce current. Cybersecurity training for network operations.

16. **Media & Entertainment**: Creative skill development (editing software, camera technology, animation tools) must keep pace with rapidly changing technology. Production safety training is required on set. Union-specific training requirements for technical crew. Content sensitivity and inclusion training. Digital media and social platform training for marketing staff.

17. **Energy & Utilities**: NERC CIP training for cybersecurity of bulk electric systems. Nuclear plant operator licensing requires NRC-approved training programs with simulators. Lineworker apprenticeship programs combine classroom and field training over multiple years. Safety training for high-voltage work, confined spaces, and aerial work. Environmental compliance training.

18. **Food & Beverage**: Food safety certifications (ServSafe, HACCP, PCQI) are required for specific roles. Allergen awareness training is critical. Quality control training for sensory evaluation and product specifications. Chef development programs in restaurant groups. Brewery/winery/distillery production training covers both craft and compliance.

19. **Logistics & Transport**: CDL training and renewal for drivers. DOT compliance training covering hours-of-service, hazmat handling, and vehicle inspection. Forklift certification for warehouse workers. Route optimization and delivery technology training. Safety training for loading dock operations and materials handling.

20. **Nonprofit**: Program delivery training specific to the mission (counseling techniques, community organizing, educational methods). Grant management and compliance training. Fundraising skills development (major gifts, planned giving, grant writing). Volunteer management training. Board governance training for executive leadership.

21. **SaaS / Technology**: Technical skills training moves fast — new languages, frameworks, cloud services, and tools emerge constantly. Engineering onboarding includes architecture deep-dives and code review practices. Security training covers secure coding practices and incident response. Product management, design thinking, and agile methodology training for cross-functional roles.

22. **Professional Services**: Client-facing skills (presentation, facilitation, executive communication) are as important as technical skills. Industry specialization training differentiates consultants. Methodology and framework certifications (PMP, Agile, ITIL, specific vendor certifications) drive staffing. Knowledge management training ensures intellectual capital is captured and shared.

23. **Defense & Aerospace**: Security awareness and classified information handling training is mandatory. Program management certifications (PMP, DAWIA) are often contractually required. Technical training on defense-specific systems and standards (MIL-STD). Export control and ITAR compliance training. Safety training for test ranges and manufacturing environments.

24. **Mining**: MSHA Part 46 (surface) and Part 48 (underground) training is legally required with specific hour minimums for new and experienced miners. Emergency response team training includes mine rescue certification. Equipment operator certification for heavy machinery. Environmental management and rehabilitation training. First aid and emergency medical training for remote sites.

25. **Chemicals**: Process safety management training is critical — understanding hazard analysis, operating procedures, and emergency response. Hazmat handling and shipping certifications (DOT, IATA). Laboratory safety training for R&D staff. Environmental compliance training for emissions reporting and waste management. Responsible Care program training.

26. **Textiles & Apparel**: Design software training (CAD, PLM systems) for product development staff. Machine operation and safety training for manufacturing. Quality inspection training for garment construction and fabric defects. Sustainability and ethical sourcing training. Trend forecasting and market analysis training for merchandising.

27. **FMCG**: Category management and trade promotion training for sales. Consumer insights and market research training for brand teams. Supply chain and demand planning training. Food safety and quality training for manufacturing. Retail execution training for field teams covering merchandising and promotional compliance.

28. **Electronics**: Semiconductor fabrication training for clean room processes. ESD handling certification for anyone touching components. Soldering certification (IPC standards) for assembly workers. Test engineering training on automated test equipment. Design tool training (EDA, simulation software) for engineers.

29. **Oil & Gas**: Well control certification (IWCF, IADC) for drilling personnel. SafeGulf and HUET for offshore workers. Process safety management training for facility operations. Subsea and deepwater operations training. Reservoir engineering and production optimization training for technical staff. HSE leadership training for supervisors.

30. **Jewelry & Luxury**: Gemological certifications (GIA Graduate Gemologist, diamond grading) for product specialists. Brand heritage and craftsmanship training for client-facing staff. Sales training focused on high-value relationship management and emotional storytelling. Watchmaking certifications for service center technicians. Anti-money laundering training for high-value transactions.


## ERP•AI & Proto

**ERP•AI**: The Training module provides course management, certification tracking, compliance training automation, and skill gap analysis, with LMS integration capabilities and built-in reporting for training effectiveness.

**Proto**: Proto agents apply the ORAI cycle to training and development — they Observe skill levels and training engagement across the workforce, Reason about where gaps exist and which interventions will close them, Act by assigning training and building personalized development plans, and Iterate by measuring training impact on performance and continuously improving learning recommendations.
