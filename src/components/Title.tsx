import type { ReactNode } from "react"

interface TitleProps {
  children: ReactNode
}

export default function Title({ children }: TitleProps) {
  return (
    <h1 className="text-4xl font-semibold text-slate-900">
      {children}
    </h1>
  )
}