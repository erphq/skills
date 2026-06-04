---
title: "ERP•AI Skills"
description: "Open enterprise skill stack for business, implementation, research, and platform work."
audience: "both"
category: "index"
---

# ERP•AI Skills

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![ERP•AI](https://img.shields.io/badge/Works_with-ERP•AI-6C3CE9)](https://erpai.studio)

ERP•AI Skills is an open library of operational playbooks for humans and AI agents. It covers department processes, implementation templates, investment research, platform operations, and founder work.

## What Is Here

| Area | Purpose | Count |
|---|---|---:|
| `departments/` | Department and org-size specific business skills | 133 |
| `templates/` | Cross-department implementation artifacts by org size | 12 |
| `investment-research/` | Research craft plus sector-specific enterprise-tech coverage | 14 |
| `platforms/` | Product-specific operating playbooks, currently build.host | 43 |
| `entrepreneurship/` | Early-stage venture operating manual | 1 |

Total: **203 `SKILL.md` files**.

## Repository Layout

```text
skills/
├── departments/
│   ├── customer-support/
│   ├── finance-accounting/
│   ├── human-resources/
│   ├── information-technology/
│   ├── project-operations/
│   ├── sales-crm/
│   └── supply-chain/
├── templates/
├── investment-research/
├── platforms/
│   └── build-host/
└── entrepreneurship/
```

Canonical leaf paths:

```text
departments/<department>/<org-size>/<skill>/SKILL.md
templates/<org-size>/<template>/SKILL.md
investment-research/core/<skill>/SKILL.md
investment-research/sectors/<sector>/SKILL.md
platforms/<platform>/<category>/<skill>/SKILL.md
entrepreneurship/<concept>/SKILL.md
```

## Org-Size Convention

The size tier refers to the whole organization's headcount, not the size of the department.

| Folder | Meaning |
|---|---|
| `01-org-under-100` | Fewer than 100 people |
| `02-org-100-to-1k` | 100 to 1,000 people |
| `03-org-1k-plus` | 1,000+ people |

Use the tier that matches the organization today. A 5,000-person company with a 10-person HR team still uses `03-org-1k-plus`.

## Departments

Each department has an `OVERVIEW.md` that explains shared entities, integrations, metrics, and operating context. Read it before opening an individual skill.

| Department | Overview | Scope |
|---|---|---|
| Customer Support | [OVERVIEW.md](departments/customer-support/OVERVIEW.md) | Ticketing, SLA, escalation, knowledge base, omnichannel, field service, CSAT |
| Finance & Accounting | [OVERVIEW.md](departments/finance-accounting/OVERVIEW.md) | GL, AP, AR, fixed assets, budgeting, close, consolidation, tax |
| Human Resources | [OVERVIEW.md](departments/human-resources/OVERVIEW.md) | Payroll, benefits, recruitment, onboarding, offboarding, leave, performance, training |
| Information Technology | [OVERVIEW.md](departments/information-technology/OVERVIEW.md) | API design, integrations, data, security, observability, DR, testing, go-live |
| Project Operations | [OVERVIEW.md](departments/project-operations/OVERVIEW.md) | Planning, resourcing, time and expense, billing, portfolios, subcontractors |
| Sales & CRM | [OVERVIEW.md](departments/sales-crm/OVERVIEW.md) | Leads, pipeline, CPQ, contracts, commissions, territory, customer 360, campaigns |
| Supply Chain | [OVERVIEW.md](departments/supply-chain/OVERVIEW.md) | Procurement, inventory, warehouse, planning, logistics, quality, vendors, production |

`departments/information-technology/role-overviews/` contains role references for solution architects, requirements analysts, data engineers, migration architects, compliance analysts, and QA leads. They are references, not installable skills.

## Templates

Templates are cross-department artifacts scoped by org size:

- `fit-gap-matrix`
- `go-live-checklist`
- `migration-runbook`
- `requirements-traceability`

Example path: [`templates/03-org-1k-plus/go-live-checklist/SKILL.md`](templates/03-org-1k-plus/go-live-checklist/SKILL.md).

## Investment Research

`investment-research/` combines research craft with enterprise-tech sector coverage.

- `core/` contains research workflow skills such as filing analysis, earnings calls, valuation, competitive landscape, recommendations, and publishing.
- `sectors/` contains sector skills and ticker watchlists for HR tech, finance/accounting tech, sales/CRM tech, customer-support tech, supply-chain tech, project-ops tech, and platform IT.

Start at [`investment-research/OVERVIEW.md`](investment-research/OVERVIEW.md).

## Platforms

`platforms/build-host/` contains agent playbooks for deploying, operating, designing, and scaffolding projects on build.host. Start at [`platforms/build-host/OVERVIEW.md`](platforms/build-host/OVERVIEW.md).

## Frontmatter Contract

Every `SKILL.md` uses YAML frontmatter:

```yaml
---
name: accounts-receivable
description: "Use this skill when managing customer invoices, payment collection, cash application, aging, and dunning."
version: 1.0.0
agents:
  - collections
  - reconciliation
related:
  - general-ledger
  - period-close
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 03-org-1k-plus
  type: skill
  scope: internal
---
```

Required fields:

- `name`
- `description`
- `version`
- `metadata.author`
- `metadata.domain`
- `metadata.type`
- `metadata.scope`

Optional downstream-facing fields:

- `agents`: agent capability slugs that work on this skill.
- `related`: other skill slugs this skill commonly works with.

`related` slugs must resolve to another `SKILL.md` in this repo. Consumers that mirror only part of the repo should hide unresolved related slugs rather than render broken links.

## Lab-Sites Context

[erphq/lab-sites](https://github.com/erphq/lab-sites) currently mirrors a curated subset of department skills under:

```text
apps/web-lab/src/content/skills/<department>/<size-tier>/<slug>/SKILL.md
```

The current renderer keys those mirrored pages by bare skill slug. That works for the curated enterprise mirror, but the full repo must be keyed by canonical path because many slugs intentionally repeat across org-size tiers, such as:

```text
departments/finance-accounting/01-org-under-100/accounts-payable/SKILL.md
departments/finance-accounting/02-org-100-to-1k/accounts-payable/SKILL.md
departments/finance-accounting/03-org-1k-plus/accounts-payable/SKILL.md
```

Full-repo consumers should treat canonical path as identity and `name` as the local skill slug.

## Validation

Run:

```bash
node scripts/validate-repo.mjs
gitleaks detect --source . --config .gitleaks.toml --redact --verbose
```

The validator checks:

- all `SKILL.md` files have required frontmatter and an H1
- YAML plain scalars do not contain unquoted `: ` values
- `agents` and `related` are lists when present
- `related` references resolve somewhere in the repo
- Markdown and HTML local links resolve
- current lab-sites enterprise department slugs stay unique
- legacy brand strings and live-looking example tokens do not reappear

CI runs the same repo validation on pull requests.

## Status

The enterprise tier (`03-org-1k-plus`) is populated across all departments. Many `01-org-under-100` and `02-org-100-to-1k` skills are populated where the operating pattern differs materially. Some non-enterprise folders still contain only `.gitkeep` until there is a concrete skill to write.

## License

MIT. Use it, fork it, and build with it.
