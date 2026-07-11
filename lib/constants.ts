export const PERSONAL_INFO = {
  name: "Utkarsh Kher",
  title: "Full Stack Developer",
  email: "kherutkarsh54@gmail.com",
  phone: "+91 6205052231",
  location: "Bangalore, India",
  github: "utkarshun",
  linkedin: "utkarsh-kher-654a1a282",
  leetcode: "utkarshkher",
  cgpa: "8.8",
  bio: `Full stack developer at DocuPro, building a visa document-processing platform with Next.js, TypeScript and PostgreSQL. Strong in Java, Spring Boot, React and secure backend API development.`,
  longBio: `I'm a full stack developer working across Java, Spring Boot, React and Node.js. Right now I'm an SDE intern at DocuPro, building a visa document-processing platform on Next.js 15, TypeScript, Prisma and PostgreSQL — including the customer-facing document-advisor chatbot, RBAC-protected dashboards and OTP authentication. I studied Computer Science (Cybersecurity) at RNS Institute of Technology, Bangalore, graduating with an 8.8 CGPA — a background that shaped how I build: security-first APIs, validated inputs and hardened deployments.`,
  heroTagline: "I build secure full-stack products and ship them to production.",
  roles: [
    "Full Stack Developer",
    "Backend Developer",
    "React & Spring Boot",
    "Cybersecurity Enthusiast",
  ],
};

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/utkarshun",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/utkarsh-kher-654a1a282/",
    icon: "linkedin",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/utkarshkher/",
    icon: "leetcode",
  },
];

export const NAV_LINKS = [
  { name: "Home",         href: "#home"         },
  { name: "About",        href: "#about"        },
  { name: "Experience",   href: "#experience"   },
  { name: "Skills",       href: "#skills"       },
  { name: "Projects",     href: "#projects"     },
  { name: "Resume",       href: "#resume"       },
  { name: "LeetCode",     href: "#leetcode"     },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact",      href: "#contact"      },
];

export const EXPERIENCE = [
  {
    title: "SDE Intern",
    company: "DocuPro",
    location: "Bangalore, India",
    period: "Jun 2026 – Present",
    type: "Internship",
    highlights: [
      "Developing features for a visa document-processing platform built on Next.js 15, TypeScript, Prisma and PostgreSQL, including RBAC-protected dashboard workflows for request intake and processing stages",
      "Building the customer-facing document-advisor chatbot — multi-step conversational flows for visa document guidance, eligibility checks and in-chat document uploads, integrated with WhatsApp messaging and a knowledge base",
      "Implementing Zod-validated APIs and React server components with NextAuth OTP authentication, following typed error-handling, testing and code-review practices",
    ],
  },
  {
    title: "SWE Intern",
    company: "Leadics",
    location: "Bangalore, India",
    period: "Mar 2026 – Present",
    type: "Internship",
    highlights: [
      "Contributed to software features in a team environment using Git, code review and testing practices",
      "Collaborated on backend and API work to improve reliability, maintainability and product quality",
    ],
  },
  {
    title: "Placement Volunteer",
    company: "RNS Institute of Technology",
    location: "Bangalore, India",
    period: "2024 – 2025",
    type: "Volunteer",
    highlights: [
      "Coordinated campus placements and guided students in coding preparation and interview readiness",
      "Conducted workshops on secure coding and cybersecurity interview preparation",
      "Organized CTF competitions and knowledge-sharing sessions, and helped set up cybersecurity labs for students",
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "Bash", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: [
      "Spring Boot", "Node.js", "Express.js", "REST APIs",
      "Prisma", "NextAuth", "BullMQ",
    ],
  },
  {
    name: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      "Docker", "Kubernetes", "Git", "GitHub",
      "CI/CD Pipelines", "Linux", "AWS (Basics)",
    ],
  },
  {
    name: "Cybersecurity",
    skills: [
      "Nmap", "Metasploit", "Burp Suite", "Wireshark",
      "Nessus", "OWASP", "Linux Hardening", "Snort",
    ],
  },
];

export const FEATURED_REPOS = [
  "Talentlens-platform",
  "Ignite-data-profiling",
  "Event-Ticket-Platform",
  "ZeroTrust-Sentinel",
  "GPS-Spoofing-MITM-Ambulance",
  "REST-APIS-In-SpringBoot",
];

export const PROJECT_CATEGORIES: Record<string, string> = {
  "Talentlens-platform": "Full Stack",
  "Ignite-data-profiling": "Backend",
  "Event-Ticket-Platform": "Full Stack",
  "ZeroTrust-Sentinel": "Cybersecurity",
  "GPS-Spoofing-MITM-Ambulance": "Cybersecurity",
  "Port-Scanner-using-python": "Cybersecurity",
  PRODIGY_CS_TASK01: "Cybersecurity",
  PRODIGY_CS_TASK03: "Cybersecurity",
  PRODIGY_CS_TASK04: "Cybersecurity",
  PRODIGY_CS_TASK05: "Cybersecurity",
  "REST-APIS-In-SpringBoot": "Backend",
  "fastapi-car-rental-backend": "Backend",
  contact_api: "Backend",
  "flask-grocery-app": "Backend",
  Springboot: "Backend",
  "URL-HEALTH-PLATFORM": "Full Stack",
  "customer-csv-app": "Full Stack",
  "react-user-manager": "Full Stack",
  "netflix-clone-react-firebase": "Full Stack",
  "Word-Counter-using-React.js": "Full Stack",
  "bmi-calculator-using-react": "Full Stack",
  "Pixabay-clone": "Full Stack",
  "chess.com-clone": "Full Stack",
  "Resume-builder": "Full Stack",
};

export const ACHIEVEMENTS = [
  {
    title: "1st Rank — Project Open House Panorama (PROP)",
    detail:
      "Won first place for the GPS Spoofing project — simulated spoofing attacks on RC-car navigation with a Python-based NMEA signal generator and proposed anomaly-detection mechanisms for GPS signal validation.",
    badge: "Award",
  },
  {
    title: "300+ DSA problems solved on LeetCode",
    detail:
      "Consistent problem-solving practice across data structures and algorithms — arrays, trees, graphs, dynamic programming and more.",
    badge: "Problem Solving",
  },
  {
    title: "Python 5★ on HackerRank",
    detail: "Earned the highest Python badge on HackerRank.",
    badge: "Badge",
  },
];

export const CASE_STUDIES = [
  {
    id: "talentlens",
    title: "TalentLens Platform",
    tagline: "AI-powered secure assessment system",
    description:
      "A secure online examination and assessment platform with protected exam workflows, automated evaluation, and AI-based suspicious-activity detection to maintain exam integrity.",
    tech: ["React", "Spring Boot", "PostgreSQL", "AI Detection"],
    category: "Full Stack",
    github: "https://github.com/utkarshun/Talentlens-platform",
    demo: "",
    bgClass: "from-blue-500/20 to-cyan-400/20",
    darkBgClass: "dark:from-blue-900/40 dark:to-cyan-900/30",
    iconColor: "#3b82f6",
    icon: "shield",
  },
  {
    id: "table-profiler",
    title: "Async Table Profiling Microservice",
    tagline: "Profiling jobs that run off the request path",
    description:
      "An async profiling pipeline: REST APIs to submit jobs and retrieve structured JSON profiles, BullMQ workers on Redis, PostgreSQL for stored results, plus an MCP tool surface for agent-driven workflows.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    category: "Backend",
    github: "https://github.com/utkarshun/Ignite-data-profiling",
    demo: "",
    bgClass: "from-violet-500/20 to-purple-400/20",
    darkBgClass: "dark:from-violet-900/40 dark:to-purple-900/30",
    iconColor: "#8b5cf6",
    icon: "cpu",
  },
  {
    id: "event-ticket",
    title: "Event Ticket Platform",
    tagline: "Ticketing with QR code verification",
    description:
      "A full-stack ticketing platform for organizers and attendees — authentication, authorization, QR-based ticket validation, and an optimized relational schema for performance at scale.",
    tech: ["React", "Spring Boot", "PostgreSQL", "QR Codes"],
    category: "Full Stack",
    github: "https://github.com/utkarshun/Event-Ticket-Platform",
    demo: "",
    bgClass: "from-emerald-500/20 to-green-400/20",
    darkBgClass: "dark:from-emerald-900/40 dark:to-green-900/30",
    iconColor: "#10b981",
    icon: "ticket",
  },
];

export const CERTIFICATIONS = [
  {
    name: "AWS Cloud Security",
    issuer: "FutureSkills Prime (NASSCOM, Government of India)",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
  },
  {
    name: "Ethical Hacking (Advanced)",
    issuer: "EC-Council",
  },
  {
    name: "Linux Security",
    issuer: "EC-Council",
  },
  {
    name: "Docker & Kubernetes",
    issuer: "Professional Certification",
  },
  {
    name: "AWS Cloud Foundations (Basics)",
    issuer: "Amazon Web Services",
  },
];

export const EDUCATION = [
  {
    degree: "B.E., Computer Science & Engineering (Cybersecurity)",
    institution: "RNS Institute of Technology",
    detail: "VTU (Visvesvaraya Technological University)",
    location: "Bangalore, India",
    period: "2022 - 2026",
    score: "CGPA: 8.8 / 10",
    badge: "Class of 2026",
  },
  {
    degree: "Class XII (Senior Secondary)",
    institution: "Pragya Bharti Public School",
    detail: "",
    location: "Gaya, Bihar",
    period: "2021",
    score: "83%",
    badge: "",
  },
  {
    degree: "Class X (Secondary)",
    institution: "Manav Bharti National School",
    detail: "",
    location: "Gaya, Bihar",
    period: "2019",
    score: "90%",
    badge: "",
  },
];

export const RESUMES = [
  {
    id: "sde",
    label: "Software Developer Resume",
    description:
      "Full stack development — Java, Spring Boot, React, Node.js, REST APIs and database-driven systems.",
    file: "/resume.pdf",
    fileName: "Utkarsh_Kher_SDE_Resume.pdf",
    tags: ["Java & Spring Boot", "React", "Node.js", "PostgreSQL"],
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity Resume",
    description:
      "Penetration testing, network security, Linux hardening and DevSecOps — with hands-on security projects.",
    file: "/resume-cybersecurity.pdf",
    fileName: "Utkarsh_Kher_Cybersecurity_Resume.pdf",
    tags: ["Pen Testing", "OWASP", "Linux Hardening", "DevSecOps"],
  },
];

export const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Java: "#b07219",
  "Jupyter Notebook": "#DA5B0B",
  Shell: "#89e051",
  Dockerfile: "#384d54",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Go: "#00ADD8",
  Rust: "#dea584",
  C: "#555555",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  default: "#8b5cf6",
};
