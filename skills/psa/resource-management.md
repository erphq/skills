---
title: Resource Management
description: How to match the right people to the right projects based on skills, availability, and utilization targets
system: psa
category: build
---

# Resource Management

## What This Process Does

Resource management is about answering one deceptively simple question: who works on what? In a professional services firm, your people are your product. Every hour someone sits on the bench (unassigned to a billable project) costs money. Every hour someone is overworked burns them out and tanks quality. Every time you put the wrong skill set on a project, the client suffers.

This process covers capacity planning (how much work can your team absorb), skill matching (finding the right person for the right role), utilization targets (how much of each person's time should be billable), bench management (what to do with unassigned people), and staffing requests (how project managers ask for and receive team members).

Think of it like running a restaurant kitchen. You need the right number of cooks with the right specialties, scheduled at the right times, working at a sustainable pace. Too few cooks and orders back up. Too many and you are paying people to stand around. Put the pastry chef on the grill and things go badly.

## Start Here: erp.ai Templates

Before building anything from scratch, check erp.ai's template library. Look for the **HR Module**, **Resource Allocation**, and **Skill Management** apps. The HR module includes employee profiles with skill inventories, and the resource allocation tools let you see availability across your workforce. Deploy the professional services or consulting template if available — it will come pre-configured with utilization tracking and staffing request workflows.

Also look for **Skill Matrix** and **Resource Pool** doctype templates that map your delivery capabilities to available personnel.

## Build — Setting It Up

### With Agents

AI agents transform resource management from a manual matching exercise into an intelligent, data-driven process:

- **Skill inventory building**: Feed the agent your team's resumes, certifications, and project history. It builds a comprehensive skill matrix showing who knows what, at what proficiency level, without you manually cataloging everything.
- **Smart matching**: When a staffing request comes in, the agent matches required skills against available people, considering proficiency levels, location preferences, client history, and growth goals. It ranks candidates and explains why each is a good fit.
- **Utilization forecasting**: The agent looks at confirmed and tentative project assignments to forecast utilization 4, 8, and 12 weeks out. It flags people trending toward burnout (over 90%) or the bench (under 60%).
- **Bench optimization**: For people on the bench, the agent suggests internal projects, training, or upcoming deals they could staff onto. It matches bench skills to pipeline opportunities.
- **Conflict detection**: When two project managers want the same person at the same time, the agent flags the conflict immediately and suggests alternatives for each project.

### Key Decisions

**Utilization targets**: What percentage of each person's time should be billable? This varies by role — consultants might target 75 to 85%, managers 60 to 70%, partners 30 to 40%. Setting targets too high leaves no room for training, internal work, or simply being human. Setting them too low means you cannot cover costs.

**Skill taxonomy**: How do you categorize skills? Keep it practical. A three-tier system works well: skill category (e.g., "Cloud"), specific skill (e.g., "AWS"), and proficiency level (e.g., beginner/intermediate/expert). Do not create 500 micro-skills nobody will maintain.

**Allocation granularity**: Do you assign people at 100% (full-time to one project) or allow partial allocations (50% on Project A, 30% on Project B, 20% internal)? Partial allocations are realistic but create context-switching costs. Generally avoid splitting anyone across more than 2 to 3 projects.

**Staffing authority**: Who makes the final call on who goes where? Options range from project managers picking from a pool, to a centralized resource management office making all assignments, to a hybrid where resource managers propose and project managers accept.

**Bench threshold**: How long can someone sit on the bench before it triggers an action? Some firms allow 1 to 2 weeks between projects. Others start escalation procedures after 3 days. Define this clearly.

### Common Mistakes

- **Spreadsheet staffing**: Managing resources in Excel or Google Sheets means you are always working with stale data. By the time you update the spreadsheet, three staffing decisions have already been made that invalidate it.
- **Ignoring soft skills and preferences**: A developer might have the right technical skills but terrible client rapport. Or they might hate travel. Forcing bad fits creates problems that show up later as attrition or client complaints.
- **Utilization as the only metric**: Chasing utilization numbers without considering skill development leads to people doing the same work forever. They get bored, they leave, and you lose institutional knowledge.
- **No demand signal from sales**: If resource management does not know what deals are in the pipeline, they cannot prepare capacity. You end up scrambling to staff projects that were "surprise" wins.
- **First-come-first-served staffing**: The project manager who asks first gets the best people. This is unfair and suboptimal. Highest-priority or highest-margin projects should get first pick.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Key metrics to monitor:**
- **Overall utilization rate**: Billable hours divided by available hours, rolled up by team, practice, and firm-wide. Track actual vs. target.
- **Bench count and trend**: How many people are unassigned today, and is that number going up or down? Break it down by skill category.
- **Staffing request aging**: How long do staffing requests sit open? If the average is more than 5 business days, you have a bottleneck.
- **Forecast utilization**: Projected utilization 4, 8, and 12 weeks out. This is more important than historical utilization because you can still act on it.
- **Skill supply vs. demand**: Compare the skills needed by upcoming projects against the skills available in your workforce. Gaps need hiring or subcontracting.
- **Attrition risk**: People consistently over 90% utilization for more than 8 weeks are flight risks. Monitor and intervene.

**Alerts to set:**
- Person at or above 95% utilization for 3 or more consecutive weeks
- Person below 50% utilization (on bench) for more than 5 business days
- Staffing request open longer than 5 business days with no candidates proposed
- Forecast utilization dropping below 65% for any practice area in the next 4 weeks
- Skill gap identified: no available person matches a staffing request requirement

### Exception Handling

**Emergency staffing**: A key person leaves a project mid-stream. The agent immediately identifies replacement candidates based on skills, availability, and project context. It can also estimate the productivity loss during transition and suggest overlap periods.

**Over-allocation**: Someone has been assigned to more hours than they have available. The agent detects this whenever an assignment is created and forces a resolution before confirming the allocation.

**Client-specific restrictions**: Some clients require security clearances, background checks, or specific certifications. The agent filters candidates against these requirements automatically and flags when the only qualified people are already committed.

**Ramp-down mismanagement**: A project is winding down but resources are still fully allocated on paper. The agent watches project completion percentages and suggests ramp-down schedules, freeing people for new assignments sooner.

**Skill mismatch discovered late**: Two weeks into a project, the team realizes someone does not have the needed skills. The agent helps find a swap — someone who can backfill — while minimizing disruption to both projects.

### Routine Tasks

**Daily**: Agent updates availability based on time logged yesterday. Flags any new bench additions or staffing conflicts.

**Weekly**: Agent generates a staffing report showing utilization actuals and forecast, open requests, and bench status. Distributes to practice leads and resource managers.

**Bi-weekly**: Agent reviews upcoming project starts against confirmed resource assignments. Flags any project starting in the next 2 weeks without a fully confirmed team.

**Monthly**: Agent performs a skill inventory refresh, incorporating completed certifications, project experience gained, and self-reported skill updates.

**Quarterly**: Agent analyzes hiring needs by comparing forecasted demand (from pipeline) against current capacity, broken down by skill category and geography.

## Scale — Growing It

### Adding Complexity

**Multi-practice firms**: When you have separate practices (strategy, technology, operations), each practice may have its own utilization targets and staffing processes. You need a firm-wide view that shows where excess capacity in one practice can fill demand in another.

**Global delivery**: Resource management across time zones and countries adds labor law considerations (maximum hours, mandatory leave), visa and work authorization tracking, and cost arbitrage optimization (blending onshore and offshore rates).

**Subcontractor integration**: As you scale, you will use subcontractors to handle demand peaks. Your resource management system needs to track subcontractor availability and skills alongside employees, with clear visibility into the cost difference.

**Shared services model**: Certain specialized roles (data architects, security consultants) serve multiple projects simultaneously in an advisory capacity. These partial allocations need different tracking than full-time project assignments.

**Acquisition integration**: When you acquire another firm, you need to merge skill taxonomies, reconcile utilization targets, and integrate staffing processes — often while both firms continue delivering projects.

### Automation Opportunities

- **Predictive staffing**: Agent analyzes pipeline deals and predicts which skills will be needed before deals close, giving recruiting a head start.
- **Auto-matching**: When a staffing request is submitted, the agent proposes the top 3 candidates within minutes, complete with trade-off analysis.
- **Utilization optimization**: Agent suggests small rebalancing moves (shifting 20% of Person A's time from Project X to Project Y) that improve overall utilization without disrupting delivery.
- **Bench engagement**: Agent automatically assigns bench resources to internal initiatives, training programs, or pre-sales support based on their skills and interests.
- **Attrition prediction**: Agent identifies patterns (sustained high utilization, no skill development, stale project assignments) that correlate with turnover and alerts managers to intervene.

### When to Redesign

- Your average time-to-staff exceeds 10 business days
- More than 20% of staffing decisions are overridden by partners or executives
- Utilization consistently varies more than 15 percentage points across similar roles
- You have acquired a company and are running two parallel staffing processes
- Client satisfaction scores correlate with specific resourcing patterns you cannot currently track
- Your skill taxonomy has not been updated in more than 18 months

## By Industry

1. **Manufacturing**: Resources often need plant-floor experience and safety certifications (OSHA, lockout/tagout). Scheduling must account for factory shift patterns — consultants may need to observe or train on second or third shifts.

2. **Healthcare**: Clinical system implementations require resources with specific EHR certifications (Epic, Cerner). Resources may need credentialing at hospital sites, which takes 4 to 6 weeks. Plan staffing decisions well ahead of project start.

3. **Education**: Engagement timelines follow academic calendars. Resources need experience navigating shared governance structures. Summer staffing is critical as most implementations target summer breaks.

4. **Retail**: Peak season blackouts mean your best retail consultants are unavailable from October through January. Skill matching must include POS, e-commerce, and omnichannel expertise, which are genuinely scarce.

5. **Hospitality**: Resources need property management system expertise and must be comfortable working in live hotel environments. Multi-property rollouts require travel-willing staff for extended periods.

6. **Construction**: Field-oriented consultants who can work on job sites are different from office-based ones. Resources need familiarity with construction-specific systems (Procore, Viewpoint) and job costing concepts.

7. **Real Estate**: Deal-driven timelines mean staffing requests come with tight deadlines tied to transaction closings. Resources need commercial real estate or property management domain knowledge.

8. **Agriculture**: Rural deployments require resources willing to travel to remote locations with limited amenities. Seasonal work patterns mean intense periods followed by quieter months — staff accordingly.

9. **Banking & Financial Services**: Regulatory knowledge is a hard requirement, not a nice-to-have. Resources may need specific certifications (CISA, CISM). Background checks and security clearances add lead time to onboarding.

10. **Insurance**: Actuarial system expertise is rare and expensive. Resources need to understand policy administration lifecycles. State-specific regulatory knowledge can limit who works on which implementations.

11. **Legal**: Matter management and e-discovery expertise are niche skills. Resources must understand legal ethics and confidentiality requirements. Many engagements require law firm or legal department experience.

12. **Government**: Security clearances (Secret, Top Secret) dramatically limit the resource pool. FedRAMP and FISMA knowledge is often required. Citizenship requirements may apply for certain contracts.

13. **Pharma**: GxP validation expertise is mandatory for regulated systems. Resources often need prior pharma experience to navigate the compliance landscape. FDA audit experience is highly valued and scarce.

14. **Automotive**: Supply chain and EDI integration skills are critical. Resources need to understand just-in-time manufacturing concepts. OEM-specific requirements (Ford vs. GM vs. Toyota) create further specialization.

15. **Telecom**: OSS/BSS expertise is a narrow specialization. Resources need to understand network architecture, rating and billing systems, and telecom-specific data models. The talent pool is limited.

16. **Media & Entertainment**: Content management and digital rights expertise are niche. Resources must understand residual calculations, content distribution workflows, and creative production cycles.

17. **Energy & Utilities**: NERC CIP compliance knowledge is mandatory for grid-related work. Resources need to understand rate case processes, outage management, and smart grid technology. Lineworker safety awareness may be required for field deployments.

18. **Food & Beverage**: Food safety and traceability expertise (FSMA, HACCP) is required. Resources need to understand lot tracking, recipe management, and seasonal production scaling.

19. **Logistics & Transport**: TMS and WMS expertise is in high demand. Resources need to understand customs brokerage, freight rating, and last-mile delivery operations. DOT compliance knowledge is often needed.

20. **Nonprofit**: Budget constraints mean staffing with mid-level resources rather than senior specialists. Resources need patience with consensus-driven decision-making and experience with fund accounting concepts.

21. **SaaS / Technology**: Technical resources are often harder to retain because they can get jobs at the client companies. Skill currencies shift rapidly — today's hot framework is tomorrow's legacy. Continuous skill inventory updates are critical.

22. **Professional Services**: Staffing other professional services firms creates interesting dynamics — the client understands your staffing constraints because they face the same ones. Domain expertise in the client's specific practice area is valued.

23. **Defense & Aerospace**: Security clearances are the single biggest staffing constraint. ITAR restrictions limit which personnel can access certain information. Clearance processing can take 6 to 18 months — plan your resource pipeline accordingly.

24. **Mining**: Remote and sometimes hazardous site locations require resources with specific safety training (MSHA). Fly-in/fly-out work schedules need different utilization calculations.

25. **Chemicals**: Process safety and environmental compliance knowledge is mandatory. Resources may need HAZWOPER certification for site work. Batch process manufacturing expertise is a niche skill.

26. **Textiles & Apparel**: PLM and supply chain expertise specific to fashion and apparel. Resources need to understand size/color matrices, seasonal buying cycles, and factory compliance auditing.

27. **FMCG**: Speed of execution matters more than in most industries. Resources need experience with trade promotion, demand planning, and distributor management systems.

28. **Electronics**: BOM management and product lifecycle expertise are key skills. Resources need to understand component sourcing, RoHS compliance, and contract manufacturing coordination.

29. **Oil & Gas**: Upstream, midstream, and downstream are effectively different industries requiring different skill sets. HSE compliance is mandatory. Remote location deployments (offshore platforms, remote basins) require special logistics.

30. **Jewelry & Luxury**: Brand sensitivity means resources must understand luxury customer experience standards. Inventory management for high-value, unique items requires specialized knowledge. Multi-currency and multi-language skills are often needed for global brands.

## By Company Size

### Startup (< 50 people)

Everyone knows everyone. Resource management is informal — the CEO or a delivery lead decides who goes where based on gut feel. Your biggest challenge is that you have too few people and every person is critical. Start simple: maintain a skill matrix and a utilization tracker. Make sure someone is watching utilization weekly so you catch bench time or burnout early.

### SMB (50–500 people)

You need a formal staffing process. Spreadsheets break down around 75 to 100 people — too many moving parts for one person to track mentally. Implement a staffing request workflow, define utilization targets by role, and designate someone (even part-time) as the resource manager. This is where a real PSA system pays for itself.

### Mid-Market (500–5,000 people)

Dedicated resource management office with full-time staff. Skill taxonomy needs to be formalized and maintained. You are balancing competing demands across practices and need governance to arbitrate. Forecast models should incorporate pipeline data to predict demand 2 to 3 months out. Subcontractor management becomes a regular part of capacity planning.

### Enterprise (5,000+ people)

Regional or practice-level resource managers rolling up to a global function. Sophisticated demand modeling incorporating win rates, seasonal patterns, and strategic account plans. Formal career pathing integrated with resource management so assignments develop people, not just fill seats. AI-driven matching is not optional at this scale — no human can optimize across thousands of people and hundreds of projects.

## erp.ai & Proto

**erp.ai**: The HR module tracks employee skills, certifications, and availability. Resource allocation tools show who is assigned where and when capacity opens up. Integration with Projects means staffing decisions are grounded in actual project timelines and task requirements.

**Proto**: Proto agents power the ORAI cycle for resource management — Observing current utilization, skill inventories, and incoming demand; Reasoning about optimal matches considering skills, availability, cost, and development goals; Acting by proposing staffing assignments and flagging conflicts; and Iterating by learning from historical staffing outcomes to improve future recommendations.
