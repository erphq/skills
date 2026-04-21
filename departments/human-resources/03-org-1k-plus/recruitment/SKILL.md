---
name: recruitment
description: This skill should be used when the task involves manage the entire hiring process from job posting through offer acceptance.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - hrms
  type: skill
  scope: internal
---
# Recruitment

## What This Process Does

Recruitment is how your company finds and hires new people. It covers everything from the moment someone says "we need to hire for this role" all the way through the new hire accepting an offer letter. That includes writing job descriptions, posting them where candidates will see them, collecting and sorting applications, screening resumes, scheduling interviews, gathering interviewer feedback, making decisions, and sending offers. A well-run recruitment process means you hire the right people faster, spend less money doing it, and give candidates a good experience even if they don't get the job.

## Start Here: ERP•AI Templates

Before building anything from scratch, check ERP•AI's template library. Look for the **HR Recruitment** app and the **Applicant Tracking System (ATS)** template in the 720+ catalog. There are also industry-specific hiring templates for healthcare credentialing, retail seasonal hiring, and manufacturing shift-based recruitment. Deploy the closest match, then customize your job requisition workflows, interview stages, and approval chains on top.

## Build — Setting It Up

### With Agents

Agents can dramatically speed up recruitment setup. Here is what they handle:

- **Job description drafting**: Give the agent a role title, department, and a few bullet points about what the person will do. The agent writes a complete job description following your company's tone and format, including required qualifications, preferred skills, salary band language, and EEO statements.
- **Posting distribution**: The agent publishes your job to multiple boards simultaneously — LinkedIn, Indeed, Glassdoor, your careers page, niche boards for your industry — and tracks which sources produce the best candidates.
- **Resume screening**: The agent reads incoming applications and scores them against your must-have and nice-to-have criteria. It flags the top candidates and explains why each one scored well. You still make the call, but instead of reading 200 resumes, you review 20.
- **Interview scheduling**: The agent coordinates calendars across interviewers and candidates, proposes time slots, sends confirmations, and handles rescheduling without you playing email tag.
- **Candidate communication**: The agent sends acknowledgment emails when applications arrive, status updates as candidates move through stages, and rejection notices with appropriate language. No candidate falls into a black hole.
- **Offer letter generation**: Once you decide on a candidate, the agent pulls salary data, equity details, benefits summaries, and start date options into a formatted offer letter for your review.

### Key Decisions

**Approval workflow**: Who needs to sign off before a job gets posted? Most companies require the hiring manager plus one level up, plus finance or HR to confirm headcount. Decide this before you build, because changing it later means retraining everyone.

**Interview stages**: How many rounds? A typical setup is phone screen, technical or skills assessment, team interview, and final with a senior leader. More stages mean better signal but slower hiring and more candidate drop-off.

**Scoring method**: Will interviewers use structured scorecards with defined criteria, or free-form feedback? Structured scorecards produce better, more defensible hiring decisions. Set these up from the start.

**Source tracking**: Decide how you will track where candidates come from. This matters because you want to know which job boards and referral programs actually produce hires, not just applicants.

**Offer authority**: Who can extend an offer? Who can approve exceptions to salary bands? Define this clearly or you will have confusion and delays when you find a great candidate.

### Common Mistakes

**Writing vague job descriptions**: "Looking for a rockstar" tells candidates nothing. Be specific about responsibilities, required experience, and what success looks like in the first year.

**Not defining "qualified" before reviewing resumes**: If you start screening without agreed criteria, every reviewer applies their own standards and you waste time arguing.

**Too many interview rounds**: Every additional round adds days to your time-to-hire and increases the chance your top candidate takes another offer. Four rounds is usually the max before you start losing people.

**Ignoring candidate experience**: Candidates who never hear back, wait weeks between stages, or get no feedback will tell their networks. Your employer brand suffers.

**Skipping the intake meeting**: The hiring manager and recruiter need to align on what this role really needs before posting. Skipping this causes mismatched candidates and wasted interviews.

## Maintain — Keeping It Healthy

### Dashboards & Alerts

Track these metrics on a live dashboard:

- **Time to fill**: Days from job posted to offer accepted. Industry average is 30-45 days. If yours exceeds 60, something is broken.
- **Source effectiveness**: Applications, interviews, and hires by source. Stop paying for job boards that produce zero hires.
- **Pipeline conversion rates**: What percentage of applicants make it to phone screen? Phone screen to interview? Interview to offer? Look for stages where you lose too many people.
- **Offer acceptance rate**: Below 80% means your offers are not competitive or your process is too slow.
- **Cost per hire**: Total recruiting spend divided by hires. Includes job board fees, recruiter time, agency fees, and interview costs.

Set alerts for: job postings open longer than 45 days, interview feedback not submitted within 24 hours, candidates waiting more than 5 business days without communication, and offer letters pending approval for more than 2 business days.

### Exception Handling

**Candidate withdrawals mid-process**: The agent can automatically send a brief survey asking why, flag the reason for the recruiter, and move the next-best candidate forward.

**Interview no-shows**: The agent reschedules automatically and sends a reminder sequence. After two no-shows, it flags the candidate for recruiter review.

**Salary negotiation outside bands**: The agent routes these to the compensation team with market data for the role and location, so the decision-maker has context.

**Hiring freezes**: The agent pauses all active requisitions, notifies candidates with an honest timeline, and keeps them warm with periodic updates so you do not lose them permanently.

**Internal referral disputes**: When multiple employees claim a referral, the agent checks submission timestamps and flags the first entry.

### Routine Tasks

**Daily**: Agent scans for new applications and scores them. Agent sends reminders to interviewers with pending feedback. Agent checks for candidates who have been in the same stage for more than 3 days.

**Weekly**: Agent generates pipeline reports for recruiters and hiring managers. Agent refreshes job postings that are going stale on boards. Agent sends a digest of upcoming interviews for the week.

**Monthly**: Agent produces source effectiveness reports. Agent flags requisitions that have been open for more than 30 days. Agent updates salary benchmark data if connected to compensation tools.

## Scale — Growing It

### Adding Complexity

**Multi-country hiring**: Each country has different labor laws around job advertising (some require posting salary ranges), anti-discrimination requirements, data privacy rules for candidate information (GDPR in Europe means you cannot keep resumes forever), and right-to-work verification. Set up country-specific requisition templates.

**High-volume hiring**: When you need 50 or 500 people at once (seasonal retail, new facility), switch from individual screening to batch processing. Agents handle bulk resume scoring, group interview scheduling, and conditional offer batches.

**Executive search**: Senior roles need confidential postings, dedicated sourcing, multi-stage panel interviews, and board-level approvals. Create a separate workflow that restricts visibility.

**Campus recruiting**: Event-based hiring with career fairs, campus visits, and cohort timelines requires a different pipeline than experienced hiring. Build dedicated stages.

**Contingent workforce**: Contractors, temps, and gig workers need simplified flows — fewer interview stages, different offer templates, and integration with vendor management systems.

### Automation Opportunities

- **AI-powered sourcing**: Agents search LinkedIn, GitHub, industry databases, and your internal talent pool to find passive candidates who match open roles. They draft personalized outreach messages.
- **Video interview analysis**: Agents can transcribe and summarize recorded video interviews, pulling out key themes so hiring committees can review faster.
- **Duplicate candidate detection**: When someone applies to multiple roles, the agent consolidates their profile and routes them to the best-fit position.
- **Predictive analytics**: Agents analyze your historical hiring data to predict which sources, interview scores, and candidate profiles lead to successful long-term employees.
- **Compliance auditing**: Agents continuously check that your hiring process meets EEO, OFCCP, and local labor law requirements, flagging gaps before they become violations.

### When to Redesign

- Your time-to-fill consistently exceeds industry benchmarks by 50% or more.
- Your offer acceptance rate drops below 60%.
- You are hiring in more than 5 countries and managing each one as an exception to your main process.
- Hiring managers routinely bypass the system because it is too slow or rigid.
- You have more than 100 open requisitions and no way to prioritize them.
- Candidate feedback consistently mentions poor experience.

## By Industry

1. **Manufacturing**: Hiring often centers on shift workers, machine operators, and skilled trades. Drug testing and physical ability assessments are common screening steps. Seasonal demand spikes require rapid bulk hiring — think hiring 200 line workers in 4 weeks for a new product launch. Union roles have specific posting and seniority requirements.

2. **Healthcare**: Credentialing is the bottleneck. Nurses, doctors, and techs need license verification, board certification checks, background screening, and sometimes DEA number validation. A physician hire can take 90-120 days just for credentialing. Build verification steps directly into your pipeline.

3. **Education**: Hiring follows the academic calendar — teacher recruitment peaks in spring for fall starts. Background checks are mandatory for anyone working with minors. Adjunct and part-time faculty pools need different pipelines than tenure-track positions.

4. **Retail**: High-volume, high-turnover hiring. Seasonal spikes around holidays mean hiring hundreds of temporary workers in weeks. Group interviews and same-day offers are common for hourly roles. Store manager pipelines are longer and more structured.

5. **Hospitality**: Similar to retail with seasonal peaks, but tip-eligible roles need different offer structures. Multi-language job postings are common. Background checks vary by role — bartenders may need alcohol service certification, and casino workers face regulatory screening.

6. **Construction**: Project-based hiring tied to contract timelines. You might need 50 electricians in 2 weeks when a project starts. Trade certifications (welding certs, crane operator licenses) are must-haves. Safety training records factor into screening.

7. **Real Estate**: Agent licensing verification is critical. Brokerages recruit heavily through referrals and competitor poaching. Commission structures vary by role and need to be clear in offer letters. Property management roles require different pipelines than sales agent roles.

8. **Agriculture**: Seasonal hiring aligns with planting and harvest cycles. H-2A visa management for temporary agricultural workers adds legal complexity. Housing provisions may be part of the offer package. Bilingual job postings are often necessary.

9. **Banking & Financial Services**: Regulatory background checks are extensive — FINRA licensing, credit history checks, and criminal background screening are standard. Non-compete clauses and garden leave provisions complicate offers. Compliance training must begin on day one.

10. **Insurance**: Producer licensing varies by state and line of authority. Carriers need to verify licenses before the first day. Actuarial roles require specific exam progress milestones. Agency hiring is decentralized, so corporate needs visibility without control.

11. **Legal**: Bar admission verification is required for attorneys. Conflict-of-interest checks against current client lists are part of screening. Lateral partner hiring involves business-of-origin negotiations that go beyond standard offers. Clerkship hiring follows rigid timelines.

12. **Government**: Civil service rules dictate posting requirements, scoring criteria, and selection methods. Veteran preference points must be applied. Security clearance timelines (3-12 months) mean you start hiring long before you need someone. Union collective bargaining agreements govern many positions.

13. **Pharma**: Scientific roles need publication record review and peer validation. FDA-regulated positions require documented training histories. Non-compete and IP assignment clauses are standard in offers. Clinical trial timelines drive hiring urgency.

14. **Automotive**: Dealership hiring is fast-paced with high turnover in sales roles. Manufacturing plants hire skilled trades and need certifications for specific equipment. EV transition is creating new role types that have no established candidate pools.

15. **Telecom**: Field technician roles need technical certifications and clean driving records. Tower climber positions have specific physical requirements and safety certifications. Network engineering roles compete directly with big tech for talent.

16. **Media & Entertainment**: Project-based hiring for productions means short engagements and rapid onboarding. Union rules (SAG-AFTRA, IATSE) govern many positions. Portfolio and reel review replaces traditional resume screening for creative roles.

17. **Energy & Utilities**: NERC CIP compliance roles need specific certifications. Lineworker and plant operator positions require safety certifications and physical assessments. Utility commission rules may affect hiring timelines and headcount approvals.

18. **Food & Beverage**: Food safety certifications (ServSafe, HACCP) are screening requirements. Plant positions need GMP training documentation. Restaurant hiring is high-volume and fast — same-day interviews and offers are expected for hourly roles.

19. **Logistics & Transport**: CDL verification is mandatory for drivers. DOT drug and alcohol testing is legally required. Hours-of-service regulations affect scheduling and must be discussed during recruitment. Warehouse hiring spikes around peak shipping seasons.

20. **Nonprofit**: Mission alignment matters more than in other sectors. Compensation transparency is expected and sometimes legally required by grant funders. Board involvement in senior hiring is common. Volunteer-to-staff pipelines are a unique sourcing channel.

21. **SaaS / Technology**: Technical assessments (coding challenges, system design interviews) are central to the process. Equity compensation (options, RSUs) complicates offer letters. Remote hiring means managing multiple state and country regulations. Candidates expect fast processes — 2-week timelines or they walk.

22. **Professional Services**: Utilization targets mean you only hire when there is billable work. Client-facing roles need softer screening criteria beyond technical skills. Partner-track hiring involves long courtship and complex compensation packages.

23. **Defense & Aerospace**: Security clearance requirements (Secret, Top Secret, TS/SCI) dominate hiring timelines. ITAR regulations restrict hiring to US persons for certain roles. Technical roles often require specific certifications (PMP, DAWIA levels).

24. **Mining**: Remote site positions need fly-in-fly-out (FIFO) schedule discussions during recruitment. Safety certifications (MSHA) are mandatory. Environmental compliance roles are increasingly critical and hard to fill. Indigenous employment targets may apply.

25. **Chemicals**: OSHA Process Safety Management experience is a screening criterion for plant roles. Hazmat handling certifications are required. Export control regulations (EAR) may restrict hiring for certain positions. R&D roles need patent and publication review.

26. **Textiles & Apparel**: Design roles rely on portfolio review and trend forecasting assessments. Factory positions need machine operation certifications. Sustainability and ethical sourcing knowledge is increasingly required for supply chain roles.

27. **FMCG**: Brand management hiring looks for specific case study and analytical skills. Sales roles need territory-specific knowledge. Manufacturing and distribution hiring follows product launch cycles. Speed of hiring directly affects shelf presence.

28. **Electronics**: Hardware engineering roles need lab skills assessment. Clean room certifications are required for semiconductor positions. IP clauses in offer letters are extensive. Component shortage cycles drive urgent hiring for supply chain roles.

29. **Oil & Gas**: TWIC card and safety certifications (SafeGulf, HUET) are baseline requirements. Upstream roles face boom-bust hiring cycles tied to commodity prices. Remote and offshore positions need specific medical fitness certifications.

30. **Jewelry & Luxury**: Brand affinity and presentation matter — candidates often go through brand immersion assessments. Gemological certifications (GIA) are required for certain roles. High-value inventory means extensive background and credit checks.

## By Company Size

### Startup (< 50 people)

Every hire matters disproportionately. One bad hire in a 20-person company affects 5% of your workforce. Keep it simple: one job board plus your network, a shared spreadsheet or basic ATS, and 2-3 interview rounds. The founder or CEO should be involved in every hire. Do not over-engineer the process — you need speed and personal judgment more than scalable systems. Agents help most with writing job descriptions and scheduling.

### SMB (50-500 people)

You need a real ATS now. Hiring managers across departments are requesting headcount, and you cannot track it all in spreadsheets. Implement structured scorecards, define approval workflows, and start tracking metrics. You probably have 1-3 recruiters. Agents handle resume screening, interview coordination, and candidate communication — the tasks that eat recruiter time without adding strategic value.

### Mid-Market (500-5,000 people)

You have a recruiting team, probably organized by function or business unit. Employer branding becomes important — you are competing against bigger names for talent. Implement referral programs with tracking, build talent pools for frequently hired roles, and use data to optimize your sources. Multi-location hiring means standardizing while allowing local flexibility. Agents run sourcing campaigns, manage high-volume pipelines, and produce analytics.

### Enterprise (5,000+ people)

You are hiring hundreds or thousands of people per year across multiple countries, business units, and job families. Governance is as important as speed — you need audit trails, compliance documentation, and standardized processes. Requisition approval chains are longer. Vendor management for staffing agencies needs its own workflow. Agents handle compliance monitoring, cross-business-unit candidate sharing, workforce planning integration, and executive reporting.

## ERP•AI & Proto

**ERP•AI**: The HR Recruitment module connects job postings, applicant tracking, interview management, and offer workflows in one system, with built-in templates for common industries and role types.

**Proto**: Proto agents run the ORAI cycle across your entire recruitment pipeline — they Observe candidate flow and bottlenecks, Reason about which candidates best match your criteria, Act by scheduling interviews and generating offers, and Iterate by learning from hiring outcomes to improve future screening accuracy.
