---
name: configuration-management
description: This skill should be used when the task involves manage ERP configuration as code -- use when designing promotion pipelines, environment management, drift detection, tenant overrides, and release management for enterprise application configuration.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - technical
  type: skill
  scope: internal
---
# Configuration Management

## Purpose

Enterprise ERP systems are defined as much by their configuration as by their code. Business rules, approval thresholds, chart of accounts structures, tax rates, workflow definitions, role assignments, report layouts, and hundreds of other settings shape how the system behaves for each tenant, business unit, and jurisdiction.

Without disciplined configuration management, organizations fall into a familiar trap: production settings drift from what was tested, environments diverge until promotions break, nobody knows who changed a critical threshold or why, and rollbacks are impossible because there is no record of the previous state.

Builders need this skill when:

- Configuration must be promoted reliably from development through testing to production
- Multiple environments (dev, test, staging, prod) must be kept in sync or intentionally diverged
- Tenant-specific overrides must coexist with platform defaults without creating chaos
- Regulatory audits require proof of who changed what configuration, when, and why
- Secrets and credentials must be managed without exposing them in source control or logs
- Configuration drift between environments must be detected and remediated before it causes production incidents
- Release management requires versioning, changelogs, and rollback capability for configuration changes

Bad configuration management is invisible until it is catastrophic. A mismatched tax rate in production, a missing approval workflow after promotion, or a leaked database credential can each cause regulatory violations, financial loss, or security breaches. This skill covers how to prevent those outcomes.

## Start Here: Establish Config Governance

Before promoting any configuration, set guardrails:

- Use the [Requirements Traceability](../../../templates/requirements-traceability/SKILL.md) template to map each config change to a business requirement and test case.
- Use the [Go-Live Checklist](../../../templates/go-live-checklist/SKILL.md) to define deployment gates, rollback requirements, and approval ownership.
- Assign [Solution Architect](../../../roles/solution-architect/SKILL.md) as release design owner and [QA Lead](../../../roles/qa-lead/SKILL.md) as gate validator.

Do these first actions before implementation:

1. Define environment parity rules and approved differences.
2. Define change approval tiers by risk level.
3. Define rollback criteria and the smoke-test suite required after promotion.

## Key Concepts

### Configuration as Code

Configuration as code means treating configuration artifacts with the same rigor as application source code: version-controlled, peer-reviewed, tested, and deployed through automated pipelines.

**Declarative configuration**: Define the desired end state, not the steps to get there. "The approval threshold for purchase orders is $5,000" rather than "Run this SQL UPDATE to change the threshold." Declarative config is idempotent -- applying it twice produces the same result.

**Serialization formats**:

| Format | When to Use | Considerations |
|---|---|---|
| **YAML** | Human-authored configuration. Workflow definitions, feature flags, business rules. | Readable, supports comments, indentation-sensitive (can cause subtle bugs). Default for ERP•AI configuration packages. |
| **JSON** | Machine-generated configuration. API payloads, schema definitions. | No comments, strict syntax, universally parseable. Use for integration config and API-driven configuration. |
| **TOML** | Simple key-value configuration. Environment variables, connection strings. | Flat structure, easy to read, limited nesting. Good for infrastructure config. |
| **HCL** | Infrastructure configuration (Terraform-style). | Rich expression language, good for templated infrastructure config. |

**Version control for config artifacts**: Store all configuration in Git alongside application code, or in a dedicated configuration repository. Every change gets a commit message, a pull request, and a review. ERP•AI provides a Configuration Repository that integrates with Git for version control and supports branching strategies for parallel configuration development.

**Config schema validation**: Define JSON Schema or equivalent validation rules for every configuration file. Validate on commit (pre-commit hooks), on PR (CI pipeline), and before deployment. Catch errors early -- a missing required field in a YAML file should never reach production.

### Environment Management

| Environment | Purpose | Data | Access | Refresh Cadence |
|---|---|---|---|---|
| **Development** | Individual builder workspace. Rapid iteration. | Synthetic or minimal seed data. | Individual developer. | On-demand. |
| **Test / QA** | Functional and regression testing. | Masked production data or curated test datasets. | QA team, automated test runners. | Weekly or per release cycle. |
| **Staging** | Pre-production validation. Mirror of production. | Masked production data, production-like volume. | Release team, UAT participants. | Before each release. |
| **Production** | Live business operations. | Real data. | Operations team, business users. Strict access control. | N/A. |
| **Sandbox** | Experimentation, demos, training. | Synthetic data, may be outdated. | Broad access. | Monthly or on-demand. |

**Environment parity**: Lower environments should mirror production as closely as possible in configuration, infrastructure, and data shape. Differences between environments are the primary source of "works in test, breaks in production" failures.

**Environment provisioning**: Automate environment creation from configuration. A new environment should be spun up from a configuration baseline in minutes, not days. ERP•AI supports environment templates that define the full configuration state for a new environment.

**Data masking for lower environments**: Production data refreshed into lower environments must be masked to protect PII and sensitive financial data. Masking rules should be configuration-driven:

- **Names and emails**: Replace with realistic synthetic values (not "XXXXX").
- **Financial amounts**: Randomize within +/- 20% to preserve statistical distribution.
- **Account numbers**: Hash or replace while maintaining referential integrity.
- **Addresses**: Replace with synthetic addresses in the same region/country.

ERP•AI's Data Masking Engine applies masking rules during environment refresh. Rules are stored as configuration and version-controlled.

### Promotion Pipelines

A promotion pipeline moves configuration from one environment to the next, with gates at each stage.

**Config package design**: A configuration package is a self-contained unit of configuration that can be promoted atomically. It includes:

- Configuration files (YAML/JSON)
- Metadata (version, description, author, dependencies)
- Validation rules (schema checks, business rule checks)
- Rollback instructions (previous state snapshot)

**Dependency resolution**: Configuration packages can depend on other packages. A "Sales Tax Configuration" package depends on the "Chart of Accounts" package (tax accounts must exist). The promotion pipeline resolves dependencies and ensures prerequisites are promoted first. Circular dependencies are rejected at package creation time.

**Promotion gates**:

| Gate | What It Checks | Blocks Promotion If |
|---|---|---|
| **Schema Validation** | Config files conform to schema | Any validation error |
| **Automated Tests** | Unit and integration tests pass | Any test failure |
| **Peer Review** | PR approved by required reviewers | Missing approvals |
| **UAT Sign-off** | Business users confirm functionality | Missing sign-off |
| **Security Scan** | No secrets in config, no insecure settings | Any security finding |
| **Impact Analysis** | Downstream dependencies assessed | Unresolved impact |
| **Change Window** | Promotion occurs during approved change window | Outside window |

**Approval workflows**: Different configuration types require different approval chains. A cosmetic label change may need one approval. A change to financial posting rules requires finance manager + controller approval. ERP•AI's promotion pipeline supports configurable approval matrices based on configuration type and risk level.

### Configuration Drift Detection

Drift occurs when the actual state of an environment diverges from the expected state defined in configuration. Drift is the enemy of reliability.

**Baseline snapshots**: After every successful promotion, capture a snapshot of the environment's full configuration state. This becomes the baseline for drift detection.

**Automated comparison**: Periodically (hourly or daily) compare the live environment configuration against the baseline snapshot. Flag any differences.

**Drift categories**:

| Category | Severity | Example | Response |
|---|---|---|---|
| **Intentional Override** | Info | Tenant-specific feature flag | Document and track. No remediation needed. |
| **Manual Emergency Fix** | Warning | Hotfix applied directly to production | Create a config package retroactively. Promote through pipeline to maintain parity. |
| **Unknown Drift** | Critical | Configuration changed with no record | Investigate immediately. May indicate unauthorized access or system bug. |

**Drift alerts**: Route alerts based on severity. Critical drift triggers an immediate page to the operations team. Warning drift creates a ticket for review within 24 hours. Info drift is logged for audit.

**Remediation**: For unintended drift, either revert the live environment to the baseline or update the baseline to reflect the new intended state (via a proper config package). Never leave drift unresolved.

ERP•AI's Drift Monitor runs on a configurable schedule, compares live state against the configuration repository, and generates drift reports with diff views.

### Release Management

**Semantic versioning for configuration**: Version configuration packages using semver (MAJOR.MINOR.PATCH):

- **MAJOR**: Breaking change. Downstream systems or tenants must take action (e.g., chart of accounts restructure).
- **MINOR**: New configuration added, backward-compatible (e.g., new tax code added).
- **PATCH**: Bug fix or correction to existing configuration (e.g., fixing a tax rate decimal).

**Release notes**: Every configuration release includes human-readable release notes describing what changed, why, and what tenants or users need to know. Auto-generated from commit messages and PR descriptions, then reviewed by the release manager.

**Changelog generation**: Maintain a CHANGELOG that records every configuration release with version, date, author, and summary. ERP•AI auto-generates changelogs from the Git history of the configuration repository.

**Rollback procedures**: Every promotion must be reversible. Rollback uses the baseline snapshot captured before the promotion. Rollback is a first-class operation in the pipeline, not an emergency hack. Test rollback procedures as part of the release process.

**Rollback decision criteria**:

- Critical functionality broken post-promotion: Immediate rollback.
- Minor issues discovered: Assess whether a forward fix (new patch release) is faster and safer than rollback.
- Data-modifying configuration (e.g., posting rules): Rollback may require compensating transactions. Plan for this in advance.

### Tenant-Specific Configuration

In a multi-tenant ERP, configuration exists at multiple levels with inheritance.

**Configuration inheritance hierarchy**:

```
Platform Defaults (ERP•AI baseline)
  └── Edition Defaults (e.g., Manufacturing Edition, Services Edition)
      └── Tenant Configuration (customer-specific)
          └── Business Unit Overrides (division or subsidiary)
              └── User Preferences (individual settings)
```

Each level inherits from the level above and can override specific settings. A tenant that does not override a setting gets the platform default. This reduces configuration sprawl while allowing customization.

**Tenant overrides**: Tenants can override settings that are marked as tenant-configurable. Some settings (security policies, data retention rules) may be locked by the platform and not overridable. ERP•AI's Configuration Schema marks each setting with its override level (platform-only, tenant-configurable, user-configurable).

**Feature flags**: Control feature availability per tenant, per business unit, or per user. Feature flags are configuration, not code. Manage them through the configuration pipeline, not through ad-hoc toggles.

| Flag Type | Lifespan | Example |
|---|---|---|
| **Release flag** | Short (days to weeks) | Hide incomplete feature during development |
| **Ops flag** | Medium (weeks to months) | Enable/disable resource-intensive feature per tenant load |
| **Experiment flag** | Medium | A/B test a new UI workflow |
| **Permission flag** | Long (permanent) | Tenant has purchased the Advanced Analytics module |

**Default management**: Defaults must be explicit, documented, and versioned. When the platform changes a default (e.g., increasing the default session timeout), the change flows to all tenants that have not overridden it. Tenants with overrides are unaffected. Communicate default changes in release notes.

### Configuration Audit Trail

Regulatory compliance (SOX, GDPR, GxP) requires a complete audit trail for configuration changes.

**Who changed what when**: Every configuration change records:

- **Who**: Authenticated user identity (not a shared service account).
- **What**: The specific setting, its previous value, and its new value.
- **When**: Timestamp in UTC.
- **Where**: Which environment and which tenant.
- **Why**: Change justification (linked to a ticket, CR, or business request).
- **How**: Through the configuration pipeline (expected) or direct manual change (exception).

**Before/after snapshots**: For complex configuration changes (workflow redesign, chart of accounts restructure), capture a full before and after snapshot, not just the individual field changes. This enables a complete understanding of the change in context.

**Change justification**: Require a justification for every change that reaches test or production environments. The justification links to a change request, JIRA ticket, or business requirement. Changes without justification are blocked by the promotion gate.

**Audit retention**: Retain audit logs for the period required by applicable regulations (SOX: 7 years, GDPR: duration of processing + retention period, GxP: product lifetime + defined period). ERP•AI's Audit Store provides immutable, tamper-evident storage for configuration audit records.

**Audit queries**: Auditors need to answer questions like: "Show me all changes to the purchase order approval threshold in the last 12 months" or "Who modified the tax configuration for the UK entity in Q4?" Build query capabilities that support these use cases without requiring database access.

### Secrets Management

Secrets (API keys, database passwords, encryption keys, certificates) are configuration but must never be stored or managed like other configuration.

**Vault integration**: Store all secrets in a dedicated secrets vault (HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, or ERP•AI's built-in Secrets Store). The application retrieves secrets at runtime. Configuration files reference secrets by name, never by value.

**Secret rotation**: Automate secret rotation on a schedule (e.g., database passwords every 90 days, API keys every 180 days). The rotation process updates the vault and the consuming service with zero downtime. ERP•AI supports automated rotation with configurable schedules per secret type.

**Environment variable injection**: Secrets are injected into the runtime environment as environment variables or mounted as files. The application code reads from the environment, never from a config file. This prevents secrets from appearing in logs, error messages, or version control.

**The secret-zero problem**: The application needs a credential to access the vault -- but where do you store that credential? Solutions:

| Approach | How It Works | Best For |
|---|---|---|
| **Cloud IAM Role** | The compute instance has an IAM role that grants vault access. No credential stored. | Cloud-hosted workloads (AWS, Azure, GCP). Preferred approach. |
| **Kubernetes Service Account** | The pod's service account is mapped to a vault role. | Kubernetes-hosted workloads. |
| **Wrapped Token** | A one-time-use token is injected at deploy time. The app exchanges it for a renewable token. | On-premises or hybrid deployments. |
| **Hardware Security Module (HSM)** | The master key is stored in hardware. | Highest security requirements (banking, government). |

ERP•AI's deployment pipeline handles secret-zero automatically for cloud-hosted tenants using IAM role binding.

### Configuration Testing

Configuration changes can break production just as surely as code changes. Test configuration with the same rigor.

**Config validation rules**: Beyond schema validation, implement business rules:

- "Tax rate must be between 0% and 100%."
- "Approval threshold must be greater than zero."
- "GL account referenced in posting rule must exist in the chart of accounts."
- "Feature flag dependencies: if Feature B is enabled, Feature A must also be enabled."

**Dry-run deployment**: Apply configuration changes to a shadow copy of the target environment and verify the result without affecting live users. ERP•AI's Dry Run mode applies config to an ephemeral environment, runs validation, and reports the outcome.

**Smoke tests post-promotion**: After every promotion, run a predefined set of smoke tests that exercise the changed configuration. If a tax rate changed, the smoke test creates a test invoice and verifies the tax calculation. If an approval workflow changed, the smoke test submits a test transaction and verifies the routing.

**Regression checks**: Maintain a regression test suite for configuration. When any configuration changes, run the full regression suite to verify that unrelated functionality has not been affected. ERP•AI's Configuration Test Runner integrates with the promotion pipeline to block promotion on regression failure.

## Workflow

### 1. Define Configuration Change

- Identify the configuration setting to change and the business reason.
- Determine which environments and tenants are affected.
- Assess risk: is this a low-risk label change or a high-risk financial rule change?
- Create a change request ticket with justification.
- **Tool**: ERP•AI Change Request template. JIRA or ServiceNow for change tracking.
- **Watch out for**: "Quick changes" that bypass the change process. Every production configuration change must be tracked.
- **Output**: Approved change request with scope and risk assessment.

### 2. Develop Configuration

- Create a feature branch in the configuration repository.
- Make the configuration change in the declarative config files.
- Validate against the config schema (run locally or via pre-commit hook).
- Write or update tests for the changed configuration.
- **Tool**: ERP•AI Configuration Editor. Git for version control. Schema validator in CI.
- **Watch out for**: Editing configuration directly in the UI instead of in the config-as-code files. UI changes bypass version control and audit.
- **Output**: Configuration branch with validated changes and tests.

### 3. Review and Approve

- Open a pull request for the configuration change.
- Reviewers verify the change matches the change request.
- Reviewers check for unintended side effects (does changing this account code break a posting rule?).
- Security review for any changes involving access control or secrets.
- Obtain required approvals based on the change risk level.
- **Tool**: GitHub/GitLab PR workflow. ERP•AI's Configuration Review Board for high-risk changes.
- **Watch out for**: Rubber-stamp approvals. Reviewers must actually understand the change and its impact.
- **Output**: Approved pull request, merged to the main configuration branch.

### 4. Promote Through Environments

- Merge triggers the promotion pipeline.
- Pipeline deploys configuration to the test environment first.
- Automated tests and smoke tests run against the test environment.
- If tests pass, promote to staging with UAT sign-off gate.
- After UAT approval, promote to production during the change window.
- Capture baseline snapshot after successful production promotion.
- **Tool**: ERP•AI Promotion Pipeline. CI/CD platform (GitHub Actions, Jenkins, GitLab CI).
- **Watch out for**: Skipping environments. "It is just a small change" is how production breaks.
- **Output**: Configuration live in production with baseline snapshot captured.

### 5. Verify and Monitor

- Run post-promotion smoke tests in production.
- Verify configuration state matches the expected state (drift check).
- Monitor application behavior for anomalies in the hours following the change.
- If issues are detected, execute rollback using the pre-promotion baseline.
- **Tool**: ERP•AI Drift Monitor. Application monitoring (Datadog, New Relic). ERP•AI's Rollback Manager.
- **Watch out for**: Declaring success immediately after promotion. Monitor for at least one business cycle (e.g., one day for daily processes, one month-end for monthly processes).
- **Output**: Verified production configuration with monitoring confirmation.

### 6. Maintain Audit Trail

- Ensure the change request, PR, approvals, promotion logs, and post-promotion verification are all linked.
- Archive the before/after configuration snapshots.
- Update the configuration changelog.
- Close the change request ticket.
- **Tool**: ERP•AI Audit Store. Configuration changelog in the repository.
- **Watch out for**: Orphaned changes -- configuration in production that cannot be traced back to a change request.
- **Output**: Complete audit trail for the configuration change.

## Decision Guide

### Config-as-Code vs UI-Based Configuration

| Your Situation | Use |
|---|---|
| Configuration is changed rarely by administrators | Config-as-code. Version control and audit trail are critical. |
| Configuration is changed frequently by business users (e.g., price lists) | UI-based with API backend. Still version-controlled via the API, but the UI is the primary interface. |
| Configuration requires technical expertise (posting rules, workflows) | Config-as-code. PR review catches errors that a UI cannot. |
| Configuration is tenant-specific and tenants self-serve | UI-based with guardrails. Tenants configure within platform-defined boundaries. |
| Regulatory requirements mandate change tracking | Config-as-code with full audit pipeline. Non-negotiable. |

### Branching Strategy for Configuration

| Strategy | When to Use | Considerations |
|---|---|---|
| **Trunk-based** | Small team, frequent changes, strong CI. | All changes go to main, deployed via feature flags. Requires excellent automated testing. |
| **GitFlow** | Formal release cadence, multiple parallel releases. | Release branches, hotfix branches. More overhead but clear release management. |
| **Environment branches** | Configuration differs intentionally across environments. | `dev`, `staging`, `prod` branches. Merge direction is always dev -> staging -> prod. Never merge backward. |

**ERP•AI recommendation**: Use **environment branches** for configuration. Configuration is inherently environment-specific (different connection strings, different feature flags, different tenant sets). Environment branches make the promotion path explicit.

### Secrets Management Approach

| Factor | Vault (HashiCorp/Cloud) | ERP•AI Built-in Secrets | Environment Variables |
|---|---|---|---|
| Security posture | Highest. Audit, rotation, encryption at rest. | High. Integrated with platform RBAC. | Medium. Depends on platform security. |
| Operational complexity | High. Requires vault infrastructure. | Low. Built into ERP•AI. | Low. No additional infrastructure. |
| Rotation support | Automated rotation built-in. | Automated rotation via platform. | Manual rotation. |
| Best for | Large enterprises, multi-cloud, strict compliance. | ERP•AI-centric deployments. | Small deployments, development environments. |

## Common Patterns

### Multi-Tenant Configuration Promotion

- **Scenario**: Platform-wide configuration update that affects all tenants (e.g., new tax regulation).
- **Approach**: Create the configuration change at the platform level. Promote through environments as usual. The change inherits down to all tenants that have not overridden the affected settings. For tenants with overrides, generate a tenant-specific impact report and notify the tenant administrator.
- **Critical design points**: Never force-override tenant configuration without tenant consent. Provide a migration window for tenants to update their overrides. Track which tenants have adopted the new configuration and which are pending.

### Emergency Configuration Hotfix

- **Scenario**: A critical configuration error is discovered in production (e.g., incorrect GL posting account causing mis-posted transactions).
- **Approach**: Apply the fix directly to production (break glass). Immediately create a retroactive config package with the fix. Promote the package through the pipeline (test, staging) to ensure environment parity. Update the baseline snapshot to reflect the fix. Document the emergency in the change request with root cause analysis.
- **Critical design points**: Every emergency fix must be backfilled into the pipeline within 24 hours. If emergency fixes accumulate without backfill, environment drift becomes unmanageable. Track emergency fix frequency as a metric -- high frequency indicates pipeline or testing gaps.

### Environment Refresh with Configuration Preservation

- **Scenario**: Refreshing the staging environment with production data while preserving staging-specific configuration (test accounts, debug flags, integration endpoints pointing to sandbox).
- **Approach**: Before refresh, export staging-specific configuration as a package. Refresh the environment with masked production data and production configuration. Re-apply the staging-specific configuration package on top. Run smoke tests to verify the merged state.
- **Critical design points**: Maintain an explicit list of environment-specific configuration that must be preserved during refresh. Automate the export/refresh/reapply cycle. Verify that environment-specific secrets (staging database password) are not overwritten with production secrets.

### Feature Flag Lifecycle

- **Scenario**: Rolling out a new invoicing workflow to tenants incrementally.
- **Approach**: Create a feature flag (`new_invoicing_workflow`) defaulting to `false`. Enable for internal test tenants first. After validation, enable for a pilot group of production tenants. Monitor for issues. Gradually roll out to all tenants. Once 100% rollout is confirmed stable, remove the flag and make the new workflow the default. Clean up the flag from configuration.
- **Critical design points**: Feature flags are temporary. Set an expiration date when creating the flag. Track flag age and alert when flags exceed their expected lifespan. Dead flags (never removed after full rollout) accumulate and create confusion.

### Anti-Patterns to Avoid

- **Snowflake Environments**: Every environment is manually configured and unique. Nobody knows exactly what is in staging vs production. Reproducing a bug requires guessing which configuration differs. Fix: configuration-as-code with environment branches and automated provisioning.
- **Config via UI in Production**: Changing production configuration through the application UI instead of through the promotion pipeline. Bypasses review, testing, and audit. Fix: disable direct UI configuration changes in production (or log and flag them for retroactive pipeline integration).
- **Secrets in Source Control**: API keys, passwords, or certificates committed to Git. Even if removed later, they remain in Git history. Fix: use a secrets vault. Run secret scanning (truffleHog, GitLeaks) in CI to catch accidental commits. Rotate any secret that has ever been committed.
- **Configuration Monolith**: One massive configuration file containing every setting for every module. A change to one setting requires re-deploying all configuration. Fix: decompose configuration into domain-specific packages (finance config, HR config, integration config) with clear boundaries.
- **No Rollback Plan**: Promoting configuration changes without capturing the previous state or testing rollback. When something breaks, the only option is a panicked forward fix. Fix: every promotion captures a baseline snapshot and rollback is tested before go-live.
- **Shared Service Accounts for Changes**: Configuration changes attributed to "admin@system" or "deploy-bot" instead of the actual human who authored the change. Audit trail is useless. Fix: every change must be attributable to a named individual, even if deployed by automation.

## Checklist

- [ ] All configuration stored in version control (Git), not only in the application database
- [ ] Configuration schema defined and validated in CI pipeline
- [ ] Environment branches or equivalent promotion strategy established
- [ ] Promotion pipeline configured with gates (schema validation, tests, review, UAT, security scan)
- [ ] Dependency resolution between configuration packages implemented
- [ ] Approval workflows configured based on change risk level
- [ ] Baseline snapshots captured after every successful promotion
- [ ] Drift detection running on a schedule with alerting
- [ ] Tenant configuration inheritance hierarchy defined and documented
- [ ] Feature flags managed through the configuration pipeline with expiration dates
- [ ] Secrets stored in a vault, never in source control or configuration files
- [ ] Secret rotation automated on a defined schedule
- [ ] Secret scanning enabled in CI (truffleHog, GitLeaks, or equivalent)
- [ ] Audit trail records who, what, when, where, why, and how for every change
- [ ] Audit retention meets regulatory requirements (SOX, GDPR, GxP)
- [ ] Rollback procedures documented and tested
- [ ] Post-promotion smoke tests defined and automated
- [ ] Configuration regression test suite maintained and run on every promotion
- [ ] Environment refresh process preserves environment-specific configuration
- [ ] Data masking rules applied to all non-production environment refreshes
- [ ] Emergency hotfix process documented with mandatory pipeline backfill
- [ ] Configuration changelog maintained and included in release notes

## ERP•AI & Proto

**ERP•AI**: Config packages with environment promotion pipelines, tenant-level settings inheritance, and feature flag management with built-in drift detection.

**Proto**: Manages configuration promotion as structured missions -- applies changes in the ACT phase and runs drift detection in the ITERATE phase, storing validated config baselines in the L3 knowledge graph.

## Related

- [Security & Roles](../security-roles/SKILL.md) -- RBAC policies that govern who can modify configuration and access secrets
- [Integrations](../integrations/SKILL.md) -- integration configuration (endpoints, credentials, mappings) managed through this pipeline
- [Workflow Automation](../workflow-automation/SKILL.md) -- approval workflows that gate configuration promotions
- [Data Migration](../data-migration/SKILL.md) -- data migration configuration packages promoted alongside schema and data changes
