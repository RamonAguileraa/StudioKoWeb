"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface AnimatedBlobProps {
  color: string
  size?: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  opacity?: number
  delay?: number
}

export default function AnimatedBlob({
  color,
  size = "400px",
  top,
  left,
  right,
  bottom,
  opacity = 0.1,
  delay = 0,
}: AnimatedBlobProps) {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const blob = blobRef.current
    if (!blob) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const moveX = (clientX - window.innerWidth / 2) / 50
      const moveY = (clientY - window.innerHeight / 2) / 50

      blob.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <motion.div
      ref={blobRef}
      className="absolute rounded-full filter blur-3xl pointer-events-none"
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        backgroundColor: color,
        opacity,
      }}
      initial={{ scale: 0.8 }}
      animate={{
        scale: [0.8, 1.2, 0.9, 1.1, 1],
        rotate: [0, 10, -10, 5, 0],
      }}
      transition={{
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        delay,
      }}
    />
  )
}
