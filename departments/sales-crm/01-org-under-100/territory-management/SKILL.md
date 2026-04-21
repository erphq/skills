---
name: territory-management
description: This skill should be used when designing and managing sales territories at an organization under 100 employees — typically 1-10 AEs, simple geographic or vertical-based territories, manual rebalancing as team grows, with founder or VP Sales owning territory design and quota allocation.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: sales-crm
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Territory Management — Under 100 People

## What This Process Does

Territory management at this size is **divvying up the market fairly among reps so each has a clear, equitable opportunity to hit quota.** You have 1–10 AEs; territories are typically split by geography (AE-East, AE-West), segment (SMB/Mid-Market/Enterprise), industry vertical (FinServ/Retail/Healthcare), or named-account lists (ABM motion). Rebalancing happens 1–2× per year as team grows or coverage needs change. The founder or VP Sales designs + owns territories.

The work: **define coverage fairly, align quota to territory opportunity, assign accounts cleanly, and handle the inevitable overlaps + reassignments.** At this size, bad territory design = rep frustration, account-ownership conflicts, and revenue left on the table. Good design = every rep clear on who's theirs, accounts with single-owner clarity, and quotas that reflect territory opportunity (not guessed numbers).

## Start Here: ERP•AI Templates

ERP•AI's **Small Business Territory Design** template provides territory-definition frameworks (geography, segment, vertical, named-account), account-assignment rules, quota-allocation models based on territory opportunity (TAM × win rate × ACV), and rebalancing workflows. Pair with **Account Assignment Engine** for CRM-integrated territory + assignment rules.

## Build — Setting It Up

### With Agents

- **Territory definition + account assignment**: Agent applies territory rules to every account — geography match, segment match, vertical match, named-account list — assigns single owner automatically.
- **Overlap detection**: Agent flags accounts matching multiple territories (e.g., East Coast healthcare account could be East AE or Healthcare vertical AE). Routes to manager for adjudication.
- **Quota allocation**: Agent models quota per territory based on TAM (available accounts × ACV opportunity), adjusted for territory maturity + rep experience.
- **Account-activity monitoring**: Agent tracks rep engagement across territory accounts; flags under-worked accounts (no activity in 90+ days) + coaching opportunities.
- **Opportunity equity tracking**: Agent calculates pipeline + closed-won by territory over time; surfaces inequities that suggest rebalancing needed.
- **Rebalancing orchestration**: When team grows or shifts, agent models impact scenarios (taking X accounts from AE1, giving to new AE). Shows pipeline + quota impact.
- **Transition management**: When accounts reassign, agent transfers open opportunities with context, coordinates handoff meetings, updates forecasting ownership.

### Key Decisions

1. **Territory framework**:
   - **Geography**: Simple — East/West/International. Works when product + buying behavior consistent across regions.
   - **Segment**: SMB (<500 employees), Mid-Market (500–5,000), Enterprise (5,000+). Works when sales motion differs materially by customer size.
   - **Vertical**: FinServ, Healthcare, Retail, etc. Works when product + messaging vary by industry.
   - **Named-account (ABM)**: Specific account lists per rep. Works for limited target-account universe (e.g., 500 target accounts total, 10 reps × 50 accounts each).
   - **Hybrid**: Most real-world orgs use combinations (e.g., geography × segment grid).
2. **Account-assignment rule**: Single-owner always. If overlap, deterministic tiebreaker (e.g., headquarters location beats vertical; named-account beats geographic).
3. **Named-account lists**: Clear, documented. Updated quarterly. Add/remove via formal process. Rep has full responsibility for their list.
4. **Quota-setting methodology**: TAM-driven (accounts × avg ACV × win rate target) or historical-driven (territory's prior year × growth %). Both valid; be consistent.
5. **Rebalancing cadence**: Annual full rebalance; quarterly spot adjustments as team changes. Avoid mid-quarter rebalances — destabilizing.
6. **Greenfield vs installed base**: New-business territories vs renewal/expansion territories. Often split among different roles (AE vs CS/AM) to avoid distraction.
7. **House accounts**: Accounts without assigned rep (usually because not ICP fit or inactive). Clear policy — who handles inbound if house account contacts?
8. **Overflow / surge management**: When inbound spikes in one territory, rebalancing or temporary surge-pairing helps avoid bottlenecks.

### Common Mistakes

- **Territories drawn by favoritism**: Founder gives best-performing rep the best accounts; others see it. Motivation + fairness issues.
- **Overlap chaos**: Two reps both believe an account is theirs; both pursue independently; customer confused; internal conflict.
- **Quota without TAM discipline**: Every rep gets $1M quota regardless of territory opportunity. Some reps have 10× more opportunity; others have impossible quota.
- **Reassignment without transition**: AE1 built relationship with Account X; AE2 takes over at rebalance without proper handoff. Customer frustrated; deal damaged.
- **Named-account list bloat**: Reps add every company they've ever met to their named list. Lists balloon; nobody covers everyone well.
- **Geographic territory fiction**: Sales team is remote, customers are nationwide, "East/West" designation arbitrary. Reps compete for SaaS-happy California accounts regardless of territory.
- **Vertical overlap without hierarchy**: FinServ AE + East AE fight over a Boston bank. No tiebreaker. Manager adjudicates every time.
- **Account-assignment opaque to customer**: Customer emails old rep (who's now at different role/left company), email ignored or bounces. Customer feels abandoned.

## Maintain — Keeping It Healthy

### The Rhythm

- **Continuous**: Agent assigns new accounts per territory rules. Flags exceptions.
- **Weekly**: Territory-level pipeline review within 1:1 between rep + manager. Coverage + activity discussion.
- **Monthly**: Territory performance review — pipeline, closed-won, activity, rep attainment to territory quota.
- **Quarterly**: Spot rebalancing if needed. Named-account list refresh. Coverage gaps + overlaps addressed.
- **Annually**: Full territory rebalance aligned to next year's hiring + growth plan. Quota-setting process.

### What to Watch

- **Territory equity**: TAM × opportunity ≈ equal across territories (accounting for rep experience). Large disparities = fairness issue.
- **Attainment distribution**: % of reps at quota. Skewed distribution (all hitting or all missing) = territory design or quota issue.
- **Coverage gaps**: Accounts not being worked (no activity 90+ days). Either rebalance territory or drop account.
- **Overlap conflicts**: # of territory disputes. Rising = rule ambiguity requiring tightening.
- **Named-account list utilization**: % of named accounts touched in last quarter. Target 75%+ for ABM motions.
- **Pipeline velocity by territory**: Territory-level velocity. Slow territories suggest rep or market issues.
- **Inbound-capture rate by territory**: % of inbound leads converted. Varies by territory dynamics; rep effectiveness.

### Exception Handling

- **Account switches buying signal (e.g., VP of Engineering leaves)**: Update rep if context change material to account strategy.
- **Account acquired by another company**: Reassign to rep owning acquirer. Transition plan.
- **Customer emails wrong rep**: Agent catches + routes to correct owner with context. No customer-facing confusion.
- **Rep requests specific account transfer**: Evaluate rationale. Prevent cherry-picking. Rebalance holistically if pattern.
- **New rep hired**: Territory carved from existing territories. Accounts + pipeline handed off with proper transitions.
- **Rep leaves mid-quarter**: Accounts redistributed temporarily; formal assignment at quarter-end. Open opportunities given priority to experienced reps.
- **Outbound target-account list**: Reps request accounts added to named list. Approval based on ICP-fit + strategic importance.
- **Channel-partner-sourced deal**: Policy on credit — is channel partner the "territory," or does overlap with rep territory claim? Documented policy.

## Scale — Growing It

### Automation Opportunities

- **Automated territory optimization**: Agent suggests territory adjustments based on pipeline + closed-won + rep attainment patterns.
- **Intelligent account-routing**: Agent routes inbound based on full territory rules + rep capacity + account priority.
- **Opportunity-equity scoring**: Agent scores territories on opportunity — TAM, buying momentum, competitive density — for fair quota allocation.
- **Rebalancing simulation**: Agent models multiple rebalancing scenarios with expected pipeline + quota impact before implementation.
- **Account-relationship mapping**: Agent tracks customer-stakeholder relationships; suggests account transitions when key contact leaves.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Sales team passes 20+ reps — dedicated SalesOps or RevOps function needed.
- Multi-dimensional territory grids (geo × segment × vertical × product) require sophisticated tooling (Fullcast, Anaplan Territory, Salesforce Maps).
- ABM motion matures with target-account orchestration at scale.
- Geographic expansion makes real-estate-style territory planning meaningful.
- Overlay roles emerge (specialists, named reps, industry SMEs) with their own territory structures.

## By Industry (at this scale)

1. **SaaS / Subscription**: Mix of geographic + segment + vertical. Named-account ABM for enterprise.
2. **Professional Services**: Industry vertical territories common. Named-account for large-account focus.
3. **Manufacturing (B2B)**: Geographic territory traditional; distributor network overlay.
4. **Healthcare (B2B)**: Vertical + GPO/IDN relationship-based. Strict territory discipline because of reimbursement concerns.
5. **Financial Services (B2B)**: Tier-based (large-bank, regional-bank, community-bank, credit union). Relationship-led.
6. **E-commerce (B2B wholesale)**: Regional + channel-specific (independents, chain accounts, online).
7. **Construction / Trades**: Regional + project-type (commercial, residential, industrial).
8. **Education / Nonprofit (B2B)**: Institution-type + funding-source + named-account combinations.

## ERP•AI & Proto

**ERP•AI**: Deploy **Small Business Territory Design** + **Account Assignment Engine**. Integrate with CRM (account + rep data), BI (pipeline + closed-won analytics).

**Proto**: Single Proto agent handles assignment rules, overlap detection, opportunity-equity tracking, rebalancing support. Multi-agent split at scale.

## Related

- [Lead Management](../lead-management/SKILL.md) — inbound leads route per territory rules
- [Pipeline & Forecasting](../pipeline-forecasting/SKILL.md) — pipeline owned by territory assignee
- [Commissions](../commissions/SKILL.md) — territory-based quota + commission eligibility
- [Customer 360](../customer-360/SKILL.md) — account-level data tied to territory owner
- [Contracts & Renewals](../contracts-renewals/SKILL.md) — renewal ownership follows territory structure
- [Enterprise Territory Management (1k+ people)](../../03-org-1k-plus/territory-management/SKILL.md)
