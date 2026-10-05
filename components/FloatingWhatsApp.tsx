"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { WhatsAppIcon } from "./Icons";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [customMsg, setCustomMsg] = useState("Hello Yann, I visited your portfolio and would like to connect!");

  // Show a gentle greeting hint after 4 seconds of scrolling
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleStartChat = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const encoded = encodeURIComponent(customMsg || "Hello Yann, I visited your portfolio and would like to connect!");
    window.open(`https://wa.me/250782767289?text=${encoded}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[44] flex flex-col items-end">
      {/* Floating Animated WhatsApp Chat Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.92 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="mb-3 w-[320px] sm:w-[360px] rounded-3xl overflow-hidden bg-white dark:bg-[#121520] border border-black/[0.08] dark:border-white/[0.1] shadow-2xl shadow-emerald-950/20 text-neutral-900 dark:text-white"
          >
            {/* Card Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4.5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/40 shrink-0">
                  <Image
                    src="/yann-avatar.jpg"
                    alt="Yann Vladimir"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-emerald-600 rounded-full" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight text-white leading-tight">
                    Yann Vladimir Bajeneza
                  </h4>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1 font-mono mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                    Online on WhatsApp
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-emerald-100 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close WhatsApp chat popup"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body & Preview */}
            <div className="p-4 space-y-3.5 bg-neutral-50/60 dark:bg-black/20">
              {/* Agent Greeting Bubble */}
              <div className="p-3 rounded-2xl rounded-tl-none bg-white dark:bg-neutral-800/80 border border-black/[0.04] dark:border-white/[0.06] text-xs leading-relaxed text-neutral-700 dark:text-neutral-200 shadow-2xs space-y-1">
                <p>
                  Hi there! 👋 Thanks for stopping by my portfolio.
                </p>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  How can I help with your project or architecture needs?
                </p>
                <span className="text-[9px] font-mono text-neutral-400 text-right block pt-0.5">
                  Just now
                </span>
              </div>

              {/* Message Input Box */}
              <form onSubmit={handleStartChat} className="space-y-2.5 pt-1">
                <div className="relative">
                  <textarea
                    rows={2}
                    value={customMsg}
                    onChange={(e) => setCustomMsg(e.target.value)}
                    placeholder="Type your WhatsApp message..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-black/[0.08] dark:border-white/[0.1] bg-white dark:bg-neutral-900 focus:outline-none focus:border-emerald-500 text-neutral-900 dark:text-white resize-none shadow-2xs"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer group"
                >
                  <span>Start WhatsApp Chat</span>
                  <Send size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>

              <div className="text-center">
                <span className="text-[10px] font-mono text-neutral-400">
                  Direct line: +250 782 767 289
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pill Tooltip (when closed) */}
      {!isOpen && hasPrompted && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="mb-2.5 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-black/[0.08] dark:border-white/[0.1] text-xs font-medium text-neutral-800 dark:text-neutral-200 shadow-lg cursor-pointer hover:border-emerald-500/40 transition-colors"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Chat on WhatsApp</span>
        </motion.div>
      )}

      {/* Main Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp chat widget"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/30 flex items-center justify-center transition-all cursor-pointer relative group"
      >
        {/* Pulsing ring animation */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none opacity-75" />

        {isOpen ? (
          <X size={26} className="relative z-10 transition-transform duration-200 rotate-0" />
        ) : (
          <WhatsAppIcon size={28} className="relative z-10 transition-transform duration-200" />
        )}
      </motion.button>
    </div>
  );
}
