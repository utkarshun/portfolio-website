# Utkarsh Kher - Portfolio Website

A modern, auto-updating personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Dark glassmorphic design with neon accents and smooth animations
- Auto-synced GitHub projects and profile (avatar, repos, followers)
- Live LeetCode competitive programming stats
- Dual resume section — Software Developer and Cybersecurity resumes, viewable and downloadable
- Contact form via Web3Forms (free tier)
- Fully responsive, SEO-optimized
- 100% free to deploy on Vercel

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

```bash
npm install
cp .env.example .env.local
# Add your Web3Forms access key to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact Form Setup (Free)

1. Create a free access key at [web3forms.com](https://web3forms.com/)
2. Put it in `.env.local` as `NEXT_PUBLIC_WEB3FORMS_KEY`

## Updating the Resumes

The PDFs live in `public/resume.pdf` (Software Developer) and
`public/resume-cybersecurity.pdf` (Cybersecurity). The LaTeX sources
(`resume.tex`, `resume_cybersecurity.tex`) are in the repo root — rebuild
with `tectonic resume.tex` and copy the output into `public/`.

## Deploy to Vercel (Free)

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add environment variables from `.env.local`
4. Deploy - auto-updates on every push

## License

MIT
