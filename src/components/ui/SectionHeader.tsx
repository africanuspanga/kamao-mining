import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  heading,
  description,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-3 block text-sm font-semibold uppercase tracking-widest",
            dark ? "text-kamao-copper" : "text-kamao-cobalt",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-heading text-2xl font-bold md:text-section",
          dark ? "text-white" : "text-kamao-earth",
        )}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-kamao-mist/80" : "text-kamao-graphite/80",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
