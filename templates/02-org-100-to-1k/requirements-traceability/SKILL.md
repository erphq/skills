---
name: requirements-traceability
description: This template should be used when formal Requirements Traceability Matrix (RTM) is needed at an organization of 100-1,000 employees — for multi-workstream enterprise implementations, consultant-led projects, and audit / compliance-driven scope where traceability from requirement to test to sign-off is required.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  size_tier: 02-org-100-to-1k
  type: template
  scope: internal
---
# Requirements Traceability Matrix — 100 to 1,000 People

## Purpose

At mid-market, RTM is **the formal document chain** from business requirement → design decision → configuration/customization → test case → test result → user sign-off → production release. Required for:

- Enterprise platform implementations (NetSuite, Workday, Salesforce Enterprise)
- Regulatory-driven projects (SOX-scope systems, GDPR-impacted workflows, HIPAA-regulated applications)
- Consultant-led implementations with formal contract scope
- Public-company-track or pre-IPO readiness

The RTM proves that every committed requirement was designed, built, tested, validated, and accepted. Auditors + lawyers + boards expect this. Without it, SOX attestation is difficult; consultant disputes become he-said-she-said; post-launch "we didn't deliver that" disagreements have no record.

## Structure

Typical RTM has 15–25 columns + 200–1,500 rows. Maintained in spreadsheet (Excel, Google Sheets, Smartsheet) or dedicated tool (Jama, IBM DOORS, Modern Requirements, Atlassian Requirements).

### Core Columns

| Column | Content |
|---|---|
| Req ID | Hierarchical (F-01-01 = Finance / AR / Req 01) |
| Workstream | Finance, HR, Sales, Ops, IT, Security |
| Epic / Parent | Higher-level grouping |
| Requirement | Detailed requirement (1–3 sentences) |
| Source | Interview / policy / regulation / market |
| Business Owner | Stakeholder accountable |
| Priority | Must / Should / Could / Won't (MoSCoW) |
| Implementation Type | Config / Custom / Integration / 3rd-Party / Process / Skip |
| Design Doc | Link to design decision |
| Build Owner | Developer / admin responsible |
| Configuration / Code Reference | Where built (SFDC config, Jira ticket, GitHub branch) |
| Test Case IDs | Link to test cases covering requirement |
| Test Status | Not tested / In progress / Passed / Failed |
| Defect IDs | Open or resolved defects |
| UAT Sign-off | Business user who accepted |
| UAT Date | Date of acceptance |
| Go-Live Status | Deployed / Deferred |
| Post-Go-Live Status | Working / Issue-outstanding |
| Audit Evidence | Supporting documentation for audit |
| Compliance Tags | SOX, GDPR, HIPAA, PCI, industry-specific |
| Risk Level | Low / Med / High |
| Notes | Commentary |

### MoSCoW Priority Definitions

- **Must Have (M)**: Go-live blocker. Contract deliverable. SLA-covered.
- **Should Have (S)**: Important; acceptable delay to post-launch phase.
- **Could Have (C)**: Nice-to-have; deferrable.
- **Won't Have this phase (W)**: Out of scope; documented for future.

### Test Status

- **Not Tested**: Build may not be complete
- **In Progress**: UAT underway
- **Passed**: Testing successful, awaiting sign-off
- **Failed**: Defect logged; re-testing required

## The RTM Lifecycle

### Phase 1: Requirements Gathering (Weeks 1–4)

- Stakeholder interviews per workstream
- Policy + regulatory document review
- Market / competitor research for best-practice requirements
- Requirements drafted + reviewed by business owner
- MoSCoW prioritization + scope agreement

### Phase 2: Design (Weeks 4–8)

- Per requirement: design decision documented
- Implementation-type determined (config / custom / integration / etc.)
- Effort estimate per requirement
- Design review with stakeholders
- Fit-gap analysis may feed design decisions

### Phase 3: Build (Weeks 8–N)

- Configuration / customization tracked per requirement
- Daily / weekly status updates in RTM
- Build-complete sign-off per requirement

### Phase 4: Test (Weeks N–N+4)

- Test cases written per requirement (traceability)
- Test execution; status updated
- Defects logged; re-test cycle
- Pass/fail recorded per test case per requirement

### Phase 5: UAT + Sign-off (Weeks N+4–N+6)

- Business users execute UAT test cases
- Formal sign-off per requirement
- Outstanding issues either resolved or risk-accepted

### Phase 6: Go-Live (Week N+6)

- Deployed requirements → "Deployed" status
- Deferred requirements → "Deferred" with reason
- Go-live criteria check: all Must Have requirements deployed + signed off

### Phase 7: Post-Go-Live Tracking

- Working requirements: confirmed functioning in production
- Issues post-launch: defects logged + resolved
- Audit evidence finalized for compliance-scope requirements

## Compliance-Specific Columns

For regulated environments, additional columns:

- **Control ID**: For SOX compliance, maps requirement to internal control
- **Risk Assessment**: Likelihood × impact of requirement gap
- **Test Evidence**: Screenshots, logs, workpapers
- **Auditor Review Status**: Unreviewed / In Progress / Accepted
- **Remediation Plan**: If test failed, corrective-action plan

## Audit / Compliance Integration

For SOX + regulated environments, RTM feeds:

- **Internal Controls Matrix**: Control-ID per requirement
- **Evidence binder**: Documentation supporting each control
- **Deficiency tracker**: Failed controls + remediation
- **Auditor work papers**: External auditor reviews per compliance cycle

## Quality Gates

Before go-live:

- [ ] **100% Must Have requirements tested + signed off** (no gaps)
- [ ] **No critical defects open** for Must Have requirements
- [ ] **Design docs complete** for all requirements
- [ ] **Business-owner sign-off** documented per requirement
- [ ] **Compliance tags + audit evidence** complete for regulated scope

## Change Management

New requirements post-initial-freeze → **Change Request Log** separate from RTM. Each CR:

- Estimated impact
- Business-justification
- Approval (steering committee)
- If approved: becomes new RTM row with "Phase 2" tag
- Ensures original RTM reflects original scope; CR log captures scope evolution

## Common Mistakes

- **RTM-as-afterthought**: Built post-launch for audit; inaccurate; defensive.
- **Requirement list bloat**: 2,000 requirements for an SFDC implementation. Nobody can maintain.
- **Priority-everything-Must**: Meaningless prioritization; scope creep.
- **Design-docs skipped**: Requirement → build without design record; post-launch "we didn't agree to that" disputes.
- **Test-case-to-requirement not linked**: Can't prove requirement tested; audit fail.
- **UAT sign-off papered-over**: Business owner pressured to sign; untested features go live.
- **Change Request Log not maintained**: Scope creeps silently; budget + timeline blown.
- **Post-launch RTM abandoned**: Requirements "complete" but actual production state diverges.

## Tooling Recommendations

- **Spreadsheet**: Smartsheet, Google Sheets, Excel — for simple implementations
- **Project-management integration**: Jira with custom issue types; Azure DevOps
- **Dedicated RTM tools**: Jama Software, IBM DOORS, Modern Requirements, Helix RM
- **Test-case integration**: Zephyr / Xray (Jira), TestRail, qTest, PractiTest

Tool choice depends on implementation scale + regulatory requirements + team familiarity.

## Output Deliverables

1. **Living RTM** — maintained through implementation
2. **Change Request Log** — scope-evolution tracking
3. **Sign-off evidence** — per requirement (business owner + date)
4. **Test Execution Report** — per requirement test results
5. **Compliance Evidence Package** — for audited scope
6. **Post-Launch Requirements Status** — what shipped, what deferred, what in flight

## Related

- [Fit-Gap Matrix](../fit-gap-matrix/SKILL.md) — fit-gap feeds RTM
- [Go-Live Checklist](../go-live-checklist/SKILL.md) — RTM sign-off feeds go-live readiness
- [Migration Runbook](../migration-runbook/SKILL.md) — data-migration requirements tracked in RTM
- [Small-Org Requirements Traceability (<100 people)](../../01-org-under-100/requirements-traceability/SKILL.md)
- [Enterprise Requirements Traceability (1k+)](../../03-org-1k-plus/requirements-traceability/SKILL.md)
