"use client";

import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { RESUMES } from "@/lib/constants";

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Resume"
          subtitle="Two profiles, one engineer — pick the one that fits your role"
        />

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {RESUMES.map((resume) => (
            <motion.div key={resume.id} variants={itemVariants}>
              <GlassCard className="flex h-full flex-col p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <FileText size={24} className="text-primary" />
                </div>

                <h3 className="mb-2 text-xl font-bold tracking-tight">
                  {resume.label}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                  {resume.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-1.5">
                  {resume.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-indigo-200/50 bg-indigo-50/70 px-2.5 py-0.5 text-xs font-medium text-muted dark:border-indigo-700/30 dark:bg-indigo-900/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={resume.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-secondary flex-1 !py-2.5 text-sm"
                  >
                    <Eye size={16} />
                    View
                  </motion.a>
                  <motion.a
                    href={resume.file}
                    download={resume.fileName}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary flex-1 !py-2.5 text-sm"
                  >
                    <Download size={16} />
                    Download
                  </motion.a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
