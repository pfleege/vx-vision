// src/app/products/[slug]/page.tsx

import ProductDetails from "@/components/products/ProductDetails";
import { getProduct } from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return null;

  return <ProductDetails product={product} />;
}
