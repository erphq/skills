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

SDStack is a library of skills that an AI agent (or a human) can pick from. It has three top-level concepts:

1. **`departments/`** — work scoped to a specific business function. Pinned to **department × company size × skill** (e.g., `finance-accounting/02-org-100-to-1k/accounts-payable/SKILL.md`).
2. **`templates/`** — cross-department work artifacts (e.g., fit-gap matrix, go-live checklist). Scoped by company size only.
3. **`investment-research/`** — equity research, market commentary, and stock recommendations. For agents that combine domain expertise with sector knowledge + maintained ticker watchlists to publish investment content. Scoped by **sector**, not department or size.

Pick the right top-level concept, then the right leaf — you land on exactly one `SKILL.md` file. No ambiguity, no cross-referencing multiple folders.

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
├── templates/                              cross-department skills, size-scoped only
│   ├── 01-org-under-100/<template>/SKILL.md
│   ├── 02-org-100-to-1k/<template>/SKILL.md
│   └── 03-org-1k-plus/<template>/SKILL.md
│
└── investment-research/                    equity research + market commentary (sector-scoped)
    ├── OVERVIEW.md
    ├── core/                               sector-agnostic research craft
    │   ├── equity-research-framework/SKILL.md
    │   ├── reading-10k-10q/SKILL.md
    │   ├── earnings-call-analysis/SKILL.md
    │   ├── valuation-dcf-comps/SKILL.md
    │   ├── competitive-landscape/SKILL.md
    │   └── content-publishing/SKILL.md
    └── sectors/                            one folder per sector
        ├── hr-tech/                        SKILL.md + tickers.md
        ├── finance-accounting-tech/
        ├── sales-crm-tech/
        ├── customer-support-tech/
        ├── supply-chain-tech/
        ├── project-ops-tech/
        └── platform-it/
```

**The leaf paths are always:**

```
departments/<department>/<org-size>/<skill>/SKILL.md
templates/<org-size>/<template>/SKILL.md
investment-research/core/<skill>/SKILL.md
investment-research/sectors/<sector>/SKILL.md
investment-research/sectors/<sector>/tickers.md
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

## Investment Research

A top-level concept for agents producing **equity research, market commentary, and stock recommendations**. Combines sector-agnostic research craft (reading filings, valuation, thesis-building, publishing) with sector-specific knowledge + maintained ticker watchlists via Google Finance.

Shape:

```
investment-research/
├── OVERVIEW.md
├── core/                         6 research-craft skills
└── sectors/                      7 sectors with SKILL.md + tickers.md each
    ├── hr-tech/                  ~60 tickers (HCM, talent, staffing, L&D, benefits)
    ├── finance-accounting-tech/  ~90 tickers (ERP, AP, close, FP&A, tax, payments, banking)
    ├── sales-crm-tech/           ~55 tickers (CRM, marketing, ad-tech, CDPs)
    ├── customer-support-tech/    ~25 tickers (helpdesk, CCaaS, VoC, field service)
    ├── supply-chain-tech/        ~70 tickers (WMS, freight, trucking, rail, parcel)
    ├── project-ops-tech/         ~30 tickers (work mgmt, IT services, consulting)
    └── platform-it/              ~110 tickers (cloud, security, observability, data, AI)
```

An agent composes: domain expertise (from `departments/`) + research craft (from `core/`) + sector knowledge + ticker watchlist (from `sectors/<sector>/`). Example: an HR-expert agent picks `departments/human-resources/` + `investment-research/core/*` + `investment-research/sectors/hr-tech/` and publishes commentary on Workday earnings, Paycom vs Paylocity, or the Rippling IPO. See [`investment-research/OVERVIEW.md`](investment-research/OVERVIEW.md) for the composition pattern.

**Public-ticker universe: ~400+ across the 7 sectors**, covering the sizable majority of public enterprise-tech + adjacent ecosystem.

---

## For agents

1. **Who are you helping?** Identify department (or "this is cross-department" → templates).
2. **How big is their org?** Pick `01-org-under-100`, `02-org-100-to-1k`, or `03-org-1k-plus`. An agent scoped to a size stays at that size — sizes are a trait, not a trajectory.
3. **What's the specific skill?** Navigate to the leaf `SKILL.md`.

The whole skill — context, decisions, build steps, integrations, checklists — lives in that one file. No need to assemble from multiple sources.

To improve a skill, edit its `SKILL.md` in place. To add a new skill, create `departments/<dept>/<size>/<new-skill>/SKILL.md` following the frontmatter format used by existing files.

### Frontmatter — `agents:` and `related:` (optional, downstream-facing)

Every `SKILL.md` may declare two optional top-level frontmatter fields that downstream consumers (e.g. [erphq/lab-sites](https://github.com/erphq/lab-sites), which renders erpai.studio's skill pages) use to surface cross-references on the rendered page:

```yaml
---
name: accounts-receivable
description: This skill should be used when…
version: 1.0.0
agents:                    # ← optional
  - collections
  - reconciliation
  - approvals
related:                   # ← optional
  - accounts-payable
  - general-ledger
  - period-close
metadata:
  author: erphq
  …
---
```

**`agents:`** — list of agent capability slugs that work on this skill. Slugs are reusable across apps (e.g. `approvals` shows up in nearly every skill). Renderers display them as cards / chips on the skill page; if the consumer's site has per-agent pages, it cross-links.

**`related:`** — list of other skill slugs this skill commonly works with. Slugs MUST resolve to other `SKILL.md` files in this repo. Renderers use them for the "works with" cross-link grid.

Both fields are optional. Skills without them render the standard page sans those sections. As fields fill in, downstream consumers automatically pick them up.

These fields live at top level — sibling to `name:` / `description:` / `version:` — not nested under `metadata:`. The `metadata:` block holds technical facts about the file; `agents:` and `related:` describe the skill's relationships.

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
