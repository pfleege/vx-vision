// src/components/products/ProductDetails.tsx

import type { Product } from "@/types/product";

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <section className="page-hero">
      <p className="section-kicker">VX / PRODUCT 001</p>
      <h1>{product.name}</h1>
      <p>
        {product.tagline} {product.description}
      </p>
    </section>
  );
}
