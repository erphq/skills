---
name: valuation-dcf-comps
description: This skill should be used when valuing a public company using DCF (intrinsic value) + comparables (relative value) methods — the practical mechanics of building defensible valuation ranges, avoiding the traps that make models outputs-are-inputs exercises, and triangulating to an actionable price view.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  concept: investment-research
  type: skill
  scope: internal
---
# Valuation: DCF & Comps

## What This Skill Does

This is **how to put a defensible value on a company** — one you'd anchor a thesis around. Not a spreadsheet exercise; a reasoning exercise backed by a spreadsheet. The two methods (DCF + comps) triangulate to a value range; neither is sufficient alone. A DCF alone is too assumption-sensitive; a comps alone ignores business-specific economics.

Good valuation is **scenario-aware** (bull / base / bear), **assumption-explicit** (every important number has a source + a sensitivity), and **reconciled** (DCF + comps land in similar range, or you explain the divergence).

## Part 1 — Discounted Cash Flow (DCF)

### Core idea

Company value = present value of all future free cash flows (FCF), discounted at the company's cost of capital. It's an intrinsic-value method — in theory, independent of what "the market" is paying.

### The recipe

1. **Project FCF for 5–10 years**. Revenue × margins → EBIT → taxes → D&A adj → CapEx → WC changes → FCF.
2. **Calculate terminal value** (Year N+1 onward). Two methods: perpetuity growth (FCF × (1+g) / (WACC − g)) or exit multiple (FCF × terminal multiple).
3. **Discount** each year's FCF + terminal value back to today using WACC.
4. **Sum** = enterprise value. Subtract debt + add cash = equity value. Divide by shares = per-share intrinsic value.

### Where DCFs go wrong

- **Garbage revenue projections**: Projecting 25% growth for 10 years without business rationale. Growth rates tail down to a sustainable level — apply that math.
- **Magical margin expansion**: Assuming operating margin goes from 15% to 40% over 5 years without mechanism. Margins don't magically expand; mechanism required (operating leverage, mix shift, pricing power).
- **Too-low WACC**: Cherry-picking a low discount rate to make value higher. Use market-observable inputs: risk-free rate (10Y treasury), equity risk premium (5–6%), company-specific beta.
- **Terminal value tail-wagging-dog**: 70–85% of DCF value commonly comes from terminal value. Small change in terminal assumptions → huge value change. Cross-check terminal multiple implied.
- **CapEx + WC too low**: Understating capital intensity inflates FCF and therefore value.
- **Ignoring stock-based compensation**: SBC is a real cost; treat as cash expense in FCF (increasingly standard approach).

### Sanity-check constraints

- **Terminal growth ≤ GDP growth** (~2–3% in developed economies). Higher = company eventually becomes larger than the economy. Impossible.
- **Implied terminal multiple reasonable**: Value your terminal year, compute implied EV/EBITDA or EV/FCF. If terminal EV/EBITDA = 40× (high), skeptical. If 8× (reasonable), more defensible.
- **Intermediate year multiples trending down**: Even if terminal multiple OK, year 3–7 multiples imply a path. If year 5 multiple = 30× (high), scrutinize.
- **Implied returns on capital**: ROIC should converge toward WACC over time (competitive equilibrium). Persistent ROIC >> WACC = durable moat (rare, defend it explicitly).

### WACC math (quick reference)

WACC = (E/V × Re) + (D/V × Rd × (1 − T))

where:
- Re (cost of equity) = Rf + β × (Rm − Rf). Typical: Rf ≈ 4.5%, (Rm − Rf) ≈ 5%, β varies 0.7–1.5. Re typical range 8–12%.
- Rd (cost of debt) = current debt yield or observable corporate bond yields adjusted for credit.
- T = marginal tax rate (~25% US corp typical).
- Capital structure: book or market weights; prefer market.

For most SaaS / tech companies, WACC in 9–11% range is defensible.

### DCF scenarios

Always run three:
- **Bear**: Revenue grows at lower bound, margins don't expand, exit multiple compressed.
- **Base**: Your central case, business-reasoned.
- **Bull**: Revenue beats, margins expand per operating leverage, multiple maintained.

Each scenario → per-share value. Range defines "fair value" zone. Current price vs bear = downside; vs bull = upside.

## Part 2 — Comparables (Comps)

### Core idea

Value company relative to what market pays for similar businesses. More market-anchored, less assumption-heavy. Best when you have a true peer set.

### Multiples by company stage

- **High-growth SaaS (30%+ growth)**: EV / NTM Revenue. Sometimes "Rule of 40" scorecard.
- **Mature SaaS (15–30% growth)**: EV / NTM Revenue + EV / NTM EBITDA.
- **Profitable scale SaaS (<15% growth)**: EV / EBITDA, P/E, FCF yield.
- **Non-software cash flow businesses**: EV / EBITDA, P/E, Dividend yield, EV / FCF.
- **Financials**: P/Book, ROE.

### Peer selection

- **Strict peers**: Same business model, similar size, similar stage. Rare to find 5 strict peers; aim for 3–5.
- **Broader comps**: Different business model but same sector dynamics. Widen if strict peers insufficient.
- **Acquired peers**: M&A transaction multiples (e.g., Splunk → Cisco at 2.9× NTM revenue at announcement). Reveals what strategic acquirers pay.
- **Avoid**: Different-stage companies (early-stage vs mature), different geography (except when acknowledging geographic premium), different business model.

### How to use

1. Build peer table: EV, Revenue TTM + NTM, EBITDA TTM + NTM, Growth rate, Operating margin, FCF margin.
2. Compute multiples (EV/Revenue NTM primarily for growth companies).
3. Plot your target company's multiple vs peer distribution. Is it premium, discount, or middle?
4. Justify the relative position (why does it deserve premium or should trade at discount?).
5. Apply median / peer-adjusted multiple to your target company's NTM revenue → implied value.

### Comps scenarios

- **Current multiple × consensus NTM revenue** = market-implied value (should equal current stock price approximately).
- **Target multiple × your NTM revenue estimate** = your comps-based value.
- **Multi-scenario**: Peer group premium (if you're bullish on them) vs discount (bearish).

### Comps traps

- **Peer set manipulation**: Choose a favorable peer set to get a desired answer. Stable + consistent peer set matters.
- **Growth-adjusted anchoring**: Company growing 15% at 5× revenue vs peer growing 30% at 8× — is the slower-growth company cheaper? Not necessarily; growth-adjusted they may be equivalent.
- **NTM revenue estimate divergence**: Your NTM revenue vs consensus. If you diverge from consensus, acknowledge it + defend it.
- **FX + regional adjustments**: Cross-border peers require FX normalization.
- **Outliers skewing**: One peer trading at extreme multiple distorts median. Use medians, trim outliers, think about why.
- **Using historical averages uncritically**: 5-year historical average multiple when sector has re-rated.

## Part 3 — Triangulation

DCF alone: useful but assumption-heavy. Comps alone: market-anchored but ignores company economics. Together: range of values bounded by both.

Process:
1. DCF base case → per-share intrinsic value.
2. Comps base case → per-share relative value.
3. Compare. If within 10–20% of each other, valuation range is defensible.
4. If very divergent, understand why. Common:
   - DCF > Comps: You think company deserves premium (moat, growth duration) market isn't pricing.
   - DCF < Comps: Market is paying up for growth beyond what DCF supports. Could be right or bubble.
5. Your central value = reconciled. Your range = bounded by bull DCF + bear DCF + bull comps + bear comps.

## Output — Valuation Module

Two-page addendum to thesis document:

**Page 1**:
- DCF summary: revenue growth assumptions by year, margin progression, WACC, terminal, per-share intrinsic value
- Scenario table: bull / base / bear — assumptions + output

**Page 2**:
- Peer table (5–8 peers with full multiple grid)
- Target company vs peers commentary
- Comps-based valuation: current + target multiple × your revenue estimate
- Triangulation: DCF + comps → central value + range
- Current stock price vs your range → verdict (cheap / fair / expensive)

## Common Mistakes

- **Output-is-input**: Adjust assumptions until model outputs your desired answer. Not valuation, motivated reasoning.
- **False precision**: "Intrinsic value = $87.42." Quote a range. $80–$95.
- **Ignoring sensitivity**: Which assumption drives the answer? Revenue growth? Terminal multiple? Test by flexing.
- **Single-method**: DCF-only or comps-only. Weaker.
- **Outdated inputs**: WACC from 2 years ago when rates have moved significantly.
- **Non-GAAP-driven**: Valuing off aggressive non-GAAP earnings without adjusting back toward GAAP reality. SBC especially.
- **Multi-business aggregation**: Conglomerate valued at single multiple obscures segment-level value. Consider sum-of-the-parts.
- **Not considering sum-of-the-parts (SOTP)**: Some companies worth more in pieces than consolidated. Obviously when parts could be sold separately.

## Advanced: Sum-of-the-Parts

When a company has multiple distinct business lines with different economics (e.g., high-growth cloud segment + mature on-prem segment), value each separately + sum:
1. Segment revenue + margin estimates
2. Segment-specific multiple (cloud segment gets SaaS multiple; on-prem gets mature-software multiple)
3. Add EV by segment → total enterprise value

SOTP reveals hidden value OR hidden liability. Useful for companies trading at "conglomerate discount" + for breakup speculation.

## Related

- [Equity Research Framework](../equity-research-framework/SKILL.md) — valuation sits inside the framework
- [Reading 10-K / 10-Q](../reading-10k-10q/SKILL.md) — primary source for historical financials + balance sheet
- [Earnings Call Analysis](../earnings-call-analysis/SKILL.md) — guidance feeds forward assumptions
- [Competitive Landscape](../competitive-landscape/SKILL.md) — sector context drives peer selection
