import { cn } from "@/lib/utils";
import Link from "next/link";

const variants = {
  primary:
    "bg-kamao-copper text-white hover:bg-kamao-copper/90 focus-visible:ring-kamao-copper",
  secondary:
    "bg-kamao-cobalt text-white hover:bg-kamao-cobalt/90 focus-visible:ring-kamao-cobalt",
  outline:
    "border-2 border-kamao-copper text-kamao-copper hover:bg-kamao-copper hover:text-white focus-visible:ring-kamao-copper",
  outlineWhite:
    "border-2 border-white text-white hover:bg-white hover:text-kamao-earth focus-visible:ring-white",
  ghost: "text-kamao-copper hover:text-kamao-copper/80 focus-visible:ring-kamao-copper",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  ...props
}: {
  children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
