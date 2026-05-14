# SEO Implementation Progress — overleaf.agency

Living tracking file for the SEO rollout described in `SEO_STRATEGY.md`. Updated as work proceeds.

**Started:** 2026-05-09
**Strategy doc:** `SEO_STRATEGY.md`
**Brand-copy source of truth:** `/Users/cole/Cole/PROJECTS/claude/overleaf-OS/02_tools/landing-page/copy-updated.md`, `00_strategy/niche.md`

---

## Phase 1 — Technical SEO foundation (in repo)

| # | Item | Status | Notes |
|---|---|---|---|
| 1.1 | `public/robots.txt` | ✅ done | |
| 1.2 | `app/sitemap.ts` | ✅ done | Returns `/` and `/case-studies` |
| 1.3 | Upgrade `app/layout.tsx` metadata (OG, Twitter, canonical, robots, keywords, metadataBase, title template) | ✅ done | |
| 1.4 | JSON-LD Organization + WebSite + Service schema | ✅ done | `sameAs` is empty — fill in once profiles go live |
| 1.5 | H1/H2 audit + "Overleaf AI" mention near hero | ✅ done | Single H1 confirmed; subhead updated to lead with "Overleaf AI builds, runs, and optimizes…". **Sync this copy change to `overleaf-OS/02_tools/landing-page/copy-updated.md`.** |
| 1.6 | Per-route metadata on `app/case-studies/page.tsx` | ✅ done | |
| 1.7 | Create 1200×630 `og-image.png` | ❌ blocked — Cole to create in Figma/Canva and drop in `public/og-image.png` |
| 1.8 | Video `preload="none"` + poster on intro video | ✅ no-op | Video file in `/public` is unreferenced — nothing to optimize |
| — | `pnpm build` passes | ✅ done | 8 static pages generated, including `/sitemap.xml` |

## Phase 2 — Indexing & verification (Cole-driven, code prep ready)

| # | Item | Status | Notes |
|---|---|---|---|
| 2.1 | Google Search Console — add property + DNS TXT verify | ❌ Cole | I can wire HTML-file verification if Cole prefers |
| 2.2 | Submit `/sitemap.xml` to GSC | ❌ Cole | After 2.1 |
| 2.3 | Request indexing on homepage in GSC | ❌ Cole | |
| 2.4 | Bing Webmaster Tools — import from GSC | ❌ Cole | |
| 2.5 | GA4 setup → measurement ID → wire `<GoogleAnalytics>` via `@next/third-parties` | ❌ Cole supplies ID | I'll wire when ID provided |
| 2.6 | IndexNow key file in `/public` + ping API on deploy | ⏸ deferred | Cole generates key at indexnow.org |

## Phase 3 — Entity & branded SERP signals (Cole-driven)

| # | Item | Status | Owner |
|---|---|---|---|
| 3.1 | LinkedIn Company Page "Overleaf AI" | ✅ live → https://www.linkedin.com/company/overleaf-ai (added to `sameAs`) | Cole |
| 3.2 | Cole's personal LinkedIn — set "Founder, Overleaf AI" + URL | ❌ | Cole |
| 3.3 | X / Twitter `@overleafai` | ❌ | Cole |
| 3.4 | Crunchbase company listing | ❌ | Cole |
| 3.5 | Product Hunt maker profile | ❌ | Cole |
| 3.6 | G2 vendor profile (Lead Generation Services) | ❌ | Cole |
| 3.7 | Clutch.co listing | ❌ | Cole |
| 3.8 | GoodFirms listing | ❌ | Cole |
| 3.9 | DesignRush + Sortlist + The Manifest + F6S | ❌ | Cole |
| 3.10 | AngelList / Wellfound | ❌ | Cole |
| 3.11 | About.me for Cole | ❌ | Cole |
| 3.12 | YouTube channel "Overleaf AI" | ❌ | Cole |
| 3.13 | Medium publication | ❌ | Cole |
| 3.14 | Reddit `u/overleafai` | ❌ | Cole |
| 3.15 | Google Business Profile (service-area, Auckland) | ❌ | Cole |
| 3.16 | Bing Places + Apple Business Connect + Yelp | ❌ | Cole |
| 3.17 | After each profile created → add URL to `sameAs` array in JSON-LD | ⏸ | Cole pings me with URLs |

## Phase 4 — Content depth (Cole + me)

| # | Item | Status |
|---|---|---|
| 4.1 | Convert `/case-studies` to dynamic `[slug]` routes (currently single page with both inline) | ⏸ pending Cole approval |
| 4.2 | `/about` page — full bio, photos, story | ⏸ pending |
| 4.3 | `/process` dedicated page | ⏸ pending |
| 4.4 | `/blog` index | ⏸ pending |
| 4.5 | First long-form post: "Cold email for AgTech / precision agriculture SaaS" | ⏸ |
| 4.6 | HARO/Qwoted/Featured.com signups + 5 answers | ❌ Cole |
| 4.7 | Podcast guesting (1/month) | ❌ Cole |

## Phase 5 — Optional sub-$10 spend

- [ ] Defensive domain registration (overleaf.ai if available, theoverleaf.com)

## Session handoff — 2026-05-09

**Status:** Phase 1 complete. Phases 2 & 3 are mostly Cole-driven (account creation, GSC verification). To unblock browser-driven account creation, `chrome-devtools-mcp` was added to user-scope MCP config (`~/.claude.json`) and is connected.

**ACTION REQUIRED:** Restart this Claude Code session — MCP tools only load at session start, so the current process can't see chrome-devtools tools yet.

**Resume prompt after restart:** "Continue SEO_PROGRESS.md — drive Phase 3 account creation with chrome-devtools MCP. Start with LinkedIn personal update + X/Twitter @overleafai signup."

**Before driving the browser, I'll need from Cole:**
1. Which email to register profiles under (e.g., `cole@overleaf.agency`, `colehmcconnell@gmail.com`?)
2. Confirm display name everywhere is exactly **"Overleaf AI"** (not "Overleaf Agency", not "overleaf.agency")
3. Confirm founder name for profiles: **Cole McConnell**
4. Confirm primary location: **Auckland, New Zealand** (for service-area / city fields)
5. Logo file path (for upload to each platform — needs to be identical across all per §4.1 of strategy)
6. Where to store generated passwords (1Password? plain file? I'll prompt before each signup)

**Recommended Phase 3 execution order (highest entity-signal ROI first):**
1. X/Twitter `@overleafai` — claim handle before squatters
2. Cole's personal LinkedIn — add "Founder, Overleaf AI" employer + URL (fastest, no new account)
3. Crunchbase company listing
4. Clutch.co + G2 vendor profiles (B2B agency directories)
5. Product Hunt maker profile
6. YouTube channel "Overleaf AI"
7. Medium publication
8. Reddit `u/overleafai`
9. Wellfound, GoodFirms, Sortlist, F6S, DesignRush, The Manifest, About.me
10. Google Business Profile (service-area, Auckland) — postcard verification, slowest

After each profile creation, paste the URL back and I'll add it to JSON-LD `sameAs` and tick it off above.

---

## Open questions / blockers for Cole

1. **OG image** — please create a 1200×630 PNG (black bg, "Overleaf AI" wordmark, tagline, teal `#BFE2E4` accent). Drop in `public/og-image.png`. Figma/Canva works.
2. **Favicon set** — current code references `/favicon.ico` but file is missing. Need `favicon.ico` and `apple-touch-icon.png` (180×180) in `/public`.
3. **GA4 measurement ID** — once GA4 is set up, paste the `G-XXXXXXX` here and I'll wire it.
4. **GSC verification method** — DNS TXT (preferred, requires Cloudflare access) or HTML file? If HTML, hand me the filename + token.
5. **Social profile URLs** — once any are created, paste them and I'll add to JSON-LD `sameAs`.
6. **Defensive domain** — confirm whether to attempt registering `overleaf.ai` / `theoverleaf.com`.

---

## Verification checklist

- [ ] `pnpm build` passes
- [ ] `pnpm dev` → `curl localhost:3000/robots.txt` returns content
- [ ] `curl localhost:3000/sitemap.xml` returns valid XML
- [ ] View-source on `/` shows full meta tags + JSON-LD
- [ ] Paste rendered HTML into https://validator.schema.org → no errors
- [ ] After deploy: `site:overleaf.agency` returns the homepage in Google
