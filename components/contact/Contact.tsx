"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Mail, Phone, CheckCircle, AlertCircle, ExternalLink, Github, Linkedin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/lib/constants";

type FormStatus = "idle" | "loading" | "success" | "error";

const inputCls =
  "w-full rounded-xl border border-indigo-300/50 bg-white/80 px-4 py-3 text-foreground placeholder:text-muted/60 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm text-sm";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey ?? "demo",
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio] ${formData.subject}`,
          message: formData.message,
          from_name: formData.name,
          replyto: formData.email,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const socialLinks = [
    { label: "GitHub", href: `https://github.com/${PERSONAL_INFO.github}`, icon: <Github size={15} /> },
    { label: "LinkedIn", href: `https://www.linkedin.com/in/${PERSONAL_INFO.linkedin}`, icon: <Linkedin size={15} /> },
    { label: "LeetCode", href: `https://leetcode.com/u/${PERSONAL_INFO.leetcode}/`, icon: <SiLeetcode size={15} /> },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <GlassCard className="p-8 shadow-glass">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground/80">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputCls}
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground/80">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputCls}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-foreground/80">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={inputCls}
                    placeholder="Project discussion / Job opportunity / Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell me about your project, role, or idea..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />Sending…</>
                  ) : status === "success" ? (
                    <><CheckCircle size={18} />Message Sent!</>
                  ) : (
                    <><Send size={18} />Send Message</>
                  )}
                </motion.button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-3 rounded-xl border border-green-300/60 bg-green-50 p-4 text-sm text-green-700"
                    >
                      <CheckCircle size={18} className="mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Message sent successfully!</p>
                        <p className="text-green-600/80">I&apos;ll get back to you as soon as possible.</p>
                      </div>
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-start gap-3 rounded-xl border border-red-300/60 bg-red-50 p-4 text-sm text-red-700"
                    >
                      <AlertCircle size={18} className="mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold">Something went wrong.</p>
                        <p className="text-red-600/80">Email me directly at <a href={`mailto:${PERSONAL_INFO.email}`} className="underline">{PERSONAL_INFO.email}</a></p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </GlassCard>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col gap-5 lg:col-span-2"
          >
            {/* Contact details */}
            <GlassCard className="p-6 shadow-glass">
              <h3 className="mb-4 font-semibold text-foreground">Contact Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted">{PERSONAL_INFO.location}</span>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted group-hover:text-primary transition-colors break-all">
                    {PERSONAL_INFO.email}
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <span className="text-sm text-muted">{PERSONAL_INFO.phone}</span>
                </div>
              </div>
            </GlassCard>

            {/* Quick email button */}
            <GlassCard className="p-6 shadow-glass">
              <h3 className="mb-2 font-semibold text-foreground">Prefer a direct email?</h3>
              <p className="mb-4 text-sm text-muted">Skip the form and write directly from your inbox.</p>
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}?subject=Hello%20Utkarsh`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary flex w-full items-center justify-center gap-2 !py-2.5 text-sm"
              >
                <Mail size={16} />
                Open Email Client
                <ExternalLink size={13} />
              </motion.a>
            </GlassCard>

            {/* Social links */}
            <GlassCard className="p-6 shadow-glass">
              <h3 className="mb-4 font-semibold text-foreground">Find Me Online</h3>
              <div className="flex flex-col gap-2">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-primary/5 hover:text-primary"
                  >
                    <span className="text-primary">{s.icon}</span>
                    {s.label}
                    <ExternalLink size={12} className="ml-auto opacity-50" />
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
