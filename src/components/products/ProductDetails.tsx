// src/components/products/ProductDetails.tsx

import type { Product } from "@/types/product";
import ProductGallery from "./ProductGallery";

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <>
      <section className="page-hero">
        <p className="section-kicker">VX / PRODUCT 001</p>
        <h1>{product.name}</h1>
        <p>
          {product.tagline} {product.description}
        </p>
      </section>
      <section className="section">
        <div className="product-page-layout">
          <ProductGallery product={product} />
          <div className="product-details">
            <p className="section-kicker">THE SIGNATURE MODEL</p>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p className="request-price">
              <strong>{product.priceLabel}</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
