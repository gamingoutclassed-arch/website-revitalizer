import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "../components/marketing-page";

export const Route = createFileRoute("/work")({
  component: () => <MarketingPage page="work" />,
  head: () => ({
    meta: [
      { title: "Work | Alligentics" },
      { name: "description", content: "Alligentics work: AI systems, automation, integration, and practical implementation." },
    ],
  }),
});
