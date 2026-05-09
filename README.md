# Overleaf AI — Landing Page

Marketing site for **Overleaf AI**, a done-for-you cold email lead generation agency focused on AgTech / Precision Agriculture SaaS & Hardware companies.

- **Live site:** https://www.overleaf.agency
- **Stack:** Next.js 15 (App Router), TypeScript, Tailwind, shadcn/ui
- **Package manager:** pnpm v10

## Local development

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build     # production build
pnpm start     # serve production build
pnpm lint
```

## Environment variables

Copy `.env.example` to `.env`:

- `RESEND_API_KEY` — from resend.com (contact form email delivery)
- `RECIPIENT_EMAIL` — inbox that receives contact form submissions

## Project context

See `CLAUDE.md` for full architecture, business context, ICP, and copy guidelines.

## SEO

See `SEO_STRATEGY.md` for the ranking plan covering branded ("overleaf ai", "overleaf agency") and non-branded AgTech keywords.
