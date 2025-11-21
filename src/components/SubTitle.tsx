import type { ReactNode } from "react"

interface SubTitleProps {
  children: ReactNode
}

export default function SubTitle({ children }: SubTitleProps) {
  return (
    <h2 className="text-xl font-semibold text-indigo-900">
      {children}
    </h2>
  )
}