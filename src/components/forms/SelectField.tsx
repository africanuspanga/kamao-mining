"use client";

import { cn } from "@/lib/utils";

export function SelectField({
  id,
  label,
  error,
  children,
  required = false,
  ...props
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
} & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-kamao-earth">
        {label}
        {required && <span className="ml-1 text-kamao-copper">*</span>}
      </label>
      <select
        id={id}
        className={cn(
          "w-full rounded-sm border border-kamao-graphite/20 bg-white px-4 py-3 text-kamao-earth focus:border-kamao-copper focus:outline-none focus:ring-1 focus:ring-kamao-copper",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
        )}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
