import { cn } from "@/lib/cn";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseProps {
  label: string;
  error?: string;
  className?: string;
}

type InputProps = BaseProps &
  InputHTMLAttributes<HTMLInputElement> & { as?: "input" };

type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

type FormFieldProps = InputProps | TextareaProps;

// Architectural accent line — 2px bottom bar on focus, no full border
const inputBase =
  "w-full bg-surface-highest px-4 pt-3 pb-2.5 text-sm text-on-surface placeholder:text-on-surface-muted focus:outline-none transition-colors";

const borderBase =
  "border-0 border-b-2 border-outline-variant focus:border-primary";

export default function FormField(props: FormFieldProps) {
  const { label, error, className, as = "input", ...rest } = props;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label className="text-xs font-bold uppercase tracking-widest text-primary">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          className={cn(
            inputBase,
            borderBase,
            "resize-none",
            error && "border-red-500"
          )}
        />
      ) : (
        <input
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          className={cn(inputBase, borderBase, error && "border-red-500")}
        />
      )}
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
