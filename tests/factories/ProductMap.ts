import { faker } from '@faker-js/faker';
import { Factory } from 'fishery';
import { type Prisma, type PartnerStore, type ProductMap } from '@prisma/client';
import prisma from '~/db.server';
import { generateShopifyGid } from './helpers';

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
