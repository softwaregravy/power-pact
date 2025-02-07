import { Queue } from 'bullmq';
import type { OrderSyncJob, JobResult } from './types';
import { QUEUE_NAMES, REDIS_CONFIG } from './config';

// Create queues
export const orderSyncQueue = new Queue<OrderSyncJob>(QUEUE_NAMES.ORDER_SYNC, {
  connection: REDIS_CONFIG.connection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: 'exponential',
      delay: 1000, // 1 second
    },
    removeOnComplete: 100,
    removeOnFail: 1000,
  },
});
