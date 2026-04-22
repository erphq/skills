---
name: api-design
description: This skill should be used when the task involves design and manage ERP APIs -- use when building REST endpoints, versioning strategies, rate limiting, webhook systems, error handling, and developer experience for enterprise platform APIs.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: information-technology
  size_tier: 03-org-1k-plus
  type: skill
  scope: internal
---
# API Design

## Purpose

An ERP API is the programmatic surface area of the entire business. Every integration, every mobile app, every custom report, every automation, and every partner extension interacts with the ERP through its APIs. The quality of the API determines the velocity of every team that builds on the platform.

A well-designed API is intuitive, consistent, well-documented, and hard to misuse. A poorly designed API creates support tickets, integration bugs, security vulnerabilities, and developer frustration that compounds over years.

Builders need this skill when:

- Exposing ERP entities (customers, invoices, products, journal entries) as API resources
- Designing integrations that external systems will consume
- Building a partner or developer ecosystem around the ERP platform
- Implementing webhooks for event-driven architectures
- Managing API versions as the platform evolves
- Setting rate limits and quotas for multi-tenant fairness
- Generating SDKs and documentation from API specifications

ERP APIs have unique constraints compared to consumer APIs: they deal with complex business objects (a sales order with header, lines, tax calculations, and approval status), strict data validation (GL accounts must balance), multi-tenant isolation, and regulatory audit requirements. This skill addresses these ERP-specific challenges.

## Key Concepts

### API Design Principles for ERP

**Resource modeling from entities**: ERP entities map to API resources. The data model is the API's foundation.

| ERP Entity | API Resource | URI |
|---|---|---|
| Customer | customers | `/api/v1/customers` |
| Sales Order | sales-orders | `/api/v1/sales-orders` |
| Invoice | invoices | `/api/v1/invoices` |
| Journal Entry | journal-entries | `/api/v1/journal-entries` |
| Employee | employees | `/api/v1/employees` |
| Product | products | `/api/v1/products` |

**Naming conventions**:

- Use **plural nouns** for resource collections: `/customers`, not `/customer`.
- Use **kebab-case** for multi-word resources: `/sales-orders`, not `/salesOrders` or `/sales_orders`.
- Use **camelCase** for JSON field names: `firstName`, `lineItems`, `taxAmount`.
- Use **path parameters** for resource identity: `/customers/{customerId}`.
- Use **query parameters** for filtering, sorting, and pagination: `/customers?status=active&sort=name`.
- Avoid verbs in URIs. The HTTP method is the verb: `POST /invoices` (create), not `POST /createInvoice`.

**REST maturity levels** (Richardson Maturity Model):

| Level | Description | ERP•AI Target |
|---|---|---|
| **Level 0** | Single endpoint, single HTTP method (SOAP-style). | Do not build this. |
| **Level 1** | Multiple resources, but not using HTTP methods properly. | Do not build this. |
| **Level 2** | Multiple resources + correct HTTP methods (GET, POST, PUT, PATCH, DELETE) + correct status codes. | Minimum standard for all ERP•AI APIs. |
| **Level 3** | Level 2 + HATEOAS (Hypermedia as the Engine of Application State). Responses include links to related resources and available actions. | Recommended for public APIs. |

**HATEOAS for discoverability**: Include `_links` in responses to guide API consumers to related resources and available actions:

```json
{
  "id": "inv-12345",
  "status": "draft",
  "total": 1500.00,
  "currency": "USD",
  "_links": {
    "self": { "href": "/api/v1/invoices/inv-12345" },
    "customer": { "href": "/api/v1/customers/cust-789" },
    "line-items": { "href": "/api/v1/invoices/inv-12345/line-items" },
    "submit": { "href": "/api/v1/invoices/inv-12345/submit", "method": "POST" },
    "pdf": { "href": "/api/v1/invoices/inv-12345/pdf", "type": "application/pdf" }
  }
}
```

HATEOAS makes the API self-documenting and reduces the need for API consumers to hard-code URIs.

### API Versioning Strategies

| Strategy | How It Works | Pros | Cons |
|---|---|---|---|
| **URL Path** | `/api/v1/customers`, `/api/v2/customers` | Simple, explicit, easy to route. | URL changes on version bump. Caching per version. |
| **Query Parameter** | `/api/customers?version=2` | URL stays stable. | Easy to forget the parameter. Not RESTful (version is not a filter). |
| **Custom Header** | `X-API-Version: 2` | URL stays clean. | Invisible in browser. Easy to forget. Hard to share URLs. |
| **Content Negotiation** | `Accept: application/vnd.erp.v2+json` | Most RESTful. Supports format negotiation. | Complex. Poor tooling support. Confusing for beginners. |

**ERP•AI decision matrix**:

| Factor | Recommendation |
|---|---|
| Public API (partners, developers) | **URL Path versioning**. Explicit, easy to understand, easy to document. |
| Internal API (service-to-service) | **URL Path versioning** or **Custom Header**. Consistency with public API is preferred. |
| Need to support multiple versions simultaneously | URL Path. Each version is a distinct endpoint. |
| Gradual migration (consumers upgrade at their own pace) | URL Path with deprecation policy and sunset headers. |

**ERP•AI uses URL path versioning** (`/api/v1/`, `/api/v2/`) for all APIs. The version number increments only for breaking changes. Non-breaking additions (new optional fields, new endpoints) are added to the current version.

### Request/Response Design

**Pagination**: All list endpoints must be paginated. Unbounded result sets cause timeouts, memory exhaustion, and poor UX.

| Pattern | How It Works | When to Use |
|---|---|---|
| **Offset-based** | `?offset=100&limit=25` | Simple lists, admin UIs, small datasets. |
| **Cursor-based** | `?cursor=eyJpZCI6MTAwfQ&limit=25` | Large datasets, real-time data (inserts/deletes between pages). Stable pagination. |
| **Keyset** | `?after_id=cust-100&limit=25` | High-performance pagiation on indexed columns. |

ERP•AI uses **cursor-based pagination** as the default for all list endpoints. Response includes pagination metadata:

```json
{
  "data": [...],
  "pagination": {
    "cursor": "eyJpZCI6MTI1fQ",
    "has_more": true,
    "total_count": 1542
  }
}
```

**Filtering**: Support filtering on commonly queried fields using query parameters:

- Equality: `?status=active`
- Comparison: `?amount_gte=1000&amount_lte=5000`
- Multiple values: `?status=active,pending` (OR) or `?status=active&currency=USD` (AND)
- Date ranges: `?created_after=2026-01-01&created_before=2026-03-31`
- Text search: `?q=acme` (full-text search across relevant fields)

Reject unknown filter parameters with a `400 Bad Request` rather than silently ignoring them (which leads to consumers believing they are filtering when they are not).

**Sorting**: `?sort=created_at` (ascending) or `?sort=-created_at` (descending, prefixed with `-`). Support multi-field sorting: `?sort=-status,name`.

**Field selection (sparse fieldsets)**: Allow consumers to request only the fields they need: `?fields=id,name,status`. Reduces payload size and improves performance. Particularly important for ERP entities with dozens of fields.

**Bulk operations**: ERP workflows frequently require operating on many records. Provide bulk endpoints:

```
POST /api/v1/invoices/bulk-create
POST /api/v1/invoices/bulk-update
POST /api/v1/invoices/bulk-submit
```

Bulk operations accept an array of items and return an array of results (one per input item), including per-item success/failure:

```json
{
  "results": [
    { "id": "inv-001", "status": "created" },
    { "id": null, "status": "error", "error": { "code": "VALIDATION_FAILED", "message": "Customer not found" } }
  ],
  "summary": { "total": 2, "succeeded": 1, "failed": 1 }
}
```

**Partial updates (PATCH)**: Use `PATCH` for partial updates (change only the fields provided) and `PUT` for full replacements (replace the entire resource). ERP resources often have many fields; requiring the consumer to send the full object for every update is wasteful and error-prone.

PATCH with JSON Merge Patch (RFC 7396):

```
PATCH /api/v1/customers/cust-789
Content-Type: application/merge-patch+json

{
  "email": "new@example.com",
  "creditLimit": 50000
}
```

### Error Handling

**RFC 7807 Problem Details**: Use the standard problem detail format for all error responses:

```json
{
  "type": "https://api.erp.ai/errors/validation-failed",
  "title": "Validation Failed",
  "status": 422,
  "detail": "The invoice could not be created because of validation errors.",
  "instance": "/api/v1/invoices",
  "errors": [
    {
      "field": "lineItems[0].quantity",
      "code": "MUST_BE_POSITIVE",
      "message": "Quantity must be greater than zero."
    },
    {
      "field": "customerId",
      "code": "NOT_FOUND",
      "message": "Customer 'cust-999' does not exist."
    }
  ],
  "traceId": "abc-123-def-456"
}
```

**Error codes**: Define a catalog of error codes that are stable, documented, and machine-readable. Consumers use error codes for programmatic handling. Human-readable messages are for debugging.

| HTTP Status | Error Category | Example Codes |
|---|---|---|
| **400** | Bad Request (malformed syntax) | `INVALID_JSON`, `MISSING_REQUIRED_FIELD` |
| **401** | Unauthorized (no/invalid credentials) | `INVALID_TOKEN`, `TOKEN_EXPIRED` |
| **403** | Forbidden (authenticated but not authorized) | `INSUFFICIENT_PERMISSIONS`, `TENANT_MISMATCH` |
| **404** | Not Found | `RESOURCE_NOT_FOUND` |
| **409** | Conflict (business rule violation) | `DUPLICATE_INVOICE_NUMBER`, `PERIOD_CLOSED` |
| **422** | Unprocessable Entity (validation) | `VALIDATION_FAILED`, `BALANCE_MISMATCH` |
| **429** | Too Many Requests (rate limit) | `RATE_LIMIT_EXCEEDED`, `QUOTA_EXHAUSTED` |
| **500** | Internal Server Error | `INTERNAL_ERROR` (never expose stack traces) |

**Actionable messages**: Error messages should tell the consumer what to do, not just what went wrong. "Customer 'cust-999' does not exist. Verify the customerId or create the customer first at POST /api/v1/customers." is better than "Not found."

**Validation error arrays**: When a request has multiple validation errors, return all of them in one response. Do not return only the first error and force the consumer to fix-and-retry iteratively.

**Retry guidance**: For transient errors (429, 503), include `Retry-After` header with the number of seconds to wait before retrying.

### Authentication & Authorization for APIs

**API keys**: Simple bearer tokens for server-to-server access. Easy to implement, hard to manage securely. Best for internal services and development. Always sent in the `Authorization` header, never in query parameters (query params are logged in server access logs and browser history).

```
Authorization: Bearer erp_live_sk_abc123...
```

**OAuth 2.0 scopes mapped to RBAC**: For delegated access, use OAuth 2.0 with scopes that map to ERP•AI's role-based access control:

| OAuth Scope | RBAC Permission | Access Level |
|---|---|---|
| `invoices:read` | View invoices | Read-only access to invoice endpoints |
| `invoices:write` | Create/update invoices | Read and write access |
| `invoices:submit` | Submit invoices for approval | Triggers workflow |
| `gl:read` | View general ledger | Read-only access to GL endpoints |
| `admin:users` | Manage users | User provisioning and role assignment |

Scopes are additive. A token with `invoices:read` and `invoices:write` can read and write but not submit. The token can never exceed the underlying user's RBAC permissions, even if the scope is broader.

**Token management**: Access tokens expire (1 hour default). Refresh tokens have longer lifespans (30 days) and are used to obtain new access tokens without re-authentication. Store refresh tokens securely (encrypted at rest). Revoke tokens immediately when access is revoked.

**Service-to-service auth**: For internal microservices, use OAuth 2.0 Client Credentials flow or mTLS. Do not share a single service account across multiple services -- each service gets its own identity for audit trail purposes.

### Rate Limiting & Quotas

**Per-tenant limits**: In a multi-tenant ERP, each tenant gets a fair share of API capacity. Without rate limiting, one tenant's batch job can degrade performance for all tenants.

| Limit Type | Scope | Example |
|---|---|---|
| **Requests per second** | Per tenant, per endpoint | 100 req/s for list endpoints, 50 req/s for write endpoints |
| **Requests per minute** | Per tenant, global | 3,000 req/min across all endpoints |
| **Requests per day** | Per tenant, global | 500,000 req/day (varies by subscription tier) |
| **Concurrent requests** | Per tenant | 20 concurrent requests |
| **Payload size** | Per request | 10 MB request body |
| **Bulk operation size** | Per request | 1,000 items per bulk request |

**Burst allowance**: Allow short bursts above the sustained rate. A tenant with a 100 req/s limit might be allowed 200 req/s for 5 seconds to handle legitimate spikes. Implemented via token bucket or sliding window algorithm.

**Rate limit headers**: Include rate limit information in every response:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 73
X-RateLimit-Reset: 1681500060
```

**429 response design**: When a consumer exceeds the rate limit, return a `429 Too Many Requests` with `Retry-After` header and a clear error message:

```json
{
  "type": "https://api.erp.ai/errors/rate-limit-exceeded",
  "title": "Rate Limit Exceeded",
  "status": 429,
  "detail": "You have exceeded the rate limit of 100 requests per second. Retry after 2 seconds.",
  "retryAfter": 2
}
```

**Quota dashboards**: Provide tenants with a dashboard showing their API usage against their quotas. Include historical trends, top endpoints by volume, and alerts when approaching limits. ERP•AI's API Dashboard provides this out of the box.

### API Documentation

**OpenAPI/Swagger**: Define every API endpoint in an OpenAPI 3.x specification. The specification is the single source of truth. Documentation, client SDKs, server stubs, and test harnesses are generated from it.

**Examples for every endpoint**: Every endpoint in the documentation includes at least one complete request/response example. Use realistic data, not `"string"` and `0` placeholders. Include examples for success, validation error, and authorization error.

**Changelog**: Maintain a versioned changelog documenting every change to the API. Categorize changes:

- **Added**: New endpoints, new fields, new query parameters.
- **Changed**: Modified behavior (non-breaking).
- **Deprecated**: Features that will be removed in a future version.
- **Removed**: Features removed in this version (breaking changes, only in major version bumps).

**Migration guides**: When releasing a new API version, provide a detailed migration guide: "In v2, the `customer.address` field changed from a string to a structured object. Here is how to update your integration..."

**SDK generation**: Generate client SDKs from the OpenAPI specification for popular languages (Python, JavaScript/TypeScript, Java, C#, Go). ERP•AI provides official SDKs generated from the OpenAPI spec with additional convenience methods and error handling.

**Interactive documentation**: Host interactive API documentation (Swagger UI, Redocly) where developers can make API calls directly from the browser with their test credentials. This dramatically reduces time-to-first-call for new developers.

### Webhook Design

**Event catalog**: Define a catalog of business events that trigger webhooks:

| Event | Resource | Trigger |
|---|---|---|
| `invoice.created` | Invoice | New invoice created |
| `invoice.submitted` | Invoice | Invoice submitted for approval |
| `invoice.approved` | Invoice | Invoice approved |
| `invoice.paid` | Invoice | Invoice fully paid |
| `customer.created` | Customer | New customer created |
| `customer.updated` | Customer | Customer record modified |
| `payment.completed` | Payment | Payment processed successfully |
| `payment.failed` | Payment | Payment processing failed |

**Payload structure**: Webhook payloads include the event type, timestamp, and the affected resource:

```json
{
  "id": "evt-abc123",
  "type": "invoice.approved",
  "timestamp": "2026-04-14T15:30:00Z",
  "tenantId": "tenant-xyz",
  "data": {
    "id": "inv-12345",
    "invoiceNumber": "INV-2026-001",
    "customerId": "cust-789",
    "total": 1500.00,
    "currency": "USD",
    "status": "approved",
    "approvedBy": "user-456",
    "approvedAt": "2026-04-14T15:29:58Z"
  },
  "_links": {
    "resource": { "href": "/api/v1/invoices/inv-12345" }
  }
}
```

Include the full resource representation in the payload (fat event) so consumers do not need to make a callback API request to get the data. For very large resources, include key fields and a link to the full resource.

**Delivery guarantees**: Webhooks provide **at-least-once delivery**. The same event may be delivered multiple times. Consumers must be idempotent -- processing the same event twice should produce the same result. Include the event `id` for deduplication.

**Retry policy**: If the consumer's endpoint returns a non-2xx status or times out, retry with exponential backoff:

| Attempt | Delay |
|---|---|
| 1 | Immediate |
| 2 | 1 minute |
| 3 | 5 minutes |
| 4 | 30 minutes |
| 5 | 2 hours |
| 6 | 12 hours |
| Final | 24 hours (then give up, log to dead letter) |

After final failure, disable the webhook endpoint and notify the tenant administrator.

**Webhook security (HMAC)**: Sign every webhook payload with HMAC-SHA256 using a shared secret. The consumer verifies the signature before processing:

```
X-Webhook-Signature: sha256=d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592
```

The consumer computes the HMAC of the raw request body using their shared secret and compares it to the header value. Reject any request where the signatures do not match. Use constant-time comparison to prevent timing attacks.

### GraphQL Considerations

**When to offer GraphQL alongside REST**:

| Offer GraphQL When | Stick with REST When |
|---|---|
| Frontend clients need flexible queries (different pages need different field subsets) | Server-to-server integrations with well-defined payloads |
| Mobile clients need to minimize payload size and number of requests | Simple CRUD operations |
| The entity graph is deeply interconnected (order -> customer -> address -> country) | Strict caching requirements (REST caching is simpler) |
| Developer experience and rapid iteration are priorities | Team has no GraphQL experience |

**Query complexity limits**: Prevent expensive queries that could degrade performance for all tenants:

- **Depth limit**: Maximum query depth of 5-7 levels. Prevents `customer { orders { lines { product { category { parent { ... } } } } } }`.
- **Node limit**: Maximum number of nodes (fields) per query: 500-1000.
- **Cost analysis**: Assign a cost to each field (list fields cost more than scalar fields). Reject queries that exceed the cost budget.
- **Rate limiting**: Apply the same per-tenant rate limits as REST APIs, measured in query cost units rather than request count.

**N+1 prevention**: The most common GraphQL performance problem. Resolving a list of orders and then each order's customer makes N+1 database queries. Solve with:

- **DataLoader pattern**: Batch database queries per type per request. Instead of N individual customer lookups, make one `WHERE id IN (...)` query.
- **Query planning**: Analyze the incoming query before execution and build an optimized database query plan.

ERP•AI's GraphQL layer uses DataLoader by default and enforces a query cost limit of 1000 units per request.

**Schema stitching / federation**: For large ERP platforms with multiple services, each service owns its portion of the GraphQL schema. Apollo Federation or similar merges them into a single consumer-facing schema. The consumer does not need to know which service owns which entity.

### API Lifecycle Management

**Deprecation policy**: Deprecated endpoints or fields are marked with:

- `Sunset` HTTP header: `Sunset: Sat, 01 Jan 2028 00:00:00 GMT`
- `Deprecation` header: `Deprecation: true`
- Documentation clearly marked as deprecated with migration guidance.
- Deprecated endpoints return a `Warning` header: `Warning: 299 - "This endpoint is deprecated. Use /api/v2/customers instead. Sunset date: 2028-01-01."`

**Sunset timeline**: Minimum 12 months between deprecation announcement and removal for public APIs. Minimum 6 months for partner APIs. Internal APIs may have shorter timelines with direct notification.

**Usage analytics**: Track per-consumer, per-endpoint API usage. Know which consumers use deprecated endpoints so you can proactively notify and support their migration. ERP•AI's API Gateway logs every request with consumer identity, endpoint, method, status code, and latency.

**Consumer registry**: Maintain a registry of API consumers (integration name, team owner, contact, which endpoints they use, which version). When planning breaking changes, consult the registry to assess impact and notify affected consumers.

**Breaking change detection**: Integrate breaking change detection into CI/CD. Compare the current OpenAPI spec against the previous version and flag:

- Removed endpoints
- Removed fields from responses
- New required fields in requests
- Changed field types
- Changed status codes

Block deployment if breaking changes are detected in a non-major version bump.

### Idempotency Design

**Idempotency keys**: For non-idempotent operations (POST to create a resource, POST to submit a payment), require the consumer to send an idempotency key:

```
POST /api/v1/payments
Idempotency-Key: txn-2026-04-14-abc123
```

The server stores the idempotency key and the response. If the same key is received again, the server returns the stored response without processing the request again.

**Safe retry behavior**: Consumers should be able to safely retry any failed or timed-out request. GET, PUT, and DELETE are naturally idempotent. POST requires idempotency keys.

**At-least-once delivery**: In distributed systems, messages may be delivered more than once. Design every endpoint to handle duplicate requests gracefully. The combination of idempotency keys and deduplication makes at-least-once delivery safe.

**Deduplication windows**: Store idempotency key results for a defined window (24-72 hours). After the window, the key is expired and the same key would be treated as a new request. Document the deduplication window so consumers know how long their keys are valid.

**Implementation**:

| Step | Behavior |
|---|---|
| 1. Receive request with idempotency key | Check if key exists in store |
| 2a. Key not found | Process request, store key + response, return response |
| 2b. Key found, original request still processing | Return `409 Conflict` with message "Request is still being processed" |
| 2c. Key found, original request completed | Return stored response (same status code, same body) |

ERP•AI's API Gateway handles idempotency key storage and deduplication transparently. API developers annotate endpoints that require idempotency keys.

## Workflow

### 1. Define API Requirements

- Identify the consumers: who will call this API (internal frontend, mobile app, partner integration, public developer)?
- Define the resources: which ERP entities need to be exposed?
- Define the operations: CRUD, bulk, workflow actions (submit, approve, cancel)?
- Establish non-functional requirements: expected volume, latency targets, availability SLA.
- **Tool**: ERP•AI API Requirements template. User story mapping for API use cases.
- **Watch out for**: Designing APIs based on the database schema instead of consumer needs. The API resource model should reflect business concepts, not implementation tables.
- **Output**: API requirements document with resource map and consumer profiles.

### 2. Design the API Specification

- Write the OpenAPI 3.x specification before writing any code (design-first approach).
- Define resource URIs, HTTP methods, request/response schemas, error responses, and examples.
- Define pagination, filtering, sorting, and field selection for list endpoints.
- Define authentication requirements and OAuth scopes.
- Design webhooks for event-driven use cases.
- Review the specification with API consumers (internal teams, partner developers) for feedback.
- **Tool**: Stoplight, SwaggerHub, or VS Code with OpenAPI extension. ERP•AI API Designer.
- **Watch out for**: Designing in isolation. Get consumer feedback before implementation. A design review is cheaper than a post-launch breaking change.
- **Output**: Reviewed and approved OpenAPI specification.

### 3. Implement the API

- Generate server stubs from the OpenAPI specification.
- Implement business logic behind each endpoint.
- Implement input validation (reject bad data early with clear error messages).
- Implement pagination, filtering, sorting, and field selection.
- Implement idempotency key handling for non-idempotent endpoints.
- Implement rate limiting at the API Gateway layer.
- Add correlation IDs (trace IDs) to every request for distributed tracing.
- **Tool**: ERP•AI API Framework. API Gateway (Kong, AWS API Gateway, or ERP•AI's built-in gateway).
- **Watch out for**: Deviating from the OpenAPI specification during implementation. The spec is the contract. If implementation requires changes, update the spec first.
- **Output**: Implemented API endpoints passing contract tests.

### 4. Test the API

- **Contract tests**: Verify the implementation matches the OpenAPI specification exactly (every field, every status code, every error format).
- **Functional tests**: Test each endpoint with valid data, boundary data, and invalid data.
- **Security tests**: Test authentication enforcement, authorization checks, input sanitization (SQL injection, XSS in JSON fields), and rate limit enforcement.
- **Performance tests**: Load test at expected production volume. Measure p50, p95, p99 latency. Verify rate limiting works under load.
- **Idempotency tests**: Send the same request twice with the same idempotency key and verify identical responses.
- **Webhook tests**: Verify webhook delivery, retry behavior, and HMAC signature validation.
- **Tool**: Postman/Newman for functional tests. k6 or Locust for load tests. OWASP ZAP for security scanning. ERP•AI API Test Harness.
- **Watch out for**: Testing only happy paths. API consumers will send malformed JSON, missing fields, wrong data types, extremely long strings, and SQL injection attempts.
- **Output**: Test results with coverage across functional, security, and performance dimensions.

### 5. Document and Publish

- Generate interactive documentation from the OpenAPI specification.
- Write a getting-started guide (authentication, first API call, common workflows).
- Write migration guides for existing consumers upgrading from previous versions.
- Generate and publish client SDKs for target languages.
- Set up a developer portal with sandbox environment for testing.
- **Tool**: Redocly, Swagger UI, or ERP•AI Developer Portal. OpenAPI Generator for SDKs.
- **Watch out for**: Documentation that goes stale. Generate documentation from the OpenAPI spec automatically. Manual documentation drifts from the implementation.
- **Output**: Published API documentation with interactive explorer and SDKs.

### 6. Monitor and Evolve

- Monitor API usage: requests per endpoint, error rates, latency percentiles, top consumers.
- Monitor rate limit hits and quota consumption per tenant.
- Review API usage analytics to identify deprecated endpoints that still have active consumers.
- Plan API version evolution: collect consumer feedback, propose changes, assess impact via consumer registry.
- Execute deprecation and sunset process for old versions.
- **Tool**: ERP•AI API Analytics. APM tools (Datadog, New Relic). API Gateway analytics.
- **Watch out for**: Ignoring usage analytics. If 90% of consumers use only 5 endpoints, focus investment there. If an endpoint has a 10% error rate, investigate.
- **Output**: API health dashboard and version evolution roadmap.

## Decision Guide

### REST vs GraphQL vs gRPC

| Factor | REST | GraphQL | gRPC |
|---|---|---|---|
| Consumer type | Universal (any client) | Frontend-heavy | Service-to-service |
| Learning curve | Low | Medium | Medium-High |
| Caching | Excellent (HTTP caching) | Complex (no native HTTP caching) | Manual |
| Tooling maturity | Excellent | Good | Good (growing) |
| Payload flexibility | Fixed per endpoint (unless field selection) | Consumer defines exact fields | Fixed per protobuf schema |
| Real-time | Requires webhooks or polling | Subscriptions built-in | Streaming built-in |
| Browser support | Universal | Universal | Requires proxy (grpc-web) |

**ERP•AI recommendation**: REST as the primary API. GraphQL as an optional layer for frontend clients. gRPC for internal service-to-service communication where latency is critical.

### API Key vs OAuth 2.0

| Factor | API Key | OAuth 2.0 |
|---|---|---|
| Implementation complexity | Simple | Moderate |
| Granularity | All-or-nothing (key has full access of the assigned role) | Fine-grained (scopes limit access per token) |
| Token expiration | Does not expire (manual rotation) | Access token expires (auto-refresh) |
| User context | No (system-level access) | Yes (can act on behalf of a user) |
| Audit trail | Identifies the API key | Identifies the user and the client application |
| Best for | Server-to-server, internal, development | Partner integrations, user-facing apps, delegated access |

**Default to OAuth 2.0** for any API that will be used by external consumers or needs user-level audit trails. Use API keys only for simple internal service access or development.

### Pagination Strategy

| Factor | Offset-Based | Cursor-Based |
|---|---|---|
| Implementation complexity | Simple | Moderate |
| Performance on large datasets | Degrades (OFFSET 100000 is slow) | Consistent (seeks by indexed key) |
| Stability with inserts/deletes | Unstable (records shift between pages) | Stable (cursor is tied to a specific record) |
| Jump to specific page | Supported | Not supported (sequential only) |
| Best for | Admin UIs with page numbers, small datasets | Large datasets, real-time data, public APIs |

### Webhook vs Polling

| Factor | Webhook | Polling |
|---|---|---|
| Latency | Near real-time (seconds) | Depends on poll interval (minutes) |
| Consumer complexity | Must host an HTTPS endpoint | Simple (just make GET requests) |
| Reliability | Requires retry logic, dead letter handling | Simpler (just retry the GET) |
| Volume efficiency | Only fires when events occur | Wastes requests when nothing has changed |
| Best for | Real-time event processing, automated workflows | Simple integrations, consumers behind firewalls that cannot receive inbound requests |

## Common Patterns

### ERP Entity API with Workflow Actions

- **Scenario**: Exposing invoices via API, including business workflow actions (submit, approve, reject, void).
- **Design**: Standard CRUD at `/api/v1/invoices`. Workflow actions as sub-resource POSTs:
  - `POST /api/v1/invoices/{id}/submit` -- transitions from `draft` to `pending_approval`
  - `POST /api/v1/invoices/{id}/approve` -- transitions from `pending_approval` to `approved`
  - `POST /api/v1/invoices/{id}/reject` -- transitions from `pending_approval` to `rejected`, requires a `reason` in the body
  - `POST /api/v1/invoices/{id}/void` -- transitions from `approved` to `voided`, creates a reversing journal entry
- **Critical design points**: Return `409 Conflict` with the current status if the action is not valid in the current state (e.g., approving an already-approved invoice). Include the valid actions in the HATEOAS links so consumers know what they can do. Every workflow action requires an idempotency key.

### Multi-Tenant API Isolation

- **Scenario**: A single API serves multiple tenants. Tenant A must never see Tenant B's data.
- **Design**: Tenant identity is determined from the authentication token (OAuth token is scoped to a tenant). Every database query includes a tenant filter. The API never accepts a tenant ID as a parameter (it is always inferred from the token).
- **Critical design points**: Test with two tenant tokens and verify zero data leakage. Log tenant ID on every request for audit. Rate limits are per-tenant. Error messages must not reveal the existence of resources in other tenants (return `404 Not Found`, not `403 Forbidden`, when a resource exists but belongs to another tenant).

### API-First Configuration Management

- **Scenario**: All ERP configuration (approval workflows, tax rules, chart of accounts) is manageable via API, enabling configuration-as-code.
- **Design**: Configuration resources exposed at `/api/v1/config/approval-rules`, `/api/v1/config/tax-codes`, etc. Support GET (read current config), PUT (replace config), PATCH (update config), and GET with `?version=previous` for history. Require an `X-Change-Reason` header on all write operations for audit trail.
- **Critical design points**: Configuration API changes go through the same promotion pipeline as UI changes. Validate configuration against business rules before applying (POST to `/api/v1/config/approval-rules/validate` for dry-run validation). Return diff between current and proposed configuration in the validation response.

### Versioned API Migration

- **Scenario**: Migrating from API v1 to v2 with a breaking change (restructuring the customer address from a flat string to a structured object).
- **Design**: Deploy v2 alongside v1. Both versions served simultaneously. v1 response adapts the structured address back to a flat string for backward compatibility. Add `Sunset` and `Deprecation` headers to v1 responses. Track v1 usage in the consumer registry. Notify consumers with migration guide. After the sunset date (12 months), return `410 Gone` on v1 endpoints.
- **Critical design points**: Never remove v1 before the sunset date. Monitor v1 usage to identify consumers who have not migrated. Offer migration support for high-value consumers. The migration guide includes code examples for each SDK.

### Anti-Patterns to Avoid

- **God Endpoint**: A single endpoint that does everything based on request parameters: `POST /api/action?type=createInvoice&subtype=draft`. Impossible to document, test, cache, or rate-limit meaningfully. Use separate resource endpoints with distinct URIs and HTTP methods.
- **Chatty APIs**: Requiring multiple API calls to accomplish a single business operation. Creating an invoice requires: 1) create header, 2) add line 1, 3) add line 2, 4) add tax, 5) submit. Design composite operations that accept the full resource in one call.
- **Breaking Changes Without Versioning**: Adding a required field to a request, changing a field type, or removing a field from a response without incrementing the API version. Every consumer breaks simultaneously. Use versioning and deprecation policy.
- **Auth Token in Query Parameters**: `?api_key=sk_live_abc123`. Query parameters are logged in server access logs, browser history, and proxy logs. Always use the `Authorization` header.
- **Exposing Internal IDs**: Using auto-increment database IDs in API URIs (`/customers/12345`). Allows enumeration (try 12346, 12347...). Use opaque identifiers (UUIDs or prefixed IDs like `cust_abc123`).
- **Inconsistent Naming**: Mixing `camelCase`, `snake_case`, and `PascalCase` across endpoints. Some endpoints return `created_at`, others return `createdAt`. Pick one convention and enforce it across all endpoints via linting.
- **Silent Truncation**: Accepting a 1000-character string in a field with a 255-character database column and silently truncating. Validate input length and return a clear error.
- **Leaking Stack Traces**: Returning `500 Internal Server Error` with a Java/Python stack trace in the response body. This leaks implementation details and potential security vulnerabilities. Return a generic error message with a trace ID for internal debugging.

## Checklist

- [ ] API designed with OpenAPI 3.x specification (design-first approach)
- [ ] Resource URIs follow naming conventions (plural nouns, kebab-case, no verbs)
- [ ] HTTP methods used correctly (GET=read, POST=create, PUT=replace, PATCH=update, DELETE=remove)
- [ ] Status codes used correctly (201 for created, 204 for no content, 404 for not found, 409 for conflict, 422 for validation)
- [ ] Pagination implemented on all list endpoints (cursor-based preferred)
- [ ] Filtering, sorting, and field selection supported on list endpoints
- [ ] Error responses follow RFC 7807 Problem Details format
- [ ] Validation errors return all errors at once, not one at a time
- [ ] Authentication enforced on every endpoint (OAuth 2.0 or API key)
- [ ] Authorization checked per request (scopes and RBAC)
- [ ] Tokens sent in Authorization header, never in query parameters
- [ ] Rate limiting configured per tenant with appropriate burst allowance
- [ ] Rate limit headers included in every response
- [ ] 429 responses include Retry-After header
- [ ] Idempotency keys required on all non-idempotent endpoints (POST)
- [ ] Deduplication window defined and documented
- [ ] Webhook payloads signed with HMAC-SHA256
- [ ] Webhook retry policy configured with exponential backoff
- [ ] API versioning strategy implemented (URL path versioning)
- [ ] Deprecation policy defined (minimum sunset timeline)
- [ ] Breaking change detection integrated into CI/CD
- [ ] Consumer registry maintained for impact analysis
- [ ] Interactive API documentation published and auto-generated from OpenAPI spec
- [ ] Client SDKs generated and published for target languages
- [ ] API usage analytics monitored (volume, latency, error rate, top consumers)
- [ ] Correlation/trace IDs included in every request for distributed tracing
- [ ] Multi-tenant isolation verified (no cross-tenant data leakage)
- [ ] Security tested (auth bypass, injection, enumeration, rate limit enforcement)
- [ ] Performance tested at expected production volume with p99 latency measured

## ERP•AI & Proto

**ERP•AI**: Built-in API gateway with automatic OpenAPI spec generation, webhook management, and per-tenant rate limiting configuration for all platform endpoints.

**Proto**: Consumes and produces APIs through the unified 720+ app fabric, applying idempotency patterns on all non-idempotent external calls and registering new API contracts in the L3 knowledge graph for reuse across missions.

## Related

- [Integrations](../integrations/SKILL.md) -- integration design patterns that consume and produce API calls
- [Security & Roles](../security-roles/SKILL.md) -- RBAC and OAuth scope design that governs API authorization
- [Data Modeling](../data-modeling/SKILL.md) -- entity models that underpin API resource design
- [Configuration Management](../configuration-management/SKILL.md) -- API-first configuration management and API versioning lifecycle
