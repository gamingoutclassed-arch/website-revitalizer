import { createFileRoute } from "@tanstack/react-router";
import { MarketingPage } from "../components/marketing-page";

export const Route = createFileRoute("/contact")({
  component: () => <MarketingPage page="contact" />,
  head: () => ({
    meta: [
      { title: "Contact | Alligentics" },
      { name: "description", content: "Alligentics contact: AI systems, automation, integration, and practical implementation." },
    ],
  }),
});
