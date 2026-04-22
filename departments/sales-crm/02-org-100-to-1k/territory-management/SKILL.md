---
name: territory-management
description: This skill should be used when designing and managing sales territories at an organization of 100-1,000 employees — typically a SalesOps/RevOps team owning territory design, dedicated tooling (Fullcast, Anaplan Territory, Salesforce Maps), multi-dimensional territory grids, and formal annual territory planning cycle.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Territory Management — 100 to 1,000 People

## What This Process Does

Territory management at this scale is **a multi-dimensional optimization exercise managed by SalesOps/RevOps**. Sales team is 10–50+ reps across multiple roles + segments + regions; territories combine geographic + segment + vertical + named-account dimensions; dedicated tooling (Fullcast, Anaplan Territory Planning, Salesforce Maps, Varicent Optymyze) handles modeling + execution. Annual territory + quota planning cycle aligned with fiscal year + hiring plan.

The work: **design territories that are equitable + opportunity-aligned, allocate quotas based on TAM + opportunity, manage account assignments cleanly, support overlay roles + ABM motion, and rebalance gracefully as team scales.** Bad territory design at scale = motivational catastrophe + revenue loss + retention crisis. Good design = aligned reps consistently hitting quota with clear account ownership.

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Territory Operations** template provides multi-dimensional territory design, account assignment automation, opportunity-equity scoring, quota-allocation modeling, and rebalancing simulation. Pair with **ABM Account Planning** for named-account orchestration and **Overlay Role Coordination** (specialists, sales engineers, channel) for cross-territory deal collaboration.

## Build — Setting It Up

### With Agents

- **Multi-dimensional territory engine**: Agent applies territory rules across geo + segment + vertical + product + named-account axes. Single-owner enforcement.
- **Account-assignment orchestration**: New accounts (inbound, sourced, partner-referred) routed per territory rules; conflicts flagged for resolution.
- **Opportunity-equity scoring**: TAM × opportunity per territory calculated; quotas set proportional to opportunity (with rep experience adjustment).
- **Quota-allocation modeling**: Revenue plan → territory-level quota allocation considering opportunity + rep capacity + ramp.
- **Rebalancing simulation**: Model multiple rebalancing scenarios; show pipeline + quota + retention impact.
- **Account-transition workflows**: Account reassignments coordinated — opportunities transferred, customer notifications, handoff meetings.
- **Overlay-role coordination**: Sales engineers + product specialists + channel managers tied to AE territories with deal-team workflows.
- **Named-account-list management**: ABM lists per AE; quarterly refresh process; addition/removal workflows.
- **Performance + opportunity-equity analytics**: Territory-level pipeline + closed-won + rep attainment correlation; surface inequities.

### Key Decisions

1. **Territory framework dimensions** (most use 2–4 simultaneously):
   - **Geography**: East/Central/West, country, region. For physical-world businesses + smaller teams.
   - **Segment**: SMB / Mid-Market / Enterprise / Strategic. Different sales motion per tier.
   - **Vertical**: FinServ, Healthcare, Retail, Tech, etc. Specialized industry knowledge.
   - **Product**: Each AE focuses on specific product line (when company has multi-product).
   - **Named-account (ABM)**: Specific account lists per rep (most strategic-account-focused).
2. **Single-ownership rule**: Every account has one and only one owner. Tiebreaker rules for overlap (e.g., named-account beats geo-segment).
3. **Quota-setting methodology**: TAM-driven (accounts × ACV × win-rate target) preferred. Adjust for rep experience (ramp years).
4. **Annual + quarterly cycle**: Annual rebalance aligned with hiring plan + fiscal year. Quarterly spot-adjustments as team changes.
5. **Named-account-list governance**: Process for adding accounts (relationship + ICP + strategic value); quarterly review.
6. **Overlay-role policies**: Sales engineers paired with AEs (1:N typical); product specialists for vertical-specific deals; channel managers for partner deals.
7. **Reassignment policy**: Documented criteria + transition expectations (handoff meetings, opportunity transfer, customer notification).
8. **House-account policy**: Accounts without rep ownership (small, inactive, non-ICP). Inbound handling defined.
9. **Quota relief / disability provisions**: Approved adjustments for rep absence, maternity/paternity, sales engineer dependency.

### Common Mistakes

- **Territory carving without TAM data**: Equal-quota across uneven territories. Demotivates strong-territory reps; impossible for weak-territory reps.
- **Rebalancing too aggressively**: Constant territory churn destroys customer relationships + rep continuity. Annual + spot, not constant.
- **Named-account-list bloat**: Reps add every prospect ever met. Lists balloon; coverage thins.
- **Multi-dimensional rule chaos**: 6-dimensional territory grid that no one understands. Simplify.
- **Cross-territory deal-credit disputes**: Account in one territory; rep in different territory finds the deal. Without clear policy = constant disputes.
- **Account-assignment to non-existent rep**: Rep leaves; accounts orphaned. Quick reassignment process needed.
- **ABM target-account list disconnect from sales motion**: Marketing builds list; sales doesn't engage. Wasted ABM investment.
- **Quota-setting opaque to reps**: Reps don't understand why they got their number. Trust eroded.

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent enforces account-assignment rules. New accounts auto-routed.
- **Weekly**: Pipeline + activity-by-territory review (manager + AE 1:1).
- **Monthly**: Territory-performance dashboard (pipeline coverage, attainment, opportunity-equity).
- **Quarterly**: Spot rebalance + named-account refresh + overlay-coordination check.
- **Semi-annually**: Mid-year rebalance if team size shifted materially.
- **Annually**: Full territory + quota reset aligned with hiring + fiscal-year plan.

### What to Watch

- **Opportunity-equity (TAM × opportunity per territory)**: Equal across territories (adjusted for rep tenure). Disparities = fairness issue.
- **Quota attainment distribution**: 60–70% at quota healthy; >75% all hitting = too easy; <50% all missing = too hard.
- **Coverage gaps**: Accounts without activity 90+ days. Either rebalance territory or drop account.
- **Overlap conflicts**: Disputes per quarter. Rising = rule ambiguity.
- **Named-account utilization**: % of named accounts engaged in last quarter. Target 75%+.
- **Account-transition success**: % of reassigned accounts that retain through cycle. <90% = transition process broken.
- **Pipeline velocity by territory**: Slow territories indicate rep or market issues.
- **Inbound capture rate by territory**: Conversion of inbound leads in territory.

### Exception Handling

- **Account M&A — buyer changes ICP**: Reassign to rep covering new buying entity.
- **Strategic-account special handling**: Top-tier accounts get senior AE + executive sponsor regardless of standard territory rules.
- **Customer requests new rep**: Rare; respect customer preference if not creating new conflict. Document reason.
- **Rep requests specific account**: Evaluate rationale. Don't permit cherry-picking.
- **Geographic-territory remote-rep arbitrage**: Remote rep working customers far from "official" territory. Document policy.
- **Overlay-rep deal-credit dispute**: Plan policy decides. Document for future similar cases.
- **Channel-partner-sourced deal in rep's territory**: Plan policy on partner attribution + revenue split.
- **End-of-quarter cherry-pick attempt**: Sales-manager spotcheck. Reps don't change territory mid-quarter.

## Scale — Growing It

### Adding Complexity

- **International + regional structure**: Country-by-country sales with local quota + comp adjustments.
- **Multi-segment + multi-product overlay**: Specialized rep types serving cross-functional deals.
- **Account-based selling at scale**: Dedicated buying-committee orchestration per top accounts.
- **Channel + alliance integration**: Channel-rep + partner-manager coordination with direct AE.
- **Industry-vertical specialization**: Vertical-specific overlay teams supporting horizontal AE coverage.

### Automation Opportunities

- **AI-driven territory optimization**: Agent suggests territory boundary adjustments based on observed pipeline + closed-won patterns.
- **Predictive opportunity-equity scoring**: Score territories on future opportunity (intent signals, market expansion).
- **Account-relationship mapping**: Track stakeholder relationships per account; suggest reassignment when key contact leaves.
- **Rebalancing simulation at scale**: Agent models complex multi-territory rebalancing with predicted outcomes.
- **Overlay-role pairing**: Algorithmic matching of AEs with sales engineers + specialists based on deal characteristics + skill match.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Sales team passes 100+ reps; multi-dimensional territory complexity scales.
- Global operations across 10+ countries with regional sub-organizations.
- ABM motion at scale with dedicated target-account orchestration teams.
- Public company with formal SOX-controlled comp + quota processes.
- Enterprise territory tooling investment $300K+/year justified.

## By Industry (at this scale)

1. **SaaS / Subscription**: Mix of geographic + segment + vertical + named-account.
2. **Professional Services**: Industry vertical primary; named-account for top firms.
3. **Manufacturing (B2B)**: Geographic + distributor channel overlay.
4. **Healthcare (B2B)**: Vertical + GPO/IDN-relationship-based.
5. **Financial Services (B2B)**: Tier-based (large bank, regional, community, credit union).
6. **E-commerce (B2B wholesale)**: Regional + channel-specific.
7. **Construction**: Regional + project-type (commercial/residential/industrial).
8. **Education / Nonprofit (B2B)**: Institution-type + funding-source segments.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Territory Operations** + **ABM Account Planning** + **Overlay Role Coordination**. Integrate CRM (account + rep data), territory tool (Fullcast / Anaplan / Salesforce Maps / Varicent), comp tool (CaptivateIQ).

**Proto**: Specialized Proto agents — territory-design agent, account-assignment agent, opportunity-equity agent, quota-allocation agent, rebalancing-simulation agent, overlay-coordination agent.

## Related

- [Lead Management](../lead-management/SKILL.md) — leads route per territory rules
- [Pipeline & Forecasting](../pipeline-forecasting/SKILL.md) — pipeline owned by territory
- [Commissions](../commissions/SKILL.md) — territory drives quota + commission eligibility
- [Customer 360](../customer-360/SKILL.md) — account data tied to territory owner
- [Contracts & Renewals](../contracts-renewals/SKILL.md) — renewal ownership follows territory
- [Small-Org Territory (<100 people)](../../01-org-under-100/territory-management/SKILL.md)
- [Enterprise Territory Management (1k+ people)](../../03-org-1k-plus/territory-management/SKILL.md)
