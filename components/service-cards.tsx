export default function ServiceCards() {
  const services = [
    {
      phase: "Phase 1",
      title: "Discovery & Strategy",
      description:
        "We start with a structured discovery call. We map your target audience, understand the specific pain points your buyers have, and get clear on the outcomes that matter. The goal: leave with enough context to design a cold email campaign that's actually built for your business, not templated from someone else's.",
      points: [
        "We review your current outbound process. What's been tried, what's worked, what hasn't.",
        "We map out your target audience. Company types, company sizes, job titles, and locations you intend to target.",
        "What's the problem your product solves, and how does your buyer describe it? That language shapes every email we write.",
        "What makes a demo qualified for you? We define this upfront so the system is calibrated to your standard.",
      ],
    },
    {
      phase: "Phase 2",
      title: "Build & Launch",
      description:
        "Once we have everything from the discovery session, we go away and build it. Domains, inboxes, warm-up, lead lists, email copy, sequences — the complete outbound system, set up and running without you touching a single thing. Qualified demos land on your calendar. You just show up.",
      points: [
        "Sending infrastructure built from scratch: domains purchased, inboxes configured, warm-up sequences run.",
        "Lead lists built around your exact ICP — titles, company size, geography, buying signals.",
        "Email copy written to match how your buyers actually think and talk — not agency templates.",
        "Sequences deployed, replies managed, demos booked to your calendar. Fully hands off.",
      ],
    },
  ]

  return (
    <div className="grid gap-12 md:grid-cols-2 md:gap-8">
      {services.map((service, index) => (
        <div key={index} className="rounded-2xl border border-white/5 bg-card/80 backdrop-blur-md p-8 shadow-sm space-y-6">
          {/* Phase label */}
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            {service.phase}
          </span>

          {/* Title */}
          <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>

          {/* Short description */}
          <p className="text-lg text-[#bcbcbc] leading-tight">{service.description}</p>

          {/* Bullet points */}
          <ul className="space-y-3 pt-2">
            {service.points.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-start gap-3 leading-tight">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                <span className="text-muted-foreground text-[#bcbcbc]">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
