if (!process.env.NODE_ENV) {
  throw new Error('NODE_ENV must be set');
}

export const QUEUE_NAMES = {
  ORDER_SYNC: `order_sync_${process.env.NODE_ENV}`,
} as const;

if (!process.env.REDIS_URL && !process.env.REDIS_HOST) {
  throw new Error('Redis configuration missing');
}

export const REDIS_CONFIG = {
  connection: process.env.REDIS_URL || {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379'),
  },
} as const;
