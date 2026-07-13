"use client";

import Image from "next/image";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
  width = 180,
}: {
  className?: string;
  variant?: "dark" | "light";
  width?: number;
}) {
  const aspect = company.logo.height / company.logo.width;
  const height = Math.round(width * aspect);

  const logo = (
    <Image
      src={company.logo.src}
      alt={company.logo.alt}
      width={width}
      height={height}
      className={cn("h-auto w-full object-contain", className)}
      priority
    />
  );

  if (variant === "light") {
    return (
      <div
        className="inline-flex items-center justify-center rounded-xl bg-white p-2 shadow-sm"
        style={{ maxWidth: width + 16 }}
      >
        {logo}
      </div>
    );
  }

  return <div style={{ maxWidth: width }}>{logo}</div>;
}

export function LogoFull({
  className,
  width = 220,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <Image
      src={company.logo.src}
      alt={company.logo.alt}
      width={width}
      height={(width * company.logo.height) / company.logo.width}
      className={cn("h-auto", className)}
      priority
    />
  );
}
