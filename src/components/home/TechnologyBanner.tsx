// src/components/home/TechnologyBanner.tsx

import Link from "next/link";
import Reveal from "../motion/Reveal";

export default function TechnologyBanner() {
  return (
    <Reveal>
      <section className="tech-banner mt-26">
        <p className="section-kicker">A different reality awaits</p>
        <h2>Designed for the worlds we haven&apos;t seen yet.</h2>
        <p>
          Explore the thinking behind a more immersive, more human approach to
          spatial technology.
        </p>
        <Link className="button-primary mt-4" href="/technology">
          Explore our technology <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </Reveal>
  );
}
