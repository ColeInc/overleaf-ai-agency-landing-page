**SEO Strategy — overleaf.agency**

**Goal:** Rank #1 for "overleaf ai" and "overleaf agency" first, then expand to commercial AgTech lead-gen terms.
**Budget:** Free-first, with optional sub-$10 spends called out.
**Site:** https://www.overleaf.agency
**Date:** 2026-05-07

---

**0. The brand collision you need to know about**

Before any tactics: **"Overleaf" is already a massive, entrenched brand.** [Overleaf.com](https://www.overleaf.com) is the world's dominant LaTeX/scientific writing editor, used by millions of researchers, with a Domain Rating north of 80 and links from thousands of universities. They will outrank you for the bare word "overleaf" forever. You will not win that.

What's realistic:

- ✅ **"overleaf ai"** — winnable in 1–4 months. Currently muddied by Overleaf.com's AI-writing features, but no dedicated brand owns this exact phrase. Your domain (overleaf.agency) and brand name match perfectly.
- ✅ **"overleaf agency"** — winnable in 1–3 months. Almost no competition for this exact phrase; you should own it quickly once indexed.
- ✅ **"overleaf.agency"** — should rank #1 within days of indexing.
- ⚠️ **"overleaf"** alone — not realistic, don't try.

**Strategic implication:** double down on "Overleaf AI" and "Overleaf Agency" as the brand phrases everywhere — meta tags, H1s, schema, social profiles, directory listings, backlink anchor text. Consistency is the single biggest lever for branded ranking.

---

**1. Why Google currently shows nothing**

You said "nothing shows up at all" when you Google the site. The most likely causes (in order):

1. **Google has not indexed the site yet.** No Search Console, no submitted sitemap, no inbound links → Google has no reason to crawl.
2. **No `robots.txt` or `sitemap.xml` exists** in `/public`. Both are missing from this repo.
3. **No backlinks anywhere.** Brand-new domains with zero referring sites take weeks to surface organically.
4. **Brand-name confusion.** Even after indexing, Google may default to the more authoritative Overleaf.com results unless you give it strong signals that "Overleaf AI" / "Overleaf Agency" is a distinct entity.
5. **No structured data / Open Graph image / canonical tags** to help Google understand the entity.

Everything below fixes these in priority order.

---

**2. Phase 1 — Free technical SEO foundation (do this week)**

These are zero-cost code/config changes. Do all of them.

**2.1 Create `robots.txt`**
File: `public/robots.txt`
```
User-agent: *
Allow: /

Sitemap: https://www.overleaf.agency/sitemap.xml
```

**2.2 Create `sitemap.xml` (Next.js native)**
File: `app/sitemap.ts`
```ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.overleaf.agency',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // add /case-studies/* entries as they go live
  ]
}
```

**2.3 Upgrade `app/layout.tsx` metadata**

Current metadata is thin. Replace with:

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://www.overleaf.agency'),
  title: {
    default: 'Overleaf AI | AgTech Lead Generation Agency',
    template: '%s | Overleaf AI',
  },
  description: 'Overleaf AI is a done-for-you cold email lead generation agency for AgTech companies. We book 10+ qualified demos per month with enterprise farm managers and co-op decision-makers. No demos booked, no payment.',
  keywords: ['Overleaf AI', 'Overleaf Agency', 'AgTech lead generation', 'cold email agency', 'B2B demo booking', 'precision agriculture marketing'],
  authors: [{ name: 'Cole McConnell' }],
  creator: 'Overleaf AI',
  publisher: 'Overleaf AI',
  alternates: { canonical: 'https://www.overleaf.agency' },
  openGraph: {
    type: 'website',
    url: 'https://www.overleaf.agency',
    siteName: 'Overleaf AI',
    title: 'Overleaf AI | AgTech Lead Generation Agency',
    description: 'Done-for-you cold email lead generation for AgTech. Book 10+ qualified demos per month — guaranteed.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Overleaf AI' }],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overleaf AI | AgTech Lead Generation Agency',
    description: 'Done-for-you cold email lead generation for AgTech. 10+ demos/month, guaranteed.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
}
```

**2.4 Add JSON-LD structured data**

Add to `app/layout.tsx` inside `<body>` (or as a component). This is **the single biggest signal** that "Overleaf AI" is a distinct entity from Overleaf.com:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://www.overleaf.agency/#organization',
      name: 'Overleaf AI',
      alternateName: ['Overleaf Agency', 'Overleaf.agency'],
      url: 'https://www.overleaf.agency',
      logo: 'https://www.overleaf.agency/og-image.png',
      description: 'Done-for-you cold email lead generation agency for AgTech companies.',
      founder: { '@type': 'Person', name: 'Cole McConnell' },
      areaServed: ['US', 'CA', 'UK', 'AU', 'NZ', 'DE', 'NL'],
      sameAs: [
        // fill in once profiles exist:
        // 'https://www.linkedin.com/company/overleaf-ai',
        // 'https://x.com/overleafai',
      ],
    }),
  }}
/>
```

Also add a `WebSite` + `Service` schema. The `sameAs` field is critical for Google's Knowledge Graph to link your social profiles to the brand.

**2.5 Create an Open Graph image**

A 1200×630 PNG at `/public/og-image.png`. Doesn't need to be fancy — black background, "Overleaf AI" wordmark, tagline, brand teal accent. Use Figma/Canva (free). This drives CTR from social previews and helps brand recognition in Google's image-rich SERPs.

**2.6 Improve on-page H1 / headings**

Audit `app/page.tsx` and section components — make sure:
- Exactly **one `<h1>`** on the page, containing "Overleaf AI" and the core value prop.
- Section headings are `<h2>` and contain target phrases naturally (e.g. "Lead Generation for AgTech", "Cold Email Process").
- Don't keyword-stuff. Read it aloud — it should sound human.

**2.7 Page speed / Core Web Vitals**

Run `npx unlighthouse-ci https://www.overleaf.agency` (free) or PageSpeed Insights. Target LCP < 2.5s, CLS < 0.1, INP < 200ms. Common quick wins on this stack:
- Convert `hyssop-labs-intro-video.mp4` to `<video preload="none" poster="...">` so it doesn't block LCP.
- Use `next/image` everywhere with explicit `width`/`height`.
- Lazy-load anything below the fold (Calendly widget already is via useEffect — good).

**2.8 Fix the `next.config.mjs` lint/TS suppression — eventually**

`ignoreDuringBuilds: true` and `ignoreBuildErrors: true` won't hurt SEO, but they hide bugs that could break rendering, and broken pages tank rankings. Not urgent, but plan to remove.

---

**3. Phase 2 — Get indexed and verified (week 1)**

Free, ~30 minutes total.

**3.1 Google Search Console (mandatory)**
1. Go to https://search.google.com/search-console
2. Add property → "URL prefix" → `https://www.overleaf.agency`
3. Verify via DNS TXT record (preferred — works for whole domain) or HTML file
4. Submit `https://www.overleaf.agency/sitemap.xml`
5. Use the **URL Inspection → Request Indexing** tool on your homepage. This is the fastest way to get Google to crawl a brand-new site.

**3.2 Bing Webmaster Tools**
Same drill: https://www.bing.com/webmasters → Add site → Import from GSC (one click). Bing also feeds DuckDuckGo and ChatGPT Search.

**3.3 Google Analytics 4**
Free. Set up at https://analytics.google.com, get the measurement ID, add via `next/third-parties`:
```bash
pnpm add @next/third-parties
```
Then in `layout.tsx`:
```tsx
import { GoogleAnalytics } from '@next/third-parties/google'
// ...
<GoogleAnalytics gaId="G-XXXXXXX" />
```

**3.4 IndexNow (Bing/Yandex instant indexing)**
Free, takes 5 min. Generate a key at https://www.indexnow.org/, drop the key file in `/public`, ping the API on each deploy. Massively speeds up Bing crawl.

---

**4. Phase 3 — Establish entity & branded SERP dominance (weeks 1–4)**

Branded ranking comes from **consistent NAP (Name/Address/Phone) + sameAs signals across the web**. You need Google to see "Overleaf AI" mentioned with a link back to overleaf.agency on as many trusted sites as possible.

**4.1 Free social/profile listings (do all of these — 1 evening of work)**

For each: create the account, write the same one-paragraph description, link to https://www.overleaf.agency. These are all free and feed Google's `sameAs` graph.

| Platform | Why |
|---|---|
| **LinkedIn Company Page** | Highest authority signal for B2B brands. Mandatory. |
| **LinkedIn personal — Cole** | Add "Founder, Overleaf AI" + link. |
| **X / Twitter** | `@overleafai` if available. |
| **Crunchbase** | Free company listing. Strong domain authority for branded SERPs. |
| **Product Hunt** | Even without launching, claim the maker profile. |
| **G2** | Free vendor profile under "Lead Generation Services". |
| **Clutch.co** | Free B2B agency directory. Huge for "lead gen agency" terms. |
| **GoodFirms** | Same as Clutch. Free tier. |
| **DesignRush** | Free agency listing. |
| **Sortlist** | Free tier. |
| **The Manifest** | Free B2B directory (owned by Clutch). |
| **F6S** | Founder/agency profiles. |
| **AngelList / Wellfound** | Free company page. |
| **About.me** | Personal landing for Cole linking to brand. |
| **GitHub org page** | If you have one — add description and homepage URL. |
| **YouTube channel** | Even with 0 videos, create "Overleaf AI" channel. |
| **Medium publication** | Republish your best content here with canonical links back. |
| **Reddit account** | `u/overleafai` — for brand consistency. |

**Critical:** use the *exact same* wording and *exact same* logo on every platform. Google cross-references these to confirm entity identity.

**4.2 Free directory citations**

Beyond the marketing platforms above, generic business directories help:
- Google Business Profile — see §4.3 below
- Bing Places for Business
- Apple Business Connect
- Yelp (yes, even for B2B)
- Hotfrog, Brownbook, Cylex (auto-aggregators — submit once, they propagate)

**4.3 Google Business Profile — your situation**

You said: *"I live in New Zealand. I don't have anything registered."*

You don't need a registered company to create a Google Business Profile. You need:
1. A name ("Overleaf AI")
2. A category ("Marketing agency" or "Advertising agency")
3. **An address.** This is the catch.

**Options for you specifically:**
- **(Recommended) Service-area business:** GBP allows "I deliver services to my customers" with **no public address** — you only enter a city (e.g. Auckland) and Google won't display a street. You still need to verify with a real address (Google sends a postcard or video verification), but it's not shown publicly.
- **Skip GBP:** if even providing a verification address is uncomfortable. You'll lose the local-pack ranking and the right-side Knowledge Panel for branded searches, but international SEO still works.

**Recommendation:** do the service-area version. The Knowledge Panel for "overleaf ai" / "overleaf agency" is enormously valuable for branded SERPs and only costs you a postcard verification.

**4.4 Free backlinks from AgTech / B2B sources**

Branded ranking accelerates when authoritative sites link to you with anchor text "Overleaf AI" or "overleaf.agency". Free options:

- **Write 1 guest post** on Medium / Substack / dev.to about "How AgTech founders should think about outbound" — link to the site naturally.
- **HARO / Qwoted / Featured.com** — answer journalist queries; respond as "Cole McConnell, founder at Overleaf AI". Free tier exists. High-DA backlinks.
- **Indie Hackers / r/SaaS / r/AgTech** — share the build story. Don't spam; contribute.
- **AgFunderNews / Modern Farmer comment sections / podcast appearances** — niche AgTech press is starved for content. Pitch yourself as a guest.
- **Podcast guesting** — Cold Email Podcast, AgFunder, etc. Each one = a backlink + brand mention.
- **Testimonials for tools you use** — Resend, Calendly, Vercel, Instantly. Send a testimonial to their marketing teams; many publish them with a link.

**4.5 Internal linking & content depth**

A 1-page site is harder to rank than a multi-page site because there's nothing for Google to index beyond the homepage. Plan to add (free, just time):
- `/case-studies/[slug]` — you already have the route. Publish 2–3 detailed case studies.
- `/blog` or `/insights` — publish 1 article/month targeting **"how to do outbound for AgTech"**, **"cold email for precision ag SaaS"**, **"booking demos with farm co-ops"**. These are zero-competition long-tail terms you can win in weeks.
- `/about` — full bio, photos, story. Helps E-E-A-T (Google's trust framework).
- `/process` — already exists as a section, but a dedicated page lets you target "cold email process" type queries.

Each new page = another shot on goal in Google.

---

**5. Phase 4 — Content for non-branded AgTech keywords (months 2–6)**

Once branded ranking is locked in, this is where you compete for *commercial intent* terms. Free; just labor.

**5.1 Keyword research (free tools)**

- **Google autocomplete** — type "agtech " / "cold email " / "lead gen for " — record every suggestion.
- **AnswerThePublic** (free tier, 3 searches/day)
- **Google Keyword Planner** (free with any Ads account, even unfunded)
- **Ahrefs Free Keyword Generator** / **Ubersuggest free tier**
- **Reddit / LinkedIn comment mining** — search "[problem] in AgTech" and read what real prospects ask.

**5.2 Target keyword clusters (start with low-competition long tail)**

| Cluster | Example queries | Page type |
|---|---|---|
| AgTech outbound | "lead generation for agtech startups", "cold email for precision agriculture" | Blog post + service page |
| Demo booking | "how to book demos with farm co-ops", "outbound sales for agriculture saas" | Blog post |
| Agency comparison | "best lead gen agency for b2b saas", "cold email agency for agtech" | Comparison page |
| Cold email how-to | "cold email subject lines for agriculture", "deliverability for outbound agencies" | Educational content |

Don't chase head terms ("lead generation agency" — Domain Rating 80+ competitors). Win the long tail; the head terms come with authority.

**5.3 Content production cadence**

- 1 long-form post (1,500+ words) per week → 50/year. Realistic with AI assistance + your domain expertise.
- Each post: original POV, real numbers from client work, specific examples. AI-spun generic content gets buried by Google's helpful-content updates.
- Repurpose: post → LinkedIn carousel → Twitter thread → YouTube short. Each repost = another `sameAs` brand signal.

---

**6. Paid options — budget tiers**

You said free-first but open to ≤$10. Here's the honest layout.

**6.1 Sub-$10 options (your stated budget)**

| Option | Cost | Value |
|---|---|---|
| **Domain extension on Cloudflare** (already have) | $0 | DNS, SSL, basic DDoS — also free |
| **Fiverr — directory submissions gig** | ~$5–10 | Hit-and-miss; many are spammy. **Skip unless you find a vetted seller.** Bad backlinks can hurt you. |
| **Namecheap/Porkbun .com or .ai variant** | ~$10/yr | Defensive — register `overleaf.ai` if available, redirect to `.agency`. Worth it if cheap. |
| **Indie Hackers Pro / X Premium for posting reach** | $8–10/mo | Mild ranking value via brand visibility |

**Honest recommendation at $10:** spend it on a defensive domain registration, *not* on backlinks or directories. Cheap backlinks at this price point are almost always net-negative.

**6.2 If budget opens up later — what to spend on, in order of ROI**

1. **$50–150 one-time: paid listings on Clutch/G2/Sortlist.** Modest ranking lift, good lead source.
2. **$50–200/mo: Google Ads on your branded terms ("overleaf ai", "overleaf agency").** Costs almost nothing because there are no competitors bidding. You appear above organic immediately while you wait for SEO to mature. CPC likely $0.10–0.50.
3. **$30/mo: Ahrefs Lite or SEMrush starter.** Real keyword data + competitor backlink mining. Pays for itself once you're producing content.
4. **$200–500 one-time: HARO / Connectively monthly subscription + a freelance link-builder.** Targeted DA-50+ links from real publications. Highest ROI per dollar in SEO.
5. **$500–2000/mo: digital PR.** Press releases via Newswire / EIN Presswire ($300–600 each) place your brand on hundreds of news sites — instant authoritative `sameAs` signals.
6. **Avoid:** PBN backlinks, $5 Fiverr link gigs, "1000 backlinks for $20" services. These actively harm rankings.

**6.3 What I would NOT spend money on yet**

- Hiring an SEO agency (you don't have enough surface area for them to act on).
- Programmatic SEO tools (premature for a 1-page site).
- Generic backlink packages.

---

**7. Tracking — how you'll know it's working**

Free dashboard:
- **Google Search Console** → Performance → filter for queries `overleaf ai`, `overleaf agency`, `overleaf.agency`. Watch impressions and average position weekly.
- **GA4** → Acquisition → Organic Search.
- **`site:overleaf.agency`** Google query — confirms how many pages are indexed.
- **Manual rank checks** — open an incognito window weekly, search the target terms, screenshot the SERP.

**Realistic timeline**

| Week | Expected state |
|---|---|
| 1 | Site indexed. `site:overleaf.agency` returns the homepage. |
| 2–3 | Homepage ranks #1 for `overleaf.agency` (exact match). May be page 2–3 for `overleaf ai`. |
| 4–8 | Ranking #1–3 for `overleaf agency`. Climbing for `overleaf ai`. |
| 8–16 | #1 for `overleaf ai` if you executed Phase 3 properly. Long-tail AgTech queries starting to surface. |
| 4–6 months | Multiple long-tail AgTech keywords ranking, steady organic leads possible. |

If it's been 3 weeks and `site:overleaf.agency` still returns nothing, the most likely cause is a misconfigured `robots` meta tag or a Search Console verification issue — re-check §2 and §3.

---

**8. Priority checklist (in order)**

Copy this into a TODO list and march through it.

**This week (free, ~3 hours total)**
- [ ] Add `public/robots.txt` (§2.1)
- [ ] Add `app/sitemap.ts` (§2.2)
- [ ] Upgrade `app/layout.tsx` metadata + canonical + OG (§2.3)
- [ ] Add Organization JSON-LD schema (§2.4)
- [ ] Create 1200×630 `og-image.png` in `/public` (§2.5)
- [ ] Audit H1/H2 structure on `app/page.tsx` (§2.6)
- [ ] Set up Google Search Console + verify + submit sitemap + request indexing (§3.1)
- [ ] Set up Bing Webmaster Tools (§3.2)
- [ ] Set up GA4 (§3.3)

**Weeks 2–4 (free, ~6 hours total spread out)**
- [ ] LinkedIn Company Page for Overleaf AI (§4.1)
- [ ] Update Cole's personal LinkedIn with Overleaf AI as employer
- [ ] Create profiles on: X, Crunchbase, Clutch, G2, GoodFirms, Sortlist, F6S, Wellfound (§4.1)
- [ ] Set up Google Business Profile as service-area business (§4.3)
- [ ] Publish 2 case studies under `/case-studies/[slug]` (§4.5)
- [ ] Sign up for HARO/Qwoted/Featured.com and answer 5 queries (§4.4)
- [ ] Add IndexNow key (§3.4)

**Months 2–6 (free, ongoing)**
- [ ] 1 long-form blog post per week targeting AgTech long-tail (§5.3)
- [ ] 1 podcast guest appearance per month (§4.4)
- [ ] Monthly check of GSC, fix any indexing issues
- [ ] Add `sameAs` URLs to JSON-LD as profiles go live

**Optional sub-$10 spend**
- [ ] Register defensive domain variant if cheap (overleaf.ai, theoverleaf.com, etc.)

**When budget opens up (in priority order)**
- [ ] Branded Google Ads campaign ($50–200/mo)
- [ ] Paid Clutch/G2 enhanced listing
- [ ] Ahrefs Lite or SEMrush
- [ ] Digital PR / press releases

---

**TL;DR**

You're invisible right now because the site has never been crawled, has no sitemap, no structured data, no backlinks, and no entity signals. Fix Phase 1 and 2 this week and you'll be indexed within days. Win "overleaf agency" within a month and "overleaf ai" within 1–4 months by hammering Phase 3 (consistent brand signals across LinkedIn, Crunchbase, Clutch, G2, GBP). Don't try to outrank Overleaf.com for "overleaf" — pick winnable battles. Save the $10 for a defensive domain rather than cheap backlinks, which usually do more harm than good.
