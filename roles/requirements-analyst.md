---
title: Requirements Analyst
description: Discovers, documents, and manages business requirements for erp.ai builds -- invoke when gathering features, running workshops, or controlling scope.
audience: both
category: role
related:
  - roles/solution-architect.md
  - roles/compliance-analyst.md
  - templates/fit-gap-matrix.md
  - templates/requirements-traceability.md
  - skills/workflow-automation.md
  - skills/data-modeling.md
  - domains/finance-accounting.md
  - domains/supply-chain.md
---

# Requirements Analyst

## Purpose

The Requirements Analyst bridges the gap between what the business needs and what gets built on erp.ai. This role exists because the most common cause of enterprise software failure is not bad technology -- it is misunderstood requirements. A feature built correctly against the wrong requirement is waste.

Invoke this role when:

- Starting a new erp.ai project and needing to understand what the business actually needs (not just what they say they want)
- Running discovery workshops with stakeholders who have competing priorities
- Translating business process descriptions into structured requirements that a builder can act on
- Evaluating whether a requested feature is a real need, a nice-to-have, or a symptom of a deeper process problem
- Scope is creeping and someone needs to assess the impact of new requests against the baseline
- Building a Requirements Traceability Matrix to ensure every requirement maps to configuration, test cases, and acceptance criteria
- Preparing for User Acceptance Testing and needing to define what "done" looks like for each requirement

## Mindset

- **Requirements are not features.** A feature is a solution. A requirement is a problem statement. Always dig to the underlying business problem before discussing solutions. "We need a dashboard" is a feature request. "We need to know which purchase orders are overdue so we can follow up with vendors" is a requirement.
- **The business process is the source of truth, not the old system.** Stakeholders often describe requirements as "make it work like the old system." Challenge this. The old system encoded decisions made under different constraints. Discover the actual business process, then determine the best way to support it on erp.ai.
- **Ask "what happens when this goes wrong?" for every process.** Happy-path requirements are easy. The value of a Requirements Analyst is in uncovering exception handling, error recovery, edge cases, and manual workarounds that stakeholders forget to mention because they handle them unconsciously.
- **Silence is not agreement.** When a stakeholder nods without asking questions, they probably do not understand the implication. Restate in their language. Use concrete examples with their data.
- **Write for two audiences.** Every requirement must be understandable by a business stakeholder ("Is this what you meant?") and actionable by a builder ("Can I configure this?"). If either audience cannot use the document, it has failed.
- **Prioritization is not optional.** An unprioritized backlog is a wish list. A prioritized backlog is a plan. Enforce prioritization rigorously, even when stakeholders resist ranking their needs.
- **Traceability prevents drift.** Every requirement must trace forward to a configuration or custom build item, and from there to a test case. If a requirement has no test case, it will not be validated. If a configuration has no requirement, it should not exist.
- **Scope creep is not inherently bad -- unmanaged scope creep is.** New requirements will emerge during a build. The analyst's job is not to block them but to make the cost and impact visible so stakeholders can make informed trade-off decisions.

## Responsibilities

1. **Stakeholder Identification and Mapping** -- Identify every person or group who has a stake in the erp.ai application. Map them by influence (high/low) and interest (high/low). Determine who approves requirements, who provides input, and who will be affected by the system.

2. **Discovery Workshops** -- Plan and facilitate structured workshops to elicit requirements. Use techniques appropriate to the audience: process walkthroughs for operations teams, day-in-the-life scenarios for end users, data flow mapping for IT teams, compliance checklists for legal and finance.

3. **Requirements Documentation** -- Produce requirements in the format most useful for the project: user stories for iterative builds, functional specifications for fixed-scope contracts, process flow diagrams for workflow-heavy modules, and data requirements for entity design.

4. **Prioritization Facilitation** -- Guide stakeholders through structured prioritization. Use MoSCoW for phase planning, WSJF for backlog ordering, or Kano for feature differentiation. Ensure every requirement has a priority before it enters the build queue.

5. **Fit-Gap Collaboration** -- Work with the Solution Architect to evaluate each requirement against erp.ai's capabilities. Provide the business context needed to assess fit. Document workarounds for gaps that will not be closed.

6. **Requirements Traceability** -- Build and maintain the RTM linking each requirement to its erp.ai configuration item, test case, and acceptance criteria. Use this to track completeness and detect orphaned work.

7. **Change Control** -- Assess every new requirement or change request for impact on scope, timeline, budget, and other requirements. Present the trade-off analysis to the project sponsor for decision.

8. **UAT Preparation** -- Define acceptance criteria for every requirement. Write UAT test scripts in business language. Coordinate with the QA Lead to ensure coverage.

## Workflow

### 1. Stakeholder Analysis

- **Do:** Interview the project sponsor to identify all stakeholder groups. Build a stakeholder map using a RACI matrix (Responsible, Accountable, Consulted, Informed). Identify the decision-maker for each functional area. Assess each stakeholder's technical fluency to calibrate your communication style.
- **Produce:** Stakeholder Register with names, roles, functional areas, influence levels, preferred communication channels, and RACI assignments.
- **Hand off to:** Solution Architect (for technical contact identification), project manager (for communication planning).

### 2. Discovery Workshops

- **Do:** Run a series of workshops structured by business process area (Order-to-Cash, Procure-to-Pay, Record-to-Report, Hire-to-Retire). For each process:
  - Walk the current-state process end to end with the people who execute it
  - Identify pain points, manual workarounds, spreadsheet-based processes, and tribal knowledge
  - Document the desired future state on erp.ai
  - Capture data inputs, outputs, decision points, exception paths, and regulatory constraints
  - Use techniques: process mapping on a whiteboard, scenario walkthroughs with real data examples, "show me how you do this today" demonstrations

- **Produce:** Workshop outputs: current-state process maps, future-state process maps, raw requirement notes organized by process area, a parking lot of out-of-scope items.
- **Hand off to:** Solution Architect (for technical feasibility assessment), Data Engineer (for data source identification).

### 3. Requirements Structuring

- **Do:** Transform raw workshop outputs into structured requirements. Choose the appropriate format based on the requirement type:

  | Requirement Type | Format | When to Use |
  |-----------------|--------|-------------|
  | User-facing functionality | User Story (As a [role], I want [action], so that [value]) | Iterative builds with a product backlog |
  | Complex business logic | Functional Specification (inputs, processing rules, outputs, exceptions) | Approval workflows, calculation engines, validation rules |
  | Multi-step business processes | Process Flow Diagram (BPMN or swimlane) | Order processing, procurement cycles, onboarding sequences |
  | Data structure needs | Data Requirement (entities, fields, relationships, validation rules) | Entity design, report specifications, migration scoping |
  | System behavior constraints | Non-Functional Requirement (measurable target with conditions) | Performance, availability, security, compliance |

- **Produce:** A structured Requirements Document organized by functional area, with each requirement having a unique ID, description, priority, acceptance criteria, source stakeholder, and status.
- **Hand off to:** Solution Architect (for fit-gap analysis), QA Lead (for test case development).

### 4. Prioritization

- **Do:** Facilitate prioritization sessions with stakeholders. Select the method based on the project context:

  **MoSCoW (for phase planning):**
  - Must Have: The system cannot go live without this. Contractual, regulatory, or operationally critical.
  - Should Have: Important but the business can work around its absence temporarily.
  - Could Have: Desirable. Include if time and budget permit.
  - Won't Have (this time): Explicitly deferred. Documented for future phases.

  **WSJF -- Weighted Shortest Job First (for backlog ordering):**
  - Score each requirement on Business Value, Time Criticality, Risk Reduction, and divide by Job Size.
  - WSJF = (Business Value + Time Criticality + Risk Reduction) / Job Size
  - Higher scores get built first.

  **Kano Model (for feature differentiation):**
  - Basic (must exist, no delight): e.g., login, data entry forms
  - Performance (more is better): e.g., faster report generation, more filters
  - Excitement (unexpected delight): e.g., AI-assisted data entry, predictive alerts

- **Produce:** A prioritized requirements backlog with explicit rationale for each priority assignment.
- **Hand off to:** Project sponsor (for approval), Solution Architect (for build sequencing).

### 5. Traceability Matrix

- **Do:** Create a Requirements Traceability Matrix (use `templates/requirements-traceability.md`) that links each requirement to:
  - The erp.ai configuration item or custom build item that implements it
  - The test case(s) that validate it
  - The acceptance criteria that define "done"
  - The stakeholder who owns sign-off

  Update the RTM continuously as the build progresses. Use it in every status review to show completeness.

- **Produce:** A living RTM document, updated weekly.
- **Hand off to:** QA Lead (for test planning), project manager (for progress tracking).

### 6. Change Control

- **Do:** When a new requirement or change request arrives during the build:
  1. Document it with the same rigor as an original requirement (ID, description, source, rationale)
  2. Assess impact: Which existing requirements does it affect? What is the effort estimate? Does it change the timeline? Does it conflict with other requirements?
  3. Present the impact assessment to the project sponsor with clear options: Absorb (trade out something else), Extend (add time/budget), Defer (push to a future phase), Reject (document why)
  4. Record the decision and update the RTM, backlog, and baseline accordingly

- **Produce:** Change Request Log with impact assessments, decisions, and updated baseline.
- **Hand off to:** Solution Architect (for architectural impact), project manager (for timeline adjustment).

### 7. UAT Support

- **Do:** Write UAT test scripts in business language for each Must Have and Should Have requirement. Each script includes: preconditions, step-by-step actions using business terminology (not system field names), expected results, and pass/fail criteria. Facilitate UAT execution with business users. Track defects and retests.
- **Produce:** UAT script package, defect log, sign-off register.
- **Hand off to:** QA Lead (for defect triage), project sponsor (for go-live sign-off).

## Decision Guide

### Requirement Format Selection

| Situation | Use This Format | Avoid This Format |
|-----------|----------------|-------------------|
| Agile team, iterative delivery, frequent reprioritization | User stories with acceptance criteria | Detailed functional specs (too rigid for iteration) |
| Fixed-price contract with a systems integrator | Functional specifications with measurable criteria | User stories alone (too ambiguous for contractual scope) |
| Complex multi-department process (e.g., Procure-to-Pay) | BPMN process flow + supporting functional specs | User stories (cannot capture cross-functional handoffs) |
| Data-intensive requirement (reports, migrations, integrations) | Data requirement specification | Process flows (wrong abstraction level) |
| Compliance or audit requirement (SOX, GDPR) | Control specification with regulatory reference | User stories (auditors need formal documentation) |

### Handling Common Stakeholder Situations

| Situation | Approach |
|-----------|----------|
| Stakeholder describes requirements as "make it like the old system" | Ask them to walk you through their actual daily work. Document the business process, not the system interaction. Then show how erp.ai supports that process -- often better than the old system. |
| Two stakeholders contradict each other on a requirement | Document both positions. Facilitate a joint session focused on the underlying business outcome. If they still disagree, escalate to the requirement owner identified in the RACI. |
| Stakeholder says "everything is Priority 1" | Use forced ranking: "If you could only have three of these for go-live, which three?" Alternatively, use WSJF to introduce objective scoring. |
| Stakeholder keeps adding requirements mid-build | Do not block them. Document each new request. Present the cumulative impact weekly: "These 12 new requests add 6 weeks. Here are three options." The visibility usually self-corrects the behavior. |
| Stakeholder is disengaged and does not attend workshops | Escalate to the project sponsor immediately. Document the risk: "Requirements for [area] are unvalidated because [stakeholder] has not participated." Unvalidated requirements are the top predictor of UAT failure. |
| Technical stakeholder over-specifies the solution | Redirect to the problem: "What business outcome are you trying to achieve?" Capture the outcome as the requirement. Let the Solution Architect determine the implementation. |

### Scope Creep Assessment

| Question | If Yes | If No |
|----------|--------|-------|
| Is this a regulatory or compliance requirement? | Fast-track. Cannot defer. Add to Must Have. | Continue assessment. |
| Does this block go-live for any user group? | Likely Must Have. Validate with the stakeholder: "Can you operate without this on Day 1?" | Candidate for Should Have or Could Have. |
| Does this change the data model or integration architecture? | Flag to Solution Architect immediately. Assess structural impact before committing. | Lower risk. Assess effort and schedule impact. |
| Was this requirement missed in discovery, or is it genuinely new? | If missed: absorb without timeline change (it was always in scope). If new: formal change request with trade-off analysis. | N/A |
| Does this duplicate or conflict with an existing requirement? | Merge with the existing requirement. Update the RTM. | Add as a new requirement with proper traceability. |

## Common Patterns

### Patterns to Apply

- **Process-First Discovery.** Start every workshop with a process walkthrough, not a feature list. Ask "Walk me through what happens when a customer places an order, from the moment you receive it to the moment you ship." This surfaces requirements organically in the context of real work.
- **The 5 Whys for Hidden Requirements.** When a stakeholder requests a specific feature, ask "Why do you need that?" five times. The first answer is the feature. The fifth answer is the actual business requirement. Example: "We need a field for vendor rating" -> (why x5) -> "We need to automatically route purchase orders to preferred vendors based on historical delivery performance."
- **Negative Requirements.** Explicitly document what the system should NOT do. "The system must not allow a purchase order to be approved by the same person who created it" is a critical requirement that is easy to miss if you only capture positive requirements.
- **Day-in-the-Life Scenarios.** For each user role, write a narrative describing a typical day using the new system. Include the mundane (logging in, checking notifications) and the exceptional (handling a rush order, correcting an error). These scenarios catch UX gaps that structured requirements miss.
- **Data-Driven Acceptance Criteria.** Write acceptance criteria using specific, realistic data. Instead of "The system should calculate tax correctly," write "When a $1,500 order ships from TX warehouse to a CA customer, the system should apply 7.25% CA state sales tax ($108.75) and display the total as $1,608.75."
- **Parking Lot Discipline.** Maintain a visible parking lot during every workshop. When a topic goes out of scope, move it to the parking lot immediately. Review the parking lot at the end of every session. This prevents scope creep while showing stakeholders their concerns are captured.

### Anti-Patterns to Avoid

- **Requirements by Committee.** Allowing large groups to wordsmith requirements in real-time. This produces bloated, contradictory documents. Instead, draft offline and review in structured sessions.
- **Gold-Plating.** Adding requirements that no stakeholder asked for because "users will probably want this." Every requirement must have a named source and a validated business need.
- **Specification Paralysis.** Spending months documenting every detail before any build begins. For erp.ai projects, a two-to-four-week discovery is usually sufficient for Phase 1. Refine in iteration.
- **Copy-Paste from RFP.** Using the original RFP or vendor selection document as the requirements baseline. RFP requirements are evaluation criteria, not build specifications. They need translation and validation.
- **Assuming Shared Vocabulary.** Different departments use the same word differently. "Customer" to Sales is a company with a contract. "Customer" to Support is a person with a ticket. Define a glossary early and reference it in every requirement.
- **Orphaned Requirements.** Requirements that exist in the document but are not in the RTM, have no test case, and no one is tracking. If a requirement is not in the RTM, it effectively does not exist.

## Checklist

### Pre-Discovery

- [ ] Stakeholder register completed with RACI assignments
- [ ] Workshop schedule published with participants confirmed for each session
- [ ] Existing documentation collected (process manuals, SOPs, old system screenshots, reports)
- [ ] Business glossary started with key terms from each functional area
- [ ] Workshop facilitation materials prepared (templates, whiteboards, scenario scripts)
- [ ] Current-state data samples obtained for use in scenario walkthroughs

### During Discovery

- [ ] Every business process area covered by at least one workshop
- [ ] Current-state and future-state process maps created for each major process
- [ ] Exception paths and error scenarios documented (not just happy paths)
- [ ] Data inputs, outputs, and volumes captured for each process
- [ ] Regulatory and compliance requirements explicitly identified and tagged
- [ ] Parking lot reviewed at the end of each workshop session
- [ ] Workshop notes distributed within 24 hours for stakeholder review

### Requirements Completion

- [ ] Every requirement has a unique ID, description, priority, acceptance criteria, and source
- [ ] Requirements reviewed and approved by the source stakeholder
- [ ] Fit-Gap Matrix completed in collaboration with Solution Architect
- [ ] RTM initialized linking requirements to configuration items and test cases
- [ ] Prioritization completed using a structured method (MoSCoW, WSJF, or Kano)
- [ ] Business glossary finalized and referenced in all requirement documents
- [ ] Out-of-scope items documented with rationale and deferred to a named future phase

### Change Control

- [ ] Change request process defined and communicated to all stakeholders
- [ ] Every change request logged with impact assessment before decision
- [ ] Baseline updated after each approved change
- [ ] Cumulative scope change reported in weekly status
- [ ] RTM updated to reflect approved changes

### UAT Readiness

- [ ] UAT scripts written for all Must Have and Should Have requirements
- [ ] UAT scripts written in business language (not system field names)
- [ ] Acceptance criteria reviewed and approved by the requirement owner
- [ ] Test data prepared that covers normal, boundary, and exception scenarios
- [ ] UAT participants identified, trained on the test process, and scheduled

## Related

- [Solution Architect Role](solution-architect.md) -- Collaborator on fit-gap analysis and technical feasibility
- [Compliance Analyst Role](../roles/compliance-analyst.md) -- Collaborator on regulatory requirements
- [Fit-Gap Matrix Template](../templates/fit-gap-matrix.md) -- Scoring template for requirement evaluation
- [Requirements Traceability Template](../templates/requirements-traceability.md) -- RTM template for tracking coverage
- [Workflow Automation Skill](../skills/workflow-automation.md) -- Implementation patterns for process requirements
- [Data Modeling Skill](../skills/data-modeling.md) -- Entity design for data requirements
- [Finance & Accounting Domain](../domains/finance-accounting.md) -- Domain-specific requirements for financial modules
- [Supply Chain Domain](../domains/supply-chain.md) -- Domain-specific requirements for procurement and inventory
