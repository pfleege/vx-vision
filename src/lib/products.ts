// src/lib/products.ts

import { products } from "@/data/products";
import type { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  return products.find((product) => product.slug === slug);
}
