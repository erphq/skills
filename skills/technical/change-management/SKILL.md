---
name: change-management
description: This skill should be used when the task involves plan and execute organizational change management for ERP implementations on erp.ai -- use when designing stakeholder engagement, communication plans, training strategies, resistance management, and benefits realization for enterprise transformations.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - technical
  type: skill
  scope: internal
---
# Change Management

## Purpose

Change management is the structured approach to transitioning individuals, teams, and organizations from a current state to a desired future state. For ERP implementations on erp.ai, change management determines whether a technically successful deployment translates into actual business value. Builders and project leaders need this skill whenever they are:

- Launching a new ERP system or module that changes how people do their daily work
- Migrating users from legacy systems with established habits and workarounds
- Rolling out new business processes that cross departmental boundaries
- Introducing automation that changes job roles or eliminates manual steps
- Implementing new compliance or governance requirements that change behaviors
- Expanding an existing erp.ai deployment to new business units, regions, or user groups
- Managing the human side of any technology-driven transformation

The most common cause of ERP implementation failure is not technology -- it is people. Systems go live, but users revert to spreadsheets. Processes are redesigned, but departments refuse to adopt them. Training is delivered, but knowledge does not translate to behavior change. Change management is the discipline that prevents these failures.

## Start Here: Plan the Change Track

Before designing communications or training, set the execution frame:

- Start with the [Fit-Gap Matrix](../../../templates/fit-gap-matrix/SKILL.md) to identify which process changes are likely to create adoption resistance.
- Use the [Go-Live Checklist](../../../templates/go-live-checklist/SKILL.md) to define readiness gates and reinforcement checkpoints.
- Assign a primary owner from [Requirements Analyst](../../../roles/requirements-analyst/SKILL.md) and [Solution Architect](../../../roles/solution-architect/SKILL.md) for business + technical alignment.

Do these first actions before the detailed workflow:

1. Build a stakeholder map with influence and impact levels.
2. Define adoption metrics and success thresholds per user group.
3. Publish the first 30-60-90 day communication and training cadence.

## Key Concepts

### Change Management Frameworks

Three frameworks dominate enterprise change management. Each offers a different lens; experienced practitioners draw from all three.

#### ADKAR Model (Prosci)

ADKAR is an individual-level model. It describes the five sequential milestones each person must achieve to successfully adopt a change:

| Stage | Definition | Key Question | ERP Example |
|---|---|---|---|
| **Awareness** | Understanding why the change is happening | "Why are we changing?" | Communicate the business case for replacing the legacy system |
| **Desire** | Personal motivation to participate | "What's in it for me?" | Show how the new system eliminates the manual reconciliation they hate |
| **Knowledge** | Understanding how to change | "How do I do this?" | Training on the new system's UI, processes, and reports |
| **Ability** | Demonstrated capability to perform | "Can I do this in practice?" | Hands-on practice, go-live support, job aids |
| **Reinforcement** | Sustaining the change over time | "Will I keep doing this?" | Recognition, metrics, course correction, removing old system access |

**ERP-specific application**: Use ADKAR to diagnose where adoption is stalling. If users understand the new system (Knowledge) but are not using it (Ability), the gap is practice and support, not more training. If users can use it but will not (Desire), the gap is motivation and sponsorship.

#### Kotter's 8-Step Model

Kotter is an organizational-level model focused on building momentum for large-scale change:

1. **Create urgency**: Make the case that the status quo is more dangerous than the change. For ERP: quantify the cost of the current system (manual workarounds, compliance risk, lost revenue from slow processes).
2. **Form a guiding coalition**: Assemble a cross-functional team with authority and credibility. Include business leaders, not just IT.
3. **Develop a vision and strategy**: Articulate what the future state looks like in terms people care about (not "implement erp.ai" but "close the books in 3 days instead of 15").
4. **Communicate the vision**: Repeat the message through multiple channels, multiple times. Use stories, not just slides.
5. **Empower action**: Remove barriers. Grant access to training, adjust workloads during transition, address system gaps quickly.
6. **Generate short-term wins**: Plan for visible, early successes. Go live with a high-impact, low-risk module first. Publicize wins broadly.
7. **Consolidate and build on gains**: Use early wins to drive further adoption. Do not declare victory prematurely.
8. **Anchor in culture**: Make the new way of working the default. Update job descriptions, performance reviews, and onboarding to reflect new processes.

#### Prosci Change Management Methodology

Prosci integrates ADKAR with a three-phase process for managing the organizational side:

- **Phase 1 -- Prepare**: Define the change, assess organizational readiness, build the change management strategy and team.
- **Phase 2 -- Manage**: Execute communication, sponsorship, coaching, training, and resistance management plans.
- **Phase 3 -- Sustain**: Reinforce the change, measure adoption, manage gaps, celebrate success, transition to BAU ownership.

**For erp.ai implementations**, the Prosci methodology maps well to the project lifecycle: Phase 1 aligns with discovery and design, Phase 2 with build and deployment, Phase 3 with hypercare and post-go-live stabilization.

### Stakeholder Analysis and Engagement

Stakeholder analysis identifies everyone affected by the change and designs engagement strategies based on their influence and attitude.

**Power/Interest Grid:**

| | Low Interest | High Interest |
|---|---|---|
| **High Power** | **Keep satisfied**: Inform regularly, address concerns proactively. (e.g., CFO who approved the budget but is not a daily user) | **Manage closely**: Deep engagement, frequent communication, active involvement. (e.g., VP of Operations whose team uses the system daily) |
| **Low Power** | **Monitor**: Minimal effort, periodic updates. (e.g., external auditors who will use reports) | **Keep informed**: Regular communication, feedback channels, address concerns. (e.g., End users who will use the system daily) |

**Influence mapping** goes beyond formal power to identify informal influencers: the senior accountant everyone goes to for advice, the warehouse supervisor who informally sets team norms, the IT liaison who shapes perceptions of system quality.

**Coalition building** targets key influencers at every level:
- Executive sponsors who allocate resources and remove barriers
- Middle managers who translate strategy into team action
- Peer influencers who shape informal adoption norms
- Technical champions who help colleagues navigate the new system

### Impact Assessment

Impact assessment quantifies the magnitude and nature of change for each affected group.

**Process change severity:**

| Severity | Definition | Example | Change Management Intensity |
|---|---|---|---|
| **Low** | Same process, new tool | Data entry moves from Excel to erp.ai forms | Standard training, job aids |
| **Medium** | Modified process with new steps or eliminated steps | Approval workflow adds automated routing, removes paper forms | Detailed training, practice sessions, coaching |
| **High** | Fundamentally new process | Move from manual inventory counts to automated perpetual inventory | Intensive training, extended hypercare, role coaching, process simulations |
| **Transformational** | New role or job function | Accounts payable clerks become exception-handling analysts as automation handles routine processing | Role redefinition, skill gap programs, career path conversations, ongoing mentoring |

**Role change mapping**: For each role affected by the ERP implementation, document:
- Current responsibilities that stay the same
- Current responsibilities that change (and how)
- New responsibilities being added
- Current responsibilities being eliminated
- New skills required
- Training and support needed

**Skill gap analysis**: Compare the skills required to operate in the future state with the current capabilities of affected users. Gaps drive the training plan. Categories:
- **System skills**: Navigating erp.ai UI, running reports, entering data
- **Process skills**: Executing new business processes, understanding new workflows
- **Analytical skills**: Interpreting dashboards, making data-driven decisions
- **Collaboration skills**: Working cross-functionally in integrated processes

### Communication Planning

Communication is the backbone of change management. Without deliberate, sustained communication, people fill the vacuum with rumors and resistance.

**Audience segmentation**: Do not send one message to everyone. Segment by:
- Role (executives, middle managers, end users, IT)
- Impact level (high, medium, low)
- Location/region (for global rollouts)
- Attitude toward the change (enthusiasts, neutrals, resistors)

**Message design (the 5 Ws):**
- **Why** are we changing? (Business case, urgency, consequences of not changing)
- **What** is changing? (Specific process, system, role changes for this audience)
- **When** is it happening? (Timeline, milestones, their specific go-live date)
- **Who** is affected? (Them, specifically, and how)
- **What support is available?** (Training, help desk, change champions, go-live support)

**Communication cadence:**

| Phase | Frequency | Focus |
|---|---|---|
| Early project (6+ months before go-live) | Monthly | Why the change, vision, high-level timeline |
| Mid-project (3-6 months) | Biweekly | What is changing for each group, design decisions, early wins |
| Pre-go-live (1-3 months) | Weekly | Specific readiness steps, training schedule, support resources |
| Go-live (first 2 weeks) | Daily | Status, known issues, how to get help, quick wins |
| Post-go-live (2 weeks - 3 months) | Weekly tapering to biweekly | Stabilization updates, adoption metrics, tips and tricks |

**Channel selection:**

| Channel | Best For | Limitation |
|---|---|---|
| Town halls / all-hands | Vision, urgency, executive sponsorship | One-way; hard to address individual concerns |
| Team meetings | Detailed impact discussion, Q&A, feedback | Depends on manager's ability to deliver message |
| Email/newsletter | Documented updates, reference information | Often ignored; no dialogue |
| Intranet/wiki | Persistent reference (FAQs, process docs, training links) | Passive; users must seek it out |
| Slack/Teams channels | Real-time Q&A, peer support, quick updates | Noisy; important messages scroll away |
| 1-on-1 conversations | High-impact individuals, resistance management | Does not scale |
| Video walkthroughs | System demonstrations, process overviews | Requires production effort; becomes stale |

**Feedback loops**: Communication must be bidirectional. Mechanisms:
- Anonymous survey after each major communication
- Dedicated Slack channel for questions (monitored daily by change team)
- "Ask me anything" sessions with project leadership
- Change champion feedback reports (see Change Network below)

### Resistance Management

Resistance is a natural, healthy response to change. It signals that people care about their work. The goal is not to eliminate resistance but to understand its root causes and address them.

**Root cause analysis of resistance:**

| Root Cause | Manifestation | Intervention |
|---|---|---|
| **Lack of awareness** | "I didn't know this was happening" | Increase communication frequency and reach |
| **Fear of job loss** | "This system will replace me" | Transparent communication about role evolution, reskilling commitment |
| **Loss of competence** | "I'm an expert in the old system; I'll be a beginner again" | Extended training, mentoring, recognition of existing expertise |
| **Loss of control** | "This was decided without our input" | Involve resistors in design decisions, customize where possible |
| **Bad prior experience** | "The last system rollout was a disaster" | Acknowledge the past, explain what is different this time, demonstrate quick wins |
| **Legitimate concerns** | "This new process actually has a flaw" | Listen, investigate, fix if valid. Some resistance is correct feedback. |
| **Change saturation** | "We're already dealing with three other changes" | Pace the change, sequence with other initiatives, reduce non-essential concurrent changes |

**Early warning indicators:**
- Declining attendance at training sessions
- Increase in help desk tickets or complaints
- Managers not cascading communications to their teams
- Users logging into the old system instead of the new one post-go-live
- Increase in workaround requests ("Can we still do it the old way?")
- Low completion rates on e-learning or certification programs

**Intervention strategies:**
- **For awareness gaps**: More communication, different channels, peer ambassadors
- **For desire gaps**: Executive sponsorship visibility, personal impact conversations, WIIFM (What's In It For Me) messaging
- **For knowledge gaps**: Additional training, job aids, desk-side coaching
- **For ability gaps**: Practice environments, extended hypercare, buddy systems
- **For reinforcement gaps**: Metrics and accountability, recognition programs, manager coaching

### Sponsorship Activation

Executive sponsorship is the single strongest predictor of change management success. A sponsor is not a figurehead -- they are an active, visible champion.

**Sponsor roles:**

| Role | Who | Responsibilities |
|---|---|---|
| **Primary sponsor** | Executive who authorized and funds the initiative | Communicates vision, removes barriers, makes resource decisions, resolves cross-functional conflicts |
| **Sponsor coalition** | Direct reports of the primary sponsor who lead affected business units | Cascade messages within their units, role-model new behaviors, hold their teams accountable |
| **Local sponsors** | Regional or functional leaders in global rollouts | Adapt messages for local context, provide local support, escalate local issues |

**Visible sponsorship behaviors** (the sponsor must do these personally, not delegate):
- Communicate the vision and urgency in their own words, not by forwarding emails
- Participate in key milestones (kickoff, training launch, go-live)
- Use the new system themselves (even if their usage is limited)
- Recognize and celebrate early adopters publicly
- Address resistance directly and promptly
- Allocate time for their people to attend training and participate in the transition

**Sponsor coaching**: The change management team must actively coach sponsors on what to do and when. Do not assume executives know how to sponsor change effectively. Provide them with talking points, suggested actions, and feedback on their visibility.

### Change Network Design

A change network is a distributed team of individuals who support adoption at the local level. They extend the reach of the change management team.

| Role | Selection Criteria | Responsibilities | Time Commitment |
|---|---|---|---|
| **Change champion** | Respected by peers, positive toward the change, good communicator | Cascade messages, collect feedback, model new behaviors, provide peer support | 10-15% of time during transition |
| **Super-user** | Deep system expertise, patient teacher, problem solver | Provide floor support, answer system questions, identify training gaps, support go-live | 15-20% of time during transition, ongoing 5-10% |
| **Peer advocate** | Credible in their department, trusted by colleagues | Have informal conversations, normalize the change, surface concerns to the change team | 5% of time |
| **Regional lead** | In global rollouts: local knowledge, cultural fluency, language skills | Adapt global materials to local context, coordinate local logistics, manage local resistance | 15-20% of time during their region's rollout |

**Change network management:**
- Recruit: Identify candidates through manager nominations and self-nominations. Aim for 1 champion per 25-50 impacted users.
- Equip: Train the network before the broader population. Give them early access to the system, detailed knowledge, and talking points.
- Engage: Meet with the network biweekly. Share updates, collect feedback, address their concerns first.
- Recognize: Publicly acknowledge their contribution. Include change network participation in performance reviews.

### Organizational Readiness Assessment

Readiness assessment measures whether the organization is prepared for the change to take effect.

**Readiness survey dimensions:**
- **Awareness**: Do people know the change is coming and why?
- **Understanding**: Do people understand what will change for them specifically?
- **Capability**: Have people been trained and can they perform in the new system?
- **Willingness**: Are people willing to adopt the new way of working?
- **Support**: Do people know where to get help?

**Go/no-go criteria for go-live:**

| Criterion | Target | Measurement |
|---|---|---|
| Training completion | >90% of impacted users | LMS completion records |
| Training proficiency | >80% pass rate on assessments | Assessment scores |
| Data migration validated | 100% of critical data verified | Data validation reports |
| Change network in place | 1 champion per 50 users, trained and equipped | Network roster and training records |
| Sponsor communication delivered | 100% of sponsor cascade completed | Communication tracker |
| Help desk staffed and trained | Support team trained on new system, escalation paths defined | Support readiness checklist |
| Critical workarounds documented | All known gaps have documented temporary procedures | Workaround register |
| Resistance managed | No unresolved P1/P2 resistance issues | Resistance log |

**Readiness heat maps** visualize readiness by department, location, or role:
- Green: On track, no significant concerns
- Yellow: Some gaps, intervention in progress
- Red: Significant gaps, may require go-live delay for this group

### Benefits Realization

Benefits realization ensures that the business value promised in the business case is actually achieved after the system goes live.

**Benefit register**: A living document that tracks each expected benefit:

| Benefit | Metric | Baseline | Target | Target Date | Owner | Status |
|---|---|---|---|---|---|---|
| Faster month-end close | Days to close | 15 days | 5 days | 6 months post-go-live | Controller | On track |
| Reduced duplicate invoices | Duplicate rate | 4.2% | <0.5% | 3 months post-go-live | AP Manager | At risk |
| Improved order accuracy | Order error rate | 3.8% | <1.0% | 6 months post-go-live | Order Ops Lead | On track |

**Measurement framework:**
1. **Baseline**: Measure current state before go-live. This is non-negotiable -- without a baseline, you cannot prove improvement.
2. **Early indicators** (0-3 months): System adoption rates, training proficiency, help desk volume, user satisfaction.
3. **Operational benefits** (3-12 months): Process efficiency gains, error reduction, cycle time improvement.
4. **Strategic benefits** (12-24 months): Revenue impact, customer satisfaction, competitive advantage, compliance improvement.

**Value tracking cadence:**
- Monthly for the first 6 months post-go-live (report to steering committee)
- Quarterly for months 6-24 (report to executive sponsor)
- Annually thereafter (report to governance board)

**Sustainability planning**: Benefits erode if not actively maintained. Sustainability requires:
- Ongoing training for new hires and role changes
- Continuous improvement process to optimize processes after initial adoption
- System updates and enhancements based on user feedback
- Regular benefits review to ensure gains are sustained

### Cultural Considerations

Change does not happen in a cultural vacuum. Organizational culture profoundly shapes how change is received and adopted.

**Change capacity**: Every organization has a finite capacity to absorb change. Factors:
- How many other changes are in flight concurrently?
- What is the organization's track record with past changes?
- How much discretionary effort can people realistically invest?

**Change saturation indicators:**
- Employee engagement scores declining
- Increase in turnover, especially among high performers
- People disengaging from communications ("another email about another initiative")
- Quality and productivity declining across the board (not just for the specific change)

**Change fatigue management:**
- Sequence changes deliberately -- do not stack multiple major changes in the same period for the same group
- Combine changes where possible (e.g., if two systems are rolling out to the same team, coordinate timelines and messaging)
- Reduce non-essential change during major transitions (freeze policy changes, defer reorganizations)
- Communicate awareness of the burden: "We know this is a lot. Here's why it matters and here's how we're supporting you."

## Workflow

### 1. Assess the Change

- Define the scope and nature of the change: what is changing, who is affected, how significantly.
- Conduct stakeholder analysis using the power/interest grid.
- Assess organizational readiness and change capacity.
- Review lessons learned from past changes in the organization.
- **Tool**: Stakeholder mapping template, readiness survey, change history review.
- **Watch out for**: Underestimating the scope of change. "We're just changing the system" ignores process, role, and behavioral changes.
- **Output**: Change assessment document with stakeholder map, impact summary, and readiness baseline.

### 2. Build the Change Strategy

- Select the change framework(s) appropriate for the scope and culture.
- Define the change management team and change network structure.
- Identify and activate executive sponsors.
- Design the communication plan with audience segmentation and cadence.
- Design the training strategy based on impact assessment and skill gap analysis.
- **Tool**: Change strategy template, communication plan template, training needs analysis.
- **Watch out for**: Creating a strategy document that sits on a shelf. The strategy must be a working plan with assigned owners and due dates.
- **Output**: Change management strategy and plan, integrated with the project plan.

### 3. Activate Sponsors and Change Network

- Coach the primary sponsor on visible sponsorship behaviors.
- Brief the sponsor coalition and secure their commitment.
- Recruit, train, and equip the change champion network.
- Launch the communication plan with the sponsor's opening message.
- **Tool**: Sponsor coaching guide, change champion toolkit, communication kickoff.
- **Watch out for**: Sponsors who delegate all communication to the change team. The message must come from leadership, not from the project.
- **Output**: Active sponsor coalition and equipped change network.

### 4. Manage Through the Transition

- Execute communications per the plan, adapting based on feedback.
- Deliver training in alignment with system readiness (do not train too early or too late).
- Monitor resistance indicators and intervene proactively.
- Conduct readiness assessments at key milestones.
- Support the go/no-go decision with readiness data.
- **Tool**: Readiness heat maps, resistance log, training completion dashboard.
- **Watch out for**: Treating training as the entirety of change management. Training is one of five ADKAR elements, not the whole program.
- **Output**: Organization tracked to readiness with issues managed.

### 5. Support Go-Live

- Deploy floor support (super-users, change champions, IT support) in affected areas.
- Increase communication frequency (daily updates during go-live week).
- Monitor adoption metrics in real-time (login rates, transaction volumes, help desk tickets).
- Escalate critical issues through the sponsor coalition.
- **Tool**: War room operations, adoption dashboard, escalation tracker.
- **Watch out for**: Pulling go-live support too early. The first two weeks are the highest-risk period for adoption.
- **Output**: Successful go-live with real-time adoption monitoring and support.

### 6. Sustain and Realize Benefits

- Transition from project-mode support to BAU (business as usual) support structures.
- Continue reinforcement communications (tips, success stories, metrics).
- Measure and report on benefits realization per the benefit register.
- Conduct a change management retrospective: what worked, what to improve for the next rollout.
- Ensure knowledge transfer to ongoing operations (training for new hires, process documentation updates).
- **Tool**: Benefits tracker, adoption metrics, retrospective template.
- **Watch out for**: Declaring victory at go-live. The change is not complete until new behaviors are the default and benefits are being realized.
- **Output**: Sustained adoption with measurable business benefits.

## Decision Guide

### Choosing Change Management Intensity

| Factor | Light Touch | Standard | Intensive |
|---|---|---|---|
| Number of users affected | <50 | 50-500 | >500 |
| Process change severity | Low (same process, new tool) | Medium (modified process) | High (new process or role) |
| Organizational change history | Positive track record | Mixed | Poor track record or high change fatigue |
| Geographic scope | Single location | Multiple locations, same region | Global, multi-region |
| Sponsor strength | Strong, active sponsor | Adequate sponsor | Weak or absent sponsor (must build) |

### Choosing Training Approach

| Situation | Recommended Approach |
|---|---|
| Large audience, simple changes | E-learning modules + job aids + help desk |
| Medium audience, moderate changes | Instructor-led workshops + practice labs + super-user support |
| Small audience, complex changes | 1-on-1 coaching + simulation exercises + extended hypercare |
| Global rollout, varied readiness | Train-the-trainer + localized delivery + regional super-users |
| Ongoing new hire onboarding | Self-paced e-learning + mentor pairing + certification |

### Choosing Communication Channel by Message Type

| Message Type | Primary Channel | Supporting Channel |
|---|---|---|
| Vision and urgency | Town hall, video from sponsor | Follow-up email, intranet |
| Specific impact by role | Team meeting led by manager | Role-specific email, job aid |
| Timeline and milestones | Project newsletter | Intranet project page |
| How-to and reference | Intranet/wiki | Video walkthroughs, Slack |
| Go-live status | Daily email, Slack channel | War room, floor support |
| Success stories | Newsletter, town hall | Slack, intranet |
| Feedback collection | Survey, Slack, AMA sessions | 1-on-1 through change champions |

## Common Patterns

### Phased Rollout with Pilot

The most common and safest approach for large ERP implementations:

1. **Pilot group**: Select one business unit or location that is representative, willing, and has strong local leadership. Roll out the full solution to this group first.
2. **Evaluate**: Measure adoption, collect feedback, identify gaps. Adjust training, communication, and the system itself.
3. **Wave 1**: Roll out to the next group(s), incorporating pilot lessons. Pilot users become advocates and super-users for Wave 1.
4. **Subsequent waves**: Continue rolling out, with each wave benefiting from cumulative learning.

Benefits: Lower risk, built-in success stories, growing expertise pool. Risk: Pilot group may not be representative; other groups may resist being "last."

### Manager as Change Leader

Middle managers are the most critical (and most often neglected) link in the change chain:

- They translate corporate vision into team-specific action
- They are the most trusted source of information for front-line employees
- They are often the most resistant because they bear the burden of managing disruption while maintaining operations

**Equip managers with:**
- Talking points customized for their team's specific changes
- Training before their teams (so they can answer questions)
- Permission and time allocation to support their teams through the transition
- A direct line to the change team for escalation

### Resistance Recovery Pattern

When resistance is discovered late or is more severe than expected:

1. **Acknowledge**: Do not minimize or dismiss the resistance. Publicly acknowledge that the transition is difficult.
2. **Listen**: Conduct focused listening sessions with resistant groups. Use the root cause categories above to diagnose.
3. **Act**: Address the root causes with specific, visible actions (fix the system issue, adjust the process, provide additional training).
4. **Communicate**: Close the loop -- tell people what you heard and what you did about it.
5. **Monitor**: Track whether the intervention is working through adoption metrics and follow-up conversations.

## Anti-Patterns

- **"Announce and pray"**: Sending a single email or holding one town hall about the upcoming change and assuming people will figure it out. Communication must be sustained, multi-channel, audience-specific, and bidirectional.
- **"Training = change management"**: Treating training as the entire change management program. Training addresses Knowledge, one of five ADKAR elements. Without Awareness, Desire, Ability, and Reinforcement, training alone achieves nothing.
- **"One-size-fits-all communication"**: Sending identical messages to executives, managers, and end users. Each audience needs different content, detail level, framing, and call to action.
- **"Change management starts at go-live"**: Beginning change management activities in the weeks before go-live. By then, resistance is entrenched, communication gaps are insurmountable, and training is crammed. Start change management in the design phase.
- **"The system sells itself"**: Assuming that if the technology is good, people will adopt it. Technology adoption is a behavioral change, not a technical evaluation. Good technology with poor change management loses to mediocre technology with great change management.
- **"Delegate sponsorship"**: The executive sponsor delegates all visible sponsorship activities to the project manager or change lead. Employees watch what leaders do, not what project teams say. If the sponsor is not visibly engaged, the change is not seen as a priority.
- **"Checkbox training"**: Marking training "complete" based on attendance rather than demonstrated proficiency. Track competency, not just completion.
- **"Ignore the middle"**: Focusing change efforts on executives (for sponsorship) and end users (for adoption) while neglecting middle managers. Middle managers are the bridge; if they do not actively support the change, it stalls.
- **"Benefits assumed"**: Assuming that the business benefits in the business case will automatically materialize after go-live. Without active measurement, tracking, and course correction, benefits decay or never materialize.

## Checklist

- [ ] Change scope and nature defined (what is changing, for whom, how significantly)
- [ ] Stakeholder analysis completed with power/interest mapping
- [ ] Impact assessment completed per role and per department
- [ ] Skill gap analysis completed with training needs identified
- [ ] Change management framework selected and strategy documented
- [ ] Executive sponsor identified and actively coached
- [ ] Sponsor coalition briefed and committed
- [ ] Change network recruited, trained, and equipped (1 champion per 25-50 users)
- [ ] Communication plan designed with audience segmentation and cadence
- [ ] Feedback channels established and monitored
- [ ] Training plan designed by audience and impact level
- [ ] Training materials developed and validated with pilot users
- [ ] Resistance management plan in place with early warning indicators
- [ ] Organizational readiness surveys conducted at key milestones
- [ ] Go/no-go criteria defined and assessed before go-live
- [ ] Go-live support plan in place (floor support, war room, escalation paths)
- [ ] Adoption metrics defined and dashboards built
- [ ] Benefits register created with baselines captured before go-live
- [ ] Post-go-live reinforcement plan documented
- [ ] Sustainability plan for ongoing adoption (new hire training, continuous improvement)
- [ ] Change management retrospective scheduled

## erp.ai & Proto

**erp.ai**: Communication templates, adoption tracking dashboards, and structured feedback collection channels integrated into the platform change lifecycle.

**Proto**: Generates stakeholder communication plans and readiness assessments as structured mission outputs, using the OBSERVE phase to gauge adoption signals and the ITERATE phase to refine messaging based on feedback data.

## Related

- [Data Migration](../data-migration/SKILL.md) -- data migration is a major change driver and communication topic
- [Workflow Automation](../workflow-automation/SKILL.md) -- new workflows require process change management
- [Master Data Management](../master-data-management/SKILL.md) -- MDM stewardship programs require change management
- [Security & Roles](../security-roles/SKILL.md) -- role changes are a key impact area in ERP implementations
