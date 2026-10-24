// src/data/products.ts

import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    slug: "vx-one",
    name: "VX One",
    tagline: "A new perspective.",
    description:
      "A fictional next-generation immersive headset, imagined for clarity, comfort and spatial experiences.",
    priceLabel: "Request pricing",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2024/07/23/16/36/ai-generated-8915803_1280.jpg",
        alt: "Virtual reality headset, front view",
      },
      {
        src: "https://cdn.pixabay.com/photo/2024/01/26/00/54/virtual-reality-8533095_1280.jpg",
        alt: "Virtual reality headset, alternate view",
      },
      {
        src: "https://cdn.pixabay.com/photo/2024/10/05/20/11/ai-generated-9098607_1280.jpg",
        alt: "Virtual reality headset detail",
      },
    ],
    specs: [
      { label: "Display", value: "Micro-OLED concept" },
      { label: "Tracking", value: "Spatial tracking concept" },
      { label: "Design", value: "Titanium-inspired shell" },
    ],
    features: [
      "Precision optics",
      "Spatial intelligence",
      "Ergonomic architecture",
    ],
  },
  {
    slug: "vx-light",
    name: "VX Light",
    tagline: "A customized perspective.",
    description:
      "A fictional next-generation immersive headset, fully customized for you, providing comfort, clarity and uniqueness.",
    priceLabel: "Request pricing",
    images: [
      {
        src: "https://cdn.pixabay.com/photo/2024/09/13/18/26/ai-generated-9045699_1280.jpg",
        alt: "Virtual reality headset, front view",
      },
      {
        src: "https://cdn.pixabay.com/photo/2024/10/14/21/00/ai-generated-9120851_1280.jpg",
        alt: "Virtual reality headset, alternate view",
      },
      {
        src: "https://cdn.pixabay.com/photo/2024/02/09/16/34/ai-generated-8563386_1280.jpg",
        alt: "Virtual reality headset detail",
      },
    ],
    specs: [
      { label: "Display", value: "Micro-OLED concept" },
      { label: "Tracking", value: "Spatial tracking concept" },
      { label: "Design", value: "Fully customized titanium shell" },
    ],
    features: [
      "Precision optics",
      "Spatial intelligence",
      "Ergonomic architecture",
    ],
  },
];
