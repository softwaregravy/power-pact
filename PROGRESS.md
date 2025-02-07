# Progress on 2/6/2025
## Phase 1 Task Status
- [x] Install Express Generator TS (via Shopify CLI)
- [x] Generate base project structure (via Shopify CLI)
- [x] Add TypeScript config (via Shopify CLI) 
- [x] Add test directory structure
- [x] Create first passing test
- [x] Add ESLint and Prettier
- [x] Success Criteria: Server returns "Hello World" on / with passing test

## Implementation Notes
- Used Shopify CLI with Remix template instead of Express
- Test structure follows convention: tests/{unit,integration}/{components,models,routes,utils}
- Vitest + JSDOM for testing instead of Jest

## Skipped Tasks
- [ ] Configure Husky for pre-commit hooks

## Emergent Tasks
- [ ] Upgrade ESLint to 9.x
- [ ] Add Prisma linting
- [ ] Add TypeScript path aliases
- [ ] Configure import sorting

# Progress on 2/6/2025

## Phase 1 Task Status
- [x] Upgraded ESLint & configured rules
- [x] Added Prisma linting
- [x] Added TypeScript path aliases (already configured via vite-tsconfig-paths)
- [x] Configured import sorting
- [x] Install Express Generator TS (via Shopify CLI)
- [x] Generate base project structure (via Shopify CLI)
- [x] Add TypeScript config (via Shopify CLI) 
- [x] Add test directory structure
- [x] Create first passing test
- [x] Add ESLint and Prettier
- [x] Success Criteria: Server returns "Hello World" on / with passing test

## Implementation Notes
- Kept ESLint 8.x due to Remix compatibility
- Used recommended Prisma ESLint rules
- Import sorting uses simple-import-sort with default rules
- Used Shopify CLI with Remix template instead of Express
- Test structure follows convention: tests/{unit,integration}/{components,models,routes,utils}
- Vitest + JSDOM for testing instead of Jest

## Skipped Tasks
- [ ] Husky pre-commit hooks (optional for now)

# Progress on 2/7/2025

## Phase 1 Task Status
- [x] Install Express Generator TS (via Shopify CLI)
- [x] Generate base project structure (via Shopify CLI)
- [x] Add TypeScript config (via Shopify CLI)
- [x] Add test directory structure
- [x] Add ESLint and Prettier
- [x] Install Prisma
- [x] Set up PostgreSQL locally using Postgres.app
- [x] Create initial schema with PartnerStore model
- [x] Add database URL to env
- [x] Generate Prisma client
- [ ] Write basic DB connection test
- [ ] Success Criteria: Test connects to DB and creates/reads a PartnerStore

## Implementation Notes
- Used Shopify CLI with Remix template instead of Express
- Used system user for local PostgreSQL instead of creating dedicated user
- Added Session model for Shopify auth
- Added proper database indexes and table mapping
- Using standard PostgreSQL connection URL format

## Skipped Tasks
- [ ] Configure Husky for pre-commit hooks
- [ ] Write DB connection test
- [ ] Create first passing test

## Emergent Tasks
- [ ] Add model validations
- [ ] Add database seed data
- [ ] Configure test database cleanup
- [ ] Add model factories for testing

## Likely Next Steps
- Complete Database Setup by adding connection tests
- Move on to Queue Setup with Redis and Bull
