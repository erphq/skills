---
title: SDStack
description: The open enterprise skill stack — business process skills, technical skills, roles, domains, and templates for building and running enterprise applications.
audience: both
category: index
---

<div align="center">

<pre>
███████╗██████╗ ███████╗████████╗ █████╗  ██████╗██╗  ██╗
██╔════╝██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝
███████╗██║  ██║███████╗   ██║   ███████║██║     █████╔╝ 
╚════██║██║  ██║╚════██║   ██║   ██╔══██║██║     ██╔═██╗ 
███████║██████╔╝███████║   ██║   ██║  ██║╚██████╗██║  ██╗
╚══════╝╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
</pre>

### The Open Enterprise Skill Stack

**Every business process. Every industry. Every company size.**<br>
**For humans and AI agents alike.**

<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Skills](https://img.shields.io/badge/Business_Processes-46-blue)](skills/)
[![Technical](https://img.shields.io/badge/Technical_Skills-17-green)](skills/technical/)
[![Industries](https://img.shields.io/badge/Industries-30-orange)](skills/)
[![Files](https://img.shields.io/badge/Total_Files-80-purple)](skills/)
[![ERP•AI](https://img.shields.io/badge/Works_with-ERP•AI-6C3CE9)](https://erp.ai)

<br>

</div>

---

**SDStack** is the open knowledge base for enterprise business processes. It covers **every major business system** — ERP, CRM, HRMS, SCM, Helpdesk, and PSA — broken down by the actual processes people do every day, across **30 industries** and **4 company sizes**.

This is not a textbook. It's a practical, opinionated, implementation-ready skill stack — designed to be read by business users, consumed by AI agents, and used by builders shipping enterprise applications on any platform.

> Whether you're an AP clerk figuring out three-way matching, a sales manager setting up pipeline stages, or an autonomous agent executing a mission — SDStack has the playbook.

<br>

<div align="center">

| | System | Processes | For |
|---|--------|-----------|-----|
| **$** | [**ERP**](#erp--finance--accounting) | 8 | Finance & Accounting teams |
| **📊** | [**CRM**](#crm--sales) | 8 | Sales & Revenue teams |
| **👥** | [**HRMS**](#hrms--human-resources) | 8 | HR & People teams |
| **📦** | [**SCM**](#scm--supply-chain) | 8 | Operations & Supply Chain teams |
| **🎧** | [**Helpdesk**](#helpdesk--customer-support) | 7 | Support & Success teams |
| **📋** | [**PSA**](#psa--professional-services) | 7 | Services & Consulting teams |
| **🔧** | [**Technical**](#technical-skills) | 17 | Builders & Architects |

</div>

<br>

```
+-----------------------------------------------------------+
|                                                           |
|   BUSINESS PROCESS SKILLS                                 |
|                                                           |
|   +---------+ +---------+ +---------+ +---------+        |
|   |   ERP   | |   CRM   | |  HRMS   | |   SCM   |        |
|   | 8 procs | | 8 procs | | 8 procs | | 8 procs |        |
|   +---------+ +---------+ +---------+ +---------+        |
|   +-------------+ +-------------+                         |
|   |  Helpdesk   | |     PSA     |                         |
|   |  7 procs    | |   7 procs   |                         |
|   +-------------+ +-------------+                         |
|                                                           |
|   Each process:  Build  .  Maintain  .  Scale             |
|                  x 30 industries  x 4 company sizes       |
|                                                           |
+-----------------------------------------------------------+
|                                                           |
|   TECHNICAL SKILLS (17) | ROLES (6)  | TEMPLATES (4)     |
|   Builder toolkit       | Expert     | Delivery           |
|                         | personas   | artifacts           |
|                                                           |
+-----------------------------------------------------------+
|                                                           |
|   DOMAINS (6) -- Enterprise Verticals                     |
|   Finance . HR . Supply Chain . Sales . Projects . Support|
|                                                           |
+-----------------------------------------------------------+
```

---

## Who This Is For

| You are... | SDStack gives you... |
|------------|---------------------|
| **A business user** | Plain-English guides for your specific process, industry, and company size |
| **A solo builder** | End-to-end playbook for shipping enterprise apps |
| **A team or agency** | Structured skills for fast, consistent client delivery |
| **An enterprise IT team** | Implementation reference for builds and migrations |
| **An AI agent** | Structured knowledge for autonomous enterprise missions |

---

## Install & Quick Start

Use this section to install SDStack and start a project fast.

### 1. Install from registry (primary)

```bash
npx skills add erphq/sdstack -g -y
```

Install a single skill when you only need one area:

```bash
npx skills add erphq/sdstack -s <skill-name> -g -y
```

### 2. Where to start after install

For any implementation, start in this order:

1. Pick one business process skill (ERP/CRM/HRMS/SCM/Helpdesk/PSA).
2. Pair it with one technical skill from `skills/technical/<skill-name>/SKILL.md` (example: `skills/technical/data-modeling/SKILL.md`).
3. Add one owner role from `roles/<role-name>/SKILL.md` (example: `roles/solution-architect/SKILL.md`).
4. Use one template from `templates/<template-name>/SKILL.md` as the delivery artifact (example: `templates/go-live-checklist/SKILL.md`).

Recommended first templates:

- [Go-Live Checklist](templates/go-live-checklist/SKILL.md)
- [Migration Runbook](templates/migration-runbook/SKILL.md)
- [Requirements Traceability](templates/requirements-traceability/SKILL.md)
- [Fit-Gap Matrix](templates/fit-gap-matrix/SKILL.md)

Then execute each selected skill in this sequence:

1. Start Here
2. Build section
3. Maintain section
4. Scale section
5. Related references at the end of the file

### 3. Manual source workflow (secondary)

If you prefer local source browsing/editing:

```bash
git clone https://github.com/erphq/sdstack.git
cd sdstack/skills
```

---

## Business Process Skills

The core of SDStack. Find your system, find your process. Each skill covers:

```
  +--------------------------------------------------+
  |  Start Here     Check templates first.            |
  |                 Deploy. Customize. Done.           |
  |                                                   |
  |  Build          Set it up from scratch or         |
  |                 template -- with agent help        |
  |                                                   |
  |  Maintain       Dashboards, alerts, exceptions,   |
  |                 routine automation                 |
  |                                                   |
  |  Scale          Add complexity, new workflows,    |
  |                 automation, redesign triggers      |
  |                                                   |
  |  By Industry    30 industries, specific guidance   |
  |  By Size        Startup . SMB . Mid . Enterprise   |
  +--------------------------------------------------+
```

---

### ERP — Finance & Accounting

> *The system finance people know.*

| Process | What It Covers |
|---------|---------------|
| [Accounts Payable](skills/erp/accounts-payable/SKILL.md) | Invoice receipt, three-way matching, payment runs, vendor management, early-pay discounts |
| [Accounts Receivable](skills/erp/accounts-receivable/SKILL.md) | Customer invoicing, collections, cash application, aging analysis, dunning letters |
| [General Ledger](skills/erp/general-ledger/SKILL.md) | Chart of accounts, journal entries, trial balance, financial statements, multi-entity |
| [Fixed Assets](skills/erp/fixed-assets/SKILL.md) | Asset tracking, depreciation methods, disposal, revaluation, lease accounting (ASC 842) |
| [Budgeting & Forecasting](skills/erp/budgeting-forecasting/SKILL.md) | Budget creation, variance analysis, rolling forecasts, scenario planning, what-if modeling |
| [Period Close](skills/erp/period-close/SKILL.md) | Month-end close, reconciliations, accruals, adjustments, reporting deadlines, close calendar |
| [Tax Compliance](skills/erp/tax-compliance/SKILL.md) | Sales tax, VAT, GST, withholding tax, 1099s, statutory reporting, tax engine integration |
| [Consolidation](skills/erp/consolidation/SKILL.md) | Multi-entity rollup, intercompany eliminations, currency translation, minority interests |

---

### CRM — Sales

> *The system sales people know.*

| Process | What It Covers |
|---------|---------------|
| [Lead Management](skills/crm/lead-management/SKILL.md) | Lead capture, scoring, routing, nurturing sequences, conversion tracking |
| [Pipeline & Forecasting](skills/crm/pipeline-forecasting/SKILL.md) | Opportunity stages, probability, weighted pipeline, forecast methods, accuracy tracking |
| [Quoting & CPQ](skills/crm/quoting-cpq/SKILL.md) | Configure-price-quote, discount approval, proposal generation, e-signatures |
| [Contracts & Renewals](skills/crm/contracts-renewals/SKILL.md) | Contract lifecycle, renewal tracking, amendments, auto-renewal, churn prevention |
| [Commissions](skills/crm/commissions/SKILL.md) | Commission plans, accelerators, clawbacks, split credits, payout calculation, disputes |
| [Territory Management](skills/crm/territory-management/SKILL.md) | Territory design, account assignment, quota allocation, rebalancing, overlay models |
| [Customer 360](skills/crm/customer-360/SKILL.md) | Unified customer view, activity history, health scoring, cross-sell/upsell signals |
| [Campaign Management](skills/crm/campaign-management/SKILL.md) | Campaign planning, audience segmentation, execution, attribution, ROI tracking |

---

### HRMS — Human Resources

> *The system HR people know.*

| Process | What It Covers |
|---------|---------------|
| [Recruitment](skills/hrms/recruitment/SKILL.md) | Job posting, applicant tracking, screening, interviewing, offer management |
| [Onboarding](skills/hrms/onboarding/SKILL.md) | New hire setup, documentation, orientation, system access, first-day-to-productive |
| [Payroll](skills/hrms/payroll/SKILL.md) | Salary calculation, tax withholding, deductions, pay runs, payslips, compliance |
| [Benefits](skills/hrms/benefits/SKILL.md) | Health insurance, retirement plans, FSA/HSA, open enrollment, life events, ACA compliance |
| [Performance Reviews](skills/hrms/performance-reviews/SKILL.md) | Goal setting, review cycles, 360 feedback, calibration, PIPs, promotions |
| [Leave & Attendance](skills/hrms/leave-attendance/SKILL.md) | Time tracking, PTO policies, FMLA, sick leave, shift scheduling, overtime |
| [Training & Development](skills/hrms/training-development/SKILL.md) | Learning paths, certifications, skill gap analysis, LMS, compliance training, career pathing |
| [Offboarding](skills/hrms/offboarding/SKILL.md) | Exit interviews, access revocation, knowledge transfer, final pay, COBRA, alumni networks |

---

### SCM — Supply Chain

> *The system operations people know.*

| Process | What It Covers |
|---------|---------------|
| [Procurement](skills/scm/procurement/SKILL.md) | Purchase requisitions, RFQ, vendor selection, PO management, approval workflows |
| [Inventory](skills/scm/inventory/SKILL.md) | Stock tracking, reorder points, ABC analysis, cycle counts, stock valuation, lot/serial |
| [Warehouse](skills/scm/warehouse/SKILL.md) | Receiving, putaway, picking, packing, shipping, zone management, bin locations |
| [Demand Planning](skills/scm/demand-planning/SKILL.md) | Demand forecasting, safety stock, MRP, production scheduling, S&OP |
| [Quality](skills/scm/quality/SKILL.md) | Incoming inspection, in-process checks, NCRs, CAPA, lot traceability, recalls |
| [Logistics](skills/scm/logistics/SKILL.md) | Freight management, carrier selection, route optimization, tracking, last-mile delivery |
| [Vendor Management](skills/scm/vendor-management/SKILL.md) | Vendor onboarding, scorecards, performance reviews, risk assessment, diversity tracking |
| [Production Planning](skills/scm/production-planning/SKILL.md) | BOM management, work orders, shop floor control, scheduling, capacity planning |

---

### Helpdesk — Customer Support

> *The system support people know.*

| Process | What It Covers |
|---------|---------------|
| [Ticket Lifecycle](skills/helpdesk/ticket-lifecycle/SKILL.md) | Ticket creation, classification, assignment, resolution, closure, reopens |
| [SLA Management](skills/helpdesk/sla-management/SKILL.md) | Response times, resolution targets, escalation rules, breach handling, reporting |
| [Knowledge Base](skills/helpdesk/knowledge-base/SKILL.md) | Article creation, categorization, search optimization, self-service deflection |
| [Escalation](skills/helpdesk/escalation/SKILL.md) | Tier routing (L1/L2/L3), functional escalation, management escalation, on-call |
| [Omnichannel](skills/helpdesk/omnichannel/SKILL.md) | Email, chat, phone, social, portal, WhatsApp — unified routing and context |
| [Customer Satisfaction](skills/helpdesk/customer-satisfaction/SKILL.md) | CSAT surveys, NPS, CES, feedback loops, sentiment analysis, action plans |
| [Field Service](skills/helpdesk/field-service/SKILL.md) | Dispatch, scheduling, mobile workforce, parts inventory, work orders, on-site SLA |

---

### PSA — Professional Services

> *The system services people know.*

| Process | What It Covers |
|---------|---------------|
| [Project Planning](skills/psa/project-planning/SKILL.md) | Project setup, WBS, milestones, Gantt charts, dependencies, baseline management |
| [Resource Management](skills/psa/resource-management/SKILL.md) | Capacity planning, skill matching, utilization targets, bench management, staffing requests |
| [Time & Expense](skills/psa/time-expense/SKILL.md) | Timesheet entry, approval workflows, expense reports, receipts, policy enforcement |
| [Billing](skills/psa/billing/SKILL.md) | T&M billing, fixed-price milestones, retainers, invoice generation, revenue recognition |
| [Portfolio Management](skills/psa/portfolio-management/SKILL.md) | Project prioritization, cross-project resource allocation, pipeline-to-delivery, health scoring |
| [Subcontractor Management](skills/psa/subcontractor-management/SKILL.md) | Vendor onboarding, rate cards, SOWs, time approval, markup, payment |
| [Client Collaboration](skills/psa/client-collaboration/SKILL.md) | Client portals, status reports, approval workflows, document sharing, feedback collection |

---

## Technical Skills

> *The builder toolkit underneath. Business process skills tell you **what** to build; technical skills tell you **how**.*

#### Core Build

| Skill | What It Covers |
|-------|---------------|
| [Data Modeling](skills/technical/data-modeling/SKILL.md) | Schema design, entity relationships, field types, temporal modeling, schema versioning, data lineage |
| [Workflow Automation](skills/technical/workflow-automation/SKILL.md) | State machines, approval chains, saga patterns, workflow versioning, error handling, observability |
| [Integrations](skills/technical/integrations/SKILL.md) | REST/SOAP/GraphQL/EDI, webhooks, schema evolution, rate limiting, circuit breakers, contract testing |
| [Security & Roles](skills/technical/security-roles/SKILL.md) | RBAC, SoD, zero trust, PAM, key management, OAuth lifecycle, insider threat detection |

#### Data & Migration

| Skill | What It Covers |
|-------|---------------|
| [Data Migration](skills/technical/data-migration/SKILL.md) | ETL pipelines, source profiling, parallel runs, timezone handling, data residency, rollback |
| [Master Data Management](skills/technical/master-data-management/SKILL.md) | Golden records, MDM architecture, survivorship rules, data stewardship, quality scorecards |

#### Operations & Reliability

| Skill | What It Covers |
|-------|---------------|
| [Deployment & Go-Live](skills/technical/deployment-golive/SKILL.md) | Promotion pipelines, cutover runbooks, rollback frameworks, drift detection, infrastructure scaling |
| [Observability](skills/technical/observability/SKILL.md) | Logs/metrics/traces, alerting, incident response, SLO monitoring, runbook automation |
| [Disaster Recovery](skills/technical/disaster-recovery/SKILL.md) | RTO/RPO, backup strategies, DR architecture, failover testing, BCP, compliance |
| [Configuration Management](skills/technical/configuration-management/SKILL.md) | Config-as-code, promotion pipelines, drift detection, secrets management, tenant config |
| [Performance Optimization](skills/technical/performance-optimization/SKILL.md) | Query tuning, caching, CQRS, cloud scaling, write path optimization, profiling |

#### Experience & Adoption

| Skill | What It Covers |
|-------|---------------|
| [Reports & Dashboards](skills/technical/reports-dashboards/SKILL.md) | KPI design, drill-downs, self-service BI, predictive analytics, data storytelling |
| [Testing & Validation](skills/technical/testing-validation/SKILL.md) | UAT, API testing, security testing, CI/CD gates, chaos engineering, test automation |
| [User Onboarding](skills/technical/user-onboarding/SKILL.md) | Competency certification, spaced repetition, accessibility, multilingual training, ROI |
| [Change Management](skills/technical/change-management/SKILL.md) | ADKAR/Kotter, stakeholder engagement, resistance management, readiness assessment |

#### Platform & API

| Skill | What It Covers |
|-------|---------------|
| [API Design](skills/technical/api-design/SKILL.md) | REST/GraphQL, versioning, rate limiting, webhooks, idempotency, API lifecycle |
| [Localization & i18n](skills/technical/localization-i18n/SKILL.md) | Multi-language, multi-currency, timezone, regulatory localization, multi-country deployment |

---

## Roles

> *Invocable expert personas. Activate a role when you need to think like a specialist.*

| Role | When to Invoke |
|------|---------------|
| [Solution Architect](roles/solution-architect/SKILL.md) | System design, integration patterns, build-vs-buy-vs-configure decisions |
| [Requirements Analyst](roles/requirements-analyst/SKILL.md) | Discovery workshops, stakeholder interviews, requirements structuring, scope management |
| [Data Engineer](roles/data-engineer/SKILL.md) | Schema modeling, data quality profiling, transformation pipelines, referential integrity |
| [Migration Architect](roles/migration-architect/SKILL.md) | Legacy ETL, cutover strategies, dress rehearsals, data reconciliation |
| [Compliance Analyst](roles/compliance-analyst/SKILL.md) | SOX/GDPR/HIPAA/SOC 2 controls, audit trails, segregation of duties |
| [QA Lead](roles/qa-lead/SKILL.md) | Test strategy, UAT scripts, regression suites, performance and security testing |

---

## Domains

> *Complete reference for each enterprise vertical: entities, processes, regulations, config patterns, KPIs.*

| Domain | What It Covers |
|--------|---------------|
| [Finance & Accounting](domains/finance-accounting/SKILL.md) | GL, AP/AR, fixed assets, budgeting, consolidation, revenue recognition, tax |
| [Human Resources](domains/human-resources/SKILL.md) | Core HR, payroll, benefits, talent management, leave, workforce planning |
| [Supply Chain](domains/supply-chain/SKILL.md) | Procurement, inventory, warehousing, logistics, MRP, production, quality |
| [Sales & CRM](domains/sales-crm/SKILL.md) | Lead-to-cash, pipeline, CPQ, contracts, commissions, territory, customer 360 |
| [Project Operations](domains/project-operations/SKILL.md) | PSA, resources, time/expense, project billing, WIP, revenue recognition |
| [Customer Support](domains/customer-support/SKILL.md) | Case lifecycle, SLA, knowledge base, escalation, CSAT/NPS, omnichannel |

---

## Templates

| Template | What It Is |
|----------|-----------|
| [Fit-Gap Matrix](templates/fit-gap-matrix/SKILL.md) | Requirements vs capabilities scoring with effort estimates and gap resolution |
| [Migration Runbook](templates/migration-runbook/SKILL.md) | Minute-by-minute cutover plan with rollback triggers and go/no-go criteria |
| [Requirements Traceability](templates/requirements-traceability/SKILL.md) | Link requirements through design, config, test, and sign-off |
| [Go-Live Checklist](templates/go-live-checklist/SKILL.md) | Go/no-go criteria across all workstreams |

---

## How to Use SDStack

<table>
<tr>
<td width="33%">

**Business User**

Find your system (ERP, CRM, HRMS...), then your process. Each file explains it in plain English — what to build, what to monitor, how to scale — for your industry and size.

</td>
<td width="33%">

**Builder / Architect**

Start with business process skills for the **what**, then technical skills for the **how**. Use roles for expert mindsets, domains for vertical depth, templates for deliverables.

</td>
<td width="33%">

**AI Agent**

Load business process skills as mission context. Load technical skills for implementation. Adopt roles for reasoning frameworks. Every file has structured frontmatter for parsing.

</td>
</tr>
</table>

```
  Example: "Set up accounts payable for a mid-market manufacturer"
  
  1. Load:  skills/erp/accounts-payable/SKILL.md
            +--> By Industry > Manufacturing
            +--> By Company Size > Mid-Market
            +--> Build: set up three-way matching

  2. Load:  skills/technical/workflow-automation/SKILL.md
            +--> Design approval chain: PO > Invoice > Payment

  3. Load:  skills/technical/security-roles/SKILL.md
            +--> SoD: person who creates PO != person who approves invoice

  4. Load:  roles/compliance-analyst/SKILL.md
            +--> Review SOX controls for the AP process
```

---

## Works with ERP•AI

SDStack is platform-agnostic enterprise knowledge. It also integrates with [**ERP•AI**](https://erp.ai) and [**Proto**](https://erp.ai/proto/) (ERP•AI's autonomous agent engine). Each skill file includes a small section showing how it maps to ERP•AI's 720+ app templates and Proto's ORAI cycle.

---

## By the Numbers

```
  Business Process Skills ........ 46    across 6 systems
  Technical Skills ............... 17    deep implementation guides
  Roles .......................... 6     expert personas
  Domains ........................ 6     enterprise verticals
  Templates ...................... 4     delivery artifacts
  Industries per Process ......... 30
  Company Size Tiers ............. 4     Startup · SMB · Mid-Market · Enterprise
  Total Files .................... 80
  Total Lines .................... 18,000+
```

---

## License

MIT — use it, fork it, build with it.

---

<sub>SD — Shashank Dixit · [ERP•AI](https://erp.ai)</sub>
