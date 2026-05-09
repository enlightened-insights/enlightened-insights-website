import { z } from "zod";

export const SERVICE_OPTIONS = [
  { value: "ai-automation", label: "AI & Automation" },
  { value: "marketing", label: "Marketing Analytics" },
] as const;

export type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];

export const CHALLENGE_PROMPTS: Record<ServiceValue, string> = {
  "ai-automation": "Tell us about the process or workflow you'd like to automate.",
  "marketing": "Tell us about your current marketing challenge or objective.",
};

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  service: z.enum(["ai-automation", "marketing"]).optional(),
  challenge: z.string().min(10, "Please describe your challenge (at least 10 characters)"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
