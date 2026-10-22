// src/components/products/ProductGallery.tsx

import Image from "next/image";
import { Product } from "@/types/product";

export default function ProductGallery({ product }: { product: Product }) {
  const activeImage = product.images[0];

  if (!activeImage) return null;

  return (
    <div className="product-stage">
      <Image
        src={activeImage.src}
        alt={activeImage.alt}
        width={1100}
        height={900}
        sizes="(max-width: 768px) 100vw, 55vw"
        className="product-main-image"
      />
    </div>
  );
}
