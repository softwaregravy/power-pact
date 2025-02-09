import { faker } from '@faker-js/faker';

export const generateShopifyGid = (type: string, id?: number) => {
  return `gid://shopify/${type}/${id || faker.number.int({ min: 1, max: 999999 })}`;
};

export const clearDb = async () => {
  const tables = ['ProductMap', 'PartnerStore'];
  for (const table of tables) {
    await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${table}" CASCADE;`);
  }
};
