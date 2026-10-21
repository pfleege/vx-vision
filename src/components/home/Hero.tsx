// src/components/home/

import Link from "next/link";
import { site } from "@/data/site";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{site.hero.eyebrow}</p>
        <h1>
          Enter the next <span>dimension.</span>
        </h1>
        <p className="hero-description">{site.hero.description}</p>
        <div className="hero-actions">
          <Link className="button-primary" href="/products/vx-one">
            Discover VX One <span aria-hidden="true">↗</span>
          </Link>
          <Link className="button-secondary" href="/technology">
            Explore technology
          </Link>
        </div>
      </div>
      <div className="hero-visual">
        <Image
          src={site.hero.image}
          alt={site.hero.imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="hero-image"
        />
        <div className="hero-image-shade" />
        <span className="hero-index">01 / VX ONE</span>
      </div>
    </section>
  );
}
