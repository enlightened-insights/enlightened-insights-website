import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

type SurfaceLevel = "base" | "raised";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  surface?: SurfaceLevel;
}

const surfaceClasses: Record<SurfaceLevel, string> = {
  base: "bg-surface",
  raised: "bg-surface-container",
};

export default function SectionWrapper({
  id,
  surface = "base",
  className,
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      {...props}
      className={cn("py-24 px-6", surfaceClasses[surface], className)}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
