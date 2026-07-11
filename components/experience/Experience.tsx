"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/lib/constants";

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey so far"
        />

        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
        >
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary via-primary-cyan to-transparent md:left-1/2" />

          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              variants={itemVariants}
              className={`relative mb-8 flex ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden w-1/2 md:block" />

              <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary/40 bg-background shadow-glow md:left-1/2">
                <Briefcase size={20} className="text-primary" />
              </div>

              <div className="ml-16 w-full md:ml-0 md:w-1/2 md:px-8">
                <GlassCard className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {exp.type}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight">{exp.title}</h3>
                  <p className="mb-1 text-sm font-semibold text-primary-cyan">{exp.company}</p>
                  <p className="mb-3 text-sm text-muted">
                    {exp.period} · {exp.location}
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
