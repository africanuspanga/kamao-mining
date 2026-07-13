"use client";

import Image from "next/image";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative h-10 w-10 overflow-hidden rounded-2xl">
        <Image
          src={company.favicon}
          alt=""
          fill
          className="object-contain"
          sizes="40px"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-heading text-lg font-bold leading-none tracking-tight",
            variant === "dark" ? "text-kamao-earth" : "text-white",
          )}
        >
          KAMAO
        </span>
        <span
          className={cn(
            "text-[10px] font-medium uppercase tracking-[0.14em]",
            variant === "dark" ? "text-kamao-copper" : "text-kamao-sand",
          )}
        >
          Mining Company Limited
        </span>
      </div>
    </div>
  );
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
