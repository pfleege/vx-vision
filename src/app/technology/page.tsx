// src/app/technology/page.tsx

import Reveal from "@/components/motion/Reveal";
import FeatureGrid from "@/components/home/FeatureGrid";

export default function TechnologyPage() {
  return (
    <>
      <section className="page-hero">
        <p className="section-kicker">Beyond the visible</p>
        <h1>Technology should disappear. Possibility should not.</h1>
        <p>
          VX Vision imagines a more natural way to experience digital worlds:
          optics designed for clarity, spatial intelligence that feels
          intuitive, and a form built around the person wearing it.
        </p>
      </section>
      <section className="section">
        <Reveal>
          <div className="section-heading">
            <p className="section-kicker">Our principles</p>
            <h2 className="section-title">Engineered around the experience.</h2>
            <p className="section-copy">
              These are concept descriptions for a fictional showcase brand, not
              claims about a shipping product.
            </p>
          </div>
        </Reveal>
        <FeatureGrid />
      </section>
    </>
  );
}
