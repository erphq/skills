---
name: commissions
description: This skill should be used when designing and paying sales commissions at an organization under 100 employees — typically simple commission plans (% of ACV on new business), monthly or quarterly payout via payroll, calculated in a spreadsheet or lightweight tool (QuotaPath, Spiff, CaptivateIQ), with founder or VP Sales owning plan design.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Commissions — Under 100 People

## What This Process Does

Commissions at this size are **the lever that aligns reps to revenue.** You have 1–10 sales reps on variable comp, 1–5 different plans (AE, SDR, CS/account manager, sales manager), monthly or quarterly payouts through regular payroll. Plans are usually simple — percentage of ACV on new business, spiffs on specific goals, some accelerators above quota. Payout tooling is often a spreadsheet for the first year, graduating to QuotaPath/Spiff/CaptivateIQ/Varicent at 5+ reps.

The work: **design plans that drive right behaviors, calculate payouts accurately and on-time, answer rep disputes with receipts, and evolve plans without gaming trust.** A bad plan design produces wrong-behavior (reps chasing easy deals, neglecting strategic accounts, sandbagging for year-end). A slow/inaccurate payout produces rep turnover and trust breakdown.

## Start Here: ERP•AI Templates

ERP•AI's **Small Business Commission Management** template provides plan definitions (per-role templates), monthly or quarterly calculation, dispute-resolution workflow, payroll handoff, and rep-facing statements. Pair with **Comp Plan Library** (role-specific comp plan documents) and integrate with CRM for deal data + HR for rep data.

## Build — Setting It Up

### With Agents

- **Commission calculation**: Agent pulls closed-won deals from CRM, validates against plan rules (eligibility, splits, exclusions), calculates commission per rep, generates monthly/quarterly statement.
- **Plan-rule enforcement**: Agent enforces plan specifics — quota credit by deal type (new/expansion/renewal differently), split credits (when multiple reps contributed), acceleration tiers above quota.
- **Payout-to-payroll integration**: Agent generates payroll file with commission amounts + handoff to Gusto/Rippling/ADP for payment with base pay.
- **Statement generation**: Rep-facing statement per payout period — deals included, calculation, YTD attainment, future-earnings projection.
- **Dispute resolution workflow**: Rep can dispute specific line items; agent routes to VP Sales/founder for review + resolution with documented rationale.
- **Quota-attainment tracking**: Agent tracks rep progress to quota continuously (not just at period end). Reps see running attainment.
- **Clawback management**: For contracts that don't complete (early termination, non-payment), agent calculates clawbacks per plan and recovers from future commissions.
- **Plan-change communication**: When plans evolve, agent orchestrates communication + acknowledgment from affected reps.

### Key Decisions

1. **Plan structure per role**:
   - **AE**: Base + variable (often 50/50 split, sometimes 60/40). OTE defines target. Quota varies by segment + experience.
   - **SDR**: Base + variable (70/30 typical). Bonus per qualified meeting → opportunity → $ converted.
   - **Sales Manager**: Base + variable (70/30). Variable paid on team quota attainment.
   - **CS/AM**: Base + variable (75/25). Variable on retention + expansion revenue.
2. **Quota setting**: 4–5× OTE is typical industry benchmark. Reps at quota earn OTE; top performers earn 2–3× OTE via accelerators.
3. **New vs expansion vs renewal**:
   - New business: Full quota credit, full commission rate.
   - Expansion: Full quota credit, sometimes reduced rate.
   - Renewal: Partial credit (50%) or separate renewal role + lower commission rate.
4. **Payout cadence**: Monthly calculation + payment most common. Quarterly possible for larger deals. Delayed payment (payout on cash-collected, not booked) protects against bad debt.
5. **Acceleration tiers**: Typical — 100% rate to 100% quota; 125% rate from 100–125% of quota; 150% rate above 125%.
6. **Spiffs**: Short-term (monthly/quarterly) incentives for specific behaviors (new-logo close, product-X close, strategic-account land). Budget allocated separately.
7. **Draw structures**: Most small orgs don't do draws. If implemented, "recoverable draw" (advance against future commissions) is standard.
8. **Clawback policy**: Typical — clawback for contracts canceled within 90–180 days of close. Document + communicate.

### Common Mistakes

- **Plans too complex at small scale**: 5-variable plan with accelerators, kickers, and SPIFFs at a 3-rep org. Nobody understands it; reps can't strategize. Simplify.
- **Plan changes mid-year without grace**: Change plan in August; reps already worked toward old plan. Trust broken. Grandfather or honor existing deals.
- **Slow/inaccurate payout**: 45-day payout cycle, errors in 20% of statements. Rep turnover follows.
- **No quota calibration**: Every rep gets same quota regardless of territory, product, experience. Some have easy year; others impossible. Demotivates high performers.
- **Commission on booking vs collected**: Paying on booking when customer hasn't paid yet risks paying on bad debt. Hybrid (partial on booking, balance on collected) or hold until collected common.
- **Discounting with no commission adjustment**: Rep discounts 30% to close; commission calculated on net. Rep's incentive maintained even when company loses margin. Should align — commission on margin or capped-discount trigger.
- **Disputes handled ad-hoc**: No formal dispute process = rep frustration, perceived unfairness, culture issues.
- **No YTD visibility**: Rep can't see running attainment. Doesn't know where they stand. Should be transparent + always-on.

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent tracks deal activity + commission accrual in real-time. Reps see running attainment.
- **End of period** (month or quarter): Calculate payouts. Reps review statements.
- **Payroll cutoff**: Commission payments sent to payroll.
- **Dispute period**: Reps have X days to dispute line items. Resolution within X days.
- **Monthly**: Plan-performance review — who's attaining, who's struggling, what patterns emerge.
- **Quarterly**: Plan-effectiveness review — is plan driving intended behaviors? Any gaming patterns?
- **Annually**: Plan redesign for next fiscal year. Market benchmarking + competitive comp analysis.

### What to Watch

- **Payout accuracy**: % of statements issued correctly first time. Target 100%; accept 95%+.
- **Quota attainment distribution**: Typical target: 60–70% of reps hit quota, 10–20% exceed, 10–20% below. Heavily skewed = plan design issue.
- **Payout turnaround**: Period-close to payment-received. Target <15 days.
- **Dispute frequency**: # disputes per payout period. Rising = plan clarity or calculation-quality issue.
- **Rep-attrition correlation with plan**: Losing top performers = plan competitiveness issue. Losing low performers = expected.
- **Commission as % revenue**: Typical 4–10% of new-business revenue. Trending up without matching productivity = plan inefficiency.
- **Clawback volume**: Should be rare. High volume = over-crediting at close or churn issues.

### Exception Handling

- **Dispute — rep says deal wasn't theirs**: Review CRM ownership + activity history + sales-assist notes. Document rationale. Pay if ambiguous (trust > savings on one deal).
- **Split credit question**: Review plan's split policy. Document split + rationale. Notify all affected reps.
- **Mid-year plan change needed**: Grandfather existing pipeline on old plan. New deals on new plan. Clear communication + acknowledgment.
- **Deal canceled within clawback window**: Apply clawback per plan. Communicate rationale. Absorb via future-period commissions.
- **Rep terminated mid-period**: Pay commissions earned to date (often pro-rata). Clawback applies if applicable. Document.
- **Acquisition-sourced deal**: Account of acquired company — did rep work this deal? Credit based on activity, typically.
- **Customer prepays multiple years**: Commission structure — full upfront (aggressive) or annualized over contract years (conservative). Plan should specify.
- **Strategic-deal compensation**: Some deals have custom commission (founder-directed, strategic) — document per-deal override with rationale.

## Scale — Growing It

### Automation Opportunities

- **Full automation**: CRM deal close → commission calc → statement → payroll handoff. No manual work per deal.
- **Predictive attainment**: Agent projects rep's year-end attainment from current pipeline + pace. Surfaces coaching opportunities.
- **Plan-effectiveness analytics**: Behavioral pattern detection — is plan incentivizing what you want? Are reps over-optimizing for specific SKUs? What's the gross margin impact?
- **Plan-change simulation**: Before rolling out new plan, simulate against historical data to anticipate payout + behavioral impact.
- **Rep-facing transparency**: Real-time dashboards + forecasting tools for reps to model their own year.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Sales team passes 20 reps — dedicated SalesOps/comp function needed.
- Plan complexity grows — accelerators, decelerators, SPIFFs, multi-product, territory overrides.
- Dedicated commission tool ROI justified — CaptivateIQ, Spiff, Varicent replace spreadsheets.
- Multi-segment, multi-geo, multi-product require specialized calculations.
- Compensation committee or formal comp-governance emerges.

## By Industry (at this scale)

1. **SaaS / Subscription**: ACV-based; new business vs expansion vs renewal separated. Multi-year incentives. Churn-clawback.
2. **Professional Services**: % of engagement fees, often on billings. Utilization bonus for billable resources.
3. **Manufacturing (B2B)**: Margin-based commissions often (not revenue). Volume + strategic account considerations.
4. **E-commerce (B2B wholesale)**: Margin + volume. Buyer/merchandiser sometimes commissionable.
5. **Financial Services**: AUM-based (asset-gathering reps); transaction-based (brokers); mix structures common.
6. **Healthcare (B2B)**: Territory-based, deal-size-based. Regulatory constraints on incentives (Stark, Anti-Kickback).
7. **Marketing / Agency**: Project-based or account-based commissions.
8. **Real Estate (B2B)**: Commission as % of deal value. Split commissions + brokerage fees.

## ERP•AI & Proto

**ERP•AI**: Deploy **Small Business Commission Management** + **Comp Plan Library**. Integrate with CRM (deal data), HR (rep data), payroll (payout execution).

**Proto**: Single Proto agent handles calculation, statement generation, dispute workflow, payroll handoff through ORAI. Specialized plan-design + analytics agents at scale.

## Related

- [Pipeline & Forecasting](../pipeline-forecasting/SKILL.md) — pipeline becomes commissionable revenue
- [Contracts & Renewals](../contracts-renewals/SKILL.md) — renewals + expansions feed commission
- [Territory Management](../territory-management/SKILL.md) — territory drives quota + commission eligibility
- [Payroll](../../../human-resources/01-org-under-100/payroll/SKILL.md) — commissions paid through payroll
- [General Ledger](../../../finance-accounting/01-org-under-100/general-ledger/SKILL.md) — commission expense accrual
- [Enterprise Commissions (1k+ people)](../../03-org-1k-plus/commissions/SKILL.md)
