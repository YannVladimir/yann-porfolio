"use client";

import React from "react";
import { motion } from "framer-motion";
import { PHILOSOPHY_PRINCIPLES } from "@/data/portfolioData";
import { Quote } from "lucide-react";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 md:py-32 relative section-gradient-violet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-xl space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Engineering Philosophy
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Core principles.
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Guiding beliefs refined over a decade of building, modernizing, and maintaining systems.
          </p>
        </div>

        {/* Typographic Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PHILOSOPHY_PRINCIPLES.map((item, idx) => (
            <motion.div
              key={item.quote}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 space-y-4 hover:border-indigo-500/30 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold block">
                  0{idx + 1}
                </span>
                <blockquote className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950 dark:text-white leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pt-4 border-t border-neutral-100 dark:border-neutral-800/80">
                {item.elaboration}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
