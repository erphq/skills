---
name: requirements-traceability
description: This template should be used when tracking business requirements through design, build, and test at an organization under 100 employees — a lightweight alternative to enterprise RTMs, suitable for SaaS implementations + smaller custom builds.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  size_tier: 01-org-under-100
  type: template
  scope: internal
---
# Requirements Traceability — Under 100 People

## Purpose

At under-100 people, a full enterprise Requirements Traceability Matrix (RTM) with 20-column rigor is overkill. **This is the trim version**: a simple table that shows, for every business requirement, what was built + how it was tested + who signed off. It's the answer when someone asks "wait, did we ever actually build the invoice-export feature?" three months after go-live.

Use when:
- Implementing a new SaaS platform with material configuration work
- Custom-building an internal tool or workflow
- Making a material process change requiring cross-team agreement
- Any scope where "did we ship what we said?" matters

Don't use when:
- Buying + configuring a SaaS tool with minimal customization
- Small iterative product changes
- Anything where the scope is trivial (< 1 week effort)

## Template Structure

A spreadsheet or Notion table. 5–8 columns max. Goal: one row per requirement, trackable through lifecycle.

### Columns

| Column | Content |
|---|---|
| Req ID | R1, R2, R3… |
| Requirement | One sentence — what does this need to do? |
| Priority | Must / Should / Nice |
| Owner | Who's accountable |
| Implementation | Config / custom / third-party / skip |
| Test plan | How will we validate it works? |
| Status | Not started / In progress / Built / Tested / Signed off |
| Sign-off | Who approved + date |

### Sample Row

| R3 | Export all AR invoices to CSV for monthly bank reconciliation | Must | CFO | Configuration (NetSuite saved search) | Run for Sept; CFO validates totals match bank | Signed off | Jane / 2025-10-03 |

## The Workflow

### Phase 1: Capture (Week 1)

- Interview stakeholders — 30 min each with department heads affected
- Extract requirements — list 10–50 items
- Prioritize — Must / Should / Nice split (force reasonable ratio, ~30/50/20)
- Assign owners

### Phase 2: Design (Week 2)

- For each requirement, decide implementation path — native, configuration, third-party, custom, defer
- Add effort estimate — rough: S (hours), M (days), L (weeks)
- Review with stakeholders — scope-agreement meeting

### Phase 3: Build (Week 3–N)

- Developers / admins / consultants work through requirements
- Status updated per requirement as work progresses
- Blockers surfaced early

### Phase 4: Test (Pre-Go-Live)

- Each requirement tested against its test plan
- Failures logged; fix + re-test
- Stakeholder sign-off per requirement

### Phase 5: Post-Launch

- Requirements not yet signed-off → tracked as open
- New requirements surfacing → separate change-request log (don't bloat the original RTM)

## Sample Requirements

For a CRM implementation:

| ID | Req | Priority | Impl |
|---|---|---|---|
| R1 | Track contact activity (emails, calls, meetings) | Must | Native + Gmail plugin |
| R2 | Multi-pipeline management (new biz, renewals, referrals) | Must | Native configuration |
| R3 | Custom field: Revenue potential | Should | Config |
| R4 | Auto-sync with QuickBooks for closed deals | Must | Third-party (Zapier) |
| R5 | Dashboard: Weekly pipeline health | Should | Native reporting |
| R6 | Forecast by territory (we don't have territories yet) | Nice | Skip |

## Common Mistakes

- **Listing too many requirements**: 100 entries, nobody reads it, scope creeps. Cap at ~30 for small-org implementations.
- **Everything "Must"**: Defeats prioritization. If everything matters equally, nothing does.
- **No test plan per requirement**: "We'll test it before go-live." Vague. Specific test plan per row.
- **No owner**: Requirement orphaned; nothing happens.
- **Sign-off meetings never happen**: Requirements "complete" without validation. Post-launch surprises.
- **Requirement-spec not updated**: Reality diverges from document; document becomes fiction.
- **Over-formal with a small team**: 20-column enterprise RTM for a 3-person config project = massive time sink.

## When to Upgrade

Move to the **100–1k org** version when:

- Multi-team / multi-workstream implementation (5+ parallel tracks)
- External consultant engagement with formal contract scope
- Audit / compliance-driven implementation (SOX, GDPR, HIPAA) where traceability is legally required
- Multi-phase rollout across geographies / business units

## Output

- Living RTM (spreadsheet or Notion)
- Sign-off log
- Post-launch "requirements-completion" summary

## Related

- [Fit-Gap Matrix](../fit-gap-matrix/SKILL.md) — precedes RTM (fit-gap identifies which requirements need what work)
- [Go-Live Checklist](../go-live-checklist/SKILL.md) — RTM sign-off feeds into go-live readiness
- [Migration Runbook](../migration-runbook/SKILL.md) — data migration often has its own traceability
- [Mid-Market Requirements Traceability (100–1k)](../../02-org-100-to-1k/requirements-traceability/SKILL.md)
- [Enterprise Requirements Traceability (1k+)](../../03-org-1k-plus/requirements-traceability/SKILL.md)
