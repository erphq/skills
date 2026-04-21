---
name: security-roles
description: This skill should be used when the task involves design and implement access control, authentication, audit logging, encryption, and compliance-driven security configurations in ERP•AI -- use when defining RBAC, segregation of duties, SSO, field-level security, and regulatory controls.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - technical
  type: skill
  scope: internal
---
# Security & Roles

## Purpose

Security configuration determines who can see what, do what, and when. In enterprise systems, security is not an afterthought -- it is a compliance requirement. Auditors examine it. Regulators mandate it. A misconfigured role can expose financial data, violate privacy laws, or allow fraudulent transactions.

Builders need this skill when:

- Setting up user roles and permissions for a new ERP•AI deployment
- Designing access control for sensitive data (financial records, PII, health data)
- Implementing segregation of duties to prevent fraud
- Configuring single sign-on (SSO) and multi-factor authentication (MFA)
- Meeting compliance requirements (SOX, GDPR, HIPAA, SOC 2)
- Designing API security for integration endpoints
- Setting up audit logging and monitoring

Security is the one area where "it works" is not sufficient. It must also be provably correct, auditable, and aligned with the organization's risk posture.

## Key Concepts

### Role-Based Access Control (RBAC)

RBAC assigns permissions to **roles**, and roles to **users**. Users inherit permissions from their assigned roles.

Core RBAC components:

- **Permission**: A granular right to perform an action on a resource. Example: `Invoice.Create`, `Invoice.Read`, `Invoice.Update`, `Invoice.Delete`, `Invoice.Approve`.
- **Role**: A named collection of permissions that corresponds to a job function. Example: "AP Clerk" has `Invoice.Create`, `Invoice.Read`, `Invoice.Update`. "AP Manager" adds `Invoice.Approve` and `Invoice.Delete`.
- **User**: A person or service account assigned one or more roles.
- **Role hierarchy**: Roles can inherit from parent roles. "AP Manager" inherits all permissions from "AP Clerk" and adds additional ones. Hierarchies reduce duplication but increase complexity -- keep the hierarchy shallow (3 levels max).

RBAC design principles:

- **Least privilege**: Grant the minimum permissions needed for the job function. Do not give "Admin" to everyone.
- **Role per job function**: Model roles after actual job titles/functions in the organization. "Accounts Payable Clerk", "Sales Manager", "Warehouse Operator" -- not generic roles like "User" or "Power User."
- **No permission by default**: Start with zero access and add permissions explicitly.
- **Separate administrative roles**: System administration (user management, configuration) should be a distinct role from business operations.

### Permission Levels

ERP•AI supports permissions at multiple levels of granularity:

| Level | What It Controls | Example |
|---|---|---|
| **Entity-level (CRUD)** | Create, Read, Update, Delete on an entire entity type | AP Clerk can Create and Read Invoices |
| **Field-level** | Read or Write access to specific fields within an entity | AP Clerk can read `invoice_total` but cannot edit it (system-calculated) |
| **Record-level (Row-level)** | Access restricted to specific records based on ownership, department, or other attributes | Sales Rep can only see Opportunities they own or that belong to their territory |
| **Action-level** | Permission to perform specific business actions beyond CRUD | AP Manager can execute the "Approve" action; AP Clerk cannot |

### Field-Level Security

Field-level security (FLS) controls visibility and editability of individual fields.

Use cases:

- **Salary field on Employee**: Visible only to HR and the employee's manager. Hidden from peers and other departments.
- **Cost price on Product**: Visible to Procurement and Finance. Hidden from Sales (who see only the sell price).
- **SSN / Tax ID**: Visible only to HR and Payroll. Masked (last 4 digits) for others with partial access. Fully hidden for everyone else.

FLS configuration in ERP•AI:

- For each sensitive field, define which roles can **read** it, which can **write** it, and which see it **masked** (partial value displayed).
- FLS applies everywhere the field appears: forms, reports, API responses, exports.
- Fields hidden by FLS must also be excluded from search indexes to prevent leaking values through search.

### Row-Level Security (Record Ownership)

Row-level security (RLS) restricts which records a user can access based on record attributes.

Common RLS patterns:

| Pattern | How It Works | Example |
|---|---|---|
| **Owner-based** | User sees only records they own (created or assigned to them) | Sales Rep sees only their Opportunities |
| **Team-based** | User sees records owned by anyone in their team/group | Sales Team sees all team Opportunities |
| **Hierarchy-based** | Manager sees their own records plus all records of their direct and indirect reports | VP of Sales sees all Opportunities under their org |
| **Territory/Region** | User sees records matching their assigned territory | EMEA Sales sees European customers only |
| **Tenant-based** | User sees only records for their tenant/company | Multi-tenant SaaS isolation (always enforced in ERP•AI) |

RLS is enforced at the query level -- the database returns only permitted records. This is more secure than filtering in the application layer.

### Segregation of Duties (SoD)

SoD prevents a single person from controlling all steps of a critical business process. It is a core internal control for fraud prevention and a key requirement of SOX compliance.

SoD examples:

| Process | Conflicting Roles | Why |
|---|---|---|
| Payments | "Create Vendor" + "Approve Payment" | A person could create a fake vendor and approve payments to themselves |
| Purchasing | "Create Purchase Order" + "Receive Goods" + "Approve Invoice" | One person could order goods, confirm receipt, and approve payment without oversight |
| Financial Reporting | "Post Journal Entry" + "Approve Journal Entry" | A person could post and approve fraudulent entries |
| User Management | "Create User" + "Assign Roles" + "Approve Transactions" | A person could create a phantom user, give it approver rights, and use it to approve their own transactions |

**SoD Conflict Matrix**: A table that cross-references all roles and flags which role combinations are prohibited. ERP•AI's Security module includes an SoD conflict detector that alerts administrators when a user is assigned conflicting roles.

SoD resolution options:

- **Prevent**: Block the conflicting role assignment entirely.
- **Alert**: Allow the assignment but generate an alert for the security administrator.
- **Mitigate**: Allow the assignment with a compensating control (e.g., enhanced monitoring, additional approval step for transactions by this user).

### Authentication

Authentication verifies the user's identity.

| Method | How It Works | When to Use |
|---|---|---|
| **Username + Password** | Traditional credentials stored (hashed + salted) in the system. | Standalone deployments without an identity provider. Least preferred. |
| **SSO (SAML 2.0 / OIDC)** | Users authenticate via the organization's Identity Provider (Okta, Azure AD, Google Workspace). ERP•AI receives a signed assertion. | Any organization with an existing IdP. Default recommendation. |
| **Multi-Factor Authentication (MFA)** | After password/SSO, user must present a second factor (TOTP, push notification, hardware key). | All production environments. Mandatory for users with administrative or financial roles. |
| **Passwordless (WebAuthn / FIDO2)** | User authenticates with a biometric (fingerprint, face) or hardware security key. No password. | Modern deployments prioritizing security and UX. Eliminates password-related attacks. |
| **Service Account / API Key** | Non-interactive authentication for integrations and automated processes. | System-to-system integrations. Always pair with IP allowlisting and key rotation. |

ERP•AI supports SAML 2.0 and OIDC for SSO, TOTP and WebAuthn for MFA, and OAuth 2.0 for API authentication. Configure SSO as the primary method; fall back to username/password only for break-glass scenarios.

### Session Management

Session management controls how long a user stays authenticated and what happens when they are idle.

| Setting | Recommendation | Why |
|---|---|---|
| **Session timeout (idle)** | 15-30 minutes for standard users; 5-10 minutes for privileged users | Reduces risk of unattended session misuse |
| **Session timeout (absolute)** | 8-12 hours (one business day) | Forces re-authentication at least daily |
| **Concurrent sessions** | Limit to 2-3 | Detects credential sharing or theft |
| **Session binding** | Bind to IP address and user agent | Prevents session hijacking |
| **Logout behavior** | Destroy session token on logout; do not preserve in browser | Prevents session reuse after logout |

### API Security

APIs exposed by ERP•AI for integrations must be secured separately from UI access.

API security layers:

1. **Authentication**: OAuth 2.0 bearer tokens (preferred) or API keys. Never basic auth for production APIs.
2. **Authorization**: API tokens carry scopes that limit which endpoints and operations are permitted. Scope examples: `invoices:read`, `invoices:write`, `users:admin`.
3. **Rate limiting**: Protect against abuse and accidental overload. Set rate limits per API key/token. Typical: 100-1000 requests per minute depending on the endpoint.
4. **IP allowlisting**: Restrict API access to known IP addresses/ranges for server-to-server integrations.
5. **Input validation**: Validate all inputs against expected types, lengths, and patterns. Reject malformed requests before they reach business logic.
6. **TLS**: All API traffic must be HTTPS. Minimum TLS 1.2. Prefer TLS 1.3.
7. **CORS**: Configure allowed origins for browser-based API consumers. Do not use `*` in production.

### Audit Logging

Audit logs record who did what, when, and from where. They are essential for security investigations, compliance, and operational troubleshooting.

**What to log**:

| Event Category | Examples |
|---|---|
| Authentication events | Login success/failure, logout, MFA challenge, SSO assertion, password reset |
| Authorization events | Permission denied, role assignment change, SoD override |
| Data access | Read of sensitive records (PII, financial), bulk export, report generation |
| Data changes | Create, update, delete on all entities. Log old value and new value for updates. |
| Configuration changes | Role definition changes, workflow changes, integration configuration changes |
| Administrative actions | User creation/deactivation, system setting changes, data migration execution |

**Log format**: Each log entry should contain: `timestamp` (UTC), `user_id`, `user_role`, `action`, `entity_type`, `record_id`, `field_name` (for updates), `old_value`, `new_value`, `source_ip`, `session_id`, `result` (success/failure), `correlation_id`.

**Retention**: Keep audit logs for a minimum period based on regulatory requirements:

| Regulation | Minimum Retention |
|---|---|
| SOX | 7 years |
| GDPR | As long as needed for the purpose, then delete |
| HIPAA | 6 years |
| SOC 2 | 1 year (minimum) |
| General best practice | 3-5 years |

**Tamper-proofing**: Audit logs must be immutable. Users (including administrators) must not be able to modify or delete audit log entries. ERP•AI writes audit logs to an append-only store with cryptographic hash chaining. Optionally export to a SIEM (Splunk, Elastic, Sumo Logic) for independent storage.

### Data Encryption

Encryption protects data confidentiality at rest and in transit.

| Encryption Layer | What It Protects | Implementation |
|---|---|---|
| **In transit (TLS)** | Data moving between client and server, or between services | TLS 1.2+ on all connections. Certificate pinning for mobile apps. |
| **At rest (volume/disk)** | Database files on disk, backups, file storage | AES-256 encryption managed by the infrastructure (AWS RDS encryption, Azure TDE). |
| **Field-level encryption** | Individual sensitive fields (SSN, bank account, health records) | Application-level encryption before storage. Separate encryption keys per tenant. Enables "right to erasure" by destroying the key. |
| **Backup encryption** | Database and file backups | Same encryption as at-rest, with key management for backup lifecycle. |

**Key management**: Use a dedicated key management service (AWS KMS, Azure Key Vault, HashiCorp Vault). Never store encryption keys in application code, config files, or the same database as the encrypted data.

### Compliance-Driven Security Requirements

Different regulations impose specific security requirements.

**SOX (Sarbanes-Oxley)**:

- User access reviews: Quarterly review of who has access to financial systems. Managers must certify that their team members' access is appropriate.
- SoD enforcement: Conflicting roles must be detected and remediated.
- Change management: All configuration changes to financial modules must be logged and approved.
- IT general controls: Password policies, access provisioning/deprovisioning, audit log integrity.

**GDPR (General Data Protection Regulation)**:

- Right to access: Users can request a copy of all their personal data. The system must be able to export a user's PII.
- Right to erasure ("right to be forgotten"): Users can request deletion of their personal data. Field-level encryption enables this by destroying the encryption key.
- Data minimization: Collect only the PII necessary for the business purpose.
- Consent management: Track and enforce consent for data processing.
- Data breach notification: Detect and report breaches within 72 hours. Audit logs enable detection.

**HIPAA (Health Insurance Portability and Accountability Act)**:

- PHI (Protected Health Information) must be encrypted at rest and in transit.
- Access to PHI must be logged and auditable.
- Minimum necessary access: Users see only the PHI needed for their job function (field-level + row-level security).
- Business associate agreements (BAAs) with vendors who handle PHI.

**SOC 2**:

- Security, availability, processing integrity, confidentiality, and privacy controls.
- Requires documented policies, access control procedures, change management, and incident response.
- Annual audit by an independent assessor.

## Workflow

### 1. Identify Security Requirements

- Interview stakeholders to understand the organization's regulatory landscape (SOX, GDPR, HIPAA, SOC 2, industry-specific).
- Document data classification: what data is public, internal, confidential, restricted?
- Identify sensitive entities and fields (PII, financial data, health data, trade secrets).
- Review the organization's existing security policies and standards.
- **Tool**: Security requirements questionnaire, data classification matrix.
- **Watch out for**: Assuming one-size-fits-all security. Different modules (Finance vs Marketing) have different security needs.
- **Output**: Security requirements document with data classification and regulatory mapping.

### 2. Design the Role Model

- List all job functions that will use ERP•AI.
- For each job function, define the entity-level permissions (CRUD per entity).
- Identify fields requiring field-level security and assign read/write/masked access per role.
- Identify record-level security requirements (owner-based, team-based, hierarchy-based).
- Build the role hierarchy (keep it to 3 levels max).
- **Tool**: ERP•AI's Role Designer. Start with a RACI-style matrix (Responsible, Accountable, Consulted, Informed) per entity per role.
- **Watch out for**: Roles that are too broad ("Super User" with all permissions) or too narrow (one role per person). Aim for 8-15 roles for a typical enterprise deployment.
- **Output**: Role definitions with permission sets, documented in ERP•AI.

### 3. Define Segregation of Duties Rules

- Identify critical business processes (payments, purchasing, financial reporting, user management).
- For each process, list the steps and the roles that perform them.
- Build the SoD conflict matrix: which role pairs must not be assigned to the same user.
- Configure SoD rules in ERP•AI (prevent, alert, or mitigate for each conflict).
- **Tool**: ERP•AI's SoD Conflict Detector.
- **Watch out for**: SoD rules that are so strict they block legitimate work. Small organizations may need controlled exceptions with compensating controls.
- **Output**: SoD conflict matrix with resolution strategy per conflict.

### 4. Configure Authentication and Session Management

- Configure SSO with the organization's Identity Provider (SAML 2.0 or OIDC).
- Enable MFA for all users (TOTP or WebAuthn). Require hardware keys for admin roles.
- Set session timeout policies (idle and absolute).
- Configure concurrent session limits.
- Set up break-glass accounts (local admin accounts for IdP outage scenarios). Store credentials in a secure vault with dual-custody access.
- **Tool**: ERP•AI's Authentication Settings, IdP admin console (Okta, Azure AD).
- **Watch out for**: Locking out all users if SSO misconfiguration occurs. Always maintain a break-glass local admin account.
- **Output**: Authentication configuration with SSO, MFA, and session policies.

### 5. Configure Audit Logging

- Enable audit logging for all event categories (authentication, authorization, data access, data changes, configuration, administration).
- Configure log retention periods based on regulatory requirements.
- Set up log export to SIEM for tamper-proof storage and alerting.
- Configure alerts for critical events: multiple failed logins, SoD override, bulk data export, admin role changes.
- **Tool**: ERP•AI's Audit Log Configuration, SIEM integration (Splunk, Elastic).
- **Watch out for**: Logging too verbosely (logging every field-read on high-traffic entities) can create performance issues and storage costs. Focus on sensitive data and critical actions.
- **Output**: Audit logging configuration with retention and alerting rules.

### 6. Implement Encryption

- Verify that TLS 1.2+ is enforced on all connections (ERP•AI does this by default).
- Verify that at-rest encryption is enabled on the database (infrastructure-level).
- Identify fields requiring field-level encryption and configure them in ERP•AI.
- Set up key management in the organization's KMS.
- Test that encrypted fields are readable only by authorized roles and unreadable (not just hidden) to others.
- **Tool**: ERP•AI's Encryption Configuration, KMS console.
- **Watch out for**: Performance impact of field-level encryption. Encrypted fields cannot be searched or indexed by the database. Design accordingly (use surrogate identifiers for lookups).
- **Output**: Encryption configuration with key management procedures.

### 7. Test and Validate

- Test each role by logging in as a test user with that role and verifying: can access permitted entities/fields/records, cannot access restricted ones.
- Test SoD rules: attempt to assign conflicting roles and verify the system blocks or alerts.
- Test authentication flows: SSO, MFA, session timeout, concurrent session blocking.
- Test audit logging: perform actions and verify they appear in the audit log with correct details.
- Run a penetration test or security review if the deployment handles highly sensitive data.
- **Tool**: ERP•AI's Security Test Suite, manual testing with role-specific test accounts.
- **Watch out for**: Testing only positive cases (verifying access works). Negative testing (verifying access is denied) is more important for security.
- **Output**: Security test results with pass/fail for each role and scenario.

### 8. Operationalize

- Document the access provisioning process: how new users get roles assigned (request -> approval -> assignment).
- Document the access deprovisioning process: how departing employees lose access (HR termination triggers automatic deactivation).
- Schedule quarterly user access reviews (SOX requirement).
- Establish an incident response process for security events.
- **Tool**: ERP•AI's User Lifecycle Management, integration with HR system for automated provisioning/deprovisioning.
- **Watch out for**: "Orphaned" accounts -- users who have left the organization but still have active system access. Automate deprovisioning via HR integration.
- **Output**: Security operations procedures, access review schedule, incident response plan.

## Decision Guide

### When to Use Field-Level Security vs Separate Entities

| Factor | Field-Level Security | Separate Entity |
|---|---|---|
| Sensitive fields are a small subset of the entity | Yes -- hide those fields by role | Overkill |
| Entire categories of data have different audiences | Adds too many FLS rules | Yes -- split into separate entities with different permissions |
| Performance impact of FLS is a concern | More fields = more FLS checks per query | No FLS overhead on separated entities |
| Example | Hide `salary` on Employee entity | Separate `EmployeeCompensation` entity accessible only by HR/Payroll |

### SoD: Prevent vs Alert vs Mitigate

| Situation | Approach |
|---|---|
| Critical financial processes in regulated environments (SOX) | **Prevent** -- do not allow conflicting role assignment |
| Important but not critical processes | **Alert** -- allow but notify security team for review |
| Small organizations where one person must wear multiple hats | **Mitigate** -- allow with compensating controls (enhanced monitoring, additional approval steps, periodic reviews) |

### Authentication Method Selection

| Situation | Method |
|---|---|
| Organization has an Identity Provider (Okta, Azure AD, Google Workspace) | SSO via SAML 2.0 or OIDC. Always prefer SSO. |
| No IdP exists | Username + password with mandatory MFA. Plan to adopt an IdP. |
| High-security roles (finance admin, system admin) | SSO + hardware MFA key (FIDO2) |
| Service accounts (integrations, batch jobs) | OAuth 2.0 Client Credentials with IP allowlisting and key rotation |
| External partners with limited access | OAuth 2.0 with scoped tokens, rate limiting, IP allowlisting |

## Common Patterns

### Role Design for a Typical ERP Deployment

Core roles for a mid-sized organization:

- **System Administrator**: Full platform configuration. No business transaction access. Manages users, roles, workflows, integrations.
- **Finance Controller**: Full access to GL, AR, AP, Fixed Assets. Can approve journal entries. Can run financial reports. Cannot create users.
- **AP Clerk**: Create and edit invoices and payments. Cannot approve payments above threshold.
- **AP Manager**: Everything AP Clerk can do, plus approve invoices and payments.
- **AR Clerk**: Create and edit customer invoices and receipts. Cannot issue credit notes above threshold.
- **Sales Manager**: Full access to CRM (Opportunities, Quotes, Orders). Can see pipeline reports. Cannot access Finance modules.
- **Sales Rep**: Own Opportunities and Quotes. Can see only their own records (row-level security).
- **HR Administrator**: Full access to Employee records, compensation, benefits. PII fields visible.
- **HR Viewer**: Can see employee roster (name, department, title) but not compensation or PII.
- **Warehouse Operator**: Create and process inventory transactions (receipts, shipments, transfers). Cannot access finance or HR.
- **Read-Only Auditor**: Read access to all entities. No create/update/delete. Can view audit logs. Time-limited access.

### Automated User Provisioning / Deprovisioning

- HR system is the source of truth for active employees.
- When HR creates a new employee record, an integration fires to create the corresponding ERP•AI user account.
- Role assignment is based on the employee's department and job title (mapped via a role assignment matrix).
- When HR terminates an employee, the integration deactivates the ERP•AI user account immediately.
- Deactivation preserves the user record (for audit trail) but prevents login and removes active sessions.
- Quarterly access review: export all active users with their roles, send to managers for certification.

### GDPR Data Subject Request Handling

- Data subject submits an access or erasure request.
- System generates a PII export (all data linked to the subject's identity across all entities).
- For erasure: field-level encrypted PII fields are "erased" by destroying the encryption key. The record structure remains for referential integrity, but PII values become irrecoverable.
- Audit log records the erasure request, the approver, and the execution timestamp.
- Respond to the data subject within the 30-day regulatory window.

### Anti-Patterns to Avoid

- **Everyone Is Admin**: Granting administrative access broadly because "it's easier." Every user with admin access is a security risk and an audit finding.
- **Role Explosion**: Creating a unique role for every user. Results in hundreds of unmanageable roles. Consolidate to job-function-based roles.
- **Security by Obscurity**: Hiding a menu item but not enforcing server-side permissions. A user who discovers the URL can bypass UI-level restrictions. Always enforce at the API/query level.
- **Shared Accounts**: Multiple users sharing a single login. Destroys audit trail accountability. Every user must have an individual account.
- **No Access Reviews**: Permissions granted and never reviewed. Role creep (accumulating permissions over job changes) is a top audit finding.
- **Logging Everything / Logging Nothing**: Logging every read of every field creates noise and storage cost. Logging nothing leaves you blind during incidents. Log critical actions and sensitive data access.
- **Storing Secrets in Config**: API keys, passwords, encryption keys in configuration files or environment variables visible to developers. Use a secrets manager.
- **Ignoring Service Accounts**: Integration service accounts often have broad permissions and never get reviewed. Treat them like privileged human users: least privilege, rotation, monitoring.

## Advanced Topics

### Key Management & Rotation

Encryption is only as strong as the key management practices surrounding it. A stolen or stale encryption key renders all encrypted data vulnerable, regardless of the algorithm strength.

**Key rotation schedules by key type:**

| Key Type | Rotation Cadence | Rationale |
|----------|-----------------|-----------|
| **TLS certificates** | 90 days (automated via ACME/Let's Encrypt) or 1 year (manual CA-issued) | Short-lived certificates reduce the window of exposure from a compromised private key |
| **API keys / service account tokens** | 90 days | Limits the blast radius of a leaked key; forces integration owners to confirm the integration is still active |
| **Database encryption keys (DEK)** | Annually, or after any suspected compromise | Rotating DEKs requires re-encrypting data; annual cadence balances security with operational cost |
| **Key encryption keys (KEK)** | Annually | KEKs protect DEKs; rotating the KEK re-wraps all DEKs without re-encrypting data |
| **Field-level encryption keys** | Annually, or when a tenant is offboarded | Per-tenant keys enable cryptographic erasure; rotate on schedule or on personnel change in key custodian roles |
| **SSH keys** | 6-12 months | Prevent long-lived credential accumulation on servers |

**Automated rotation workflows:**

Manual key rotation is error-prone and frequently skipped. Automate the rotation lifecycle:

1. **Generation**: The KMS (AWS KMS, Azure Key Vault, HashiCorp Vault) generates the new key version automatically on the rotation schedule.
2. **Distribution**: Applications retrieve the current key version from the KMS at runtime (never cache keys locally for extended periods). The KMS serves both the new key (for encryption) and the previous key (for decryption of data encrypted before rotation).
3. **Re-encryption** (where applicable): A background job re-encrypts data under the new key version. For field-level encryption, this is a phased process -- re-encrypt records in batches during low-traffic windows.
4. **Retirement**: After all data has been re-encrypted under the new key and the grace period has elapsed (typically 2x the rotation interval), the old key version is disabled, then destroyed.

**Key escrow and recovery:**

For field-level encryption keys that protect business-critical data, establish a key escrow procedure:
- Split the key recovery material using Shamir's Secret Sharing (minimum 3-of-5 threshold). Distribute shares to separate custodians in different departments (e.g., CISO, Legal, Finance).
- Store escrow material in physically separate, secure locations (bank safety deposit boxes, dedicated HSMs).
- Test the recovery procedure annually -- assemble the custodians and verify that the key can be reconstructed.
- Document the circumstances under which key recovery is authorized (e.g., primary KMS failure, legal discovery request, business continuity event).

**HSM integration:**

Hardware Security Modules (HSMs) provide tamper-resistant key storage and cryptographic operations. For organizations handling highly sensitive data (financial institutions, healthcare, government):
- Store root keys (KEKs) in FIPS 140-2 Level 3 (or higher) HSMs.
- Cryptographic operations (encryption, decryption, signing) are performed inside the HSM -- keys never leave the HSM boundary.
- Cloud-managed HSMs (AWS CloudHSM, Azure Dedicated HSM) provide the security of dedicated hardware without the operational burden of on-premises appliances.
- Configure HSM high availability (multi-AZ clusters) to prevent key access from becoming a single point of failure.

### Privileged Access Management (PAM)

Privileged accounts -- system administrators, database administrators, security administrators -- have the power to bypass controls, access all data, and modify the system itself. They are the highest-value targets for attackers and the highest-risk accounts for insider threats.

**Break-glass procedures:**

Break-glass accounts are emergency-access accounts used when normal authentication (SSO, MFA) is unavailable. They must be tightly controlled:
- Store break-glass credentials in a PAM vault (CyberArk, HashiCorp Vault, AWS Secrets Manager) with dual-custody access -- two authorized individuals must simultaneously authenticate to retrieve the credentials.
- Break-glass accounts bypass SSO but still require MFA (stored separately from the primary MFA).
- Every use of a break-glass account triggers an immediate alert to the security team and the CISO.
- After each use, rotate the break-glass credentials immediately and document the reason for use, the actions performed, and the duration of the session.
- Test break-glass procedures quarterly to ensure they work when needed. An untested break-glass procedure is a liability, not a safety net.

**Just-in-time (JIT) access:**

Instead of granting standing privileged access, provision elevated permissions only when needed and for a defined duration:
- A developer requests production database read access for 2 hours to investigate a bug.
- The request goes through an approval workflow (manager + security team).
- Upon approval, the system grants the elevated role with an automatic expiration timestamp.
- After the time window closes, the elevated role is automatically revoked -- no manual cleanup required.
- All actions performed during the JIT window are logged with enhanced detail (including database queries executed).

JIT access reduces the attack surface from "always-on privileged access for 20 admins" to "elevated access for 1 admin for 2 hours, 3 times per month."

**Privileged session recording:**

For critical administrative actions, record the entire session (screen recording, keystroke logging, command history):
- Database administration sessions (DDL changes, bulk data operations).
- Security configuration changes (role modifications, SoD overrides).
- Infrastructure access (SSH sessions to production servers).

Session recordings are stored immutably and retained according to the audit log retention policy. They are searchable by user, timestamp, and system accessed. Session recording serves as both a deterrent (admins know they are being recorded) and an investigation tool (post-incident forensic analysis).

**Admin account lifecycle:**

- **Separate accounts**: Administrators must have two accounts -- a standard account for daily work (email, meetings, non-privileged tasks) and a privileged account for administrative actions. The privileged account has a distinct naming convention (e.g., `adm-jsmith`) and stricter session policies (5-minute idle timeout, no persistent sessions).
- **No shared admin accounts**: Every administrative action must be attributable to a named individual. Shared accounts like `admin`, `root`, or `sysadmin` are prohibited for interactive use. If a shared service account exists for automation, it must be fully logged and its credentials stored in the PAM vault.
- **Privileged account reviews**: Review privileged accounts monthly (not quarterly like standard accounts). Verify that each privileged account is still needed and that the assigned permissions are still appropriate.

### Zero Trust Architecture

Traditional network-based security ("inside the firewall is trusted, outside is untrusted") fails in a world of cloud applications, remote workers, and API-driven integrations. Zero Trust assumes that no user, device, or network location is inherently trusted.

**Core principles applied to ERP•AI:**

1. **Verify explicitly**: Every access request is authenticated and authorized based on all available signals -- identity, device health, location, time of day, risk score. A valid SSO session alone is not sufficient if the device is unmanaged or the access pattern is anomalous.
2. **Least-privilege access**: Grant the minimum permissions necessary (this is standard RBAC) but also apply contextual restrictions -- a user may have `Invoice.Approve` permission but that permission is only exercisable from a managed device on the corporate network or VPN.
3. **Assume breach**: Design controls as if an attacker is already inside the network. Encrypt data in transit between internal services (not just at the perimeter), segment network access, and monitor for lateral movement.

**Microsegmentation:**

Instead of a flat network where any internal system can reach any other, segment the network into zones with explicit access rules:
- The ERP•AI application tier can reach the database tier on port 5432 only.
- The integration tier can reach the application tier's API endpoints only.
- End-user devices can reach the application tier's HTTPS endpoint only.
- No tier can reach the audit log store directly -- logs are pushed via a one-way channel.

Microsegmentation limits lateral movement: if an attacker compromises the integration tier, they cannot reach the database directly.

**Continuous verification:**

Authentication is not a one-time event at login. Continuously re-evaluate the trust level throughout the session:
- **Step-up authentication**: Require MFA re-verification for high-risk actions (e.g., approving a payment over $100K, modifying security roles, exporting bulk data) even if the user has an active, authenticated session.
- **Risk-based session evaluation**: Continuously monitor for anomalies during the session -- sudden IP change (session hijacking indicator), unusual access patterns (visiting screens the user has never accessed before), or impossible travel (login from New York, then from Tokyo 30 minutes later). If the risk score exceeds a threshold, force re-authentication or terminate the session.
- **Device posture checks**: At each access request, verify that the device meets security requirements (OS patched, disk encrypted, endpoint protection active, not jailbroken/rooted). Deny access from non-compliant devices or restrict to read-only mode.

**Identity-centric perimeter:**

The security perimeter is the identity, not the network. All access policies are defined in terms of "who" (user identity + role + device trust + context), not "where" (IP address, network segment). This enables secure access from any location without a VPN, provided the identity verification and device posture checks pass. The identity provider (Okta, Azure AD) becomes the central policy enforcement point, and ERP•AI integrates with it for every access decision.

### OAuth Token Lifecycle

OAuth 2.0 is the standard for API authentication in ERP•AI integrations. Improper token handling is one of the most common security vulnerabilities in enterprise integrations.

**Access token best practices:**

- **Short-lived**: Access tokens should expire in 15-60 minutes. Short lifetimes limit the damage from a stolen token.
- **Opaque or JWT**: Opaque tokens require the resource server to validate against the authorization server on every request (more secure, higher latency). JWT tokens are self-contained and verifiable without a network call (lower latency, but cannot be revoked before expiry unless combined with a token blocklist).
- **Scoped**: Every access token carries explicit scopes that limit which API endpoints and operations are permitted. A token scoped to `invoices:read` cannot write invoices, even if the underlying user has write permissions. Scope is the OAuth-level enforcement of least privilege.

**Refresh token rotation:**

Refresh tokens are long-lived credentials used to obtain new access tokens without re-authenticating the user. They are high-value targets:
- **Rotate on use**: Every time a refresh token is used to obtain a new access token, the authorization server issues a new refresh token and invalidates the old one. If an attacker steals and uses the old refresh token, the legitimate user's next request fails (because the old token was invalidated), and the security team is alerted.
- **Bind to client**: Refresh tokens are bound to the specific client (application) that requested them. A refresh token issued to the mobile app cannot be used by a different client.
- **Absolute expiry**: Even with rotation, refresh tokens should have an absolute maximum lifetime (e.g., 30 days). After that, the user must re-authenticate fully. This limits the window of persistent unauthorized access.

**Token binding:**

Bind tokens to the specific TLS connection or device that requested them. A bound token is useless if intercepted and replayed from a different connection. Token binding is not yet universally supported but should be enabled where the infrastructure allows it (mTLS environments, certificate-based client authentication).

**Token revocation:**

Implement an immediate revocation mechanism for both access tokens and refresh tokens:
- **User-initiated**: A user can revoke all active tokens (e.g., "Sign out everywhere").
- **Admin-initiated**: A security administrator can revoke all tokens for a specific user (e.g., when an account compromise is suspected) or a specific integration (e.g., when a vendor relationship ends).
- **Event-driven**: Automatically revoke tokens when: a user is deactivated, a user's role changes, an integration's API key is rotated, or a security incident is declared.

For JWT access tokens that cannot be directly revoked (they are self-validating), maintain a server-side token blocklist that is checked on each request. Accept the minor performance cost as a security necessity.

**PKCE for public clients:**

Public clients (mobile apps, single-page applications) cannot securely store a client secret. Use the Proof Key for Code Exchange (PKCE) extension to OAuth 2.0:
- The client generates a random `code_verifier` and derives a `code_challenge` from it.
- The authorization request includes the `code_challenge`.
- The token request includes the `code_verifier`, which the server validates against the stored challenge.
- This prevents authorization code interception attacks, where a malicious app intercepts the authorization code and exchanges it for tokens.

PKCE should be mandatory for all public clients and is recommended even for confidential clients as a defense-in-depth measure.

### Insider Threat Detection

External attackers get the headlines, but insider threats -- malicious or negligent employees with legitimate access -- cause some of the most damaging security incidents in enterprise environments. Detection is harder because insiders are authorized users performing actions that look individually legitimate.

**Behavioral analytics:**

Establish a behavioral baseline for each user based on their historical activity patterns:
- Which entities and records they typically access.
- What time of day they typically work.
- What volume of records they typically view or modify per day.
- Which reports they typically run.

Flag deviations from the baseline: a finance clerk who normally accesses 50 records per day suddenly accessing 5,000; a user who normally works 9-5 accessing the system at 2 AM; a sales rep accessing customer records outside their territory.

Behavioral analytics requires a SIEM or UEBA (User and Entity Behavior Analytics) platform that ingests ERP•AI's audit logs and applies anomaly detection algorithms. The output is a risk score per user that updates continuously.

**Access pattern anomalies:**

Specific patterns that warrant investigation:

| Pattern | Potential Indicator | Response |
|---------|-------------------|----------|
| Bulk record access (hundreds of records viewed in minutes) | Data reconnaissance or exfiltration | Alert security team; if confirmed, suspend access |
| Access to records outside role scope (e.g., HR data by a sales user) | Privilege escalation or misassigned role | Verify role assignment; investigate if role is correct |
| Sequential access to all records in a table | Data scraping / export preparation | Alert and correlate with export activity |
| Access from unusual location or device | Account compromise | Force re-authentication; verify with the user |
| Activity during non-business hours (for roles that do not normally work off-hours) | Unauthorized access using stolen credentials | Alert and investigate |
| Rapid privilege changes followed by data access followed by privilege reversion | Deliberate abuse of admin access | High-priority investigation; preserve forensic evidence |

**Data exfiltration signals:**

Monitor for patterns that suggest data is being extracted from the system:
- Large report exports (CSV/Excel) exceeding normal volumes.
- Screen scraping indicators (rapid, systematic navigation through records).
- API calls with unusually large result sets from a user's personal API token.
- Email forwarding rules that route system notifications to external addresses.
- Print volume spikes for specific reports.

Combine exfiltration signals with access pattern anomalies for higher-confidence alerts. A single large export might be legitimate; a large export at 2 AM from an unusual IP address after viewing records outside the user's normal scope is a high-confidence alert.

**Canary records and honeypot fields:**

Plant deliberately fake records or fields in the database that no legitimate user would ever access:
- A canary vendor record with a name like "ZZ_Test_Vendor_DO_NOT_USE" that is hidden from normal UI views but accessible via direct database queries or API calls. Any access to this record triggers an immediate alert.
- A honeypot field on the employee record (e.g., a hidden "emergency_ssn" field that duplicates the real SSN field). Any query or export that includes this field indicates unauthorized data access or an overly permissive API response.
- Canary records in each sensitive table (compensation records, customer payment details, trade secrets). Access is monitored in real-time. False positive rate is near zero because no legitimate business process touches these records.

Canary and honeypot strategies are a low-cost, high-signal complement to behavioral analytics. They do not detect all insider threats, but when they fire, the signal is almost always actionable.

### Vendor & Third-Party Access

Enterprise applications inevitably involve third-party access -- implementation partners, support vendors, integration providers, and auditors. Each external party expands the attack surface and introduces supply chain risk.

**Third-party risk assessment:**

Before granting any third party access to ERP•AI, conduct a risk assessment:
- **Data sensitivity**: What data will the third party access? PII, financial records, trade secrets? Higher sensitivity = stricter controls.
- **Access scope**: Does the vendor need full system access or a limited scope? Define the minimum access required for their function.
- **Security posture**: Does the vendor have SOC 2 Type II certification? What is their incident response capability? Have they had breaches?
- **Contractual protections**: Is there a data processing agreement (DPA), non-disclosure agreement (NDA), and liability clause for security incidents?

**Limited-scope service accounts:**

Never give a vendor a named user account with standard employee permissions. Instead:
- Create a dedicated service account with permissions scoped to exactly the entities, fields, and operations the vendor needs. Nothing more.
- Apply IP allowlisting to restrict the service account to the vendor's known IP ranges.
- Enable enhanced audit logging for the service account -- log every action, including read access (which may be too verbose for regular users but is appropriate for third-party accounts).
- Assign a descriptive naming convention: `svc-vendor-acme-integration` rather than `integration-user-1`.

**Time-boxed access:**

Third-party access should never be perpetual:
- Implementation partners: Access expires at project completion plus a defined handover period (e.g., 30 days).
- Support vendors: Access is granted per support ticket via JIT provisioning. The vendor requests access, the customer approves, and the access expires after a fixed window (e.g., 4 hours). If the issue is not resolved, the vendor requests an extension.
- Auditors: Access is granted for the audit period only (e.g., 2-4 weeks for an annual audit). The account is disabled immediately after the audit closes.
- Integration providers: Ongoing access is permitted only for active integrations. Conduct quarterly reviews to verify that each vendor's integration is still in use and their access is still appropriate.

**Vendor audit trail:**

Maintain a dedicated audit report for third-party activity:
- Filter the audit log by service account or vendor-tagged user accounts.
- Report on: what data was accessed, what changes were made, when access occurred, and from which IP addresses.
- Share the vendor audit report with the vendor's account manager quarterly as a transparency measure. Vendors who know their activity is monitored behave more carefully.
- Retain vendor audit logs for the duration of the contract plus 2 years.

**Supply chain security:**

Third-party integrations introduce code and data flows that you do not control:
- **API contract enforcement**: Define strict API schemas for vendor integrations and validate all incoming data against the schema. Reject malformed payloads rather than attempting to process them.
- **Dependency scanning**: If the vendor provides code that runs within your environment (plugins, extensions, scripts), scan it for known vulnerabilities before deployment and on a regular cadence.
- **Network segmentation**: Vendor integration endpoints should run in an isolated network segment with access only to the specific ERP•AI APIs they need. They should not have network visibility to internal services, databases, or other integrations.
- **Incident notification clause**: The vendor contract must include a clause requiring the vendor to notify you within 24-48 hours of any security incident that may affect your data or access. This is non-negotiable.

## Checklist

- [ ] Data classification completed (public, internal, confidential, restricted)
- [ ] Regulatory requirements identified (SOX, GDPR, HIPAA, SOC 2)
- [ ] Job functions inventoried and mapped to roles
- [ ] Role definitions created with entity-level CRUD permissions
- [ ] Field-level security configured for sensitive fields (PII, financial, health data)
- [ ] Row-level security configured (ownership, team, hierarchy, territory patterns)
- [ ] Role hierarchy designed (max 3 levels)
- [ ] Segregation of duties conflict matrix built and enforced
- [ ] SoD resolution strategy defined per conflict (prevent, alert, mitigate)
- [ ] SSO configured with organizational IdP (SAML 2.0 or OIDC)
- [ ] MFA enabled for all users (hardware key for admin/financial roles)
- [ ] Session timeout policies set (idle: 15-30 min, absolute: 8-12 hours)
- [ ] Break-glass local admin account created and secured
- [ ] API authentication configured (OAuth 2.0 tokens with scopes)
- [ ] API rate limiting and IP allowlisting configured
- [ ] Audit logging enabled for all critical event categories
- [ ] Audit log retention set per regulatory requirement
- [ ] Audit log export to SIEM configured
- [ ] Alerts configured for critical security events (failed logins, SoD overrides, bulk exports)
- [ ] TLS 1.2+ enforced on all connections
- [ ] At-rest encryption verified on database
- [ ] Field-level encryption configured for sensitive fields
- [ ] Encryption key management via KMS
- [ ] Each role tested (positive and negative access scenarios)
- [ ] Access provisioning process documented (request -> approve -> assign)
- [ ] Access deprovisioning automated via HR integration
- [ ] Quarterly access review process established
- [ ] Incident response plan documented
- [ ] Penetration test / security review completed (if applicable)
- [ ] Key rotation schedules defined by key type (TLS, API, DEK, KEK, field-level)
- [ ] Automated key rotation workflows configured in KMS
- [ ] Key escrow procedure established with Shamir's Secret Sharing and tested annually
- [ ] HSM integration configured for root keys (if applicable)
- [ ] Break-glass credentials stored in PAM vault with dual-custody access
- [ ] Just-in-time (JIT) access workflow configured for privileged operations
- [ ] Privileged session recording enabled for admin and DBA sessions
- [ ] Separate admin accounts created for all privileged users (adm- prefix)
- [ ] Privileged account reviews scheduled monthly
- [ ] Zero Trust controls implemented: step-up authentication, device posture checks, continuous verification
- [ ] Microsegmentation enforced between application tiers
- [ ] OAuth access token lifetime set to 15-60 minutes with scoped permissions
- [ ] Refresh token rotation enabled (new token issued on each use)
- [ ] PKCE enforced for all public OAuth clients
- [ ] Token revocation mechanism implemented and tested
- [ ] Behavioral analytics baseline established for user activity patterns
- [ ] Canary records planted in sensitive tables with real-time access monitoring
- [ ] Data exfiltration monitoring configured (bulk exports, API large result sets, off-hours access)
- [ ] Third-party risk assessment completed for all vendor integrations
- [ ] Vendor service accounts created with limited scope, IP allowlisting, and enhanced logging
- [ ] Time-boxed access configured for all third-party accounts with automatic expiry
- [ ] Vendor audit trail report scheduled (quarterly)

## ERP•AI & Proto

**ERP•AI**: RBAC configuration, field-level security, and SoD matrix builder are managed through the platform's security console. Audit logs capture all access and configuration changes with tamper-evident storage and configurable retention.

**Proto**: Operates within the RBAC constraints of the requesting user's security context. High-risk security changes -- role assignments, SoD overrides, privileged access grants -- trigger human-in-the-loop approval gates before Proto proceeds to the ACT phase.

## Related

- [Data Modeling](../data-modeling/SKILL.md) -- security roles protect the entities and fields defined in the data model
- [Workflow Automation](../workflow-automation/SKILL.md) -- approval workflows enforce security controls (approval chains, SoD in action)
- [Integrations](../integrations/SKILL.md) -- API security, service account management, and credential storage
- [Data Migration](../data-migration/SKILL.md) -- security controls for migration staging data and production loads
