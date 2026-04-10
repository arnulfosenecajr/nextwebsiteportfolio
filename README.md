# Arnulfo D. Seneca Jr. — Portfolio

Next.js (App Router) + TypeScript + Tailwind CSS portfolio website for Senior Web Developer Arnulfo D. Seneca Jr.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **ESLint**

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Header, Footer, SEO metadata)
│   ├── globals.css         # Global styles (dark theme)
│   ├── page.tsx            # Home page
│   ├── experience/
│   │   └── page.tsx        # Work experience & education
│   ├── projects/
│   │   └── page.tsx        # Portfolio projects
│   └── contact/
│       └── page.tsx        # Contact details
├── components/
│   ├── Badge.tsx
│   ├── Container.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Section.tsx
└── data/
    └── profile.ts          # All resume content — edit this to update the site
```

## Updating Content

All resume content lives in **`src/data/profile.ts`**. Edit that single file to update your name, skills, experience, projects, or contact details.

## Deploy to Vercel

The easiest way to deploy is with [Vercel](https://vercel.com/):

1. Push this repository to GitHub.
2. Import the repo in the [Vercel dashboard](https://vercel.com/new).
3. Vercel will auto-detect Next.js and deploy — no extra configuration needed.

Every push to `main` will trigger a new deployment automatically.