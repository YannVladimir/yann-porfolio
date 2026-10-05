"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { HeroCanvas } from "./HeroCanvas";

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Background radial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.12]"
            >
              I build software that turns{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 dark:from-indigo-400 dark:via-indigo-300 dark:to-cyan-400">
                complex problems
              </span>{" "}
              into simple experiences.
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl font-normal"
            >
              {PERSONAL_INFO.subheadline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 font-medium text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-sm hover:shadow group cursor-pointer"
              >
                <span>Explore my work</span>
                <ArrowDown size={15} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <Mail size={15} />
                <span>Let&apos;s work together</span>
              </button>

              <a
                href="/cv-yann-vladimir-bajeneza.pdf"
                download="CV-Yann-Vladimir-Bajeneza.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800/60 transition-all cursor-pointer"
              >
                <Download size={15} />
                <span>Download CV</span>
              </a>
            </motion.div>

            {/* Executive context meta */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500 dark:text-neutral-400 font-mono pt-4 border-t border-neutral-200 dark:border-neutral-800/80"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Senior Developer at IST Africa</span>
              </div>
              <div>MSIT · Carnegie Mellon University Africa</div>
              <div>Based in Kigali, Rwanda</div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Abstract Ecosystem Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <HeroCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
