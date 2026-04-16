---
name: performance-optimization
description: This skill should be used when the task involves making enterprise applications fast and scalable -- database tuning, caching, batch processing, monitoring, and capacity planning.
version: 1.0.0
metadata:
  author: erphq
  domain: erpai.studio
  roles:
    - technical
  type: skill
  scope: internal
---
# Performance Optimization

## Purpose

Enterprise users expect sub-second response times for daily transactions and fast-loading dashboards. When performance degrades, productivity drops, users lose trust in the system, and they revert to spreadsheets and manual processes. Performance optimization is not a one-time activity -- it is an ongoing discipline of measuring, identifying bottlenecks, and tuning.

Use this skill when a builder needs to:
- Diagnose slow queries and optimize database access patterns
- Design and implement caching layers
- Schedule and tune batch jobs for large-volume processing
- Implement pagination and lazy loading for large datasets
- Set up monitoring, alerting, and SLA dashboards
- Plan capacity for growth

## Key Concepts

### Database Query Optimization

**Indexing strategies:**
- **Single-column index**: Accelerates queries that filter or sort by one column. Create indexes on columns that appear in WHERE clauses, JOIN conditions, and ORDER BY clauses.
- **Composite index**: An index on multiple columns. Column order matters: the index is useful for queries that filter on the first column, or the first and second column, but not for queries that filter only on the second column. Place the most selective column (fewest matching rows) first.
- **Covering index**: An index that contains all columns needed by a query, so the database can satisfy the query entirely from the index without reading the table. Dramatically reduces I/O for read-heavy queries.
- **Partial index**: An index that only includes rows matching a condition (e.g., WHERE status = 'Active'). Smaller than a full index, faster to scan, useful when queries consistently filter for a specific subset.
- **Index maintenance cost**: Every index speeds up reads but slows down writes (INSERT, UPDATE, DELETE) because the index must be updated. Over-indexing a high-write table degrades write performance. Target 3-7 indexes per table as a guideline; benchmark actual workloads.

**Query plan analysis:**
- Use EXPLAIN or EXPLAIN ANALYZE to see how the database executes a query.
- Look for: full table scans (Seq Scan) on large tables, nested loop joins on large datasets, sort operations on unindexed columns, and high row estimates vs. actual rows (indicates stale statistics).
- A query plan that scans 1 million rows to return 10 results has an optimization opportunity. Add an index or rewrite the query to use a more selective filter.

**N+1 query detection:**
- The N+1 problem: a query fetches N parent records, then executes 1 additional query per parent to fetch related child records. Result: 1 + N database round trips instead of 1 or 2.
- Example: fetching 100 purchase orders, then issuing 100 separate queries to fetch the line items for each PO.
- Solution: use eager loading (JOIN or IN-clause) to fetch parents and children in 1-2 queries. In erp.ai, this often means configuring the entity relationship to eager-load related records or using a list view that fetches related data in bulk.
- Detection: monitor for query patterns where the same query template is executed hundreds of times in a single page load. APM tools highlight N+1 patterns automatically.

### Caching Layers

| Cache Layer | What It Caches | Scope | Invalidation | Latency Reduction |
|------------|---------------|-------|-------------|-------------------|
| **Application cache** | Computed values, configuration, session data | Per-application-instance or shared (Redis/Memcached) | TTL-based, event-based, or manual | Eliminates computation; microseconds vs milliseconds |
| **Query cache** | Database query results | Database server | Invalidated when underlying table data changes | Eliminates query execution; microseconds vs milliseconds |
| **CDN cache** | Static assets (JS, CSS, images, fonts) | Global edge network | TTL-based, cache-busting via versioned URLs | Eliminates network latency; edge vs origin |
| **Browser cache** | Static assets, API responses | Per-user browser | Cache-Control headers, ETags | Eliminates HTTP request entirely |

**Cache design principles:**
- **Cache what is read often and changes rarely**: Lookup tables, configuration settings, organizational hierarchies, GL account lists. These are read on every transaction but change infrequently.
- **Do not cache what changes frequently or must be real-time**: Inventory quantities (stale cache causes overselling), approval statuses (stale cache causes double-approvals), financial balances during close.
- **TTL (Time To Live)**: Every cached value must have an expiration. Without TTL, stale data persists indefinitely. Set TTL based on how much staleness is acceptable: 5 minutes for a dashboard, 1 hour for reference data, 24 hours for static configuration.
- **Cache invalidation**: The two hardest problems in computer science are cache invalidation, naming things, and off-by-one errors. Prefer TTL-based expiration for simplicity. Use event-based invalidation (clear cache when the source record changes) only when staleness is unacceptable.
- **Cache stampede**: When a popular cache entry expires, many concurrent requests simultaneously try to regenerate it, overloading the database. Mitigate with lock-based regeneration (only one request regenerates; others wait) or probabilistic early expiration (randomly expire slightly before TTL).

### Batch Job Scheduling

- **Off-peak windowing**: Schedule resource-intensive batch jobs (month-end close, data warehouse ETL, report generation, data archival) during off-peak hours (nights, weekends). Identify the off-peak window by analyzing system usage patterns across time zones.
- **Chunking**: Process large datasets in chunks (e.g., 1,000 records at a time) rather than loading the entire dataset into memory. Chunking prevents memory exhaustion and allows for progress checkpointing (if the job fails at chunk 500, restart from chunk 500, not from the beginning).
- **Parallelization**: Split batch work across multiple workers. Example: process invoices for region A on worker 1 and region B on worker 2. Requires that the work is partitionable without conflicts (two workers should not update the same record).
- **Idempotency**: Design batch jobs so that running them twice produces the same result as running them once. If a job fails mid-execution and is restarted, it should not create duplicate records or apply transformations twice.
- **Progress tracking**: Log the progress of long-running batch jobs (records processed, elapsed time, estimated time remaining). Expose this via a monitoring dashboard so operations staff can see whether a job is progressing or stuck.
- **Timeout and alerting**: Set maximum expected durations for batch jobs. If a job exceeds its expected duration by more than a threshold (e.g., 2x), trigger an alert. A batch job that normally runs for 30 minutes but has been running for 3 hours likely has a problem.

### Pagination Patterns

| Pattern | How It Works | Pros | Cons | Best For |
|---------|-------------|------|------|----------|
| **Offset-based** | `LIMIT 50 OFFSET 200` | Simple to implement; supports jump-to-page | Slow on large offsets (DB must skip N rows); inconsistent if data changes between pages | Small datasets (< 100K rows); admin interfaces |
| **Cursor-based (keyset)** | `WHERE id > last_seen_id ORDER BY id LIMIT 50` | Fast at any depth; consistent results | Cannot jump to arbitrary page; requires a unique, sequential sort key | Large datasets; infinite scroll; APIs |
| **Seek-based** | Like cursor but on a composite key (e.g., `WHERE (date, id) > (last_date, last_id)`) | Fast; works with non-unique sort columns | More complex query construction | Time-ordered data; event logs; transaction history |

**Pagination rules:**
- Default page size should be 25-50 records for UI list views. Allow power users to increase to 100-200 but never unlimited.
- Always display total record count (or approximate count) so users know the scope of the data.
- For exports, do not paginate -- stream all records to file. But apply a hard limit (e.g., 100K records) and direct larger exports to a background job.

### Lazy Loading vs. Eager Loading

- **Lazy loading**: Related data is fetched only when explicitly accessed. A PO header loads without its line items; line items load when the user clicks "View Lines." Reduces initial load time but can cause N+1 queries if not managed.
- **Eager loading**: Related data is fetched with the parent in a single query (JOIN). A PO header and its line items load together. Increases initial load time but eliminates subsequent round trips.

**Decision rule:**
- If the related data is always needed (invoice lines on an invoice detail screen), use eager loading.
- If the related data is sometimes needed (audit history on a record that is rarely reviewed), use lazy loading.
- If the related data is large (a customer's full order history while viewing their profile), use lazy loading with pagination.

### Connection Pooling

- A database connection pool maintains a set of pre-established database connections that are reused across application requests. Eliminates the overhead of establishing a new connection per request (TCP handshake, authentication, protocol negotiation).
- **Pool size**: Too small and requests queue waiting for a connection (latency spikes). Too large and the database is overwhelmed by concurrent connections (memory exhaustion, lock contention). A starting point: pool size = 2 * CPU cores of the database server. Benchmark under load and adjust.
- **Connection leak**: An application borrows a connection from the pool but never returns it (due to a bug, unhandled exception, or missing finally block). The pool gradually empties. Monitor: if the pool reaches 100% utilization and stays there, suspect a leak. Implement a connection timeout that forcibly reclaims connections idle for more than N seconds.
- **Read replicas**: Route read-only queries (reports, search, dashboards) to a read replica, reserving the primary database for writes. This effectively multiplies read capacity. Configure the connection pool with separate entries for the primary and replica.

### Background Job Queues

- Move long-running or non-urgent operations out of the user's request cycle and into a background queue. The user's request completes immediately with a "processing" status; the background worker handles the heavy lifting asynchronously.
- **Common candidates for background processing**: Report generation, email sending, data export, bulk operations (mass update, mass delete), integration sync jobs, document generation (PDF invoices, statements).
- **Queue design**: Use a persistent queue (Redis, RabbitMQ, SQS, or erp.ai's built-in job scheduler) so that jobs survive application restarts. Implement retry logic with exponential backoff for transient failures. Set a maximum retry count to prevent infinite loops.
- **Priority queues**: Not all background jobs are equal. User-initiated exports should complete in minutes; nightly ETL can take hours. Use priority levels to ensure time-sensitive jobs execute first.
- **Dead letter queue**: A holding area for jobs that have failed all retry attempts. Monitor the dead letter queue daily; items there represent work that is not getting done.

### Query Optimization Deep Dive

Beyond basic indexing, advanced query optimization requires understanding how the database engine thinks and exploiting that knowledge.

**Subquery Elimination**: Correlated subqueries execute once per row of the outer query. A query like `SELECT * FROM orders WHERE total > (SELECT AVG(total) FROM orders WHERE customer_id = orders.customer_id)` executes the inner query for every row in `orders`. Rewrite as a JOIN against a derived table: `SELECT o.* FROM orders o JOIN (SELECT customer_id, AVG(total) as avg_total FROM orders GROUP BY customer_id) a ON o.customer_id = a.customer_id WHERE o.total > a.avg_total`. The derived table is computed once, then joined -- often 10-100x faster.

**Query Rewriting Patterns**:

| Pattern | Before (Slow) | After (Fast) | Why It Helps |
|---|---|---|---|
| **EXISTS vs IN** | `WHERE id IN (SELECT id FROM big_table WHERE ...)` | `WHERE EXISTS (SELECT 1 FROM big_table WHERE big_table.id = main.id AND ...)` | EXISTS short-circuits on first match. IN materializes the entire subquery result. EXISTS wins when the subquery result set is large. |
| **UNION ALL vs UNION** | `SELECT ... UNION SELECT ...` | `SELECT ... UNION ALL SELECT ...` | UNION implies DISTINCT, which requires a sort/hash to deduplicate. If you know the result sets are disjoint, UNION ALL skips the dedup -- often 2-5x faster. |
| **Predicate push into view** | Querying a view and filtering outside: `SELECT * FROM complex_view WHERE status = 'Active'` | Ensure the view definition allows predicate pushdown, or rewrite as a parameterized function. | The optimizer may not push the WHERE clause into the view, causing a full materialization before filtering. Check the query plan. |
| **LEFT JOIN elimination** | `SELECT a.* FROM a LEFT JOIN b ON a.id = b.a_id` (never selecting columns from b) | `SELECT a.* FROM a` (if the join is not used for filtering) | The optimizer sometimes eliminates useless joins, but not always. Explicitly remove joins whose columns are not referenced. |

**Predicate Pushdown**: When querying through views, CTEs, or subqueries, the optimizer may fail to push filter conditions down to the base tables. The result: the database materializes millions of rows, then filters. To force pushdown:

- Avoid functions on indexed columns in WHERE clauses: `WHERE YEAR(created_at) = 2024` prevents index use. Rewrite as `WHERE created_at >= '2024-01-01' AND created_at < '2025-01-01'`.
- Avoid implicit type casts: `WHERE varchar_column = 12345` (comparing string to integer) forces a cast on every row. Use `WHERE varchar_column = '12345'`.
- Avoid non-sargable predicates: `WHERE total - discount > 1000` cannot use an index on `total`. Rewrite as `WHERE total > 1000 + discount` if possible, or create a computed/expression index.

**Join Order Optimization**: The order in which tables are joined matters, especially for complex queries with 5+ tables. The optimizer explores join orders, but with many tables, it may not find the optimal plan within its search budget.

- Start the join sequence with the most selective table (the one that filters out the most rows earliest).
- For queries that consistently choose bad join orders, use join hints (database-specific): `/*+ LEADING(small_table big_table) */` in Oracle, `SET join_collapse_limit` in PostgreSQL.
- Be cautious with hints -- they bypass the optimizer and can become harmful if data distributions change. Document every hint with the reason it was added.

**Execution Plan Reading Guide**:

| Plan Node | What It Means | Red Flag? |
|---|---|---|
| **Seq Scan** (Sequential Scan) | Full table scan, reading every row. | Yes, on tables > 10K rows. Add an index. |
| **Index Scan** | Uses an index to find matching rows, then reads the table for remaining columns. | No -- this is good. |
| **Index Only Scan** | Satisfies the query entirely from the index (covering index). | No -- this is optimal for reads. |
| **Bitmap Index Scan** | Uses an index to build a bitmap of matching row positions, then reads rows in physical order. | Not inherently bad. Used when many rows match (too many for a simple index scan, too few for a seq scan). |
| **Nested Loop** | For each row in the outer table, scan the inner table. | Yes, if both tables are large (> 1K rows each). Suggests a missing index on the inner table's join column. |
| **Hash Join** | Build a hash table from the smaller table, probe with the larger table. | No -- efficient for equi-joins on large tables. Watch for hash spills to disk (means the work_mem is too small). |
| **Merge Join** | Both inputs sorted on the join key, then merged. | No -- efficient when inputs are pre-sorted (from an index). |
| **Sort** | Explicit sort operation. | Concerning if sorting millions of rows. Add an index on the sort column to get pre-sorted input. |
| **Materialize** | Stores intermediate results in memory (or disk). | Concerning if materializing large intermediate result sets. May indicate a subquery that should be rewritten. |

### Memory Management

Enterprise applications handle large result sets, concurrent users, and long-running batch processes. Effective memory management prevents OOM crashes and maintains responsiveness under load.

**Connection Pooling Sizing**: Each database connection consumes memory on both the application server (~1-5 MB per connection) and the database server (~5-15 MB per connection in PostgreSQL). The pool must be large enough to handle concurrent requests without queuing, but small enough to avoid exhausting database memory.

Formula for initial sizing: `pool_size = (core_count * 2) + effective_spindle_count`. For SSD-backed databases, use `core_count * 2 + 1` as a starting point. A 4-core database server starts with a pool of 9. Counter-intuitive: a smaller, well-tuned pool often outperforms a larger one because it reduces lock contention and context switching on the database.

Monitor: average wait time for a connection from the pool (should be < 5ms), pool utilization (sustained > 80% means the pool is too small or queries are too slow), and connection checkout duration (how long the application holds each connection).

**Result Set Streaming**: When an API or report returns 100K+ rows, loading the entire result set into memory before sending it to the client is wasteful and dangerous.

- Use cursor-based streaming: open a database cursor, fetch rows in chunks (e.g., 1,000 at a time), and stream them to the HTTP response or file as they are fetched.
- In erp.ai, large export operations automatically use streaming. For custom report queries, use the `stream: true` option in the query API.
- Set a server-side result set size limit. If a query returns more than 1M rows to an API endpoint, reject it with a 413 (Payload Too Large) and direct the user to the export/background job mechanism.

**Memory-Efficient Batch Processing**: Batch jobs that process millions of records must not accumulate the full dataset in memory:

- Fetch in chunks using keyset pagination (`WHERE id > last_processed_id LIMIT 1000`).
- Process each chunk, write results, and release the chunk from memory before fetching the next.
- Avoid collecting aggregates in memory for large datasets. Use database-side aggregation (GROUP BY, window functions) instead.
- If the batch job builds an in-memory data structure (e.g., a lookup map), scope it to the minimum necessary. A 10M-row lookup table that only needs 2 columns should not load all 50 columns.

**OOM Prevention**: Out-of-memory crashes are the most disruptive failure mode.

- Set explicit memory limits on application processes (`-Xmx` for JVM, `--max-old-space-size` for Node.js).
- Monitor heap usage as a percentage of the limit. Alert at 80%.
- Implement request-level memory budgets for expensive operations: if a single request allocates more than N MB, abort it gracefully with an error rather than letting it consume unbounded memory.
- For garbage-collected runtimes, monitor GC pause time. Long GC pauses (> 500ms) indicate memory pressure and will manifest as latency spikes for all users.

### Distributed Query Patterns

Enterprise systems often outgrow a single database. When data is distributed across multiple stores, query patterns must adapt.

**Federation Queries**: Queries that span multiple databases or services. Example: a consolidated financial report that combines GL data from the operational database with budget data from the planning database and actuals from the data warehouse.

- Avoid real-time federation for user-facing queries -- the latency of querying multiple databases sequentially or in parallel is too high for sub-second response times.
- Instead, replicate or ETL the necessary data into a single query store (data warehouse, reporting database) and run the federated query there.
- If real-time federation is unavoidable, use parallel execution (query all sources simultaneously) and set aggressive timeouts. A federation query is only as fast as the slowest source.

**Cross-Database Joins**: Joining data across two databases is not supported by standard SQL. Workarounds:

- **Application-level join**: Fetch data from both sources into the application, join in memory. Viable for small result sets (< 10K rows). Unviable for large datasets.
- **Foreign Data Wrappers** (PostgreSQL) or **Linked Servers** (SQL Server): Allow querying remote databases as if they were local tables. Convenient but often slow -- the optimizer has limited visibility into remote table statistics.
- **Materialized replication**: Replicate the needed data from the remote database into a local materialized table, refreshed on a schedule. Query the local copy. Best for reporting scenarios where slight staleness is acceptable.

**CQRS (Command Query Responsibility Segregation)**: Separate the write model (optimized for transactional integrity) from the read model (optimized for query performance):

- **Write side**: Normalized schema, strict validation, ACID transactions. The system of record.
- **Read side**: Denormalized views, pre-computed aggregations, search indexes. Derived from the write side via events or CDC (Change Data Capture).
- **Eventual consistency**: The read side lags the write side by milliseconds to seconds. The UI must account for this (e.g., after saving a record, the list view may not immediately show the update if it reads from the read replica).
- **When to use CQRS**: When read and write workloads have fundamentally different performance characteristics. A transactional ERP schema (normalized, heavily indexed for writes) performs poorly for complex reporting queries. CQRS allows you to optimize each path independently.

**Read Replicas for Reporting**: The simplest form of CQRS. Route all SELECT queries from reports, dashboards, and search to a read replica. The primary handles all INSERT/UPDATE/DELETE operations.

- Replication lag: monitor the time between a write on the primary and its appearance on the replica. Acceptable lag depends on the use case -- 1 second is fine for dashboards, 0 seconds is needed for transactional reads.
- Connection routing: configure the application or connection pool to route queries by type. erp.ai's query engine supports read/write splitting via connection annotations.

### Cloud-Specific Scaling

Cloud platforms provide elastic scaling capabilities that must be configured deliberately to balance performance, availability, and cost.

**Auto-Scaling Triggers**: Define scaling events based on metrics, not guesses:

| Metric | Scale-Out Trigger | Scale-In Trigger | Notes |
|---|---|---|---|
| CPU utilization | Sustained > 70% for 5 minutes | Sustained < 30% for 15 minutes | Use longer cool-down for scale-in to avoid thrashing |
| Memory utilization | > 80% | < 40% | Memory-bound workloads (large caches, batch jobs) |
| Request queue depth | > 50 pending requests | Queue empty for 10 minutes | Indicates application cannot keep up with incoming traffic |
| Response latency (P95) | > 2 seconds for 3 minutes | < 500ms for 15 minutes | Directly tied to user experience SLAs |
| Database connection pool utilization | > 85% | < 40% | Scaling app servers without scaling database connections causes connection exhaustion |

**Horizontal vs Vertical Scaling Decision Framework**:

- **Scale vertically first** when: the bottleneck is a single resource (database CPU), the application is not designed for horizontal scaling (stateful sessions, local file storage), or the workload is spiky and short-lived (a bigger instance handles the spike, then you scale down).
- **Scale horizontally when**: vertical scaling has reached the cloud provider's instance size limit, you need high availability (multiple instances behind a load balancer), the workload is sustained and growing (horizontal scales further and more cost-effectively), or you need geographic distribution (instances in multiple regions).

**Elasticity Patterns**:

- **Predictive scaling**: If you know traffic spikes at 9am every Monday (users logging in) or at month-end (financial close), pre-scale 30 minutes before the expected spike. Reactive auto-scaling has a lag (5-10 minutes to provision and warm up a new instance) that causes poor performance during the ramp.
- **Scheduled scaling**: Set minimum instance counts by time of day/week. Business hours: minimum 4 instances. Nights/weekends: minimum 1. Month-end: minimum 8.
- **Burst scaling**: For unpredictable spikes, configure aggressive scale-out (add 3 instances at a time) with conservative scale-in (remove 1 at a time over 30 minutes). This absorbs spikes quickly without oscillating.

**Cost-Aware Scaling**: Cloud resources cost money per hour. Uncontrolled scaling can cause bill shock.

- Set maximum instance counts. Never allow auto-scaling to exceed a budget-backed limit.
- Use spot/preemptible instances for batch workloads that can tolerate interruption (report generation, ETL). 60-90% cost savings.
- Right-size instances: a fleet of 8 small instances is often cheaper and more resilient than 2 large instances providing the same total capacity.
- Monitor cost per transaction. If cost per transaction is rising while transaction volume is flat, the system is scaling inefficiently.

### Write Path Optimization

Read optimization gets the most attention, but enterprise ERP systems are write-heavy: every transaction, every approval, every status change is a write. Write path inefficiency compounds under load.

**Bulk Insert Patterns**: Single-row INSERT statements are catastrophically slow for bulk operations. Each insert incurs network round-trip, query parsing, transaction commit, WAL (write-ahead log) write, and index maintenance overhead.

- Use multi-row INSERT: `INSERT INTO orders (col1, col2) VALUES (v1, v2), (v3, v4), ... (vN-1, vN)`. Batch size of 100-1,000 rows per statement.
- Use COPY (PostgreSQL) or LOAD DATA INFILE (MySQL) for maximum throughput. These bypass SQL parsing entirely and write directly to the storage engine. 10-100x faster than INSERT for bulk loads.
- In erp.ai, use the Bulk Import API for programmatic loads. It internally uses optimized bulk write paths.

**Write-Behind Caching**: For high-frequency writes that can tolerate brief async delay:

- Accept the write in memory (application cache or queue).
- Acknowledge the write to the caller immediately.
- Flush writes to the database in batches (every N writes or every M milliseconds, whichever comes first).
- Risk: data loss if the application crashes before flushing. Mitigate with a persistent queue (Redis with AOF, Kafka) rather than in-memory-only buffering.
- Use case: activity logging, telemetry events, view counters -- data where losing a few seconds of writes in a crash is acceptable.

**Batch Coalescing**: When multiple writes to the same record occur in rapid succession (e.g., a workflow that updates an order's status, then its total, then its last-modified timestamp in three separate operations), coalesce them into a single write.

- At the application level: buffer updates to the same record within a request and issue a single UPDATE with all changed fields.
- At the queue level: if a background worker receives multiple update messages for the same record, merge them into a single update before writing.
- Reduces write I/O and index maintenance by 2-5x for chatty update patterns.

**Write Amplification Prevention**: Write amplification occurs when a logical write (updating one field) causes disproportionate physical I/O:

- Updating one column on a table with 20 indexes triggers 20 index updates. Audit your indexes -- remove those that are not used by any query (check `pg_stat_user_indexes` for index usage statistics).
- Updating a TOAST-able column (large text/json) forces a full-row rewrite in PostgreSQL. Avoid frequent updates to large columns; consider storing large mutable data in a separate table linked by FK.
- Triggering cascading updates via foreign key constraints or application-level triggers. An update to a parent record that cascades to 10,000 child records is a performance concern. Use deferred constraints or batch the cascade.

### Profiling and Diagnostics

When performance problems are intermittent or hard to reproduce, profiling and diagnostic tools provide the evidence to identify root causes.

**APM Tool Selection**:

| Tool | Strengths | Best For |
|---|---|---|
| **erp.ai built-in APM** | Zero-configuration for platform transactions. Pre-built dashboards for entity operations, workflow execution, and integration calls. | First-line monitoring for all erp.ai applications. Default choice. |
| **Datadog** | Full-stack observability (infra + APM + logs + RUM). Excellent distributed tracing. Strong anomaly detection. | Teams that need end-to-end visibility across erp.ai and external systems. |
| **New Relic** | Deep application-level profiling. Thread-level analysis. Strong database query analysis. | Deep-dive application performance analysis. |
| **Grafana + Prometheus** | Open-source. Customizable. Strong for infrastructure metrics. | Cost-sensitive deployments. Teams with strong DevOps capability. |

**Flame Graph Analysis**: A flame graph visualizes where CPU time is spent across the call stack. The x-axis represents the proportion of time, and the y-axis represents the call stack depth. Wide bars at the top indicate functions that consume the most CPU.

- Generate flame graphs during load tests to identify hot paths.
- Look for: unexpected functions dominating CPU (serialization, logging, regex evaluation), deep recursion (often indicates O(n^2) or worse algorithms), and GC/memory allocation overhead.
- In production, use sampling profilers (low overhead, ~2-5% CPU cost) rather than instrumenting profilers (high overhead, unusable in production).

**Slow Query Log Analysis**: Enable slow query logging with a threshold (e.g., log queries taking > 500ms):

- Review slow query logs weekly. Group by query template (parameterized form) to identify the most impactful slow queries.
- For each slow query: run EXPLAIN ANALYZE, check if indexes exist for the filter/join columns, check if statistics are up to date, and check if the query can be rewritten.
- Track slow query count over time. A rising trend indicates growing data volume outpacing the current index/query design.
- Automate: set up a weekly report of the top 10 slow queries by total execution time (frequency * average duration).

**Percentile-Based Alerting (P95/P99)**: Average response time is a misleading metric. A single endpoint with 99% of responses at 100ms and 1% at 30 seconds has an average of ~400ms, which looks acceptable. The P99 of 30 seconds reveals the real problem.

- Alert on **P95** for standard SLA compliance (95% of users experience acceptable performance).
- Alert on **P99** for tail latency problems (the worst 1% of users may be experiencing severe degradation).
- Set different thresholds by operation type: P95 < 500ms for transactional operations (create, update, search), P95 < 2s for reports, P95 < 5s for complex dashboard loads.
- Track percentile trends over time. A gradually rising P99 that has not yet breached the threshold is an early warning of degradation.
- In erp.ai, the SLA dashboard supports percentile-based views. Configure alerts in the Monitoring section with percentile thresholds.

### Monitoring and Alerting

**APM (Application Performance Monitoring):**
- Track response times for every endpoint and transaction type. Set baselines and alert on degradation.
- Monitor the breakdown: how much time is spent in the application layer vs. the database vs. external API calls?
- Track error rates: 5xx errors (server faults), 4xx errors (client errors, often indicating bad data or missing permissions).

**Custom metrics:**
- **Business metrics**: Transaction processing rate (invoices/hour), queue depth (pending approvals), batch job completion time.
- **Infrastructure metrics**: CPU utilization, memory usage, disk I/O, network throughput, connection pool utilization.
- **Saturation metrics**: How close each resource is to its capacity limit. A resource at 80% utilization is a warning; at 95% it is an emergency.

**SLA dashboards:**
- Display adherence to performance SLAs: "Invoice creation < 2 seconds (99th percentile)." Show current performance vs. target, trend over time, and breach count.
- Use percentiles (P50, P95, P99), not averages. An average response time of 500ms can hide a P99 of 10 seconds. The P99 is what the worst-affected users experience.

**Alerting rules:**
- **Threshold alerts**: Trigger when a metric exceeds a fixed value (e.g., P95 response time > 3 seconds for 5 consecutive minutes).
- **Anomaly alerts**: Trigger when a metric deviates significantly from its historical pattern (e.g., today's error rate is 3x higher than the same time last week).
- **Alert fatigue**: Too many alerts and the team ignores them. Every alert should be actionable. If an alert fires and the response is "ignore it," remove the alert or adjust the threshold.

### Capacity Planning

- **Growth modeling**: Project data volume, user count, and transaction volume 6-12 months forward. Use historical growth rates and known upcoming events (new product launch, seasonal peak, acquisition).
- **Headroom target**: Maintain at least 30-40% headroom on every constrained resource (CPU, memory, database connections, storage). When headroom drops below 30%, begin planning a scaling action.
- **Vertical scaling**: Increase the resources of the existing infrastructure (larger database instance, more memory). Simple but has an upper limit and often requires downtime.
- **Horizontal scaling**: Add more instances (application servers, read replicas). More complex but scales further. Requires the application to be stateless or to externalize state to a shared store.
- **Storage growth**: Database storage grows predictably with transaction volume. Estimate: (average record size * daily transaction count * retention period). Add overhead for indexes (typically 30-50% of table size) and temporary space for queries and maintenance operations.

## Workflow

### 1. Establish Performance Baselines

- Measure current response times for the top 10 most-used transactions (e.g., create invoice, search customer, approve PO, load dashboard).
- Measure batch job durations for all scheduled jobs.
- Record resource utilization during peak hours (CPU, memory, database connections, I/O).
- Document the current data volumes: row counts for top 10 largest tables, database size, index size.
- Define performance targets (SLAs): per-transaction response time targets and batch job duration targets.
- **Watch out for**: Measuring performance only during off-peak hours. Baselines must reflect peak-hour behavior, which is when performance problems actually affect users.
- **Output**: Performance baseline document with current measurements and target SLAs.

### 2. Identify Bottlenecks

- Use APM tools to identify the slowest transactions and their time breakdown (application, database, external calls).
- Run query plan analysis (EXPLAIN) on the slowest database queries. Look for full table scans, missing indexes, and inefficient joins.
- Check for N+1 query patterns: identify pages or API endpoints that generate an unusually high number of database queries.
- Review batch job logs for jobs that have been growing in duration over time (a sign of data volume outpacing the job's design).
- Check connection pool utilization: are requests waiting for database connections?
- **Watch out for**: Optimizing the wrong thing. A query that runs in 50ms but is called 10,000 times per minute is a bigger problem than a query that runs in 5 seconds but is called once per day. Prioritize by total impact (frequency * duration).
- **Output**: Prioritized list of bottlenecks with root cause analysis.

### 3. Optimize Database Access

- Add missing indexes based on query plan analysis. Validate that the index is used by re-running EXPLAIN after creation.
- Rewrite inefficient queries: replace correlated subqueries with JOINs, replace SELECT * with specific columns, add filter predicates to reduce the result set early.
- Resolve N+1 patterns by switching to eager loading or batch fetching for the affected relationships.
- For large aggregation queries (dashboards, reports), create materialized views refreshed on a schedule rather than computing aggregations on every request.
- Update database statistics so the query planner has accurate cardinality estimates.
- **Watch out for**: Adding indexes without monitoring write performance. After adding an index, check that INSERT/UPDATE performance on the table has not degraded below acceptable levels.
- **Output**: Optimized queries with before/after performance measurements.

### 4. Implement Caching

- Identify caching candidates: data that is read frequently and changes rarely (reference data, configuration, lookup tables, computed aggregates for dashboards).
- Choose the cache layer: application cache for per-instance data, shared cache (Redis) for cross-instance data, CDN for static assets.
- Set appropriate TTLs based on staleness tolerance.
- Implement cache invalidation for data that must reflect changes within a tighter window than the TTL allows.
- Monitor cache hit rate. A hit rate below 80% means the cache is not effectively reducing database load. Investigate: TTL too short? Cache key too specific? Data too volatile for caching?
- **Watch out for**: Caching user-specific data without including the user ID in the cache key. This leads to users seeing each other's data -- a security and correctness disaster.
- **Output**: Caching architecture documented with cache layers, TTLs, invalidation strategy, and hit rate monitoring.

### 5. Tune Batch Jobs

- Profile slow batch jobs: where is time spent? Reading data? Processing? Writing results? Waiting on external services?
- Implement chunking for jobs that process large datasets. Set chunk size based on memory constraints and acceptable processing time per chunk.
- Parallelize where possible: split work by partition key (region, entity type, date range) and process partitions concurrently.
- Ensure idempotency: the job can be restarted safely after a failure without duplicating work.
- Move batch jobs to off-peak windows. If the off-peak window is insufficient, optimize the job or increase infrastructure.
- Implement progress tracking and timeout alerting.
- **Watch out for**: Batch jobs that hold database locks for their entire duration. Long-held locks block other operations. Commit work in chunks and release locks between chunks.
- **Output**: Optimized batch jobs with documented run times, chunk sizes, and schedules.

### 6. Set Up Monitoring and Alerting

- Deploy APM to track response times, error rates, and throughput for all endpoints.
- Create custom metric dashboards for business-critical operations (transaction processing rate, queue depth, batch job progress).
- Build an SLA dashboard showing P50, P95, and P99 response times vs. targets.
- Configure threshold-based alerts for critical metrics (response time degradation, error rate spikes, resource saturation).
- Establish an on-call rotation and escalation process for performance alerts.
- Review alert volume weekly. Tune or remove noisy alerts that do not lead to action.
- **Watch out for**: Dashboards that nobody looks at. Assign dashboard owners and review cadences. A monitoring system that is not monitored is useless.
- **Output**: Monitoring and alerting configuration with dashboard URLs, alert rules, and escalation contacts.

### 7. Plan for Capacity

- Project data growth: estimate database size at 6 and 12 months based on current growth rates and known business changes.
- Project user growth: estimate concurrent user count at peak.
- Identify the first resource that will hit capacity (database storage, CPU, connections, application memory).
- Plan the scaling action: vertical upgrade, horizontal scale-out, data archival, or architectural change.
- Set calendar reminders to re-evaluate capacity quarterly.
- **Watch out for**: Assuming linear growth. Business events (acquisitions, product launches, seasonal peaks) cause step-function growth. Include known events in the projection.
- **Output**: Capacity plan with growth projections, resource limits, scaling triggers, and planned actions.

## Decision Guide

### Choosing an Optimization Target

| Symptom | Likely Cause | First Action |
|---------|-------------|-------------|
| Slow page loads for all users | Missing database index or full table scan | Run EXPLAIN on the slowest queries |
| Slow page loads that worsen over time | Growing data volume without corresponding index or archival | Check table sizes; add indexes or implement data archival |
| Intermittent slowness (sometimes fast, sometimes slow) | Connection pool exhaustion or lock contention | Check pool utilization and database lock waits |
| Slow initial page load, fast subsequent loads | Missing browser cache or CDN configuration | Check Cache-Control headers and CDN setup |
| Slow list views with many records | Missing pagination or loading all records | Implement cursor-based pagination |
| Slow dashboard loading | Expensive aggregation queries running on every load | Create materialized views or cache aggregation results |
| Batch jobs exceeding their window | Data volume growth, single-threaded processing | Profile the job; implement chunking and parallelization |
| System-wide degradation during batch jobs | Batch jobs competing with online users for resources | Move batches to off-peak windows; use read replicas for batch reads |

### Caching vs. Materialized View vs. Query Optimization

| Factor | Query Optimization | Materialized View | Application Cache |
|--------|-------------------|-------------------|-------------------|
| Staleness | None (real-time) | Controlled (refresh schedule) | Controlled (TTL) |
| Implementation effort | Low-Medium | Medium | Medium |
| Ongoing maintenance | Low | Medium (refresh monitoring) | Medium (invalidation logic) |
| Works for | Slow individual queries | Expensive aggregations | Frequently read, rarely changed data |
| Does NOT work for | Fundamentally expensive queries on massive data | Data that must be real-time | Data that changes frequently |

### Vertical vs. Horizontal Scaling

| Factor | Vertical Scaling | Horizontal Scaling |
|--------|-----------------|-------------------|
| Complexity | Low (resize instance) | High (load balancing, state management) |
| Downtime | Usually required | Can be zero-downtime |
| Upper limit | Hardware maximum | Theoretically unlimited |
| Cost curve | Linear then steep | More cost-effective at scale |
| Best for | Quick fix, moderate growth | Long-term scaling, high availability |

## Common Patterns

### Index-Only Scan for List Views
Create a covering index that includes all columns displayed in a list view (e.g., customer list: index on (name, email, city, status, created_date)). The database serves the entire list from the index without touching the table. Dramatically faster for list views with filters and sorting.

### Read Replica Offloading
Route all report queries, search queries, and dashboard queries to a read replica. The primary database handles only writes and transactional reads. This is often the single highest-impact performance improvement for enterprise apps with heavy reporting.

### Stale-While-Revalidate Cache Pattern
Serve cached data immediately (even if TTL has expired) while triggering an asynchronous background refresh. The user gets a fast response with slightly stale data; the cache is updated for the next request. Eliminates cache miss latency for non-critical data like dashboard counts and summary statistics.

### Batch Job Checkpoint and Restart
For long-running batch jobs, save a checkpoint after each chunk (e.g., "processed records 1-5000"). If the job fails at record 7,823, restart from chunk 5001 instead of from the beginning. Store the checkpoint in a persistent location (database table or file).

### Data Archival for Performance
Move historical records older than a retention threshold (e.g., transactions older than 2 years) from the active table to an archive table. Active table stays small and fast; archived data remains queryable via a separate archive interface. Reduces index size, improves write performance, and speeds up backups.

### Progressive Loading for Complex Pages
Load the page skeleton immediately (navigation, layout, headers). Then load sections asynchronously in priority order: primary data first (the record being viewed), secondary data next (related records), charts and analytics last. Users see the most important content within 500ms; supplementary content appears within 1-2 seconds.

### Anti-Patterns to Avoid

- **Premature optimization**: Spending a week optimizing a query that runs once a month and takes 30 seconds. Optimize what matters: high-frequency, user-facing operations first.
- **Over-indexing**: Adding an index for every possible query. Each index consumes storage and slows writes. Index strategically based on actual query patterns.
- **Unbounded queries**: API endpoints or list views that return all records with no limit. A table with 5 million records will crash the application if a user requests all of them.
- **Caching everything**: Caching volatile data leads to stale results. Caching rarely-accessed data wastes memory. Cache only the high-read, low-write data.
- **Ignoring the database query planner**: Writing complex queries without checking the execution plan. The database may choose a catastrophically bad plan that a single index could fix.
- **Monitoring without action**: Collecting metrics and building dashboards that nobody reviews. Monitoring is only valuable if someone is responsible for acting on alerts.
- **Scaling before optimizing**: Adding hardware to mask a poorly written query. A query that scans 10 million rows will still scan 10 million rows on a bigger server. Optimize the query first, then scale.

## Checklist

- [ ] Performance baselines established for top 10 transactions and all batch jobs
- [ ] SLA targets defined (P50, P95, P99 response times) for user-facing operations
- [ ] APM deployed and tracking all endpoints
- [ ] Query plan analysis (EXPLAIN) run on the 10 slowest queries
- [ ] Missing indexes identified and created; write performance impact verified
- [ ] N+1 query patterns identified and resolved
- [ ] Eager vs. lazy loading configured appropriately for each entity relationship
- [ ] Materialized views created for expensive aggregation queries (dashboards, reports)
- [ ] Caching implemented for high-read, low-write data with appropriate TTLs
- [ ] Cache hit rate monitored; target > 80%
- [ ] Cache keys include user/role context to prevent data leakage
- [ ] Pagination implemented on all list views and API endpoints (no unbounded queries)
- [ ] Batch jobs profiled and optimized (chunking, parallelization, idempotency)
- [ ] Batch jobs scheduled during off-peak hours
- [ ] Batch job progress tracking and timeout alerting configured
- [ ] Connection pool sized appropriately; connection leak monitoring in place
- [ ] Read replica configured for reporting and search queries (if applicable)
- [ ] Background job queue used for long-running operations (exports, bulk ops, notifications)
- [ ] Dead letter queue monitored for failed background jobs
- [ ] SLA dashboard built with P50/P95/P99 vs. targets
- [ ] Alert rules configured for response time degradation, error rate spikes, and resource saturation
- [ ] Alert rules reviewed for noise; non-actionable alerts removed
- [ ] Capacity plan created with 6-month and 12-month growth projections
- [ ] Data archival strategy defined for tables with high growth rates
- [ ] Capacity review scheduled quarterly
- [ ] Query plans reviewed for correlated subqueries, non-sargable predicates, and missing predicate pushdown
- [ ] Connection pool sized per formula; leak detection and wait-time monitoring in place
- [ ] Result set streaming enabled for endpoints returning > 10K rows
- [ ] CQRS or read replica routing configured for heavy reporting workloads
- [ ] Auto-scaling triggers defined with predictive/scheduled scaling for known traffic patterns
- [ ] Scaling cost controls in place: maximum instance counts, spot instances for batch, cost-per-transaction monitoring
- [ ] Bulk write patterns used for high-volume insert operations; write amplification audited
- [ ] Slow query log enabled and reviewed weekly; top 10 slow queries tracked
- [ ] Alerting based on P95/P99 percentiles, not averages

## erp.ai & Proto

**erp.ai**: Built-in query analyzer identifies slow queries and missing indexes. The caching layer supports TTL, event-driven invalidation, and stale-while-revalidate patterns. Batch scheduler handles off-peak job execution with progress tracking and timeout alerting.

**Proto**: Generates query analysis and profiling tools mid-mission to diagnose performance bottlenecks. Optimization patterns discovered during missions -- index strategies, caching configurations, batch sizing results -- are retained in the L3 knowledge graph for reuse across future engagements.

## Related

- [Data Modeling](../data-modeling/SKILL.md) -- schema design (normalization, indexing) is the foundation of query performance
- [Reports & Dashboards](../reports-dashboards/SKILL.md) -- report queries are often the heaviest database consumers
- [Deployment & Go-Live](../deployment-golive/SKILL.md) -- performance testing is a go-live gate
- [Solution Architect](../../../roles/solution-architect/SKILL.md) -- the role that owns infrastructure and scaling decisions
