"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Heart } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { NAV_LINKS, PERSONAL_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-indigo-200/40 bg-background py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold gradient-text">{PERSONAL_INFO.name}</p>
            <p className="text-sm text-muted">{PERSONAL_INFO.title}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.slice(0, 5).map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-sm text-muted transition-colors hover:text-primary"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="flex gap-4">
            {[
              { href: `https://github.com/${PERSONAL_INFO.github}`, label: "GitHub", icon: <Github size={20} /> },
              { href: `https://www.linkedin.com/in/${PERSONAL_INFO.linkedin}`, label: "LinkedIn", icon: <Linkedin size={20} /> },
              { href: `https://leetcode.com/u/${PERSONAL_INFO.leetcode}/`, label: "LeetCode", icon: <SiLeetcode size={20} /> },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-indigo-200/50 bg-indigo-50/60 text-muted transition-colors hover:border-primary/60 hover:text-primary hover:shadow-glow"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-indigo-200/40 pt-8 text-sm text-muted md:flex-row">
          <p>&copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-400" /> using Next.js
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
