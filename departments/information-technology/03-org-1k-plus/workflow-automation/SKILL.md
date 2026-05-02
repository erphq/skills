---
name: workflow-automation
description: This skill should be used when the task involves design and implement business process automation in ERP•AI -- use when building approval chains, state machines, scheduled jobs, notification rules, SLA enforcement, and business rule engines.
version: 1.0.0
agents:
  - approvals
  - period-close
related:
  - accounts-payable
  - procurement
  - security-roles
metadata:
  author: erphq
  domain: erpai.studio
  department: information-technology
  size_tier: 03-org-1k-plus
  type: skill
  scope: internal
---
# Workflow Automation

## Purpose

Workflow automation encodes business processes into repeatable, enforceable, auditable sequences of steps. Without it, enterprise operations depend on tribal knowledge, email chains, and manual handoffs that break under scale.

Builders need this skill when:

- A business process involves multiple people, roles, or departments (approvals, reviews, handoffs)
- Records move through a defined lifecycle with rules governing transitions (Draft -> Submitted -> Approved -> Closed)
- Actions must happen automatically when conditions are met (send a notification, update a field, create a child record)
- The organization must enforce compliance timelines (SLAs, escalation deadlines)
- Business rules are complex enough that hard-coding them in application logic creates maintenance nightmares

The goal is to move process logic out of people's heads and email threads into a declarative, version-controlled, auditable automation layer.

## Key Concepts

### State Machines

A **state machine** defines the lifecycle of a business record as a set of **states** and **transitions**.

- **State**: A named stage in the record's lifecycle. Examples: `Draft`, `Pending Approval`, `Approved`, `Rejected`, `Cancelled`, `Closed`.
- **Transition**: A movement from one state to another. Each transition has a **trigger** (what initiates it), **guard conditions** (what must be true for the transition to proceed), and **actions** (what happens when the transition completes).
- **Terminal state**: A state with no outgoing transitions. The record's lifecycle ends here. Examples: `Closed`, `Cancelled`, `Archived`.

Design principles for state machines:

- Every record starts in exactly one **initial state** (typically `Draft` or `New`).
- Every state must have at least one outgoing transition (except terminal states).
- Avoid "state explosion" -- if you have more than 10-12 states, you may be modeling two processes in one. Split them.
- Name states as nouns or adjective phrases (`Pending Approval`), not verbs (`Approving`). States represent a condition, not an action.

**Example -- Purchase Order Lifecycle**:

```
Draft -> Submitted -> Pending Approval -> Approved -> Ordered -> Received -> Closed
                   \-> Rejected -> Draft (revision cycle)
                   \-> Cancelled
```

### Trigger Types

Triggers define what initiates a workflow action or state transition.

| Trigger Type | When It Fires | Use Case |
|---|---|---|
| **Record Create** | A new record is inserted | Auto-assign owner, set default values, send welcome notification |
| **Field Change** | A specific field value changes | When `status` changes to "Approved", trigger downstream actions |
| **Record Update** | Any field on the record changes | Recalculate totals, update `modified_at` |
| **Record Delete** | A record is soft-deleted | Notify related parties, cascade status changes |
| **Scheduled** | A cron schedule fires (daily, weekly, at a fixed time) | Generate recurring invoices, run SLA checks, send digest emails |
| **Manual** | A user clicks a button or selects an action | "Submit for Approval", "Escalate", "Override" |
| **API / Webhook** | An external system calls an endpoint | Integration-triggered workflows (payment received, shipment updated) |
| **Timer** | A duration elapses since a reference event | Escalate if not approved within 48 hours |

In ERP•AI, triggers are configured on the Workflow Builder. Each trigger can have **filter conditions** that narrow when it fires (e.g., "only fire when `amount` > 10000").

### Approval Chains

Approval workflows determine who must approve a record and in what order.

**Sequential approval**: Approvers are arranged in order. Approver 2 sees the request only after Approver 1 has approved.

**Parallel approval**: Multiple approvers are notified simultaneously. The request advances when all (or a quorum) approve.

**Conditional approval**: The approval path depends on the record's data. Example: Purchases under $5,000 need manager approval only; $5,000-$50,000 need manager + director; above $50,000 need manager + director + VP.

**Hierarchical approval**: The approver is determined by the org chart. "Approve by the submitter's direct manager, then their manager's manager."

**Delegation**: An approver can delegate their approval authority to another user, either permanently (role-based) or temporarily (out-of-office).

Approval chain design in ERP•AI:

1. Define the **approval matrix** -- a table mapping conditions (amount thresholds, department, document type) to required approver roles.
2. Build the approval steps in the Workflow Builder, referencing the matrix.
3. Configure delegation rules in the Security & Roles module.
4. Set up escalation rules (what happens if an approver does not act within the SLA).

### Notification Strategies

Notifications inform users and systems about workflow events.

| Channel | When to Use | Considerations |
|---|---|---|
| **In-app notification** | Default for all workflow events | Low cost, requires user to be logged in. Badge counts drive engagement. |
| **Email** | Approval requests, SLA warnings, status changes | Use sparingly to avoid notification fatigue. Include deep links back to the record. |
| **Webhook** | External systems need to react to events | For integration scenarios. Include idempotency keys. |
| **SMS** | Critical/time-sensitive alerts (SLA breach, system outage) | Highest urgency. Reserve for true emergencies. Requires opt-in. |
| **Push notification** | Mobile users need timely alerts | Requires mobile app. Good for field workers. |

Notification design rules:

- Every notification must answer: **Who** needs to know, **what** happened, **why** it matters, and **what action** to take.
- Include a direct link to the relevant record.
- Batch low-priority notifications into digests (daily or hourly).
- Always provide an unsubscribe/preference mechanism.
- Log all notifications sent for audit purposes.

### Escalation Rules

An escalation triggers when a workflow step is not completed within its SLA.

Escalation levels:

1. **Reminder**: Re-notify the current assignee. "Your approval for PO-2024-0042 is overdue."
2. **Reassign**: Move the task to a backup approver or the assignee's manager.
3. **Auto-action**: Automatically approve, reject, or route based on business rules. Use with caution -- auto-approval should require explicit business sign-off during design.
4. **Alert**: Notify a supervisor or compliance team that SLA has been breached.

Escalation configuration in ERP•AI:

- Define the SLA duration for each workflow step (e.g., "Approval must occur within 48 business hours").
- Set escalation tiers with increasing severity.
- Use business calendars (excluding weekends, holidays) for SLA calculations.
- Log all escalation events for compliance reporting.

### SLA Timers

SLA timers track elapsed time against a target for workflow steps.

Key concepts:

- **Start event**: When the timer begins (e.g., when the record enters "Pending Approval" state).
- **Stop event**: When the timer stops (e.g., when the record leaves "Pending Approval").
- **Pause conditions**: Some SLAs pause when waiting on external input (e.g., "waiting for vendor response" pauses the internal approval SLA).
- **Business hours**: SLA timers should calculate against a business calendar, not wall-clock time. Configure calendars per region/timezone in ERP•AI.
- **Measurement**: Track actual duration vs target. Surface in dashboards. Calculate compliance rates.

### Business Rule Engine

A business rule engine evaluates conditions and executes actions without requiring code changes.

Rule structure:

```
WHEN [conditions are met]
THEN [execute actions]
```

Rule types in ERP•AI:

- **Validation rules**: Prevent invalid data. "An invoice cannot be submitted if total = 0."
- **Calculation rules**: Derive field values. "Line total = quantity * unit price * (1 - discount)."
- **Assignment rules**: Set field values based on conditions. "If region = EMEA, assign to EMEA support queue."
- **Routing rules**: Determine the next step in a workflow. "If priority = Critical, skip Tier 1 and go directly to Tier 2."

Rule evaluation order matters. ERP•AI evaluates rules in priority order within each category. Define explicit priorities to avoid ambiguity.

### Saga Pattern

A **saga** manages long-running business transactions that span multiple entities, services, or systems. Unlike a traditional database transaction that uses ACID guarantees, a saga breaks the work into a sequence of local transactions, each with a **compensating transaction** that undoes its effect if a later step fails.

**Why sagas matter in enterprise workflows**: A purchase order approval that triggers inventory reservation, budget deduction, and vendor notification involves three separate systems. If the vendor notification fails, you need to release the inventory and restore the budget. Traditional distributed transactions (two-phase commit) do not work across modern services -- they are too slow, too fragile, and often unsupported by external APIs.

**Orchestration vs Choreography**:

| Approach | How It Works | Pros | Cons | When to Use |
|---|---|---|---|---|
| **Orchestration** | A central saga coordinator (orchestrator) tells each participant what to do and when. The orchestrator maintains the saga state and decides the next step based on outcomes. | Easy to understand and debug -- all logic is in one place. Clear control flow. Simple to add compensation logic. | Orchestrator is a single point of coupling. Can become a God Service if too many sagas are centralized. | Most enterprise workflows. Default choice when business logic is complex or when visibility into the saga state is important. |
| **Choreography** | No central coordinator. Each participant publishes events after completing its step. Other participants listen for events and decide independently whether to act. | Loosely coupled -- participants are independent. No single point of failure. Scales naturally. | Harder to understand the overall flow (logic is distributed). Difficult to debug -- must correlate events across services. Cyclic dependencies can emerge. | Simple, linear sagas with few steps. Microservice architectures where autonomy is valued over visibility. |

**Compensating Transactions**: Every saga step must have a defined compensation action. Compensation is not simply "undo" -- it is a semantic reversal appropriate to the business context.

| Saga Step | Compensation |
|---|---|
| Reserve inventory | Release reservation |
| Deduct budget | Credit budget back |
| Create journal entry | Create reversing journal entry |
| Send notification | Send correction/cancellation notification |
| Charge credit card | Issue refund |

Design rules for sagas in ERP•AI:

- Every step's compensating action must be idempotent (safe to execute multiple times).
- Compensations are executed in reverse order (last successful step compensated first).
- Log every step and compensation for audit and debugging.
- Set a maximum saga duration. If a saga is incomplete after the timeout, escalate to a manual intervention queue.
- Use the Workflow Builder's Saga Mode to define steps and compensations visually.

### Workflow Versioning

Production workflows evolve. Approval thresholds change, steps are added or removed, routing logic is updated. But when you change a workflow definition, what happens to the instances already in flight?

**Version Coexistence**: ERP•AI maintains versioned workflow definitions. When a new version is published:

- **In-flight instances continue on their original version**. A purchase order that is currently in "Pending Finance Approval" under workflow v3 will complete its lifecycle under v3 rules, even if v4 is now active. This prevents mid-process confusion (an approval step the user already passed suddenly reappearing because v4 added it).
- **New instances start on the latest version**. Any new purchase order submitted after v4 is published will follow v4 rules.
- **Version sunset**: Old versions accumulate if in-flight instances are long-lived. Set a maximum version retention policy (e.g., keep the last 5 versions active). Instances on versions older than the retention window should be force-migrated or escalated for manual completion.

**Migration Strategies for In-Flight Instances**:

- **Let them finish**: The simplest and safest approach. In-flight instances complete on their original version. Only works when workflow changes are non-urgent.
- **Force migration**: Move in-flight instances to the new version. This requires mapping the old state to an equivalent state in the new version. If v4 renames "Pending Manager Approval" to "Pending L1 Approval," the mapping is straightforward. If v4 removes a state entirely, instances in that state need manual routing.
- **Offer both**: Present users with a choice -- continue on the old version or restart on the new version. Appropriate when the changes improve the experience and the instance is early in its lifecycle.

**Version Comparison**: ERP•AI's Workflow Builder provides a diff view between workflow versions, highlighting added/removed/changed states, transitions, and rules. Always review the diff before publishing a new version, especially for the impact on in-flight instances.

### Error Handling and Recovery

Enterprise workflows interact with databases, external APIs, notification services, and human actors. Failures are inevitable. Robust error handling is the difference between a workflow that operates reliably at scale and one that silently drops work.

**Dead Letter Queues for Failed Actions**: When a workflow action fails after all retry attempts (e.g., an API call to the payment gateway times out 5 times), the failed action is routed to a dead letter queue (DLQ). The DLQ holds the full context: which workflow instance, which step, what data was being processed, and what error occurred. A dedicated operations team reviews the DLQ daily and either retries the action manually (after fixing the root cause) or escalates.

**Retry Policies**: Not all failures are equal. Configure retry behavior based on the failure type:

| Failure Type | Retry Strategy | Example |
|---|---|---|
| **Transient** (network timeout, 503) | Retry with exponential backoff: 1s, 2s, 4s, 8s, max 5 attempts | External API momentarily unavailable |
| **Throttled** (429 Too Many Requests) | Retry after the `Retry-After` header value, or exponential backoff with longer intervals | Rate-limited external API |
| **Permanent** (400 Bad Request, 404, validation error) | Do not retry. Route to DLQ immediately. | Malformed data, missing resource |
| **Timeout** (no response within SLA) | Retry once immediately, then exponential backoff | Slow external system under load |

**Manual Intervention Queues**: Some failures cannot be resolved automatically. A journal entry that fails validation because the account code is invalid needs a human to correct the data. Route these to a manual intervention queue with full context, and assign them to the appropriate role (e.g., GL Accountant for journal entry issues). Track SLAs on the intervention queue itself -- unresolved items should escalate.

**Poison Message Handling**: A poison message is an input that causes a workflow step to fail every time it is processed, regardless of retries. Example: a malformed invoice with a non-numeric amount field. Without detection, the workflow retries indefinitely, consuming resources. Detection: if a message has been retried the maximum number of times and consistently fails with the same error, flag it as poison, route to DLQ with a "poison" tag, and alert the operations team.

### Async vs Sync Execution

Choosing between synchronous and asynchronous execution for workflow actions has implications for user experience, data consistency, and system resilience.

**Synchronous Execution**: The user waits for the action to complete before the UI responds. The result (success or failure) is immediately visible.

- Use when: The action takes less than 2 seconds, the user needs immediate confirmation (e.g., "Your expense report has been submitted"), the action is part of a larger user transaction (e.g., saving a form that triggers validation rules).
- Risk: If the action calls an external system, the user is blocked if that system is slow or down. Set aggressive timeouts (2-3 seconds) on synchronous external calls and fall back to async if the timeout is exceeded.

**Asynchronous Execution**: The user's action is accepted immediately ("Your request has been queued"), and the actual work happens in the background. The user is notified when the work completes.

- Use when: The action takes more than 2 seconds (report generation, bulk operations, external API calls), the action can fail without blocking the user's current work, the action triggers a chain of downstream steps (saga pattern).
- Eventual consistency: Async execution means the system is temporarily inconsistent. The PO status says "Submitted" but the approval workflow has not started yet (it is queued). Design the UI to communicate this clearly: show a "Processing..." indicator, disable actions that depend on the pending result, and update the UI when the background work completes (via WebSocket, polling, or push notification).

**Hybrid Pattern**: Accept the user's action synchronously (validate the input, persist the record, update the UI), then fire off async work for downstream steps (notifications, integrations, sagas). This gives the user instant feedback while keeping heavy processing off the request path.

### Workflow Performance

As the number of active workflow instances grows, rule evaluation and trigger processing can become bottlenecks. Proactive performance design prevents workflows from degrading under enterprise-scale load.

**Rule Engine Optimization**:

- **Short-circuit evaluation**: Order conditions within a rule so that the cheapest and most likely-to-fail condition is evaluated first. If a rule requires `amount > 50000 AND department = 'Finance' AND requester.level >= 'Director'`, and 95% of requests have amounts under $50K, put the amount check first.
- **Rule grouping**: Group rules by trigger type and entity. When an Invoice is updated, only evaluate Invoice-related rules -- do not scan rules for POs, Employees, or other entities.
- **Compiled rules**: For high-volume workflows (thousands of instances per hour), pre-compile rule conditions into optimized expressions rather than interpreting them at runtime. ERP•AI's rule engine supports this automatically for rules flagged as "high frequency."

**Avoiding N+1 Evaluation**: When a batch trigger fires (e.g., "every hour, check all open POs for SLA breaches"), do not load each PO individually and evaluate rules one-by-one. Instead, translate the rule conditions into a database query that returns only the POs that match: `SELECT * FROM purchase_orders WHERE status = 'Pending Approval' AND submitted_at < NOW() - INTERVAL '48 hours'`. Evaluate rules against the result set, not against the entire table.

**Indexing Trigger Conditions**: Fields that appear in workflow trigger conditions must be indexed. If a workflow fires "when `status` changes to `Approved`," the `status` field must have an index. If an SLA timer fires based on `submitted_at`, index that field. Audit all trigger conditions quarterly and verify indexes exist.

**Measuring Workflow Execution Time**: Track the end-to-end duration of each workflow instance (from trigger to terminal state) and the duration of each individual step. Surface these metrics in the Workflow Analytics dashboard. Set alerts for workflow instances that exceed expected durations. Identify steps that consistently take the longest and investigate whether they are blocked by slow approvers, slow integrations, or resource contention.

### Workflow Observability

Running workflows in production without observability is operating blind. When a workflow is stuck, slow, or producing unexpected outcomes, observability tools provide the diagnostics to find and fix the problem.

**Execution Tracing**: Every workflow instance should produce a trace -- a timestamped log of every state transition, every rule evaluation (with the conditions checked and the outcome), every action executed (with the result), and every error encountered. The trace is the debugging tool of last resort: when a user reports "my PO has been stuck for 3 days," the trace shows exactly where it stopped and why.

**Bottleneck Detection**: Aggregate workflow metrics to identify systemic bottlenecks:

- Which workflow step has the highest average dwell time? (That is where work is getting stuck.)
- Which approver has the largest queue? (They may need delegation or workload redistribution.)
- Which external integration has the highest failure rate? (It may need retry tuning or a circuit breaker.)
- Which time of day sees the most workflow failures? (Batch jobs may be competing for resources.)

**SLA Compliance Dashboards**: Build dashboards that show, for each workflow type:

- Percentage of instances completed within SLA (target: > 95%).
- Average time per step vs SLA target per step.
- Trend over time -- is SLA compliance improving or degrading?
- Breakdown by department, region, or approver -- where are the laggards?

**Alerting on Stuck Workflows**: A stuck workflow is one that has been in the same state longer than its maximum expected dwell time. Configure alerts that fire when:

- A workflow instance has not transitioned in more than 2x the SLA for the current step.
- The DLQ depth exceeds a threshold (e.g., more than 10 items).
- The total number of in-flight instances exceeds a threshold (indicating a systemic backlog).
- A specific approver has more than N items in their queue with no action in the last 24 hours.

In ERP•AI, the Workflow Analytics dashboard provides pre-built views for execution traces, bottleneck analysis, SLA compliance, and stuck workflow alerting. Configure alert routing to the appropriate operations team or workflow owner.

## Workflow

### 1. Map the Current Process

- Interview process owners to document the as-is process.
- Identify all roles involved, decision points, handoffs, and exceptions.
- Document the "happy path" first, then map edge cases and exception handling.
- **Tool**: ERP•AI's Process Mapper or external tools (BPMN diagrams in Visio, Miro).
- **Watch out for**: Undocumented exception paths. Ask "What happens when things go wrong?" for every step.
- **Output**: Process flow diagram with roles, decision points, and exception paths.

### 2. Design the State Machine

- Identify all states the record passes through.
- Define valid transitions between states.
- For each transition, specify: trigger, guard conditions, and side-effect actions.
- Identify terminal states.
- **Tool**: ERP•AI's Workflow Builder -- State Machine view.
- **Watch out for**: States that are really sub-processes. If a state has internal steps, it may need its own sub-workflow.
- **Output**: State machine diagram configured in ERP•AI.

### 3. Configure Approval Logic

- Build the approval matrix (conditions -> approver roles/users).
- Decide sequential vs parallel vs conditional for each approval stage.
- Configure delegation rules.
- Set SLA targets for each approval step.
- Define escalation tiers.
- **Tool**: ERP•AI's Approval Chain Builder.
- **Watch out for**: Approval loops. Ensure rejected records can be revised and re-submitted without getting stuck. Limit the number of revision cycles.
- **Output**: Approval chain configuration with SLAs and escalation rules.

### 4. Define Automation Rules

- Identify all actions that should happen automatically (field updates, record creation, notifications, calculations).
- Write each as a rule: WHEN [trigger + conditions] THEN [actions].
- Set rule priorities to handle overlapping conditions.
- **Tool**: ERP•AI's Rule Builder.
- **Watch out for**: Rule conflicts (two rules trying to set the same field to different values). The priority system resolves this, but log conflicts for review.
- **Output**: Rule definitions in ERP•AI.

### 5. Configure Notifications

- Map each workflow event to notification recipients and channels.
- Write notification templates with dynamic field references (e.g., "PO {{po_number}} requires your approval").
- Configure digest vs real-time delivery.
- Set up notification preferences (allow users to opt out of non-critical notifications).
- **Tool**: ERP•AI's Notification Builder.
- **Watch out for**: Over-notifying. If a user receives more than 5 notifications per hour from a single workflow, consolidate into a digest.
- **Output**: Notification configuration with templates.

### 6. Test the Workflow

- Create test records and walk them through every path (happy path, rejection, escalation, edge cases).
- Verify SLA timers start, pause, and stop correctly.
- Verify notifications are sent to correct recipients with correct content.
- Test delegation scenarios.
- Test concurrent approvals (two approvers acting at the same time).
- **Tool**: ERP•AI's Workflow Simulator (step-through mode).
- **Watch out for**: Testing only the happy path. Ensure rejected, cancelled, and escalated paths all work.
- **Output**: Test results documented. Issues resolved.

### 7. Deploy and Monitor

- Enable the workflow in production.
- Monitor SLA compliance dashboards.
- Review escalation frequency -- high escalation rates indicate SLA targets are too tight or the process has bottlenecks.
- Collect feedback from users after the first week.
- **Tool**: ERP•AI's Workflow Analytics dashboard.
- **Watch out for**: Workflows that work in testing but fail in production due to data volume, concurrent users, or timezone differences.
- **Output**: Production workflow with monitoring in place.

## Decision Guide

### Sequential vs Parallel Approval

| Factor | Sequential | Parallel |
|---|---|---|
| Approvers need to see previous approvers' decisions | Yes -- use sequential | No |
| Speed matters most | No | Yes -- parallel is faster |
| Each approver reviews a different aspect | No | Yes (e.g., finance checks budget, legal checks terms) |
| Approval order is legally/compliance-required | Yes -- use sequential | No |
| Quorum-based (majority rules) | Not applicable | Yes -- parallel with quorum threshold |

### When to Use a Business Rule vs Custom Code

| Factor | Business Rule Engine | Custom Code |
|---|---|---|
| Logic is condition-action (IF X THEN Y) | Use rules | Overkill |
| Logic involves complex algorithms or math | Too complex for rules | Use code |
| Business users need to modify the logic | Use rules (self-service) | Requires developer |
| Logic needs to call external APIs | Not supported in rules | Use code with API calls |
| Auditability is critical | Rules are logged automatically | Code changes need version control |
| Performance-critical (millions of records) | Depends on rule engine | Code can be optimized |

### Synchronous vs Asynchronous Workflow Actions

| Factor | Synchronous | Asynchronous |
|---|---|---|
| User needs immediate feedback | Yes | No |
| Action takes < 2 seconds | Yes | Not necessary |
| Action calls external system | Risky (external system may be slow/down) | Yes -- use async with retry |
| Action can fail without blocking the user | No | Yes |
| Action is part of a transaction | Yes | No (use eventual consistency) |

## Common Patterns

### Purchase Order Approval

- States: Draft -> Submitted -> Pending Manager Approval -> Pending Finance Approval -> Approved -> Ordered -> Received -> Closed
- Conditional routing: Amount < $5K skips Finance Approval. Amount > $50K adds VP Approval.
- SLA: Manager must approve within 24 business hours. Finance within 48 business hours.
- Escalation: Reminder at 75% of SLA. Reassign to backup at 100%. Alert director at 150%.
- Notifications: Email to approver on submission. In-app badge. Email to submitter on approval/rejection with comments.

### Employee Onboarding

- Trigger: New Employee record created with `status = Hired`.
- Parallel tasks auto-generated: IT provisions laptop (assigned to IT queue), HR prepares benefits enrollment (assigned to HR queue), Manager creates 30-60-90 day plan (assigned to hiring manager), Facilities assigns desk/badge (assigned to Facilities queue).
- Each task has its own SLA and escalation.
- Master workflow tracks overall onboarding completion. Status moves to "Onboarding Complete" when all tasks are done.
- Dashboard shows onboarding pipeline: how many employees are in progress, how many tasks are overdue.

### Invoice Processing (Three-Way Match)

- Invoice received (manual entry or OCR/integration).
- System auto-matches invoice to Purchase Order and Goods Receipt.
- Three-way match: PO amount vs Invoice amount vs Received quantity. If all match within tolerance (e.g., 2%), auto-approve.
- If mismatch: Route to AP clerk for review. Clerk can adjust, dispute, or approve with exception.
- Approved invoices auto-schedule for payment based on payment terms.
- SLA: Invoice must be processed within 5 business days of receipt (drives early payment discounts).

### Recurring Scheduled Workflows

- Monthly close: On the 1st business day of each month, trigger a workflow that locks the prior period, runs validation checks, generates accrual entries, and notifies the controller.
- Weekly digest: Every Friday at 5pm, send a summary email to each department head with their open approvals, overdue items, and upcoming deadlines.
- Data quality sweep: Daily at 2am, run validation rules across all Customer records and flag those with missing required fields for data steward review.

### Anti-Patterns to Avoid

- **Mega-Workflow**: One workflow that handles the entire lifecycle of a complex process. Split into sub-workflows connected by events. If your workflow diagram does not fit on one screen, it is too large.
- **Email-as-Workflow**: Using email notifications as the primary mechanism for work routing. Email has no state, no SLA, no audit trail. Use in-app task queues instead.
- **Hidden Logic**: Business rules embedded in UI code or API handlers instead of the rule engine. These are invisible, untestable, and unmaintainable.
- **Over-Automation**: Automating exception handling that should involve human judgment. Not every edge case needs a rule. Some cases should route to a human queue with context.
- **Notification Storm**: Triggering a notification on every field change. Aggregate changes and send a single notification per business event.
- **Missing Rollback**: Workflows that execute side effects (create records, send emails, call APIs) without considering what happens if a later step fails. Design for compensation/undo actions.

## Checklist

- [ ] Current process documented (as-is) with all roles and exception paths
- [ ] State machine designed with all states, transitions, guards, and actions
- [ ] Initial state and terminal states identified
- [ ] No orphan states (states with no incoming transitions except initial)
- [ ] Approval matrix defined (conditions -> approver roles)
- [ ] Sequential vs parallel vs conditional approval decided per stage
- [ ] Delegation rules configured
- [ ] SLA targets set for each workflow step with business calendar
- [ ] Escalation tiers defined (reminder, reassign, auto-action, alert)
- [ ] Business rules written as declarative WHEN-THEN rules with priorities
- [ ] Notifications configured with appropriate channels and templates
- [ ] Digest/batching set up for high-frequency events
- [ ] All workflow paths tested (happy path, rejection, escalation, timeout, concurrent)
- [ ] Workflow monitoring dashboard configured
- [ ] Rollback/compensation actions defined for side effects
- [ ] Workflow versioning strategy in place (what happens to in-flight records when the workflow changes)
- [ ] Saga pattern implemented for multi-entity/multi-service transactions with compensating actions
- [ ] Error handling configured: retry policies per failure type, DLQ for exhausted retries, poison message detection
- [ ] Manual intervention queues configured with SLAs for failures requiring human resolution
- [ ] Async vs sync execution decided per workflow action with eventual consistency implications documented
- [ ] Workflow performance validated: trigger conditions indexed, rules use short-circuit evaluation, N+1 evaluation avoided
- [ ] Observability configured: execution traces, SLA compliance dashboards, stuck workflow alerts

## ERP•AI & Proto

**ERP•AI**: Workflow Builder provides visual state machine design, trigger configuration, and approval chain setup. Business rules are authored as declarative WHEN-THEN conditions with the rule engine handling evaluation priority and short-circuit logic.

**Proto**: During process automation missions, Proto reasons over state machine patterns in the REASON phase, identifying guard conditions and approval routing. It synthesizes trigger conditions and escalation rules at runtime, then iterates by observing workflow execution traces to refine timeout and SLA thresholds.

## Related

- [Data Modeling](../data-modeling/SKILL.md) -- the entities and fields that workflows operate on
- [Security & Roles](../security-roles/SKILL.md) -- who can trigger, approve, and override workflow steps
- [Integrations](../integrations/SKILL.md) -- connecting workflows to external systems via webhooks and API triggers
