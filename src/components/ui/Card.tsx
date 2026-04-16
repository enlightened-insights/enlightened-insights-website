import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Elevation tier — maps to surface tonal hierarchy */
  level?: "container" | "high" | "bright";
}

const levelClasses = {
  container: "bg-surface-container",
  high: "bg-surface-high",
  bright: "bg-surface-bright",
};

export default function Card({
  level = "container",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      className={cn(
        "rounded p-6",
        levelClasses[level],
        className
      )}
    >
      {children}
    </div>
  );
}
