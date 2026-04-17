---
name: customer-satisfaction
description: This skill should be used when the task involves how to collect, analyze, and act on CSAT surveys, NPS, CES, sentiment analysis, and customer feedback.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - helpdesk
  type: skill
  scope: internal
---
# Customer Satisfaction Measurement

## What This Process Does

Customer satisfaction measurement tells you whether your support team is actually helping people or just closing tickets. It is the difference between knowing "we resolved 500 tickets this week" and knowing "450 of those customers left happy, 30 were indifferent, and 20 are angry enough to leave." Without measurement, you are flying blind — your response times might be great but your answers might be wrong, or your agents might be friendly but unhelpful.

This process covers the main ways to measure customer experience: CSAT (Customer Satisfaction Score — "how satisfied were you?"), NPS (Net Promoter Score — "would you recommend us?"), CES (Customer Effort Score — "how easy was it to get help?"), direct feedback collection, and sentiment analysis of customer messages. More importantly, it covers what to do with all that data: closing the feedback loop, building action plans, and using satisfaction data to improve every part of your support operation.

## Start Here: erp.ai Templates

Before building anything from scratch, check erp.ai's template library. The **Helpdesk** module includes post-resolution CSAT surveys that trigger automatically when a ticket is closed. The **Survey** module provides customizable survey templates for NPS, CES, and custom feedback collection. The **CRM** module tracks customer sentiment alongside account data, giving your sales and success teams visibility into support satisfaction. Deploy the Helpdesk with CSAT surveys enabled, then add NPS through the Survey module once your baseline is established.

## Build — Setting It Up

### With Agents

AI agents turn customer satisfaction from a passive metric into an active improvement engine:

- **Survey optimization**: Agents determine the best time, channel, and format for each survey based on customer preferences and behavior. A customer who always responds to email surveys gets email. A customer who never responds to email but is active on chat gets an in-app prompt. Timing is adjusted to avoid survey fatigue.
- **Sentiment analysis**: Before the customer even takes a survey, agents analyze the language in their support interactions — word choice, punctuation, response speed, tone shifts — to predict satisfaction. This gives you a satisfaction signal for every ticket, not just the 20-30% where customers respond to surveys.
- **Feedback categorization**: Open-text feedback is automatically categorized by theme (response speed, agent knowledge, resolution quality, communication clarity, process complexity). This turns free-text comments into structured data you can act on.
- **Alert on negative signals**: When a customer interaction shows signs of dissatisfaction (negative sentiment, repeated contacts, escalation requests), agents flag it for immediate recovery action — before the customer decides to churn or post a bad review.
- **Trend detection**: Agents identify satisfaction trends before they show up in monthly reports. If CSAT starts dropping for a specific product, agent, or issue type, the alert comes within days, not weeks.
- **Closed-loop follow-up**: When a customer gives negative feedback, agents create a follow-up task for the team lead or account manager with context on what went wrong and suggested recovery actions. No negative feedback goes unaddressed.

### Key Decisions

**Which metrics to use**: You do not need all three (CSAT, NPS, CES) from day one. Start with one and add others as you mature:

- **CSAT (Customer Satisfaction Score)**: "How satisfied were you with this support interaction?" Rated on a scale (1-5, 1-7, or emoji scale). Best for: measuring individual interaction quality. Send after every resolved ticket. Simplest to implement and easiest for customers to answer.
- **NPS (Net Promoter Score)**: "How likely are you to recommend our company to a friend or colleague?" Rated 0-10. Best for: measuring overall relationship health, not just one interaction. Send quarterly or semi-annually, not after every ticket. Detractors (0-6), Passives (7-8), Promoters (9-10).
- **CES (Customer Effort Score)**: "How easy was it to get your issue resolved?" Rated on a difficulty scale. Best for: identifying process friction. Useful alongside CSAT to distinguish between "the agent was great but your process is terrible" and "everything was smooth."

Start with CSAT for transactional measurement. Add NPS for relationship measurement after 6 months. Add CES when you want to optimize your support processes specifically.

**Survey timing**: For CSAT, send the survey within 24 hours of ticket resolution — the experience is fresh. Do not wait a week. For NPS, send quarterly and not tied to a specific ticket. For CES, send immediately after resolution while the effort memory is recent.

**Survey channel**: Match the survey channel to the interaction channel. If the customer was on chat, send the survey in chat. If they emailed, send it by email. In-app surveys get higher response rates than email surveys. Keep surveys short — one question with an optional comment gets much higher completion than a 10-question form.

**Rating scale**: For CSAT, use a 5-point scale (very unsatisfied to very satisfied) or a 3-point emoji scale (sad face, neutral, happy face). The simpler the scale, the higher the response rate. Avoid 10-point scales for CSAT — the distinction between a 6 and 7 is meaningless to most people.

**Response rate target**: A healthy CSAT survey response rate is 20-30%. Below 15% and your data is unreliable (only very happy and very unhappy people bother responding). Above 40% is excellent. Do not chase 100% response rates — survey fatigue is real and will bias your results.

**Anonymity**: CSAT and CES surveys should not be anonymous — you need to tie feedback to specific tickets and customers to take action. NPS can be anonymous for honest brand-level feedback, but identifiable NPS lets you follow up with detractors.

### Common Mistakes

**Only measuring satisfied customers**: If your survey only reaches customers who stuck around long enough to get their ticket resolved, you are missing the ones who gave up, switched channels, or just stopped responding. Measure abandoned interactions, not just completed ones.

**Ignoring open-text comments**: The rating number tells you if someone is happy or unhappy. The comment tells you why. Companies that track CSAT scores without reading comments miss the most actionable feedback. Categorize comments systematically and review them weekly.

**Survey fatigue**: Surveying the same customer after every single ticket, even if they contact you five times a month, destroys response rates and annoys customers. Implement survey throttling — no more than one CSAT survey per customer per 30 days, with preference for the most significant interaction.

**No closed loop**: Collecting feedback and never acting on it is worse than not collecting it at all. The customer took time to tell you about their experience. If their feedback disappears into a spreadsheet nobody reads, you have wasted their time and your opportunity. Every piece of negative feedback should trigger a follow-up action.

**Conflating CSAT with agent performance**: A customer gives a 1-star CSAT because the product is buggy, not because the agent was bad. If you punish agents for low CSAT caused by product issues, you demoralize your team and create incentive to game surveys. Separate agent-controllable factors from systemic issues in your analysis.

**Comparing scores across channels without context**: Chat CSAT is often higher than email CSAT because chat resolves faster and has a conversational feel. Phone CSAT varies by region and demographic. Do not compare raw scores across channels — compare trends and relative changes within each channel.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Key metrics to display**:
- Overall CSAT score (current and trend over 30/60/90 days)
- CSAT by channel (email, chat, phone, portal)
- CSAT by ticket category (billing, technical, account)
- CSAT by agent (for coaching, not punishment)
- NPS score and detractor/passive/promoter distribution
- CES score and trend
- Survey response rate (are customers engaging with surveys?)
- Top feedback themes from open-text comments
- Negative feedback follow-up completion rate (are you closing the loop?)
- Correlation between resolution time and CSAT (does speed actually matter?)

**Alerts to configure**:
- CSAT score from a VIP or enterprise customer below 3 (immediate follow-up)
- Weekly CSAT average drops more than 10% from the prior week
- An individual agent's 30-day CSAT drops below team average by more than 15%
- NPS detractor response from a high-revenue customer
- Negative feedback mentioning specific keywords (churn, cancel, competitor, legal)
- Survey response rate drops below 15% (survey delivery or design issue)
- A specific product or category CSAT drops below threshold

### Exception Handling

**Retaliatory ratings**: A customer gives 1 star because they did not like the answer (their request was legitimately declined, like a refund outside the policy window). These are valid data points about customer experience but should not penalize the agent. Flag and review ratings on tickets where the outcome was policy-driven rather than service-driven.

**Bot-inflated scores**: If AI chatbots resolve simple tickets and those get high CSAT (because the resolution was fast and easy), your overall CSAT looks great but masks problems in human-handled tickets. Segment scores by bot-resolved vs. human-resolved.

**Cultural differences in scoring**: In some cultures, giving a perfect score is unusual (Japanese customers rarely give 5/5). In others, anything below perfect is considered negative. Understand your customer demographics and benchmark accordingly, especially for global operations.

**Survey manipulation**: Agents asking customers to give high ratings ("could you give me a 5 star?") or selectively sending surveys only to customers they expect will rate well. Use automated, universal survey delivery to prevent cherry-picking. Monitor for unusual patterns (one agent with 100% 5-star ratings and a 50% response rate is suspicious).

**Low response rates**: If response rates drop below 15%, investigate. Common causes: emails going to spam, survey timing is wrong, the survey is too long, survey fatigue from over-surveying, or the survey link is broken. Test the survey experience yourself.

### Routine Tasks

**Daily**: Review all negative CSAT responses from the previous day. Ensure follow-up is assigned for each one. Check for any VIP or enterprise customer negative feedback that needs same-day attention. Review sentiment analysis alerts for tickets still in progress.

**Weekly**: Analyze CSAT trends by team and category. Review the top 5 negative feedback themes and assess whether they are new or recurring. Share positive feedback with agents and teams (recognition matters). Check survey response rates by channel. Review closed-loop completion rates.

**Monthly**: Compile satisfaction report for management including CSAT, NPS, and CES trends, top themes, and action items. Correlate satisfaction data with operational metrics (resolution time, escalation rate, first contact resolution). Identify the top 3 improvement opportunities and assign owners. Review and update survey questions if needed.

**Quarterly**: Conduct a deep analysis of satisfaction drivers — what factors most strongly predict high or low scores? Review NPS trends and detractor recovery success. Benchmark against industry standards. Evaluate whether your measurement approach needs adjustment (add or remove metrics, change scales, adjust timing). Present findings to executive leadership with recommendations.

## Scale — Growing It

### Adding Complexity

**Customer journey mapping**: Move beyond measuring single interactions to measuring the full customer journey across sales, onboarding, support, and renewal. Connect CSAT data with usage data, renewal rates, and expansion revenue to understand the complete picture.

**Predictive satisfaction**: Use historical satisfaction data, behavioral signals, and interaction patterns to predict which customers are likely to be dissatisfied before they tell you. Proactively reach out to at-risk customers. Score every customer with a satisfaction risk level updated daily.

**Real-time sentiment during interactions**: Instead of waiting for a post-resolution survey, analyze sentiment during live chat and phone conversations. Alert supervisors when a conversation is going badly so they can intervene in real time, not after the damage is done.

**Customer health scores**: Combine CSAT, NPS, CES, product usage, engagement frequency, billing status, and support history into a single customer health score. This score drives proactive outreach, retention campaigns, and customer success prioritization.

**Voice of the customer program**: Formalize satisfaction measurement into a company-wide Voice of the Customer (VoC) program that feeds insights to product (what to build), marketing (what to message), sales (what to promise), and support (what to improve). Satisfaction data becomes a strategic input, not just a support metric.

### Automation Opportunities

- **Intelligent survey delivery**: Agents optimize survey timing, channel, and frequency per customer to maximize response rates while minimizing fatigue. They learn which customers prefer emoji surveys vs. text scales and adapt.
- **Automated feedback categorization**: Natural language processing categorizes every open-text comment by theme, sub-theme, sentiment intensity, and actionable vs. informational. No manual reading needed for categorization, though human review of themes is still valuable.
- **Automatic escalation on negative feedback**: A 1-star CSAT or NPS detractor response triggers an automatic workflow — ticket reopened, follow-up assigned to team lead, customer contacted within 24 hours.
- **Satisfaction-driven routing**: Future tickets from customers with low historical satisfaction are routed to top-performing agents, increasing the chances of a recovery experience.
- **Root cause clustering**: Agents group negative feedback into clusters that point to systemic issues (e.g., 47 negative comments this month all mention "the new billing page"), making it easy to prioritize fixes.

### When to Redesign

- Your survey response rate has been below 15% for three consecutive months (your measurement is broken)
- CSAT has been flat for six months despite operational improvements (you are measuring the wrong things or asking the wrong questions)
- Agents are gaming surveys and you cannot distinguish genuine from manipulated scores
- Your satisfaction data does not correlate with business outcomes (high CSAT but high churn, or low CSAT but strong retention)
- You have CSAT, NPS, CES, and custom surveys running simultaneously with no coherent strategy connecting them
- Customer feedback themes have been the same for a year with no visible improvement (feedback is collected but never acted on)

## By Industry

1. **Manufacturing**: CSAT surveys focus on equipment uptime impact, spare parts availability, and technician competence. Resolution quality matters more than speed — a fast but incorrect fix is worse than a thorough one. Track satisfaction by equipment type and failure category. OEM satisfaction surveys feed into product quality improvement programs. Field service visit satisfaction is measured separately from remote support.

2. **Healthcare**: Patient satisfaction surveys are regulated (HCAHPS for hospitals) and affect reimbursement rates. Support satisfaction for clinical systems affects clinician adoption and patient care quality. Separate patient-facing satisfaction (portal, billing, scheduling) from clinical staff satisfaction (EHR, devices). Privacy concerns limit what you can ask — never reference specific health conditions in survey questions.

3. **Education**: Student satisfaction surveys align with institutional effectiveness metrics required for accreditation. Separate technology support satisfaction from academic support satisfaction. Faculty satisfaction with classroom technology directly affects teaching quality. Survey timing should avoid exam periods when stress levels bias all ratings negatively. Alumni satisfaction feeds into advancement and fundraising strategies.

4. **Retail**: Post-purchase CSAT and post-support CSAT are different measurements — a great support experience can save a bad product experience. Returns satisfaction is its own metric (was the return process easy?). Measure effort specifically — retail customers value low-effort experiences above all else. Social media sentiment analysis supplements formal surveys with real-time brand perception data.

5. **Hospitality**: Guest satisfaction surveys (post-stay) are the foundation of hospitality quality management. Online review scores (TripAdvisor, Google, Booking.com) are public-facing satisfaction metrics that directly affect bookings. In-stay feedback mechanisms (QR codes in rooms, SMS mid-stay check-ins) catch problems while they can still be fixed. Loyalty program members get special satisfaction tracking tied to status and lifetime value.

6. **Construction**: Client satisfaction surveys at project milestones (not just completion) catch issues early. Subcontractor and vendor satisfaction with your support processes affects project delivery. Safety culture surveys measure worker confidence in reporting and getting help for safety concerns. Post-project surveys cover communication, timeline adherence, budget accuracy, and quality — not just the final deliverable.

7. **Real Estate**: Tenant satisfaction surveys cover maintenance responsiveness, property condition, communication quality, and community management. Landlord/owner satisfaction with property management services is a separate measurement. Move-in and move-out satisfaction capture the most emotional moments of the tenant experience. Satisfaction data drives lease renewal predictions and property management contract renewals.

8. **Agriculture**: Customer satisfaction for agricultural equipment and services is seasonal — survey after critical usage periods (post-harvest for combines, post-planting for planters). Speed of parts availability and technical support responsiveness during peak season matters more than during off-season. Dealer and distributor satisfaction is measured separately from end-user satisfaction. Agronomic advice quality is a satisfaction dimension unique to this industry.

9. **Banking & Financial Services**: Relationship NPS is a standard metric tracked by executive leadership. Transactional CSAT after support interactions supplements relationship scores. Complaint resolution satisfaction is tracked separately and reported to regulators. Digital banking experience satisfaction (app reviews, usability scores) is increasingly important. Wealth management client satisfaction drives assets under management retention. Satisfaction benchmarking against competing banks is standard practice.

10. **Insurance**: Claims satisfaction is the single most important measurement — the claims experience defines the insurer's brand. Separate claims handling satisfaction from policy service satisfaction. Satisfaction after claim denial requires careful handling (follow up, explain, do not just survey). Agent (broker) satisfaction with insurer tools and responsiveness affects channel loyalty. Regulatory complaint metrics are a forced satisfaction measurement.

11. **Legal**: Client satisfaction surveys are sensitive — clients may fear honest feedback affects their legal representation. Send surveys from firm leadership, not the handling attorney. Measure communication frequency, responsiveness, clarity of advice, and perceived value for fees. Matter-outcome satisfaction is separate from service satisfaction (you can lose a case but still have a satisfied client if they felt well-represented). Referral likelihood is the ultimate satisfaction metric for law firms.

12. **Government**: Citizen satisfaction surveys face unique challenges — low response rates, distrust of government data collection, and confusion about which department to rate. 311 service satisfaction is measurable per interaction. Permit and licensing process satisfaction measures bureaucratic efficiency. Public meeting and engagement satisfaction measures democratic participation quality. Published satisfaction data is a public accountability tool.

13. **Pharma**: Patient satisfaction with patient assistance programs and copay support. HCP satisfaction with medical information services and sample fulfillment. Clinical trial site satisfaction with sponsor support. Satisfaction data feeds into pharmacovigilance (a dissatisfied patient may be experiencing an unreported adverse event). Regulatory constraints limit outreach — survey frequency and content must comply with promotional regulations.

14. **Automotive**: Owner satisfaction surveys (like J.D. Power) are industry benchmarks that affect brand perception and resale values. Dealer service satisfaction is tracked per visit and affects dealer quality scores. Connected services satisfaction (app experience, OTA update experience) is a growing metric. Recall handling satisfaction can define whether a safety event damages or strengthens the brand. Lease return and trade-in satisfaction affects repurchase rates.

15. **Telecom**: Network quality perception dominates satisfaction regardless of support quality — if the network is unreliable, support satisfaction will be low. Measure support satisfaction separately from product satisfaction. Billing clarity is a major satisfaction driver — customers hate unexpected charges even if support resolves them. Store visit satisfaction is measured alongside phone and digital channels. Churn prediction models heavily weight satisfaction trends.

16. **Media & Entertainment**: Content satisfaction (catalog, discovery, recommendations) is separate from service satisfaction (billing, access, technical support). Streaming quality satisfaction (buffering, quality, device compatibility) is a product metric that drives support volume. Creator satisfaction with platform tools and monetization affects content supply. Event and live content satisfaction has a narrow measurement window — survey during or immediately after.

17. **Energy & Utilities**: Outage communication satisfaction is as important as outage restoration speed — customers tolerate outages better when they know what is happening and when power will return. Billing satisfaction focuses on clarity, accuracy, and payment options. Energy efficiency program satisfaction measures whether customers feel the utility is helping them save money. Rate change communication satisfaction measures trust.

18. **Food & Beverage**: Consumer satisfaction with product quality, taste, and packaging is measured through product-specific surveys and social listening. Restaurant satisfaction surveys cover food, service, cleanliness, speed, and accuracy. Delivery satisfaction (for food delivery services and DTC brands) measures order accuracy, packaging quality, and freshness on arrival. Recall handling satisfaction measures communication clarity and replacement ease.

19. **Logistics & Transport**: Shipper satisfaction covers pricing, transit time, tracking visibility, and exception handling. Consignee satisfaction measures delivery experience (timeliness, condition, communication). Driver satisfaction with dispatching, tools, and support affects retention in a tight labor market. Broker and partner satisfaction affects network capacity. On-time delivery rate is the core satisfaction predictor.

20. **Nonprofit**: Donor satisfaction measures the giving experience, communication quality, impact transparency, and recognition. Volunteer satisfaction measures scheduling, training, meaningfulness of tasks, and organizational support. Beneficiary satisfaction measures program accessibility, respect, and effectiveness. Board member satisfaction with operational reporting. Funder satisfaction with grant administration and impact reporting.

21. **SaaS / Technology**: Product satisfaction and support satisfaction must be measured and analyzed separately. Feature adoption satisfaction measures onboarding and enablement effectiveness. API and developer experience satisfaction affects platform stickiness. G2, Capterra, and TrustRadius reviews are public satisfaction signals that affect pipeline. Customer health scoring combines satisfaction with usage and business metrics. Quarterly business review satisfaction for enterprise accounts.

22. **Professional Services**: Client satisfaction surveys are relationship-critical — a bad score requires partner-level attention. Measure project-level satisfaction (was this deliverable good?) and relationship-level satisfaction (do you want to work with us again?). Measure satisfaction after each engagement and annually for ongoing relationships. Internal employee satisfaction affects service delivery quality — burned-out consultants produce poor work.

23. **Defense & Aerospace**: Government customer satisfaction is measured through Contractor Performance Assessment Reports (CPARs) that are formal, documented, and affect future contract awards. End-user satisfaction with fielded systems is measured through operational testing and user feedback programs. Program office satisfaction with contractor responsiveness and communication. Security compliance satisfaction is a pass/fail rather than a scale.

24. **Mining**: Site operations satisfaction with support responsiveness during production hours. Equipment manufacturer satisfaction with dealer and distributor support. Environmental community satisfaction with mining company responsiveness to concerns. Worker satisfaction with safety systems and incident reporting processes. Regulatory body satisfaction with compliance reporting timeliness and accuracy.

25. **Chemicals**: Customer technical service satisfaction measures the quality of application support and formulation guidance. Safety and regulatory support satisfaction measures SDS quality and emergency response support. Distributor satisfaction with order management and logistics. Quality complaint resolution satisfaction measures root cause investigation thoroughness. Product consistency satisfaction drives long-term purchasing decisions.

26. **Textiles & Apparel**: Retail buyer satisfaction with supplier communication, delivery reliability, and quality consistency. Consumer satisfaction with product quality, fit, and customer service. Wholesale partner satisfaction with order management and marketing support. Sustainability and ethical sourcing satisfaction for brands with conscious consumer bases. Fashion industry speed means satisfaction measurement windows are compressed.

27. **FMCG**: Consumer satisfaction measured at scale through social listening, panel surveys, and product ratings. Retail partner satisfaction with category management, fill rates, and promotional support. Distributor satisfaction with ordering, delivery, and trade promotion administration. Brand perception surveys supplement transactional satisfaction. Speed of complaint resolution matters because FMCG brand loyalty is thin — consumers switch easily.

28. **Electronics**: Product quality satisfaction drives reviews and ratings that heavily influence purchase decisions. Setup and onboarding experience satisfaction (was the out-of-box experience smooth?). Repair and warranty satisfaction — long repair times are a major dissatisfier. Software update experience satisfaction (did the update break anything?). Accessory and ecosystem satisfaction measures the value of being in the product ecosystem.

29. **Oil & Gas**: Contractor satisfaction with operator site support and safety culture. Joint venture partner satisfaction with operational communication. Community satisfaction with environmental and social impact management. Equipment supplier satisfaction with procurement and payment processes. Employee satisfaction with HSE programs and incident response. Regulatory body satisfaction measured through inspection outcomes and compliance records.

30. **Jewelry & Luxury**: Every touchpoint is a satisfaction opportunity in luxury — from the boutique greeting to the packaging to the follow-up call weeks later. Repair and servicing satisfaction is a loyalty driver — a well-handled repair deepens the relationship. Purchase anniversary follow-up satisfaction measures ongoing engagement. Clienteling satisfaction measures the personal advisor relationship. Net Promoter Score drives word-of-mouth referrals, which are the primary acquisition channel for luxury brands.

## By Company Size

### Startup (< 50 people)

Add a CSAT question to your ticket resolution emails. That is it. Use a 3-point scale (happy/neutral/sad emoji) for maximum response rate. Read every comment personally. When someone is unhappy, email them yourself (founder-level outreach at this stage builds lasting loyalty). Track your score in a spreadsheet. You do not need NPS or CES yet. Your survey tool is your email footer. When you hit 50 tickets per week, implement a proper CSAT tool.

### SMB (50–500 people)

Implement automated CSAT surveys after ticket resolution. Track scores by agent, category, and channel. Review negative feedback weekly with the team. Start a monthly satisfaction report for management. Add NPS surveys quarterly to measure relationship health. Set a CSAT target (e.g., 4.2 out of 5) and review progress monthly. Implement a closed-loop process: every rating below 3 gets a follow-up. Use satisfaction data in agent coaching conversations, but pair it with other metrics.

### Mid-Market (500–5,000 people)

Full CSAT, NPS, and CES measurement program. Sentiment analysis on all text-based interactions. Satisfaction data integrated with CRM and customer success platforms. Predictive models identifying at-risk customers before they complain. Closed-loop follow-up within 24 hours for all negative feedback. Quarterly satisfaction reports to executive leadership with action plans. Satisfaction benchmarking against industry peers. Customer advisory board for qualitative feedback on top issues.

### Enterprise (5,000+ people)

Enterprise Voice of the Customer program with a dedicated team. Satisfaction data feeds into product roadmap, marketing strategy, and executive dashboards. Real-time sentiment analysis during live interactions with supervisor alerts. Customer health scores combining satisfaction, usage, and business metrics. Satisfaction-driven segmentation for marketing and retention campaigns. Annual customer satisfaction study with statistically significant samples across segments. Board-level reporting on NPS trends and customer satisfaction as a strategic metric.

## erp.ai & Proto

**erp.ai**: The Helpdesk module triggers CSAT surveys automatically upon ticket resolution, with configurable rating scales and optional comment fields. The Survey module supports custom NPS and CES surveys with scheduling and audience targeting. Results integrate with the CRM module, giving customer-facing teams full visibility into satisfaction trends alongside account data.

**Proto**: Proto agents drive satisfaction improvement through the ORAI cycle — Observing customer sentiment in real time during interactions and through survey responses, Routing negative feedback to the right person for follow-up and positive feedback for recognition, Acting by triggering recovery workflows for dissatisfied customers and optimizing survey delivery for maximum response rates, and Improving by analyzing satisfaction patterns to recommend specific process, training, and product changes that will move the scores.
