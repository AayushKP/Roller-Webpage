"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "./hero-background";
import { HeroStats } from "./hero-stats";
import { FlaskConical, Megaphone, X } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-3 pt-8">
      <HeroBackground />

      {/* Main Content */}
      <div className="z-40 flex flex-col items-center text-center max-w-5xl w-full mx-auto translate-y-[-8vh]">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-1 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md mb-3"
        >
          <Megaphone className="w-3 h-3 text-primary" />
          <span className="text-white/60 w-px h-3 bg-white/20 mx-2 block" />
          <span className="text-xs xxl:text-sm text-white/90">
            New experimentation tools now live
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl lg:text-4xl 2xl:text-7xl font-semibold tracking-[-0.02em] leading-[1.05] text-white drop-shadow-2xl mb-12 md:mb-10"
        >
          Turn product changes <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-white/95 to-white/60">
            into measurable results
          </span>
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="group relative h-14 pl-8 pr-6 rounded-full text-lg bg-black/40 border border-white/10 hover:bg-black/60 shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)] backdrop-blur-xl transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />
            <span className="relative text-sm text-white z-10 italic font-serif">
              Run Experiments
            </span>
            <FlaskConical className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform relative z-10 text-white/80" />
          </Button>
        </motion.div>
      </div>

      {/* Bottom Area */}
      <div className="absolute bottom-6 md:bottom-12 left-0 w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 items-end gap-8 pointer-events-none ">
        {/* Left: Stats */}
        <div className="pointer-events-auto md:justify-self-start hidden md:block">
          <HeroStats />
        </div>

        {/* Center: Subtext */}
        <div className="pointer-events-auto md:justify-self-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm md:text-base text-muted-foreground/80 max-w-sm font-medium leading-relaxed "
          >
            Test ideas, measure impact, <br className="hidden md:block" />
            and scale what actually works.
          </motion.p>
        </div>

        {/* Right: Notification */}
        <div className="pointer-events-auto md:justify-self-end hidden md:block">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-[#1a1a1a] border border-white/10 p-4 rounded-xl max-w-xs backdrop-blur-lg shadow-2xl relative"
          >
            <div className="absolute top-2 right-2 p-1 cursor-pointer opacity-50 hover:opacity-100">
              <div className="flex items-center space-x-1 bg-white/10 rounded-full px-2 py-0.5">
                <span className="w-1 h-3 bg-primary rounded-full" />
                <span className="text-[10px] text-white/70 uppercase tracking-wider">
                  Experiments
                </span>
              </div>
            </div>
            <p className="text-sm font-medium text-white mb-1 pr-16">
              Test product ideas without guesswork
            </p>
            <p className="text-xs text-muted-foreground mb-2">
              See real impact as users interact
            </p>
            <p className="text-xs text-primary font-bold tracking-wide">
              Fast feedback, real results.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
