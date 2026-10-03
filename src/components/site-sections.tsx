import {
  ArrowUpRight,
  BadgeCheck,
  Bell,
  Bot,
  CalendarCheck,
  Check,
  FileStack,
  Globe,
  Mail,
  MessageCircle,
  Minus,
  PhoneCall,
  PhoneMissed,
  Star,
  UserCheck,
  Workflow,
} from "lucide-react";

function SectionHeading({
  eyebrow,
  title,
  intro,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary sm:text-[11px] sm:tracking-[0.22em]">{eyebrow}</p>
      <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.12] tracking-normal text-balance sm:text-[clamp(2rem,4vw,3.25rem)] sm:leading-[1.08] sm:tracking-tight">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground text-pretty sm:mt-5 sm:text-lg sm:leading-relaxed">{intro}</p>
      ) : null}
    </div>
  );
}

const CAPABILITIES = [
  {
    icon: Bot,
    title: "AI Agents",
    points: [
      "Context-aware assistants for customer and internal workflows",
      "Multi-step actions across connected business systems",
      "Human handoff when a decision or exception needs a person",
      "Conversation, classification, and task execution",
    ],
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    points: [
      "Event-driven workflows across business tools",
      "Lead, follow-up, notification, and approval flows",
      "API integrations that move data between systems",
      "Automation designed around the existing operation",
    ],
  },
  {
    icon: FileStack,
    title: "Data & AI Applications",
    points: [
      "Purpose-built applications around business data",
      "Document and information processing",
      "LLM-powered interfaces and decision support",
      "Structured data flowing into the next action",
    ],
  },
  {
    icon: Globe,
    title: "Digital & Growth Systems",
    points: [
      "Customer-facing web experiences connected to operations",
      "Lead capture and qualification infrastructure",
      "Follow-up and conversion workflows",
      "Measurement and reporting for continuous improvement",
    ],
  },
];

export function Capabilities() {
  return (
    <section id="automation" className="scroll-mt-20 border-y border-border bg-surface/10 technical-grid">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <SectionHeading
          eyebrow="Engineering capabilities"
          title="The intelligence underneath the system"
          intro="We work across agents, applications, workflows, integrations, data, and customer-facing systems — selecting the technology that fits the problem."
        />
        <div className="capability-matrix mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {CAPABILITIES.map((cap, index) => (
            <article
              key={cap.title}
              className="capability-node group bg-background p-7 sm:p-9 md:min-h-[280px]"
              style={{ "--cap-delay": `${index * 80}ms` } as React.CSSProperties}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-[10px] tracking-[0.18em] text-primary">0{index + 1}</span>
                <cap.icon className="h-5 w-5 text-primary transition-colors group-hover:text-electric" />
              </div>
              <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight">{cap.title}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {cap.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const JOURNEY = [
  { stage: "SIGNAL", body: "A customer, lead, document, message, or event enters the system." },
  { stage: "UNDERSTAND", body: "AI reads the context, extracts the useful information, and identifies intent." },
  { stage: "DECIDE", body: "Rules, models, business logic, and confidence checks determine the next action." },
  { stage: "ACT", body: "The system updates records, sends messages, creates tasks, calls APIs, or schedules work." },
  { stage: "HANDOFF", body: "When judgment matters, the right person receives the context and takes over." },
];

export function LeadJourney() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28">
      <SectionHeading
        eyebrow="System pattern"
        title={
          <>
            <span className="text-electric">01</span> Signal <span className="text-muted-foreground">/</span> <span className="text-electric">02</span> Understand <span className="text-muted-foreground">/</span> <span className="text-electric">03</span> Decide <span className="text-muted-foreground">/</span> <span className="text-electric">04</span> Act <span className="text-muted-foreground">/</span> <span className="text-electric">05</span> Handoff
          </>
        }
        intro="This is the operating pattern behind the systems we build. The tools can change; the architecture stays focused on moving useful information to the right action."
      />

      <div className="journey-map relative mt-12 overflow-hidden border-y border-border bg-background">
        <div className="pointer-events-none absolute left-0 right-0 top-[72px] hidden h-px bg-border md:block" aria-hidden="true">
          <span className="journey-signal" />
        </div>

        <div className="relative grid md:grid-cols-5">
          {JOURNEY.map((step, index) => (
            <article
              key={step.stage}
              className="journey-step group relative border-b border-border p-6 last:border-b-0 sm:p-7 md:min-h-[300px] md:border-b-0 md:border-r md:last:border-r-0"
              style={{ "--journey-delay": `${index * 120}ms` } as React.CSSProperties}
            >
              <div className="flex items-center justify-between">
                <span className="journey-step__index font-mono text-[10px] tracking-[0.18em] text-primary">
                  0{index + 1}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                  {index === 0 ? "Input" : index === 4 ? "Outcome" : "Layer"}
                </span>
              </div>

              <span className="journey-step__dot" aria-hidden="true" />

              <div className="mt-12">
                <h3 className="font-display text-xl font-semibold tracking-[0.04em] transition-transform duration-300 group-hover:translate-x-1">
                  {step.stage}
                </h3>
                <p className="mt-3 max-w-[18rem] text-sm leading-6 text-muted-foreground">
                  {step.body}
                </p>
              </div>

            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-5 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-muted-foreground">
          The infrastructure underneath the pattern changes with the business. The flow stays focused on one thing: getting useful information to the right action.
        </p>
        <div className="flex flex-wrap gap-2 sm:max-w-xl sm:justify-end">
          {["LLMs", "APIs", "CRM", "Database", "Calendar", "Email", "Messaging", "Human"].map((item) => (
            <span
              key={item}
              className="border border-border bg-surface/20 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-foreground transition-colors duration-300 hover:border-primary/50 hover:text-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const BRIEF = [
  { label: "New leads", value: "42" },
  { label: "Qualified leads", value: "18" },
  { label: "Quotations sent", value: "11" },
  { label: "Appointments booked", value: "7" },
  { label: "Follow-ups required", value: "13" },
  { label: "Unanswered inquiries", value: "3" },
];

const RECOVERY = [
  { icon: PhoneMissed, title: "Missed-lead recovery", body: "A missed call triggers an instant message, an AI conversation, qualification, then a nudge to your sales team." },
  { icon: Star, title: "Feedback automation", body: "Happy customers are asked for a review; unhappy ones reach management before they reach the internet." },
  { icon: CalendarCheck, title: "Scheduling", body: "AI checks availability, books appointments, sends reminders, and handles rescheduling for your team." },
  { icon: FileStack, title: "Document processing", body: "Invoices, quotations, forms and CVs read, validated, stored and passed to the next step automatically." },
];

export function Insights() {
  return (
    <section className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Reporting & insights"
              title="Your business, summarised every morning"
               intro="Instead of checking five systems, you get one clear brief with the items that need your attention."
            />
            <div className="mt-10 space-y-4">
              {RECOVERY.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-display text-base font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="animate-rise border-y border-border bg-surface/10 p-6 sm:p-8 md:p-10">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3">
                <Bell className="h-4 w-4 text-accent" />
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Illustrative daily business brief
                </p>
              </div>
              <dl className="mt-8 grid gap-px border-y border-border bg-border sm:grid-cols-2">
                {BRIEF.map((row) => (
                   <div key={row.label} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 bg-background p-5 sm:p-6">
                    <dt className="text-sm text-muted-foreground">{row.label}</dt>
                    <dd className="font-display text-2xl font-semibold text-foreground">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Delivered through WhatsApp, email or Slack, based on how your team works.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const HUMAN = {
  ai: [
    "Repetitive questions",
    "Data collection",
    "Lead qualification",
    "Routine communication",
    "Follow-ups and classification",
    "Scheduling and information processing",
  ],
  people: [
    "Important decisions",
    "Complex customer situations",
    "Sensitive cases",
    "Negotiations",
    "Approvals and exceptions",
  ],
};

export function Manifesto() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/10">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 md:py-28">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
          The principle
        </p>
        <p className="mt-6 font-display text-[clamp(1.7rem,3.6vw,3rem)] font-medium leading-[1.2] text-balance">
          We find the work that no longer needs to be manual, then build a connected system that handles it{" "}
          <span className="text-gradient">intelligently.</span>
        </p>
        <p className="mt-9 font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          Alligentics
        </p>
      </div>
    </section>
  );
}

export function HumanLoop() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="Human in the loop"
        title={
          <>
            AI acts on the workflow.{" "}
            <span className="text-gradient">Humans stay responsible for judgment.</span>
          </>
        }
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <article className="animate-rise border-y border-border bg-surface/10 p-8">
          <div className="flex items-center gap-3">
            <Bot className="h-5 w-5 text-primary" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              AI can handle
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-sm">
            {HUMAN.ai.map((item) => (
              <li key={item} className="flex items-baseline gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="animate-rise border-t border-border p-8 [animation-delay:0.1s]">
          <div className="flex items-center gap-3">
            <UserCheck className="h-5 w-5 text-muted-foreground" />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Your people stay responsible for
            </p>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            {HUMAN.people.map((item) => (
              <li key={item} className="flex items-baseline gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

const PROCESS = [
  {
    phase: "THINK",
    title: "Understand",
    body: "Map the business, customer journey, constraints, tools, decisions, and the real bottleneck.",
  },
  {
    phase: "THINK",
    title: "Architect",
    body: "Define the signals, intelligence layer, systems, integrations, data, and human handoffs before building.",
  },
  {
    phase: "BUILD",
    title: "Engineer & integrate",
    body: "Build the agents, applications, workflows, and integrations — then connect them to the tools the team already uses.",
  },
  {
    phase: "BUILD",
    title: "Test & deploy",
    body: "Test normal paths, edge cases, permissions, handoffs, and failure modes before the system goes live.",
  },
  {
    phase: "COMPOUND",
    title: "Measure & learn",
    body: "Watch the system in operation and use real interactions and outcomes to identify friction and improvement opportunities.",
  },
  {
    phase: "COMPOUND",
    title: "Improve & expand",
    body: "Strengthen what works, remove friction, and extend the system into the next valuable workflow.",
  },
];

const CLIENT_INPUTS = [
  "Business information",
  "Website / integration access",
  "WhatsApp Business resources",
  "Meta Business resources",
  "Email authorisation",
  "CRM access",
  "Calendar access",
  "Product & service information",
  "FAQs and pricing information",
  "Existing workflows and documents",
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <SectionHeading
          eyebrow="How we work"
          title="Think. Build. Compound."
        />
        <div className="process-track mt-12 grid gap-10 lg:grid-cols-3">
          {(["THINK", "BUILD", "COMPOUND"] as const).map((phase, phaseIndex) => (
            <div key={phase} className="process-phase border-t border-border" style={{ "--phase-delay": `${phaseIndex * 180}ms` } as React.CSSProperties}>
              <div className="flex items-center justify-between py-5">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{phase}</h3>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {PROCESS.filter((step) => step.phase === phase).length.toString().padStart(2, "0")} moves
                </span>
              </div>
              <div className="divide-y divide-border border-y border-border">
                {PROCESS.filter((step) => step.phase === phase).map((step, index) => (
                  <article key={step.title} className="py-6">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-[10px] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h4 className="font-display text-lg font-semibold">{step.title}</h4>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.body}</p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              What we need from you
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We handle the technical implementation. You authorise the business resources the
              selected automation needs.
            </p>
            <p className="mt-6 flex items-start gap-3 border-t border-border bg-background/40 p-5 text-sm">
              <BadgeCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-accent" />
               You remain the owner of your accounts and data at all times.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {CLIENT_INPUTS.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-3 border-t border-border bg-background/40 px-5 py-4 text-sm"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type Cell = true | false | string;

const PACKAGE_ROWS: { feature: string; values: [Cell, Cell, Cell] }[] = [
  { feature: "Getting started", values: ["Quick workflow review", "Full review + plan", "Every department"] },
  { feature: "Customer chats", values: ["1 channel", "WhatsApp + email", "All channels + phone"] },
  { feature: "Lead handling", values: ["Capture", "Qualify + website & ads", "Surge + documents"] },
  { feature: "Social media", values: ["1 platform", "Instagram + Facebook", "All platforms connected"] },
  { feature: "Tool connections", values: ["1 tool", "CRM + extra tools", "CRM + unlimited tools"] },
  { feature: "Reports", values: ["Monthly summary", "Live dashboard", "Advanced dashboard"] },
  { feature: "Human handoff", values: [true, true, true] },
];

const PACKAGE_DETAILS = [
  { tier: "Snap", strapline: "Get your first workflow moving.", audience: "For solo founders and small teams automating one process for the first time.", price: "From PKR 15,000" },
  { tier: "Surge", strapline: "Connect the whole funnel.", audience: "For growing teams whose leads and workflows do not yet connect.", price: "From PKR 30,000" },
  { tier: "Apex", strapline: "Run the operation on AI.", audience: "For businesses ready to automate connected work across departments.", price: "Custom quote" },
] as const;

const PRICING_FACTORS = [
  "Complexity of the workflow",
  "Number of integrations",
  "AI requirements",
  "Number of automation workflows",
  "Development time",
  "Third-party platform and API costs",
  "Maintenance requirements",
  "Business value created",
];

function CellValue({ value }: { value: Cell }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-accent" />;
  if (value === false) return <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" />;
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

export function Packages() {
  return (
    <section id="packages" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="Engagement"
        title="Start with the system. Expand what works."
        intro="We scope each build around the business problem, workflow complexity, integrations, and ongoing support required. Pricing is discussed after the system is understood."
      />

      <div className="mt-10 grid gap-4 md:hidden">
        {PACKAGE_DETAILS.map((detail, tierIndex) => (
          <article key={detail.tier} className="border-y border-border bg-surface/10 p-5">
            <h3 className="font-display text-xl font-semibold">{detail.tier}</h3>
            <p className="mt-1 text-sm font-medium text-primary">{detail.strapline}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{detail.audience}</p>
            <dl className="mt-5 divide-y divide-border">
              {PACKAGE_ROWS.map((row) => {
                const value = row.values[tierIndex] ?? false;
                return (
                  <div key={`${detail.tier}-${row.feature}`} className="grid grid-cols-[minmax(0,1fr)_minmax(5rem,auto)] items-center gap-4 py-3">
                    <dt className="min-w-0 text-sm leading-5 text-muted-foreground">{row.feature}</dt>
                    <dd className="shrink-0 text-right"><CellValue value={value} /></dd>
                  </div>
                );
              })}
            </dl>
            <p className="mt-5 border-t border-border pt-4 font-display text-xl font-semibold text-foreground">{detail.price}</p>
            <p className="mt-1 text-xs text-muted-foreground">Final scope follows discovery and architecture.</p>
          </article>
        ))}
      </div>

      <div className="mt-14 hidden overflow-x-auto border-y border-border md:block">
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <thead>
            <tr className="bg-surface/60">
              <th className="px-6 py-5 text-left font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Feature
              </th>
              {PACKAGE_DETAILS.map((detail) => (
                <th
                  key={detail.tier}
                  className="px-6 py-5 text-center font-display text-base font-semibold"
                >
                  {detail.tier}
                  <span className="mt-1 block font-body text-xs font-normal text-muted-foreground">{detail.strapline}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PACKAGE_ROWS.map((row) => (
              <tr key={row.feature} className="border-t border-border">
                <td className="px-6 py-4 text-left">{row.feature}</td>
                {row.values.map((value, i) => (
                  <td key={`${row.feature}-${i}`} className="px-6 py-4 text-center">
                    <CellValue value={value} />
                  </td>
                ))}
              </tr>
            ))}
            <tr className="border-t border-border bg-surface/40">
              <td className="px-6 py-5 text-left font-semibold">Pricing</td>
               {PACKAGE_DETAILS.map((detail) => (
                 <td key={`price-${detail.tier}`} className="px-6 py-5 text-center text-xs text-muted-foreground">
                   <span className="block font-semibold text-foreground">{detail.price}</span>
                   Discovery · Build · Ongoing
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h3 className="font-display text-2xl font-semibold tracking-tight">Pricing philosophy</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            We do not force a complex business into an arbitrary tier. Scope follows the workflow, integrations, intelligence requirements, and level of support.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary hover:text-accent"
          >
            Request a quote <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
          {PRICING_FACTORS.map((factor) => (
            <li
              key={factor}
              className="flex items-baseline gap-3 border-t border-border bg-background/40 px-5 py-4 text-sm"
            >
              <span
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: "var(--gradient-brand)" }}
              />
              {factor}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
