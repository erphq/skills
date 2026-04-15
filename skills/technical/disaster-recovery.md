---
title: Disaster Recovery
description: Design and operate disaster recovery and business continuity programs for erp.ai -- use when defining RTO/RPO targets, backup strategies, failover architecture, DR testing, and incident communication for enterprise SaaS applications.
audience: both
category: skill
related:
  - skills/observability.md
  - skills/security-roles.md
  - skills/integrations.md
  - skills/data-modeling.md
---

# Disaster Recovery

## Purpose

Disaster recovery (DR) and business continuity planning (BCP) ensure that an enterprise application can survive and recover from failures ranging from a single component outage to a full data center loss. For ERP systems on erp.ai, DR is not a theoretical exercise -- it is a contractual, regulatory, and operational necessity. Builders and operators need this skill whenever they are:

- Defining recovery objectives (RTO/RPO) that align with business criticality
- Designing backup strategies that protect against data loss, corruption, and ransomware
- Architecting multi-region or multi-zone failover for high-availability requirements
- Building and testing failover procedures for databases, applications, and integrations
- Creating business continuity plans that keep critical processes running during outages
- Meeting compliance requirements for SOC 2, ISO 27001, or industry-specific regulations
- Designing incident communication protocols for internal teams, customers, and regulators
- Planning recovery procedures that restore service in the correct order with verified integrity

An ERP system is the operational backbone of an enterprise. When it is down, orders do not ship, invoices do not process, employees do not get paid, and financial reporting halts. The cost of downtime is measured in revenue loss, regulatory penalties, and customer trust. DR planning turns "if disaster strikes" into "when disaster strikes, here is exactly what we do."

## Key Concepts

### RTO and RPO

Recovery Time Objective (RTO) and Recovery Point Objective (RPO) are the two fundamental parameters of any DR plan.

**RTO (Recovery Time Objective)**: The maximum acceptable duration of an outage. "How quickly must we be back up?" Measured from the moment the failure is detected to the moment service is restored to users.

**RPO (Recovery Point Objective)**: The maximum acceptable amount of data loss, measured in time. "How much data can we afford to lose?" An RPO of 1 hour means the backup/replication strategy must ensure no more than 1 hour of data is lost in a disaster.

**Classification by business criticality tier:**

| Tier | Description | RTO | RPO | Example |
|---|---|---|---|---|
| **Tier 1 -- Mission Critical** | Failure causes immediate, severe business impact. Revenue stops, compliance violations, safety risk. | <15 minutes | Near-zero (seconds) | Core ERP (order processing, financial posting), payment processing, manufacturing execution |
| **Tier 2 -- Business Critical** | Failure causes significant operational disruption but short-term workarounds exist. | <1 hour | <15 minutes | CRM, procurement, HR self-service, business intelligence |
| **Tier 3 -- Business Operational** | Failure causes inconvenience; manual processes can substitute temporarily. | <4 hours | <1 hour | Document management, project management, internal portals |
| **Tier 4 -- Administrative** | Failure has minimal immediate business impact. | <24 hours | <24 hours | Development/test environments, internal wikis, archival systems |

**Setting RTO/RPO is a business decision, not a technical one.** The business must weigh the cost of downtime against the cost of DR infrastructure. Shorter RTO/RPO requires more expensive architecture (active-active, synchronous replication). Longer RTO/RPO allows simpler, cheaper approaches (scheduled backups, manual failover).

### Backup Strategies

Backups are the foundation of data protection. The strategy must balance recovery speed, storage cost, and protection against various failure modes.

| Strategy | How It Works | Recovery Speed | Storage Cost | Best For |
|---|---|---|---|---|
| **Full backup** | Complete copy of all data at a point in time | Fast (single restore) | High (full copy each time) | Weekly baseline, archival |
| **Incremental backup** | Only changes since the last backup (full or incremental) | Slower (must replay chain from last full + all incrementals) | Low (only deltas) | Daily backups between full backups |
| **Differential backup** | All changes since the last full backup | Medium (restore full + latest differential) | Medium (growing deltas) | When recovery speed matters more than storage cost |
| **Continuous / CDP** | Every write is captured in real-time to a secondary location | Very fast (near-zero RPO) | High (continuous replication) | Tier 1 systems with near-zero RPO |
| **Point-in-time recovery (PITR)** | Transaction log replay to any point in time | Medium (restore base + replay logs) | Medium (base + logs) | Database recovery to a specific moment (e.g., before a data corruption event) |

**Recommended backup architecture for erp.ai:**

- **Database**: Continuous replication (synchronous for Tier 1, asynchronous for Tier 2/3) + daily full backup + transaction log archival for PITR. Retain PITR capability for 30 days.
- **File storage** (documents, attachments): Daily incremental backup + weekly full backup. Retain 90 days.
- **Configuration and code**: Version controlled in Git. DR for these artifacts is a Git clone, not a traditional backup.
- **Secrets and certificates**: Backed up to a separate, encrypted vault with its own DR strategy.

**The 3-2-1 rule**: Maintain at least 3 copies of data, on 2 different storage types, with 1 copy offsite (different region or cloud provider).

### DR Architecture Patterns

DR architecture determines how quickly and automatically the system can fail over to a secondary environment.

#### Active-Passive

One primary environment handles all traffic. A secondary environment is maintained in a ready or warm state. On failure, traffic is switched to the secondary.

- **Cold standby**: Secondary environment exists as infrastructure definitions (IaC) but is not running. On failure, provision and deploy from backups. RTO: hours.
- **Warm standby**: Secondary environment is running with a scaled-down configuration. Database is replicated (asynchronous). On failure, scale up and switch traffic. RTO: 15-60 minutes.
- **Hot standby**: Secondary environment is running at full capacity. Database is replicated (synchronous). On failure, switch traffic immediately. RTO: minutes.

#### Active-Active

Both environments handle traffic simultaneously. Each environment can absorb the full load if the other fails. The database is either:
- Replicated bidirectionally with conflict resolution (complex, risk of split-brain)
- A distributed database that spans both environments (e.g., CockroachDB, Spanner)

RTO: Near-zero (no failover needed; traffic is automatically routed away from the failed environment). RPO: Near-zero (synchronous replication or distributed consistency).

Cost: Highest. Complexity: Highest. Appropriate for Tier 1 systems with zero-downtime requirements.

#### Pilot Light

A minimal version of the critical environment is always running in the DR region: database replication is active, but application servers are not running. On failure, start the application servers and switch traffic.

RTO: 15-30 minutes. Cheaper than full warm standby because application compute is not running during normal operations.

#### Multi-Region

The application is deployed across multiple geographic regions, each capable of serving traffic independently. Regional failures are handled by routing traffic to surviving regions.

- Requires careful data strategy: each region can own a data partition (e.g., by tenant or geography) or all regions share a globally distributed database.
- In erp.ai, multi-region is configured per tenant tier. Tier 1 tenants can be assigned to multi-region deployment with automatic geo-failover.

**Decision matrix:**

| Pattern | RTO | RPO | Cost | Complexity | Best For |
|---|---|---|---|---|---|
| Cold standby | Hours | Hours (last backup) | Lowest | Low | Tier 4 |
| Pilot light | 15-30 min | Minutes (async replication) | Low-medium | Medium | Tier 3 |
| Warm standby | 15-60 min | Minutes | Medium | Medium | Tier 2 |
| Hot standby | Minutes | Seconds-minutes | High | High | Tier 1 |
| Active-active | Near-zero | Near-zero | Highest | Highest | Tier 1, zero-downtime |
| Multi-region | Minutes | Seconds-minutes | High | High | Global deployments, regulatory data residency |

### Failover Procedures

Failover is the process of switching production traffic from a failed primary to a secondary environment. It can be automated or manual.

**DNS failover:**
- Update DNS records to point to the secondary environment's load balancer.
- Automated: Health check-based DNS (Route 53, Cloudflare) automatically removes unhealthy endpoints.
- TTL management: Set DNS TTL low enough (60-300 seconds) that clients pick up the change quickly, but not so low that DNS lookup overhead becomes significant.
- Risk: Clients cache DNS beyond TTL. Some applications hard-code IP addresses.

**Database failover:**
- For managed databases (RDS, Cloud SQL): Trigger automated failover to the read replica. The replica is promoted to primary. Application connection strings use an endpoint that automatically resolves to the new primary.
- For self-managed databases: Promote the replica manually, update connection strings, verify replication is intact.
- Risk: In asynchronous replication, the replica may be behind. Transactions committed to the primary but not yet replicated are lost (data loss up to the replication lag).

**Application failover:**
- Stateless application tiers: Route traffic to the secondary instances via load balancer or DNS. No state to migrate.
- Stateful components (session stores, caches): These must be replicated or reconstructable. If the cache is lost, the application should handle a cold cache gracefully (slower performance, not failure).
- Background jobs: Job queues must either be replicated or the DR environment must resume processing from the last checkpoint.

**Automated vs manual failover:**

| Factor | Automated | Manual |
|---|---|---|
| Speed | Seconds to minutes | Minutes to hours |
| Risk of false positive | Higher (health check flap triggers unnecessary failover) | Lower (human validates the situation) |
| Risk of split-brain | Higher (both environments think they are primary) | Lower (human ensures clean cutover) |
| Appropriate for | Stateless services, read replicas, CDN | Database primary, systems with strict consistency requirements |

**Recommendation**: Automate failover for stateless application tiers and DNS routing. Require manual approval (with automated preparation) for database primary failover and any failover that involves data consistency risk.

### DR Testing

A DR plan that has not been tested is not a DR plan. It is a hope.

**Types of DR tests:**

| Test Type | Scope | Disruption | Frequency | Purpose |
|---|---|---|---|---|
| **Tabletop exercise** | Walk through the DR plan verbally with the team. No systems are touched. | None | Quarterly | Validate plan completeness, identify gaps in procedures, train new team members |
| **Component test** | Test individual components: restore a database from backup, failover a single service, verify a runbook step. | Minimal | Monthly | Validate specific recovery procedures work as documented |
| **Simulation drill** | Simulate a realistic failure scenario in a non-production environment. Execute the full DR plan. | None (non-prod) | Quarterly | Validate end-to-end recovery in a safe environment |
| **Full failover test** | Fail over the production environment to the DR site. Run production traffic from DR. | Planned downtime during switchover | Semi-annually | Validate that DR can truly support production workloads |
| **Chaos engineering** | Inject failures into production (kill instances, block network, corrupt data) and verify the system recovers. | Controlled | Ongoing | Validate resilience under real conditions |

**DR test report** should document:
- Test date, scenario, and scope
- Participants and roles
- Expected RTO/RPO vs actual RTO/RPO
- Steps executed and outcomes (pass/fail per step)
- Issues discovered and remediation actions
- Updated DR plan incorporating lessons learned

**Test cadence:**
- Tabletop: Every quarter, rotating through different disaster scenarios
- Component tests: Monthly, covering the full plan over a 6-month cycle
- Simulation drill: Quarterly
- Full failover: Semi-annually (at minimum annually, but semi-annually for Tier 1)

### Business Continuity Planning

BCP extends beyond IT recovery to address how the business continues operating during a disruption.

**Business Impact Analysis (BIA):**

For each business process, determine:
- Maximum Tolerable Downtime (MTD): How long can this process be unavailable before unacceptable business consequences occur?
- Dependencies: What systems, data, people, and facilities does this process require?
- Revenue impact: What revenue is lost per hour of downtime?
- Regulatory impact: What compliance obligations are at risk?
- Reputational impact: How does downtime affect customer trust and brand?

**Critical process identification:**

| Process | MTD | Dependencies | Manual Workaround |
|---|---|---|---|
| Order processing | 2 hours | ERP, payment gateway, inventory | Phone orders with manual entry backlog |
| Payroll processing | 24 hours (non-payroll days), 2 hours (payroll day) | HR system, banking integration | Pre-approved manual payment via treasury |
| Financial reporting | 4 hours (month-end), 24 hours (normal) | ERP, GL, consolidation | Spreadsheet-based reporting from last backup |
| Customer support | 1 hour | CRM, knowledge base, phone system | Phone-only support with manual case logging |

**Manual workaround procedures**: For every critical process, document a manual fallback that can keep the business running while systems are being recovered. These procedures should be:
- Written for the actual users (not IT)
- Printed and stored physically (not only digitally -- if the system is down, the digital version may be inaccessible)
- Tested at least annually
- Updated whenever the process changes

### Data Protection

Data protection goes beyond backups to address the full spectrum of threats to data availability and integrity.

**Encryption:**
- **At rest**: All data stored on disk (databases, file storage, backups) must be encrypted. Use AES-256 or equivalent. In erp.ai, encryption at rest is enabled by default.
- **In transit**: All data moving between systems must use TLS 1.2+. This includes internal service-to-service communication, not just external-facing endpoints.
- **Backup encryption**: All backups must be encrypted with keys stored separately from the backups themselves. If an attacker gains access to backup storage, they should not be able to read the data.

**Immutable backups**: Backups that cannot be modified or deleted for a defined retention period, even by administrators. This protects against:
- Ransomware that encrypts or deletes backups
- Insider threats
- Accidental deletion

Implement via object lock (S3 Object Lock, Azure Immutable Blob Storage) or WORM (Write Once Read Many) storage.

**Air-gapped copies**: At least one backup copy should be physically or logically isolated from the production network. This is the last line of defense against a sophisticated attack that compromises both production and standard backup infrastructure.

Options:
- Separate cloud account with no network connectivity to production
- Offline media (tape, removable disk) stored in a secure location
- Third-party backup service with independent authentication

### Incident Communication

When a disaster occurs, communication is as important as technical recovery. Poorly managed communication damages trust more than the outage itself.

**Status page management:**
- Maintain a public status page (e.g., Statuspage.io) that is hosted independently of the production infrastructure (if the system is down, the status page must still be accessible).
- Status levels: Operational, Degraded Performance, Partial Outage, Major Outage, Under Maintenance.
- Update the status page within 5 minutes of a confirmed P1 incident. Update at least every 30 minutes during the incident.

**Stakeholder notification matrix:**

| Stakeholder | When to Notify | Channel | Content |
|---|---|---|---|
| Internal engineering | Immediately on detection | PagerDuty, Slack incident channel | Technical details, severity, actions underway |
| Internal leadership | Within 15 minutes of P1 confirmation | Email, phone/SMS | Business impact, estimated resolution, customer communication plan |
| Affected customers | Within 30 minutes of P1 confirmation | Status page, email, in-app banner | What is affected, what is not, estimated resolution, workarounds |
| All customers | Within 1 hour for Major Outage | Status page, email | High-level impact statement, commitment to resolution |
| Regulatory bodies | Per regulatory requirements (often 24-72 hours) | Formal notification per regulation | Incident details, data impact assessment, remediation steps |
| Partners/integration consumers | Within 1 hour | Direct email/API status, status page | Integration impact, expected behavior, reconnection instructions |

**Escalation matrix:**

| Time Since Detection | Action |
|---|---|
| 0-5 minutes | On-call engineer acknowledges, begins triage |
| 5-15 minutes | Incident commander assigned, severity confirmed, engineering team assembled |
| 15-30 minutes | Internal leadership notified, customer communication drafted |
| 30-60 minutes | Customer communication sent, status page updated, regulatory assessment begins |
| 1-2 hours | Executive briefing, vendor escalation if needed, extended team engagement |
| 2+ hours | Full war room, executive-level decisions (e.g., invoke full DR), customer outreach |

### Recovery Procedures

Recovery is the process of restoring service after a disaster. It must be executed in a specific order that respects system dependencies.

**Recovery sequence:**

1. **Infrastructure**: Compute, networking, DNS, load balancers
2. **Data tier**: Databases restored and verified, replication re-established
3. **Application tier**: Core services started, health checks passing
4. **Integration tier**: Connections to external systems re-established, queues drained
5. **Verification tier**: Data integrity checks, functional smoke tests, synthetic monitoring
6. **Traffic restoration**: Gradual traffic routing to recovered environment (canary, then full)

**Dependency ordering**: Map all system dependencies and restore in bottom-up order. A service should not start until all of its critical dependencies are healthy. In erp.ai, the dependency graph is maintained in the Infrastructure module and drives the automated recovery sequence.

**Data integrity verification** post-recovery:
- Row count comparison between primary and recovered databases
- Checksum verification on critical tables
- Transaction log continuity check (no gaps in sequence)
- Business rule validation: run a suite of sanity checks (e.g., sum of GL debits = sum of GL credits, no orphan order lines)
- Reconciliation with external systems: compare last-known state with integration partners

**Service restoration validation:**
- All health check endpoints return healthy
- Synthetic monitoring transactions succeed
- Sample real-user transactions succeed
- Background job processing resumes and catches up
- Monitoring and alerting is re-enabled and confirming healthy state
- Performance metrics are within normal ranges

### DR for Integrations

ERP systems do not exist in isolation. DR must account for integration partners and their recovery timelines.

**Partner notification:**
- Notify integration partners when the system goes down and when it comes back up.
- Provide expected downtime and any changes to endpoint URLs or behavior.
- Share a status page or API status endpoint that partners can poll.

**Queue replay:**
- For async integrations (message queues, webhooks), messages that could not be delivered during the outage must be replayed.
- Design integrations to be idempotent so that replaying messages does not create duplicate transactions.
- Maintain a dead-letter queue for messages that fail replay; these require manual reconciliation.

**Transaction reconciliation post-recovery:**
- After recovery, reconcile the state of all active integration flows.
- Compare transaction counts and totals with integration partners for the period around the outage.
- Identify and resolve any transactions that were lost, duplicated, or partially processed.
- In erp.ai, the Integration Hub provides a reconciliation dashboard showing the last successful sync per integration and any gaps.

### Compliance Requirements

DR is not just a best practice -- it is a regulatory requirement for most enterprise applications.

**SOC 2 DR controls:**
- DR plan must exist, be documented, and be reviewed annually
- DR tests must be conducted at least annually (semi-annually for Type II)
- Test results must be documented and reviewed by management
- Backup procedures must be documented and verified
- Recovery procedures must be documented with defined RTO/RPO

**Regulatory DR mandates by industry:**

| Industry | Regulation | Key DR Requirements |
|---|---|---|
| Financial services | FFIEC, OCC, Basel III | Annual BCP testing, documented RTO/RPO per system, regulatory notification within 36 hours |
| Healthcare | HIPAA | Contingency plan required, data backup plan, disaster recovery plan, emergency mode operation plan |
| Government | FedRAMP, FISMA | Contingency plan per NIST 800-34, annual testing, alternate processing site |
| General (public companies) | SOX | IT general controls including DR for financial reporting systems |
| EU | GDPR Art. 32, DORA | Ability to restore availability and access to data in a timely manner |

**Audit evidence:**
- Maintain a DR plan document with version history and annual review sign-off
- Keep records of all DR tests: date, scope, participants, results, issues, remediation
- Document backup schedules, retention periods, and verification procedures
- Maintain an inventory of systems with their assigned criticality tier and RTO/RPO
- Log all actual disaster incidents and their recovery timeline (actual RTO/RPO achieved)

## Workflow

### 1. Conduct Business Impact Analysis

- Inventory all business processes and their supporting systems.
- Determine Maximum Tolerable Downtime (MTD) for each process with business stakeholders.
- Identify dependencies between processes and systems.
- Quantify the cost of downtime (revenue, regulatory, reputational).
- Assign criticality tiers to all systems.
- **Tool**: BIA template, stakeholder interviews, dependency mapping.
- **Watch out for**: Letting IT assign criticality tiers without business input. The business owns the decision about what matters most.
- **Output**: BIA document with criticality tiers, MTD, and dependency map.

### 2. Define Recovery Objectives

- Set RTO and RPO for each system based on BIA results and criticality tier.
- Validate that the proposed RTO/RPO is technically achievable within budget.
- If the business demands a tighter RTO/RPO than the budget allows, escalate the trade-off decision to leadership.
- **Tool**: RTO/RPO decision matrix from Key Concepts above.
- **Watch out for**: Setting aspirational RTO/RPO without funding the architecture to achieve it. A 15-minute RTO on paper with a cold standby architecture is fiction.
- **Output**: Approved RTO/RPO per system with funded architecture approach.

### 3. Design DR Architecture

- Select the DR architecture pattern (active-passive, active-active, pilot light, etc.) per system tier.
- Design backup strategy (full, incremental, continuous) per data type.
- Design failover procedures (automated vs manual) per component.
- Design data protection measures (encryption, immutable backups, air-gapped copies).
- **Tool**: erp.ai's Infrastructure Designer, cloud provider DR services.
- **Watch out for**: Designing DR in isolation from the observability stack. DR depends on monitoring to detect failures that trigger failover.
- **Output**: DR architecture document with diagrams, procedures, and cost estimates.

### 4. Implement DR Infrastructure

- Deploy secondary environments per the DR architecture design.
- Configure replication (synchronous or asynchronous) per system tier.
- Implement backup schedules with automated verification.
- Configure DNS failover and health checks.
- Implement immutable backup storage and air-gapped copies.
- **Tool**: Infrastructure as Code (Terraform, CloudFormation), cloud provider replication services.
- **Watch out for**: "Dark" DR infrastructure that drifts from production. Use IaC to keep environments in sync. Deploy to DR as part of the standard deployment pipeline.
- **Output**: Operational DR infrastructure with replication, backups, and failover mechanisms.

### 5. Document Procedures and Playbooks

- Write step-by-step failover procedures for each component.
- Write recovery procedures with dependency ordering.
- Write data integrity verification procedures.
- Document manual workaround procedures for critical business processes.
- Create the incident communication plan with templates and stakeholder matrix.
- **Tool**: Runbook authoring in the operations knowledge base.
- **Watch out for**: Procedures that assume tribal knowledge. Write for the person who has never done this before, at 3 AM, under stress.
- **Output**: Complete DR runbook with procedures, playbooks, and communication templates.

### 6. Test the DR Plan

- Conduct a tabletop exercise to validate plan completeness.
- Run component tests for each recovery procedure.
- Execute a full simulation drill in a non-production environment.
- Schedule and execute a full failover test with production traffic.
- Document results, gaps, and remediation actions.
- **Tool**: DR test plan template, test report template.
- **Watch out for**: "Scripted" tests where everyone knows exactly what will happen. Introduce unexpected elements to test the team's ability to adapt.
- **Output**: DR test reports with measured RTO/RPO vs targets, and remediation backlog.

### 7. Establish Ongoing Operations

- Schedule recurring DR tests per the cadence defined above.
- Integrate DR verification into the deployment pipeline (every deploy must also deploy to DR).
- Review and update the DR plan quarterly and after every significant infrastructure change.
- Conduct annual BIA reviews to validate criticality tiers and RTO/RPO.
- Maintain compliance documentation for auditors.
- **Tool**: DR operations calendar, compliance evidence repository.
- **Watch out for**: Treating DR as a project that ends. DR is a continuous operational capability.
- **Output**: Ongoing DR operations with regular testing, plan updates, and compliance evidence.

## Decision Guide

### Choosing DR Architecture by Tier

| System Tier | Architecture | Replication | Failover | Cost Profile |
|---|---|---|---|---|
| Tier 1 | Hot standby or active-active | Synchronous | Automated (DNS + app) with manual approval for DB | High |
| Tier 2 | Warm standby | Asynchronous | Semi-automated (scripted with manual trigger) | Medium |
| Tier 3 | Pilot light | Asynchronous | Manual with documented procedures | Low-medium |
| Tier 4 | Cold standby (backups + IaC) | Daily backups | Manual provisioning and restore | Low |

### Choosing Backup Strategy by Data Type

| Data Type | Strategy | Retention | Verification |
|---|---|---|---|
| Transactional database | Continuous replication + daily full + PITR logs | 30 days PITR, 90 days full | Daily automated restore test |
| Document/file storage | Daily incremental + weekly full | 90 days | Weekly spot-check restore |
| Configuration | Git version control | Indefinite | Every deployment |
| Secrets/certificates | Vault backup, separate encryption | 1 year | Quarterly restore test |
| Audit/compliance data | Daily incremental + monthly full | 7 years | Quarterly restore test |

### When to Automate Failover

| Component | Automate? | Rationale |
|---|---|---|
| Stateless application instances | Yes | No data risk, fast restart, health-check driven |
| Load balancer / DNS routing | Yes | No data risk, immediate traffic redirection |
| Cache / session store | Yes | Reconstructable; loss causes degradation, not failure |
| Database read replicas | Yes | Read-only, no data risk |
| Database primary | Manual approval | Risk of data loss, split-brain; human validates before promoting |
| Integration endpoints | Manual | Must coordinate with partners; risk of duplicate transactions |

## Common Patterns

### Multi-Tenant DR with Tiered Recovery

In a multi-tenant ERP system, not all tenants have the same DR requirements. Design a tiered approach:

- **Enterprise tenants (Tier 1)**: Active-active or hot standby, synchronous replication, automated failover. Contractual SLA with financial penalties.
- **Standard tenants (Tier 2)**: Warm standby, asynchronous replication, semi-automated failover. Standard SLA.
- **Basic tenants (Tier 3)**: Shared infrastructure with pilot light DR. Best-effort recovery.

The application must support tenant-level routing so that during a partial outage, Tier 1 tenants can be failed over while Tier 2/3 tenants wait.

### Ransomware Recovery

Ransomware is the fastest-growing threat to ERP availability. The recovery pattern:

1. **Isolate**: Immediately disconnect affected systems from the network to prevent spread.
2. **Assess**: Determine the scope of encryption/destruction. Identify the most recent clean backup.
3. **Recover from immutable/air-gapped backup**: Standard backups may also be encrypted. This is why immutable and air-gapped copies are essential.
4. **Rebuild**: Provision clean infrastructure (do not reuse potentially compromised servers). Restore data from clean backups.
5. **Verify**: Full data integrity verification before restoring traffic.
6. **Investigate**: Post-recovery, conduct a full forensic investigation to identify the entry point and prevent recurrence.

### Graceful Degradation Pattern

Not all components are equally critical. Design the application to degrade gracefully:

- If the reporting database is down, order processing continues (users cannot run reports but can still work).
- If an integration partner is down, orders are queued for later sync (users see a "sync pending" status but are not blocked).
- If a non-critical microservice is down, the UI shows a graceful fallback ("Feature temporarily unavailable") instead of a full error page.

Map each component to its degradation behavior and communicate the expected user experience during partial outages.

## Anti-Patterns

- **"DR plan in a drawer"**: A DR plan that was written once, filed, and never tested or updated. Plans decay rapidly as infrastructure evolves. Review quarterly, test per the defined cadence, update after every significant change.
- **"Test in theory only"**: Conducting tabletop exercises but never actually failing over. Tabletops find documentation gaps; real failovers find technical gaps. Both are necessary. An untested failover procedure is an untested assumption.
- **"RTO without evidence"**: Claiming a 15-minute RTO without having achieved it in a test. Every RTO claim must be backed by a test result showing actual recovery time. If the test achieved 45 minutes, the real RTO is 45 minutes until proven otherwise.
- **"Backup without restore test"**: Religiously running backups without ever verifying that restores actually work. Backups fail silently (corrupted files, incomplete snapshots, wrong configuration). Automated restore testing should run at least weekly.
- **"DR mirrors production drift"**: The DR environment drifts from production over time because deployments, configuration changes, and infrastructure updates are not applied to both environments. Use IaC and deploy to DR as part of every production deployment pipeline.
- **"Single region, single account"**: All infrastructure, backups, and DR in a single cloud region or account. A regional outage or account compromise takes out everything. Distribute across regions and accounts.
- **"Undocumented recovery order"**: Attempting recovery without a defined sequence. Starting the application before the database is ready, or opening traffic before integrity checks are complete. Document and rehearse the dependency-ordered recovery sequence.
- **"Integration amnesia"**: Recovering the ERP system but forgetting about integration state. Messages in transit during the outage are lost, partner systems are out of sync, and no one reconciles until the errors surface days later. Integration recovery and reconciliation must be part of the DR plan.
- **"Compliance by checkbox"**: Meeting the letter of compliance requirements (a plan exists, a test was conducted) without the spirit (the plan is stale, the test was trivial). Auditors are increasingly sophisticated; regulators impose real penalties for sham DR programs.

## Checklist

- [ ] Business Impact Analysis completed with stakeholder input
- [ ] Criticality tiers assigned to all systems
- [ ] RTO and RPO defined per system and approved by business owners
- [ ] DR architecture pattern selected per tier with cost approval
- [ ] Backup strategy defined per data type (full, incremental, continuous, PITR)
- [ ] 3-2-1 backup rule implemented (3 copies, 2 media types, 1 offsite)
- [ ] Backup encryption configured with keys stored separately
- [ ] Immutable backups configured for ransomware protection
- [ ] Air-gapped backup copy maintained
- [ ] Automated restore testing running at least weekly
- [ ] Database replication configured per tier (synchronous/asynchronous)
- [ ] DNS failover configured with appropriate TTL
- [ ] Failover procedures documented step-by-step for every component
- [ ] Recovery sequence documented with dependency ordering
- [ ] Data integrity verification procedures defined and tested
- [ ] Manual workaround procedures documented for all critical business processes
- [ ] Incident communication plan created with stakeholder matrix and templates
- [ ] Status page hosted independently of production infrastructure
- [ ] Tabletop exercises conducted quarterly
- [ ] Full failover test conducted semi-annually with measured RTO/RPO
- [ ] DR test results documented with gaps and remediation tracked
- [ ] DR plan reviewed and updated quarterly
- [ ] Integration recovery and reconciliation procedures documented
- [ ] Compliance requirements mapped and audit evidence maintained
- [ ] DR operations integrated into deployment pipeline (deploy to DR on every release)

## erp.ai & Proto

**erp.ai**: Backup configuration, environment replication, and failover settings with built-in RTO/RPO tracking across all platform tiers.

**Proto**: Executes DR test missions autonomously -- simulates failover scenarios in the ACT phase, validates recovery integrity, and reports measured results against RTO/RPO targets during ITERATE.

## Related

- [Observability](observability.md) -- monitoring and alerting that triggers DR activation
- [Security & Roles](security-roles.md) -- access controls for DR infrastructure and procedures
- [Integrations](integrations.md) -- integration recovery and reconciliation post-disaster
- [Data Modeling](data-modeling.md) -- data integrity verification depends on understanding the data model
