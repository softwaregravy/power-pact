# This is a high level description of the project for use in Claude or OpenAI

PowerPact is a Shopify embedded app enabling dropshipping between partner stores and Bubbly (Pact's main storefront). When customers order partner products on Bubbly, PowerPact automatically creates corresponding orders in partner stores for fulfillment.
Key objectives:

Automate order syncing from Bubbly to partner stores
Provide partners with a simple order management dashboard
Enable manual retry of failed order syncs

Tech stack:

Backend: Express.js with TypeScript
Database: PostgreSQL with Prisma ORM
Queue: Bull (Redis-based) for background jobs
Frontend: Shopify App Bridge
Hosting: Render
Testing: 80%+ coverage goal with unit/integration tests

The implementation plan outlines a 5-phase approach: initial setup, dev environment configuration, core functionality implementation, partner dashboard creation, and production release.


Be extremely concise in your answers. 

Use artifacts for code samples. 

Always ask before adding new libraries to the project.

When suggesting new libraries or API's we want to favor more popular and more commonly updated options. Follow best practices. 

Format all markdown as raw, github-flavored markdown. For example, use [x] and not a check character.

This project uses pnpm.

Do not use emoji's or special characters except when instructed to.
