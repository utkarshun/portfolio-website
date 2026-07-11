"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14 text-center"
    >
      <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>

      {subtitle && (
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted">
          {subtitle}
        </p>
      )}

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "4.5rem" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mx-auto mt-5 h-1 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500"
      />
    </motion.div>
  );
}
