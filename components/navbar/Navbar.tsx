"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const dark = saved !== "light"; // dark by default
    document.documentElement.classList.toggle("dark", dark);
    setIsDark(dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map((link) => link.href.slice(1));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop links use native anchor navigation (CSS scroll-smooth +
  // scroll-padding). The mobile menu must close BEFORE scrolling starts:
  // the collapse animation races the smooth scroll and the browser
  // sometimes cancels it, so we scroll after the animation completes.
  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-indigo-200/50 bg-background/90 dark:bg-slate-950/90 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <motion.a
          href="#home"
          onClick={handleNavClick}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-indigo-400 to-primary-cyan font-black text-white text-sm shadow-md">
            UK
          </div>
          <span className="hidden text-sm font-bold text-foreground dark:text-slate-100 sm:block">
            Utkarsh Kher
          </span>
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                onHoverStart={() => setHoveredLink(link.href)}
                onHoverEnd={() => setHoveredLink(null)}
                className="relative rounded-lg px-3 py-2 text-sm font-medium"
              >
                {hoveredLink === link.href && !isActive && (
                  <motion.span
                    layoutId="nav-hover-bg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-lg bg-indigo-50/80"
                  />
                )}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-bg"
                    className="absolute inset-0 rounded-lg bg-primary/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 transition-colors ${
                  isActive ? "text-primary" : "text-muted hover:text-foreground"
                }`}>
                  {link.name}
                </span>
              </motion.a>
            );
          })}
          <motion.a
            href="#contact"
            onClick={handleNavClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary ml-3 !px-4 !py-2 text-sm"
          >
            Let&apos;s Collaborate
          </motion.a>

          {/* Dark mode toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-200/50 bg-white/70 text-muted shadow-sm transition-colors hover:border-primary/50 hover:text-primary dark:border-indigo-700/40 dark:bg-indigo-950/50"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Sun size={16} />
                </motion.div>
              ) : (
                <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Moon size={16} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile menu button — plain button on purpose: framer-motion's tap
            gesture handling left the button unresponsive after long scrolls */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="rounded-lg p-2 text-foreground transition-transform active:scale-90 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-indigo-200/40 bg-background/95 dark:bg-slate-950/95 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              variants={{ open: { transition: { staggerChildren: 0.06 } }, closed: {} }}
              className="flex flex-col gap-1 px-4 py-4"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: -16 } }}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? "bg-primary/10 text-primary"
                      : "text-muted hover:bg-indigo-50/60 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                variants={{ open: { opacity: 1, x: 0 }, closed: { opacity: 0, x: -16 } }}
                onClick={(e) => handleMobileNavClick(e, "#contact")}
                className="btn-primary mt-2 text-center text-sm"
              >
                Let&apos;s Collaborate
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
