"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Award, Lightbulb, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTransition from "@/components/section-transition"
import AnimatedBlob from "@/components/animated-blob"
import { useLanguage } from "@/context/language-context"

export default function AboutPage() {
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
        title: "About",
        subtitle: "Our story, mission, and the team behind our creative digital company"
      },
      story: {
        title: "Our Story",
        p1: "StudioKó was born from the idea that art and technology shouldn't live apart. Founded in 2018, it started as a creative hub shaped by a deep passion for design, storytelling, and development. With roots in both digital art and interactive experiences, our founder envisioned a studio where creativity meets code.",
        p2: "What began as a small creative team grew into a full-spectrum digital company—combining bold aesthetics with smart functionality. As we evolved, so did our mission: to offer meaningful digital experiences that connect emotionally and perform flawlessly.",
        p3: "Today, StudioKó collaborates closely with two main projects:",
        division1: "BosoZoku",
        division1Desc: ", an independent game studio led by Ramón Aguilera, focused on interactive experiences and original intellectual property, and",
        division2: "Maikonik Media",
        division2Desc: ", our digital agency delivering creative and software solutions for modern brands.",
        together: "Together, we build worlds, platforms, and stories that leave a lasting impact."
      },
      ceo: {
        title: "Meet Our CEO",
        name: "Ramón Aguilera",
        bio: "Ramón Aguilera is a multidisciplinary creative with extensive experience in game development, web design, and digital strategy. As CEO of StudioKó and leader of BosoZoku, he directs the creative vision of both projects, focusing on creating immersive experiences based on cultural identity and innovative storytelling.\n\nWith experience ranging from award-winning hackathons to mentoring in international NASA challenges, Ramón combines technical skill and artistic vision to expand the frontiers of interactive media. His leadership drives projects like Tibucami, a 3D action-adventure inspired by Rarámuri mythology, developed by the BosoZoku team.\n\nHe continues to innovate across every project—whether building digital worlds or shaping unique brand experiences."
      },
      coo: {
        title: "Meet Our COO",
        name: "Miguel Millán",
        bio: "Miguel Millán is a digital strategist and creative leader with experience in multimedia project management and content production. As COO of StudioKó, he leads Maikonik Media, the company's digital and creative solutions division.\n\nWith a meticulous focus on process optimization and operational excellence, Miguel oversees project implementation to ensure each digital solution meets the highest standards of quality and effectiveness. His experience in editing and content production brings a unique perspective to each project.\n\nHis vision combines technological innovation with effective business strategies, driving StudioKó's growth while maintaining focus on creating meaningful digital experiences for clients."
      },
      values: {
        title: "Our Mission & Values",
        subtitle: "The principles that guide our work and define our company culture",
        creativity: {
          title: "Creativity",
          desc: "We approach every project with fresh perspectives and innovative thinking to create unique digital experiences."
        },
        excellence: {
          title: "Excellence",
          desc: "We are committed to delivering the highest quality in everything we create, from code to design to user experience."
        },
        collaboration: {
          title: "Collaboration",
          desc: "We believe in the power of teamwork and partnership, both within our organization and with our clients."
        },
        innovation: {
          title: "Innovation",
          desc: "We continuously explore new technologies and methodologies to expand the boundaries of what's possible."
        },
        mission: "Our mission is to create digital experiences that blend artistic expression with technical excellence, delivering solutions that not only meet our clients' needs but exceed their expectations and create lasting impact."
      },
      journey: {
        title: "Our Journey",
        subtitle: "The key milestones in StudioKó's growth and evolution",
        milestones: [
          {
            year: "2024",
            title: "Birth of the Idea",
            description: "At the end of 2024, the vision of creating a digital company is born — combining video game development and creative solutions. This led to the early concepts of Maikonik and StudioKó.",
            side: "left",
          },
          {
            year: "February 2025",
            title: "Ludic Jam Begins",
            description: "The founder learns about the Ludic Jam and begins assembling a multidisciplinary team from classmates to compete with purpose and creativity.",
            side: "right",
          },
          {
            year: "March 2025",
            title: "Tibucami is Born",
            description: "The core idea of Tibucami takes shape — a culturally rich action-adventure game inspired by Rarámuri mythology, with unique storytelling and visual identity.",
            side: "left",
          },
          {
            year: "April 2025",
            title: "Ludic Jam Achievement",
            description: "During the 3-day event, the team stands out among 29 participants and becomes one of the 10 winners, earning a full scholarship by winning the Entrepreneurship category.",
            side: "right",
          },
          {
            year: "May 2025",
            title: "StudioKó is Formed",
            description: "StudioKó is officially founded, establishing a close collaboration with BosoZoku (independent game studio) and creating Maikonik Media as its digital solutions division.",
            side: "left",
          },
        ]
      },
      achievements: {
        title: "Achievements & Awards",
        subtitle: "Recognition of our journey, talent, and meaningful participation in the creative industry",
        ludicJam: {
          title: "Ludic Jam Winner – Entrepreneurship",
          desc: "The BosoZoku team, led by Ramón Aguilera, was selected as one of the 10 winners among 29 teams in the Ludic Jam 2025, winning the Entrepreneurship category and earning a 100% scholarship.",
          date: "April 2025"
        },
        nasa: {
          title: "NASA Space Apps Challenge – Mentor",
          desc: "We participated as mentors in the International NASA Space Apps Challenge, helping teams improve their UX, communication, and storytelling strategies.",
          date: "October 2024"
        },
        tibucami: {
          title: "Tibucami – Cultural & Artistic Recognition",
          desc: "Tibucami, the original 3D adventure game developed by BosoZoku, has been recognized for its unique visual identity and Rarámuri cultural inspiration, blending mythology with gameplay innovation.",
          date: "March 2025"
        }
      },
      cta: {
        title: "Let's Create Something Amazing Together",
        subtitle: "Whether you're interested in BosoZoku's games or Maikonik Media's creative agency services, we'd love to hear from you.",
        contact: "Get in Touch",
        careers: "Join Our Team"
      }
    },
    es: {
      hero: {
        title: "Acerca de",
        subtitle: "Nuestra historia, misión y el equipo detrás de nuestra empresa digital creativa"
      },
      story: {
        title: "Nuestra Historia",
        p1: "StudioKó nació de la idea de que el arte y la tecnología no deberían vivir separados. Fundada en 2018, comenzó como un centro creativo moldeado por una profunda pasión por el diseño, la narrativa y el desarrollo. Con raíces tanto en el arte digital como en las experiencias interactivas, nuestro fundador imaginó un estudio donde la creatividad se encuentra con el código.",
        p2: "Lo que comenzó como un pequeño equipo creativo se convirtió en una empresa digital de espectro completo, combinando estética audaz con funcionalidad inteligente. A medida que evolucionamos, también lo hizo nuestra misión: ofrecer experiencias digitales significativas que conecten emocionalmente y funcionen a la perfección.",
        p3: "Hoy, StudioKó colabora estrechamente con dos proyectos principales:",
        division1: "BosoZoku",
        division1Desc: ", un estudio independiente de videojuegos liderado por Ramón Aguilera, enfocado en experiencias interactivas y propiedad intelectual original, y",
        division2: "Maikonik Media",
        division2Desc: ", nuestra agencia digital que ofrece soluciones creativas y de software para marcas modernas.",
        together: "Juntos, construimos mundos, plataformas e historias que dejan un impacto duradero."
      },
      ceo: {
        title: "Conoce a Nuestro CEO",
        name: "Ramón Aguilera",
        bio: "Ramón Aguilera es un creativo multidisciplinario con amplia experiencia en desarrollo de videojuegos, diseño web y estrategia digital. Como CEO de StudioKó y líder de BosoZoku, dirige la visión creativa de ambos proyectos, enfocándose en crear experiencias inmersivas basadas en la identidad cultural y narrativa innovadora.\n\nCon experiencia que va desde hackathons premiados hasta mentoría en desafíos internacionales de NASA, Ramón combina habilidad técnica y visión artística para expandir las fronteras de los medios interactivos. Su liderazgo impulsa proyectos como Tibucami, una aventura de acción 3D inspirada en la mitología Rarámuri, desarrollada por el equipo de BosoZoku.\n\nContinúa innovando en cada proyecto—ya sea construyendo mundos digitales o dando forma a experiencias de marca únicas."
      },
      coo: {
        title: "Conoce a Nuestro COO",
        name: "Miguel Millán",
        bio: "Miguel Millán es un estratega digital y líder creativo con experiencia en gestión de proyectos multimedia y producción de contenido. Como COO de StudioKó, dirige Maikonik Media, la división de soluciones digitales y creativas de la compañía.\n\nCon un enfoque meticuloso en la optimización de procesos y la excelencia operativa, Miguel supervisa la implementación de proyectos para garantizar que cada solución digital cumpla con los más altos estándares de calidad y efectividad. Su experiencia en edición y producción de contenido aporta una perspectiva única a cada proyecto.\n\nSu visión combina innovación tecnológica con estrategias de negocio efectivas, impulsando el crecimiento de StudioKó mientras mantiene el enfoque en crear experiencias digitales significativas para los clientes."
      },
      values: {
        title: "Nuestra Misión y Valores",
        subtitle: "Los principios que guían nuestro trabajo y definen nuestra cultura empresarial",
        creativity: {
          title: "Creatividad",
          desc: "Abordamos cada proyecto con perspectivas frescas y pensamiento innovador para crear experiencias digitales únicas."
        },
        excellence: {
          title: "Excelencia",
          desc: "Estamos comprometidos con ofrecer la más alta calidad en todo lo que creamos, desde código hasta diseño y experiencia de usuario."
        },
        collaboration: {
          title: "Colaboración",
          desc: "Creemos en el poder del trabajo en equipo y las alianzas, tanto dentro de nuestra organización como con nuestros clientes."
        },
        innovation: {
          title: "Innovación",
          desc: "Exploramos continuamente nuevas tecnologías y metodologías para expandir los límites de lo posible."
        },
        mission: "Nuestra misión es crear experiencias digitales que combinen expresión artística con excelencia técnica, ofreciendo soluciones que no solo satisfagan las necesidades de nuestros clientes, sino que superen sus expectativas y creen un impacto duradero."
      },
      journey: {
        title: "Nuestro Recorrido",
        subtitle: "Los hitos clave en el crecimiento y la evolución de StudioKó",
        milestones: [
          {
            year: "2024",
            title: "Nacimiento de la Idea",
            description: "A finales de 2024, nace la visión de crear una empresa digital que combine desarrollo de videojuegos y soluciones creativas. Esto llevó a los primeros conceptos de Maikonik y StudioKó.",
            side: "left",
          },
          {
            year: "Febrero 2025",
            title: "Comienza el Ludic Jam",
            description: "El fundador conoce sobre el Ludic Jam y comienza a reunir un equipo multidisciplinario de compañeros para competir con propósito y creatividad.",
            side: "right",
          },
          {
            year: "Marzo 2025",
            title: "Nace Tibucami",
            description: "Toma forma la idea central de Tibucami — un juego de aventuras culturalmente rico inspirado en la mitología Rarámuri, con narrativa única e identidad visual distintiva.",
            side: "left",
          },
          {
            year: "Abril 2025",
            title: "Logro en Ludic Jam",
            description: "Durante el evento de 3 días, el equipo destaca entre 29 participantes y se convierte en uno de los 10 ganadores, obteniendo una beca completa al ganar la categoría de Emprendimiento.",
            side: "right",
          },
          {
            year: "Mayo 2025",
            title: "Se Forma StudioKó",
            description: "StudioKó se funda oficialmente, estableciendo una colaboración estrecha con BosoZoku (estudio independiente de videojuegos) y creando Maikonik Media como su división de soluciones digitales.",
            side: "left",
          },
        ]
      },
      achievements: {
        title: "Logros y Reconocimientos",
        subtitle: "Reconocimiento de nuestro recorrido, talento y participación significativa en la industria creativa",
        ludicJam: {
          title: "Ganador de Ludic Jam – Emprendimiento",
          desc: "El equipo de BosoZoku, liderado por Ramón Aguilera, fue seleccionado como uno de los 10 ganadores entre 29 equipos en el Ludic Jam 2025, ganando la categoría de Emprendimiento y obteniendo una beca del 100%.",
          date: "Abril 2025"
        },
        nasa: {
          title: "NASA Space Apps Challenge – Mentor",
          desc: "Participamos como mentores en el International NASA Space Apps Challenge, ayudando a equipos a mejorar su UX, comunicación y estrategias narrativas.",
          date: "Octubre 2024"
        },
        tibucami: {
          title: "Tibucami – Reconocimiento Cultural y Artístico",
          desc: "Tibucami, el juego original de aventuras 3D desarrollado por BosoZoku, ha sido reconocido por su identidad visual única e inspiración cultural Rarámuri, fusionando mitología con innovación en gameplay.",
          date: "Marzo 2025"
        }
      },
      cta: {
        title: "Creemos Algo Increíble Juntos",
        subtitle: "Ya sea que estés interesado en los videojuegos de BosoZoku o los servicios de agencia creativa de Maikonik Media, nos encantaría saber de ti.",
        contact: "Contáctanos",
        careers: "Únete a Nuestro Equipo"
      }
    }
  };

  // Use translations based on selected language
  const t = content[language];

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-[80vh] flex items-center">
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
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.hero.title}{" "}
              <span className="bg-gradient-to-r from-bosozoku via-primary to-maikonik bg-clip-text text-transparent">
                StudioKó
              </span>
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

          <motion.div className="mt-16 relative" style={{ y, opacity }}>
            <div className="relative mx-auto max-w-5xl aspect-[16/9] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/mikiyyo.png?height=1080&width=1920&text=StudioKó Team"
                alt="StudioKó Team"
                width={1920}
                height={1080}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Our Story */}
      <SectionTransition className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.story.title}</h2>
              <p className="text-muted-foreground mb-6">
                {t.story.p1}
              </p>
              <p className="text-muted-foreground mb-6">
                {t.story.p2}
              </p>
              <p className="text-muted-foreground">
                {t.story.p3}
                <br />
                <span className="text-primary">{t.story.division1}</span>{t.story.division1Desc}
                <br />
                <span className="text-primary">{t.story.division2}</span>{t.story.division2Desc}
                <br />
                {t.story.together}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden aspect-square shadow-2xl">
                <Image
                  src="/ourstory.png"
                  alt="StudioKó Story"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-xl opacity-30"></div>
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-bosozoku/20 to-maikonik/20 rounded-xl blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </SectionTransition>

      {/* Founder Section */}
      <SectionTransition>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary rounded-xl opacity-30"></div>
              <div className="absolute -bottom-12 -right-12 w-full h-full bg-gradient-to-br from-bosozoku/20 to-maikonik/20 rounded-xl blur-xl"></div>
              <div className="relative z-10 rounded-xl overflow-hidden aspect-square shadow-2xl">
                <Image
                  src="/founder.png?height=800&width=800&text=Ramón Aguilera"
                  alt="Ramón Aguilera - CEO"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.ceo.title}</h2>
              <h3 className="text-xl font-bold text-primary mb-4">{t.ceo.name}</h3>
              <p className="text-muted-foreground mb-6 whitespace-pre-line">
                {t.ceo.bio}
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://www.linkedin.com/in/ram%C3%B3n-aguilera-95a2732a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionTransition>

      {/* COO Section */}
      <SectionTransition className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.coo.title}</h2>
              <h3 className="text-xl font-bold text-primary mb-4">{t.coo.name}</h3>
              <p className="text-muted-foreground mb-6 whitespace-pre-line">
                {t.coo.bio}
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-primary rounded-xl opacity-30"></div>
              <div className="absolute -bottom-12 -left-12 w-full h-full bg-gradient-to-bl from-maikonik/20 to-bosozoku/20 rounded-xl blur-xl"></div>
              <div className="relative z-10 rounded-xl overflow-hidden aspect-square shadow-2xl">
                <Image
                  src="/mikey.png"
                  alt="Miguel Millán - COO"
                  width={800}
                  height={800}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionTransition>

      {/* Mission & Values */}
      <SectionTransition>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.values.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.values.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-6 text-center"
            >
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.values.creativity.title}</h3>
              <p className="text-muted-foreground">
                {t.values.creativity.desc}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-6 text-center"
            >
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.values.excellence.title}</h3>
              <p className="text-muted-foreground">
                {t.values.excellence.desc}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-6 text-center"
            >
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.values.collaboration.title}</h3>
              <p className="text-muted-foreground">
                {t.values.collaboration.desc}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-6 text-center"
            >
              <div className="bg-primary/10 rounded-full p-4 inline-flex mb-6">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t.values.innovation.title}</h3>
              <p className="text-muted-foreground">
                {t.values.innovation.desc}
              </p>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              {t.values.mission}
            </p>
          </div>
        </div>
      </SectionTransition>

      {/* Timeline */}
      <SectionTransition className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.journey.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.journey.subtitle}
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>

            {t.journey.milestones.map((item, index) => (
              <div key={index} className="relative z-10 mb-12">
                <div className={`flex items-center ${item.side === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}>
                  <div className="md:w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-primary"></div>
                  </div>
                  <motion.div
                    className={`md:w-1/2 glassmorphism rounded-xl p-6 ${item.side === "left" ? "md:mr-10" : "md:ml-10"}`}
                    initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-primary font-bold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Visual Separator */}
      <div className="py-12 bg-gradient-to-r from-bosozoku/5 to-maikonik/5">
        <div className="container mx-auto px-4">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>
      </div>

      {/* Achievements */}
      <SectionTransition className="bg-gradient-to-br from-bosozoku/5 via-background to-maikonik/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.achievements.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.achievements.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ludic Jam */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bosozoku/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-6 rounded-lg overflow-hidden aspect-video">
                  <Image
                    src="/ludicjam.png"
                    alt="Ludic Jam 2025"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.achievements.ludicJam.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.achievements.ludicJam.desc}
                </p>
                <div className="text-sm text-muted-foreground">
                  {t.achievements.ludicJam.date}
                </div>
              </div>
            </motion.div>

            {/* NASA Space Apps Mentor */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maikonik/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-6 rounded-lg overflow-hidden aspect-video">
                  <Image
                    src="/nasa.png"
                    alt="NASA Space Apps Mentor"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.achievements.nasa.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.achievements.nasa.desc}
                </p>
                <div className="text-sm text-muted-foreground">
                  {t.achievements.nasa.date}
                </div>
              </div>
            </motion.div>

            {/* Tibucami – Cultural Impact */}
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-6 rounded-lg overflow-hidden aspect-video">
                  <Image
                    src="/tibucami.png"
                    alt="Tibucami - Cultural Game"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{t.achievements.tibucami.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {t.achievements.tibucami.desc}
                </p>
                <div className="text-sm text-muted-foreground">
                  {t.achievements.tibucami.date}
                </div>
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
            <p className="text-xl text-muted-foreground mb-8">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-bosozoku to-maikonik hover:opacity-90 transition-opacity"
              >
                <Link href="/contact">{t.cta.contact}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/careers">{t.cta.careers}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionTransition>
    </div>
  )
}
