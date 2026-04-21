---
name: earnings-call-analysis
description: This skill should be used when analyzing a company's earnings call — extracting signal from prepared remarks, analyst Q&A, guidance, management tone, and what was asked vs what was answered vs what was dodged.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  concept: investment-research
  type: skill
  scope: internal
---
# Earnings Call Analysis

## What This Skill Does

Earnings calls are **the single richest quarterly signal** on a public company. 60–90 minutes of prepared remarks + live Q&A reveal management's view of the business, their understanding of the numbers, their confidence in forward guidance, what they're proud of, what they're defensive about, and — often — what they're hiding. This skill is how to extract that signal efficiently.

Calls happen the day of (or day after) the quarterly earnings release. The release + 10-Q + call together make up the quarterly information set. The call specifically is the channel for management narrative + analyst pressure-testing.

## Call Structure

Standard structure:
1. **Safe-harbor statement** (boilerplate) — 1 min
2. **Prepared remarks from CEO** — 10–20 min — strategic narrative + headline results
3. **Prepared remarks from CFO** — 10–20 min — financial detail + guidance
4. **Analyst Q&A** — 30–60 min — most useful segment
5. **Closing remarks** — 2 min

Access via: company investor-relations website, SEC EDGAR (8-K with earnings release), financial data platforms (FactSet, Refinitiv), transcription services (Seeking Alpha, Motley Fool — often free), or AI-processed archives (AlphaSense, Koyfin).

## Signal Extraction by Call Section

### Prepared Remarks

The prepared remarks are **scripted and polished**. They've been reviewed by IR, legal, comms, and rehearsed. Direct signal is limited. But patterns matter:

- **What's led with**: First 60 seconds of CEO remarks = what management wants you to think about. If they lead with revenue growth and skip profitability, they're selling growth. If they lead with margin expansion, they're selling leverage. If they lead with customer metrics, they're selling retention narrative.
- **What's buried**: Where does bad news sit in the narrative? Late in CFO comments, with qualifiers ("I'd like to note"), explaining weaknesses in specific segments.
- **New metrics introduced**: New KPI appearing = either strategic evolution or deflection from a weakening old metric. If they introduced "customers over $1M ARR" this quarter but stopped talking about NRR, NRR is weakening.
- **Metrics dropped**: Previously-emphasized metric absent = usually deteriorating. Note + question.
- **Tone markers**: Confident vs hedged language. "We are pleased to report" vs "We were encouraged by continued progress." Compare to prior quarters.
- **Forward-looking emphasis**: If most of remarks are backward-looking celebrating the quarter, they may be less confident about forward quarters.

### CFO Financial Review

- **Revenue quality**: Organic vs inorganic growth split. FX impact. Key segments / products breakouts. Any unusual items.
- **Margin drivers**: GPM, operating margin changes year-over-year + quarter-over-quarter. Commentary on cost structure + investments.
- **Below-the-line items**: Tax rate volatility (non-ongoing), other income/expense, stock-based compensation volume + characterization.
- **Cash flow**: Operating cash flow, free cash flow, working capital dynamics. Cash flow quality vs earnings.
- **Guidance**: Full-year + next-quarter. Revenue, margin, FCF ranges. Updated vs prior guidance.
- **Balance-sheet moves**: Buybacks, dividends, M&A capacity, debt changes, cash evolution.

### Q&A

**This is where the signal lives**. Sellside analysts ask pointed questions; management's responses reveal what they really believe + what they're deflecting. Patterns to watch:

**Who asks what, who's bearish, who's bullish**:
- Favored analysts ("Hi [first name], congrats on the great quarter") often get softballs
- Skeptical analysts ask probing questions; management responses often strained
- Note if a question got evasive answer vs direct

**Answer quality dimensions**:
- **Direct specific answer**: "Yes, growth in the segment was 28%, driven by X and Y." High signal.
- **Topic pivot**: Analyst asks about margin in segment A, CEO answers about overall growth. Low signal; they're deflecting.
- **"We don't disclose that"**: Often legitimate (competitive sensitivity), sometimes hiding.
- **Verbose evasion**: Long answer without actually answering. Very common signal of avoidance.
- **Apparent forgetfulness / handoff**: "I'll let [CFO] take that" → CFO gives vague answer → both apparently unprepared on specific metric = thesis-relevant weakness.
- **Defensive posture**: Pushing back hard on analyst assumption. Could be justified or could be protest-too-much.

**Specific signals to catch**:
- **Guidance walk**: How management justifies the specific guidance range. What's in vs what's out. Conservative assumption or optimistic.
- **"Bookings" vs "revenue"**: Any decoupling = critical to understand (could signal revenue shift, channel stuffing, timing).
- **Deferred revenue / RPO (remaining performance obligations)**: Leading indicator for SaaS revenue. Growing faster than revenue = bullish; slower = bearish for out-quarters.
- **Competitive mentions**: Management occasionally addresses specific competitors. Defensive on competitor = they see real threat.
- **Customer concentration references**: "One large customer" references often signal lumpiness or concentration risk.
- **Regulatory / legal**: Hedged language around ongoing matters.
- **Capital allocation**: Buyback pacing, M&A commentary, dividend changes.

### Closing Remarks

Usually brief thanks. Sometimes a final strategic emphasis ("We remain committed to..."). Tells you what management wanted to leave you thinking about.

## Extraction Workflow (90 minutes per call)

1. **Pre-call (5 min)**: Review prior call transcript (your notes or full). What was management saying last quarter? What did they guide to?
2. **Live or transcript-first pass (30 min)**: Read full transcript. Note structure. Highlight anything new, changed, dodged, interesting.
3. **Financial comparison (15 min)**: Reported numbers vs guidance vs consensus (FactSet, Bloomberg). How did they beat/miss each line? Organic vs inorganic? Any reclassifications?
4. **Q&A deep-dive (30 min)**: Walk through Q&A. Note question-answer quality per exchange. What was asked that wasn't well-answered? Topics that recurred? Skeptical analysts + what they pressed on.
5. **Synthesize (10 min)**: What's your updated view? What confirmed thesis, what challenged it, what opened new questions, what's your new stance?

Output: ~1-page quarter-review note, feeding into the overall thesis.

## Guidance Analysis

Guidance is **management's quarterly bet on themselves**. Pattern-of-guidance-hits reveals management integrity + business visibility.

- **Conservative beat-and-raise pattern**: Every quarter they beat guidance + raise next quarter. Management is sandbagging (common, acceptable) or accelerating (bullish).
- **Missing guidance**: Big red flag. Investigate why — one-time (defensible) or systemic (bearish).
- **Guidance range width**: Wide range = low visibility. Narrowing range = higher confidence.
- **Guidance withdrawal**: Crisis signal. Economic shock, material business disruption.
- **Specific-to-generic shift**: Management moving from "Revenue will be X–Y" to "We expect growth in the range of prior commentary" = visibility decreasing.

## Management Dimensions

Over multiple calls, calibrate on:
- **Integrity**: Do they say what they mean? Commitments followed through?
- **Clarity**: Do they explain well? Or is it word-salad?
- **Business grip**: Do they know their numbers cold? Or fumble basic metrics?
- **Strategic consistency**: Have they stuck to a strategic narrative or shift every 2 quarters?
- **Humility vs arrogance**: Acknowledge weaknesses or always cheerleading?

Over 4–8 calls you form a strong view of the management team. Weight future commentary accordingly.

## Common Mistakes

- **Reading only the headline results**: The press release gives you numbers; the call gives you context. Both required.
- **Skipping Q&A**: Q&A has more signal than prepared remarks. Read it.
- **Not comparing to prior guidance**: Beating / missing matters only in context of what was promised.
- **Accepting management interpretation**: If growth decelerates and management explains it as "tough comps," validate independently.
- **Under-weighting tone**: Nervousness / confidence / defensiveness are real signals.
- **Ignoring the CFO's role**: CFO often more candid than CEO — closer to numbers, lower public profile.
- **Missing sell-side analyst dynamics**: Some analysts have sponsorship relationship with company; discount their commentary.

## Red Flags (from Q&A and tone)

- **CFO unable to answer specific question**: Serious concern about information quality.
- **Management + analyst tension**: Recurring sharp questions + defensive answers.
- **Guidance pulled last-minute**: Significant business uncertainty.
- **Accounting policy change discussed ambiguously**: Potentially material accounting issue.
- **"One-time" items every quarter**: Everything is one-time until it's every quarter.
- **CFO introduces new non-GAAP metric**: Deflection from GAAP deterioration.
- **"Pipeline" / "demand" hedges**: "Pipeline looks good" in every call = meaningless. Specific pipeline data is signal.
- **Regulatory / legal evasion**: Hedged responses to specific regulatory questions.

## Output — Quarterly Note

Per company, per quarter:
1. **Headline financials vs consensus vs guidance** (3-column table)
2. **Key drivers of beat/miss**
3. **Guidance update** + your assessment (conservative/aggressive)
4. **Management commentary highlights + concerns**
5. **Q&A takeaways** (2–4 bullets)
6. **Thesis update** — confirming, challenging, or status-quo

Feeds into updated thesis; preserves history across quarters.

## Related

- [Equity Research Framework](../equity-research-framework/SKILL.md) — calls feed the ongoing thesis
- [Reading 10-K / 10-Q](../reading-10k-10q/SKILL.md) — 10-Q accompanies the quarterly call; reconciliation important
- [Valuation: DCF & Comps](../valuation-dcf-comps/SKILL.md) — guidance feeds valuation models
- [Competitive Landscape](../competitive-landscape/SKILL.md) — competitive mentions on calls refine sector map
- [Content Publishing](../content-publishing/SKILL.md) — earnings reactions = primary content drop
