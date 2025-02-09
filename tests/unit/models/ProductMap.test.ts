import { describe, it, expect } from 'vitest';

describe('ProductMap Factory', () => {
  it('creates a ProductMap', async () => {
    const productMap = await factories.productMapFactory.build();
    
    expect(productMap).toHaveProperty('bubbly_product_id');
    expect(productMap).toHaveProperty('partner_shop_domain');
    expect(productMap.bubbly_product_id).toMatch(/^gid:\/\/shopify\/Product\/\d+$/);
  });
});
