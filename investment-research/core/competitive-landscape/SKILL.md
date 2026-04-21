---
name: competitive-landscape
description: This skill should be used when mapping a sector or category — understanding the competitive structure, who's winning vs losing, what the moats are, how the landscape is shifting, and where disruption is coming from. Foundational for any sector-specific research or thesis.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  concept: investment-research
  type: skill
  scope: internal
---
# Competitive Landscape

## What This Skill Does

This is **how to map a sector so you actually understand who wins and why**. You can't write a thesis on a single stock without knowing how it stacks up against competitors — direct, indirect, substitute. Most "bad" sector writing either ignores competition (too bullish) or flattens all players as interchangeable (too simplistic). Good sector mapping reveals which players have durable advantages, which are losing share slowly, and where the disruption is coming from that breaks the sector.

The output: a mental (and written) model of the sector that explains company differences, predicts share shifts, and identifies where value will accrue over 3–5 years.

## The Five Lenses

### Lens 1 — Structure

Market structure defines the economics available to participants.

- **Monopoly / duopoly**: One or two companies > 70% share. Strong pricing power but anti-trust vulnerability. Examples: Google in search, Visa+Mastercard in networks.
- **Oligopoly**: 3–7 players, >80% combined share. Moderate pricing power, tacit coordination, periodic disruption. Examples: US airlines, cloud infra (AWS/Azure/GCP).
- **Fragmented**: No player > 15% share, long tail. Low pricing power, commodity-risk, consolidation opportunity. Examples: most services businesses, traditional IT services.
- **Two-tier**: Few large incumbents + many niche specialists. Common in enterprise software.
- **Emerging / platform shift**: New architecture disrupting incumbent structure. Cloud vs on-prem. AI-native vs pre-AI. Mobile vs desktop.

**Share concentration** (Herfindahl, rough top-5 share) tells you economics. More concentrated = better economics typically.

### Lens 2 — Moats

Every winning company has a moat. Common moats:

- **Network effects** (demand-side): More users → more useful. Examples: Facebook/Instagram/Twitter-X, Visa, Google (partially).
- **Switching costs** (supply-side lock-in): Customers can't leave without pain. Examples: enterprise ERP (Oracle, SAP), core-banking systems, EHRs (Epic, Cerner).
- **Scale economies** (cost advantage): Lower cost per unit than competitors. Examples: Amazon, Walmart, AWS.
- **Proprietary data / algorithms**: Data that improves product, competitor can't replicate. Examples: Google search index, Bloomberg, specific enterprise-data plays.
- **Regulatory / licensing**: Legal barriers to entry. Examples: defense, utilities, banking (limited).
- **Brand**: Durable trust / status. Examples: Apple, Coca-Cola, LVMH.
- **Process + culture**: Hard-to-copy operational excellence. Examples: Costco, Toyota production.

Rate moat 1–5:
- 5 = Dominant + widening (Google search, Apple ecosystem)
- 4 = Strong + stable (Microsoft enterprise, Visa)
- 3 = Moderate (most SaaS leaders)
- 2 = Thin (commodity SaaS, subscale)
- 1 = No moat (most services firms, commodity products)

### Lens 3 — Substitute Threats

Often the risk is not direct competitors but substitutes:
- **Technology shifts**: Cloud replaced on-prem. AI may replace traditional SaaS in some categories. No-code replaces some developer tools.
- **Adjacent categories**: Slack replaced email for some workflows; vertical SaaS replaces horizontal SaaS in some verticals.
- **Build-vs-buy**: Enterprises may build in-house when vendor pricing unreasonable.
- **Open-source alternatives**: For many enterprise software categories, open-source exists (e.g., Linux / Windows, PostgreSQL / Oracle, MongoDB / DynamoDB).
- **Regulatory**: New rules may disrupt (e.g., GDPR, Section 230 revisions, antitrust).

### Lens 4 — Value Chain Dynamics

Where does value accrue along the chain?
- **Upstream power**: Suppliers with pricing power (NVIDIA in AI chips, TSMC in semiconductor manufacturing).
- **Midstream**: Platform owners (AWS, Azure, major marketplaces).
- **Downstream**: Customer-facing brands, retail.
- **Squeeze points**: If upstream + downstream both have power, middle is squeezed.

Identify where your target sits. Squeeze-point players have eroding economics over time.

### Lens 5 — Disruption Vectors

Where will disruption come from?
- **New technology**: AI, web3, climate tech, etc. (Some real; some hype.)
- **New business models**: SaaS disrupted license software. Subscription disrupted retail. Platform disrupted product.
- **New customer demographics**: Gen-Z preferences, emerging-market growth.
- **New regulatory**: Privacy laws, antitrust, AI regulation.
- **New market structure**: Consolidation, PE roll-ups, big-tech entry.

Sectors don't stay the same. 5-year view requires identifying plausible disruption vectors.

## Mapping Process

Step-by-step:

### Step 1 — Define the category

Be specific. Not "software" but "US mid-market HR-tech SaaS". Not "fintech" but "US small-business AP automation." Precision enables useful mapping.

### Step 2 — Enumerate players

For the defined category:
- **Public incumbents**: Size + share + revenue
- **Private leaders / unicorns**: Recent funding, ARR if disclosed, growth
- **Emerging challengers**: Recent companies gaining traction
- **Adjacent platforms entering**: Big-tech or platform plays extending in

Goal: 15–30 relevant players enumerated, with ballpark size.

### Step 3 — Build the share + growth grid

| Player | Est Revenue | Growth | Share | Commentary |
|---|---|---|---|---|
| ACME | $2B | 12% | 28% | Incumbent, slowing |
| BIGCO | $1.2B | 45% | 17% | Challenger, gaining share fast |

Share grid reveals who's winning, who's losing, who's newly entered.

### Step 4 — Moat assessment per leader

For top 3–5 players, rate moat per the 5-factor framework. Compare. Who has most durable position?

### Step 5 — Trajectory mapping

For each key player:
- **Accelerating**: Growth up, margins up, share gaining
- **Steady**: Growth stable, margins stable, share stable
- **Decelerating**: Growth slowing, share losing
- **Restructuring**: In flux — losing but changing strategy

### Step 6 — Disruption synthesis

What structural change could reshape this over 3–5 years? How does each player stand to gain or lose from that change?

### Step 7 — The thesis sentence

Synthesize: "In this sector, the key question over 3–5 years is [X], and I believe [company Y] is best positioned to [benefit/defend] because [Z]." That's your sector thesis.

## Tools + Sources

- **Company 10-Ks**: Self-described competitive context (usually hedged).
- **Earnings calls**: Mentioned competitors, market-size claims, share claims.
- **Analyst reports**: Sellside + independent research (Gartner, Forrester, IDC for IT sectors).
- **Industry publications**: Trade press, vertical blogs.
- **Private-company data**: Crunchbase, PitchBook, CB Insights for funding + valuation.
- **Customer / user research**: G2, Gartner Peer Insights, TrustRadius for buyer perception.
- **M&A activity**: Who's acquiring whom + at what multiples. Strategic reveals.
- **Regulatory filings**: FTC merger filings, state AG disclosures.

## Output — Sector Map

Typical format: 2–3 page sector brief.

1. **Sector definition** (boundaries + scope)
2. **Market structure + size** (top-level dynamics)
3. **Player landscape** (grid of top 10–15 with share + growth + moat rating)
4. **Value-chain position + dynamics**
5. **Disruption vectors** (2–4 threats / opportunities)
6. **Sector thesis** (your one-sentence view)
7. **Key tickers + private players to watch** (feeds into `tickers.md`)

Refresh: quarterly for fast-moving sectors; semi-annually for stable.

## Common Mistakes

- **Lump-all-competitors**: "They compete with everyone" → useless. Segment the competition by buyer type, price point, feature depth.
- **Over-indexing on announcements**: New product launch ≠ market impact. Measure share + revenue, not press releases.
- **Under-weighting private disruption**: Public-only view misses private challengers (often the real threat).
- **Moat inflation**: Every company's "moat" is a narrative. Validate — does pricing power actually exist? Customer retention actually sticky?
- **Static view**: Treating sector as stable when it's transforming. Next year is not last year.
- **Ignoring customer concentration**: Sector dominated by 3 customer segments behaves differently than sector with long tail.
- **Overcomplicating**: 5-factor frameworks × 20 companies × 3 timeframes = analysis paralysis. Keep it actionable.
- **Missing substitutes**: Your company may lose to something not in the direct-competitor set.

## Sector Archetypes

Recognize common sector patterns:

- **Winner-takes-most platform**: Network effects → one dominant. Social, some marketplaces.
- **Stable oligopoly**: Few big, protected by scale + switching costs. Enterprise ERP, networks.
- **Fragmented + consolidating**: Many small, rolling up via M&A. Many vertical SaaS, services.
- **High-growth expansion**: Category growing 30%+; new entrants + incumbents both win for a while.
- **Commoditizing**: Growth slowing, margins compressing, price competition. Mature SaaS, infrastructure.
- **Disrupted**: Incumbent losing to new technology / model. Legacy CRM → SaaS era; on-prem → cloud era.
- **Pre-disruption**: Looks stable but has vulnerabilities a startup could exploit.

Identifying archetype informs thesis. Winner-takes-most → bet on emerging leader. Stable oligopoly → value/quality stocks. Fragmented → bet on consolidator. High-growth → beta bet on category leader.

## Related

- [Equity Research Framework](../equity-research-framework/SKILL.md) — thesis sits inside sector context
- [Reading 10-K / 10-Q](../reading-10k-10q/SKILL.md) — filings reveal company + sector data
- [Earnings Call Analysis](../earnings-call-analysis/SKILL.md) — competitive mentions + market-size claims
- [Valuation: DCF & Comps](../valuation-dcf-comps/SKILL.md) — peer selection + relative valuation
- [Content Publishing](../content-publishing/SKILL.md) — sector takes = compelling content
