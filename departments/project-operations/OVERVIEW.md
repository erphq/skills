---
name: project-operations
description: This skill should be used when the task involves professional services automation, project lifecycle, resource management, time and expense, project billing, and portfolio management.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: project-operations
  type: department-overview
  scope: internal
---
# Project Operations

## Purpose

This domain covers the delivery of project-based work: planning and executing projects, staffing them with the right people, tracking time and expenses, billing clients, recognizing revenue, and managing a portfolio of projects. A builder works in this space when the application must support professional services firms, IT services, consulting, engineering firms, agencies, or any organization that delivers project-based work for clients.

Project operations bridges sales and finance. A won opportunity becomes a project staffed with resources whose time is tracked, billed, and recognized as revenue. Every hour logged has three dimensions: the project (for client billing), the resource (for utilization), and the financial period (for revenue recognition). Getting these three dimensions aligned is the central challenge of building in this domain.

## Key Entities

### Project

- **Description**: The primary unit of work delivery. Represents a client engagement with defined scope, timeline, budget, and deliverables.
- **Key Fields**: `project_id`, `project_number`, `project_name`, `client_account_id`, `contract_id`, `project_manager_id`, `status` (proposed, approved, active, on_hold, completed, cancelled, archived), `project_type` (time_and_materials, fixed_price, retainer, milestone, cost_plus, internal), `start_date`, `end_date`, `budget_hours`, `budget_amount`, `billing_method`, `revenue_method`, `currency_code`, `department_id`, `practice_area`, `engagement_type` (advisory, implementation, managed_services, staff_augmentation)
- **Relationships**: Belongs to client account. Links to contract and sales opportunity. Contains WBS elements, tasks, resource assignments, time entries, expense entries, invoices, and budget lines.

### Work Breakdown Structure (WBS) / Phase

- **Description**: Hierarchical decomposition of project work into manageable phases, deliverables, and tasks.
- **Key Fields**: `wbs_id`, `project_id`, `parent_wbs_id`, `wbs_code`, `name`, `description`, `level`, `start_date`, `end_date`, `budget_hours`, `budget_amount`, `billable_flag`, `status` (not_started, in_progress, completed, cancelled), `percent_complete`, `milestone_flag`
- **Relationships**: Parent/child hierarchy within project. Contains tasks and resource assignments. Time entries are coded to WBS element.
- **Typical Structure**: Project > Phase (e.g., Discovery, Design, Build, Test, Deploy) > Deliverable > Task.

### Task

- **Key Fields**: `task_id`, `wbs_id`, `task_name`, `description`, `assigned_to`, `start_date`, `due_date`, `estimated_hours`, `actual_hours`, `status` (not_started, in_progress, completed, blocked, cancelled), `priority`, `predecessor_task_ids`, `dependency_type` (finish_to_start, start_to_start, finish_to_finish, start_to_finish), `lag_days`
- **Relationships**: Belongs to WBS element. Assigned to resource. Has time entries. Dependencies determine critical path.

### Resource

- **Description**: A person (employee or contractor) who can be assigned to project work. Extends the employee entity from HR with project-specific attributes.
- **Key Fields**: `resource_id`, `employee_id`, `resource_name`, `resource_type` (employee, contractor, subcontractor), `department_id`, `practice_area`, `role` (partner, director, manager, senior_consultant, consultant, analyst, developer, architect), `skills`, `certifications`, `location`, `cost_rate` (internal cost per hour), `bill_rate` (standard billing rate per hour), `target_utilization_pct`, `availability_hours_per_week`, `start_date`, `end_date`
- **Relationships**: Assigned to projects via resource assignments. Has time entries and expense entries. Links to HR employee record. Belongs to resource pool/practice.

### Resource Assignment

- **Key Fields**: `assignment_id`, `project_id`, `wbs_id`, `resource_id`, `role_on_project`, `start_date`, `end_date`, `allocated_hours_per_week`, `allocated_percentage`, `bill_rate_override`, `cost_rate_override`, `status` (proposed, soft_booked, hard_booked, active, completed), `booking_type` (named, generic)
- **Relationships**: Links resource to project/WBS. Drives resource capacity planning and utilization forecasting.

### Time Entry

- **Key Fields**: `time_entry_id`, `resource_id`, `project_id`, `wbs_id`, `task_id`, `date`, `hours`, `time_type` (billable, non_billable, internal, pto, admin, training, business_development), `description`, `status` (draft, submitted, approved, rejected, billed, posted), `approver_id`, `bill_rate`, `cost_rate`, `billable_amount`, `cost_amount`
- **Relationships**: Links resource, project, and WBS element. Feeds billing (invoice generation), revenue recognition, project cost tracking, and utilization reporting.
- **Design Notes**: Daily or weekly entry. Weekly timesheet grid (rows = projects/tasks, columns = days) is the most common UX. Require minimum 8 hours/day logged (configurable). Restrict entry to assigned projects only or allow all.

### Expense Entry

- **Key Fields**: `expense_id`, `resource_id`, `project_id`, `wbs_id`, `date`, `expense_category` (travel, meals, lodging, transportation, supplies, subscriptions, client_entertainment, other), `amount`, `currency_code`, `receipt_url`, `description`, `status` (draft, submitted, approved, rejected, billed, reimbursed), `billable_flag`, `markup_pct`, `approver_id`, `reimbursement_method` (payroll, expense_report, credit_card)
- **Relationships**: Links resource to project. Feeds billing (pass-through or marked-up) and reimbursement processing.

### Project Invoice

- **Key Fields**: `invoice_id`, `invoice_number`, `project_id`, `client_account_id`, `invoice_date`, `due_date`, `status` (draft, pending_review, approved, sent, partially_paid, paid, disputed, written_off), `total_amount`, `tax_amount`, `currency_code`, `billing_period_start`, `billing_period_end`, `payment_terms`
- **Lines**: Time charges (hours * bill rate), expense charges, fixed fee installments, milestone charges, retainer draws. Each line links to source time/expense entries.
- **Relationships**: Links to project, client, contract. Feeds AR in finance.

### Budget Line

- **Key Fields**: `budget_line_id`, `project_id`, `wbs_id`, `budget_type` (labor, expense, subcontractor, materials, contingency), `role`, `planned_hours`, `planned_rate`, `planned_amount`, `actual_hours`, `actual_amount`, `eac_hours` (estimate at completion), `eac_amount`, `variance_hours`, `variance_amount`
- **Relationships**: Links to project/WBS. Compared against actuals for budget tracking.

### Portfolio

- **Key Fields**: `portfolio_id`, `portfolio_name`, `owner_id`, `strategy_alignment`, `status` (active, inactive), `budget_total`, `budget_consumed`
- **Relationships**: Contains many projects. Used for executive-level prioritization, resource allocation across projects, and strategic alignment tracking.

## Core Business Processes

### Project Lifecycle

#### 1. Initiation / Presales

- Opportunity won in CRM triggers project creation (or project is created during presales for scoping).
- Define project charter: objectives, scope, assumptions, constraints, stakeholders.
- Create preliminary WBS and high-level estimate. Estimation methods: analogous (past similar projects), parametric (hours per deliverable type), bottom-up (detailed task estimation), three-point (optimistic + 4*likely + pessimistic / 6).
- Determine billing model (T&M, fixed price, milestone, retainer) based on contract.
- Assign project manager. Set up project in system.

#### 2. Planning

- Decompose WBS to task level. Define dependencies and critical path.
- Resource planning: identify required roles and skills. Submit resource requests to resource management. Negotiate assignments (see resource management below).
- Build detailed budget: labor (hours * rate by role), expenses (travel estimate, tools), subcontractors, contingency (typically 5-15% of total).
- Define project schedule with milestones. Gantt chart or timeline view.
- Risk register: identify risks, probability, impact, mitigation strategy, owner.
- Communication plan: status cadence, stakeholder matrix (RACI), reporting requirements.
- Kick-off meeting with client and internal team.

#### 3. Execution

- Team executes tasks. Update task status and percent complete.
- Weekly time entry against project/WBS/task codes.
- Expense reporting for project-related costs.
- Regular status meetings (internal: weekly, client: weekly or biweekly).
- Change management: scope change requests with impact assessment (hours, cost, timeline). Client approval required. Update budget and schedule accordingly.
- Issue tracking and resolution.

#### 4. Monitoring & Control

- **Budget Tracking**: Compare actuals vs. budget. Track EAC (estimate at completion) and ETC (estimate to complete). Variance analysis.
- **Earned Value Management (EVM)**: PV (planned value), EV (earned value), AC (actual cost). CPI (cost performance index) = EV/AC. SPI (schedule performance index) = EV/PV. CPI < 1.0 = over budget. SPI < 1.0 = behind schedule.
- **Status Reporting**: RAG status (Red/Amber/Green) on scope, schedule, budget, quality, risk. Executive summary dashboard. Detailed project status report for stakeholders.
- **Billing Review**: Monthly review of unbilled time, WIP, and billing targets. Ensure time entries are approved and billable hours are coded correctly.
- **Scope Creep Monitoring**: Track hours consumed vs. budgeted by WBS. Flag WBS elements approaching or exceeding budget.

#### 5. Closure

- Deliverable acceptance: client sign-off on all deliverables.
- Final billing: bill remaining unbilled time and expenses. Process any holdback or retention releases.
- Revenue recognition: finalize revenue recognition entries. Clear WIP balance.
- Lessons learned: retrospective with team. Document what worked, what to improve.
- Resource release: de-assign resources. Update availability.
- Archive project. Close in system. Retain records per retention policy.

### Resource Management

#### Staffing Process

1. **Demand Capture** -- Project manager submits resource request: role, skills needed, start/end date, hours per week, location (on-site/remote), named person preference if any.
2. **Supply Search** -- Resource manager searches available resources by skills, availability, location, cost rate. Check bench (unassigned resources) first. Then check ending assignments.
3. **Skills Matching** -- Match required skills and certifications to resource profiles. Consider experience level, client industry experience, and past performance ratings.
4. **Conflict Resolution** -- Handle competing requests. Prioritization: revenue at risk > strategic client > utilization targets > individual development goals.
5. **Booking** -- Soft book (tentative) during proposal phase. Hard book (confirmed) when project approved. Generic booking (role placeholder) when specific person TBD.
6. **Confirmation** -- Resource manager confirms assignment. Resource and project manager notified. Update resource calendar and project plan.

#### Utilization Management

- **Target Utilization**: Percentage of available hours that should be billable. Varies by role: consultant 75-85%, manager 65-75%, director 50-60%, partner 30-40%. Support staff: 0% billable.
- **Available Hours**: Total working hours - PTO - holidays - admin time - training. Typically 1,800-2,000 hours/year or 37.5-40 hours/week.
- **Utilization Calculation**: Billable hours / available hours * 100. Track actual vs. target weekly and monthly.
- **Bench Management**: Resources without project assignments. Track bench duration and cost. Actions: accelerate project starts, propose new work to existing clients, internal project assignments, training, assist presales, or reduction in force if chronic.

### Time & Expense Processing

#### Time Entry

- **Frequency**: Daily entry recommended for accuracy. Weekly submission required. Submission deadline: Monday for prior week (or per policy).
- **Approval**: Manager or project manager approves. Dual approval available (project manager for project accuracy + line manager for HR compliance).
- **Corrections**: Submitted time can be recalled and corrected before approval. Approved time requires adjustment entry (original + correction). Billed time adjustments affect next invoice as credit/debit.
- **Validation Rules**: No future dates. Maximum hours per day (e.g., 16). Minimum total hours per week (40). Project assignment required. WBS element required. Description required for certain time types.

#### Expense Processing

- **Receipt Requirement**: Receipt required above threshold (typically $25). Photo capture for mobile submission.
- **Policy Enforcement**: Per diem rates by location. Maximum amounts by category (e.g., meals $75/day, hotel $250/night). Non-compliant expenses flagged for review.
- **Approval**: Manager or project manager approves. Finance review for high-value or out-of-policy items.
- **Billing**: Billable expenses passed through to client at cost or with markup (typical: 10-15%). Non-billable absorbed by the firm.
- **Reimbursement**: Via payroll (next pay cycle) or separate expense reimbursement run.

### Project Billing

#### Time & Materials (T&M)

- Bill actual hours at agreed bill rates. Bill actual expenses at cost or with markup.
- Monthly billing cycle: compile approved time and expenses for billing period. Generate draft invoice. Project manager reviews for write-downs or adjustments. Final invoice to client.
- **Rate Cards**: Standard rates by role. Client-specific negotiated rates. Overtime rates. Blended rates for fixed teams.
- **Not-to-Exceed (NTE)**: T&M with a cap. Track cumulative billing vs. NTE amount. Alert at 80% consumption.

#### Fixed Price

- Bill per agreed payment schedule: common patterns are monthly installments, phase completion, or milestone achievement.
- Revenue recognition decoupled from billing (see project accounting below).
- **Milestone Billing**: Define milestones with deliverables, acceptance criteria, and associated billing amount. Client accepts deliverable, triggering invoice.
- **Progress Billing**: Bill based on percentage of completion. Certified by project manager monthly.

#### Retainer

- Fixed monthly fee for agreed scope of work or hours. Unused hours: expire (use-it-or-lose-it), roll over (with cap), or credit.
- Track utilization against retainer allocation. Overage billed at standard or discounted rates.
- Monthly true-up: compare consumed vs. retainer amount.

#### Mixed / Hybrid

- Some phases T&M (e.g., discovery), others fixed price (e.g., build). Each WBS element has its own billing method.

### Project Accounting

#### Work in Progress (WIP)

- **WIP Accrual**: For T&M: approved but unbilled time and expenses. For fixed price: incurred cost not yet recognized as revenue.
- **WIP Tracking**: WIP balance = cost incurred - cost recognized. Healthy WIP trends downward as billing catches up. Stale WIP (>60 days unbilled) requires investigation: billing delay, write-off pending, or scope dispute.
- **WIP Adjustments**: Write-downs (reduce WIP when billability is unlikely). Write-offs (remove WIP entirely). Both require project manager justification and finance approval.

#### Revenue Recognition

- **T&M Projects**: Revenue recognized when time/expense is approved and billable. Revenue = billable hours * bill rate + billable expenses. Matches billing closely.
- **Fixed Price Projects**: Revenue recognized based on progress. Methods:
  - **Percentage of Completion (PoC)**: Revenue = total contract value * (actual cost incurred / estimated total cost). Requires reliable EAC. Most common for services.
  - **Milestone Method**: Revenue recognized upon milestone achievement and client acceptance. Used when outcomes are uncertain.
  - **Completed Contract**: All revenue recognized at project completion. Rare; used when outcome is highly uncertain.
- **ASC 606 Alignment**: Identify contract > identify performance obligations > determine transaction price > allocate to obligations > recognize when/as satisfied. For professional services: typically satisfied over time (PoC) when client simultaneously receives and consumes benefits.
- **Loss Provisions**: If EAC exceeds contract value, recognize full expected loss immediately. Create loss provision.

#### Budget vs. Actuals

- **Labor Variance**: (Budgeted hours * budgeted rate) - (actual hours * actual rate). Decompose into: rate variance (rate difference * actual hours) and efficiency variance (hours difference * budgeted rate).
- **Expense Variance**: Budgeted expense - actual expense by category.
- **Margin Analysis**: Revenue - cost = margin. Track at project, WBS, and portfolio level. Target margin varies by engagement type (advisory 50-60%, implementation 30-40%, staff aug 20-30%).

### Portfolio Management

- **Project Prioritization**: Score projects on strategic alignment, financial return (NPV, IRR, margin), resource requirements, risk, and client importance. Stack-rank for resource allocation.
- **Capacity Planning**: Aggregate demand across all projects vs. available supply by role and skill. Identify gaps 2-3 months ahead. Actions: hire, contract, defer project start, reduce scope.
- **Portfolio Health Dashboard**: RAG status across all active projects. Aggregate metrics: total revenue, total margin, utilization, WIP, unbilled, overdue AR.
- **What-If Analysis**: Model impact of adding/removing projects on utilization, revenue, and resource allocation.

## Regulatory & Compliance

| Requirement | Scope | What to Track |
|---|---|---|
| **ASC 606 / IFRS 15** | Revenue recognition | Contract identification, performance obligations, transaction price, allocation, recognition pattern. |
| **Government Contracting (FAR/DFARS)** | US government projects | Timekeeping accuracy (monthly floor checks), cost allowability, incurred cost submissions, DCAA audit readiness. Separate direct vs. indirect costs. |
| **SOX** | Public companies | Time entry controls, approval workflows, revenue recognition process controls, WIP review. |
| **Data Privacy (GDPR/CCPA)** | Client data handling | Data processing agreements with clients. Employee consent for time tracking. Client data access controls. |
| **Professional Licensing** | Regulated professions | Track consultant certifications and licenses (CPA, PE, PMP). Ensure compliance with client requirements. |
| **Labor Laws** | Employee time tracking | Overtime for non-exempt staff (FLSA). Maximum working hours in EU jurisdictions. Rest period compliance. |
| **Tax Implications** | Multi-jurisdiction work | Permanent establishment risk for extended on-site work in foreign jurisdictions. State nexus for US multi-state assignments. |

## Common Configuration Patterns

- **Project Numbering**: Prefix by practice area or client. Format: practice-client-year-sequence (e.g., ADV-ACME-2026-001). Auto-increment sequence.
- **WBS Template Library**: Standard WBS templates by engagement type. Discovery template (5 phases, 20 tasks). Implementation template (7 phases, 50 tasks). Clone template to new project and customize.
- **Role-Based Rate Cards**: Standard billing rates by role and grade. Client-specific rate cards as contract attachments. Override rates at assignment level for special pricing.
- **Approval Hierarchy**: Time: project manager or line manager. Expenses: line manager for employee reimbursement, project manager for project charging. Invoices: project manager + finance.
- **Billing Calendar**: Monthly billing cycle. Cutoff: last day of month. Draft invoice review: day 1-3. Final invoice: day 5. Client payment terms: Net 30 or Net 45.
- **Utilization Reporting Cadence**: Weekly flash report (current week actual). Monthly detailed report (trailing 3 months, forecast next 3 months). Quarterly business review (trends, bench analysis, hiring plan).
- **Revenue Recognition Schedule**: Monthly revenue recognition run. PoC recalculation based on updated EAC. Finance review and sign-off before GL posting.

## Integration Points

| System | Direction | Data | Pattern |
|---|---|---|---|
| **CRM / Sales** | Inbound | Won opportunities, SOWs, contract details | Opportunity-to-project conversion. Client account sync. Pipeline for revenue forecasting. |
| **Finance / GL** | Outbound | Revenue entries, WIP, cost journals, project invoices | Monthly revenue recognition journal. WIP balance reporting. Invoice posting to AR. |
| **HR / Payroll** | Bidirectional | Employee data, availability, cost rates in; billable hours for payroll | Sync employee hire/term dates. Time data for overtime calculation. Cost rate updates. |
| **Resource Planning Tools** | Bidirectional | Demand requests, assignments, availability | If external resource management (Kantata, Replicon), sync demand and supply data. |
| **Collaboration / PM Tools** | Bidirectional | Tasks, status updates, documents | Jira, Asana, Monday sync for technical projects. Task completion triggers time tracking prompts. |
| **Expense Management** | Bidirectional | Expense entries, receipts, reimbursement status | If external (Concur, Expensify), push project codes, pull approved expenses for billing. |
| **Client Portal** | Outbound | Project status, invoices, deliverables, time reports | Client self-service: view project dashboard, approve milestones, download invoices, review time reports. |
| **Document Management** | Bidirectional | SOWs, deliverables, change orders | SharePoint, Google Drive, or built-in DMS. Version control on deliverables. |
| **Subcontractor Systems** | Inbound | Subcontractor time and expenses | Import subcontractor time for project costing and client billing (pass-through or marked up). |

## KPIs & Reporting

### Utilization

- **Billable Utilization**: Billable hours / available hours. By resource, role, practice, and firm-wide. Target: 75-80% for delivery staff.
- **Total Utilization**: All productive hours (billable + non-billable project work) / available hours. Target: 85-90%.
- **Bench Rate**: Resources on bench / total delivery headcount. Target: <10%.
- **Bench Cost**: Total bench cost (bench hours * avg cost rate) per month. Minimize.

### Project Performance

- **Margin by Project**: (Revenue - cost) / revenue * 100. Target varies by type. Trend over project life.
- **Budget Consumption**: Actual hours / budget hours * 100. By WBS and total. Flag at 80%.
- **Schedule Variance**: Planned completion date vs. forecast completion date. Days early/late.
- **Scope Change Impact**: Change order count, total hours added, total revenue added. Track scope creep.
- **Realization Rate**: Billed amount / standard amount (hours * standard rate). Captures write-downs and discounting.

### Financial

- **Revenue**: Recognized revenue by project, practice, client. Monthly, quarterly, annual.
- **Backlog**: Contracted but not yet recognized revenue. Forward visibility indicator.
- **WIP Balance**: Unbilled/unrecognized costs. Aging analysis. Target: <30 days average age.
- **DSO**: Days sales outstanding for project invoices. Target: <45 days.
- **Revenue per Employee**: Total revenue / delivery headcount. Benchmark for firm productivity.

### Client Satisfaction

- **NPS / CSAT**: Post-project or periodic client satisfaction surveys. Target NPS: >50.
- **Repeat Business Rate**: Revenue from existing clients / total revenue. Target: >60%.
- **Reference-ability**: Percentage of clients willing to serve as references.

## Checklist

- [ ] Design project data model with WBS hierarchy, task management, and dependency tracking
- [ ] Build project templates by engagement type with pre-defined WBS, tasks, and milestones
- [ ] Configure resource profiles with skills, certifications, rates, and availability
- [ ] Implement resource request and staffing workflow (demand > search > book > confirm)
- [ ] Build weekly timesheet entry with project/WBS/task coding and validation rules
- [ ] Implement time approval workflow (project manager and/or line manager)
- [ ] Configure expense entry with category, receipt capture, policy validation, and billability
- [ ] Build project billing engine supporting T&M, fixed price, milestone, and retainer models
- [ ] Implement invoice generation with draft review, adjustment, and approval workflow
- [ ] Configure revenue recognition methods (T&M recognition, percentage of completion, milestone)
- [ ] Build WIP tracking and aging reports
- [ ] Implement budget vs. actuals reporting with EAC/ETC and earned value metrics
- [ ] Set up utilization reporting by resource, role, practice, and firm-wide
- [ ] Build resource capacity planning view (demand vs. supply by role, 3-month forward)
- [ ] Configure project status reporting with RAG indicators and executive dashboards
- [ ] Implement change order workflow with scope, hours, and cost impact assessment
- [ ] Build portfolio dashboard with aggregate project health, revenue, margin, and utilization
- [ ] Set up project accounting journal entries posting to GL
- [ ] Configure role-based access: project managers see their projects, resource managers see all resources, finance sees all financials, consultants see assigned projects only
- [ ] Build client portal for project status, milestone approval, and invoice access

## Related

- [Finance & Accounting](../finance-accounting/OVERVIEW.md) -- project revenue recognition, WIP accounting, AR for project invoices
- [Human Resources](../human-resources/OVERVIEW.md) -- employee data, availability, payroll integration for billable hours
- [Sales & CRM](../sales-crm/OVERVIEW.md) -- opportunity-to-project conversion, client account management, services pipeline
