---
name: offboarding
description: This skill should be used when separating employees from an organization of 100-1,000 employees — typically a dedicated HR specialist coordinating IT SCIM access revocation, standardized severance and release agreements, multi-state final-pay compliance, and a structured alumni program.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: human-resources
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Offboarding — 100 to 1,000 People

## What This Process Does

Offboarding at this scale is **a repeatable, compliance-heavy program running 20–80 separations per year.** A People Ops or HR specialist owns the workflow; IT provisioning is SCIM-driven (one directory-of-truth — Okta, Rippling, Azure AD — pushes de-provisioning across 50+ SaaS tools); standardized severance structures + release agreements are templatized; multi-state final-pay compliance is scripted; and an alumni program captures long-term relationship value.

The mix: 70–85% voluntary departures, 10–20% involuntary (performance, misconduct, role fit), 0–10% occasional RIFs. The stakes: wage-and-hour violations scale into class actions at this employee count; data-access lapses turn into security incidents; public missteps (botched terminations, viral tweets) damage employer brand for 12+ months.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Separation** template orchestrates SCIM-driven access revocation, multi-state final-pay automation, severance calculation + release agreement generation, COBRA notification + tracking, knowledge-transfer checklists, exit-interview + aggregation, and alumni-program lifecycle. Pair with **Reduction In Force Playbook** for larger workforce reductions requiring WARN Act compliance.

## Build — Setting It Up

### With Agents

- **Separation orchestration**: Agent triggers multi-track checklist on notification — HR (paperwork, severance, COBRA), IT (SCIM de-provisioning, equipment return), Manager (knowledge transfer, team communication), Finance (final pay, equity exercise window, expense reimbursement), Legal (release agreement review for senior or sensitive cases).
- **SCIM-driven access revocation**: Directory-of-truth entry flipped to inactive → 50+ SaaS tools (Slack, GitHub, Salesforce, Notion, AWS, Figma, etc.) de-provision automatically at the specified cutover time.
- **Multi-state final-pay compliance**: Agent identifies employee's state, applies correct final-pay timing (CA same-day for involuntary, MA same-day, NY 7 days, varies), calculates PTO payout where required, generates final paycheck.
- **Severance + release agreement**: Standardized severance matrix (weeks based on tenure + level), release agreement generated from template with specific terms, routed for legal review + signature.
- **COBRA administration**: 14-day notification window tracked, notice generated + mailed + confirmed delivery, ongoing premium collection if elected.
- **Knowledge-transfer coordination**: Agent prompts documentation of open projects, credentials, key relationships, institutional knowledge. Manager signs off before last day.
- **Exit-interview + synthesis**: Agent schedules interview (HR or outsourced firm), transcribes, aggregates themes quarterly, surfaces patterns (team, manager, tenure, reason).
- **Alumni-program lifecycle**: Post-separation outreach, alumni Slack/LinkedIn inclusion, re-hire eligibility tagging, quarterly communications.

### Key Decisions

1. **Access-revocation timing policy**: Immediate for involuntary with cause or data risk; last-day end-of-business for voluntary; handoff-period exception only for specific pre-approved cases (executive consulting continuation).
2. **Severance matrix**: Documented policy — typical 2 weeks + 1 week per year of tenure, capped at 26 weeks; executive packages separate (often 6–12 months); involuntary-no-cause receives severance in exchange for signed release.
3. **Release agreement (separation agreement)**: Standard ADEA-compliant template (21-day consideration, 7-day revocation for 40+ age); legal counsel drafts; case-by-case review for senior roles or legally sensitive departures.
4. **Equity exercise window**: Standard 90 days post-termination for options; document extended windows where offered (1 year, 10 years) in grant agreements; clarify in offboarding package.
5. **Non-compete / non-solicit enforcement**: State-by-state — California bans non-competes; most other states have limits; FTC final rule (if in effect) changes landscape. Legal counsel + documentation required.
6. **WARN Act compliance** (if 100+ employees at site and triggering RIF): 60-day notice required for mass layoffs or plant closings. Penalties for noncompliance.
7. **Alumni program commitment**: Formal program (Slack, LinkedIn, newsletter, events) vs minimal (re-hire tracking only). Formal programs drive 10–30% re-hire rate among qualifying alumni.
8. **Outplacement services**: Offered to involuntary terminations — executive (full outplacement, 3–6 months) vs IC (self-service portal). Vendors: Lee Hecht Harrison, RiseSmart, Randstad RiseSmart.

### Common Mistakes

- **Access-revocation lag on involuntary termination**: Employee terminated 2pm, access revoked 6pm — 4 hours of data-access risk. SCIM cutover should be seconds, not hours.
- **Final-pay timing violations at scale**: Multi-state workforce, each with different rules. Generic payroll approach = compliance failures in states with strict timing.
- **Release agreement pressure / ADEA mistakes**: Pushing release signature in <21 days for 40+ employee; signature under duress. Release becomes unenforceable; company still out severance.
- **Knowledge transfer skipped**: Departing engineer holds entire system context. Replacement flounders for months. 6-figure productivity loss.
- **Inconsistent treatment**: Two similarly-situated employees receive different severance, different release terms. Discrimination claim exposure.
- **COBRA notification lapses**: 14-day window missed; penalties accumulate; employee medical gap creates cascading issues.
- **RIF without WARN compliance**: Mass layoff with <60 days notice; DOL penalty = 60 days wages per affected employee.
- **Alumni-network neglect**: Ex-employees become customers, referrers, re-hires at 0% rate because company doesn't maintain relationships. Recruiting + sales missed opportunity.

## Maintain — Keeping It Healthy

### The Separation Rhythm

- **T-14 days** (voluntary notice): Transition plan drafted. Manager initiates knowledge-transfer documentation. Replacement discussions with recruiting.
- **T-7 days**: Final-pay calculated, access-revocation schedule finalized, equipment-return plan, exit-interview scheduled, severance package (if applicable) prepared.
- **Last day**: Exit interview, equipment return, final paycheck, COBRA notice issued, personal-file retrieval, access-revocation cutover at agreed time.
- **Last day +1**: Access-revocation executed via SCIM. Email-forwarding or out-of-office configured. Internal + external announcements where appropriate.
- **Post-separation +30 days**: Alumni-network invitation. Re-hire eligibility documented. Reference-check authorization noted.
- **Monthly**: Offboarding metrics dashboard — SLA adherence, exit-interview participation, alumni engagement.
- **Quarterly**: Exit-interview aggregation — themes, patterns, recommended org changes.
- **Annually**: Severance policy review, release agreement update (tracking legal changes), alumni-program effectiveness review.

### What to Watch

- **Access-revocation SLA compliance**: 100% target — every revocation on schedule. Any delay = security investigation.
- **Final-pay timing compliance by state**: Multi-state dashboard. 100% on-time per state law.
- **Release agreement execution rate**: When severance offered, % of releases signed. Target 90%+.
- **Exit-interview participation**: Target 80%+. Declining participation = process issue or departing employees disengaged.
- **Equipment-return completion**: % of equipment returned vs written off. Track aging.
- **Regrettable-attrition rate**: High performers voluntarily leaving. Root-cause via exit interview aggregation.
- **RIF execution quality (when applicable)**: WARN compliance, severance execution, communications quality, outplacement engagement.
- **Alumni re-hire rate**: % of re-hires sourced from alumni. Target 15%+ with active alumni program.

### Exception Handling

- **Involuntary with cause (misconduct, performance)**: Legal counsel consulted. Documentation comprehensive. Access immediate. Final pay compliant. Witness protocol if termination meeting is in-person.
- **Data-loss concern on departure**: Forensic review of recent activity. DLP tools surface anomalies. Legal hold if necessary.
- **Release refusal**: Offer remains for consideration period. Document refusal in file. Severance not paid without release (legal review of any exceptions).
- **WARN Act trigger event**: Legal + HR + leadership planning. 60-day notice required. WARN notice language precise. Communication strategy.
- **Executive departure**: Board notification if senior enough. Press statement coordination. Interim coverage plan. Search begins immediately.
- **Garden-leave request**: Pay employee for notice period without work access, typically applied to executive departures to competitor. Legal counsel decision.
- **Claim post-termination (wage, discrimination, retaliation)**: Legal counsel immediately. Preserve all related documents. Don't engage directly.
- **International separation**: Local employment law variance significant — termination notice periods, severance minimums (EU statutory), collective consultation requirements. Local counsel required.

## Scale — Growing It

### Adding Complexity

- **International offboarding at scale**: Each country's employment law is distinct — notice periods, severance calculations, statutory benefits continuation, works-council consultation (EU).
- **Executive-transition management**: Programmatic approach — search + transition + press + board + internal comms coordinated.
- **M&A-driven offboarding**: Acquired companies bring different offboarding practices. Integration brings redundancy decisions. Handle with care.
- **Outplacement quality tier**: Premium outplacement for senior, basic for IC, none for involuntary-with-cause.
- **Alumni-program sophistication**: Formal events (annual reunion, quarterly networking), advisory-role program, alumni-to-customer conversion tracking, content from alumni.

### Automation Opportunities

- **End-to-end separation orchestration**: Notification → SCIM → final pay → COBRA → exit interview → alumni onboarding without constant human coordination.
- **Predictive departure risk**: Engagement + tenure + manager + team signals → likelihood of voluntary departure. Retention interventions.
- **Exit-interview NLP synthesis**: Agent extracts themes, severity, recommendations. Surfaces patterns across departures.
- **Alumni-network AI**: Relationship-lifecycle management, re-engagement triggers, opportunity matching (re-hire, customer, referrer).
- **RIF decision support**: Scenario modeling, compliance check, communication plan drafting.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Volume passes 200 separations/year — dedicated offboarding specialist team.
- Global operations across 10+ countries — local compliance expertise per country.
- Executive transitions become a regular function — dedicated executive-transition program.
- Alumni network becomes strategic asset — dedicated alumni-relations function.
- M&A activity drives recurring integration + rationalization offboarding.

## By Industry (at this scale)

1. **SaaS / Tech**: Equity exercise window support. Technical-knowledge handoff critical. Alumni often become customers or re-hires. Non-solicit enforcement challenging in CA.
2. **Professional Services**: Client relationships transition carefully. Non-solicit enforcement for client + partner solicitation.
3. **E-commerce**: Seasonal workforce fluctuation; RIFs + re-hires cyclical.
4. **Healthcare**: License handling, DEA number transitions, patient continuity. Credentialing expiration notifications.
5. **Construction / Trades**: Equipment return + tool inventory. Union-represented employees have collective-bargaining protections.
6. **Manufacturing**: Union considerations. Plant-specific WARN triggers. Workers' comp claim status.
7. **Financial Services**: Licensed roles — FINRA, state licenses — require specific handling. Reputation screens on public-facing roles.
8. **Restaurants / Hospitality**: High turnover; streamlined process essential. Hourly-specific pay-out rules.
9. **Nonprofit**: Mission-aligned alumni often remain engaged as volunteers + donors.
10. **Marketing / Agency**: Portfolio rights, client-account handoff, non-compete depending on market.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Separation** + **Reduction In Force Playbook**. Integrate with Okta/Azure AD/Rippling (SCIM), payroll, benefits, legal-document management.

**Proto**: Specialized Proto agents — separation-orchestration agent, SCIM-revocation agent, compliance agent (multi-state final pay + WARN), knowledge-transfer agent, exit-interview agent, alumni-lifecycle agent. Shared separation state.

## Related

- [Payroll](../payroll/SKILL.md) — final paycheck, PTO payout, equity withholding, severance processing
- [Benefits](../benefits/SKILL.md) — COBRA continuation, 401(k) distribution, life-insurance conversion
- [Onboarding](../onboarding/SKILL.md) — the mirror process
- [Performance Reviews](../performance-reviews/SKILL.md) — documented performance issues support involuntary termination defensibility
- [Recruitment](../recruitment/SKILL.md) — alumni re-hiring pipeline
- [Small-Org Offboarding (<100 people)](../../01-org-under-100/offboarding/SKILL.md)
- [Enterprise Offboarding (1k+ people)](../../03-org-1k-plus/offboarding/SKILL.md)
