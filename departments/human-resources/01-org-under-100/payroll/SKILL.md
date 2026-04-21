---
name: payroll
description: This skill should be used when running payroll at an organization under 100 employees — typically handled via Gusto, Rippling, Deel, or similar, by an office manager/founder/HR generalist, with a mix of W-2 employees and 1099 contractors, possibly including international teammates.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: human-resources
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Payroll — Under 100 People

## What This Process Does

Payroll at this size is **the ritual of paying people correctly and on time, every time, with all the tax and compliance bits handled for you by your payroll platform.** You have 10–100 employees, probably a mix of W-2 and 1099, possibly international contractors through an EOR (Employer of Record). One person runs payroll — office manager, HR generalist, founder, or bookkeeper. Gusto, Rippling, Deel, or similar does the heavy lifting on tax calculations, filings, and remittances.

The work isn't complex; it's **detail-critical.** A missed hour, wrong bonus, incorrect state tax setup, or missed new-hire reporting turns into a wage-and-hour complaint, a tax notice, or an employee losing trust. At this scale, payroll errors are rare but expensive when they happen.

## Start Here: ERP•AI Templates

ERP•AI's **Small Business Payroll** template integrates with Gusto/Rippling/Deel to orchestrate pay runs, time tracking, expense reimbursements, and new-hire / termination workflows. For international contractors, **Global Contractor Pay** handles W-8BEN collection, multi-currency disbursement, and local compliance via EOR partners.

## Build — Setting It Up

### With Agents

- **Pay-run preparation**: Agent reviews timecards, PTO usage, new hires, terminations, raises, and one-time bonuses before each pay run. Flags anomalies (someone with zero hours, missing timesheet, PTO without prior approval).
- **Exception review**: Any variance from prior period (>10% change in gross pay) surfaced with context. Review, approve, or correct before submission.
- **New-hire onboarding**: Agent coordinates W-4/I-9 collection, direct-deposit setup, state-tax-withholding registration in new states, benefits enrollment timing.
- **Termination processing**: Agent manages final paycheck calculation (including unused PTO per state law), COBRA notice triggers, equity vesting stops, access revocation.
- **1099 oversight**: Year-round contractor payment tracking. Agent flags contractors approaching $600 threshold without W-9 on file.
- **State compliance**: Agent tracks employee state/location changes; flags when new state registration is required; triggers payroll tax registration workflows.

### Key Decisions

1. **Pay cadence**: Bi-weekly (26/year) is most common; weekly is expensive to run; monthly causes cash-flow challenges for employees and is less common in US. Pick one and stick with it.
2. **Payroll platform**: Gusto (best UX, cheapest, SMB-focused), Rippling (integrates with IT provisioning — best if >50 employees), Deel (if you have significant international), ADP RUN (enterprise-lite, if you expect to scale fast). Migrating platforms later is painful; choose thoughtfully.
3. **W-2 vs 1099 classification**: Default to W-2 when unclear. Misclassification risk is asymmetric — you pay back taxes + penalties if IRS or state disagrees; saves you nothing if correctly classified as employee anyway.
4. **International strategy**: EOR (Deel, Remote, Papaya) for foreign contractors/employees. Don't DIY international payroll — local tax + employment law is where companies get in trouble.
5. **Equity handling**: Stock options/RSUs tax treatment varies by type (ISO vs NSO) and grant. Coordinate with payroll for withholding on NSO exercises, RSU vesting, ESPP purchases.
6. **Time tracking**: Hourly employees need accurate time capture (Gusto, Rippling have built-in; Time Doctor, Toggl Track for remote). Salaried exempt employees typically don't track time.
7. **Expense reimbursement**: Through payroll (simple) or through Expensify/Ramp/Brex (more features). Reimbursements are non-taxable when properly documented.

### Common Mistakes

- **State tax registration gap**: Hire an employee in Texas, nobody registers for Texas payroll tax. Next quarterly remittance, payroll platform fails the filing.
- **Misclassifying workers**: "They're 1099, we don't need to do payroll for them." Then IRS or state audit reclassifies → back-owed payroll tax.
- **Equity tax surprise**: Employee exercises NSO; gross income pushes them into higher bracket; employer forgot to withhold; employee owes large tax; company looks bad.
- **Unauthorized overtime**: Non-exempt employee works 50 hours; you only paid straight time; wage & hour complaint follows.
- **Final paycheck timing**: State laws vary — California requires final paycheck same-day on involuntary termination. Late = waiting-time penalties.
- **PTO payout on termination**: State laws vary — California requires payout, others don't. Document policy.
- **New-hire reporting**: Federal law requires new-hire reporting to state within 20 days. Payroll platforms handle, but verify it's enabled.

## Maintain — Keeping It Healthy

### The Payroll Rhythm

- **3 days before pay date**: Agent sends pre-run summary. Review for anomalies, new hires/terminations, one-time items.
- **2 days before pay date**: Submit payroll. Platform calculates taxes, generates pay stubs, schedules ACH.
- **Pay date**: ACH hits employee bank accounts. Direct deposits arrive. Pay stubs available.
- **Pay date +1**: Review any failed direct deposits; coordinate manual resolution.
- **Monthly**: Reconcile payroll to GL. Payroll journal entries (salaries, taxes, benefits, deductions) match GL accounts.
- **Quarterly**: 941 payroll tax filings automatic via platform. Verify filings confirmed and payments cleared.
- **Annually**: W-2s to employees by Jan 31. 1099-NECs to contractors by Jan 31. 940 federal unemployment filing. Reconcile annual W-2 totals to GL payroll.

### What to Watch

- **Payroll variance month-over-month**: >10% change warrants explanation (hires, bonuses, PTO payouts, terminations).
- **New hire state coverage**: Every employee state has active payroll registration.
- **Contractor YTD payments**: 1099 threshold monitoring for all contractors.
- **Missing timecards**: Hourly employees with zero/incomplete timecards before pay run.
- **Unreimbursed expenses aging**: Employee expense reports not reimbursed in 30+ days is a morale issue.
- **Tax notice resolution**: Any IRS or state notice addressed within 30 days with documented resolution.

### Exception Handling

- **Employee disputes a paycheck**: Review with them (gross, deductions, net). 90% of disputes are tax-bracket or PTO-usage misunderstandings; 10% are real errors. Correct real errors with next pay run + explanation.
- **Wage & hour complaint**: Escalate to employment counsel immediately. Don't DIY.
- **IRS notice**: Respond promptly — most are simple corrections ("CP notice" = discrepancy). Platform support helps for platform-filed taxes.
- **Employee asks about compensation / overtime eligibility**: Review classification. Consult employment counsel if unclear.
- **International contractor flagged by EOR**: Work with EOR immediately; local compliance issues need local expertise.
- **Equity exercise wage reporting error**: Coordinate with tax advisor and payroll platform to correct. May require W-2c (corrected W-2) after year-end.
- **Back pay for missed PTO or bonus**: Run special pay run or include in next regular run with separate line item and clear explanation.

## Scale — Growing It

### Automation Opportunities

- **Time-tracking integration**: Hours flow from time system to payroll. No manual entry.
- **Benefits-deduction automation**: Benefit elections flow from benefits admin to payroll deductions automatically.
- **Expense-reimbursement sync**: Approved expenses flow from expense system to next payroll.
- **Equity automation**: Stock comp events (exercises, vestings) flow from equity platform to payroll for withholding.
- **State registration automation**: New employee in new state triggers registration workflow automatically.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Employee count passes 75–100 — dedicated HR/People Ops team needed.
- Employees in 10+ states — multi-state complexity at volume.
- International team >5 people — dedicated global payroll function.
- You're going through IPO prep — SOX controls on payroll, specialized reporting.
- You've acquired another company — integration of two payroll systems is material work.

## By Industry (at this scale)

1. **SaaS / Tech**: Heavy equity compensation. Mobile workforce. International contractors through EOR common.
2. **Professional Services**: Bonus structure tied to utilization / billing. Possibly revenue-share compensation.
3. **E-commerce / Retail**: Mix of salaried corporate + hourly fulfillment. Shift differentials, overtime.
4. **Construction / Trades**: Union rates + prevailing wage on government projects. Certified payroll reporting for public work.
5. **Restaurants / Hospitality**: Tipped employees require special payroll treatment (tip credit, tip reporting). Multi-state compliance for chain operations.
6. **Healthcare**: Differentials for shift/weekend/on-call. Nurse licensing state-by-state.
7. **Nonprofit**: Grant-funded salary allocation tracking. Form 990 compensation disclosure requirements.
8. **Marketing / Creative Agencies**: Mix of W-2 + 1099 + international freelancers. Project-based bonus tied to client outcomes.

## ERP•AI & Proto

**ERP•AI**: Use **Small Business Payroll** integrated with Gusto/Rippling/Deel. Enable automated state-compliance workflows, new-hire onboarding, termination processing, and 1099 oversight.

**Proto**: A Proto agent running ORAI handles pay-run prep, exception review, new-hire/termination coordination, and year-round 1099 monitoring. One agent enough at this scale.

## Related

- [Benefits](../benefits/SKILL.md) — benefits deductions flow into payroll
- [Recruitment](../recruitment/SKILL.md) → [Onboarding](../onboarding/SKILL.md) — new-hire start of payroll
- [Offboarding](../offboarding/SKILL.md) — termination end of payroll
- [Leave & Attendance](../leave-attendance/SKILL.md) — PTO usage affects paychecks
- [Tax Compliance](../../../finance-accounting/01-org-under-100/tax-compliance/SKILL.md) — payroll tax coordination with overall tax compliance
- [Enterprise Payroll (1k+ people)](../../03-org-1k-plus/payroll/SKILL.md)
