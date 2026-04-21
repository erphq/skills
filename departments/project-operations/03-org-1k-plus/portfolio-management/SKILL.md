---
name: portfolio-management
description: This skill should be used when the task involves how to prioritize projects, allocate resources across your portfolio, manage the pipeline-to-delivery handoff, and score project health.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - psa
  type: skill
  scope: internal
---
# Portfolio Management

## What This Process Does

Portfolio management is about looking at all your projects together instead of one at a time. Individual project managers focus on their own engagement. Portfolio management asks the bigger questions: Are we working on the right projects? Are our best people on our most important work? Is the pipeline going to overwhelm our delivery capacity in 6 weeks? Which projects are quietly heading toward trouble?

This process covers project prioritization (deciding which projects matter most), resource allocation across projects (distributing people where they create the most value), pipeline-to-delivery handoff (smoothly transitioning won deals into active projects), and health scoring (a standardized way to assess whether each project is on track, at risk, or in trouble).

Think of it like managing an investment portfolio. You would never put all your money in one stock. You balance risk and return, diversify, rebalance periodically, and pay close attention to your worst performers. Portfolio management for professional services works the same way — you are balancing your investments of people, time, and attention across all the work your firm has committed to deliver.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Project Portfolio**, **Dashboard**, and **Report Builder** apps in the catalog. The Projects module supports multi-project views with status tracking. Deploy any PMO or portfolio template available, then customize the health scoring criteria and prioritization framework to match your firm's needs.

Also look for **Project Health Scorecard** and **Portfolio Dashboard** templates that provide executive-level visibility across all active engagements.

## Build — Setting It Up

### With Agents

AI agents turn portfolio management from a monthly reporting exercise into a continuous intelligence function:

- **Automated health scoring**: The agent calculates project health scores daily by pulling data from timesheets (are people logging expected hours?), financials (is the project on budget?), milestones (are deadlines being met?), and risk logs (are new risks appearing?). No more relying on project managers to self-report status.
- **Pipeline-to-delivery forecasting**: The agent connects pipeline data (deals in progress, win probabilities) with delivery capacity (current utilization, planned roll-offs). It forecasts demand 4 to 12 weeks out and flags when incoming work will exceed capacity.
- **Priority stack ranking**: Feed the agent your prioritization criteria (revenue, strategic importance, client relationship, margin) and it ranks all active and proposed projects. When resources are constrained, it recommends which projects to staff first.
- **Cross-project risk detection**: The agent identifies risks that span multiple projects — a single point of failure person on three critical path tasks across different projects, a technology dependency shared by multiple engagements, or a client that represents too much concentration.
- **Executive reporting**: The agent generates portfolio-level dashboards and narrative summaries. Instead of spending 2 days compiling a monthly portfolio review, the report writes itself.

### Key Decisions

**Prioritization framework**: How do you decide which projects matter most? Common factors include revenue value, strategic account importance, margin, contractual risk, and client satisfaction. Weight these factors and be transparent about the model. When everything is priority one, nothing is.

**Health scoring model**: What inputs drive the health score? A simple model uses four dimensions: schedule (on time vs. late), budget (on budget vs. over), scope (stable vs. creeping), and client satisfaction (happy vs. unhappy). Each gets a red/yellow/green rating, and the overall score follows the worst dimension.

**Portfolio governance cadence**: How often does the portfolio review happen? Weekly is ideal for the PMO team. Monthly for executive review. Quarterly for strategic portfolio rebalancing. More often is noise. Less often is dangerous.

**Pipeline handoff trigger**: At what point does a deal become a project? On verbal commitment? On signed SOW? On first payment? Define this clearly because it determines when planning and staffing begin. Starting too early wastes resources on deals that fall through. Starting too late means you scramble to staff won deals.

**Capacity planning horizon**: How far ahead do you forecast? Most firms look 4 to 12 weeks for operational staffing and 3 to 6 months for strategic planning. The further out you forecast, the less accurate it is, but the more time you have to react.

**Kill criteria**: Under what conditions do you recommend terminating a project? Define the thresholds — margin below X%, client satisfaction at red for Y weeks, scope growth exceeding Z% without corresponding revenue. Having kill criteria makes hard conversations easier.

### Common Mistakes

- **Project manager self-reporting**: Asking PMs to rate their own project health is like asking students to grade their own exams. They are biased toward green. Use objective data whenever possible.
- **No connection to pipeline**: If portfolio management only looks at active projects, you will always be surprised by new work. The pipeline is part of the portfolio — include it in every capacity planning exercise.
- **Equal treatment of all projects**: A $50K staff augmentation project does not need the same governance as a $5M transformation program. Tier your projects and apply proportionate oversight.
- **Measuring activity instead of outcomes**: Having weekly status meetings and generating reports does not improve delivery. Focus on decisions made and actions taken as a result of portfolio visibility.
- **Ignoring the bench**: Bench resources are not "available" resources. They might be the wrong skills, in the wrong location, or about to leave. Portfolio management must account for realistic capacity, not theoretical capacity.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Key metrics to monitor:**
- **Portfolio health distribution**: What percentage of projects are green, yellow, red? A healthy portfolio has 70% or more green, 15 to 25% yellow, and less than 10% red. If red exceeds 15%, you have a systemic problem.
- **Revenue at risk**: Sum of remaining revenue on yellow and red projects. This is the dollar value that might not materialize. Track it monthly.
- **Capacity utilization forecast**: Projected utilization for the next 4, 8, and 12 weeks, factoring in confirmed projects, probable pipeline, and known roll-offs.
- **Pipeline coverage ratio**: Value of weighted pipeline divided by remaining delivery capacity. A ratio below 1.0 means you might have idle capacity. Above 2.0 means you are oversold and some deals will need to wait or be subcontracted.
- **Client concentration**: Revenue from your top 5 clients as a percentage of total revenue. Above 50% is a concentration risk.
- **Margin distribution**: Histogram of project margins. Are most projects hitting target margin? Is there a long tail of low-margin work dragging down the average?

**Alerts to set:**
- Project health score drops from green to red (skipping yellow) — immediate executive attention
- Revenue at risk exceeds $X or Y% of quarterly target
- Capacity forecast shows utilization below 60% or above 90% for any practice in the next 4 weeks
- Pipeline coverage drops below 1.2 for any practice
- Single client exceeds 25% of quarterly revenue
- Three or more projects from the same client simultaneously at yellow or red status

### Exception Handling

**Sudden project cancellation**: A large project gets cancelled mid-delivery. The agent immediately calculates the impact — affected resources, revenue loss, utilization drop — and identifies other projects or pipeline deals that could absorb the freed-up capacity.

**Deal acceleration**: A deal that was expected to close next quarter closes this week. The agent assesses the staffing impact, identifies which current projects can release resources, and proposes a rebalancing plan.

**Systemic resource shortage**: Multiple projects need the same scarce skill set. The agent models different allocation scenarios, showing the trade-offs (e.g., "If we give Architect A to Project X, Project Y slips 3 weeks; if we split them 50/50, both projects slip 1.5 weeks").

**Executive escalation**: A red project needs executive intervention. The agent prepares an escalation package — current status, root causes, recovery options with cost and timeline impact, and a recommended action plan.

**Portfolio rebalancing**: Mid-quarter analysis shows the portfolio is skewed toward low-margin work. The agent identifies opportunities — which projects could benefit from scope expansion, which pipeline deals would improve the margin mix, and where rate increases could be negotiated.

### Routine Tasks

**Daily**: Agent updates health scores for all active projects based on overnight data processing (timesheets, milestone status, budget consumption).

**Weekly**: Agent generates a portfolio status summary for the PMO. Highlights projects that changed status, new risks, staffing conflicts, and pipeline changes.

**Bi-weekly**: Agent prepares materials for the portfolio review meeting — prioritized action items, projects requiring decisions, capacity forecast, and pipeline update.

**Monthly**: Agent produces a comprehensive portfolio report for executive leadership — financial performance, health trends, resource utilization, risk summary, and forward-looking indicators.

**Quarterly**: Agent conducts portfolio strategy analysis — win rate trends, margin trends, client satisfaction trends, and recommendations for portfolio rebalancing (invest more in X type of work, reduce exposure to Y).

## Scale — Growing It

### Adding Complexity

**Multi-region portfolios**: When delivery spans regions, you need portfolio views by geography with the ability to roll up globally. Different regions may have different utilization targets, rate structures, and margin expectations.

**Practice-level and firm-level views**: Practice leaders care about their portfolio. Firm leaders care about the overall portfolio. You need both views with the ability to drill from firm-wide down to individual projects.

**Program management**: Multiple related projects serving the same client or strategic objective need program-level health scoring. A program can be unhealthy even when individual projects look fine — if the integration between them is failing.

**What-if modeling**: As complexity grows, you need the ability to model scenarios. What happens to the portfolio if we lose Client X? What if we hire 20 developers? What if we win all 5 deals in the pipeline this month? Simulation capability becomes essential.

**Earned value management**: For fixed-price and large complex engagements, earned value metrics (CPI, SPI, EAC, ETC) give better health indicators than simple red/yellow/green. Integrate EVM into your health scoring model.

### Automation Opportunities

- **Predictive health scoring**: Instead of just reporting current health, the agent predicts where projects are heading. A project that is green today but has declining velocity and increasing risk register entries is likely to go yellow in 2 weeks.
- **Automated portfolio rebalancing recommendations**: Agent continuously models optimal resource allocation and suggests adjustments when the current allocation is suboptimal.
- **Win/loss impact modeling**: When a deal is about to close (or fall through), the agent instantly shows the portfolio impact and recommends adjustments.
- **Natural language portfolio queries**: Executives ask questions in plain English — "Which projects are most at risk this quarter?" or "Where are we most exposed to a single person leaving?" — and the agent answers with data.
- **Trend detection**: Agent identifies slow-moving trends invisible to humans — gradually declining project margins, increasing time-to-staff, growing client concentration — and alerts before they become problems.

### When to Redesign

- Executive confidence in portfolio data is low — they ask for "the real numbers" instead of trusting the dashboard
- You are managing more than 100 active projects without a formal prioritization framework
- Pipeline wins consistently surprise the delivery organization
- Health scores are not driving action — red projects stay red for months without intervention
- You have completed a major acquisition and need to merge portfolio management approaches
- Your portfolio management process takes more effort to maintain than the value it provides

## By Industry

1. **Manufacturing**: Portfolios include both IT system implementations and operational improvement projects. Health scoring must weight production impact risk heavily — a failed go-live at a factory has different consequences than a failed go-live at a corporate office.

2. **Healthcare**: Patient safety considerations elevate certain projects above pure financial prioritization. Regulatory deadlines (ICD changes, CMS mandates) create immovable constraints that override normal prioritization logic.

3. **Education**: Academic calendar creates a natural portfolio rhythm — heavy delivery in summer, lighter in fall/spring. Portfolio planning must account for enrollment-driven budget uncertainty at institutions.

4. **Retail**: Seasonal revenue patterns mean Q4 projects get automatic priority elevation. Portfolio balance must include a mix of quick-win store-level projects and longer strategic transformations.

5. **Hospitality**: Property portfolios with rolling implementations create wave-based delivery patterns. Health scoring must include brand standards compliance as a dimension alongside traditional schedule and budget metrics.

6. **Construction**: Portfolio management often mirrors the client's own project portfolio — they are managing construction projects while you manage the system implementation projects. Alignment between these parallel portfolios is critical.

7. **Real Estate**: Deal-driven portfolios where project starts are unpredictable. Capacity planning must account for deal flow volatility — some months have three closings, others have none.

8. **Agriculture**: Highly seasonal portfolio with intense delivery windows. Portfolio management must plan annual capacity around growing seasons and budget cycles tied to harvest revenue.

9. **Banking & Financial Services**: Regulatory-driven projects take priority regardless of margin. Portfolio health scoring should include regulatory compliance risk as a weighted dimension. Audit findings can instantly reprioritize the entire portfolio.

10. **Insurance**: Catastrophe events can divert resources from the portfolio to emergency response. Portfolio planning needs contingency capacity for unplanned regulatory or catastrophe-related work.

11. **Legal**: Practice area portfolios (litigation, transactional, regulatory) have different risk profiles and resource requirements. Portfolio management must balance across practice areas while respecting specialization boundaries.

12. **Government**: Fiscal year funding cycles create annual portfolio resets. Continuing resolution uncertainty can freeze entire portfolios for months. Color of money (funding type) constraints add a dimension to resource allocation.

13. **Pharma**: Clinical trial timelines create multi-year portfolio commitments. Pipeline-to-delivery handoff is complex due to regulatory milestones that gate project progression. Portfolio prioritization must weight patient impact.

14. **Automotive**: Model year cadences drive portfolio timing. Platform-wide projects (spanning multiple models or plants) require program-level portfolio management. Supplier relationship management affects project prioritization.

15. **Telecom**: Network modernization portfolios span years and billions in investment. Portfolio health scoring must include network performance impact and subscriber experience metrics.

16. **Media & Entertainment**: Content release schedules create hard deadlines that override normal prioritization. Portfolio includes a mix of technology projects and creative production support with very different management needs.

17. **Energy & Utilities**: Rate case and regulatory proceeding timelines drive portfolio priorities. Portfolio must balance reliability and compliance projects (mandatory) against efficiency and growth projects (discretionary).

18. **Food & Beverage**: Product launch calendars drive portfolio timing. Food safety compliance projects always take priority. Portfolio management must account for recall readiness as a standing requirement.

19. **Logistics & Transport**: Peak season preparation projects must complete before shipping volume ramps. Portfolio management includes partner integration projects that depend on third-party timelines outside your control.

20. **Nonprofit**: Mission alignment is a prioritization dimension alongside financial sustainability. Portfolio management must balance grant-funded projects (constrained scope and budget) with unrestricted fund projects (more flexibility).

21. **SaaS / Technology**: Product roadmap drives the portfolio more than client engagements. Portfolio management must balance new feature development, technical debt reduction, and client customization work.

22. **Professional Services**: Meta-challenge of managing a portfolio of client delivery while also managing internal improvement projects. Internal projects perpetually lose resources to client work because they do not generate revenue.

23. **Defense & Aerospace**: Contract type (FFP, CPFF, T&M) heavily influences health scoring and risk management approach. Portfolio management must account for security classification levels that restrict information sharing across projects.

24. **Mining**: Remote locations and harsh conditions create unique risk dimensions for portfolio health. Commodity price fluctuations can rapidly change client investment priorities, causing portfolio disruption.

25. **Chemicals**: Process safety risk adds a critical dimension to portfolio prioritization — a project that touches a safety-critical system gets heightened oversight regardless of its financial size.

26. **Textiles & Apparel**: Fashion season cadence creates portfolio waves with hard deadlines. Supply chain disruptions (shipping delays, raw material shortages) can cascade across the portfolio.

27. **FMCG**: Speed-to-market pressure means portfolio management must optimize for throughput, not just margin. Product launch success rates are a key portfolio outcome metric.

28. **Electronics**: Product lifecycle compression means portfolios turn over faster. Component obsolescence risks can affect multiple projects simultaneously and need portfolio-level monitoring.

29. **Oil & Gas**: Commodity price volatility causes rapid portfolio reprioritization. Capital project portfolios may include billion-dollar programs alongside small optimization projects, requiring very different management approaches.

30. **Jewelry & Luxury**: Brand reputation risk must be a portfolio health dimension — a botched luxury brand project can have outsized negative impact. Collection launch timelines are immovable and seasonal.


## ERP•AI & Proto

**ERP•AI**: The Projects module provides the underlying data for portfolio views — project status, financials, milestones, and resource allocation. Custom dashboards and Report Builder allow you to create portfolio-level visualizations. Integration with CRM gives pipeline visibility alongside active delivery.

**Proto**: Proto agents power the ORAI cycle for portfolio management — Observing project data, resource utilization, pipeline changes, and financial metrics across the entire portfolio; Reasoning about health trends, risk concentrations, and optimal resource allocation; Acting by generating health scores, alerts, and rebalancing recommendations; and Iterating as the portfolio evolves, continuously refining predictions and improving decision support.
