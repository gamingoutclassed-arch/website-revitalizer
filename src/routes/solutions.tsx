import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "../components/marketing-page";

export const Route = createFileRoute("/solutions")({
  component: () => <MarketingPage page="solutions" />,
  head: () => ({
    meta: [
      { title: "Solutions | Alligentics" },
      { name: "description", content: "Alligentics solutions: AI systems, automation, integration, and practical implementation." },
    ],
  }),
});
