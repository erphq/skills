---
name: reports-dashboards
description: This skill should be used when the task involves designing, building, and managing enterprise reporting and analytics -- from KPI selection through dashboard layout, scheduled distribution, and data security.
version: 1.0.0
agents:
  - variance-analyst
related:
  - budgeting-forecasting
  - consolidation
  - general-ledger
metadata:
  author: erphq
  domain: erpai.studio
  department: information-technology
  size_tier: 03-org-1k-plus
  type: skill
  scope: internal
---
# Reports & Dashboards

## Purpose

Enterprise applications are only as valuable as the decisions they enable. Reports and dashboards translate raw transactional data into actionable insight. This skill covers the full lifecycle: identifying the right metrics, choosing report types, designing dashboard layouts, managing data pipelines for reporting, securing data visibility by role, and distributing outputs on schedule.

Use this skill when a builder needs to:
- Define KPIs and metrics for a business process
- Build operational or analytical reports inside ERP•AI
- Design interactive dashboards with drill-down capabilities
- Configure scheduled report distribution
- Implement role-based data filtering on report outputs
- Decide between live queries, materialized views, or data warehouse feeds

## Key Concepts

### KPI Design

- **Leading indicator**: A metric that predicts future performance. Example: number of open quotes predicts future revenue. Leading indicators are harder to measure but easier to influence.
- **Lagging indicator**: A metric that confirms past performance. Example: quarterly revenue. Lagging indicators are easy to measure but impossible to change retroactively.
- **KPI hierarchy**: Executive KPIs decompose into departmental KPIs, which decompose into operational metrics. A revenue target (executive) breaks into pipeline conversion rate (sales management) which breaks into calls per day (individual contributor).
- **SMART criteria for KPIs**: Specific (tied to one process), Measurable (numeric or boolean), Achievable (within the team's control), Relevant (connected to a business outcome), Time-bound (measured over a defined period).
- **Vanity metric**: A number that looks impressive but does not drive decisions. Example: total registered users (vs. monthly active users). Avoid building reports around vanity metrics.

### Report Types

| Type | Purpose | Refresh Cadence | Audience | Example |
|------|---------|-----------------|----------|---------|
| **Operational** | Monitor daily work in progress | Real-time or near-real-time | Front-line staff, supervisors | Open purchase orders, pending approvals |
| **Analytical** | Identify trends and root causes | Daily or weekly refresh | Managers, analysts | Revenue trend by product line, cost variance analysis |
| **Regulatory** | Satisfy legal or compliance requirements | Period-end (monthly, quarterly, annual) | Finance, compliance, auditors | SOX control reports, tax filings, statutory financials |
| **Ad-hoc** | Answer one-off business questions | On-demand | Any stakeholder | "How many customers in region X bought product Y last quarter?" |
| **Exception** | Surface outliers and anomalies | Event-driven or scheduled scan | Operations, risk management | Invoices exceeding approval threshold, inventory below safety stock |

### Data Architecture for Reporting

- **Live query**: Runs directly against the transactional database. Best for operational reports on small-to-medium datasets. Risk: heavy reports can degrade application performance for all users.
- **Materialized view**: A pre-computed query result stored as a table and refreshed on a schedule. Balances freshness with performance. Ideal for analytical reports that tolerate 15-minute to 1-hour staleness.
- **Data warehouse / read replica**: A separate database optimized for analytical queries (star schema, columnar storage). Required when report volumes or complexity would impact transactional performance. Introduces ETL latency (typically minutes to hours).
- **Embedded BI**: A third-party analytics engine (e.g., embedded Metabase, Looker, Power BI) rendered inside the ERP•AI interface. Use when requirements exceed native reporting capabilities (complex visualizations, statistical functions, self-service exploration).

### Dashboard Design Principles

- **Progressive disclosure**: Show the most critical number first (the headline KPI), then allow drill-down into supporting detail. Never dump 50 metrics on one screen.
- **The 5-second rule**: A user should understand the status communicated by a dashboard within 5 seconds of looking at it. Use color, size, and position to create visual hierarchy.
- **Action-oriented metrics**: Every metric on a dashboard should answer the question "so what do I do about it?" If a metric cannot trigger a decision or action, it does not belong on the dashboard.
- **Consistent time context**: All metrics on a single dashboard should share the same time frame unless explicitly labeled otherwise. Mixing MTD revenue with YTD costs causes confusion.
- **Drill-down paths**: Design a navigation tree from summary to detail. Dashboard (KPI cards) -> Report (tabular detail) -> Transaction (individual record). Each click adds one level of granularity.
- **Responsive layout**: Dashboards must render correctly on desktop (1920px+), tablet (768px), and mobile (375px). Prioritize which widgets collapse or hide at smaller breakpoints.

### Report Security

- **Role-based data filtering (row-level security)**: Users see only the data their role permits. A regional sales manager sees only their region's pipeline. Implemented via security predicates that append WHERE clauses to every query.
- **Field-level masking**: Sensitive columns (SSN, salary, cost price) are hidden or masked for users without the appropriate permission. The column exists in the dataset but renders as `****` or is omitted entirely.
- **Parameter injection guard**: Report parameters (date range, department filter) must be validated server-side. Never trust client-side filter values -- a user could manipulate them to access data outside their security scope.
- **Export controls**: Some reports should be viewable on-screen but not downloadable as CSV/PDF. Configure export permissions separately from view permissions, especially for reports containing PII or financial data.

## Workflow

### 1. Identify Reporting Requirements

- Interview stakeholders: "What decisions do you make daily/weekly/monthly? What data do you need to make them?"
- Map each decision to a metric. Each metric becomes a candidate KPI or report field.
- Classify each requirement as operational, analytical, regulatory, or ad-hoc.
- Document the data source for each metric (which entity, which fields, what calculations).
- **Watch out for**: Stakeholders who say "I want to see everything." Push back with: "If you could only see three numbers, which three?"
- **Output**: A reporting requirements matrix (report name, type, audience, KPIs, data source, refresh cadence, security scope).

### 2. Design the Data Pipeline

- Determine whether each report can run as a live query or requires a materialized view / warehouse feed.
- For materialized views: define the refresh schedule, the source query, and the index strategy on the materialized table.
- For warehouse feeds: define the ETL job, transformation logic, and the target schema (star or snowflake).
- Validate that the pipeline produces correct numbers by reconciling output against source data for a known period.
- **Watch out for**: Time zone mismatches between source data and report output. A transaction at 11:55 PM EST may land on a different date in UTC.
- **Output**: Data pipeline specification (source, transformation, target, schedule, reconciliation method).

### 3. Build Reports

- Start with the simplest report type that meets the requirement. A filtered list view is simpler than a pivot table; a pivot table is simpler than a custom chart.
- Define columns, grouping, sorting, subtotals, and grand totals.
- Add filters: date range, department, status, custom parameters. Make the most common filter the default.
- Apply formatting: conditional highlighting (red/amber/green), number formatting (currency, percentage, decimal places), column width.
- Implement row-level security predicates so the same report definition serves multiple roles with different data scopes.
- **Watch out for**: NULL handling in aggregations. A SUM that ignores NULLs vs. one that treats them as zero produces different results. Document the behavior.
- **Output**: Working report definitions in ERP•AI with test results showing correct output across roles.

### 4. Design Dashboards

- Identify 3-5 headline KPIs for the dashboard. These appear as large cards or gauges at the top.
- Below the headlines, add 2-4 supporting charts or tables that provide context (trend lines, comparisons, breakdowns by dimension).
- Define the drill-down path from each dashboard widget to its detail report.
- Add filters that apply globally across all widgets (date range, business unit).
- Test the dashboard at multiple viewport sizes.
- **Watch out for**: Chart types that obscure rather than reveal. Pie charts with more than 5 slices are unreadable. 3D charts distort proportions. Stick to bar, line, and table for most enterprise use cases.
- **Output**: Dashboard layout with wireframe, widget specifications, and drill-down map.

### 5. Configure Distribution

- Set up scheduled delivery for reports that have a regular audience (e.g., weekly sales summary emailed every Monday at 7 AM).
- Define the distribution list, format (PDF, Excel, CSV), and any parameter values to apply at generation time.
- For exception reports, configure threshold-based triggers: send the report only when a condition is met (e.g., inventory below reorder point).
- Test delivery in a non-production environment before activating in production.
- **Watch out for**: Email deliverability. Large attachments get blocked by mail servers. Reports over 10 MB should be delivered as a link to the report in-app rather than as an attachment.
- **Output**: Scheduled report configurations with confirmed delivery to test recipients.

### 6. Validate and Iterate

- Have the report consumers validate that the numbers match their expectations and source-of-truth systems.
- Run reconciliation checks: does the dashboard total match the GL? Does the inventory report match the warehouse count?
- Collect feedback on usability: "Can you find the answer to your question within 10 seconds?"
- Iterate on layout, filters, and drill-down paths based on real usage.
- **Output**: Sign-off from report owners confirming accuracy and usability.

## Decision Guide

### Choosing a Data Architecture

| Factor | Live Query | Materialized View | Data Warehouse |
|--------|------------|-------------------|----------------|
| Data freshness needed | Real-time | Near-real-time (minutes) | Periodic (hours) |
| Query complexity | Simple joins, filters | Moderate aggregations | Complex multi-table analytics |
| Data volume | < 100K rows scanned | 100K - 10M rows | > 10M rows |
| Impact on transactional DB | Moderate to high | Low (reads from cache) | None (separate DB) |
| Build effort | Low | Medium | High |
| Best for | Operational reports | Analytical dashboards | Cross-system analytics, BI |

### Choosing a Chart Type

| Data Relationship | Recommended Chart | Avoid |
|-------------------|-------------------|-------|
| Change over time | Line chart, area chart | Pie chart |
| Part-to-whole (< 5 categories) | Stacked bar, donut | Pie chart with > 5 slices |
| Comparison across categories | Horizontal bar chart | Vertical bar with many categories |
| Distribution | Histogram, box plot | Line chart |
| Correlation between two variables | Scatter plot | Stacked bar |
| Cumulative build-up / breakdown | Waterfall chart | Pie chart |
| Single KPI status | KPI card with sparkline | Full chart |

### Report vs. Dashboard

| Need | Use a Report | Use a Dashboard |
|------|-------------|-----------------|
| Detailed line-item data | Yes | No |
| Exportable to Excel/CSV | Yes | Sometimes |
| Interactive exploration | Limited | Yes |
| Executive summary | No | Yes |
| Regulatory submission | Yes | No |
| Daily operational check | Sometimes | Yes |

## Common Patterns

### AP Aging Report
Groups outstanding payables by age bucket (Current, 1-30, 31-60, 61-90, 90+ days). Shows vendor name, invoice number, invoice date, due date, amount, and aging bucket. Subtotals by vendor; grand total by bucket. Used to prioritize payment runs and identify cash flow pressure points. Apply row-level security so each AP clerk sees only vendors assigned to them.

### Revenue Dashboard
Headline KPIs: MTD Revenue, MTD vs Target (%), MoM Growth Rate, Top 5 Customers by Revenue. Supporting widgets: Revenue trend line (12-month rolling), Revenue by product line (horizontal bar), Revenue by region (map or bar), New vs Recurring revenue split. Drill-down: click a product line bar to see the underlying invoice list.

### Inventory Turnover Analysis
Calculates turnover ratio (COGS / Average Inventory) by product category. Displays slow-moving items (turnover < threshold) for write-down review. Pairs with a days-of-supply metric. Use a materialized view refreshed nightly because the calculation scans the full inventory transaction history.

### Variance Analysis (Budget vs Actual)
Compares actual spending against budget by GL account and department. Shows absolute variance and percentage variance. Highlights unfavorable variances exceeding a threshold (e.g., > 10% over budget). Uses waterfall chart to show how individual line items contribute to the total variance.

### Trend Analysis with Moving Average
Overlays a raw metric (e.g., daily order volume) with a 7-day or 30-day moving average to smooth noise and reveal underlying trends. Essential for seasonal businesses where raw daily numbers fluctuate wildly.

### Anti-Patterns to Avoid

- **The "everything" dashboard**: 30+ widgets crammed onto one screen with no visual hierarchy. Users ignore it because they cannot find what matters.
- **Unfiltered reports on large tables**: A report that scans millions of rows with no date range filter, causing timeouts and database strain.
- **Hardcoded date ranges**: Reports that always show "January 2024 to December 2024" instead of dynamically calculating the current fiscal period.
- **Disconnected KPIs**: A dashboard where metrics come from different time periods, different business units, or different calculation methodologies, making comparison meaningless.
- **No drill-down**: A summary number with no way to see the underlying transactions. Users cannot verify or act on the data.
- **Security bypass via export**: A report that enforces row-level security on screen but exports the full unfiltered dataset to CSV.

## Advanced Topics

### Incremental Refresh & Report Caching

Materialized views and dashboards become performance bottlenecks when refresh strategies are naive. A full-table refresh of a 50-million-row fact table at 15-minute intervals will saturate I/O and degrade the transactional database even if the view lives on a replica.

**Incremental refresh strategies:**

- **High-water-mark refresh**: Track the maximum `updated_at` timestamp from the last refresh. On each cycle, pull only rows where `updated_at > last_high_water_mark`. Requires every source table to have a reliable, indexed timestamp column. Deletes are invisible unless you also track soft-delete flags or use a change data capture (CDC) stream.
- **Change data capture (CDC)**: Subscribe to the database's transaction log (PostgreSQL logical replication, MySQL binlog, or a platform-level CDC feed). The materialized view receives insert/update/delete events in near-real-time without polling. CDC is the gold standard for freshness-with-efficiency but introduces operational complexity (replication slot management, schema evolution handling).
- **Partition-level refresh**: Partition the materialized view by time period (day, week, month). Refresh only the current partition and the immediately prior partition (to catch late-arriving transactions). Historical partitions are immutable and never re-scanned. This is the most common pattern for large-scale financial reporting.
- **Micro-batch aggregation**: Instead of materializing raw rows, maintain pre-aggregated rollups (e.g., daily revenue by product line). When new transactions arrive, update only the affected aggregation bucket. Dramatically reduces refresh cost for dashboards that display summary-level data.

**Cache invalidation for dashboards:**

- **Time-based TTL**: Each dashboard widget declares a cache TTL (e.g., 5 minutes for operational dashboards, 1 hour for analytical dashboards). After TTL expiry, the next request triggers a fresh query. Simple but can serve stale data up to the TTL window.
- **Event-driven invalidation**: When a materialized view completes a refresh, it publishes an invalidation event. All dashboard widgets backed by that view discard their cache and re-query. Provides tighter freshness guarantees but requires a pub/sub mechanism.
- **Stale-while-revalidate**: Serve the cached result immediately to the user while triggering an asynchronous refresh in the background. The user sees slightly stale data but experiences no latency. The next user request gets the updated result. Ideal for dashboards where sub-second load time matters more than real-time accuracy.

**Stale data indicators:**

Every dashboard widget should display the timestamp of its underlying data refresh. If the data is older than the expected refresh cycle (e.g., a 15-minute materialized view is 45 minutes old), display a visual warning -- a yellow clock icon or a "Data as of: 10:15 AM (delayed)" label. Never let users make decisions on stale data without knowing it is stale. Implement an automated monitoring alert that fires when any materialized view's refresh falls behind schedule by more than 2x its target interval.

### Drill-Down Architecture

Drill-down is the core interaction model for enterprise dashboards. Designing it poorly creates either a poor user experience (dead-end summaries) or a performance disaster (unbounded detail queries).

**Hierarchical drill paths:**

Define explicit hierarchies for each analytical dimension. Each level in the hierarchy maps to a grain of data and a corresponding query pattern.

| Dimension | Level 1 | Level 2 | Level 3 | Level 4 |
|-----------|---------|---------|---------|---------|
| Geography | Region | Country | State/Province | City |
| Organization | Division | Department | Cost Center | Employee |
| Product | Product Line | Product Family | Product | SKU |
| Time | Year | Quarter | Month | Day |
| Account | Account Group | Account Category | GL Account | Sub-Account |

At each level, the dashboard renders an aggregated view. Clicking a data point navigates to the next level, adding a filter predicate for the selected value (e.g., clicking "EMEA" at the Region level navigates to Country level with `WHERE region = 'EMEA'`).

**Cross-entity drill-through:**

Unlike hierarchical drill-down (same entity, different grain), drill-through navigates from a summary in one entity to detail in a different entity. Examples:
- Revenue dashboard (aggregated invoice data) drills through to the individual invoice list (AR entity).
- Inventory turnover chart (aggregated inventory movement) drills through to specific stock transactions (Inventory Transaction entity).
- Budget variance report (GL account summary) drills through to the underlying journal entries.

Cross-entity drill-through requires passing context parameters (filters, keys) from the source widget to the target report. Define a drill-through contract: the source widget emits a set of key-value pairs (e.g., `{gl_account: '4100', fiscal_period: '2026-03'}`) and the target report accepts those parameters as filters.

**Performance implications of deep drill-downs:**

Each drill-down level typically increases query specificity (narrower filter) but may also change the query structure (different joins, different aggregation grain). The risk is that a level-4 drill-down hits the raw transaction table with no pre-aggregation, causing a full table scan on a billion-row table.

Mitigation strategies:
- **Pre-aggregate at every drill level**: Maintain materialized views at each level of the hierarchy. Level 1 is a yearly rollup, level 2 is quarterly, level 3 is monthly, level 4 is daily. The drill-down query hits the appropriate pre-aggregated table, not the raw data.
- **Lazy loading with row limits**: When drilling to the most granular level, apply a default row limit (e.g., top 1000 rows) with a "Show more" option. Prevents unbounded result sets.
- **Asynchronous drill-down**: If a drill-down query will take more than 3 seconds, execute it asynchronously and display a loading indicator rather than blocking the UI. Consider pre-computing the drill result in the background when the user hovers over a data point (speculative prefetch).

### Self-Service BI Governance

Giving business users the power to create their own reports and dashboards is valuable -- until it produces 500 conflicting definitions of "revenue" and a landscape of ungoverned spreadsheets. Self-service BI requires a governance framework that balances freedom with consistency.

**Governed datasets:**

A governed dataset is a curated, validated, and documented data source that self-service users can query but cannot modify. It enforces:
- **Consistent definitions**: "Revenue" is defined once in the governed dataset and calculated the same way in every report that uses it. Users cannot override the calculation.
- **Row-level security enforcement**: The governed dataset inherits RLS from the platform, so self-service users see only the data their role permits, regardless of how they slice and dice it.
- **Data quality gates**: The governed dataset is refreshed only after passing automated quality checks (row counts, null rates, referential integrity). If a quality check fails, the last known-good version is served and an alert is raised.

**Certified metrics:**

A certified metric is a KPI definition that has been reviewed, approved, and published by the data governance team. It carries a "certified" badge in the BI tool's metric catalog. Certified metrics specify:
- The exact calculation formula (including handling of NULLs, currency conversion, and time zone adjustments).
- The authoritative data source (which governed dataset, which field).
- The refresh cadence and expected latency.
- The business owner responsible for the metric's definition.

Non-certified metrics (user-created calculations) are allowed but visually distinguished -- they carry a "draft" or "unverified" label. This prevents users from accidentally treating an ad-hoc calculation as the organization's official number.

**Semantic layer:**

A semantic layer sits between raw data and end-user tools. It translates database tables and columns into business-friendly names, defines relationships and join paths, and enforces calculation logic. Users interact with concepts like "Customer," "Order Date," and "Net Revenue" rather than `dim_customer.cust_id`, `fact_order.order_dt`, and `SUM(line_amount) - SUM(discount_amount) - SUM(return_amount)`. The semantic layer is the single source of truth for how business terms map to data.

**Metric trees:**

A metric tree is a hierarchical decomposition of a top-level KPI into its component parts. Example:

```
Net Profit
├── Revenue
│   ├── New Customer Revenue
│   ├── Existing Customer Revenue
│   └── Upsell / Cross-sell Revenue
├── (minus) Cost of Goods Sold
│   ├── Material Cost
│   ├── Labor Cost
│   └── Overhead
└── (minus) Operating Expenses
    ├── Sales & Marketing
    ├── R&D
    └── General & Administrative
```

Metric trees serve two purposes: they make the KPI structure transparent (everyone understands how Net Profit is composed), and they map directly to drill-down paths in the dashboard (clicking "Revenue" expands to its children). Publish the metric tree as a reference document and align the dashboard's drill-down architecture to mirror it.

**Preventing "spreadsheet chaos":**

- Disable or restrict raw data export from dashboards. Users who can export to CSV will build shadow reports in Excel that diverge from the governed source.
- Provide a self-service report builder within the governed BI environment so users have no reason to leave.
- Conduct a quarterly "report census" -- identify all user-created reports, flag those with high usage but no certification, and either certify or retire them.
- Require that any report shared beyond its creator carry a certified metric or be labeled as "unofficial."

### Predictive & Forecast Analytics

Moving beyond historical reporting into forward-looking analytics is what separates operational dashboards from strategic decision-support tools.

**Trend extrapolation:**

The simplest form of forecasting. Fit a linear or polynomial regression to historical data points and project the line forward. Effective for stable, non-seasonal metrics (e.g., headcount growth). Dangerous for metrics with structural breaks, seasonality, or external dependencies. Always display the extrapolation as a dashed line visually distinct from actuals to prevent confusion.

**Moving averages:**

- **Simple Moving Average (SMA)**: The arithmetic mean of the last N data points. Smooths noise but lags behind trend changes. Common windows: 7-day (weekly smoothing), 30-day (monthly smoothing), 90-day (quarterly smoothing).
- **Weighted Moving Average (WMA)**: Assigns higher weight to more recent data points. Responds faster to trend changes than SMA but is still a lagging indicator.
- **Exponential Moving Average (EMA)**: Applies exponentially decreasing weights to older data points. Configurable via the smoothing factor (alpha). EMA with alpha=0.3 reacts quickly to changes; alpha=0.1 provides heavy smoothing. EMA is the best general-purpose choice for dashboard trend lines.

Display the moving average as an overlay on the raw data chart. Let users toggle between SMA, WMA, and EMA and adjust the window/alpha parameter interactively.

**Anomaly detection in KPIs:**

Anomaly detection identifies data points that deviate significantly from the expected pattern. Approaches ranked by complexity:

1. **Static thresholds**: Define an upper and lower bound for the KPI. Any value outside the bounds is an anomaly. Simple but brittle -- the bounds must be manually updated as the business evolves.
2. **Z-score / standard deviation**: Calculate the mean and standard deviation of the KPI over a rolling window. A data point more than 2-3 standard deviations from the mean is flagged. Works for normally distributed metrics; fails for skewed or seasonal data.
3. **Seasonal decomposition**: Decompose the time series into trend, seasonal, and residual components (STL decomposition). Flag anomalies in the residual component. Handles seasonality correctly -- a spike in December retail revenue is not anomalous; a spike in February is.
4. **Machine learning models**: Train an autoencoder or isolation forest on historical KPI data. The model learns the "normal" pattern and flags deviations. Most robust but requires ML infrastructure and ongoing model retraining.

Display anomalies as highlighted data points on the dashboard chart (red dots, callout boxes) with a severity score and a link to the drill-down detail for investigation.

**Predictive models in dashboards:**

Embed pre-built predictive models directly into dashboard widgets:
- **Cash flow forecast**: Based on AR aging, AP aging, and historical payment patterns, predict cash position for the next 30/60/90 days.
- **Demand forecast**: Based on historical order volume and seasonal patterns, predict demand by product/region for the next quarter. Feed into inventory planning.
- **Churn prediction**: Score each customer on their likelihood of churning based on order recency, frequency, and support ticket patterns. Display as a risk heatmap.

Predictive models must always display **confidence intervals** -- the range within which the predicted value is expected to fall with a stated probability (e.g., "Predicted revenue: $4.2M, 80% confidence interval: $3.8M - $4.6M"). Without confidence intervals, users treat predictions as certainties, which leads to poor decisions.

**Implementation considerations:**
- Predictive models are compute-intensive. Run them on a schedule (nightly or weekly) and cache the results. Do not compute predictions on every dashboard load.
- Version the models and log their accuracy over time (predicted vs. actual). Retire models whose accuracy degrades below a threshold.
- Clearly label all predictive widgets as "Forecast" or "Predicted" to distinguish them from actual data.

### Mobile & Embedded Reporting

Enterprise users do not always sit at desks. Warehouse operators carry tablets, executives check KPIs on phones, and field sales teams need data between customer visits. Simultaneously, many reporting needs arise in the context of a transaction, not a standalone dashboard.

**Responsive dashboard design:**

- **Desktop (1920px+)**: Full layout with all widgets visible. Multi-column grid (3-4 columns). Hover interactions for tooltips and detail.
- **Tablet (768px-1024px)**: Two-column grid. Charts resize proportionally. Tables switch to horizontal scroll. Tap replaces hover.
- **Mobile (375px-428px)**: Single-column stack. Only headline KPI cards and the single most important chart are visible by default. Supporting widgets collapse into an expandable "More" section. Drill-down navigates to a full-screen detail view rather than an inline expansion.

Design principle: define a **widget priority ranking** for each dashboard. At each breakpoint, lower-priority widgets are the first to collapse or hide. The priority ranking must be explicit in the dashboard specification, not left to the responsive framework's defaults.

**Offline-capable reports:**

For users in environments with unreliable connectivity (warehouses, field offices, remote sites):
- **Snapshot downloads**: Allow users to download a point-in-time snapshot of a report or dashboard as a static HTML package or PDF. The snapshot includes the data as of the download time and is viewable without a network connection.
- **Progressive Web App (PWA) caching**: If the reporting layer is delivered as a PWA, use service workers to cache the most recent dashboard state and serve it when offline. Display a clear "Offline -- data as of [timestamp]" indicator.
- **Sync on reconnect**: When connectivity returns, the cached view silently refreshes. If the user took notes or annotations while offline, sync those to the server.

**Embedded analytics in transactional screens:**

Instead of requiring users to navigate away from their work to a separate reporting module, embed analytics directly into transactional screens:
- **Customer 360 widget**: On the customer record, embed a mini-dashboard showing open AR balance, last 12 months of order history (sparkline), payment behavior score, and open support tickets. The sales rep sees this context without leaving the customer form.
- **Vendor performance card**: On the purchase order screen, show the vendor's on-time delivery rate, average lead time, and quality rejection rate as an inline widget. The buyer uses this data to decide whether to place the order.
- **Inventory health indicator**: On the item record, embed a chart showing current stock level vs. safety stock vs. reorder point, with projected stockout date based on current consumption rate.

Embedded analytics must be lightweight -- they share the transactional screen's performance budget. Use pre-aggregated data, aggressive caching (TTL of 5-15 minutes), and lazy loading (render the widget only when it scrolls into the viewport).

**Push notifications for KPI breaches:**

Configure alert rules that trigger push notifications (mobile push, SMS, email, or in-app notification) when a KPI crosses a threshold:
- **Breach notification**: "Inventory for SKU-4821 has dropped below safety stock (current: 12, safety stock: 50)."
- **Trend notification**: "Daily order volume has declined for 5 consecutive days. Current 7-day average is 15% below the 30-day average."
- **Anomaly notification**: "AP payment amount of $847,000 on 2026-04-14 is 3.2 standard deviations above the daily average."

Notification design rules:
- Include the metric name, current value, threshold, and a deep link to the relevant dashboard or transaction.
- Allow users to configure their own notification thresholds within guardrails set by the admin (e.g., admin sets minimum notification frequency to prevent alert storms).
- Implement notification suppression: do not re-fire the same alert within a cooldown period (e.g., 4 hours) unless the condition worsens.

### Data Storytelling

Raw numbers and charts are necessary but not sufficient. Decision-makers need context, interpretation, and recommended actions -- they need a narrative that explains what the data means.

**Narrative generation:**

Auto-generate natural-language summaries from dashboard data. Examples:
- "Revenue for March 2026 was $12.4M, up 8.3% from February and 2.1% ahead of target. Growth was driven primarily by the Enterprise segment (+$640K), partially offset by a decline in SMB (-$180K)."
- "AP aging has deteriorated: the over-90-day bucket increased by 23% this month, concentrated in 3 vendors (Acme Corp, GlobalParts, TechSupply). Recommended action: schedule payment runs for these vendors this week."

Narrative generation uses templates populated with calculated values and conditional logic (if variance > X, include the attribution clause). More sophisticated implementations use LLMs to produce fluid prose, but template-based generation is sufficient for most enterprise use cases and avoids hallucination risk.

**Annotation layers:**

Allow users to add annotations to dashboard data points -- comments, explanations, and context that persist for other viewers:
- "Q2 revenue spike was due to the one-time Acme Corp deal ($2.1M). Excluding this, growth was flat."
- "Inventory drop on March 15 was caused by a warehouse fire at the Memphis facility, not a demand surge."

Annotations transform a dashboard from a display of numbers into an institutional memory. They prevent the same question from being asked repeatedly and provide context for users who were not present when the event occurred. Store annotations with the data point's coordinates (metric, time period, dimension value) so they appear automatically when anyone views that data point.

**Executive summary automation:**

Generate a periodic (daily, weekly, monthly) executive summary that combines:
1. Headline KPIs with period-over-period change and target comparison.
2. Auto-generated narrative for each KPI explaining the movement.
3. Top 3 anomalies or exceptions requiring attention.
4. Forecast for the next period with confidence intervals.
5. A prioritized action list derived from the data (e.g., "Schedule vendor payment review -- AP aging exceeds policy threshold").

Deliver the executive summary as an email digest, a PDF attachment, or an in-app briefing page. The goal is to give an executive a 2-minute read that captures everything they need to know without opening a dashboard.

**Context-aware commentary:**

Beyond static annotations, context-aware commentary adapts based on who is viewing the dashboard and what filters are applied:
- A regional sales manager viewing the revenue dashboard sees commentary focused on their region's performance relative to peers.
- A CFO viewing the same dashboard sees commentary focused on consolidated performance, margin trends, and forecast accuracy.
- When a user applies a filter (e.g., selects a specific product line), the commentary regenerates to focus on that product line's story.

This requires a commentary engine that accepts the current filter context and the viewer's role as inputs and generates relevant narrative. Implement this as a server-side function that runs after the dashboard data query completes, using the query results and the user's role to select and populate commentary templates.

## Checklist

- [ ] Reporting requirements documented with stakeholder sign-off
- [ ] Each KPI has a clear definition, data source, calculation method, and owner
- [ ] Leading and lagging indicators are balanced (not all lagging)
- [ ] Report type (operational, analytical, regulatory, ad-hoc) is classified for each report
- [ ] Data pipeline architecture chosen and documented (live query, materialized view, or warehouse)
- [ ] Materialized views have defined refresh schedules and reconciliation checks
- [ ] Row-level security predicates applied and tested with multiple roles
- [ ] Field-level masking configured for sensitive data columns
- [ ] Export permissions configured separately from view permissions
- [ ] Dashboard follows progressive disclosure (headline KPIs -> supporting charts -> detail reports)
- [ ] Drill-down paths defined and functional from summary to transaction
- [ ] Chart types appropriate for the data relationship being shown
- [ ] Dashboard renders correctly at desktop, tablet, and mobile breakpoints
- [ ] Scheduled reports configured with correct distribution lists, formats, and parameters
- [ ] Large reports delivered as in-app links rather than email attachments
- [ ] NULL handling documented and tested for all aggregation fields
- [ ] Time zones consistent across source data, transformations, and report output
- [ ] Reconciliation performed: report totals match source-of-truth systems
- [ ] Report consumers have validated accuracy and usability
- [ ] Performance tested: reports return within acceptable time (< 5s for operational, < 30s for analytical)
- [ ] Materialized view refresh strategy defined (incremental, CDC, partition-level, or micro-batch)
- [ ] Cache invalidation method configured for each dashboard (TTL, event-driven, or stale-while-revalidate)
- [ ] Stale data indicators displayed on every dashboard widget with refresh timestamp
- [ ] Drill-down paths pre-aggregated at each hierarchy level for performance
- [ ] Cross-entity drill-through contracts defined (source parameters, target filters)
- [ ] Governed datasets created with RLS enforcement and quality gates
- [ ] Certified metrics published in the metric catalog with calculation formulas and owners
- [ ] Semantic layer configured mapping business terms to data structures
- [ ] Self-service report governance policy established (report census, certification, labeling)
- [ ] Predictive widgets display confidence intervals and are clearly labeled as forecasts
- [ ] Anomaly detection configured for key KPIs with severity scoring
- [ ] Mobile breakpoints tested with widget priority ranking applied
- [ ] Push notifications configured for KPI breaches with suppression/cooldown rules
- [ ] Annotation layer enabled on dashboards for institutional context
- [ ] Executive summary automation configured with narrative generation and delivery schedule

## ERP•AI & Proto

**ERP•AI**: Report builder and dashboard designer support drag-and-drop layout, embedded BI, row-level security, and scheduled distribution. The semantic layer maps business terms to data structures, and the metric catalog publishes certified KPI definitions.

**Proto**: Generates KPI definitions, dashboard layouts, and drill-down configurations as mission outputs. During reporting missions, Proto reasons over available data dimensions and business requirements to propose metric hierarchies and visualization types.

## Related

- [Master Data Management](/it-plumbing/master-data-management/) -- schema quality directly impacts report dimensions
- [Security & Roles](/it-plumbing/security-roles/) -- row-level and field-level security for reports
- [Workflow Automation](/it-plumbing/workflow-automation/) -- scheduled reporting and exception routing
- [Finance & Accounting](/finance-accounting/general-ledger/) -- financial reporting patterns for GL and close
- [Supply Chain](/supply-chain/inventory/) -- inventory and procurement reporting patterns
- [Sales & CRM](/sales-crm/pipeline-forecasting/) -- pipeline and revenue reporting patterns
