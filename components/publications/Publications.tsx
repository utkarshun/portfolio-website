"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { ACHIEVEMENTS, CERTIFICATIONS } from "@/lib/constants";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Publications() {
  return (
    <section id="achievements" className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Achievements"
          subtitle="Awards, certifications, and milestones"
        />

        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-2 text-xl font-semibold"
          >
            <Trophy className="text-primary" size={24} />
            Highlights
          </motion.h3>
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 lg:grid-cols-3"
          >
            {ACHIEVEMENTS.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <GlassCard className="h-full p-6">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {item.badge}
                  </span>
                  <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                  <p className="text-sm text-muted">{item.detail}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 flex items-center gap-2 text-xl font-semibold"
          >
            <Award className="text-primary" size={24} />
            Certifications
          </motion.h3>
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {CERTIFICATIONS.map((cert) => (
              <motion.div key={cert.name} variants={itemVariants}>
                <GlassCard className="p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Award size={20} className="text-primary" />
                  </div>
                  <h4 className="mb-1 font-semibold">{cert.name}</h4>
                  <p className="text-sm text-muted">{cert.issuer}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
