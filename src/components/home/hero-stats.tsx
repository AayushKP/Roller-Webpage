"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "85M / day", label: "Real-Time Signals Tracked" },
  { value: "320+", label: "Active Product Teams" },
];

export function HeroStats() {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-24">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8 + index * 0.2,
            ease: "easeOut",
          }}
          className="flex flex-col"
        >
          <span className="text-sm sm:text-lg md:text-xl xl:text-3xl xxl:text-6xl font-bold bg-clip-text text-transparent bg-linear-to-br from-white via-white to-white/70 tracking-tighter">
            {stat.value}
          </span>
          <span className="text-xs text-muted-foreground mt-1 text-white/50">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
