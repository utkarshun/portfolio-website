"use client";

import { GraduationCap, School } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { EDUCATION } from "@/lib/constants";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Education" subtitle="B.E. in CSE (Cybersecurity) — Class of 2026" />

        <div className="flex flex-col gap-5">
          {EDUCATION.map((edu, index) => (
            <GlassCard key={edu.institution} className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  {index === 0 ? (
                    <GraduationCap size={28} className="text-primary" />
                  ) : (
                    <School size={28} className="text-primary" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{edu.degree}</h3>
                  <p className="mb-1 text-sm font-semibold text-primary-cyan">{edu.institution}</p>
                  <p className="mb-3 text-sm text-muted">
                    {edu.detail ? `${edu.detail} · ` : ""}{edu.location}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm">
                    {edu.period && (
                      <span className="rounded-full bg-indigo-50/70 border border-indigo-200/50 px-3 py-1 text-muted">
                        {edu.period}
                      </span>
                    )}
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-mono text-primary">
                      {edu.score}
                    </span>
                    {edu.badge && (
                      <span className="rounded-full bg-green-50 border border-green-300/50 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:border-green-700/40 dark:text-green-400">
                        {edu.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
