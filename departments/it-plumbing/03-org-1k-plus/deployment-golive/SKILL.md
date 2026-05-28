---
name: deployment-golive
description: This skill should be used when the task involves planning and executing the transition from development to production -- environment strategy, cutover runbooks, rollback procedures, go/no-go decisions, and hypercare.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: it-plumbing
  size_tier: 03-org-1k-plus
  type: skill
  scope: internal
---
# Deployment & Go-Live

## Purpose

Go-live is the highest-risk moment in an enterprise application project. Every configuration, every data migration, every integration, every security rule converges into a single event: turning on the system for real users with real data. This skill covers how to plan, rehearse, execute, and support a go-live -- from environment strategy through hypercare.

Use this skill when a builder needs to:
- Set up and manage multiple environments (dev, test, staging, production)
- Build a deployment pipeline for configuration-heavy applications
- Create a cutover runbook with sequenced tasks, owners, and rollback triggers
- Run a go/no-go decision process
- Plan communications to stakeholders during cutover
- Execute a parallel run strategy for high-risk processes
- Design the hypercare period and staffing model
- Implement feature flags for progressive rollout

## Key Concepts

### Environment Strategy

| Environment | Purpose | Data | Who Uses It | Refresh Cadence |
|-------------|---------|------|-------------|-----------------|
| **Development (Dev)** | Active configuration and customization work | Minimal synthetic data | Builders, developers | Continuous |
| **Test / QA** | Structured testing (unit, integration, regression) | Managed test data sets with refresh scripts | QA team, testers | Refreshed before each test cycle |
| **Staging / Pre-Prod** | Final validation in a production-like setup | Anonymized production data (recent copy) | QA, business leads, performance testers | Refreshed before UAT and before go-live rehearsal |
| **Production (Prod)** | Live system serving real users with real data | Production data | All end users | N/A |
| **Sandbox** | Experimentation, training, demos | Anonymized production snapshot or synthetic | Trainers, sales, exploratory users | On-demand |

Key rules:
- Changes flow in one direction: Dev -> Test -> Staging -> Prod. Never configure directly in production.
- Staging must mirror production in configuration, data volume, and infrastructure sizing. If staging is a quarter of production's size, performance tests are meaningless.
- Sandbox is isolated from the promotion pipeline. It is not a step on the path to production.

### Deployment Pipeline for Config-Heavy Apps

Enterprise apps built on platforms like ERP•AI are configuration-heavy rather than code-heavy. The deployment pipeline must handle:

- **Configuration packages**: Bundles of entity definitions, validation rules, workflow configurations, security roles, report definitions, and UI layouts. These must be versioned and promotable as a unit.
- **Reference data**: Lookup tables, code lists, GL account structures, organizational hierarchies. These often differ between environments (test accounts vs. real accounts) and require environment-specific value mapping.
- **Custom scripts or extensions**: Any code-level customizations (server scripts, client scripts, scheduled jobs) that accompany the configuration.
- **Sequencing**: Some configurations depend on others. A workflow that references a custom field must be deployed after the field definition. The pipeline must enforce dependency order.

### Cutover Runbook

A cutover runbook is the minute-by-minute plan for transitioning from the old system to the new system. It contains:

- **Task ID**: Unique identifier for each task.
- **Task description**: Specific action to perform (e.g., "Disable user logins on legacy system").
- **Owner**: Named individual responsible for executing the task.
- **Estimated duration**: How long the task is expected to take.
- **Start time**: Scheduled start (relative to cutover T-zero or absolute clock time).
- **Dependencies**: Which tasks must complete before this one can start.
- **Verification step**: How to confirm the task completed successfully.
- **Rollback action**: What to do if this task fails.
- **Rollback trigger**: The specific condition that indicates this task has failed and rollback should begin.

### Go/No-Go Decision Framework

A structured evaluation conducted at a predetermined point before cutover (typically 24-48 hours prior). Each workstream lead reports readiness status:

- **Go**: All criteria met, no blockers.
- **Go with conditions**: Criteria mostly met, minor items to resolve with a documented plan.
- **No-Go**: Critical criteria not met; cutover must be postponed.

The decision requires unanimous "Go" or "Go with conditions" from all workstream leads. A single "No-Go" from any workstream halts the cutover.

### Parallel Run

Running the old system and the new system simultaneously for a defined period (typically 1-2 accounting periods). The same transactions are entered in both systems, and outputs are compared. Used for:

- Financial processes where accuracy must be proven (GL, AP, AR, Payroll).
- Regulatory processes where the organization must demonstrate the new system produces correct results before decommissioning the old one.

Parallel runs are expensive (double data entry, comparison effort) but provide the highest confidence for high-risk transitions.

### Feature Flags

A mechanism to deploy functionality to production but control its visibility and availability:

- **Boolean flag**: Feature is on or off for all users.
- **Percentage rollout**: Feature is enabled for X% of users (random selection).
- **Role-based flag**: Feature is enabled only for specific user roles.
- **Time-based flag**: Feature activates at a scheduled date/time.

Feature flags allow progressive rollout: deploy to production, enable for internal users first, then expand to a pilot group, then all users. If issues arise, disable the flag without a deployment.

### Hypercare

The intensive support period immediately following go-live, typically lasting 2 weeks. Characteristics:

- Extended support hours (matching all user time zones, often including weekends).
- Accelerated defect resolution (SLAs tightened to 2-4 hour response for critical issues).
- Daily triage meetings with the project team and business leads.
- Dedicated war room (physical or virtual) for rapid issue coordination.
- Increased monitoring and alerting thresholds.

## Workflow

### 1. Set Up the Environment Strategy

- Provision all required environments: Dev, Test, Staging, Production, Sandbox.
- Document the promotion path: which environment feeds which, and the approval required at each gate.
- Configure environment-specific settings: API endpoints, email routing (do not send real emails from test), integration credentials, data source connections.
- Establish environment access controls: who can deploy to each environment, who can access production data.
- **Watch out for**: Test environments that accumulate configuration drift from production. Implement periodic resync of staging from the latest production configuration baseline.
- **Output**: Environment strategy document with provisioning details, promotion path, and access controls.

### 2. Build the Deployment Pipeline

- Define the configuration package format: what is included, how it is versioned, how it is promoted.
- Build or configure the promotion mechanism in ERP•AI (export from source environment, import to target environment).
- Implement pre-deployment validation: schema compatibility checks, dependency checks, conflict detection for configurations modified in both source and target.
- Implement post-deployment verification: automated smoke tests that run after each deployment to confirm the environment is functional.
- Document the rollback procedure for each deployment step: how to revert a configuration package if post-deployment verification fails.
- **Watch out for**: Reference data that has different values between environments (e.g., test GL accounts vs. production GL accounts). Maintain an environment-specific value mapping table and apply it during promotion.
- **Output**: Documented deployment pipeline with package format, promotion steps, validation checks, and rollback procedures.

### 3. Create the Cutover Runbook

- List every task required to transition from the current state to the new system running in production.
- Sequence tasks based on dependencies. Use a Gantt chart or critical path analysis to identify the longest sequence (the critical path determines the minimum cutover duration).
- Assign an owner to every task. No task should have "TBD" as the owner within 2 weeks of go-live.
- Estimate duration for each task. Add 50% buffer to estimates for tasks that have not been rehearsed.
- Define the rollback trigger for each task: what specific symptom or metric indicates failure.
- Define the point-of-no-return: the task after which rollback becomes impractical and the team must fix forward. This is typically after data migration or after users begin entering transactions.
- **Watch out for**: Runbooks that assume everything will go right. For each task, answer: "What if this takes twice as long as expected? What if it fails entirely?" Document the contingency.
- **Output**: Cutover runbook with task ID, description, owner, duration, dependencies, verification, rollback action, and rollback trigger.

### 4. Rehearse the Cutover

- Execute the full cutover runbook in the staging environment at least twice before the real go-live.
- During the first rehearsal, expect failures and use them to refine the runbook (add missing tasks, adjust sequences, update duration estimates).
- During the second rehearsal, measure actual durations and compare to estimates. Adjust the production cutover schedule based on rehearsal actuals.
- Validate the rollback procedure during at least one rehearsal: deliberately trigger a rollback to verify it works.
- Time the full rehearsal end-to-end. If the cutover window is 8 hours (Friday 6 PM to Saturday 2 AM), the rehearsal must complete within 8 hours.
- **Watch out for**: Rehearsals that skip "boring" steps like communication notifications or access provisioning. Rehearse everything, including the communication plan, or those steps will fail during the real cutover.
- **Output**: Rehearsal results with actual durations, issues discovered, and runbook revisions.

### 5. Run the Go/No-Go Decision

- Schedule the go/no-go meeting 24-48 hours before cutover.
- Each workstream lead presents their readiness status against the predefined criteria.
- **Criteria checklist** (each item is Go / Go with Conditions / No-Go):
  - All UAT test cases passed or deferred defects approved with workarounds
  - Data migration validated and reconciled
  - Integrations tested end-to-end with external systems
  - Security roles configured and tested
  - Training completed for all user groups
  - Cutover runbook rehearsed with acceptable durations
  - Rollback plan documented and rehearsed
  - Hypercare team staffed and scheduled
  - Communication plan finalized
  - Infrastructure provisioned and performance tested
- Document the decision and any conditions attached to a "Go with conditions" verdict.
- If No-Go: immediately communicate the postponement, identify the blockers, and set a new target date.
- **Watch out for**: Political pressure to declare "Go" when criteria are not met. The go/no-go decision must be based on evidence, not optimism. A delayed go-live is recoverable; a failed go-live damages credibility for years.
- **Output**: Signed go/no-go decision document with rationale.

### 6. Execute the Cutover

- Begin the cutover at the scheduled time. Assign a cutover commander who owns the overall timeline and makes real-time decisions.
- Execute tasks in runbook sequence. Log actual start time, end time, and status for each task.
- At each verification checkpoint, confirm success before proceeding to the next task.
- Monitor the rollback trigger conditions. If a trigger fires before the point-of-no-return, initiate rollback per the runbook.
- Send communications at predefined milestones (cutover started, data migration complete, system available for testing, go-live complete).
- After the final task, execute the smoke test suite to verify the production system is functional.
- Open the system to users (or a pilot group if using progressive rollout).
- **Watch out for**: Task paralysis when something goes wrong. The cutover commander must have pre-delegated authority to make time-critical decisions (extend the window, skip a non-critical task, activate rollback) without convening a committee.
- **Output**: Completed cutover log with actual times, issues, and final status.

### 7. Execute Hypercare

- Staff the war room with representatives from each workstream (configuration, data, integrations, security, training).
- Establish an escalation path: Level 1 (help desk / super-users), Level 2 (project team), Level 3 (platform vendor / ERP•AI support).
- Triage incoming issues daily (twice daily in the first week). Categorize as: defect, training gap, data issue, or enhancement request.
- Track issue volume and resolution time daily. A declining trend indicates stabilization; a flat or increasing trend indicates unresolved systemic issues.
- At the end of hypercare (typically 2 weeks), conduct a formal transition to steady-state support. Hand over open issues, documentation, and monitoring to the operations team.
- **Watch out for**: Hypercare teams that fix issues but do not document them. Every fix made during hypercare must be documented as a configuration change, added to the knowledge base, and included in the next deployment package.
- **Output**: Hypercare daily log, issue trend report, and formal handover to operations.

## Decision Guide

### Cutover Strategy

| Factor | Big Bang | Phased by Module | Phased by Location | Parallel Run |
|--------|----------|------------------|--------------------|--------------|
| Complexity | High -- everything at once | Medium -- one module at a time | Medium -- one site at a time | High -- dual operation |
| Risk | Highest | Lower per phase | Lower per phase | Lowest |
| Duration | Short cutover window | Long total duration | Long total duration | Very long (1-2 periods) |
| Cost | Lower (one cutover) | Higher (multiple cutovers) | Higher (multiple cutovers) | Highest (double effort) |
| Integration complexity | Simple (one system) | Complex (old and new must coexist) | Complex (old and new must coexist) | Complex (dual reconciliation) |
| Best for | Small-medium implementations, tight timelines | Large implementations with independent modules | Multi-site orgs with regional autonomy | Financial / regulatory processes requiring proven accuracy |

### Rollback Decision

| Condition | Action |
|-----------|--------|
| Issue found before point-of-no-return, fix estimated > 2 hours | Rollback |
| Issue found before point-of-no-return, fix estimated < 30 minutes | Fix forward, extend window if needed |
| Issue found after point-of-no-return, critical | Fix forward with war room escalation |
| Issue found after point-of-no-return, non-critical | Document, fix in hypercare |
| Data corruption detected at any point | Immediately halt; assess scope before deciding |

### Feature Flag Rollout Stages

| Stage | Audience | Duration | Purpose |
|-------|----------|----------|---------|
| Internal only | Project team, IT staff | 1-3 days | Smoke testing in production |
| Pilot group | Selected super-users (5-10% of users) | 3-5 days | Real-world validation with experienced users |
| Controlled rollout | 25-50% of users | 3-5 days | Scale validation, performance monitoring |
| General availability | All users | Permanent | Full deployment, remove flag when stable |

## Common Patterns

### Weekend Cutover Window
Schedule the cutover over a weekend to minimize business disruption. Start Friday evening after business hours, execute data migration and configuration promotion overnight, run validation Saturday morning, allow business leads to verify Saturday afternoon, open for users Monday morning. Requires the entire project team to work the weekend -- plan for fatigue and assign shifts.

### Blue-Green Deployment
Maintain two identical production environments (Blue and Green). At any time, one is live (serving users) and one is idle (receiving the next deployment). Deploy to the idle environment, validate, then switch traffic from the live environment to the newly deployed one. If issues arise, switch traffic back in seconds. Requires infrastructure that supports instant traffic switching (load balancer reconfiguration or DNS swap).

### Canary Deployment
Deploy the new version to a small subset of production infrastructure (1-5% of servers or users). Monitor error rates and performance metrics for that subset. If metrics are healthy, gradually expand to 10%, 25%, 50%, 100%. If metrics degrade, route all traffic back to the old version. Works well with feature flags.

### Communication Notification Matrix

| Event | Audience | Channel | Timing | Owner |
|-------|----------|---------|--------|-------|
| Go-live date confirmed | All users | Email + intranet | 2 weeks before | Project sponsor |
| System unavailable for cutover | All users | Email + banner | 24 hours before | Project manager |
| Cutover in progress | Stakeholders | Slack/Teams war room | Real-time | Cutover commander |
| System available / go-live complete | All users | Email + intranet + banner | Immediately after | Project sponsor |
| Known issues and workarounds | Affected users | Email + knowledge base | Within 2 hours of discovery | Hypercare lead |

### Anti-Patterns to Avoid

- **Configuring directly in production**: Bypassing the deployment pipeline to "just fix this one thing" in prod. Leads to configuration drift, untested changes, and audit failures.
- **No cutover rehearsal**: Going live with a runbook that has never been executed end-to-end. Task durations are guesses, dependencies are assumptions, and the team discovers gaps at 2 AM during cutover.
- **Optimistic go/no-go**: Declaring "Go" when critical defects are open because "we'll fix them during hypercare." Hypercare is for unexpected issues, not known defects.
- **Understaffed hypercare**: Planning 2 weeks of hypercare but staffing it with 1 person. The first critical issue at 7 AM on a Monday will overwhelm them.
- **No point-of-no-return definition**: The team does not know when rollback stops being an option. When a problem occurs 4 hours into cutover, they waste time debating whether to roll back instead of acting.
- **Silent cutover**: Not communicating cutover status to users. Users arrive Monday morning to a new system with no warning, no training link, and no support contact.

## Advanced Topics

### Database Migration During Deployment

Schema changes are among the riskiest deployment activities. A botched migration can lock tables, corrupt data, or create incompatibilities between the application and the database. Enterprise databases serve multiple applications and integrations simultaneously -- downtime tolerance is near zero.

**Schema change strategies:**

| Strategy | How It Works | When to Use | Risk |
|----------|-------------|-------------|------|
| **Additive-only** | Add new columns, tables, or indexes. Never remove or rename in the same deployment. | Most changes. The safest default. | Low -- existing queries continue to work |
| **Expand-and-contract** | Phase 1: Add new column alongside old column. Phase 2: Migrate data and update application to use new column. Phase 3 (later deployment): Remove old column. | Renaming columns, changing data types, restructuring tables | Low if phases are respected; high if contracted too early |
| **Shadow table** | Create a new table with the desired schema. Run dual-writes to both tables during transition. Cut over reads when confident. Drop the old table later. | Major restructuring of high-traffic tables | Medium -- dual-write logic is complex |
| **Online schema migration** | Tools like `pg_repack`, `pt-online-schema-change`, or `gh-ost` perform schema changes without locking the table | Adding indexes or modifying columns on large tables in production | Low-Medium with proper tooling |

**Backward-compatible migrations:**

Every database migration must be backward-compatible with the currently deployed application version. This is non-negotiable for zero-downtime deployments because the old application version continues running while the migration executes.

Rules for backward compatibility:
- **Adding a column**: Always add with a default value or as nullable. The old application ignores the new column.
- **Removing a column**: Never remove in the same deployment that stops using it. Remove in a subsequent deployment after confirming no application version references it.
- **Renaming a column**: Use expand-and-contract. Add the new name, dual-write, migrate reads, then drop the old name.
- **Changing a data type**: Add a new column with the new type, backfill it, migrate reads and writes, then drop the old column.
- **Adding a NOT NULL constraint**: First ensure all existing rows have a value (backfill), then add the constraint. Never add NOT NULL to a column with existing NULLs.

**Zero-downtime DDL:**

Some DDL operations acquire locks that block all queries on the table. In PostgreSQL, for example:
- `ALTER TABLE ... ADD COLUMN` with a non-volatile default acquires an `ACCESS EXCLUSIVE` lock in older versions (PostgreSQL 11+ avoids this for most cases).
- `CREATE INDEX` blocks writes. Use `CREATE INDEX CONCURRENTLY` instead (takes longer but does not lock).
- `ALTER TABLE ... ADD CONSTRAINT` with validation scans the full table while holding a lock. Use `ALTER TABLE ... ADD CONSTRAINT ... NOT VALID` followed by `ALTER TABLE ... VALIDATE CONSTRAINT` to split the lock duration.

For large tables (millions of rows), always benchmark DDL operations in a production-equivalent environment before executing in production. A 2-second operation on a staging table with 100K rows may take 20 minutes on a production table with 100M rows.

**Data backfill approaches:**

When a migration adds a new column that must be populated from existing data:
- **Batch backfill**: Update records in batches of 1,000-10,000 with a pause between batches (100-500ms) to avoid overwhelming the database. Monitor replication lag if using replicas.
- **Lazy backfill**: The application computes and writes the new column's value the next time it processes each record. Over time, all active records are backfilled. Inactive records are backfilled by a background sweep. This spreads the load over days instead of minutes.
- **Dual-read**: The application reads the new column; if it is NULL, it falls back to computing the value from the old data in real-time. This provides immediate correctness without requiring the backfill to complete before the application can use the new column.

**Migration ordering:**

Complex deployments involve multiple migrations (add a table, add columns to existing tables, create indexes, insert reference data). These must execute in dependency order:
1. Create new tables (no dependencies).
2. Add columns to existing tables (may depend on new tables for foreign keys).
3. Backfill data (depends on columns existing).
4. Create indexes (depends on data being present for optimal index statistics).
5. Add constraints (depends on data being valid).

Number migrations sequentially (001, 002, 003...) and enforce execution order in the deployment pipeline. A migration that references a table or column created by a later migration must fail loudly, not silently produce an error.

### Rollback Decision Framework

Rollback is the most consequential decision during a cutover. Rolling back too late wastes hours and introduces data reconciliation nightmares. Rolling back too early abandons work that could have been salvaged. The decision must be pre-planned, criteria-based, and time-boxed.

**Rollback triggers:**

Define specific, measurable conditions that mandate rollback consideration:

| Trigger Category | Specific Trigger | Severity |
|-----------------|-----------------|----------|
| **Data corruption** | Records with incorrect financial values (GL out of balance, invoice totals wrong) | Critical -- immediate rollback |
| **Integration failure** | Critical integration (payment gateway, bank feed, tax service) cannot connect and cannot be resolved within 1 hour | Critical if no workaround |
| **Performance degradation** | Key transaction response time > 5x baseline and cannot be resolved within 2 hours | High |
| **Security breach** | Unauthorized data access detected, RLS bypass confirmed | Critical -- immediate rollback |
| **Feature failure** | A core business process (order-to-cash, procure-to-pay) cannot complete end-to-end | High if no workaround |
| **Data migration gap** | Reconciliation shows missing or mismatched records exceeding tolerance (e.g., > 0.1% discrepancy in financial data) | High |
| **Cascading errors** | Error rate exceeding 5% across multiple modules | High -- indicates systemic issue |

**Time-boxed decision windows:**

Do not allow rollback debates to consume hours. Pre-define decision windows:
- **T+30 minutes**: First rollback checkpoint. If a critical trigger has fired and no fix is in sight, convene the rollback decision immediately.
- **T+2 hours**: Second checkpoint. If multiple high-severity triggers are active and none are trending toward resolution, initiate rollback.
- **Point-of-no-return**: Pre-defined moment (typically after users begin entering transactions in the new system). After this point, rollback requires reverse-migrating new data -- which is far more complex and risky than rolling forward.

The cutover commander has pre-delegated authority to initiate rollback before the point-of-no-return without convening a committee. After the point-of-no-return, the decision requires the project sponsor's involvement.

**Partial rollback options:**

Not every problem requires a full system rollback:
- **Module-level rollback**: If the defect is isolated to one module (e.g., Fixed Assets), roll back only that module while keeping the rest of the system live. This requires that modules are independently deployable and that cross-module integrations can tolerate a module being in the previous version.
- **Feature flag rollback**: If the problematic functionality is behind a feature flag, disable the flag. Users lose the new feature but retain all other new functionality.
- **Data rollback**: If the problem is corrupt or incorrect data (not a code/configuration issue), restore the affected data from the pre-cutover backup without rolling back the application. This is viable only if the data corruption is isolated to specific records or tables.

### Infrastructure Scaling for Go-Live

Go-live typically brings the highest load the system has ever experienced. Day-one traffic patterns differ fundamentally from steady-state patterns: all users log in within a narrow window, training-mode usage creates more navigations per transaction, and background processes (initial data syncs, report generation) run concurrently with interactive users.

**Capacity planning for day-one spike:**

- **Estimate peak concurrent users**: Not total users, but the maximum number who will be active simultaneously. For a go-live at 8 AM Monday, assume 60-80% of total users log in within the first hour. For phased rollouts, scale by the pilot group size.
- **Estimate transaction mix**: Day-one transaction patterns differ from steady-state. Expect higher proportions of read operations (users exploring the system), more frequent page navigations (training-mode behavior), and lower transaction completion rates (users starting tasks, encountering questions, and abandoning).
- **Apply a 2x safety factor**: Whatever the capacity model predicts, provision 2x for go-live day. The cost of over-provisioning for one day is negligible compared to the cost of performance failures on day one.

**Auto-scaling configuration:**

- **Pre-warm**: Do not rely on auto-scaling to react to the day-one spike. Pre-scale the application tier to the expected peak capacity before go-live. Auto-scaling cannot add instances fast enough if 1,000 users hit the login page simultaneously.
- **Scale-out triggers**: Set auto-scaling triggers more aggressively for go-live: scale out at 50% CPU (not the steady-state 70%) and scale out by adding 2 instances at a time (not 1).
- **Scale-in delay**: Set a long cool-down period for scale-in (30 minutes minimum). Day-one traffic is bursty, and premature scale-in causes oscillation (scale out, scale in, scale out again).
- **Post-go-live normalization**: After 1-2 weeks of stable operation, reduce the pre-warmed capacity and revert to steady-state auto-scaling parameters.

**Load balancer tuning:**

- **Health check sensitivity**: Tighten health check intervals (every 5 seconds instead of 30) and lower the unhealthy threshold (2 consecutive failures instead of 5). Fast detection of unhealthy instances prevents users from being routed to degraded nodes.
- **Connection draining**: Configure the load balancer to drain connections from instances before removing them (allow in-flight requests to complete within 30-60 seconds). Abrupt removal drops active requests.
- **Session affinity**: If the application requires server-side session state, configure sticky sessions on the load balancer. If the application is stateless, disable sticky sessions for better load distribution.

**CDN warming:**

If the application serves static assets (JavaScript bundles, CSS, images, fonts) through a CDN:
- Pre-warm the CDN cache before go-live by requesting every static asset from every CDN edge location.
- Verify that cache headers are correctly configured (long TTL for versioned assets, no-cache for HTML pages).
- Cold CDN caches on go-live morning mean the first thousand users all hit the origin server for static assets, adding unexpected load.

**Database connection pool sizing:**

- **Calculate minimum pool size**: (peak concurrent users) x (average queries per user action) / (average query duration in seconds). Add 20% buffer.
- **Set maximum pool size**: 2x the minimum, capped by the database server's maximum connection limit. PostgreSQL defaults to 100 connections; a large go-live may need 300-500.
- **Use connection pooling middleware**: PgBouncer, ProxySQL, or equivalent. These multiplex many application connections over fewer database connections, reducing database connection overhead.
- **Monitor connection utilization**: If the pool reaches 80% capacity during go-live, add capacity before it hits 100%. Connection pool exhaustion causes application-wide failures, not just slow responses.

### Configuration Drift Detection

After go-live, the production environment must remain consistent with the intended configuration. Configuration drift -- unauthorized or untracked changes to production -- is a leading cause of post-go-live incidents and audit findings.

**Detecting unauthorized config changes:**

- **Configuration audit log**: ERP•AI logs all configuration changes (role modifications, workflow changes, field definitions, validation rules) in the audit trail. Set up a daily automated report that lists all configuration changes made in production in the last 24 hours, with the user who made them and the approval ticket (if any).
- **Change without ticket**: Any production configuration change that does not reference an approved change ticket is a policy violation. The automated report should flag these as exceptions for the security team to investigate.
- **Scheduled configuration scans**: Weekly, export the complete configuration from production and compare it against the last approved configuration baseline (stored in version control). Any difference is a drift.

**Environment parity verification:**

Staging and production must remain in sync. After go-live, changes that are applied to production (hotfixes, hypercare fixes) often do not get back-ported to staging, causing the environments to diverge.

- After every production change, require a corresponding change to staging within 48 hours. Automate this where possible.
- Before each deployment, run a configuration comparison between staging and production. Resolve any differences before promoting to production.
- Track an "environment parity score" -- the percentage of configuration objects that are identical between staging and production. Target: > 99%.

**Config snapshot comparison:**

Implement automated configuration snapshots:
1. **Nightly snapshot**: Export the full configuration from production as a structured document (JSON or YAML) and commit it to a version control repository.
2. **Diff detection**: Compare tonight's snapshot against last night's. Any differences are logged and categorized (authorized change, drift, or expected divergence).
3. **Alerting**: Unauthorized diffs trigger an alert to the security and operations teams.
4. **Historical baseline**: The snapshot history provides a complete audit trail of every configuration state the production system has ever been in. This is invaluable for incident investigation ("what changed between Tuesday and Wednesday that caused the Thursday outage?").

**Drift remediation:**

When drift is detected, remediate according to the cause:
- **Unauthorized change**: Revert to the approved configuration. Investigate how the change was made (who, when, why) and whether the access controls are sufficient to prevent recurrence.
- **Emergency hotfix not back-ported**: Apply the change to staging and lower environments. Update the configuration baseline in version control.
- **Environmental divergence** (expected differences like API endpoints): Document the expected differences in the environment-specific configuration map. Exclude these from drift detection.

### Post-Cutover Performance Validation

The real performance test happens in production on day one. No staging environment perfectly replicates production conditions. Post-cutover performance validation confirms that the system meets performance requirements under real-world conditions.

**Baseline establishment:**

Immediately after go-live, establish the production performance baseline:
- **Transaction response times**: For each key transaction (invoice creation, PO approval, report generation), record the p50, p90, p95, and p99 response times during the first hour of normal usage.
- **Throughput**: Measure transactions per second for each transaction type during peak periods.
- **Resource utilization**: Record CPU, memory, disk I/O, and network utilization for application servers, database servers, and integration endpoints.
- **Database metrics**: Query execution times, lock wait times, connection pool utilization, buffer cache hit ratio, replication lag.

Store these baselines as the reference for all future performance monitoring. Any future change that degrades performance beyond the baseline is a regression.

**Real-time performance monitoring:**

Deploy a performance monitoring stack (Datadog, New Relic, Grafana + Prometheus, or equivalent) with dashboards that display:
- Current response times vs. baseline (overlay chart).
- Error rates by endpoint and transaction type.
- Slow query log (queries exceeding 1 second).
- Active user count and session count.
- Infrastructure resource utilization with alert thresholds.

The monitoring dashboard should be on display in the war room during go-live and hypercare. Any team member should be able to glance at it and know whether the system is healthy.

**Degradation alerts:**

Configure automated alerts for performance degradation:
- **Response time**: Alert if p95 response time for any key transaction exceeds 2x the baseline for 5 consecutive minutes.
- **Error rate**: Alert if the HTTP 5xx error rate exceeds 1% for 3 consecutive minutes.
- **Database**: Alert if query execution time for any query exceeds 5 seconds, if lock wait time exceeds 10 seconds, or if replication lag exceeds 60 seconds.
- **Resource**: Alert if CPU exceeds 80% for 10 minutes, if memory exceeds 85%, or if connection pool utilization exceeds 80%.

**Query plan regression detection:**

Database query plans can change after go-live due to new data distributions, updated table statistics, or PostgreSQL's auto-vacuum behavior. A query that ran in 50ms during testing may switch to a different execution plan in production and run in 5 seconds.

- Capture query plans for the top 50 most frequent queries during staging performance testing. Store these as the expected plans.
- After go-live, compare production query plans against the expected plans. Flag any plan changes for DBA review.
- If a plan regression is detected (a query that was using an index scan is now doing a sequential scan), investigate the root cause (missing index, stale statistics, data skew) and remediate.
- Use `pg_stat_statements` (PostgreSQL) or equivalent to continuously track query performance and detect regressions over time.

### Cutover Resource Planning

A cutover is a high-stakes, time-pressured operation involving dozens of people over an extended period. Human factors -- fatigue, unclear responsibilities, communication breakdowns -- cause as many cutover failures as technical issues.

**War room staffing:**

The war room (physical or virtual) must have representatives from every workstream with the authority to make decisions and execute tasks:

| Role | Responsibility | Required Presence |
|------|---------------|-------------------|
| **Cutover Commander** | Owns the timeline, makes real-time decisions, escalates blockers | Full duration |
| **Database / Migration Lead** | Executes data migration tasks, monitors database health | Full duration during migration phase |
| **Configuration Lead** | Deploys configuration packages, troubleshoots config issues | Full duration during deployment phase |
| **Integration Lead** | Tests and monitors integrations, coordinates with external systems | Full duration during integration testing phase |
| **Security Lead** | Validates access controls, monitors for security events | Available on-call; present during access provisioning |
| **QA Lead** | Executes smoke tests and validation checks at each milestone | Present during all verification checkpoints |
| **Business Lead (per module)** | Validates business data, confirms system behavior, makes business decisions | Present during their module's validation window |
| **Infrastructure / DBA** | Monitors system health, scales resources, responds to performance issues | Full duration |
| **Communications Lead** | Sends status updates per the communication plan | Full duration |

**Shift rotation for 24h+ cutovers:**

For large cutovers that span more than 12 hours:
- Divide the cutover into shifts (typically 8-12 hours each, with 2-hour overlaps for handover).
- Each shift must have full coverage of all critical roles. Do not create shifts where a key role is "on call" -- they must be present and active.
- During the handover period, the outgoing shift briefs the incoming shift on: current runbook position, open issues, decisions made, and upcoming critical tasks.
- Document the handover in the cutover log. A clean handover log entry prevents "I thought you handled that" failures.

**Fatigue management:**

Fatigue impairs judgment and increases error rates. During extended cutovers:
- Enforce mandatory breaks: 15 minutes every 2 hours, 30 minutes every 4 hours.
- No individual should work more than 12 consecutive hours on cutover tasks, regardless of their willingness to continue.
- Provide food, caffeine, and a quiet rest area. A team that has been awake for 20 hours will make mistakes that cost more than the 2-hour delay of taking a break.
- Assign a "fatigue monitor" -- someone whose job is to notice when team members are making errors due to tiredness and to escalate for shift relief.

**RACI for cutover tasks:**

Every task in the cutover runbook must have a RACI assignment:
- **Responsible**: The person who executes the task.
- **Accountable**: The person who approves the task completion and is answerable for the outcome (typically the workstream lead).
- **Consulted**: People who provide input or expertise during the task (e.g., the DBA is consulted during data migration tasks even if the migration lead is responsible).
- **Informed**: People who need to know when the task is complete (e.g., the communications lead is informed when the data migration is done so they can send the status update).

Publish the RACI matrix as part of the cutover runbook. Review it in the cutover rehearsal to ensure every person understands their assignments.

**Escalation paths:**

Pre-define escalation paths for different types of issues:
- **Technical issue (app/infra)**: Team member -> Workstream Lead -> Cutover Commander -> Platform Vendor (ERP•AI support, on standby).
- **Business issue (data, process)**: Team member -> Business Lead -> Project Sponsor.
- **Timeline issue (task overrunning)**: Task owner -> Cutover Commander (who decides to extend, skip, or rollback).
- **Vendor issue (external system down)**: Integration Lead -> Vendor emergency contact (pre-arranged and tested before cutover).

Every escalation path must include pre-exchanged contact information (direct phone numbers, not general support lines) and pre-arranged availability windows. During cutover, the escalation path should achieve human contact within 15 minutes at every level.

## Checklist

- [ ] All environments provisioned (Dev, Test, Staging, Prod, Sandbox) with documented configuration
- [ ] Promotion path defined: Dev -> Test -> Staging -> Prod with approval gates
- [ ] Environment-specific settings documented (API endpoints, email routing, credentials)
- [ ] Configuration package format defined and versioned
- [ ] Deployment pipeline tested: export from source, import to target, post-deployment verification
- [ ] Rollback procedure documented and tested for each deployment step
- [ ] Cutover runbook created with task ID, owner, duration, dependencies, verification, and rollback
- [ ] Critical path identified; cutover window sized to accommodate critical path + buffer
- [ ] Point-of-no-return defined and communicated to the team
- [ ] Cutover rehearsal completed at least twice in staging
- [ ] Rehearsal durations fit within the cutover window
- [ ] Rollback procedure validated during at least one rehearsal
- [ ] Go/no-go criteria defined and agreed with all workstream leads
- [ ] Go/no-go meeting scheduled 24-48 hours before cutover
- [ ] Communication plan created with notification matrix (audience, channel, timing)
- [ ] Feature flags configured for progressive rollout (if applicable)
- [ ] Hypercare team staffed with coverage across all time zones and workstreams
- [ ] Escalation path defined: Level 1 -> Level 2 -> Level 3
- [ ] Hypercare daily triage cadence established
- [ ] Post-hypercare handover to operations planned with documentation and open issues
- [ ] Database migration strategy defined (additive-only, expand-and-contract, or shadow table)
- [ ] All schema migrations verified as backward-compatible with the current application version
- [ ] Zero-downtime DDL operations benchmarked on production-equivalent data volumes
- [ ] Data backfill approach selected (batch, lazy, or dual-read) with monitoring plan
- [ ] Migration ordering enforced with sequential numbering and dependency validation
- [ ] Rollback triggers defined with specific, measurable conditions per category
- [ ] Time-boxed rollback decision windows established (T+30min, T+2hr, point-of-no-return)
- [ ] Partial rollback options identified (module-level, feature flag, data-only)
- [ ] Infrastructure pre-scaled to 2x expected peak capacity for go-live day
- [ ] Auto-scaling triggers set aggressively for go-live (50% CPU, 2x scale-out)
- [ ] CDN caches warmed before go-live
- [ ] Database connection pool sized for peak concurrent users with pooling middleware
- [ ] Configuration drift detection automated (nightly snapshots, diff alerting)
- [ ] Environment parity score tracked between staging and production (target > 99%)
- [ ] Post-cutover performance baselines captured (p50/p90/p95/p99 response times)
- [ ] Query plan regression detection configured for top 50 queries
- [ ] Real-time performance monitoring dashboard deployed for war room
- [ ] Degradation alerts configured (response time, error rate, resource utilization)
- [ ] War room staffed with all required roles for full cutover duration
- [ ] Shift rotation plan created for cutovers exceeding 12 hours
- [ ] RACI matrix published for every cutover task
- [ ] Escalation paths documented with direct contact information at every level

## ERP•AI & Proto

**ERP•AI**: Environment manager handles config promotion across dev/staging/production with drift detection and parity scoring. Feature flags enable gradual rollout, and the deployment pipeline enforces test gates and approval checkpoints.

**Proto**: Executes cutover runbooks as structured missions, progressing through each task in sequence. Human-approval gates pause the ORAI cycle at go/no-go decision points, resuming only after designated stakeholders confirm readiness.

## Related

- [Testing & Validation](../testing-validation/SKILL.md) -- testing is a prerequisite gate for the go/no-go decision
- [Data Migration](../data-migration/SKILL.md) -- data migration tasks are a major component of the cutover runbook
- [Security & Roles](../security-roles/SKILL.md) -- access provisioning is part of cutover
- [User Onboarding](../user-onboarding/SKILL.md) -- training must be complete before go-live
- [Go-Live Checklist](../../../../templates/03-org-1k-plus/go-live-checklist/SKILL.md) -- template for the go/no-go criteria checklist
- [Migration Runbook](../../../../templates/03-org-1k-plus/migration-runbook/SKILL.md) -- template for the data migration portion of the cutover
- [Solution Architect](../../role-overviews/solution-architect.md) -- the role that owns environment strategy and deployment architecture
