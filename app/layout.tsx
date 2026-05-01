import type React from "react"
import type { Metadata } from "next"
import { inter } from "@/lib/fonts"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Overleaf AI | B2B Lead Generation Agency for AgTech",
  description: "We help Agriculture Tech Businesses book 10+ qualified demos per month with enterprise farm managers and co-op decision-makers — using a done-for-you outbound system. No demos booked, no payment.",
  icons: {
    icon: '/favicon.ico',
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
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  )
}
