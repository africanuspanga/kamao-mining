export type ContactFormData = {
  fullName: string;
  company: string;
  workEmail: string;
  phone: string;
  country: string;
  enquiryType: string;
  mineralOfInterest: string;
  subject: string;
  message: string;
  consent: boolean;
};

export type FormSubmitResult =
  | { success: true; message: string }
  | { success: false; message: string };

function getEndpoint(): string | null {
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;
  return endpoint && endpoint.trim().length > 0 ? endpoint.trim() : null;
}

export function isMailtoFallback(): boolean {
  return getEndpoint() === null;
}

export function buildMailtoLink(data: ContactFormData): string {
  const subject = encodeURIComponent(data.subject || `Enquiry from ${data.fullName}`);
  const body = encodeURIComponent(
    `Name: ${data.fullName}\n` +
      `Company: ${data.company || "N/A"}\n` +
      `Email: ${data.workEmail}\n` +
      `Phone: ${data.phone || "N/A"}\n` +
      `Country: ${data.country || "N/A"}\n` +
      `Enquiry type: ${data.enquiryType || "N/A"}\n` +
      `Mineral of interest: ${data.mineralOfInterest || "N/A"}\n\n` +
      `${data.message}`,
  );
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@kamaomining.com";
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

export async function submitContactForm(data: ContactFormData): Promise<FormSubmitResult> {
  const endpoint = getEndpoint();

  if (!endpoint) {
    return {
      success: false,
      message:
        "No online form endpoint is configured. Please use the email link to send your enquiry.",
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return {
        success: false,
        message: "Submission failed. Please try again or contact us directly by email.",
      };
    }

    return {
      success: true,
      message: "Thank you. Your enquiry has been sent.",
    };
  } catch {
    return {
      success: false,
      message: "Network error. Please try again or contact us directly by email.",
    };
  }
}
