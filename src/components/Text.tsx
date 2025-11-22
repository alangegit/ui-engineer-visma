import type { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

export default function Text({
  children
}: TextProps) { 

  return <p className="text-indigo-900">{children}</p>;
}
