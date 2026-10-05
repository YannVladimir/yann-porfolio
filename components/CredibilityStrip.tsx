"use client";

import React from "react";
import { motion } from "framer-motion";
import { CREDIBILITY_METRICS } from "@/data/portfolioData";

export function CredibilityStrip() {
  return (
    <section className="relative border-y border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30 backdrop-blur-xs py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 dark:divide-neutral-800/80">
          {CREDIBILITY_METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`pt-4 sm:pt-0 ${index !== 0 ? "sm:pl-6 lg:pl-8" : ""}`}
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white font-mono">
                  {metric.value}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 mt-1">
                {metric.label}
              </p>
              <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
