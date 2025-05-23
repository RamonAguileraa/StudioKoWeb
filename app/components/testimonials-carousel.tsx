"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: {
    en: string;
    es: string;
  };
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Juan Pérez",
    role: "CEO",
    company: "TechCorp",
    content: {
      en: "StudioKo developed our e-commerce platform with a unique design and robust backend. Sales increased by 40% in three months!",
      es: "StudioKo desarrolló nuestra plataforma de e-commerce con un diseño único y un backend robusto. ¡Las ventas aumentaron un 40% en tres meses!"
    },
    image: "/testimonials/person1.jpg"
  },
  {
    id: 2,
    name: "María García",
    role: "Marketing Director",
    company: "InnovateMedia",
    content: {
      en: "Maikonik's video campaign for our brand launch was a hit. The creativity and production quality exceeded our expectations.",
      es: "La campaña de video de Maikonik para nuestro lanzamiento de marca fue un éxito. La creatividad y la calidad de producción superaron nuestras expectativas."
    },
    image: "/testimonials/person2.jpg"
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    role: "Founder",
    company: "StartupX",
    content: {
      en: "StudioKo's app for our logistics project is intuitive and reliable. Our operations are now much more efficient.",
      es: "La app de StudioKo para nuestro proyecto logístico es intuitiva y confiable. Nuestras operaciones ahora son mucho más eficientes."
    },
    image: "/testimonials/person3.jpg"
  },
  {
    id: 4,
    name: "Lucía Fernández",
    role: "Brand Manager",
    company: "EcoLife",
    content: {
      en: "Maikonik created a stunning brand identity and social media strategy for our eco-friendly products. Our online presence grew rapidly.",
      es: "Maikonik creó una identidad de marca impresionante y una estrategia de redes sociales para nuestros productos ecológicos. Nuestra presencia online creció rápidamente."
    },
    image: "/testimonials/person4.jpg"
  },
  {
    id: 5,
    name: "Miguel Torres",
    role: "CTO",
    company: "FinTechNow",
    content: {
      en: "StudioKo built a secure and scalable fintech dashboard for us. The project was delivered on time and with great attention to detail.",
      es: "StudioKo construyó un dashboard fintech seguro y escalable para nosotros. El proyecto se entregó a tiempo y con gran atención al detalle."
    },
    image: "/testimonials/person5.jpg"
  }
]

const VISIBLE = 3
const ITEM_WIDTH = 340
const GAP = 32; // px, igual a gap-8 de Tailwind

export default function TestimonialsCarousel() {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Avance automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Efecto 3D para los visibles (centrado real)
  const get3DProps = (offset: number) => {
    if (offset === 0) {
      return { x: 0, scale: 1, opacity: 1, rotateY: 0, filter: 'blur(0px)', zIndex: 30 }
    } else if (offset === -1) {
      return { x: -((ITEM_WIDTH + GAP)), scale: 0.75, opacity: 1, rotateY: 35, filter: 'blur(2px)', zIndex: 10 }
    } else if (offset === 1) {
      return { x: (ITEM_WIDTH + GAP), scale: 0.75, opacity: 1, rotateY: -35, filter: 'blur(2px)', zIndex: 10 }
    } else {
      return { x: offset * (ITEM_WIDTH + GAP), scale: 0.6, opacity: 0, rotateY: 0, filter: 'blur(4px)', zIndex: 0 }
    }
  }

  // Para renderizar los 3 visibles (anterior, actual, siguiente)
  const getVisibleTestimonials = () => {
    const arr = []
    for (let i = -1; i <= 1; i++) {
      let idx = (currentIndex + i + testimonials.length) % testimonials.length
      arr.push({ ...testimonials[idx], offset: i })
    }
    return arr
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      <div className="overflow-hidden relative">
        {/* Gradientes de opacidad en los lados */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        <div className="relative mx-auto" style={{ width: `${ITEM_WIDTH * VISIBLE + GAP * (VISIBLE - 1)}px`, minHeight: 320 }}>
          {getVisibleTestimonials().map((testimonial, idx) => {
            const props = get3DProps(testimonial.offset)
            return (
              <motion.div
                key={testimonial.id}
                animate={props}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                style={{
                  zIndex: props.zIndex,
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  transform: 'translateX(-50%)',
                  minWidth: 340,
                  maxWidth: 340
                }}
                className="text-center select-none"
              >
                <div className="mb-8">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-maikonik rounded-full opacity-20 blur-lg"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">
                    {testimonial.content[language]}
                  </p>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-4" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  )
} 