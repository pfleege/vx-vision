// src/types/product.ts

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  priceLabel: string;
  images: {
    src: string;
    alt: string;
  }[];
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
};
