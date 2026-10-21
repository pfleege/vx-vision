// src/components/motion/Reveal.tsx

"use client";

import { motion, useReducedMotion } from "motion/react";
import type { RevealProps } from "@/types/reveal";

export default function Reveal({
  children,
  delay = 0,
  className,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
