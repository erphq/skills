---
name: equity-research-framework
description: This skill should be used when building an equity-research thesis on a specific company — the structured process for going from "this company looks interesting" to a defensible view (bull, bear, or neutral) with supporting evidence, valuation context, and explicit risks.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  concept: investment-research
  type: skill
  scope: internal
---
# Equity Research Framework

## What This Skill Does

This is the **scaffolding for building a research view on any public company**. Given a company + some initial interest, it walks through the steps to land on a thesis that's defensible, evidence-based, and clearly opinionated. Without a framework, research becomes "I read the 10-K and I like them" — which doesn't convince anyone and won't hold up when the stock moves against you.

The framework has five pillars: **Business** (what they actually do and how they make money), **Industry** (structural dynamics, competition, secular tailwinds/headwinds), **Financials** (profitability, growth, capital efficiency), **Valuation** (what you're being asked to pay relative to what you're getting), and **Risks** (what breaks the thesis). A finished thesis covers all five.

## The Framework

### 1. Business

- **What do they sell, and to whom?** Be specific. "They sell software" is useless; "They sell cloud-native HR systems to mid-market enterprises (500–5,000 employees) in North America, primarily" is useful.
- **Revenue model**: Subscription? Transaction? Services? Hardware + service? Mix? For each line, what's the unit (per-seat, per-transaction, per-consumption)?
- **Customer concentration**: Top 10 customers as % of revenue. >20% = concentration risk. <10% = diversified.
- **Geography**: US / international mix. FX exposure.
- **Go-to-market**: Direct sales, channel, self-serve, mix. Changes in GTM often predict margin trajectories.
- **Product strategy**: Single-product company, platform strategy, suite strategy. Platform plays have higher NRR ceiling; single-product exposed.
- **Moat**: What keeps competitors out? (Network effects, switching costs, proprietary data, regulatory, brand, scale economics). Rate moat 1–5.

### 2. Industry

- **Market size**: TAM + growth rate. Source the number (analyst reports, company disclosures) rather than accept management claims.
- **Structure**: Monopoly / oligopoly / fragmented. Who are the #1, #2, #3 players + share?
- **Secular tailwinds/headwinds**: Is the pie growing? Is the share distribution changing? New entrants? Technology shifts? Regulatory shifts?
- **Customer-side dynamics**: Are buyers consolidating or fragmenting? Increasing budget or shrinking?
- **Value-chain position**: Where in the stack does this company sit? Upstream of commoditization? Or being commoditized from below?

### 3. Financials

- **Growth**: Revenue growth rate, organic vs inorganic (acquired). NRR (if applicable), GRR, ARR waterfall. Growth decelerating vs accelerating.
- **Profitability**: Gross margin (GAAP + non-GAAP + operating). Operating margin + FCF margin. Rule-of-40 (growth + FCF margin ≥40%) for SaaS.
- **Unit economics**: CAC payback. LTV/CAC. Contribution margin per customer cohort.
- **Capital efficiency**: FCF conversion from earnings. ROIC. Incremental margins (each $ of new revenue drops to how much operating income?).
- **Balance sheet**: Cash, debt, debt-to-EBITDA, liquidity runway.
- **Cash flow**: Operating cash flow, CapEx, working capital trends. Distinction between GAAP earnings (noisy) and cash (what actually accrues to shareholders).

### 4. Valuation

- **Multiples**: EV/Revenue, EV/EBITDA, P/E (when applicable), P/FCF. Compare to sector peers and historical range.
- **DCF sanity check**: Rough DCF with conservative assumptions. Where does it say "fair value"?
- **Growth-adjusted**: PEG-like for growth stocks, rule-of-40 for SaaS. EV/Revenue ÷ (growth % + FCF margin %) = "scorecard score".
- **What does the market imply?** If stock trades at 8× EV/Revenue for 20% grower with 25% FCF margin, what's the implied growth trajectory the market's pricing?
- **Scenario valuation**: Bull case (e.g., 10% organic growth × 30% margin expansion → $120), base ($80), bear ($50). Current price vs bear defines downside.

### 5. Risks

- **Business risks**: Customer concentration, product obsolescence, key-person risk, competitive disruption.
- **Industry risks**: TAM smaller than claimed, competitive intensity increases, customer budget cycle.
- **Execution risks**: Management has history of missing guides, integration problems on acquisitions, culture/talent risk.
- **Financial risks**: High leverage, going-concern issues, dilution from stock comp, need to raise capital.
- **Macro risks**: FX, rates, recession sensitivity, geopolitical.
- **Thesis-breaking events**: What specific event would invalidate your thesis? Write it down. If that event happens, you exit.

## The Research Flow

1. **Initial screen (1 hour)**: Quick read of company website, latest 10-K summary, latest earnings call transcript summary. Decide if worth deeper dive.
2. **Deep dive (4–8 hours)**: Full 10-K + last 4 10-Qs + last 4 earnings calls. Competitive mapping. Customer + partner interviews if accessible. Management's published strategy.
3. **Financial modeling (2–4 hours)**: Build or refresh a 3-statement model. Project 3–5 years forward. Run scenarios.
4. **Thesis write-up (2–3 hours)**: Distill into a 1–3 page thesis covering the 5 pillars + your conclusion + risks + invalidation triggers.
5. **Pressure test**: Show to a peer. They pick it apart. You respond. Thesis survives or dies.

## What Good Looks Like

A good thesis has these properties:
- **Differentiated view**: Your conclusion differs from consensus by something specific. If your view = consensus, you add no value.
- **Evidence-backed**: Every claim has a source (10-K, earnings call quote, data). No vibes.
- **Scenario-aware**: You've modeled upside + downside, not just base case.
- **Risk-honest**: You've listed what breaks your thesis, not hidden it.
- **Falsifiable**: Stated in a way that could be proved wrong. "I think they'll grow 25% next year; if they grow <15%, I'm wrong."
- **Actionable**: Clear verdict (long / short / pass / wait-for-X).

## What Bad Looks Like

Avoid these thesis patterns:
- **"Great company, great product"** — no valuation, no risk, no specifics. Cheerleading, not research.
- **Pure chart / price action** — momentum is not a thesis.
- **Second-hand conviction** — "Stan Druckenmiller bought it" is not a thesis.
- **Confirmation-bias writeup** — only evidence supporting view, no counter-arguments considered.
- **No invalidation trigger** — impossible to be wrong. Dangerous.
- **Too many numbers, no story** — a spreadsheet without a narrative is not useful.
- **Story with no numbers** — narrative without financials is entertainment.

## Common Mistakes

- **Skipping the business stage**: Jumping to financials without really understanding what they sell. Leads to inexplicable misses.
- **Model-driven conclusion**: Building spreadsheet first, then reverse-engineering narrative. Starts with a conclusion; isn't research.
- **Ignoring management integrity**: Past guidance accuracy, insider selling patterns, related-party transactions all matter.
- **TAM worship**: "$100B TAM" cited without source. Big claimed TAMs are usually optimistic.
- **Accepting narrative at face value**: Management tells a story; good researcher validates with data.
- **Anchoring on prior research**: Did a thesis 2 years ago at $40, stock now $80, you still think it's cheap "because I said so then." Re-anchor.

## Output — The Thesis Document

Target 1–3 pages. Structure:

1. **Verdict** (one sentence — long/short/pass/wait + key reason)
2. **Business in one paragraph** (what, who, how they make money, moat)
3. **Industry context** (market structure, tailwinds/headwinds, position)
4. **Financial highlights** (key metrics + what they say)
5. **Valuation + scenarios** (multiples, DCF, bull/base/bear)
6. **Risks** (2–5, with severity rating)
7. **Invalidation triggers** (what events force thesis revision)

## Related

- [Reading 10-K / 10-Q](../reading-10k-10q/SKILL.md) — primary-source financial data
- [Earnings Call Analysis](../earnings-call-analysis/SKILL.md) — management commentary + signal extraction
- [Valuation: DCF & Comps](../valuation-dcf-comps/SKILL.md) — multiples + intrinsic-value methods
- [Competitive Landscape](../competitive-landscape/SKILL.md) — sector + competitive mapping
- [Content Publishing](../content-publishing/SKILL.md) — turning thesis into published commentary
