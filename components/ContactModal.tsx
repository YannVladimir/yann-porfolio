"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, Copy, Mail, Download } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct client-side submission to FormSubmit.co (no server required)
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Portfolio Inquiry: ${formData.subject || "New Message"} — from ${formData.name}`,
          _template: "table",
          _captcha: "false",
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject,
          Message: formData.message,
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      // Fallback: open default email client
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || "Portfolio Inquiry"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white dark:bg-[#0f1118] border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 max-h-[92vh] flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-semibold block">
              Direct Communication
            </span>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-950 dark:text-white mt-0.5">
              Let&apos;s build something meaningful.
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Direct Email Display & Copy */}
        <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
              <Mail size={15} />
            </div>
            <div className="overflow-hidden">
              <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                Direct Email
              </span>
              <span className="text-xs font-mono font-semibold text-neutral-950 dark:text-white truncate block">
                {PERSONAL_INFO.email}
              </span>
            </div>
          </div>
          <button
            onClick={handleCopyEmail}
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 flex items-center gap-1 transition-colors cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <CheckCircle2 size={13} className="text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Form or Success */}
        {formSubmitted ? (
          <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-3">
            <CheckCircle2 size={36} className="text-emerald-500 mx-auto" />
            <h4 className="text-lg font-bold text-neutral-950 dark:text-white">
              Message Sent Successfully!
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 max-w-sm mx-auto leading-relaxed">
              Your message has been sent to <strong>{PERSONAL_INFO.email}</strong>. I will get back to you as soon as possible.
            </p>
            <div className="pt-2 flex justify-center">
              <button
                onClick={() => { setFormSubmitted(false); onClose(); }}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-medium cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1">
                  YOUR NAME *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1">
                  YOUR EMAIL *
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1">
                SUBJECT
              </label>
              <input
                type="text"
                placeholder="e.g. Project Collaboration / Advisory"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 block mb-1">
                MESSAGE *
              </label>
              <textarea
                required
                rows={3}
                placeholder="Describe your project, timeline, or inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-transparent text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-indigo-500 resize-none"
              />
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              <a
                href="/cv-yann-vladimir-bajeneza.pdf"
                download="CV-Yann-Vladimir-Bajeneza.pdf"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <Download size={13} />
                <span>Download CV</span>
              </a>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={13} />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
