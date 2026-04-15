---
title: SDStack
description: The enterprise app builder's skill stack for erp.ai — roles, skills, domains, and templates for building production-grade SaaS applications.
audience: both
category: index
---

# SDStack

**The Enterprise App Builder's Skill Stack for erp.ai**

SDStack is a structured collection of skills, role personas, domain knowledge, and reusable templates for anyone using [erp.ai](https://erp.ai) to build enterprise SaaS applications. Every file in this stack serves two purposes: it's a reference document a human can read to understand best practices, and it's a structured skill definition an AI agent can consume to assist with real work.

## Who This Is For

- **Solo builders** shipping enterprise apps end-to-end with erp.ai
- **Small teams and agencies** building enterprise apps for clients
- **Enterprise IT teams** building internal applications for their organizations

## How SDStack Is Organized

### Roles (`roles/`)
Invocable personas. When you need to think like a specific expert, activate a role. Each role file defines the persona's mindset, responsibilities, decision frameworks, and the kinds of questions they ask. An agent can adopt a role to provide domain-specific guidance.

| Role | When to Invoke |
|------|---------------|
| [Solution Architect](roles/solution-architect.md) | Designing system structure, choosing integration patterns, making technology decisions |
| [Requirements Analyst](roles/requirements-analyst.md) | Gathering features, running discovery, interviewing stakeholders, writing specs |
| [Data Engineer](roles/data-engineer.md) | Modeling data, cleansing datasets, building transformation pipelines, enforcing quality |
| [Migration Architect](roles/migration-architect.md) | Moving data from legacy systems, planning ETL, executing cutovers |
| [Compliance Analyst](roles/compliance-analyst.md) | Ensuring SOX/GDPR/HIPAA compliance, configuring audit trails, reviewing SoD |
| [QA Lead](roles/qa-lead.md) | Designing test strategy, writing UAT scripts, running regression and performance tests |

### Skills (`skills/`)
Builder capabilities — the things you DO with erp.ai. Each skill file walks through the complete workflow, decision points, common patterns, and pitfalls. Use these when you're hands-on building.

| Skill | What It Covers |
|-------|---------------|
| [Data Modeling](skills/data-modeling.md) | Schema design, entity relationships, field types, validation rules, temporal modeling, schema versioning |
| [Workflow Automation](skills/workflow-automation.md) | Business rules, approval chains, state machines, saga patterns, workflow versioning, observability |
| [Integrations](skills/integrations.md) | REST/SOAP APIs, webhooks, EDI, schema evolution, rate limiting, contract testing |
| [Data Migration](skills/data-migration.md) | ETL pipelines, source profiling, mapping, parallel runs, timezone handling, data residency |
| [Security & Roles](skills/security-roles.md) | RBAC, SoD, zero trust, PAM, key management, insider threat detection, vendor access |
| [Reports & Dashboards](skills/reports-dashboards.md) | KPI design, drill-down architecture, self-service BI governance, predictive analytics, data storytelling |
| [Testing & Validation](skills/testing-validation.md) | UAT frameworks, API testing, security testing, CI/CD gates, chaos engineering, test automation |
| [Deployment & Go-Live](skills/deployment-golive.md) | Deployment pipelines, cutover runbooks, rollback frameworks, drift detection, infrastructure scaling |
| [User Onboarding](skills/user-onboarding.md) | Training content, competency certification, accessibility, multilingual training, community learning, ROI |
| [Performance Optimization](skills/performance-optimization.md) | Query tuning, caching, CQRS, cloud scaling, write path optimization, profiling & diagnostics |
| [API Design](skills/api-design.md) | REST/GraphQL design, versioning, rate limiting, webhook contracts, idempotency, API lifecycle |
| [Master Data Management](skills/master-data-management.md) | Golden records, data stewardship, data quality frameworks, MDM architecture, reference data |
| [Observability](skills/observability.md) | Logs/metrics/traces, alerting, incident response, SLO monitoring, health checks, runbook automation |
| [Change Management](skills/change-management.md) | ADKAR/Kotter frameworks, stakeholder engagement, resistance management, readiness assessment |
| [Disaster Recovery](skills/disaster-recovery.md) | RTO/RPO, backup strategies, DR architecture, failover testing, BCP, recovery procedures |
| [Configuration Management](skills/configuration-management.md) | Config-as-code, promotion pipelines, drift detection, secrets management, tenant config |
| [Localization & i18n](skills/localization-i18n.md) | Multi-language, multi-currency, timezone handling, address formats, regulatory localization |

### Domains (`domains/`)
Enterprise verticals — the industries and functions you're building FOR. Each domain file covers the key entities, business processes, regulatory requirements, and common configuration patterns specific to that vertical.

| Domain | What It Covers |
|--------|---------------|
| [Finance & Accounting](domains/finance-accounting.md) | GL, AP/AR, fixed assets, budgeting, consolidation, revenue recognition |
| [Human Resources](domains/human-resources.md) | Core HR, payroll, benefits, talent management, workforce planning |
| [Supply Chain](domains/supply-chain.md) | Procurement, inventory, warehousing, logistics, MRP, demand planning |
| [Sales & CRM](domains/sales-crm.md) | Lead-to-cash, pipeline management, quoting, contracts, renewals |
| [Project Operations](domains/project-operations.md) | PSA, resource management, time/expense tracking, project billing |
| [Customer Support](domains/customer-support.md) | Ticketing, SLA management, knowledge base, escalation, CSAT |

### Templates (`templates/`)
Reusable starter documents for common enterprise delivery artifacts. Each template includes instructions, example content, and guidance on when and how to use it.

| Template | What It Is |
|----------|-----------|
| [Fit-Gap Matrix](templates/fit-gap-matrix.md) | Requirements vs capabilities scoring with effort estimates |
| [Migration Runbook](templates/migration-runbook.md) | Step-by-step cutover checklist with rollback procedures |
| [Requirements Traceability](templates/requirements-traceability.md) | RTM linking requirements to configuration to test cases |
| [Go-Live Checklist](templates/go-live-checklist.md) | Go/no-go decision criteria across all workstreams |

## How to Use SDStack

**As a human:** Browse the index.html or this README. Read the files relevant to your current work. Use the checklists and decision guides as working aids.

**As an agent:** Load the relevant skill/role/domain files as context. Follow the workflows step-by-step. Use the decision guides to choose between approaches. Cross-reference related files when the work spans multiple areas.

**Combining roles + skills + domains:** A typical building session might look like:
1. Activate the **Requirements Analyst** role to gather and structure what needs to be built
2. Use the **Data Modeling** skill with the **Finance & Accounting** domain to design the schema
3. Apply the **Security & Roles** skill with the **Compliance Analyst** role to configure access controls
4. Run through the **Testing & Validation** skill with the **QA Lead** role before go-live
