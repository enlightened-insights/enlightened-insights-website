"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import { contactSchema, type ContactFormData } from "@/types/contact";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message. Please try again."
      );
    }
  };

  return (
    <SectionWrapper id="contact" surface="base">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-4">
            Work With Us
          </p>
          <h2
            className="text-4xl font-extrabold text-on-surface"
            style={{ letterSpacing: "-0.02em" }}
          >
            Book a strategy call
          </h2>
          <p className="mt-4 text-on-surface-muted text-lg">
            Tell us about your project and we&apos;ll get back to you within one
            business day.
          </p>
        </div>

        {status === "success" ? (
          <div className="rounded bg-surface-container p-10 text-center">
            <div
              className="w-12 h-12 rounded flex items-center justify-center mx-auto mb-5"
              style={{ background: "linear-gradient(135deg, #76d5de, #00818a)" }}
            >
              <svg className="w-6 h-6 text-on-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-on-surface mb-2">Message sent!</h3>
            <p className="text-on-surface-muted text-sm">
              Thanks for reaching out. We&apos;ve sent a confirmation to your email and will be in
              touch shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm text-primary hover:text-on-surface transition-colors underline underline-offset-4"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="bg-surface-container rounded p-8 flex flex-col gap-8"
          >
            <FormField
              label="Full Name"
              placeholder="Jane Smith"
              error={errors.name?.message}
              {...register("name")}
            />
            <FormField
              label="Email Address"
              type="email"
              placeholder="jane@company.com"
              error={errors.email?.message}
              {...register("email")}
            />
            <FormField
              as="textarea"
              label="Message"
              placeholder="Tell us about your project or challenge..."
              rows={5}
              error={errors.message?.message}
              {...register("message")}
            />

            {status === "error" && (
              <div className="rounded bg-surface-high px-4 py-3 text-sm text-red-400">
                {errorMessage}
              </div>
            )}

            <div className="flex justify-end">
              <Button
                type="submit"
                size="lg"
                loading={status === "loading"}
              >
                Send Message
              </Button>
            </div>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
}
