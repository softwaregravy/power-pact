-- CreateTable
CREATE TABLE "ProductMap" (
    "id" TEXT NOT NULL,
    "bubbly_product_id" TEXT NOT NULL,
    "partner_shop_domain" TEXT NOT NULL,
    "partner_product_id" TEXT NOT NULL,
    "bubbly_variant_id" TEXT NOT NULL,
    "partner_variant_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductMap_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ProductMap_partner_shop_domain_idx" ON "ProductMap"("partner_shop_domain");

-- CreateIndex
CREATE INDEX "ProductMap_bubbly_product_id_idx" ON "ProductMap"("bubbly_product_id");

-- CreateIndex
CREATE INDEX "ProductMap_partner_product_id_idx" ON "ProductMap"("partner_product_id");

-- CreateIndex
CREATE UNIQUE INDEX "ProductMap_bubbly_product_id_partner_shop_domain_partner_pr_key" ON "ProductMap"("bubbly_product_id", "partner_shop_domain", "partner_product_id", "partner_variant_id");
