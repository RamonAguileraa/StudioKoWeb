import React from "react"

interface BackgroundParticlesProps {
  color: string // color en hex o tailwind
  amount?: number // cantidad de partículas
  className?: string
}

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min

export const BackgroundParticles: React.FC<BackgroundParticlesProps> = ({ color, amount = 24, className = "" }) => {
  // Generar partículas con posiciones y tamaños aleatorios
  const particles = Array.from({ length: amount }).map((_, i) => {
    const size = getRandom(4, 10) // px, más pequeñas
    const top = getRandom(0, 100) // %
    const left = getRandom(0, 100) // %
    const opacity = getRandom(0.25, 0.45) // más brillantes
    const duration = getRandom(3, 7) // duración de la animación
    const delay = getRandom(0, 3) // retardo de animación
    const blur = getRandom(0.5, 2)
    return (
      <div
        key={i}
        style={{
          position: "absolute",
          top: `${top}%`,
          left: `${left}%`,
          width: size,
          height: size,
          borderRadius: "50%",
          background: color,
          opacity,
          pointerEvents: "none",
          filter: `blur(${blur}px) drop-shadow(0 0 6px ${color})`,
          animation: `particle-float ${duration}s ease-in-out ${delay}s infinite alternate`,
        }}
      />
    )
  })

  return (
    <>
      <style>{`
        @keyframes particle-float {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-18px) scale(1.15); }
        }
      `}</style>
      <div className={`pointer-events-none absolute inset-0 w-full h-full z-0 ${className}`}
        aria-hidden="true"
      >
        {particles}
      </div>
    </>
  )
}

export default BackgroundParticles 