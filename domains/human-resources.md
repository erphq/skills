---
title: Human Resources
description: Core HR, payroll, benefits administration, talent management, time and attendance, and workforce compliance
audience: both
category: domain
related:
  - domains/finance-accounting.md
  - domains/project-operations.md
  - domains/customer-support.md
---

# Human Resources

## Purpose

This domain covers the management of an organization's people: from hiring through retirement, and everything in between. A builder works in this space when the application must maintain employee records, process payroll, administer benefits, manage talent pipelines, track time and attendance, or ensure compliance with labor laws.

HR is the second most integration-heavy domain after finance. Payroll feeds the general ledger. Time data feeds project costing. Headcount drives workforce planning and budgeting. Org structure determines approval routing across every other module. Getting the employee master data model right is foundational because nearly every enterprise process has a "who" attached to it.

## Key Entities

### Employee

- **Description**: The central record for every person employed by the organization. Contains personal, employment, and organizational data.
- **Key Fields**: `employee_id`, `first_name`, `last_name`, `date_of_birth`, `ssn_encrypted`, `hire_date`, `termination_date`, `employment_status` (active, on_leave, terminated, retired), `employment_type` (full_time, part_time, contractor, intern, temp), `job_title`, `job_code`, `department_id`, `manager_id`, `location_id`, `work_email`, `flsa_status` (exempt, non_exempt), `eeoc_category`, `citizenship_status`, `i9_verification_date`
- **Relationships**: Belongs to department and position. Reports to manager (self-referential hierarchy). Has many: compensation records, benefit enrollments, time records, performance reviews, training records, emergency contacts.
- **Design Notes**: Use effective-dated records for fields that change over time (job title, department, compensation). Never store SSN in cleartext. Separate PII into a restricted table with field-level encryption.

### Position

- **Description**: A budgeted slot in the organization, independent of who fills it. Positions exist whether they are filled or vacant.
- **Key Fields**: `position_id`, `position_title`, `job_code`, `department_id`, `reports_to_position_id`, `grade_level`, `pay_band_min`, `pay_band_mid`, `pay_band_max`, `fte_count`, `status` (active, frozen, eliminated), `budget_code`, `location_id`
- **Relationships**: Links to department, job classification, pay grade. One or zero employees occupy a position at any time. Headcount planning is based on positions, not employees.

### Department / Organization Unit

- **Key Fields**: `department_id`, `department_name`, `parent_department_id`, `department_head_id`, `cost_center_id`, `effective_date`, `status`
- **Relationships**: Hierarchical (parent/child). Contains positions. Links to cost center for financial reporting.

### Compensation Record

- **Key Fields**: `compensation_id`, `employee_id`, `effective_date`, `base_salary`, `pay_frequency` (annual, semi_monthly, biweekly, weekly), `hourly_rate`, `currency_code`, `compensation_type` (base, bonus, commission, equity), `reason` (hire, promotion, merit_increase, market_adjustment, demotion)
- **Relationships**: Links to employee. Feeds payroll calculation.

### Benefit Plan

- **Key Fields**: `plan_id`, `plan_name`, `plan_type` (medical, dental, vision, life, disability, 401k, HSA, FSA), `carrier_name`, `plan_year`, `employer_contribution`, `employee_contribution_pretax`, `coverage_levels` (employee_only, employee_spouse, employee_children, family), `eligibility_rules`, `waiting_period_days`
- **Relationships**: Has many enrollments. Links to payroll deduction codes. Links to carrier/vendor.

### Benefit Enrollment

- **Key Fields**: `enrollment_id`, `employee_id`, `plan_id`, `coverage_level`, `effective_date`, `end_date`, `event_type` (new_hire, open_enrollment, qualifying_life_event, termination), `employee_cost_per_period`, `employer_cost_per_period`, `dependents`
- **Relationships**: Links employee to benefit plan. Drives payroll deductions.

### Payroll Run

- **Key Fields**: `payroll_run_id`, `pay_period_start`, `pay_period_end`, `pay_date`, `payroll_type` (regular, off_cycle, bonus, correction), `status` (draft, calculated, reviewed, approved, posted, voided), `total_gross`, `total_net`, `total_employer_taxes`, `total_deductions`, `entity_id`
- **Relationships**: Contains many pay stubs. Posts to GL via journal entry. Links to fiscal period.

### Pay Stub / Payslip

- **Key Fields**: `paystub_id`, `employee_id`, `payroll_run_id`, `gross_pay`, `net_pay`, `federal_tax`, `state_tax`, `local_tax`, `social_security`, `medicare`, `pre_tax_deductions`, `post_tax_deductions`, `employer_contributions`, `hours_worked`, `overtime_hours`, `pto_hours_used`, `ytd_gross`, `ytd_taxes`, `ytd_deductions`
- **Relationships**: Links to employee and payroll run. Line items break down each earning and deduction.

### Time Record

- **Key Fields**: `time_record_id`, `employee_id`, `date`, `clock_in`, `clock_out`, `total_hours`, `regular_hours`, `overtime_hours`, `pay_code` (regular, overtime, double_time, holiday, pto, sick), `project_id`, `task_id`, `status` (submitted, approved, rejected), `approved_by`
- **Relationships**: Links to employee, project, payroll. Aggregated for pay calculation.

### Leave Balance / Leave Request

- **Key Fields (Balance)**: `employee_id`, `leave_type` (vacation, sick, personal, parental, bereavement, jury_duty, fmla), `accrual_rate`, `accrual_frequency`, `current_balance`, `max_carryover`, `ytd_used`, `ytd_accrued`
- **Key Fields (Request)**: `request_id`, `employee_id`, `leave_type`, `start_date`, `end_date`, `hours_requested`, `status` (pending, approved, denied, cancelled), `approver_id`, `notes`
- **Relationships**: Balance links to accrual policy. Requests debit from balance upon approval. Approved leave appears on timesheets.

### Job Requisition

- **Key Fields**: `requisition_id`, `position_id`, `hiring_manager_id`, `department_id`, `job_title`, `job_description`, `required_skills`, `employment_type`, `salary_range_min`, `salary_range_max`, `status` (draft, open, on_hold, filled, cancelled), `target_start_date`, `headcount`, `posting_channels`
- **Relationships**: Links to position. Generates job postings. Receives applications.

### Applicant / Candidate

- **Key Fields**: `applicant_id`, `first_name`, `last_name`, `email`, `phone`, `resume_url`, `source` (job_board, referral, agency, internal, careers_page), `requisition_id`, `stage` (applied, screening, phone_interview, onsite_interview, offer, hired, rejected), `recruiter_id`, `interview_scores`, `offer_details`
- **Relationships**: Links to requisition. Converts to employee upon hire.

### Performance Review

- **Key Fields**: `review_id`, `employee_id`, `reviewer_id`, `review_period_start`, `review_period_end`, `review_type` (annual, mid_year, probationary, project), `overall_rating`, `rating_scale`, `goals_achieved`, `competency_ratings`, `development_plan`, `status` (draft, self_review, manager_review, calibration, completed, acknowledged)
- **Relationships**: Links to employee and reviewer. References goals/objectives. Feeds compensation decisions and succession planning.

## Core Business Processes

### Hire-to-Retire Lifecycle

1. **Requisition & Posting** -- Hiring manager creates requisition tied to a budgeted position. HR approves. Post to internal/external channels (ATS integration).
2. **Recruiting & Selection** -- Screen resumes, conduct interviews, score candidates. Background check and reference check before offer.
3. **Offer & Acceptance** -- Generate offer letter with compensation, benefits summary, start date. Track acceptance/negotiation.
4. **Onboarding** -- Create employee record. Assign equipment, access, workspace. Complete I-9 (within 3 days of start), W-4, state tax forms, direct deposit. Enroll in benefits (within 30-day window). Assign training. Set probationary period goals.
5. **Active Employment** -- Ongoing: time tracking, performance management, compensation changes, transfers, promotions.
6. **Separation** -- Voluntary (resignation) or involuntary (termination, layoff, retirement). Exit interview. Final pay calculation (including PTO payout per policy/state law). Benefits continuation (COBRA notification within 14 days). System access revocation. Equipment return.

### Payroll Processing

1. **Time Collection** -- Aggregate approved timesheets for pay period. Validate against schedules and leave records. Flag missing or anomalous entries.
2. **Earnings Calculation** -- Base pay (salary / pay periods, or hours * rate). Overtime (1.5x or 2x for hours > 40/week for non-exempt per FLSA). Shift differentials. Commissions. Bonuses. Retroactive adjustments.
3. **Pre-Tax Deductions** -- 401(k) contributions, HSA/FSA, health insurance premiums, transit benefits. Apply annual limits ($23,500 for 401k in 2025, $4,300 for HSA individual).
4. **Tax Withholding** -- Federal (based on W-4, filing status, pay frequency using IRS Publication 15-T tables). State (varies; some states have no income tax). Local/city (where applicable). Social Security (6.2% up to wage base $176,100 for 2025). Medicare (1.45%, plus 0.9% additional over $200K). FUTA/SUTA (employer-side).
5. **Post-Tax Deductions** -- Roth 401(k), garnishments (child support, tax levy, student loans -- priority order matters), union dues, charitable contributions.
6. **Employer Contributions** -- Employer match (401k), employer share of health premiums, FICA match, FUTA, SUTA, workers' comp.
7. **Net Pay Calculation** -- Gross - pre-tax deductions - taxes - post-tax deductions = net pay.
8. **Review & Approval** -- Payroll register review. Compare to prior period. Investigate variances > threshold. Manager/controller sign-off.
9. **Payment** -- Direct deposit (ACH files submitted 1-2 days before pay date). Check printing for exceptions. Pay stub distribution.
10. **GL Posting** -- Journal entry: debit salary expense, payroll tax expense by department/cost center. Credit payroll liability, tax liability, benefit payable. Post to finance system.
11. **Tax Filing & Remittance** -- Federal: 941 quarterly, annual W-2/W-3. State: quarterly returns, annual reconciliation. Deposit schedules: semi-weekly or monthly based on lookback period liability.

### Benefits Administration

- **Open Enrollment** -- Annual window (typically 2-4 weeks in Q4). Employees review and select plans for upcoming year. Defaults: carry forward current elections if no action (passive enrollment) vs. require active election.
- **New Hire Enrollment** -- 30-day window from hire date. Automatic eligibility based on employment type and hours threshold (typically 30 hours/week for ACA).
- **Qualifying Life Events (QLE)** -- Marriage, divorce, birth/adoption, loss of other coverage, relocation. Triggers special enrollment period (30-60 days). Must provide documentation.
- **ACA Compliance** -- Track variable-hour employees across measurement periods (standard: 12 months). Offer affordable coverage (employee cost < 9.12% of household income for 2025) to those averaging 30+ hours. File 1095-C for each full-time employee. File 1094-C as transmittal.
- **COBRA Administration** -- Qualifying events: termination, reduction in hours, divorce, dependent aging out. Notification within 14 days. Coverage up to 18 months (36 for certain events). Employee pays full premium + 2% admin fee.

### Performance Management Cycle

1. **Goal Setting** (Q1) -- Employee and manager set 3-5 SMART goals aligned to department/company objectives. Weight goals by importance.
2. **Mid-Year Check-In** (Q2-Q3) -- Progress review. Adjust goals if business priorities shift. Document feedback.
3. **Self-Assessment** (Q4) -- Employee rates performance against goals. Provides evidence and commentary.
4. **Manager Assessment** (Q4) -- Manager rates employee. Adds calibration input from peers, skip-level, or 360 feedback.
5. **Calibration** (Q4/Q1) -- HR facilitates cross-team calibration sessions to normalize ratings. Force-ranking or distribution curves if policy requires.
6. **Final Review & Acknowledgment** -- Manager delivers review. Employee acknowledges (not necessarily agrees). Document development plan.
7. **Compensation Link** -- Review ratings feed merit increase matrix: exceeds expectations = 4-6%, meets = 2-4%, below = 0%. Promotion adjustments separate from merit.

### Leave Management

- **Accrual** -- PTO accrues per pay period based on tenure. Example: 0-2 years = 15 days, 3-5 years = 20 days, 5+ = 25 days. Calculate: annual entitlement / pay periods.
- **Request & Approval** -- Employee submits request. Manager approves/denies considering coverage. Calendar view for team visibility.
- **FMLA** -- 12 weeks unpaid leave in 12-month period for qualifying reasons (serious health condition, newborn/adoption, family member care, military family). Eligible: 12 months employment, 1,250 hours worked, 50+ employees within 75 miles. Intermittent leave tracking in hourly increments.
- **Paid Parental Leave** -- Varies by employer policy. Track separately from FMLA where both apply concurrently.
- **Carryover** -- Policies: use-it-or-lose-it, capped carryover (e.g., max 40 hours), unlimited carryover but capped accrual, or unlimited PTO (track for compliance, not balance).

## Regulatory & Compliance

| Requirement | Scope | What to Track |
|---|---|---|
| **FLSA (Fair Labor Standards Act)** | US employees | Exempt vs. non-exempt classification. Minimum wage ($7.25 federal; state/local may be higher). Overtime (1.5x after 40 hours/week). Record-keeping: hours worked, pay rate, earnings for 3 years. |
| **FMLA (Family Medical Leave Act)** | Employers with 50+ employees | Eligibility, leave tracking, job protection, benefits continuation during leave. |
| **ACA (Affordable Care Act)** | Employers with 50+ FTE | Full-time determination (30 hrs/week), offer of coverage, affordability test, 1094-C/1095-C reporting. |
| **EEO / OFCCP** | All employers / federal contractors | Track race, gender, ethnicity, veteran status, disability (voluntary self-ID). EEO-1 report annually. Affirmative action plans for contractors. |
| **ADA (Americans with Disabilities Act)** | Employers with 15+ employees | Reasonable accommodation process. Interactive dialogue tracking. |
| **I-9 / E-Verify** | All US hires | Complete within 3 business days of start. Reverification for expiring work authorization. Retain for 3 years after hire or 1 year after termination, whichever is later. |
| **COBRA** | Employers with 20+ employees | Qualifying event notification, election tracking, premium collection, termination of coverage. |
| **State-Specific Laws** | Varies by state | Paid sick leave, pay transparency, ban-the-box, non-compete restrictions, final pay timing (some states: same day). |
| **GDPR / Data Privacy** | Employees in EU/EEA | Lawful basis for processing employee data. Right to access, rectification, erasure. Data processing agreements. Cross-border transfer restrictions. |
| **Workers' Compensation** | All employers | Classification codes, experience modification rate, injury reporting (OSHA 300 log), return-to-work tracking. |
| **Wage & Hour Records** | All employers | Retain payroll records 3 years (FLSA). Retain time records 2 years. State requirements may be longer. |

## Common Configuration Patterns

- **Org Hierarchy**: Company > Division > Department > Team. Typically 3-5 levels. Drives approval routing, reporting roll-ups, and cost allocation. Use effective-dated changes to maintain history.
- **Job Architecture**: Job Family > Job Subfamily > Job Code > Job Title. Example: Technology > Engineering > SWE-3 > Senior Software Engineer. Standardize across the organization for compensation benchmarking.
- **Pay Grades & Bands**: Grade levels (e.g., G1-G12) with min/mid/max salary ranges. Compa-ratio = actual pay / midpoint. Target: 0.80-1.20. Geographic differentials as percentage adjustments.
- **Approval Chains**: Leave requests: direct manager. Expense reports: manager + finance if > threshold. Terminations: manager + HR + legal. Salary changes: manager + HR + compensation committee if > 15%.
- **Employee ID Format**: Sequential numeric (EMP-000001) or structured (location-department-sequence). Never reuse IDs after termination.
- **Payroll Calendar**: Define pay periods, pay dates, cutoff dates, and processing dates for the year. Account for banking holidays. Biweekly payrolls have 26 periods (27 in some years -- handle the "extra paycheck" year).
- **Accrual Policies**: Define per leave type with tenure-based tiers. Configure accrual frequency (per pay period, monthly, annual front-load), max balance caps, carryover rules, and payout-on-termination rules (varies by state).

## Integration Points

| System | Direction | Data | Pattern |
|---|---|---|---|
| **Finance / GL** | Outbound | Payroll journal entries | Summary or detail journal per pay run. Map earning/deduction codes to GL accounts by department. |
| **Benefits Carriers** | Bidirectional | Enrollment files out, eligibility confirmations in | EDI 834 files or API. Carrier feeds for claims data. |
| **ATS (Applicant Tracking)** | Inbound | Hired candidate data | Candidate converts to employee on hire. Push requisition and position data to ATS. |
| **Learning Management (LMS)** | Bidirectional | Training assignments out, completions in | Compliance training tracking. Skill/certification updates. |
| **Time & Attendance Hardware** | Inbound | Clock in/out punches | Badge readers, biometric devices, mobile GPS clock. Real-time or batch import. |
| **Background Check Vendors** | Bidirectional | Check requests out, results in | API-based. SSN, consent, and scope details out. Pass/fail/pending status in. |
| **Tax Filing Services** | Outbound | Payroll data for tax deposits and filings | ADP, Paylocity, or direct: quarterly 941, annual W-2. State returns. |
| **Project Management** | Outbound | Employee assignments, availability, rates | Resource allocation. Billing rates by role. Utilization tracking. |
| **Identity / SSO** | Bidirectional | User provisioning/deprovisioning | New hire triggers account creation. Termination triggers access revocation within 24 hours. SCIM protocol. |
| **Org Chart / Directory** | Outbound | Employee, manager, department, title | Real-time sync for company directory, Slack profiles, email groups. |

## KPIs & Reporting

### Workforce Metrics

- **Headcount**: Active employees by department, location, type. Point-in-time and trend.
- **Turnover Rate**: (Separations / Average headcount) * 100. Track voluntary vs. involuntary. Monthly and rolling 12-month. Benchmark: <15% overall, <10% voluntary for knowledge workers.
- **Time to Fill**: Days from requisition open to offer acceptance. Benchmark: 30-45 days.
- **Time to Productivity**: Days from hire date to full productivity (measured by manager assessment or output metrics).
- **Cost per Hire**: (Internal recruiting cost + external recruiting cost) / hires. Include agency fees, job board spend, recruiter salary allocation.
- **Offer Acceptance Rate**: Offers accepted / offers extended. Target: >85%.

### Compensation & Benefits

- **Compa-Ratio Distribution**: Percentage of employees by compa-ratio band (<0.80, 0.80-0.90, 0.90-1.10, 1.10-1.20, >1.20).
- **Benefits Participation Rate**: Enrolled / eligible by plan type.
- **Total Cost of Workforce**: Salary + benefits + taxes + training + recruiting per employee. Benchmark against industry.
- **Payroll as % of Revenue**: Total payroll cost / revenue. Varies widely by industry (20-80%).

### Compliance

- **I-9 Compliance Rate**: Percentage of employees with valid, timely I-9 on file.
- **Training Completion Rate**: Required compliance training completed on time.
- **FMLA Utilization**: Leaves taken, duration, intermittent vs. continuous.
- **EEO Representation**: Demographic breakdown by job level and department.

### Operational

- **Absenteeism Rate**: Unplanned absence hours / scheduled hours. Target: <3%.
- **Overtime Percentage**: Overtime hours / total hours. Flag departments consistently > 10%.
- **Employee Satisfaction / eNPS**: Survey-based. Employee Net Promoter Score. Target: >30.

## Checklist

- [ ] Design employee master data model with effective-dated fields for job, compensation, and department changes
- [ ] Implement position management with budgeted vs. filled tracking
- [ ] Build org hierarchy with support for matrix reporting (dotted-line) if needed
- [ ] Configure payroll calculation engine: gross-to-net with all earning types, deductions, and taxes
- [ ] Set up tax withholding tables (federal, state, local) with annual update process
- [ ] Implement benefit plan configuration with eligibility rules and enrollment windows
- [ ] Build open enrollment workflow with plan comparison and dependent management
- [ ] Configure leave accrual policies by leave type and tenure
- [ ] Build leave request and approval workflow with calendar visibility
- [ ] Set up time and attendance capture with overtime calculation rules
- [ ] Implement recruiting pipeline: requisition > posting > application > screening > interview > offer > hire
- [ ] Build performance review cycle with self-assessment, manager assessment, and calibration
- [ ] Configure approval workflows for hiring, terminations, compensation changes, and leave
- [ ] Encrypt PII fields (SSN, date of birth, bank account) at field level
- [ ] Implement role-based access: HR full access, managers see direct reports only, employees see own records
- [ ] Set up I-9 tracking with reverification alerts
- [ ] Configure ACA tracking for variable-hour employees
- [ ] Build FMLA eligibility check and leave tracking
- [ ] Set up payroll journal posting to GL with account mapping
- [ ] Implement employee self-service portal for pay stubs, benefits, time entry, and personal info updates

## Related

- [Finance & Accounting](finance-accounting.md) -- payroll journals, benefits accruals, headcount-driven budgeting
- [Project Operations](project-operations.md) -- resource management, utilization, billable time tracking
- [Customer Support](customer-support.md) -- agent staffing, scheduling, workforce management
