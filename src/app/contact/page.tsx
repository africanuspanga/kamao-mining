import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact | KAMAO Mining",
  description:
    "Contact Kamao Mining for mineral supply, project partnerships, technical collaboration, investment, supplier opportunities, careers or media enquiries.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <LanguageProvider lang="en">
      <ContactContent />
    </LanguageProvider>
  );
}
