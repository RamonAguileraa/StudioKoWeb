"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, GamepadIcon, PenToolIcon, Code, Palette, Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SectionTransition from "@/components/section-transition"
import AnimatedBlob from "@/components/animated-blob"
import { useLanguage } from "@/context/language-context"
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript,SiAdobepremierepro, SiAdobeaftereffects, SiUnity, SiBlender, SiFigma, SiAdobexd, SiNodedotjs, SiPython, SiDocker, SiAmazon, SiAdobephotoshop, SiAdobeillustrator, SiDavinciresolve } from "react-icons/si"
import TestimonialsCarousel from "@/app/components/testimonials-carousel"

interface Project {
  id: number;
  title: string;
  description: string;
  type: string;
  image?: string;
  video?: string;
  youtubeId?: string;
  technologies: {
    name: string;
    icon: any;
  }[];
}

export default function Home() {
  const { language } = useLanguage()
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  // Translations
  const content = {
    en: {
      hero: {
        title: "Crafting Digital Experiences",
        subtitle: "Where creativity meets technology to build exceptional digital products",
        exploreStudioKo: "Explore StudioKo",
        discoverMaikonik: "Discover Maikonik",
      },
      divisions: {
        title: "Our Divisions",
        subtitle: "Two specialized divisions working together to deliver comprehensive digital solutions",
        studioko: {
          title: "StudioKo",
          description:
            "Our technical division specializing in software development, web applications, and digital solutions. We bring technical excellence to every project.",
          services: "Services:",
          webDev: "Web Development",
          mobileDev: "Mobile Development",
          softwareDev: "Software Development",
          learnMore: "Learn More",
        },
        maikonik: {
          title: "Maikonik Media",
          description:
            "Our creative division focused on media production, marketing strategies, and brand development. We create compelling visual content and marketing campaigns.",
          services: "Services:",
          videoProduction: "Video Production",
          marketing: "Digital Marketing",
          brandDesign: "Brand Design",
          learnMore: "Learn More",
        },
      },
      projects: {
        title: "Latest Projects",
        subtitle: "Explore our most recent work across both divisions",
        project: "Project",
        viewProject: "View Project",
        viewAll: "View All Projects",
      },
      vision: {
        title: "Our Vision",
        description1:
          "We believe in the power of combining technical excellence with creative innovation. Our two divisions work in harmony to deliver comprehensive digital solutions that make a real impact.",
        description2:
          "Whether you need cutting-edge software development or compelling media content, we have the expertise to bring your vision to life.",
        aboutStory: "About Our Story",
        getInTouch: "Get in Touch",
      },
      cta: {
        title: "Ready to Create Something Amazing?",
        subtitle:
          "Whether you need technical solutions or creative content, we're here to help you achieve your goals.",
        startProject: "Start a Project",
        learnMore: "Learn More About Us",
      },
    },
    es: {
      hero: {
        title: "Creando Experiencias Digitales",
        subtitle: "Donde la creatividad se une a la tecnología para construir productos digitales excepcionales",
        exploreStudioKo: "Explorar StudioKo",
        discoverMaikonik: "Descubrir Maikonik",
      },
      divisions: {
        title: "Nuestras Divisiones",
        subtitle: "Dos divisiones especializadas trabajando juntas para ofrecer soluciones digitales integrales",
        studioko: {
          title: "StudioKo",
          description:
            "Nuestra división técnica especializada en desarrollo de software, aplicaciones web y soluciones digitales. Llevamos la excelencia técnica a cada proyecto.",
          services: "Servicios:",
          webDev: "Desarrollo Web",
          mobileDev: "Desarrollo Móvil",
          softwareDev: "Desarrollo de Software",
          learnMore: "Saber Más",
        },
        maikonik: {
          title: "Maikonik Media",
          description:
            "Nuestra división creativa enfocada en producción de medios, estrategias de marketing y desarrollo de marca. Creamos contenido visual impactante y campañas de marketing.",
          services: "Servicios:",
          videoProduction: "Producción de Video",
          marketing: "Marketing Digital",
          brandDesign: "Diseño de Marca",
          learnMore: "Saber Más",
        },
      },
      projects: {
        title: "Últimos Proyectos",
        subtitle: "Explora nuestros trabajos más recientes en ambas divisiones",
        project: "Proyecto",
        viewProject: "Ver Proyecto",
        viewAll: "Ver Todos los Proyectos",
      },
      vision: {
        title: "Nuestra Visión",
        description1:
          "Creemos en el poder de combinar la excelencia técnica con la innovación creativa. Nuestras dos divisiones trabajan en armonía para ofrecer soluciones digitales integrales que generan un impacto real.",
        description2:
          "Ya sea que necesites desarrollo de software de vanguardia o contenido multimedia impactante, tenemos la experiencia para dar vida a tu visión.",
        aboutStory: "Sobre Nuestra Historia",
        getInTouch: "Contáctanos",
      },
      cta: {
        title: "¿Listo para Crear Algo Increíble?",
        subtitle:
          "Ya sea que necesites soluciones técnicas o contenido creativo, estamos aquí para ayudarte a alcanzar tus objetivos.",
        startProject: "Iniciar un Proyecto",
        learnMore: "Conoce Más Sobre Nosotros",
      },
    },
  }

const projectList: Project[] = [
  {
    id: 1,
    title: "BosoZoku Studio",
    description: "Página estudio indie de videojuegos BosoZoku, acepta donaciones y descarga el juego Tibucami.",
    image: "/projects/tibucamipage.png?height=200&width=200",
    type: "StudioKó",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss }
    ]
  },
  {
    id: 2,
    title: "Videos de Youtube",
    description: "Videos para canal de youtube con animaciones y motion graphics.",
    youtubeId: "nSLwgQ8VFp0",
    type: "Maikonik",
    technologies: [
      { name: "Premiere Pro", icon: SiAdobepremierepro },
      { name: "After Effects", icon: SiAdobeaftereffects }
    ]
  },
  {
    id: 3,
    title: "Aroma Café",
    description: "Landing page inspirada en un café auténtico. Transmite calidez, calidad y estilo moderno con un diseño fluido pensado para conectar con los amantes del buen café.",
    image: "/projects/aromacafe.png?height=200&width=200",
    type: "StudioKó",
    technologies: [
      { name: "Figma", icon: SiFigma },
      { name: "Adobe XD", icon: SiAdobexd }
    ]
  },
]
  const t = content[language]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section ref={targetRef} className="relative h-[90vh] flex items-center pt-60 bg-background">
        {/* Animated blobs */}
        <AnimatedBlob color="#6C2BD9" size="600px" top="-300px" left="-300px" opacity={0.2} />
        <AnimatedBlob color="#F43F5E" size="500px" bottom="-250px" right="-250px" opacity={0.2} delay={2} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 bg-gradient-to-r from-primary to-maikonik bg-clip-text text-transparent pt-[175px] py-2">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl mb-12 text-muted-foreground">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-24">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:opacity-90 transition-opacity"
              >
                <Link href="/studioko">
                  {t.hero.exploreStudioKo}
                  <Code className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-maikonik text-maikonik hover:bg-maikonik/10 transition-colors"
              >
                <Link href="/maikonik">
                  {t.hero.discoverMaikonik}
                  <Film className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          {/*
          <motion.div className="relative" style={{ y, opacity }}>
            <div className="relative mx-auto max-w-3xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl ">
              <Image
                src="/digitalmedia.png"
                alt="StudioKó Showcase"
                width={1920}
                height={1080}
                className="object-cover opacity-0 transition-opacity duration-300"
                onLoadingComplete={(image) => {
                  image.classList.remove('opacity-0')
                }}
                priority
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
          */}
        </div>
      </section>

      {/* Divisions Section */}
      <SectionTransition>
        <div className="container mx-auto px-4 py-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-maikonik bg-clip-text text-transparent pt-[150px]">{t.divisions.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t.divisions.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <Code className="h-14 w-14 mb-8 text-primary" />
                <h3 className="text-2xl font-bold mb-6 text-primary">{t.divisions.studioko.title}</h3>
                <p className="text-muted-foreground mb-8">{t.divisions.studioko.description}</p>
                <div className="mb-10 grid grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <Code className="h-10 w-10 mb-3 text-primary" />
                    <span className="text-sm text-center">{t.divisions.studioko.webDev}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Code className="h-10 w-10 mb-3 text-primary" />
                    <span className="text-sm text-center">{t.divisions.studioko.mobileDev}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Code className="h-10 w-10 mb-3 text-primary" />
                    <span className="text-sm text-center">{t.divisions.studioko.softwareDev}</span>
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 transition-colors"
                >
                  <Link href="/studioko">
                    {t.divisions.studioko.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maikonik/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <Film className="h-14 w-14 mb-8 text-maikonik" />
                <h3 className="text-2xl font-bold mb-6 text-maikonik">{t.divisions.maikonik.title}</h3>
                <p className="text-muted-foreground mb-8">{t.divisions.maikonik.description}</p>
                <div className="mb-10 grid grid-cols-3 gap-6">
                  <div className="flex flex-col items-center">
                    <Film className="h-10 w-10 mb-3 text-maikonik" />
                    <span className="text-sm text-center">{t.divisions.maikonik.videoProduction}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Film className="h-10 w-10 mb-3 text-maikonik" />
                    <span className="text-sm text-center">{t.divisions.maikonik.marketing}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Film className="h-10 w-10 mb-3 text-maikonik" />
                    <span className="text-sm text-center">{t.divisions.maikonik.brandDesign}</span>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-maikonik text-maikonik hover:bg-maikonik/10 transition-colors"
                >
                  <Link href="/maikonik">
                    {t.divisions.maikonik.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionTransition>

      {/* Latest Projects */}
      <SectionTransition>
        <div className="container mx-auto px-4 py-32">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-maikonik bg-clip-text text-transparent">{t.projects.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t.projects.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projectList.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="overflow-hidden h-full border-2 hover:border-primary/50 transition-colors">
                  <div className="relative aspect-video overflow-hidden">
                    {project.youtubeId ? (
                      <div className="relative w-full h-full group">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${project.youtubeId}&modestbranding=1&rel=0`}
                          title={project.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-transparent pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                    ) : project.video ? (
                      <video
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={project.image || "/placeholder.png"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    )}
                    <div className="absolute top-3 right-3 text-sm font-medium px-4 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20">
                      {project.type}
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2">{project.description}</p>
                    <div className="flex items-center gap-3 mb-6 flex-wrap">
                      {project.technologies.map((tech, index) => (
                        <div key={index} className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-md">
                          <tech.icon className="w-4 h-4" />
                          <span className="text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-sm font-medium text-primary flex items-center hover:underline"
                    >
                      {t.projects.viewProject}
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/projects">
                {t.projects.viewAll}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionTransition>

      {/* Testimonials Section */}
      <SectionTransition>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "es" ? "Lo que dicen nuestros clientes" : "What Our Clients Say"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {language === "es" ? "Experiencias de quienes han confiado en nuestro trabajo" : "Experiences from those who have trusted our work"}
            </p>
          </div>
          <TestimonialsCarousel />
        </div>
      </SectionTransition>

      {/* Founder Section */}
      <SectionTransition className="bg-muted/50">
        <div className="container mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] shadow-none md:shadow-2xl">
                  <Image
                    src="/studioimg.png"
                    alt="StudioKó Team"
                    width={480}
                    height={600}
                    className="object-cover w-full h-full"
                    priority
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-xl opacity-30 hidden md:block"></div>
              <div className="absolute -bottom-12 -right-12 w-full h-full bg-gradient-to-br from-primary/20 to-maikonik/20 rounded-xl blur-xl hidden md:block"></div>
            </div>
 
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="px-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.vision.title}</h2>
                <p className="text-muted-foreground mb-6">{t.vision.description1}</p>
                <p className="text-muted-foreground mb-6">{t.vision.description2}</p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild>
                  <Link href="/about">
                    {t.vision.aboutStory}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">{t.vision.getInTouch}</Link>
                </Button>
              </div>
                
              </div>
            </motion.div>
          </div>
        </div>
      </SectionTransition>

      {/* Call to Action */}
      <SectionTransition className="bg-gradient-to-r from-primary/10 to-maikonik/10 dark:from-primary/20 dark:to-maikonik/20">
        <div className="container mx-auto px-4 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl text-muted-foreground mb-8">{t.cta.subtitle}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-maikonik hover:opacity-90 transition-opacity"
              >
                <Link href="/contact">{t.cta.startProject}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">{t.cta.learnMore}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionTransition>
    </div>
  )
}
