---
name: it-plumbing
description: This skill should be used when the task involves enterprise IT — application architecture, integrations, data infrastructure, security, observability, change + release management, deployment, DR, testing, and platform engineering that supports every other business department.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: it-plumbing
  type: department-overview
  scope: internal
---
# Information Technology

## Purpose

Information Technology (IT) is the department that **builds, integrates, and operates the software systems every other department depends on**. Unlike domain departments that own business processes (payroll, AP, sales pipeline), IT owns the *platform* — the data model, the integrations, the security posture, the observability, the release pipeline, the disaster recovery. Every business skill elsewhere in this tree has an IT dependency; IT is the cross-cutting function that makes the rest work.

The work: **design systems that support business capabilities, integrate them cleanly, secure them appropriately, deploy them reliably, observe them continuously, recover them quickly when things break, and evolve them without breaking production.** Unlike business departments, IT effectiveness is measured in stability + velocity + cost-efficiency rather than direct revenue; but poor IT is felt immediately by every other department.

## How this department is structured

IT at scale typically organizes around these functional axes:

- **Application & Product Engineering**: Building and maintaining the systems themselves
- **Data Engineering**: Data infrastructure, pipelines, warehouses, analytics platforms
- **Infrastructure & Platform**: Cloud, networking, Kubernetes, databases, observability stack
- **Security**: AppSec, CloudSec, identity, compliance, incident response
- **Integration**: APIs, iPaaS, webhooks, middleware between systems
- **IT Service Management (ITSM)**: Internal-user support, asset management, help desk
- **Site Reliability / DevOps**: Deployment pipelines, observability, incident response, on-call

At sub-100-people scale, one or two engineers wear all these hats. At 100–1k, specialization begins (security engineer, data engineer, platform team lead). At 1k+, distinct teams form with formal org structure.

## Role-overviews

Inside `role-overviews/`, you'll find reference docs for the IT implementation roles that typically own distinct cross-skill responsibilities:

- [Solution Architect](role-overviews/solution-architect.md) — system design, integration patterns, build-vs-buy decisions
- [Data Engineer](role-overviews/data-engineer.md) — schemas, data quality, transformation pipelines
- [Migration Architect](role-overviews/migration-architect.md) — legacy ETL, cutover strategies, reconciliation
- [QA Lead](role-overviews/qa-lead.md) — test strategy, UAT, regression, security testing
- [Compliance Analyst](role-overviews/compliance-analyst.md) — SOX/GDPR/HIPAA/SOC 2 controls, audit trails
- [Requirements Analyst](role-overviews/requirements-analyst.md) — discovery, stakeholder interviews, scope management

These are not skills themselves — they're how to *think* like that role when executing IT skills.

## Skills inside this department

At `03-org-1k-plus/` we have 17 enterprise-grade IT skills covering:

**Core Build**: data-modeling, workflow-automation, integrations, security-roles
**Data & Migration**: data-migration, master-data-management, reports-dashboards
**Operations & Reliability**: deployment-golive, observability, disaster-recovery, configuration-management, performance-optimization
**Experience & Adoption**: testing-validation, user-onboarding, change-management
**Platform & API**: api-design, localization-i18n

## How IT differs across company sizes

**Under 100 people (`01-org-under-100/`)**: Often a single engineer or small team doing everything. Tooling is SaaS-heavy (GitHub, Vercel/Netlify, Cloudflare, Datadog Essentials, Okta Starter). Most IT work is evaluation + integration rather than bespoke engineering. Security is basic but essential (SSO, password policy, endpoint management). Data infrastructure is a warehouse + Fivetran + dbt at most.

**100–1,000 people (`02-org-100-to-1k/`)**: Distinct functional teams emerge — data platform, infra/SRE, security, integrations. Tooling matures (Datadog, Snowflake, Segment, Okta Enterprise, CrowdStrike). Formal change management, release pipelines, on-call rotation, incident response. Security has dedicated function. SOC 2 / ISO 27001 audits typical.

**1,000+ people (`03-org-1k-plus/`)**: Multiple specialized IT orgs (App Eng, Platform, Data, Security, ITSM, SRE). Public-cloud-heavy (multi-cloud common). Kubernetes, service meshes, microservices at scale. Public-company SOX controls, formal CISO function, dedicated compliance team. Global operations with regional infrastructure.

## Sub-organization relationships

IT commonly partners with:

- **Finance**: ERP systems, financial data pipelines, SOX IT controls
- **Sales/CRM**: CRM platform ownership, sales data pipelines, marketing-tech integrations
- **HR**: HRIS, identity provisioning (SCIM), onboarding automation, learning systems
- **Customer Support**: Helpdesk platform, CCaaS, customer-data platforms
- **Supply Chain / Operations**: WMS/TMS integrations, supply-chain data pipelines, IoT/fleet telemetry
- **Legal & Compliance**: Data protection, access reviews, audit logs, regulatory reporting

## Common platforms used

| Category | Small | Mid-market | Enterprise |
|---|---|---|---|
| **Cloud** | AWS / Vercel / Fly | AWS / Azure / GCP | Multi-cloud |
| **Observability** | Datadog / Sentry | Datadog / New Relic | Datadog + Splunk + custom |
| **Security** | Okta / 1Password | Okta + CrowdStrike + Cloudflare | CrowdStrike + Okta Workforce + Zscaler + Palantir |
| **Data** | Postgres + dbt + Looker | Snowflake + dbt + Looker + Fivetran | Snowflake/Databricks + custom + Hightouch |
| **Identity** | Okta Starter / Google Workspace | Okta / Azure AD | Okta Workforce + dedicated IAM |
| **DevOps** | GitHub + Vercel | GitHub + Argo/GitLab CI + K8s | GitLab + Jenkins + enterprise K8s |

## KPIs IT owns

- **Uptime** (per service)
- **Mean time to recovery (MTTR)** per incident tier
- **Change failure rate**
- **Deployment frequency**
- **Security-incident count + severity + response time**
- **Patch compliance %**
- **Access-review completion %**
- **Audit-finding count + resolution time**
- **Cost per business-unit / per workload**
- **Engineering-team velocity** (story points / PRs / per-engineer productivity)

## Related

- [Role Overviews](role-overviews/) — reference docs for IT implementation roles
- [03-org-1k-plus skills](03-org-1k-plus/) — 17 enterprise-grade IT skills
- [All other department OVERVIEWs](../) — business domains that IT supports
- [Templates](../../templates/) — cross-department artifacts (fit-gap-matrix, go-live-checklist, migration-runbook, requirements-traceability)
