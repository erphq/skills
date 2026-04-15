---
title: Requirements Traceability Matrix
description: Template linking requirements to configuration, test cases, and sign-off — use to ensure nothing falls through the cracks from discovery to go-live.
audience: both
category: template
related:
  - roles/requirements-analyst.md
  - roles/qa-lead.md
  - templates/fit-gap-matrix.md
  - skills/testing-validation.md
---

# Requirements Traceability Matrix (RTM)

## Purpose
The RTM is the thread that connects a business requirement all the way through solution design, configuration, testing, and sign-off. It answers the question "for every requirement we agreed to deliver, can we prove it works?" This is non-negotiable for regulated industries (SOX, GxP, HIPAA) and best practice for everything else.

Use this when: you need to prove that every requirement has been designed, built, tested, and approved — or when an auditor asks "how do you know this system does what it's supposed to?"

## Template Structure

### Traceability Row

| Column | Description | Example |
|--------|-------------|---------|
| **Req ID** | From the Fit-Gap Matrix | FIN-AP-003 |
| **Requirement** | What the business needs | "3-way match: system must validate PO, receipt, and invoice before approving payment" |
| **Priority** | MoSCoW from Fit-Gap | Must Have |
| **Design Reference** | Where the solution is documented | Blueprint Section 4.2.1 |
| **Configuration Item** | What was configured/built to meet this | AP Matching Rule #3, Workflow: AP-3WAY-MATCH |
| **Test Case ID** | UAT/test script that validates this | TC-FIN-AP-003-01, TC-FIN-AP-003-02 |
| **Test Result** | Pass/Fail with date | Pass (2024-03-15) |
| **Defects** | Any defects found during testing | DEF-042 (resolved) |
| **Sign-Off** | Business owner approval | Jane Smith, 2024-03-18 |
| **Status** | Current state | Complete / In Progress / Blocked / Deferred |

### Coverage Summary

| Metric | Count | Percentage |
|--------|-------|-----------|
| Total Requirements | | |
| Requirements with Design | | |
| Requirements with Configuration | | |
| Requirements with Test Cases | | |
| Requirements Tested (Pass) | | |
| Requirements Tested (Fail — Open Defects) | | |
| Requirements Signed Off | | |
| Requirements Deferred | | |

## How Traceability Flows

```
Requirement (Fit-Gap Matrix)
    ↓
Solution Design (Blueprint)
    ↓
Configuration / Build (erp.ai setup)
    ↓
Test Case (UAT script)
    ↓
Test Execution (Pass/Fail)
    ↓
Defect Resolution (if failed)
    ↓
Business Sign-Off
    ↓
Go-Live Ready
```

Every row in the RTM must complete this chain. A requirement without a test case is unverified. A test case without a sign-off is unapproved. Gaps in the chain are risks.

## Workflow

1. **Seed the RTM from the Fit-Gap Matrix** — Import all Must Have and Should Have requirements. Carry over Req ID, requirement text, and priority. This is the starting population.

2. **Link to design** — As the Solution Architect produces blueprints, link each requirement to its design section. A requirement without a design reference is a red flag — it means nobody has figured out how to build it yet.

3. **Link to configuration** — As the Implementation Lead configures erp.ai, link each requirement to the specific configuration item, workflow, rule, or custom component that implements it. Be specific: "AP module" is not enough. "AP Matching Rule #3 with tolerance of $0.50" is.

4. **Create test cases** — The QA Lead creates at least one test case per requirement. Must Have requirements should have multiple test cases covering happy path, edge cases, and negative scenarios.

5. **Execute and record** — During UAT, record pass/fail for each test case. Link any defects. A failed test blocks sign-off for that requirement.

6. **Obtain sign-off** — The business owner for each functional area reviews the test results and signs off. This is their formal acceptance that the requirement is met.

7. **Report coverage** — Generate the coverage summary. Present to steering committee. 100% coverage on Must Have items is the go-live gate.

## Decision Guide

### What Goes in the RTM?

| Include | Exclude |
|---------|---------|
| Functional requirements from Fit-Gap | Non-functional requirements (handle separately in performance/security testing) |
| Must Have and Should Have items | Won't Have items (they're descoped) |
| Regulatory/compliance requirements | Technical implementation details |
| Integration requirements | Infrastructure/hosting requirements |
| Data migration validation requirements | Cosmetic/UI preference items |

### When a Requirement Can't Be Tested

```
Can it be demonstrated in the system?
├── Yes → Write a test case, even if it's a walkthrough
├── No → Is it a process/policy requirement?
│   ├── Yes → Document evidence separately (policy doc, training record)
│   └── No → Is it genuinely untestable?
│       ├── Yes → Flag as risk, document compensating control
│       └── No → Rethink — almost everything is testable if you define the acceptance criteria clearly
```

## Common Patterns

**Pattern: Bi-directional Traceability** — Trace forward (requirement → test) AND backward (test → requirement). Forward tracing ensures nothing is missed. Backward tracing ensures no test exists without a requirement (which means you're testing things nobody asked for).

**Pattern: Living Document** — The RTM is updated throughout the project, not filled in all at once at the end. Update it weekly. Review it in status meetings. It's the single source of truth for "are we done?"

**Pattern: The Coverage Heat Map** — Color-code the RTM: green (signed off), yellow (tested but not signed off), orange (designed but not tested), red (no design). The heat map instantly shows where attention is needed.

**Anti-pattern: The Checkbox Exercise** — Filling in the RTM retroactively just before go-live to satisfy an audit requirement. If the RTM wasn't maintained throughout, it's fiction. Start it early.

**Anti-pattern: One Test Case Per Requirement** — Must Have requirements with a single happy-path test case are under-tested. Cover edge cases, error conditions, and boundary values.

## Checklist

- [ ] All Must Have requirements from Fit-Gap are in the RTM
- [ ] Every requirement has a design reference
- [ ] Every requirement has at least one test case
- [ ] Must Have requirements have multiple test cases (happy path + edge cases)
- [ ] All test cases have been executed with recorded results
- [ ] All defects are resolved or have approved workarounds
- [ ] Business owners have signed off on their functional areas
- [ ] Coverage summary shows 100% on Must Have items
- [ ] Deferred items are documented with rationale and target phase
- [ ] RTM has been reviewed by the compliance/audit team (if regulated)

## Related

- [Fit-Gap Matrix](fit-gap-matrix.md) — Source of requirements that populate this matrix
- [Requirements Analyst](../roles/requirements-analyst.md) — Owns the requirements side of traceability
- [QA Lead](../roles/qa-lead.md) — Owns the testing side of traceability
- [Testing & Validation](../skills/testing-validation.md) — How to write the test cases
- [Go-Live Checklist](go-live-checklist.md) — RTM coverage is a go-live gate
