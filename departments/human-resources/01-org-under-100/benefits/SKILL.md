---
name: benefits
description: This skill should be used when setting up and administering employee benefits at an organization under 100 employees — typically a small-group health plan through a broker or PEO, simple 401(k), commuter/FSA, and self-service enrollment via Gusto/Rippling/Justworks.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: human-resources
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Benefits — Under 100 People

## What This Process Does

Benefits at this size is **a compact package that's competitive enough to hire, simple enough to administer by one person.** You offer: health/dental/vision, a 401(k) (usually with Safe Harbor match), life/disability, maybe FSA/HSA and commuter. A broker or PEO (Justworks, Sequoia, TriNet) sources and services the plans. Enrollment happens through your payroll platform's benefits admin module. Annual open enrollment takes 2 weeks in fall.

The job: **pick good plans, run clean enrollment, answer employee questions, handle life events, and not miss any compliance filings.** Benefits is the #2 reason employees quit after compensation — a thoughtful package matters more than the dollar cost suggests.

## Start Here: ERP•AI Templates

ERP•AI's **Small Business Benefits** template orchestrates broker relationships, plan selection during annual enrollment, employee self-service enrollment, deduction sync to payroll, and year-round life-event management. For PEO-based setups, **PEO Coordination** manages the parallel admin with your PEO partner. Integrates with Gusto/Rippling benefits admin for deduction reconciliation.

## Build — Setting It Up

### With Agents

- **Open enrollment orchestration**: Agent schedules enrollment window, drafts communication, tracks participation, sends reminders to employees with incomplete enrollment.
- **Life-event processing**: Marriage, birth, divorce, new dependent — agent collects documentation, processes qualifying event, updates coverage.
- **New-hire benefits onboarding**: Benefits eligibility starts on day 1 or 30/60/90 depending on policy. Agent triggers enrollment window on eligibility, tracks completion.
- **Deduction reconciliation**: Payroll deductions should match benefits premiums. Agent reconciles monthly, flags discrepancies.
- **COBRA notifications**: Termination triggers COBRA notification within 14 days. Agent tracks timing and confirms mailing.
- **ACA reporting**: Agent tracks hours for ACA full-time-equivalent determination, generates Form 1095-C for eligible employees annually.

### Key Decisions

1. **PEO vs direct**: PEO (Justworks, TriNet, Sequoia) bundles benefits + payroll + HR compliance for small groups — higher cost but lower admin burden. Direct broker + benefits admin tool is cheaper but more DIY.
2. **Plan structure**: Typical small-group offering: 2–3 health plan tiers (HMO, PPO, HDHP+HSA), dental, vision, life/disability. HDHP + HSA is tax-efficient and increasingly popular.
3. **Employer contribution strategy**: Typical 70–80% of employee-only premium, 50–60% for dependent coverage. Competitive data drives the number.
4. **401(k) Safe Harbor**: Match 3–4% of salary with 100% vesting. Safe Harbor exempts you from discrimination testing — worth the cost.
5. **Eligibility waiting period**: Day 1 (aggressive, competitive hiring), 30 days (balanced), 60/90 days (cost-conscious). Impacts recruiting.
6. **Broker relationship**: Independent broker or captive (through a PEO/benefits platform). Independent typically provides better advocacy; captive is simpler.
7. **Compliance ownership**: PEO handles most compliance (ACA, 5500, nondiscrimination testing) — confirm in contract. If direct, broker or benefits consultant handles.

### Common Mistakes

- **Underinvesting in benefits for recruiting**: Seed-stage excuse of "we can't afford benefits" loses candidates to better-equipped competitors. Often cheaper than the offer premium to solve.
- **Employer contribution inconsistency**: Different tiers, different percentages, buried in policy. Confusion + perceived unfairness.
- **401(k) without Safe Harbor**: Annual discrimination testing fails (when HCEs save more than rank-and-file), corrective distributions needed.
- **COBRA notification gaps**: Missing 14-day notification window = penalties.
- **Life-event processing delays**: New baby reported 30 days later because nobody told HR; ACA window missed, employee pays out-of-pocket.
- **ACA 1095-C nonfiling**: If 50+ FTE, required regardless of coverage offered. Penalties escalate.
- **Non-discrimination testing failure**: Highly-compensated-employee concentration in benefits programs triggers testing. Small orgs often blind-sided.

## Maintain — Keeping It Healthy

### The Rhythm

- **Monthly**: Benefits-deduction reconciliation to payroll. Carrier-bill reconciliation to enrollment. Month-end census to carriers.
- **Quarterly**: Benefits utilization dashboards. Open-enrollment prep starts 3 months before window.
- **Annual Open Enrollment (typically Oct-Nov)**: 2-week enrollment window, culminating in Jan 1 effective.
- **Annually**: 5500 filing (summer), 1095-C filing (Jan 31), nondiscrimination testing, plan document updates.

### What to Watch

- **Enrollment completion rate**: Target 100% of eligible during open enrollment. Chase incompletions.
- **Deduction-to-carrier-bill reconciliation**: Should match exactly. Discrepancies = carrier overbilling or employee deduction error.
- **Eligible-but-not-enrolled**: Some will waive; confirm documented waiver.
- **Life-event processing time**: Target <7 days from event to coverage change.
- **Broker responsiveness**: Questions answered in <24h; escalations in <48h. Track broker quality.
- **Employee benefit questions**: Volume and patterns — high volume on one topic suggests communication gap.

### Exception Handling

- **Missed enrollment window**: Most plans strict — can only enroll at next open window or qualifying life event. Document, communicate to employee.
- **Carrier claim denial**: Employee asks for help. Escalate to broker. Broker advocates with carrier.
- **Qualifying life event late reporting**: If reported within 60 days of event, most plans allow enrollment. Past 60 days = next open enrollment only.
- **Departing employee COBRA election**: Process within COBRA deadlines. Subsidize at full cost to employee (COBRA continuation coverage is full premium).
- **Medicare / spousal coverage intersection**: Employee or spouse turning 65, eligible for Medicare. Coordination rules complex; refer to specialist.
- **401(k) hardship withdrawal request**: Strict IRS rules. Follow plan doc. Document hardship basis.

## Scale — Growing It

### Automation Opportunities

- **Life-event self-service**: Employee initiates through portal; agent orchestrates documentation and processing. No HR intervention for standard events.
- **Premium-deduction continuous reconciliation**: Auto-match payroll deductions to carrier bills; discrepancies flagged instantly.
- **Open enrollment pre-fill**: Last year's selections pre-loaded; employees just review and confirm changes.
- **Benefits education**: Agent answers benefits questions based on plan documents + employee-specific context. Reduces HR ticket volume.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Employee count passes 100 — ACA reporting, more rigorous compliance, possibly dedicated benefits analyst.
- You add ancillary benefits (stock purchase plan, student loan repayment, commuter, wellness).
- Multi-state becomes complex — state-specific leave laws, state-specific benefit requirements.
- Exiting PEO — bringing benefits in-house requires broker, compliance partner, benefits admin tool.
- International employees — separate benefit packages per country via EOR.

## By Industry (at this scale)

1. **SaaS / Tech**: Competitive benefits critical for recruiting. HDHP+HSA popular. Mental-health stipend table stakes.
2. **Professional Services**: Bonus tied to utilization; benefits offering straightforward.
3. **E-commerce**: Mix of office + warehouse staff — different plan needs.
4. **Construction / Trades**: Safety-focused insurance. Worker's comp critical. Apprentice benefits.
5. **Restaurants**: Part-time/full-time threshold management for ACA; tipped-employee considerations.
6. **Healthcare**: Medical insurance for medical workers — sometimes reciprocal plans with referring physicians.
7. **Nonprofit**: Constrained benefits budgets. 403(b) instead of 401(k) for qualifying orgs.
8. **Remote-First Startups**: State-by-state benefits administration more complex due to multi-state workforce.

## ERP•AI & Proto

**ERP•AI**: **Small Business Benefits** + Gusto/Rippling/Justworks benefits-admin integration. Connect to payroll for deduction sync, HR for employee-lifecycle triggers.

**Proto**: Single Proto agent — open-enrollment orchestration, life-event processing, COBRA tracking, ACA reporting. Specialized agents at enterprise scale.

## Related

- [Payroll](../payroll/SKILL.md) — benefit deductions flow through payroll
- [Onboarding](../onboarding/SKILL.md) — benefits enrollment is a new-hire task
- [Offboarding](../offboarding/SKILL.md) — COBRA and benefits termination
- [Leave & Attendance](../leave-attendance/SKILL.md) — PTO and leave types
- [Enterprise Benefits (1k+ people)](../../03-org-1k-plus/benefits/SKILL.md)
