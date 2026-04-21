---
name: project-planning
description: This skill should be used when the task involves how to set up projects with work breakdowns, milestones, timelines, dependencies, and baselines so delivery stays on track.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - psa
  type: skill
  scope: internal
---
# Project Planning

## What This Process Does

Project planning is the foundation of everything in professional services. When a deal closes and becomes a real engagement, someone needs to turn that vague scope into a concrete plan: what work needs to happen, who does it, when it starts, when it finishes, and what depends on what.

This process covers creating the project structure (breaking big deliverables into smaller tasks), setting milestones (the checkpoints your client cares about), building timelines (Gantt charts showing the sequence of work), mapping dependencies (Task B can't start until Task A finishes), and locking in a baseline (the original plan you measure progress against).

Think of it like building a house. You don't just say "build a house." You break it down: foundation, framing, electrical, plumbing, drywall, paint. Each step depends on the one before it. You set dates. You assign people. And you save a copy of the original plan so that when things inevitably shift, you can see exactly how far off you are.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Project** and **Task** apps in the catalog, plus any industry-specific professional services templates. The **Projects** module includes built-in WBS structures, Gantt views, and milestone tracking. Deploy the closest match to your engagement type (staff augmentation, fixed-price delivery, managed services), then customize the phases and task templates on top.

Also check for **Project Template** records. If your firm does similar projects repeatedly (say, ERP implementations or compliance audits), you should have a reusable template that pre-populates the WBS, standard milestones, and typical durations.

## Build — Setting It Up

### With Agents

AI agents can dramatically speed up project setup. Here is how:

- **Scope-to-WBS conversion**: Feed the agent your Statement of Work or proposal document. It will parse the deliverables and suggest a Work Breakdown Structure with phases, tasks, and subtasks. You review and adjust rather than starting from a blank screen.
- **Duration estimation**: The agent looks at historical data from similar completed projects and suggests realistic task durations. If your last three CRM implementations took 12 weeks for data migration, it will flag that your current plan showing 4 weeks is optimistic.
- **Dependency mapping**: Describe your workflow in plain English ("we can't start UAT until data migration is complete and integrations are tested") and the agent builds the dependency links.
- **Template selection**: Tell the agent what type of project you're running, and it pulls the best-fit template from your library, pre-populating everything.
- **Risk flagging**: The agent reviews your plan and flags common issues — critical path too tight, no buffer before client milestones, single points of failure where one person is on every task.

### Key Decisions

**WBS depth**: How many levels deep do you break down work? Two levels (Phase > Task) works for small projects. Three or four levels (Phase > Workstream > Task > Subtask) makes sense for complex programs. Going too deep creates administrative overhead. Going too shallow means you can't track progress meaningfully.

**Milestone definition**: What counts as a milestone? Generally, these are client-visible deliverables or approval gates. Don't make everything a milestone — pick the 5 to 10 moments that matter. Each milestone should have clear acceptance criteria so there is no argument about whether it has been reached.

**Scheduling method**: Are you scheduling forward from a start date or backward from a deadline? Fixed-price projects with contractual deadlines usually work backward. Time-and-materials engagements usually work forward.

**Baseline policy**: When do you lock the baseline? Typically after the client approves the project plan. Decide how you handle re-baselining — some firms never re-baseline (to preserve accountability), others re-baseline when change orders are approved.

**Task granularity for time tracking**: Tasks in the WBS need to align with what people actually log time against. If a task is too broad ("Development"), you lose visibility. If it is too granular ("Write line 42 of module X"), nobody will track accurately.

### Common Mistakes

- **Copy-paste from the proposal**: The proposal was written to win the deal. It is not a project plan. The scope may be vague, optimistic, or missing entire workstreams the sales team conveniently forgot.
- **No dependencies**: Laying out tasks without linking them means your Gantt chart is just a list with bars. You cannot identify the critical path or understand the impact of delays.
- **Ignoring ramp-up time**: Plans that show full productivity from Day 1 are fiction. New team members need onboarding. Client environments need access provisioning. Build in ramp time.
- **No buffer before milestones**: If the milestone is on Friday and the last task finishes on Friday, you have zero margin. Things will slip. Add buffer before every client-facing milestone.
- **Planning in isolation**: The project manager builds the plan without talking to the people who will actually do the work. Duration estimates are wrong. Technical dependencies are missed.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Key metrics to monitor:**
- **Schedule variance**: Comparing planned dates to actual/forecasted dates. Flag anything slipping more than 10% of remaining duration.
- **Critical path health**: Which tasks are on the critical path (the longest chain of dependent tasks)? Any delay here delays the whole project.
- **Milestone status**: A simple red/yellow/green for each upcoming milestone. Green means on track. Yellow means at risk (less than one week of buffer remaining). Red means the date will be missed without intervention.
- **Baseline deviation**: How far has the plan drifted from the original baseline? Track this as both schedule variance (days) and effort variance (hours).
- **Task completion rate**: Are tasks being closed at the rate needed to hit milestones? If you need to complete 10 tasks per week and you are averaging 6, you have a problem.

**Alerts to set:**
- Milestone at risk (less than 5 business days of buffer remaining)
- Task overdue by more than 2 business days
- Critical path task starting late
- Baseline variance exceeding threshold (e.g., more than 15%)
- Resource not assigned to upcoming task within its start window

### Exception Handling

**Scope creep**: Client asks for work not in the plan. The agent can compare the request against the SOW and flag it as in-scope or out-of-scope. If out-of-scope, it drafts a change request.

**Dependency deadlock**: Task A waits on Task B which waits on Task A. The agent detects circular dependencies and alerts you immediately.

**Resource gaps**: A task is about to start but the assigned person left the project. The agent flags the gap and suggests available replacements based on skill match.

**Client delays**: The client was supposed to provide test data by Monday and it is now Wednesday. The agent recalculates downstream impacts and generates a client communication showing the new timeline.

**Milestone jeopardy**: When a milestone is at risk, the agent runs what-if scenarios — what if we add a person, what if we parallelize these tasks, what if we reduce scope — and presents options with trade-offs.

### Routine Tasks

**Daily**: Agent checks for overdue tasks, sends reminders to owners, updates percent-complete based on time logged.

**Weekly**: Agent generates a status report comparing plan vs. actual, highlights top risks, and prepares talking points for the weekly status meeting.

**Monthly**: Agent performs a plan health check — are estimates still realistic, is the critical path still valid, are there upcoming resource conflicts with other projects.

**Per milestone**: Agent prepares a milestone completion package — checklist of deliverables, sign-off document, and lessons learned summary.

## Scale — Growing It

### Adding Complexity

**Multi-phase programs**: When a single project becomes a multi-phase program spanning quarters or years, you need a program-level plan with phase gates. Each phase is its own project with its own baseline, but milestones link across phases.

**Multi-practice delivery**: Large engagements involve multiple practices (strategy, technology, change management). Each practice has its own workstreams but shares dependencies. You need a program office function to manage cross-practice integration.

**Global delivery**: When teams span time zones, your scheduling needs to account for overlap windows, handoff points, and longer communication latency. A task that takes 2 days with a co-located team might take 4 days with a distributed team.

**Fixed-price at scale**: More complex WBS structures, tighter change control, and formal earned value management become necessary. You need to track CPI (Cost Performance Index) and SPI (Schedule Performance Index) at the work package level.

**Subcontractor integration**: Third-party teams need their own task assignments and reporting, but their work products feed into your milestones. Build explicit handoff tasks and quality checkpoints.

### Automation Opportunities

- **Auto-scheduling**: Agent re-optimizes the schedule daily based on actual progress, resource availability, and remaining work.
- **Predictive completion dates**: Machine learning on historical project data to predict realistic finish dates rather than relying on optimistic manual estimates.
- **Change impact analysis**: When a change request comes in, the agent instantly models the schedule and cost impact.
- **Cross-project dependency management**: Agent monitors dependencies between projects and alerts when one project's delay affects another.
- **Automated status reporting**: Agent compiles data from time tracking, task updates, and risk logs into a polished status report — no manual effort.

### When to Redesign

- You are managing more than 50 active projects and cannot see cross-project dependencies
- Your project templates are more than a year old and no longer reflect how you actually deliver
- More than 30% of projects miss their original milestone dates by more than two weeks
- Project managers spend more than 40% of their time updating plans instead of managing delivery
- You have acquired a company or practice and need to merge planning methodologies

## By Industry

1. **Manufacturing**: Projects often involve plant floor implementations with hard cutover dates tied to production schedules. Downtime windows are measured in hours, not days. WBS must include factory acceptance testing, safety certifications, and union coordination milestones.

2. **Healthcare**: Regulatory go-live dates (e.g., ICD code changes, CMS deadlines) are immovable. Plans must include clinical workflow validation, HIPAA security reviews, and physician training. Expect long UAT cycles because clinicians have limited availability.

3. **Education**: Projects align to academic calendars — you cannot go live mid-semester. Summer breaks are prime implementation windows but also when staff take vacation. Plans must account for governance committees that meet monthly, slowing decisions.

4. **Retail**: Everything revolves around seasonal peaks. No retailer will accept a go-live within 60 days of Black Friday. Plans must include POS integration testing, inventory cutover during low-traffic periods, and store-by-store rollout schedules.

5. **Hospitality**: Properties operate 24/7/365 with no downtime windows. Implementations happen in rolling waves — one property at a time. Plans must account for seasonal occupancy patterns and franchise vs. corporate approval structures.

6. **Construction**: Project planning for construction firms mirrors their own project management DNA — they understand Gantt charts and critical paths intuitively. Focus on job costing integration, equipment tracking, and compliance with prevailing wage requirements.

7. **Real Estate**: Transaction-driven business means projects often align with portfolio acquisition timelines. Plans must accommodate due diligence periods, lease migration schedules, and property management system cutovers timed between quarters.

8. **Agriculture**: Seasonal cycles dictate everything. Planting and harvest windows are non-negotiable constraints. Plans must accommodate rural connectivity limitations and seasonal workforce fluctuations.

9. **Banking & Financial Services**: Regulatory examination schedules create hard deadlines. Plans require extensive audit trail documentation, SOX compliance checkpoints, and parallel-run periods where old and new systems operate simultaneously.

10. **Insurance**: Policy renewal cycles create natural cutover windows. Plans must include actuarial validation milestones, state-by-state regulatory filing timelines, and catastrophe season avoidance for go-lives.

11. **Legal**: Matter-based work means project templates vary significantly by practice area (litigation vs. M&A vs. regulatory). Plans must account for court-driven deadlines that override all other scheduling considerations.

12. **Government**: Fiscal year boundaries drive project timing. Procurement and approval cycles add 60 to 90 days to any plan. Plans must include ATO (Authority to Operate) milestones and accessibility compliance checkpoints.

13. **Pharma**: Validation requirements (IQ/OQ/PQ) add entire phases to project plans. FDA submission timelines are immovable. Plans must include 21 CFR Part 11 compliance verification and clinical trial data migration windows.

14. **Automotive**: Model year transitions create fixed deadlines. Plans must coordinate with supply chain partner systems, EDI testing with OEMs, and plant shutdown windows for system cutovers.

15. **Telecom**: Network freeze periods around major events or holidays constrain scheduling. Plans must include OSS/BSS integration testing, number portability verification, and regulatory compliance for each service territory.

16. **Media & Entertainment**: Content release schedules and award season timelines drive project urgency. Plans must account for rights management system integration and royalty calculation validation periods.

17. **Energy & Utilities**: Regulatory rate case filings create hard deadlines. Plans must include NERC CIP compliance milestones, outage management system testing during low-demand seasons, and public utility commission approval gates.

18. **Food & Beverage**: FSMA compliance deadlines and recall readiness requirements shape plans. Seasonal production peaks (holiday packaging, summer beverages) limit implementation windows. Plans need lot traceability validation milestones.

19. **Logistics & Transport**: Peak shipping seasons (Q4, back-to-school) are off-limits for go-lives. Plans must include carrier integration testing, customs/trade compliance validation, and last-mile delivery system cutovers during low-volume periods.

20. **Nonprofit**: Grant cycles and fiscal year reporting deadlines drive timing. Plans must accommodate volunteer-heavy organizations with limited IT staff and board approval milestones that happen quarterly.

21. **SaaS / Technology**: Continuous delivery culture means shorter project cycles but frequent releases. Plans must align with sprint cadences, feature flag strategies, and customer migration waves for platform changes.

22. **Professional Services**: These firms are planning projects about planning projects. They understand the concepts but often underestimate their own internal implementations. Plans must account for billable utilization pressure — staff pulled back to client work mid-project.

23. **Defense & Aerospace**: CMMC and ITAR compliance milestones are mandatory. Plans follow strict phase-gate methodologies (often EVMS required contractually). Government acceptance testing cycles are long and formal.

24. **Mining**: Remote site implementations require logistics planning for equipment and personnel. Plans must account for weather windows, shift patterns, and limited connectivity for cloud-based solutions.

25. **Chemicals**: Process safety management requirements add compliance milestones. Plans must include REACH/GHS regulatory compliance validation and batch process integration testing during planned maintenance shutdowns.

26. **Textiles & Apparel**: Fashion calendar (seasons, trade shows) drives project timing. Plans must account for PLM integration, size/color matrix complexity in system testing, and factory compliance audit schedules.

27. **FMCG**: Speed-to-market pressure means compressed timelines. Plans must include retailer EDI compliance testing, promotion management system validation, and distributor network cutover coordination.

28. **Electronics**: Product lifecycle compression means faster project cycles. Plans must include BOM management integration, RoHS/WEEE compliance validation, and coordination with contract manufacturer systems.

29. **Oil & Gas**: HSE (Health, Safety, Environment) compliance milestones are non-negotiable. Plans must account for offshore platform access logistics, turnaround/shutdown maintenance windows, and joint venture partner approval processes.

30. **Jewelry & Luxury**: Authentication and provenance tracking systems require specialized validation. Plans must account for high-security environments, seasonal collection launches, and multi-currency/multi-language requirements for global boutique networks.


## ERP•AI & Proto

**ERP•AI**: The Projects module provides WBS structures, Gantt chart visualization, milestone tracking, and dependency management out of the box. Project templates allow you to standardize and reuse plans across similar engagements. Integration with the HR and resource modules means your plan is always grounded in actual people availability.

**Proto**: Proto agents assist through the full ORAI cycle — Observing your SOW and historical project data, Reasoning about realistic durations and dependencies, Acting by generating the project plan structure, and Iterating as the project progresses by adjusting forecasts and flagging risks before they become problems.
