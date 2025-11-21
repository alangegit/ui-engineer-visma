import type { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  variant?: "default" | "muted";
}

export default function Text({
  children,
  variant = "default",
}: TextProps) { 
    const base = "text-indigo-900";

  const variants = {
    default: "text-lg",
    muted: "opacity-50",
  };

  return <p className={`${base} ${variants[variant]}`}>{children}</p>;
}
