"use client";

const ROW_1 = [
  "Java", "Spring Boot", "React", "Next.js", "TypeScript",
  "Node.js", "Express.js", "REST APIs", "PostgreSQL", "Redis",
];

const ROW_2 = [
  "Docker", "Kubernetes", "CI/CD", "Git", "Linux",
  "MongoDB", "MySQL", "Tailwind CSS", "Burp Suite", "Wireshark", "Nmap", "OWASP",
];

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-3"
        style={{ animation: reverse ? "marqueeReverse 35s linear infinite" : "marquee 35s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-indigo-200/50 bg-white/70 px-4 py-1.5 text-sm font-medium text-muted shadow-sm backdrop-blur-sm dark:border-indigo-700/30 dark:bg-indigo-950/50 dark:text-slate-400"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechScrollStrip() {
  return (
    <section className="overflow-hidden border-y border-indigo-200/40 bg-white/50 py-8 dark:border-indigo-700/20 dark:bg-slate-950/30">
      <p className="mb-5 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-muted/60">
        Technologies I Work With
      </p>
      <div className="space-y-3">
        <Row items={ROW_1} />
        <Row items={ROW_2} reverse />
      </div>
    </section>
  );
}
