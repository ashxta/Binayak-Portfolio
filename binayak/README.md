# Binayak Mohanta · Portfolio

Personal portfolio for Binayak Mohanta, a software developer. Built with React, TypeScript, Vite, Tailwind CSS and Framer Motion.

## Design: "Night Orbit"

A dark violet system grounded in the subject: HAL internship, IEEE GRSS remote-sensing research, and ML on Sentinel satellite imagery. The hero's signature is an orbital ground-track that draws itself with a satellite riding the arc; sections use glass panels with violet edge-glow, a drifting aurora background, and telemetry-style mono labels.

- **Display**: Space Grotesk · **Body**: Inter · **Data/labels**: JetBrains Mono
- Framer Motion: page-load sequence, rotating role line, scroll-progress bar, per-section staggered reveals, metric count-ups, 3D-tilt hover on project cards. `prefers-reduced-motion` respected throughout.

## Run locally

```sh
npm install
npm run dev
```

## Editing content

All copy lives in `src/lib/content.ts`: profile, metrics, experience, projects, skills, education, certifications, achievements. The résumé served by the download buttons is `public/Binayak_Resume.pdf`.

## Deploy (Vercel or Netlify)

**Vercel:** push to GitHub → Add New → Project → import → preset **Vite** (build `npm run build`, output `dist`) → Deploy. `vercel.json` handles SPA rewrites.

**Netlify:** drag the repo in or connect it → build command `npm run build`, publish directory `dist`. Add a `_redirects` file containing `/* /index.html 200` if using deep links.
