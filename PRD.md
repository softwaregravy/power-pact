
## PowerPact Consolidated Requirements

### 1. Overview & Objectives

- **Product:** PowerPact, a Shopify embedded app developed by Pact.
- **Purpose:** Enable partner stores to become drop-ship providers for Bubbly, Pact's Shopify storefront.
- **Key Functionality:** Bubbly sells partner products, and PowerPact pushes relevant orders back to the original partner stores.

### 2. Core Features & Requirements

- **Embedded Shopify App:** Simplified authorization and UI within the Shopify admin.
- **Order Syncing:** Orders from Bubbly are pushed to partner stores via background jobs.
- **Partner Dashboard:** A simple UI showing a table of orders from the last 30 days.
- **Manual Retry for Failed Orders:** Admins manually mark failed orders as "ready_for_sync" to retry syncing.

### 3. Tech Stack

- **Backend:** Express.js with TypeScript
- **Database:** PostgreSQL with Prisma ORM
- **Frontend:** Shopify App Bridge
- **Hosting:** Render
- **Background Jobs:** Bull for job processing
- **Testing:** FactoryBot-like tools for fake data, 80%+ test coverage goal

### 4. Data Models

#### PartnerStore

```typescript
model PartnerStore {
  shop_domain           String   @unique
  access_token          String
  status                String   // "active" or "disabled"
  created_at            DateTime @default(now())
  updated_at            DateTime @updatedAt
  uninstall_date        DateTime?
}
```

#### OrderSync

```typescript
model OrderSync {
  bubbly_order_id        String
  partner_shop_domain    String
  partner_order_id       String?
  status                 String    // "pending", "ready_for_sync", "synced", "failed"
  error_message          String?
  last_order_failure_reason String?
  retry_count            Int       @default(0)
  last_attempted_at      DateTime?
  created_at             DateTime  @default(now())
  updated_at             DateTime  @updatedAt
}
```

#### ProductMap

```typescript
model ProductMap {
  bubbly_product_id      String
  partner_shop_domain    String
  partner_product_id     String
  bubbly_variant_id      String
  partner_variant_id     String
  created_at             DateTime @default(now())
  updated_at             DateTime @updatedAt
}
```

### 5. Workflows

#### Authentication & Authorization

- **OAuth Flow:** Used during app installation to obtain access tokens.
- **Token Storage:** Tokens stored securely in PostgreSQL.
- **Handling Uninstalls:** Track uninstall date.
- **Permission Changes:** Trigger re-authorization via UI. Failure reason logged as "reauthorization_required."

#### Product Management

- **Automatic Product Sync:** All products synced upon app installation.
- **Product Mapping:** Maintained to track which products and variants belong to which store.
- **No Inventory Sync:** Planned for a future version.

#### Order Processing

1. Customer places an order on Bubbly.
2. Shopify triggers `order_paid` or `order_risk_analyzed` webhook.
3. PowerPact pulls the order details.
4. Analysis determines readiness for syncing.
5. If ready, background job syncs the order.
6. Orders split with simple proration for tax and shipping.
7. Success/failure logged with retry count.
8. Manual retry via status change to "ready_for_sync."

### 6. Background Job Handling

- **Job Queue:** Bull for processing.
- **Job Processing:** No prioritization; all jobs processed equally.
- **Failure Handling:** Detailed logging with error messages.
- **Manual Retry:** Admins trigger retries manually.

### 7. Error Handling

- **Failure Logging:** Include error codes, messages, and timestamps.
- **Retry Mechanism:** None/Manual. Retries tracked with `retry_count`.
- **No Systemic Alerting:** No external monitoring service integration.

### 8. Testing & Staging Strategy

- **Coverage Goal:** 80%+ automated test coverage.
- **Test Types:** Unit, integration (mocking Shopify API), and end-to-end tests.
- **Staging Environment:** Separate app in Shopify, integrated with dev stores.
- **Test Data:** Generated via FactoryBot-like tools.

### 9. Data Retention

- **Order History:** Maintained indefinitely.
- **No Deletion Policy:** No data deletion after a certain period.

### 10. Future Considerations (Post-MVP)

- Rules-based tax and shipping proration.
- Inventory synchronization.
- Advanced order modification handling.
- Partner notifications for order status.
- Data retention policies.
- Advanced analytics and reporting.
- Automated retry mechanisms.
- Enhanced partner dashboard features.
- Caching layer for product queries.

