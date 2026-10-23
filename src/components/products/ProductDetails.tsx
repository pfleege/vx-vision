// src/components/products/ProductDetails.tsx

import Link from "next/link";
import type { Product } from "@/types/product";
import ProductGallery from "./ProductGallery";
import { Rows } from "lucide-react";

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
            <div className="spec-list">
              {product.specs.map((spec) => (
                <div className="spec-row" key={spec.label}>
                  <span>{spec.label}</span>
                  <span>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="detail-panel">
          <h2>Designed around you</h2>
          <ul>
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Link className="button-primary mt-4" href="/technology">
            Discover the technology ↗
          </Link>
        </div>
      </section>
    </>
  );
}
