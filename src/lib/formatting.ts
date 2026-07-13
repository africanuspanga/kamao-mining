export function formatDate(dateString: string, lang: "en" | "fr" = "en"): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatPhoneHref(phone: string): string {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function formatEmailHref(email: string, subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${email}${query ? `?${query}` : ""}`;
}

export function getYear(): number {
  return new Date().getFullYear();
}
