import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "../components/marketing-page";

export const Route = createFileRoute("/capabilities")({
  component: () => <MarketingPage page="capabilities" />,
  head: () => ({
    meta: [
      { title: "AI Capabilities | Alligentics" },
      { name: "description", content: "Explore Alligentics capabilities in AI strategy, workflow automation, AI agents, custom AI applications, and systems integration." },
      { property: "og:title", content: "AI Capabilities | Alligentics" },
      { property: "og:description", content: "AI strategy, workflow automation, agents, applications, and integration engineered for business." },
    ],
    links: [{ rel: "canonical", href: "https://alligentics.com/capabilities" }],
  }),
});
