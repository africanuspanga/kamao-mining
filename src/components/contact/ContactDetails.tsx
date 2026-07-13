"use client";

import { Mail, Phone } from "lucide-react";
import { useDictionary } from "@/lib/i18n";
import { company } from "@/content/company";
import { formatEmailHref, formatPhoneHref } from "@/lib/formatting";

export function ContactDetails() {
  const dict = useDictionary();

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-kamao-copper/10 text-kamao-copper">
          <Mail className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-kamao-earth">
            {dict.contact.details.general}
          </h3>
          <a
            href={formatEmailHref(company.email)}
            className="mt-1 text-kamao-graphite/80 hover:text-kamao-copper"
          >
            {company.email}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-kamao-copper/10 text-kamao-copper">
          <Phone className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-kamao-earth">
            {dict.contact.details.drc}
          </h3>
          <a
            href={formatPhoneHref(company.drcPhone)}
            className="mt-1 block text-kamao-graphite/80 hover:text-kamao-copper"
          >
            {company.drcPhone}
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-kamao-copper/10 text-kamao-copper">
          <Phone className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-heading text-lg font-bold text-kamao-earth">
            {dict.contact.details.regional}
          </h3>
          <a
            href={formatPhoneHref(company.regionalPhone)}
            className="mt-1 block text-kamao-graphite/80 hover:text-kamao-copper"
          >
            {company.regionalPhone}
          </a>
        </div>
      </div>

      <p className="rounded-2xl bg-kamao-sand p-4 text-sm text-kamao-graphite/70">
        {dict.contact.details.noAddress}
      </p>
    </div>
  );
}
