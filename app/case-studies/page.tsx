import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft, Clock, Building2, TrendingUp, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Case Studies — AgTech Outbound Systems Built by Overleaf AI",
  description:
    "Real cold email systems built by Overleaf AI for B2B clients. End-to-end automation, deliverability infrastructure, and qualified demo pipelines — production-ready in weeks.",
  alternates: { canonical: "https://www.overleaf.agency/case-studies" },
  openGraph: {
    title: "Case Studies | Overleaf AI",
    description:
      "Real cold email systems built by Overleaf AI for B2B clients. Each engagement is a ground-up build.",
    url: "https://www.overleaf.agency/case-studies",
    type: "website",
  },
}

const caseStudies = [
  {
    id: "mischell-miljevic",
    tag: "End To End Outbound System",
    title: "AI-Powered Lead Generation System for a Tech Recruitment Firm",
    client: "Mischell Miljevic",
    company: "Lynqa / Swedish Tech Recruitment",
    timeline: "8 weeks to results",
    summary:
      "Replaced 30+ hours per week of manual LinkedIn prospecting with a fully automated, AI-powered outbound engine — generating 112 positive replies and 13 sales calls booked in the first 8 weeks.",
    stats: [
      { value: "112", label: "Positive Replies" },
      { value: "13", label: "Sales Calls Booked" },
      { value: "30+ hrs", label: "Saved Per Week" },
    ],
    situation: {
      heading: "The Problem",
      body: "Mischell's existing workflow required manually monitoring LinkedIn job postings, evaluating role relevance, identifying hiring companies, finding decision-makers, and managing outreach campaigns by hand. This resulted in 30+ hours per week spent on repetitive tasks, inconsistent lead quality, limited ability to scale, and missed opportunities due to delayed responses to hiring signals.",
    },
    responsibilities: {
      heading: "Our Role",
      intro:
        "We were responsible for the entire system architecture, design, and implementation — Mischell provided the business context and goal, we translated it into a working, production-grade system.",
      points: [
        "Designed the full automation workflow from scratch and selected all third-party integrations",
        "Built an automated LinkedIn job signal detection pipeline via Apify with retry and polling logic",
        "Engineered a multi-layered AI classification system using LLMs to evaluate every job posting across company relevance, role relevance, technical categorization, and supporting signals",
        "Built deduplication logic across jobs, companies, and contacts to prevent redundant outreach",
        "Integrated Apollo's Company Search API for decision-maker enrichment, targeting Engineering and IT seniority at the right company sizes",
        "Wired intelligent lead routing to assign leads to the correct Apollo sequences based on job category, filtering for verified emails only",
        "Deployed the entire system in n8n with scheduled triggers — fully autonomous daily execution",
      ],
    },
    impact: {
      heading: "Outcome",
      body: "Mischell now operates with a fully automated outbound system that continuously identifies and engages high-intent prospects. Instead of spending time on manual lead generation, he focuses entirely on closing deals, building relationships, and growing his recruitment business. The system runs daily, responds to real-time hiring signals, and has eliminated the need for any manual prospecting.",
    },
  },
  {
    id: "chris-mauro",
    tag: "Email Campaign Infrastructure Recovery",
    title: "Steel Cold Outreach Engine",
    client: "Chris Mauro",
    company: "Power10.ai / Global Alloys Corp",
    timeline: "3 weeks",
    summary:
      "Inherited a partially broken cold email system and rebuilt it into a production-ready outbound infrastructure — restoring deliverability, rebuilding automation workflows, and creating a repeatable lead pipeline from scratch.",
    stats: [
      { value: "3 wks", label: "Full Rebuild" },
      { value: "0 → live", label: "Production-Ready" },
      { value: "8–24", label: "Projected Conversations/mo" },
    ],
    situation: {
      heading: "The Situation",
      body: "Chris had inherited a partially built cold email system for Global Alloys — a steel distributor targeting qualified buyer conversations for inventory opportunities. The inbox had deliverability issues, automations were unstable and disconnected, lead flow was thin, and the campaign was behind schedule. The goal was clear: build a predictable outbound engine, fast.",
    },
    responsibilities: {
      heading: "What We Were Responsible For",
      intro:
        "We owned the full technical and operational handoff required to get the campaign launch-ready.",
      points: [
        "Audited and took control of all critical systems: Instantly, Airtable, n8n, sending inboxes, enrichment and verification stack",
        "Re-established deliverability foundations — inbox warmup strategy, sending constraints, and domain risk mitigation",
        "Rebuilt and deployed the n8n automation environment on a new self-hosted Hostinger VPS",
        "Configured and validated workflow logic from lead intake through to campaign sync",
        "Implemented lead sourcing operations via Apollo, then moved cleaned leads into Airtable CRM",
        "Added professional enrichment and verification workflow using best-practice hygiene gates before leads entered sending workflows",
        "Upgraded campaign quality by implementing spintax and sequence optimization on existing copy",
        "Structured the system for controlled scaling: multi-inbox approach, daily caps, weekday scheduling, status syncs, and error handling",
      ],
    },
    impact: {
      heading: "Business Impact",
      body: "In three weeks, the project moved from 'partially built and not properly launched' to a functional outbound infrastructure ready for sustained campaign execution. Chris now had a production-ready workflow stack instead of disconnected components, a safer send strategy across warmed inboxes, a repeatable lead generation and verification pipeline, and a system that could be maintained, reported on, and scaled. Projected performance: 25–50 emails/day scaling with warmed inboxes, 8–24 qualified conversations per month once fully live.",
    },
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="relative py-16 md:py-24 border-b border-white/5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#BFE2E4]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#9fd5d8]/8 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#bcbcbc] hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Case Studies
          </h1>
          <p className="text-md text-[#bcbcbc] max-w-2xl">
            Real systems built for real clients. Each engagement is a ground-up build. From infrastructure to automation to outbound execution.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl space-y-24">
          {caseStudies.map((cs) => (
            <article key={cs.id} className="space-y-10">
              {/* Case Study Header */}
              <div className="space-y-4">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary border border-primary/30 bg-primary/10 rounded-full px-3 py-1">
                  {cs.tag}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  {cs.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-sm text-[#bcbcbc]">
                  <span className="flex items-center gap-1.5">
                    <Building2 className="h-4 w-4 text-primary/60" />
                    {cs.client} — {cs.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary/60" />
                    {cs.timeline}
                  </span>
                </div>
                <p className="text-lg text-[#bcbcbc] max-w-3xl leading-relaxed">{cs.summary}</p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                {cs.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/5 bg-card/80 backdrop-blur-md p-6 text-center space-y-1"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-[#bcbcbc] uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Main Content Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Situation */}
                <div className="rounded-2xl border border-white/5 bg-card/80 backdrop-blur-md p-8 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{cs.situation.heading}</h3>
                  <p className="text-[#bcbcbc] leading-relaxed">{cs.situation.body}</p>
                </div>

                {/* Impact */}
                <div className="rounded-2xl border border-white/5 bg-card/80 backdrop-blur-md p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{cs.impact.heading}</h3>
                  </div>
                  <p className="text-[#bcbcbc] leading-relaxed">{cs.impact.body}</p>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="rounded-2xl border border-white/5 bg-card/80 backdrop-blur-md p-8 space-y-6">
                <h3 className="text-xl font-semibold text-foreground">{cs.responsibilities.heading}</h3>
                <p className="text-[#bcbcbc]">{cs.responsibilities.intro}</p>
                <ul className="space-y-3">
                  {cs.responsibilities.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-[#bcbcbc] leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider between case studies */}
              {cs.id !== caseStudies[caseStudies.length - 1].id && (
                <div className="border-t border-white/5" />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to build yours?</h2>
          <p className="text-lg text-[#bcbcbc] max-w-xl mx-auto">
            If you&apos;re an Agribusiness looking for a predictable Outbound pipeline, let&apos;s talk about what this looks like for your business.
          </p>
          <Link
            href="/#book-call"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-card/80 hover:border-primary/40 hover:bg-primary/5 transition-colors px-6 py-3 text-sm font-medium text-foreground"
          >
            Book a Free Strategy Call
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
