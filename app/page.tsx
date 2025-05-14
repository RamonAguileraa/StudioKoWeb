"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, GamepadIcon, PenToolIcon, Code, Palette, Film } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SectionTransition from "@/components/section-transition"
import AnimatedBlob from "@/components/animated-blob"
import { useLanguage } from "@/context/language-context"
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript,SiAdobepremierepro, SiAdobeaftereffects, SiUnity, SiBlender, SiFigma, SiAdobexd } from "react-icons/si"

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
        exploreBosozoku: "Explore BosoZoku",
        discoverMaikonik: "Discover Maikonik",
      },
      divisions: {
        title: "Our Divisions",
        subtitle: "StudioKó brings together two specialized divisions to deliver comprehensive digital solutions",
        bosozoku: {
          title: "BosoZoku",
          description:
            "Our game development division creating immersive experiences inspired by rich cultural mythology and unique visual styles.",
          flagshipGame: "Flagship Game:",
          tibucami: "Tibucami",
          tibucamiDesc: "Inspired by Rarámuri mythology with stop-motion clay visuals",
          learnMore: "Learn More",
        },
        maikonik: {
          title: "Maikonik Media",
          description:
            "Our creative and software agency delivering cutting-edge digital solutions for brands and businesses.",
          webMobile: "Web & Mobile",
          uiuxDesign: "UI/UX Design",
          videoMedia: "Video & Media",
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
          "StudioKó was founded with a clear vision: to create digital experiences that blend artistic expression with technical excellence. Our founder's background in both game development and digital design has shaped our unique approach.",
        description2:
          "We believe in the power of storytelling across all digital mediums, whether it's an immersive game or a brand's digital presence. This philosophy guides everything we create.",
        aboutStory: "About Our Story",
        getInTouch: "Get in Touch",
      },
      cta: {
        title: "Ready to Create Something Amazing?",
        subtitle:
          "Whether you're looking for game development or creative digital solutions, we're here to bring your vision to life.",
        startProject: "Start a Project",
        learnMore: "Learn More About Us",
      },
    },
    es: {
      hero: {
        title: "Creando Experiencias Digitales",
        subtitle: "Donde la creatividad se une a la tecnología para construir productos digitales excepcionales",
        exploreBosozoku: "Explorar BosoZoku",
        discoverMaikonik: "Descubrir Maikonik",
      },
      divisions: {
        title: "Nuestras Divisiones",
        subtitle: "StudioKó reúne dos divisiones especializadas para ofrecer soluciones digitales integrales",
        bosozoku: {
          title: "BosoZoku",
          description:
            "Nuestra división de desarrollo de juegos que crea experiencias inmersivas inspiradas en rica mitología cultural y estilos visuales únicos.",
          flagshipGame: "Juego Principal:",
          tibucami: "Tibucami",
          tibucamiDesc: "Inspirado en la mitología Rarámuri con visuales de arcilla en stop-motion",
          learnMore: "Saber Más",
        },
        maikonik: {
          title: "Maikonik Media",
          description:
            "Nuestra agencia creativa y de software que ofrece soluciones digitales de vanguardia para marcas y empresas.",
          webMobile: "Web y Móvil",
          uiuxDesign: "Diseño UI/UX",
          videoMedia: "Video y Media",
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
          "StudioKó fue fundado con una visión clara: crear experiencias digitales que combinen la expresión artística con la excelencia técnica. La experiencia de nuestro fundador tanto en desarrollo de juegos como en diseño digital ha dado forma a nuestro enfoque único.",
        description2:
          "Creemos en el poder de la narrativa en todos los medios digitales, ya sea un juego inmersivo o la presencia digital de una marca. Esta filosofía guía todo lo que creamos.",
        aboutStory: "Sobre Nuestra Historia",
        getInTouch: "Contáctanos",
      },
      cta: {
        title: "¿Listo para Crear Algo Increíble?",
        subtitle:
          "Ya sea que busques desarrollo de juegos o soluciones digitales creativas, estamos aquí para dar vida a tu visión.",
        startProject: "Iniciar un Proyecto",
        learnMore: "Conoce Más Sobre Nosotros",
      },
    },
  }

const projectList: Project[] = [
  {
    id: 1,
    title: "BosoZoku Studio",
    description: "Estudio indie de videojuegos BosoZoku, donde puedes descargar nuestro primer juego Tibucami, apoyar el desarrollo con donaciones y conocer más sobre el proyecto y el equipo detrás. Diseñada para conectar con la comunidad y mostrar el alma del estudio.",
    image: "/tibucamipage.png?height=200&width=200",
    type: "Maikonik",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss }
    ]
  },
  {
    id: 2,
    title: "Tibucami",
    description: "Tibucami es un juego de acción y aventura inspirado en la mitología Rarámuri. Acompaña a un joven espíritu en su viaje por tierras ancestrales y modernas, enfrentando desafíos y descubriendo su verdadero propósito.",
    image: "/presentaciongame.png?height=200&width=200",
    type: "BosoZoku",
    technologies: [
      { name: "Unity", icon: SiUnity },
      { name: "Blender", icon: SiBlender }
    ]
  },
  {
    id: 3,
    title: "€nligne",
    description: "Aplicación web que permite convertir monedas en tiempo real con datos precisos gracias a la API de Fixer. Rápida, confiable y fácil de usar para usuarios que necesitan tasas de cambio actualizadas al instante.",
    image: "/enligne.png?height=200&width=200",
    type: "Maikonik",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript }
    ]
  },
  {
    id: 4,
    title: "Project 4",
    description: "Short description of Project 4 and what makes it special.",
    youtubeId: "nSLwgQ8VFp0",
    type: "BosoZoku",
    technologies: [
      { name: "Premiere Pro", icon: SiAdobepremierepro },
      { name: "After Effects", icon: SiAdobeaftereffects }
    ]
  },
  {
    id: 5,
    title: "Aroma Café",
    description: "Landing page inspirada en un café auténtico. Transmite calidez, calidad y estilo moderno con un diseño fluido pensado para conectar con los amantes del buen café.",
    image: "/cafearoma.png?height=200&width=200",
    type: "Maikonik",
    technologies: [
      { name: "Figma", icon: SiFigma },
      { name: "Adobe XD", icon: SiAdobexd }
    ]
  },
  {
    id: 6,
    title: "Project 6",
    description: "Short description of Project 6 and what makes it special.",
    youtubeId: "joM3O1P0GZ4",
    type: "BosoZoku",
    technologies: [
      { name: "Premiere Pro", icon: SiAdobepremierepro },
      { name: "After Effects", icon: SiAdobeaftereffects }
    ]
  }
]
  const t = content[language]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-screen flex items-center pt-20">
        {/* Animated blobs */}
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
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-bosozoku via-primary to-maikonik bg-clip-text text-transparent"
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
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-bosozoku to-primary hover:opacity-90 transition-opacity"
              >
                <Link href="/bosozoku">
                  {t.hero.exploreBosozoku}
                  <GamepadIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-maikonik hover:bg-maikonik/10 transition-colors"
              >
                <Link href="/maikonik">
                  {t.hero.discoverMaikonik}
                  <PenToolIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="mt-16 relative" style={{ y, opacity }}>
            <div className="relative mx-auto max-w-5xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/digitalmedia.png"
                alt="StudioKó Showcase"
                width={1920}
                height={1080}
                className="object-cover height=1080&width=1920"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Divisions Overview */}
      <SectionTransition className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.divisions.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t.divisions.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bosozoku/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <GamepadIcon className="h-12 w-12 mb-6 text-bosozoku" />
                <h3 className="text-2xl font-bold mb-4">{t.divisions.bosozoku.title}</h3>
                <p className="text-muted-foreground mb-6">{t.divisions.bosozoku.description}</p>
                <div className="mb-8">
                  <h4 className="font-medium mb-2">{t.divisions.bosozoku.flagshipGame}</h4>
                  <div className="flex items-center space-x-4">
                    <div className="h-16 w-16 rounded-md overflow-hidden">
                      <Image
                        src="/presentaciongame.png?height=200&width=200"
                        alt="Tibucami"
                        width={200}
                        height={200}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-bold">{t.divisions.bosozoku.tibucami}</h5>
                      <p className="text-sm text-muted-foreground">{t.divisions.bosozoku.tibucamiDesc}</p>
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-bosozoku text-bosozoku hover:bg-bosozoku/10 transition-colors"
                >
                  <Link href="/bosozoku">
                    {t.divisions.bosozoku.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maikonik/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <PenToolIcon className="h-12 w-12 mb-6 text-maikonik" />
                <h3 className="text-2xl font-bold mb-4">{t.divisions.maikonik.title}</h3>
                <p className="text-muted-foreground mb-6">{t.divisions.maikonik.description}</p>
                <div className="mb-8 grid grid-cols-3 gap-4">
                  <div className="flex flex-col items-center">
                    <Code className="h-8 w-8 mb-2 text-maikonik" />
                    <span className="text-xs text-center">{t.divisions.maikonik.webMobile}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Palette className="h-8 w-8 mb-2 text-maikonik" />
                    <span className="text-xs text-center">{t.divisions.maikonik.uiuxDesign}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Film className="h-8 w-8 mb-2 text-maikonik" />
                    <span className="text-xs text-center">{t.divisions.maikonik.videoMedia}</span>
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
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.projects.title}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">{t.projects.subtitle}</p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectList.map((project) => (
        <motion.div
          key={project.id}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Card className="overflow-hidden h-full">
            <div className="relative aspect-video overflow-hidden">
              {project.youtubeId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${project.youtubeId}&modestbranding=1&rel=0`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
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
              <div className="absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                {project.type}
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex items-center gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-1 text-muted-foreground">
                    <tech.icon className="w-4 h-4" />
                    <span className="text-xs">{tech.name}</span>
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

    <div className="mt-12 text-center">
      <Button asChild variant="outline">
        <Link href="/projects">
          {t.projects.viewAll}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </div>
</SectionTransition>



      {/* Founder Section */}
      <SectionTransition className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
                  <Image
                    src="/placeholder.svg?height=600&width=480&text=Founder"
                    alt="StudioKó Founder"
                    width={480}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-xl"></div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.vision.title}</h2>
              <p className="text-muted-foreground mb-6">{t.vision.description1}</p>
              <p className="text-muted-foreground mb-6">{t.vision.description2}</p>
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
            </motion.div>
          </div>
        </div>
      </SectionTransition>

      {/* Call to Action */}
      <SectionTransition className="bg-gradient-to-r from-bosozoku/10 to-maikonik/10 dark:from-bosozoku/20 dark:to-maikonik/20">
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
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-bosozoku to-maikonik hover:opacity-90 transition-opacity"
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
