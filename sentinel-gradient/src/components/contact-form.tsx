"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

type ContactFormProps = {
  location: string;
  submitLabel?: string;
  subject?: string;
  buttonVariant?: "primary" | "light";
};

type FormStatus = {
  type: "idle" | "error" | "success";
  message: string;
};

const recipientEmail = "bhavya@sentinelgradient.com";

export function ContactForm({
  location,
  submitLabel = "Submit Inquiry",
  subject = "Sentinel Gradient Collaboration Inquiry",
  buttonVariant = "primary",
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const organization = String(formData.get("organization") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus({
        type: "error",
        message: "Please provide your name, email, and message before submitting.",
      });
      return;
    }

    const body = [
      `Name: ${name}`,
      `Organization: ${organization || "Not provided"}`,
      `Email: ${email}`,
      `Source: ${location}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.reset();
    setStatus({
      type: "success",
      message: "Your email client has opened with the inquiry details. You can also reach us directly at bhavya@sentinelgradient.com.",
    });
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label className="space-y-2 text-sm font-semibold text-off-white">
          <span>Name</span>
          <input className="form-field" name="name" type="text" autoComplete="name" required />
        </label>
        <label className="space-y-2 text-sm font-semibold text-off-white">
          <span>Email</span>
          <input className="form-field" name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <label className="block space-y-2 text-sm font-semibold text-off-white">
        <span>Organization</span>
        <input className="form-field" name="organization" type="text" autoComplete="organization" />
      </label>
      <label className="block space-y-2 text-sm font-semibold text-off-white">
        <span>Message</span>
        <textarea className="form-field form-textarea" name="message" required />
      </label>
      {status.type !== "idle" ? (
        <p
          className={status.type === "success" ? "text-sm text-gray-azure" : "text-sm text-off-white"}
          role={status.type === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status.message}
        </p>
      ) : null}
      <Button type="submit" variant={buttonVariant} eventName="contact_form_submit" eventParams={{ location }}>
        {submitLabel}
      </Button>
    </form>
  );
}
