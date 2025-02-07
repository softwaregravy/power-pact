export interface OrderSyncJob {
  bubblyOrderId: string;
  partnerShopDomain: string;
  retryCount: number;
}

export interface JobResult {
  success: boolean;
  error?: string;
}
