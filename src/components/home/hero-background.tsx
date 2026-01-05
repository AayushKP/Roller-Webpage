"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function HeroBackground() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  return (
    <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
      <div
        className="w-full h-full bg-center bg-cover bg-no-repeat "
        style={{
          backgroundImage: "url('/hero-bg-v2.png')",
        }}
      />
    </motion.div>
  );
}
