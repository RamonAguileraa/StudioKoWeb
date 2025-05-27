"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { 
  ArrowRight, 
  Palette, 
  Film, 
  TrendingUp, 
  Smartphone, 
  Globe, 
  MessageSquare, 
  ShoppingCart, 
  Zap, 
  Code, 
  Server, 
  Layout, 
  CheckCircle, 
  Search, 
  Rocket, 
  Database,
  ChevronRight,
  LucideIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTransition from "@/components/section-transition"
import AnimatedBlob from "@/components/animated-blob"
import { useLanguage } from "@/context/language-context"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

// Interfaces para tipado
interface Feature {
  title: string
  description: string
  icon: LucideIcon
}

interface TechItem {
  title: string
  technologies: string[]
  icon: LucideIcon
}

interface ProcessStep {
  title: string
  description: string
  icon: LucideIcon
}

interface ServiceSection {
  title: string
  description: string
  features: Feature[]
}

interface Content {
  hero: {
    title: string
    subtitle: string
    description: string
  }
  services: {
    title: string
    subtitle: string
    webDev: ServiceSection
    mobileDev: ServiceSection
  }
  tech: {
    title: string
    subtitle: string
    items: TechItem[]
  }
  process: {
    title: string
    subtitle: string
    steps: ProcessStep[]
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
}

interface ContentObject {
  en: Content
  es: Content
}

const content: ContentObject = {
  en: {
    hero: {
      title: "Maikonik",
      subtitle: "Creative Digital Studio",
      description: "We transform brands through creative design, strategic marketing, and compelling content that drives engagement and growth.",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive creative solutions",
      webDev: {
        title: "Brand Development",
        description: "We create comprehensive brand strategies that connect with your audience and drive growth.",
        features: [
          {
            title: "Brand Strategy",
            description: "Strategic brand positioning and development",
            icon: Globe
          },
          {
            title: "Visual Identity",
            description: "Complete brand identity and design system",
            icon: ShoppingCart
          },
          {
            title: "Brand Guidelines",
            description: "Comprehensive brand guidelines and assets",
            icon: Zap
          }
        ]
      },
      mobileDev: {
        title: "Content Creation",
        description: "High-quality visual content that tells your brand story.",
        features: [
          {
            title: "Photo & Video",
            description: "Professional photography and videography services",
            icon: Smartphone
          },
          {
            title: "Social Media Content",
            description: "Engaging content for all social platforms",
            icon: Smartphone
          },
          {
            title: "Motion Graphics",
            description: "Dynamic animations and visual effects",
            icon: Globe
          }
        ]
      }
    },
    tech: {
      title: "Our Expertise",
      subtitle: "Professional tools and platforms",
      items: [
        {
          title: "Design & Branding",
          technologies: ["Adobe Creative Suite", "Figma", "Blender", "Canva Pro"],
          icon: Code
        },
        {
          title: "Photo & Video",
          technologies: ["Photoshop", "Lightroom", "Premiere Pro", "After Effects"],
          icon: Server
        },
        {
          title: "Social Media",
          technologies: ["Instagram", "Facebook", "TikTok", "LinkedIn"],
          icon: Smartphone
        },
        {
          title: "Marketing Tools",
          technologies: ["Meta Business", "Google Analytics", "Hootsuite", "Later"],
          icon: Database
        }
      ]
    },
    process: {
      title: "Our Process",
      subtitle: "How we create your designs",
      steps: [
        {
          title: "Discovery",
          description: "Understanding your brand and design needs",
          icon: Search
        },
        {
          title: "Concept",
          description: "Developing creative concepts and ideas",
          icon: Layout
        },
        {
          title: "Design",
          description: "Creating high-quality visual designs",
          icon: Code
        },
        {
          title: "Refinement",
          description: "Perfecting every detail of your design",
          icon: CheckCircle
        },
        {
          title: "Delivery",
          description: "Providing final files and assets",
          icon: Rocket
        }
      ]
    },
    cta: {
      title: "Ready to Create Something Amazing?",
      subtitle: "Let's bring your vision to life",
      button: "Get in Touch"
    }
  },
  es: {
    hero: {
      title: "Maikonik",
      subtitle: "Estudio Creativo Digital",
      description: "Transformamos marcas a través del diseño creativo, marketing estratégico y contenido impactante que impulsa el engagement y el crecimiento.",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones creativas integrales",
      webDev: {
        title: "Desarrollo de Marca",
        description: "Creamos estrategias de marca integrales que conectan con tu audiencia y generan crecimiento.",
        features: [
          {
            title: "Estrategia de Marca",
            description: "Posicionamiento y desarrollo estratégico de marca",
            icon: Globe
          },
          {
            title: "Identidad Visual",
            description: "Sistema completo de identidad y diseño de marca",
            icon: ShoppingCart
          },
          {
            title: "Guías de Marca",
            description: "Guías de marca y recursos completos",
            icon: Zap
          }
        ]
      },
      mobileDev: {
        title: "Creación de Contenido",
        description: "Contenido visual de alta calidad que cuenta la historia de tu marca.",
        features: [
          {
            title: "Foto y Video",
            description: "Servicios profesionales de fotografía y videografía",
            icon: Smartphone
          },
          {
            title: "Contenido para Redes",
            description: "Contenido atractivo para todas las plataformas",
            icon: Smartphone
          },
          {
            title: "Motion Graphics",
            description: "Animaciones y efectos visuales dinámicos",
            icon: Globe
          }
        ]
      }
    },
    tech: {
      title: "Nuestras Herramientas",
      subtitle: "Software profesional de diseño",
      items: [
        {
          title: "Diseño",
          technologies: ["Adobe Creative Suite", "Figma", "Blender", "Canva Pro"],
          icon: Code
        },
        {
          title: "Foto y Video",
          technologies: ["Photoshop", "Lightroom", "Premiere Pro", "After Effects"],
          icon: Server
        },
        {
          title: "3D y Motion",
          technologies: ["Blender", "Cinema 4D", "After Effects", "DaVinci Resolve"],
          icon: Smartphone
        },
        {
          title: "Herramientas Adicionales",
          technologies: ["Procreate", "Illustrator", "InDesign", "XD"],
          icon: Database
        }
      ]
    },
    process: {
      title: "Nuestro Proceso",
      subtitle: "Cómo creamos tus diseños",
      steps: [
        {
          title: "Descubrimiento",
          description: "Entendiendo tu marca y necesidades de diseño",
          icon: Search
        },
        {
          title: "Concepto",
          description: "Desarrollando conceptos e ideas creativas",
          icon: Layout
        },
        {
          title: "Diseño",
          description: "Creando diseños visuales de alta calidad",
          icon: Code
        },
        {
          title: "Refinamiento",
          description: "Perfeccionando cada detalle de tu diseño",
          icon: CheckCircle
        },
        {
          title: "Entrega",
          description: "Proporcionando archivos y recursos finales",
          icon: Rocket
        }
      ]
    },
    cta: {
      title: "¿Listo para Crear Algo Increíble?",
      subtitle: "Demos vida a tu visión",
      button: "Contáctanos"
    }
  }
}

// Componente de tarjeta de tecnología
const TechCard = ({ title, technologies, icon: Icon }: TechItem) => {
  return (
    <motion.div
      className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl border border-maikonik/20 shadow-xl hover:shadow-maikonik/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-maikonik/10 p-3 rounded-2xl">
          <Icon className="h-6 w-6 text-maikonik" />
        </div>
        <h3 className="text-2xl font-bold text-maikonik">{title}</h3>
      </div>
      <div className="space-y-4">
        {technologies.map((tech, index) => (
          <TooltipProvider key={index} delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  className="group flex items-center gap-3 p-3 rounded-xl bg-white/50 dark:bg-gray-700/50 hover:bg-maikonik/5 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 rounded-full bg-maikonik" />
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {tech}
                  </span>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-maikonik text-white border-maikonik/40">
                {getTechDescription(tech)}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </motion.div>
  )
}

// Componente de paso del proceso
const ProcessStep = ({ title, description, icon: Icon, isLast }: ProcessStep & { isLast: boolean }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl border border-maikonik/20 shadow-lg hover:shadow-maikonik/20 transition-all duration-300 h-full">
        <div className="flex flex-col items-center text-center">
          <div className="bg-maikonik/10 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6 text-maikonik" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-maikonik">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-maikonik/20" />
      )}
    </motion.div>
  )
}

// Componente principal
export default function MaikonikPage() {
  const { language } = useLanguage()
  const { scrollYProgress } = useScroll()
  const [mounted, setMounted] = useState(false)
  
  const currentContent = useMemo(() => content[language as keyof typeof content], [language])
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative pt-20 bg-gradient-to-b from-white via-pink-50/50 to-white dark:from-gray-900 dark:via-pink-950/20 dark:to-gray-900">
      {/* Hero Section */}
      <SectionTransition id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
        <AnimatedBlob color="#F43F5E" size="600px" top="-300px" right="-300px" opacity={0.15} />
        <AnimatedBlob color="#FB7185" size="400px" bottom="-200px" left="-200px" opacity={0.1} delay={2} />

        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative inline-block mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-maikonik relative">
                {currentContent.hero.title}
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </h1>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl mb-6 font-light text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {currentContent.hero.subtitle}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {currentContent.hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="px-8 py-6 rounded-full font-medium bg-maikonik hover:bg-maikonik/90 text-white shadow-lg shadow-maikonik/20 transition-all duration-300 hover:scale-105 hover:shadow-maikonik/30"
              >
                <Link href="/contact" className="flex items-center gap-2 text-lg">
                  {currentContent.cta.button}
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 py-6 rounded-full font-medium border-2 border-maikonik text-maikonik hover:bg-maikonik/10 transition-all duration-300 hover:scale-105"
              >
                <Link href="#services" className="flex items-center gap-2 text-lg">
                  {language === "es" ? "Nuestros Servicios" : "Our Services"}
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Technologies Section */}
      <SectionTransition id="tech" className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-maikonik">
              {currentContent.tech.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {currentContent.tech.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {currentContent.tech.items.map((item, index) => (
              <TechCard key={index} {...item} />
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Process Section */}
      <SectionTransition id="process" className="relative py-24 bg-gradient-to-b from-white to-pink-50/50 dark:from-gray-900 dark:to-pink-950/20">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-maikonik">
              {currentContent.process.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {currentContent.process.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {currentContent.process.steps.map((step, index) => (
              <ProcessStep 
                key={index} 
                {...step} 
                isLast={index === currentContent.process.steps.length - 1} 
              />
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Call to Action */}
      <SectionTransition className="relative py-24 bg-gradient-to-b from-pink-50/50 to-white dark:from-pink-950/20 dark:to-gray-900">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-12 rounded-3xl border border-maikonik/20 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-maikonik text-center">
              {currentContent.cta.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 text-center">
              {currentContent.cta.subtitle}
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="px-8 py-6 rounded-full font-medium bg-maikonik hover:bg-maikonik/90 text-white shadow-lg shadow-maikonik/20 transition-all duration-300 hover:scale-105 hover:shadow-maikonik/30"
              >
                <Link href="/contact" className="flex items-center gap-2 text-lg">
                  {currentContent.cta.button}
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionTransition>
    </div>
  )
}

// Función auxiliar para obtener descripciones de tecnologías
function getTechDescription(tech: string): string {
  const descriptions: { [key: string]: string } = {
    "Adobe Creative Suite": "Suite completa de herramientas de diseño",
    "Figma": "Herramienta de diseño colaborativo",
    "Blender": "Software de modelado 3D y animación",
    "Canva Pro": "Plataforma de diseño gráfico",
    "Photoshop": "Edición y manipulación de imágenes",
    "Lightroom": "Edición y organización de fotos",
    "Premiere Pro": "Edición de video profesional",
    "After Effects": "Efectos visuales y animación",
    "Instagram": "Plataforma de contenido visual",
    "Facebook": "Red social para empresas",
    "TikTok": "Plataforma de video corto",
    "LinkedIn": "Red profesional",
    "Meta Business": "Herramientas de marketing",
    "Google Analytics": "Análisis de datos web",
    "Hootsuite": "Gestión de redes sociales",
    "Later": "Programación de contenido",
    "Cinema 4D": "Modelado y animación 3D",
    "DaVinci Resolve": "Edición y colorización",
    "Procreate": "Dibujo digital",
    "Illustrator": "Diseño vectorial",
    "InDesign": "Maquetación profesional",
    "XD": "Diseño de interfaces"
  }
  return descriptions[tech] || "Herramienta profesional de diseño"
}
