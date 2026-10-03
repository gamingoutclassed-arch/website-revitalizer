import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Boxes,
  Building2,
  Cpu,
  Database,
  Eye,
  FileStack,
  Gauge,
  Globe,
  Headphones,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MessageSquare,
  Network,
  Phone,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";

import { Button } from "../components/ui/button";
import { HeroSystem } from "../components/hero-system";
import {
  Capabilities,
  HumanLoop,
  LeadJourney,
  Process,
} from "../components/site-sections";

const TITLE = "Alligentics | Intelligence Engineered for Business";
const DESCRIPTION =
  "Alligentics engineers intelligent systems around how businesses actually operate — connecting AI, workflows, applications, data, and growth infrastructure.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alligentics.com/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://alligentics.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Alligentics",
          description: DESCRIPTION,
          url: "https://alligentics.com/",
          email: "alligenticsai@gmail.com",
          telephone: "+923292474455",
        }),
      },
    ],
  }),
});

const DESKTOP_QUERY = "(min-width: 1024px)";

// `page` = which desktop page the link opens
const NAV = [
  { href: "#services", label: "Systems", page: 1 },
  { href: "#automation", label: "Capabilities", page: 2 },
  { href: "#process", label: "Process", page: 3 },
  { href: "#team", label: "About", page: 5 },
];

function Page({
  index,
  active,
  className = "",
  children,
}: {
  index: number;
  active: number;
  className?: string;
  children: React.ReactNode;
}) {
  // Desktop: only the active page shows. Mobile: every page shows (lg:hidden is inactive).
  return (
    <div
      data-page={index}
      className={`${active === index ? "" : "lg:hidden"} ${className}`}
    >
      {children}
    </div>
  );
}

function Index() {
  const [page, setPage] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

  const isDesktop = () => typeof window !== "undefined" && window.matchMedia(DESKTOP_QUERY).matches;

  function openPage(index: number, targetId?: string) {
    setPage(index);
    requestAnimationFrame(() => {
      const main = mainRef.current;
      if (!main) return;
      const target = targetId ? document.getElementById(targetId) : null;
      const top = target
        ? target.getBoundingClientRect().top -
          main.getBoundingClientRect().top +
          main.scrollTop
        : 0;
      main.scrollTo({ top: Math.max(0, top), behavior: "auto" });
    });
  }

  function goHome() {
    if (isDesktop()) openPage(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Handles every in-page link on desktop. On mobile it does nothing,
  // so normal anchor scrolling still works.
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.defaultPrevented || e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (!isDesktop()) return;

    const anchor = (e.target as HTMLElement).closest("a");
    if (!anchor) return;

    // Nav links: open the page at its top
    const goPage = anchor.getAttribute("data-go-page");
    if (goPage !== null) {
      e.preventDefault();
      openPage(Number(goPage));
      return;
    }

    // Any other "#section" link: open the page containing it, scroll to it
    const href = anchor.getAttribute("href");
    if (!href || !href.startsWith("#") || href.length < 2) return;
    const id = href.slice(1);
    const pageEl = document.getElementById(id)?.closest("[data-page]");
    if (!pageEl) return;
    e.preventDefault();
    openPage(Number(pageEl.getAttribute("data-page")), id);
  }

  return (
    <div
      className="min-h-screen overflow-x-clip bg-background font-body text-foreground"
      onClick={handleClick}
    >
      <Header activePage={page} onHome={goHome} />

      {/* Desktop: one page at a time. Mobile/tablet: normal continuous scroll. */}
      <main
        ref={mainRef}
        className="lg:h-[calc(100vh-82px)] lg:overflow-y-auto"
      >
        {/* Page 1 — Introduction */}
        <Page index={0} active={page} className="lg:min-h-[calc(100vh-82px)]">
          <Hero />
          <Positioning />
          <Marquee />
        </Page>

        {/* Page 2 — Problem + solution */}
        <Page index={1} active={page}>
          <Problem />
          <SelectedSystems />
          <Services />
        </Page>

        {/* Page 3 — What we automate */}
        <Page index={2} active={page}>
          <Capabilities />
          <LeadJourney />
        </Page>

        {/* Page 4 — How it works */}
        <Page index={3} active={page}>
          <Process />
          <HumanLoop />
        </Page>

        {/* Page 5 — Value, pricing + trust */}
        <Page index={4} active={page}>
          <Engagement />
          <WhyUs />
        </Page>

        {/* Page 6 — About + contact */}
        <Page index={5} active={page}>
          <Team />
          <Contact />
          <Footer onHome={goHome} />
        </Page>
      </main>

      <AlligenticsChat />
      <WhatsAppButton />
    </div>
  );
}

function Header({
  activePage,
  onHome,
}: {
  activePage: number;
  onHome: () => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto grid h-[72px] w-full max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:h-[82px] sm:gap-6 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-10 lg:px-10 xl:px-12">

        {/* Logo + Brand */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onHome();
          }}
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          aria-label="Alligentics home"
        >
          <img
            src="/alligentics-logo.png"
            alt=""
            className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
          />

          <span className="truncate font-display text-lg font-semibold tracking-normal text-foreground sm:text-xl">
            Alligentics
          </span>
        </a>

        {/* Navigation */}
        <nav className="hidden w-full max-w-[680px] items-center justify-between justify-self-center lg:flex" aria-label="Primary navigation">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} data-go-page={item.page}
              aria-current={activePage === item.page ? "page" : undefined}
              className={activePage === item.page ? "whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.12em] text-foreground transition-colors duration-200" : "whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors duration-200 hover:text-foreground"}>
              {item.label}
            </a>
          ))}
        </nav>

        <details className="relative ml-auto lg:hidden">
          <summary className="flex h-10 cursor-pointer list-none items-center gap-2 border border-border px-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground [&::-webkit-details-marker]:hidden">
            Menu <span aria-hidden="true">+</span>
          </summary>
          <div className="absolute right-0 top-12 z-50 w-56 border border-border bg-background p-2 shadow-2xl">
            {NAV.map((item) => (
              <a key={item.href} href={item.href} className="block border-b border-border px-3 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground last:border-0 hover:text-foreground">{item.label}</a>
            ))}
          </div>
        </details>
        {/* CTA */}
        <Button asChild className="group h-10 shrink-0 rounded-md px-3 text-xs font-semibold shadow-lg sm:h-12 sm:px-6 sm:text-sm">
          <a href="#contact" aria-label="Book a free call">
            <span className="sm:hidden">Book a call</span>
            <span className="hidden sm:inline">Book a free call</span>
            <ArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Button>

      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-stage relative overflow-hidden">
      <div className="grid-veil absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[520px] w-[520px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--electric) 22%, transparent), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-6 md:pb-28 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-16">
        <div>
          <span className="animate-rise inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-electric sm:text-[11px]">
            <span className="h-px w-8 bg-electric" />
            THINK · BUILD · COMPOUND
          </span>

          <h1 className="animate-rise mt-7 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-balance sm:text-[clamp(3rem,6vw,5.25rem)] [animation-delay:0.08s]">
            We engineer intelligence{" "}
            <span className="text-electric">into business.</span>
          </h1>

          <p className="animate-rise mt-7 max-w-[50ch] text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 [animation-delay:0.16s]">
            We design and engineer intelligent systems around how your business
            actually operates — connecting customer signals, AI, workflows,
            applications, data, and the people who run the business.
          </p>

          <div className="animate-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 [animation-delay:0.24s]">
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-electric px-7 py-3.5 text-sm font-semibold text-electric-foreground shadow-[var(--shadow-electric)] transition-all duration-300 hover:brightness-110"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-electric/60 hover:bg-electric/5"
            >
              See what we build
            </a>
          </div>

          <dl className="animate-rise mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-6 [animation-delay:0.32s]">
            {[
              { value: "Strategy", label: "Business-first" },
              { value: "Engineering", label: "Built to run" },
              { value: "Growth", label: "Measured outcomes" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-base font-semibold text-foreground sm:text-lg">
                  {stat.value}
                </dt>
                <dd className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-rise [animation-delay:0.2s]">
          <HeroSystem />
        </div>
      </div>
    </section>
  );
}

const CHANNELS = [
  "WhatsApp",
  "Website chat",
  "Email",
  "Phone",
  "CRM",
  "Google Workspace",
  "Slack",
  "Sheets & databases",
  "Invoicing",
  "Calendars",
];

function Positioning() {
  const stages = [
    { number: "01", title: "THINK", body: "Understand the business, find the real constraint, and map the system around it.", label: "Business" },
    { number: "02", title: "BUILD", body: "Engineer the intelligence, connect the tools, and deploy it into the workflow.", label: "Engineering" },
    { number: "03", title: "COMPOUND", body: "Measure what happens, learn from the system, improve it, and expand what works.", label: "Growth" },
  ];

  return (
    <section id="philosophy" className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">How we think</p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Intelligence is not a feature. It is an operating layer.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">We start with the business, not the tool. Then we engineer the systems that make the operation faster, clearer, and easier to improve.</p>
        </div>
        <div className="mt-10 grid border-y border-border md:grid-cols-3">
          {stages.map((stage) => (
            <article key={stage.title} className="group border-b border-border py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.18em] text-primary">{stage.number}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">{stage.label}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold tracking-[0.04em] transition-colors group-hover:text-electric">{stage.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{stage.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
function Marquee() {
  return (
    <section
      className="border-y border-border bg-surface/40 py-5"
      aria-label="Systems we connect"
    >
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
          {[...CHANNELS, ...CHANNELS].map((channel, index) => (
            <span
              key={`${channel}-${index}`}
              className="flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
            >
              <Zap className="h-3.5 w-3.5 text-primary" />
              {channel}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

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
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary sm:text-[11px] sm:tracking-[0.22em]">
        {eyebrow}
      </p>

      <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.12] tracking-normal text-balance sm:text-[clamp(2rem,4vw,3.25rem)] sm:leading-[1.08] sm:tracking-tight">
        {title}
      </h2>

      {intro ? (
        <p className="mt-4 text-base leading-7 text-muted-foreground text-pretty sm:mt-5 sm:text-lg sm:leading-relaxed">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

const PROBLEMS = [
  { icon: Globe, label: "Website" },
  { icon: MessageSquare, label: "WhatsApp" },
  { icon: Mail, label: "Email" },
  { icon: Phone, label: "Phone" },
  { icon: Instagram, label: "Social" },
  { icon: Users, label: "CRM" },
  { icon: Database, label: "Spreadsheets" },
  { icon: Gauge, label: "Calendars" },
  { icon: Settings2, label: "Internal tools" },
];

function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
      <SectionHeading
        eyebrow="The bottleneck"
        title="Software isn't the problem. Fragmentation is."
        intro="Website, WhatsApp, email, phone, CRM, spreadsheets, calendars and internal tools all create signals. When those systems do not connect, every gap becomes work for someone."
      />
      <div className="relative mt-12 overflow-hidden border-y border-border py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9">
          {PROBLEMS.map((item) => (
            <div key={item.label} className="group border-b border-r border-border px-4 py-6 lg:border-b-0">
              <div className="flex items-center gap-3 lg:block">
                <item.icon className="h-4 w-4 text-primary transition-colors group-hover:text-electric" />
                <span className="mt-0 lg:mt-4 block font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex items-center gap-4">
        <span className="h-px w-12 bg-electric" />
        <p className="font-display text-xl font-medium sm:text-2xl">We engineer the layer that connects them.</p>
      </div>
    </section>
  );
}

const SERVICES = [
  { number: "01", icon: Bot, title: "AI Agents", body: "Systems that understand context, communicate naturally, and take action across real business workflows.", wide: true },
  { number: "02", icon: Workflow, title: "Intelligent Automation", body: "Multi-step workflows connecting tools, data, and people without unnecessary manual handoffs." },
  { number: "03", icon: Cpu, title: "AI Applications", body: "Purpose-built software around the processes, decisions, and information unique to your business." },
  { number: "04", icon: Globe, title: "Digital Systems", body: "High-performance customer-facing experiences connected to the operation behind them." },
  { number: "05", icon: TrendingUp, title: "Growth Systems", body: "Infrastructure for capturing, qualifying, following up with, and converting demand.", wide: true },
];

function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 overflow-hidden border-y border-border bg-surface/30"
    >
      <div
        className="glow-orb absolute -right-20 top-10 h-80 w-80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <SectionHeading
          eyebrow="What we build"
          title="Systems built around how your business works"
          intro="We combine intelligence, automation, software, and growth infrastructure into systems that fit the operation — not the other way around."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <article
              key={service.number}
              className={`group relative overflow-hidden border border-border bg-background/40 p-7 transition-colors duration-300 hover:border-primary/40 sm:p-8 ${
                service.wide ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center border border-primary/30 text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <service.icon className="h-5 w-5" />
                </span>

                <span className="font-mono text-xs text-muted-foreground">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>

              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-muted-foreground">
                {service.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const SELECTED_SYSTEMS = [
  {
    number: "01",
    title: "AI Outreach Infrastructure",
    description: "A connected outreach system that moves from lead data to personalised outreach, inbox handling, AI classification, follow-up, and calendar handoff.",
    architecture: ["Lead data", "Enrichment", "Outreach", "Inbox", "AI classification", "Calendar / human handoff"],
    tools: ["Python", "LLM", "Mailgun", "Make", "Calendly"],
  },
  {
    number: "02",
    title: "Social Content Engine",
    description: "A content operation that turns strategy into publishable social media — combining content planning, AI generation, image creation, and platform publishing.",
    architecture: ["Content strategy", "Generation", "Image creation", "Content calendar", "Publishing"],
    tools: ["Python / n8n", "Gemini", "Zernio", "Instagram"],
  },
];

function SelectedSystems() {
  return (
    <section id="systems" className="border-y border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28">
        <SectionHeading
          eyebrow="Selected systems"
          title="We build the machine behind the workflow."
          intro="These are examples of the kinds of connected systems we engineer. The architecture matters more than any single tool inside it."
        />
        <div className="mt-12 space-y-5">
          {SELECTED_SYSTEMS.map((system) => (
            <article key={system.number} className="group relative overflow-hidden border border-border bg-surface/20 p-6 transition-colors duration-300 hover:border-primary/40 sm:p-8 md:p-10">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-primary/70 to-transparent opacity-70" />
              <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                <div>
                  <div className="flex items-center justify-between border-b border-border pb-5">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-primary">{system.number}</span>
                    <Network className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-electric" />
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-semibold tracking-tight sm:text-3xl">{system.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">{system.description}</p>
                  <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">Built with · {system.tools.join(" · ")}</p>
                </div>
                <div className="border-l border-border pl-6 sm:pl-8">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-primary">System flow</p>
                  <div className="mt-4 flex flex-wrap items-center gap-y-3">
                    {system.architecture.map((item, index) => (
                      <div key={item} className="flex items-center">
                        <span className="border border-border bg-background px-3 py-2 font-mono text-[9px] uppercase tracking-[0.08em] text-foreground transition-colors group-hover:border-primary/30">{item}</span>
                        {index < system.architecture.length - 1 && <span className="px-2 text-primary/70">→</span>}
                      </div>
                    ))}
                  </div>
                  <div className="mt-7 flex items-center gap-3">
                    <span className="h-px flex-1 bg-border" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">architecture over tools</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  {
    icon: Building2,
    title: "Business",
    body: "We start with the operation, constraints, customer journey, and decisions that matter.",
  },
  {
    icon: Cpu,
    title: "Engineering",
    body: "We turn that understanding into connected software, automation, AI, integrations, and data flows.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    body: "We monitor what the system changes, improve what works, and expand the parts that create leverage.",
  },
];

function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28">
      <SectionHeading
        eyebrow="Why Alligentics"
        title={
          <>
            Business understanding.{" "}
            <span className="text-gradient">Engineering depth. Growth focus.</span>
          </>
        }
        intro="The value is not an isolated chatbot or workflow. It is a system that fits the way the business runs and gets better as it operates."
      />
      <div className="mt-12 grid border-y border-border md:grid-cols-3">
        {REASONS.map((reason, index) => (
          <article key={reason.title} className="border-b border-border py-7 md:border-b-0 md:border-r md:px-8 md:last:border-r-0 sm:py-9">
            <span className="font-mono text-[10px] tracking-[0.18em] text-primary">0{index + 1}</span>
            <reason.icon className="mt-8 h-5 w-5 text-accent" />
            <h3 className="mt-5 font-display text-xl font-semibold">{reason.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{reason.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Engagement() {
  const items = [
    "Business problem and workflow mapping",
    "System architecture and technical plan",
    "AI, automation, software and integrations",
    "Testing, deployment and handoff",
    "Ongoing optimisation where the system creates value",
  ];

  return (
    <section id="engagement" className="border-y border-border bg-surface/20">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Engagement"
            title="Start with the system. Expand what works."
            intro="Every build is scoped around the business problem, workflow complexity, integrations and level of support required."
          />
          <div className="border-t border-border">
            {items.map((item, index) => (
              <div key={item} className="flex items-start gap-4 border-b border-border py-5">
                <span className="font-mono text-[10px] text-primary">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            We discuss scope and pricing after understanding the system — not by forcing the business into a preset tier.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-primary hover:text-accent">
            Discuss a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

const TEAM = [
  {
    name: "Omar Bin Aziz",
    role: "Co-founder & CEO",
    initials: "OA",
    body: "Leads overall business strategy, operations, and business development.",
  },
  {
    name: "Murtaza Majid",
    role: "Co-founder & CTO",
    initials: "MM",
    body: "Leads automation architecture, AI integrations, and the technical build.",
  },
  {
    name: "Muhammad Hassan",
    role: "Co-founder & CRO",
    initials: "MH",
    body: "Leads sales, client outreach, and business development.",
  },
];

function Team() {
  return (
    <section
      id="team"
      className="scroll-mt-20 border-y border-border bg-surface/30"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <SectionHeading
          eyebrow="Founding team"
          title="Business. Engineering. Growth."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {TEAM.map((member, index) => (
            <article
              key={member.name}
              className="animate-rise border-t border-border p-7 text-left transition-colors hover:border-electric/60 sm:p-8 md:border-r md:border-t-0 md:last:border-r-0"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span
                className="flex h-12 w-12 items-center justify-center border border-electric/40 font-display text-sm font-semibold text-electric"
                style={{ background: "var(--gradient-brand)" }}
              >
                {member.initials}
              </span>

              <h3 className="mt-6 font-display text-lg font-semibold">
                {member.name}
              </h3>

              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {member.role}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {member.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "alligenticsai@gmail.com",
    href: "mailto:alligenticsai@gmail.com",
  },
  {
    icon: Phone,
    label: "+92 329 247 4455",
    href: "tel:+923292474455",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/alligentics?stkn=MzJtZ2Q4cWJ1NzN4",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/alligentics-ai/posts/?feedView=all",
  },
];

function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden">
      <div
        className="glow-orb absolute -bottom-20 right-0 h-96 w-96"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-32">
        <div className="relative grid gap-10 border-y border-border bg-surface/10 p-6 sm:p-8 md:p-14 lg:grid-cols-12 technical-grid">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              Start with the system
            </p>

            <h2 className="mt-4 font-display text-[2rem] font-bold leading-[1.12] tracking-normal text-balance sm:text-[clamp(2rem,4vw,3.25rem)] sm:leading-[1.08] sm:tracking-tight">
              Tell us how your business works today.
            </h2>

            <p className="mt-4 max-w-[52ch] text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-relaxed">
              Tell us where the operation is fragmented, where work gets stuck, or where growth is being limited by manual processes. We will map the system around the problem.
            </p>

            <a
              href="mailto:alligenticsai@gmail.com?subject=Discovery%20session%20with%20Alligentics"
              className="mt-9 inline-flex items-center gap-2 border border-primary/50 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-electric"
              style={{ background: "var(--gradient-brand)" }}
            >
              Start the conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="flex flex-col gap-3 lg:col-span-5">
            {CONTACT_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="group grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-y border-border px-2 py-4 transition-colors hover:border-electric/50 hover:bg-electric/5 sm:px-3"
                >
                  <span className="flex min-w-0 items-center gap-3 text-sm">
                    <link.icon className="h-4.5 w-4.5 shrink-0 text-primary" />
                    <span className="min-w-0 break-all">{link.label}</span>
                  </span>

                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}

            <li>
              <a
                href="https://alligentics.com/"
                className="group grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-4 transition-colors hover:bg-surface sm:px-5"
              >
                <span className="flex min-w-0 items-center gap-3 text-sm">
                  <Globe className="h-4.5 w-4.5 shrink-0 text-primary" />

                  <span className="min-w-0 break-all">
                    https://alligentics.com
                  </span>
                </span>

                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const WHATSAPP_NUMBER = "923292474455";
const WHATSAPP_MESSAGE =
  "Hi Alligentics, I'd like to know more about your automation services.";

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 017.021 2.91 9.825 9.825 0 012.9 7.026c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.055 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.689 1.448h.005c6.558 0 11.893-5.335 11.896-11.893a11.821 11.821 0 00-3.488-8.413z" />
    </svg>
  );
}

function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Alligentics on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function AlligenticsChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the Alligentics assistant. Ask me about our AI automation services, workflows, integrations, or discovery sessions.",
    },
  ]);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const updatedMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: text },
    ];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) throw new Error("Chat request failed");

      const data = (await response.json()) as { reply?: string };
      const reply = data.reply?.trim();
      if (!reply) throw new Error("Empty chat response");

      setMessages([
        ...updatedMessages,
        { role: "assistant", content: reply },
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content:
            "I can't answer that right now. You can continue directly with the Alligentics team on WhatsApp.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {open ? (
        <div className="fixed bottom-24 left-4 right-4 z-50 overflow-hidden rounded-2xl border border-border bg-background/95 shadow-2xl backdrop-blur-xl sm:left-auto sm:right-24 sm:w-[390px]">
          <div className="flex items-center justify-between border-b border-border bg-surface/60 px-5 py-4">
            <div className="min-w-0">
              <p className="font-display text-base font-semibold text-foreground">
                Ask Alligentics
              </p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                AI assistant
              </p>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close Alligentics assistant"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div
            className="h-[min(390px,52vh)] space-y-3 overflow-y-auto p-4"
            aria-live="polite"
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto rounded-br-md bg-primary text-primary-foreground"
                    : "mr-auto rounded-bl-md border border-border bg-surface text-foreground"
                }`}
              >
                {message.content}
              </div>
            ))}

            {loading ? (
              <div className="mr-auto max-w-[86%] rounded-2xl rounded-bl-md border border-border bg-surface px-4 py-3 text-sm text-muted-foreground">
                Thinking...
              </div>
            ) : null}
          </div>

          <div className="border-t border-border bg-surface/30 p-3">
            <div className="flex items-end gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    void sendMessage();
                  }
                }}
                placeholder="Ask about Alligentics..."
                aria-label="Message Alligentics assistant"
                className="min-h-11 min-w-0 flex-1 rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
              />

              <button
                type="button"
                onClick={() => void sendMessage()}
                disabled={loading || !input.trim()}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Send message"
              >
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-lg py-1.5 text-xs font-medium text-primary transition-colors hover:text-accent"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Continue on WhatsApp
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? "Close Alligentics assistant" : "Open Alligentics assistant"}
        className="fixed bottom-5 right-[5.25rem] z-50 inline-flex h-14 items-center justify-center gap-2 rounded-full border border-border bg-background/95 px-4 text-sm font-semibold text-foreground shadow-xl backdrop-blur-xl transition-transform duration-200 hover:scale-[1.03] sm:bottom-6 sm:right-24 sm:px-5"
      >
        {open ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5 text-primary" />}
        <span className="hidden sm:inline">
          {open ? "Close" : "Ask Alligentics"}
        </span>
      </button>
    </>
  );
}

function Footer({ onHome }: { onHome: () => void }) {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-10 xl:px-12">

        {/* Logo + Brand */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onHome();
          }}
          className="flex shrink-0 items-center gap-3 justify-self-start"
          aria-label="Alligentics home"
        >
          <img
            src="/alligentics-logo.png"
            alt=""
            loading="lazy"
            className="h-11 w-11 shrink-0 object-contain"
          />

          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            Alligentics
          </span>
        </a>

        {/* Footer Navigation */}
        <nav
          className="flex w-full max-w-[760px] flex-wrap items-center justify-between gap-5 justify-self-center text-sm text-muted-foreground"
          aria-label="Footer navigation"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-go-page={item.page}
              className="whitespace-nowrap transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="whitespace-nowrap transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        {/* Copyright */}
        <p className="justify-self-start whitespace-nowrap font-mono text-xs text-muted-foreground md:justify-self-end">
          © {new Date().getFullYear()} Alligentics
        </p>

      </div>
    </footer>
  );
}
