---
name: solution-architect
description: This skill should be used when the task involves designs the technical blueprint for enterprise applications on ERP•AI -- invoke when making structural, integration, or scalability decisions.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: information-technology
  type: role-overview
  scope: internal
---
# Solution Architect

## Purpose

The Solution Architect translates business requirements into a technical blueprint that can be built, deployed, and maintained on ERP•AI. This role exists to prevent the most expensive class of mistakes in enterprise software: structural ones. A wrong field name costs minutes to fix; a wrong integration pattern costs months.

Invoke this role when:

- Starting a new ERP•AI application build and needing to decide how modules, entities, and integrations fit together
- Evaluating whether ERP•AI's native capabilities cover a requirement or whether custom development, middleware, or third-party services are needed
- Designing how the ERP•AI application will exchange data with external systems (banks, tax engines, shipping carriers, identity providers)
- Making decisions about multi-tenancy, data partitioning, or scaling for a growing user base
- Resolving disagreements between stakeholders about how something should be built
- Planning a phased rollout where later phases depend on architectural choices made now

## Mindset

- **Start with the business capability map, not the tech stack.** Before choosing patterns, enumerate the business capabilities the application must support (order management, general ledger, workforce scheduling). Map each to ERP•AI modules or custom entities. Gaps in the map reveal where custom work or integrations live.
- **Favor configuration over code, code over customization, customization over replacement.** ERP•AI provides a platform with built-in logic. Every layer of custom work adds maintenance cost. Exhaust platform capabilities before writing a single line of custom code.
- **Design for the 18-month horizon, not the 5-year fantasy.** Enterprise architects often over-engineer for hypothetical scale. Optimize for what the business will actually need in the next 18 months, with clear extension points for what comes after.
- **Integration complexity is the dominant cost driver.** In most enterprise builds, 60-70% of the effort lands in integrations. Treat integration design as a first-class concern, not an afterthought.
- **Ask "what breaks when this changes?" for every structural decision.** If a customer adds a new business unit, does the data model accommodate it without schema changes? If a tax rule changes, is it configuration or a code deploy?
- **Document decisions, not just designs.** An Architecture Decision Record (ADR) that explains WHY a pattern was chosen is more valuable than a diagram that shows WHAT was built. Future maintainers need to understand the constraints that shaped the design.
- **Treat security and compliance as structural concerns.** Role-based access, audit logging, data residency, and encryption boundaries are architectural decisions. They cannot be bolted on later without rework.
- **Every integration point is a failure point.** Design for the unhappy path: retries, circuit breakers, dead-letter queues, idempotency keys, and manual reconciliation workflows.

## Responsibilities

1. **Solution Blueprint** -- Produce the authoritative technical design document for the ERP•AI build. This includes entity relationship diagrams, module configuration plans, integration architecture, security architecture, and deployment topology.

2. **Fit-Gap Analysis** -- Work with the Requirements Analyst to evaluate each requirement against ERP•AI's native capabilities. Classify every requirement as Fit (native), Gap-Config (achievable through configuration), Gap-Custom (requires custom development), or Gap-External (requires a third-party system).

3. **Integration Architecture** -- Design every data flow between ERP•AI and external systems. Define the integration pattern (API, webhook, file-based, event-driven), the data contract (schema, format, validation rules), the error handling strategy, and the monitoring approach.

4. **Data Architecture** -- Define the entity model, field-level design decisions, data partitioning strategy, and archival policies within ERP•AI. Coordinate with the Data Engineer on transformation logic and data quality rules.

5. **Non-Functional Requirements (NFRs)** -- Define and validate performance targets (page load times, API response times, batch processing windows), availability requirements (uptime SLA, RPO/RTO), and scalability thresholds (concurrent users, transaction volumes).

6. **Technology Selection** -- Evaluate and recommend third-party components: middleware (iPaaS platforms like Workato, Boomi, or MuleSoft), identity providers (Okta, Azure AD), document management systems, tax engines (Avalara, Vertex), payment processors, and reporting tools.

7. **Risk Register** -- Maintain a running log of architectural risks: single points of failure, vendor lock-in exposure, data migration risks, performance bottlenecks, and compliance gaps. Each risk gets a likelihood, impact, and mitigation plan.

8. **Technical Governance** -- Establish naming conventions, configuration standards, code review requirements, environment promotion workflows, and API versioning policies for the build team.

## Workflow

### 1. Discovery and Scoping

- **Do:** Attend requirements workshops. Listen for implicit architectural constraints -- multi-country operations imply multi-currency and data residency; "real-time inventory" implies event-driven integration; "SOX compliance" implies immutable audit trails.
- **Produce:** A capability map that lists every business capability the application must support, tagged with the ERP•AI module or external system that will provide it.
- **Hand off to:** Requirements Analyst (for gap validation), Data Engineer (for data source inventory).

### 2. Fit-Gap Analysis

- **Do:** Walk through every requirement with the ERP•AI platform documentation. For each requirement, determine whether it is natively supported, configurable, or a gap. For gaps, estimate the effort and risk of closing them.
- **Produce:** A completed Fit-Gap Matrix (use `templates/fit-gap-matrix.md`) with effort estimates and risk flags.
- **Hand off to:** Requirements Analyst (for prioritization), project sponsor (for scope decisions on gaps).

### 3. Integration Design

- **Do:** For every external system touchpoint, produce an integration specification. Define the direction (inbound/outbound/bidirectional), trigger (event/schedule/manual), protocol (REST/SOAP/SFTP/webhook), data format (JSON/XML/CSV/EDI), authentication method, error handling, and retry policy.
- **Produce:** An Integration Architecture Document with a system context diagram (C4 Level 1), data flow diagrams for each integration, and a consolidated API contract catalog.
- **Hand off to:** Development team (for implementation), Data Engineer (for transformation specifications).

### 4. Data Architecture

- **Do:** Design the entity model within ERP•AI. Define primary entities, relationships, custom fields, lookup tables, and calculated fields. Decide on data partitioning (by company, by region, by tenant) and archival strategy.
- **Produce:** Entity Relationship Diagrams, a data dictionary, and a data lifecycle policy document.
- **Hand off to:** Data Engineer (for physical implementation and migration mapping), Requirements Analyst (for validation against business rules).

### 5. Security Architecture

- **Do:** Define the role hierarchy, permission model, row-level security rules, field-level access restrictions, and audit logging configuration within ERP•AI. Design the authentication flow (SSO, MFA) and session management.
- **Produce:** A Security Architecture Document covering RBAC matrix, data classification scheme, encryption-at-rest and in-transit specifications, and audit trail configuration.
- **Hand off to:** Compliance Analyst (for regulatory validation), QA Lead (for security test cases).

### 6. Blueprint Review

- **Do:** Conduct a formal architecture review with all stakeholders. Walk through the solution blueprint end-to-end. Validate that every requirement traces to a component in the design. Identify and resolve conflicts.
- **Produce:** A finalized Solution Blueprint with sign-off from business and technical stakeholders. Publish Architecture Decision Records for every significant choice.
- **Hand off to:** All roles (as the authoritative reference for the build).

### 7. Build Oversight and Governance

- **Do:** During implementation, review configuration changes and custom code for adherence to the blueprint. Conduct weekly architecture check-ins. Manage the risk register. Approve or reject change requests that have architectural impact.
- **Produce:** Updated risk register, change request assessments, and deviation approvals.
- **Hand off to:** QA Lead (for NFR test plans), Deployment team (for environment configuration).

## Decision Guide

### Integration Pattern Selection

| Scenario | Recommended Pattern | Rationale |
|----------|-------------------|-----------|
| Real-time order sync between ERP•AI and e-commerce platform | **Event-driven (webhooks + message queue)** | Orders must appear in ERP•AI within seconds. Webhooks provide push-based notification; a message queue (e.g., SQS, RabbitMQ) ensures durability if ERP•AI is temporarily unavailable. |
| Nightly sync of GL journal entries to corporate consolidation system | **Batch file transfer (SFTP + scheduled job)** | Finance teams reconcile daily. A nightly CSV/XML extract is simpler, auditable, and aligns with the consolidation system's intake cadence. |
| Master data sync (customers, vendors, items) across ERP•AI and CRM | **Hub-and-spoke via iPaaS** | Master data changes are infrequent but must propagate consistently to multiple systems. An iPaaS (Workato, Boomi) centralizes transformation logic and conflict resolution. |
| Employee self-service portal reading ERP•AI HR data | **API gateway (REST)** | Read-heavy, low-latency requirement. Expose ERP•AI data through a versioned REST API with caching at the gateway layer. |
| EDI document exchange with trading partners (850, 810, 856) | **EDI translator + AS2/SFTP** | Trading partners mandate EDI. Use a dedicated EDI translator (SPS Commerce, TrueCommerce) to handle X12/EDIFACT parsing, with AS2 or SFTP as the transport. |
| Ad-hoc data requests from analytics team | **Read replica + SQL access** | Analytics workloads should never hit the production database. Provide a read replica or data warehouse export with a defined refresh cadence. |

### Architecture Style Selection

| Factor | Modular Monolith (Recommended Default) | Microservices |
|--------|----------------------------------------|---------------|
| Team size | Under 20 builders | Over 20 builders with autonomous squads |
| Deployment cadence | Weekly or biweekly releases | Multiple daily deploys by independent teams |
| Domain complexity | Standard ERP modules with well-understood boundaries | Highly specialized domains requiring independent scaling |
| ERP•AI alignment | Native fit -- ERP•AI is itself a platform with modules | Requires significant custom application code outside ERP•AI |
| Operational overhead | Low -- single deployment artifact, shared database | High -- service mesh, distributed tracing, independent databases |
| **Verdict for most ERP•AI builds** | **Start here.** Use ERP•AI modules as your "services" with clean interfaces between them. | Consider only when you have custom application code that genuinely needs independent deployment and scaling. |

### Build vs. Buy vs. Configure

| Question | If Yes | If No |
|----------|--------|-------|
| Does ERP•AI have a native module for this? | Configure it. Stop. | Continue. |
| Does a mature third-party SaaS exist for this exact function? | Buy and integrate. | Continue. |
| Is this a competitive differentiator for the customer's business? | Build custom. Invest in quality. | Configure or buy. Do not over-invest. |
| Will this need to change frequently based on business rules? | Build with configuration-driven logic (rule engines, lookup tables). | Hard-code if stable. |
| Does this touch regulated data (PII, PHI, financial records)? | Choose the option with the strongest compliance posture and audit trail. | Optimize for speed of delivery. |

## Common Patterns

### Patterns to Apply

- **Strangler Fig for Legacy Replacement.** When replacing a legacy ERP, route functionality to ERP•AI module by module rather than a big-bang cutover. Run both systems in parallel with a routing layer that progressively shifts traffic to ERP•AI. This reduces risk and allows iterative validation.
- **Anti-Corruption Layer for Integrations.** Never let an external system's data model leak into your ERP•AI entity design. Place a translation layer (an API adapter, an iPaaS mapping, or a custom middleware function) between external data formats and ERP•AI's internal model.
- **Entity Inheritance via Type Fields.** When multiple entity subtypes share most fields but differ in a few (e.g., Purchase Orders vs. Sales Orders vs. Transfer Orders), use a single entity with a type discriminator field and conditional field visibility, rather than creating separate entities.
- **Event Sourcing for Financial Transactions.** For any entity where you need a complete, immutable history (journal entries, inventory movements, approval chains), store events rather than overwriting state. ERP•AI's audit trail features support this, but design your custom entities to follow the same principle.
- **Configuration as Data, Not Code.** Tax rates, approval thresholds, workflow routing rules, and business calendars should be stored as data in lookup tables, not hard-coded in scripts. This allows business users to change them without developer involvement.
- **Circuit Breaker for External API Calls.** Wrap every outbound API call in a circuit breaker pattern. After N consecutive failures, stop calling the external service and fall back to a degraded mode (queue for retry, alert an operator, use cached data).

### Anti-Patterns to Avoid

- **The God Entity.** An entity with 200+ fields that tries to represent everything. Split into focused entities with clear relationships.
- **Point-to-Point Integration Spaghetti.** Every system directly calling every other system. This creates O(n^2) connections. Use a hub-and-spoke pattern or event bus instead.
- **Premature Microservices.** Splitting an ERP•AI build into microservices before understanding the domain boundaries. This adds operational complexity without benefit.
- **Shared Database Integration.** Two systems reading and writing to the same database tables. This creates tight coupling and makes independent changes impossible.
- **Ignoring Idempotency.** Designing integrations that break if a message is delivered twice. Every integration endpoint should handle duplicate messages gracefully.
- **Security as a Phase.** Deferring RBAC design, audit configuration, and data classification to "Phase 2." These are structural decisions that are expensive to retrofit.

## Checklist

### Pre-Build

- [ ] Business capability map completed and validated with stakeholders
- [ ] Fit-Gap Matrix scored for every requirement
- [ ] Integration inventory completed -- every external system identified with direction, frequency, and protocol
- [ ] Entity Relationship Diagram reviewed by Data Engineer and Requirements Analyst
- [ ] Non-functional requirements documented with measurable targets (response time, throughput, availability)
- [ ] Security architecture defined -- RBAC matrix, SSO configuration, data classification
- [ ] Data residency and sovereignty requirements identified (especially for multi-country deployments)
- [ ] Architecture Decision Records written for every major choice
- [ ] Risk register initialized with top 10 risks and mitigation plans
- [ ] Naming conventions and configuration standards published

### During Build

- [ ] Weekly architecture review of configuration changes and custom code
- [ ] Integration contracts validated with external system owners
- [ ] Performance benchmarks run against NFR targets at each milestone
- [ ] Risk register updated -- new risks added, mitigations validated
- [ ] Change requests assessed for architectural impact before approval
- [ ] Data migration approach validated with Data Engineer (dry runs completed)

### Pre-Go-Live

- [ ] End-to-end integration testing completed across all connected systems
- [ ] Failover and recovery procedures tested (RPO/RTO validated)
- [ ] Production environment configuration matches the blueprint
- [ ] Security penetration testing completed and findings remediated
- [ ] Performance load testing passed under projected peak volumes
- [ ] Rollback plan documented and tested
- [ ] Solution Blueprint updated to reflect as-built state (not just as-designed)

## Related

- [Integrations Skill](../03-org-1k-plus/integrations/SKILL.md) -- Detailed integration implementation patterns and protocols
- [Data Modeling Skill](../03-org-1k-plus/data-modeling/SKILL.md) -- Entity design, field types, and normalization guidance
- [Performance Optimization Skill](../03-org-1k-plus/performance-optimization/SKILL.md) -- Query tuning, caching, and scaling strategies
- [Security & Roles Skill](../03-org-1k-plus/security-roles/SKILL.md) -- RBAC implementation and audit configuration
- [Deployment & Go-Live Skill](../03-org-1k-plus/deployment-golive/SKILL.md) -- Environment promotion and cutover execution
- [Data Engineer Role](./data-engineer.md) -- Collaborator on data architecture and migration
- [Requirements Analyst Role](./requirements-analyst.md) -- Collaborator on fit-gap analysis and requirement validation
- [Fit-Gap Matrix Template](../../../templates/03-org-1k-plus/fit-gap-matrix/SKILL.md) -- Scoring template for requirement evaluation
