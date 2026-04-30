# Mohit Kundu — Portfolio

A modern, animated developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Getting Started

### 1. Unzip and install

```bash
unzip mohit-kundu-portfolio.zip
cd portfolio
npm install
```

### 2. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx         # Root layout + metadata
│   ├── page.tsx           # Main page (assembles all sections)
│   └── globals.css        # Global styles, fonts, CSS vars
├── components/
│   ├── Navbar.tsx         # Sticky responsive navbar
│   ├── Footer.tsx         # Footer
│   ├── ui/
│   │   ├── SectionWrapper.tsx   # Fade-in wrapper for every section
│   │   └── SectionHeader.tsx    # Reusable section label + title
│   └── sections/
│       ├── Hero.tsx        # Hero with animated name + CTAs
│       ├── About.tsx       # Summary + stats + certs + education
│       ├── Skills.tsx      # Grouped, color-coded skill cards
│       ├── Experience.tsx  # Timeline layout with metric grids
│       ├── Projects.tsx    # Featured + other project cards
│       └── Contact.tsx     # Social links + mailto contact form
└── lib/
    ├── data.ts             # ← ALL content lives here (edit this!)
    └── animations.ts       # Shared Framer Motion variants
```

---

## ✏️ Customizing Content

**All resume data is in `src/lib/data.ts`** — one file to rule them all:

- `personal` — name, role, tagline, social links
- `about` — bio paragraph(s)
- `skills` — grouped skill lists
- `experience` — jobs with metrics
- `projects` — project cards with tech + metrics
- `certifications` — cert list

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Background | `#080B10` |
| Surface | `#0D1117` |
| Accent (green) | `#4DFFB4` |
| Blue | `#4D9FFF` |
| Display Font | Syne |
| Body Font | DM Sans |
| Mono Font | JetBrains Mono |

---

## 🌐 Deploying to Vercel

```bash
npx vercel
```

Or push to GitHub and connect to [vercel.com](https://vercel.com) for automatic deployments.

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `next` 14 | App Router framework |
| `framer-motion` 11 | Scroll + hover animations |
| `tailwindcss` 3 | Utility-first styling |
| `lucide-react` | Minimal icon set |
| `clsx` | Conditional class utility |
