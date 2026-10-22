// src/components/home/ProductShowcase.tsx

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
          <h2 className="section-title">{product.name}</h2>
          <p className="section-copy">{product.description}</p>
        </div>
      </div>
    </section>
  );
}
