"use client";

import { ExternalLink, Github } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/lib/constants";
import type { LeetCodeStats } from "@/lib/leetcode";

interface LeetcodeStatsProps {
  stats: LeetCodeStats;
}

function ProgressRing({
  solved,
  total,
  label,
  color,
}: {
  solved: number;
  total: number;
  label: string;
  color: string;
}) {
  const percentage = total > 0 ? (solved / total) * 100 : 0;

  return (
    <div className="text-center">
      <div className="relative mx-auto mb-2 h-24 w-24">
        <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="rgba(99,102,241,0.15)"
            strokeWidth="8"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${percentage * 2.51} 251`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-lg font-bold">{solved}</span>
          <span className="text-xs text-muted">/{total}</span>
        </div>
      </div>
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
}

export default function LeetcodeStats({ stats }: LeetcodeStatsProps) {
  const overallPercentage =
    stats.totalQuestions > 0
      ? Math.round((stats.totalSolved / stats.totalQuestions) * 100)
      : 0;

  return (
    <section id="leetcode" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Competitive Programming"
          subtitle="Live LeetCode problem-solving stats"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <GlassCard className="p-8 lg:col-span-1">
            <div className="flex flex-col items-center">
              <div className="relative mb-4 h-40 w-40">
                <svg className="h-40 w-40 -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="rgba(99,102,241,0.15)"
                    strokeWidth="6"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${overallPercentage * 2.64} 264`}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#4338ca" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold gradient-text">
                    {stats.totalSolved}
                  </span>
                  <span className="text-sm text-muted">
                    / {stats.totalQuestions}
                  </span>
                  <span className="text-xs text-muted">Problems Solved</span>
                </div>
              </div>

              <div className="grid w-full grid-cols-2 gap-4 text-center text-sm">
                <div>
                  <p className="font-mono text-lg font-bold text-primary">
                    {stats.acceptanceRate}%
                  </p>
                  <p className="text-muted">Acceptance</p>
                </div>
                <div>
                  <p className="font-mono text-lg font-bold text-primary-cyan">
                    #{stats.ranking.toLocaleString()}
                  </p>
                  <p className="text-muted">Ranking</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 lg:col-span-2">
            <h3 className="mb-6 text-lg font-semibold">Difficulty Breakdown</h3>
            <div className="mb-8 grid grid-cols-3 gap-4">
              <ProgressRing
                solved={stats.easySolved}
                total={stats.totalEasy}
                label="Easy"
                color="#22c55e"
              />
              <ProgressRing
                solved={stats.mediumSolved}
                total={stats.totalMedium}
                label="Medium"
                color="#eab308"
              />
              <ProgressRing
                solved={stats.hardSolved}
                total={stats.totalHard}
                label="Hard"
                color="#ef4444"
              />
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {[
                "Dynamic Programming",
                "Hash Table",
                "Array",
                "String",
                "Two Pointers",
                "DFS",
                "Backtracking",
                "Math",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-indigo-200/50 bg-indigo-50/60 px-3 py-1 text-xs text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={`https://leetcode.com/u/${PERSONAL_INFO.leetcode}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-2 text-sm"
              >
                <SiLeetcode size={18} />
                LeetCode Profile
                <ExternalLink size={14} />
              </a>
              <a
                href={`https://github.com/${PERSONAL_INFO.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-2 text-sm"
              >
                <Github size={18} />
                GitHub Profile
                <ExternalLink size={14} />
              </a>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
