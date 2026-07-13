import type { Metadata } from "next";
import { MineralsContent } from "@/components/pages/MineralsContent";
import { LanguageProvider } from "@/lib/i18n";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Minerals | KAMAO Mining",
  description:
    "Explore Kamao Mining's mineral focus: cobalt, copper, coltan, tantalum, gold, diamonds, tin, tungsten and lithium from the DRC.",
  path: "/minerals/",
});

export default function MineralsPage() {
  return (
    <LanguageProvider lang="en">
      <MineralsContent />
    </LanguageProvider>
  );
}
