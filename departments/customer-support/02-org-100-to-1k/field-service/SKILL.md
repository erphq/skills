---
name: field-service
description: This skill should be used when running field-service operations at an organization of 100-1,000 employees — typically 25-200 technicians + dispatchers, ServiceTitan / Salesforce Field Service / SAP FSM tooling, AI-driven dispatch + routing, mobile-first technician workflow, and recurring-service-contract management at scale.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 02-org-100-to-1k
  type: skill
  scope: internal
---
# Field Service — 100 to 1,000 People

## What This Process Does

Field service at this scale is **a sophisticated dispatch + execution engine for service-business categories** (HVAC, plumbing, electrical, IT services / MSP, equipment maintenance, appliance repair, landscaping, pest control). 25–200 technicians + 3–20 dispatchers + ops manager + service manager. Tooling: ServiceTitan, Salesforce Field Service, SAP FSM, IFS Field Service, FieldEdge Premier, Jobber Plus. AI-driven dispatch optimization + routing; mobile-first tech workflow; recurring-service-contract base often material revenue (30–50% of revenue at HVAC, pest control); inventory + parts management at warehouse + truck level.

The work: **dispatch optimal tech to right job, manage recurring-service contracts, optimize routes + workforce, support tech on-site with parts + info + payment, and capture work + customer satisfaction systematically.**

## Start Here: ERP•AI Templates

ERP•AI's **Mid-Market Field Service Operations** template provides AI-driven dispatch + scheduling, route optimization, mobile-tech workflow with offline support, parts + inventory tracking (warehouse + truck), recurring-service-contract management, on-site invoicing + payment, customer notifications + tracking, post-service follow-up + CSAT, and field-service analytics. Pair with **Workforce Management for Field Ops** + **Predictive Maintenance** for equipment service.

## Build — Setting It Up

### With Agents

- **AI dispatch optimization**: Multi-factor — skill match, geographic proximity, current location, route efficiency, customer history, SLA pressure, technician utilization. Real-time re-optimization.
- **Multi-day scheduling**: Recurring-service contracts auto-scheduled per cadence; one-time jobs scheduled with ETAs.
- **Tech mobile workflow**: Job acceptance, on-route, on-site, completion + photos + signature + invoicing + payment. Offline-capable for poor-signal areas.
- **Customer notifications + tracking**: "Tech is on the way" + "Tech arrived" + "Job complete — please rate" + tech-tracking link.
- **Parts + inventory orchestration**: Warehouse inventory + truck stock; auto-reorder; truck-stock optimization based on tech-area patterns.
- **On-site invoicing + payment**: Quote + invoice generated on-site; payment collected via mobile (card-tap, ACH, financing).
- **Recurring-contract management**: Maintenance plans tracked; auto-scheduling per cadence; contract-renewal motion.
- **Predictive maintenance** (equipment IoT-enabled): Equipment data triggers proactive service.
- **Skills + certification matching**: Tech tags (HVAC certified, gas-line, electrical license) match to job requirements.
- **Workforce management**: Demand forecast + staffing + scheduling; PTO + training time managed.
- **Customer-satisfaction integration**: Post-service CSAT; review-request automation.

### Key Decisions

1. **Tooling**:
   - **ServiceTitan** (enterprise mid-market for trades): Robust, expensive ($300+/seat/mo)
   - **Salesforce Field Service**: For Salesforce-customer ecosystem
   - **SAP Field Service Management**: For SAP-customer ecosystem
   - **IFS Field Service**: For asset-management heavy industries
   - **FieldEdge Premier**: Trades-specific
   - **WorkWave**: Pest control, landscaping, security
   - **simPRO**: Larger commercial trades
2. **Dispatch model**:
   - **AI-driven optimization** with human override (most common at this scale)
   - **Manual + AI-assist** for relationship-aware decisions
   - **Pure manual** rare at 25+ techs scale
3. **Skills + certification model**: Comprehensive tech-skill taxonomy; certifications tracked + expirations alerted.
4. **Recurring-contract program**: Maintenance plan SKUs, auto-billing, auto-scheduling, dedicated CS for plan customers.
5. **Inventory model**: Warehouse master + truck-stock + reorder automation.
6. **Pricing model**: Flat-rate (predictable, customer-friendly) increasingly standard; T&M for complex.
7. **Payment-on-completion**: Mobile-first; ACH + card + financing options; reduce AR aging.
8. **Customer-facing experience**: Tracking link + ETA + notifications (Uber-for-services standard).
9. **Photo + signature documentation**: Required for warranty + billing + dispute resolution.

### Common Mistakes

- **Manual dispatch at scale**: 100+ tech operation in spreadsheet; chaos; jobs lost.
- **Tech-mobile-app underutilized**: Techs call dispatcher constantly for info; massive productivity hit.
- **No parts visibility**: Tech arrives without part; second trip wastes time + customer trust.
- **Late-arrival reputation**: Long appointment windows ("between 10 AM and 4 PM"); modern customers expect 30-min ETAs.
- **Paper invoicing at scale**: Office re-keys; billing delays; AR aging extended.
- **Recurring-contract management neglected**: Plans sold + forgotten; revenue + relationship leakage.
- **No predictive maintenance**: Reactive-only model; missed proactive revenue.
- **Skills mismatching**: Wrong tech sent for job they can't complete; second-trip cost.
- **No workforce-management discipline**: Over/under-staffing; tech burnout or idle time.
- **Customer-NPS not measured**: Don't know what drives or hurts satisfaction.

## Maintain — Keeping It Healthy

### The Daily Rhythm

- **Morning dispatch huddle**: Today's schedule reviewed; priorities; weather/traffic considerations.
- **Throughout day**: Real-time dispatch adjustments; customer notifications; supervisor escalation.
- **End of day**: Job completions + invoicing + payment confirmations; tomorrow's schedule.
- **Daily standup** (dispatch + service manager): Issues, escalations, capacity.
- **Weekly**: Tech performance + CSAT review; recurring-contract pipeline; parts-inventory review.
- **Monthly**: Operational scorecard (first-time-fix-rate, jobs-per-tech, revenue-per-tech, CSAT). WFM forecast for next 30 days.
- **Quarterly**: Strategic review — tooling, geographic expansion, service-line additions.

### What to Watch

- **First-time fix rate**: % completed in single visit. Target 85%+.
- **Average jobs per tech per day**: Productivity metric (industry-specific).
- **On-time arrival**: % within window. Target 95%+.
- **Travel time vs work time**: Travel-heavy = route inefficiency.
- **Same-day vs scheduled mix**: Capacity allocation.
- **CSAT by tech**: Coaching opportunity.
- **Average ticket size**: Revenue per visit; trending matters.
- **Parts-fill rate**: % of jobs where required parts on truck. Target 90%+.
- **Recurring-service-attach rate**: % of one-time customers converting to maintenance plans.
- **Re-call rate**: % requiring revisit within 30 days for same issue. Target <5%.
- **Tech retention**: Annual turnover. Field-service has high industry turnover; track + improve.
- **Recurring-contract renewal rate**: Target 90%+ for healthy program.

### Exception Handling

- **Tech truck breakdown / vehicle**: Reroute jobs; communicate to customers; coordinate vehicle service.
- **Severe weather**: Mass cancellation + reschedule; customer comms; safety prioritization.
- **Customer-not-home**: Document; reschedule; charge fee per policy.
- **Job complexity beyond initial scope**: Tech consults office; quote extension; customer approval.
- **Safety issue on-site**: Tech leaves; documents; remote coordination.
- **Payment-decline on completion**: Backup methods; office follow-up.
- **Customer dispute on quality**: Return visit if warranty applies; documentation matters.
- **Tech injury on-job**: Workers' comp protocol; immediate escalation.
- **Equipment / vehicle damage**: Insurance claim; per-policy workflow.
- **Contract dispute (customer claims service not performed)**: Photos + signatures + completion records; escalate as needed.
- **Mass-incident** (e.g., heat wave HVAC demand surge): Triage; capacity-plan; communicate longer ETAs.

## Scale — Growing It

### Adding Complexity

- **Multi-location ops**: Regional dispatch + service-area management.
- **Sub-contractor management**: 3rd-party tech network for overflow + specialty.
- **B2B contract management**: Commercial customers with complex contracts + SLAs.
- **Asset / IoT integration**: Customer equipment IoT-enabled; predictive service triggered by sensor data.
- **Multi-trade integration**: HVAC + plumbing + electrical under one company; cross-trade dispatch.

### Automation Opportunities

- **Full-AI dispatch**: Optimal matching at scale; minimal human intervention.
- **Predictive demand modeling**: Forecast demand by service-line + day + region; staff accordingly.
- **Voice-AI for inbound calls**: Initial intake + scheduling for routine.
- **Predictive maintenance triggers**: Customer equipment data → proactive service.
- **Computer-vision quality checks**: Photos validated for completeness + quality.
- **AI customer-NPS prediction**: Predict satisfaction before survey; intervene if low.

### When You Outgrow This Tier

Move to the **1k+ org** playbook when:

- Tech count passes 200; multi-region operations.
- Multi-trade or multi-product service portfolio.
- Heavy commercial-contract base requiring formal account management.
- IoT + predictive-maintenance investment becomes strategic differentiator.
- Acquisition strategy growing via roll-ups (private equity-backed expansion).

## By Industry (at this scale)

1. **HVAC**: Seasonal demand; recurring-maintenance plans 30–50% of revenue. Refrigerant + parts inventory critical.
2. **Plumbing**: Emergency calls + scheduled. After-hours premium. Commercial + residential mix.
3. **Electrical**: Permit-required commercial + residential. Licensed-tech mandatory.
4. **IT Services (MSP)**: On-site + remote service mix. Recurring managed-service contracts dominant.
5. **Appliance Repair**: Manufacturer warranty + customer-pay. Parts ordering complex.
6. **Landscaping / Lawn Care**: Recurring scheduled visits dominant. Seasonal staffing.
7. **Pest Control**: Recurring contracts dominant. Scheduling efficiency critical.
8. **Equipment Maintenance**: Long-term contracts. Predictive maintenance increasingly valued.
9. **Telecom Field Ops**: Network + customer installs.
10. **Cleaning Services**: Recurring residential + commercial.

## ERP•AI & Proto

**ERP•AI**: Deploy **Mid-Market Field Service Operations** + **Workforce Management for Field Ops** + **Predictive Maintenance**. Integrate ServiceTitan / Salesforce FSL / SAP FSM / IFS / FieldEdge + accounting + payroll + parts.

**Proto**: Specialized agents — dispatch-optimization, route-optimization, recurring-contract, predictive-maintenance, mobile-tech-support, customer-notifications, WFM, post-service-follow-up.

## Related

- [Ticket Lifecycle](../ticket-lifecycle/SKILL.md) — service-request flow
- [Customer Satisfaction](../customer-satisfaction/SKILL.md) — post-service CSAT
- [Customer 360](../../../sales-crm/02-org-100-to-1k/customer-360/SKILL.md) — service history part of customer record
- [Accounts Receivable](../../../finance-accounting/02-org-100-to-1k/accounts-receivable/SKILL.md) — invoicing + collection
- [Inventory](../../../supply-chain/02-org-100-to-1k/inventory/SKILL.md) — parts inventory management
- [Small-Org Field Service (<100 people)](../../01-org-under-100/field-service/SKILL.md)
- [Enterprise Field Service (1k+)](../../03-org-1k-plus/field-service/SKILL.md)
