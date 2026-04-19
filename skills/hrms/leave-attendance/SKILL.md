---
name: leave-attendance
description: This skill should be used when the task involves track time, manage PTO policies, handle FMLA, schedule shifts, and manage overtime compliance.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - hrms
  type: skill
  scope: internal
---
# Leave & Attendance

## What This Process Does

Leave and attendance management is how your company tracks when people work, when they are off, and whether it all adds up correctly. It covers time tracking (clock-in/clock-out, timesheets, project time allocation), paid time off policies (vacation, sick leave, personal days), statutory leave (FMLA, parental leave, military leave, jury duty), shift scheduling (who works when), overtime management (tracking hours to comply with FLSA and state overtime laws), and absence management (unplanned absences, patterns, and corrective action). Getting this right means employees are paid accurately, schedules are covered, and your company complies with federal and state labor laws. Getting it wrong means wage-and-hour lawsuits, understaffed shifts, and payroll errors.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Time & Attendance** app, the **Leave Management** template, the **Shift Scheduling** workflow, and the **FMLA Tracking** template in the 720+ catalog. There are also templates for overtime management, accrual policies, and absence analytics. Deploy the closest match, then customize your leave policies, accrual formulas, shift patterns, and approval rules on top.

## Build — Setting It Up

### With Agents

Agents automate the most time-consuming parts of leave and attendance management.

- **Leave request processing**: The agent receives leave requests, checks the employee's available balance, verifies the request does not conflict with blackout periods or minimum staffing requirements, routes it to the appropriate approver, and updates the schedule once approved. Employees get instant visibility into their balances and request status.
- **Accrual calculations**: The agent automatically calculates leave accruals based on your policy — hours worked, tenure, employment type, and accrual caps. It handles the math for different accrual methods (per pay period, per hour worked, front-loaded annual grants) and tracks carryover limits and forfeiture dates.
- **Shift scheduling**: The agent builds schedules based on demand forecasts, employee availability, skill requirements, overtime limits, and fairness rules. It handles shift swaps, open shift bidding, and last-minute coverage needs. It balances desirable and undesirable shifts across the team.
- **Time validation**: The agent reviews submitted timesheets for anomalies — missed punches, hours exceeding shift schedules, split-shift violations, meal break non-compliance, and overtime approaching thresholds. It flags these for manager review before they become payroll errors.
- **FMLA administration**: The agent manages the entire FMLA process — tracks eligibility (12 months employed, 1,250 hours worked, 50+ employees within 75 miles), sends required notices within legal timelines, tracks intermittent leave usage against the 12-week entitlement, requests and manages medical certifications, and generates compliance reports.
- **Overtime alerting**: The agent monitors hours in real-time and alerts managers when employees approach overtime thresholds (40 hours weekly under FLSA, or state-specific daily overtime rules in California and similar states). It also flags when approaching double-time thresholds.

### Key Decisions

**Time tracking method**: Biometric clocks, badge swipe, mobile app, web-based timesheet, or manager-reported? The method should match your workforce — production floor workers need physical clocks, office workers use web timesheets, field workers use mobile apps. Ensure the method complies with state meal and rest break tracking requirements.

**Leave policy design**: How much PTO do employees get? Is it a single PTO bank or separate vacation/sick/personal categories? Does it accrue over time or front-load at the start of the year? What are the carryover and payout rules? State laws in California, Colorado, and others restrict use-it-or-lose-it policies. Design with compliance in mind.

**Overtime rules**: FLSA sets the federal standard (time and a half after 40 hours weekly), but many states have additional rules — California requires daily overtime after 8 hours and double time after 12. Some states have weekly overtime at different thresholds. Know the rules for every state where you have employees.

**Scheduling approach**: Fixed schedules (same shifts every week), rotating schedules (shifts rotate on a pattern), or demand-based scheduling (schedules change based on business needs)? Predictive scheduling laws in some cities (San Francisco, Seattle, New York City, Chicago) require advance notice of schedules and penalty pay for late changes.

**Approval workflow**: Who approves time-off requests? Direct manager only, or manager plus department head for longer absences? Auto-approval for requests within balance and under a certain duration can speed up the process for routine requests.

### Common Mistakes

**Not tracking meal and rest breaks**: California, Washington, and other states require employers to provide and document meal and rest breaks. Not tracking them creates class-action lawsuit exposure. Build break tracking into your time system from day one.

**Ignoring state-specific PTO laws**: Some states require PTO payout at termination (California treats accrued PTO as earned wages). Some states prohibit use-it-or-lose-it policies. Some cities require paid sick leave beyond what your policy provides. A one-size-fits-all national policy can violate state law.

**Manual schedule management**: Building schedules in spreadsheets works for 10 people. For 50 or more, it guarantees conflicts, coverage gaps, and overtime violations. Use the scheduling tools in your HRMS.

**Failing to track intermittent FMLA**: An employee taking FMLA intermittently (a few hours or days at a time for a chronic condition) is difficult to track manually. Each absence needs to be counted against the 12-week entitlement. The agent is essential here.

**Not distinguishing exempt and non-exempt**: Exempt employees (salaried, meeting FLSA duties tests) do not earn overtime. Non-exempt employees (hourly or salaried below the threshold) do. Misclassifying someone as exempt when they should be non-exempt creates back-pay liability for all unpaid overtime.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

Track these metrics on a live dashboard:

- **Absence rate**: Total absent hours divided by total scheduled hours. Industry averages vary, but above 5% warrants investigation.
- **Overtime percentage**: Overtime hours as a percentage of regular hours. Monitor by department and individual to catch chronic overtime indicating understaffing or poor scheduling.
- **Leave balance utilization**: What percentage of available leave are employees using? Very low utilization may indicate a culture problem (people afraid to take time off). Very high utilization with frequent zero-balance requests indicates the policy may be too lean.
- **Schedule adherence**: What percentage of employees clock in and out within tolerance of their scheduled times?
- **FMLA utilization**: Active FMLA cases, intermittent FMLA hours used vs. entitlement remaining, and upcoming medical certification renewal dates.
- **Meal/rest break compliance**: Percentage of shifts with properly documented breaks. In California, every missed break is a penalty premium.

Set alerts for: overtime approaching 10% of regular hours in a department, employee leave balance approaching zero with upcoming scheduled leave, FMLA medical certification expiring within 30 days, employees with 3+ unplanned absences in a rolling 30-day period, schedule gaps (shifts with no coverage) within 72 hours, and predictive scheduling notice deadlines approaching.

### Exception Handling

**Missed clock punches**: The agent identifies missed punches from the time system, compares with the schedule to estimate the correct time, and routes a correction request to the employee and manager. It tracks correction frequency by employee — chronic missed punches may indicate a process or compliance issue.

**Overtime threshold approaching**: The agent sends real-time alerts to managers when an employee hits 35 hours in a week (or the appropriate threshold for your overtime rule). The manager can adjust remaining shifts or approve the overtime before it happens.

**Concurrent leave requests**: When multiple team members request the same dates off, the agent checks minimum staffing requirements, applies your priority rules (seniority, first-come-first-served), and presents the manager with options rather than auto-denying.

**FMLA abuse concerns**: When intermittent FMLA usage patterns suggest potential abuse (always on Fridays, always before/after holidays), the agent flags the pattern for HR review without making assumptions. HR can request recertification as permitted under FMLA regulations.

**Natural disaster and emergency closures**: The agent applies emergency leave policies (paid closure days, remote work activation), communicates with affected employees, and adjusts schedules and time records accordingly.

### Routine Tasks

**Daily**: Agent validates previous day's time entries and flags exceptions. Agent checks for upcoming shift gaps. Agent processes new leave requests and sends approval notifications.

**Weekly**: Agent generates overtime reports by department. Agent reviews upcoming week's schedule for coverage issues. Agent sends leave balance summaries to employees approaching accrual caps or forfeiture dates.

**Monthly**: Agent processes accrual calculations. Agent generates absence trend reports. Agent reviews FMLA case statuses and upcoming certification deadlines. Agent audits meal and rest break compliance.

**Annually**: Agent resets annual leave balances per policy (handling carryover calculations). Agent reviews and updates holiday calendars. Agent generates year-end leave reports for compliance. Agent recalculates FMLA eligibility for the new year.

## Scale — Growing It

### Adding Complexity

**Multi-state compliance**: Each state has its own overtime rules, meal and rest break requirements, paid sick leave mandates, predictive scheduling laws, and reporting obligations. California alone has daily overtime, meal break premium pay, split-shift premiums, and reporting time pay. The agent must apply the correct rules based on the employee's work location (not home location, not company headquarters).

**International leave management**: Each country has statutory leave minimums that are often far more generous than US standards — 20+ vacation days in most of Europe, mandatory national holidays, parental leave measured in months or years. Some countries require employers to enforce vacation usage (Germany). Build country-specific leave policies.

**Complex shift operations**: 24/7 operations (hospitals, manufacturing plants, call centers) need rotation patterns that ensure adequate coverage while complying with maximum consecutive day rules, minimum rest between shift rules, and fatigue management requirements. The agent optimizes schedules across multiple constraints.

**Project-based time tracking**: When employees charge time to projects, clients, or cost centers, the time system needs to capture not just when they worked but what they worked on. This feeds project costing, client billing, and resource utilization analytics.

**Absence management integration**: Pattern-based absence tracking (Bradford Factor or similar) helps identify problematic absence patterns. Connect absence data to performance management for a complete picture. Ensure any attendance policy complies with ADA and FMLA protections.

### Automation Opportunities

- **Predictive scheduling**: The agent analyzes historical demand patterns (retail foot traffic, call volume, production schedules) and creates optimal schedules that match labor supply to demand while minimizing overtime and complying with predictive scheduling laws.
- **Self-service shift swaps**: Employees initiate swaps through the agent, which validates that both employees are qualified for each other's shifts, checks overtime implications, and processes approved swaps without manager intervention for routine changes.
- **Absence forecasting**: The agent predicts likely absence rates by day and team based on historical patterns, upcoming holidays, seasonal trends, and even local events (game days, weather forecasts), helping managers plan coverage proactively.
- **Automated compliance auditing**: The agent continuously checks time records against applicable labor laws — overtime calculations, break compliance, minor work hour restrictions, predictive scheduling notice requirements — and flags violations before they become penalties.
- **Geofenced time tracking**: For field workers, the agent uses GPS to verify that clock-in/clock-out occurs at the job site, reducing time fraud while ensuring accurate location-based pay (prevailing wage, site-specific rates).

### When to Redesign

- Wage-and-hour complaints or lawsuits are occurring.
- Overtime costs are consistently exceeding budget by more than 20%.
- Schedule-related grievances are a top employee complaint.
- You are expanding into states with complex labor laws (California, New York, Oregon) and your current system cannot handle the rules.
- Absenteeism is trending upward without a clear cause.
- Payroll errors traced to time and attendance data exceed 1% per pay period.
- You are moving from a primarily office-based to a hybrid or remote workforce.

## By Industry

1. **Manufacturing**: Shift scheduling is the core challenge — rotating shifts across 2 or 3 shifts per day with coverage requirements for every station. Overtime is common during production peaks and must be carefully tracked. Union contracts often dictate shift bidding rights, overtime distribution, and premium pay rules. Plant shutdowns for maintenance require mass scheduling changes.

2. **Healthcare**: 12-hour shift patterns, on-call schedules, mandatory overtime for patient safety, and float pool assignments create intense scheduling complexity. Nurse-to-patient ratios are legally mandated in some states (California). Physician schedules involve clinic hours, OR blocks, call coverage, and administrative time. Credential-based scheduling ensures only qualified staff work specific units.

3. **Education**: Teacher contracts define work days, preparation periods, and leave accrual. Professional development days require substitute coverage scheduling. Student contact hours drive scheduling — you cannot pull a teacher from class without a replacement. Classified staff (custodians, cafeteria, bus drivers) have different schedules and leave policies than certificated staff.

4. **Retail**: Demand-driven scheduling based on foot traffic, sales forecasts, and promotional events. Part-time workers need minimum hour guarantees in some jurisdictions. Predictive scheduling laws (Oregon, San Francisco, Seattle, New York City, Chicago) require 14-day advance notice and penalty pay for changes. Holiday and blackout period management during peak seasons.

5. **Hospitality**: Event-driven scheduling — banquets, conferences, and seasonal peaks create volatile labor needs. Split shifts are common (work breakfast, off mid-day, work dinner). Tip-eligible employees may have different scheduling rules. Resort seasonality means scaling from skeleton crew to full staff within weeks.

6. **Construction**: Project-based scheduling where start and end times shift with weather, material deliveries, and project phase. Travel time to remote job sites may count as compensable time under certain conditions. Prevailing wage projects require certified time records. Seasonal weather affects work schedules in regions with harsh winters.

7. **Real Estate**: Agent schedules are largely self-managed (open houses on weekends, client showings at various times), but staff scheduling for offices and property management follows standard patterns. Property management maintenance teams need on-call scheduling for emergency repairs. Leasing office hours may require weekend and evening coverage.

8. **Agriculture**: Sunrise-to-sunset work patterns vary with seasons. Overtime exemptions exist for agricultural workers under FLSA, but some states (California) have been phasing in standard overtime rules. H-2A worker schedules must meet contract hour guarantees. Harvest periods mean 7-day workweeks that need careful legal compliance.

9. **Banking & Financial Services**: Branch scheduling requires coverage during banking hours with appropriate licensed/authorized staff. Trading floor attendance is rigid with market hours. Back-office operations may run extended hours or shifts for settlement processing. Regulatory requirements mean certain roles cannot be vacant — backup assignments are essential.

10. **Insurance**: Claims surge scheduling after natural disasters requires rapid temporary staffing and overtime authorization. Underwriting and actuarial roles are largely standard business hours. Call center scheduling for policy service needs demand forecasting. Producer schedules are flexible but activity tracking matters.

11. **Legal**: Billable hour tracking is the primary time management concern — attorneys must record time in 6-minute increments against client matters. Leave policies tend to be generous on paper but culturally difficult to use. Administrative staff have standard schedules. Trial preparation creates irregular, intensive work periods that strain normal scheduling.

12. **Government**: Work schedules are often defined by statute or regulation. Compressed work schedules (4/10s, 9/80s) are common in federal employment. Union contracts define shift bidding, overtime distribution, and leave. Essential personnel designations for emergencies override normal scheduling. Court-ordered furloughs or shutdowns create unique attendance situations.

13. **Pharma**: Laboratory scheduling must ensure GLP/GMP compliance — certain tests and processes need continuous monitoring. Clinical trial timelines drive work schedules for research staff. Manufacturing runs on standard shift patterns with strict documentation of who was present for each batch. Sales reps manage their own field schedules but report activities.

14. **Automotive**: Dealership hours extend to evenings and weekends — sales and service scheduling must cover these hours. Manufacturing plants run multi-shift operations with strict line coverage requirements. Model changeover periods create unusual scheduling patterns. Mandatory overtime during high-demand production runs is common.

15. **Telecom**: Network operations centers require 24/7/365 staffing with strict minimum coverage. Field technician scheduling is driven by service orders and must account for travel time. Storm and outage response triggers emergency call-in procedures. Customer-facing retail locations need evening and weekend coverage.

16. **Media & Entertainment**: Production schedules are intense and irregular — 12-16 hour days during shoots are common. Union rules (IATSE, SAG-AFTRA) mandate specific turnaround times between shifts and meal breaks on set. Writers' room hours are often undefined. Broadcast scheduling follows programming timelines with inflexible air dates.

17. **Energy & Utilities**: Power plant operations run 24/7 with minimum staffing requirements set by regulatory agencies (NERC for bulk electric). Storm response shifts can last 16+ hours with mandatory rest periods. Nuclear plant schedules must comply with NRC fitness-for-duty rules including work-hour limits. Planned outage seasons create intensive multi-week scheduling.

18. **Food & Beverage**: Restaurant scheduling is highly variable — busy weekend and evening shifts need more staff, slow periods need less. Food manufacturing runs shift patterns with sanitation breaks between production runs. Health department requirements may dictate minimum staffing. Seasonal menu changes drive temporary staffing adjustments.

19. **Logistics & Transport**: Driver hours-of-service regulations (DOT) cap driving time at 11 hours within a 14-hour window after 10 consecutive hours off. These are not optional — they are federally enforced and tracked by ELDs (Electronic Logging Devices). Warehouse scheduling follows shipment volumes with peak periods around holidays. Dock scheduling coordinates with carrier arrival windows.

20. **Nonprofit**: Leave policies may be more generous to compensate for lower salaries. Grant-funded positions may have specific timekeeping requirements for audit purposes. Event-driven work (galas, campaigns) creates temporary schedule intensity. Volunteer coordination interacts with staff scheduling for programs.

21. **SaaS / Technology**: Flexible schedules and unlimited PTO policies are common but create their own challenges — employees may take too little time off, and managers lose visibility into availability. On-call rotations for engineering teams need fair distribution and proper compensation. Sprint-based work cycles may have natural schedule rhythms.

22. **Professional Services**: Billable hour tracking is the primary time management function. Client-site work means schedules follow client expectations. Travel schedules for consultants need advance planning. Bench time (between client engagements) must be tracked and managed. Some firms restrict PTO during busy season (tax season for accountants).

23. **Defense & Aerospace**: Classified work must occur in approved facilities, limiting remote work and flexible scheduling. Program deadlines drive mandatory overtime periods. Foreign travel requires advance approval and may trigger counter-intelligence briefings. Deployed support personnel follow military operational tempo.

24. **Mining**: Roster-based scheduling (14 on / 7 off, 28 on / 14 off) for remote sites is standard. Travel days are counted separately from work days. Fatigue management regulations limit consecutive hours and shifts. Underground mine shifts have specific legal requirements. Wet weather and safety stand-downs create unpredictable schedule disruptions.

25. **Chemicals**: Continuous process operations require 24/7 shift coverage with strict handover procedures. Turnaround (planned maintenance shutdown) periods create intensive multi-week scheduling events with contractor integration. Emergency response team availability must be ensured around the clock. Chemical exposure tracking ties to time records for specific work areas.

26. **Textiles & Apparel**: Factory scheduling follows production orders with seasonal peaks before retail collection launches. Design team schedules align with fashion calendar milestones (market weeks, sample deadlines). Retail staff scheduling follows standard retail patterns. Supply chain roles may need to accommodate time zones for international sourcing.

27. **FMCG**: Sales force scheduling balances route efficiency with store coverage requirements. Manufacturing scheduling follows production plans aligned with demand forecasts. Distribution center scheduling aligns with shipment windows and retailer delivery requirements. Promotional periods create temporary scheduling intensity.

28. **Electronics**: Manufacturing clean room schedules must maintain staffing levels for continuous production with gowning/degowning time factored in. R&D schedules may be flexible but lab equipment booking creates constraints. Global teams need overlap hours for collaboration despite time zone differences.

29. **Oil & Gas**: Offshore rotation schedules (typically 14/14 or 28/28) define the work pattern. Helicopter transportation to platforms adds schedule constraints. Emergency well control situations override normal scheduling. Travel days, crew change logistics, and weather delays affect schedule adherence.

30. **Jewelry & Luxury**: Retail scheduling peaks around holidays, Valentine's Day, wedding season, and major cultural celebrations. Atelier (workshop) scheduling for custom pieces follows client order timelines. Trunk shows and special events require staffing beyond normal hours. High-value inventory means staffing minimums for security compliance.

## By Company Size

### Startup (< 50 people)

A simple PTO policy (unlimited or a set number of days) and basic time tracking is enough. Use your payroll provider's built-in time tracking. Scheduling is informal — people generally know when to show up. The main risk is not documenting time for non-exempt employees, which creates FLSA exposure. Agents help by tracking PTO balances and reminding managers to approve timesheets.

### SMB (50-500 people)

You need formal policies, proper time tracking systems, and shift scheduling tools if you have hourly workers. FMLA applies if you have 50+ employees. State-specific leave laws start mattering as you hire across states. Build accrual tracking, approval workflows, and basic reporting. Agents manage leave request processing, overtime monitoring, and compliance tracking so your HR team does not drown in manual work.

### Mid-Market (500-5,000 people)

Leave and attendance becomes a dedicated function. You likely have multiple locations, shift-based operations, and complex scheduling needs. Integration between time tracking, scheduling, payroll, and leave management systems is critical. Advanced analytics help predict staffing needs and identify absence patterns. Agents handle multi-location schedule optimization, compliance monitoring across states, and automated exception management.

### Enterprise (5,000+ people)

Global time and attendance management across countries with different labor laws, overtime rules, statutory leave requirements, and cultural norms. Multiple time tracking methods for different worker populations. Union contracts add scheduling constraints. Agents provide cross-country compliance, demand-based scheduling optimization, predictive absence analytics, and integration with workforce planning. Audit readiness for wage-and-hour compliance is a constant requirement.

## ERP•AI & Proto

**ERP•AI**: The Leave & Attendance module handles accrual calculations, leave request workflows, shift scheduling, overtime tracking, and FMLA case management, with built-in compliance rules for multi-state and multi-country operations.

**Proto**: Proto agents drive the ORAI cycle for leave and attendance — they Observe time records and absence patterns for anomalies, Reason about compliance risks and scheduling gaps, Act by processing leave requests and optimizing schedules, and Iterate by analyzing attendance data to predict future staffing needs and improve schedule efficiency.
