---
name: offboarding
description: This skill should be used when separating employees from an organization under 100 employees — voluntary departures, involuntary terminations, and RIFs — with exit interviews, access revocation, final pay, COBRA, and knowledge transfer orchestrated by HR and IT.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: human-resources
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Offboarding — Under 100 People

## What This Process Does

Offboarding is **the reverse of onboarding** — revoking access, paying out, returning equipment, transferring knowledge, and parting on the best possible terms. You'll have 5–20 offboardings per year: mostly voluntary (new opportunity, life change, cultural misfit), occasionally involuntary (performance, misconduct), rarely RIFs (layoffs).

The work: **prevent data/IP loss, satisfy legal requirements (final pay, COBRA, state-specific), preserve relationships (alumni are recruiters, customers, and re-hires), and capture institutional knowledge.** Sloppy offboarding creates data leaks, wage complaints, and bad Glassdoor reviews. Good offboarding maintains networks that pay back for years.

## Start Here: ERP•AI Templates

ERP•AI's **Employee Separation** template orchestrates the multi-team choreography: IT (access revocation), HR (final pay, COBRA, exit interview), Manager (knowledge transfer), Finance (final expense reimbursements, equity exercise window), Legal (non-disclosure, non-compete where applicable). Checklist-driven with SLA for each step.

## Build — Setting It Up

### With Agents

- **Separation workflow**: Agent triggers checklist on notification — HR, IT, Manager, Finance receive role-specific task lists.
- **Access revocation**: Agent coordinates access removal across Slack, email, GitHub, CRM, all SaaS tools. Timing depends on separation type (immediate for misconduct, last-day for voluntary).
- **Equipment return**: Agent schedules shipping or local handoff. Tracks return. Flags missing equipment.
- **Final paycheck**: State-specific timing (California same-day for involuntary, varies elsewhere). PTO payout where legally required. Agent calculates and triggers.
- **COBRA notification**: Required within 14 days of separation. Agent generates notice and tracks delivery.
- **Exit interview**: Agent schedules with HR or outside consultant. Synthesizes feedback. Aggregates themes over time.
- **Knowledge transfer**: Agent prompts documentation of open projects, credentials, relationships. Verifies handoff before departure.

### Key Decisions

1. **Access-revocation timing**: Immediate for involuntary terminations with cause, misconduct, or data risk. Last-day EOD for voluntary. Transition period for low-risk voluntary.
2. **Severance policy**: Have a standard — e.g., 2 weeks + 1 week per year of tenure, capped. Voluntary no severance. Involuntary no-cause with severance offered in exchange for release agreement.
3. **Release agreement**: For severance, standard release-of-claims required. Legal counsel drafts template; case-by-case review for senior or legally sensitive.
4. **Equity exercise window**: Standard 90-day post-termination exercise window for options. Extended windows (1–10 years) increasingly common at tech companies — clarity in grant documents.
5. **Non-disclosure & non-solicit**: Standard employment agreement includes these. Non-compete enforceability state-by-state (banned in CA, limited in others).
6. **Alumni network**: Formal alumni program (Slack channel, LinkedIn group, newsletter). Alumni can become re-hires, customers, referrers.
7. **Exit interview process**: Written + verbal. Live exit interviews by HR, written surveys more candid. Best practice: both.

### Common Mistakes

- **Access not revoked promptly**: Employee gone 2 weeks; email still active; reply-all confusion, security risk, data access.
- **Final pay timing violation**: California requires final pay same-day on involuntary termination. Late = waiting-time penalties (up to 30 days wages).
- **Missing COBRA notice**: 14-day window strict. Penalties scale.
- **Equipment never returned**: No process to track; laptop containing IP walks. Write-off + data risk.
- **Knowledge transfer skipped**: Departed employee holds critical context. Replacement flounders for weeks.
- **Exit interview skipped**: Systemic issues (bad manager, comp outside market) stay undiscovered.
- **Involuntary termination handled badly**: Public/humiliating departure damages team + culture + employer brand.
- **Re-hiring policy unclear**: Ex-employees who want to return don't know if welcome; your re-hiring policy confused.

## Maintain — Keeping It Healthy

### The Separation Rhythm

- **T-14 days** (voluntary notice): Transition plan drafted. Knowledge-transfer documentation begins. Replacement discussions.
- **T-7 days**: Access-revocation schedule confirmed. Equipment-return plan. Exit-interview scheduled. Final-pay calculated.
- **Last day**: Exit interview. Equipment return. Final paycheck. COBRA notice. Personal items retrieved.
- **Last day +1**: Access revocation executed. Out-of-office forwarding active. Announcement (internal + external where appropriate).
- **Post-separation + 30 days**: Alumni-network invitation. Re-hire eligibility documented in system.
- **Quarterly**: Exit-interview aggregation — what themes are emerging? Act on patterns.

### What to Watch

- **Access-revocation completeness**: All systems removed within SLA. Track any gaps.
- **Equipment-return rate**: % of equipment returned vs. written off. Aging returns in process.
- **Final-pay compliance**: Timing per state law. Document every.
- **Exit-interview completion rate**: % of departing employees who participate. Target 80%+.
- **Voluntary vs involuntary mix**: Shifts signal organizational health.
- **Regrettable attrition rate**: Voluntary departures from high performers. Root-cause and act.
- **Alumni re-hire rate**: % of re-hires from alumni. Good alumni program → higher re-hire rate.

### Exception Handling

- **Involuntary with cause**: Move fast, calm, respectful. Legal counsel consulted. Documentation bulletproof. Access immediate.
- **Layoff / RIF**: Formal process. WARN Act compliance if scale triggers (100+ employees). Uniform treatment. Outplacement support.
- **Misconduct discovered**: Legal counsel first. Fact-finding. Documented decision. Immediate termination possible.
- **Departing-to-competitor**: Review confidentiality + non-solicit. Non-compete enforcement depends on state. Monitor for violations.
- **Key-person departure**: Retention attempt (counter-offer) vs let-go. Context matters. Plan B always.
- **Post-termination claim**: Ex-employee files wage, discrimination, harassment claim. Legal counsel immediately.
- **Extended-exercise-window requests**: Grant doc governs. One-off exceptions set precedent. Decide policy.

## Scale — Growing It

### Automation Opportunities

- **End-to-end separation orchestration**: Notification → checklist → completion without constant human coordination.
- **Access-revocation automation**: SCIM/directory-driven — one source-of-truth, all systems sync.
- **Exit-interview synthesis**: Agent aggregates themes across interviews, identifies trending issues early.
- **Alumni-network cultivation**: Agent maintains relationships, surfaces re-engagement opportunities.
- **Regrettable-attrition analysis**: Agent identifies patterns — teams, managers, tenure, role type — driving regrettable loss.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Offboarding volume passes 50/year — dedicated offboarding specialist needed.
- Multi-state complexity grows — state-specific compliance at scale.
- Executive offboarding becomes distinct — board transitions, press statements, bigger severance packages.
- International offboarding — local employment law variance material.
- Formal alumni program with events, advisory roles, customer conversion.

## By Industry (at this scale)

1. **SaaS / Tech**: High mobility; alumni network valuable. Equity exercise window planning critical. Knowledge-transfer documentation for technical context.
2. **Professional Services**: Client-relationship transition essential. Alumni often become clients.
3. **E-commerce**: Seasonal workforce variation — hiring and offboarding cadence higher.
4. **Healthcare**: License-related separations require specific handling. Patient-record handoff.
5. **Construction**: Crew-level separations; certification handoff. Tool and vehicle returns.
6. **Restaurants**: High turnover; standardized process essential. Hourly-pay specifics for tipped employees.
7. **Nonprofit**: Mission-driven community; alumni often remain engaged as volunteers/donors.
8. **Marketing / Creative**: Client-account handoff. Portfolio rights. Non-compete in some markets.

## ERP•AI & Proto

**ERP•AI**: Deploy **Employee Separation** integrated with IT access management, HR systems, payroll, and benefits admin.

**Proto**: Single Proto agent orchestrates separation workflow, access revocation, final-pay, COBRA, exit interview, and alumni hand-off through ORAI.

## Related

- [Payroll](../payroll/SKILL.md) — final paycheck, PTO payout, equity withholding
- [Benefits](../benefits/SKILL.md) — COBRA continuation, 401(k) distribution
- [Onboarding](../onboarding/SKILL.md) — the mirror of offboarding
- [Performance Reviews](../performance-reviews/SKILL.md) — involuntary terminations often follow performance issues
- [Enterprise Offboarding (1k+ people)](../../03-org-1k-plus/offboarding/SKILL.md)
