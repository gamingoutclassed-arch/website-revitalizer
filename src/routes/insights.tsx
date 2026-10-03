import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "../components/marketing-page";

export const Route = createFileRoute("/insights")({
  component: () => <MarketingPage page="insights" />,
  head: () => ({
    meta: [
      { title: "Insights | Alligentics" },
      { name: "description", content: "Alligentics insights: AI systems, automation, integration, and practical implementation." },
    ],
  }),
});
