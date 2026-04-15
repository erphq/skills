---
title: SDStack
description: The enterprise skill stack for erp.ai — business process skills, technical skills, roles, domains, and templates for building and running enterprise applications.
audience: both
category: index
---

```
  ____  ____  ____  _             _    
 / ___||  _ \/ ___|| |_ __ _  ___| | __
 \___ \| | | \___ \| __/ _` |/ __| |/ /
  ___) | |_| |___) | || (_| | (__|   < 
 |____/|____/|____/ \__\__,_|\___|_|\_\
                                        
  The Enterprise Skill Stack for erp.ai
```

---

**SDStack** is the definitive knowledge base for building, running, and scaling enterprise applications with [erp.ai](https://erp.ai). It covers **every major business system** — ERP, CRM, HRMS, SCM, Helpdesk, and PSA — broken down by the actual business processes people do every day, across 30 industries and 4 company sizes.

Whether you're an AP clerk figuring out three-way matching, a sales manager setting up pipeline stages, or an AI agent executing a mission autonomously — SDStack has the playbook.

```
 +----------------------------------------------------------+
 |                    BUSINESS PROCESS SKILLS                |
 |                                                          |
 |  ERP         CRM         HRMS        SCM                |
 |  8 processes  8 processes  8 processes  8 processes       |
 |                                                          |
 |  Helpdesk    PSA                                         |
 |  7 processes  7 processes                                 |
 |                                                          |
 |  Each: Build / Maintain / Scale                          |
 |        x 30 industries x 4 company sizes                 |
 +----------------------------------------------------------+
                          |
 +----------------------------------------------------------+
 |  TECHNICAL SKILLS (17)  |  ROLES (6)  |  TEMPLATES (4)  |
 |  The builder toolkit    |  Expert     |  Delivery        |
 |  underneath             |  personas   |  artifacts       |
 +----------------------------------------------------------+
                          |
 +----------------------------------------------------------+
 |              DOMAINS (6) — Enterprise Verticals           |
 +----------------------------------------------------------+
```

---

## Who This Is For

- **Business users** who want to do their job better using AI agents — no technical background needed
- **Solo builders** shipping enterprise apps end-to-end with erp.ai
- **Small teams and agencies** delivering enterprise apps for clients
- **Enterprise IT teams** building internal applications and migrating off legacy
- **AI agents** (including [Proto](https://erp.ai/proto/)) that need structured knowledge to assist with real work

---

## Business Process Skills

These are the core of SDStack. Organized by the system you know — **ERP** if you're in finance, **CRM** if you're in sales, **HRMS** if you're in HR, and so on. Each process covers:

- **Start Here** — Check erp.ai's 720+ app templates first. Deploy the closest match, customize on top.
- **Build** — How to set it up from scratch (or from a template) with agent assistance
- **Maintain** — Dashboards, alerts, exception handling, routine automation
- **Scale** — Adding complexity, automation opportunities, when to redesign
- **By Industry** — How this process works differently across 30 industries
- **By Company Size** — Startup, SMB, Mid-Market, Enterprise

---

### ERP — Finance & Accounting

```
  ERP = The system finance people know
```

| Process | What It Covers |
|---------|---------------|
| [Accounts Payable](skills/erp/accounts-payable.md) | Invoice receipt, three-way matching, payment runs, vendor management, early-pay discounts |
| [Accounts Receivable](skills/erp/accounts-receivable.md) | Customer invoicing, collections, cash application, aging analysis, dunning letters |
| [General Ledger](skills/erp/general-ledger.md) | Chart of accounts, journal entries, trial balance, financial statements, multi-entity |
| [Fixed Assets](skills/erp/fixed-assets.md) | Asset tracking, depreciation methods, disposal, revaluation, lease accounting (ASC 842) |
| [Budgeting & Forecasting](skills/erp/budgeting-forecasting.md) | Budget creation, variance analysis, rolling forecasts, scenario planning, what-if modeling |
| [Period Close](skills/erp/period-close.md) | Month-end close, reconciliations, accruals, adjustments, reporting deadlines, close calendar |
| [Tax Compliance](skills/erp/tax-compliance.md) | Sales tax, VAT, GST, withholding tax, 1099s, statutory reporting, tax engine integration |
| [Consolidation](skills/erp/consolidation.md) | Multi-entity rollup, intercompany eliminations, currency translation, minority interests |

---

### CRM — Sales

```
  CRM = The system sales people know
```

| Process | What It Covers |
|---------|---------------|
| [Lead Management](skills/crm/lead-management.md) | Lead capture, scoring, routing, nurturing sequences, conversion tracking |
| [Pipeline & Forecasting](skills/crm/pipeline-forecasting.md) | Opportunity stages, probability, weighted pipeline, forecast methods, accuracy tracking |
| [Quoting & CPQ](skills/crm/quoting-cpq.md) | Configure-price-quote, discount approval, proposal generation, e-signatures |
| [Contracts & Renewals](skills/crm/contracts-renewals.md) | Contract lifecycle, renewal tracking, amendments, auto-renewal, churn prevention |
| [Commissions](skills/crm/commissions.md) | Commission plans, accelerators, clawbacks, split credits, payout calculation, disputes |
| [Territory Management](skills/crm/territory-management.md) | Territory design, account assignment, quota allocation, rebalancing, overlay models |
| [Customer 360](skills/crm/customer-360.md) | Unified customer view, activity history, health scoring, cross-sell/upsell signals |
| [Campaign Management](skills/crm/campaign-management.md) | Campaign planning, audience segmentation, execution, attribution, ROI tracking |

---

### HRMS — Human Resources

```
  HRMS = The system HR people know
```

| Process | What It Covers |
|---------|---------------|
| [Recruitment](skills/hrms/recruitment.md) | Job posting, applicant tracking, screening, interviewing, offer management |
| [Onboarding](skills/hrms/onboarding.md) | New hire setup, documentation, orientation, system access, first-day-to-productive |
| [Payroll](skills/hrms/payroll.md) | Salary calculation, tax withholding, deductions, pay runs, payslips, compliance |
| [Benefits](skills/hrms/benefits.md) | Health insurance, retirement plans, FSA/HSA, open enrollment, life events, ACA compliance |
| [Performance Reviews](skills/hrms/performance-reviews.md) | Goal setting, review cycles, 360 feedback, calibration, PIPs, promotions |
| [Leave & Attendance](skills/hrms/leave-attendance.md) | Time tracking, PTO policies, FMLA, sick leave, shift scheduling, overtime |
| [Training & Development](skills/hrms/training-development.md) | Learning paths, certifications, skill gap analysis, LMS, compliance training, career pathing |
| [Offboarding](skills/hrms/offboarding.md) | Exit interviews, access revocation, knowledge transfer, final pay, COBRA, alumni networks |

---

### SCM — Supply Chain

```
  SCM = The system operations people know
```

| Process | What It Covers |
|---------|---------------|
| [Procurement](skills/scm/procurement.md) | Purchase requisitions, RFQ, vendor selection, PO management, approval workflows |
| [Inventory](skills/scm/inventory.md) | Stock tracking, reorder points, ABC analysis, cycle counts, stock valuation, lot/serial |
| [Warehouse](skills/scm/warehouse.md) | Receiving, putaway, picking, packing, shipping, zone management, bin locations |
| [Demand Planning](skills/scm/demand-planning.md) | Demand forecasting, safety stock, MRP, production scheduling, S&OP |
| [Quality](skills/scm/quality.md) | Incoming inspection, in-process checks, NCRs, CAPA, lot traceability, recalls |
| [Logistics](skills/scm/logistics.md) | Freight management, carrier selection, route optimization, tracking, last-mile delivery |
| [Vendor Management](skills/scm/vendor-management.md) | Vendor onboarding, scorecards, performance reviews, risk assessment, diversity tracking |
| [Production Planning](skills/scm/production-planning.md) | BOM management, work orders, shop floor control, scheduling, capacity planning |

---

### Helpdesk — Customer Support

```
  Helpdesk = The system support people know
```

| Process | What It Covers |
|---------|---------------|
| [Ticket Lifecycle](skills/helpdesk/ticket-lifecycle.md) | Ticket creation, classification, assignment, resolution, closure, reopens |
| [SLA Management](skills/helpdesk/sla-management.md) | Response times, resolution targets, escalation rules, breach handling, reporting |
| [Knowledge Base](skills/helpdesk/knowledge-base.md) | Article creation, categorization, search optimization, self-service deflection |
| [Escalation](skills/helpdesk/escalation.md) | Tier routing (L1/L2/L3), functional escalation, management escalation, on-call |
| [Omnichannel](skills/helpdesk/omnichannel.md) | Email, chat, phone, social, portal, WhatsApp — unified routing and context |
| [Customer Satisfaction](skills/helpdesk/customer-satisfaction.md) | CSAT surveys, NPS, CES, feedback loops, sentiment analysis, action plans |
| [Field Service](skills/helpdesk/field-service.md) | Dispatch, scheduling, mobile workforce, parts inventory, work orders, on-site SLA |

---

### PSA — Professional Services

```
  PSA = The system services people know
```

| Process | What It Covers |
|---------|---------------|
| [Project Planning](skills/psa/project-planning.md) | Project setup, WBS, milestones, Gantt charts, dependencies, baseline management |
| [Resource Management](skills/psa/resource-management.md) | Capacity planning, skill matching, utilization targets, bench management, staffing requests |
| [Time & Expense](skills/psa/time-expense.md) | Timesheet entry, approval workflows, expense reports, receipts, policy enforcement |
| [Billing](skills/psa/billing.md) | T&M billing, fixed-price milestones, retainers, invoice generation, revenue recognition |
| [Portfolio Management](skills/psa/portfolio-management.md) | Project prioritization, cross-project resource allocation, pipeline-to-delivery, health scoring |
| [Subcontractor Management](skills/psa/subcontractor-management.md) | Vendor onboarding, rate cards, SOWs, time approval, markup, payment |
| [Client Collaboration](skills/psa/client-collaboration.md) | Client portals, status reports, approval workflows, document sharing, feedback collection |

---

## Technical Skills

```
  TECHNICAL = The builder toolkit underneath
```

The 17 technical skills are the implementation-level reference for builders and architects. Each one is a deep, opinionated guide covering key concepts, workflows, decision guides, patterns, anti-patterns, and checklists. Business process skills tell you **what** to build; technical skills tell you **how**.

#### Core Build

| Skill | What It Covers |
|-------|---------------|
| [Data Modeling](skills/technical/data-modeling.md) | Schema design, entity relationships, field types, temporal modeling, schema versioning, data lineage |
| [Workflow Automation](skills/technical/workflow-automation.md) | State machines, approval chains, saga patterns, workflow versioning, error handling, observability |
| [Integrations](skills/technical/integrations.md) | REST/SOAP/GraphQL/EDI, webhooks, schema evolution, rate limiting, circuit breakers, contract testing |
| [Security & Roles](skills/technical/security-roles.md) | RBAC, SoD, zero trust, PAM, key management, OAuth lifecycle, insider threat detection |

#### Data & Migration

| Skill | What It Covers |
|-------|---------------|
| [Data Migration](skills/technical/data-migration.md) | ETL pipelines, source profiling, parallel runs, timezone handling, data residency, rollback |
| [Master Data Management](skills/technical/master-data-management.md) | Golden records, MDM architecture, survivorship rules, data stewardship, quality scorecards |

#### Operations & Reliability

| Skill | What It Covers |
|-------|---------------|
| [Deployment & Go-Live](skills/technical/deployment-golive.md) | Promotion pipelines, cutover runbooks, rollback frameworks, drift detection, infrastructure scaling |
| [Observability](skills/technical/observability.md) | Logs/metrics/traces, alerting, incident response, SLO monitoring, runbook automation |
| [Disaster Recovery](skills/technical/disaster-recovery.md) | RTO/RPO, backup strategies, DR architecture, failover testing, BCP, compliance |
| [Configuration Management](skills/technical/configuration-management.md) | Config-as-code, promotion pipelines, drift detection, secrets management, tenant config |
| [Performance Optimization](skills/technical/performance-optimization.md) | Query tuning, caching, CQRS, cloud scaling, write path optimization, profiling |

#### Experience & Adoption

| Skill | What It Covers |
|-------|---------------|
| [Reports & Dashboards](skills/technical/reports-dashboards.md) | KPI design, drill-downs, self-service BI, predictive analytics, data storytelling |
| [Testing & Validation](skills/technical/testing-validation.md) | UAT, API testing, security testing, CI/CD gates, chaos engineering, test automation |
| [User Onboarding](skills/technical/user-onboarding.md) | Competency certification, spaced repetition, accessibility, multilingual training, ROI |
| [Change Management](skills/technical/change-management.md) | ADKAR/Kotter, stakeholder engagement, resistance management, readiness assessment |

#### Platform & API

| Skill | What It Covers |
|-------|---------------|
| [API Design](skills/technical/api-design.md) | REST/GraphQL, versioning, rate limiting, webhooks, idempotency, API lifecycle |
| [Localization & i18n](skills/technical/localization-i18n.md) | Multi-language, multi-currency, timezone, regulatory localization, multi-country deployment |

---

## Roles

```
  ROLES = Who you think like
```

Invocable expert personas. Activate a role when you need to think like a specialist. Each role defines the persona's mindset, responsibilities, decision frameworks, and the questions they ask.

| Role | When to Invoke |
|------|---------------|
| [Solution Architect](roles/solution-architect.md) | System design, integration patterns, build-vs-buy-vs-configure decisions |
| [Requirements Analyst](roles/requirements-analyst.md) | Discovery workshops, stakeholder interviews, requirements structuring, scope management |
| [Data Engineer](roles/data-engineer.md) | Schema modeling, data quality profiling, transformation pipelines, referential integrity |
| [Migration Architect](roles/migration-architect.md) | Legacy ETL, cutover strategies, dress rehearsals, data reconciliation |
| [Compliance Analyst](roles/compliance-analyst.md) | SOX/GDPR/HIPAA/SOC 2 controls, audit trails, segregation of duties |
| [QA Lead](roles/qa-lead.md) | Test strategy, UAT scripts, regression suites, performance and security testing |

---

## Domains

```
  DOMAINS = Enterprise verticals
```

Complete reference for each enterprise vertical: key entities, end-to-end business processes, regulatory requirements, configuration patterns, integration points, and KPIs.

| Domain | What It Covers |
|--------|---------------|
| [Finance & Accounting](domains/finance-accounting.md) | GL, AP/AR, fixed assets, budgeting, consolidation, revenue recognition, tax |
| [Human Resources](domains/human-resources.md) | Core HR, payroll, benefits, talent management, leave, workforce planning |
| [Supply Chain](domains/supply-chain.md) | Procurement, inventory, warehousing, logistics, MRP, production, quality |
| [Sales & CRM](domains/sales-crm.md) | Lead-to-cash, pipeline, CPQ, contracts, commissions, territory, customer 360 |
| [Project Operations](domains/project-operations.md) | PSA, resources, time/expense, project billing, WIP, revenue recognition |
| [Customer Support](domains/customer-support.md) | Case lifecycle, SLA, knowledge base, escalation, CSAT/NPS, omnichannel |

---

## Templates

```
  TEMPLATES = Delivery artifacts
```

| Template | What It Is |
|----------|-----------|
| [Fit-Gap Matrix](templates/fit-gap-matrix.md) | Requirements vs capabilities scoring with effort estimates and gap resolution |
| [Migration Runbook](templates/migration-runbook.md) | Minute-by-minute cutover plan with rollback triggers and go/no-go criteria |
| [Requirements Traceability](templates/requirements-traceability.md) | Link requirements through design, config, test, and sign-off |
| [Go-Live Checklist](templates/go-live-checklist.md) | Go/no-go criteria across all workstreams |

---

## How to Use SDStack

### If you're a business user

Find your system (ERP, CRM, HRMS, SCM, Helpdesk, or PSA), then find your process. Each file explains what the process does in plain English, how agents can help you build, maintain, and scale it, and what's different for your industry and company size.

### If you're a builder

Start with the business process skills to understand **what** needs to be built, then dive into technical skills for **how**. Use roles to adopt expert mindsets, domains for vertical-specific requirements, and templates for delivery artifacts.

### If you're an AI agent

Load business process skills for mission context. Load technical skills for implementation guidance. Adopt roles for reasoning frameworks. Check erp.ai templates before building from scratch.

```
  Example: "Set up accounts payable for a mid-market manufacturer"
  
  1. Load:  skills/erp/accounts-payable.md
            +--> Start Here: deploy erp.ai AP template
            +--> Build: customize three-way matching
            +--> By Industry > Manufacturing
            +--> By Company Size > Mid-Market

  2. Load:  skills/technical/workflow-automation.md
            +--> Design approval chain for PO > Invoice > Payment

  3. Load:  skills/technical/security-roles.md
            +--> Configure SoD: person who creates PO != person who approves invoice

  4. Load:  roles/compliance-analyst.md
            +--> Review SOX controls for the AP process
```

---

## erp.ai & Proto

SDStack skills are general-purpose enterprise knowledge — they apply regardless of platform. Each skill file includes a section showing how it maps to [erp.ai](https://erp.ai) and [Proto](https://erp.ai/proto/) (erp.ai's autonomous agent engine) for teams building on that stack.

**Always start with erp.ai's 720+ app templates.** Deploy the closest match, then customize. Only build from scratch when no template fits.

---

## What's Inside: By the Numbers

```
  Business Process Skills ... 46 (across 6 systems, 30 industries each)
  Technical Skills .......... 17 (deep implementation guides)
  Roles ..................... 6  (expert personas)
  Domains ................... 6  (enterprise verticals)
  Templates ................. 4  (delivery artifacts)
  Industries Covered ........ 30 (per process skill)
  Company Size Tiers ........ 4  (per process skill)
  Total Files ............... 80 markdown files + index.html
  Total Lines ............... 18,000+ lines of guidance
```

---

## License

MIT — use it, fork it, build with it.

---

<sub>SD — Shashank Dixit · [erp.ai](https://erp.ai)</sub>
