import { createFileRoute } from "@tanstack/react-router";

function CapabilitiesPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-24 text-foreground sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">Capabilities</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold tracking-tight sm:text-7xl">The intelligence underneath the system.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">AI agents, workflow automation, custom AI applications, and systems integration built around how the business actually operates.</p>
        <a href="/" className="mt-10 inline-flex border border-border px-5 py-3 text-sm font-semibold hover:border-primary">Back to Alligentics</a>
      </div>
    </main>
  );
}

export const Route = createFileRoute("/capabilities")({
  component: CapabilitiesPage,
  head: () => ({
    meta: [
      { title: "Capabilities | Alligentics" },
      { name: "description", content: "AI agents, workflow automation, custom AI applications, and systems integration from Alligentics." },
    ],
  }),
});
