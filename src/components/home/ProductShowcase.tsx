// src/components/home/ProductShowcase.tsx

import Link from "next/link";
import { getProducts } from "@/lib/products";
import ProductGallery from "../products/ProductGallery";
import Reveal from "../motion/Reveal";

export default async function ProductShowcase() {
  const products = await getProducts();
  const product = products[0];

  if (!product) return null;

  return (
    <section className="section" id="product">
      <Reveal>
        <div className="section-heading">
          <p className="section-kicker">Introducing VX One</p>
          <h2 className="section-title">A new perspective</h2>
          <p className="section-copy">
            Form meets frontier technology in a considered, sculptural design.
          </p>
        </div>
      </Reveal>
      <div className="product-showcase">
        <Reveal>
          <ProductGallery product={product} />
        </Reveal>
        <Reveal delay={0.08}>
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
        </Reveal>
      </div>
    </section>
  );
}
