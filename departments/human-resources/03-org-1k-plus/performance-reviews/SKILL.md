---
name: performance-reviews
description: This skill should be used when the task involves run goal setting, review cycles, 360 feedback, calibration sessions, PIPs, and promotion decisions.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - hrms
  type: skill
  scope: internal
---
# Performance Reviews

## What This Process Does

Performance reviews are how your company formally evaluates how well employees are doing their jobs, sets expectations for the future, and makes decisions about raises, promotions, and development. The process includes setting goals at the beginning of a review period, tracking progress throughout the period, collecting feedback from managers and sometimes peers and direct reports (360 feedback), conducting the formal review conversation, calibrating ratings across the organization so they are fair and consistent, and acting on the results — promotions, compensation changes, development plans, or performance improvement plans (PIPs) for people who are not meeting expectations. Done well, performance reviews help people grow and keep your best talent. Done poorly, they are a dreaded bureaucratic exercise that demoralizes everyone.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Performance Management** app, the **Goal Setting & OKR** template, the **360 Feedback** workflow, and the **Review Cycle** template in the 720+ catalog. There are also templates for continuous feedback, calibration sessions, and PIP management. Deploy the closest match, then customize your rating scales, review timelines, competency frameworks, and calibration rules on top.

## Build — Setting It Up

### With Agents

Agents take the administrative burden out of performance reviews so managers and HR can focus on the conversations that matter.

- **Goal setting assistance**: The agent helps employees and managers write effective goals using frameworks like SMART (Specific, Measurable, Achievable, Relevant, Time-bound) or OKRs (Objectives and Key Results). It suggests goals based on the role, department priorities, and company objectives, and flags goals that are too vague or unmeasurable.
- **Continuous feedback collection**: Throughout the review period, the agent prompts managers and peers to submit feedback after projects, presentations, or milestones. It stores this feedback so that review time is about summarizing months of observations, not trying to remember them.
- **Review cycle orchestration**: The agent manages the entire cycle — launching self-assessments, collecting manager reviews, sending 360 feedback requests, tracking completion, sending escalating reminders, and assembling completed reviews for calibration.
- **Writing assistance**: The agent helps managers write review narratives that are specific, balanced, and constructive. It flags language that is vague ("good job"), biased (gendered language, recency bias indicators), or inconsistent with the rating given.
- **Calibration preparation**: The agent compiles rating distributions by department, team, and manager, identifying potential rating inflation, compression, or outliers. It prepares materials that help calibration sessions focus on substantive discussions, not data gathering.
- **Outcome processing**: After reviews are finalized, the agent routes promotion recommendations for approval, generates compensation change recommendations based on review results and salary band data, creates development plans, and initiates PIPs for below-expectation performers.

### Key Decisions

**Review cadence**: Annual, semi-annual, or quarterly? Annual reviews are traditional but often feel disconnected from daily work. Quarterly reviews are more timely but create significant administrative overhead. Many companies now do semi-annual formal reviews with continuous informal check-ins.

**Rating scale**: Will you use ratings? If so, how many levels? A 5-point scale (Exceeds, Meets+, Meets, Below, Unsatisfactory) is common. Some companies have moved to 3-point or even no ratings. The choice affects calibration, compensation decisions, and employee perception.

**360 feedback**: Will peers and direct reports provide feedback? For all employees or just managers? 360 feedback provides a fuller picture but adds complexity and requires trust that responses will be handled appropriately.

**Goal framework**: OKRs, SMART goals, competency-based, or a hybrid? OKRs work well for companies that want alignment to company strategy. Competency-based reviews work for roles where behaviors matter as much as outcomes. Most companies use a combination.

**Calibration method**: How will you ensure consistency? Common approaches include forced ranking (controversial and declining), calibration sessions by department, cross-functional calibration committees, or statistical adjustment. Decide before your first review cycle.

**Compensation link**: How directly do review ratings translate to raises and bonuses? A tight link motivates performance but can make reviews feel like negotiation rather than development. A loose link preserves the developmental focus but can feel disconnected.

### Common Mistakes

**Annual-only feedback**: If the first time someone hears they are underperforming is at their annual review, you have failed as a manager. Reviews should confirm what people already know from continuous feedback, not deliver surprises.

**Rating inflation**: When everyone gets the top rating, the system loses meaning. Without calibration, manager tendencies dominate — some give everyone 5s, others never give above a 3. This destroys trust and makes merit-based decisions impossible.

**Vague goals**: "Improve customer satisfaction" is not a goal. "Increase NPS score from 32 to 40 by Q3 through implementing the new support workflow" is a goal. The agent helps, but the manager and employee must put in the thought.

**Ignoring recency bias**: Managers remember the last two months, not the last twelve. Without continuous feedback documentation, reviews skew toward recent events. Build feedback collection into the ongoing workflow.

**Skipping calibration**: Without calibration, a "meets expectations" rating from one manager is an "exceeds expectations" from another. Employees who move between teams or compare notes will notice the inconsistency.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

Track these metrics on a live dashboard:

- **Cycle completion rate**: What percentage of reviews are completed on time? Below 90% means the process has friction or lacks executive support.
- **Rating distribution**: Bell curve (or whatever distribution you expect) by department, level, and manager. Flat or skewed distributions need investigation.
- **Goal completion rate**: What percentage of goals are marked achieved or exceeded? Track by department to identify high-performing and struggling teams.
- **Manager completion time**: Average time from cycle launch to submitted review. Identify managers who consistently wait until the deadline.
- **Feedback frequency**: How often are continuous feedback entries logged? Low frequency means the system is not being used between cycles.
- **PIP outcomes**: What percentage of PIPs result in improvement vs. termination? High termination rates may indicate PIPs are being used too late.

Set alerts for: managers who have not started reviews within 7 days of cycle launch, employees with no goals set 30 days into the review period, 360 feedback requests with less than 3 responses, calibration sessions not scheduled within 2 weeks of review deadline, and PIPs approaching their end date without documented progress check-ins.

### Exception Handling

**New employees mid-cycle**: Someone who started 2 months into a 6-month review period should not be evaluated on the same basis as someone who worked the full period. The agent adjusts the review to cover the actual employment period and notes the truncated timeline.

**Manager changes mid-cycle**: When an employee gets a new manager during a review period, the agent ensures the previous manager contributes feedback for their portion and the new manager completes the review with full context.

**Leave of absence**: Employees on extended leave (FMLA, disability, parental) need modified review timelines. The agent adjusts goals and evaluation periods to account for time away, ensuring fair assessment.

**Disputed reviews**: When an employee disagrees with their review, the agent documents the dispute, routes it to HR and the skip-level manager, and tracks resolution. It maintains an audit trail of the original review, the dispute, and any modifications.

**Calibration overrides**: When calibration changes a manager's original rating, the agent documents the rationale, notifies the manager, and ensures the updated rating is communicated appropriately to the employee.

### Routine Tasks

**Ongoing**: Agent collects and stores continuous feedback. Agent sends monthly prompts to managers to check in on goal progress. Agent tracks project completions and milestones that relate to goals.

**Quarterly**: Agent generates goal progress reports. Agent reminds managers to schedule check-in conversations. Agent flags goals that are significantly off track.

**At cycle launch**: Agent sends cycle announcements with timelines and instructions. Agent opens self-assessment forms. Agent distributes 360 feedback requests. Agent sets up calibration meeting invites.

**At cycle close**: Agent compiles completed reviews for calibration. Agent generates rating distribution reports. Agent processes approved compensation changes, promotion recommendations, and PIP initiations. Agent archives cycle data for historical analysis.

## Scale — Growing It

### Adding Complexity

**Multi-country reviews**: Performance management norms vary by culture. In some countries, direct negative feedback is inappropriate. In others, self-assessment inflates heavily. Rating scales may need cultural calibration. Some countries have legal requirements around performance documentation before termination. Build country-specific guidance into the review process.

**Matrix organizations**: When employees report to multiple managers (functional and project), you need multi-rater reviews where each manager contributes feedback for their area. The agent coordinates input from all managers and synthesizes a coherent review.

**OKR cascade**: Connecting individual goals to team goals to department goals to company strategy creates powerful alignment but requires careful setup. The agent helps visualize the cascade and flags disconnects — individual goals that do not map to any team objective.

**Competency frameworks**: As you grow, defining core competencies by level (what does "collaboration" look like for a senior engineer vs. a director?) enables more objective assessment. The agent maps employee behaviors to competency rubrics.

**Promotion committees**: At scale, promotions need formal review by committees, not just manager recommendations. The agent compiles promotion packets (performance history, peer feedback, scope of work, business case) and schedules committee reviews.

### Automation Opportunities

- **AI-assisted review writing**: The agent drafts review narratives based on continuous feedback, goal outcomes, and 360 input. The manager reviews, edits, and personalizes — but starts from a comprehensive draft instead of a blank page.
- **Bias detection**: The agent scans review narratives for gendered language, racial coding, recency bias, and halo/horn effects. It flags potential issues for the manager to reconsider before submitting.
- **Predictive performance analytics**: The agent identifies employees whose performance trajectory suggests they may become flight risks, high-potential candidates ready for stretch assignments, or underperformers who need early intervention.
- **Automated calibration analytics**: The agent pre-identifies outliers, rating patterns, and calibration candidates before the meeting, so calibration sessions are focused discussions rather than data reviews.
- **Development plan generation**: Based on review outcomes and career aspirations, the agent creates personalized development plans with specific learning resources, stretch assignments, and mentorship recommendations.

### When to Redesign

- Manager and employee satisfaction with the review process is below 3 out of 5.
- More than 20% of reviews are submitted late.
- Rating distributions are flat (everyone gets the same rating) across most departments.
- Promotion decisions are regularly overturned or disputed.
- High performers are leaving and citing lack of recognition or growth.
- You have shifted to agile or project-based work and your annual goal-based system does not fit.
- Post-review compensation decisions take more than 6 weeks to implement.

## By Industry

1. **Manufacturing**: Production roles are often measured on output, quality, and safety metrics — quantitative and easy to track. Supervisor reviews focus on team performance, downtime reduction, and safety record. Union environments may restrict how performance reviews connect to compensation or discipline. Lean manufacturing companies often tie reviews to continuous improvement contributions.

2. **Healthcare**: Clinical staff reviews include patient outcome metrics, peer reviews from medical staff committees, and compliance with clinical protocols. Physicians often have separate peer review processes governed by medical staff bylaws. Nursing reviews track patient satisfaction scores, clinical competency assessments, and continuing education completion. Research staff are evaluated on publications and grant success.

3. **Education**: Faculty reviews include student evaluations, peer classroom observations, scholarly activity, and service contributions. Tenure review is a distinct, high-stakes process with its own timeline and committee structure. Staff reviews follow more standard corporate patterns. K-12 teacher evaluations often use state-mandated frameworks like Danielson.

4. **Retail**: Store-level reviews focus on sales metrics (revenue per labor hour, conversion rate, average transaction value), customer satisfaction scores, and loss prevention. Mystery shopper results factor into evaluations. Seasonal performance (holiday sales) may be weighted differently. District and regional manager reviews aggregate store performance.

5. **Hospitality**: Guest satisfaction scores (TripAdvisor, guest surveys) heavily influence reviews. Revenue per available room (RevPAR) for hotel managers, covers and average check for restaurant managers. Seasonal fluctuations make year-over-year comparison more meaningful than period-over-period. Brand standard compliance audits factor into reviews.

6. **Construction**: Project-based reviews tied to safety record, on-time completion, budget adherence, and quality inspection results. Foremen and superintendents are evaluated on crew productivity and incident rates. Skilled trade assessments may include hands-on skill demonstrations. Reviews often happen at project completion rather than on a calendar cycle.

7. **Real Estate**: Agent performance is heavily metric-driven — transaction volume, gross commission income, listing-to-close ratio, and client satisfaction. Brokerage reviews for staff focus on transaction support quality and compliance. Property management reviews track occupancy rates, tenant satisfaction, and maintenance response times.

8. **Agriculture**: Performance ties to yield, crop quality, and cost per acre for farm managers. Equipment operators are evaluated on productivity, fuel efficiency, and maintenance compliance. Seasonal workers may receive simplified end-of-season evaluations. Food safety compliance and regulatory adherence are key metrics for supervisors.

9. **Banking & Financial Services**: Relationship managers are evaluated on portfolio growth, cross-selling ratios, and client retention. Compliance metrics (audit findings, regulatory exam results) factor into every role. Risk management is a core competency in all reviews. Tellers and service staff are evaluated on transaction accuracy and customer service scores.

10. **Insurance**: Producer reviews center on premium volume, loss ratios, retention rates, and new business development. Claims adjuster reviews track severity accuracy, cycle time, and customer satisfaction. Underwriter reviews look at risk selection quality and pricing accuracy. Compliance adherence is mandatory for all licensed roles.

11. **Legal**: Associate reviews track billable hours, realization rates, client feedback, and pro bono contributions. Partner reviews examine origination credits, client relationship management, and firm citizenship. Staff reviews follow more standard corporate patterns. Up-or-out policies mean performance reviews have career-defining consequences at certain levels.

12. **Government**: Performance reviews follow mandated systems (GS system for federal, state equivalents) with specific rating levels and documentation requirements. Union grievance rights around performance ratings add procedural requirements. Probationary period reviews are particularly important as they determine permanent status. Forced distribution is uncommon but some agencies use it.

13. **Pharma**: R&D staff reviews include pipeline contributions, patent filings, publication records, and regulatory submission quality. Sales rep reviews use prescription data, market share, and call activity metrics from CRM systems. Manufacturing staff are evaluated on GMP compliance, batch success rates, and deviation documentation quality.

14. **Automotive**: Dealership sales reviews are metric-heavy — units sold, gross profit per unit, customer satisfaction index (CSI), and finance product penetration. Service advisor reviews track customer pay revenue, repair order count, and CSI. Manufacturer-side reviews follow more standard corporate patterns with added compliance and quality metrics.

15. **Telecom**: Network operations reviews include uptime metrics, incident response time, and change management success rates. Sales reviews track activations, upgrades, churn reduction, and bundle attachment rates. Field technician reviews measure first-time fix rate, jobs per day, and customer satisfaction scores.

16. **Media & Entertainment**: Creative roles resist quantitative metrics — reviews rely on portfolio quality, project contributions, and peer feedback. Production staff are evaluated on budget adherence, schedule compliance, and safety record. Audience metrics (ratings, streaming numbers, engagement) factor into leadership reviews but are influenced by many factors beyond individual performance.

17. **Energy & Utilities**: Plant operator reviews include safety metrics, regulatory compliance scores, and operational efficiency. Lineworker reviews track storm response performance, job completion rates, and safety record. Regulatory affairs staff are evaluated on filing accuracy and rate case outcomes. Environmental compliance is a core metric.

18. **Food & Beverage**: Kitchen staff reviews include food cost percentage, health inspection scores, and consistency metrics. Restaurant manager reviews track revenue, labor cost percentage, guest satisfaction, and employee turnover. Food manufacturing reviews incorporate quality control metrics, production efficiency, and safety records.

19. **Logistics & Transport**: Driver reviews include on-time delivery percentage, safety record (accidents, violations), fuel efficiency, and customer feedback. Warehouse worker reviews measure pick accuracy, units per hour, and safety compliance. Logistics manager reviews track cost-per-shipment, capacity utilization, and on-time metrics.

20. **Nonprofit**: Reviews balance mission impact with operational effectiveness. Program staff are evaluated on outcomes, beneficiary satisfaction, and grant deliverable completion. Fundraising staff track donor retention, gift growth, and event ROI. Volunteer management effectiveness may be part of some roles' reviews.

21. **SaaS / Technology**: Engineering reviews combine code quality metrics, sprint velocity, and peer feedback with broader contributions like mentoring, architecture decisions, and incident response. Product managers are reviewed on feature adoption, user metrics, and stakeholder alignment. Leveling frameworks (IC levels, management levels) define expected competencies at each stage.

22. **Professional Services**: Utilization rate is the dominant metric — hours billed vs. available hours. Client satisfaction and project margin are equally important. Business development (origination) expectations increase with seniority. Knowledge sharing, mentoring, and practice development contribute to reviews beyond billable work.

23. **Defense & Aerospace**: Program performance (cost, schedule, technical) drives reviews for program managers. Engineering reviews include technical milestone achievement and proposal win rates. Security compliance and clearance maintenance are baseline expectations. CPARS (Contractor Performance Assessment Reporting) ratings affect business development.

24. **Mining**: Safety is the dominant performance metric — incident rates, near-miss reporting, and safety observation participation. Production metrics (tons moved, grade achieved) are secondary to safety. Environmental compliance and community relations factor into senior role reviews. Remote site leadership reviews include crew welfare and retention metrics.

25. **Chemicals**: Safety performance (OSHA recordable rate, process safety incidents) is the top review criterion. Production efficiency, quality yields, and environmental compliance follow. R&D staff are evaluated on innovation pipeline and patent activity. Regulatory affairs reviews track submission success rates and agency inspection outcomes.

26. **Textiles & Apparel**: Design staff reviews include sell-through rates, trend prediction accuracy, and collection coherence. Manufacturing reviews focus on production efficiency, quality metrics, and waste reduction. Sustainability metrics (material sourcing, carbon footprint) are increasingly part of leadership reviews.

27. **FMCG**: Brand managers are reviewed on market share, brand health metrics, and P&L delivery. Sales reviews track distribution, shelf space, and volume against targets. Supply chain reviews focus on fill rate, cost-to-serve, and inventory turns. Innovation pipeline contribution factors into R&D reviews.

28. **Electronics**: Hardware engineer reviews include design cycle metrics, first-pass yield, and patent filings. Quality engineer reviews track defect rates, customer returns, and corrective action effectiveness. Supply chain reviews are critical given component scarcity — on-time delivery and alternate sourcing success matter.

29. **Oil & Gas**: Safety performance dominates all reviews — personal safety, process safety, and environmental incidents. Production efficiency (cost per barrel), well performance, and project execution metrics matter for operations. Geoscience and reservoir engineering reviews include reserve replacement and exploration success rates.

30. **Jewelry & Luxury**: Sales associate reviews track revenue, average transaction value, client book growth, and repeat purchase rates. Artisan reviews include craftsmanship quality, production timeline adherence, and innovation. Brand standards compliance and client experience delivery are core competencies across all customer-facing roles.

## By Company Size

### Startup (< 50 people)

Formal performance reviews feel like overkill, but you still need feedback and goal alignment. Keep it lightweight — quarterly one-on-ones between each person and their manager with documented goals and progress. Skip 360 feedback and calibration. The CEO should know how everyone is performing. Agents help by reminding managers to have the conversations and documenting the outcomes.

### SMB (50-500 people)

Implement a structured review cycle — semi-annual or annual with mid-year check-ins. Define a simple rating scale, build basic competency expectations by level, and start calibration at the department head level. You probably do not need 360 feedback yet unless you have a management development priority. Agents manage the cycle logistics and help managers write better reviews.

### Mid-Market (500-5,000 people)

Performance management becomes a strategic function. You need consistent competency frameworks, formal calibration sessions, 360 feedback for managers, and clear links between performance and compensation. Multiple review cycles (different timing for different populations) may be necessary. Agents handle cycle orchestration, bias detection, analytics, and integration with compensation planning.

### Enterprise (5,000+ people)

Performance management has dedicated staff, technology platforms, and executive governance. Global consistency with local flexibility is the challenge — different countries, business units, and employee populations may need variations within a unified framework. Agents manage the complexity at scale — running parallel cycles, preparing executive-level talent reviews, generating succession planning data, and ensuring compliance with local labor laws around performance documentation.

## ERP•AI & Proto

**ERP•AI**: The Performance Management module supports goal setting, review cycle orchestration, 360 feedback collection, calibration workflows, and PIP management, with built-in analytics for rating distributions and completion tracking.

**Proto**: Proto agents apply the ORAI cycle to performance management — they Observe review completion patterns and rating distributions, Reason about potential bias and calibration needs, Act by orchestrating review cycles and generating development plans, and Iterate by analyzing correlations between performance ratings and business outcomes to improve the review process over time.
