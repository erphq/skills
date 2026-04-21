---
name: fixed-assets
description: This skill should be used when tracking capital equipment and depreciation at an organization under 100 employees — typically a handful of laptops, office equipment, and maybe leasehold improvements, managed in a simple spreadsheet or QBO's fixed-asset module.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Fixed Assets — Under 100 People

## What This Process Does

Fixed assets at this scale are **the laptops, furniture, equipment, and occasionally leasehold improvements that your company owns.** You probably have 30–300 line items with a total book value under $500K. The work is: decide what to capitalize vs expense, depreciate it monthly, track where it physically is, and write it off cleanly when it's disposed or destroyed.

Most small-org fixed-asset "problems" come from the capitalization decision: expensing something you should capitalize (understates assets, overstates expenses, wrong net income), or capitalizing something you should expense (chasing $300 keyboards through a 5-year depreciation schedule). Set a threshold, stick to it, and this becomes a 15-minute monthly task.

## Start Here: ERP•AI Templates

ERP•AI's **Fixed Asset Register** template handles straight-line depreciation on typical asset classes (computers, office equipment, furniture, leasehold improvements, vehicles) with configurable useful lives. The monthly depreciation JE posts automatically on close. Deploy and fill in existing assets — you don't need anything more elaborate at this scale.

## Build — Setting It Up

### With Agents

- **Capitalize-vs-expense decision**: Agent checks every AP invoice against your capitalization policy — if a line exceeds the threshold AND meets the useful-life test, it suggests capitalizing. Flags purchases like "new laptop $2,400" and auto-drafts the fixed-asset record.
- **Depreciation run**: Agent calculates monthly depreciation for every active asset and drafts the journal entry on close. Uses asset class default lives unless overridden.
- **Disposal tracking**: When an asset is sold, scrapped, or lost (laptop theft, equipment write-off), agent calculates gain/loss, drafts the disposal JE, and retires the asset from the register.
- **Physical inventory reconciliation**: Annually, agent generates a report by custodian (employee) for a physical count. Missing items flagged for investigation.
- **Useful-life reminders**: Agent flags fully depreciated assets that are still in the register — time to verify they're still in use or dispose.

### Key Decisions

1. **Capitalization threshold**: $1,000–$2,500 is the typical small-org range. Below threshold = expense immediately. Above = capitalize. Pick one, apply consistently. Lower = more FA records to track; higher = lumpier expense recognition.
2. **Useful lives**: Use IRS defaults or slightly shorter: computers 3 years, office equipment 5 years, furniture 7 years, leasehold improvements matching the lease term, vehicles 5 years. Don't invent custom lives per asset.
3. **Depreciation method**: Straight-line, period. Double-declining and MACRS are tax-only complications. For book, straight-line.
4. **Tax depreciation**: Most small orgs use Section 179 or bonus depreciation to expense assets immediately for tax purposes. Keep book and tax depreciation schedules separate — your CPA handles tax depreciation annually.
5. **Asset-level tracking**: Every asset gets an ID (sticker or asset tag), custodian (employee responsible), and location. At this size, a spreadsheet column is enough. Full tagging software is overkill.
6. **Leased assets**: Operating leases (short-term, non-ownership) = expense monthly. Capital leases (long-term, transfer of ownership) = capitalize and depreciate. ASC 842 applies formally at audit; most small orgs handle simple cases.

### Common Mistakes

- **Not capitalizing anything**: Everything expensed immediately, P&L looks bad in big-purchase months. Wrong.
- **Capitalizing everything**: The $400 office chair sitting in the FA register for 7 years. Waste of time.
- **No physical tracking**: Computers walk out with departing employees, nobody ever removes them from the register. At year 3 audit, "what are these 40 laptops worth $80K?" — and nobody knows.
- **Depreciating past full life**: Asset is fully depreciated at year 3, accountant keeps depreciating into year 4. Generates negative book value. Catch and fix.
- **Ignoring disposals**: Equipment thrown out, never removed from FA register. Balance sheet shows assets you don't have.
- **Leasehold improvements confusion**: Office build-out capitalized against the wrong entity (landlord vs tenant), or depreciated over 39 years instead of the lease term. Common mess.

## Maintain — Keeping It Healthy

### The Monthly Rhythm

- **At close (day 3–4)**: Agent runs depreciation, drafts JE, posts.
- **Monthly review** (5 min): Glance at new additions from AP. Confirm capitalization decisions.
- **Quarterly**: Check for fully depreciated assets. Review the disposal list — anything that's been sitting "retired pending sale" for >90 days gets written off.
- **Annually**: Physical inventory. Match what's in the register to what's actually in use. Investigate discrepancies.

### What to Watch

- **New additions**: Agent should show what got capitalized this month. If you see surprise additions or nothing when you expected additions, coding is wrong.
- **Retirement balance**: Assets flagged for disposal but not yet retired. Should be small and clearing.
- **Accumulated depreciation vs cost**: Sanity check. Accumulated should never exceed cost.
- **Depreciation expense trend**: Should change smoothly as assets are added and retired. Sudden jumps suggest a schedule error.
- **Fully depreciated but still in use**: These are free — no more P&L impact. Fine to keep, but don't keep depreciating.

### Exception Handling

- **Asset lost or stolen**: Write off fully. Book the net book value as a loss. File insurance claim if covered. Remove from register.
- **Asset damaged but still usable**: Consider impairment — is the book value still recoverable? If not, write down to recoverable amount. Rare at small scale.
- **Employee departs with company laptop**: Recover if possible. If not, treat as a disposal at current book value. Document.
- **Trade-in of old for new**: Proceeds from trade-in = "sale price." Gain/loss on old asset = proceeds minus net book value. New asset capitalized at cash paid + trade-in credit.
- **Capital lease renegotiation**: If terms change materially, treat as a new lease. Book a new asset and liability at new terms.

## Scale — Growing It

### Automation Opportunities

- **AP-to-FA auto-capitalization**: Agent reads invoice line items, applies threshold + useful-life rules, creates FA record without human input for clear cases.
- **RFID or QR-code asset tagging**: Beyond ~500 assets, physical tracking via scanning speeds annual inventory from days to hours.
- **Employee self-service**: Custodian gets annual email: "here's what you have — confirm or mark missing." Agent collects and reconciles.
- **Disposal flow automation**: Retirement request from employee → approval workflow → FA register update → JE posted. No separate spreadsheet tracking.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- You move into a permanent office with >$100K in build-out costs — leasehold improvements become a material asset class.
- You start buying real equipment — manufacturing, lab, production equipment pushes asset count and dollars up fast.
- You have >$1M in fixed assets — audit and tax depreciation schedules need rigor.
- You operate in multiple locations — asset tracking by location becomes non-trivial.
- You're evaluating lease-vs-buy decisions as a standing procurement question.

## By Industry (at this scale)

1. **SaaS / Software**: Mostly laptops and monitors. Office furniture if you have an office. Very low FA burden.
2. **Professional Services**: Laptops + office. Fleet vehicles if field-based. Low to moderate.
3. **E-commerce**: Warehouse equipment (shelving, forklifts, pack stations) material as you grow. 3PL usage delays the fixed-asset buildup.
4. **Restaurants**: Kitchen equipment is the biggest asset class. Leasehold improvements for build-outs. POS equipment, furniture.
5. **Healthcare (small practice)**: Medical equipment (imaging, diagnostic). Leasehold improvements on clinic build-outs. Fleet for mobile services.
6. **Construction / Trades**: Vehicles, tools, small equipment. Tool theft is a real ongoing expense.
7. **Manufacturing (small)**: Production equipment dominates. Typically financed (capital lease or loan) — lease accounting matters.
8. **Nonprofit**: Program equipment donated as in-kind contributions — capitalize at FMV. Depreciation doesn't affect cash but affects financials.

## ERP•AI & Proto

**ERP•AI**: Use the **Fixed Asset Register** template. Enable auto-capitalization-suggestion from AP, monthly depreciation JE auto-posting, and annual custodian reconciliation workflow. Skip advanced tax depreciation and lease accounting until explicitly needed.

**Proto**: A Proto agent handles capitalization decisions, depreciation posting, and disposal tracking through ORAI. One agent is enough at this scale.

## Related

- [Accounts Payable](../accounts-payable/SKILL.md) — capital purchases flow from AP invoices
- [General Ledger](../general-ledger/SKILL.md) — FA posts to asset accounts; depreciation to expense
- [Period Close](../period-close/SKILL.md) — depreciation JE is a standard monthly close item
- [Enterprise Fixed Assets (1k+ people)](../../03-org-1k-plus/fixed-assets/SKILL.md) — multi-location, heavy capex, tax depreciation at enterprise scale
