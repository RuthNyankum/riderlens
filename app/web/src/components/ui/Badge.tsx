import { type ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-[#ff4500] text-white",
  success: "bg-[#10b981] text-white",
  warning: "bg-[#f59e0b] text-white",
  error: "bg-[#ef4444] text-white",
  info: "bg-[#3b82f6] text-white",
  outline: "border border-[#ff4500] text-[#ff4500] bg-transparent",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2.5 py-0.5 font-['Inter'] text-xs font-semibold leading-none",
        variantStyles[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
