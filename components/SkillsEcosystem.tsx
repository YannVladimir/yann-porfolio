"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Cpu, Database, Layout, Server, Smartphone, Wrench, Code } from "lucide-react";

export function SkillsEcosystem() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages": return <Code size={16} />;
      case "Frontend": return <Layout size={16} />;
      case "Backend & Architecture": return <Server size={16} />;
      case "Databases & Storage": return <Database size={16} />;
      case "AI, NLP & Data": return <Cpu size={16} />;
      case "Engineering & DevOps": return <Wrench size={16} />;
      default: return <Code size={16} />;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((c) => {
    if (selectedCategory === "All") return true;
    return c.category === selectedCategory;
  });

  return (
    <section id="ecosystem" className="py-20 md:py-28 relative section-gradient-indigo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Technology Ecosystem
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white">
              The engineering map.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Curated architectural stacks and tools applied across a decade of enterprise, government, and AI production engineering.
            </p>
          </div>

          {/* Domain Tab Selector */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === "All"
                  ? "bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-xs"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
              }`}
            >
              All Domains
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat.category
                    ? "bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-xs"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                }`}
              >
                {cat.category.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((domain, idx) => (
            <motion.div
              key={domain.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-neutral-900/40 space-y-4 hover:border-indigo-500/30 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-2">
                  <div className="p-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/60">
                    {getCategoryIcon(domain.category)}
                  </div>
                  <h3 className="text-sm font-bold text-neutral-950 dark:text-white font-mono uppercase tracking-wider">
                    {domain.category}
                  </h3>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                  {domain.description}
                </p>

                {/* Skills Visual Matrix */}
                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-all ${
                        skill.primary
                          ? "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-950 dark:text-indigo-200 border border-indigo-200/80 dark:border-indigo-800/60 font-semibold shadow-2xs"
                          : "bg-neutral-100/80 dark:bg-neutral-800/50 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/50 font-normal"
                      }`}
                    >
                      {skill.primary && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                      )}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Level Indicator */}
              <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>PRODUCTION GRADE</span>
                <span>VERIFIED STACK</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
