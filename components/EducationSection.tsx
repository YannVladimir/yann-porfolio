"use client";

import React from "react";
import { motion } from "framer-motion";
import { EDUCATION_DATA, ACHIEVEMENTS_DATA } from "@/data/portfolioData";
import { GraduationCap, Award, Building, Sparkles } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800/80 section-gradient-cyan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
            <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Academic Background & Recognition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Education & honors.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Rigorous technical training combining computer science fundamentals, graduate project management, and advanced AI systems research at Carnegie Mellon University Africa.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-7 rounded-3xl border transition-all flex flex-col justify-between ${
                edu.featured
                  ? "bg-neutral-950 text-white dark:bg-[#12141e] border-indigo-500/50 shadow-lg relative overflow-hidden"
                  : "bg-white dark:bg-neutral-900/40 border-neutral-200 dark:border-neutral-800"
              }`}
            >
              {edu.featured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
              )}

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-xl ${edu.featured ? "bg-indigo-600/30 text-indigo-400" : "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400"}`}>
                    <GraduationCap size={20} />
                  </div>
                  <span className={`text-xs font-mono ${edu.featured ? "text-indigo-300" : "text-neutral-500"}`}>
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h3 className={`text-lg font-bold tracking-tight ${edu.featured ? "text-white" : "text-neutral-950 dark:text-white"}`}>
                    {edu.degree}
                  </h3>
                  <p className={`text-xs font-mono font-medium mt-1 ${edu.featured ? "text-indigo-300" : "text-indigo-600 dark:text-indigo-400"}`}>
                    {edu.institution}
                  </p>
                  <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    {edu.location}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 mt-6">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                  Focus Area
                </span>
                <p className={`text-xs leading-relaxed ${edu.featured ? "text-neutral-300" : "text-neutral-600 dark:text-neutral-400"}`}>
                  {edu.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle Achievements Strip */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-2">
            <Award size={16} className="text-amber-500" />
            <h3 className="text-base font-bold text-neutral-950 dark:text-white font-mono uppercase tracking-wider">
              Verified Honors & Awards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ACHIEVEMENTS_DATA.map((ach, i) => (
              <div
                key={ach.title}
                className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/30 space-y-2 hover:border-amber-500/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">
                    {ach.year}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {ach.organization}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-neutral-950 dark:text-white">
                  {ach.title}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
