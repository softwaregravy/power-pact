import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';
import { type Prisma, type PartnerStore, type ProductMap } from '@prisma/client';
import prisma from '~/db.server';

const generateShopifyGid = (type: string, id?: number) => {
  return `gid://shopify/${type}/${id || faker.number.int({ min: 1, max: 999999 })}`;
};

export const partnerStoreFactory = Factory.define<PartnerStore, Prisma.PartnerStoreCreateInput>(({ sequence }) => ({
  shop_domain: faker.internet.domainName({ suffix: 'myshopify.com' }),
  access_token: `shpat_${faker.string.alphanumeric(32)}`,
  status: 'active',
  created_at: new Date(),
  updated_at: new Date(),
  uninstall_date: null,
}), {
  async transient({ afterCreate = true }, { onCreate }) {
    if (afterCreate) {
      onCreate(async (attributes) => {
        return prisma.partnerStore.create({ data: attributes });
      });
    }
  },
});

export const productMapFactory = Factory.define<ProductMap>(() => ({
  id: faker.string.uuid(),
  bubbly_product_id: generateShopifyGid('Product'),
  partner_shop_domain: faker.internet.domainName({ suffix: 'myshopify.com' }),
  partner_product_id: generateShopifyGid('Product'),
  bubbly_variant_id: generateShopifyGid('ProductVariant'),
  partner_variant_id: generateShopifyGid('ProductVariant'),
  created_at: new Date(),
  updated_at: new Date(),
}));

export const clearDb = async () => {
  const tables = ['ProductMap', 'PartnerStore'];
  for (const table of tables) {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${table}" CASCADE;`);
  }
};
