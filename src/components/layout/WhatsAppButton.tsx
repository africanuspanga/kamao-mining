"use client";

import Image from "next/image";
import { company } from "@/content/company";

export function WhatsAppButton() {
  const phone = company.drcPhone.replace(/\D/g, "");
  const href = `https://wa.me/${phone}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/20 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={28}
        height={28}
        className="h-7 w-7 object-contain"
      />
    </a>
  );
}
