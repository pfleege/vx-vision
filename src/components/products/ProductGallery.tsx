// src/components/products/ProductGallery.tsx

"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types/product";

export default function ProductGallery({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const activeImage = product.images[selectedImage] ?? product.images[0];

  if (!activeImage) return null;

  return (
    <div className="product-stage">
      <Image
        key={activeImage.src}
        src={activeImage.src}
        alt={activeImage.alt}
        width={1100}
        height={900}
        sizes="(max-width: 768px) 100vw, 55vw"
        className="product-main-image"
        priority={false}
      />

      <div
        className="product-thumbnails"
        role="group"
        aria-label="Choose product image"
      >
        {product.images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            className="product-thumb"
            aria-label={`Show image ${index + 1}: ${image.alt}`}
            aria-pressed={index === selectedImage}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt=""
              width={152}
              height={132}
              sizes="76px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
