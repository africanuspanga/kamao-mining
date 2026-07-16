"use client";

import Image from "next/image";
import { company } from "@/content/company";

export function WhatsAppButton() {
  const phone = company.whatsappPhone.replace(/\D/g, "");
  const href = `https://wa.me/${phone}?text=${encodeURIComponent("Hello KAMAO Mining, I would like to learn more about your minerals and services.")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with us on WhatsApp at ${company.whatsappPhone}`}
      className="fixed bottom-5 right-5 z-50 h-14 w-14 overflow-hidden rounded-full shadow-xl shadow-black/25 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 max-sm:bottom-3 max-sm:right-3"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        fill
        className="object-cover"
        sizes="56px"
      />
    </a>
  );
}
