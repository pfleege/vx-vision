// src/components/home/FeatureGrid.tsx

import { features } from "@/data/features";
import Reveal from "../motion/Reveal";

export default function FeatureGrid() {
  return (
    <div className="feature-grid">
      {features.map((feature, index) => (
        <Reveal key={feature.number} delay={index * 0.5}>
          <article key={feature.number} className="feature-card">
            <span className="feature-number">{feature.number}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
