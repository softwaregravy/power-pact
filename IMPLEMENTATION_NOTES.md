# Code Organization & Naming Conventions

## Directory Structure
```
/app
  /components    # Reusable React components
  /models        # Prisma models and types
  /routes        # Route components and layouts
  /utils         # Helper functions and utilities
  /hooks         # React hooks
  /services      # Business logic and external services
  /styles        # CSS/styling files
/prisma          # Database schema and migrations
/public          # Static assets
/tests
  /unit         # Unit tests mirroring src structure
  /integration  # Integration tests mirroring src structure
```

## File Naming

### Components
- PascalCase: `OrderTable.tsx`, `ProductList.tsx`
- Tests: `OrderTable.test.tsx`

### Routes
- kebab-case: `partner-dashboard.tsx`, `order-history.tsx`
- Tests: `partner-dashboard.test.tsx`

### Utils/Hooks/Services
- camelCase: `orderUtils.ts`, `useOrders.ts`
- Tests: `orderUtils.test.ts`

### Configuration Files
- kebab-case: `vite.config.ts`, `tsconfig.json`

## Code Naming

### TypeScript/React
- Components: PascalCase (`OrderTable`)
- Interfaces/Types: PascalCase (`OrderData`)
- Functions/Variables: camelCase (`getOrders`)
- Constants: SCREAMING_SNAKE_CASE (`MAX_RETRY_COUNT`)

### Prisma Models
- Model names: PascalCase (`PartnerStore`)
- Properties: camelCase (`shopDomain`)
- DB tables: snake_case (auto-handled by Prisma)

### CSS
- Classes: kebab-case (`order-table`)
- Data attributes: kebab-case (`data-test-id`)
