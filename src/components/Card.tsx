import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
}

export default function Card({ children }: CardProps) {
  return (
    <div className="max-w-2xl mx-auto bg-slate-100 p-8 rounded-md shadow-md">
      {children}
    </div>
  )
}