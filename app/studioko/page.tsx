"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Globe, Smartphone, Server, Database, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTransition from "@/components/section-transition"
import AnimatedBlob from "@/components/animated-blob"
import { useLanguage } from "@/context/language-context"
import { useEffect, useState } from "react"

export default function StudioKoPage() {
  const { language } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const technologies = [
    { name: "React", icon: "/tech/react.svg" },
    { name: "Next.js", icon: "/tech/nextjs.svg" },
    { name: "TypeScript", icon: "/tech/typescript.svg" },
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "Python", icon: "/tech/python.svg" },
    { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
    { name: "MongoDB", icon: "/tech/mongodb.svg" },
    { name: "Docker", icon: "/tech/docker.svg" },
    { name: "AWS", icon: "/tech/aws.svg" },
    { name: "Flutter", icon: "/tech/flutter.svg" },
    { name: "Swift", icon: "/tech/swift.svg" },
    { name: "Kotlin", icon: "/tech/kotlin.svg" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % technologies.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const content = {
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
              description: "Tailored solutions that meet your specific business needs"
            },
            {
              title: "E-commerce Platforms",
              description: "Secure and scalable online stores with advanced features"
            },
            {
              title: "Progressive Web Apps",
              description: "Fast, reliable, and engaging web applications"
            }
          ]
        },
        mobileDev: {
          title: "Mobile Development",
          description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
          features: [
            {
              title: "iOS Development",
              description: "Native applications for Apple devices"
            },
            {
              title: "Android Development",
              description: "Custom Android applications with Material Design"
            },
            {
              title: "Cross-platform Solutions",
              description: "Efficient development for multiple platforms"
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
            technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"]
          },
          {
            title: "Backend",
            technologies: ["Node.js", "Python", "Java", "PHP", "Go"]
          },
          {
            title: "Mobile",
            technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
          },
          {
            title: "Database",
            technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
          }
        ]
      },
      process: {
        title: "Our Development Process",
        subtitle: "How we bring your ideas to life",
        steps: [
          {
            title: "Discovery",
            description: "Understanding your needs and project requirements"
          },
          {
            title: "Planning",
            description: "Creating a detailed roadmap and architecture"
          },
          {
            title: "Development",
            description: "Agile development with regular updates"
          },
          {
            title: "Testing",
            description: "Comprehensive testing and quality assurance"
          },
          {
            title: "Deployment",
            description: "Smooth deployment and continuous monitoring"
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
              description: "Soluciones adaptadas a tus necesidades específicas"
            },
            {
              title: "Plataformas E-commerce",
              description: "Tiendas online seguras y escalables con funciones avanzadas"
            },
            {
              title: "Aplicaciones Web Progresivas",
              description: "Aplicaciones web rápidas, confiables y atractivas"
            }
          ]
        },
        mobileDev: {
          title: "Desarrollo Móvil",
          description: "Aplicaciones móviles nativas y multiplataforma que ofrecen experiencias excepcionales.",
          features: [
            {
              title: "Desarrollo iOS",
              description: "Aplicaciones nativas para dispositivos Apple"
            },
            {
              title: "Desarrollo Android",
              description: "Aplicaciones Android personalizadas con Material Design"
            },
            {
              title: "Soluciones Multiplataforma",
              description: "Desarrollo eficiente para múltiples plataformas"
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
            technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript"]
          },
          {
            title: "Backend",
            technologies: ["Node.js", "Python", "Java", "PHP", "Go"]
          },
          {
            title: "Móvil",
            technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
          },
          {
            title: "Base de Datos",
            technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis"]
          }
        ]
      },
      process: {
        title: "Nuestro Proceso de Desarrollo",
        subtitle: "Cómo damos vida a tus ideas",
        steps: [
          {
            title: "Descubrimiento",
            description: "Entendiendo tus necesidades y requisitos del proyecto"
          },
          {
            title: "Planificación",
            description: "Creando un roadmap detallado y arquitectura"
          },
          {
            title: "Desarrollo",
            description: "Desarrollo ágil con actualizaciones regulares"
          },
          {
            title: "Pruebas",
            description: "Pruebas exhaustivas y control de calidad"
          },
          {
            title: "Implementación",
            description: "Implementación suave y monitoreo continuo"
          }
        ]
      },
      cta: {
        title: "¿Listo para Comenzar tu Proyecto?",
        subtitle: "Creemos algo increíble juntos",
        button: "Contáctanos"
      }
    }
  }

  const t = content[language]

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <AnimatedBlob color="#6C2BD9" size="600px" top="-300px" left="-300px" opacity={0.1} />
        <AnimatedBlob color="#6C2BD9" size="500px" bottom="-250px" right="-250px" opacity={0.1} delay={2} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t.hero.subtitle}
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t.hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity"
              >
                <Link href="/contact">{t.cta.button}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Carousel */}
      <SectionTransition className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.tech.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.tech.subtitle}</p>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex space-x-8 animate-scroll">
              {[...technologies, ...technologies].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-32 h-32 glassmorphism rounded-xl p-4 flex flex-col items-center justify-center"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionTransition>

      {/* Process Section */}
      <SectionTransition>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.process.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.process.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {t.process.steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glassmorphism rounded-xl p-6 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10 text-center">
                  <div className="bg-primary/10 rounded-full p-4 inline-flex mb-4">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Call to Action */}
      <SectionTransition className="bg-gradient-to-r from-primary/10 to-primary/20 dark:from-primary/20 dark:to-primary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t.cta.subtitle}</p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity"
            >
              <Link href="/contact">{t.cta.button}</Link>
            </Button>
          </motion.div>
        </div>
      </SectionTransition>
    </div>
  )
} 