---
name: omnichannel
description: This skill should be used when the task involves how to unify email, chat, phone, social media, portal, and WhatsApp into one seamless support experience.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 03-org-1k-plus
  type: skill
  scope: internal
---
# Omnichannel Support

## What This Process Does

Omnichannel support means your customers can reach you through any channel — email, live chat, phone, social media, your support portal, WhatsApp, SMS — and get a consistent experience every time. More importantly, if a customer starts on chat and follows up by email, your agent sees the full conversation history in one place. The customer never has to repeat themselves.

This is different from multichannel support, where you might offer all those channels but each one operates in its own silo. Multichannel is like having five different phone books for the same company. Omnichannel is like having one phone book that works everywhere. The goal is to meet customers where they already are, without creating chaos for your support team by forcing them to jump between six different tools.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. The **Helpdesk** module supports email-to-ticket out of the box and can be extended with chat and portal channels. The **Website Builder** module provides a customer portal with ticket submission and tracking. The **LiveChat** integration or third-party chat tools connect to the Helpdesk for real-time conversations. For WhatsApp and social media, look at ERP•AI's **Communication** integrations. Deploy the Helpdesk template with email enabled first, then add channels one at a time.

## Build — Setting It Up

### With Agents

AI agents are what make omnichannel manageable instead of overwhelming:

- **Unified ticket creation**: Regardless of whether a message arrives via email, chat, WhatsApp, Facebook, Twitter, or phone, agents create a single ticket with a unified format. The channel is tagged but the ticket looks the same to your support team.
- **Channel detection and routing**: Agents identify the channel, extract customer identity (email address, phone number, social handle), match it to an existing customer record, and route the ticket to the right queue. A WhatsApp message from a known enterprise customer gets different routing than an anonymous Twitter mention.
- **Context stitching**: When a customer contacts you on chat and then emails about the same issue, agents link the interactions to one ticket. They use customer identity, issue similarity, and timing to detect continuity. Your agent sees the full thread regardless of channel.
- **Channel-appropriate responses**: Agents adapt response format to the channel. Email responses can be detailed with attachments. Chat responses are shorter and conversational. Social media responses are public-friendly with a nudge to move to DM for sensitive details. WhatsApp responses work within message length and formatting constraints.
- **Sentiment and urgency detection**: Agents analyze tone across channels. An ALL CAPS email is frustrated. A Twitter mention tagging your CEO is high urgency. A calm chat asking about a feature is low urgency. This feeds into priority assignment and routing.
- **Channel performance tracking**: Agents measure response times, resolution rates, and satisfaction scores per channel, identifying which channels need more resources or process improvements.

### Key Decisions

**Which channels to offer**: Do not launch all channels at once. Start with email (you probably already have this) and add one channel at a time based on where your customers actually are. Common rollout order:

1. Email (baseline — every support team needs this)
2. Support portal (self-service ticket submission and tracking)
3. Live chat (for real-time support on your website or in your app)
4. Phone (for complex issues or customers who prefer voice)
5. WhatsApp or SMS (for markets where messaging apps dominate)
6. Social media (Twitter/X, Facebook, Instagram — for public brand interactions)

Each channel you add means staffing, training, and response time commitments. Better to do three channels well than six channels poorly.

**Unified inbox vs. channel-specific queues**: Two approaches:
- **Unified inbox**: All channels feed into one queue. Agents handle whatever comes next regardless of channel. Simpler to manage, but agents need to be skilled on all channels.
- **Channel-specific queues**: Chat tickets go to the chat team, phone calls go to the phone team, email goes to the email team. Allows specialization but creates silos and makes staffing less flexible.
- **Hybrid** (recommended): All channels feed into one system, but agents can filter by channel based on their skills and current assignment. A chat-skilled agent pulls from the chat queue first but can pick up email when chat is quiet.

**Channel-specific SLAs**: Response time expectations differ by channel:
- Chat: under 1 minute (customers expect near-instant response)
- Phone: under 30 seconds wait time
- Social media (public): under 1 hour (everyone can see you are ignoring them)
- WhatsApp/SMS: under 15 minutes
- Email: under 4 hours (customers expect same-day response)
- Portal: under 8 hours (customers know this is async)

Set these explicitly. An email SLA applied to live chat will frustrate customers.

**Customer identity resolution**: The same customer might email you from their work address, DM you from their personal Twitter, and chat from an anonymous browser session. Decide how you link these identities: email address is the primary key, phone number is secondary, social handles are matched manually or via profile linking in the customer portal. This is critical — without it, you have three separate customer records and no context continuity.

**Channel switching protocol**: When should an agent move the conversation to a different channel? Common rules:
- Social media to DM/email when the issue involves account details or PII
- Chat to phone when the issue is too complex for text or the customer is frustrated
- Phone to email when you need to share documents, screenshots, or detailed instructions
- Any channel to portal when the customer needs to track a long-running issue

Always explain to the customer why you are asking them to switch and make the transition seamless (do not make them re-explain the issue).

### Common Mistakes

**Launching channels without staffing**: Adding live chat with no dedicated chat agents means your email agents now handle both, response times on both channels suffer, and customers on chat (who expect instant responses) are furious. Staff each channel before launching it.

**No identity linking**: A customer emails, then calls, then chats. Three different agents create three separate tickets. The customer repeats their story three times and gets increasingly angry. Invest in customer identity resolution before adding channels.

**Treating all channels the same**: Writing a 500-word email response in a live chat window. Sending a one-line chat response via email. Each channel has communication norms — match them. Train agents on channel-appropriate communication.

**Social media as a one-way channel**: Monitoring your brand mentions on Twitter but not responding to them, or responding 3 days later. If you are present on social media, you must respond promptly. If you cannot staff it, do not offer it as a support channel — just use it for marketing.

**No channel preference tracking**: Some customers prefer email. Some prefer chat. If you push a chat-preferring customer to call you, or force an email customer into chat, you are creating friction. Track and respect channel preferences when possible.

**Ignoring mobile**: In many markets (especially emerging markets), most customer interactions happen on mobile devices via WhatsApp or SMS. Building a desktop-optimized support portal and ignoring messaging apps means ignoring your customers' preferred channel.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Key metrics to display**:
- Ticket volume by channel (where are customers reaching out?)
- First response time by channel (are you meeting channel-specific SLAs?)
- Resolution time by channel (are some channels slower to resolve?)
- Channel switching rate (how often do tickets move between channels?)
- Customer satisfaction by channel (which channels deliver the best experience?)
- Agent utilization by channel (are chat agents idle while email agents are overwhelmed?)
- Abandoned conversations (chat sessions ended by customer before resolution, phone calls hung up)
- Self-service deflection rate (portal and knowledge base usage vs. human-assisted channels)

**Alerts to configure**:
- Chat queue wait time exceeding 2 minutes (customers will leave)
- Phone queue wait time exceeding 3 minutes
- Social media mention unresponded for 2+ hours
- WhatsApp message unread for 30+ minutes during business hours
- Channel staffing imbalance (one channel overwhelmed while another is idle)
- Spike in volume on any channel (could indicate an incident or outage)

### Exception Handling

**Channel outages**: When your chat platform goes down, redirect customers to email or phone. Have a fallback plan for each channel and communicate it proactively (e.g., a banner on your website saying "Live chat is temporarily unavailable. Email us at support@company.com").

**Volume spikes on one channel**: A viral social media post or a product outage can flood one channel while others are quiet. Have a process for temporarily reassigning agents across channels during spikes. Cross-training makes this possible.

**Spam and abuse**: Public channels (social media, chat) are vulnerable to spam, bots, and abusive messages. Implement filtering for spam and have a clear policy for handling abusive customers (warning, then block from channel, with escalation to management for threats).

**Cross-channel confusion**: A customer submits the same request on email and chat simultaneously. Agents on different channels both create tickets and start working. Implement deduplication — when a new ticket is created, check for recent tickets from the same customer on other channels within the last hour.

**After-hours channel management**: If you do not offer 24/7 live chat, what happens when a customer tries to chat at midnight? Options: disable the chat widget outside hours, show an auto-response with expected response time, or offer an AI chatbot for basic queries with handoff to human agents in the morning. Do not leave the chat widget active with no one to respond — that is worse than not having it.

### Routine Tasks

**Daily**: Review channel volume distribution and adjust staffing if needed. Check for any unresponded social media mentions. Review abandoned chat sessions to identify patterns (are people leaving because of long wait times or because the bot could not help?). Check cross-channel identity linking accuracy.

**Weekly**: Compare response and resolution times across channels. Review customer satisfaction scores by channel. Identify top reasons for channel switching (these represent process gaps). Check agent cross-channel skill coverage — do you have enough people trained on each channel?

**Monthly**: Analyze channel preference trends (is chat growing while email declining?). Review and adjust channel-specific SLA targets. Evaluate whether any new channels should be added or underperforming ones retired. Audit the customer identity resolution process for accuracy (sample linked records). Review spam and abuse filtering effectiveness.

**Quarterly**: Strategic channel review — which channels drive the best customer outcomes at the lowest cost? How do channel preferences vary by customer segment? Is your channel mix aligned with customer demographics? Evaluate new channel technologies (video support, co-browsing, screen sharing).

## Scale — Growing It

### Adding Complexity

**Video support**: For complex technical issues, add video calling or screen sharing. This is especially powerful for hardware setup, software configuration, and visual troubleshooting. Integrate it as an escalation from chat or phone rather than a standalone channel.

**In-app messaging**: Embed support chat directly in your mobile app or web application. This is more convenient than asking customers to go to a separate support portal and allows agents to see the customer's current screen state for better troubleshooting.

**AI chatbots as channel zero**: Deploy conversational AI as the first interaction point on chat and messaging channels. The bot handles FAQs, account lookups, and simple transactions. When it cannot help, it hands off to a human agent with the full conversation context. Target: 30-50% bot resolution rate within 6 months.

**Proactive outreach**: Instead of only reacting when customers contact you, use channels proactively. Send WhatsApp notifications about order status, in-app messages about new features, or email check-ins after a complex support interaction. This turns support channels into relationship-building tools.

**Community channels**: Add forums, Discord, Slack communities, or other community platforms where customers help each other. Your team moderates and steps in for complex issues. Community-generated answers can feed into your knowledge base.

**IoT and automated channels**: Connected devices can submit support tickets automatically. A printer running low on toner, a server detecting a performance anomaly, or a vehicle reporting a check-engine light — these device-initiated tickets are a growing channel that needs routing and SLA management just like human-initiated ones.

### Automation Opportunities

- **Intelligent channel recommendation**: Based on issue type and customer preference, suggest the best channel. Complex billing issue? Email with documentation. Quick password reset? Chat or self-service. Frustrated VIP? Phone call from a senior agent.
- **Automatic language routing**: Detect the customer's language from their message and route to a language-matched agent or activate real-time translation.
- **Chat-to-ticket conversion**: When a chat session ends without resolution, automatically convert it to an email ticket with the full chat transcript so the customer does not have to re-explain.
- **Social listening**: Agents monitor brand mentions and product-related keywords across social platforms, auto-creating tickets for posts that indicate support needs even when the customer did not tag your support handle.
- **Callback scheduling**: Instead of making customers wait on hold, offer a callback option. Agents schedule the callback, and the system dials the customer when an agent is available.

### When to Redesign

- Customers frequently complain about repeating themselves across channels (your context stitching is broken)
- More than 20% of tickets involve a channel switch (your first channel is not meeting needs)
- You are paying for channels that fewer than 5% of customers use (cut them and redirect)
- Agent utilization is wildly uneven across channels (your staffing model does not match demand)
- Customer satisfaction varies more than 15 points between channels (inconsistent experience)
- Your chat abandonment rate exceeds 30% (wait times are too long or the bot is not helpful)
- You cannot identify the same customer across channels (identity resolution is failing)

## By Industry

1. **Manufacturing**: Phone and email dominate for B2B support. Add a customer portal for spare parts ordering and warranty claims. Chat is useful for quick questions during business hours. IoT-connected equipment opens the door for automated machine-to-helpdesk ticket creation. Social media is less relevant for industrial customers but important for brand reputation monitoring.

2. **Healthcare**: Patient portals are a primary channel for appointment, billing, and prescription questions. Phone remains critical for older patients and urgent clinical questions. HIPAA compliance restricts which channels can carry PHI — public social media conversations must move to secure channels immediately. Telehealth integration means video support for clinical and technical needs.

3. **Education**: Student portals, email, and chat are primary. Younger students expect social media responsiveness. LMS-integrated help (in-app support within the learning management system) reduces context switching for students. Phone support during registration periods handles anxious parents. SMS for time-sensitive notifications (class cancellation, deadline reminders).

4. **Retail**: Chat on the e-commerce site catches customers at the point of purchase (reducing cart abandonment). Social media is a major channel — Instagram and Facebook DMs for product questions, Twitter for complaints. WhatsApp for markets where it dominates. Phone for complex order issues and VIP customers. Email for order confirmations and follow-ups. In-store kiosks that connect to the same support system for omnichannel retailers.

5. **Hospitality**: In-property messaging (SMS or hotel app) during guest stays. Phone from the room for immediate needs. WhatsApp for pre-arrival requests (airport pickup, room preferences). Social media for reputation management (responding to reviews and complaints). Email for group bookings and event coordination. The guest should have one conversation thread across pre-stay, during-stay, and post-stay interactions.

6. **Construction**: Phone and radio communication on job sites. Mobile app for reporting issues with photo and GPS data. Email for formal communications with clients and contractors. Portal for project stakeholders to submit and track requests. Social media is minimal for direct support but matters for company reputation. Many field workers prefer SMS over email because they are on their phones, not at desks.

7. **Real Estate**: Tenant portals for maintenance requests with photo upload capability. Phone for emergencies (water leak, lockout). Email for lease questions and formal correspondence. SMS for appointment confirmations and maintenance scheduling updates. Chat for prospective tenants browsing listings. Social media for property marketing and community engagement. Virtual tour support via video chat for remote buyers.

8. **Agriculture**: Phone is primary — farmers and ranchers are on the phone, not at a computer. SMS for alerts and simple updates. Mobile app for equipment diagnostics and parts ordering. Email for non-urgent vendor communications. Satellite messaging for operations in areas without cell coverage. Portal access is seasonal — used for planning and ordering in off-season, rarely during planting and harvest.

9. **Banking & Financial Services**: Mobile banking app messaging is the fastest-growing channel. Secure email through the banking portal for account-sensitive communications. Phone for complex transactions and relationship banking. Chat for quick balance and transaction questions. Video banking for remote branches and after-hours premium service. Social media handled carefully — never discuss account details publicly, always redirect to secure channels.

10. **Insurance**: Phone remains dominant for claims reporting and complex policy questions. Portal for routine policy management and document access. Chat for quick questions about coverage and payments. Mobile app for first notice of loss with photo documentation. Email for formal correspondence and document exchange. Agent (broker) channels are separate from direct consumer channels with different tools and SLAs.

11. **Legal**: Email and portal are primary — clients expect formal written communication. Phone for urgent matters and client updates. Secure document exchange portals replace attachments for sensitive legal documents. Video conferencing for remote client meetings and depositions. Chat is less common but growing for initial consultations. Social media is used for firm marketing, not client support.

12. **Government**: 311 phone lines are the traditional channel for citizen services. Online portals for permits, payments, and service requests. Chat on government websites for navigation help. Email for formal correspondence. Social media for emergency communications and public information. Accessibility requirements (TTY, multi-language, Section 508) apply to all channels. In-person counters remain important and should connect to the same system.

13. **Pharma**: HCP (healthcare professional) portals for medical information requests and sample ordering. Phone for medical information and adverse event reporting (regulatory requirement to accept reports by phone). Email for non-urgent medical information requests. Chat for customer service (refill, copay, patient assistance). Adverse event channels must be monitored 24/7 regardless of other channel hours.

14. **Automotive**: Dealer portal for warranty, parts, and technical support. Owner apps for connected vehicle support and service scheduling. Phone for roadside assistance (must be 24/7). Chat and email for sales and service inquiries. Social media for brand engagement and complaint management. In-vehicle connected services create a direct channel from the car to the support system.

15. **Telecom**: All channels are heavily used. Phone with IVR for account management. Chat and messaging for quick questions. Social media for complaints (telecom brands receive high volumes of public complaints). Store walk-ins connected to the same ticketing system. Self-service app for account changes. WhatsApp and SMS for markets where they are prevalent. Network outage notifications proactively pushed across SMS and app channels.

16. **Media & Entertainment**: In-app support for streaming and content platforms. Social media for content complaints and service issues. Chat for account and billing questions. Email for formal communications. Community forums for feature discussions and user-generated troubleshooting. Twitter is particularly active for media brands — a single viral complaint can escalate quickly. Voice support for premium subscribers.

17. **Energy & Utilities**: Phone for outage reporting and emergencies. IVR for automated outage status. Web portal for billing, usage data, and service requests. Mobile app for outage reporting with location data. SMS for outage status notifications. Email for billing and program enrollment. Social media during major outages (customers will tweet when the power is out). Chat for billing questions and service changes.

18. **Food & Beverage**: Social media is a dominant channel — Instagram and Twitter for consumer engagement and complaints. Phone for food safety reports. Brand website chat for product questions. Email for retailer and distributor support. Consumer apps (loyalty programs, ordering) with embedded support. QR codes on packaging linking directly to product-specific support channels.

19. **Logistics & Transport**: Shipper portal for booking and tracking. Phone for urgent shipment issues. Email for rate quotes and formal correspondence. EDI for system-to-system communication with large shippers. Mobile app for drivers (delivery confirmation, exception reporting). Customer chat for tracking questions. SMS notifications for delivery status updates. API integrations for e-commerce platforms generate automated support touchpoints.

20. **Nonprofit**: Email and phone for donor and volunteer support. Portal for donation management and volunteer signup. Social media for community engagement and awareness. WhatsApp and SMS for beneficiary communications in developing regions. Virtual events and webinar platforms as support and engagement channels. Low-cost channel solutions needed — many nonprofits cannot afford enterprise support platforms.

21. **SaaS / Technology**: In-app support (chat, help center) is the primary channel. Email for detailed bug reports and feature requests. Portal for ticket tracking and documentation. Community forums and developer communities (Stack Overflow, GitHub Discussions) for peer support. Phone for enterprise accounts only. Social media for brand engagement and incident communication. Slack or Teams integrations for enterprise customer channels.

22. **Professional Services**: Email is the dominant channel for client communication. Portal for deliverable review and collaboration. Video conferencing for client meetings and working sessions. Phone for relationship management and urgent matters. Internal channels (Slack, Teams) for team collaboration on client work. Minimal social media support — LinkedIn for thought leadership, not service.

23. **Defense & Aerospace**: Secure communication channels only — classified systems cannot use public internet channels. Dedicated secure portals for contract and program support. Phone with secure lines for classified discussions. Video teleconferencing (VTC) on approved systems. Email on secure networks. No social media for operational support — only public affairs and recruitment.

24. **Mining**: Radio and satellite phone for underground and remote operations. Phone for site-to-headquarters communication. Mobile app for incident reporting and equipment maintenance requests. Portal for vendor and contractor management. Email for administrative support. Limited internet connectivity at many sites means offline-capable channels are essential.

25. **Chemicals**: Phone for emergency response (24/7 chemical emergency hotline is often regulatory requirement). Portal for SDS requests and product information. Email for order management and technical questions. Fax remains used in some regulatory submission processes. Mobile app for field sales and technical service. Chat for quick product availability and compatibility questions.

26. **Textiles & Apparel**: E-commerce chat for consumer shopping assistance and returns. Social media (Instagram, TikTok) for style questions and brand engagement. Email for wholesale buyer support. Portal for retail partner order management. WhatsApp in markets where it dominates fashion retail. Phone for VIP styling services. Returns and exchange process integrated across online and in-store channels for omnichannel retailers.

27. **FMCG**: Social media is the loudest channel — consumers post about products on Instagram, Twitter, and TikTok. Phone for consumer care lines (printed on every product package). Website forms for product inquiries and complaints. Email for retailer and distributor support. Chat for quick consumer questions. QR codes on packaging for channel-specific support. Massive volume means automation and self-service are essential across all channels.

28. **Electronics**: Self-service portal with diagnostic tools and troubleshooting wizards. Chat for quick setup questions. Phone for complex technical support. Email for warranty claims and RMA processing. Community forums for user-to-user help. Social media for product launches and complaint management. Video support for hardware installation and repair guidance. IoT-connected devices creating automated support channels.

29. **Oil & Gas**: Radio communication for offshore and drilling operations. Phone for operational support. Secure portal for HSE reporting and compliance. Email for corporate communications and vendor management. Satellite communication for remote locations. Limited social media for support — primarily used for corporate communications and crisis management.

30. **Jewelry & Luxury**: In-store appointment scheduling as a channel. Phone with personal client advisors for VIP customers. Email for bespoke order coordination. WhatsApp for personal shopping and after-sales service. Video consultation for remote clienteling. Social media (Instagram, Pinterest) for brand engagement and product inquiries. Portal for repair tracking and authentication verification. Every channel touchpoint must reflect the luxury brand experience — no automated hold music, no chatbot first response for high-value clients.


## ERP•AI & Proto

**ERP•AI**: The Helpdesk module supports email and portal channels natively, with integrations available for chat, WhatsApp, and social media. The Communication module provides a unified communication layer that connects messaging channels to the ticketing system, enabling agents to manage all channels from a single interface without switching tools.

**Proto**: Proto agents unify omnichannel support through the ORAI cycle — Observing incoming messages across all channels and identifying the customer and intent, Routing conversations to the right agent with full cross-channel history, Acting with channel-appropriate responses and seamless channel switching when needed, and Improving by analyzing channel performance data to optimize staffing, response strategies, and automation effectiveness across the channel mix.
