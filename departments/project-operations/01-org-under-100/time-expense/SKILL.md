---
name: time-expense
description: This skill should be used when tracking time + expenses at an organization under 100 employees — typically Harvest, Toggl, Hubstaff, Clockify for time; Expensify, Ramp, Brex for expenses; PM-led approval workflow; integration with billing + payroll.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: project-operations
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Time & Expense — Under 100 People

## What This Process Does

Time + expense at this size is **the foundation of services-business unit economics — capturing who worked on what, what they spent, and turning it into invoices + payroll + analytics.** Time tracking via Harvest, Toggl, Hubstaff, Clockify (or PM-tool-native — Asana Time, Monday Time); expense tracking via Expensify, Ramp, Brex; PM-led approval workflows; sync to billing + payroll + accounting.

The work: **make tracking easy enough to actually happen, validate quickly, get to billing fast, and use the data to improve project + business decisions.** Mistakes: tracking-fatigue (people don't enter hours); approval-bottleneck (PM doesn't review); manual reconciliation (data scattered); no analytics (data captured but not used).

## Start Here: ERP•AI Templates

ERP•AI's **Small Business Time & Expense** template provides time entry (mobile + desktop + integration), expense capture with receipt scanning, approval workflows, project + client + activity coding, weekly/monthly reporting, and integration to billing + payroll. Pair with **Project Budget Tracking** for budget-vs-actual visibility.

## Build — Setting It Up

### With Agents

- **Friction-light time entry**: Mobile + browser + desktop + Slack/integrations. Daily prompts. Auto-suggest from calendar + recent entries.
- **Smart project + client coding**: Auto-detect from calendar event title, recent project assignment.
- **Receipt scanning + categorization**: Photo of receipt → expense entry; AI categorization.
- **Approval workflows**: Time to PM (weekly batch) or auto-approve below threshold; expenses to PM/manager.
- **Budget tracking**: Hours vs. budget per project; alert when 75%, 90%, 100%.
- **Utilization reporting**: Per person, per team, per period; billable vs. non-billable.
- **Realization tracking**: Billable hours actually billed; write-offs identified.
- **Sync to billing**: Approved time → invoice draft for time-and-materials clients.
- **Sync to payroll**: Approved time + expenses → payroll for hourly/contractor pay.
- **Sync to accounting**: Expenses → AP; client-billable expenses → AR pass-through.

### Key Decisions

1. **Time-tracking tool**:
   - **Harvest**: Popular for agencies + consultancies; strong project + client structure
   - **Toggl Track**: Modern UX; great mobile; team or individual
   - **Hubstaff**: Includes screenshots + activity tracking (controversial)
   - **Clockify**: Free tier substantial; team-friendly
   - **Everhour**: Integrates with Asana / Trello / ClickUp
   - **PM-tool-native**: Asana Time, Monday Time, ClickUp Time

2. **Expense-tracking tool**:
   - **Expensify**: Mature; receipt-scanning; QuickBooks integration
   - **Ramp**: Spend-management + virtual cards + receipts; modern + free
   - **Brex**: Similar to Ramp; corporate cards + spend mgmt
   - **Pleo**: European alternative
   - **Concur**: Enterprise-grade; usually overkill at this scale

3. **Time-entry granularity**:
   - **Daily entry**: Best practice; people remember accurately
   - **Weekly entry**: Common but less accurate
   - **Real-time entry**: Ideal but requires discipline (start/stop timers)
   - **Minimum block**: 15-minute or 30-minute blocks; sub-block tracking impractical

4. **Approval cadence**: Weekly batch most common; daily for tight-budget projects; auto-approve for trusted senior staff.

5. **Coding structure**:
   - **Client + Project**: Required
   - **Activity / Phase**: Optional but useful for analytics
   - **Billable / non-billable flag**: Essential
   - **Notes**: Required for billable; optional otherwise

6. **Expense categories**: GL-aligned chart; common categories (travel, meals, software, supplies, contractor-services).

7. **Client-billable expense pass-through**: Markup policy (typical 0–10% markup); receipts shared with client.

8. **Mileage + per-diem policies**: IRS standard mileage rate; per-diem caps.

### Common Mistakes

- **Time-tracking-as-afterthought**: Hours captured Friday for entire week; inaccurate; resentment.
- **PM-approval-bottleneck**: PM busy with delivery; approvals 2-week-late; billing delayed.
- **No budget alerting**: Project goes 50% over budget before noticed.
- **Expense-receipt loss**: Manual receipt-keeping; receipts lost; expenses not reimbursed.
- **Misclassified billable vs non-billable**: Realization rate hidden; project margins misread.
- **No utilization measurement**: Can't tell who's over/under-utilized.
- **Tool-mismatch with project tool**: Time tracked in Harvest, projects in Asana; data fragmented.
- **No client-billable-expense process**: Expenses paid by company, never billed to client.
- **Pass-through markup ignored**: Hours billed at rate; expenses passed through at cost; revenue + margin loss.

## Maintain — Keeping It Healthy

### The Daily / Weekly Rhythm

- **Daily**: Team members enter time + expenses; ideally end-of-day prompt.
- **Weekly (Monday)**: PM reviews + approves prior-week time per project.
- **Weekly (Tuesday)**: Approved time → billing draft for T&M clients.
- **Monthly**: Utilization + realization reports; budget-vs-actual per project.
- **Quarterly**: Tooling + process review; rate-card calibration.

### What to Watch

- **Time-entry timeliness**: % of time entered within 2 days of work. Target 90%+.
- **Approval timeliness**: PM-approval within 3 business days of submission.
- **Utilization rate**: Billable / available hours per person. Target 70–85% billable.
- **Realization rate**: Billed / billable hours. Target 90%+.
- **Budget-vs-actual per project**: Track + investigate variances.
- **Write-off volume**: Hours billed but not collected (services discount); track.
- **Expense-reimbursement aging**: Expense submitted → reimbursed. Target <30 days.
- **Receipt-compliance rate**: % of expenses with required receipts.

### Exception Handling

- **Person consistently late time-entry**: Manager conversation; coaching.
- **PM not approving on time**: Backup approver; escalation.
- **Project significantly over-budget on hours**: Client conversation; descope, add budget, or extend.
- **Disputed time entry**: PM + worker resolve; document.
- **Expense outside policy**: Reimburse if approved exception; deny if non-approved; document.
- **Lost receipt**: Affidavit per company policy; threshold for non-receipt reimbursement.
- **Personal expense charged to company card**: Reimbursement to company; possibly disciplinary.
- **Client-billable expense missed**: Identify; bill retroactively if within client billing window.

## Scale — Growing It

### Automation Opportunities

- **AI-suggested time entries**: From calendar + recent activity + project assignments.
- **Receipt OCR + auto-categorization**: Photo → fully-coded expense entry.
- **Predictive budget alerts**: Project approaching budget based on velocity not just hours.
- **Smart approval workflows**: Auto-approve trusted patterns; escalate anomalies.
- **Pass-through expense automation**: Client-billable expenses auto-flow to invoicing.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Headcount > 50; tooling complexity grows.
- Multi-currency / multi-region / multi-entity.
- Compliance + audit requirements (SOX, regulated).
- Dedicated PSA platform (Kantata, Certinia) replaces Harvest/Toggl.
- Spend-management at scale (Coupa, SAP Concur).

## By Industry (at this scale)

1. **Marketing / Creative Agencies**: T&M + retainer mix. Harvest popular; pass-through expenses common.
2. **Software / IT Services**: Sprint-based time tracking. Linear/Jira + Toggl integration.
3. **Consulting**: Engagement-based; retainer + project. Tied to billing tightly.
4. **Architecture / Engineering**: Long projects; multi-month time tracking. Industry-specific tools.
5. **Construction (small)**: Crew time + materials. Construction-specific tools (CoConstruct, Buildertrend).
6. **Healthcare (small practice)**: Provider time + procedure coding (specialized).
7. **Legal**: Billable-hour discipline tight; specialized legal-billing tools.
8. **Nonprofit Programs**: Grant-funded time allocation; time-by-funding-source.

## ERP•AI & Proto

**ERP•AI**: Use **Small Business Time & Expense** + **Project Budget Tracking**. Integrate Harvest / Toggl / Hubstaff / Clockify + Expensify / Ramp / Brex + accounting (QuickBooks / Xero) + payroll (Gusto / Rippling).

**Proto**: Single Proto agent handles entry-prompts, approval-orchestration, budget-tracking, billing-handoff, payroll-handoff.

## Related

- [Project Planning](../project-planning/SKILL.md) — projects + budgets that time tracks against
- [Resource Management](../resource-management/SKILL.md) — utilization from time data
- [Billing](../billing/SKILL.md) — approved time → invoices
- [Payroll](../../../human-resources/01-org-under-100/payroll/SKILL.md) — hourly + contractor pay from time
- [Accounts Payable](../../../finance-accounting/01-org-under-100/accounts-payable/SKILL.md) — expense reimbursements
- [Accounts Receivable](../../../finance-accounting/01-org-under-100/accounts-receivable/SKILL.md) — client invoices from billable time + expenses
- [Enterprise Time & Expense (1k+)](../../03-org-1k-plus/time-expense/SKILL.md)
