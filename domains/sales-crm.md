---
name: sales-crm
description: This skill should be used when the task involves lead-to-cash, pipeline management, CPQ, contract management, commissions, territory management, and customer 360.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - domain
  type: domain
  scope: internal
---
# Sales & CRM

## Purpose

This domain covers the revenue generation engine: capturing leads, managing opportunities through a pipeline, quoting and pricing, closing deals, managing customer relationships, and tracking the resulting revenue. A builder works in this space when the application must track prospects and customers, manage sales pipelines, generate quotes, process orders, calculate commissions, or provide a unified customer view.

Sales and CRM sit at the intersection of marketing, finance, supply chain, and customer support. Lead data flows from marketing campaigns. Won deals create sales orders that trigger fulfillment. Revenue data feeds financial reporting. Customer issues from support affect renewal likelihood. The data model must handle the full lead-to-cash lifecycle while providing the real-time pipeline visibility that sales leadership demands.

## Key Entities

### Lead

- **Description**: A potential buyer who has shown interest but is not yet qualified. The top of the funnel.
- **Key Fields**: `lead_id`, `first_name`, `last_name`, `email`, `phone`, `company_name`, `job_title`, `source` (web_form, trade_show, referral, cold_call, advertising, partner, content_download), `status` (new, contacted, working, qualified, unqualified, converted), `lead_score`, `assigned_to`, `campaign_id`, `created_date`, `last_activity_date`, `industry`, `company_size`, `annual_revenue_estimate`
- **Relationships**: May convert to account + contact + opportunity. Links to campaign. Links to activities (calls, emails, meetings).
- **Design Notes**: Implement lead scoring based on demographic fit (title, company size, industry) and behavioral signals (website visits, content downloads, email engagement). Score threshold for MQL (marketing qualified lead) handoff to sales.

### Account

- **Description**: A company or organization that is a prospect or customer. The primary relationship entity.
- **Key Fields**: `account_id`, `account_name`, `domain`, `industry`, `employee_count`, `annual_revenue`, `billing_address`, `shipping_address`, `account_type` (prospect, customer, partner, competitor), `account_tier` (enterprise, mid_market, SMB), `parent_account_id`, `owner_id`, `territory_id`, `credit_limit`, `payment_terms`, `tax_exempt_flag`, `created_date`
- **Relationships**: Has many contacts, opportunities, quotes, orders, contracts, cases. Parent/child hierarchy for corporate structures. Links to territory and owner.

### Contact

- **Key Fields**: `contact_id`, `account_id`, `first_name`, `last_name`, `email`, `phone`, `mobile`, `job_title`, `department`, `role_in_buying_process` (decision_maker, influencer, champion, end_user, gatekeeper, economic_buyer, technical_buyer), `status` (active, inactive, do_not_contact), `communication_preferences`, `last_activity_date`
- **Relationships**: Belongs to account. Links to opportunities (contact roles), activities, cases.

### Opportunity

- **Description**: A qualified sales deal being pursued. The core pipeline entity.
- **Key Fields**: `opportunity_id`, `opportunity_name`, `account_id`, `owner_id`, `amount`, `currency_code`, `stage` (see pipeline stages below), `probability`, `close_date`, `next_step`, `type` (new_business, expansion, renewal, upsell, cross_sell), `source` (inbound, outbound, referral, partner, existing_customer), `competitor`, `loss_reason`, `win_reason`, `created_date`, `last_stage_change_date`, `days_in_stage`, `forecast_category` (pipeline, best_case, commit, closed)
- **Relationships**: Belongs to account. Has many contacts (with roles), quotes, activities, products/line items. Links to campaign and territory. May link to contract on close.

### Quote / Proposal

- **Key Fields**: `quote_id`, `quote_number`, `opportunity_id`, `account_id`, `contact_id`, `version`, `status` (draft, pending_approval, approved, sent, accepted, rejected, expired), `valid_until_date`, `total_amount`, `discount_total`, `tax_amount`, `currency_code`, `payment_terms`, `prepared_by`, `approved_by`
- **Lines**: `product_id`, `description`, `quantity`, `list_price`, `discount_percent`, `discount_amount`, `net_price`, `configuration_details`
- **Relationships**: Links to opportunity. Contains product line items. May convert to sales order on acceptance.

### Product / Price Book

- **Product Key Fields**: `product_id`, `product_name`, `product_code`, `product_family`, `description`, `is_active`, `unit_of_measure`
- **Price Book Key Fields**: `price_book_id`, `price_book_name`, `currency_code`, `effective_date`, `expiration_date`, `is_standard`
- **Price Book Entry**: `product_id`, `price_book_id`, `list_price`, `min_price` (floor), `cost`
- **Relationships**: Products appear in many price books. Price books can be standard (default), channel-specific, or customer-specific. Quotes pull pricing from the applicable price book.

### Sales Order

- **Key Fields**: `order_id`, `order_number`, `account_id`, `opportunity_id`, `order_date`, `status` (draft, submitted, approved, fulfilled, invoiced, cancelled), `ship_to_address`, `bill_to_address`, `total_amount`, `tax_amount`, `shipping_method`, `payment_terms`, `currency_code`
- **Lines**: `product_id`, `quantity`, `unit_price`, `discount`, `tax_code`, `delivery_date`, `fulfillment_status`
- **Relationships**: Links to opportunity, account, quote. Triggers fulfillment in supply chain. Generates AR invoice.

### Contract

- **Key Fields**: `contract_id`, `contract_number`, `account_id`, `type` (subscription, license, service_agreement, MSA, SOW), `start_date`, `end_date`, `term_months`, `auto_renew`, `renewal_notice_days`, `total_value`, `annual_value`, `status` (draft, in_review, active, expired, terminated, renewed), `payment_schedule`, `cancellation_terms`, `signed_date`, `owner_id`
- **Relationships**: Links to account, opportunity, products. Has many amendments. Drives renewal opportunities.

### Territory

- **Key Fields**: `territory_id`, `territory_name`, `parent_territory_id`, `territory_type` (geographic, named_account, industry_vertical, product_line), `assigned_rep_id`, `assigned_overlay_ids`, `account_assignment_rules`
- **Relationships**: Hierarchical. Contains accounts. Links to sales reps. Drives commission calculations and reporting roll-ups.

### Commission Plan

- **Key Fields**: `plan_id`, `plan_name`, `fiscal_year`, `plan_type` (quota_based, revenue_based, margin_based, activity_based), `base_rate`, `accelerators`, `decelerators`, `quota_amount`, `payout_frequency` (monthly, quarterly, annual), `clawback_rules`, `split_rules`
- **Tiers**: `tier_id`, `threshold_min`, `threshold_max`, `rate`, `multiplier`
- **Relationships**: Assigned to sales reps. Links to closed opportunities for calculation. Feeds payroll for payout.

### Campaign

- **Key Fields**: `campaign_id`, `campaign_name`, `type` (email, webinar, trade_show, content, advertising, referral, direct_mail), `status` (planned, active, completed, aborted), `start_date`, `end_date`, `budget`, `actual_cost`, `expected_revenue`, `actual_revenue`, `target_audience`, `channel`
- **Relationships**: Links to leads (sourced), opportunities (influenced), contacts (targeted). Campaign members track response status.

### Activity

- **Key Fields**: `activity_id`, `type` (call, email, meeting, task, note, demo, site_visit), `subject`, `description`, `date`, `duration_minutes`, `status` (planned, completed, cancelled), `owner_id`, `related_to_type` (lead, contact, account, opportunity), `related_to_id`, `outcome`
- **Relationships**: Links to lead, contact, account, or opportunity. Provides activity history for customer 360.

## Core Business Processes

### Lead-to-Cash

1. **Lead Capture** -- Sources: web forms, trade shows (badge scans/list imports), content downloads, chatbot, social, referrals, purchased lists. Deduplicate against existing leads and contacts. Auto-assign to rep based on territory rules or round-robin.
2. **Lead Qualification** -- BANT framework (Budget, Authority, Need, Timeline) or MEDDPICC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Implications, Champion, Competition). Score leads numerically. MQL threshold (e.g., score > 70) triggers sales notification. SQL (sales qualified) after rep confirms fit.
3. **Lead Conversion** -- Create account (or match existing), contact, and opportunity from qualified lead. Transfer activity history. Mark lead as converted.
4. **Opportunity Management** -- See pipeline management below.
5. **Quoting** -- Generate quote with product configuration, pricing, and discounts. See CPQ below.
6. **Negotiation & Close** -- Track redlines, competitor responses, internal approvals. Verbal agreement > contract execution > signed order.
7. **Order Processing** -- Convert accepted quote to sales order. Trigger fulfillment, delivery, and invoicing.
8. **Cash Collection** -- Invoice generation, payment tracking, cash application. (Detail in Finance domain.)

### Pipeline Management

**Standard Stage Gates** (customize per organization):

| Stage | Probability | Exit Criteria | Typical Duration |
|---|---|---|---|
| Prospecting | 10% | Identified need, initial contact made | 1-2 weeks |
| Discovery | 20% | Confirmed pain point, identified stakeholders, budget range discussed | 2-4 weeks |
| Solution Design | 40% | Demo completed, solution mapped to requirements, technical validation | 2-4 weeks |
| Proposal | 60% | Quote delivered, pricing reviewed, terms discussed | 1-3 weeks |
| Negotiation | 80% | Verbal agreement on terms, contract in redline, legal review | 1-4 weeks |
| Closed Won | 100% | Contract signed, PO received | -- |
| Closed Lost | 0% | Decision made, loss reason captured | -- |

**Forecasting Methods**:
- **Stage-weighted**: Sum of (amount * stage probability). Simple but inaccurate for individual deals.
- **Category-based**: Reps assign deals to pipeline/best_case/commit categories. Forecast = commit + (best_case * factor). More nuanced.
- **AI/ML-based**: Historical win rate by rep, account type, deal size, stage velocity. Predicts close probability per deal.
- **Overlay**: Manager applies judgment adjustments to rep forecasts. Track adjustments and accuracy over time.

**Pipeline Health Metrics**:
- **Coverage ratio**: Pipeline value / quota. Target: 3-4x for annual deals, 2-3x for transactional.
- **Stage velocity**: Average days in each stage. Flag deals stagnating beyond 2x average.
- **Pipeline shape**: Even distribution across stages indicates healthy flow. Bottom-heavy (too many in late stage) suggests insufficient prospecting.

### Configure-Price-Quote (CPQ)

1. **Product Selection** -- Browse catalog or guided selling (answer questions, system recommends products). Handle product bundles, required add-ons, and incompatible combinations.
2. **Configuration** -- For configurable products: select options, features, and specifications. Validation rules: mandatory features, valid combinations, capacity constraints. Bill of materials generation for configured products.
3. **Pricing** -- Pull from applicable price book (standard, channel, customer-specific). Apply discount rules: volume tiers, promotional, competitive match, strategic. Enforce floor price (minimum margin). Multi-currency with exchange rate conversion.
4. **Discount Approval** -- Auto-approve within standard discount authority (e.g., rep: up to 15%, manager: up to 25%, VP: up to 40%, CEO: unlimited). Route for approval above authority level.
5. **Quote Generation** -- Branded PDF or interactive proposal with product details, pricing breakdown, terms, and payment schedule. Support for multiple quote versions.
6. **eSignature** -- Integrate with DocuSign, Adobe Sign, or similar for electronic signature. Track signature status.

### Contract Management

- **Contract Creation** -- Template-based with clause library. Standard terms vs. negotiated terms tracking. Playbook: pre-approved fallback positions for common negotiation points.
- **Approval Workflow** -- Route based on deal value, non-standard terms, and contract type. Legal review for custom terms. Finance review for non-standard payment terms.
- **Amendment Management** -- Track changes to active contracts. Amendment chain preserving full history. Impact on billing, revenue recognition, and quotas.
- **Renewal Management** -- Alert owner 90/60/30 days before expiration. Auto-create renewal opportunity. Track renewal rate and uplift. Auto-renewal processing if contractually specified.
- **Obligation Tracking** -- Milestone deliverables, SLAs, and commitments made in the contract. Assigned owners and due dates.

### Commission Calculation

1. **Transaction Crediting** -- Determine which rep(s) get credit for each deal. Rules: account owner, opportunity owner, overlay specialist, team split. Handle splits (e.g., 60/40 between primary and overlay).
2. **Quota Attainment** -- Calculate attainment = credited revenue / quota. Period: monthly, quarterly, or annual. Multi-measure quotas: revenue, units, strategic product mix.
3. **Rate Application** -- Apply commission rate based on attainment tier. Example: 0-80% attainment = 5% rate, 80-100% = 8%, 100-120% = 12% (accelerator), >120% = 15% (super-accelerator). Decelerators below threshold (e.g., 0-50% = 3%).
4. **Adjustments** -- Clawbacks for cancelled contracts or churned customers within clawback window (typically 6-12 months). Guarantees for new hires (ramp period, typically 3-6 months). SPIFs (sales performance incentive funds) for targeted campaigns.
5. **Payout** -- Calculate net commission after adjustments. Route for finance approval. Post to payroll. Provide detailed commission statement to rep.

### Customer Segmentation

- **Firmographic**: Industry, company size, revenue, geography, growth stage.
- **Behavioral**: Purchase history, product usage, engagement level, support interactions, expansion signals.
- **Value-Based**: LTV (lifetime value), ARR (annual recurring revenue), margin contribution.
- **Segment Tiers**: Typically enterprise (>$100K ARR), mid-market ($25-100K), SMB (<$25K). Drives: sales motion (field vs. inside vs. self-service), service level, and resource allocation.
- **Ideal Customer Profile (ICP)**: Define attributes of best-fit customers based on win rate, LTV, and NRR analysis. Score accounts against ICP for prioritization.

### Campaign Management

1. **Planning** -- Define objectives (lead gen, pipeline creation, brand awareness), target audience, channel mix, budget, timeline, and success metrics.
2. **Execution** -- Multi-channel: email sequences, digital ads, events, webinars, content syndication. Track spend against budget.
3. **Response Tracking** -- Track campaign members and their responses: sent > delivered > opened > clicked > responded > converted. Attribution: first-touch, last-touch, multi-touch (linear, time-decay, U-shaped, W-shaped).
4. **ROI Analysis** -- Campaign cost / pipeline generated. Campaign cost / revenue closed. Cost per lead, cost per MQL, cost per SQL, cost per opportunity, cost per customer. Payback period by campaign type.

### Customer 360 View

A unified view of the customer across all touchpoints. Aggregate data from:

- **Account & Contact Details** -- Company info, hierarchy, contacts with roles and engagement history.
- **Sales History** -- All opportunities (won and lost), quotes, orders, contract terms.
- **Financial** -- AR balance, payment history, credit status, lifetime revenue.
- **Support** -- Open and historical cases, CSAT scores, SLA compliance.
- **Product Usage** -- Feature adoption, login frequency, API calls (for SaaS).
- **Engagement** -- Marketing touches, event attendance, NPS responses.
- **Health Score** -- Composite score predicting renewal/churn risk. Inputs: usage trend, support trend, engagement trend, payment timeliness, NPS, contract remaining term.

## Regulatory & Compliance

| Requirement | Scope | What to Track |
|---|---|---|
| **GDPR** | EU contacts/leads | Consent for communication (opt-in required). Right to access, rectification, erasure. Data processing records. 72-hour breach notification. |
| **CAN-SPAM / CASL** | Email marketing (US/Canada) | Opt-out mechanism on all commercial email. Honor unsubscribes within 10 days. Physical address in email. CASL: express consent required. |
| **CCPA / CPRA** | California consumers | Right to know, delete, opt-out of sale. Do-not-sell link. Data inventory. |
| **TCPA** | US phone/SMS | Prior express consent for automated calls/texts. Do-not-call list compliance. |
| **Revenue Recognition (ASC 606)** | Financial reporting | Contract identification, performance obligations, transaction price allocation. Sync with finance. |
| **Export Controls** | International sales | Denied party screening. Embargo country restrictions (OFAC). Dual-use goods controls. |
| **Anti-Bribery (FCPA/UKBA)** | International sales | Gift and entertainment tracking. Agent/distributor due diligence. Commission reasonableness. |
| **Data Residency** | Various jurisdictions | Customer data storage location. Cross-border transfer restrictions. |

## Common Configuration Patterns

- **Territory Design**: Choose model: geographic (regions/districts), named accounts (strategic reps own specific accounts), vertical (industry specialists), product (product specialists), or hybrid. Define rules engine for automatic account assignment. Handle account moves and territory realignments with pipeline and commission transfer rules.
- **Sales Process Customization**: Different pipelines for different deal types: new logo pipeline (7 stages, longer), expansion pipeline (4 stages, faster), renewal pipeline (3 stages, transactional). Customize fields, validation, and required activities per pipeline.
- **Lead Routing Rules**: Round-robin (equal distribution), weighted (by capacity/skill), geographic (by territory), account-based (to account owner), or hybrid. SLA: respond to inbound lead within 5 minutes for highest conversion.
- **Discount Authority Matrix**: Define by role and product line. Rep: 0-10%, manager: 10-20%, director: 20-30%, VP: 30-50%, CEO: unlimited. Non-standard terms (payment, SLA, liability) always require legal review.
- **Price Book Strategy**: Standard price book (MSRP). Channel price book (partner discounts). Enterprise price book (negotiated rates). Currency-specific price books for international. Effective dates for price increases.
- **Forecast Categories**: Pipeline (early stage, low confidence), best case (progressing, moderate confidence), commit (rep commits to close this period), closed (won). Define thresholds: commit requires verbal agreement + timeline, best case requires demo completed + budget confirmed.
- **Activity Requirements**: Minimum activities per stage. Example: Discovery stage requires 3+ meetings with different stakeholders logged. Proposal stage requires technical validation documented. Enforce via validation rules or reporting.

## Integration Points

| System | Direction | Data | Pattern |
|---|---|---|---|
| **Marketing Automation** | Bidirectional | Leads, contacts, campaigns, engagement data | Marketo, HubSpot, Pardot. Sync leads and contacts. Pass MQLs to CRM. Return opportunity status for campaign attribution. |
| **Finance / Billing** | Outbound | Sales orders, contract terms | Closed-won opportunity triggers order and billing. Revenue data for ASC 606. Commission accruals. |
| **Supply Chain / Fulfillment** | Outbound | Sales orders, delivery requirements | Order triggers fulfillment, pick-pack-ship. ATP queries for delivery date commitment. |
| **CPQ Engine** | Bidirectional | Product config, pricing, quotes | If external CPQ (Salesforce CPQ, DealHub, Conga), sync products, price books, and quote data. |
| **eSignature** | Bidirectional | Contracts out, signed documents in | DocuSign, Adobe Sign. Track signature status. Store executed contracts. |
| **Email & Calendar** | Bidirectional | Emails, meetings, tasks | Auto-log emails to contact/opportunity record. Calendar sync for meeting tracking. |
| **Enrichment Services** | Inbound | Firmographic, technographic, intent data | ZoomInfo, Clearbit, Bombora, 6sense. Enrich lead/account data. Intent signals for prioritization. |
| **Customer Support** | Bidirectional | Cases, satisfaction scores, escalations | Show open cases on customer 360. Escalated cases flag at-risk accounts for renewal. |
| **Product / Usage Analytics** | Inbound | Usage data, feature adoption, health signals | For SaaS: product telemetry feeds customer health score and expansion signals. |
| **Partner Portal** | Bidirectional | Deal registration, partner leads, MDF claims | Channel partner co-selling. Avoid conflict with direct sales. Partner commission tracking. |

## KPIs & Reporting

### Pipeline Metrics

- **Pipeline Value**: Total open opportunity amount by stage, owner, territory. Trend over time.
- **Pipeline Coverage**: Pipeline / quota target. By rep and by team. Target: 3-4x.
- **Win Rate**: Opportunities won / (won + lost). Exclude still-open. Segment by deal size, type, source, rep.
- **Average Deal Size**: Total closed revenue / number of closed deals. Trend over time.
- **Sales Cycle Length**: Days from opportunity creation to close. Segment by deal size and type. Enterprise: 90-180 days. Mid-market: 30-90 days. SMB: 7-30 days.
- **Stage Conversion Rates**: Percentage moving from each stage to the next. Identify leaky stages.

### Activity Metrics

- **Calls / Emails / Meetings per Rep**: Daily and weekly activity volumes. Benchmark: outbound SDR 50+ calls/day, AE 8-10 meetings/week.
- **Lead Response Time**: Minutes from lead creation to first contact. Target: <5 minutes for inbound.
- **Touches to Conversion**: Average activities before lead converts to opportunity.

### Revenue Metrics

- **Bookings**: New contract value signed in period. ARR (annual) vs. TCV (total contract value).
- **Revenue**: Recognized revenue per accounting standards. Monthly, quarterly, annual.
- **ARR / MRR Growth**: Net new ARR = new + expansion - contraction - churn.
- **Net Revenue Retention (NRR)**: (Starting ARR + expansion - contraction - churn) / starting ARR. Target: >110% for SaaS.
- **Customer Acquisition Cost (CAC)**: Total sales and marketing cost / new customers. CAC payback: months of gross margin to recover CAC. Target: <18 months.
- **LTV:CAC Ratio**: Customer lifetime value / customer acquisition cost. Target: >3:1.

### Forecast Accuracy

- **Forecast vs. Actual**: Committed forecast / actual closed. Target: within 10%.
- **Forecast Bias**: Consistently over or under. Track by rep to coach accuracy.

## Checklist

- [ ] Design lead data model with scoring fields and conversion tracking
- [ ] Configure lead routing rules (round-robin, territory, account-based)
- [ ] Build lead scoring model with demographic and behavioral inputs
- [ ] Define sales pipeline stages with exit criteria and required fields per stage
- [ ] Configure opportunity forecasting with categories (pipeline, best case, commit)
- [ ] Set up product catalog with price books (standard, channel, customer-specific)
- [ ] Implement CPQ workflow: configure > price > discount approval > quote generation
- [ ] Build discount approval routing based on authority matrix
- [ ] Configure quote generation with branded templates and eSignature integration
- [ ] Implement sales order creation from accepted quote
- [ ] Set up contract management with templates, approval workflow, and renewal tracking
- [ ] Design territory hierarchy and account assignment rules
- [ ] Configure commission plans with quota, tiers, accelerators, and split rules
- [ ] Build commission calculation engine with clawback and adjustment support
- [ ] Set up campaign tracking with multi-touch attribution
- [ ] Build customer 360 view aggregating sales, finance, support, and usage data
- [ ] Implement customer health scoring for churn prediction
- [ ] Configure GDPR consent management for contacts and marketing communication
- [ ] Build pipeline reports and dashboards for reps, managers, and executives
- [ ] Set up forecast submission and roll-up workflow

## Related

- [Finance & Accounting](finance-accounting.md) -- order-to-cash, revenue recognition, AR, commission accruals
- [Supply Chain](supply-chain.md) -- order fulfillment, ATP, delivery scheduling
- [Customer Support](customer-support.md) -- case history in customer 360, escalation impacts on renewals
- [Project Operations](project-operations.md) -- services opportunities, SOW-based selling, project-based revenue
