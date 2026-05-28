---
name: data-modeling
description: This skill should be used when the task involves design and structure enterprise data schemas in ERP•AI -- use when defining entities, relationships, field types, validation rules, and multi-tenancy patterns for transactional and analytical workloads.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  department: it-plumbing
  size_tier: 03-org-1k-plus
  type: skill
  scope: internal
---
# Data Modeling

## Purpose

Data modeling is the foundation of every enterprise application built on ERP•AI. A well-designed schema determines how efficiently the system stores, retrieves, and enforces business rules on operational data. Builders need this skill whenever they are:

- Standing up a new module (Finance, HR, Supply Chain, CRM)
- Extending an existing module with custom entities
- Designing reporting or analytics layers on top of transactional data
- Preparing a system for multi-tenant SaaS deployment
- Defining the contract between the app layer and integrations

Poor data modeling creates compounding technical debt: bad queries, broken reports, integration mismatches, and audit failures. Getting the schema right early is the highest-leverage activity in enterprise app building.

## Start Here: Frame the Schema Decisions

Before creating entities and fields, align design intent:

- Use the [Fit-Gap Matrix](../../../../templates/03-org-1k-plus/fit-gap-matrix/SKILL.md) to classify standard vs custom data structures.
- Use the [Requirements Traceability](../../../../templates/03-org-1k-plus/requirements-traceability/SKILL.md) template to connect each entity decision to reporting, integration, and compliance needs.
- Assign [Solution Architect](../../role-overviews/solution-architect.md) and [Data Engineer](../../role-overviews/data-engineer.md) as joint owners for model quality and operability.

Do these first actions before detailed modeling:

1. Define canonical entities, ownership, and source-of-truth boundaries.
2. Define tenant isolation and key strategy (natural vs surrogate).
3. Define audit and temporal requirements that affect table shape.

## Key Concepts

### Entities and Relationships

An **entity** represents a real-world business object -- a Customer, Invoice, Product, Employee, or General Ledger Account. Each entity becomes a table (or document) in ERP•AI's data layer.

**Relationships** describe how entities connect:

- **One-to-One (1:1)**: Employee has one Tax Profile. Implemented via a shared primary key or a unique foreign key. Use sparingly -- often a sign the entities should be merged.
- **One-to-Many (1:N)**: Customer has many Orders. The "many" side holds the foreign key. This is the most common relationship in enterprise data.
- **Many-to-Many (M:N)**: Products belong to many Categories; Categories contain many Products. Implemented with a junction (bridge) table that holds two foreign keys. The junction table often carries its own attributes (e.g., `display_order`, `is_primary`).

### Normalization

**Third Normal Form (3NF)** is the default target for transactional (OLTP) schemas:

- **1NF**: Every field holds a single atomic value. No repeating groups. A phone number list becomes a child table, not a comma-separated string.
- **2NF**: Every non-key field depends on the entire primary key, not a subset. Relevant when composite keys are used.
- **3NF**: Every non-key field depends only on the primary key, not on another non-key field. Example violation: storing `customer_name` on the Order table instead of looking it up via `customer_id`.

**Star Schema** is the target for analytics (OLAP) workloads:

- A central **fact table** holds measures (amounts, quantities, counts) and foreign keys to **dimension tables**.
- Dimension tables hold descriptive attributes (customer name, product category, date hierarchy).
- Denormalization is intentional here -- it makes aggregation queries fast.

In ERP•AI, transactional entities follow 3NF. When analytics views or dashboards are needed, build materialized views or ETL jobs that reshape the data into star schemas.

### Field Type Selection

Choosing the correct field type prevents data quality issues downstream.

| Business Need | Field Type in ERP•AI | Why |
|---|---|---|
| Free-form text (name, description) | `string` / `text` | Use `string` (max 255) for short values, `text` for long-form. |
| Fixed list of options (status, priority) | `enum` | Enforces valid values at the schema level. Faster than lookup table for small, stable lists. |
| Dynamic list managed by users | `lookup` | Points to a Lookup Table entity. Use when end users need to add/edit options without schema changes. |
| Link to another entity | `reference` (foreign key) | Creates a navigable relationship. Always index reference fields. |
| Money | `decimal(19,4)` | Never use `float` for money. 4 decimal places handles currency subdivisions and rounding. |
| Dates | `date` or `datetime` | Use `date` for business dates (invoice date). Use `datetime` with timezone for timestamps (created_at). |
| Boolean | `boolean` | Only when the domain is genuinely binary. Avoid for states that might grow (use enum). |
| Large structured data | `json` | Escape hatch for semi-structured data. Use sparingly -- cannot be indexed or validated at schema level. |

### Validation Rules

Validation rules enforce data integrity beyond type constraints:

- **Required fields**: Mark fields that must have a value on every record. Distinguish between "required on create" vs "required on submit" (draft records may have nulls).
- **Format rules**: Regex patterns for emails, phone numbers, tax IDs. Apply at the field level.
- **Range rules**: Numeric min/max, date ranges (end date >= start date).
- **Cross-field rules**: "If `payment_method` = 'credit_card', then `card_number` is required." Implemented as conditional validation.
- **Uniqueness constraints**: Natural keys (e.g., `employee_number` must be unique per tenant). Compound uniqueness (e.g., `(company_id, account_code)` is unique).
- **Referential integrity**: Foreign keys must point to existing records. ERP•AI enforces this automatically on `reference` fields.

### Soft Deletes vs Hard Deletes

- **Soft delete**: Set an `is_deleted` flag (or `deleted_at` timestamp) instead of removing the row. The record is hidden from normal queries but remains in the database.
- **Hard delete**: Physically remove the row.

**Default to soft deletes** in enterprise systems. Reasons: audit trails, referential integrity (other records may point to the deleted record), regulatory requirements (financial records often cannot be destroyed), and undo capability.

Hard deletes are appropriate only for: temporary/draft records, PII erasure under GDPR (after the soft-deleted record has been archived), and staging/import tables.

When using soft deletes, every query must include a `WHERE is_deleted = false` filter. ERP•AI's query builder handles this automatically when soft delete is enabled on an entity.

### Audit Fields

Every entity in an enterprise system should carry these audit fields, added automatically by ERP•AI:

| Field | Type | Purpose |
|---|---|---|
| `created_at` | `datetime` | When the record was first created. Immutable. |
| `created_by` | `reference(User)` | Who created the record. Immutable. |
| `modified_at` | `datetime` | Last modification timestamp. Updated on every save. |
| `modified_by` | `reference(User)` | Who last modified the record. |
| `deleted_at` | `datetime` (nullable) | When the record was soft-deleted. Null if active. |
| `deleted_by` | `reference(User)` (nullable) | Who soft-deleted the record. |
| `version` | `integer` | Optimistic concurrency control. Incremented on every update. |

These fields enable audit logging, change tracking, conflict detection, and regulatory compliance.

### Multi-Tenancy Patterns

Enterprise SaaS applications must isolate data between tenants (companies, organizations).

| Pattern | How It Works | When to Use |
|---|---|---|
| **Shared database, shared schema** | Every table has a `tenant_id` column. All queries filter by tenant. | Default for ERP•AI. Lowest cost. Works for most SaaS apps. |
| **Shared database, separate schemas** | Each tenant gets its own database schema (namespace). | When tenants need different custom fields or entity structures. |
| **Separate databases** | Each tenant gets its own database instance. | Regulated industries (banking, healthcare) or very large tenants. |

In the shared-schema model, `tenant_id` is part of every unique constraint, every index, and every foreign key. ERP•AI injects tenant filtering automatically via row-level security policies.

### Polymorphic Associations

A **polymorphic association** allows a single table to reference multiple parent entity types. Example: a `Comment` entity that can belong to a `Task`, a `SalesOrder`, or a `SupportTicket`.

Implementation options:

- **Polymorphic columns**: Store `commentable_type` (string) + `commentable_id` (integer). Simple but cannot enforce referential integrity at the database level.
- **Junction tables**: Create `task_comments`, `order_comments`, `ticket_comments` junction tables. Verbose but fully enforces integrity.
- **Shared parent entity**: Create an abstract `Commentable` entity that `Task`, `SalesOrder`, and `SupportTicket` extend. The `Comment` table references `Commentable`.

**Deep Dive -- Inheritance Strategies**:

| Strategy | Schema Design | Pros | Cons | When to Use |
|---|---|---|---|---|
| **Single-Table Inheritance (STI)** | One table holds all subtypes. A `type` discriminator column identifies the subtype. Subtype-specific columns are nullable for other subtypes. | Simplest queries -- no joins needed. Fast reads. Easy to add new subtypes (add a column). | Table becomes wide and sparse. NULL columns waste space and confuse developers. Validation rules differ per subtype but live on one table. | Few subtypes (< 5) with mostly shared fields and few subtype-specific fields. |
| **Class-Table Inheritance (CTI)** | One base table for shared fields, one table per subtype for subtype-specific fields. Subtypes join to the base table via shared PK. | Clean schema -- no NULLs. Each table has only relevant columns. Strong type safety. | Queries require JOINs between base and subtype tables. Inserting a record requires two inserts (base + subtype). Polymorphic queries across subtypes need UNION or LEFT JOIN to all subtype tables. | Many subtypes with significantly different fields. Subtypes have independent lifecycles. |
| **Shared FK (Concrete Table)** | No base table. Each subtype has its own table with all fields (shared + specific). No inheritance link at the database level. | No joins. Each table is self-contained. Best write performance. | Shared fields are duplicated across tables. Polymorphic queries require UNION ALL across all subtype tables. Schema changes to shared fields must be applied to every table. | Subtypes are queried independently, rarely together. Performance is paramount. Polymorphic queries are rare. |

**Performance Implications**: STI wins on read performance for polymorphic queries (one table scan, no joins) but pays a storage cost for sparse columns. CTI is balanced -- clean schema, moderate query cost. Concrete table wins on write performance and isolated queries but is worst for polymorphic access. In ERP•AI, prefer CTI (shared parent entity) for core domain models where polymorphic behavior matters, and STI for lightweight type hierarchies where query simplicity is paramount.

In ERP•AI, prefer the shared parent entity pattern (CTI) when the polymorphic behavior is a core design element. Use junction tables for lighter-weight associations. Avoid polymorphic columns unless flexibility outweighs integrity -- they make joins harder and prevent foreign key constraints.

### Temporal Modeling

Business data is not static -- it changes over time, and enterprise systems must track those changes with precision. Temporal modeling governs how you represent, store, and query data that has a time dimension.

**Slowly Changing Dimensions (SCD)**

Borrowed from data warehousing but essential in transactional systems whenever reference data evolves:

| SCD Type | Strategy | How It Works | When to Use |
|---|---|---|---|
| **Type 1** | Overwrite | Replace the old value with the new value. No history preserved. | When history does not matter: fixing a typo in a customer name, updating a phone number. |
| **Type 2** | Add row | Insert a new row with the new value. The old row is marked with an `effective_end_date` and an `is_current` flag. Each row represents a version of the entity. | When you need full history: employee job title changes, product price changes, customer credit limit adjustments. The most common SCD type in enterprise systems. |
| **Type 3** | Add column | Add a `previous_value` column alongside the current value. Only tracks one prior version. | Rarely useful -- only when you need exactly one level of "before and after" (e.g., `previous_address` during a recent relocation). |
| **Type 6** | Hybrid (1+2+3) | Combines Type 2 rows with Type 3 columns on the current row. The current row carries both the current value and the previous value, while history rows preserve the full trail. | When queries frequently need both the current value and the most recent prior value without scanning history rows. |

**Effective Dating Patterns**

Effective dating attaches a validity period to each record or field value:

- **Record-level effective dating**: The record carries `effective_start_date` and `effective_end_date`. A query "as of" a given date filters for records where `effective_start_date <= target_date AND (effective_end_date IS NULL OR effective_end_date > target_date)`. Used for: employee assignments, price lists, tax rates, exchange rates.
- **Field-level effective dating**: Individual fields have their own validity periods. More granular but significantly more complex -- typically implemented with a child table holding `(entity_id, field_name, value, effective_start, effective_end)`. Only use for fields that change on independent schedules (an employee's salary changes quarterly but their department changes annually).
- **Contiguous dating**: Ensure no gaps or overlaps in effective date ranges. When a new rate starts on 2025-01-01, the prior rate must end on 2024-12-31. Enforce this with validation rules or database constraints. Gaps cause "no rate found" errors; overlaps cause ambiguous results.

**Bitemporal Data**

Bitemporal modeling tracks two independent time axes:

- **Valid time** (business time): When the fact is true in the real world. "This employee's salary is $120K effective 2025-01-01."
- **Transaction time** (system time): When the fact was recorded in the system. "We recorded this salary change on 2024-12-15 at 14:23:07."

Why both matter: On December 20, you record a salary of $120K effective January 1. On January 5, you discover the salary should have been $125K and correct it. Without bitemporal tracking, you lose the fact that the system briefly believed the salary was $120K. In regulated industries (banking, insurance, pharmaceuticals), auditors need to reconstruct what the system knew at any point in time -- not just what was true in the real world.

Bitemporal queries:

- **AS OF valid time**: "What was the employee's salary on March 1?" Filters on valid time.
- **AS OF transaction time**: "What did the system show as the employee's salary when we ran payroll on January 2?" Filters on transaction time -- returns $120K even though the current record shows $125K.
- **AS OF both**: "What salary did the system believe was effective on March 1, as of the January 2 payroll run?" Filters on both axes simultaneously.

In ERP•AI, bitemporal support is available on entities where audit reconstruction is required. Enable it in the Entity Builder by selecting "Bitemporal tracking." The platform automatically manages transaction time; builders configure valid time fields.

### Schema Versioning

Production schemas evolve continuously. Adding fields, changing types, restructuring relationships -- all while the application is live and serving requests. Schema versioning governs how to make these changes safely.

**Forward-Compatible Changes** (safe to apply without coordinating consumers):

- Adding a new nullable column. Existing queries ignore it; new queries can use it.
- Adding a new entity (table). No existing code references it.
- Adding a new index. Improves query performance; no code change required.
- Adding a new enum value to the end of an existing enum. Existing code that does not handle the new value falls through to a default case.

**Backward-Compatible Changes** (existing code continues to work after the change):

- Renaming a column -- only if you create a view or alias with the old name during the transition period.
- Widening a column type (e.g., `VARCHAR(50)` to `VARCHAR(100)`, `INT` to `BIGINT`).
- Making a required column nullable (relaxing a constraint).

**Breaking Changes** (require coordinated code and schema updates):

- Removing a column. Any code referencing it will fail.
- Renaming a column without an alias.
- Changing a column type to something incompatible (e.g., `string` to `integer`).
- Making a nullable column required (tightening a constraint). Existing records with nulls will violate the constraint.
- Splitting or merging entities.

**Migration Strategies**:

- **Expand-and-contract**: The safest pattern for zero-downtime evolution. Phase 1 (expand): add the new column/table alongside the old one; update write paths to populate both. Phase 2 (migrate): backfill the new column from old data. Phase 3 (contract): remove the old column once all read paths have switched to the new one. Each phase is a separate deployment.
- **Dual-write transition**: During the transition window, the application writes to both old and new structures. Read paths gradually shift from old to new. Validated by comparing outputs from both paths.
- **Schema version registry**: Maintain a `schema_versions` table that records every migration applied, its timestamp, and a checksum. Tools like Flyway, Liquibase, or ERP•AI's built-in migration runner use this to ensure migrations are applied exactly once and in order.
- **Zero-downtime deployment**: Never run a migration that locks a table for more than a few seconds in production. Large backfills should run as background jobs. Use `CREATE INDEX CONCURRENTLY` (Postgres) or equivalent non-blocking operations. Test migration duration against production-sized data before deploying.

### Data Lineage

Data lineage tracks where data comes from, how it transforms, and where it flows. In enterprise systems with hundreds of entities and dozens of integrations, lineage is essential for impact analysis, compliance, and debugging.

**Upstream Dependency Tracking**: For every field in your schema, document the data source. A `customer_credit_score` field might originate from an external credit bureau feed, pass through a transformation rule, and land in the Customer entity. When the credit bureau changes their API, lineage tells you exactly which fields and entities are affected.

**Impact Analysis for Schema Changes**: Before dropping or renaming a column, lineage answers: "What reports, integrations, workflows, and calculated fields depend on this column?" Without lineage, schema changes are guesswork that routinely breaks downstream consumers.

**Column-Level Lineage**: Entity-level lineage ("the Order entity feeds the Revenue report") is useful but insufficient. Column-level lineage tracks that `order.total_amount` feeds `revenue_fact.gross_revenue` via a SUM aggregation in the nightly ETL. This granularity is required for GDPR (which fields contain PII and where does that PII flow?) and SOX compliance (which fields feed financial reports?).

**Implementation in ERP•AI**: The platform's Entity Builder and Integration Mapper automatically capture lineage metadata. Custom transformations should register their lineage via the Lineage API. The Lineage Explorer visualizes the full dependency graph for any entity or field, enabling "what breaks if I change this?" analysis before any schema modification.

### Graph and Network Models

Self-referencing hierarchies are pervasive in enterprise data: org charts, charts of accounts, product categories, bill of materials, approval chains, reporting structures. The choice of hierarchy representation has dramatic performance implications.

| Pattern | How It Works | Insert/Move | Query Subtree | Query Depth | Space | Best For |
|---|---|---|---|---|---|---|
| **Adjacency List** | Each row has a `parent_id` FK pointing to its parent row in the same table. | O(1) -- update one row | Requires recursive CTE or application-level recursion. Slow for deep trees. | Requires recursion. | O(n) -- one FK per row | Shallow hierarchies (< 5 levels), frequent inserts/moves, trees where subtree queries are rare. |
| **Nested Set** | Each row stores `lft` and `rgt` values representing its position in a depth-first traversal. A node's descendants have `lft` > parent's `lft` AND `rgt` < parent's `rgt`. | O(n) -- must renumber all nodes to the right of the insertion point | O(1) -- single range query on `lft`/`rgt` | Stored implicitly in the nesting | O(n) -- two integers per row | Read-heavy hierarchies that rarely change (chart of accounts, product categories). |
| **Materialized Path** | Each row stores the full path from root as a string: `/1/4/17/`. | O(1) -- concatenate parent's path + own ID | `LIKE '/1/4/%'` -- fast with a prefix index | Computed from path string length / delimiter count | O(n * d) where d is depth | Hierarchies displayed as breadcrumbs, URL-like paths, moderate depth. |
| **Closure Table** | A separate table stores every ancestor-descendant pair: `(ancestor_id, descendant_id, depth)`. A node with 3 ancestors has 3 rows (plus a self-referencing row). | O(d) -- insert one row per ancestor of the new node | O(k) -- query all rows where `ancestor_id = target`, returns all descendants | Stored in the `depth` column | O(n * d) -- can be large for deep, wide trees | Complex hierarchy queries (all ancestors, all descendants, nodes at depth N), frequent reads and moderate writes. |

**Performance Comparison for 10,000-Node Tree (5 Levels Deep)**:

| Operation | Adjacency List | Nested Set | Materialized Path | Closure Table |
|---|---|---|---|---|
| Get children of node | ~1ms (indexed FK) | ~1ms (range query) | ~2ms (LIKE with prefix index) | ~1ms (indexed ancestor_id, depth=1) |
| Get entire subtree | ~50-200ms (recursive CTE) | ~1ms (range query) | ~5ms (LIKE prefix) | ~2ms (indexed ancestor_id) |
| Get all ancestors to root | ~5ms (recursive CTE, d iterations) | ~2ms (range query reversed) | ~0ms (parse the path string) | ~1ms (indexed descendant_id) |
| Move subtree to new parent | ~1ms (update one FK) | ~100-500ms (renumber affected nodes) | ~10-50ms (update paths for all descendants) | ~10-50ms (delete and reinsert closure rows) |
| Insert new leaf node | ~1ms | ~50-200ms (renumber) | ~1ms | ~1ms per level of depth |

**Recommendation in ERP•AI**: Use **adjacency list** as the default (it is the simplest and handles most enterprise hierarchy needs). Add a **closure table** alongside the adjacency list when the application requires frequent subtree queries (e.g., "total revenue for this division and all sub-divisions," "all direct and indirect reports of this manager"). The closure table can be maintained via triggers or application logic when the adjacency list changes. Use **materialized path** when you need to display breadcrumbs or path strings in the UI. Avoid **nested set** unless the hierarchy is nearly static -- the renumbering cost on writes is prohibitive for dynamic trees.

### Flexibility vs Structure: EAV and JSON Columns

The tension between **strict schemas** (fixed columns, strong types) and **flexible schemas** (user-defined fields, dynamic attributes) is central to enterprise app design.

- **Entity-Attribute-Value (EAV)**: A meta-table with columns `(entity_id, attribute_name, attribute_value)`. Infinitely flexible. Terrible for queries, reporting, indexing, and validation. Avoid in ERP•AI unless building a truly generic platform-of-platforms.
- **JSON columns**: Store a JSON blob for custom/overflow attributes. Better than EAV (data stays on the row), but still hard to index, validate, or report on.
- **Custom field registry**: ERP•AI's recommended approach. Builders define custom fields through the platform, which dynamically adds typed columns to the underlying table. This preserves schema-level type safety while allowing per-tenant customization.

**Rule of thumb**: Use strict schema for any field that appears in queries, reports, integrations, or business rules. Reserve JSON/custom fields for truly ad-hoc, user-managed data.

## Workflow

### 1. Gather Requirements

- Interview business stakeholders to identify the entities they work with daily.
- Collect sample documents: invoices, purchase orders, employee records, reports.
- Identify the master data (slowly changing reference data) vs transactional data (high-volume event records).
- **Tool**: ERP•AI's Requirements Workspace for capturing entity lists and business rules.
- **Watch out for**: Stakeholders describing reports as if they are entities. A "Sales Summary" is a view, not a table.
- **Output**: Entity inventory with preliminary field lists.

### 2. Design the Conceptual Model

- Draw an Entity-Relationship Diagram (ERD) with entities, attributes, and relationships.
- Identify cardinalities (1:1, 1:N, M:N).
- Mark mandatory vs optional relationships.
- **Tool**: ERP•AI's Visual Schema Designer or an external tool (draw.io, Lucidchart) for initial sketching.
- **Watch out for**: Circular dependencies (A references B references C references A). These create insert-order problems. Break cycles with nullable foreign keys or deferred constraints.
- **Output**: Conceptual ERD document.

### 3. Define the Logical Model

- Normalize to 3NF for transactional entities.
- Select field types using the Field Type Selection table above.
- Define primary keys (prefer surrogate auto-increment IDs; preserve natural keys as unique indexed columns).
- Add audit fields.
- Define validation rules.
- Configure soft delete behavior.
- **Tool**: ERP•AI's Entity Builder -- define each entity, its fields, types, constraints, and relationships.
- **Watch out for**: Over-normalization. If a lookup table has only `id` and `name` and never changes, consider using an enum instead.
- **Output**: Fully specified logical schema in ERP•AI.

### 4. Handle Multi-Tenancy and Security

- Add `tenant_id` to all entities (ERP•AI does this automatically in shared-schema mode).
- Define which fields are sensitive (PII, financial) for field-level encryption.
- Map entities to security roles: who can Create, Read, Update, Delete each entity.
- **Tool**: ERP•AI's Security Configuration panel.
- **Watch out for**: Forgetting to apply tenant filters to M:N junction tables. Data leaks happen at the joins.
- **Output**: Security annotation on each entity.

### 5. Design for Analytics

- Identify key metrics and KPIs the business needs.
- Build star-schema views on top of the transactional model: fact tables for measures, dimension tables for slicing.
- Create materialized views or scheduled ETL for performance.
- **Tool**: ERP•AI's Analytics Designer.
- **Watch out for**: Putting aggregation logic in the transactional schema. Keep OLTP and OLAP concerns separate.
- **Output**: Analytics schema or view definitions.

### 6. Validate and Iterate

- Generate sample data and test: Can all business scenarios be represented?
- Test edge cases: What happens when a Customer is deleted but has open Orders? What if a Product belongs to zero Categories?
- Run the schema through integration review: Can external systems map to these entities?
- **Tool**: ERP•AI's Data Simulator and Integration Previewer.
- **Watch out for**: Designing only for current requirements. Leave room for known future needs without over-engineering.
- **Output**: Validated, tested schema ready for development.

## Decision Guide

### When to Normalize vs Denormalize

| Situation | Recommendation |
|---|---|
| Transactional data (orders, invoices, journal entries) | Normalize to 3NF. Integrity matters most. |
| Reporting/analytics views | Denormalize into star schema. Query speed matters most. |
| Frequently joined lookup data (country names, currency codes) | Keep normalized but cache aggressively. |
| Audit/history tables | Denormalize (snapshot the state at time of event). |
| High-write-volume event logs | Append-only, minimal normalization. Summarize in batch. |

### Enum vs Lookup Table

| Factor | Use Enum | Use Lookup Table |
|---|---|---|
| Number of options | < 15 and rarely changes | > 15 or changes frequently |
| Who manages options | Developers/builders | End users / admins |
| Used in code logic | Yes (switch statements, conditionals) | No (display only) |
| Multi-language support needed | No | Yes (lookup rows can have translations) |
| Options have extra attributes (code, sort order, parent) | No | Yes |

### Surrogate Key vs Natural Key

| Factor | Surrogate Key (auto-increment ID) | Natural Key (e.g., `employee_number`) |
|---|---|---|
| Stability | Never changes | May change (reorgs, mergers) |
| Simplicity | Always an integer, easy to join | May be composite, harder to join |
| Business meaning | None -- opaque identifier | Self-describing |
| Recommendation | Use as primary key | Add as a unique indexed column alongside the surrogate key |

## Common Patterns

### Chart of Accounts (Hierarchical Entity)

A General Ledger Chart of Accounts is a self-referencing hierarchy:

- Entity: `Account`
- Fields: `account_code` (string, unique per tenant), `account_name`, `account_type` (enum: Asset, Liability, Equity, Revenue, Expense), `parent_account_id` (self-reference, nullable), `is_header` (boolean -- header accounts group children but hold no balances), `is_active` (boolean).
- Pattern: Adjacency list (self-referencing FK) for the tree structure. Add `level` and `full_path` computed fields for query convenience. If deep nesting or subtree queries are common, also consider a closure table.

### Customer Hierarchy (Multi-Level Grouping)

Enterprise customers often have a hierarchy: Global HQ > Regional Entity > Local Branch > Department.

- Entity chain: `CustomerGroup` (top level) -> `Customer` (billing entity) -> `CustomerSite` (ship-to location) -> `CustomerContact` (person).
- The `Customer` holds the financial relationship (credit limit, payment terms). The `CustomerSite` holds the address. The `CustomerContact` holds the person.
- Anti-pattern: Flattening everything into a single Customer table with `address_1`, `address_2`, `contact_name_1` columns. This breaks as soon as a customer has 3+ sites or contacts.

### Product Catalog (Variant Pattern)

Products with variants (size, color, configuration):

- Entity chain: `ProductFamily` -> `Product` (the sellable SKU) -> `ProductVariant` (specific size/color).
- `ProductFamily` holds shared attributes (brand, category, description). `Product` holds pricing and inventory. `ProductVariant` holds the differentiating attributes.
- For configurable products (e.g., a server with CPU/RAM/storage options), use a `ProductOption` entity with a M:N relationship to `Product`.

### Anti-Patterns to Avoid

- **God Table**: One table with 200+ columns covering multiple business concepts. Split into focused entities.
- **Stringly Typed Data**: Storing dates as strings, numbers as strings, booleans as "Y"/"N" strings. Use proper types.
- **Copy-Paste Denormalization**: Duplicating customer name on every order line "for convenience." Use joins.
- **Premature JSON**: Throwing structured data into a JSON column because "we might need flexibility." Define the schema first; add JSON escape hatches only for genuinely dynamic data.
- **Missing Indexes**: Every foreign key, every field used in WHERE clauses, and every field used in ORDER BY should have an index. ERP•AI auto-indexes reference fields, but custom query patterns may need manual indexes.
- **Ignoring Temporal Data**: Business data changes over time. A product price today is not the same as the price when the order was placed. Snapshot temporal values (order line captures `unit_price_at_time_of_order`) or use history tables.
- **God Entity**: A single entity that accumulates every attribute even tangentially related to a business concept. The `Customer` entity should not hold shipping preferences, support case counts, marketing segment scores, billing configuration, and user authentication data in 200+ columns. Split into focused entities: `Customer`, `CustomerShippingProfile`, `CustomerBillingConfig`, `CustomerMarketingProfile`. A God Entity is the data model equivalent of a God Object -- it violates single responsibility and makes every change risky.
- **Phantom Foreign Keys (App-Level Only)**: Storing a reference to another entity's ID without a database-level foreign key constraint -- relying on application code to enforce the relationship. This works until it does not: a bug, a manual database edit, or a migration script bypasses the application and creates orphaned references. Always enforce referential integrity at the database level. If the relationship is cross-database or cross-service, document it explicitly and implement validation checks in integration tests.

## Checklist

- [ ] All business entities identified and documented
- [ ] Entity-Relationship Diagram created and reviewed with stakeholders
- [ ] Transactional entities normalized to 3NF
- [ ] Field types chosen deliberately (no stringly typed data)
- [ ] Validation rules defined for all critical fields
- [ ] Primary keys are surrogate; natural keys preserved as unique indexes
- [ ] All reference (FK) fields indexed
- [ ] Audit fields present on all entities (created_at/by, modified_at/by)
- [ ] Soft delete configured where required (financial, regulated data)
- [ ] Multi-tenancy isolation verified (tenant_id on all tables, junction tables included)
- [ ] Sensitive fields marked for encryption
- [ ] Security roles mapped to entities (CRUD permissions)
- [ ] Analytics views designed (star schema for dashboards/reports)
- [ ] Edge cases tested (deletes with dependencies, empty relationships, max cardinality)
- [ ] Schema reviewed against integration requirements (field names, types, granularity)
- [ ] Temporal data handled (snapshots for prices, rates, statuses at point-in-time)
- [ ] Temporal modeling pattern selected (SCD Type 2, effective dating, bitemporal) based on audit requirements
- [ ] Schema versioning strategy defined (expand-and-contract for breaking changes)
- [ ] Data lineage captured for fields that feed reports, integrations, or compliance workflows
- [ ] Hierarchy pattern selected (adjacency list, closure table, etc.) with performance implications understood
- [ ] Polymorphic associations use enforced referential integrity (no phantom foreign keys)

## ERP•AI & Proto

**ERP•AI**: Entity designer supports all core field types (string, decimal, reference, enum, lookup) with built-in validation, indexing, and multi-tenancy isolation. Schema changes flow through the config promotion pipeline with backward-compatibility checks.

**Proto**: During data architecture missions, Proto loads schema patterns and normalization decision guides into L2 session memory. It reasons over entity relationships and field type choices in the REASON phase, then generates schema definitions in the ACT phase -- iterating as validation rules or integration requirements surface new constraints.

## Related

- [Data Migration](../data-migration/SKILL.md) -- migrating data into the schemas you design here
- [Security & Roles](../security-roles/SKILL.md) -- controlling who can access which entities and fields
- [Workflow Automation](../workflow-automation/SKILL.md) -- building processes that operate on your data model
- [Integrations](../integrations/SKILL.md) -- exposing your data model to external systems
