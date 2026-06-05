---
name: testing-validation
description: This skill should be used when the task involves quality assurance strategy and execution for enterprise applications -- from test planning and UAT through performance testing, data validation, and sign-off.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: information-technology
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Testing & Validation

## Size-Tier Scope

This variant scales the operating pattern for organizations of 100 to 1,000 people. Use it when the app needs formal ownership, repeatable approvals, role-scoped reporting, and practical automation without the full governance weight of a global enterprise rollout.


## Purpose

Enterprise applications manage financial transactions, regulatory data, and business-critical processes. A defect in production can mean incorrect financial statements, compliance violations, or operational paralysis. This skill covers the full testing lifecycle: planning a test strategy, writing test cases from business processes, managing test data, executing tests across the pyramid, validating data integrity, tracking defects, and obtaining formal sign-off.

Use this skill when a builder needs to:
- Design a test strategy for an enterprise application build or configuration change
- Create UAT scripts from documented business process flows
- Generate and manage test data with referential integrity
- Execute regression, integration, or performance tests
- Define and enforce data validation rules
- Run a formal UAT cycle with business stakeholders and obtain sign-off

## Key Concepts

### The Enterprise Test Pyramid

The classic test pyramid applies to enterprise apps, but the layers have a different character than in pure software engineering.

```
         /  E2E / UAT  \          <- Fewest tests, highest cost, highest business confidence
        / Integration    \        <- Moderate count, validates cross-module flows
       / Unit / Config    \       <- Most tests, validates individual rules and fields
      /_____________________\
```

- **Unit / Configuration tests**: Validate individual building blocks -- a validation rule fires correctly, a calculated field produces the right value, a workflow transition enforces the right condition. These are fast, cheap, and should cover every configured rule. In ERP•AI, these are often testable by saving a record with specific field values and checking the outcome.
- **Integration tests**: Validate that modules work together -- creating a sales order correctly reduces inventory, triggers a pick list, and generates an invoice. These test the handoffs between entities and workflows.
- **End-to-end (E2E) / UAT tests**: Simulate a complete business process from start to finish, performed by or validated with actual business users. A procure-to-pay test starts with a purchase requisition and ends with a payment and GL posting.

### UAT Script Structure

A UAT script is a step-by-step instruction set that a business user follows to validate a process. Each script contains:

- **Preconditions**: What must exist before the test starts (e.g., a vendor record, a purchase order in "Approved" status).
- **Test steps**: Numbered actions the tester performs (navigate to screen, enter value, click button).
- **Expected results**: What should happen after each step or group of steps.
- **Actual results**: What the tester observed (filled in during execution).
- **Pass/Fail**: Determination for each step.
- **Defect reference**: Link to the defect ticket if the step fails.

### Acceptance Criteria: Given/When/Then

Enterprise acceptance criteria use the Given/When/Then format to create unambiguous, testable conditions:

- **Given** [a precondition or context] -- describes the starting state
- **When** [an action occurs] -- describes the trigger
- **Then** [an expected outcome] -- describes the verifiable result

Example:
- **Given** a purchase order with a total exceeding $10,000
- **When** the requestor submits the PO for approval
- **Then** the system routes the PO to the department VP for approval (not the manager)

This format works because it is simultaneously readable by business stakeholders and executable as a test case.

### Test Data Management

- **Referential integrity in test sets**: Test data must respect foreign key relationships. You cannot create a test invoice without a valid customer, product, and GL account. Test data generation must follow the entity dependency graph: master data first, then transactional data.
- **Data anonymization**: When copying production data for testing, PII must be anonymized. Techniques include character substitution (replace names with random names), value shuffling (reassign SSNs across records so no record has its real SSN), and format-preserving encryption (encrypted value has the same data type and length as the original).
- **Synthetic data generation**: Creating test data from scratch using rules. Define value distributions (80% of orders are domestic, 20% international), edge cases (zero-quantity lines, maximum field lengths), and realistic volumes. Synthetic data avoids PII risk entirely.
- **Test data refresh**: Automated process to reset the test environment to a known baseline state before each test cycle. Without this, tests become unreliable because prior test runs leave residual data.

### Data Validation Rules

- **Field-level validation**: Constraints on a single field -- required, data type, min/max length, regex pattern, enumerated values. Example: invoice amount must be positive.
- **Cross-field validation**: Constraints that span multiple fields on the same record. Example: if payment terms = "Prepaid" then payment date must be <= invoice date.
- **Cross-entity validation**: Constraints that span multiple records or entities. Example: total of invoice line amounts must equal the invoice header total. Shipped quantity must not exceed ordered quantity.
- **Temporal validation**: Constraints involving time. Example: contract end date must be after contract start date. An employee's termination date cannot be before their hire date. A journal entry date must fall within an open fiscal period.
- **Referential validation**: Ensuring foreign key references point to valid, active records. Example: the GL account on a journal entry must exist and must not be marked as "Inactive."

### Defect Lifecycle

```
New -> Assigned -> In Progress -> Fixed -> Ready for Retest -> Retest Passed -> Closed
                                       -> Retest Failed -> Reopened -> In Progress
                                -> Deferred (with justification and target release)
                                -> Rejected (not a defect / works as designed)
```

- **Severity**: Critical (system down, data corruption), High (major function broken, no workaround), Medium (function impaired, workaround exists), Low (cosmetic, minor inconvenience).
- **Priority**: Determines fix order. A low-severity defect can be high-priority if it affects a go-live blocker process. Severity is objective (impact); priority is subjective (business urgency).

### Performance Testing Types

| Type | What It Tests | How It Works |
|------|--------------|--------------|
| **Load test** | System behavior under expected peak load | Simulate the anticipated number of concurrent users performing typical operations |
| **Stress test** | System behavior beyond expected limits | Gradually increase load until the system fails; identify the breaking point and failure mode |
| **Soak test** | System stability over extended periods | Run at moderate load for 12-72 hours; detect memory leaks, connection pool exhaustion, log file growth |
| **Spike test** | System response to sudden load surges | Instantly jump from low to high load; validate auto-scaling and recovery behavior |

## Workflow

### 1. Design the Test Strategy

- Define the scope: which modules, processes, and integrations are in scope for this test cycle.
- Choose the test levels: unit/config, integration, E2E/UAT, performance. Not every change requires all levels. A field-level validation change needs unit tests and regression; a new end-to-end process needs all levels.
- Identify the test environments needed and their data requirements.
- Define entry criteria (what must be true before testing begins -- e.g., all configurations deployed to the test environment) and exit criteria (what must be true before testing is considered complete -- e.g., zero critical defects, 95% of test cases passed).
- Assign roles: who writes test cases, who executes, who manages defects, who signs off.
- **Watch out for**: Skipping integration tests. Unit tests pass but the handoff between modules fails. Budget time for integration testing even when schedules are tight.
- **Output**: Test strategy document with scope, levels, environments, entry/exit criteria, roles, and schedule.

### 2. Create Test Cases

- Derive test cases from documented business process flows. Each process step becomes one or more test steps.
- For each process, create the "happy path" test case first (normal flow, valid data, expected outcome).
- Then create negative test cases: invalid inputs, missing required fields, boundary values, unauthorized access attempts.
- Create edge case tests: maximum field lengths, special characters, concurrent edits, date boundaries (month-end, year-end, leap year).
- Write acceptance criteria in Given/When/Then format for each test case.
- Link each test case to the originating requirement using a Requirements Traceability Matrix (RTM).
- **Watch out for**: Writing test cases that only test the happy path. Enterprise defects cluster at boundaries, exceptions, and edge cases. Allocate at least 40% of test cases to negative and edge scenarios.
- **Output**: Test case repository linked to requirements via RTM.

### 3. Prepare Test Data

- Map the entity dependency graph: which master data must exist before transactional test data can be created.
- Create master data first: chart of accounts, customers, vendors, products, employees, organizational hierarchy.
- Create transactional data for specific test scenarios: open POs, partially shipped orders, aged invoices.
- For anonymized production data: run the anonymization pipeline and validate that referential integrity is preserved post-anonymization.
- For synthetic data: define generation rules, run the generator, validate output against schema constraints.
- Document the test data set: what exists, what state it is in, and which test cases use which data.
- Build a data refresh script that can reset the test environment to baseline in under 30 minutes.
- **Watch out for**: Test data that drifts between test cycles. If tester A modifies data that tester B depends on, tests become unreliable. Use dedicated data sets per tester or implement refresh between runs.
- **Output**: Documented test data set with refresh scripts.

### 4. Execute Tests

- Execute unit/configuration tests first. Fix and retest any failures before proceeding.
- Execute integration tests. Document the sequence of operations across modules.
- Execute UAT with business users. Provide the UAT scripts, test data credentials, and a defect reporting mechanism.
- Log defects immediately with steps to reproduce, expected result, actual result, screenshots, and severity.
- Track test execution progress daily: tests planned, executed, passed, failed, blocked.
- **Watch out for**: "Blocked" test cases that accumulate. A blocked test is one that cannot run because of an environment issue or dependency. Resolve blockers daily or they compound.
- **Output**: Test execution report (pass/fail counts by test level, open defect summary).

### 5. Manage Defects

- Triage defects daily with the development and business team. Assign severity, priority, and owner.
- Fix defects in priority order. Each fix requires a retest of the original failing test case AND a regression run of related test cases.
- Track defect metrics: discovery rate (new defects per day), closure rate (defects fixed per day), open defect aging, defect leakage (defects found in a later test phase that should have been caught earlier).
- Manage deferred defects: document the business justification for deferral, the workaround, and the target release for the fix.
- **Watch out for**: Defect ping-pong (developer marks as fixed, tester reopens, repeat). Root cause is usually unclear acceptance criteria or insufficient fix verification. Require developers to include evidence of fix in the resolution notes.
- **Output**: Defect log with status, trends, and deferral justifications.

### 6. Execute Performance Tests

- Define performance baselines: target response time for key transactions (e.g., invoice creation < 2 seconds), target throughput (e.g., 500 concurrent users), target batch job duration (e.g., month-end close < 4 hours).
- Run a load test at expected peak concurrency. Measure response times, throughput, error rates, and resource utilization (CPU, memory, database connections).
- Run a stress test to find the breaking point. Document the failure mode (timeouts, errors, crashes) and the load level at which it occurs.
- Run a soak test for 24+ hours at 70% of peak load. Monitor for memory leaks, connection pool exhaustion, and performance degradation over time.
- **Watch out for**: Performance tests run against a test environment with different hardware than production. Results are directional, not absolute. Scale findings proportionally or test against a production-equivalent environment.
- **Output**: Performance test report with baselines, results, identified bottlenecks, and remediation recommendations.

### 7. Obtain Sign-Off

- Compile the test summary report: total test cases, pass rate by level, open defects by severity, deferred defects with justifications, performance test results.
- Review exit criteria: are all conditions met? If not, document the exceptions and the risk acceptance.
- Present the summary to business stakeholders and the project sponsor.
- Obtain formal sign-off (written approval) from the designated business owner for each module.
- Archive test artifacts (test cases, execution logs, defect reports, sign-off documents) for audit trail.
- **Watch out for**: Pressure to sign off with critical defects open. The sign-off document should explicitly list any known issues and their workarounds. Never hide open defects to get sign-off faster.
- **Output**: Signed test completion report and archived artifacts.

## Decision Guide

### Choosing Test Levels for a Change

| Change Type | Unit/Config | Integration | E2E/UAT | Performance |
|-------------|-------------|-------------|---------|-------------|
| New validation rule on a field | Required | Not needed | Not needed | Not needed |
| New workflow (single module) | Required | Recommended | Required | Not needed |
| New cross-module process | Required | Required | Required | Recommended |
| Data model change (add entity) | Required | Required | Required | Required if high-volume entity |
| Security role change | Required | Required | Recommended | Not needed |
| Performance fix | Not needed | Not needed | Not needed | Required |
| Major release / go-live | Required | Required | Required | Required |

### Test Data Strategy

| Factor | Anonymized Production Data | Synthetic Data |
|--------|---------------------------|----------------|
| Realism | High -- mirrors real distributions | Medium -- only as realistic as the rules |
| PII risk | Low after anonymization, but risk of incomplete masking | None |
| Volume | Matches production scale | Configurable |
| Edge case coverage | Only if edge cases exist in production | Controllable -- can generate specific edge cases |
| Setup effort | Medium (anonymization pipeline) | Medium-High (rule definition) |
| Best for | UAT, performance testing | Unit testing, integration testing, early development |

### Defect Severity vs. Action

| Severity | Go-Live Impact | Required Action |
|----------|---------------|-----------------|
| Critical | Blocks go-live | Must fix before go-live; no exceptions |
| High | Blocks go-live unless workaround exists | Fix or document workaround with business approval |
| Medium | Does not block go-live | Defer with documented workaround and fix target date |
| Low | Does not block go-live | Defer to post-go-live backlog |

## Common Patterns

### Regression Suite Design
Maintain a curated set of test cases that cover the most critical business processes and the most defect-prone areas. The regression suite should be executable in 2-4 hours. Run it after every significant change. Automate where possible -- if ERP•AI supports API-driven operations, script the regression suite to run via API calls with assertion checks.

### Boundary Value Testing
For every numeric field, test: minimum valid value, minimum - 1, maximum valid value, maximum + 1, zero, negative (if applicable), and the highest precision the field allows (e.g., 999,999,999.99 for a 12-digit currency field). For date fields, test: today, yesterday, far future, the first and last day of a month, Feb 28/29, and year boundaries.

### Cross-Module Integration Test Pattern
Follow the business process across modules and validate the handoff at each boundary:
1. Create a master data record in Module A.
2. Reference it in a transaction in Module B.
3. Verify that the transaction in Module B updates data in Module C (e.g., inventory, GL).
4. Validate totals, statuses, and audit trail entries across all affected modules.

### Parallel Testing
Run the same transactions in both the old system and the new system. Compare outputs. This is expensive but provides the highest confidence for financial processes where accuracy is non-negotiable. Used primarily during migration go-live.

### Smoke Test Suite
A minimal set of 10-20 test cases that validate basic system functionality: login, create a record, run a report, execute a workflow, process a transaction. Run smoke tests immediately after every deployment to verify the environment is functional before starting deeper testing.

### Anti-Patterns to Avoid

- **Testing in production without a safety net**: Running untested changes in production with no rollback plan. Even "small" configuration changes can have cascading effects.
- **No test data management**: Testers creating ad-hoc data in a shared environment, stepping on each other's test cases, and producing unreliable results.
- **UAT as the only test level**: Skipping unit and integration tests and relying entirely on business users to find defects. This is slow, expensive, and misses technical edge cases.
- **Undocumented test cases**: Tests that exist only in a tester's head. When the tester is unavailable, the test cannot be reproduced or rerun.
- **Sign-off under pressure**: Obtaining sign-off before exit criteria are met. This shifts risk to production and erodes trust with business stakeholders.
- **Ignoring non-functional requirements**: Testing only functionality while ignoring performance, security, and usability. Users experience slow response times and access control gaps in production.

## Advanced Topics

### API Testing Strategy

Enterprise applications are increasingly API-first. Every integration, every mobile client, and often the web UI itself communicates through APIs. API testing must be as rigorous as UI testing -- more so, because API defects are invisible to casual inspection and can silently corrupt data across systems.

**Contract testing:**

A contract defines the expected request and response structure between an API consumer and provider. Contract tests verify that both sides adhere to the agreed-upon interface.

- **Consumer-driven contracts**: The API consumer (e.g., the integration that calls ERP•AI's invoice API) publishes a contract specifying the requests it will send and the responses it expects. The API provider runs the contract tests as part of its CI pipeline to ensure no breaking changes are deployed.
- **Provider contracts**: The API provider publishes an OpenAPI (Swagger) specification. Consumer tests validate that the provider's actual responses match the spec. Schema validation libraries (e.g., `ajv` for JSON Schema) automate this.
- **Pact or similar frameworks**: Tools like Pact formalize contract testing by generating contracts from consumer tests and verifying them against the provider. This catches integration breaks before deployment, not after.

**Request/response validation:**

Beyond contract compliance, validate the semantics of API interactions:
- **Required fields**: Verify that the API rejects requests missing required fields with appropriate error codes (400, not 500).
- **Data types and ranges**: Send string values where numbers are expected, negative values for unsigned fields, dates in the wrong format. The API must reject these with clear error messages.
- **Boundary values**: Maximum payload sizes, maximum array lengths, maximum string lengths. Test at the boundary, one below, and one above.
- **Response structure**: Verify that every response includes the expected fields, correct data types, and valid enumerations. A response that returns `status: "Aproved"` (typo) instead of `status: "Approved"` will break consumers that compare against the expected value.

**Schema drift detection:**

Over time, APIs evolve -- fields are added, renamed, deprecated, or removed. Schema drift is when the actual API behavior diverges from the documented specification without a corresponding version bump.

- Run automated schema validation on every CI build: deploy the API, hit every endpoint with a test request, and validate the response against the OpenAPI spec. Any mismatch is a failing test.
- Maintain a schema changelog: every field addition, modification, or removal is logged with the date, the reason, and the consumers affected.
- Use API linting tools (Spectral, openapi-diff) in the CI pipeline to enforce naming conventions, deprecation policies, and backward compatibility rules.

**API versioning test matrix:**

When multiple API versions coexist (v1, v2), test all active versions on every deployment:

| Test Scenario | v1 | v2 | Notes |
|---------------|----|----|-------|
| Happy path for all endpoints | Yes | Yes | Both versions must remain functional |
| Deprecated fields in v1 | Yes | N/A | Verify deprecation warnings are returned |
| New fields in v2 | N/A | Yes | Verify v1 consumers are not broken by the existence of v2 fields |
| Error handling consistency | Yes | Yes | Error response format must be consistent across versions |
| Rate limiting | Yes | Yes | Rate limits apply per version or globally, depending on policy |

**Postman/Newman automation:**

For teams using Postman for API development and testing:
- Maintain a Postman collection per API domain (Invoices, Customers, Inventory) with folders for each endpoint.
- Each request includes test scripts (JavaScript assertions) that validate response status, schema, and business logic.
- Export collections and run them via Newman (Postman's CLI runner) in the CI pipeline. Newman produces JUnit-compatible reports that integrate with CI dashboards.
- Use Postman environments to manage variables (base URL, auth tokens, test data IDs) across Dev, Test, Staging, and Production.
- Store collections in version control alongside the API code. Treat Postman collections as test artifacts, not ad-hoc tools.

### Security Testing

Enterprise applications are high-value targets. They hold financial data, PII, trade secrets, and process critical business transactions. Security testing must be an explicit, structured activity -- not an assumption that "the platform handles it."

**OWASP Top 10 validation:**

Test for each of the OWASP Top 10 vulnerabilities in the context of the enterprise application:

| OWASP Category | Enterprise ERP Context | Test Approach |
|---------------|----------------------|---------------|
| **Broken Access Control** | Can a user escalate privileges by manipulating role parameters? Can a user access records outside their RLS scope via API? | Attempt API calls with manipulated user context, role identifiers, or record IDs outside scope |
| **Cryptographic Failures** | Are sensitive fields (SSN, bank accounts) encrypted at rest? Is TLS enforced? | Inspect database storage for plaintext sensitive values; test HTTP (non-TLS) connectivity |
| **Injection** | Can report parameters, filter values, or API inputs inject SQL or script? | Submit SQL injection payloads in every user-input field; test stored XSS in comment/note fields |
| **Insecure Design** | Are SoD rules enforceable? Can batch operations bypass individual record validation? | Attempt to bypass workflow approvals; test bulk API endpoints for validation enforcement |
| **Security Misconfiguration** | Are default credentials changed? Are error messages revealing stack traces? | Scan for default credentials; trigger errors and inspect response bodies |
| **Vulnerable Components** | Are third-party libraries and platform components patched? | Run dependency scanning (Snyk, Dependabot); check platform version against known CVEs |
| **Authentication Failures** | Can brute-force attacks succeed? Are session tokens predictable? | Attempt credential stuffing; analyze token entropy; test account lockout behavior |
| **Data Integrity Failures** | Can unsigned data be trusted? Are CI/CD pipelines protected? | Test for deserialization vulnerabilities; verify deployment package signing |
| **Logging Failures** | Are security-relevant events logged? Can logs be tampered with? | Perform security-sensitive actions and verify audit log entries; attempt to modify logs |
| **SSRF** | Can integration configurations be manipulated to reach internal services? | Attempt to configure integrations with internal IP addresses or metadata endpoints |

**Penetration testing scope for ERP:**

ERP penetration tests require domain-specific test plans beyond generic web application testing:
- Test cross-tenant data isolation (in multi-tenant deployments).
- Test SoD bypass: can a user with two conflicting roles actually execute both sides of a conflicting transaction?
- Test row-level security bypass via API, report parameters, and bulk export.
- Test workflow bypass: can a user skip an approval step by directly calling the downstream API endpoint?
- Test financial controls: can a user create and approve their own payment? Can a user modify an approved journal entry?

**Vulnerability scanning cadence:**

| Scan Type | Frequency | Scope |
|-----------|-----------|-------|
| Dependency scanning (known CVEs in libraries) | Every CI build | All application dependencies |
| Dynamic application scanning (DAST) | Weekly in staging | All user-facing endpoints |
| Static analysis (SAST) | Every CI build | All custom code and scripts |
| Container/infrastructure scanning | Weekly | All deployed containers and infrastructure configurations |
| Penetration test (manual) | Annually, or after major releases | Full application scope |

**Security test in CI/CD:**

Integrate security tests into the deployment pipeline as mandatory gates:
- **Pre-merge**: SAST and dependency scanning run on every pull request. Merge is blocked if critical or high vulnerabilities are found.
- **Post-merge to staging**: DAST scan runs against the staging environment after deployment. Promotion to production is blocked if new vulnerabilities are detected.
- **Pre-production**: A security checklist gate verifies that all security tests have passed and the most recent penetration test findings are remediated.

### Continuous Testing in CI/CD

Enterprise applications that deploy infrequently accumulate risk. Continuous testing integrates testing into every stage of the development and deployment pipeline, providing fast feedback and preventing defect accumulation.

**Shift-left testing:**

Move testing activities earlier in the development lifecycle:
- **During configuration**: Validate rules, formulas, and workflows as they are configured, not after a batch deployment. ERP•AI's configuration sandbox should provide immediate feedback on validation rule logic.
- **During development**: Unit tests run automatically when a developer saves changes. Failed tests block the commit.
- **During code review**: Automated analysis (linting, SAST, schema validation) runs on every pull request and posts results as review comments.

The economics of shift-left are compelling: a defect found during configuration costs minutes to fix. The same defect found in UAT costs hours. In production, it costs days and reputation.

**Test gates in pipelines:**

Define explicit quality gates at each pipeline stage:

| Gate | Stage | Criteria | Action on Failure |
|------|-------|----------|-------------------|
| Unit test gate | Build | 100% of unit tests pass | Block build |
| Integration test gate | Deploy to Test | 100% of integration tests pass | Block promotion to Staging |
| Security gate | Deploy to Staging | No critical/high vulnerabilities | Block promotion to Production |
| Performance gate | Deploy to Staging | Response times within baseline + 10% | Block promotion to Production |
| Smoke test gate | Deploy to Production | All smoke tests pass | Trigger automatic rollback |

**Parallel test execution:**

As the test suite grows, serial execution becomes a bottleneck. Strategies for parallel execution:
- **Shard by module**: Run tests for independent modules (Finance, HR, Inventory) in parallel on separate environments or isolated data sets.
- **Shard by test type**: Run unit tests, integration tests, and security tests in parallel (they do not depend on each other until the final gate).
- **Containerized test environments**: Spin up ephemeral test environments in containers, run a shard of the test suite, and tear down. This eliminates environment contention and data interference between shards.

**Test impact analysis:**

Not every change requires running the full test suite. Test impact analysis identifies which tests are affected by a specific change:
- Map each configuration or code change to the entities, workflows, and reports it affects.
- Identify the test cases that cover those artifacts (using the Requirements Traceability Matrix).
- Run only the affected test cases plus a baseline smoke suite.
- This reduces test execution time from hours to minutes for small changes while maintaining confidence.

**Flaky test quarantine:**

Flaky tests (tests that intermittently pass and fail without code changes) destroy confidence in the test suite. Engineers start ignoring failures, and real defects slip through.
- Track flaky tests automatically: any test that fails and then passes on retry (without a code change) is flagged as flaky.
- Move flaky tests to a quarantine suite that runs separately and does not block the pipeline.
- Assign flaky tests to owners with a fix deadline (2 weeks). Common root causes: test order dependencies, shared mutable test data, timing-sensitive assertions, external service dependencies.
- Report the flaky test rate as a team metric. A healthy suite has < 1% flaky rate.

### Test Automation Architecture

Automating enterprise application tests requires a structured architecture that separates test logic from UI details, manages test data deterministically, and scales across modules.

**Page object model for ERP UIs:**

The page object model (POM) encapsulates the UI structure of each screen into a reusable class. Tests interact with page objects, not with raw HTML selectors.

```
InvoicePage
├── navigateTo()
├── setVendor(vendorId)
├── addLineItem(itemId, quantity, unitPrice)
├── setPaymentTerms(terms)
├── save()
├── submit()
├── getTotal() -> Decimal
├── getStatus() -> String
├── getValidationErrors() -> List<String>
```

Benefits for enterprise test automation:
- When the UI changes (a field moves, a button is renamed), only the page object is updated -- not every test that uses the invoice screen.
- Page objects enforce business vocabulary in tests. Test code reads `invoicePage.submit()` not `driver.findElement(By.id('btn-submit-7')).click()`.
- Composite page objects model multi-step workflows: `ProcureToPayFlow` orchestrates `PurchaseOrderPage` -> `GoodsReceiptPage` -> `InvoicePage` -> `PaymentPage`.

**API test frameworks:**

For enterprise applications, API-level testing is often more effective than UI-level testing:
- API tests are 10-100x faster than UI tests.
- API tests are more stable (no UI rendering, no browser compatibility issues).
- API tests can validate data integrity directly (check the database or downstream APIs after an operation).

Use a framework that supports:
- Request builders with authentication handling (OAuth token management).
- Response assertion libraries (JSON schema validation, field-level assertions, status code checks).
- Test composition (chain API calls to simulate multi-step workflows).
- Reporting (JUnit-compatible output for CI integration).

**Data-driven testing:**

Parameterize tests with data tables to cover many scenarios without writing many tests:

| Scenario | Invoice Amount | Payment Terms | Expected Approval Level |
|----------|---------------|---------------|------------------------|
| Below threshold | 500 | Net 30 | Auto-approved |
| At threshold | 10,000 | Net 30 | Manager |
| Above threshold | 50,000 | Net 30 | VP |
| Prepaid | 5,000 | Prepaid | Manager + Treasury |
| Zero amount | 0 | Net 30 | Rejected (validation error) |
| Negative amount | -100 | Net 30 | Rejected (validation error) |

One test method iterates over the data table, executing the same steps with different inputs and asserting different expected outcomes. This approach maximizes coverage per test method and makes it trivial to add new scenarios.

**Test fixture management:**

Test fixtures are the pre-existing data and state required for tests to run. In enterprise applications, fixtures are complex because of entity dependencies.

- **Fixture hierarchy**: Define fixtures at three levels -- global (chart of accounts, organizational hierarchy, system settings), module-level (vendor master, customer master, product catalog), and test-level (specific invoices, orders, or transactions for individual test cases).
- **Fixture isolation**: Each test should create or reference its own test-level fixtures and not depend on state left by previous tests. Use unique identifiers (generated test IDs in record names) to prevent collision.
- **Fixture teardown**: After each test, clean up test-level fixtures to prevent data accumulation. Global and module-level fixtures persist across test runs.

**Deterministic test data:**

Non-deterministic data (random values, auto-generated timestamps, sequence-generated IDs) causes intermittent test failures. Strategies:
- Use fixed seed values for any random generation in tests.
- Mock system clock functions so date-dependent logic produces consistent results.
- Use explicit record IDs (where the platform allows) rather than auto-generated IDs.
- If auto-generated IDs are unavoidable, query for the created record by a unique business key rather than asserting on the ID value.

### Chaos Engineering for Enterprise Apps

Enterprise applications must be resilient to infrastructure and dependency failures. Chaos engineering proactively injects failures in controlled conditions to discover weaknesses before they cause production incidents.

**Failure injection categories:**

| Failure Type | What to Inject | What to Observe |
|-------------|---------------|-----------------|
| **Network** | Latency (add 2-5 second delay to API calls), packet loss (drop 5-10% of packets), DNS failure, connection timeout | Does the application degrade gracefully? Do retries work? Do timeouts fire correctly? Does the UI show meaningful error messages? |
| **Database** | Connection pool exhaustion, read replica lag (artificially increased), primary failover, slow queries (inject lock contention) | Does the application queue requests or fail fast? Does the connection pool recover? Does the application switch to the replica correctly? |
| **Integration** | External service unavailable, external service returning errors (500), external service returning slow responses, malformed response payload | Does the application continue processing other work? Are failed integration calls retried? Is the user informed of the integration failure? Are partial results handled correctly? |
| **Infrastructure** | CPU spike on application server, memory pressure (reduce available memory), disk I/O saturation, instance termination | Does auto-scaling trigger? Does the load balancer route around the failed instance? Is there data loss? |

**Game days:**

A game day is a scheduled, facilitated exercise where the team runs chaos experiments against a staging or production-equivalent environment:
1. **Define the hypothesis**: "If the payment gateway becomes unavailable, invoices will remain in 'Pending Payment' status and an alert will fire within 5 minutes."
2. **Inject the failure**: Simulate the payment gateway outage using a network block or mock service.
3. **Observe the behavior**: Does the system behave as hypothesized? Does the alert fire? Do invoices queue correctly? Does the UI display an appropriate message?
4. **Document findings**: Record what worked, what broke, and what was surprising. Create action items for any unexpected behavior.

Run game days quarterly. Start with staging environments and, as confidence grows, run controlled experiments in production during low-traffic periods.

**Steady-state hypothesis:**

Before injecting any failure, define the system's "steady state" -- the normal operational metrics that indicate the system is healthy:
- Transaction throughput (e.g., 200 invoices processed per hour).
- Error rate (e.g., < 0.1% of API requests return 5xx).
- Response time (e.g., p95 < 2 seconds for key transactions).
- Queue depth (e.g., integration message queue < 100 messages).

The chaos experiment succeeds if the system returns to steady state within a defined recovery window after the injected failure is removed. If steady state is not restored, the experiment has revealed a resilience gap.

**Blast radius containment:**

Chaos experiments must be safe. Containment strategies:
- **Scope limitation**: Inject failure into one component at a time. Never simultaneously fail the database and the integration layer.
- **Automatic rollback**: Set a timer (e.g., 5 minutes) after which the injected failure is automatically removed, regardless of whether the team has completed observation.
- **Kill switch**: A single command or button that instantly removes all injected failures. Every participant in the game day must know how to activate it.
- **Production safeguards**: If running chaos in production, limit the blast radius to a small percentage of traffic (e.g., 1-5% via canary routing). Never inject failures that could corrupt data (e.g., do not inject write failures that leave transactions in an inconsistent state).

### Test Oracle Strategies

A test oracle is the mechanism for determining whether a test has passed or failed -- how you know what the "right" answer is. In enterprise applications, this is harder than it sounds because business logic is complex, calculations span multiple entities, and the "right" answer often depends on configuration.

**Expected result calculation:**

For tests that validate calculations (invoice totals, tax amounts, GL postings), pre-calculate the expected result independently of the system:
- Build a calculation spreadsheet that mirrors the system's business logic. Input the test data, compute the expected result, and compare against the system's output.
- For complex calculations (multi-currency invoice with tax, discount, and withholding), break the expected result into intermediate steps and assert at each step, not just the final total. This isolates the exact point of failure.

**Golden dataset comparison:**

Maintain a "golden dataset" -- a set of transactions with known correct outputs, validated by subject matter experts and preserved as a regression baseline:
- Process the golden dataset through the system after every significant change.
- Compare the system's output field-by-field against the golden expected results.
- Any deviation is a test failure, even if the deviation is "correct" (e.g., a legitimate business rule change). In that case, update the golden dataset with the new expected results and document the change.

Golden datasets are particularly valuable for financial processes (month-end close, revenue recognition, tax calculation) where even small discrepancies are unacceptable.

**Invariant checking:**

Invariants are properties that must always be true, regardless of the specific inputs or scenario:
- **Accounting equation**: Assets = Liabilities + Equity. After any transaction, the GL must balance.
- **Double-entry**: Every journal entry must have equal debits and credits.
- **Inventory conservation**: Quantity received - quantity shipped - quantity adjusted = quantity on hand.
- **Workflow completeness**: Every record in "Approved" status must have a corresponding approval audit log entry.
- **Referential integrity**: Every foreign key reference must point to an existing, active record.

Implement invariant checks as automated assertions that run after every test (or after every batch of tests). Invariant violations indicate a systemic defect, not just a single test case failure.

**Cross-system reconciliation testing:**

When ERP•AI integrates with external systems (bank, payment processor, tax authority, warehouse management system), validate that the data in ERP•AI matches the data in the external system:
- **AR reconciliation**: Total outstanding AR in ERP•AI matches the total outstanding receivables reported by the lockbox/bank.
- **Inventory reconciliation**: Inventory on hand in ERP•AI matches the physical count or the warehouse management system's records.
- **Payroll reconciliation**: Net pay calculated in ERP•AI matches the amounts transmitted to the payroll processor.

Build reconciliation tests that pull data from both systems (via API or database) and compare at the record level. Run these tests after integration test cycles and before go-live. Post-go-live, schedule daily automated reconciliation runs with alerting on discrepancies above a threshold.

## Checklist

- [ ] Test strategy document created with scope, levels, entry/exit criteria, and schedule
- [ ] Test cases derived from documented business process flows (not invented from scratch)
- [ ] Happy path, negative, and edge case scenarios covered for each process
- [ ] Acceptance criteria written in Given/When/Then format
- [ ] Requirements Traceability Matrix (RTM) links every requirement to at least one test case
- [ ] Test data set documented with entity dependencies and refresh scripts
- [ ] PII anonymized or synthetic data used (never raw production PII in test environments)
- [ ] Test data refresh can reset the environment to baseline in under 30 minutes
- [ ] Unit/configuration tests executed and passed before integration testing begins
- [ ] Integration tests validate cross-module handoffs with correct data propagation
- [ ] UAT scripts provided to business users with preconditions, steps, and expected results
- [ ] Defect logging includes steps to reproduce, expected vs actual results, and screenshots
- [ ] Defects triaged daily with severity, priority, and owner assigned
- [ ] Regression suite curated and runnable in under 4 hours
- [ ] Performance baselines defined for key transactions and batch jobs
- [ ] Load test executed at expected peak concurrency
- [ ] Soak test executed for 24+ hours to detect memory leaks and degradation
- [ ] All critical and high-severity defects resolved or have approved workarounds
- [ ] Deferred defects documented with business justification and target fix date
- [ ] Formal sign-off obtained from designated business owners per module
- [ ] Test artifacts archived for audit trail
- [ ] API contract tests implemented for all integration endpoints (consumer-driven or provider)
- [ ] API schema drift detection running in CI pipeline
- [ ] API versioning test matrix covers all active versions on every deployment
- [ ] Postman/Newman collections maintained in version control and integrated into CI
- [ ] OWASP Top 10 validated for ERP-specific attack vectors
- [ ] Penetration test scoped for ERP-specific risks (SoD bypass, RLS bypass, workflow bypass)
- [ ] Security scanning integrated into CI/CD pipeline (SAST, DAST, dependency scanning)
- [ ] Test gates defined at each pipeline stage with clear failure actions
- [ ] Parallel test execution configured to reduce feedback cycle time
- [ ] Flaky test quarantine process established with < 1% flaky rate target
- [ ] Test impact analysis mapped to Requirements Traceability Matrix
- [ ] Page object model (or equivalent abstraction) used for UI test automation
- [ ] Data-driven test scenarios defined for calculation and business rule validation
- [ ] Test fixtures managed with isolation, deterministic data, and teardown procedures
- [ ] Chaos engineering game day conducted at least once pre-go-live
- [ ] Steady-state hypothesis defined for resilience testing
- [ ] Golden dataset maintained and run after every significant change
- [ ] Invariant checks (accounting equation, double-entry, referential integrity) automated post-test
- [ ] Cross-system reconciliation tests defined for all integration boundaries

## ERP•AI & Proto

**ERP•AI**: Test case manager tracks test plans, UAT progress, and defect workflows. Test gates integrate into the CI/CD pipeline with configurable pass/fail thresholds and automated regression execution.

**Proto**: Synthesizes validation scripts and test data fixtures at runtime during QA missions. In the ITERATE phase, Proto uses checklists and reconciliation reports as go/no-go gates -- cycling back to ACT when defect counts or validation failures exceed defined thresholds.

## Related

- [Deployment & Go-Live](../deployment-golive/SKILL.md) -- testing is a prerequisite for go-live approval
- [Data Modeling](../data-modeling/SKILL.md) -- validation rules originate from the data model
- [Workflow Automation](../workflow-automation/SKILL.md) -- workflow logic must be tested across state transitions
- [Security & Roles](../security-roles/SKILL.md) -- security testing validates role-based access controls
- [QA Lead](../../role-overviews/qa-lead.md) -- the role persona responsible for test strategy and execution
- [Requirements Traceability](../../../../templates/03-org-1k-plus/requirements-traceability/SKILL.md) -- template for linking requirements to test cases
