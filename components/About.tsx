"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, Shield, Cpu, Users2 } from "lucide-react";

export function About() {
  const pillars = [
    {
      title: "System Architecture & Engineering",
      desc: "Deep experience designing modular backend microservices, clean REST APIs, resilient relational database schemas, and modern frontend SPAs that scale with stability.",
      icon: Layers,
    },
    {
      title: "Enterprise & Government Reliability",
      desc: "Proven track record delivering national-scale registries, legacy system migrations (WIPOFILE → IPAS), and high-availability digital platforms at Rwanda Development Board.",
      icon: Shield,
    },
    {
      title: "Applied AI, Speech & NLP",
      desc: "Graduate research at Carnegie Mellon University Africa fine-tuning OpenAI Whisper and transformer models for low-resource African language translation and real-time captioning.",
      icon: Cpu,
    },
    {
      title: "Project & Product Leadership",
      desc: "Master's degree in Project Management coupled with a decade leading multidisciplinary engineering teams from initial product scoping through live production SLA maintenance.",
      icon: Users2,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative section-gradient-indigo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400" />
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            About / Profile
          </span>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Manifesto & Author Card */}
          <div className="lg:col-span-5 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 dark:text-white leading-[1.15]"
            >
              Beyond the code.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-neutral-950 text-white dark:bg-neutral-900/90 dark:border dark:border-white/[0.08] relative overflow-hidden space-y-6 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

              <p className="text-xl sm:text-2xl font-medium tracking-tight leading-snug">
                &ldquo;I don&apos;t just write code. I design systems, solve problems and build products.&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-indigo-400/50 shrink-0">
                  <Image
                    src="/yann-avatar.jpg"
                    alt="Yann Vladimir Bajeneza"
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Yann Vladimir Bajeneza
                  </h4>
                  <p className="text-xs text-neutral-400 font-mono">
                    Kigali, Rwanda · IST Africa
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="pt-2 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-mono">
              Over a decade navigating the entire software lifecycle:
              <br />
              <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                Idea → Architecture → Development → Deployment → Maintenance
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & 4 Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed space-y-4"
            >
              <p>
                I am a <strong>Senior Software Developer</strong>, <strong>Project Manager</strong>, and <strong>technology builder</strong> based in Kigali, Rwanda. For more than a decade, I have engineered mission-critical software solutions spanning government infrastructure, educational institutions, enterprise document management, e-commerce, and applied artificial intelligence.
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
                My approach bridges the gap between deep technical code execution and high-level strategic business objectives. Whether modernizing legacy enterprise systems, fine-tuning neural speech models for low-resource languages, or leading cross-functional development sprints, I build software that is resilient, maintainable, and built for people.
              </p>
            </motion.div>

            {/* Core Competency Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="p-5 rounded-2xl border border-black/[0.06] dark:border-white/[0.08] bg-white dark:bg-neutral-900/40 hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-950 dark:text-white mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
