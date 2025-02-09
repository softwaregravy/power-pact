import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';
import prisma from '~/db.server';
import { generateShopifyGid } from './helpers';

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
