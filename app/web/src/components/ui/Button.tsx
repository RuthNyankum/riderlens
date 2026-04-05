import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string; // renders as <Link> if provided
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-[#ff4500] text-white hover:bg-[#e63900] active:scale-[0.97]",
  outline:
    "border border-[#ff4500] text-[#ff4500] bg-transparent hover:bg-[#ff4500] hover:text-white active:scale-[0.97]",
  ghost:
    "text-[#ff4500] bg-transparent hover:bg-[#ff4500]/10 active:scale-[0.97]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-[0.9375rem]",
  lg: "px-8 py-3 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded font-['Montserrat'] font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    base,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ].join(" ");

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
