"use client"

import { useState } from "react"
import { Mail, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BorderBeam } from "@/components/magicui/border-beam"
import ContactFormModal from "@/components/contact-form-modal"
import { inter } from "@/lib/fonts"

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const TWITTER_URL = 'https://twitter.com/cole_mccon'
  const GITHUB_URL = 'https://github.com/coleinc'
  // const LINKEDIN_URL = 'https://www.linkedin.com/in/cole-mcconnell/'
  const LINKEDIN_URL = 'https://www.linkedin.com/company/overleaf-ai'
  const EMAIL_URL = 'mailto:hello@overleaf.agency'

  return (
    <footer id="contact" className="border-t border-white/5 bg-background">
      <ContactFormModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-[11px] h-[11px] rounded-full overflow-hidden">
                <div className="absolute inset-0 animate-gradient-flow bg-gradient-to-br from-[#BFE2E4] via-[#9fd5d8] to-[#7ec8cc] opacity-90" />
                <div className="absolute inset-0 animate-gradient-pulse bg-gradient-to-tr from-[#d4f0f1] via-[#BFE2E4] to-[#a8dde0] mix-blend-screen" />
              </div>
              <span className={`text-xl font-bold text-primary ${inter.className}`}>overleaf.ai</span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              End-to-end outbound systems for Agriculture Tech Businesses. We build and manage cold email systems that book you qualified sales calls and bring your business more leads.
            </p>
            <div className="mt-6 flex space-x-4">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Link href={TWITTER_URL} target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:border-primary/50 hover:bg-primary/10"
                    >
                      <Twitter className="w-4 h-4 text-foreground transition-colors" />
                    </Button>
                  </Link>
                  <Link href={LINKEDIN_URL} target="_blank">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:border-primary/50 hover:bg-primary/10"
                    >
                      <Linkedin className="w-4 h-4 text-foreground transition-colors" />
                    </Button>
                  </Link>
                  <Link href={EMAIL_URL}>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:border-primary/50 hover:bg-primary/10"
                    >
                      <Mail className="w-4 h-4 text-foreground transition-colors" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hello@hyssoplabs.com" className="hover:text-primary transition-colors">
                  hello@overleaf.agency
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Card className="relative w-fit">
                <Button
                  onClick={() => setIsContactModalOpen(true)}
                  className="relative overflow-hidden w-[160px]"
                  variant={"outline"}
                >
                  Book a Call
                </Button>
                <BorderBeam size={100} duration={8} colorFrom="#BFE2E4" colorTo="#9fd5d8" />
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} OVERLEAF.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
