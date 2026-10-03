import { useState } from "react";
import {
  ArrowUpRight,
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
  { icon: Bot, title: "Intelligence & models", summary: "Choose and shape the intelligence for the task.", detail: "Model selection, prompt and context design, structured outputs, confidence thresholds, and evaluation against representative scenarios.", components: ["Model selection", "Context design", "Structured output", "Evaluation"] },
  { icon: Workflow, title: "Orchestration & workflows", summary: "Coordinate steps, conditions, retries, and exceptions.", detail: "Event-driven orchestration, state management, conditional routing, retries, observability, and controlled escalation when a step fails.", components: ["Events", "State", "Routing", "Retries"] },
  { icon: FileStack, title: "Data & knowledge", summary: "Make business information usable and traceable.", detail: "Data modelling, document extraction, retrieval, source context, validation, and permissions appropriate to the information being used.", components: ["Data models", "Retrieval", "Validation", "Permissions"] },
  { icon: Globe, title: "Integrations & APIs", summary: "Connect the tools the business already relies on.", detail: "API contracts, webhooks, authentication, rate-limit handling, synchronisation, and clear failure paths between services.", components: ["APIs", "Webhooks", "Auth", "Sync"] },
  { icon: MessageCircle, title: "Interfaces & operations", summary: "Give people a useful place to review and act.", detail: "Customer-facing experiences, internal workspaces, operational queues, status visibility, and practical handover into existing team routines.", components: ["Interfaces", "Queues", "Status", "Handover"] },
  { icon: UserCheck, title: "Evaluation & oversight", summary: "Keep the system measurable and people accountable.", detail: "Test cases, quality checks, audit trails, access boundaries, human approvals, and monitoring for changes in real-world performance.", components: ["Test cases", "Audit trail", "Approvals", "Monitoring"] },
] as const;

export function Capabilities() {
  const [selectedLayer, setSelectedLayer] = useState(0);
  const layer = CAPABILITIES[selectedLayer];
  return (
    <section id="automation" className="scroll-mt-20 border-y border-border bg-surface/10 technical-grid">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <SectionHeading eyebrow="Engineering capabilities" title="Explore the layers behind reliable delivery." intro="These layers describe the engineering disciplines behind delivery—not the kinds of products themselves. Select one to inspect the technical decisions and controls involved." />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="border-y border-border">
            {CAPABILITIES.map((item, index) => {
              const active = selectedLayer === index;
              const Icon = item.icon;
              return (
                <button key={item.title} type="button" onClick={() => setSelectedLayer(index)} role="tab"
                  aria-selected={active}
                  tabIndex={active ? 0 : -1}
                  className={"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary flex min-h-[72px] w-full items-center gap-4 border-b border-border px-4 py-4 text-left last:border-b-0 " + (active ? "bg-primary/5 text-foreground" : "text-muted-foreground hover:text-foreground")}>
                  <span className="font-mono text-[10px] text-primary">0{index + 1}</span>
                  <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="flex-1 text-sm font-medium">{item.title}</span>
                  <ArrowUpRight className={"h-4 w-4 shrink-0 " + (active ? "text-primary" : "opacity-40")} />
                </button>
              );
            })}
          </div>
          <article className="border border-border bg-background p-6 sm:p-9" aria-live="polite">
            <div className="flex items-start justify-between gap-4">
              <div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Technical layer / {String(selectedLayer + 1).padStart(2, "0")}</p><h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">{layer.title}</h3></div>
              <layer.icon className="h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
            </div>
            <p className="mt-5 text-base leading-7 text-foreground">{layer.summary}</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{layer.detail}</p>
            <div className="mt-8 border-t border-border pt-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Layer components</p>
              <div className="mt-4 flex flex-wrap gap-2">{layer.components.map((item) => <span key={item} className="border border-border px-3 py-2 font-mono text-[10px] text-muted-foreground">{item}</span>)}</div>
            </div>
            <a href="#contact" className="mt-8 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-primary hover:text-accent">View the technical layer <ArrowUpRight className="h-4 w-4" /></a>
          </article>
        </div>
      </div>
    </section>
  );
}

const JOURNEY = [
  { stage: "SIGNAL", body: "A meaningful event enters the operation.", purpose: "Notice what changed." },
  { stage: "UNDERSTAND", body: "Context is gathered and the intent is interpreted.", purpose: "Make the signal useful." },
  { stage: "DECIDE", body: "Business rules, model output, and confidence checks determine the next route.", purpose: "Choose a safe next step." },
  { stage: "ACT", body: "The appropriate task, update, message, or transaction is initiated.", purpose: "Move work forward." },
  { stage: "HANDOFF", body: "Exceptions and sensitive decisions reach the right person with context.", purpose: "Keep people in control." },
  { stage: "LEARN", body: "Results and exceptions inform evaluation and future improvements.", purpose: "Improve the next decision." },
] as const;

export function LeadJourney() {
  const [activeStep, setActiveStep] = useState(0);
  const step = JOURNEY[activeStep];
  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-20">
      <SectionHeading eyebrow="Operating pattern" title="A loop that learns from the work." intro="The operating model is reusable across use cases. Step through the loop to see the responsibility at each stage; the Learn stage feeds improvements back into understanding and decisions." />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative border-y border-border">
          {JOURNEY.map((item, index) => {
            const active = activeStep === index;
            return (
              <button key={item.stage} type="button" onClick={() => setActiveStep(index)} role="tab"
                aria-selected={active}
                tabIndex={active ? 0 : -1}
                className={"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary relative flex min-h-14 w-full items-center gap-4 border-b border-border px-3 py-3 text-left last:border-b-0 " + (active ? "bg-primary/5 text-foreground" : "text-muted-foreground hover:text-foreground")}>
                <span className="font-mono text-[10px] text-primary">0{index + 1}</span>
                <span className="flex-1 font-display text-base font-semibold tracking-wide">{item.stage}</span>
                {active ? <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" /> : null}
              </button>
            );
          })}
        </div>
        <div className="relative overflow-hidden border border-border bg-background p-6 sm:p-9" aria-live="polite">
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Operating loop / {String(activeStep + 1).padStart(2, "0")}</p>
            <Workflow className="h-5 w-5 text-primary" aria-hidden="true" />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-2" aria-label="Operating loop overview">
            {JOURNEY.map((item, index) => <span key={item.stage} className={"border px-2.5 py-2 font-mono text-[9px] uppercase tracking-[0.1em] " + (index === activeStep ? "border-primary/60 bg-primary/5 text-primary" : "border-border text-muted-foreground")}>{item.stage}</span>)}
          </div>
          <h3 className="mt-9 font-display text-3xl font-semibold">{step.stage}</h3>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">{step.body}</p>
          <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-6">{step.purpose}</p>
          {activeStep === 4 ? <p className="mt-5 text-xs leading-5 text-muted-foreground">Human judgment can change the route, approve an action, or return new context to the process.</p> : null}
          {activeStep === 5 ? <p className="mt-5 text-xs leading-5 text-muted-foreground">Learning loops back into Understand and Decide through evaluation, monitoring, and approved updates.</p> : null}
          <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
            <button type="button" onClick={() => setActiveStep((value) => (value + JOURNEY.length - 1) % JOURNEY.length)} className="min-h-10 px-3 text-sm text-muted-foreground hover:text-foreground">Previous</button>
            <button type="button" onClick={() => setActiveStep((value) => (value + 1) % JOURNEY.length)} className="inline-flex min-h-10 items-center gap-2 bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90">Step through the operating loop <ArrowUpRight className="h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

const WORKFLOW_EXAMPLES = [
  {
    title: "New website inquiry",
    icon: MessageCircle,
    steps: [
      { label: "Form received", body: "A prospective customer submits a request for a specific service.", note: "Example record: company, requested service, work email." },
      { label: "Lead brief", body: "The form fields are normalised and matched with the relevant service information.", note: "Output: one structured inquiry summary." },
      { label: "Priority check", body: "The request is compared with the team's qualification criteria and urgency rules.", note: "Output: a proposed priority, with uncertainty flagged." },
      { label: "Owner assigned", body: "A follow-up task is prepared for the appropriate sales owner.", note: "Output: a named next action with the captured details." },
      { label: "Review if needed", body: "Incomplete or ambiguous requests are held for a team member before outreach.", note: "Illustrative scenario; no live CRM or email is connected." },
    ],
  },
  {
    title: "Missed business call",
    icon: PhoneMissed,
    steps: [
      { label: "Call missed", body: "A call arrives outside staffed hours or while the team is occupied.", note: "Example record: caller ID, timestamp, available call metadata." },
      { label: "Callback record", body: "Available details are assembled into a callback entry without inventing the caller's intent.", note: "Output: a traceable callback request." },
      { label: "Service window", body: "The business's callback hours and urgency rules determine when the task should surface.", note: "Output: a due window and queue." },
      { label: "Acknowledgement", body: "If configured, the caller receives a short acknowledgement that sets a clear expectation.", note: "No promise of immediate response is made." },
      { label: "Team callback", body: "A staff member receives the number, time, and any captured context to return the call.", note: "Illustrative scenario; phone and CRM integrations are not live here." },
    ],
  },
  {
    title: "Customer support request",
    icon: Mail,
    steps: [
      { label: "Ticket opened", body: "A customer asks about an order, account, or service issue.", note: "Example record: request text, account reference, received time." },
      { label: "Evidence gathered", body: "The relevant account and approved help content are retrieved for this specific request.", note: "Output: a draft with its supporting context." },
      { label: "Policy check", body: "The draft is checked against support rules and any conditions requiring escalation.", note: "Output: reply-ready, needs-review, or restricted." },
      { label: "Queue selected", body: "A routine request can be prepared for response; an exception is assigned to the right queue.", note: "Output: a clear status and responsible team." },
      { label: "Resolution recorded", body: "The final response and resolution status can be recorded for later quality review.", note: "Illustrative scenario; this walkthrough does not send a response." },
    ],
  },
] as const;

export function WorkflowDemo() {
  const [selected, setSelected] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const example = WORKFLOW_EXAMPLES[selected];
  const steps = example.steps;
  const current = steps[stepIndex];

  function chooseExample(index: number) {
    setSelected(index);
    setStepIndex(0);
  }

  return (
    <section id="walkthrough" className="border-y border-border bg-surface/10">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary sm:text-[11px]">Interactive walkthrough</p>
            <h2 className="mt-4 font-display text-[2rem] font-bold leading-tight tracking-tight text-balance sm:text-4xl">Explore one business scenario, one step at a time.</h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">Choose a scenario, then step through how its information is handled. This is an illustrative walkthrough, not a live integration.</p>
            <div className="mt-8 flex flex-col gap-2">
              {WORKFLOW_EXAMPLES.map((item, index) => {
                const Icon = item.icon;
                const active = selected === index;
                return (
                  <button key={item.title} type="button" onClick={() => chooseExample(index)} aria-pressed={active}
                    className={"flex min-h-14 items-center gap-4 border px-4 py-3 text-left transition-colors " + (active ? "border-primary/60 bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground")}>
                    <Icon className={"h-4 w-4 shrink-0 " + (active ? "text-primary" : "")} />
                    <span className="flex-1 text-sm font-medium">{item.title}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="relative border border-border bg-background p-5 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
              <div><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">Scenario / {String(selected + 1).padStart(2, "0")}</p><h3 className="mt-2 font-display text-xl font-semibold">{example.title}</h3></div>
              <span className="font-mono text-xs text-muted-foreground">STEP {stepIndex + 1} / {steps.length}</span>
            </div>
            <div className="mt-6 flex gap-2" aria-label="Walkthrough progress">
              {steps.map((step, index) => <span key={step.label} className={"h-1.5 flex-1 " + (index <= stepIndex ? "bg-primary" : "bg-border")} />)}
            </div>
            <div className="mt-8 min-h-[220px]" aria-live="polite">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">0{stepIndex + 1} / {current.label}</p>
              <h4 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">{current.label}</h4>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">{current.body}</p>
              <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-6">{current.note}</p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
              <button type="button" onClick={() => setStepIndex(0)} className="min-h-10 px-3 text-sm text-muted-foreground transition-colors hover:text-foreground">Restart</button>
              <div className="flex gap-2">
                <button type="button" disabled={stepIndex === 0} onClick={() => setStepIndex((value) => Math.max(0, value - 1))} className="min-h-10 border border-border px-4 text-sm disabled:cursor-not-allowed disabled:opacity-40">Back</button>
                <button type="button" onClick={() => setStepIndex((value) => value === steps.length - 1 ? 0 : value + 1)} className="inline-flex min-h-10 items-center gap-2 bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90">{stepIndex === steps.length - 1 ? "Run again" : "Next step"} <ArrowUpRight className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Insights() {
  return (
    <section id="insights" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Insights"
              title="Clear thinking for systems that have to work."
              intro="Explore practical perspectives on workflow automation, AI product design, integration, and taking systems from prototype to production."
            />
          </div>
          <a
            href="/insights"
            className="inline-flex min-h-11 items-center gap-2 border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-foreground"
          >
            Explore insights <ArrowUpRight className="h-4 w-4" />
          </a>
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
  { phase: "DIAGNOSE", title: "Find the opportunity", body: "Map the business, customer journey, constraints, tools, decisions, and the highest-value bottleneck." },
  { phase: "DESIGN", title: "Architect the system", body: "Define the experience, intelligence layer, integrations, data flows, human handoffs, and success measures." },
  { phase: "DEPLOY", title: "Engineer & integrate", body: "Build the agents, applications, workflows, and integrations, then test edge cases before the system goes live." },
  { phase: "SCALE", title: "Measure & improve", body: "Monitor real operation, remove friction, improve reliability and adoption, and expand what creates measurable value." },
] as const;

export function Process() {
  return (
    <section id="process" className="scroll-mt-20 border-y border-border bg-surface/30">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <SectionHeading
          eyebrow="How we work"
          title="Diagnose. Design. Deploy. Scale."
          intro="A clear path from a messy business problem to a reliable AI system that keeps improving."
        />
        <div className="process-track mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, index) => (
            <article
              key={step.phase}
              className="process-phase flex min-h-[280px] flex-col bg-background p-6 sm:p-7"
              style={{ "--phase-delay": `${index * 140}ms` } as React.CSSProperties}
            >
              <div className="flex items-center justify-between border-b border-border pb-5">
                <span className="font-mono text-[10px] tracking-[0.2em] text-primary">0{index + 1}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">{step.phase}</span>
              </div>
              <h3 className="mt-8 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.body}</p>
            </article>
          ))}
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
  const [selectedTier, setSelectedTier] = useState(0);
  const detail = PACKAGE_DETAILS[selectedTier];

  return (
    <section id="packages" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="Pricing"
        title="Clear starting points. Scope built around the work."
        intro="Starting points are shown in PKR. International projects can be quoted in an applicable currency. Final scope is confirmed from the use case, integrations, delivery effort, and support required."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="border-y border-border" role="tablist" aria-label="Choose a pricing starting point">
          {PACKAGE_DETAILS.map((item, index) => (
            <button
              key={item.tier}
              type="button"
              role="tab"
              aria-selected={selectedTier === index}
              tabIndex={selectedTier === index ? 0 : -1}
              onClick={() => setSelectedTier(index)}
              className={"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary flex min-h-[88px] w-full items-center gap-4 border-b border-border px-4 py-4 text-left last:border-b-0 " + (selectedTier === index ? "bg-primary/5 text-foreground" : "text-muted-foreground hover:bg-surface/30 hover:text-foreground")}
            >
              <span className="font-mono text-[10px] text-primary">0{index + 1}</span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-lg font-semibold">{item.tier}</span>
                <span className="mt-1 block text-xs leading-5">{item.strapline}</span>
              </span>
              <ArrowUpRight className={"h-4 w-4 shrink-0 " + (selectedTier === index ? "text-primary" : "opacity-40")} />
            </button>
          ))}
        </div>

        <article className="border border-border bg-background p-6 sm:p-9" aria-live="polite">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Selected starting point / 0{selectedTier + 1}</p>
              <h3 className="mt-3 font-display text-3xl font-semibold">{detail.tier}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{detail.audience}</p>
            </div>
            <p className="font-display text-2xl font-semibold text-foreground">{detail.price}</p>
          </div>
          <div className="mt-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">Typical scope indicators</p>
            <dl className="mt-3 divide-y divide-border">
              {PACKAGE_ROWS.map((row) => {
                const value = row.values[selectedTier] ?? false;
                return (
                  <div key={row.feature} className="grid grid-cols-[minmax(0,1fr)_minmax(6rem,auto)] items-center gap-4 py-3">
                    <dt className="text-sm text-muted-foreground">{row.feature}</dt>
                    <dd className="text-right text-sm"><CellValue value={value} /></dd>
                  </div>
                );
              })}
            </dl>
          </div>
          <p className="mt-5 border-t border-border pt-4 text-xs leading-5 text-muted-foreground">Illustrative scope only. Final deliverables and support are confirmed during discovery.</p>
        </article>
      </div>

      <div className="mt-14">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">What shapes scope</p>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">The work determines the final build.</h3>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
            Request a quote <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PRICING_FACTORS.map((factor) => (
            <li key={factor} className="flex items-baseline gap-3 border-t border-border bg-background/40 px-5 py-4 text-sm">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--gradient-brand)" }} />
              {factor}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}