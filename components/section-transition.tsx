"use client"

import { ReactNode } from "react"

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function SectionTransition({ children, className = "", id }: SectionTransitionProps) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  )
}
