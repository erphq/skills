---
name: customer-support
description: This skill should be used when the task involves case/ticket lifecycle, SLA management, knowledge base, escalation management, customer satisfaction, omnichannel support, and service analytics.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - domain
  type: domain
  scope: internal
---
# Customer Support

## Purpose

This domain covers the post-sale customer experience: handling inquiries and issues, maintaining service level agreements, building and curating knowledge, escalating complex problems, measuring satisfaction, and operating across multiple communication channels. A builder works in this space when the application must manage support tickets, enforce SLAs, run a help center, route and escalate cases, survey customers, or report on service operations.

Customer support has a direct revenue impact. Poor support drives churn. Good support drives retention, expansion, and referrals. The data model must balance operational speed (get the right answer to the customer fast) with analytical depth (understand systemic issues, agent performance, and customer health trends). Every case is also a data point for product improvement, customer health scoring, and revenue risk assessment.

## Key Entities

### Case / Ticket

- **Description**: The atomic unit of customer support. Represents a single customer issue, question, or request from creation through resolution.
- **Key Fields**: `case_id`, `case_number`, `subject`, `description`, `customer_account_id`, `contact_id`, `channel` (email, phone, chat, portal, social, api), `status` (new, open, pending_customer, pending_internal, on_hold, escalated, resolved, closed, reopened), `priority` (critical, high, medium, low), `severity` (S1_system_down, S2_major_impact, S3_minor_impact, S4_cosmetic), `category` (bug, feature_request, how_to, billing, account, configuration, performance, security), `subcategory`, `product_id`, `product_version`, `assigned_agent_id`, `assigned_team_id`, `sla_id`, `response_due_date`, `resolution_due_date`, `first_response_date`, `resolved_date`, `closed_date`, `resolution_code`, `resolution_notes`, `customer_satisfaction_score`, `reopened_count`, `source_case_id` (for linked/parent cases)
- **Relationships**: Belongs to account and contact. Assigned to agent and team. Links to SLA. Has many: comments/updates, attachments, time entries, related cases, knowledge articles. May link to product/feature for product feedback tracking.
- **Design Notes**: Separate `priority` (business impact, set by support) from `severity` (technical impact, set by customer or triage). `Status` drives SLA clock behavior (pending_customer pauses clock). Use `resolution_code` for structured categorization of outcomes (fixed, duplicate, not_a_bug, workaround_provided, feature_request_logged, cannot_reproduce).

### SLA (Service Level Agreement)

- **Description**: Defines the response and resolution time commitments for support cases, based on customer tier, priority, and/or product.
- **Key Fields**: `sla_id`, `sla_name`, `customer_tier` (platinum, gold, silver, bronze), `priority`, `first_response_target_hours`, `next_response_target_hours`, `resolution_target_hours`, `business_hours_calendar_id`, `escalation_on_breach`, `breach_notification_recipients`
- **Example SLA Matrix**:

| Priority | Platinum Response | Platinum Resolution | Gold Response | Gold Resolution | Silver Response | Silver Resolution |
|---|---|---|---|---|---|---|
| Critical | 15 min | 4 hours | 30 min | 8 hours | 1 hour | 24 hours |
| High | 1 hour | 8 hours | 2 hours | 24 hours | 4 hours | 48 hours |
| Medium | 4 hours | 24 hours | 8 hours | 48 hours | 24 hours | 5 days |
| Low | 8 hours | 48 hours | 24 hours | 5 days | 48 hours | 10 days |

- **Relationships**: Applied to cases based on account tier and case priority. Links to business hours calendar. Drives escalation rules.

### Business Hours Calendar

- **Key Fields**: `calendar_id`, `calendar_name`, `timezone`, `monday_start`, `monday_end`, ..., `friday_end`, `saturday_hours`, `sunday_hours`, `holidays`
- **Types**: Standard business hours (9am-5pm Mon-Fri), extended (7am-9pm), 24/5, 24/7. Multiple calendars for different customer tiers or regions.
- **Usage**: SLA clock ticks only during business hours unless SLA specifies 24/7 clock.

### Agent / Support User

- **Key Fields**: `agent_id`, `employee_id`, `agent_name`, `email`, `team_id`, `tier_level` (L1, L2, L3), `skills` (product areas, languages, certifications), `max_concurrent_cases`, `max_concurrent_chats`, `status` (available, busy, away, offline), `shift_schedule_id`
- **Relationships**: Assigned to team. Has many cases, time entries. Links to employee record in HR. Skills determine routing eligibility.

### Team / Queue

- **Key Fields**: `team_id`, `team_name`, `team_type` (triage, product_support, billing, technical, escalation, VIP), `manager_id`, `tier_level`, `supported_products`, `operating_hours_calendar_id`, `auto_assignment_method` (round_robin, least_loaded, skills_based, pull)
- **Relationships**: Contains agents. Receives cases via routing rules. Has associated SLAs.

### Knowledge Article

- **Key Fields**: `article_id`, `title`, `body` (rich text / markdown), `summary`, `category`, `subcategory`, `product_id`, `article_type` (how_to, troubleshooting, FAQ, policy, known_issue, release_note), `status` (draft, in_review, published, archived), `version`, `author_id`, `reviewer_id`, `published_date`, `last_updated_date`, `expiration_date`, `visibility` (internal, customer_portal, public), `language`, `tags`, `view_count`, `helpful_votes`, `not_helpful_votes`, `linked_case_count`
- **Relationships**: Links to cases (articles used to resolve cases, or cases that prompted article creation). Belongs to knowledge base category tree.

### Customer Satisfaction Survey (CSAT)

- **Key Fields**: `survey_id`, `case_id`, `contact_id`, `account_id`, `survey_type` (csat, nps, ces), `sent_date`, `response_date`, `score`, `comments`, `agent_id`, `channel`
- **CSAT**: "How satisfied were you with your experience?" 1-5 scale. CSAT % = (4s + 5s) / total responses * 100.
- **NPS**: "How likely are you to recommend us?" 0-10 scale. NPS = % Promoters (9-10) - % Detractors (0-6).
- **CES**: "How easy was it to resolve your issue?" 1-7 scale. Lower effort = higher loyalty.
- **Relationships**: Links to case and agent. Aggregated by agent, team, product, and time period.

### Escalation

- **Key Fields**: `escalation_id`, `case_id`, `escalation_type` (functional, hierarchical, executive), `from_tier`, `to_tier`, `escalated_by`, `escalation_reason`, `escalation_date`, `target_resolution_date`, `status` (active, resolved, de_escalated), `resolution_notes`
- **Relationships**: Links to case. Tracks escalation chain. Notifies management.

### Interaction / Case Comment

- **Key Fields**: `interaction_id`, `case_id`, `author_id`, `author_type` (agent, customer, system), `channel` (email, phone, chat, portal, internal_note), `content`, `created_date`, `is_public` (visible to customer vs. internal only), `attachments`
- **Relationships**: Belongs to case. Chronological thread of all communication.

## Core Business Processes

### Case Lifecycle

#### 1. Creation

- **Email**: Inbound email to support address creates case. Parse subject, body, attachments. Match sender to existing contact/account. Thread subsequent emails to existing case via subject line matching or tracking ID.
- **Phone**: Agent creates case during or after call. CTI (computer telephony integration) pops customer record on inbound call. Log call duration and outcome.
- **Chat**: Live chat creates case automatically. Transcript attached on chat end. Chatbot pre-qualifies and creates case if unable to resolve.
- **Portal**: Customer submits form with category, subject, description, attachments. Auto-populate account and contact from session.
- **API**: Programmatic case creation from integrated systems (in-app support, monitoring alerts, IoT events).
- **Social**: Social media mentions/DMs monitored and converted to cases. Track source platform (Twitter/X, Facebook, LinkedIn).

#### 2. Classification & Triage

- **Auto-Classification**: ML-based or rule-based categorization from subject/description. Suggest category, subcategory, product, and priority.
- **Priority Assignment**: Based on severity (customer-reported impact), customer tier, product, and business rules. Auto-escalate: S1 + Platinum tier = Critical priority with immediate escalation.
- **SLA Application**: System selects applicable SLA based on account tier, priority, and product. Set response and resolution target timestamps. Start SLA clock.

#### 3. Routing & Assignment

- **Routing Methods**:
  - **Skills-Based**: Match case attributes (product, category, language) to agent skills. Route to best-fit agent.
  - **Round-Robin**: Distribute evenly across available agents. Weighted round-robin adjusts for part-time or ramping agents.
  - **Least-Loaded**: Route to agent with fewest open cases. Factor in case complexity weighting.
  - **Queue-Pull**: Cases enter team queue. Agents pull next case when ready. Ensures self-pacing.
  - **Tiered**: L1 handles first. Only route to L2/L3 if L1 cannot resolve.
- **Load Balancing**: Cap concurrent cases per agent (e.g., L1: 15-20, L2: 8-12, L3: 3-5). Exclude agents on break, in training, or with active real-time interactions.
- **Reassignment**: Transfer between agents or teams with full context. Handoff notes required. Track reassignment count (target: < 2 reassignments per case).

#### 4. Investigation & Resolution

- **Knowledge Search**: Agent searches knowledge base. System suggests relevant articles based on case attributes. Track article usage for effectiveness metrics.
- **Troubleshooting**: Structured troubleshooting guides (decision trees) for common issues. Diagnostic data collection (logs, screenshots, system info).
- **Collaboration**: Internal notes for discussion with SMEs. Swarming model: pull in specialists as needed without formal escalation. @mention for asynchronous input.
- **Customer Communication**: Reply via original channel. Set expectations on timeline. Request additional information. Status updates on long-running investigations.
- **Resolution**: Apply fix, provide workaround, or answer question. Document resolution clearly. Link to knowledge article if applicable.

#### 5. Closure

- **Resolution Confirmation**: Set resolution code and notes. Move to "Resolved" status.
- **Customer Verification**: Optionally wait for customer confirmation (auto-close after X days of no response, typically 3-5 business days).
- **Survey**: Trigger CSAT/CES survey upon case closure. Timing: immediately or 24 hours after close.
- **Auto-Close**: Cases in "pending customer" status auto-close after configurable period (5-10 business days) with notification to customer.
- **Reopen**: Customer can reopen within window (e.g., 7 days). Reopened cases linked to original. Track reopen rate as quality metric.

### SLA Management

- **Clock Behavior**: Clock starts when case is created (or when first assigned, depending on configuration). Pauses when status is "pending customer" (waiting for customer response). Resumes when customer responds.
- **Warning Notifications**: Alert at 50% of SLA time elapsed, 75%, and 90%. Notify assigned agent and team lead.
- **Breach Handling**: On SLA breach: auto-escalate to team lead, notify management, increase priority. Log breach with reason. Distinguish response breach (no initial reply in time) from resolution breach (not resolved in time).
- **Reporting**: SLA compliance rate = cases resolved within SLA / total cases. Report by customer tier, priority, product, team, and agent. Contractual SLA reporting for enterprise clients (monthly/quarterly).
- **Business Hours Calculation**: SLA clock counts only business hours per the applicable calendar. Handle timezone differences for global support (use customer's timezone or support center's timezone per policy).

### Knowledge Base Management

#### Article Lifecycle

1. **Identification** -- New article needed when: agent encounters undocumented issue, case pattern emerges (3+ cases on same topic), product release introduces new features, process/policy changes.
2. **Authoring** -- Subject matter expert writes article. Follow template: title, summary, symptoms/question, cause (for troubleshooting), solution/answer, related articles, applies-to (product/version). Use clear, scannable formatting.
3. **Review** -- Peer review for technical accuracy. Editorial review for clarity and style. Compliance review for sensitive topics (security, legal).
4. **Publishing** -- Set visibility: internal-only (agent-facing), customer portal (authenticated customers), or public (SEO-indexed). Assign to category tree. Tag for search optimization.
5. **Maintenance** -- Review schedule: quarterly for high-traffic articles, annually for all. Update for product changes. Track accuracy via feedback (helpful/not helpful votes) and linked case outcomes.
6. **Archival** -- Archive when no longer relevant (discontinued product, outdated process). Redirect to replacement article if applicable.

#### Search Optimization

- **Structured Taxonomy**: Category > subcategory > article. Maximum 3 levels deep. Consistent naming conventions.
- **Search Tuning**: Synonyms (e.g., "password" = "login" = "credentials"). Common misspellings. Boosting by article quality score (views, helpful votes, freshness).
- **Self-Service Deflection**: Knowledge base search on portal before case submission. Suggest articles based on case subject during creation. Track deflection rate: searches that don't result in case creation / total searches.

### Escalation Management

#### Functional Escalation (Tiered Support)

| Tier | Role | Scope | Typical Resolution Rate |
|---|---|---|---|
| **L1 - Front Line** | Support agent | Known issues, how-to, basic troubleshooting, password resets, account questions | Resolve 60-70% of all cases |
| **L2 - Product Support** | Senior agent / specialist | Complex troubleshooting, configuration issues, bug confirmation, workarounds | Resolve 80-90% of escalated cases |
| **L3 - Engineering** | Developer / SRE | Code-level investigation, bug fixes, infrastructure issues, security incidents | Resolve remaining issues |
| **L4 - Vendor/Partner** | External vendor | Third-party product issues, integration problems with partner systems | Vendor SLA applies |

- **Escalation Criteria**: L1 unable to resolve within 30 minutes (or 2 interactions). Issue requires access L1 doesn't have (database, production environment). Bug confirmed. Security incident.
- **Escalation Process**: Document troubleshooting completed. Attach diagnostic data. Set expected timeframe. Notify customer of escalation. L2/L3 acknowledges within 1 hour.
- **Backline SLAs**: L3 engineering response within 4 hours for Critical. All tiers have their own target resolution times.

#### Hierarchical Escalation (Management)

- **Triggers**: SLA breach, customer request for manager, VIP account issue, repeated issue (3+ reopens), executive complaint.
- **Chain**: Team Lead > Support Manager > Director of Support > VP Customer Experience > COO/CEO.
- **Each Level**: Acknowledgment within 30 minutes. Personal communication to customer. Action plan with timeline. Update frequency: at least daily for Critical.

#### Executive Escalation

- **Process**: Dedicated escalation manager assigned. War room for Critical issues with multi-department participation (support, engineering, product, account team). Customer communication from executive sponsor. Post-incident review within 5 business days. Root cause analysis and prevention plan shared with customer.

### Omnichannel Support

#### Channel Configuration

- **Email**: Shared inbox with auto-case creation. Email threading. Signature stripping. Auto-response on receipt. SLA clock starts on email receipt.
- **Phone**: IVR (interactive voice response) for routing. CTI screen pop. Call recording and transcription. Callback option during high wait times. After-call work time for case documentation.
- **Live Chat**: Proactive (triggered by user behavior on website) or reactive (customer-initiated). Bot pre-qualification before agent handoff. Concurrent chat limit per agent (3-5). Co-browsing capability for complex issues.
- **Self-Service Portal**: Knowledge base, case submission form, case status tracking, community forums. Account-specific content (license info, entitled products, SLA terms).
- **Social Media**: Monitor brand mentions. Respond publicly, then move to DM for account-specific issues. Create case from social interaction for tracking.
- **In-App / Widget**: Embedded support widget in product. Contextual help (user's current page/feature informs case details). Chatbot + live agent escalation.

#### Channel Coordination

- **Unified History**: All interactions across channels visible in single timeline on the case. Agent sees full context regardless of channel.
- **Channel Switching**: Customer starts on chat, switches to email for attachment, continues on portal. Case maintains continuity.
- **Routing Consistency**: Same agent handles case across channels when possible. If not, full context transfers.
- **Channel Preference**: Record customer's preferred communication channel. Use for outbound notifications and follow-ups.

## Regulatory & Compliance

| Requirement | Scope | What to Track |
|---|---|---|
| **Data Privacy (GDPR/CCPA)** | Customer data in cases | Right to access all case data. Right to erasure (anonymize case records). Consent for survey and follow-up. Data retention limits for case records. |
| **PCI-DSS** | Payment data in support interactions | Never capture or store card numbers in case notes, chat, or call recordings. Mask if inadvertently provided. Pause recording during payment discussions. |
| **HIPAA** | Healthcare customer support | PHI handling in case records. Encrypted communications. Minimum necessary standard. BAA with SaaS support platform vendor. |
| **Accessibility (ADA/WCAG)** | Customer-facing portal and knowledge base | WCAG 2.1 AA compliance for self-service portal. Alternative support channels for accessibility needs. |
| **Call Recording Laws** | Phone support | One-party vs. two-party consent by state/country. Notification at start of call. Retention and access policies. |
| **SLA Contractual Obligations** | Enterprise customer contracts | Accurate SLA measurement and reporting. Penalty/credit calculation for SLA breaches per contract terms. Evidence retention for disputes. |
| **Data Retention** | Case records | Retain case records per contractual and regulatory requirements (typically 3-7 years). Allow anonymization for GDPR while retaining analytics data. |

## Common Configuration Patterns

- **Case Numbering**: Auto-incrementing with prefix. Format: CS-2026-000001 or product prefix (PAY-000001, CRM-000001). Never reuse numbers.
- **Priority-Severity Matrix**: Two-dimensional classification. Severity (technical impact) set by customer or triage. Priority (business priority) derived from severity + customer tier. Matrix determines SLA and routing.
- **Category Taxonomy**: 3-level hierarchy: category > subcategory > issue type. Example: Technical > Integration > API Authentication Error. Review and update quarterly based on case volume trends.
- **Auto-Response Templates**: Acknowledgment on case creation (include case number, SLA timeline, portal link). Status change notifications. Resolution confirmation. Survey invitation.
- **Canned Responses / Macros**: Pre-written responses for common scenarios. Variables: {{customer_name}}, {{case_number}}, {{product_name}}. Organized by category. Track usage frequency to identify automation opportunities.
- **Business Rules Engine**: If-then rules for automation. Examples: If priority = Critical AND tier = Platinum, then assign to VIP team and notify director. If category = Billing, then route to billing team. If status = pending_customer for 5 days, then auto-close with notification.
- **Skill Groups**: Define skill dimensions: product expertise, language, certification level, issue complexity. Agents self-rate or manager-rate proficiency (1-5). Routing engine matches case attributes to agent skills.
- **Operating Hours**: Follow-the-sun model for 24/7 coverage across regions (Americas > EMEA > APAC). Hand-off protocol at shift transition: warm handoff for active escalations, queue transfer for standard cases.

## Integration Points

| System | Direction | Data | Pattern |
|---|---|---|---|
| **CRM / Sales** | Bidirectional | Account and contact data in, case data and health signals out | Sync account tier, contract details, contact info. Push case volume, CSAT, and escalation data for customer health scoring and renewal risk. |
| **Finance / Billing** | Bidirectional | Contract/entitlement data in, billing adjustments out | Verify support entitlement on case creation. Trigger credit memo or billing adjustment for SLA breach or service issue. |
| **Product / Engineering** | Outbound | Bug reports, feature requests, case data | Bug escalation to Jira, GitHub, Azure DevOps. Feature request aggregation. Product telemetry data on case records. |
| **Email** | Bidirectional | Inbound emails create/update cases, outbound replies from case | IMAP/SMTP or API integration. Email threading. Attachment handling. |
| **Telephony / CTI** | Bidirectional | Inbound/outbound call data, recordings | Screen pop on inbound call. Click-to-call from case. Call logging with duration, outcome. Recording links on case. |
| **Chat Platform** | Bidirectional | Chat sessions, bot conversations | Chatbot-to-agent handoff with conversation history. Chat transcript attached to case. |
| **Knowledge Base / CMS** | Bidirectional | Article content, search analytics | If external KB (Zendesk Guide, Confluence), sync articles and link to cases. |
| **Monitoring / Alerting** | Inbound | System alerts, health check failures | Auto-create cases from monitoring alerts (PagerDuty, Datadog, New Relic). Include diagnostic context. |
| **Customer Success** | Outbound | Case trends, CSAT, escalation history | Feed customer health models. Alert CSM on at-risk signals (high case volume, low CSAT, executive escalation). |
| **Analytics / BI** | Outbound | Case data, agent performance, SLA compliance | Push to data warehouse for advanced analytics, trend analysis, and executive reporting. |
| **SSO / Identity** | Inbound | Customer portal authentication | SAML, OAuth for customer portal access. Verify identity for sensitive account operations. |

## KPIs & Reporting

### Volume & Throughput

- **Case Volume**: New cases created per day/week/month. By channel, category, product, customer tier. Trend analysis and seasonality.
- **Case Backlog**: Open cases at any point in time. Aging distribution: <1 day, 1-3 days, 3-7 days, 7-14 days, >14 days. Backlog should be stable or declining.
- **Throughput**: Cases resolved per day/week. By agent, team, tier. Compare to inflow for capacity planning.
- **Channel Mix**: Percentage of cases by channel. Track shift toward self-service and chat (lower cost channels). Target: >30% self-service deflection.

### Quality & Speed

- **First Contact Resolution (FCR)**: Cases resolved on first interaction / total cases. Target: >70% for L1. Higher is better but watch for premature closure.
- **First Response Time**: Median and 95th percentile time from case creation to first agent response. Target: within SLA. Track by priority.
- **Average Resolution Time**: Median time from case creation to resolution. Segment by priority and category. Exclude time in "pending customer" status for accurate measurement.
- **Average Handle Time (AHT)**: For phone/chat: average time agent spends on interaction (talk time + after-call work). Target varies: L1 phone 8-12 minutes, chat 10-15 minutes.
- **SLA Compliance**: Percentage of cases meeting response and resolution SLAs. Target: >95% for response, >90% for resolution. Report by customer tier.
- **Reopened Rate**: Reopened cases / total resolved cases. Target: <5%. High reopen rate indicates quality issues.

### Customer Satisfaction

- **CSAT Score**: Average satisfaction rating. Target: >4.2 out of 5. By agent, team, product, category.
- **NPS**: Net Promoter Score from support interactions. Relationship NPS (periodic survey) vs. transactional NPS (post-case). Target: >50.
- **CES**: Customer Effort Score. Lower effort correlates with higher retention. Target: <3 on 1-7 scale.
- **Survey Response Rate**: Surveys completed / surveys sent. Target: >20%. Low rate may indicate survey fatigue.

### Agent Performance

- **Cases Resolved per Agent per Day**: Productivity metric. Benchmark varies by complexity: L1 12-20, L2 5-10, L3 2-4.
- **Agent CSAT**: Individual satisfaction scores. Coaching trigger: consistently below team average.
- **Agent Utilization**: Time in active case work / total logged-in time. Target: 70-80% (allow time for breaks, training, admin).
- **Quality Score**: Based on case review audit (sample 5-10 cases per agent per month). Score on: accuracy, completeness, tone, process adherence. Target: >85%.

### Knowledge & Self-Service

- **Self-Service Deflection Rate**: Issues resolved via knowledge base or community without case creation. Target: >30%.
- **Article Helpfulness**: (Helpful votes / total votes) * 100. Target: >80%. Flag articles below 50% for review.
- **Knowledge Gap Analysis**: Cases without linked resolution article. Top uncovered topics = content creation priorities.
- **Search Effectiveness**: Searches with 0 results / total searches. Target: <10%. Search-to-case rate: lower is better.

### Operational

- **Cost per Case**: Total support department cost / cases resolved. Benchmark: $5-15 for self-service, $15-30 for chat/email, $30-50 for phone, $100+ for escalated/engineering.
- **Staffing Efficiency**: Erlang C model inputs: arrival rate, handle time, service level target. Plan agent headcount by shift and channel.
- **Escalation Rate**: Cases escalated to L2/L3 / total cases. Target: L1 escalates <30%. Decreasing trend indicates improving L1 capability.

## Checklist

- [ ] Design case data model with status workflow, priority/severity matrix, and categorization taxonomy
- [ ] Configure SLA definitions by customer tier and priority with business hours calendars
- [ ] Implement SLA clock with pause/resume logic and breach notifications
- [ ] Build case routing engine with skills-based, round-robin, and queue-pull options
- [ ] Configure omnichannel case creation: email parsing, phone/CTI, chat, portal form, API
- [ ] Implement email threading for ongoing case communication
- [ ] Build agent workspace with case queue, customer context, knowledge search, and response tools
- [ ] Configure canned responses and macros with variable substitution
- [ ] Implement tiered escalation workflow (L1 > L2 > L3) with handoff documentation requirements
- [ ] Build hierarchical escalation path with management notification chain
- [ ] Set up knowledge base with article lifecycle: draft > review > publish > archive
- [ ] Configure knowledge base search with synonyms, boosting, and suggested articles
- [ ] Implement self-service portal with knowledge search, case submission, and case tracking
- [ ] Build CSAT/NPS/CES survey system triggered on case closure
- [ ] Configure auto-close rules for pending-customer cases with notification
- [ ] Implement case merge and linking for duplicate and related issues
- [ ] Build SLA compliance reporting by tier, priority, team, and agent
- [ ] Set up agent performance dashboards: cases resolved, CSAT, AHT, quality score
- [ ] Configure integrations: CRM for customer data, engineering for bug escalation, monitoring for auto-case creation
- [ ] Build executive support dashboard: volume trends, backlog, SLA compliance, CSAT, escalation rate, cost per case

## Related

- [Sales & CRM](../sales-crm/SKILL.md) -- customer 360 view, churn risk signals from support, account context for agents
- [Finance & Accounting](../finance-accounting/SKILL.md) -- SLA penalty credits, billing adjustments from support issues
- [Human Resources](../human-resources/SKILL.md) -- agent staffing, scheduling, training, performance management
