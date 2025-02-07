import { PrismaClient } from '@prisma/client'
import { beforeEach, describe, expect, it } from 'vitest'

const prisma = new PrismaClient()

describe('PartnerStore', () => {
  beforeEach(async () => {
    await prisma.partnerStore.deleteMany()
  })

  it('creates and reads a partner store', async () => {
    const store = await prisma.partnerStore.create({
      data: {
        shop_domain: 'test-store.myshopify.com',
        access_token: 'shpat_test_token',
        status: 'active'
      }
    })

    expect(store).toMatchObject({
      shop_domain: 'test-store.myshopify.com',
      access_token: 'shpat_test_token',
      status: 'active'
    })

    const found = await prisma.partnerStore.findUnique({
      where: { shop_domain: store.shop_domain }
    })

    expect(found).toMatchObject(store)
  })
})
