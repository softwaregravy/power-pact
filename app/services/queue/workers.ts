import { Worker } from 'bullmq';
import type { OrderSyncJob } from './types';
import { QUEUE_NAMES, REDIS_CONFIG } from './config';

export async function processOrderSync(job: Job<OrderSyncJob>): Promise<JobResult> {
  try {
    const { bubblyOrderId, partnerShopDomain } = job.data;
    if (!bubblyOrderId || bubblyOrderId.trim() === '') {
      return {
        success: false,
        error: 'bubblyOrderId is required'
      };
    }

    // TODO: Implement order sync logic
    console.log(`Processing order sync: ${bubblyOrderId} for ${partnerShopDomain}`);

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

export function createOrderSyncWorker() {
  return new Worker<OrderSyncJob, JobResult>(
    QUEUE_NAMES.ORDER_SYNC,
    processOrderSync,
    {
      connection: REDIS_CONFIG.connection,
      concurrency: parseInt(process.env.QUEUE_CONCURRENCY || '5'),
      lockDuration: 30000, // 30 seconds
    }
  );
}
