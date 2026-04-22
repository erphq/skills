---
name: fit-gap-matrix
description: This template should be used when evaluating enterprise platforms at an organization of 100-1,000 employees — multi-workstream requirements scoring, vendor-of-record selection, effort estimation, gap-resolution planning, and executive-level decision support.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  size_tier: 02-org-100-to-1k
  type: template
  scope: internal
---
# Fit-Gap Matrix — 100 to 1,000 People

## Purpose

At mid-market, fit-gap is **a formal discovery artifact driving material platform-selection decisions**. You're picking between NetSuite vs Sage Intacct vs Workday Financial Management, or Salesforce vs HubSpot Enterprise, or Workday HCM vs Rippling vs Dayforce. Multi-workstream implementations with 6–18 month timelines + $500K–$5M budgets make this the most important deliverable of the discovery phase.

A thorough mid-market fit-gap matrix answers: Does this platform cover our requirements? What configuration, customization, or integration work is needed? What's the effort + cost to close each gap? Is the total cost + effort justified vs. alternative vendors?

Use when:
- Selecting or replacing a business-critical platform (ERP, CRM, HCM, ticketing)
- Consultant-led implementation with formal discovery phase
- Budget request requiring executive or board approval
- Regulated industry requiring documented vendor selection

## Template Structure

Excel / Google Sheets or dedicated tool (many consultancies use proprietary fit-gap software). Typical scale: 100–500 requirements rows across 5–15 workstreams.

### Primary Columns

| Column | Description |
|---|---|
| Req ID | Hierarchical (F-01, F-02, F-03 for Finance workstream; H-01 etc. for HR) |
| Workstream | Finance, HR, Sales, Ops, IT etc. |
| Requirement | Detailed business requirement (1–3 sentences) |
| Priority | Must Have / Should Have / Could Have / Won't Have (MoSCoW) |
| Source | Interview transcript / policy doc / regulatory requirement |
| Owner | Business stakeholder accountable |
| Fit Rating | 5 = OOB; 4 = Config; 3 = Light customization; 2 = Heavy custom / integration; 1 = Gap — no solution |
| Gap Resolution | How will gap be closed? (config, custom dev, integration, 3rd-party, process change, defer, skip) |
| Effort Estimate | S (<1 week), M (1-4 weeks), L (1-3 months), XL (3+ months) |
| Cost Estimate | $ range |
| Risk | Low / Med / High |
| Vendor A Rating | Per-vendor fit assessment |
| Vendor B Rating | |
| Vendor N Rating | |
| Notes | Rationale, vendor demos, edge cases |

### Fit Rating (1–5) Detail

- **5 — Out of Box**: Native functionality meets requirement with no changes.
- **4 — Configuration**: Vendor-provided settings, no code, typically admin-configurable.
- **3 — Light Customization**: Scripted logic, workflow automation, minor UI changes. Generally supportable.
- **2 — Heavy Customization**: Significant development effort (weeks+). May affect upgrade path.
- **1 — Gap**: No viable solution on platform; requires third-party tool, integration, or process change.

### Priority (MoSCoW)

- **Must Have**: Go-live blocker. Implementation cannot launch without this requirement met.
- **Should Have**: Important for business value; delayed implementation acceptable if needed.
- **Could Have**: Nice-to-have; can be deferred to post-launch phase.
- **Won't Have (this phase)**: Explicitly out of scope; may be revisited later.

## Scoring & Decision Process

### Step 1: Requirement Capture (Weeks 1–3)

- Stakeholder interviews — 30–60 min each with 20–40 people
- Requirements drafted per workstream
- Cross-workstream dependency mapping
- Regulatory / compliance requirements separately captured (SOX, GDPR, industry-specific)

### Step 2: Vendor Assessment (Weeks 4–6)

- 3–5 vendor finalists demo-evaluated
- Deep-dive demos (2–4 hours each) per workstream
- RFP responses + reference calls
- Fit rating per requirement per vendor

### Step 3: Gap Analysis (Weeks 6–8)

- For each "Must Have" gap: detailed gap-resolution plan
- Effort + cost estimates (implementation partner input)
- Risk assessment (technical + process + organizational)

### Step 4: Total Cost of Ownership (Week 8)

Compute 3-year TCO per vendor:

| Component | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Licensing | | | |
| Implementation services | | | |
| Custom development | | | |
| Third-party tools | | | |
| Integration costs | | | |
| Training | | | |
| Change management | | | |
| Internal FTE (implementation team) | | | |
| Ongoing support + managed services | | | |

### Step 5: Weighted Scoring + Decision

Score = Σ (Priority weight × Fit rating)

- **Must Have**: weight 4
- **Should Have**: weight 2
- **Could Have**: weight 1
- **Won't Have**: weight 0

Plus Must-Have-Gap disqualification: if any Must Have requirement has Fit Rating < 3 with no viable gap resolution, vendor is disqualified regardless of weighted score.

## Decision Framework

Beyond raw scoring, evaluate:

1. **Total cost vs value delivered** — 3-year TCO + productivity + process improvement
2. **Strategic fit** — alignment with company strategy + growth plans
3. **Platform velocity** — vendor's roadmap + innovation pace
4. **Ecosystem + partners** — implementation partner availability + expertise
5. **Customer references** — comparable-size + comparable-industry references
6. **Risk profile** — implementation complexity + ongoing dependency
7. **Exit strategy** — data portability if we outgrow or switch
8. **Team fit** — will our users adopt + thrive with this?

## Output Deliverables

1. **Fit-Gap Matrix** (spreadsheet) — 100–500 rows
2. **Gap Resolution Plan** — detailed plan for each Must-Have gap
3. **TCO Analysis** — 3-year comparison per vendor
4. **Risk Register** — top 10–20 risks with mitigation
5. **Executive Summary** — 2–5 pages for board / CEO review with recommendation + rationale
6. **Decision memo** — final vendor selection with documented reasoning

## Common Mistakes

- **Requirement list bloat**: 1,000+ requirements loses focus. Prioritize ruthlessly; MoSCoW enforcement is critical.
- **Fit rating inflation**: Demos look great, rating 5 assigned; reality in production = 3. Rigorous demo + POC required.
- **TCO understatement**: Forgetting implementation services + internal FTE + change management. Complete TCO easily 2–3× licensing.
- **Requirements without owner**: Orphaned requirements; no stakeholder sign-off; scope creep.
- **Gap resolution handwaved**: "We'll build it" without effort estimate — commits without understanding cost.
- **No reference checks**: Vendor claims; customer reality. Always call 3+ references.
- **Implementation-partner selection after vendor**: Partner-dependent success; choose partner alongside vendor.
- **Executive-summary overclaiming**: Promising benefits without risk acknowledgment. Board resents surprises.
- **POC skipped for "Must-Have-gaps"**: Any significant gap should be POC'd before commit.

## Proof of Concept Recommendations

For gaps with significant customization or integration:
- Scoped POC (2–4 weeks) with actual data + actual users
- Success criteria defined upfront
- POC passing = gap acceptable; POC failing = gap re-evaluated or vendor disqualified

## Related

- [Go-Live Checklist](../go-live-checklist/SKILL.md) — go-live follows fit-gap + implementation
- [Requirements Traceability](../requirements-traceability/SKILL.md) — fit-gap feeds RTM for implementation
- [Migration Runbook](../migration-runbook/SKILL.md) — data migration planning paired with fit-gap
- [Small-Org Fit-Gap (<100 people)](../../01-org-under-100/fit-gap-matrix/SKILL.md)
- [Enterprise Fit-Gap (1k+)](../../03-org-1k-plus/fit-gap-matrix/SKILL.md)
