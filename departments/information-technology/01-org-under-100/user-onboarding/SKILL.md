---
name: user-onboarding
description: This skill should be used when the task involves getting enterprise users productive on a new application -- training design, content creation, adoption tracking, change management, and ongoing knowledge support.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: information-technology
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# User Onboarding

## Size-Tier Scope

This variant scales the operating pattern for organizations under 100 people. Keep the controls lightweight, favor owner-led approvals, and introduce automation only where it removes recurring manual work without adding governance overhead.


## Purpose

An enterprise application delivers zero value until users adopt it. Onboarding is not a one-time event -- it is a structured program that takes users from awareness through competency to proficiency. The gap between a technically correct system and a successfully adopted system is almost always a training and change management gap, not a technology gap.

Use this skill when a builder needs to:
- Analyze training needs by role, process, and change impact
- Design and produce training content (guides, videos, walkthroughs, quick reference cards)
- Integrate with a Learning Management System (LMS)
- Track adoption and measure time-to-competency
- Build a super-user / champion network
- Design contextual in-app help and knowledge base structure
- Address change resistance proactively

## Key Concepts

### Training Needs Analysis

A structured assessment that determines what each user group needs to learn, how much change they face, and what training format will be most effective.

**Dimensions of analysis:**

- **By role**: Different roles use different parts of the system. An AP clerk needs deep training on invoice processing; a department manager needs training on approvals and reports. Map each role to the specific modules, screens, and processes they will use.
- **By process**: Each business process touches multiple roles. Map the end-to-end process (e.g., procure-to-pay) and identify every role that participates. Training should follow process flow, not module boundaries.
- **By change impact**: Assess how much each role's daily work changes. Roles with high change (entirely new process, new tool, new data) need more intensive training. Roles with low change (same process, new interface) need orientation and quick reference.

**Change impact assessment matrix:**

| Factor | Low Impact | Medium Impact | High Impact |
|--------|-----------|---------------|-------------|
| Process change | Same process, minor adjustments | Modified process, new steps added | Entirely new process |
| Tool change | Same tool, updated version | New tool, similar paradigm | New tool, new paradigm |
| Data change | Same data, same format | New data fields or sources | New data model, new terminology |
| Role change | Same responsibilities | Expanded responsibilities | Restructured responsibilities |

### Training Content Types

| Content Type | Best For | Effort to Create | Maintenance Burden | When to Use |
|-------------|----------|------------------|--------------------|-------------|
| **Step-by-step guide (written)** | Detailed procedural reference | Medium | Medium (screenshots age quickly) | Complex multi-step processes; users who prefer reading |
| **Video walkthrough** | Visual demonstration of a process | Medium-High | High (any UI change requires re-recording) | Processes with visual complexity; initial rollout training |
| **In-app walkthrough** | First-time task guidance | Medium | Low (tied to UI elements, auto-updates if elements persist) | New user onboarding; infrequently used processes |
| **Quick reference card (QRC)** | At-a-glance reminders | Low | Low | Frequently used processes; posted at workstations |
| **Interactive simulation** | Practice in a safe environment | High | High | High-risk processes (financial transactions, data entry with strict rules) |
| **FAQ / Knowledge base article** | Answering common questions | Low | Low-Medium | Post-launch support; recurring help desk themes |

### Adoption Metrics

- **Login frequency**: How often users log into the new system. Early indicator of engagement. Target: daily login for roles that use the system daily.
- **Feature usage depth**: Which features and modules users actually use vs. which they were trained on. Reveals training gaps or unnecessary features.
- **Time-to-competency**: How long it takes a new user to perform a task without assistance. Measured from first training session to the point where the user can complete the task independently within the target time. Typical enterprise target: 2-4 weeks for core tasks.
- **Help desk ticket volume**: Number of "how do I?" tickets per user per week. Should decline over time. A flat or increasing trend indicates training gaps.
- **Process completion rate**: Percentage of initiated processes that are completed correctly without errors or rework. Low rates indicate usability or training issues.
- **Error rate**: Frequency of validation errors, rejected transactions, or rework. High error rates on a specific screen or process indicate a training or UX problem at that point.

### Change Resistance

Resistance to change is natural and predictable. It is not a character flaw in users; it is a rational response to uncertainty. Common forms:

- **Skill anxiety**: "I don't know how to use this. I'll look incompetent." Address with safe practice environments and patient, non-judgmental training.
- **Loss of status**: "I was the expert in the old system. Now I'm a beginner." Address by making these people super-users or champions in the new system.
- **Increased workload fear**: "This will create more work for me." Address by demonstrating time savings with concrete examples from their daily workflow.
- **Distrust of the system**: "The old system worked fine. Why are we changing?" Address by involving resistant users in UAT so they see the improvements firsthand.
- **Passive resistance**: Users technically comply but revert to shadow processes (Excel spreadsheets, email approvals) alongside the new system. Detected by comparing system transaction volumes to expected volumes.

### Super-User / Champion Program

Super-users are experienced users embedded within each department who serve as the first line of support and adoption advocacy:

- **Selection criteria**: Respected by peers, comfortable with technology, positive attitude toward the change, willing to invest extra time. Do not simply assign the most technically skilled person -- social influence matters more.
- **Training depth**: Super-users receive 2-3x the training of regular users. They learn not just how to use the system, but why design decisions were made, how to troubleshoot common issues, and how to train others.
- **Ongoing responsibilities**: Answer peer questions before escalating to help desk, identify training gaps and report them, test configuration changes before they reach regular users, provide feedback from their department to the project team.
- **Recognition**: Super-users need visible recognition (title, certificate, mention in communications) and practical support (dedicated time for super-user duties, not added on top of a full workload).

### Train-the-Trainer Model

A scalable training delivery approach for large organizations:

1. **Core team** develops the training content and master delivery script.
2. **Trainers** (super-users, department leads, or dedicated trainers) attend a train-the-trainer session where they learn the content AND the delivery method.
3. **Trainers** deliver the training to end users in their departments.
4. **Core team** observes a sample of trainer-delivered sessions for quality assurance.

This model scales because a core team of 3-5 people can train 20-30 trainers who can train 200-300 end users. The trade-off is quality control: each layer of delegation introduces the risk of content drift.

## Workflow

### 1. Conduct Training Needs Analysis

- List all roles that will use the new system.
- For each role, map the specific modules, screens, and processes they will use.
- Assess the change impact for each role using the impact matrix (process change, tool change, data change, role change).
- Determine the training depth required: orientation (low impact), standard training (medium impact), intensive training (high impact).
- Identify prerequisites: do users need foundational skills (basic computer literacy, browser navigation) before they can absorb application-specific training?
- **Watch out for**: Overlooking indirect users. Managers who only approve transactions still need training on the approval interface, notification system, and delegation setup.
- **Output**: Training needs matrix (role, modules, change impact level, training depth, prerequisites, estimated hours).

### 2. Design the Training Program

- Choose the delivery model: instructor-led (in-person or virtual), self-paced (LMS-hosted), blended (combination), or train-the-trainer.
- Design the curriculum: organize training by business process, not by module. Users think in processes ("How do I create a purchase order?"), not in modules ("The Procurement module").
- Schedule training timing: complete core training 1-2 weeks before go-live. Too early and users forget; too late and they have no time to practice.
- Plan for practice time: after each training session, users should have access to a sandbox environment to practice what they learned with no risk to real data.
- Design refresher training: abbreviated sessions 2-4 weeks after go-live to reinforce learning and address questions that arose during real usage.
- **Watch out for**: Training sessions longer than 90 minutes without a break. Adult attention span degrades significantly after 60-90 minutes. Break sessions into 45-60 minute blocks with 10-15 minute breaks.
- **Output**: Training program plan (curriculum, delivery model, schedule, sandbox access plan, refresher schedule).

### 3. Create Training Content

- For each process in the curriculum, create the appropriate content type(s) based on the content type selection guide.
- Write step-by-step guides with annotated screenshots. Number every step. Include the expected system response after each action.
- Record video walkthroughs for processes that benefit from visual demonstration. Keep videos under 5 minutes; break longer processes into multiple videos.
- Build in-app walkthroughs for first-time task guidance using ERP•AI's built-in or third-party walkthrough tools.
- Create quick reference cards (QRCs): single-page, printable summaries of the most common tasks. Include field definitions, keyboard shortcuts, and "what to do when" troubleshooting tips.
- Create a process flow diagram for each end-to-end process that shows the user's path through the system.
- **Watch out for**: Screenshots that become outdated. Use annotation tools that reference UI elements by name rather than by position, and maintain a screenshot refresh checklist for each release.
- **Output**: Training content library organized by process and role.

### 4. Set Up the Knowledge Base

- Structure the knowledge base by process (not by module): users search for "How do I submit an expense report?" not "Where is the Expense module?"
- Create a clear taxonomy: Categories (Finance, HR, Procurement) -> Processes (Invoice Processing, Expense Reports, Purchase Orders) -> Articles (How to create, How to approve, How to troubleshoot).
- Write articles in problem-solution format: title is the question the user would ask; body is the step-by-step answer.
- Include a search-optimized title and keywords (users search in natural language).
- Link related articles: an article about creating a PO should link to articles about PO approval, goods receipt, and invoice matching.
- Designate knowledge base owners responsible for keeping content current as the system evolves.
- **Watch out for**: Knowledge bases that go stale. Set a review cadence (quarterly) and assign each article an owner. Archive articles for decommissioned features rather than deleting them.
- **Output**: Published knowledge base with structured taxonomy, search-optimized articles, and ownership assignments.

### 5. Deploy Contextual Help

- Identify the points in the application where users most commonly need help (complex forms, infrequent processes, fields with non-obvious meaning).
- Add tooltips to fields with business-specific definitions (e.g., "Cost Center: The department code responsible for this expense. See the cost center directory for valid values.").
- Add contextual help links that open the relevant knowledge base article from the current screen.
- Configure in-app walkthroughs to trigger automatically for first-time users on key screens, then allow them to be replayed on demand.
- **Watch out for**: Help content that is too generic. "Enter the value in this field" is not helpful. Help must explain what the value means, where to find it, and what happens if it is wrong.
- **Output**: Contextual help configured across key application screens.

### 6. Launch the Super-User Program

- Identify 1-2 super-users per department (ratio of 1 super-user per 15-25 regular users).
- Deliver intensive training to super-users 2-3 weeks before general user training begins. Include system configuration rationale, troubleshooting, and training delivery skills.
- Equip super-users with a communication kit: FAQs, escalation contacts, feedback submission form.
- Establish a super-user community channel (Slack, Teams, or forum) for peer support and knowledge sharing.
- Schedule bi-weekly check-ins with the super-user group during the first 3 months post-go-live to gather field feedback and address emerging issues.
- **Watch out for**: Super-users who are assigned the role but not given time for it. Negotiate with their managers for a dedicated time allocation (10-20% of their work week during the first month).
- **Output**: Active super-user network with training completed, communication kits distributed, and community channel established.

### 7. Track Adoption and Iterate

- Configure adoption tracking dashboards: login frequency by role, feature usage heatmaps, help desk ticket volume trends, error rate by screen.
- Define adoption milestones: Week 1 target (all users have logged in), Week 2 target (all users have completed their primary task at least once), Week 4 target (error rates below threshold, help desk ticket volume declining).
- Review adoption metrics weekly for the first 2 months, then monthly.
- Identify low-adoption areas and intervene: additional training sessions, process simplification, UX improvements, or one-on-one coaching.
- Measure time-to-competency for a sample of users and compare against the target.
- **Watch out for**: Measuring adoption by login count alone. A user who logs in daily but only checks email notifications (never navigating to the module) is not adopting the system. Measure feature depth, not just login frequency.
- **Output**: Adoption dashboard and monthly adoption report with intervention plan for low-adoption areas.

## Decision Guide

### Training Delivery Model

| Factor | Instructor-Led | Self-Paced (LMS) | Blended | Train-the-Trainer |
|--------|---------------|-------------------|---------|-------------------|
| User count | < 50 | Any size | 50-500 | > 200 |
| Geographic distribution | Co-located | Distributed | Distributed | Distributed with local presence |
| Process complexity | High | Low-Medium | Medium-High | Medium-High |
| Change impact | High | Low | Medium-High | Medium-High |
| Budget | Higher | Lower | Medium | Medium |
| Schedule flexibility | Low (fixed sessions) | High (anytime) | Medium | Medium |
| Interaction quality | Highest | Lowest | Medium-High | Medium |
| Best for | Complex processes with high change impact | Simple, standardized processes | Mix of simple and complex processes | Large organizations with departmental autonomy |

### Content Type Selection

| Situation | Recommended Content | Why |
|-----------|-------------------|-----|
| Complex multi-step process, first-time users | Video walkthrough + step-by-step guide | Visual demo for initial learning; written guide for later reference |
| Simple, frequently repeated task | Quick reference card | Users need a glance-able reminder, not a full tutorial |
| First time a user encounters a screen | In-app walkthrough | Guidance exactly when and where the user needs it |
| Process varies by scenario | Decision tree + step-by-step guides per branch | Users need to know which path applies to their situation |
| Recurring "how do I?" questions | Knowledge base FAQ article | Self-service reduces help desk load |
| High-risk process (financial, regulatory) | Interactive simulation + written guide | Users practice in a safe environment before touching real data |

### Addressing Change Resistance

| Resistance Type | Signal | Intervention |
|----------------|--------|--------------|
| Skill anxiety | Users avoid the system, claim it is "too complicated" | One-on-one coaching, sandbox practice, reassurance that mistakes in training are expected |
| Loss of status | Former power users are disengaged | Recruit them as super-users, acknowledge their expertise, give them early access |
| Workload fear | Users claim the new system is "slower" or "more work" | Demo time-savings with their specific tasks, show before/after comparisons |
| Distrust | Users question why the change is happening | Involve them in UAT, share the business case, connect the change to their pain points |
| Passive resistance | Low system usage despite training completion | Monitor adoption metrics, have direct conversations, remove access to shadow tools |

## Common Patterns

### Role-Based Training Paths
Create a defined training path for each role: a sequence of courses, guides, and practice exercises that takes a user from zero to competent for their specific job function. Example: AP Clerk Training Path = 1) System Navigation (30 min), 2) Vendor Management (45 min), 3) Invoice Processing (60 min), 4) Payment Processing (45 min), 5) AP Reporting (30 min), 6) Sandbox Practice (2 hours). Each step has a completion marker and an optional assessment.

### Day-One Survival Guide
A single-page document (paper or digital) that every user receives on go-live day. Contains: how to log in, how to reset your password, who to call for help, the top 3 tasks you will do today with step-by-step instructions, and a link to the full knowledge base. Designed to get a user through their first day without panic.

### Adoption Nudges
Automated in-app messages that encourage deeper adoption: "You've processed 10 invoices this week. Did you know you can batch-process invoices to save time? Click here to learn how." Triggered by usage patterns. Nudges should be helpful, infrequent (max 1 per day), and dismissable.

### Office Hours
Weekly drop-in sessions (virtual or in-person) where users can bring questions and get live help. More effective than scheduled training for addressing individual, context-specific questions. Record common questions from office hours and convert them to knowledge base articles.

### Certification Program
For organizations that want to formally validate user competency, create a certification test: a set of tasks the user must complete in the sandbox within a time limit. Certification can be required before granting access to production, especially for high-risk processes (financial posting, payroll processing).

### Anti-Patterns to Avoid

- **Training dump**: A single 8-hour training session two months before go-live. Users forget 80% within a week. Distribute training in short sessions close to go-live with practice in between.
- **Module-centric training**: "Today we'll learn the Finance module." Users do not think in modules. They think in processes: "How do I pay a vendor?" Design training around processes.
- **No practice environment**: Training on slides without hands-on practice. Users retain almost nothing from passive observation. Every training session must include hands-on exercises.
- **One-size-fits-all training**: The same training for executives and data entry clerks. Each role needs training scoped to their tasks and their depth of system interaction.
- **Training-and-done**: No follow-up after the initial training sessions. No adoption tracking, no refresher sessions, no ongoing support. Users drift back to old habits.
- **Ignoring resistance**: Treating user complaints as "they'll get used to it" instead of investigating the root cause (poor UX, inadequate training, genuine process problems).

## Advanced Topics

### Competency Assessment & Certification

Training delivery is not the finish line -- verified competency is. Without assessment, organizations cannot distinguish between users who attended training and users who can actually perform their job in the new system.

**Skill-based assessment design:**

Design assessments that test performance, not recall. A multiple-choice question about which menu to click is a recall test. Asking the user to actually create a purchase order in the sandbox and evaluating the result is a performance test.

Assessment types ranked by rigor:

| Assessment Type | What It Measures | Effort to Create | Confidence in Results |
|----------------|-----------------|------------------|-----------------------|
| **Knowledge check (quiz)** | Recall of concepts and terminology | Low | Low -- passing a quiz does not mean the user can do the work |
| **Guided task completion** | Ability to follow instructions | Medium | Medium -- proves the user can execute with a script |
| **Unguided task completion** | Ability to perform independently | Medium-High | High -- mirrors real-world conditions |
| **Scenario-based assessment** | Ability to handle variations and exceptions | High | Highest -- tests judgment, not just mechanics |

For enterprise ERP, use unguided task completion as the minimum bar for certification. The user receives a scenario ("You received an invoice from Vendor X for $12,500 for 100 units of Product Y. Process this invoice through approval.") and must complete all steps in the sandbox without a script. The assessor evaluates: correct vendor selection, correct line item entry, correct GL coding, submission for appropriate approval level, and no validation errors.

**Proficiency levels:**

Define a progression framework that gives users a growth path:

| Level | Name | Definition | Typical Timeline |
|-------|------|-----------|-----------------|
| 1 | **Novice** | Can complete core tasks with a reference guide | End of initial training |
| 2 | **Competent** | Can complete core tasks independently within target time | 2-4 weeks post-go-live |
| 3 | **Proficient** | Can handle exceptions, troubleshoot errors, and train others | 2-3 months post-go-live |
| 4 | **Expert** | Can configure the system, design process improvements, and serve as a subject matter expert | 6-12 months post-go-live |

Each level maps to specific measurable criteria. Do not allow self-assessment -- competency must be verified by an assessor or by automated evaluation in the system.

**Certification programs:**

Formal certification provides both a gate (ensuring minimum competency before granting access to critical functions) and a motivator (recognition of achievement).

Program structure:
- **Prerequisites**: User must complete the required training modules (tracked via LMS).
- **Assessment**: User completes the scenario-based assessment in the sandbox within the allotted time.
- **Passing criteria**: All required tasks completed correctly, no data integrity violations, completed within the time limit.
- **Certificate issuance**: Digital certificate with the user's name, role, certification date, and expiry date. Stored in the LMS and linked to the user's HR record.
- **Certification as access gate**: For high-risk processes (financial posting, payroll processing, inventory adjustments), require certification before granting production access. The user can log in and perform low-risk tasks but cannot execute the high-risk function until certified.

**Re-certification cadence:**

Skills degrade over time, especially for infrequently used processes. Establish re-certification cycles:
- **High-risk processes** (financial, regulatory): Annual re-certification.
- **Core daily processes**: Re-certification every 2 years, or when a major system change affects the process.
- **Event-triggered re-certification**: When a user returns from extended leave (>3 months), when a major system upgrade occurs, or when audit findings indicate competency gaps in a user group.

**Competency matrices:**

Maintain a matrix that maps every role to every required competency and tracks each user's certification status:

| User | Invoice Processing | Payment Approval | GL Posting | Vendor Maintenance | Status |
|------|--------------------|-----------------|------------|-------------------|--------|
| J. Smith | Certified (2026-03) | Certified (2026-03) | N/A | Certified (2026-03) | Current |
| A. Kumar | Certified (2025-09) | In Progress | N/A | Certified (2025-09) | Re-cert Due |
| M. Chen | Not Started | N/A | Certified (2026-02) | N/A | Partial |

The competency matrix is reviewed quarterly by department managers and feeds into the access review process (a user whose certification has lapsed may have their access to that function suspended until re-certified).

### Post-Training Reinforcement

The forgetting curve is real: without reinforcement, users lose 70% of training content within 24 hours and 90% within a week. Post-training reinforcement converts short-term training exposure into long-term competency.

**Spaced repetition:**

Deliver reinforcement at increasing intervals to combat the forgetting curve:
- **Day 1 post-training**: Send a 2-minute recap of the 3 most important concepts.
- **Day 3**: Send a quick quiz (3-5 questions) on the training content.
- **Day 7**: Send a micro-task ("Log in and create a test PO in the sandbox. Confirm the approval routing.").
- **Day 14**: Send a scenario-based question ("What would you do if an invoice amount does not match the PO?").
- **Day 30**: Send the full competency assessment or a refresher challenge.

Deliver spaced repetition via the LMS, email, Slack/Teams, or in-app notifications -- whichever channel the user actually monitors. Track completion rates and follow up with non-completers.

**Microlearning nudges:**

Short, focused learning moments (60-90 seconds) delivered at the point of need:
- "Tip of the day" notifications when the user logs in: "Did you know you can duplicate a PO by clicking 'Copy' on an existing PO? This saves time for recurring orders."
- Short video clips (under 60 seconds) showing a single technique or shortcut.
- Embedded hints in the workflow: when a user completes their 10th invoice, show a congratulatory message with a link to an advanced tip ("Now that you're comfortable with basic invoices, learn how to handle partial receipts.").

Nudges must be non-intrusive, dismissable, and frequency-capped (no more than 1 per session). An annoying nudge system will be disabled by users and abandoned by administrators.

**Contextual help (tooltips, walkthrough overlays):**

Go beyond static tooltips -- implement smart contextual help that adapts to the user's experience level:
- **First-time visitors** to a screen see an automatic walkthrough overlay highlighting each field and button with brief explanations. The walkthrough is dismissable and can be replayed from a help menu.
- **Returning visitors** see subtle indicators (a small "?" icon) next to fields they have previously asked for help on.
- **Error-triggered help**: When a user encounters a validation error, display not just the error message but a link to a help article explaining the error, the likely cause, and the resolution steps. "Amount exceeds approval threshold" should link to the approval matrix and explain how to submit for the correct approval level.

**Just-in-time learning:**

Detect situations where a user is about to perform a task for the first time (or the first time in a long while) and offer a learning prompt:
- "It looks like this is your first time processing a credit note. Would you like a 2-minute walkthrough before you begin?"
- "You haven't processed a month-end closing in the system before. Here's a quick guide to the steps involved."

Just-in-time learning bridges the gap between training (which happened weeks ago) and action (which is happening right now). It delivers the right knowledge at the exact moment it is needed.

### Accessibility in Training

Training content that excludes users with disabilities is not only ethically wrong but also legally non-compliant in many jurisdictions (ADA, Section 508, EU Accessibility Act). Enterprise training must be accessible to all users.

**WCAG compliance for training content:**

All digital training content must meet WCAG 2.1 Level AA compliance:
- **Text alternatives**: Every image, icon, and screenshot must have descriptive alt text. A screenshot of the invoice screen needs alt text like "Invoice entry screen showing vendor field, line items grid, and total amount."
- **Keyboard navigation**: All interactive training elements (quizzes, simulations, walkthroughs) must be fully operable via keyboard. Tab order must be logical and skip links must be provided for navigation-heavy content.
- **Color independence**: Never convey information through color alone. If a correct answer is highlighted in green and an incorrect answer in red, also use text labels ("Correct" / "Incorrect") or icons (checkmark / X).
- **Contrast ratios**: Text must have a contrast ratio of at least 4.5:1 against its background (3:1 for large text). This applies to training slides, documents, and in-app help.
- **Captions and transcripts**: All video content must have synchronized captions. Provide downloadable transcripts for users who prefer reading or who cannot access video.

**Screen reader compatibility:**

- Structure training documents with proper heading hierarchy (H1, H2, H3) so screen reader users can navigate by section.
- Use semantic HTML in web-based training content -- `<table>` with `<thead>` and `<th>` for data tables, `<nav>` for navigation, `<main>` for primary content.
- Test all in-app walkthroughs and contextual help with popular screen readers (JAWS, NVDA, VoiceOver) to verify that instructions are read in the correct order and interactive elements are properly labeled.
- Provide text descriptions for all process flow diagrams ("Step 1: User creates a purchase requisition. Step 2: Manager approves the requisition. Step 3: System generates a purchase order.").

**Alternative formats:**

Provide training content in multiple formats to accommodate different needs:
- Written guides for users who prefer reading.
- Audio narration of written guides for users with visual impairments or reading difficulties.
- Video with captions and audio descriptions (describing on-screen actions for users who cannot see the video).
- Braille-ready formats for critical reference materials (export as plain text or structured HTML that braille displays can render).

**Cognitive load management:**

Enterprise systems are complex. Training that dumps too much information at once overwhelms learners, including but not limited to those with cognitive disabilities:
- Break training into modules of no more than 15-20 minutes.
- Each module covers one task or concept, not multiple.
- Use progressive complexity: start with the simplest version of a task, then add variations and exceptions in subsequent modules.
- Provide worked examples before asking the learner to practice independently.
- Reduce extraneous cognitive load: remove decorative elements, unnecessary animations, and background music from training content. Every element should serve a learning purpose.

### Multilingual & Localized Training

Global enterprises deploy ERP•AI across multiple countries, languages, and regulatory environments. Training content must be adapted -- not just translated -- for each locale.

**Translation workflows:**

- **Source language authoring**: Create all training content in the organization's primary language (typically English). Use clear, simple sentences that translate well. Avoid idioms, jargon, and culturally specific references.
- **Professional translation vs. machine translation**: For high-stakes content (certification assessments, regulatory process guides), use professional human translators with ERP domain knowledge. For lower-stakes content (tooltips, quick tips), machine translation (DeepL, Google Translate) with human review is cost-effective.
- **Translation memory**: Use a translation memory tool (SDL Trados, memoQ) that stores previously translated segments. When training content is updated, only the changed segments need re-translation. This reduces cost and maintains consistency.
- **Review workflow**: Native-speaking subject matter experts review translated content for accuracy, not just grammar. A technically correct translation that uses the wrong local terminology for a business process will confuse users.

**Culturally adapted examples:**

Do not simply translate examples -- adapt them to the local context:
- Currency: Replace USD amounts with local currency. Use the correct currency format (1,000.00 vs 1.000,00).
- Tax: Use the local tax structure (VAT, GST, sales tax) in examples, not the source country's tax system.
- Business practices: Procurement processes, approval hierarchies, and payment terms vary by country. Adapt examples to reflect local norms.
- Legal references: Replace references to source-country regulations (SOX) with local equivalents (J-SOX in Japan, UK Corporate Governance Code in the UK) where applicable.
- Names and addresses: Use names and address formats appropriate to the locale.

**Locale-specific process variations:**

Some business processes differ by country due to regulatory requirements:
- Invoicing rules (e-invoicing mandates in Italy, India, or Brazil).
- Payroll calculations (country-specific tax withholding, social insurance contributions).
- Financial reporting standards (US GAAP vs IFRS).

Create locale-specific training modules for these processes. The core training curriculum remains global, but locale-specific modules are appended or substituted where processes diverge. Maintain a locale-process matrix that maps each country to the modules that require localization.

**RTL (Right-to-Left) support:**

For users who read Arabic, Hebrew, Farsi, or Urdu:
- Training documents, presentations, and in-app help must render in RTL layout.
- Screenshots must show the application in its RTL configuration (if the application supports RTL).
- Video walkthroughs for RTL locales must navigate the application in RTL mode.
- Interactive simulations must function correctly in RTL, including form field order and navigation flow.

### Community & Peer Learning

Formal training provides the foundation, but peer learning -- users helping users -- is what sustains adoption over the long term. It scales better than centralized training and addresses context-specific questions that formal content cannot anticipate.

**Internal forums:**

Set up a dedicated discussion space (Slack channel, Teams channel, or a forum platform) where users can ask questions, share tips, and report issues:
- Organize by topic: #erp-finance, #erp-procurement, #erp-inventory, #erp-general.
- Seed the forums with common questions and answers before go-live so the space does not feel empty on day one.
- Assign super-users as moderators who monitor the channels and provide answers. Track unanswered questions -- any question that remains unanswered for 24 hours should be escalated.
- Convert high-quality forum answers into knowledge base articles. The forum is the early-warning system for content gaps in the formal knowledge base.

**Knowledge champions:**

Beyond super-users (who are department-level), identify knowledge champions who specialize in specific business processes or modules:
- A knowledge champion for month-end close processes.
- A knowledge champion for intercompany transactions.
- A knowledge champion for report building and dashboard customization.

Knowledge champions are the go-to people for complex questions that go beyond basic how-to. They maintain deep expertise in their area and proactively share tips, workarounds, and best practices with the community.

**Office hours:**

Weekly or bi-weekly drop-in sessions where users can bring any question:
- **Open office hours**: Any topic, any user. Best for the first 2-3 months post-go-live when questions are wide-ranging.
- **Topic-specific office hours**: Focused on a single area (e.g., "Financial Reporting Office Hours"). Best after the initial stabilization period when questions become more specialized.
- Record office hours sessions (with participant consent) and publish the recordings. Users who could not attend live can watch later.
- Track the questions asked in each session. Recurring questions indicate training gaps or UX problems that should be addressed at the source.

**Gamification (badges, leaderboards):**

Gamification increases engagement when applied thoughtfully and degrades trust when applied recklessly. Guidelines:

- **Completion badges**: Award badges for completing training modules, passing certification, helping peers in the forum, or attending office hours. Badges should be visible on the user's profile.
- **Proficiency leaderboards**: Display leaderboards that rank users by a productivity metric (e.g., invoices processed per day, reports generated per week). Use with caution -- leaderboards can motivate high performers but demoralize others. Make leaderboard participation opt-in.
- **Achievement recognition**: When a department reaches an adoption milestone (100% certification, zero errors for a week), recognize them publicly (email from the project sponsor, mention in the all-hands meeting).
- **Anti-pattern**: Gamifying login frequency or click count. This incentivizes vanity engagement, not genuine productivity. Only gamify outcomes that reflect real competency and contribution.

**User group formation:**

Encourage users with shared interests or challenges to form user groups:
- **Role-based groups**: All AP clerks across the organization meet monthly to share best practices, discuss challenges, and learn advanced features together.
- **Process-based groups**: Everyone involved in the procure-to-pay process (requisitioners, buyers, receivers, AP clerks) meets to improve the end-to-end workflow.
- **Regional groups**: Users in the same office or time zone meet in person or virtually for peer support and localized discussions.

User groups are self-sustaining once established but need initial support: schedule the first 3 meetings, provide a facilitator, and give the group a communication channel and a charter.

### Training ROI & Analytics

Training is an investment. Like any investment, it must be measured and justified. Training ROI analytics connect training activities to business outcomes, enabling data-driven decisions about where to invest training effort.

**Cost-per-learner metrics:**

Calculate the fully loaded cost of training per learner to understand unit economics:
- **Direct costs**: Trainer time, content development, LMS licensing, sandbox environment costs, printed materials.
- **Indirect costs**: Learner time (hours away from productive work x hourly cost), facility/room booking, travel for in-person training.
- **Per-learner cost**: Total cost / number of learners trained. Benchmark: $200-800 per learner for instructor-led ERP training; $50-150 per learner for self-paced LMS-based training.

Track cost-per-learner by delivery model to optimize the mix. If instructor-led training costs $600/learner and self-paced costs $100/learner with similar competency outcomes, shift the balance toward self-paced for straightforward processes and reserve instructor-led for complex, high-change-impact processes.

**Time-to-competency benchmarks:**

Measure how long it takes users to reach competency milestones:
- **Time to first independent task**: Days from training completion to the first task completed without help desk support. Target: 1-3 days for core tasks.
- **Time to target productivity**: Days from go-live to the point where the user processes transactions at the expected rate (e.g., 20 invoices/day for an AP clerk). Target: 2-4 weeks.
- **Time to error rate baseline**: Days from go-live to the point where the user's error rate drops below the acceptable threshold. Target: 3-6 weeks.

Track time-to-competency by role, department, training delivery model, and trainer. This reveals which roles need more training investment and which delivery models are most effective.

**Correlation with support ticket reduction:**

Map training activities to help desk outcomes:
- Before training: Baseline help desk ticket volume per user per week.
- After initial training: Measure the reduction in "how do I?" tickets. Target: 50-70% reduction within 2 weeks.
- After refresher training: Measure further reduction. Target: additional 20-30% reduction.
- By topic: Which training modules correlate with the largest ticket reduction? Invest more in those areas. Which topics still generate tickets despite training? Those need content improvement or UX changes.

Plot the relationship on a chart: X-axis is training investment (hours, dollars), Y-axis is ticket volume reduction. This visualization helps leadership understand the direct operational cost savings from training.

**Business outcome attribution:**

The ultimate measure of training ROI is its impact on business outcomes:
- **Process efficiency**: Compare average transaction processing time before and after training. A 30% reduction in invoice processing time translates directly to labor cost savings.
- **Error / rework reduction**: Calculate the cost of errors (incorrect payments, stock discrepancies, compliance violations) before and after training. Each error prevented has a quantifiable cost avoidance.
- **Speed of close**: For financial processes, measure the time required for month-end close before and after training. A 2-day reduction in close time has significant business value.
- **User satisfaction**: Survey users on their confidence and satisfaction with the system at 30, 60, and 90 days post-go-live. Correlate satisfaction scores with training completion and certification status.

Present training ROI in financial terms: "The $180,000 training investment reduced help desk costs by $60,000/year, reduced error-related costs by $120,000/year, and improved month-end close time by 1.5 days, resulting in a payback period of 8 months." This framing resonates with executive stakeholders and secures ongoing training investment.

## Checklist

- [ ] Training needs analysis completed for every user role
- [ ] Change impact assessed (process, tool, data, role) for each role
- [ ] Training delivery model selected (instructor-led, self-paced, blended, train-the-trainer)
- [ ] Curriculum organized by business process, not by module
- [ ] Training scheduled 1-2 weeks before go-live (not too early, not too late)
- [ ] Sandbox environment provisioned for hands-on practice
- [ ] Step-by-step guides created with annotated screenshots for each process
- [ ] Video walkthroughs recorded (under 5 minutes each) for visually complex processes
- [ ] Quick reference cards created for frequently used tasks
- [ ] In-app walkthroughs configured for first-time user guidance on key screens
- [ ] Knowledge base published with process-based taxonomy and search-optimized titles
- [ ] Contextual help (tooltips, help links) deployed on complex screens
- [ ] Super-users identified (1 per 15-25 users) and trained at advanced depth
- [ ] Super-user communication kit distributed (FAQs, escalation contacts, feedback form)
- [ ] Day-one survival guide prepared for distribution on go-live
- [ ] Adoption tracking dashboard configured (login frequency, feature usage, error rates)
- [ ] Adoption milestones defined for weeks 1, 2, and 4
- [ ] Refresher training scheduled for 2-4 weeks post-go-live
- [ ] Office hours established for ongoing drop-in support
- [ ] Training content ownership assigned with quarterly review cadence
- [ ] Competency assessments designed as unguided task completions (not recall-based quizzes)
- [ ] Proficiency levels defined (Novice, Competent, Proficient, Expert) with measurable criteria
- [ ] Certification program established with prerequisites, assessment, and passing criteria
- [ ] Re-certification cadence set (annual for high-risk, biennial for core processes)
- [ ] Competency matrix maintained per user with quarterly review
- [ ] Spaced repetition schedule configured (Day 1, 3, 7, 14, 30 post-training)
- [ ] Microlearning nudges implemented (frequency-capped, dismissable, contextual)
- [ ] Contextual help adapts to user experience level (first-time walkthrough, returning hints, error-triggered help)
- [ ] Just-in-time learning prompts configured for first-time or infrequent tasks
- [ ] All training content meets WCAG 2.1 Level AA compliance
- [ ] Video content has synchronized captions and downloadable transcripts
- [ ] Training tested with screen readers (JAWS, NVDA, VoiceOver)
- [ ] Cognitive load managed (modules < 20 minutes, progressive complexity, worked examples)
- [ ] Translation workflow established with translation memory tooling
- [ ] Culturally adapted examples created for each locale (currency, tax, names, regulations)
- [ ] Locale-specific training modules created for divergent processes
- [ ] RTL layout verified for applicable languages
- [ ] Internal forums seeded and moderated by super-users with 24-hour response target
- [ ] Knowledge champions identified for key processes/modules
- [ ] Gamification implemented thoughtfully (completion badges, opt-in leaderboards, milestone recognition)
- [ ] User groups formed (role-based, process-based, regional) with initial facilitation support
- [ ] Training cost-per-learner tracked by delivery model
- [ ] Time-to-competency measured for sample users and compared against targets
- [ ] Help desk ticket reduction correlated with training activities by topic
- [ ] Training ROI calculated and presented in financial terms (payback period, cost avoidance)

## ERP•AI & Proto

**ERP•AI**: In-app walkthrough builder with role-based onboarding guides and adoption analytics dashboards that track time-to-competency and feature usage across the user base.

**Proto**: Generates tailored training content and onboarding sequences as mission deliverables, pulling role definitions from the L3 knowledge graph and tracking adoption metrics through the 720+ app fabric during the ITERATE phase.

## Related

- [Deployment & Go-Live](../deployment-golive/SKILL.md) -- training must complete before go-live; hypercare bridges the gap
- [Security & Roles](../security-roles/SKILL.md) -- training paths align with security roles; users train on what they have access to
- [Workflow Automation](../workflow-automation/SKILL.md) -- workflow changes drive retraining needs
- [Reports & Dashboards](../reports-dashboards/SKILL.md) -- dashboard training is part of manager onboarding
- [Human Resources](../../../human-resources/OVERVIEW.md) -- LMS integration and organizational hierarchy for training assignments
