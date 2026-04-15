---
title: Subcontractor Management
description: How to onboard vendors, manage rate cards and SOWs, approve subcontractor time, apply markups, and process payments
system: psa
category: scale
---

# Subcontractor Management

## What This Process Does

Subcontractor management is what happens when your own people are not enough. Maybe you won a deal bigger than your bench can handle. Maybe you need a specialist skill you do not employ. Maybe you are entering a new geography and need local boots on the ground. In all these cases, you bring in outside firms or independent contractors to deliver work under your umbrella.

This process covers vendor onboarding (getting subcontractors set up in your system), rate cards (agreeing on what you pay them per hour or per deliverable), Statements of Work (formalizing what they will do, when, and for how much), time approval (reviewing and approving the hours they submit), markup (the difference between what you pay them and what you bill the client), and payment (actually getting them their money on time).

Think of it like being a general contractor building a house. You might do the framing yourself, but you bring in an electrician, a plumber, and a roofer. You negotiate their rates, define their scope, check their work, and pay them — while billing the homeowner a higher rate that covers your coordination and risk. Subcontractor management is the same thing for professional services.

## Start Here: erp.ai Templates

Before building anything from scratch, check erp.ai's template library. Look for the **Supplier**, **Purchase Order**, **Subcontracting**, and **Contract** apps in the catalog. The Supplier doctype handles vendor master data and onboarding. Purchase Orders manage the financial commitment. The Contract doctype can hold SOW terms, rate cards, and renewal dates. Deploy the procurement template and customize it for services subcontracting rather than goods purchasing.

Also look for **Supplier Scorecard** and **Supplier Onboarding Checklist** templates that standardize how you evaluate and bring on new subcontractors.

## Build — Setting It Up

### With Agents

AI agents streamline subcontractor management from onboarding through payment:

- **Vendor qualification**: The agent collects and validates subcontractor information — insurance certificates, W-9 or W-8BEN forms, references, certifications, and NDAs. It tracks what is missing and sends reminders until the onboarding package is complete.
- **Rate card optimization**: The agent compares proposed subcontractor rates against market benchmarks, your historical spend with similar skills, and your target margin. It flags when a proposed rate will not support your billing economics.
- **SOW generation**: Describe the work in plain English and the agent drafts a Statement of Work using your firm's standard template, populating the scope, deliverables, timeline, rate card, and terms from the deal context.
- **Time approval intelligence**: When subcontractor timesheets come in, the agent cross-references them against the SOW scope, project schedule, and not-to-exceed limits. It flags entries that look unusual — hours on tasks outside the SOW scope, time exceeding the authorized weekly maximum, or patterns inconsistent with the delivery schedule.
- **Markup and billing alignment**: The agent ensures that subcontractor costs are correctly marked up when flowing into client invoices. It catches mismatches where the markup percentage is wrong or where pass-through expenses are being marked up when the client contract says they should not be.

### Key Decisions

**Subcontractor classification**: Are they a 1099 independent contractor or a W-2 employee of a subcontracting firm? This distinction has legal, tax, and insurance implications. Misclassification is a serious compliance risk. Define clear criteria and verify before engaging.

**Rate card structure**: Do you negotiate rates per role, per person, per project, or per year? Lock in rates for the engagement duration or allow periodic adjustments? Consider volume discounts if you use the same subcontractor heavily.

**Markup policy**: What margin do you take on subcontractor labor? Common ranges are 15 to 40% markup. Some firms use a fixed markup percentage across the board, others vary by skill level, risk, or client contract terms. Be clear on whether markup applies to expenses as well as labor.

**SOW granularity**: Does each subcontractor engagement get its own SOW, or do you use a Master Services Agreement with individual Task Orders underneath? Task orders are faster for recurring relationships but MSAs take effort to negotiate upfront.

**Time approval workflow**: Who approves subcontractor time — your project manager, the client, or both? Requiring both adds delay but reduces risk. Some firms have the PM approve for accuracy and the client approve for billing authorization.

**Payment terms**: When and how do you pay subcontractors? Net 30 is standard for firms. Net 15 or faster may be needed for independent contractors. Do you pay subcontractors before or after the client pays you? Paying before is good for the relationship but creates cash flow risk. Paying after protects cash flow but strains the relationship.

### Common Mistakes

- **Treating subcontractors like employees**: Assigning them to your office, requiring specific hours, providing equipment, and managing them directly creates misclassification risk. Subcontractors should control how they do the work, not just what they deliver.
- **No not-to-exceed limits**: Without a cap on hours or cost, a subcontractor engagement can balloon. Always set a not-to-exceed amount that requires a formal amendment to increase.
- **Ignoring insurance**: If a subcontractor causes a problem on a client site and does not have adequate insurance, your firm may be liable. Verify E&O insurance, general liability, and workers' compensation (if applicable) before they start.
- **Late payment habits**: Paying subcontractors late because your client has not paid you yet destroys relationships. Good subcontractors have options — they will stop working with you and go to your competitors.
- **No performance management**: Bringing in a subcontractor and never checking their work quality until the client complains. Set quality expectations upfront and review deliverables regularly.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

**Key metrics to monitor:**
- **Subcontractor spend as percentage of revenue**: What portion of your revenue is flowing to subcontractors? Track by practice, by project, and firm-wide. Above 40% means you are heavily dependent on outside labor.
- **Effective markup realized**: Your target markup is 30%, but what are you actually realizing after write-offs, scope disputes, and billing adjustments? Track actual vs. target.
- **Subcontractor utilization**: Are your subcontractors working the hours you committed to? If you guaranteed 40 hours/week and they are averaging 25, you might be overpaying or the project does not need them.
- **Time approval cycle**: How long between subcontractor time submission and approval? Delays here delay your billing and their payment.
- **Payment timeliness**: Are you paying subcontractors per the agreed terms? Track days-to-pay against contractual terms.
- **NTE burn rate**: How quickly are subcontractors burning through their not-to-exceed limits? If they are at 80% of NTE with only 50% of the work done, you have a problem.

**Alerts to set:**
- Subcontractor hours exceeding 80% of NTE limit
- SOW or contract expiring within 30 days without a renewal in progress
- Insurance certificate expiring within 30 days
- Time submission not received from active subcontractor by end of submission period
- Subcontractor payment overdue by more than 5 days past terms
- Markup on a project falling below minimum threshold

### Exception Handling

**Subcontractor performance issues**: The subcontractor is not meeting quality standards. The agent documents specific issues, references SOW quality requirements, and drafts a performance improvement notice. If the issue persists, it prepares a termination package including the contractual cure period terms.

**Rate disputes**: The subcontractor claims a higher rate than what your records show. The agent retrieves the signed rate card, SOW, and any amendments to settle the dispute with documentation.

**Scope disagreements**: The subcontractor says work is outside their SOW scope. The agent compares the requested work against the SOW deliverables and scope description, provides an analysis, and either confirms it is in scope or recommends a scope amendment.

**Client passthrough complications**: The client rejects subcontractor time that your PM already approved. The agent calculates the financial impact (you are contractually obligated to pay the subcontractor but cannot bill the client) and prepares options — absorb the cost, negotiate with the client, or dispute with the subcontractor.

**Certification lapse**: A subcontractor's required certification expires mid-engagement. The agent flags this immediately, as they may no longer be legally permitted to perform certain work. It identifies the impact on delivery and the timeline to recertify.

### Routine Tasks

**Daily**: Agent monitors for new subcontractor time submissions and routes them for approval. Flags any entries that appear anomalous.

**Weekly**: Agent generates a subcontractor dashboard showing active engagements, NTE status, pending approvals, and upcoming expirations (contracts, insurance, certifications).

**Bi-weekly or monthly**: Agent generates subcontractor payment batches for all approved time and expenses, applies correct rates and markups, and queues payments for finance approval.

**Monthly**: Agent produces a subcontractor spend report by project, practice, and vendor. Compares actual margins against targets.

**Quarterly**: Agent conducts a subcontractor relationship review — performance ratings, spend analysis, rate competitiveness, and recommendations for preferred vendor status or disengagement.

## Scale — Growing It

### Adding Complexity

**Preferred vendor program**: As you grow, formalize your subcontractor relationships. Create a tiered program — preferred vendors get first look at opportunities, better payment terms, and volume commitments in exchange for rate discounts and quality guarantees.

**Multi-tier subcontracting**: Your subcontractor brings in their own subcontractors. This adds risk and complexity — you need flowdown clauses in your SOW that ensure compliance requirements cascade to all tiers.

**Global subcontracting**: Engaging subcontractors in other countries introduces cross-border tax implications (withholding tax, permanent establishment risk), currency management, and jurisdiction-specific labor laws.

**Managed services subcontracting**: Instead of staff augmentation (paying by the hour), you contract for outcomes — a managed service where the subcontractor is responsible for results, not effort. This shifts risk but requires different governance.

**Large-scale subcontractor operations**: When subcontractors represent 30% or more of your delivery capacity, you need a dedicated vendor management function. This includes strategic sourcing, contract negotiation specialists, and ongoing relationship management.

### Automation Opportunities

- **Onboarding automation**: Agent drives the entire onboarding workflow — sending forms, collecting documents, verifying insurance, running compliance checks, and activating the vendor in the system once everything is complete.
- **Smart matching**: When a staffing need cannot be filled internally, the agent searches your preferred vendor pool for subcontractors with the right skills, availability, and rate point.
- **Contract lifecycle management**: Agent tracks every SOW, amendment, and renewal date. Sends proactive reminders, drafts renewals based on current terms and performance data, and flags contracts that should not be renewed.
- **Automated three-way match**: Agent matches subcontractor time submissions against the SOW (is the work in scope?), the project plan (are the hours reasonable?), and the NTE limit (is there budget remaining?) before routing for human approval.
- **Margin optimization**: Agent analyzes the blended cost of your delivery teams (employees plus subcontractors) and recommends the optimal mix to hit target margins while maintaining quality.

### When to Redesign

- Subcontractor onboarding takes more than 2 weeks from decision to first billable day
- You are managing more than 50 active subcontractor engagements without a vendor management function
- Markup realization is consistently more than 5 percentage points below target
- Client satisfaction scores on subcontractor-heavy projects are measurably lower than employee-delivered projects
- You have had a misclassification audit finding or a legal dispute with a subcontractor
- Insurance or compliance lapses have caused project disruptions

## By Industry

1. **Manufacturing**: Subcontractors on manufacturing projects often need specific plant access credentials, safety training, and union clearance. Onboarding timelines can be 4 to 6 weeks due to safety certification requirements.

2. **Healthcare**: Subcontractors accessing clinical systems need HIPAA Business Associate Agreements, background checks, and potentially site-specific credentialing. EHR-certified consultants command premium rates.

3. **Education**: FERPA compliance requirements extend to subcontractors. Budget constraints in education mean subcontractor rates face strong downward pressure. Background checks are mandatory for anyone near students.

4. **Retail**: Seasonal demand spikes (pre-holiday implementations) require rapid subcontractor scaling. Subcontractors deploying to individual stores need to pass retailer-specific background and security screenings.

5. **Hospitality**: Subcontractors working at hotel properties may need to meet brand appearance and conduct standards. Multi-property rollouts require subcontractors willing to travel extensively on compressed schedules.

6. **Construction**: Construction industry subcontracting is the most mature model. Prevailing wage requirements on public projects mandate specific rate floors. Bonding may be required. Lien waiver management is critical for payment processing.

7. **Real Estate**: Transaction deadline pressure means subcontractors must be pre-qualified and ready to deploy with minimal notice. Property access logistics add coordination overhead.

8. **Agriculture**: Limited pool of consultants with both agricultural domain knowledge and technology skills. Subcontractors may need to work in remote locations with basic amenities. Seasonal availability is a constraint.

9. **Banking & Financial Services**: Regulatory requirements (FFIEC, OCC) flow down to subcontractors. Background checks and security screenings are extensive and non-negotiable. Some institutions maintain approved vendor lists that take months to join.

10. **Insurance**: State-specific regulatory knowledge limits the subcontractor pool. Actuarial subcontractors are scarce and expensive. Insurance company vendor management programs often require your subcontractors to be independently approved.

11. **Legal**: Legal process outsourcing (LPO) providers for document review and e-discovery operate on very different models than traditional consulting subcontracting. Ethical walls between matters are mandatory.

12. **Government**: Subcontractors on government contracts must meet the same compliance requirements as the prime. Small business subcontracting goals may require you to use specific types of vendors (small, disadvantaged, veteran-owned). DCAA audit rights extend to subcontractor records.

13. **Pharma**: GxP compliance requirements extend to subcontractors. Validation expertise is a scarce specialization. Clinical trial consulting subcontractors need specific therapeutic area experience.

14. **Automotive**: OEM-specific system knowledge limits the subcontractor pool. Tier 1 supplier engagement work may require subcontractors to sign the OEM's specific confidentiality terms in addition to yours.

15. **Telecom**: OSS/BSS specialization creates a small, tight-knit subcontractor market where everyone knows everyone. Poaching clauses in contracts are common and aggressively enforced. Network access requires specific carrier certifications.

16. **Media & Entertainment**: Union rules may apply to subcontractors on production-related work. Content security agreements (to prevent leaks) are standard. Creative talent subcontracting has different norms than technology subcontracting.

17. **Energy & Utilities**: NERC CIP background check requirements for grid-access work. Subcontractors in nuclear environments need NRC clearance. Safety compliance requirements are among the most stringent of any industry.

18. **Food & Beverage**: Food safety certifications (SQF, BRC) may be required for subcontractors working in production environments. Allergen awareness and hygiene protocols add onboarding requirements.

19. **Logistics & Transport**: DOT compliance may extend to subcontractors. Warehouse environment safety training is required. Transportation industry subcontractors need to understand hazmat handling regulations.

20. **Nonprofit**: Grant compliance requirements flow down to subcontractors. Rate sensitivity is high — nonprofit clients may push back on visible subcontractor markups. Subcontractors with nonprofit domain experience are strongly preferred.

21. **SaaS / Technology**: Largest and most liquid subcontractor market. Remote work makes geographic constraints irrelevant for most roles. The challenge is quality control — low barriers to entry mean skill levels vary widely.

22. **Professional Services**: Subcontracting between peer firms is common and sometimes awkward. Non-compete and non-solicitation clauses need careful drafting. The subcontractor might be your competitor on the next deal.

23. **Defense & Aerospace**: Security clearance requirements dramatically limit the subcontractor pool. ITAR restrictions may prevent using non-US persons. Subcontractor facility clearance requirements can take 6 to 12 months.

24. **Mining**: Remote and hazardous locations limit the willing subcontractor pool. MSHA safety training is mandatory. Fly-in/fly-out logistics add cost and complexity to subcontractor management.

25. **Chemicals**: Process safety management expertise is a prerequisite. HAZWOPER certification may be required. Subcontractors may need specific chemical handling training depending on the facility.

26. **Textiles & Apparel**: Factory compliance audit subcontractors need local language skills and cultural knowledge for sourcing countries. Ethical sourcing expertise is increasingly a requirement.

27. **FMCG**: Speed of engagement requires pre-qualified subcontractor pools ready for rapid deployment. Trade promotion and demand planning expertise is niche and concentrated among a few specialist firms.

28. **Electronics**: Prototype security and IP protection requirements are critical. Subcontractors working on pre-release products sign stringent NDAs. Lab access requires specific safety and ESD training.

29. **Oil & Gas**: HSE compliance is the dominant onboarding requirement. Offshore work requires survival training, medical fitness certificates, and specific safety certifications. Day-rate payment models differ from standard hourly billing.

30. **Jewelry & Luxury**: Brand confidentiality is paramount — subcontractors handling product launch information sign aggressive NDAs. High-value inventory environments require additional background screening and bonding.

## By Company Size

### Startup (< 50 people)

You use subcontractors to punch above your weight — taking on projects your small team cannot handle alone. Keep the process simple: a standard SOW template, clear rate cards, and direct PM approval of time. Your biggest risk is over-reliance on a single subcontractor who knows your clients better than you do. Build internal capability as fast as you can.

### SMB (50–500 people)

Subcontracting is a regular part of your delivery model. You need formalized onboarding, a vendor master database, and standard contract templates. Track subcontractor spend as a percentage of revenue and set a target ceiling. Start building preferred vendor relationships with 3 to 5 firms whose quality and rates you trust.

### Mid-Market (500–5,000 people)

Dedicated vendor management function (even if just 1 to 2 people). Formal preferred vendor program with tiered status, negotiated rate cards, and annual performance reviews. Master Services Agreements with your top 10 to 15 subcontractor partners. Automated compliance tracking for insurance, certifications, and contract expirations. Margin analytics by vendor.

### Enterprise (5,000+ people)

Strategic vendor management office integrated with procurement. Formal sourcing events for major skill categories. Volume-based rate negotiations. Subcontractor performance scorecards fed by project manager ratings, quality metrics, and client feedback. Risk management program covering concentration risk, compliance, and continuity planning. AI-driven matching of subcontractor capabilities to staffing needs across the global organization.

## erp.ai & Proto

**erp.ai**: The Supplier and Purchase Order doctypes manage vendor master data, rate cards, and financial commitments. Contract management tracks SOW terms and expiration dates. Integration with Projects and Timesheets means subcontractor time flows through the same approval and billing pipeline as employee time.

**Proto**: Proto agents power the ORAI cycle for subcontractor management — Observing onboarding status, compliance documents, time submissions, and NTE burn rates; Reasoning about rate competitiveness, margin impact, and performance trends; Acting by routing approvals, generating payment batches, and drafting SOWs; and Iterating by building a data-driven view of which subcontractors deliver the best value across different project types and skill requirements.
