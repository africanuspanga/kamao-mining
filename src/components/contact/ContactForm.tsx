"use client";

import { useState } from "react";
import { FormField, Input, Textarea } from "@/components/forms/FormField";
import { SelectField } from "@/components/forms/SelectField";
import { Button } from "@/components/ui/Button";
import { useDictionary, useLanguage } from "@/lib/i18n";
import {
  ContactFormData,
  isMailtoFallback,
  buildMailtoLink,
  submitContactForm,
} from "@/lib/form-adapter";

export function ContactForm() {
  const lang = useLanguage();
  const dict = useDictionary();
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    company: "",
    workEmail: "",
    phone: "",
    country: "",
    enquiryType: "",
    mineralOfInterest: "",
    subject: "",
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const enquiryTypes = Object.entries(dict.form.enquiryTypes) as [
    keyof typeof dict.form.enquiryTypes,
    string,
  ][];

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) newErrors.fullName = dict.form.required;
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = dict.form.required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = dict.form.invalidEmail;
    }
    if (!formData.subject.trim()) newErrors.subject = dict.form.required;
    if (!formData.message.trim()) newErrors.message = dict.form.required;
    if (!formData.consent) newErrors.consent = dict.form.required;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (isMailtoFallback()) {
      window.location.href = buildMailtoLink(formData);
      return;
    }

    setStatus("submitting");
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
      setStatusMessage(dict.form.success);
      setFormData({
        fullName: "",
        company: "",
        workEmail: "",
        phone: "",
        country: "",
        enquiryType: "",
        mineralOfInterest: "",
        subject: "",
        message: "",
        consent: false,
      });
    } else {
      setStatus("error");
      setStatusMessage(result.message);
    }
  };

  const mailtoFallback = isMailtoFallback();

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {mailtoFallback && (
        <p className="rounded-2xl bg-kamao-sand p-4 text-sm text-kamao-graphite/80">
          {dict.form.mailtoFallback}
        </p>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="fullName" label={dict.form.fullName} error={errors.fullName} required>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            autoComplete="name"
          />
        </FormField>

        <FormField id="company" label={dict.form.company} error={errors.company}>
          <Input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
            autoComplete="organization"
          />
        </FormField>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="workEmail" label={dict.form.workEmail} error={errors.workEmail} required>
          <Input
            id="workEmail"
            name="workEmail"
            type="email"
            value={formData.workEmail}
            onChange={handleChange}
            error={errors.workEmail}
            autoComplete="email"
          />
        </FormField>

        <FormField id="phone" label={dict.form.phone} error={errors.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            autoComplete="tel"
          />
        </FormField>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FormField id="country" label={dict.form.country} error={errors.country}>
          <Input
            id="country"
            name="country"
            type="text"
            value={formData.country}
            onChange={handleChange}
            error={errors.country}
            autoComplete="country-name"
          />
        </FormField>

        <SelectField
          id="enquiryType"
          label={dict.form.enquiryType}
          name="enquiryType"
          value={formData.enquiryType}
          onChange={handleChange}
          error={errors.enquiryType}
        >
          <option value="">{lang === "fr" ? "Sélectionner" : "Select"}</option>
          {enquiryTypes.map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </SelectField>
      </div>

      <FormField id="mineralOfInterest" label={dict.form.mineralOfInterest} error={errors.mineralOfInterest}>
        <Input
          id="mineralOfInterest"
          name="mineralOfInterest"
          type="text"
          value={formData.mineralOfInterest}
          onChange={handleChange}
          error={errors.mineralOfInterest}
        />
      </FormField>

      <FormField id="subject" label={dict.form.subject} error={errors.subject} required>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
        />
      </FormField>

      <FormField id="message" label={dict.form.message} error={errors.message} required>
        <Textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />
      </FormField>

      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 h-5 w-5 rounded border-kamao-graphite/30 text-kamao-copper focus:ring-kamao-copper"
            aria-describedby={errors.consent ? "consent-error" : undefined}
          />
          <span className="text-sm text-kamao-graphite/80">{dict.form.consent}</span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Honeypot field for spam protection */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value=""
          onChange={() => {}}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting"
          ? dict.actions.submitting
          : mailtoFallback
            ? dict.actions.openEmailClient
            : dict.actions.sendMessage}
      </Button>

      {status === "success" && (
        <p className="rounded-2xl bg-green-50 p-4 text-green-800" role="status">
          {statusMessage}
        </p>
      )}
      {status === "error" && (
        <p className="rounded-2xl bg-red-50 p-4 text-red-800" role="alert">
          {statusMessage}
        </p>
      )}
    </form>
  );
}
