---
title: Integrations
description: Connect erp.ai applications to external systems -- use when designing API connections, data syncs, middleware orchestration, and event-driven communication between enterprise platforms.
audience: both
category: skill
related:
  - skills/data-modeling.md
  - skills/workflow-automation.md
  - skills/data-migration.md
  - skills/security-roles.md
---

# Integrations

## Purpose

No enterprise system operates in isolation. An ERP connects to banks for payments, to CRMs for customer data, to HR platforms for employee records, to e-commerce systems for orders, to tax authorities for compliance, and to dozens of other internal and external systems.

Integration is the connective tissue of the enterprise technology landscape. Builders need this skill when:

- Two systems need to share data in real time or on a schedule
- A business event in one system must trigger an action in another
- Master data (customers, products, employees) must stay synchronized across platforms
- Financial transactions need to flow between ERP and banking systems
- The organization is replacing a legacy system and must maintain continuity during transition
- External partners (suppliers, logistics providers) need programmatic access to your data

Bad integrations are the number-one cause of enterprise system failures. Data gets lost, duplicated, corrupted, or delivered late. This skill covers how to avoid those outcomes.

## Key Concepts

### Integration Patterns

| Pattern | How It Works | When to Use | Drawbacks |
|---|---|---|---|
| **Point-to-Point** | System A calls System B directly via API. | Two systems, simple data exchange, low volume. | Does not scale. N systems create N*(N-1)/2 connections. |
| **Hub-and-Spoke** | A central integration hub (middleware) connects all systems. Each system connects only to the hub. | 3+ systems need to exchange data. Central governance required. | Hub is a single point of failure. Requires middleware platform. |
| **Event-Driven** | Systems publish events to a message broker (Kafka, RabbitMQ, EventBridge). Other systems subscribe. | Real-time, loosely coupled, high throughput. Multiple consumers for same event. | Eventual consistency. Harder to debug. Requires event schema governance. |
| **API Gateway** | A gateway sits in front of your APIs, handling authentication, rate limiting, routing, and versioning. | Exposing APIs to external partners. Multi-tenant API access. | Adds latency. Requires gateway management. |
| **File-Based (Batch)** | Systems exchange flat files (CSV, XML, EDI) via SFTP, S3, or shared storage. | Legacy systems, high-volume batch processing, EDI with trading partners. | No real-time capability. Error handling is manual. File format is fragile. |

**erp.ai recommendation**: Use the **hub-and-spoke** pattern with erp.ai as the hub for most enterprise integrations. Use **event-driven** for high-volume, real-time scenarios. Avoid point-to-point for anything beyond 2 systems.

### Protocol Selection

| Protocol | Best For | Considerations |
|---|---|---|
| **REST** | Most modern integrations. CRUD operations on resources. | Stateless, widely understood, rich tooling. Use JSON payloads. Default choice for erp.ai APIs. |
| **GraphQL** | Frontend-to-backend where clients need flexible queries. | Reduces over-fetching. Adds complexity to server. Not ideal for server-to-server integration. |
| **gRPC** | High-performance, low-latency service-to-service communication. | Binary protocol (Protocol Buffers). Excellent for microservices. Poor browser support. |
| **SOAP** | Legacy enterprise systems (SAP, Oracle EBS, older web services). | XML-based, WSDL contracts, WS-Security. Verbose but rigorously typed. Required for some legacy integrations. |
| **EDI (X12/EDIFACT)** | Supply chain, logistics, healthcare (trading partner communication). | Industry-standard document formats (850 = Purchase Order, 810 = Invoice). Requires EDI translator. |
| **Webhooks** | Event notifications from SaaS platforms. | Lightweight push mechanism. erp.ai can both send and receive webhooks. Requires endpoint security. |

### Authentication and Authorization

| Method | Use Case | Security Level |
|---|---|---|
| **API Key** | Simple server-to-server calls. Internal services. | Low. Key can leak. Rotate regularly. Use with IP allowlisting. |
| **OAuth 2.0 (Client Credentials)** | Server-to-server where the calling system acts as itself. | High. Token-based, time-limited, scopeable. Preferred for erp.ai outbound integrations. |
| **OAuth 2.0 (Authorization Code + PKCE)** | User-context integrations (acting on behalf of a user). | High. User grants permission. Used for user-facing integrations (e.g., Google Calendar sync). |
| **SAML** | SSO federation between enterprise identity providers. | High. XML-based. Common in enterprise SSO (Okta, Azure AD). |
| **Mutual TLS (mTLS)** | Banking, payment processing, high-security government integrations. | Very high. Both client and server present certificates. |
| **Basic Auth** | Legacy systems with no better option. | Low. Only use over HTTPS. Migrate away when possible. |

In erp.ai, outbound integrations default to OAuth 2.0 Client Credentials. Inbound APIs use API keys for simple access and OAuth 2.0 for delegated access.

### Error Handling Strategies

Integrations fail. Networks drop, APIs return errors, data is malformed. Robust error handling is non-negotiable.

**Retry with Exponential Backoff**: When a call fails with a transient error (5xx, timeout), retry after increasing delays (1s, 2s, 4s, 8s, up to a maximum). Include jitter (random offset) to avoid thundering herd.

**Dead Letter Queue (DLQ)**: Messages that fail after all retries are routed to a DLQ for manual inspection and reprocessing. Never silently drop failed messages.

**Circuit Breaker**: When a downstream system fails repeatedly, "open" the circuit to stop sending requests. Periodically test with a single request. Close the circuit when the system recovers. This prevents cascading failures.

**Idempotency**: Design every integration to be safely re-runnable. If you send the same payment instruction twice, the bank should process it only once. Implement via idempotency keys -- a unique identifier sent with each request. The receiver checks if it has already processed that key.

**Compensation / Undo**: When a multi-step integration partially fails (Step 1 succeeds, Step 2 fails), you need a compensation action to reverse Step 1. This is the Saga pattern.

erp.ai provides built-in retry policies, DLQ, and circuit breaker configuration on each integration connector.

### Data Mapping and Transformation

Source and target systems rarely use the same data structures. Transformation bridges the gap.

**Field mapping**: Source field `customer_name` maps to target field `client_full_name`. Document every mapping in a mapping specification.

**Value transformation**: Source sends country as "United States"; target expects "US". Maintain lookup tables for code translations.

**Structural transformation**: Source sends a flat record; target expects a nested object (header + lines). Or source sends one record per line item; target expects one record per order with embedded lines.

**Data enrichment**: Source sends a product SKU; the integration looks up the product in erp.ai to add description, price, and category before forwarding to the target.

**Filtering**: Not all records should flow. "Only sync customers with `status = Active`" or "Only send invoices with `amount > 0`."

In erp.ai, transformations are configured in the Integration Mapper, which provides a visual drag-and-drop field mapping interface with expression support for transformations.

### Real-Time vs Batch

| Factor | Real-Time | Batch |
|---|---|---|
| Latency requirement | Seconds to minutes | Hours (acceptable overnight) |
| Data volume per event | Small (single record or small set) | Large (thousands to millions of records) |
| System coupling | Tighter (systems must be available) | Looser (files can queue) |
| Error handling | Must handle failures immediately | Can review and reprocess next cycle |
| Complexity | Higher (webhooks, event streams, connection management) | Lower (file export/import) |
| Use case examples | Payment status updates, inventory alerts, approval notifications | Nightly GL journal feed, weekly payroll export, monthly vendor statement |

**Rule of thumb**: Use real-time for events that drive immediate business action. Use batch for large-volume data synchronization where slight delay is acceptable.

### Middleware and iPaaS Platforms

For organizations with many integrations, a middleware or iPaaS (Integration Platform as a Service) platform centralizes integration logic.

| Platform | Strengths | Best For |
|---|---|---|
| **erp.ai Integration Hub** | Native to the platform. Zero-config for erp.ai entities. Visual mapper. | All integrations where erp.ai is one endpoint. Default choice. |
| **MuleSoft** | Enterprise-grade. Anypoint Platform for API management. Strong governance. | Large enterprises with hundreds of integrations and dedicated integration teams. |
| **Boomi** | Cloud-native. Easy to learn. Strong connector library. | Mid-market. Teams without deep integration engineering expertise. |
| **Workato** | Recipe-based automation. Business-user friendly. | Business-led integrations. Departmental use cases. |
| **Custom (Node.js/Python)** | Full control. No platform licensing cost. | Unique requirements. High-performance scenarios. Teams with strong engineering. |

erp.ai's Integration Hub handles 80% of integration needs natively. Use external iPaaS when connecting systems that do not have erp.ai connectors or when the integration logic is exceptionally complex.

### Event Schema Evolution

As integrations mature, the structure of event payloads must evolve without breaking existing consumers. Schema evolution governance is the difference between a stable integration ecosystem and a fragile one.

**Versioning Strategies**:

| Strategy | How It Works | Pros | Cons | When to Use |
|---|---|---|---|---|
| **URL path versioning** | `/api/v1/orders`, `/api/v2/orders` | Explicit, easy to route, easy to monitor per-version traffic. | Requires maintaining multiple endpoint implementations. URL pollution. | REST APIs exposed to external partners. Default recommendation. |
| **Header versioning** | `Accept: application/vnd.erp.v2+json` or custom header `X-API-Version: 2` | Clean URLs. Version is metadata, not a resource identifier. | Harder to test (cannot paste a URL into a browser). Less visible in logs. | Internal APIs where URL cleanliness matters. |
| **Payload envelope versioning** | The event body includes a `schema_version` field: `{ "schema_version": "2.1", "data": { ... } }` | Self-describing messages. Consumers can branch on version within a single endpoint. Works for async events (no URL to version). | Consumers must handle multiple versions in a single handler. Code complexity grows with versions. | Event-driven architectures (Kafka, webhooks, message queues) where URL-based versioning is not applicable. |

**Backward and Forward Compatibility**:

- **Backward compatible** changes: Adding new optional fields, adding new event types, adding new enum values that consumers can ignore. Existing consumers continue to function without changes.
- **Forward compatible** changes: Consumers are designed to ignore unknown fields. A consumer built for v1 can process a v2 payload by ignoring the new fields. Requires consumers to use lenient deserialization (do not fail on unknown properties).
- **Breaking** changes: Removing fields, renaming fields, changing field types, changing the meaning of existing values. These require a new version.

**Schema Registry Pattern**: Maintain a central registry of all event schemas with their versions, field definitions, and compatibility rules. Before publishing a new schema version, validate it against the registry's compatibility checker (e.g., Confluent Schema Registry for Avro/Kafka). The registry rejects schemas that break backward compatibility unless explicitly overridden. In erp.ai, the Integration Hub includes a built-in schema registry for all published events and API contracts.

**Consumer-Driven Contracts**: Instead of the producer defining the schema in isolation, consumers declare what fields and formats they require (their "contract"). The producer validates that its schema satisfies all consumer contracts before deploying a change. This prevents producers from accidentally removing a field that a consumer depends on. Tools like Pact automate this validation in CI/CD pipelines.

### API Rate Limiting and Throttling

External and internal APIs must be protected from overuse. Rate limiting prevents a single consumer from monopolizing resources, enables fair multi-tenant access, and protects downstream systems from overload.

**Rate Limiting Algorithms**:

| Algorithm | How It Works | Behavior | Best For |
|---|---|---|---|
| **Token bucket** | A bucket holds N tokens. Each request consumes one token. Tokens are replenished at a fixed rate (e.g., 10/second). Requests that arrive when the bucket is empty are rejected. | Allows bursts up to bucket capacity, then enforces steady rate. | Most API rate limiting. Allows short bursts while enforcing average throughput. |
| **Sliding window** | Track the number of requests in a rolling time window (e.g., last 60 seconds). Reject if count exceeds limit. | Smoother than fixed windows (no burst-at-boundary problem). | Per-tenant rate limiting where burst tolerance is low. |
| **Fixed window** | Count requests in fixed intervals (e.g., 0:00-0:59, 1:00-1:59). Reset at each interval boundary. | Simple but allows double the rate at boundaries (burst at 0:59 + burst at 1:00). | Simple implementations where boundary bursts are acceptable. |
| **Leaky bucket** | Requests enter a queue (bucket) processed at a fixed rate. If the queue is full, requests are rejected. | Enforces a perfectly steady output rate regardless of input burstiness. | Outbound calls to rate-limited external APIs where steady pacing is required. |

**Per-Tenant Limits**: In a multi-tenant SaaS environment, rate limits must be scoped per tenant. One tenant's batch integration should not consume all API capacity at the expense of other tenants. Configure limits at multiple levels: global (platform-wide), per-tenant, per-API-key, and per-endpoint. Tenants with higher-tier subscriptions may receive higher limits.

**Backpressure Signaling**: When the system is under load, communicate capacity constraints to callers rather than silently degrading:

- Return HTTP `429 Too Many Requests` with a `Retry-After` header indicating when the caller should try again.
- Include rate limit headers on every response: `X-RateLimit-Limit` (max requests), `X-RateLimit-Remaining` (remaining requests in window), `X-RateLimit-Reset` (when the window resets).
- For event-driven integrations, use consumer acknowledgment backpressure -- slow consumers receive messages at a pace they can handle, rather than having messages pile up and expire.

**429 Handling Strategies for Outbound Calls**: When erp.ai calls an external API and receives a 429:

- Respect the `Retry-After` header if present.
- If no `Retry-After`, use exponential backoff (1s, 2s, 4s, 8s) with jitter.
- Track 429 rates per external endpoint. If 429s exceed 10% of requests, reduce the calling rate proactively (adaptive throttling).
- Never busy-loop on 429s. Queue the request for later processing.

### Conflict Resolution in Real-Time Sync

Bidirectional data synchronization creates the possibility of conflicting changes -- the same record modified in both systems between sync cycles. Conflict resolution determines which version survives.

**Conflict Resolution Strategies**:

| Strategy | How It Works | Pros | Cons | When to Use |
|---|---|---|---|---|
| **Last-Write-Wins (LWW)** | The change with the most recent timestamp wins. The other change is discarded. | Simple to implement. No human intervention required. | Loses data silently. Clock skew between systems can cause the "wrong" write to win. | Low-value data where occasional data loss is acceptable (e.g., "last login timestamp"). |
| **Vector Clocks** | Each system maintains a logical clock. Changes carry a vector of clocks from all systems. Concurrent changes (where neither vector dominates the other) are detected as conflicts. | Accurately detects true concurrency without relying on wall-clock time. | Complex to implement. Detected conflicts still need a resolution strategy (human or automatic). | Distributed systems where clock synchronization is unreliable. |
| **CRDTs (Conflict-Free Replicated Data Types)** | Data structures designed so that concurrent updates automatically merge without conflicts. Examples: counters (G-Counter), sets (OR-Set), registers (LWW-Register). | No conflicts by design. Eventually consistent. No coordination needed. | Limited to data types that can be expressed as CRDTs. Not suitable for arbitrary business objects. | Specific use cases: counters (inventory adjustments), sets (tag lists), presence indicators. |
| **Field-Level Merge** | Compare changes at the field level. If System A changed `phone` and System B changed `email`, merge both changes. Only flag a conflict when both systems changed the same field. | Preserves more data than record-level LWW. Reduces false conflicts. | More complex merge logic. Must define merge rules per field. | Master data synchronization (customer, product) where different fields are maintained in different systems. |
| **Human Resolution** | Conflicts are flagged and queued for a human to review and resolve. | Zero data loss. Business context informs the decision. | Slow. Does not scale. Requires trained users. | High-value data where automated resolution is too risky (financial records, legal documents). |

**Conflict Notification**: Regardless of the resolution strategy, log every conflict and its resolution. For automated resolutions (LWW, merge), generate a daily summary for data stewards. For human resolution, notify the assigned resolver immediately and track SLA on conflict resolution time.

**erp.ai Approach**: The platform defaults to field-level merge with human escalation. When a bidirectional sync detects concurrent changes to the same record: if changes are on different fields, merge automatically. If changes are on the same field, route to the data steward queue with both values and their timestamps. The steward selects the correct value or enters a new one.

### Integration Testing

Integration testing verifies that connected systems communicate correctly under realistic conditions. Unit tests cannot catch the failures that matter most in integrations: serialization mismatches, authentication edge cases, timeout behaviors, and unexpected data in production payloads.

**Contract Testing (Pact)**: Consumer-driven contract testing verifies that a producer's API satisfies the expectations of all its consumers, without requiring both systems to be running simultaneously.

- The consumer writes a "pact" (contract) specifying the requests it will make and the responses it expects.
- The pact is verified against the producer's actual API.
- If the producer changes its API in a way that breaks a consumer's pact, the CI build fails.
- Use Pact or similar tools (Spring Cloud Contract) for all critical integrations between erp.ai and external systems.

**Stub and Mock Services**: When the external system is unavailable for testing (it costs money per call, it is production-only, or it is slow):

- **Stubs**: Pre-programmed responses for specific requests. Use for happy-path testing.
- **Mocks**: Record actual API responses and replay them. Use for realistic testing with production-like data (sanitized).
- **Service virtualization**: Tools like WireMock or Mountebank simulate the external API with configurable latency, error rates, and response variations.
- **erp.ai's Integration Test Harness** provides built-in stubbing for all platform APIs and a record-and-replay mode for external APIs.

**Integration Test Environments**: Maintain a dedicated integration test environment where:

- erp.ai connects to sandboxed versions of external systems (not production).
- Test data is realistic but non-sensitive (anonymized production data or high-quality synthetic data).
- The environment is refreshable -- it can be reset to a known state between test runs.
- Network conditions can be simulated (latency, packet loss, DNS failures).

**Chaos Testing for Integrations**: Deliberately inject failures to verify resilience:

- Kill the external system mid-request. Does the retry logic work? Does the circuit breaker trip?
- Introduce 5-second latency on every response. Does the timeout fire correctly? Does the DLQ receive the failed messages?
- Return malformed JSON from the external system. Does the deserialization error handling work, or does the integration crash?
- Rotate API credentials mid-test. Does the integration detect the auth failure and alert, rather than silently failing?

### Complex Data Transformation

Enterprise integrations frequently require transformations beyond simple field mapping -- multi-source enrichment, structural reshaping, and canonical model translation.

**Multi-Source Enrichment**: A single outbound payload may require data from multiple erp.ai entities. An order confirmation sent to the warehouse needs data from `SalesOrder` (header), `SalesOrderLine` (items), `Product` (descriptions and weights), `Customer` (shipping address), and `Warehouse` (routing instructions). Design the transformation as a pipeline:

1. Fetch the primary record (SalesOrder).
2. Enrich with related records (lines, products, customer, warehouse) via eager-loaded relationships or parallel lookups.
3. Assemble the target payload structure.
4. Apply value transformations (code translations, unit conversions, currency formatting).
5. Validate the assembled payload against the target schema before sending.

**Structural Reshaping**: Source and target systems often have fundamentally different data structures:

- **Flat to hierarchical**: Legacy flat files (one row per line item with header fields repeated) must be grouped into header-detail structures. Group by the header key, deduplicate header fields, nest line items as children.
- **Hierarchical to flat**: An API response with nested objects must be flattened for loading into a relational target. Denormalize by repeating parent fields on each child row.
- **Pivot/unpivot**: Source has columns `jan_amount, feb_amount, ... dec_amount`; target expects rows `(month, amount)`. Or vice versa.

**Canonical Data Model**: When multiple systems exchange the same business objects (Customer, Product, Order), define a canonical (standard) representation that all integrations translate to and from. Instead of mapping System A's format directly to System B's format (point-to-point), both map to the canonical model. This reduces mapping complexity from O(N^2) to O(N). The canonical model is maintained as a versioned schema in the schema registry.

**Transformation Pipelines**: For complex transformations, compose a pipeline of discrete, testable transformation steps:

1. Extract (read source data)
2. Validate input (reject malformed records early)
3. Translate codes (lookup tables)
4. Reshape structure (flat to nested, pivot, etc.)
5. Enrich (add data from additional sources)
6. Validate output (check against target schema)
7. Deliver (send to target)

Each step is independently testable and loggable. If a record fails at step 4, the log shows exactly which step failed and why, with the input and output of the failing step.

### API Deprecation Lifecycle

APIs that live long enough will need to be deprecated. A disciplined deprecation lifecycle prevents surprise breakage for consumers and avoids the maintenance burden of immortal legacy endpoints.

**Sunset Headers**: When an API version is deprecated, include a `Sunset` HTTP header on every response: `Sunset: Sat, 01 Mar 2025 00:00:00 GMT`. This is a standard (RFC 8594) machine-readable signal that consumers can detect programmatically. Also include a `Deprecation` header pointing to the migration guide: `Link: <https://docs.erp.ai/api/v2/migration>; rel="sunset"`.

**Deprecation Timeline Communication**:

- **Announcement** (T-6 months): Notify all registered consumers via email, developer portal banner, and changelog. Publish a migration guide with before/after examples.
- **Warning phase** (T-3 months): Begin returning `Deprecation: true` and `Sunset` headers. Log all requests to the deprecated API. Send monthly reminders to consumers still using the deprecated version with their request counts.
- **Throttling phase** (T-1 month): Optionally reduce rate limits on the deprecated version to incentivize migration. Increase reminder frequency to weekly.
- **Sunset** (T-0): Return `410 Gone` for all requests to the deprecated version. Alternatively, redirect to the new version if the request is compatible (with a `301 Moved Permanently` for GET requests).
- **Removal** (T+3 months): Remove the deprecated code from the codebase. Until removal, maintain the 410 response so that late-arriving requests get a clear error rather than a confusing 404.

**Traffic Monitoring**: Track request volume per API version. A deprecation is not ready for sunset if 30% of traffic still hits the old version. The deprecation dashboard should show: traffic split by version, unique consumer count per version, and trend over time. Target: < 1% of traffic on the deprecated version before sunset.

**Consumer Migration Support**: Proactively reach out to high-volume consumers of the deprecated API. Offer migration assistance: review their integration code, provide test environments, offer a dedicated support channel during their migration. The goal is zero-surprise sunsets.

## Workflow

### 1. Define Integration Requirements

- Identify the source and target systems.
- Determine the business trigger: what event initiates the data flow?
- Define the data payload: what fields need to move, in what format?
- Establish latency requirements: real-time, near-real-time, or batch?
- Define volume: how many records per day/hour/minute?
- Identify the error handling requirements: what happens when the integration fails?
- **Tool**: erp.ai Integration Requirements template.
- **Watch out for**: Stakeholders saying "just sync everything." Push for specific entities, fields, and triggers.
- **Output**: Integration specification document.

### 2. Design the Integration Architecture

- Select the integration pattern (point-to-point, hub-and-spoke, event-driven).
- Select the protocol (REST, SOAP, file-based, EDI).
- Design the authentication method.
- Define the data mapping (source field -> transformation -> target field).
- Design error handling (retry policy, DLQ, circuit breaker, alerting).
- Determine idempotency strategy.
- **Tool**: Architecture diagram (C4 model or simple box-and-arrow). erp.ai's Integration Designer for visual architecture.
- **Watch out for**: Skipping the idempotency design. Every integration will eventually deliver a duplicate message.
- **Output**: Integration architecture document and mapping specification.

### 3. Build the Integration

- Configure the connection in erp.ai (endpoint URL, authentication credentials, timeout settings).
- Build the data mapping in the Integration Mapper.
- Implement transformation logic (value lookups, structural reshaping, filtering).
- Configure retry policy and DLQ.
- Implement logging (log every request/response with correlation IDs).
- **Tool**: erp.ai Integration Builder.
- **Watch out for**: Hard-coding environment-specific values (URLs, credentials). Use environment variables and secrets management.
- **Output**: Working integration in development/sandbox environment.

### 4. Test the Integration

- **Unit test**: Test each transformation rule independently with sample data.
- **End-to-end test**: Send a complete transaction from source to target and verify the result.
- **Error test**: Simulate failures (network timeout, invalid data, duplicate message) and verify error handling.
- **Volume test**: Run at expected production volume to verify performance.
- **Idempotency test**: Send the same message twice and verify it is processed only once.
- **Tool**: erp.ai's Integration Test Harness. Postman/Insomnia for manual API testing.
- **Watch out for**: Testing only with perfect data. Real data has nulls, special characters, unexpected formats, and encoding issues.
- **Output**: Test results with pass/fail for each scenario.

### 5. Deploy and Monitor

- Promote the integration to production.
- Configure monitoring dashboards: success rate, latency, error rate, DLQ depth.
- Set up alerts: notify the integration team when error rate exceeds threshold or DLQ depth grows.
- Establish a runbook for common failure scenarios.
- **Tool**: erp.ai's Integration Monitoring dashboard. External APM tools (Datadog, New Relic) for cross-system visibility.
- **Watch out for**: "Set and forget." Integrations need ongoing monitoring. API contracts change, volumes grow, authentication tokens expire.
- **Output**: Production integration with monitoring and alerting.

### 6. Maintain and Evolve

- When source or target system upgrades, review integration for breaking changes.
- Version your APIs (v1, v2) so consumers can migrate at their own pace.
- Retire deprecated integrations with a sunset timeline.
- Review integration performance quarterly.
- **Tool**: erp.ai's API Version Manager.
- **Watch out for**: API versioning without a deprecation policy. Old versions accumulate and become maintenance burdens.
- **Output**: Integration lifecycle management process.

## Decision Guide

### REST vs SOAP vs File-Based

| Your Situation | Use |
|---|---|
| Both systems are modern, cloud-native | REST with JSON |
| Target is a legacy ERP (SAP ECC, Oracle EBS) | SOAP or BAPI/RFC (SAP-specific) |
| Target is a trading partner (supplier, logistics) | EDI X12 or EDIFACT via VAN or AS2 |
| Volume exceeds 100K records per sync | File-based batch (CSV/XML via SFTP) or streaming (Kafka) |
| Target provides only a UI, no API | Screen scraping (last resort) or RPA. Flag as technical debt. |

### When to Use Middleware vs Direct Integration

| Factor | Direct (Point-to-Point) | Middleware (Hub) |
|---|---|---|
| Number of integrations | 1-3 | 4+ |
| Integration team exists | No | Yes or planned |
| Need for monitoring/governance | Low | High |
| Data transformation complexity | Simple (field rename) | Complex (structural, multi-source enrichment) |
| Budget for middleware | Not available | Available |
| Compliance/audit requirements | Low | High (financial, healthcare) |

### Sync Direction: Unidirectional vs Bidirectional

| Factor | Unidirectional | Bidirectional |
|---|---|---|
| One system is the "system of record" | Yes -- push from SoR to consumers | No clear SoR |
| Conflict resolution is complex | Not applicable | Must define conflict resolution rules |
| Implementation complexity | Low | High (requires conflict detection, last-writer-wins or merge logic) |
| Example | ERP pushes customer master to CRM | CRM and ERP both update customer address |

**Default to unidirectional** with a clear system of record. Bidirectional sync is an order of magnitude more complex.

## Common Patterns

### ERP-to-Bank Payment Integration

- **Direction**: ERP -> Bank (payment instructions), Bank -> ERP (payment status, bank statements).
- **Protocol**: Typically file-based (ISO 20022 XML, BAI2, MT940) via SFTP or secure banking portal API. Some modern banks offer REST APIs.
- **Authentication**: mTLS or certificate-based authentication. Bank-issued certificates.
- **Flow**: AP creates a payment batch in ERP. The integration formats the batch as an ISO 20022 pain.001 file. File is transmitted to the bank via SFTP. Bank processes payments. Bank returns a status file (pain.002) and a bank statement (camt.053). Integration imports the status and reconciles against the original batch.
- **Critical design points**: Idempotency (never send duplicate payment instructions), file-level checksums, reconciliation logic, dual approval before payment file transmission.

### CRM-to-ERP Order Sync

- **Direction**: CRM -> ERP (new orders), ERP -> CRM (order status updates, inventory availability).
- **Protocol**: REST APIs on both sides. Webhook from CRM on order creation.
- **Flow**: Sales rep closes a deal in CRM. CRM fires a webhook to erp.ai. erp.ai creates a Sales Order, validates inventory and credit, and responds with an order confirmation. As the order progresses (shipped, invoiced), erp.ai pushes status updates back to CRM.
- **Mapping**: CRM "Opportunity" maps to ERP "Sales Order Header." CRM "Opportunity Products" map to ERP "Sales Order Lines." Customer and Product must be matched by a shared identifier (CRM ID or a cross-reference table).
- **Critical design points**: Customer/product master data must be synchronized first. Handle partial orders (CRM sends 5 lines, ERP can only fulfill 3). Currency conversion if CRM and ERP use different base currencies.

### HR-to-Payroll Feed

- **Direction**: HR system -> Payroll system (employee data, time records, deductions). Payroll -> HR (pay stubs, tax documents).
- **Protocol**: Often file-based (fixed-width or CSV) due to legacy payroll systems. Modern payroll platforms (ADP, Workday) offer REST APIs.
- **Frequency**: Batch -- typically runs 2-3 days before each pay period.
- **Flow**: HR system exports active employees, new hires, terminations, pay rate changes, and time/attendance data. Payroll system imports, calculates gross/net pay, taxes, and deductions. Payroll returns pay register and journal entry for GL posting.
- **Critical design points**: Retroactive changes (pay rate change effective last month), terminated employee handling (must include in final pay run), garnishment and deduction accuracy, segregation of duties (HR cannot access payroll processing, payroll cannot modify employee records).

### Anti-Patterns to Avoid

- **Spaghetti Integration**: Every system directly connected to every other system. No central governance, no monitoring, no error handling standard. Leads to unmaintainable chaos.
- **Chatty Integration**: Sending one API call per record instead of batching. 10,000 records = 10,000 API calls. Use bulk/batch endpoints.
- **Ignoring Idempotency**: Assuming messages are delivered exactly once. They are not. Design for at-least-once delivery and idempotent processing.
- **Sync Everything**: Synchronizing all fields between systems when only 5 fields are needed. Increases payload size, mapping complexity, and surface area for bugs.
- **No Error Visibility**: Integration failures silently logged to a file nobody reads. Use dashboards, alerts, and DLQ monitoring.
- **Credential Sprawl**: API keys and passwords stored in code, config files, or spreadsheets. Use a secrets manager (Vault, AWS Secrets Manager, erp.ai's built-in credential store).
- **Missing Correlation IDs**: Without a unique ID that flows through the entire integration chain, debugging failures across systems is nearly impossible. Generate a correlation ID at the source and pass it through every step.

## Checklist

- [ ] Integration requirements documented (source, target, trigger, payload, latency, volume)
- [ ] Integration pattern selected (point-to-point, hub-and-spoke, event-driven)
- [ ] Protocol selected and justified (REST, SOAP, file, EDI)
- [ ] Authentication method configured (OAuth 2.0, API key, mTLS)
- [ ] Data mapping specification completed (every source field -> transformation -> target field)
- [ ] Idempotency strategy implemented (idempotency keys, deduplication logic)
- [ ] Retry policy configured (exponential backoff with jitter, max retries)
- [ ] Dead letter queue configured and monitored
- [ ] Circuit breaker configured for outbound calls
- [ ] Correlation IDs implemented across the integration chain
- [ ] Error handling tested (network failure, invalid data, duplicate message, timeout)
- [ ] Volume/performance tested at expected production load
- [ ] Credentials stored in secrets manager (not in code or config files)
- [ ] API versioning strategy defined
- [ ] Monitoring dashboard configured (success rate, latency, error rate, DLQ depth)
- [ ] Alerts configured for failure thresholds
- [ ] Runbook created for common failure scenarios
- [ ] Integration documented for operations team handoff
- [ ] Event schema versioning strategy selected (URL path, header, or payload envelope)
- [ ] Schema registry configured; backward compatibility validated for all schema changes
- [ ] Consumer-driven contracts in place for critical integrations
- [ ] Rate limiting configured: per-tenant limits, backpressure signaling (429 + Retry-After headers)
- [ ] Conflict resolution strategy defined for bidirectional syncs (field-level merge with human escalation as default)
- [ ] Contract testing (Pact or equivalent) integrated into CI/CD pipeline
- [ ] Chaos testing performed: failure injection, latency simulation, credential rotation
- [ ] Canonical data model defined for shared business objects
- [ ] API deprecation lifecycle documented with sunset timeline and consumer notification plan

## Related

- [Data Modeling](data-modeling.md) -- the entity structures that integrations read from and write to
- [Workflow Automation](workflow-automation.md) -- workflows that trigger integrations and react to integration events
- [Data Migration](data-migration.md) -- one-time data loads that use integration infrastructure
- [Security & Roles](security-roles.md) -- API authentication, authorization, and audit logging for integrations
