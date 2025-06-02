"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  ArrowRight, 
  Globe, 
  Code, 
  Server, 
  Smartphone, 
  Database, 
  Palette, 
  Film, 
  TrendingUp, 
  MessageSquare, 
  Zap,
  LucideIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTransition from "@/components/section-transition"
import AnimatedBlob from "@/components/animated-blob"
import { useLanguage } from "@/context/language-context"

// Interfaces para tipado
interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  link: string
  isMaikonik?: boolean
}

// Contenido extraído a un objeto separado
const content = {
  en: {
    hero: {
      title: "Our Services",
      subtitle: "Comprehensive digital solutions for your business",
    },
    studioko: {
      title: "StudioKo Services",
      subtitle: "Technical excellence in software development",
      webDev: {
        title: "Web Development",
        description: "Modern and responsive websites and web applications that drive your digital presence.",
        features: [
          "Responsive Design",
          "E-commerce Solutions",
          "Web Applications",
          "CMS Development",
          "API Integration",
          "Performance Optimization"
        ]
      },
      mobileDev: {
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
        features: [
          "iOS Development",
          "Android Development",
          "Cross-platform Solutions",
          "UI/UX Design",
          "App Store Optimization",
          "Performance Tuning"
        ]
      }
    },
    maikonik: {
      title: "Maikonik Media Services",
      subtitle: "Creative excellence in media production",
      videoProd: {
        title: "Video Production",
        description: "High-quality video content for marketing, training, and storytelling.",
        features: [
          "Corporate Videos",
          "Product Demonstrations",
          "Motion Graphics",
          "Animation",
          "Video Editing",
          "Post-production"
        ]
      },
      marketing: {
        title: "Digital Marketing",
        description: "Strategic marketing solutions to grow your online presence and drive results.",
        features: [
          "SEO & SEM",
          "Social Media Marketing",
          "Email Marketing",
          "Content Strategy",
          "Analytics & Reporting",
          "Campaign Management"
        ]
      },
      brandDev: {
        title: "Brand Development",
        description: "We create comprehensive brand strategies that connect with your audience and drive growth.",
        features: [
          "Brand Strategy",
          "Visual Identity",
          "Brand Guidelines",
          "Positioning",
          "Design System",
          "Brand Resources"
        ]
      },
      photography: {
        title: "Photography",
        description: "Professional photography and retouching services for your brand.",
        features: [
          "Product Photography",
          "Corporate Photography",
          "Photographic Retouching",
          "Commercial Photography",
          "Event Photography",
          "Professional Editing"
        ]
      },
      socialMedia: {
        title: "Social Media",
        description: "Community management and content creation for social media that connects with your audience.",
        features: [
          "Community Management",
          "Content for Social Media",
          "Social Strategy",
          "Editorial Calendar",
          "Metrics Analysis",
          "Social Campaigns"
        ]
      },
      strategicMarketing: {
        title: "Strategic Marketing",
        description: "Comprehensive marketing strategies for your brand.",
        features: [
          "Strategic Planning",
          "Advertising Campaigns",
          "Results Analysis",
          "Market Strategy",
          "Brand Positioning",
          "ROI and Metrics"
        ]
      }
    },
    cta: {
      title: "Ready to Start Your Project?",
      subtitle: "Let's work together to bring your vision to life",
      button: "Get in Touch"
    }
  },
  es: {
    hero: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones digitales integrales para tu negocio",
    },
    studioko: {
      title: "Servicios StudioKo",
      subtitle: "Excelencia técnica en desarrollo de software",
      webDev: {
        title: "Desarrollo Web",
        description: "Sitios web y aplicaciones web modernas y responsivas que impulsan tu presencia digital.",
        features: [
          "Diseño Responsivo",
          "Soluciones E-commerce",
          "Aplicaciones Web",
          "Desarrollo CMS",
          "Integración de APIs",
          "Optimización de Rendimiento"
        ]
      },
      mobileDev: {
        title: "Desarrollo Móvil",
        description: "Aplicaciones móviles nativas y multiplataforma que ofrecen experiencias excepcionales.",
        features: [
          "Desarrollo iOS",
          "Desarrollo Android",
          "Soluciones Cross-platform",
          "Diseño UI/UX",
          "Optimización App Store",
          "Ajuste de Rendimiento"
        ]
      }
    },
    maikonik: {
      title: "Servicios Maikonik Media",
      subtitle: "Excelencia creativa en producción de medios",
      videoProd: {
        title: "Producción de Video",
        description: "Contenido audiovisual de alta calidad para marketing, entrenamiento y storytelling.",
        features: [
          "Videos Corporativos",
          "Demostraciones de Productos",
          "Motion Graphics",
          "Animación",
          "Edición de Video",
          "Post-producción"
        ]
      },
      marketing: {
        title: "Marketing Digital",
        description: "Estrategias de marketing digital para aumentar tu presencia online y generar resultados.",
        features: [
          "SEO & SEM",
          "Marketing en Redes Sociales",
          "Email Marketing",
          "Estrategia de Contenido",
          "Analítica y Reportes",
          "Gestión de Campañas"
        ]
      },
      brandDev: {
        title: "Desarrollo de Marca",
        description: "Creamos estrategias de marca integrales que conectan con tu audiencia y generan crecimiento.",
        features: [
          "Estrategia de Marca",
          "Identidad Visual",
          "Guías de Marca",
          "Posicionamiento",
          "Sistema de Diseño",
          "Recursos de Marca"
        ]
      },
      photography: {
        title: "Fotografía",
        description: "Servicios profesionales de fotografía y retoque para tu marca.",
        features: [
          "Fotografía de Producto",
          "Fotografía Corporativa",
          "Retoque Fotográfico",
          "Fotografía Comercial",
          "Fotografía de Eventos",
          "Edición Profesional"
        ]
      },
      socialMedia: {
        title: "Redes Sociales",
        description: "Gestión y creación de contenido para redes sociales que conecta con tu audiencia.",
        features: [
          "Gestión de Comunidad",
          "Contenido para Redes",
          "Estrategia Social",
          "Calendario Editorial",
          "Análisis de Métricas",
          "Campañas Sociales"
        ]
      },
      strategicMarketing: {
        title: "Marketing Estratégico",
        description: "Estrategias de marketing integrales para tu marca.",
        features: [
          "Planificación Estratégica",
          "Campañas Publicitarias",
          "Análisis de Resultados",
          "Estrategia de Mercado",
          "Posicionamiento de Marca",
          "ROI y Métricas"
        ]
      }
    },
    cta: {
      title: "¿Listo para Comenzar tu Proyecto?",
      subtitle: "Trabajemos juntos para dar vida a tu visión",
      button: "Contáctanos"
    }
  }
}

// Componente de tarjeta de servicio optimizado
const ServiceCard = ({ 
  title, 
  description, 
  features, 
  icon: Icon, 
  link, 
  isMaikonik = false 
}: ServiceCardProps) => {
  const { language } = useLanguage()
  const brandColor = isMaikonik ? 'maikonik' : 'primary'

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="glassmorphism rounded-xl p-8 relative overflow-hidden group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-${brandColor}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
      <div className="relative z-10">
        <div className={`bg-${brandColor}/10 rounded-full p-4 inline-flex mb-6`}>
          <Icon className={`h-8 w-8 text-${brandColor}`} />
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>
        <div className="space-y-4 mb-6">
          {features.map((feature: string, index: number) => (
            <div key={index} className="flex items-start">
              <div className={`mr-3 mt-1 bg-${brandColor}/10 rounded-full p-1`}>
                <div className={`h-1.5 w-1.5 rounded-full bg-${brandColor}`}></div>
              </div>
              <div>
                <p className="text-sm font-medium">{feature}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {language === 'en' 
                    ? 'Custom solutions tailored to your needs'
                    : 'Soluciones personalizadas adaptadas a tus necesidades'}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <Button
            asChild
            variant="outline"
            className={`border-${brandColor} text-${brandColor} hover:bg-${brandColor}/10 transition-colors`}
          >
            <Link href={link}>
              {language === 'en' ? 'Learn More' : 'Saber Más'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

// Componente principal optimizado
export default function ServicesPage() {
  const { language } = useLanguage()
  const t = useMemo(() => content[language], [language])

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
        <AnimatedBlob color="#6C2BD9" size="600px" top="-300px" left="-300px" opacity={0.1} />
        <AnimatedBlob color="#F43F5E" size="500px" bottom="-250px" right="-250px" opacity={0.1} delay={2} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t.hero.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* StudioKo Services */}
      <SectionTransition className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.studioko.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.studioko.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title={t.studioko.webDev.title}
              description={t.studioko.webDev.description}
              features={t.studioko.webDev.features}
              icon={Globe}
              link="/services/desarrollo-web"
            />
            <ServiceCard
              title={t.studioko.mobileDev.title}
              description={t.studioko.mobileDev.description}
              features={t.studioko.mobileDev.features}
              icon={Smartphone}
              link="/services/desarrollo-movil"
            />
          </div>
        </div>
      </SectionTransition>

      {/* Maikonik Services */}
      <SectionTransition className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.maikonik.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.maikonik.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title={t.maikonik.videoProd.title}
              description={t.maikonik.videoProd.description}
              features={t.maikonik.videoProd.features}
              icon={Film}
              link="/services/produccion-video"
              isMaikonik={true}
            />
            <ServiceCard
              title={t.maikonik.marketing.title}
              description={t.maikonik.marketing.description}
              features={t.maikonik.marketing.features}
              icon={TrendingUp}
              link="/services/marketing-digital"
              isMaikonik={true}
            />
            <ServiceCard
              title={t.maikonik.brandDev.title}
              description={t.maikonik.brandDev.description}
              features={t.maikonik.brandDev.features}
              icon={Palette}
              link="/services/desarrollo-marca"
              isMaikonik={true}
            />
            <ServiceCard
              title={t.maikonik.photography.title}
              description={t.maikonik.photography.description}
              features={t.maikonik.photography.features}
              icon={MessageSquare}
              link="/services/fotografia"
              isMaikonik={true}
            />
            <ServiceCard
              title={t.maikonik.socialMedia.title}
              description={t.maikonik.socialMedia.description}
              features={t.maikonik.socialMedia.features}
              icon={Globe}
              link="/services/redes-sociales"
              isMaikonik={true}
            />
            <ServiceCard
              title={t.maikonik.strategicMarketing.title}
              description={t.maikonik.strategicMarketing.description}
              features={t.maikonik.strategicMarketing.features}
              icon={Zap}
              link="/services/marketing-estrategico"
              isMaikonik={true}
            />
          </div>
        </div>
      </SectionTransition>

      {/* Call to Action */}
      <SectionTransition className="bg-gradient-to-r from-primary/10 to-maikonik/10 dark:from-primary/20 dark:to-maikonik/20 py-24">
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
              className="bg-gradient-to-r from-primary to-maikonik hover:opacity-90 transition-opacity"
            >
              <Link href="/contact">{t.cta.button}</Link>
            </Button>
          </motion.div>
        </div>
      </SectionTransition>
    </div>
  )
} 