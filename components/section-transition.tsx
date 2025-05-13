"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function SectionTransition({ children, className = "", id }: SectionTransitionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`py-16 md:py-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}
