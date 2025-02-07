import { beforeAll, afterAll, beforeEach, describe, it, expect } from 'vitest';
import { QueueEvents, Job } from 'bullmq';
import { orderSyncQueue } from '~/services/queue/queues';
import { createOrderSyncWorker } from '~/services/queue/workers';
import type { OrderSyncJob } from '~/services/queue/types';
import { QUEUE_NAMES } from '~/services/queue/config';

describe('Queue Integration', () => {
  let worker: ReturnType<typeof createOrderSyncWorker>;
  let queueEvents: QueueEvents;

  beforeAll(async () => {
    worker = createOrderSyncWorker();
    queueEvents = new QueueEvents(QUEUE_NAMES.ORDER_SYNC);
    // Wait for connections to be ready
    await new Promise(resolve => setTimeout(resolve, 1000));
  });

  beforeEach(async () => {
    await orderSyncQueue.obliterate(); // Completely clear queue
  });

  afterAll(async () => {
    await worker.close();
    await orderSyncQueue.close();
    await queueEvents.close();
  });

  it('should process a job successfully', async () => {
    const testJob: OrderSyncJob = {
      bubblyOrderId: 'test-order-123',
      partnerShopDomain: 'test-shop.myshopify.com',
      retry_count: 0
    };

    const completionPromise = new Promise((resolve, reject) => {
      worker.on('completed', ({jobId, returnvalue}) => {
        try {
          expect(returnvalue).toEqual({ success: true });
          resolve(true);
        } catch (error) {
          reject(error);
        }
      });
    });


    await orderSyncQueue.add('job', testJob);
    await completionPromise;
  },
    5000
  );

  it('should handle job failures', async () => {
    // Add invalid job data to trigger failure
    const invalidJob: OrderSyncJob = {
      bubblyOrderId: '',  // Invalid order ID
      partnerShopDomain: 'test-shop.myshopify.com',
      retry_count: 0
    };

    const completionPromise = new Promise((resolve, reject) => {
      worker.on('completed', ({jobId, returnvalue}) => {
        try {
          expect(returnvalue).toMatchObject({
            success: false,
            error: expect.stringContaining('required')
          });
          resolve(true);
        } catch (error) {
          reject(error);
        }
      });
    });
    await orderSyncQueue.add(QUEUE_NAMES.ORDER_SYNC, invalidJob);
    await completionPromise;

  }, 
    5000
  );
});
