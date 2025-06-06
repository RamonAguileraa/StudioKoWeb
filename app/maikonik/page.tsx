"use client"

import { useState, useEffect, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
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
          icon: Palette
        },
        {
          title: "Photo & Video",
          technologies: ["Photoshop", "Lightroom", "Premiere Pro", "After Effects"],
          icon: Film
        },
        {
          title: "Social Media",
          technologies: ["Instagram", "Facebook", "TikTok", "LinkedIn"],
          icon: Globe
        },
        {
          title: "Marketing Tools",
          technologies: ["Meta Business", "Google Analytics", "Hootsuite", "Later"],
          icon: TrendingUp
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
    <div className="mb-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-gradient-to-tr from-rose-500/20 via-rose-400/20 to-rose-300/20 rounded-full p-3 shadow-lg">
          {Icon && <Icon className="h-6 w-6 text-rose-500" />}
        </div>
        <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white tracking-tight border-b-2 border-rose-500/20 pb-1 flex-1">
          {title}
        </h5>
      </div>
      <div className="space-y-2 md:space-y-3">
        {technologies.map((tech, techIndex) => (
          <TooltipProvider key={techIndex} delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="group flex items-start gap-3 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-rose-500/20 hover:bg-rose-500/10 rounded-lg px-3 py-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-tr from-rose-400 to-rose-300 shadow-rose-500/50 shadow-md flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <div>
                    <h6 className="text-sm md:text-base font-semibold text-gray-900 dark:text-white leading-tight group-hover:text-rose-500 transition-colors">
                      {tech}
                    </h6>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 leading-snug group-hover:text-rose-500/90 dark:group-hover:text-rose-300 transition-colors">
                      {getTechDescription(tech)}
                    </p>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent 
                side="right" 
                className="bg-rose-900/90 text-white border-rose-500/40 shadow-xl text-sm md:text-base p-3"
                sideOffset={5}
              >
                {getTechDescription(tech)}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  )
}

// Componente de paso del proceso
const ProcessStep = ({ title, description, icon: Icon, isLast }: ProcessStep & { isLast: boolean }) => {
  return (
    <motion.div
      className="relative group"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg p-4 md:p-6 rounded-2xl border border-rose-500/20 shadow-lg hover:shadow-rose-500/20 transition-all duration-300 h-full">
        <div className="flex flex-col items-center text-center">
          <div className="bg-rose-500/10 p-3 md:p-4 rounded-full mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-5 w-5 md:h-6 md:w-6 text-rose-500" />
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 text-rose-500">{title}</h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
      {!isLast && (
        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-rose-500/20" />
      )}
    </motion.div>
  )
}

// Componente principal
export default function MaikonikPage() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  
  const currentContent = useMemo(() => content[language as keyof typeof content], [language])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="app-maikonik relative pt-16 md:pt-20 bg-gradient-to-b from-white via-pink-50/50 to-white dark:from-gray-900 dark:via-pink-950/20 dark:to-gray-900">
      {/* Hero Section */}
      <SectionTransition id="hero" className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <AnimatedBlob color="#F43F5E" size="600px" top="-300px" right="-300px" opacity={0.15} />
          <AnimatedBlob color="#FB7185" size="400px" bottom="-200px" left="-200px" opacity={0.1} delay={2} />
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-rose-300 drop-shadow-[0_2px_32px_rgba(236,72,153,0.5)]">
              {currentContent.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-rose-500 drop-shadow-[0_1px_8px_rgba(236,72,153,0.2)]">
              {currentContent.hero.subtitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-900 dark:text-white mb-12 max-w-2xl mx-auto drop-shadow-[0_1px_8px_rgba(80,0,120,0.2)]">
              {currentContent.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button
                asChild
                size="lg"
                className="px-8 md:px-10 py-6 md:py-7 rounded-full font-medium bg-gradient-to-r from-rose-500 to-rose-400 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40 border-rose-500"
              >
                <Link href="/contact" className="flex items-center gap-3 text-base md:text-lg">
                  {currentContent.cta.button}
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 md:px-10 py-6 md:py-7 rounded-full font-medium border-2 border-rose-500 text-rose-500 bg-white/50 dark:bg-black/30 shadow-lg transition-all duration-300 hover:bg-rose-500 hover:text-white hover:scale-105"
              >
                <Link href="#services" className="flex items-center gap-3 text-base md:text-lg">
                  {language === "es" ? "Nuestros Servicios" : "Our Services"}
                  <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Services Section */}
      <SectionTransition id="services" className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-rose-400 to-rose-300">
              {currentContent.services.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
              {currentContent.services.subtitle}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
            {currentContent.services.webDev.features.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/10 dark:bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-4 text-primary">
                    {service.icon && <service.icon className="w-full h-full text-rose-500" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Technologies Section */}
      <SectionTransition id="tech" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-rose-500/5 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-rose-500">
              {currentContent.tech.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              {currentContent.tech.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto">
            {currentContent.tech.items.map((item, index) => (
              <TechCard key={index} {...item} />
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Process Section */}
      <SectionTransition id="process" className="relative py-24 bg-gradient-to-b from-white to-pink-50/50 dark:from-gray-900 dark:to-pink-950/20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-rose-500">
              {currentContent.process.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              {currentContent.process.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 max-w-6xl mx-auto">
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
      <SectionTransition className="relative py-32 bg-white dark:bg-[#181A24] overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto bg-gray-50 dark:bg-[#1E1F2E] backdrop-blur-lg p-12 md:p-16 rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
              {currentContent.cta.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12">
              {currentContent.cta.subtitle}
            </p>
            <Button
              asChild
              size="lg"
              className="px-8 md:px-10 py-6 md:py-7 rounded-full font-medium bg-gradient-to-r from-rose-500 to-rose-400 hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact" className="flex items-center gap-3 text-base md:text-lg">
                {currentContent.cta.button}
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </Link>
            </Button>
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
