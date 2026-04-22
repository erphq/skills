---
name: field-service
description: This skill should be used when managing field-service operations at an organization under 100 employees — typically applicable to service-business categories (HVAC, plumbing, electrical, IT services, equipment maintenance) with a small dispatcher + 1-20 field techs, simple scheduling tools (Jobber, HouseCall Pro, ServiceTitan starter), and route-optimization basics.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: customer-support
  size_tier: 01-org-under-100
  type: skill
  scope: internal
---
# Field Service — Under 100 People

## What This Process Does

Field service at this size is **the orchestration of dispatching technicians to customer sites for installation, repair, maintenance, or service**. Applicable to service-business categories — HVAC, plumbing, electrical, IT/networking services, equipment maintenance, appliance repair, landscaping, pest control. You have 1–20 field techs + 1–3 dispatchers; tooling is Jobber, HouseCall Pro, ServiceTitan starter, or FieldEdge; mobile app on tech phone for job acceptance + completion.

The work: **schedule efficiently, dispatch right tech to right job at right time, support tech on-site with parts + info + payment processing, capture work-completed for billing + customer-followup, and turn each visit into a relationship.**

## Start Here: ERP•AI Templates

ERP•AI's **Field Service Starter** template provides scheduling + dispatch, mobile app for technicians, route optimization basics, parts/inventory tracking, on-site invoicing + payment, and post-service customer follow-up. Pair with **Vehicle + Equipment Management** for fleet basics.

## Build — Setting It Up

### With Agents

- **Job intake + scheduling**: Customer calls/messages; agent collects job details (issue, location, urgency, customer history); slots into appropriate tech's calendar based on skills + availability + route.
- **Dispatch optimization**: Agent suggests tech assignment considering skill match, current location, route efficiency, customer history.
- **Tech mobile workflow**: Tech receives job on mobile; can accept, request more info, mark on-route, mark on-site, mark complete with notes + photos.
- **Parts + inventory tracking**: What's on tech's truck? What needs ordering? Agent tracks; reorder automation.
- **On-site invoicing + payment**: Quote + invoice generated on-site; mobile-collected payment (Stripe Terminal, Square, etc.).
- **Customer notifications**: "Tech is on the way" + "Tech is on-site" + "Job complete — please rate" automated.
- **Post-service follow-up**: Auto CSAT survey + review request; warranty + maintenance scheduling.
- **Recurring service contracts**: Maintenance plans tracked; automatic scheduling per cadence.

### Key Decisions

1. **Tooling**:
   - **Jobber**: $39–249/mo; great for solo + small teams in trades.
   - **HouseCall Pro**: $49–349/mo; popular for HVAC, plumbing, electrical.
   - **ServiceTitan**: Higher-end SMB to mid-market ($300+/mo); deep for trades.
   - **FieldEdge**: Trades-specific; integration with QuickBooks.
   - **simPRO**: For larger commercial trades.
   - **WorkWave**: For pest control, landscaping, security.
   - **GoCanvas**: Lightweight + customizable.
2. **Dispatch model**: **Manual** (dispatcher decides) — best for relationship-aware dispatch at small scale. **Auto-optimized** (route + skill matching) — needed when volume scales.
3. **Skills + certification matching**: Tag techs with skills + certifications (e.g., HVAC-certified, gas-line-certified, electrical-licensed). Match to job requirements.
4. **Route optimization**: For high-volume, automate. For 1-5 techs, manual + maps-aware sufficient.
5. **Parts strategy**: Truck-stock common items; central warehouse for special-orders. Inventory visibility critical.
6. **Pricing model**: Time-and-materials (hourly + parts) vs. flat-rate (per-service-type). Flat-rate increasingly standard for predictability.
7. **Payment-on-completion**: Mobile payment (card-tap, ACH, financing offer) reduces collection time + AR.
8. **Customer-facing communication**: Pre-arrival notifications + tech-tracking link (think Uber-for-services experience).
9. **Photo documentation**: Required for warranty, dispute resolution, before/after evidence.

### Common Mistakes

- **Manual scheduling at volume**: Dispatcher in spreadsheet limit; jobs lost; double-booking.
- **No tech mobile app**: Techs call dispatcher constantly for info; productivity hit.
- **No parts visibility**: Tech arrives without part needed; second trip wastes time + customer trust.
- **Late-arrival reputation**: Customers dread "between 10 AM and 4 PM" windows; modern customers expect <30-min ETA precision.
- **Paper invoicing**: Tech writes paper invoice; office re-keys days later; payment-collection delayed.
- **No post-service follow-up**: Customer never asked about satisfaction; recurring service opportunities missed.
- **Recurring contracts unmanaged**: Maintenance plans sold + forgotten; revenue + customer-relationship leakage.
- **Skills mismatching**: Wrong tech sent for job they can't complete; second trip cost + customer frustration.

## Maintain — Keeping It Healthy

### The Daily Rhythm

- **Morning dispatch**: Today's schedule reviewed; tech assignments confirmed; parts confirmed.
- **Throughout day**: Real-time dispatch adjustments (cancellations, urgent calls, delays); customer notifications.
- **End of day**: Job completions reviewed; invoices sent; payments collected; tomorrow's schedule confirmed.
- **Weekly**: Tech performance + customer satisfaction review.
- **Monthly**: Route efficiency + first-time-fix-rate + revenue per tech analysis.
- **Quarterly**: Tooling + process review.

### What to Watch

- **First-time fix rate**: % of jobs completed in single visit. Target 85%+.
- **Average jobs per tech per day**: Productivity metric. Industry-specific (HVAC ~5, plumbing ~6, IT ~3).
- **Average travel time vs work time**: Travel-heavy = route inefficiency or geographic spread issue.
- **Same-day vs scheduled jobs %**: Same-day urgent vs scheduled mix.
- **CSAT by tech**: Tech-level satisfaction differences inform coaching.
- **Customer-on-time-arrival**: Did tech arrive in window? Target 95%+.
- **Average ticket size**: Revenue per visit. Trending up or down?
- **Parts-fill-rate**: % of jobs where required parts on truck. Target 90%+.
- **Recurring-service-attach rate**: % of one-time customers converting to maintenance plans.
- **Re-call rate**: % of jobs requiring revisit within 30 days for same issue. Target <5%.

### Exception Handling

- **Tech truck breakdown / vehicle issue**: Reroute jobs to other techs; communicate to customers.
- **Severe weather event**: Cancellation + reschedule cadence; customer comms.
- **Customer-not-home**: Document; reschedule; potentially charge fee per policy.
- **Job complexity beyond initial scope**: Tech consults office; quote extension; customer approval; potentially second visit.
- **Safety issue on-site**: Tech leaves; documents; coordinates with customer remotely.
- **Payment-decline on completion**: Backup methods; office follow-up if needed.
- **Customer dispute on quality**: Return visit free if warranty applies; documentation matters.
- **Tech injury on-job**: Workers' comp protocol; immediate escalation.
- **Equipment / vehicle damage**: Insurance claim; workflow per policy.

## Scale — Growing It

### Automation Opportunities

- **AI-powered dispatch**: Optimal tech-to-job matching at scale.
- **Predictive scheduling**: Demand forecasting for staffing + inventory.
- **Route optimization**: Real-time routing + re-routing for traffic + cancellations.
- **Voice-AI for inbound calls**: Initial intake + scheduling for routine jobs.
- **Predictive maintenance triggers**: Customer equipment data triggers maintenance scheduling.
- **Computer-vision quality checks**: Photos validated; warranty documentation automated.

### When You Outgrow This Tier

Move to the **100–1k org** playbook when:

- Tech count passes 25; multi-team management complexity.
- Multi-location ops with regional dispatch.
- ServiceTitan or higher-end platform investment justified.
- Inventory + warehouse operations material.
- Recurring-contract base sizable enough to warrant subscription-management dedicated function.

## By Industry (at this scale)

1. **HVAC**: Seasonal demand peaks. Maintenance plans are 30–50% of revenue at scale. Refrigerant + parts inventory critical.
2. **Plumbing**: Emergency calls + scheduled work mix. After-hours premium pricing common.
3. **Electrical**: Permit-required work + commercial vs residential mix. Licensed-tech matching mandatory.
4. **IT Services (MSP)**: On-site + remote service mix. Recurring managed-service contracts dominate revenue.
5. **Appliance Repair**: Manufacturer-warranty work + customer-pay mix. Parts ordering complexity.
6. **Landscaping / Lawn Care**: Recurring scheduled visits dominant. Seasonal staffing.
7. **Pest Control**: Recurring contracts dominant. Scheduling efficiency critical.
8. **Equipment Maintenance (commercial)**: Long-term service agreements. Predictive maintenance increasingly valued.

## ERP•AI & Proto

**ERP•AI**: Use **Field Service Starter** + **Vehicle + Equipment Management**. Integrate Jobber / HouseCall Pro / ServiceTitan / FieldEdge + accounting (QuickBooks).

**Proto**: Single Proto agent handles intake, scheduling, dispatch, mobile-tech support, customer notifications, post-service follow-up.

## Related

- [Ticket Lifecycle](../ticket-lifecycle/SKILL.md) — service request flow
- [Customer Satisfaction](../customer-satisfaction/SKILL.md) — post-service CSAT
- [Customer 360](../../../sales-crm/01-org-under-100/customer-360/SKILL.md) — service history part of customer record
- [Accounts Receivable](../../../finance-accounting/01-org-under-100/accounts-receivable/SKILL.md) — invoicing + collection
- [Inventory](../../../supply-chain/01-org-under-100/inventory/SKILL.md) — parts inventory management
- [Enterprise Field Service (1k+ people)](../../03-org-1k-plus/field-service/SKILL.md)
