"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ADDITIONAL_PROJECTS, AdditionalProject } from "@/data/portfolioData";
import { ChevronDown, ChevronUp, FolderArchive, Layers, Tag } from "lucide-react";

export function ArchiveSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Enterprise", "Fintech", "Logistics", "Business", "E-Commerce"];

  const filteredProjects = ADDITIONAL_PROJECTS.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 border-t border-neutral-200 dark:border-neutral-800/80 section-gradient-cyan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FolderArchive size={16} className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Additional Portfolio
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              More things I&apos;ve built.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Compact index of commercial ERPs, SACCO financial software, logistics dispatch tools, and business platforms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-white dark:bg-neutral-800 text-neutral-950 dark:text-white shadow-xs"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Expandable Index */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 divide-y divide-neutral-200 dark:divide-neutral-800 overflow-hidden">
          {filteredProjects.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="transition-colors hover:bg-neutral-50/50 dark:hover:bg-neutral-800/30">
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 flex-1">
                    <div className="w-48">
                      <span className="text-sm font-semibold text-neutral-950 dark:text-white block">
                        {item.name}
                      </span>
                      {item.year && (
                        <span className="text-[10px] font-mono text-neutral-400">
                          {item.year}
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 w-fit">
                      {item.category}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 truncate max-w-md hidden md:inline">
                      {item.description}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-neutral-400">
                    <span className="text-xs font-mono hidden sm:inline">{item.role}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6 pt-2 space-y-4 bg-neutral-50/40 dark:bg-neutral-900/60"
                    >
                      <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                            Technologies
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.technologies.map((t) => (
                              <span
                                key={t}
                                className="px-2 py-0.5 rounded bg-white dark:bg-neutral-800 text-[10px] font-mono text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block mb-1">
                            Operational Impact
                          </span>
                          <p className="text-xs text-neutral-700 dark:text-neutral-300 font-medium">
                            {item.impact}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
