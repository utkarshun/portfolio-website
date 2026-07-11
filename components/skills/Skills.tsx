"use client";

import { motion } from "framer-motion";
import { Globe, Cloud, Code2, Database, Server, ShieldCheck, Zap } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES } from "@/lib/constants";

const categoryColors: Record<string, string> = {
  Languages:        "from-violet-400/20 to-purple-300/15 border-violet-300/30",
  Frontend:         "from-blue-500/20 to-cyan-400/15 border-blue-400/30",
  Backend:          "from-emerald-500/20 to-green-400/15 border-emerald-400/30",
  Databases:        "from-sky-400/20 to-indigo-300/15 border-sky-300/30",
  "DevOps & Cloud": "from-indigo-500/20 to-blue-400/15 border-indigo-400/30",
  Cybersecurity:    "from-rose-500/20 to-orange-400/15 border-rose-400/30",
};

const categoryIcons: Record<string, React.ReactNode> = {
  Languages:        <Code2       size={14} strokeWidth={2} />,
  Frontend:         <Globe       size={14} strokeWidth={2} />,
  Backend:          <Server      size={14} strokeWidth={2} />,
  Databases:        <Database    size={14} strokeWidth={2} />,
  "DevOps & Cloud": <Cloud       size={14} strokeWidth={2} />,
  Cybersecurity:    <ShieldCheck size={14} strokeWidth={2} />,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Skills"
          subtitle="Tools and technologies I use to build, secure and ship full-stack products"
        />

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SKILL_CATEGORIES.map((category) => {
            const colors = categoryColors[category.name] || "from-primary/20 to-primary-cyan/10 border-primary/20";
            const icon = categoryIcons[category.name] || <Zap size={14} />;
            const [fromClass, toClass, borderClass] = colors.split(" ");

            return (
              <motion.div key={category.name} variants={cardVariants}>
                <GlassCard className="h-full p-6">
                  <div className={`mb-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${fromClass} ${toClass} border ${borderClass} px-3 py-1.5`}>
                    <span className="text-primary">{icon}</span>
                    <h3 className="font-semibold text-sm text-foreground">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        className="cursor-default rounded-full border border-indigo-200/50 bg-indigo-50/50 px-3 py-1.5 text-sm text-muted transition-colors hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                        title={skill}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
