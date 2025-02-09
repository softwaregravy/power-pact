import { describe, it, expect, beforeEach } from 'vitest';
import prisma  from '~/db.server';

describe('ProductMap', () => {
  beforeEach(async () => {
    await prisma.productMap.deleteMany();
  });

  it('creates a product mapping', async () => {
    const productMap = await prisma.productMap.create({
      data: {
        bubbly_product_id: 'gid://shopify/Product/1',
        partner_shop_domain: 'partner-store.myshopify.com',
        partner_product_id: 'gid://shopify/Product/2',
        bubbly_variant_id: 'gid://shopify/ProductVariant/1',
        partner_variant_id: 'gid://shopify/ProductVariant/2',
      },
    });

    expect(productMap).toMatchObject({
      bubbly_product_id: 'gid://shopify/Product/1',
      partner_shop_domain: 'partner-store.myshopify.com',
      partner_product_id: 'gid://shopify/Product/2',
      bubbly_variant_id: 'gid://shopify/ProductVariant/1',
      partner_variant_id: 'gid://shopify/ProductVariant/2',
    });
  });

  it('enforces unique constraint on bubbly product/variant and partner store', async () => {
    const data = {
      bubbly_product_id: 'gid://shopify/Product/1',
      partner_shop_domain: 'partner-store.myshopify.com',
      partner_product_id: 'gid://shopify/Product/2',
      bubbly_variant_id: 'gid://shopify/ProductVariant/1',
      partner_variant_id: 'gid://shopify/ProductVariant/2',
    };

    await prisma.productMap.create({ data });

    await expect(prisma.productMap.create({ data })).rejects.toThrow();
  });
});
