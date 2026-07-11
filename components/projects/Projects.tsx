"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork, ArrowRight, Activity, Cpu, ShoppingCart, ShieldCheck, Ticket } from "lucide-react";

const caseStudyIconMap: Record<string, React.ReactNode> = {
  "activity":      <Activity    size={38} strokeWidth={1.5} />,
  "cpu":           <Cpu         size={38} strokeWidth={1.5} />,
  "shopping-cart": <ShoppingCart size={38} strokeWidth={1.5} />,
  "shield":        <ShieldCheck size={38} strokeWidth={1.5} />,
  "ticket":        <Ticket      size={38} strokeWidth={1.5} />,
};
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { FEATURED_REPOS, LANGUAGE_COLORS, CASE_STUDIES } from "@/lib/constants";
import { getRepoCategory, type GitHubRepo } from "@/lib/github";

const CATEGORIES = ["All", "Full Stack", "Backend", "Cybersecurity", "Other"];

interface ProjectsProps {
  repos: GitHubRepo[];
}

function getLanguageColor(language: string | null): string {
  if (!language) return LANGUAGE_COLORS.default;
  return LANGUAGE_COLORS[language] || LANGUAGE_COLORS.default;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

const caseCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects({ repos }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const sortedRepos = [...repos].sort((a, b) => {
    const aFeatured = FEATURED_REPOS.includes(a.name) ? 1 : 0;
    const bFeatured = FEATURED_REPOS.includes(b.name) ? 1 : 0;
    if (aFeatured !== bFeatured) return bFeatured - aFeatured;
    return b.stargazers_count - a.stargazers_count;
  });

  const filteredRepos =
    activeCategory === "All"
      ? sortedRepos
      : sortedRepos.filter((repo) => getRepoCategory(repo.name) === activeCategory);

  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-indigo-950/10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Projects"
          subtitle="Case studies and open-source work"
        />

        {/* ── Featured Case Studies ── */}
        <div className="mb-16">
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted">
            Featured Projects
          </p>
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {CASE_STUDIES.map((cs) => (
              <motion.div key={cs.id} variants={caseCardVariants}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-glow dark:border-indigo-700/30 dark:bg-indigo-950/50">
                  {/* Browser window mock */}
                  <div className={`flex h-36 flex-col overflow-hidden rounded-t-2xl bg-gradient-to-br ${cs.bgClass} ${cs.darkBgClass}`}>
                    <div className="flex shrink-0 items-center gap-1.5 border-b border-white/20 bg-black/10 px-3 py-2">
                      <div className="h-2 w-2 rounded-full bg-red-400/80" />
                      <div className="h-2 w-2 rounded-full bg-yellow-400/80" />
                      <div className="h-2 w-2 rounded-full bg-green-400/80" />
                      <div className="mx-2 flex h-4 flex-1 items-center justify-center rounded bg-white/20 px-2">
                        <span className="truncate text-[9px] text-white/60">{cs.id}.vercel.app</span>
                      </div>
                      <span className="rounded-full bg-white/80 px-2 py-0.5 text-[9px] font-semibold text-foreground dark:bg-indigo-950/80">
                        {cs.category}
                      </span>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-3">
                      <span className="text-white/80">{caseStudyIconMap[cs.icon] ?? cs.icon}</span>
                      <div className="space-y-1.5">
                        <div className="h-2 w-20 rounded-full bg-white/30" />
                        <div className="h-2 w-14 rounded-full bg-white/20" />
                        <div className="h-2 w-16 rounded-full bg-white/25" />
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-1 font-bold text-foreground">{cs.title}</h3>
                    <p className="mb-3 text-sm font-medium text-primary">{cs.tagline}</p>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">{cs.description}</p>

                    {/* Tech pills */}
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {cs.tech.map((t) => (
                        <span key={t} className="rounded-full border border-indigo-200/50 bg-indigo-50/70 px-2.5 py-0.5 text-xs font-medium text-muted dark:border-indigo-700/30 dark:bg-indigo-900/40">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3">
                      <a
                        href={cs.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary"
                      >
                        <Github size={15} /> Code
                      </a>
                      {cs.demo && (
                        <a
                          href={cs.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-cyan"
                        >
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                      <a
                        href={cs.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-muted/50 transition-colors group-hover:text-primary"
                      >
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── All GitHub Repos ── */}
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted">
          All Repositories
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-glow"
                  : "border border-indigo-200/50 bg-indigo-50/50 text-muted hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRepos.map((repo) => {
            const isFeatured = FEATURED_REPOS.includes(repo.name);
            const category = getRepoCategory(repo.name);

            return (
              <GlassCard
                key={repo.id}
                className={`flex flex-col p-6 ${isFeatured ? "ring-1 ring-primary/30" : ""}`}
              >
                {isFeatured && (
                  <span className="mb-2 w-fit rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                    Featured
                  </span>
                )}

                <div
                  className="mb-4 flex h-32 items-center justify-center rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${getLanguageColor(repo.language)}33, ${getLanguageColor(repo.language)}11)`,
                  }}
                >
                  <span
                    className="font-mono text-2xl font-bold opacity-60"
                    style={{ color: getLanguageColor(repo.language) }}
                  >
                    {repo.language || category}
                  </span>
                </div>

                <h3 className="mb-2 font-bold">{repo.name.replace(/_/g, " ")}</h3>
                <p className="mb-4 line-clamp-2 flex-1 text-sm text-muted">
                  {repo.description || "No description available"}
                </p>

                <div className="mb-4 flex items-center gap-4 text-xs text-muted">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={14} />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={14} />
                    {repo.forks_count}
                  </span>
                  <span>{formatDate(repo.updated_at)}</span>
                </div>

                <div className="flex gap-2">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 !py-2 text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 !py-2 text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
