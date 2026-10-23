// src/components/home/ProductShowcase.tsx

import Link from "next/link";
import { getProducts } from "@/lib/products";
import ProductGallery from "../products/ProductGallery";

export default async function ProductShowcase() {
  const products = await getProducts();
  const product = products[0];

  if (!product) return null;

  return (
    <section className="section" id="product">
      <div className="product-showcase">
        <ProductGallery product={product} />
        <div className="product-copy">
          <p className="section-kicker">01 / OUR SIGNATURE MODEL</p>
          <h3 className="section-title">{product.name}</h3>
          <p className="section-copy">{product.description}</p>
          <div className="spec-list">
            {product.specs.map((spec) => (
              <div className="spec-row" key={spec.label}>
                <span>{spec.label}</span>
                <span>{spec.value}</span>
              </div>
            ))}
            <Link
              className="button-primary mt-4"
              href={`/products/${product.slug}`}
            >
              Explore the product <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
