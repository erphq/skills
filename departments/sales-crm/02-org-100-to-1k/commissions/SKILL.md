---
name: commissions
description: This skill should be used when designing and managing commissions at an organization of 100-1,000 employees — typically a SalesOps/RevOps team owning plan design, dedicated comp tooling (CaptivateIQ, Spiff, Varicent, Performio), formal plan-governance process, and rep-facing transparency dashboards.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Commissions — 100 to 1,000 People

## What This Process Does

Commissions at this scale is **a strategic function with material dollar volume + behavioral impact.** A SalesOps or RevOps team (often 1–5 people on comp specifically) owns plan design, calculation, dispute resolution, and analytics. Sales team is 10–50+ reps across multiple roles (SDR, AE, sales manager, CS/AM, sales engineer, channel) on differentiated comp plans. Dedicated tools: CaptivateIQ, Spiff (now ServiceNow), Varicent, Performio, Xactly. Annual comp budget often $5–50M.

The job: **drive right behaviors via thoughtful plan design, calculate accurately at scale, manage disputes with rigor, and evolve plans without breaking trust.** Plan-design mistakes drive wrong behaviors (sandbagging, deal stuffing, neglecting strategic accounts). Calculation errors at scale produce mass disputes. Plan changes mid-year erode trust permanently.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Commission Management** template provides multi-role plan support, automated calculation engine, real-time rep-facing transparency, dispute workflow, payroll integration, and plan-effectiveness analytics. Pair with **Plan Design Library** (role-specific templates) and **Commission Audit & Compliance** for SOX-ready trail (public-company prep).

## Build — Setting It Up

### With Agents

- **Plan-rule engine**: Agent applies plan rules per rep — quota, accelerators, splits, exclusions, eligibility. Handles complex multi-tier + multi-product structures.
- **Real-time accrual**: Reps see running attainment + projected commission continuously. No surprises.
- **Calculation orchestration**: Period-end calculation runs across all reps + plans. Validation + approval workflow.
- **Statement generation + delivery**: Per-rep statement with deal-by-deal breakdown, methodology, YTD attainment, projected next period.
- **Dispute workflow**: Rep flags specific line item; agent routes to comp-ops; resolution tracked + documented.
- **Payroll integration**: Payouts flow to payroll (Workday/UKG/ADP/Rippling) via automated handoff.
- **Plan-design simulation**: Before rolling out new plan, simulate against historical data — what would payouts have been? Behavior-change predictions?
- **Clawback automation**: Contract cancellation triggers clawback per plan rules; agent calculates + recovers.
- **SPIFFs / contests**: Short-term incentive programs configured + tracked separately.
- **Comp-analytics dashboards**: Quota attainment distribution, plan-effectiveness, rep productivity, ROI per dollar of variable comp.

### Key Decisions

1. **Plan structure per role** (typical mid-market):
   - **AE**: Base + variable (50/50 split typical for SaaS), accelerators above quota (125% rate 100–150%, 150% rate above), accelerator caps in some plans.
   - **SDR**: Base + variable (70/30 typical), MBO + meetings-set + opportunities-created + qualified-pipeline.
   - **Sales Manager**: Base + variable (70/30), team quota attainment + individual contribution + management bonus.
   - **CS / AM**: Base + variable (75/25 or 80/20), retention + expansion ARR.
   - **Sales Engineer**: Base + variable (80/20), team-based on AE quota attainment.
   - **Channel Manager**: Base + variable (50/50 or 60/40), channel-sourced revenue.
2. **Quota setting**: 4–5× OTE typical industry benchmark. Differentiate by territory, segment, tenure.
3. **Acceleration tiers**: 100% rate to 100% quota; 125–150% rate above. Caps optional.
4. **Booking vs collected**: Booking-based simpler; collected-based protects against bad debt. Hybrid common.
5. **Comp tool**: CaptivateIQ (modern + popular), Spiff (modern, ServiceNow acquisition 2024), Varicent (enterprise-strength), Performio (international + enterprise), Xactly (legacy enterprise — Vista Equity private 2017).
6. **Plan governance process**: Annual planning Q4 → board approval → pilot test → cascade rollout → ongoing tracking. Don't change mid-year without serious justification.
7. **Dispute SLA**: Documented turnaround (e.g., disputes resolved within 14 days of statement delivery).
8. **Compensation philosophy** (documented): Base/variable mix, performance distribution, market positioning, equity.
9. **SPIFFs budget allocation**: Reserved budget separate from base + variable.

### Common Mistakes

- **Plan complexity exceeds team comprehension**: 8-variable plan; reps can't compute their own commission. Drives sandbagging + game-playing.
- **Plan changes mid-year**: Sales team works toward goal that changes. Trust permanently eroded.
- **Quota miscalibration**: Some reps get-in-bed-comfortable, others impossibly stretch. Demotivation across spectrum.
- **Calculation errors at volume**: Statements arrive with errors; trust + dispute workflow overwhelmed.
- **Discount-to-commission misalignment**: Reps discount aggressively because commission paid on net regardless. Margin eroded; rep behavior incentivized wrong.
- **Manager comp underdesigned**: Manager paid on individual contribution rather than team — wrong incentive.
- **Clawback policy unclear**: Customer churns within 6 months; nobody knows whether commission claws back. Inconsistent application.
- **No plan-effectiveness measurement**: Plan launched + never evaluated for behavioral impact.

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent tracks deal activity + commission accrual real-time. Reps see running attainment.
- **End of period (monthly + quarterly + annually)**: Calculation runs. Statements generated.
- **Statement delivery**: Reps receive within 5 business days of period close.
- **Dispute window**: 14 days from statement delivery.
- **Payroll cutoff**: Validated commissions sent to payroll for next pay run.
- **Monthly**: Plan-performance review. Distribution analysis. Patterns surfaced.
- **Quarterly**: Plan-effectiveness deep dive. Rep-feedback aggregation.
- **Annually**: Plan redesign for next fiscal year. Board approval. Communication + training.

### What to Watch

- **Calculation accuracy**: % of statements correct first time. Target 99%+. Below 95% = process issue.
- **Quota attainment distribution**: Healthy 60–70% at quota, 10–20% exceed, 10–20% below. Skewed = plan-design or quota-setting issue.
- **Payout-vs-budget**: Annual variable comp payout vs budget. Material variance signals plan-design + market issues.
- **Dispute frequency**: Disputes per period as % of statements. Rising = plan complexity + calculation issues.
- **Rep-attrition correlation**: Top performers leaving = plan-uncompetitive. Bottom leaving = expected.
- **Commission as % of revenue**: Track over time. Material drift = plan-effectiveness issue.
- **Clawback volume**: Should be rare. High = over-crediting at close + churn issues.
- **Plan-rule exception count**: One-off rule overrides. High = plan doesn't match reality.

### Exception Handling

- **Dispute — wrong deal credit**: Review CRM deal ownership + activity history. Document rationale. Pay if ambiguous.
- **Split credit determination**: Review plan policy. Document split + rationale. Notify all affected reps.
- **Mid-year plan change required**: Grandfather existing pipeline on old plan; new deals on new plan. Communication + rep-acknowledgment.
- **Deal canceled within clawback window**: Apply per plan. Communicate rationale. Absorb via future commissions.
- **Rep terminated mid-period**: Pay commissions earned to date (often pro-rata). Apply clawback if applicable.
- **Acquisition-sourced deal**: Account of acquired company — credit based on actual selling activity.
- **Customer prepays multi-years**: Plan should specify — full upfront or annualized over years.
- **Strategic-deal compensation override**: Documented per-deal override with rationale + executive approval.
- **Plan-error correction**: If genuine plan error misallocated commission, communicate + correct + apologize. Don't compound by hiding.

## Scale — Growing It

### Adding Complexity

- **Multi-segment + multi-region plans**: Different rep types in different markets with different OTE + quota structures.
- **Multi-product comp differentiation**: Different rates per product type (e.g., new-product accelerator).
- **Channel + partner comp**: Channel managers + partner-sourced deal-rep splits.
- **International stock-comp + tax considerations**: Multi-jurisdiction equity awards + regulatory differences.
- **Pay-for-performance refinements**: MBO-driven bonuses, behavioral incentives, retention-based comp.

### Automation Opportunities

- **Real-time accrual + projection**: Reps see commission running + projected full year.
- **Predictive plan-effectiveness**: Agent suggests plan adjustments based on observed behavior patterns.
- **Plan-change-impact-modeling**: Before rolling out new plan, agent models payout + behavior + retention impact.
- **Dispute-prediction**: Agent flags statement lines likely to be disputed + offers explanation.
- **Comp-vs-market analytics**: Compare comp packages to market data; identify gaps.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Sales team passes 100 reps; comp complexity scales.
- Multi-product, multi-segment, multi-region plan structure becomes unwieldy.
- Public-company SOX comp controls + audit requirements.
- Comp committee or formal compensation-governance structure.
- Comp tooling investment $200K+/year justified.

## By Industry (at this scale)

1. **SaaS / Subscription**: ACV-based; new vs expansion vs renewal differentiated. Multi-year incentives. Churn-clawback.
2. **Professional Services**: % of engagement fees, often on billings or collected. Utilization bonus.
3. **Manufacturing (B2B)**: Margin-based commissions common. Volume + strategic-account considerations.
4. **E-commerce (B2B wholesale)**: Margin + volume. Buyer/merchandiser sometimes commissionable.
5. **Financial Services**: AUM-based, transaction-based, mix structures. Regulatory comp constraints.
6. **Healthcare (B2B)**: Territory-based. Stark/Anti-Kickback compliance constraints.
7. **Marketing / Agency**: Project + account-based commissions.
8. **Real Estate (B2B)**: % of deal value. Split commissions + brokerage fees.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Commission Management** + **Plan Design Library** + **Commission Audit & Compliance**. Integrate CRM (deal data), HR (rep data), payroll (payout execution), comp tool (CaptivateIQ / Spiff / Varicent / Performio).

**Proto**: Specialized Proto agents — calculation agent, statement-generation agent, dispute-resolution agent, payroll-integration agent, plan-effectiveness analytics agent, comp-design simulation agent.

## Related

- [Pipeline & Forecasting](../pipeline-forecasting/SKILL.md) — pipeline becomes commissionable revenue
- [Contracts & Renewals](../contracts-renewals/SKILL.md) — renewals + expansions feed commission
- [Territory Management](../territory-management/SKILL.md) — territory drives quota + commission
- [Quoting & CPQ](../quoting-cpq/SKILL.md) — closed quote = commission event
- [Payroll](../../../human-resources/02-org-100-to-1k/payroll/SKILL.md) — commissions paid through payroll
- [General Ledger](../../../finance-accounting/02-org-100-to-1k/general-ledger/SKILL.md) — commission accrual
- [Small-Org Commissions (<100 people)](../../01-org-under-100/commissions/SKILL.md)
- [Enterprise Commissions (1k+ people)](../../03-org-1k-plus/commissions/SKILL.md)
