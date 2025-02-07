import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { PrismaClient } from '@prisma/client'
import { afterEach, beforeAll, beforeEach, afterAll } from 'vitest'

const prisma = new PrismaClient()

// Database setup
beforeAll(async () => {
  if (!process.env.DATABASE_URL?.includes('test')) {
    throw new Error('Must use test database for tests')
  }
})

beforeEach(async () => {
  // Clean all tables before each test
  const tables = await prisma.$queryRaw<
    Array<{ tablename: string }>
  >`SELECT tablename FROM pg_tables WHERE schemaname='public'`

  for (const { tablename } of tables) {
    if (tablename !== '_prisma_migrations') {
      await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${tablename}" CASCADE;`)
    }
  }
})

afterAll(async () => {
  await prisma.$disconnect()
})

// React cleanup
afterEach(() => {
  cleanup()
})
