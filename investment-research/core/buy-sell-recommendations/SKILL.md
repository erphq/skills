---
name: buy-sell-recommendations
description: This skill should be used when an agent is publishing actionable buy / sell / hold calls on specific stocks — translating a research thesis into a recommendation a portfolio manager can act on, with conviction tiers, price targets, sizing logic, and the discipline to update or kill the call.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  concept: investment-research
  type: skill
  scope: internal
---
# Buy / Sell Recommendations

## What This Skill Does

A research thesis without a recommendation is a paper, not work. This skill is the discipline of turning research into an actionable view: **buy, sell, hold, or no view** on a specific stock, with the conviction tier, price target, sizing logic, and exit triggers attached. The output is something a portfolio manager can put into a position the same morning. The same skill governs how you maintain the call — what makes you upgrade, downgrade, or kill the recommendation, and how often.

Most published research is buy-rated and never gets killed. That is a discipline failure, not a market signal. This skill exists to fix it.

## The Recommendation Itself

Every recommendation carries six fields. Anything less and it's a tweet, not a call.

### 1. Action

One of: **Buy · Add · Hold · Trim · Sell · Avoid**.

- **Buy** — opening a new position. The stock is below your entry threshold and the thesis is fresh.
- **Add** — adding to an existing position. The stock has moved in your favour but conviction has gone up faster than the price.
- **Hold** — keeping the position you have. Risk/reward symmetric or trending; no edge to act on.
- **Trim** — reducing an existing position. Thesis intact but price is bumping against your fair value.
- **Sell** — closing the position fully. Thesis broken, or price above fair value with no path higher.
- **Avoid** — explicit "don't buy" call on a name your audience is asking about. Often the most useful recommendation; rarely written.

Avoid "Outperform / Market Perform / Underperform." Those are sell-side cover language. Real recommendations say what to do today.

### 2. Conviction tier

One of: **High · Medium · Low**.

- **High**: you've stress-tested the thesis with an explicit bear case and it survived. You'd put 5%+ of book on this. Edge is durable for at least 12 months.
- **Medium**: the thesis is plausible and well-evidenced but has a single dominant risk that could break it. Position-sizing reflects that — 2–4%.
- **Low**: a research-rich call with limited edge, or a high-edge call where you don't yet have the evidence to defend it. Sub-2% positions or watchlist-only.

A book full of "high conviction" calls is a book of mediocre research. Calibrate honestly. If everything you publish is high conviction, you are using the tier as a marketing label, not a calibration tool.

### 3. Position size

A range, in % of book. **High = 5–8% · Medium = 2–4% · Low = 0.5–1.5%**. Adjust for liquidity and volatility:

- **Liquidity** — daily volume / your position. If you can't liquidate in three trading days at <50bps slippage, halve the size.
- **Volatility** — 30-day realised vol relative to the index. Vol > 2x index? Halve again. Treat sizing as a constraint, not a vibe.

### 4. Price target

A specific number, with a timeframe (12-month base, 18-month for less liquid). Built bottom-up from a valuation framework:

- **Multiple-driven** — pick the comp multiple, justify why it should re-rate, apply to forward earnings/EBITDA/sales.
- **DCF-driven** — for compounders or long-duration assets where multiples mislead.
- **Asset-driven** — for distressed, financials, or break-up situations where book value or sum-of-parts dominates.

Always show three scenarios: **bull, base, bear**. The base case is the price target. The spread between bull and bear tells you the conviction story:

- Tight spread, base above current price → high-conviction buy.
- Wide spread, base above current price → cheap option but size accordingly.
- Base below current price → don't issue a buy regardless of how much you like the company.

### 5. Exit triggers

The two or three things that, if observed, mean you change the call. Written upfront, not after the fact.

Examples:

- "Sell if Q3 NRR drops below 110%."
- "Trim if the stock crosses $X without an earnings beat."
- "Re-rate to High Conviction if they announce the EU rollout on the next call."

Triggers turn a recommendation into a decision rule. Without them, the call drifts: every quarter the analyst finds a reason to "stay constructive" and the recommendation never changes.

### 6. Time horizon

How long you intend to hold. **Short (≤6mo) · Medium (6–18mo) · Long (>18mo)**. Tells the reader what kind of risk-taking they're signing up for. A 24-month thesis being judged on 30 days of price action is a setup for a bad decision.

## Building Conviction

### Stress-test against the bear case

For every buy, write the bear case in two paragraphs. Not the disclosure-style "risks include market conditions" boilerplate — the actual worst-case story:

- Top-line: revenue decelerates from 30% to 10% over six quarters because [specific reason].
- Margins: gross margin compresses from 75% to 65% because [specific reason].
- Multiple: the market re-rates from 12x to 6x revenue because growth no longer justifies it.
- Resulting price: $X. That is your bear-case anchor.

If the bear case has the stock 50% below today's price, your "high conviction buy" is actually a high-variance bet. Size it accordingly.

### Find the variant view

A recommendation is only useful if it disagrees with consensus on something specific. Identify it:

- **Earnings**: your forward number is meaningfully different from the sell-side consensus.
- **Multiple**: you think the multiple should re-rate; consensus thinks it stays here.
- **Catalyst timing**: you think the catalyst lands in 2027; consensus assumes 2028.
- **Cycle position**: you think we're early-cycle; consensus thinks we're mid.

If you can't write the variant view in one sentence, your recommendation is consensus and the edge is illusory.

### Triangulate the evidence

Three independent lines of evidence per major claim. Channel checks (talking to customers, partners, suppliers), data scrapes (job postings, web traffic, app store ranks), and primary docs (earnings transcripts, 10-Ks, conference presentations). One line is anecdotal; three lines is a finding.

If two lines disagree, do not pick the one you like. Investigate. Most thesis-breaking discoveries happen at this step.

## Maintaining the Recommendation

### Quarterly update — mandatory

Every quarter, every active recommendation gets a one-page note:

- **What happened**: revenue, margins, NRR, key metrics vs your model.
- **Thesis check**: which exit triggers fired? Which got closer? Which faded?
- **Action**: maintain / upgrade / downgrade / kill. Pick one explicitly. "Maintain" is a decision; you have to defend it.

### Kill the call when the trigger fires

The trigger is not a suggestion. If you said "sell if Q3 NRR drops below 110%" and it does, you sell. The whole point of writing triggers down is to override the analyst's instinct to rationalise.

Kill calls are professional capital. The analysts who write the most kill calls are usually the ones with the longest careers. The analysts who never kill are the ones who quietly accumulate dead names and lose credibility one quarter at a time.

### Anchor honesty check

Every six months, look at every active buy and ask: "If I had a flat book today and were starting from scratch, would I buy this?" The names where the answer is no but you're holding because you bought at $X — those are anchors, and they're stealing your sizing.

## Common Errors

- **Recommendation creep.** A "Hold" silently becomes a "Maintain Buy" because nobody renamed it when the price ran. Restate the action explicitly each quarter.
- **Anchoring on entry price.** "I'm not selling here, my cost basis is $50." Your cost basis is irrelevant. The market doesn't know it.
- **Sunk-cost research.** "I spent four months on this name, I'm not killing it." The four months are gone whether you publish a kill or not. Holding a bad call doesn't recover the time.
- **Variant view that isn't actually variant.** "I'm bullish because the company is well-positioned in a growing market." That is consensus. Variant means "the consensus number is X, mine is Y, and here's why."
- **Sizing detached from conviction.** Issuing a 5% position on a Low-conviction call because you "want exposure." Either it's High and 5% is right or it's Low and 0.5% is right.
- **Targets that drift up with price.** Raising the price target every time the stock rallies, then claiming the call is working. That is reverse-justification, not analysis.
- **No exit triggers.** A recommendation without exit triggers will never get killed. That is the actual definition of a bad call.

## Related

- [equity-research-framework](../equity-research-framework/SKILL.md) — the underlying research process every buy/sell call sits on top of.
- [valuation-dcf-comps](../valuation-dcf-comps/SKILL.md) — for building the price target the call is anchored on.
- [reading-10k-10q](../reading-10k-10q/SKILL.md) — for the primary-doc evidence that triangulates the thesis.
- [earnings-call-analysis](../earnings-call-analysis/SKILL.md) — for the quarterly update cadence.
- [content-publishing](../content-publishing/SKILL.md) — for getting the recommendation in front of the audience that needs it.
