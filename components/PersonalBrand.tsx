"use client";

import React from "react";
import { motion } from "framer-motion";
import { INDUSTRIES_MAP } from "@/data/portfolioData";
import { Globe, Building2, GraduationCap, Boxes, FileText, ShoppingBag, Cpu, Trophy, Coins, Compass } from "lucide-react";

export function PersonalBrand() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Building2": return <Building2 size={18} />;
      case "GraduationCap": return <GraduationCap size={18} />;
      case "Boxes": return <Boxes size={18} />;
      case "FileText": return <FileText size={18} />;
      case "ShoppingBag": return <ShoppingBag size={18} />;
      case "Cpu": return <Cpu size={18} />;
      case "Trophy": return <Trophy size={18} />;
      case "Coins": return <Coins size={18} />;
      default: return <Compass size={18} />;
    }
  };

  return (
    <section className="py-20 md:py-28 border-t border-neutral-200 dark:border-neutral-800/80 section-gradient-rose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Editorial Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Global Ambition · Local Roots
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.15]">
              Building technology from Rwanda, for the world.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            <p>
              Rwanda has established itself as a vibrant hub of technological innovation and public digital transformation. Having contributed to national regulatory registries, modernized enterprise school infrastructures, and built localized AI speech pipelines at Carnegie Mellon University Africa, my work reflects a commitment to building software that solves deep regional challenges while meeting international standards of security, scalability, and craftsmanship.
            </p>
          </div>
        </div>

        {/* Industry Matrix Grid */}
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
            Breadth of Domain Experience
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRIES_MAP.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 space-y-2 hover:border-indigo-500/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white leading-snug">
                  {item.name}
                </h3>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
