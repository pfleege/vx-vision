// src/app/products/[slug]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/products/ProductDetails";
import { getProduct, getProducts } from "@/lib/products";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProducts().then((items) =>
    items.map((product) => ({ slug: product.slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) return { title: "Product not found" };

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return notFound();

  return <ProductDetails product={product} />;
}
