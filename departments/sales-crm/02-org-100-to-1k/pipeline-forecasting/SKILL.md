---
name: pipeline-forecasting
description: This skill should be used when managing sales pipeline and forecasting at an organization of 100-1,000 employees — typically 10-50 reps managed by sales managers + VP Sales + RevOps, formal methodology (MEDDPICC/MEDDIC/Sandler/Challenger), Gong/Chorus conversation intelligence, dedicated forecast tool (Clari, Gong Forecast, BoostUp), and monthly board-forecast cadence.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Pipeline & Forecasting — 100 to 1,000 People

## What This Process Does

Pipeline at this scale is **a structured, multi-layered forecasting engine driving material revenue commits.** A VP Sales + sales managers + RevOps team orchestrate pipeline reviews for 10–50 AEs across multiple segments/regions/products. 500–5,000 open opportunities at any time; formal sales methodology (MEDDPICC most common for mid-market B2B) drives deal inspection; Gong/Chorus surface deal signals from conversations; Clari/Gong Forecast/BoostUp/Aviso provide AI-driven forecasting; monthly commits to CFO/board with ±5–10% accuracy expectation.

The work: **achieve forecast accuracy, surface at-risk deals early, identify rep-level coaching opportunities, drive methodology adoption, and feed finance a defensible number.** Forecast misses have compounding consequences — missed commits degrade board trust, trigger headcount/spend freezes, create whiplash in the company. At scale, forecast accuracy is as much a process + discipline outcome as a rep-capability outcome.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Forecast Platform** template orchestrates the full forecast cadence — rep pipeline reviews, manager roll-ups, RevOps adjustments, VP Sales commits, CFO alignment. Pair with **Deal Inspection** for MEDDPICC/MEDDIC-driven deal review and **AI Forecast Accuracy** for conversation-intelligence-informed predictions. Integrates with Salesforce, Gong, and forecast platforms.

## Build — Setting It Up

### With Agents

- **Stage + methodology discipline**: Agent validates each deal against methodology (MEDDPICC field completeness: Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, Competition). Flags deals violating stage exit criteria.
- **Conversation-intelligence integration**: Agent processes Gong/Chorus data — extracts signals (budget mentioned, timeline discussed, competitor named, champion identified, objection raised). Updates deal health + fields.
- **AI forecast modeling**: Agent builds predictive forecast from deal data + rep behavior + historical patterns. Compares rep-forecasted vs AI-forecasted — surfaces discrepancies for coaching.
- **Deal inspection queue**: Agent prioritizes deals for manager review based on risk signals — high value + at risk, stage stagnation, signals diverging from forecast.
- **Roll-up + commit management**: Rep commits → Manager commits (may adjust) → VP Sales commits → RevOps adjustment → CFO align. Each layer has view + reasoning.
- **Commit-vs-actual tracking**: Agent tracks forecast accuracy per rep, per manager, per segment. Coaches calibration over time.
- **Meeting-prep packets**: Weekly manager + VP Sales + board reviews — agent assembles relevant views, commentary, deal deep-dives.
- **Slipped-deal post-mortem**: Every slipped deal gets structured analysis — what signal was missed? What should have been done? Feeds into coaching + process improvement.

### Key Decisions

1. **Sales methodology**: MEDDPICC (complex enterprise B2B), MEDDIC (slightly simpler), Sandler (relationship-selling), Challenger (consultative). Pick one; train org; enforce field completion.
2. **Forecast categories**: Commit / Best Case / Pipeline is 3-tier standard. Some use probability % (10/25/50/75/90) — more granular but often less actionable. Consistent across org.
3. **Commit discipline**: Commit = name-on-it, 90%+ expected close. Best case = realistic upside (50–70% expected). Pipeline = everything else. Missing commit = serious conversation.
4. **Forecast-tool choice**: Clari (market leader, AI-driven), Gong Forecast (integrated with Gong), BoostUp (predictive focus), Aviso (enterprise). Cost $30–100K/year + per-user.
5. **Cadence**: Weekly in-quarter forecast reviews (rep, manager, VP Sales); daily in final 2 weeks; monthly CFO/board; quarterly board outlook.
6. **Pipeline-coverage target**: 3× quarterly quota typical; varies by segment + sales-cycle length. Watch both current quarter + next quarter.
7. **Methodology enforcement**: Field completion required to advance stage. Coaching when fields weak. Consistent rigor across reps.
8. **Deal-health scoring**: Composite from engagement signals, multi-threading (multiple contacts engaged), competitive-position signal, timing, budget clarity. Surfaces risk early.

### Common Mistakes

- **Stage inflation with weak methodology**: MEDDPICC fields half-filled; reps advance deals without meeting bar. Forecast built on sand.
- **Manager ratification without inspection**: Manager "accepts" rep commit without genuine inspection. Manager forecast = rep forecast × 1.0. No value add.
- **AI forecast ignored**: Tool provides AI forecast; team treats as report but trusts rep forecast. Misses predictive signal advantage.
- **Pipeline-coverage gaming**: Stale pipeline padded to hit coverage target. 3× coverage with 40% junk ≠ 3× real coverage.
- **Forecast religion**: "Clari says $X, rep says $Y" — tool debate instead of discussion about deals.
- **Commit misses normalized**: Miss by 5% repeatedly; team accepts as normal. Trust-erosion compounds with CFO + board.
- **Coaching not triggered by data**: AI forecast vs rep forecast gap surfaces coaching opportunity; nobody coaches.
- **Conversation-intelligence underutilized**: Gong captures 500 calls/week; insights extracted; nobody acts on them.
- **RevOps seen as reporting function**: Forecast is output; coaching + process improvement are outcomes. RevOps should drive both.
- **Segment-specific patterns ignored**: Enterprise deals slip more predictably; SMB deals more volatile. One-size forecast methodology misses nuance.

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent processes CRM updates, Gong data, deal signals in real-time. Dashboards always current.
- **Daily**: Each rep reviews pipeline; updates stage + forecast + next steps. Manager reviews at-risk queue.
- **Weekly**: 1:1 pipeline reviews (30 min/rep). Team review (45 min). Deal inspections on top 20 deals. VP Sales + RevOps consolidation.
- **Bi-weekly**: VP Sales + CFO alignment meeting. Forecast variance from prior period reviewed.
- **Monthly**: Board forecast commit. Variance vs prior month, actionables.
- **Quarterly**: Board forecast + next-quarter outlook. Win/loss deep-dives. Forecast-accuracy retrospective. Methodology-adherence review.
- **Annually**: Sales methodology review + certification refresher. Forecast-process retrospective. Tooling review.

### What to Watch

- **Forecast accuracy**: Commit vs actual quarterly. Target ±5%. Key KPI for VP Sales + RevOps.
- **Commit-hit rate per rep + manager**: 90%+ target at commit level. Patterns of over/under signal coaching needs.
- **Stage duration by stage**: Median time in stage. Aging at specific stage = bottleneck.
- **Pipeline velocity**: ACV × win rate / cycle length. Aggregate + by segment.
- **Conversion rates by stage**: Stage 1→2, 2→3, etc. Funnel health.
- **Methodology-field completeness**: % of open deals with complete MEDDPICC. Target 95%+.
- **AI-forecast vs rep-forecast variance**: Tracks calibration. Reducing variance over time is good sign.
- **Close-date-slip count**: Distribution + patterns. Specific reps or segments.

### Exception Handling

- **Deal >$500K at risk**: Executive engagement. Save-the-deal workshop. All-hands-on-deck.
- **Rep consistently over-commits (70% hit rate)**: Coaching on calibration. Methodology-discipline focus. Possible performance-plan discussion.
- **Segment forecasting consistently wrong**: Methodology + conversion-rate review for that segment. Often segment-specific nuance not captured.
- **Major deal slip impacts commit**: Emergency replanning. What else can close this quarter? Board communication tactical.
- **Competitive displacement at late stage**: Late-stage deals shouldn't lose to competitors — failure of MEDDPICC discipline to identify competition earlier. Win/loss analysis.
- **End-of-quarter discounting pressure**: Discount-approval hierarchy engages. Deal-health scoring protects against panic concessions.
- **New-product segment forecast unreliable**: Historical data insufficient. Qualitative rep judgment + conservative stance. Build data over time.
- **Forecasting-tool migration**: Gradual transition, parallel run, validation before full cutover.

## Scale — Growing It

### Adding Complexity

- **Multi-segment forecast roll-up**: SMB + Mid-Market + Enterprise forecasts separately, consolidated. Different velocity profiles.
- **Multi-product forecast**: Cross-sell + net-new + expansion + renewal as distinct forecast streams.
- **International forecast**: Currency considerations, local sales-cycle patterns, time-zone complexity.
- **Platform vs services mix**: Subscription + services revenue forecast separately; different recognition patterns.
- **Multi-year-deal forecasting**: Annual recognition of multi-year bookings; commit includes booking not revenue.

### Automation Opportunities

- **AI-powered forecast dashboards**: Agent-curated views for each persona — CEO, CFO, VP Sales, managers, reps. Relevant data + anomalies highlighted.
- **Deal-signal orchestration**: Agent aggregates all signals per deal (CRM + email + Gong + support); surfaces unified deal-health.
- **Predictive deal-risk alerts**: Agent flags deals showing risk before human review catches it — e.g., champion leaves company (LinkedIn alert), engagement drops, competitor signal.
- **Coaching recommendations**: Agent suggests specific coaching topics per rep based on patterns in their deals.
- **Scenario-planning**: Agent models different close scenarios (realistic, optimistic, downside) with commit implications.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Public company — quarterly earnings forecasts require investor-grade accuracy + process.
- Sales org passes 100+ reps — dedicated RevOps team with deep specialization.
- Multi-country sales operations with currency + regulatory complexity.
- Board-level forecast rigor — audit-ready forecast workflow.
- Enterprise forecast platforms (Clari Enterprise, Anaplan-driven) business-critical.

## By Industry (at this scale)

1. **SaaS / Subscription**: New + expansion + renewal forecast separately. MRR/ARR + churn considered. Cohort analysis informs.
2. **Professional Services**: Bookings + revenue recognition separated. Project duration impacts timing.
3. **Manufacturing (B2B)**: Long sales cycles; capacity planning integrated with forecast; RFP pipelines tracked.
4. **Healthcare (B2B)**: Budget-cycle alignment critical. Regulatory review cycles extend deals.
5. **Financial Services (B2B)**: Regulated sales process elongates cycle. Deal sizes larger, forecasts lumpier.
6. **Construction**: Bid-based pipeline. Win/loss binary. Project-start timing key for revenue recognition.
7. **Marketing / Agency**: Retainer + project mix. Retainer = predictable; project = volatile.
8. **Education / Training**: Academic calendar drives enrollment timing; predictable seasonality.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Forecast Platform** + **Deal Inspection** + **AI Forecast Accuracy**. Integrate Salesforce, Gong/Chorus, forecast platforms (Clari/Gong Forecast/BoostUp), methodology frameworks (MEDDPICC adoption).

**Proto**: Specialized Proto agents — methodology-discipline agent, conversation-intelligence agent, AI-forecast agent, deal-inspection agent, commit-management agent, slipped-deal post-mortem agent. Shared pipeline state.

## Related

- [Lead Management](../lead-management/SKILL.md) — MQLs become SQLs become opportunities in pipeline
- [Quoting & CPQ](../quoting-cpq/SKILL.md) — late-stage deals generate quotes
- [Contracts & Renewals](../contracts-renewals/SKILL.md) — closed-won becomes contracts; renewals + expansions feed future pipeline
- [Commissions](../commissions/SKILL.md) — closed-won triggers commission accrual
- [Customer 360](../customer-360/SKILL.md) — account context informs deal strategy
- [Budgeting & Forecasting](../../../finance-accounting/02-org-100-to-1k/budgeting-forecasting/SKILL.md) — sales forecast feeds revenue plan
- [Small-Org Pipeline & Forecasting (<100 people)](../../01-org-under-100/pipeline-forecasting/SKILL.md)
- [Enterprise Pipeline & Forecasting (1k+ people)](../../03-org-1k-plus/pipeline-forecasting/SKILL.md)
