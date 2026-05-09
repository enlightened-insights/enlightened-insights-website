"use client";


import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/cn";
import FormField from "@/components/ui/FormField";
import Button from "@/components/ui/Button";
import {
  contactSchema,
  type ContactFormData,
  SERVICE_OPTIONS,
  CHALLENGE_PROMPTS,
} from "@/types/contact";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const selectedService = watch("service");

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
      window.dataLayer?.push({ event: "contact_form_submit" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send message. Please try again."
      );
    }
  };

  return (
    <section id="contact" className="py-32 bg-surface-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-surface-lowest p-6 sm:p-10 md:p-20 rounded-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-20 relative z-10">
            {/* Left column — info */}
            <div>
              <h2 className="text-5xl font-extrabold tracking-tighter mb-8">
                Book A Consultation
              </h2>
              <p className="text-lg text-on-surface-muted mb-12 max-w-md">
                Ready to become a master of your digital data? Fill out the form
                and we will reach out for a discovery conversation.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <span className="text-on-surface">jeremy@enlightenedinsights.org</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <span className="text-on-surface">Toronto, Canada</span>
                </div>
              </div>
            </div>

            {/* Right column — form */}
            <div>
              {status === "success" ? (
                <div className="rounded-lg bg-surface-container p-10 text-center h-full flex flex-col items-center justify-center">
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
                    Thanks for reaching out. We&apos;ve sent a confirmation to your email and will be in touch shortly.
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
                  className="space-y-6"
                >
                  <FormField
                    label="Name"
                    placeholder="Your Name"
                    error={errors.name?.message}
                    {...register("name")}
                  />
                  <FormField
                    label="Email"
                    type="email"
                    placeholder="email@company.com"
                    error={errors.email?.message}
                    {...register("email")}
                  />
                  <FormField
                    label="Company"
                    placeholder="Your Company (Optional)"
                    {...register("company")}
                  />

                  {/* Service selector */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      What Do You Need Help With?
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {SERVICE_OPTIONS.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() =>
                            setValue("service", selectedService === opt.value ? undefined : opt.value, { shouldValidate: true })
                          }
                          className={cn(
                            "px-3 py-2.5 text-xs font-semibold rounded transition-colors border-b-2 text-center",
                            selectedService === opt.value
                              ? "bg-primary/10 border-primary text-primary"
                              : "bg-surface-highest border-outline-variant text-on-surface-muted hover:border-primary/50 hover:text-on-surface"
                          )}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    {errors.service && (
                      <p className="text-xs text-red-400">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Dynamic challenge field */}
                  <FormField
                    as="textarea"
                    label="What problem can we help you solve?"
                    placeholder={
                      selectedService
                        ? CHALLENGE_PROMPTS[selectedService]
                        : "Tell us about what you're looking to achieve."
                    }
                    rows={4}
                    error={errors.challenge?.message}
                    {...register("challenge")}
                  />

                  {status === "error" && (
                    <div className="rounded bg-surface-high px-4 py-3 text-sm text-red-400">
                      {errorMessage}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    loading={status === "loading"}
                    className="w-full justify-center py-5"
                  >
                    Send Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
