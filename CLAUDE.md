# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start dev server at localhost:3000
pnpm build     # Production build (ESLint and TypeScript errors are suppressed — see next.config.mjs)
pnpm start     # Serve production build
pnpm lint      # Run ESLint
```

Package manager is `pnpm` (v10). Do not use `npm` or `yarn`.

## Environment Variables

Copy `.env.example` to `.env` and fill in:

- `RESEND_API_KEY` — from resend.com, used to send contact form emails
- `RECIPIENT_EMAIL` — email address that receives contact form submissions

## Architecture

Single-page Next.js 15 app (App Router). The entire site is one route: `app/page.tsx` renders all sections sequentially — Hero, Services, Process, About, Book a Call — with a shared `Navbar` and `Footer`.

**Contact flow:** "Let's talk" buttons open `ContactFormModal` (state lifted in `page.tsx`). The modal POSTs to `app/api/contact/route.ts`, which validates with Zod and sends via the Resend SDK. The `emails/` directory contains a React Email template that is not currently used (the route builds HTML inline instead).

**Book a Call:** `BookCallWidget` embeds a Calendly iframe (`https://calendly.com/overleafai/30min`) by injecting the Calendly script via `useEffect`.

**UI stack:** shadcn/ui (`components/ui/`) for base components, `components/magicui/` for animated effects (`BorderBeam`). Theme tokens are defined as CSS custom properties in `app/globals.css`; the site runs dark-mode-only (dark theme is set as `:root` defaults with no light variant).

**Primary brand color:** `#BFE2E4` (teal) — used as `--primary`, `--accent`, `--ring`, and in animated blob backgrounds.

**`next.config.mjs` note:** Both `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` are `true`, so `pnpm build` will succeed even with type errors.

## Business Context

This landing page is for **Overleaf AI** — Cole's done-for-you cold email lead generation agency. The business books qualified sales calls and demos for B2B clients using outbound email systems.

**Current niche:** AgTech / Precision Agriculture SaaS & Hardware

Cole's clients are founders and sales leaders at **Agricultural Technology companies** — companies that build and sell precision agriculture SaaS platforms, IoT/sensor hardware, and agricultural analytics/AI products. They sell to commercial farms, co-ops, and agribusiness enterprises.

**Three client sub-segments:**
1. **Farm Management SaaS** — crop planning, field records, compliance platforms (e.g. Bushel, AgriWebb, Conservis)
2. **Precision Ag Hardware & IoT** — soil sensors, drones, GPS/guidance, weather stations (e.g. CropX, Arable, Semios)
3. **Agricultural Analytics & AI** — satellite imagery, yield prediction, crop health monitoring (e.g. Regrow Ag, Agrimetrics, Taranis)

**Target company profile:** 1–5,000 employees. Primarily US, also CA, UK, AU, NZ, DE, NL.

**ICP (Ideal Customer Profile):** Founders, CEOs, VP Sales, CROs, Heads of Growth, Directors of Sales, and Business Development leaders at Agriculture Tech Businesses. These companies typically have strong products but weak outbound pipelines — they rely on trade shows, referrals, and field reps rather than systematic outbound.

**The offer:**
> "We help Agriculture Tech Businesses book 10+ qualified demos per month with enterprise farm managers and co-op decision-makers — using a done-for-you outbound system. No demos booked, no payment."

**Why this works for clients:** AgTech deals are $50K+ ACV. A $2–4K/month retainer = 12–25x+ ROI on a single closed deal. The guarantee removes all risk.

**Why the agency wins in this space:** Almost zero lead gen agencies specialize in AgTech. Most Agriculture Tech Businesses have never had a systematic outbound motion.

**Copy and positioning principles:**
- Lead with the outcome (demos booked, pipeline filled), not the process
- Speak to the budget-holder pain: too dependent on trade shows and referrals, deals stall without consistent top-of-funnel
- The guarantee ("no demos, no payment") is the primary trust mechanism — always feature it prominently
- Decision-makers are sales-savvy; avoid vague agency speak; be specific and direct
- Secondary CTA audience: other B2B SaaS/tech companies outside AgTech (the site should not be so niche that it repels adjacent verticals)

**Copy source of truth:** `MODULES/landing-page/copy-updated.md` in the SSS knowledge base. Always update this file after editing landing page copy.
