---
name: fit-gap-matrix
description: This skill should be used when the task involves template for scoring requirements against platform capabilities with effort estimates — use during discovery and solution design phases.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - template
  type: template
  scope: internal
---
# Fit-Gap Matrix

## Purpose
The Fit-Gap Matrix is the central artifact of enterprise app evaluation. It maps every business requirement against what the platform can do out-of-the-box, what needs configuration, and what requires custom development. This template provides the structure, scoring methodology, and decision framework to produce a fit-gap analysis that drives scope, timeline, and budget.

Use this when: a builder is evaluating whether ERP•AI can meet a set of business requirements, or when scoping the effort to build an enterprise app.

## Template Structure

### Header Fields

| Field | Description |
|-------|-------------|
| Project Name | Name of the enterprise app or module being evaluated |
| Version | Document version (increment on each review cycle) |
| Date | Last updated date |
| Author | Who performed the analysis |
| Stakeholders | Who reviewed and approved the ratings |
| Source System | Legacy system or process being replaced (if applicable) |

### Requirement Row Fields

| Column | Description | Values |
|--------|-------------|--------|
| **Req ID** | Unique identifier (e.g., FIN-AP-001) | Format: DOMAIN-PROCESS-### |
| **Category** | Functional area | Finance, HR, Supply Chain, Sales, etc. |
| **Process** | Business process this belongs to | e.g., Invoice Processing, Payroll Run |
| **Requirement** | Clear statement of what the business needs | Plain language, one requirement per row |
| **Priority** | Business priority | Must Have / Should Have / Could Have / Won't Have |
| **Fit Rating** | How well the platform meets this requirement | Full Fit / Partial Fit / Gap / Not Applicable |
| **Resolution** | How the gap will be addressed | Configuration / Customization / Integration / Workaround / Out of Scope |
| **Effort** | Estimated effort to resolve | S (< 1 day) / M (1-5 days) / L (1-4 weeks) / XL (> 4 weeks) |
| **Risk** | Implementation risk | Low / Medium / High |
| **Notes** | Additional context, assumptions, dependencies | Free text |
| **Owner** | Who is responsible for resolving this item | Name or role |

## Scoring Methodology

### Fit Ratings Defined

- **Full Fit**: The platform handles this requirement out-of-the-box with standard configuration. No custom code needed. This is the baseline expectation — most requirements should land here for the platform to be viable.
- **Partial Fit**: The platform handles the core requirement but needs minor configuration, a workaround, or an adjacent feature used creatively. Acceptable if the workaround is sustainable long-term.
- **Gap**: The platform does not support this requirement natively. Requires custom development, a third-party integration, or a fundamental process change on the business side.
- **Not Applicable**: The requirement doesn't apply to this platform or has been descoped.

### Priority Definitions (MoSCoW)

- **Must Have**: Non-negotiable. The app cannot go live without this. Regulatory requirements, core business processes, and data integrity requirements fall here.
- **Should Have**: Important but not blocking go-live. Can be delivered in a fast-follow release. Process improvements and efficiency gains often land here.
- **Could Have**: Nice to have. Delivers value but the business can operate without it. Often deferred to Phase 2+.
- **Won't Have**: Explicitly out of scope for this project. Documenting what's out is as important as what's in.

### Effort Sizing Guide

| Size | Duration | Typical Work |
|------|----------|-------------|
| S | < 1 day | Toggle a setting, add a field, configure a simple rule |
| M | 1-5 days | Build a workflow, create a report, set up an integration mapping |
| L | 1-4 weeks | Custom module, complex integration, data migration pipeline |
| XL | > 4 weeks | Major customization, multi-system integration, regulatory feature |

## Workflow

1. **Gather requirements** — Work with the Requirements Analyst role. Pull from discovery workshops, stakeholder interviews, existing process documentation, and regulatory mandates. Enter one requirement per row with Req ID, Category, Process, and Priority.

2. **Assess fit** — For each requirement, evaluate the platform's capability. Demo or prototype where uncertain. Rate as Full Fit, Partial Fit, or Gap. Be honest — optimistic fit ratings cause pain later.

3. **Define resolution path** — For every Partial Fit and Gap, specify how it will be addressed. Configuration is preferred over customization. Integration is preferred over rebuilding. Document the specific approach, not just the category.

4. **Estimate effort** — Size each resolution. Use T-shirt sizes. Factor in testing, documentation, and deployment — not just build time.

5. **Review with stakeholders** — Walk through the matrix with business stakeholders. They validate priorities and fit ratings. Technical stakeholders validate effort estimates. This is a negotiation — some Gaps become process changes, some Must Haves become Should Haves.

6. **Baseline the matrix** — Lock the version after sign-off. This becomes the scope contract. All future scope changes are measured against this baseline.

## Decision Guide

### When a Requirement is a Gap

```
Is it a Must Have?
├── Yes → Can the business process change to fit the platform?
│   ├── Yes → Document as Partial Fit with process change note
│   └── No → Estimate custom build effort
│       ├── Effort ≤ L → Build it, add to scope
│       └── Effort = XL → Evaluate: Is this a platform deal-breaker?
│           ├── Yes → Escalate to steering committee
│           └── No → Defer to Phase 2, implement workaround for Phase 1
└── No → Defer to Phase 2+ or descope entirely
```

## Common Patterns

**Pattern: The 80/20 Rule** — A viable platform should achieve Full Fit on 70-80% of Must Have requirements. If you're below 60%, reconsider the platform choice.

**Pattern: Process Change Over Customization** — When a requirement is a Gap, first ask "can the business process change?" before jumping to custom development. Customizations create maintenance burden. Process changes are free.

**Pattern: Regulatory Non-Negotiables** — Compliance requirements (SOX controls, GDPR data handling, HIPAA audit trails) are always Must Have and cannot be resolved with workarounds. Either the platform does it or you build it.

**Anti-pattern: The Everything Matrix** — Listing 500+ requirements with no prioritization. Keep it to requirements that actually differentiate outcomes. "The system shall have a login page" is not a fit-gap item.

**Anti-pattern: Optimistic Fit Ratings** — Rating something as Full Fit because "it could probably do that" without verifying. Every Full Fit rating is a commitment that the platform handles it without custom work.

## Checklist

- [ ] Every requirement has a unique Req ID following the naming convention
- [ ] All requirements are prioritized using MoSCoW
- [ ] Every Partial Fit and Gap has a defined resolution path
- [ ] Effort estimates account for testing and deployment, not just build
- [ ] Regulatory/compliance requirements are flagged and rated conservatively
- [ ] Stakeholders have reviewed and signed off on fit ratings
- [ ] Matrix is baselined with version number and date
- [ ] Out-of-scope items are explicitly listed (Won't Have)
- [ ] Dependencies between requirements are documented
- [ ] XL-effort items have been escalated for scope/budget discussion

## Related

- [Requirements Analyst](../../roles/requirements-analyst/SKILL.md) — The role that drives this process
- [Solution Architect](../../roles/solution-architect/SKILL.md) — Validates technical fit ratings and effort estimates
- [Requirements Traceability](../requirements-traceability/SKILL.md) — Links these requirements forward to config and test
- [Go-Live Checklist](../go-live-checklist/SKILL.md) — Must Have items feed directly into go/no-go criteria
