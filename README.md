# PowerPact

PowerPact is a Shopify embedded app developed by Pact that enables partner stores to become drop-ship providers for Bubbly, Pact's Shopify storefront. It automates order syncing from Bubbly back to partner stores, providing an efficient and seamless dropshipping experience.

## Features
- **Order Syncing:** Automatically pushes orders from Bubbly to partner stores.
- **Partner Dashboard:** Embedded UI with a 30-day order history.
- **Manual Retry:** Admins can manually retry failed order syncs by marking them as "ready_for_sync."
- **Product Mapping:** Supports product and variant mapping for accurate order fulfillment.

## Tech Stack
- **Backend:** Express.js (TypeScript)
- **Database:** PostgreSQL with Prisma ORM
- **Frontend:** Shopify App Bridge
- **Background Jobs:** Bull for processing
- **Hosting:** Render

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/powerpact.git
   cd powerpact
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables (refer to `.env.example`).
4. Run the development server:
   ```bash
   npm run dev
   ```

## Testing
- 80%+ test coverage goal
- Run tests with:
  ```bash
  npm run test
  ```

## Project Structure
- **/src** - Application source code
- **/prisma** - Database schema
- **/tests** - Unit and integration tests

## 📋 Future Roadmap
- Rules-based tax and shipping proration
- Inventory synchronization
- Advanced reporting & analytics
- Automated retry mechanisms
- Enhanced partner dashboard features



