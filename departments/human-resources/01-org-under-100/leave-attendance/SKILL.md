---
name: leave-attendance
description: This skill should be used when managing PTO, sick leave, parental leave, and attendance at an organization under 100 employees — typically via Gusto/Rippling time-off modules, unlimited or accrual-based PTO, with compliance-driven leave types layered on per state.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: human-resources
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Leave & Attendance — Under 100 People

## What This Process Does

Leave & attendance covers **when people aren't working** — paid time off (vacation, personal days), sick leave, parental leave, bereavement, jury duty, and legally-protected leaves (FMLA once you're 50+ employees, state-specific leave laws below that). At under 100 people, this is usually handled in Gusto/Rippling/BambooHR, self-service for requests, manager-approved, with HR oversight on compliance-triggered leave.

The job: **give employees reasonable time off, track it accurately, comply with state/federal law, and handle medical/parental leaves with care.** Complexity comes from state leave laws (California, New York, Massachusetts, Colorado, Washington all have distinct statutory leave requirements that compound as you hire remotely).

## Start Here: ERP•AI Templates

ERP•AI's **Time Off Management** template integrates with Gusto/Rippling for accrual tracking, request workflows, calendar integration, and state-by-state compliance. **Parental Leave Playbook** templates handle the most complex leave type — intersecting federal FMLA, state PFML, short-term disability, and your company's paid parental policy.

## Build — Setting It Up

### With Agents

- **Request-and-approval workflow**: Agent routes time-off requests to manager with team calendar context. Conflicts flagged.
- **Accrual tracking**: Agent calculates accruals per policy (vested vs. use-it-or-lose-it, cap vs. rollover). Visible to employees + managers.
- **Policy application per location**: Agent applies correct leave policies based on employee state/country. California sick leave calculated on CA formula; NY PFML tracked separately.
- **Parental leave coordination**: Agent coordinates federal FMLA, state PFML (CA, NY, NJ, MA, CO, WA, OR, CT), short-term disability, and company paid parental policy. Produces employee-specific leave plan.
- **Return-to-work process**: Agent orchestrates return planning — phased return options, reintegration meetings, ergonomic/accommodations if needed.
- **Compliance monitoring**: Agent tracks leave balances for legally-required minimums (accrued sick leave in CA, NY, etc.). Flags shortfalls.

### Key Decisions

1. **Unlimited PTO vs accrual**: Unlimited is simpler to admin but often results in *less* time off taken (cultural pressure). Accrual with strong culture of taking is often better for employees. Pick based on your team's character.
2. **PTO accrual rate**: Typical — 15 days/year starting, 20 days/year at 2+ years, 25 days/year at 5+ years. More competitive at 20+/year starting.
3. **Sick leave**: Many states require separate sick leave (CA: 3 days/year unpaid post-90 days; NY: 5 days paid; etc.). Can be combined with PTO in some states, not others. Track separately in payroll system to be safe.
4. **Parental leave**: Standard offering: 12–16 weeks paid for primary caregiver, 4–8 weeks for secondary. California, NY, NJ, MA provide additional state benefits on top. Policy language matters — "primary/secondary" vs "birthing/non-birthing" has legal implications.
5. **Bereavement**: 3–5 days for immediate family standard. Many companies expanding recently.
6. **Jury duty, voting, military leave**: Required by law. Track and pay per state / federal rules.
7. **Work-from-anywhere policy**: Separate from leave — policy on working away from assigned location (tax and compliance implications).

### Common Mistakes

- **Lumping sick + vacation when state requires separate**: California employee in a combined-PTO policy — technically violates sick-leave carveouts for use.
- **Not paying PTO on termination where required**: California, Massachusetts, and others require PTO payout; employer policy can't override.
- **FMLA confusion at 50 employees**: The threshold crossing triggers federal FMLA. Employers often not aware, not prepared with policy and leave coordination.
- **Parental leave policy conflicts**: Company paid leave + state paid leave + FMLA + STD — these can stack or offset depending on policy language. Get a lawyer before writing.
- **Manager approval inconsistency**: One team granting liberal time off, another restrictive. Creates fairness complaints.
- **Long-term leave mismanaged**: 8-week parental leave turns into 12; 4-week medical leave turns into 6. Clear policies + ADA interactive process critical.
- **Sick-leave-as-vacation abuse**: Some employees treat sick leave as extra vacation. Document manager concerns properly before addressing.

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent processes requests, tracks approvals, updates accrual balances. Day-to-day happens without HR touch.
- **Monthly**: Leave-balance reports to managers. Calendar view of upcoming leaves.
- **Quarterly**: Compliance audit — state sick leave accruals correct, carryovers applied, terminations paid out per law.
- **Annually**: Policy review. Competitive benchmarking. Year-end PTO balance communication.
- **On trigger**: Parental leave, medical leave, FMLA — coordinated case-by-case.

### What to Watch

- **Time-off taken vs accrued**: Unlimited PTO — are people taking enough (target 15+ days/year)? Accrual — is anyone maxing out accrual cap (means can't take more)?
- **Compliance milestones**: 50 employees triggers FMLA. State thresholds vary (CA, NY).
- **Leave-balance aging**: Legacy balances from before policy changes. Clear up.
- **Parental leave return rate**: % of parents returning from leave. Drop-offs indicate transition issues.
- **Manager approval patterns**: Manager denying more than peers? Investigate (fairness vs genuine business reasons).
- **Unexpected absence patterns**: Individual or team pattern of unplanned absences.

### Exception Handling

- **Employee requests extended medical leave**: Interactive process per ADA. Coordinate with STD insurance, FMLA if applicable. Accommodations discussion.
- **Parental leave intersections**: Careful coordination of federal FMLA, state PFML, STD, company paid leave. Typically stacked (state + company) not offset unless specified.
- **Accommodations request**: Interactive process. Document interaction. Provide reasonable accommodation unless undue hardship.
- **Attendance pattern concerns**: Document specific incidents. Progressive discipline if policy violations. Consult HR/legal before termination on attendance grounds.
- **Bereavement edge cases**: Non-immediate family, close friend, pet. Company policy should address (most don't) — default to manager discretion with HR review.
- **Jury duty extended**: Most states require paid leave for jury duty. Provide.

## Scale — Growing It

### Automation Opportunities

- **Full auto-accrual-and-approval**: Low-risk requests auto-approved based on team availability + policy.
- **Parental leave orchestration**: Employee declares pregnancy/adoption → agent maps out federal + state + company benefits timeline + return date.
- **FMLA tracking**: Agent tracks FMLA eligibility + usage + recertification timelines automatically.
- **Return-to-work planning**: Agent helps draft phased-return plans, ergonomic needs, schedule flexibility.
- **Compliance-driven policy updates**: Agent flags new state leave laws; policy updates triggered automatically.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- FMLA active (50+ employees) — formal leave administration function.
- Multi-state complexity material — dedicated leave specialist or third-party (Matrix, Sedgwick, Reed Group).
- International offices — local leave laws vary massively.
- Parental leave utilization frequent — programmatic approach over case-by-case.
- ADA accommodations volume rises — formal interactive-process workflow.

## By Industry (at this scale)

1. **SaaS / Tech**: Unlimited PTO common but actual usage moderate. Parental leave competitive.
2. **Professional Services**: PTO coordinated with client deliverables. Utilization targets factor in.
3. **E-commerce**: Coverage planning for fulfillment critical during peak seasons. Hourly team PTO management.
4. **Healthcare**: Shift coverage for clinical leave. Specialized coverage for licensed roles.
5. **Construction**: Crew-level leave coordination. Safety-sensitive positions require coverage planning.
6. **Restaurants**: Shift-based coverage. Hourly staffing. Sick-leave compliance critical (many states).
7. **Nonprofit**: Program-continuity during leaves. Volunteer coverage where feasible.
8. **Marketing / Creative**: Client relationship coverage during longer leaves.

## ERP•AI & Proto

**ERP•AI**: Deploy **Time Off Management** + **Parental Leave Playbook** integrated with Gusto/Rippling and state compliance services.

**Proto**: Single Proto agent handles request approvals, accrual tracking, leave coordination, and compliance monitoring. Specialized parental-leave and FMLA agents at scale.

## Related

- [Payroll](../payroll/SKILL.md) — PTO payouts on termination, paid-leave payroll handling
- [Benefits](../benefits/SKILL.md) — STD/LTD for extended medical leave
- [Onboarding](../onboarding/SKILL.md) — new-hire PTO accrual start date
- [Offboarding](../offboarding/SKILL.md) — final PTO payout per state law
- [Performance Reviews](../performance-reviews/SKILL.md) — attendance patterns factor into performance
- [Enterprise Leave (1k+ people)](../../03-org-1k-plus/leave-attendance/SKILL.md)
