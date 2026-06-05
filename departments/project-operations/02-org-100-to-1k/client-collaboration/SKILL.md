---
name: client-collaboration
description: This skill should be used when the task involves how to set up client portals, share status reports, manage approval workflows, share documents, and collect feedback.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: project-operations
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Client Collaboration

## Size-Tier Scope

This variant scales the operating pattern for organizations of 100 to 1,000 people. Use it when the app needs formal ownership, repeatable approvals, role-scoped reporting, and practical automation without the full governance weight of a global enterprise rollout.


## What This Process Does

Client collaboration is how you keep your clients in the loop without drowning them in details or leaving them in the dark. Professional services engagements live and die by the client relationship, and nothing erodes trust faster than surprises — a missed deadline the client hears about for the first time in a status meeting, a budget overrun nobody mentioned, or a deliverable that does not match expectations because nobody asked for feedback along the way.

This process covers client portals (a dedicated space where your clients can see project status, access documents, and interact with your team), status reports (regular updates on progress, risks, and next steps), approval workflows (formal sign-off processes for deliverables, change requests, and milestones), document sharing (getting the right documents to the right people securely), and feedback collection (structured ways to hear what the client thinks before problems fester).

Think of it like a contractor renovating your kitchen. The best contractors do not just disappear for three months and reveal the finished kitchen. They give you a way to check progress, they send weekly updates with photos, they get your approval before making irreversible decisions (tile color, cabinet hardware), they share drawings and invoices in an organized way, and they ask if you are happy with how things are going. Client collaboration is that same experience for professional services.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **Portal**, **Project**, and **Website** apps in the catalog. ERP•AI's built-in portal framework lets external users (your clients) log in and see specific records — project status, tasks assigned to them, documents, and invoices. Deploy the customer portal template and customize the views to show project-relevant information.

Also look for **Feedback** and **Web Form** templates that enable structured client input without requiring portal login for simple interactions like approvals or surveys.

## Build — Setting It Up

### With Agents

AI agents make client collaboration proactive instead of reactive:

- **Automated status reports**: The agent compiles project data (milestones hit, hours burned, risks identified, tasks completed) into a polished status report. It writes the narrative summary in plain English, not project management jargon. It sends the report on schedule — the client gets it every Friday at 3 PM without anyone on your team lifting a finger.
- **Approval workflow management**: When a deliverable is ready for client review, the agent notifies the right client stakeholders, provides the document, sets a review deadline, and sends escalating reminders if approval is not received. It tracks who approved, when, and any conditions.
- **Smart document sharing**: The agent organizes project documents into a logical folder structure on the portal, controls access based on document sensitivity, and notifies clients when new documents are posted. When a client asks for a specific document, the agent finds it instantly.
- **Sentiment monitoring**: The agent analyzes the tone and content of client communications (emails, portal comments, meeting notes) to detect early signs of dissatisfaction. A subtle shift from enthusiastic responses to terse acknowledgments can signal trouble before the client formally escalates.
- **Meeting preparation**: Before client meetings, the agent prepares a brief — open items from the last meeting, current status, items needing client input or decision, and talking points for sensitive topics.

### Key Decisions

**Portal scope**: What can clients see? Options range from full transparency (real-time task status, hours logged, budget remaining) to curated views (milestone status, approved deliverables, upcoming deadlines). Full transparency builds trust but can lead to micromanagement. Curated views are cleaner but can feel like you are hiding something.

**Status report format and frequency**: Weekly status reports are standard for active engagements. Monthly for steady-state or managed services. The format should be consistent across all your projects — clients who work with you on multiple engagements should not receive wildly different report formats.

**Approval types**: What needs formal client approval? At minimum: project plan, milestone deliverables, change requests, and budget changes. Some firms also require approval for team changes, subcontractor additions, or travel expenditures.

**Approval SLAs**: How long does the client have to approve? Define expectations in the SOW — typically 5 to 10 business days. Specify what happens if the client does not respond (deemed approved? project paused?). Without SLAs, approvals sit in limbo and your timeline slips.

**Document management approach**: Shared folder (like SharePoint), dedicated portal, or email attachments? Portals are best for ongoing access and version control. Email is best for nothing, but clients often prefer it anyway. Define a single source of truth and stick to it.

**Feedback mechanism**: Formal surveys, informal check-ins, or both? Formal surveys (quarterly satisfaction scores) provide quantitative data. Informal check-ins (monthly relationship calls) catch qualitative issues. Use both.

### Common Mistakes

- **Information overload**: Sharing every task, every hour, every internal discussion with the client. They do not want to manage your project — they hired you to do that. Share what they need to make decisions and feel confident.
- **Inconsistent communication**: Status reports go out on time for the first month, then become sporadic. Clients notice and interpret it as the project going off the rails, even when everything is fine.
- **No single point of contact**: The client gets emails from the PM, the tech lead, the analyst, and the billing coordinator. Confusion and contradictory messages follow. Designate one primary contact and channel all communications through them.
- **Surprise escalations**: The first time the client hears about a problem should not be when it is already a crisis. Communicate risks early, even if you are still working on solutions. Clients can handle bad news better than surprises.
- **Ignoring feedback**: Collecting client feedback and then doing nothing with it is worse than not collecting it at all. The client sees you asking the questions but nothing changing.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Key metrics to monitor:**
- **Approval cycle time**: Average days from deliverable submission to client approval. Track by client and by approval type. Increasing cycle times often signal client disengagement or dissatisfaction.
- **Portal adoption**: Are clients actually using the portal? Track login frequency, documents viewed, and comments posted. Low adoption means the portal is not useful enough or clients do not know about it.
- **Status report delivery rate**: Percentage of scheduled reports delivered on time. Should be 100%. Anything less means your process has gaps.
- **Client satisfaction score**: Whether from formal surveys or NPS-style questions, track this quantitatively over time. A declining score is a leading indicator of relationship trouble.
- **Open action items aging**: How long do client-side action items stay open? This tells you how engaged the client is. Many old open items suggest the client is disengaged or overwhelmed.
- **Response time**: How quickly does the client respond to your requests? And how quickly do you respond to theirs? Measure both.

**Alerts to set:**
- Client approval pending for more than 7 business days
- Client has not logged into the portal in more than 14 days (for active projects)
- Status report not delivered within 24 hours of scheduled time
- Client satisfaction score drops below threshold (e.g., below 7 out of 10)
- Client escalation received (formal complaint or request to speak with management)
- Three or more client action items overdue simultaneously

### Exception Handling

**Client non-responsiveness**: The client stops responding to emails, misses meetings, and does not approve deliverables. The agent escalates through defined channels — first to the client's project sponsor, then to your account manager — with a documented timeline of attempts to engage.

**Stakeholder change**: The client's project sponsor or key decision-maker changes mid-project. The agent identifies all pending approvals, open action items, and relationship context, then prepares an onboarding package for the new stakeholder so they can get up to speed quickly.

**Confidential information leak**: A document that should have been restricted gets shared too broadly. The agent flags the access violation, helps assess the impact, and initiates your firm's information security incident response process.

**Conflicting client feedback**: Different client stakeholders give contradictory direction. The agent documents the conflicting inputs, identifies the decision that needs to be made, and recommends scheduling a meeting with all parties to resolve the conflict.

**Scope approval dispute**: The client says they never approved a change that your records show they did. The agent retrieves the approval record — timestamp, approver name, any comments — to resolve the dispute with documentation.

### Routine Tasks

**Daily**: Agent monitors for new client portal activity (comments, questions, document uploads) and routes them to the appropriate team member for response.

**Weekly**: Agent generates and distributes status reports for all active projects. Compiles open action items and pending approvals into a reminder digest for client stakeholders.

**Monthly**: Agent sends a client satisfaction pulse check — a brief 3 to 5 question survey about the engagement. Analyzes results and flags any scores below threshold.

**Per milestone**: Agent prepares a milestone completion package for client review — the deliverable itself, supporting documentation, acceptance criteria checklist, and approval form. Manages the approval workflow through completion.

**Quarterly**: Agent generates a relationship health report for the account team — satisfaction trends, approval cycle times, portal usage patterns, and recommendations for relationship strengthening.

## Scale — Growing It

### Adding Complexity

**Multi-project client portals**: When you have 5 or more active projects with the same client, they need a unified view — a client-level dashboard showing all their projects, not separate portals for each engagement.

**Client hierarchy management**: Large clients have complex stakeholder structures — executive sponsors, project owners, functional leads, PMO staff. Different stakeholders need different views and approval authorities. Your portal and communication plan must accommodate this hierarchy.

**Third-party integration**: Clients may want project data pushed to their own systems — their PPM tool, their SharePoint, their Jira. Integration between your portal and client systems requires careful scoping and security consideration.

**Multi-language support**: Global clients may need portal content and status reports in multiple languages. Translation adds effort and delay. Decide which content gets translated and which is English-only.

**Audit trail requirements**: Some clients (especially in regulated industries) require a complete audit trail of all communications, approvals, and document exchanges. Your collaboration tools need tamper-proof logging.

### Automation Opportunities

- **Self-service reporting**: Clients configure their own dashboard views, choosing which metrics and which level of detail they want to see. No request needed from your team.
- **Intelligent meeting scheduling**: Agent finds mutually available times across your team and client stakeholders, drafts agendas based on open items and upcoming milestones, and distributes pre-read materials.
- **Automated meeting minutes**: Agent attends (or processes the transcript of) client meetings, extracts decisions, action items, and risks, and distributes minutes within hours.
- **Predictive satisfaction modeling**: Agent identifies patterns that precede client dissatisfaction — slowing approval cycles, fewer portal logins, shorter email responses — and alerts the account team before the client formally escalates.
- **Personalized client communications**: Agent tailors the level of detail and tone of communications based on each stakeholder's preferences. The CFO gets a financial summary. The PMO lead gets a detailed status. The executive sponsor gets a one-paragraph highlight.

### When to Redesign

- Client satisfaction scores are trending down despite consistent delivery quality
- Portal adoption is below 30% across your client base
- More than 20% of project delays are caused by waiting for client approvals
- You are serving clients with conflicting security and access requirements that your current portal cannot accommodate
- Client feedback consistently asks for more transparency or faster communication
- You have acquired a firm that uses different client collaboration tools and need to consolidate

## By Industry

1. **Manufacturing**: Plant managers are not sitting at desks checking portals. Status updates need to be mobile-friendly and brief. Collaboration tools must support visual content — photos of installed equipment, floor layouts, and commissioning checklists.

2. **Healthcare**: HIPAA compliance applies to any project information that could include PHI. Client portals must have appropriate access controls. Clinical stakeholders have extremely limited availability — communication must be concise and respectful of their time.

3. **Education**: Shared governance means more stakeholders need visibility and more people have approval authority. Committee-based decision-making slows approvals. Build longer approval timelines into project plans and use the portal to keep the broader community informed.

4. **Retail**: Store operations teams need simple, visual progress tracking for multi-location rollouts. A store-by-store status map is more useful than a Gantt chart. Seasonal urgency means approval SLAs must be shorter during peak preparation periods.

5. **Hospitality**: General managers at individual properties are your primary stakeholders but report to regional and corporate management. Communication must cascade appropriately. Property-level portals with roll-up views for regional oversight work well.

6. **Construction**: Construction clients are comfortable with project management concepts and expect detailed reporting. Collaboration often centers on RFIs (Requests for Information) and submittals — build these into your workflow.

7. **Real Estate**: Transaction timelines mean urgency is high and decisions need to happen in days, not weeks. Collaboration tools must support mobile access for agents and brokers who are rarely at a desk.

8. **Agriculture**: Connectivity limitations in rural areas mean portal access cannot be the only communication channel. SMS and email summaries are essential fallbacks. Communication timing must respect planting and harvest schedules.

9. **Banking & Financial Services**: Security requirements for client portals are among the highest of any industry. Multi-factor authentication, IP restrictions, and data residency requirements are common. Communication must be carefully reviewed for regulatory sensitivity.

10. **Insurance**: Multiple stakeholder groups (underwriting, claims, actuarial, IT) have different communication needs on the same project. Tailored views per department within the same client portal avoid information overload.

11. **Legal**: Attorney-client privilege considerations affect what can be shared and how. Document sharing must support legal hold and privilege designations. e-Discovery implications mean all project communications could be discoverable.

12. **Government**: FOIA (Freedom of Information Act) requests can make project documents public. Communication must be crafted accordingly. Government clients often mandate specific communication formats and reporting templates.

13. **Pharma**: Regulated environment means document versioning and approval audit trails are mandatory, not optional. 21 CFR Part 11 electronic signature requirements may apply to client approvals.

14. **Automotive**: OEMs have specific vendor portal requirements — you may need to use their systems rather than yours. Supplier communication protocols are well-defined and non-negotiable.

15. **Telecom**: Large transformation programs have dedicated PMO structures on the client side. Your reporting must integrate with their governance framework. Network operations teams need real-time status visibility during migration events.

16. **Media & Entertainment**: Creative review processes have different workflows than technical deliverable approvals. Collaboration tools must support rich media review — video, audio, graphics — not just documents.

17. **Energy & Utilities**: Public utility commissions may require transparency into project communications for rate case support. Collaboration documentation may become evidence in regulatory proceedings.

18. **Food & Beverage**: Food safety urgency means some communications need immediate attention. Recall simulation exercises test communication channels. FDA audit readiness requires complete documentation trails.

19. **Logistics & Transport**: Peak season blackout periods mean client communication shifts from project progress to operational stability. Multi-carrier environments require separate communication threads for each carrier integration workstream.

20. **Nonprofit**: Board members are part-time stakeholders who need concise, high-level updates. Staff turnover is high, so portal access management and knowledge transfer are constant concerns.

21. **SaaS / Technology**: Tech-savvy clients expect real-time collaboration tools, not weekly PDF reports. Integration with their development tools (Jira, Confluence, Slack) may be expected. Agile ceremonies replace traditional status reporting.

22. **Professional Services**: Peer firms understand your process because they use the same one. They may have strong opinions about your reporting format and collaboration tools. Be prepared to adapt to their preferences rather than imposing yours.

23. **Defense & Aerospace**: Classified environments may require air-gapped collaboration systems with no internet connectivity. CUI (Controlled Unclassified Information) handling procedures apply to many project documents. Communication security is paramount.

24. **Mining**: Remote site connectivity means asynchronous communication is the norm, not the exception. Visual progress documentation (drone footage, site photos) is valued by stakeholders who cannot visit remote locations.

25. **Chemicals**: Safety data and environmental compliance documentation must be managed with appropriate access controls. Emergency response communication protocols must be part of any collaboration plan for on-site work.

26. **Textiles & Apparel**: Visual collaboration tools for design review and approval. Collection calendar pressure means approval cycles must be compressed during peak seasons. Multi-country supply chains require multi-language communication support.

27. **FMCG**: Brand teams expect marketing-quality status presentations, not spreadsheets. Speed of decision-making is a cultural norm — lengthy approval workflows frustrate FMCG clients.

28. **Electronics**: Technical documentation sharing requires version control and revision tracking. IP protection concerns mean document access controls must be granular. Lab test results and certification documentation need specific handling.

29. **Oil & Gas**: Joint venture structures mean multiple companies are the "client" with different access rights to project information. HSE communication has specific regulatory requirements. Crisis communication plans must be pre-established.

30. **Jewelry & Luxury**: Brand discretion requirements mean project information is treated as highly confidential. Collaboration tools must reflect the premium client experience the brand represents. High-touch, personalized communication is expected.


## ERP•AI & Proto

**ERP•AI**: The Portal framework enables external user access to project data with configurable views and permissions. Web Forms allow structured input collection (approvals, feedback) without portal login. The Website module can host client-facing project documentation. Integration with Projects means portal views stay current with real project data.

**Proto**: Proto agents power the ORAI cycle for client collaboration — Observing project data, client interactions, and engagement patterns; Reasoning about what information each stakeholder needs and when satisfaction trends are shifting; Acting by generating status reports, managing approval workflows, and organizing document sharing; and Iterating by learning client preferences and communication patterns to deliver increasingly tailored and proactive collaboration experiences.
