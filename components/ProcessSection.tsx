"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/data/portfolioData";
import { Check, ChevronRight, ArrowDown } from "lucide-react";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800/80 section-gradient-emerald">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Engineering Mindset
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
            How I approach problems.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            A disciplined four-phase methodology moving with precision from root domain analysis to long-term operational resilience.
          </p>
        </div>

        {/* 4-Step Interactive Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveStep(idx)}
                className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-white dark:bg-neutral-900 border-indigo-600 dark:border-indigo-400 shadow-md ring-1 ring-indigo-500/20"
                    : "bg-white/70 dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 uppercase">
                      PHASE {step.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-neutral-950 dark:text-white tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mt-0.5">
                      {step.tagline}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800/80 space-y-1.5 mt-4">
                  {step.points.map((p, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400">
                      <Check size={12} className="text-indigo-500 mt-0.5 shrink-0" />
                      <span className="leading-tight">{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
