import React, { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className = "", variant = "default", ...rest }: ButtonProps) {
  const styles =
    variant === "outline"
      ? "border border-pink-600 text-pink-700 bg-white"
      : "bg-pink-600 text-white";

  return (
    <button
      {...rest}
      className={`rounded px-4 py-2 font-medium hover:opacity-90 ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
