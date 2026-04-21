---
name: leave-attendance
description: This skill should be used when managing leave and attendance at an organization of 100-1,000 employees — typically with FMLA active, multi-state PFML compliance (CA, NY, NJ, MA, CO, WA, OR, CT), dedicated leave administration (in-house or via Matrix/Sedgwick/Reed Group), structured parental leave program, and ADA interactive-process workflow.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: human-resources
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Leave & Attendance — 100 to 1,000 People

## What This Process Does

Leave at this scale is **a compliance-heavy, multi-jurisdiction specialty** requiring dedicated expertise. Federal FMLA is active (triggered at 50+ employees), state paid-family-medical-leave (PFML) programs apply to employees in CA, NY, NJ, MA, CO, WA, OR, CT (and growing), short-term/long-term disability coverage coordinates with statutory leaves, company paid parental leave layers on top, and ADA interactive process handles accommodations. Leave administration is either in-house (dedicated leave specialist) or outsourced to a third-party administrator (Matrix Absence Management, Sedgwick, Reed Group, ReedGroup-Alight).

The work: **orchestrate complex overlapping leave programs, comply with 20+ distinct state rules plus federal, coordinate medical certifications + return-to-work + accommodations, and do it with sensitivity during often difficult personal circumstances.** A single mishandled FMLA case produces DOL complaints + lawsuits. An ADA accommodations failure produces EEOC charges + 7-figure settlements.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Leave Administration** template integrates federal FMLA eligibility + usage tracking, multi-state PFML coordination, STD/LTD carrier coordination, ADA interactive-process workflow, parental-leave program orchestration, and return-to-work management. Pair with **Absence Management Dashboard** for leave-balance visibility and **Accommodation Request Workflow** for ADA interactive process.

## Build — Setting It Up

### With Agents

- **FMLA eligibility + tracking**: Agent maintains FMLA eligibility (12 months employment, 1,250 hours in prior 12 months, 50+ employees within 75 miles). Tracks 12-week annual balance. Issues notices (eligibility, rights, designation).
- **Multi-state PFML coordination**: Agent identifies applicable state law based on employee work location, applies correct benefit levels + durations, coordinates with state fund (CA EDD, NY PFL, etc.) or private carrier.
- **Stacking vs offset**: Agent computes correct stacking of state PFML + federal FMLA + company paid parental + STD. Typical: concurrent runs for FMLA + STD + PFML (same time counts for all); company paid parental often stacks *on top* of state benefits (increases employee income) vs offsets.
- **ADA interactive process**: Agent triggers workflow on accommodation request. Medical documentation collection, interactive meetings, accommodation evaluation (essential functions analysis), decision documentation.
- **Return-to-work planning**: Agent coordinates phased return (partial hours, modified duties), ergonomic accommodations, meetings with manager + HR.
- **Carrier coordination**: Integration with STD/LTD carriers (Unum, Guardian, MetLife, Sun Life). Claim filing, approval tracking, payment reconciliation.
- **Leave-balance management**: Multiple concurrent balances (PTO, sick, FMLA, state PFML, company paid parental). Agent tracks each separately; applies to correct program per use.

### Key Decisions

1. **In-house vs outsourced leave administration**: In-house (dedicated leave specialist + possibly a coordinator) for ~50+ leaves/year; outsourced (Matrix, Sedgwick, Reed Group) for compliance depth + scalability. Outsourced adds $200–$500 per leave case; in-house requires $100–$150K loaded cost for specialist.
2. **Parental-leave policy design**: Paid parental leave — typical 12–16 weeks for primary caregiver, 6–8 weeks for secondary. Policy language uses "primary/secondary" or "birthing/non-birthing" (legal implications differ). Gender-neutral increasingly standard.
3. **Stacking policy**: Does company paid leave stack on top of state benefits (additive) or offset (subtract state from company total)? Additive is more generous + preferred at competitive companies; offset is less expensive but less competitive.
4. **STD/LTD coverage levels**: Typical STD 60–70% salary for 13–26 weeks; LTD 60% salary to age 65. Employer-paid or voluntary-employee-paid. Tax implications differ (employer-paid = taxable benefits when used).
5. **ADA accommodation funding**: Accommodation costs borne by company. Budget line for accommodations. Most <$500 (ergonomic chair, software); occasional larger ones (workplace modifications).
6. **Sick-leave vs PTO policy**: Combined PTO or separate sick? State rules dictate — CA, NY, and others require accrued sick-leave regardless of PTO policy. Separate sick-leave tracking recommended for clarity even where not strictly required.
7. **Leave-of-absence unpaid policy**: Beyond FMLA + state PFML, company-approved personal leaves. Typical up to 12 weeks unpaid, requires approval, guarantees return to same/equivalent role.
8. **Bereavement expansion**: Modern policies offer 3–5 days for immediate family (spouse, child, parent, sibling) + 1–3 days for extended family. Miscarriage/pregnancy loss leave increasingly standard.

### Common Mistakes

- **FMLA paperwork timing failures**: Employee notifies of need → company has 5 business days to issue eligibility notice + rights notice + medical-certification request. Miss = automatic FMLA approval without evidence.
- **Retaliation claims**: Manager treats employee differently post-leave (performance review dip, removed from projects, passed over for promotion). Retaliation under FMLA + ADA. Expensive lawsuits.
- **Stacking policy ambiguity**: Policy unclear whether state PFML stacks vs offsets company paid leave. Employees + managers + HR interpret differently. Claims + frustration.
- **Medical-certification mistakes**: Employee returns certification; company challenges medical necessity directly with provider (violates HIPAA). Must go through second-opinion process.
- **ADA interactive process skipped**: Manager says "we can't accommodate that" without formal interactive process. EEOC charge filed. Undue-hardship analysis required to defend denial.
- **State PFML misunderstanding**: Company doesn't realize employee in NY has access to state paid family leave; employee uses unpaid FMLA when paid state benefit was available. Employee dissatisfaction + potential claim.
- **Return-to-work without fitness certification**: Employee returns from serious health condition without fitness-for-duty certification where required; re-injury risk + worker's comp exposure.
- **Pregnancy accommodation gaps**: Federal Pregnant Workers Fairness Act (2023) requires reasonable accommodations for pregnancy-related conditions. Not the same as ADA — separate obligation.

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent processes leave requests, tracks balances, coordinates with carriers, issues notices. Day-to-day flow without HR touch.
- **Weekly**: Active leave case review — new cases, pending certifications, upcoming returns, accommodation requests.
- **Monthly**: Leave dashboards to HR + finance — usage trends, cost trends (STD claims, PFML taxable income), accommodation costs.
- **Quarterly**: Compliance audit — FMLA paperwork completeness, state PFML coordination accuracy, ADA interactive-process documentation.
- **Annually**: Policy review — market benchmarking, state law updates, parental-leave competitiveness, carrier renewal.

### What to Watch

- **FMLA designation accuracy**: Are eligible leaves being designated FMLA? Missing designation = employee FMLA balance never used, resets ineligibly.
- **State PFML coordination**: Each applicable state's benefit is being pursued for employees. Underutilization suggests coordination gaps.
- **STD claim approval rate**: Typical 80–90% approval. Low approval rate = medical-certification process issues or inappropriate use.
- **Accommodation requests + grants**: Rate of requests relative to workforce; grant rate. Unusual patterns investigated.
- **Return-to-work success**: % of leaves ending in successful return to same/equivalent role. Dropoffs indicate problems.
- **Intermittent leave tracking accuracy**: Intermittent FMLA (e.g., chronic condition episodes) hardest to track; errors common.
- **Parental-leave utilization**: % of eligible new parents using policy. Low utilization signals cultural issues.

### Exception Handling

- **Medical certification insufficient**: Second-opinion process (company-paid physician) per FMLA regulations. Document concerns + second opinion.
- **Intermittent-leave abuse suspected**: Document patterns. Consult employment counsel before acting. Re-certification if permitted by rules.
- **Return-to-work fitness concern**: Fitness-for-duty certification required for certain roles. Delay return if unable to perform essential functions.
- **ADA accommodation denial**: Document interactive-process thoroughly. Undue-hardship analysis (cost, scope of operations, duration). Legal counsel review.
- **Stacking dispute**: Policy document review. If ambiguous, typically resolved in employee favor. Update policy for clarity going forward.
- **Worker's comp overlap**: Employee injured at work; worker's comp + STD + FMLA concurrent. Coordinate benefits; avoid double-payment.
- **International employee leave**: Country-specific rules dominate. Local counsel required. Generally more generous than US.
- **Post-partum return accommodation**: Lactation accommodations (private space, break time) required by federal + state law. Don't require employee to ask repeatedly.

## Scale — Growing It

### Adding Complexity

- **Global leave programs**: Each country has distinct statutory leave, typically more generous than US. Parental leave in EU often 12+ months. Policy coordination across geographies.
- **Union-represented workforce**: Collective bargaining agreement governs leave; overrides policy where applicable; supplements federal/state minimums.
- **Multi-site WARN implications**: Office closures, shift reductions trigger leave-impact assessments.
- **Executive leave management**: Succession + coverage plans, board notification, longer expected tenure of leaves.
- **Compassionate-leave programs**: Catastrophic-event leave (natural disaster, major loss) policies for employees affected.

### Automation Opportunities

- **Full-auto leave orchestration**: FMLA paperwork, state PFML coordination, carrier claims, return-to-work planning orchestrated without HR touch on standard cases.
- **Predictive accommodation planning**: Agent identifies likely accommodation needs from role + industry + trends; proactive program design.
- **Intermittent-leave tracking accuracy**: Real-time time-tracking integration captures intermittent-FMLA usage precisely.
- **Leave-cost analytics**: Cost drivers (high-claim conditions, accommodation costs, STD claim duration); wellness-program ROI analysis.
- **Policy-update automation**: Agent monitors state law changes; flags required policy updates; drafts revisions.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Volume passes 200 leave cases/year — specialized leave team with case managers.
- International complexity — dedicated per-country leave + absence management.
- Wellness + mental-health integration — absence prevention via wellness investments.
- Specialty coverage (executive disability, senior-leader transitions) — tailored programs.
- Leave data feeds workforce analytics — predictive modeling of retention, productivity, costs.

## By Industry (at this scale)

1. **SaaS / Tech**: Generous parental + fertility leave competitive. Mental-health day allowances increasing. Largely remote workforce = multi-state complexity dominates.
2. **Professional Services**: Utilization impact of leaves material; coverage planning for client deliverables.
3. **E-commerce / Retail**: Two-tier workforce (corporate + warehouse) — different leave utilization patterns. Peak-season leave restrictions possible (with legal limits).
4. **Healthcare**: Clinical coverage for leaves complex. Licensed-role vacancies impact patient care.
5. **Manufacturing**: Shift coverage essential. Workers' comp claims drive STD/LTD volume. Union considerations.
6. **Construction / Trades**: Safety-sensitive positions require fitness-for-duty. Seasonal workforce fluctuations.
7. **Financial Services**: Regulatory implications for licensed roles on leave (continuing education, credentialing continuity).
8. **Restaurants / Hospitality**: Tipped-employee leave calculations complex. State-specific paid-sick-leave very strict (CA, NY).
9. **Nonprofit**: Grant-funded staff leaves affect grant compliance. Mission-aligned generosity common.
10. **Education / Academic**: Academic-calendar alignment with leave; sabbatical programs + tenure considerations.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Leave Administration** + **Absence Management Dashboard** + **Accommodation Request Workflow**. Integrate with Workday/UKG/BambooHR, STD/LTD carriers, state PFML systems.

**Proto**: Specialized Proto agents — FMLA-tracking agent, state PFML-coordination agent, STD/LTD-claim agent, ADA-interactive-process agent, return-to-work agent, policy-compliance agent. Shared leave-case state.

## Related

- [Payroll](../payroll/SKILL.md) — paid leave pay processing, PTO payouts, tax implications of employer-paid benefits
- [Benefits](../benefits/SKILL.md) — STD/LTD, HSA continuation during leave, medical coverage during FMLA
- [Onboarding](../onboarding/SKILL.md) — new-hire leave eligibility communication
- [Offboarding](../offboarding/SKILL.md) — final PTO payout per state + policy
- [Performance Reviews](../performance-reviews/SKILL.md) — attention to anti-retaliation post-leave
- [Small-Org Leave (<100 people)](../../01-org-under-100/leave-attendance/SKILL.md)
- [Enterprise Leave (1k+ people)](../../03-org-1k-plus/leave-attendance/SKILL.md)
