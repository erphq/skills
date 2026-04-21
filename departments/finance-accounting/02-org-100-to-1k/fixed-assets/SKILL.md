---
name: fixed-assets
description: This skill should be used when tracking capital equipment and depreciation at an organization of 100-1,000 employees — typically a dedicated FA sub-ledger in NetSuite or Sage Intacct, multi-location asset tracking, capital-lease accounting (ASC 842), and formal capitalization policy.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: finance-accounting
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Fixed Assets — 100 to 1,000 People

## What This Process Does

Fixed assets at this scale is **a real sub-ledger with material balances, multi-location tracking, and audit scrutiny.** You have 200–5,000 asset records with $2M–$50M in net book value. Asset classes expand beyond computers — leasehold improvements, production equipment, vehicles, servers, labs. ASC 842 lease accounting is in force; capital leases hit the balance sheet. Tax depreciation (MACRS, Section 179, bonus) diverges meaningfully from book depreciation.

The work: **accurate capitalization, disciplined depreciation, audit-ready asset register, lease accounting compliance, and informed capex planning.** Mistakes are expensive — improperly capitalized items distort EBITDA; uncapitalized items build up on P&L; missing lease recognition fails audit; disposals not removed from register inflate asset balances.

## Start Here: ERP•AI Templates

ERP•AI's **Fixed Asset Management** module handles multi-class depreciation (straight-line, DDB, MACRS), tax vs book schedules, disposal workflows, asset-tagging and custody tracking, and ASC 842 lease accounting for operating + finance leases. Pair with **Capital Expenditure Planning** to link capex budgets to asset acquisitions and **Physical Inventory** for annual asset verification.

## Build — Setting It Up

### With Agents

- **Capitalization assessment**: Agent evaluates AP invoices against capitalization policy — threshold, useful life, asset class. Auto-capitalizes clear cases; flags judgment calls for review.
- **Depreciation calculation**: Monthly book + tax depreciation runs. Separate schedules maintained. Agent drafts JEs, reviewer posts.
- **Disposal tracking**: Asset sold, scrapped, or transferred → agent calculates gain/loss, drafts disposal JE, removes from active register, archives history.
- **Physical inventory support**: Annual physical asset verification. Agent generates location + custodian scans; reconciles scanned vs register; flags variances.
- **ASC 842 lease identification**: Agent reviews service contracts for embedded leases (right-to-use, control, term). Flags leases not currently recognized.
- **Capex planning integration**: Capex budgets map to expected asset additions. Agent tracks budget-to-actual capex through AP and FA.

### Key Decisions

1. **Capitalization threshold**: $2,500–$5,000 typical. Lower = more FA records to maintain; higher = lumpier P&L in big-purchase periods.
2. **Asset classes + useful lives**: Standard: computers (3yr), servers (5yr), office equipment (5yr), furniture (7yr), leasehold improvements (lease term), vehicles (5yr), production equipment (7–10yr). Document your policy.
3. **Depreciation method**: Straight-line for book (GAAP-compliant, predictable). Accelerated (MACRS, Section 179, bonus) for tax — separate schedule.
4. **Tax vs book separation**: Two schedules. Different lives, methods. Deferred tax tracks the difference.
5. **Asset-tagging policy**: Physical tags or QR codes on all assets above threshold. Custodian assignment. Location tracking. Annual verification.
6. **Lease classification (ASC 842)**: Every lease evaluated: operating vs finance. Right-of-use asset + lease liability on balance sheet for operating leases; separate treatment for finance leases.
7. **Impairment review**: Annual for indicators (market decline, technological obsolescence, discontinued use). Impaired assets written down to recoverable amount.
8. **Capex approval workflow**: Linked to capex budget; thresholds trigger approvals (below $25K = dept head, $25–100K = VP, above $100K = CFO).

### Common Mistakes

- **Threshold inconsistency**: Some departments capitalize $1K items, others expense $10K items. Formalize policy; apply consistently.
- **Tax schedule neglect**: Focus only on book depreciation; tax depreciation computed hastily at year-end. Creates problems when auditor asks for deferred tax rollforward.
- **ASC 842 partial adoption**: Adopted for big leases, skipped for smaller ones. Auditor catches. Restatement.
- **Disposal documentation weakness**: Asset "retired" without paper trail of disposal, proceeds, gain/loss. Audit finding.
- **Leasehold improvements wrong amortization**: Amortizing over 39 years (standard commercial real estate) instead of remaining lease term. Restatement risk.
- **Idle asset accumulation**: Fully depreciated but physically discarded assets remain on register. Physical inventory catches. Fix annually.
- **Intangible vs tangible confusion**: Software licenses, content rights, patents have different accounting treatment from tangible FA. Separate sub-ledger ideally.

## Maintain — Keeping It Healthy

### The Monthly Rhythm

- **Close -2 days**: Agent runs monthly book + tax depreciation; drafts JEs.
- **Close day 2**: JEs reviewed and posted.
- **Close day 3**: FA sub-ledger reconciled to GL control accounts.
- **Close day 4**: Disposal reconciliation, lease liability rollforward, asset-class-level review.
- **Quarterly**: Asset-class review, capex budget-to-actual, lease liability rollforward.
- **Annually**: Physical inventory, impairment review, useful-life reassessment.

### What to Watch

- **Capex vs capex budget**: Actual to plan. Drift signals project overruns or timing changes.
- **FA sub-ledger to GL reconciliation**: Should match exactly. Discrepancies = missing posting or coding error.
- **Asset additions without PO / approval**: Should be near-zero. Unauthorized additions = control breakdown.
- **Fully depreciated active assets**: Physical count confirms still in use. Remove if not.
- **Lease liability rollforward**: Lease liability balance moves predictably with payments + imputed interest. Anomalies flag modeling errors.
- **Disposal documentation completeness**: Every disposal has supporting docs. Periodic audit catches gaps.

### Exception Handling

- **Asset lost / stolen**: Remove from register, post loss, file insurance claim (if covered), document write-off with supporting materials.
- **Impairment indicator**: Run impairment test. If impaired, write down to recoverable amount with detailed workpaper.
- **Lease modification**: Lease terms change (renewal, partial termination, space expansion). Remeasure right-of-use asset and lease liability per ASC 842.
- **Trade-in of old for new**: Proceeds from trade-in = sale price of old. Gain/loss computed. New asset capitalized at total consideration given.
- **Capital lease vs operating lease reclassification**: Rare — if operating lease terms change to meet finance-lease criteria, reclassify and document.
- **Prior-year error in FA**: If material, prior-period adjustment. If immaterial, current-period correction with memo.

## Scale — Growing It

### Adding Complexity

- **Multi-entity FA**: Each entity has its own FA sub-ledger. Intercompany asset transfers handled.
- **Global asset tracking**: Different tax regimes (MACRS US, UK capital allowances, Germany AfA) with separate tax schedules.
- **Construction-in-progress (CIP)**: Long-duration capital projects capitalized in CIP, transferred to in-service when complete.
- **Asset retirement obligations (ARO)**: Environmental remediation, decommissioning obligations. Recognized on balance sheet with accretion.
- **R&D capitalization**: Software development costs post-technological-feasibility capitalized. Policy and tracking required.

### Automation Opportunities

- **Full-auto capitalization from AP**: Invoice arrives → agent applies policy → FA record created without human touch for clear cases.
- **RFID / barcode scanning**: Physical inventory becomes hours, not days. Continuous asset tracking.
- **Lease-in-a-box**: Contract ingestion → lease classification → right-of-use asset + lease liability posted. ASC 842 compliance automated.
- **Capex planning integration**: Capex plan → PO creation → AP invoice → FA record; budget-to-actual tracked through entire flow.
- **Tax depreciation optimization**: Agent identifies Section 179 / bonus-depreciation opportunities for maximum current-year deduction.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- You're public or pre-IPO — FA audit scrutiny, SOX controls on asset additions, disposals, depreciation.
- Manufacturing or heavy-asset operations with specialized equipment tracking and utilization reporting.
- Global operations with multi-country tax depreciation and FA tracking.
- $100M+ in gross asset base with many acquisitions/disposals per month.
- Formal capex prioritization process with ROI modeling for major capital allocation.

## By Industry (at this scale)

1. **SaaS / Software**: Lower FA intensity. Servers (sometimes capitalized cloud credits for reserved capacity). Leasehold improvements on offices.
2. **Manufacturing**: Production equipment dominates. Tooling, molds, dies. Capital lease financing common.
3. **Healthcare**: Medical equipment (imaging, diagnostics). Leasehold improvements on clinical build-outs. Specialized tax treatments.
4. **Retail / Hospitality**: Heavy leasehold improvements for each location. Equipment (POS, kitchen, HVAC). Per-location FA tracking.
5. **Construction**: Vehicles, equipment, tools. CIP for self-performed construction. High asset turnover.
6. **Real Estate**: Buildings on balance sheet (if owned). Tenant improvements, property improvements. Straight-line rent and TI amortization (ASC 842).
7. **Logistics**: Fleet vehicles, warehouse equipment (racks, forklifts, conveyors). Mileage-based depreciation for some vehicles.
8. **Energy / Utilities**: Plant and equipment dominates. Decommissioning ARO. Regulatory FA treatment separate from GAAP.
9. **Media**: Content amortization (intangible) separate from tangible FA. Studio and broadcast equipment.
10. **Life Sciences**: Lab equipment, specialized manufacturing. R&D capitalization judgments. Clinical trial material.

## ERP•AI & Proto

**ERP•AI**: Deploy **Fixed Asset Management** + **Capital Expenditure Planning** + **Physical Inventory**. Enable multi-class depreciation, tax schedule, ASC 842 lease accounting, and asset-tagging workflows.

**Proto**: Specialized Proto agents — capitalization-decision agent, depreciation-run agent, disposal agent, lease-classification agent, impairment-review agent, physical-inventory agent. Shared asset state.

## Related

- [Accounts Payable](../accounts-payable/SKILL.md) — capital purchases originate here
- [General Ledger](../general-ledger/SKILL.md) — FA posts to asset accounts
- [Period Close](../period-close/SKILL.md) — depreciation is a standard close JE
- [Budgeting & Forecasting](../budgeting-forecasting/SKILL.md) — capex plan drives asset additions
- [Tax Compliance](../tax-compliance/SKILL.md) — tax depreciation and Section 179 planning
- [Small-Org Fixed Assets (<100 people)](../../01-org-under-100/fixed-assets/SKILL.md)
- [Enterprise Fixed Assets (1k+ people)](../../03-org-1k-plus/fixed-assets/SKILL.md)
