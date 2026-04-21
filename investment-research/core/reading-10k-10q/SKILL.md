---
name: reading-10k-10q
description: This skill should be used when extracting signal from SEC filings (10-K annual report, 10-Q quarterly report, 8-K material events, proxy statements) — the sections that matter, the red flags that surface, the metadata that reveals what management is and isn't saying.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  concept: investment-research
  type: skill
  scope: internal
---
# Reading 10-K / 10-Q

## What This Skill Does

This is **how to read an SEC filing efficiently** and extract the information that matters for research. A 10-K can be 200+ pages; 80% of the signal is in 20% of the sections. Knowing which sections, what to look for, and what the patterns reveal is the difference between useful research and wasted time. 10-Q (quarterly) is shorter but contains fresher data; 10-K (annual) is comprehensive but can be 12 months stale on forward-looking context.

Filings are accessed via [SEC EDGAR](https://www.sec.gov/edgar/searchedgar/companysearch.html) (free, primary source) or via brokerage platforms (convenient but sometimes lagging). Always verify claims against EDGAR for anything material.

## What's in a 10-K (in reading order of importance)

### Must-read sections (80% of the value)

**Item 1 — Business**: Where the company describes what they do, who customers are, competitive landscape, employees, seasonality. Read this first every year even if you know the company — changes year-over-year reveal strategic shifts.

**Item 1A — Risk Factors**: Everything that could go wrong, in the company's own words. Read every year — new risks appearing signal concerns; risks being removed signal resolution (rare) or deflection. Ignore the boilerplate ("our stock price may be volatile"); focus on the company-specific ones.

**Item 7 — MD&A (Management Discussion & Analysis)**: Management's narrative on the financials. How management explains variance, what they highlight, what they gloss over. Compare MD&A year-over-year: does the story change? Are metrics emphasized this year that weren't last?

**Item 8 — Financial Statements + Footnotes**: The numbers + footnotes. Footnotes are where the real information is — accounting policies, segment disclosures, deferred revenue, commitments, contingencies, subsequent events, revenue recognition policy specifics. Spend 2–3× time on footnotes vs the primary statements.

**Item 11 (via Proxy) — Executive Compensation**: Not in 10-K but in the Proxy (DEF 14A) filed separately. CEO + top executive compensation structures reveal what management is incentivized to do (revenue growth vs margins vs stock price vs ESG vs specific strategic metrics).

### Should-read sections (supplementary value)

**Item 2 — Properties**: Real estate. Growing office footprint signals growth; massive footprint (retail, restaurants) reveals capital intensity.

**Item 3 — Legal Proceedings**: Material lawsuits. Sometimes benign (routine); sometimes thesis-breaking (patent infringement, securities fraud).

**Item 5 — Market for Common Equity**: Dividend history, share repurchases, registered stockholders. Buyback cadence reveals capital allocation policy.

**Item 7A — Quantitative & Qualitative Market Risk Disclosure**: Interest rate exposure, FX, commodity exposure. Often more forthcoming than elsewhere.

**Item 9A — Internal Controls**: "Effective" = pass; any material weakness = serious red flag.

### Can-skip sections (mostly boilerplate)

**Item 4 — Mine Safety Disclosures**: Usually irrelevant unless mining co.
**Item 6 — Selected Financial Data**: (Removed by SEC as of 2021; older filings still have it. Basic multi-year financial summary.)
**Most of the Index + legal boilerplate sections**.

## What's in a 10-Q

Similar structure, shorter. Key differences:
- Unaudited (vs 10-K audited)
- Condensed footnotes (full detail in 10-K)
- Item 2 is MD&A (most important section)
- Includes a subsequent-events footnote often revealing post-quarter-end developments

10-Qs are where you catch growth deceleration, margin compression, or guidance issues fast. Quarterly re-read MD&A comparison to prior quarters reveals shifts.

## What's in an 8-K

8-K is a "material event" filing — anything investors should know about immediately. Common 8-K triggers:
- Earnings release (quarterly, ahead of 10-Q)
- Management changes
- Acquisitions / divestitures announced
- Material contract entered into
- Restructuring / layoffs
- Bankruptcy
- Changes in accountants (can be red flag)
- Going concern disclosures

8-Ks are the primary channel for current news. The press release attached as Exhibit 99.1 is what markets react to; the 8-K itself is the regulatory wrapper.

## What's in a Proxy (DEF 14A)

Annual filing around annual meeting time. Key sections:
- **Compensation Discussion & Analysis (CD&A)**: Executive comp in detail, with rationale
- **Equity plans**: How stock comp works, dilution math
- **Board composition**: Independence, committee memberships, related-party issues
- **Auditor ratification**: Changes in auditor are rare; investigate if one happens

Proxy-reading is underrated. Understanding executive comp structure tells you what management is actually optimized for.

## Signal Extraction Techniques

### The Y/Y Comparison

For any filing, pull both this year's + last year's version. Diff them section-by-section. What changed?
- New risk factors appearing?
- Old risk factors removed?
- MD&A emphasis shifted?
- Segment definitions changed (can hide declining segments)?
- Accounting policy changes (footnote 1)?
- Contingencies new or resolved?

Language changes matter. "We believe" → "We expect" → "We will" all carry different degrees of confidence.

### The "What's Missing" Read

What would you expect to see that isn't there?
- Customer concentration not disclosed → may have concentration but not material
- Geographic breakdown missing → likely not breakable (integrated product) or hiding something
- Segment disclosures changed → reorganization; may hide underperformance
- Guidance withdrawn → business uncertainty, bearish signal
- Missing from prior filing's forward-looking statements in this filing → projection missed, management wants to forget

### Footnote Deep Dives

Key footnotes (numbering varies):
- **Note 1: Business + Summary of Significant Accounting Policies**: Revenue recognition policy. Conservative vs aggressive. When do they recognize? Changes signal potential aggressive accounting.
- **Revenue Disaggregation**: Required under ASC 606. Shows revenue by product, geography, customer type, timing of recognition. Critical for understanding business composition.
- **Segment Information**: Reportable segments with revenue + operating income. Segment-level margins often tell more than consolidated.
- **Goodwill + Intangibles**: How they amortize, impairment tests. Large impairments are a material event.
- **Stock-Based Compensation**: How much is SBC? Dilution impact? Performance-based vs time-based?
- **Leases**: ASC 842 right-of-use asset + lease liabilities. Reveals real-estate + equipment commitment.
- **Commitments & Contingencies**: Off-balance-sheet obligations. Purchase commitments, legal contingencies.
- **Subsequent Events**: Post-quarter-end material events. Often where interesting news hides.
- **Related-Party Transactions**: Related-party = company does business with insiders. Evaluate for arm's-length nature.

### Red Flags

- **Auditor change**: Especially mid-year. Almost always worth investigating.
- **Material weakness in internal controls**: Red flag for accounting quality.
- **Going-concern language**: Auditor says they're not sure company can survive 12 months. Critical.
- **Restatement of prior financials**: Sometimes benign (reclassification); sometimes red flag for fraud/error.
- **CFO departures**: Short CFO tenures + quick successions = real concern.
- **Aggressive revenue recognition**: Bill-and-hold arrangements, long deferred revenue tails, unusual channel stuffing.
- **Increasing DSO / AR aging**: Customers taking longer to pay signals collection issues or aggressive revenue recognition.
- **Inventory buildup without revenue growth**: Production outpacing demand.
- **Operating cash flow diverging from earnings**: Earnings growing but OCF flat/shrinking = quality of earnings issue.
- **Stock comp >30% of revenue**: Serious dilution; also reveals compensation philosophy.
- **High related-party transaction volume**: Management extracting value.
- **Going-concern, material weakness, or departure-of-key-officer 8-Ks**: Thesis-breaking.

## Reading Speed

A practiced researcher reads a new company's 10-K in 2–4 hours (deep dive) or 30 minutes (initial screen). Subsequent 10-Ks go faster (diff vs prior year). 10-Qs are 30 min–2 hours. 8-Ks are 5–15 min each.

Tools that help:
- **SEC EDGAR full-text search**: Cross-filing pattern finding
- **AI summarization**: Good for 8-Ks + proxies. Less reliable for nuanced MD&A language — use as assist, not substitute
- **Highlight tool**: Read with a highlighter (digital or physical)
- **Note-taking**: Maintain running notes per company with surprises / questions

## Common Mistakes

- **Reading only management's quotes**: MD&A is narrative; footnotes are evidence. Read both.
- **Skipping risk factors**: Yes they're long. Yes most is boilerplate. Company-specific risks are signal.
- **Not comparing to prior year**: Single-year reads miss the changes.
- **Accepting management numbers uncritically**: Segment definitions can change; non-GAAP metrics can inflate; TAM claims are self-serving.
- **Missing 8-Ks**: Earnings + material events come here first. Set up alerts.
- **Ignoring proxy**: Compensation structure reveals management incentive alignment.
- **Over-relying on summarization**: AI can summarize structure, miss nuance. Cross-check.

## Output — Research Notes

After a filing deep-dive, capture:
- Key financial metrics (growth, margins, FCF)
- Material changes vs prior year
- Management emphasis changes (MD&A)
- New / retired risk factors
- Footnote surprises
- Questions raised (not answered in filing — take to earnings call)
- Thesis-relevant data points
- Red flags to monitor

## Related

- [Equity Research Framework](../equity-research-framework/SKILL.md) — the skill filings support
- [Earnings Call Analysis](../earnings-call-analysis/SKILL.md) — pairs with 10-Q + 8-K earnings release
- [Valuation: DCF & Comps](../valuation-dcf-comps/SKILL.md) — filings provide input data for valuation models
- [Competitive Landscape](../competitive-landscape/SKILL.md) — filings reveal competitive dynamics
