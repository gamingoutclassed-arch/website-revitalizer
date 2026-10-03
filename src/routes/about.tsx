import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "../components/marketing-page";

export const Route = createFileRoute("/about")({
  component: () => <MarketingPage page="about" />,
  head: () => ({
    meta: [
      { title: "About | Alligentics" },
      { name: "description", content: "Alligentics about: AI systems, automation, integration, and practical implementation." },
    ],
  }),
});
