---
title: SDStack
description: The open enterprise skill stack — business and IT skills organized by department, company size, and process. For humans and AI agents alike.
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

**Every department. Every company size. Every process.**<br>
**For humans and AI agents alike.**

<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![ERP•AI](https://img.shields.io/badge/Works_with-ERP•AI-6C3CE9)](https://erp.ai)

<br>

</div>

---

## What this repo is

SDStack is a library of enterprise skills that an AI agent (or a human) can pick from. Every skill is pinned to three things:

1. **Department** — which part of the company owns the work (HR, finance, IT, sales, …)
2. **Company size** — the headcount of the whole organization, not the department
3. **Skill** — the specific process, e.g. `payroll`, `accounts-payable`, `api-design`

Pick one of each and you land on exactly one `SKILL.md` file. No ambiguity, no cross-referencing multiple folders.

---

## Tree

```
skills/
├── departments/                            every department-owned skill lives here
│   ├── customer-support/
│   │   ├── OVERVIEW.md                     department-level context (read first)
│   │   ├── 01-org-under-100/<skill>/SKILL.md
│   │   ├── 02-org-100-to-1k/<skill>/SKILL.md
│   │   └── 03-org-1k-plus/<skill>/SKILL.md
│   ├── finance-accounting/
│   ├── human-resources/
│   ├── information-technology/
│   │   ├── OVERVIEW.md
│   │   ├── role-overviews/                 reference: who does what in IT
│   │   │   ├── compliance-analyst.md
│   │   │   ├── data-engineer.md
│   │   │   ├── migration-architect.md
│   │   │   ├── qa-lead.md
│   │   │   ├── requirements-analyst.md
│   │   │   └── solution-architect.md
│   │   ├── 01-org-under-100/
│   │   ├── 02-org-100-to-1k/
│   │   └── 03-org-1k-plus/<skill>/SKILL.md
│   ├── project-operations/
│   ├── sales-crm/
│   └── supply-chain/
│
└── templates/                              cross-department skills, size-scoped only
    ├── 01-org-under-100/<template>/SKILL.md
    ├── 02-org-100-to-1k/<template>/SKILL.md
    └── 03-org-1k-plus/<template>/SKILL.md
```

**The leaf path is always:**

```
departments/<department>/<org-size>/<skill>/SKILL.md
templates/<org-size>/<template>/SKILL.md
```

---

## Org-size convention

The size tier refers to the **whole organization's headcount**, not the size of the department. A 5,000-person company with a 10-person HR team is still `03-org-1k-plus` — the company size is what drives payroll complexity, compliance load, HRIS scale, etc.

| Folder | Meaning |
|---|---|
| `01-org-under-100` | Fewer than 100 people in the whole org |
| `02-org-100-to-1k` | 100 to 1,000 people in the whole org |
| `03-org-1k-plus` | 1,000+ people in the whole org |

**Why the numeric prefix?** So folders sort by size, and new tiers can be inserted later (e.g. `04-org-10k-plus/`) without renaming any existing folder. If a middle tier ever splits, slot in `02a-org-100-to-500/` and `02b-org-500-to-1k/` alongside — existing references don't break.

---

## Departments

| Department | Top-level content |
|---|---|
| [Customer Support](departments/customer-support/OVERVIEW.md) | Ticketing, SLA, escalation, knowledge base, omnichannel, field service, CSAT |
| [Finance & Accounting](departments/finance-accounting/OVERVIEW.md) | GL, AP/AR, fixed assets, budgeting, period close, consolidation, tax |
| [Human Resources](departments/human-resources/OVERVIEW.md) | Payroll, benefits, recruitment, onboarding/offboarding, leave, performance, training |
| [Information Technology](departments/information-technology/03-org-1k-plus/) | API design, integrations, data modeling/migration, security, observability, DR, testing, and more |
| [Project Operations](departments/project-operations/OVERVIEW.md) | Project planning, resourcing, time & expense, billing, portfolios, subcontractors |
| [Sales & CRM](departments/sales-crm/OVERVIEW.md) | Leads, pipeline, quoting/CPQ, contracts/renewals, commissions, territory, customer 360, campaigns |
| [Supply Chain](departments/supply-chain/OVERVIEW.md) | Procurement, inventory, warehouse, demand planning, logistics, quality, vendor management, production |

Each department's `OVERVIEW.md` holds the cross-skill reference (entities, regulatory load, integration shape, KPIs). Read it before diving into any individual skill under that department.

Inside `information-technology/`, the `role-overviews/` folder holds reference docs for the IT implementation roles (solution architect, data engineer, migration architect, QA lead, requirements analyst, compliance analyst). These are not skills themselves — they're how to *think* like that role when executing IT skills.

---

## Templates

Cross-department artifacts. Scoped by org size only — the same artifact looks very different at 50 people vs. 5,000.

- `templates/03-org-1k-plus/fit-gap-matrix/`
- `templates/03-org-1k-plus/go-live-checklist/`
- `templates/03-org-1k-plus/migration-runbook/`
- `templates/03-org-1k-plus/requirements-traceability/`

Smaller-org versions are scaffolded empty; fill them as the need arises.

---

## For agents

1. **Who are you helping?** Identify department (or "this is cross-department" → templates).
2. **How big is their org?** Pick `01-org-under-100`, `02-org-100-to-1k`, or `03-org-1k-plus`. An agent scoped to a size stays at that size — sizes are a trait, not a trajectory.
3. **What's the specific skill?** Navigate to the leaf `SKILL.md`.

The whole skill — context, decisions, build steps, integrations, checklists — lives in that one file. No need to assemble from multiple sources.

To improve a skill, edit its `SKILL.md` in place. To add a new skill, create `departments/<dept>/<size>/<new-skill>/SKILL.md` following the frontmatter format used by existing files.

---

## For humans

- **Business user:** Find your department → your org size → your process. The `SKILL.md` explains what to do, how to set it up, what to watch.
- **Builder / architect:** Start at the department `OVERVIEW.md` to understand the terrain, then drop into individual skills.
- **AI agent operator:** Treat each `SKILL.md` as a self-contained mission context. Frontmatter is machine-parseable.

---

## Status

Today, every department has its `03-org-1k-plus/` populated (the enterprise tier is the deepest). `01-org-under-100/` and `02-org-100-to-1k/` folders exist as empty scaffolds and will fill in over time. Same story for `templates/`.

---

## License

MIT — use it, fork it, build with it.

---

<sub>SD — Shashank Dixit · [ERP•AI](https://erp.ai)</sub>
