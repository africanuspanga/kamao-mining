import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8 xl:px-12",
        wide ? "max-w-[1440px]" : "max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
