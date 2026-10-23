// src/components/home/FeatureGrid.tsx

import { features } from "@/data/features";
import { article } from "motion/react-client";

export default function FeatureGrid() {
  return (
    <div className="feature-grid">
      {features.map((feature) => (
        <article key={feature.number} className="feature-card">
          <span className="feature-number">{feature.number}</span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  );
}
