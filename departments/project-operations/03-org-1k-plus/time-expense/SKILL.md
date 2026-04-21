---
name: time-expense
description: This skill should be used when the task involves how to capture timesheets, approve hours, submit expense reports, manage receipts, and enforce company policies.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - psa
  type: skill
  scope: internal
---
# Time & Expense Management

## What This Process Does

Time and expense management is the lifeblood of any professional services firm. Every billable hour that goes unrecorded is revenue lost forever. Every expense that goes unsubmitted is money left on the table. Every late timesheet means your billing is delayed and your cash flow suffers.

This process covers timesheet entry (logging what hours were spent on what project), approval workflows (managers reviewing and approving submitted time), expense reports (capturing business costs like travel, meals, and supplies), receipt management (attaching proof of spend), and policy enforcement (making sure people follow the rules about what is billable, what is expensable, and what needs extra approval).

Think of it like a cash register in a store. If the cashier does not ring up a sale, the store does not get paid. If they ring it up wrong, the books are off. Timesheets are your cash register. Expense reports are your receipt drawer. And policy enforcement is the price list everyone needs to follow.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Timesheet**, **Expense Claim**, and **HR Module** apps in the catalog. The Timesheet doctype supports project-based time logging with approval workflows. The Expense Claim doctype handles receipt attachments, category-based limits, and multi-level approvals. Deploy the professional services template if available, as it comes pre-configured with billable vs. non-billable categories and project-linked time entries.

Also look for **Expense Policy** and **Timesheet Policy** templates that define approval thresholds, submission deadlines, and category limits.

## Build — Setting It Up

### With Agents

AI agents eliminate the most painful parts of time and expense management:

- **Smart time capture**: The agent monitors your calendar, email, and project tools to suggest time entries. "You had a 2-hour meeting with Client X on Tuesday — should I log that to Project Alpha?" Instead of staring at a blank timesheet on Friday afternoon trying to remember the week, you review and confirm pre-populated entries.
- **Receipt processing**: Snap a photo of a receipt. The agent reads it using OCR, extracts the vendor, amount, date, and category, creates the expense line item, and attaches the image. No manual data entry.
- **Policy enforcement in real time**: The agent checks each entry against company policy as it is submitted. Logging time to a project that has been closed? Flagged. Expense claim for a first-class flight when policy says economy? Flagged. Over the daily meal limit? Flagged. Issues are caught before the approver sees them.
- **Missing timesheet reminders**: The agent sends personalized reminders to people who have not submitted their time. Not a generic email — a message that says "You have 24 hours logged this week but your target is 40. You are missing entries for Monday and Wednesday."
- **Approval acceleration**: The agent pre-reviews submissions for policy compliance and common errors, presenting the approver with a clean summary and flagging only the items that need human judgment.

### Key Decisions

**Time entry granularity**: Do people log time in 15-minute increments, 30-minute increments, or hourly? Finer granularity gives better data but creates more burden. Most firms use 15 or 30-minute increments for billable time.

**Billable categories**: Define the categories people log against — billable client work, non-billable client work (like pre-sales), internal projects, training, admin, PTO. Keep the list under 10 categories or people will pick wrong ones.

**Submission frequency**: Daily, weekly, or bi-weekly? Weekly is the standard for most firms. Daily is better for data accuracy but creates fatigue. Bi-weekly means two weeks of memories to reconstruct, which produces garbage data.

**Approval hierarchy**: Who approves time — the project manager, the line manager, or both? Single approval is faster. Dual approval catches more errors but slows the process. Most firms use project manager approval for billable time and line manager for non-billable.

**Expense policy specifics**: Define per diem rates, mileage reimbursement, meal limits, airfare class, hotel star ratings, and entertainment pre-approval thresholds. Be specific. "Reasonable expenses" means different things to different people.

**Receipt requirements**: What is the minimum amount requiring a receipt? Common thresholds are $25 or $50. For amounts below the threshold, do you require anything? Some firms require nothing, others require a written description.

### Common Mistakes

- **Making timesheets painful**: If it takes more than 5 minutes to submit a weekly timesheet, your process is too complicated. People will avoid it, submit late, or guess. Optimize for speed.
- **Too many project codes**: When the timesheet dropdown has 200 options, people pick the wrong one or just use the first project they recognize. Show only relevant projects based on the person's active assignments.
- **Approvals as rubber stamps**: If approvers just click "approve all" without reviewing, you are wasting everyone's time. Either make approval meaningful or remove it and rely on automated policy checks.
- **No enforcement of deadlines**: If late timesheets have no consequences, they will always be late. Some firms lock timesheets after the submission deadline, require manager escalation to unlock, or tie timely submission to performance reviews.
- **Ignoring expense fraud patterns**: Small recurring claims that fly under approval thresholds can add up. The agent should watch for patterns like the same $49 claim every week from the same person when the review threshold is $50.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Key metrics to monitor:**
- **Timesheet compliance rate**: Percentage of people who submitted on time. Target 95% or higher. Anything below 90% means your process is broken.
- **Average time to approve**: How long do approvers take? If the average exceeds 2 business days, billing gets delayed. Track by approver to find bottlenecks.
- **Billable vs. non-billable ratio**: Firm-wide and by person. Are people logging too much to non-billable categories? This might mean projects are not set up correctly or people are doing unbilled work.
- **Expense claim cycle time**: From submission to reimbursement. People notice when it takes 3 weeks to get paid back. Target under 10 business days.
- **Policy exception rate**: How often are claims flagged for policy violations? A high rate means either the policy is unrealistic or people do not understand it.
- **Missing time**: Hours logged vs. expected hours. If someone logs 30 hours in a 40-hour week, where did the other 10 go?

**Alerts to set:**
- Timesheet not submitted by end of day Monday (for prior week)
- Approval pending for more than 2 business days
- Expense claim exceeding $5,000 (or your threshold) requires VP approval
- Person logging less than 70% of expected hours for 2 consecutive weeks
- Project code receiving time entries after its end date
- Duplicate expense submissions (same amount, same date, same vendor)

### Exception Handling

**Retroactive time entry**: Someone forgot to log time for 3 weeks ago. The agent pulls their calendar and project assignments for that period to help reconstruct accurate entries. Requires a manager override to allow backdated submission.

**Disputed approvals**: A project manager rejects time entries because the person was not productive. The agent facilitates by providing context — what tasks were assigned, what meetings occurred, what work products were delivered during that period.

**Receipt loss**: The expense report is ready but a receipt is missing. The agent helps locate it — checking email for digital receipts, credit card statements for verification, or flagging it for an affidavit of lost receipt per company policy.

**Reallocation requests**: A client dispute or project change requires moving already-approved time from one project to another. The agent handles the journal entry, maintains the audit trail, and ensures the original approval is preserved.

**International expenses**: Multiple currencies on one trip. The agent converts to the home currency using the correct exchange rate (company policy rate or market rate on date of expense), attaches the conversion documentation.

### Routine Tasks

**Daily**: Agent sends end-of-day reminders to log time if the day's entries are incomplete. Processes any submitted receipts via OCR.

**Weekly (Monday)**: Agent sends timesheet compliance report. Identifies anyone who has not submitted. Sends escalation to managers for repeat offenders.

**Weekly (Wednesday)**: Agent reviews pending approvals and sends reminders to approvers sitting on submissions for more than 2 business days.

**Monthly**: Agent generates time and expense analytics — utilization actuals, expense trends by category, policy exception summary. Sends to finance and practice leads.

**Quarterly**: Agent audits a random sample of approved expense reports for policy compliance. Flags any patterns of concern for management review.

## Scale — Growing It

### Adding Complexity

**Multi-country operations**: Different labor laws, different expense policies, different currencies, different tax treatment. You need country-specific policy rules and multi-currency expense handling. Per diem rates vary by city. VAT reclaim processes differ by jurisdiction.

**Subcontractor time**: Subcontractors submit time through your system but with different approval workflows and rate structures. Their time might need client approval in addition to your internal approval.

**Fixed-price project time**: People still need to log time on fixed-price projects even though you do not bill by the hour. This time is critical for profitability analysis and future estimation. Getting people to log time when "it does not affect billing" is a cultural challenge.

**Offline time entry**: Field consultants, construction site workers, or people in areas with poor connectivity need the ability to log time and expenses offline, with automatic sync when connected.

**Client-specific rules**: Some clients require specific time categories, cap certain expense types, or mandate prior approval for travel. Your system needs to enforce client-specific policies without creating a maintenance nightmare.

### Automation Opportunities

- **Calendar-based time suggestions**: Agent reads calendar events and proposes time entries for each day, learning your patterns over time.
- **Smart categorization**: Agent learns which project code to use based on the task description, the meeting attendees, and historical patterns.
- **Automated approval for routine items**: Low-risk, policy-compliant submissions get auto-approved. Human review only for exceptions.
- **Expense forecasting**: Agent predicts monthly expense volumes based on travel schedules and project plans, helping finance plan cash requirements.
- **Compliance scoring**: Each person gets a compliance score based on submission timeliness, accuracy, and policy adherence. High scorers get expedited approval. Low scorers get additional review.

### When to Redesign

- Timesheet compliance is consistently below 85%
- Average approval cycle exceeds 5 business days
- Finance is making billing adjustments on more than 10% of invoices due to time entry errors
- You have expanded to new countries and your expense policies do not account for local norms
- More than 20% of time entries are being reclassified after initial submission
- Employee satisfaction surveys consistently cite time and expense processes as a pain point

## By Industry

1. **Manufacturing**: Time tracking often needs to capture shop floor hours alongside consulting hours. Expense reports include specialized PPE and safety equipment. Shift-based work requires time entries that cross midnight boundaries.

2. **Healthcare**: HIPAA considerations apply to any time entries that reference patient-facing work. Clinical staff have complex schedules with on-call time, rounding time, and administrative time that all need different treatment.

3. **Education**: Faculty time is uniquely complex — teaching, research, advising, committee work, and grant-funded activities each need separate tracking for federal compliance. Effort reporting for sponsored research has specific rules.

4. **Retail**: Store-level implementations generate significant travel expenses across many small locations. Per diem policies need to account for suburban/rural store locations where costs differ from urban areas.

5. **Hospitality**: Consultants working at hotel properties may receive complimentary rooms and meals, which still need to be tracked as in-kind expenses for tax purposes and client billing transparency.

6. **Construction**: Field time tracking is challenging — muddy conditions, no desks, shared tablets. Mobile-first time entry is mandatory. Expense categories include tool allowances, fuel for site vehicles, and safety certifications.

7. **Real Estate**: Transaction-based work means time is often tracked against deals rather than traditional projects. Expenses include property inspection travel, which can be high-volume and repetitive across a portfolio.

8. **Agriculture**: Remote field locations mean offline-capable time and expense entry is essential. Expense patterns are highly seasonal, with heavy travel during planting and harvest assessment periods.

9. **Banking & Financial Services**: Regulatory audit requirements mean time records must be retained for 7 or more years. Segregation of duties in approval workflows is mandatory. Entertainment expense tracking has heightened scrutiny post-Dodd-Frank.

10. **Insurance**: Actuarial and claims consulting time needs precise categorization for regulatory cost allocation. Travel between regional offices and agent locations generates high-volume, low-dollar expense claims.

11. **Legal**: Time tracking is already deeply embedded in legal culture — lawyers live by the billable hour. The challenge is integrating legal-specific time (0.1-hour increments, matter-based billing) with your PSA system's project-based structure.

12. **Government**: DCAA compliance requires detailed timekeeping for government contracts. Expense policies must align with FAR/DFAR requirements. Unallowable costs must be segregated and tracked separately.

13. **Pharma**: Clinical trial expenses have complex allocation rules across studies and phases. Time on validated systems may require electronic signature compliance (21 CFR Part 11). Travel between lab and office sites is frequent.

14. **Automotive**: Travel to Tier 1 and Tier 2 supplier locations generates heavy expense volumes. Time tracking must capture warranty claim investigation hours separately for chargeback purposes.

15. **Telecom**: Network site visits generate mileage and per diem claims across wide geographic areas. Time entries must distinguish between capital project work (which is capitalized) and operating expense work.

16. **Media & Entertainment**: Production-related expenses have unique categories — talent costs, location fees, equipment rentals. Time tracking on creative projects often resists the structured approach professionals services demands.

17. **Energy & Utilities**: FERC regulatory accounting requires precise time allocation between regulated and unregulated activities. Field expenses include specialized safety equipment, helicopter transport to remote sites, and hazmat handling fees.

18. **Food & Beverage**: Facility audit visits generate standardized travel expense patterns. Time tracking must separate food safety compliance work from operational consulting for regulatory reporting.

19. **Logistics & Transport**: Consultants visiting warehouses and distribution centers across a network generate high-frequency, multi-city travel expenses. Per diem rates vary significantly across locations.

20. **Nonprofit**: Grant-funded work requires time tracking against specific grant codes for funder reporting. Expense policies are typically more restrictive than corporate settings — economy travel only, modest meal limits.

21. **SaaS / Technology**: Remote-first culture means fewer travel expenses but more subscription and tool expenses. Time tracking in agile environments may need to align with sprint structures rather than traditional weekly timesheets.

22. **Professional Services**: You are selling time, so time tracking accuracy directly impacts revenue. These firms usually have the most mature time and expense processes but also the most complex rules around billable categorization and write-offs.

23. **Defense & Aerospace**: DCAA-compliant timekeeping is mandatory on government contracts. Floor checks (random audits of who is working on what) must be supported by time records. Expense documentation requirements are the most stringent of any industry.

24. **Mining**: Remote site work means expenses include fly-in/fly-out travel, camp accommodations, and hazardous duty allowances. Time tracking must account for compressed work schedules (14 days on, 7 days off).

25. **Chemicals**: Hazmat training and certification costs are legitimate expenses. Time on environmental compliance work must be tracked separately for regulatory reporting. Plant turnaround projects have 24/7 scheduling.

26. **Textiles & Apparel**: Factory audit travel across multiple countries with different expense norms. Time tracking must capture trade show and buying event hours, which are often outside normal business hours.

27. **FMCG**: High-velocity travel to retail partner locations and distributor sites. Promotional event expenses need tracking against specific campaigns for ROI analysis.

28. **Electronics**: Lab and testing facility time needs separate tracking from desk work. Prototype and sample expenses are common and need proper capitalization treatment.

29. **Oil & Gas**: Offshore platform assignments generate unique expense categories — helicopter transport, survival training, offshore allowances. Time tracking on rotational schedules (28 days on, 28 days off) requires special configuration.

30. **Jewelry & Luxury**: High-value sample transport and insurance costs are unique expense categories. Time spent at exclusive client events blurs the line between business development and billable work — clear policy guidance is needed.

## By Company Size

### Startup (< 50 people)

You probably have one person handling finance who also manages timesheets and expenses. Keep it dead simple — a weekly timesheet with 5 to 10 project codes and a basic expense form with receipt upload. Do not build approval workflows yet. The founder or delivery lead reviews everything directly. Focus on getting people to submit on time, every time.

### SMB (50–500 people)

Formal approval workflows become necessary. You need a real expense policy document. Automate reminders for late submissions. This is where OCR receipt processing saves meaningful time — at 200 employees averaging 3 expense reports per month, that is 600 manual entries you can eliminate. Implement manager approval for time and expenses.

### Mid-Market (500–5,000 people)

Multi-level approval workflows, delegation rules (approve on behalf of someone on vacation), and automated policy enforcement. You need analytics to spot trends — expense inflation, timesheet gaming, approval bottlenecks. Integration with your accounting system for automated journal entries. Likely operating in multiple countries with different policies.

### Enterprise (5,000+ people)

Global expense policy framework with regional variations. Integration with corporate travel booking systems, corporate card programs, and ERP financials. Audit sampling programs. Predictive analytics for budget forecasting. AI-driven fraud detection. You are processing tens of thousands of timesheets and expense reports per month — manual review is impossible, so automation and exception-based management are the only path.

## ERP•AI & Proto

**ERP•AI**: The Timesheet and Expense Claim doctypes provide structured time and expense capture with built-in approval workflows. Integration with Projects ensures time is logged against the right work, and integration with Accounts means approved expenses flow directly into financials for reimbursement and billing.

**Proto**: Proto agents drive the ORAI cycle for time and expense — Observing calendar events, project assignments, and submitted entries; Reasoning about correct categorization, policy compliance, and missing entries; Acting by pre-populating timesheets, processing receipts, and routing approvals; and Iterating by learning individual patterns to make suggestions more accurate over time.
