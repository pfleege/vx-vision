// src/components/home/Hero.tsx

"use client";

import Link from "next/link";
import { site } from "@/data/site";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero">
      <div className="hero-glow hero-glow-magenta" />
      <div className="hero-glow hero-glow-gold" />

      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="status-dot" />
          {site.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          Enter the next <span>dimension.</span>
        </motion.h1>
        <motion.p
          className="hero-description"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {site.hero.description}
        </motion.p>
        <div className="hero-actions">
          <Link className="button-primary" href="/products/nox-one">
            Discover VX One <span aria-hidden="true">↗</span>
          </Link>
          <Link className="button-secondary" href="/technology">
            Explore technology
          </Link>
        </div>
      </div>
      <motion.div
        className="hero-visual"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.15 }}
      >
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
      </motion.div>
      <div className="hero-bottom">
        <span>ENGINEERED FOR WHAT&apos;S NEXT</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}
