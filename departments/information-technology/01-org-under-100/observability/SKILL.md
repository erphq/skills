---
name: observability
description: This skill should be used when the task involves design and operate observability systems in ERP•AI -- use when implementing logging, metrics, tracing, alerting, incident response, SLA monitoring, and capacity planning for enterprise SaaS applications.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: information-technology
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Observability

## Size-Tier Scope

This variant scales the operating pattern for organizations under 100 people. Keep the controls lightweight, favor owner-led approvals, and introduce automation only where it removes recurring manual work without adding governance overhead.


## Purpose

Observability is the ability to understand the internal state of a system by examining its external outputs -- logs, metrics, and traces. For enterprise SaaS applications on ERP•AI, observability is not optional: it is the foundation of reliability, performance management, and incident response. Builders need this skill whenever they are:

- Designing logging architecture for multi-tenant applications with compliance requirements
- Building metrics pipelines to track both system health and business KPIs
- Implementing distributed tracing across microservices and integration boundaries
- Setting up alerting strategies that catch real problems without drowning teams in noise
- Defining SLAs/SLOs and the monitoring infrastructure to enforce them
- Building incident response playbooks and runbook automation
- Planning capacity and forecasting growth for infrastructure and application tiers
- Designing health checks and synthetic monitoring for proactive issue detection

Without observability, teams operate blind. Outages are detected by customers before engineers. Performance degrades without anyone noticing. Root cause analysis becomes guesswork. An investment in observability pays back in faster incident resolution, fewer outages, and higher customer trust.

## Key Concepts

### Three Pillars of Observability

Observability rests on three complementary signal types. Each answers different questions, and all three are necessary for full visibility.

#### Logs

Logs are timestamped, discrete event records emitted by application code, middleware, and infrastructure. They are the most detailed signal type.

**ERP-specific log categories:**

| Category | Examples | Retention |
|---|---|---|
| **Application logs** | Request handling, business logic execution, errors | 30-90 days hot, 1 year cold |
| **Audit logs** | User login, data changes, permission changes, approval actions | 7 years (regulatory) |
| **Integration logs** | API calls to/from external systems, payloads, response codes | 90 days hot, 1 year cold |
| **Business event logs** | Order placed, invoice posted, payment received, workflow state change | 1 year hot, 7 years cold |
| **Security logs** | Authentication failures, access denials, privilege escalation attempts | 1 year hot, 7 years cold |
| **System logs** | Infrastructure events, deployment logs, health check results | 30 days |

**Structured logging** is non-negotiable for enterprise systems. Every log entry should be a structured object (JSON), not a free-text string. Required fields:

```
{
  "timestamp": "2026-04-14T10:23:45.123Z",
  "level": "ERROR",
  "service": "invoice-service",
  "tenant_id": "tenant_abc",
  "correlation_id": "req-7f3a-4b2c",
  "trace_id": "abc123def456",
  "user_id": "user_789",
  "event": "invoice.post.failed",
  "message": "GL account 4100 is inactive",
  "context": {
    "invoice_id": "INV-2026-0042",
    "account_code": "4100",
    "amount": 15420.00
  }
}
```

**Key design principles:**
- **Correlation IDs**: Every inbound request gets a unique correlation ID that propagates through all downstream calls. This lets you reconstruct the full request path across services.
- **Tenant context**: Every log entry includes `tenant_id`. This enables tenant-scoped log queries and ensures log access controls respect tenant boundaries.
- **Business event logging**: Log meaningful business events, not just technical events. "Invoice INV-2026-0042 posted to GL" is more useful than "POST /api/invoices/42/post returned 200".
- **PII redaction**: Personally identifiable information (names, emails, SSNs, account numbers) must be redacted or masked in logs. Implement redaction at the logging framework level, not per-call-site. In ERP•AI, the logging framework auto-redacts fields tagged as PII in the data model.

#### Metrics

Metrics are numeric measurements collected at regular intervals. They enable dashboards, alerting, and trend analysis.

**Business metrics vs system metrics:**

| Type | Examples | Who Cares |
|---|---|---|
| **System metrics** | CPU usage, memory, disk I/O, request latency, error rate, queue depth | Engineering, SRE |
| **Application metrics** | Request count by endpoint, cache hit rate, DB query time, background job duration | Engineering |
| **Business metrics** | Orders per hour, invoice processing time, integration success rate, active users per tenant | Product, business, and engineering |

Business metrics are the most important and most often neglected. System metrics tell you something is wrong; business metrics tell you what impact it is having.

**The RED method** for request-driven services:
- **Rate**: Requests per second
- **Errors**: Errors per second (and error rate as percentage)
- **Duration**: Request latency distribution (p50, p95, p99)

**The USE method** for infrastructure resources:
- **Utilization**: Percentage of resource capacity in use
- **Saturation**: Degree to which the resource is overloaded (queue depth)
- **Errors**: Error count for the resource

**Cardinality management**: Metrics with high-cardinality labels (e.g., `user_id`, `invoice_id`) explode storage and query costs. Rules:
- Labels should have bounded cardinality (tenant, service, endpoint, status code -- yes; user_id, record_id -- no)
- If you need per-user or per-record analysis, use logs or traces, not metrics
- In ERP•AI, the metrics framework enforces cardinality limits per metric and alerts when limits are approached

**Custom metrics** for ERP applications:

| Metric | Type | Labels | Purpose |
|---|---|---|---|
| `erp_orders_created_total` | Counter | tenant, channel | Business volume tracking |
| `erp_invoice_post_duration_seconds` | Histogram | tenant | Processing performance |
| `erp_integration_sync_errors_total` | Counter | tenant, integration, direction | Integration health |
| `erp_background_job_duration_seconds` | Histogram | job_type | Background processing performance |
| `erp_active_users` | Gauge | tenant | Concurrent usage |
| `erp_data_quality_score` | Gauge | tenant, domain, dimension | Data quality tracking |

#### Traces

Distributed traces track a single request as it flows through multiple services, databases, and external systems. Each trace is a tree of **spans**, where each span represents a unit of work.

**Trace propagation**: When Service A calls Service B, the trace context (trace ID, parent span ID) must be propagated in the request headers. In ERP•AI, the framework injects and extracts trace context automatically for HTTP calls, message bus events, and background job dispatches.

**Span design for ERP:**
- Create spans for: inbound API requests, outbound API/integration calls, database queries (grouped by operation), message publish/consume, business logic steps (e.g., "calculate tax", "apply pricing rules"), background job execution
- Attach attributes to spans: `tenant_id`, `entity_type`, `record_id`, `operation` (but respect cardinality -- use attributes, not metric labels)
- Mark spans with status (OK, ERROR) and error messages

**Sampling strategies**: Tracing every request in a high-volume ERP system is prohibitively expensive. Strategies:

| Strategy | How It Works | When to Use |
|---|---|---|
| **Head-based sampling** | Decide at request entry whether to trace (e.g., 10% of requests) | Default for steady-state; simple to implement |
| **Tail-based sampling** | Collect all spans, decide after the request completes whether to keep (e.g., keep all errors, keep all slow requests) | Better quality traces but requires a collection buffer |
| **Priority sampling** | Always trace certain request types (admin actions, integration calls, financial postings); sample others | ERP-recommended approach for balancing cost and coverage |

In ERP•AI, configure sampling in the Observability module. Default: 100% for errors and slow requests (>2s), 100% for integration calls, 10% for everything else. Adjust per-tenant or per-endpoint as needed.

### Alerting Strategy

Alerting bridges observability data to human response. A well-designed alerting strategy catches real problems early while avoiding alert fatigue.

**Alert severity classification:**

| Severity | Definition | Response | Example |
|---|---|---|---|
| **P1 - Critical** | Service is down or severely degraded for multiple tenants | Immediate page, all hands | API error rate > 50%, database unreachable |
| **P2 - Major** | Significant degradation or single-tenant outage | Page on-call engineer, 15-min response | p99 latency > 10s, integration failures for one tenant |
| **P3 - Minor** | Degraded performance or non-critical component failure | Notify via Slack/email, respond within business hours | Background job queue backing up, disk usage > 80% |
| **P4 - Warning** | Trending toward a problem, not yet impacting users | Dashboard visibility, review in next standup | Error rate slowly increasing, certificate expiring in 14 days |

**Alert fatigue prevention:**
- Every alert must have a documented response action. If the response is "ignore it" or "it will fix itself," delete the alert.
- Use alert aggregation: group related alerts (e.g., all endpoints on a service failing) into a single notification.
- Implement alert suppression: during a known outage, suppress redundant alerts from dependent systems.
- Review alert volume monthly. Target: fewer than 5 actionable alerts per on-call shift. If the team is getting more, rules need tightening.
- Use burn rate alerts for SLOs (see below) instead of static thresholds where possible.

**Routing rules:**
- P1/P2: Page the on-call engineer via PagerDuty/Opsgenie. Escalate to secondary after 10 minutes, to engineering lead after 30 minutes.
- P3: Notify the owning team's Slack channel. Auto-create a ticket.
- P4: Dashboard only. Review in weekly observability review.

**On-call rotation:**
- Rotate weekly or biweekly. Never leave one person on-call indefinitely.
- Provide clear runbooks for every P1/P2 alert (see Runbook Automation below).
- Post-rotation handoff: outgoing on-call briefs incoming on-call on active issues, trends, and pending maintenance.

### Incident Response

Incident response is the structured process for detecting, resolving, and learning from service disruptions.

**Incident lifecycle:**

#### 1. Detection
- Automated: Alerts fire based on metrics, logs, or synthetic monitoring.
- Human: Customer reports, support ticket spikes, team member notices an anomaly.
- In ERP•AI: The Observability module correlates alerts with business impact metrics to auto-classify incident severity.

#### 2. Triage
- Acknowledge the alert. Assign an incident commander (IC) for P1/P2.
- Determine scope: How many tenants? Which services? What business functions?
- Classify severity based on actual impact (may differ from alert severity).
- Open an incident channel (Slack, Teams) for real-time coordination.

#### 3. Mitigation
- Focus on restoring service, not on root cause. Mitigation and diagnosis are separate.
- Common mitigation actions: rollback a deployment, scale up resources, failover to secondary, toggle a feature flag, restart a service, block a problematic tenant or request pattern.
- Communicate status to stakeholders every 15 minutes for P1, every 30 minutes for P2.

#### 4. Resolution
- Confirm service is restored and metrics are back to normal.
- Monitor for recurrence for at least 30 minutes.
- Close the incident channel with a summary.

#### 5. Postmortem
- Conduct within 48 hours of resolution for P1/P2 incidents.
- Structure: timeline, impact summary, root cause analysis (5 Whys or Fishbone), contributing factors, action items with owners and due dates.
- Blameless: Focus on system and process failures, not individual mistakes.
- Share broadly within the organization to spread learning.

### SLA Monitoring

SLA (Service Level Agreement), SLO (Service Level Objective), and SLI (Service Level Indicator) form a hierarchy:

| Term | Definition | Example |
|---|---|---|
| **SLI** | A quantitative metric measuring an aspect of service quality | Request success rate, p95 latency |
| **SLO** | A target value or range for an SLI over a time window | 99.9% success rate over 30 days |
| **SLA** | A contractual commitment with consequences for breach | 99.9% uptime; credits issued if breached |

**Uptime calculation:**

```
Uptime % = (Total minutes - Downtime minutes) / Total minutes * 100
```

| Uptime Target | Allowed Downtime/Month | Allowed Downtime/Year |
|---|---|---|
| 99.0% | 7h 18m | 3d 15h |
| 99.5% | 3h 39m | 1d 19h |
| 99.9% | 43m 50s | 8h 46m |
| 99.95% | 21m 55s | 4h 23m |
| 99.99% | 4m 23s | 52m 36s |

**Error budgets**: If the SLO is 99.9%, the error budget is 0.1% -- roughly 43 minutes of downtime per month. The error budget approach gives teams explicit permission to take risks (deploy new features) when the budget is healthy, and forces caution when the budget is nearly spent.

**Burn rate alerts**: Instead of alerting on instantaneous threshold breaches, alert when the error budget is being consumed faster than expected.
- 1-hour burn rate: If errors in the last hour would exhaust the monthly error budget in 1 day, alert P1.
- 6-hour burn rate: If errors in the last 6 hours would exhaust the budget in 3 days, alert P2.
- 3-day burn rate: If errors in the last 3 days would exhaust the budget in 10 days, alert P3.

This approach dramatically reduces false alerts compared to static thresholds.

In ERP•AI, SLO definitions are configured per tenant and per service. The platform automatically calculates error budget remaining and burn rates, and routes alerts per the severity classification above.

### Health Checks and Synthetic Monitoring

**Health check endpoints:**

| Endpoint | Purpose | What It Checks |
|---|---|---|
| `/health/live` (liveness) | Is the process running? | Process is alive, not deadlocked |
| `/health/ready` (readiness) | Can the service handle requests? | Database connected, cache warm, dependencies reachable |
| `/health/startup` | Has the service finished initializing? | Migrations complete, configuration loaded |

Design principles:
- Liveness checks must be fast (<100ms) and never depend on external systems. A liveness failure triggers a restart.
- Readiness checks may call dependencies (DB ping, cache ping) but should have aggressive timeouts. A readiness failure removes the instance from the load balancer but does not restart it.
- Return structured responses with component-level status for debugging.

**Synthetic monitoring** runs automated transactions against the live system on a schedule:
- Login flow: Authenticate, fetch dashboard data, verify response structure
- Order creation: Create a test order, verify it appears in the order list
- Integration round-trip: Send a test message through an integration, verify receipt

Synthetic transactions use dedicated test tenants and are tagged to exclude them from business metrics. In ERP•AI, synthetic monitors are defined in the Observability module with configurable schedules (every 1-5 minutes for critical paths) and expected response criteria.

**Canary endpoints**: Lightweight endpoints that exercise critical dependencies without creating real data. Example: `/canary/db` executes a read-only query; `/canary/cache` reads a known key; `/canary/integration/sap` pings the SAP connection.

### Capacity Monitoring and Forecasting

Capacity monitoring tracks resource utilization and projects when capacity will be exhausted.

**Key capacity metrics:**

| Resource | Metric | Warning Threshold | Critical Threshold |
|---|---|---|---|
| CPU | Average utilization over 5 min | 70% | 85% |
| Memory | Utilization percentage | 80% | 90% |
| Disk | Used percentage | 75% | 90% |
| Database connections | Active / max pool size | 70% | 85% |
| Message queue depth | Messages pending | 10x normal | 100x normal |
| API rate | Requests/sec vs provisioned capacity | 70% | 85% |

**Growth modeling:**
- Collect utilization metrics at daily granularity for at least 90 days.
- Apply linear regression or exponential smoothing to project when thresholds will be breached.
- Factor in known growth events (new tenant onboarding, seasonal peaks, marketing campaigns).
- Generate capacity forecast reports monthly for infrastructure planning.

**Capacity alerts:**
- P3: Resource utilization crosses warning threshold.
- P2: Resource utilization crosses critical threshold.
- P4: Forecast projects threshold breach within 30 days.

### Runbook Automation

Runbooks document the steps to diagnose and resolve known issues. Runbook automation executes those steps automatically or semi-automatically.

**Runbook structure:**

1. **Trigger**: What alert or condition activates this runbook?
2. **Diagnosis**: What data to collect (specific log queries, metric dashboards, trace searches)
3. **Decision tree**: Based on diagnosis, which resolution path to follow
4. **Resolution steps**: Step-by-step actions to resolve the issue
5. **Verification**: How to confirm the issue is resolved
6. **Escalation**: When to escalate and to whom

**Auto-remediation** executes resolution steps automatically for well-understood, safe-to-automate scenarios:
- Restart a service when it enters a degraded state (after N consecutive failed health checks)
- Scale up when utilization exceeds threshold (auto-scaling rules)
- Clear a stuck queue by replaying failed messages
- Rotate a certificate that is nearing expiry

**Escalation triggers**: Auto-remediation should escalate to a human when:
- The automated fix has been attempted N times and the issue persists
- The issue affects more than a configured number of tenants
- The automated fix involves data modification (not just infrastructure)

**Status page updates**: Integrate incident detection with a public status page. When a P1/P2 incident is declared, automatically update the status page with a generic impact statement. Steward the detailed updates manually.

## Workflow

### 1. Instrument the Application

- Add structured logging to all services with correlation IDs, tenant context, and PII redaction.
- Define and emit custom business metrics (order counts, processing durations, integration success rates).
- Add trace spans to all inbound requests, outbound calls, database operations, and key business logic steps.
- **Tool**: ERP•AI's Observability SDK and logging framework.
- **Watch out for**: Over-logging verbose debug information in production. Use log levels deliberately: ERROR for failures, WARN for unexpected but handled conditions, INFO for business events, DEBUG for development only.
- **Output**: Fully instrumented application with structured logs, metrics, and traces.

### 2. Build Dashboards

- Build system health dashboards using the RED method (request rate, errors, duration) per service.
- Build infrastructure dashboards using the USE method (utilization, saturation, errors) per resource.
- Build business dashboards showing key metrics (orders, revenue, active users) with tenant drill-down.
- Build SLO dashboards showing error budget remaining and burn rates.
- **Tool**: ERP•AI's Analytics Designer connected to the metrics store.
- **Watch out for**: Building dashboards that no one looks at. Start with the 3-5 dashboards the on-call engineer needs during an incident, then expand.
- **Output**: Dashboard set covering system, application, business, and SLO views.

### 3. Configure Alerting

- Define alerts for each severity level based on SLO burn rates and critical thresholds.
- Configure routing: P1/P2 to pager, P3 to Slack, P4 to dashboard.
- Set up alert aggregation and suppression rules.
- Write a runbook for every P1/P2 alert before activating it.
- **Tool**: ERP•AI's Alerting Configuration and integration with PagerDuty/Opsgenie.
- **Watch out for**: Activating dozens of alerts at launch. Start with 5-10 high-signal alerts and add more based on real incidents.
- **Output**: Configured alerting with routing, aggregation, and runbooks.

### 4. Set Up Synthetic Monitoring

- Define synthetic transactions for critical user journeys (login, order creation, report generation).
- Configure health check endpoints (liveness, readiness, startup) on all services.
- Deploy canary endpoints for dependency health verification.
- **Tool**: ERP•AI's Synthetic Monitor configuration.
- **Watch out for**: Synthetic tests that are too fragile (break on minor UI changes) or too simple (only check the home page).
- **Output**: Synthetic monitors covering critical paths with 1-5 minute check intervals.

### 5. Establish Incident Response

- Define incident severity levels and escalation policies.
- Train the team on the incident lifecycle (detection, triage, mitigation, resolution, postmortem).
- Set up on-call rotation with clear handoff procedures.
- Create a postmortem template and schedule reviews.
- **Tool**: Incident management platform (PagerDuty, Opsgenie) integrated with ERP•AI alerting.
- **Watch out for**: Skipping postmortems for "minor" incidents. Pattern analysis across minor incidents often reveals systemic issues.
- **Output**: Documented incident response process with trained team.

### 6. Implement Capacity Planning

- Configure capacity metric collection at daily granularity.
- Build capacity forecast dashboards with 30/60/90 day projections.
- Set up P4 alerts for projected threshold breaches.
- Review capacity monthly and adjust provisioning.
- **Tool**: ERP•AI's capacity analytics with growth modeling.
- **Watch out for**: Forecasting based only on average growth. Account for seasonal patterns and step-function growth events (new large tenant).
- **Output**: Capacity forecasting pipeline with monthly review process.

### 7. Continuously Improve

- Review alert quality monthly: which alerts were actionable? Which were noise?
- Review postmortem action items: are detection and mitigation times improving?
- Update runbooks based on real incident experience.
- Refine SLOs based on customer expectations and operational capability.
- **Tool**: Observability review meeting (monthly), postmortem database analysis.
- **Watch out for**: Treating observability as "done." It evolves with the application. New features need new instrumentation.
- **Output**: Continuous improvement cycle with measurable reliability trends.

## Decision Guide

### Choosing Log Retention

| Log Type | Hot Storage (queryable) | Cold Storage (archive) | Rationale |
|---|---|---|---|
| Application/system logs | 30-90 days | 1 year | Debugging needs are usually within 30 days |
| Audit/security logs | 1 year | 7 years | Regulatory and compliance requirements |
| Business event logs | 1 year | 7 years | Financial audit trail |
| Integration logs | 90 days | 1 year | Integration debugging and reconciliation |
| Debug/trace logs | 7 days | None | Volume is too high for long retention |

### Choosing Metric Type

| Measurement Need | Metric Type | Example |
|---|---|---|
| Cumulative count of events | Counter | Total requests, total errors |
| Current value that goes up and down | Gauge | Active connections, queue depth |
| Distribution of values (latency, size) | Histogram | Request duration, payload size |
| Snapshot of current state | Summary | p50/p95/p99 latency (client-side) |

### Choosing Alert Threshold Approach

| Situation | Approach |
|---|---|
| Well-defined SLO exists | Burn rate alerts on error budget |
| No SLO yet, need basic coverage | Static threshold on error rate and latency p99 |
| Metric has high variability / seasonality | Anomaly detection (dynamic threshold) |
| Binary resource (up/down) | Availability check with consecutive failure threshold |

## Common Patterns

### Multi-Tenant Observability

In a multi-tenant ERP system, observability must respect tenant boundaries:

- **Tenant-scoped queries**: All log, metric, and trace queries must support filtering by `tenant_id`. Support staff for tenant A should not see logs from tenant B.
- **Tenant-level SLOs**: Define SLOs per tenant tier (enterprise tenants get 99.95%, standard tenants get 99.9%). Track error budgets per tenant.
- **Noisy neighbor detection**: Alert when one tenant's activity is degrading performance for others (e.g., a single tenant consuming >30% of shared resources).
- **Tenant health dashboard**: A single view showing health status per tenant, enabling support teams to proactively reach out when a tenant is experiencing degradation.

### Integration Observability

Integration points are the most common source of ERP incidents. Instrument them thoroughly:

- Log every outbound API call: URL, method, request size, response code, response time, correlation ID.
- Log every inbound webhook/API call: source system, payload size, processing result.
- Create a dedicated integration health dashboard per integration partner: success rate, latency, error types.
- Alert on integration error rate spikes (per partner, not globally -- a single partner's issues should not be masked by overall averages).
- Track message queue depth and consumer lag for async integrations.

### Request Tracing Pattern

For a typical ERP request (e.g., "Post Invoice"):

```
Trace: Post Invoice (trace_id: abc123)
├── Span: API Gateway (10ms)
│   └── Auth check, rate limit, tenant resolution
├── Span: Invoice Service - validate (25ms)
│   ├── Span: DB query - fetch invoice (5ms)
│   └── Span: DB query - fetch GL accounts (3ms)
├── Span: Tax Service - calculate (80ms)
│   └── Span: External API - tax engine (70ms)
├── Span: GL Service - post journal entry (30ms)
│   └── Span: DB write - journal lines (15ms)
├── Span: Event Bus - publish invoice.posted (5ms)
└── Total: 150ms
```

This trace structure allows you to immediately see that the tax engine external call dominates latency and is the first place to investigate for slow requests.

## Anti-Patterns

- **"Alert on everything"**: Creating an alert for every metric that can be measured. Result: hundreds of alerts per day, most ignored. The team stops trusting alerts entirely. Every alert must have a documented response action and be reviewed for signal quality monthly.
- **"Log and forget"**: Emitting logs without structured formatting, correlation IDs, or retention planning. Logs exist but are unsearchable and useless during incidents. Invest in structured logging from day one.
- **"Monitoring without context"**: Metrics and alerts that show something is wrong but do not help determine what or why. A CPU alert without a link to the relevant dashboard, log query, and runbook is just noise. Every alert should link to its diagnostic context.
- **"Dashboard graveyard"**: Building dozens of dashboards during setup that no one maintains. Dashboards drift from reality as the application evolves. Review dashboards quarterly; archive unused ones.
- **"Sampling to zero"**: Setting trace sampling so low (0.1%) that you can never find a trace for a specific problematic request. Use priority sampling to always capture errors, slow requests, and integration calls.
- **"Metrics as logs"**: Using high-cardinality labels (user_id, record_id) on metrics, causing cardinality explosion. Metrics are for aggregate trends; logs and traces are for individual record/user analysis.
- **"Postmortem theater"**: Conducting postmortems as a blame exercise or checkbox activity. Action items are never followed up. Make postmortems blameless, track action items to completion, and review recurring themes quarterly.
- **"SLO without teeth"**: Defining SLOs that no one tracks or acts on. An SLO without an error budget, burn rate alerting, and a process for throttling risk when the budget is low is just a number on a slide.

## Checklist

- [ ] Structured logging implemented with correlation IDs, tenant context, and PII redaction
- [ ] Log levels used deliberately (ERROR, WARN, INFO, DEBUG)
- [ ] Log retention configured per category (application, audit, security, business, integration)
- [ ] Custom business metrics defined and emitting (order volume, processing time, integration health)
- [ ] System metrics collected via RED method (services) and USE method (infrastructure)
- [ ] Metric cardinality reviewed and bounded (no high-cardinality labels)
- [ ] Distributed tracing implemented with trace propagation across service boundaries
- [ ] Trace sampling strategy configured (priority sampling for errors, slow requests, integrations)
- [ ] Health check endpoints deployed (liveness, readiness, startup) on all services
- [ ] Synthetic monitors running for critical user journeys at 1-5 minute intervals
- [ ] SLIs defined for each critical service
- [ ] SLOs set with error budget tracking and burn rate alerting
- [ ] Alert severity levels defined (P1-P4) with documented response expectations
- [ ] Alert routing configured (P1/P2 to pager, P3 to Slack, P4 to dashboard)
- [ ] Runbooks written for every P1/P2 alert
- [ ] On-call rotation established with handoff procedures
- [ ] Incident response process documented and team trained
- [ ] Postmortem template created and review cadence established
- [ ] Capacity metrics collected with 30/60/90 day forecasting
- [ ] Dashboards built: system health, business metrics, SLOs, capacity, per-tenant health
- [ ] Alert quality review scheduled monthly
- [ ] Observability coverage reviewed with each new feature deployment

## ERP•AI & Proto

**ERP•AI**: Structured logging with tenant-aware correlation IDs, configurable metrics dashboards, and alert routing rules built into the platform runtime.

**Proto**: Emits full topology traces for every mission -- every agent decision, tool call, and reasoning step in the ORAI cycle is logged and replayable, making autonomous workflows fully auditable.

## Related

- [Disaster Recovery](../disaster-recovery/SKILL.md) -- incident response extends into DR when incidents become outages
- [Security & Roles](../security-roles/SKILL.md) -- audit logging and security event monitoring
- [Integrations](../integrations/SKILL.md) -- integration observability is critical for ERP reliability
- [Workflow Automation](../workflow-automation/SKILL.md) -- monitoring workflow execution and performance
