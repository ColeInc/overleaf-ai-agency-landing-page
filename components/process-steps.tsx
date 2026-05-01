import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Accounts & Infrastructure",
      description:
        "We get all your accounts live. Domains, sending inboxes, Apollo, Instantly, and anything else the system needs. Everything is set up in your name so you own the infrastructure. I walk you through how it all connects. This session is mostly admin, but it's the foundation everything else is built on.",
      points: [
        "Domains, inboxes, Apollo, Instantly — all live and in your name.",
        "N8N workflows for automation. Completely setup and hosted.",
        "DNS, warm-up, and deliverability configured correctly from day one.",
        "Full walkthrough so you know what's been built and why.",
      ],
    },
    {
      number: "02",
      title: "Discovery Sessions",
      description:
        "Once accounts are live, I run a short series of discovery sessions before writing a single word of email copy. We define your ideal customer, the core problems they face, the solution you provide, and any past client wins or case studies we can reference to build credibility. The better I understand your business, the sharper every email will be.",
      points: [
        "We define your ideal customer profile: titles, company types, size, geography, and buying signals.",
        "We map the core problems your target buyers face.",
        "We clarify how your solution addresses those problems and what the outcome looks like.",
        "We identify past client wins, results, or case studies that can be referenced in the copy to build trust.",
      ],
    },
    {
      number: "03",
      title: "Build, Review & Launch",
      description:
        "With everything from the discovery sessions, we go away and build the full system. Lead lists sourced and verified. Email copy written and sequenced. Everything loaded into Instantly and your CRM. We review together, work through any changes until you're happy, then we start sending. From that point, the system runs — replies handled, demos booked, optimizations made every week.",
      points: [
        "Verified lead lists, written sequences, everything loaded and ready to review.",
        "We work together, and only go ahead once you're satisfied.",
        "We launch. Replies managed, demos booked, system optimised every week.",
        "Your only involvement after launch: monthly update calls to monitor progress.",
      ],
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step, index) => (
        <Card key={index} className="h-full border-white/5 transition-all hover:border-primary/50 hover:shadow-glow">
          <CardHeader>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">{step.number}</span>
            <CardTitle className="text-foreground">{step.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription className="text-sm text-muted-foreground leading-relaxed">
              {step.description}
            </CardDescription>
            <ul className="space-y-2">
              {step.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                  <span className="text-xs text-muted-foreground leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
