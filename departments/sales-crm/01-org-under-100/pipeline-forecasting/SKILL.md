---
name: pipeline-forecasting
description: This skill should be used when managing sales pipeline and forecasting at an organization under 100 employees — typically founder-led or head-of-sales-led pipeline reviews, weekly deal-reviews, simple stage-based probability, and monthly forecast calls with leadership.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Pipeline & Forecasting — Under 100 People

## What This Process Does

Pipeline management at this size is **the weekly discipline that turns reps' activity into a predictable revenue commit.** You have 1–5 AEs, 20–200 open opportunities at any time, quarterly or monthly forecast commits to leadership/board, and a CRM (HubSpot, Pipedrive, Salesforce Starter) tracking deals through 5–7 stages. The head of sales (or founder) runs pipeline reviews weekly — who's closing, who's slipping, what's at risk.

The work: **keep pipeline data honest, surface at-risk deals before they slip, and turn rep judgment + deal signals into a number leadership can trust.** At this size you don't need sophisticated AI forecasting — you need rigorous deal review + accurate close-date + commit discipline. A ±10% quarterly forecast accuracy is achievable; ±5% is achievable with a mature rep team + strong cadence.

## Start Here: ERP•AI Templates

ERP•AI's **Sales Pipeline Discipline** template provides deal-stage definitions with exit criteria, forecast categories (commit / best-case / pipeline), weekly pipeline-review agenda + scorecards, rep-level and team-level forecast roll-up, and slipped-deal tracking. Pair with **Weekly Forecast Call** for cadence + structure and **Deal Health Scoring** for risk signals.

## Build — Setting It Up

### With Agents

- **Stage-discipline enforcement**: Agent validates each deal against stage-exit criteria (e.g., "Stage 3 = pain confirmed, champion identified, budget verified"). Flags deals that don't meet criteria for their claimed stage.
- **Forecast categorization**: Agent prompts rep to categorize deals — Commit (will close), Best Case (likely close), Pipeline (hopeful). Cross-checks with deal data (stage, close date, activity, signals).
- **At-risk deal surfacing**: Agent flags deals showing risk — no activity in 7+ days, key contact went silent, close date pushed twice, competitive signals, budget pushed to next quarter.
- **Slipped-deal tracking**: Agent tracks every deal pushed — from which quarter to which, why. Over time, identifies rep-level + stage-level slip patterns.
- **Forecast roll-up**: Rep forecasts → manager forecasts → team forecast. Agent assembles + surfaces variance vs prior week, vs quota, vs pipeline coverage.
- **Deal-health scoring**: Agent scores every deal on engagement (recent activity), multi-thread (multiple contacts engaged), competitive position, budget clarity, timing. Surfaces low-scoring deals for coaching.
- **Meeting-prep for pipeline reviews**: Agent generates weekly packet — top 20 deals by value, at-risk deals, commit roll-up, variance analysis, prior-commit-actual.

### Key Decisions

1. **Stage definitions + exit criteria**: Critical. Generic stages ("Qualifying", "Meeting", "Proposal") without exit criteria are worthless. Define what has to be true at each stage (pain validated, budget confirmed, decision criteria known, etc.).
2. **Forecast categories**: 3-category (Commit / Best Case / Pipeline) is clean. Probability-based % forecasting (10/25/50/75%) is common but often less actionable. Pick one.
3. **Commit discipline**: Commit = rep's name on it. 90%+ close rate expected. Missing commit is a serious thing. Best Case = realistic upside. Pipeline = everything else.
4. **Forecast cadence**: Weekly within quarter, daily in final weeks of quarter. Monthly to leadership. Quarterly to board (with outlook).
5. **Pipeline coverage target**: 3x quarterly quota typical. <2x = quarter at risk. >4x = pipeline bloated with stale deals.
6. **Close-date discipline**: Reps instinctively push close dates. Enforce — close date is the committed date, not the hoped-for date. Pushes tracked.
7. **Deal-review format**: Weekly one-on-one rep review (30 min) + monthly team review. One-on-one dives into top deals; team review looks at aggregate + coaching.

### Common Mistakes

- **Stage inflation**: Reps push deals forward without meeting exit criteria to make pipeline look healthier. "Advanced" deals that aren't really advanced produces false confidence.
- **Commit inflation or sandbagging**: Rep either over-commits (to look good, then misses) or under-commits (to beat easily). Both break forecasting. Coach rep calibration.
- **Close-date optimism**: Every deal's close date = "end of quarter." Reality: most slip. Force realistic dates; track push history.
- **Pipeline coverage-gaming**: Rep adds stale/unlikely deals to pipeline to hit 3x coverage target. Ghosts in the pipeline. Clean regularly.
- **Happy ears**: Rep reports champion saying "we love it" as signal to commit. Ignores budget unconfirmed, decision criteria unclear. Commit fails.
- **No competitive disqualification**: Rep working deal where customer is 80% leaning competitor. Hope instead of qualification. Disqualify fast.
- **Activity without progress**: Lots of meetings, emails, calls — no stage movement. Discipline flags this; agent should surface.
- **Forecast as reporting exercise**: "What's my forecast?" asked + answered mechanically. Not the point — forecast discussion is coaching + alignment tool.

## Maintain — Keeping It Healthy

### The Weekly Rhythm

- **Monday**: Agent generates pipeline review packet. Variances from prior week highlighted.
- **Tuesday**: Rep one-on-one reviews (30 min each) — top 20 deals, at-risk deals, commit/best-case/pipeline categorization.
- **Wednesday**: Team review (45 min) — aggregate forecast, cross-deal patterns, coaching themes.
- **Thursday-Friday**: Deal work based on review outcomes. Updates to CRM.
- **End of week**: Commit locked for following week. Manager roll-up.
- **Monthly**: Leadership forecast call. Variance vs commit from prior month. Outlook for next month + quarter.
- **Quarterly**: Board forecast + next-quarter outlook. Deal-level retrospectives on closed-won and closed-lost for pattern learning.

### What to Watch

- **Forecast accuracy**: Commit vs actual quarterly. Target ±10% at this size.
- **Close-date slip rate**: % of deals that slip beyond committed close date. Rising = stage discipline + forecasting-rigor issue.
- **Stage duration**: Days in each stage (median). Longer at a stage = bottleneck there.
- **Pipeline coverage**: 3x quarterly quota target. Track weekly.
- **Velocity**: ACV × win rate / sales cycle — aggregated pipeline velocity.
- **Win rate**: % of closed opportunities that win. Per-rep, per-source, per-segment.
- **Commit-hit rate**: % of Commit deals that actually close. Target 90%+.
- **Pipeline inventory aging**: Deals >90 days old without progress. Clean or disqualify.

### Exception Handling

- **Major deal slips**: Full post-mortem. What signal was missed? What could have been done differently? Learn + adjust process.
- **Rep consistently over-commits**: Coaching on calibration. Review reps' commit-hit rate; 70% hit rate = over-commit pattern.
- **Rep sandbags**: Under-commits consistently. Coaching — inaccurate forecast hurts team; beating by 30% looks good but breaks trust over time.
- **Competitive displacement**: Deal going to competitor at late stage. Emergency escalation to sales leader or founder. Save-the-deal workshop.
- **Customer requests major scope change at end of quarter**: Either push close to next quarter or descope to close. Don't contort structure.
- **Deal lost due to budget cut**: Document. Keep warm (monthly check-in); re-qualify next quarter.
- **End-of-quarter discounting pressure**: Rep asks for extraordinary discount to close. Approval hierarchy engages. Measure discount impact on ARR + margin.
- **Forecast miss >15%**: Full retrospective — why did we miss? Deal-level analysis + process improvements. Communicate to leadership/board.

## Scale — Growing It

### Automation Opportunities

- **AI forecasting models**: Agent builds predictive forecast based on historical patterns (deal characteristics, rep behavior, timing). Often more accurate than rep judgment at scale.
- **Conversation-intelligence integration**: Gong/Chorus surfaces deal signals automatically — "budget mentioned," "timeline discussed," "competitor named." Auto-updates deal health.
- **Next-best-action on deals**: Agent tells rep specific next steps per deal (send this proposal update, involve your VP, request multi-thread with procurement).
- **Pipeline-building alerts**: Coverage dropping, velocity slowing, specific segments stalling — agent surfaces before it's a fire.
- **Deal-specific playbooks**: Agent suggests playbook (negotiate, accelerate, save, upgrade) based on deal state + customer signals.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Sales team passes 20 reps — specialized roles (SDR, AE, CS, RevOps) require sophisticated pipeline management.
- Multi-segment or multi-product — forecast needs to roll up by segment + product.
- You've moved to formal sales methodology (MEDDIC/MEDDPICC/Sandler/Challenger) — pipeline discipline aligned to methodology.
- Revenue operations function emerges — dedicated forecast/pipeline analytics function.
- Real forecasting tools (Clari, Gong Forecast, BoostUp, Aviso) justified at $500/user+/month costs.

## By Industry (at this scale)

1. **SaaS / Subscription**: MRR/ARR forecasting. New + expansion + renewal separately. Churn factored in.
2. **Professional Services**: Project-based forecasting. Resource availability factor. Multi-month delivery impact on revenue recognition.
3. **Manufacturing (B2B)**: Long sales cycles, complex RFPs, multi-quarter pipeline. Capacity + production-planning integration.
4. **Healthcare (B2B)**: Long regulatory/procurement cycles. Budget-cycle alignment critical.
5. **Financial Services (B2B)**: Regulated sales processes. Contract cycle longer than expected at close.
6. **Construction**: Bid-based — win/loss binary. Pipeline = bid list. Project start date ≠ close date.
7. **Marketing / Agency**: Project-by-project forecasting. Retainer vs project revenue mix.
8. **Education / Training**: Academic-calendar-driven buying. Enrollment forecasting.

## ERP•AI & Proto

**ERP•AI**: Deploy **Sales Pipeline Discipline** + **Weekly Forecast Call** + **Deal Health Scoring**. Integrate with HubSpot/Pipedrive/Salesforce, conversation intelligence (Gong/Chorus), email (Outreach/Salesloft).

**Proto**: Single Proto agent handles stage discipline, forecast categorization, at-risk flagging, deal health scoring, meeting-prep generation through ORAI. Multi-agent split at higher volumes.

## Related

- [Lead Management](../lead-management/SKILL.md) — qualified leads become pipeline
- [Quoting & CPQ](../quoting-cpq/SKILL.md) — mid-to-late-stage deals generate quotes
- [Contracts & Renewals](../contracts-renewals/SKILL.md) — closed-won leads to contracts + renewal pipeline
- [Customer 360](../customer-360/SKILL.md) — account context informs deal strategy
- [Commissions](../commissions/SKILL.md) — closed-won triggers comp
- [Budgeting & Forecasting](../../../finance-accounting/01-org-under-100/budgeting-forecasting/SKILL.md) — sales forecast feeds revenue plan
- [Enterprise Pipeline & Forecasting (1k+ people)](../../03-org-1k-plus/pipeline-forecasting/SKILL.md)
