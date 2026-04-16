---
name: supply-chain
description: This skill should be used when the task involves procurement, inventory management, warehousing, logistics, MRP, and quality management.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - domain
  type: domain
  scope: internal
---
# Supply Chain

## Purpose

This domain covers the flow of goods from supplier to customer: buying materials, managing inventory, running warehouses, planning production, and shipping finished goods. A builder works in this space when the application must handle purchase orders, track stock levels, manage warehouse operations, plan material requirements, or maintain quality standards across the supply chain.

Supply chain is where physical operations meet financial systems. Every goods receipt creates an accounting entry. Every shipment triggers revenue recognition. Inventory valuation directly impacts the balance sheet. The data model must handle the complexity of lot tracking, serial numbers, multiple units of measure, and multi-location stock while keeping transactions flowing at operational speed.

## Key Entities

### Item / Product Master

- **Description**: The central record for anything bought, made, stocked, or sold. Contains specifications, sourcing, costing, and planning parameters.
- **Key Fields**: `item_id`, `item_number`, `description`, `item_type` (raw_material, semi_finished, finished_good, service, consumable, MRO), `category_id`, `uom_base` (unit of measure), `uom_purchase`, `uom_sales`, `weight`, `dimensions`, `is_lot_tracked`, `is_serial_tracked`, `shelf_life_days`, `abc_class`, `standard_cost`, `last_purchase_price`, `lead_time_days`, `safety_stock_qty`, `reorder_point`, `reorder_qty`, `min_order_qty`, `status` (active, discontinued, phase_out, blocked)
- **Relationships**: Links to BOM (bill of materials), vendor catalog entries, warehouse locations, price lists, quality specs. Has many: stock transactions, purchase order lines, sales order lines.
- **Design Notes**: Separate item master (universal attributes) from item-site (site-specific planning parameters) and item-vendor (vendor-specific pricing and lead times). Support multiple UoM with conversion factors.

### Vendor / Supplier

- **Key Fields**: `vendor_id`, `vendor_name`, `tax_id`, `vendor_type` (supplier, subcontractor, drop_shipper), `payment_terms`, `currency_code`, `lead_time_days`, `quality_rating`, `on_time_delivery_rate`, `status` (approved, probationary, blocked, inactive), `diversity_classification`, `certifications`, `contacts`, `addresses`
- **Relationships**: Links to purchase orders, AP invoices, vendor scorecards, item-vendor catalog, quality records.

### Purchase Requisition

- **Key Fields**: `requisition_id`, `requester_id`, `department_id`, `requisition_date`, `status` (draft, submitted, approved, rejected, converted_to_po, cancelled), `urgency` (standard, urgent, critical), `budget_code`
- **Lines**: `item_id`, `description`, `quantity`, `uom`, `estimated_unit_price`, `required_date`, `suggested_vendor_id`, `account_code`
- **Relationships**: Created by requester. Approved through workflow. Converts to purchase order.

### Purchase Order

- **Key Fields**: `po_id`, `po_number`, `vendor_id`, `order_date`, `expected_delivery_date`, `status` (draft, sent, acknowledged, partially_received, fully_received, invoiced, closed, cancelled), `payment_terms`, `shipping_terms` (FOB, CIF, DDP, EXW), `currency_code`, `total_amount`, `buyer_id`
- **Lines**: `line_id`, `item_id`, `quantity_ordered`, `quantity_received`, `unit_price`, `discount`, `tax_code`, `delivery_date`, `receiving_warehouse_id`
- **Relationships**: May originate from requisition or MRP. Links to goods receipts, AP invoices (three-way match), vendor. Releases against blanket POs.

### Goods Receipt / Receiving Document

- **Key Fields**: `receipt_id`, `po_id`, `vendor_id`, `receipt_date`, `status` (received, inspected, put_away, rejected), `warehouse_id`, `dock_door`, `carrier`, `tracking_number`
- **Lines**: `item_id`, `quantity_received`, `lot_number`, `serial_numbers`, `expiration_date`, `inspection_status`, `put_away_location`
- **Relationships**: Links to PO line. Updates inventory on-hand. Triggers quality inspection if configured. Creates accounting entry (debit inventory, credit GR/IR clearing).

### Inventory Stock Record

- **Key Fields**: `stock_id`, `item_id`, `warehouse_id`, `location_id` (bin/zone), `lot_number`, `serial_number`, `quantity_on_hand`, `quantity_reserved`, `quantity_available`, `quantity_in_transit`, `quantity_on_order`, `unit_cost`, `valuation_method` (FIFO, LIFO, weighted_average, standard_cost, specific_identification)
- **Relationships**: Links to item master and warehouse location. Updated by every stock transaction (receipt, issue, transfer, adjustment, count).

### Warehouse / Location

- **Key Fields**: `warehouse_id`, `warehouse_name`, `address`, `warehouse_type` (distribution_center, manufacturing, drop_ship, consignment, bonded), `status` (active, inactive)
- **Zones/Locations**: `location_id`, `zone` (receiving, bulk, pick, pack, ship, quarantine, returns), `aisle`, `rack`, `shelf`, `bin`, `capacity`, `storage_conditions` (ambient, refrigerated, frozen, hazmat)
- **Relationships**: Contains locations. Links to stock records. Links to shipping carriers.

### Bill of Materials (BOM)

- **Key Fields**: `bom_id`, `parent_item_id`, `bom_type` (manufacturing, engineering, planning), `version`, `effective_date`, `status` (active, pending, obsolete), `yield_percentage`
- **Lines**: `component_item_id`, `quantity_per`, `uom`, `scrap_factor`, `operation_sequence`, `is_phantom`, `effective_date`, `expiration_date`
- **Relationships**: Parent item has many component items (can be multi-level). Links to routing/operations for production sequencing.

### Production / Work Order

- **Key Fields**: `work_order_id`, `parent_item_id`, `bom_id`, `quantity_to_produce`, `scheduled_start`, `scheduled_end`, `actual_start`, `actual_end`, `status` (planned, released, in_progress, completed, closed), `priority`, `production_line`
- **Relationships**: Links to BOM for material requirements. Links to routing for operations. Consumes component inventory, produces parent item inventory. Captures labor and overhead costs.

### Shipment

- **Key Fields**: `shipment_id`, `sales_order_id`, `ship_date`, `carrier_id`, `service_level` (ground, express, overnight, freight), `tracking_number`, `status` (picked, packed, shipped, in_transit, delivered, returned), `weight`, `freight_cost`, `ship_from_warehouse_id`, `ship_to_address`, `estimated_delivery_date`
- **Relationships**: Links to sales order, carrier, warehouse. Contains packing details. Triggers AR invoice generation.

### Quality Inspection

- **Key Fields**: `inspection_id`, `reference_type` (goods_receipt, work_order, in_process, final), `reference_id`, `item_id`, `lot_number`, `sample_size`, `inspection_date`, `status` (pending, in_progress, passed, failed, conditionally_accepted), `inspector_id`
- **Results**: `test_id`, `test_name`, `specification_min`, `specification_max`, `actual_value`, `result` (pass, fail)
- **Relationships**: Links to goods receipt or work order. Failed inspections trigger non-conformance reports.

### Non-Conformance Report (NCR)

- **Key Fields**: `ncr_id`, `inspection_id`, `item_id`, `defect_type`, `quantity_affected`, `severity` (critical, major, minor), `disposition` (use_as_is, rework, scrap, return_to_vendor), `root_cause`, `status` (open, investigating, corrective_action, closed)
- **Relationships**: Links to inspection, CAPA (corrective and preventive action). May trigger vendor quality debit or RMA.

## Core Business Processes

### Procure-to-Receive

1. **Demand Identification** -- MRP generates planned orders. Users create purchase requisitions. Min/max reorder triggers.
2. **Vendor Selection** -- For standard items: approved vendor list with primary/secondary/tertiary ranking. For non-standard: RFQ process.
3. **RFQ/RFP Process** -- Issue Request for Quotation to qualified vendors. Define evaluation criteria (price 40%, quality 25%, delivery 20%, service 15%). Score responses. Award to winner.
4. **Purchase Order Creation** -- Convert requisition or planned order to PO. Apply contract pricing. Check budget availability. Route for approval (typically: <$10K buyer, $10-50K purchasing manager, >$50K director).
5. **PO Acknowledgment** -- Vendor confirms PO terms and delivery date. Track confirmations. Escalate non-responsive vendors.
6. **Advance Ship Notice (ASN)** -- Vendor sends shipment details electronically (EDI 856). Pre-populates receiving documents.
7. **Receiving** -- Dock receipt: verify carrier, count pallets, check for damage. Detailed receipt: match items and quantities to PO. Capture lot/serial numbers. Quality hold if inspection required.
8. **Quality Inspection** -- Sample-based or 100% inspection per inspection plan. Record test results against specifications. Disposition: accept, reject, conditional accept.
9. **Putaway** -- System directs putaway to optimal location based on zone rules, FIFO, storage conditions, and available capacity. Confirm via barcode scan.
10. **Three-Way Match & Invoice** -- Match PO, receipt, and vendor invoice. Post to AP. (Detail in Finance domain.)

### Inventory Management

- **ABC Classification**: A items (top 20% of items, ~80% of value) -- tight control, frequent counting, low safety stock. B items (next 30%, ~15% of value) -- moderate control. C items (bottom 50%, ~5% of value) -- simplified control, higher safety stock, less frequent counting.
- **Cycle Counting**: Count a subset of items daily instead of full physical inventory. Count frequency by ABC class: A items monthly, B items quarterly, C items annually. Tolerance thresholds: A = 0.5%, B = 1%, C = 2%. Post adjustments for variances outside tolerance.
- **Stock Valuation**: FIFO (first in, first out) -- most common, matches physical flow. Weighted Average -- recalculate cost on each receipt. Standard Cost -- predetermined cost, variance tracking (purchase price variance, production variance). Specific Identification -- for high-value, serialized items.
- **Lot Tracking**: Assign lot numbers at receipt or production. Track lot through all movements. Enable forward traceability (lot > where did it go) and backward traceability (finished good > what lots went into it). Critical for food, pharma, automotive.
- **Serial Tracking**: Unique identifier for each unit. Track individual unit history. Required for warranty management, recall, and high-value asset tracking.
- **Inventory Adjustments**: Positive (found stock) or negative (shrinkage, damage, obsolescence). Require reason codes and approval. Post to GL (debit/credit inventory adjustment account).
- **Stock Transfers**: Warehouse-to-warehouse transfers. In-transit inventory tracking. Two-step (ship from source, receive at destination) for cross-location moves.

### Warehouse Operations (WMS)

1. **Receiving** -- Create receipt from ASN or PO. Scan barcodes. Capture lot/serial. Quality check. License plate (LPN) creation for pallet tracking.
2. **Putaway** -- System-directed or user-directed. Rules: zone-based (raw materials to zone A, finished goods to zone B), velocity-based (fast movers to forward pick), product attribute (hazmat to special storage, temp-sensitive to cold chain).
3. **Replenishment** -- Trigger when pick location quantity drops below minimum. Bulk-to-pick replenishment. Priority-based: active orders first.
4. **Order Allocation / Wave Planning** -- Group orders into waves by priority, carrier, destination zone, or ship window. Allocate inventory to orders. Reserve stock.
5. **Picking** -- Methods: discrete (one order at a time), batch (multiple orders combined), zone (pickers stay in assigned zones, orders pass through), wave (timed releases). Pick path optimization to minimize travel. Confirm by scan.
6. **Packing** -- Cartonization: suggest box size based on item dimensions. Pack verification: scan each item. Generate packing slip. Apply shipping label.
7. **Shipping** -- Rate shopping across carriers. Generate shipping labels and customs documents. Manifest creation. Load planning for truck utilization. Track shipment handoff to carrier.
8. **Returns (RMA)** -- Receive returned goods. Inspect condition. Disposition: restock, refurbish, scrap, return to vendor. Credit customer or replace.

### MRP (Material Requirements Planning)

1. **Demand Planning** -- Aggregate demand from: sales orders (confirmed), sales forecast (statistical or manual), interplant transfers, safety stock requirements. Demand time fence: inside fence use firm orders only; outside fence use forecast.
2. **BOM Explosion** -- For each demand, explode the BOM to determine component requirements. Multi-level: finished good > subassembly > raw material. Net requirements = gross requirement - on-hand - on-order + safety stock.
3. **Lead Time Offsetting** -- Schedule backward from need date by lead time. Purchase lead time for bought items. Manufacturing lead time for made items (setup + run time per routing).
4. **Planned Order Generation** -- System generates planned purchase orders (buy items) and planned work orders (make items). Respect lot sizing rules: fixed order quantity, lot-for-lot, period order quantity, min/max.
5. **Capacity Planning (CRP)** -- Check planned work orders against work center capacity (machine hours, labor hours). Identify bottlenecks. Options: overtime, outsource, reschedule, add shift.
6. **Firming & Release** -- Planner reviews planned orders. Firms (freezes) within planning time fence. Releases to purchasing (PO creation) or production (work order release).
7. **Exception Management** -- MRP generates action messages: expedite (need date moved in), defer (need date moved out), cancel (demand removed), increase/decrease quantity. Planner processes exceptions daily.

### Production Execution

1. **Work Order Release** -- Verify material availability. Print shop floor paperwork or send to MES (manufacturing execution system). Issue components to work order.
2. **Material Issue** -- Backflush (auto-deduct components based on BOM when finished good is reported) or manual issue. Track actual vs. standard consumption.
3. **Operation Reporting** -- Report labor hours, machine hours, quantities completed per operation. Track setup time vs. run time.
4. **Quality Checkpoints** -- In-process inspections at defined operations. Statistical process control (SPC) for critical parameters.
5. **Completion** -- Report finished goods quantity. Receive into inventory. Calculate actual cost vs. standard cost. Post variances (material, labor, overhead).

### Quality Management

- **Inspection Plans** -- Define tests, specifications, and sampling plans per item-operation combination. AQL (Acceptable Quality Level) tables for sampling. Skip-lot rules for proven vendors.
- **Non-Conformance** -- Record defects with category, severity, and quantity. Disposition: use as-is (with engineering approval), rework, scrap, return to vendor. Cost tracking on each NCR.
- **CAPA (Corrective and Preventive Action)** -- Root cause analysis (5-Why, Fishbone, 8D). Define corrective actions with responsible person and due date. Verify effectiveness. Preventive actions to avoid recurrence.
- **Vendor Quality** -- Track defect rates by vendor. Vendor scorecards: quality rating, on-time delivery, responsiveness, cost competitiveness. Triggered actions: probation, increased inspection, disqualification.
- **Traceability** -- Full lot genealogy from raw material receipt through production to finished goods shipment. Recall capability: identify all customers who received product from a specific lot within hours.

## Regulatory & Compliance

| Requirement | Scope | What to Track |
|---|---|---|
| **FDA 21 CFR Part 11** | Pharma, food, medical devices | Electronic records and signatures. Audit trails on all GMP-relevant data. System validation. |
| **GMP (Good Manufacturing Practice)** | Pharma, food | Batch records, equipment calibration, environmental monitoring, cleaning validation. |
| **ISO 9001** | General quality management | Document control, internal audits, management review, corrective actions, process control. |
| **IATF 16949** | Automotive | PPAP (production part approval), APQP (advanced product quality planning), control plans, FMEA. |
| **Hazardous Materials** | Chemical, industrial | SDS (Safety Data Sheets), proper storage, labeling, handling, transport (DOT/IATA/IMDG). |
| **Country of Origin / Tariffs** | International trade | HTS codes, duty rates, free trade agreement qualification, certificates of origin. |
| **Customs & Trade Compliance** | Import/export | Export controls (EAR, ITAR), denied party screening, import declarations, bonded warehouse rules. |
| **Sustainability / ESG** | Increasingly all | Scope 3 emissions (supply chain), conflict minerals (Dodd-Frank 1502), modern slavery (UK/AU acts), RoHS/REACH (EU). |
| **Lot Traceability** | Food, pharma, automotive | Full forward/backward traceability. Recall readiness: mock recall exercises annually. |

## Common Configuration Patterns

- **Multi-Site Inventory**: Separate stock records per warehouse/site. Item-site level planning parameters (safety stock, reorder point) because demand and lead time vary by location.
- **Unit of Measure Conversions**: Base UoM (each) with conversion factors for purchase UoM (case of 24), sales UoM (pallet of 48 cases), and production UoM (kg). Conversion can be fixed or item-specific (1 case = 24 for item A, 12 for item B).
- **Item Numbering**: Intelligent (encodes category/attributes, e.g., RM-ELE-001) vs. non-intelligent (sequential, e.g., 1000001). Non-intelligent is preferred for flexibility; use attributes and categories for classification instead. Cross-reference table for customer/vendor part numbers.
- **Warehouse Zone Strategy**: Receiving dock > quality hold > bulk storage > forward pick > packing > shipping dock. Separate zones for: returns, hazmat, temperature-controlled, high-security.
- **Approval Thresholds for POs**: Tiered: <$5K auto-approve, $5-25K buyer approval, $25-100K purchasing manager, >$100K VP/director. Emergency PO process for production-critical items.
- **Vendor Managed Inventory (VMI)**: Share consumption/stock data with vendor. Vendor replenishes to agreed min/max levels. Invoiced on consumption (consignment) or on receipt.
- **Blanket/Contract POs**: Negotiate annual volume pricing. Issue releases against the blanket as needed. Track committed vs. released vs. received quantities.

## Integration Points

| System | Direction | Data | Pattern |
|---|---|---|---|
| **Finance / GL** | Outbound | Inventory valuation, COGS, purchase accruals | Every stock transaction posts to GL. Periodic: inventory revaluation. |
| **Sales / CRM** | Inbound | Sales orders, demand forecast | Sales orders drive fulfillment. Forecast feeds demand planning. |
| **E-Commerce** | Bidirectional | Orders in, inventory availability out | Real-time available-to-promise (ATP). Order status updates. |
| **EDI / Supplier Portal** | Bidirectional | POs out (850), ASNs in (856), invoices in (810), inventory out (846) | EDI or API-based B2B integration. Translation and mapping layer. |
| **Shipping Carriers** | Bidirectional | Ship requests out, tracking/rates in | API integration with UPS, FedEx, DHL, LTL carriers. Rate shopping, label generation, tracking. |
| **WMS (External)** | Bidirectional | Orders/receipts out, confirmations in | If using standalone WMS (Manhattan, Blue Yonder), sync item master, orders, and receipts. |
| **MES (Manufacturing Execution)** | Bidirectional | Work orders out, production completions in | Real-time shop floor data. OEE metrics. |
| **Customs / Trade Compliance** | Outbound | Shipment data for customs declarations | Denied party screening on PO/SO. HTS classification. |
| **IoT / Sensors** | Inbound | Temperature, humidity, location tracking | Cold chain monitoring. Asset tracking via RFID/BLE. Real-time inventory visibility. |
| **PLM (Product Lifecycle)** | Inbound | Engineering BOM, item specifications | ECO (engineering change order) triggers BOM update in ERP. |

## KPIs & Reporting

### Procurement

- **Purchase Order Cycle Time**: Days from requisition to PO issuance. Target: <3 days for standard items.
- **On-Time Delivery Rate**: PO lines received by promised date / total PO lines. Target: >95%.
- **Purchase Price Variance (PPV)**: (Standard price - actual price) * quantity. Positive = savings.
- **Vendor Scorecard**: Composite of quality, delivery, price, and responsiveness. Quarterly review.
- **Spend Under Contract**: Contract-covered spend / total spend. Target: >80%.

### Inventory

- **Inventory Turnover**: COGS / average inventory value. Higher is better. Benchmark varies by industry (3-6 for manufacturing, 8-12 for distribution).
- **Days of Inventory on Hand (DIO)**: Average inventory / (COGS / 365). Lower is better.
- **Stockout Rate**: SKUs out of stock / total active SKUs. Target: <2%.
- **Inventory Accuracy**: Count matches / total counted. Target: >99% for A items.
- **Carrying Cost**: (Holding cost / average inventory value) * 100. Typically 20-30% annually (capital cost, storage, obsolescence, insurance, shrinkage).
- **Dead Stock / Obsolescence**: Inventory with no movement in 12+ months as percentage of total. Target: <5%.

### Warehouse

- **Order Fill Rate**: Orders shipped complete / total orders. Target: >98%.
- **Perfect Order Rate**: Orders delivered on time, complete, undamaged, with correct documentation. Target: >95%.
- **Pick Accuracy**: Lines picked correctly / total lines picked. Target: >99.5%.
- **Warehouse Utilization**: Used capacity / total capacity. Target: 80-85% (leave room for surge).
- **Dock-to-Stock Time**: Hours from receipt at dock to putaway complete. Target: <24 hours.

### Production

- **OEE (Overall Equipment Effectiveness)**: Availability * Performance * Quality. World-class: >85%.
- **Schedule Adherence**: Work orders completed on time / total work orders. Target: >95%.
- **Scrap Rate**: Scrap quantity / total produced. Target varies by process.
- **Yield**: Good units produced / total units started. Target: >98%.

## Checklist

- [ ] Design item master with support for multiple UoMs, lot/serial tracking, and ABC classification
- [ ] Configure item-site planning parameters (safety stock, reorder point, lead time) per warehouse
- [ ] Set up vendor master with approved vendor list and scoring criteria
- [ ] Build purchase requisition to purchase order workflow with approval routing
- [ ] Implement RFQ process for non-standard procurement
- [ ] Configure goods receiving with ASN support and quality inspection triggers
- [ ] Build warehouse location structure (zones, aisles, racks, bins) with storage rules
- [ ] Implement putaway logic based on zone, velocity, and storage conditions
- [ ] Configure pick, pack, ship workflow with barcode scanning
- [ ] Set up inventory valuation method (FIFO, weighted average, or standard cost)
- [ ] Implement cycle counting program by ABC classification
- [ ] Build BOM management with multi-level explosion and version control
- [ ] Configure MRP with demand sources, netting logic, and lot sizing rules
- [ ] Implement work order lifecycle with material issue and completion reporting
- [ ] Set up quality inspection plans with test specifications and AQL sampling
- [ ] Build non-conformance and CAPA workflows
- [ ] Configure lot traceability for forward and backward tracking
- [ ] Implement carrier integration for rate shopping, label generation, and tracking
- [ ] Set up EDI or API integration with key suppliers (PO, ASN, invoice)
- [ ] Build inventory transaction posting to GL with proper account mapping

## Related

- [Finance & Accounting](finance-accounting.md) -- inventory valuation, AP from procurement, COGS posting
- [Sales & CRM](sales-crm.md) -- sales orders drive fulfillment, ATP queries, demand forecast
- [Project Operations](project-operations.md) -- project-based procurement, material costs on projects
