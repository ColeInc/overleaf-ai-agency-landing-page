import type React from "react"
import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { inter } from "@/lib/fonts"
import { Toaster } from "sonner"
import "./globals.css"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

const SITE_URL = "https://www.overleaf.agency"
const SITE_NAME = "Overleaf AI"
const SITE_DESCRIPTION =
  "Overleaf AI is a done-for-you cold email lead generation agency for AgTech companies. We book 10+ qualified demos per month with enterprise farm managers and co-op decision-makers. No demos booked, no payment."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Overleaf AI | AgTech Lead Generation Agency",
    template: "%s | Overleaf AI",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Overleaf AI",
    "Overleaf Agency",
    "AgTech lead generation",
    "AgTech cold email agency",
    "precision agriculture marketing",
    "B2B demo booking",
    "outbound for agriculture tech",
    "cold email agency",
    "AgTech outbound",
    "farm management SaaS marketing",
  ],
  authors: [{ name: "Cole McConnell" }],
  creator: "Overleaf AI",
  publisher: "Overleaf AI",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Overleaf AI | AgTech Lead Generation Agency",
    description:
      "Done-for-you cold email lead generation for AgTech. Book 10+ qualified demos per month — guaranteed. No demos booked, no payment.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Overleaf AI — AgTech Lead Generation Agency" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overleaf AI | AgTech Lead Generation Agency",
    description: "Done-for-you cold email lead generation for AgTech. 10+ demos/month, guaranteed.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  category: "Marketing Agency",
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: ["Overleaf Agency", "Overleaf.agency", "Overleaf.ai"],
  url: SITE_URL,
  logo: `${SITE_URL}/og-image.png`,
  image: `${SITE_URL}/og-image.png`,
  description:
    "Done-for-you cold email lead generation agency for AgTech companies. Books qualified demos with enterprise farm managers and co-op decision-makers.",
  email: "hello@overleaf.agency",
  founder: {
    "@type": "Person",
    name: "Cole McConnell",
    jobTitle: "Founder",
    worksFor: { "@id": `${SITE_URL}/#organization` },
  },
  areaServed: ["US", "CA", "GB", "AU", "NZ", "DE", "NL"],
  knowsAbout: [
    "AgTech lead generation",
    "Precision agriculture marketing",
    "Cold email outreach",
    "B2B demo booking",
    "Outbound sales systems",
  ],
  sameAs: [
    "https://www.linkedin.com/company/overleaf-ai",
    // Append as profiles go live (X, Crunchbase, Clutch, G2, etc.)
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  name: "AgTech Cold Email Lead Generation",
  serviceType: "Lead Generation Agency",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: ["US", "CA", "GB", "AU", "NZ", "DE", "NL"],
  description:
    "Done-for-you outbound cold email systems that book 10+ qualified demos per month with enterprise farm managers, co-ops, and agribusiness buyers. Pay-per-result guarantee: no demos booked, no payment.",
  audience: {
    "@type": "BusinessAudience",
    audienceType: "AgTech / Precision Agriculture SaaS and Hardware Companies",
  },
  offers: {
    "@type": "Offer",
    description: "10+ qualified demos per month, guaranteed. No demos booked, no payment.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {children}
        <Toaster position="top-center" richColors closeButton />
        {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
      </body>
    </html>
  )
}
