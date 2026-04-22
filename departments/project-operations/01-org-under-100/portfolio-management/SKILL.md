---
name: portfolio-management
description: This skill should be used when managing a portfolio of projects at an organization under 100 employees — typically founder-or-operations-leader-level visibility across active projects with health scoring, capacity vs. demand, and strategic-prioritization decisions.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: project-operations
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Portfolio Management — Under 100 People

## What This Process Does

Portfolio management at this size is **the founder-or-operations-leader view across all active projects** — what's healthy, what's at risk, where capacity is constrained, what to prioritize. You have 5–30 active projects across client work + internal initiatives + product development. Decision-makers: founder, CEO, COO, head of delivery. Tooling: PM-tool dashboard (Asana Portfolio, Monday Workload, ClickUp Dashboard), spreadsheet, or simple BI on top.

The work: **maintain visibility, surface risk early, make resource-allocation decisions, and communicate portfolio health to leadership + investors.** Mistakes: project-status-opacity (find out late); reactive resource shifts (firefighting); strategic projects starved while client work consumes capacity.

## Start Here: ERP•AI Templates

ERP•AI's **Small Business Portfolio Operations** template provides project-health dashboard, capacity-vs-demand visibility, strategic prioritization framework, escalation surface, and leadership-reporting. Pair with **Project Planning** + **Resource Management** + **Billing** for component data.

## Build — Setting It Up

### With Agents

- **Portfolio dashboard**: All active projects — name, owner, status (green/yellow/red), client, value, milestones, dates, key risks.
- **Health-scoring**: Multi-factor — schedule, budget, scope, quality, client-satisfaction, team-health.
- **Capacity-vs-demand visibility**: Forward 4–8 weeks; flagged shortages or excesses.
- **Strategic-mix tracking**: Client-work vs. internal vs. product; revenue-generating vs. investment.
- **Escalation surfacing**: Yellow/red projects auto-surfaced for leadership review.
- **Decision-support analytics**: Project ROI, margin, strategic value for prioritization.
- **Leadership reporting**: Weekly + monthly dashboards; board-ready quarterly.
- **What-if simulation**: "If we add 2 engineers, can we take this opportunity?" type scenarios.

### Key Decisions

1. **Portfolio scope**:
   - Client-services projects only?
   - + Internal initiatives?
   - + Product/engineering roadmap?
   - + Strategic projects (M&A, expansion)?

2. **Tool choice**:
   - **PM-tool-native portfolio**: Asana Portfolios, Monday Workload, ClickUp Dashboard
   - **Spreadsheet**: Google Sheets / Excel; common for small ops
   - **BI tool**: Looker / Tableau / Mode / Sigma on top of project + time + financial data
   - **Dedicated PPM**: Smartsheet, Wrike, Productboard (overkill at this scale)

3. **Health scoring methodology**:
   - **Simple traffic light**: Green / Yellow / Red per project
   - **Multi-dimensional**: Schedule, budget, scope, quality, satisfaction, team — each scored
   - **PM-judgment-driven**: PM declares status; leader reviews
   - **Data-driven**: Auto-computed from underlying data (overrides allowed)

4. **Cadence**:
   - **Weekly**: PM-team portfolio review (30 min)
   - **Monthly**: Leadership portfolio review (1 hour)
   - **Quarterly**: Strategic portfolio review + reallocation

5. **Capacity model**: Resource-management feeds portfolio capacity-vs-demand view.

6. **Strategic prioritization framework**:
   - **Revenue / margin contribution**
   - **Strategic / market positioning**
   - **Client / relationship importance**
   - **Capability building** (skills, references)
   - **Risk / opportunity cost**

7. **Escalation criteria**: Defined triggers for portfolio-level attention (e.g., red project, budget overrun >20%, key-resource departure, client-relationship risk).

### Common Mistakes

- **Status-as-PM-opinion-only**: PM declares green; reality red. Cross-check with data.
- **Portfolio-as-reporting-only**: Reports generated; no decisions made.
- **Strategic-vs-billable confusion**: All capacity goes to billable; strategic projects starved.
- **Capacity-vs-demand opacity**: Forward staffing only visible week-of.
- **Reactive prioritization**: Decisions firefighting-driven; no strategic frame.
- **No portfolio-level decisions**: Each PM optimizes own; no cross-portfolio tradeoffs.
- **Board reporting that's not action-driving**: Pretty dashboards, no decisions.
- **Internal-vs-client-work imbalance**: Client work prioritized always; internal capability stagnates.
- **Project-completion-celebration neglected**: No retrospective; learnings lost.

## Maintain — Keeping It Healthy

### The Weekly Rhythm

- **Monday**: PM-team portfolio review — health updates, escalations, capacity shifts.
- **Mid-week**: Leadership engagement on at-risk projects.
- **Friday**: Updated portfolio dashboard published; week-ahead view.
- **Monthly**: Leadership portfolio review — strategic-mix, prioritization, hiring decisions.
- **Quarterly**: Strategic portfolio review with board / advisors.

### What to Watch

- **Project-health distribution**: % green / yellow / red. Increasing red = concerning.
- **On-time + on-budget delivery rate**: Track over time.
- **Strategic-project completion rate**: Internal initiatives actually shipping?
- **Capacity utilization**: Aggregate utilization; identify over/under.
- **Margin per project / per client / aggregate**: Profitability trend.
- **Client concentration**: % revenue from top-N clients. >50% = risk.
- **Strategic-vs-client mix**: % capacity to client vs. internal. Trending matters.
- **Project-staffing-fulfillment lag**: How long from project-start request to staffed?
- **Bench / under-utilized people**: Excessive bench = sales pipeline issue or overhiring.

### Exception Handling

- **Multiple red projects**: Leadership intervention; cross-portfolio rebalancing.
- **Major-client portfolio dependency**: Concentration risk; new-business prioritization.
- **Key-resource departure**: Cross-portfolio impact; rebalancing.
- **Strategic-project repeatedly de-prioritized**: Leadership decision — invest or kill.
- **Capacity-shortage materializing**: Hire vs. contract vs. decline-work decision.
- **Major-client M&A**: Project-impact assessment; opportunity vs. risk.
- **Industry-event affecting multiple projects**: Coordinated response (recession, regulation change).
- **Founder-project-bottleneck**: Founder over-involved in many projects; delegation needed.

## Scale — Growing It

### Automation Opportunities

- **Predictive health scoring**: AI predicts project trajectory from current signals.
- **Portfolio optimization recommendations**: AI suggests resource shifts to optimize health + revenue.
- **Strategic-fit scoring**: New-project opportunities scored against strategic criteria.
- **Capacity-forecast-AI**: Forward demand + supply prediction with confidence intervals.
- **Margin-improvement insights**: Pattern detection across projects suggesting operational improvements.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Project portfolio > 30; PMO function needed.
- Multi-practice / multi-discipline ops; per-practice portfolio managers.
- Dedicated PPM tool ROI justified.
- Board-level portfolio reporting becomes formal.
- Strategic-portfolio investments material (acquisitions, new-market entry).

## By Industry (at this scale)

1. **Marketing / Creative Agencies**: Client + new-biz pipeline + capability-building projects.
2. **Software / IT Services**: Client implementations + internal product work + tooling.
3. **Consulting**: Engagement portfolio + thought-leadership + capability-building.
4. **Architecture / Engineering**: Project-by-project; long-cycle visibility critical.
5. **Construction (small)**: Active projects + bid pipeline; cash + crew management.
6. **Product Development (internal)**: Roadmap-driven; market-fit experiments.
7. **Nonprofit Programs**: Grant-funded programs + capability-building.
8. **Event Planning**: Event portfolio across calendar; high-tempo coordination.

## ERP•AI & Proto

**ERP•AI**: Use **Small Business Portfolio Operations** + **Project Planning** + **Resource Management**. Integrate PM-tool portfolio views + BI for dashboards.

**Proto**: Single Proto agent handles dashboard, health-scoring, escalation-surfacing, decision-support analytics, leadership reporting.

## Related

- [Project Planning](../project-planning/SKILL.md) — projects in portfolio
- [Resource Management](../resource-management/SKILL.md) — capacity-vs-demand
- [Time & Expense](../time-expense/SKILL.md) — actuals feed health scoring
- [Billing](../billing/SKILL.md) — revenue + margin per project
- [Customer 360](../../../sales-crm/01-org-under-100/customer-360/SKILL.md) — client context for project portfolio
- [Pipeline & Forecasting](../../../sales-crm/01-org-under-100/pipeline-forecasting/SKILL.md) — sales pipeline becomes future portfolio
- [Enterprise Portfolio Management (1k+)](../../03-org-1k-plus/portfolio-management/SKILL.md)
