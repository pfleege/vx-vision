// src/app/page.tsx

import HeroSection from "@/components/home/Hero";
import ProductShowcase from "@/components/home/ProductShowcase";
import FeatureGrid from "@/components/home/FeatureGrid";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <FeatureGrid />
    </>
  );
}
