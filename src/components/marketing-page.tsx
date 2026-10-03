import { ArrowUpRight } from "lucide-react";

export type MarketingPageKey = "capabilities" | "solutions" | "work" | "insights" | "about" | "contact";

const DATA: Record<MarketingPageKey, {
  eyebrow: string;
  title: string;
  intro: string;
  items: { title: string; body: string }[];
}> = {
  capabilities: {
    eyebrow: "Capabilities",
    title: "The intelligence underneath the system.",
    intro: "We connect business strategy, AI agents, automation, applications, data, and existing tools into systems designed for real operations.",
    items: [
      { title: "AI strategy & opportunity mapping", body: "Identify the workflows where AI can create practical value, then define the use case, constraints, risks, and measures of success." },
      { title: "Workflow automation & agents", body: "Coordinate repetitive tasks, customer conversations, classification, routing, and follow-ups with clear rules and human escalation." },
      { title: "Custom AI products & copilots", body: "Build focused AI interfaces and applications around the knowledge and actions people need to do their work." },
      { title: "Data, models & systems integration", body: "Connect APIs, business data, CRM, messaging, calendars, and internal tools into a dependable end-to-end workflow." },
    ],
  },
  solutions: {
    eyebrow: "Solutions",
    title: "AI systems organized around business outcomes.",
    intro: "We start with the operational constraint, then connect the intelligence, software, automation, data, and human handoffs required to solve it.",
    items: [
      { title: "Reduce operational bottlenecks", body: "Automate repetitive coordination, follow-ups, approvals, and information movement so teams spend more time on decisions." },
      { title: "Turn knowledge into an interface", body: "Make internal knowledge searchable, conversational, and actionable without forcing people through disconnected tools." },
      { title: "Automate decision workflows", body: "Use AI for classification, extraction, routing, scheduling, and other predictable decisions with human oversight where judgment matters." },
      { title: "Build differentiated AI products", body: "Design customer-facing AI experiences and internal applications around a real use case instead of adding AI for its own sake." },
    ],
  },
  work: {
    eyebrow: "Work",
    title: "Representative systems we build.",
    intro: "The examples below describe implementation patterns rather than invented client claims. Each system is adapted to the operation, tools, and governance requirements of the business.",
    items: [
      { title: "AI Outreach Infrastructure", body: "Lead data, enrichment, personalized outreach, inbox handling, AI classification, follow-up, and calendar or human handoff connected into one operating flow." },
      { title: "Social Content Engine", body: "Content strategy, AI generation, image creation, planning, and platform publishing connected into a repeatable content operation." },
      { title: "Customer Operations", body: "Website, WhatsApp, email, phone, CRM, scheduling, and human escalation connected around the customer journey." },
      { title: "Document Operations", body: "Documents and business information extracted, validated, stored, and routed to the next action with traceable handoffs." },
    ],
  },
  insights: {
    eyebrow: "Insights",
    title: "Practical thinking for AI systems that have to work.",
    intro: "A growing point of view on AI automation, product design, integration, adoption, and human oversight.",
    items: [
      { title: "Where AI automation actually creates ROI", body: "A framework for finding high-value work instead of automating tasks simply because they are technically possible." },
      { title: "Designing reliable internal copilots", body: "What makes an AI interface useful when the underlying knowledge, permissions, and workflows are complex." },
      { title: "Build versus buy", body: "How to decide when an existing capability is enough and when a differentiated workflow deserves a custom system." },
      { title: "From prototype to production", body: "The engineering, integration, evaluation, and governance work that turns a promising demo into a dependable system." },
    ],
  },
  about: {
    eyebrow: "About Alligentics",
    title: "Business understanding. Engineering depth. Growth focus.",
    intro: "Alligentics combines business thinking with technical implementation to build intelligent systems around the way an organization actually operates.",
    items: [
      { title: "Think", body: "Understand the business, find the real constraint, and map the system around it." },
      { title: "Build", body: "Engineer the intelligence, connect the tools, and deploy it into the workflow." },
      { title: "Compound", body: "Measure what happens, improve the system, and expand what creates lasting value." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Bring us the messy problem.",
    intro: "Tell us where work gets stuck, where the operation is fragmented, or where growth is being limited by manual processes.",
    items: [
      { title: "Email", body: "alligenticsai@gmail.com" },
      { title: "WhatsApp", body: "+92 329 247 4455" },
      { title: "Discovery", body: "Start with the business problem. We will help map the intelligent system inside it." },
    ],
  },
};

export function MarketingPage({ page }: { page: MarketingPageKey }) {
  const data = DATA[page];
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl"><div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"><a href="/" className="font-display text-lg font-semibold tracking-tight">Alligentics</a><nav className="hidden items-center gap-5 md:flex" aria-label="Primary navigation">{[["Capabilities","/capabilities"],["Solutions","/solutions"],["Work","/work"],["Insights","/insights"],["About","/about"]].map(([label,href]) => <a key={href} href={href} className="text-xs text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}</nav><a href="/contact" className="border border-border px-4 py-2.5 text-xs font-semibold transition-colors hover:border-primary">Talk to an AI strategist <ArrowUpRight className="ml-1 inline h-3.5 w-3.5" /></a></div></header>
      <section className="relative overflow-hidden border-b border-border px-5 pb-24 pt-28 sm:px-8 lg:pb-32 lg:pt-40">
        <div className="grid-veil absolute inset-0 opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">{data.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl font-display text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.98] tracking-tight">{data.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{data.intro}</p>
          <a href="/#contact" className="mt-9 inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
            Talk to an AI strategist <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
          {data.items.map((item, index) => (
            <article key={item.title} className="bg-background p-7 sm:p-10 lg:min-h-[260px]">
              <span className="font-mono text-[10px] tracking-[0.18em] text-primary">0{index + 1}</span>
              <h2 className="mt-8 font-display text-2xl font-semibold">{item.title}</h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <footer className="border-t border-border px-5 py-8 sm:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Alligentics · Think. Build. Compound.</span><div className="flex flex-wrap gap-4"><a href="/capabilities">Capabilities</a><a href="/solutions">Solutions</a><a href="/work">Work</a><a href="/insights">Insights</a><a href="/about">About</a><a href="/contact">Contact</a></div></div></footer>
    </main>
  );
}
