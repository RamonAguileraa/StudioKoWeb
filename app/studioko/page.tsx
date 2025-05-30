"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  ArrowRight, 
  Code, 
  Globe, 
  Smartphone, 
  Server, 
  Database, 
  Shield, 
  Zap, 
  ChevronRight,
  ShoppingCart,
  Search,
  Layout,
  CheckCircle,
  Rocket,
  LucideIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTransition from "@/components/section-transition"
import { useLanguage } from "@/context/language-context"
import { useEffect, useState, useRef, useMemo } from "react"
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiDocker, SiAmazon } from "react-icons/si"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import React from "react"

// Interfaces para tipado
interface Feature {
  title: string
  description: string
  icon: React.ReactNode
}

interface TechItem {
  title: string
  technologies: string[]
  icon: LucideIcon
}

interface ProcessStep {
  title: string
  description: string
  icon: React.ReactNode
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

type LogoSlot = { left: number; top: number; size: number; techIdx: number }

// Componente de tarjeta de tecnología
const TechCard = ({ title, technologies, icon: Icon }: TechItem) => {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-gradient-to-tr from-violet-500/30 to-blue-400/30 rounded-full p-3 shadow-lg">
          {Icon && <Icon className="h-6 w-6" />}
        </div>
        <h5 className="text-lg md:text-xl font-bold text-gray-900 dark:text-violet-300 tracking-tight border-b-2 border-violet-500/30 pb-1 flex-1">
          {title}
        </h5>
      </div>
      <div className="space-y-2 md:space-y-3">
        {technologies.map((tech, techIndex) => (
          <TooltipProvider key={techIndex} delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="group flex items-start gap-3 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-violet-500/20 hover:bg-violet-500/5 rounded-lg px-3 py-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-tr from-violet-400 to-blue-400 shadow-violet-500/50 shadow-md flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <div>
                    <h6 className="text-sm md:text-base font-semibold text-gray-900 dark:text-violet-100 leading-tight group-hover:text-violet-300 transition-colors">
                      {tech}
                    </h6>
                    <p className="text-xs md:text-sm text-gray-600 dark:text-blue-200 leading-snug group-hover:text-blue-100 transition-colors">
                      {getTechDescription(tech)}
                    </p>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent 
                side="right" 
                className="bg-violet-900/90 text-white border-violet-500/40 shadow-xl text-sm md:text-base p-3"
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
const ProcessStep = ({ title, description, icon: Icon }: ProcessStep) => {
  return (
    <div className="bg-white/80 dark:bg-[#1E1F2E]/80 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-violet-200 dark:border-white/10 shadow-lg hover:shadow-violet-200/50 dark:hover:shadow-primary/20 text-center flex flex-col items-center transform transition-all duration-300 hover:scale-105">
      <div className="bg-gradient-to-br from-violet-100 to-blue-100 dark:from-primary/20 dark:to-primary/10 rounded-full p-3 md:p-4 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
        <div className="text-violet-600 dark:text-primary">
          {Icon}
        </div>
      </div>
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-violet-700 dark:text-primary">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  )
}

export default function StudioKoPage() {
  const { language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const { scrollYProgress } = useScroll()
  const containerRef = useRef<HTMLDivElement>(null)
  const [techRandomValues, setTechRandomValues] = useState<Array<{
    width: number;
    height: number;
    left: number;
    top: number;
    opacity: number;
  }>>([])
  const [processRandomValues, setProcessRandomValues] = useState<Array<{
    width: number;
    height: number;
    left: number;
    top: number;
    opacity: number;
  }>>([])
  const [logoSlots, setLogoSlots] = useState<LogoSlot[]>([])
  const [mounted, setMounted] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  const technologies = useMemo(() => [
    { name: "React", icon: <SiReact className="h-12 w-12" />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs className="h-12 w-12" />, color: "#000000" },
    { name: "TypeScript", icon: <SiTypescript className="h-12 w-12" />, color: "#3178C6" },
    { name: "Node.js", icon: <SiNodedotjs className="h-12 w-12" />, color: "#339933" },
    { name: "Python", icon: <SiPython className="h-12 w-12" />, color: "#3776AB" },
    { name: "Docker", icon: <SiDocker className="h-12 w-12" />, color: "#2496ED" },
    { name: "AWS", icon: <SiAmazon className="h-12 w-12" />, color: "#FF9900" },
    { name: "Tailwind", icon: <SiTailwindcss className="h-12 w-12" />, color: "#06B6D4" },
  ], [])

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024) // lg breakpoint
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  function getRandomSlot(size = 40): LogoSlot {
    return {
      left: Math.random() * 50 + 25,
      top: Math.random() * 50 + 25,
      size: size + Math.random() * 32,
      techIdx: Math.floor(Math.random() * technologies.length)
    }
  }

  useEffect(() => {
    setLogoSlots(Array.from({ length: 4 }, () => getRandomSlot()))
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const intervals = logoSlots.map((_, i: number) =>
      setInterval(() => {
        setLogoSlots((prev: LogoSlot[]) => {
          const newSlots = [...prev]
          newSlots[i] = getRandomSlot()
          return newSlots
        })
      }, 4000 + Math.random() * 1000)
    )
    return () => intervals.forEach(clearInterval)
  }, [mounted, logoSlots.length])

  useEffect(() => {
    const techValues = Array(18).fill(null).map(() => ({
      width: 24 + Math.random() * 32,
      height: 24 + Math.random() * 32,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: 0.25 + Math.random() * 0.25
    }))
    setTechRandomValues(techValues)

    const processValues = Array(10).fill(null).map(() => ({
      width: 24 + Math.random() * 32,
      height: 24 + Math.random() * 32,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: 0.18 + Math.random() * 0.18
    }))
    setProcessRandomValues(processValues)
  }, [])

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % technologies.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const content = useMemo(() => ({
    en: {
      hero: {
        title: "StudioKo",
        subtitle: "Innovative Software Development Solutions",
        description: "We transform ideas into powerful digital solutions that drive business growth and innovation.",
      },
      services: {
        title: "Our Services",
        subtitle: "Comprehensive software development solutions",
        webDev: {
          title: "Web Development",
          description: "We create modern, responsive, and scalable web applications that help businesses thrive in the digital world.",
          features: [
            {
              title: "Custom Web Applications",
              description: "Tailored solutions that meet your specific business needs",
              icon: <Globe className="h-6 w-6" />
            },
            {
              title: "E-commerce Platforms",
              description: "Secure and scalable online stores with advanced features",
              icon: <ShoppingCart className="h-6 w-6" />
            },
            {
              title: "Progressive Web Apps",
              description: "Fast, reliable, and engaging web applications",
              icon: <Zap className="h-6 w-6" />
            }
          ]
        },
        mobileDev: {
          title: "Mobile Development",
          description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
          features: [
            {
              title: "iOS Development",
              description: "Native applications for Apple devices",
              icon: <Smartphone className="h-6 w-6" />
            },
            {
              title: "Android Development",
              description: "Custom Android applications with Material Design",
              icon: <Smartphone className="h-6 w-6" />
            },
            {
              title: "Cross-platform Solutions",
              description: "Efficient development for multiple platforms",
              icon: <Globe className="h-6 w-6" />
            }
          ]
        }
      },
      tech: {
        title: "Technologies We Use",
        subtitle: "Modern tech stack for optimal performance",
        items: [
          {
            title: "Frontend",
            technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"],
            icon: Code
          },
          {
            title: "Backend",
            technologies: ["Node.js", "Python", "Java", "PHP", "Go"],
            icon: Server
          },
          {
            title: "Mobile",
            technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
            icon: Smartphone
          },
          {
            title: "Database",
            technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
            icon: Database
          }
        ]
      },
      process: {
        title: "Our Development Process",
        subtitle: "How we bring your ideas to life",
        steps: [
          {
            title: "Discovery",
            description: "Understanding your needs and project requirements",
            icon: <Search className="h-6 w-6" />
          },
          {
            title: "Planning",
            description: "Creating a detailed roadmap and architecture",
            icon: <Layout className="h-6 w-6" />
          },
          {
            title: "Development",
            description: "Agile development with regular updates",
            icon: <Code className="h-6 w-6" />
          },
          {
            title: "Testing",
            description: "Comprehensive testing and quality assurance",
            icon: <CheckCircle className="h-6 w-6" />
          },
          {
            title: "Deployment",
            description: "Smooth deployment and continuous monitoring",
            icon: <Rocket className="h-6 w-6" />
          }
        ]
      },
      cta: {
        title: "Ready to Start Your Project?",
        subtitle: "Let's create something amazing together",
        button: "Get in Touch"
      }
    },
    es: {
      hero: {
        title: "StudioKo",
        subtitle: "Soluciones Innovadoras de Desarrollo de Software",
        description: "Transformamos ideas en potentes soluciones digitales que impulsan el crecimiento y la innovación empresarial.",
      },
      services: {
        title: "Nuestros Servicios",
        subtitle: "Soluciones integrales de desarrollo de software",
        webDev: {
          title: "Desarrollo Web",
          description: "Creamos aplicaciones web modernas, responsivas y escalables que ayudan a las empresas a prosperar en el mundo digital.",
          features: [
            {
              title: "Aplicaciones Web Personalizadas",
              description: "Soluciones adaptadas a tus necesidades específicas",
              icon: <Globe className="h-6 w-6" />
            },
            {
              title: "Plataformas E-commerce",
              description: "Tiendas online seguras y escalables con funciones avanzadas",
              icon: <ShoppingCart className="h-6 w-6" />
            },
            {
              title: "Aplicaciones Web Progresivas",
              description: "Aplicaciones web rápidas, confiables y atractivas",
              icon: <Zap className="h-6 w-6" />
            }
          ]
        },
        mobileDev: {
          title: "Desarrollo Móvil",
          description: "Aplicaciones móviles nativas y multiplataforma que ofrecen experiencias excepcionales.",
          features: [
            {
              title: "Desarrollo iOS",
              description: "Aplicaciones nativas para dispositivos Apple",
              icon: <Smartphone className="h-6 w-6" />
            },
            {
              title: "Desarrollo Android",
              description: "Aplicaciones Android personalizadas con Material Design",
              icon: <Smartphone className="h-6 w-6" />
            },
            {
              title: "Soluciones Multiplataforma",
              description: "Desarrollo eficiente para múltiples plataformas",
              icon: <Globe className="h-6 w-6" />
            }
          ]
        }
      },
      tech: {
        title: "Tecnologías que Utilizamos",
        subtitle: "Stack tecnológico moderno para un rendimiento óptimo",
        items: [
          {
            title: "Frontend",
            technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"],
            icon: Code
          },
          {
            title: "Backend",
            technologies: ["Node.js", "Python", "Java", "PHP", "Go"],
            icon: Server
          },
          {
            title: "Móvil",
            technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
            icon: Smartphone
          },
          {
            title: "Base de Datos",
            technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
            icon: Database
          }
        ]
      },
      process: {
        title: "Nuestro Proceso de Desarrollo",
        subtitle: "Cómo damos vida a tus ideas",
        steps: [
          {
            title: "Descubrimiento",
            description: "Entendiendo tus necesidades y requisitos del proyecto",
            icon: <Search className="h-6 w-6" />
          },
          {
            title: "Planificación",
            description: "Creando un roadmap detallado y arquitectura",
            icon: <Layout className="h-6 w-6" />
          },
          {
            title: "Desarrollo",
            description: "Desarrollo ágil con actualizaciones regulares",
            icon: <Code className="h-6 w-6" />
          },
          {
            title: "Pruebas",
            description: "Pruebas exhaustivas y control de calidad",
            icon: <CheckCircle className="h-6 w-6" />
          },
          {
            title: "Implementación",
            description: "Implementación suave y monitoreo continuo",
            icon: <Rocket className="h-6 w-6" />
          }
        ]
      },
      cta: {
        title: "¿Listo para Comenzar tu Proyecto?",
        subtitle: "Creemos algo increíble juntos",
        button: "Contáctanos"
      }
    }
  }), [])

  const t = useMemo(() => content[language], [content, language])

  if (!mounted) return null

  return (
    <div className="relative pt-16 md:pt-20 bg-white dark:bg-gray-900" ref={containerRef}>
      {/* Hero Section */}
      <SectionTransition id="hero" className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
        {/* Fondo animado de logos */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {mounted && logoSlots.map((slot, slotIdx) => {
            const tech = technologies[slot.techIdx];
            return (
              <motion.div
                key={slotIdx + '-' + tech.name + '-' + slot.left + '-' + slot.top}
                className="absolute"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.2, 0.3, 0.2, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: 0,
                  times: [0, 0.2, 0.5, 0.8, 1],
                  ease: "easeInOut"
                }}
                style={{
                  left: `${slot.left}%`,
                  top: `${slot.top}%`,
                  fontSize: slot.size,
                }}
              >
                <div 
                  className="text-primary/90 dark:text-primary/90 drop-shadow-[0_0_20px_rgba(99,102,241,0.7)]"
                  style={{ fontSize: slot.size }}
                >
                  {tech.icon}
                </div>
              </motion.div>
            )
          })}
        </div>
        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 drop-shadow-[0_2px_32px_rgba(236,72,153,0.5)]">
              {t.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-primary/90 drop-shadow-[0_1px_8px_rgba(80,0,120,0.2)]">
              {t.hero.subtitle}
            </h2>
            <p className="text-lg md:text-xl text-gray-900 dark:text-white mb-12 max-w-2xl mx-auto drop-shadow-[0_1px_8px_rgba(80,0,120,0.2)]">
              {t.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Button
                asChild
                size="lg"
                className="px-8 md:px-10 py-6 md:py-7 rounded-full font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40"
              >
                <Link href="/contact" className="flex items-center gap-3 text-base md:text-lg">
                  {t.cta.button}
                  <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 md:px-10 py-6 md:py-7 rounded-full font-medium border-2 border-pink-500 text-pink-500 bg-black/30 shadow-lg transition-all duration-300 hover:bg-pink-500 hover:text-white hover:scale-105"
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

      {/* Technologies Section */}
      <SectionTransition id="tech" className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-20"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              {t.tech.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
              {t.tech.subtitle}
            </p>
          </motion.div>
          <div className="flex justify-center relative mt-4">
            <motion.div
              className="w-full max-w-4xl bg-white/10 dark:bg-white/5 backdrop-blur-2xl p-8 md:p-10 lg:p-16 rounded-3xl border-2 border-violet-500/40 shadow-2xl relative overflow-hidden"
              style={{ boxShadow: "0 0 32px 4px #7c3aed33, 0 2px 32px 0 #0ea5e933" }}
            >
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-16 gap-y-10 md:gap-y-16">
                {t.tech.items.map((item, index) => (
                  <TechCard key={index} {...item} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SectionTransition>

      {/* Process Section */}
      <SectionTransition id="process" className="relative py-32 bg-gradient-to-b from-gray-50 to-white dark:from-[#181A24] dark:to-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-24"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              {t.process.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-muted-foreground max-w-3xl mx-auto">
              {t.process.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12">
            {t.process.steps.map((step, index) => (
              <ProcessStep key={index} {...step} />
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
              {t.cta.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12">
              {t.cta.subtitle}
            </p>
            <Button
              asChild
              size="lg"
              className="px-8 md:px-10 py-6 md:py-7 rounded-full font-medium bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact" className="flex items-center gap-3 text-base md:text-lg">
                {t.cta.button}
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
    "React": "Biblioteca JavaScript para interfaces de usuario",
    "Next.js": "Framework React para aplicaciones web modernas",
    "TypeScript": "JavaScript con tipado estático",
    "Node.js": "Runtime JavaScript para backend",
    "Python": "Lenguaje versátil para backend y análisis de datos",
    "Docker": "Plataforma de contenedores",
    "AWS": "Servicios cloud de Amazon",
    "PostgreSQL": "Base de datos relacional avanzada",
    "MongoDB": "Base de datos NoSQL flexible",
    "Redis": "Almacenamiento en caché y mensajería",
    "Vue.js": "Framework progresivo para interfaces",
    "Angular": "Framework completo para aplicaciones web",
    "Java": "Lenguaje de programación empresarial",
    "PHP": "Lenguaje para desarrollo web",
    "Go": "Lenguaje de programación eficiente",
    "React Native": "Desarrollo móvil multiplataforma",
    "Flutter": "Framework para apps nativas",
    "Swift": "Lenguaje para desarrollo iOS",
    "Kotlin": "Lenguaje moderno para Android",
    "MySQL": "Base de datos relacional popular"
  }
  return descriptions[tech] || "Tecnología moderna y robusta"
} 