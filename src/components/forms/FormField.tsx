"use client";

import { cn } from "@/lib/utils";

export function FormField({
  id,
  label,
  error,
  children,
  required = false,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-kamao-earth">
        {label}
        {required && <span className="ml-1 text-kamao-copper">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function Input({
  className,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) {
  return (
    <input
      className={cn(
        "w-full rounded-sm border border-kamao-graphite/20 bg-white px-4 py-3 text-kamao-earth placeholder:text-kamao-graphite/40 focus:border-kamao-copper focus:outline-none focus:ring-1 focus:ring-kamao-copper",
        error && "border-red-500 focus:border-red-500 focus:ring-red-500",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  error,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }) {
  return (
    <textarea
      className={cn(
        "w-full rounded-sm border border-kamao-graphite/20 bg-white px-4 py-3 text-kamao-earth placeholder:text-kamao-graphite/40 focus:border-kamao-copper focus:outline-none focus:ring-1 focus:ring-kamao-copper",
        error && "border-red-500 focus:border-red-500 focus:ring-red-500",
        className,
      )}
      {...props}
    />
  );
}
