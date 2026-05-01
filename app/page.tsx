
"use client"

import { useState } from "react"
import BookCallWidget from "@/components/book-call-widget"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProcessSteps from "@/components/process-steps"
import ServiceCards from "@/components/service-cards"
import ContactFormModal from "@/components/contact-form-modal"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BorderBeam } from "@/components/magicui/border-beam"

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <ContactFormModal open={isContactModalOpen} onOpenChange={setIsContactModalOpen} />

      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-16 md:py-24 max-w-6xl min-h-[calc(100vh-4rem)] flex items-center">
        {/* Animated Background Blob */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#BFE2E4]/20 rounded-full blur-[120px] animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#9fd5d8]/15 rounded-full blur-[120px] animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-[#7ec8cc]/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        </div>

        <div className="flex flex-col items-center gap-6 max-w-[52rem] mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground">
            We Book Qualified Sales Calls For <span className="text-primary">B2B Agribusinesses.</span>
            {/* <span className="text-primary">
              <AnimatedText
                words={["Enterprise Farm Managers", "Co-op Decision-Makers", "Agribusiness Buyers"]}
              />
            </span> */}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl !text-[#bcbcbc]">
            We build, run, and optimize cold email systems for Agriculture Tech Businesses from domain setup to inbox management. Your calendar gets qualified sales calls with the buyers you actually want. If we don't deliver, you don't pay.
          </p>

          <div className="flex gap-4 items-center mt-2">
            <Card className="relative">
              <Button
                onClick={() => setIsContactModalOpen(true)}
                className="relative overflow-hidden w-[160px]"
                variant={"outline"}
                size="lg"
              >
                <span className="flex items-center gap-2">
                  Book a Call
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                </span>
              </Button>
              <BorderBeam size={100} duration={8} colorFrom="#BFE2E4" colorTo="#9fd5d8" />
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 mx-auto max-w-6xl">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">What We Do</h2>
          </div>
          <ServiceCards />
          {/* CTA Button */}
          <div className="mt-5 flex justify-end">
            <Card className="relative">
              <Button
                onClick={() => setIsContactModalOpen(true)}
                className="relative overflow-hidden w-[160px]"
                variant={"outline"}
                size="lg"
              >
                <span className="flex items-center gap-2">
                  Let&apos;s talk
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                </span>
              </Button>
              <BorderBeam size={100} duration={8} colorFrom="#BFE2E4" colorTo="#9fd5d8" />
            </Card>
          </div>
        </div>
      </section>

      {/* "Our Process" Section */}
      <section id="how-it-works" className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">Our Process</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              We do the heavy lifting at every stage. Your involvement is two calls, then we build the rest.
            </p>
          </div>
          <ProcessSteps />
        </div>
      </section>

      {/* Meet the Team */}
      <section id="meet-the-team" className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">About the Founder</h2>
          </div>
          <div className="grid md:grid-cols-[auto_1fr] gap-x-8 gap-y-4 items-start">
            {/* Empty space in first column, first row on desktop */}
            <div className="hidden md:block"></div>

            {/* Heading in second column, first row */}
            <h3 className="text-2xl font-semibold text-foreground text-center md:text-left">Cole McConnell</h3>

            {/* Profile Picture in first column, second row */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-28 h-28 rounded-[15px] bg-gradient-to-br from-teal/20 to-accent/20 overflow-hidden border border-white/5">
                <img src={"/cole-avatar.jpg"} />
              </div>
            </div>

            {/* Bio in second column, second row */}
            <p className="!text-[18px] !leading-[24px] md:text-lg text-muted-foreground text-center md:text-left">
              Cole is a Full-Stack Engineer and outbound systems specialist focused exclusively on the B2B Agriculture Tech space. Based in Auckland, he founded overleaf.ai after seeing a consistent pattern in businesses having no reliable outbound system to put their services in front of the buyers who need them. He builds and manages complete end-to-end outbound systems from infrastructure to inbox management so Agriculture Tech Business founders can build a predictable way to bring in consistent leads and book sales calls.
            </p>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section id="book-call" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-0 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">Book Your Free Strategy Call</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;ll audit your current outbound setup and show you exactly how we&apos;d build a system to book 10+ qualified sales calls per month with your exact target audience.
            </p>
            <p className="pt-3 font-bold max-w-[450px] mx-auto text-primary">When booking, share your target buyer and what you&apos;ve tried before. The more context we have, the better.</p>
          </div>
          <BookCallWidget />
        </div>
      </section>

      <Footer />
    </div>
  )
}
