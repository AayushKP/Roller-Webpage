"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Download", href: "#" },
    { name: "Stories", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-black/50 backdrop-blur-md border-white/5 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Left: Navigation Links */}
        <div className="hidden md:flex items-center bg-white/5 rounded-2xl px-2 py-1.5 border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - Left aligned on mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Center: Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          <Rocket className="w-5 h-5 text-white rotate-45" />
          <span className="text-xl font-bold tracking-tighter text-white italic">
            Roller.Py
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center bg-white/10 rounded-xl px-3 py-1.5 border border-white/5 focus-within:border-white/20 transition-colors w-40 lg:w-64">
            <Search className="w-4 h-4 text-muted-foreground mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-sm text-white placeholder:text-muted-foreground w-full"
            />
          </div>
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-muted-foreground bg-white/5 hover:text-white">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 bg-black z-50 flex flex-col p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold">Roller.Py</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg text-white/80 hover:text-white font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
