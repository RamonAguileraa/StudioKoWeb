"use client"

import { useRef, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Award, Lightbulb, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTransition from "@/components/section-transition"
import AnimatedBlob from "@/components/animated-blob"
import { useLanguage } from "@/context/language-context"

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface ValueItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface Content {
  hero: {
    title: string;
    subtitle: string;
  };
  story: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    division1: string;
    division1Desc: string;
    division2: string;
    division2Desc: string;
    together: string;
  };
  team: {
    title: string;
    subtitle: string;
    members: TeamMember[];
  };
  values: {
    title: string;
    subtitle: string;
    items: ValueItem[];
    mission: string;
  };
  journey: {
    title: string;
    subtitle: string;
    milestones: Array<{
      year: string;
      title: string;
      description: string;
      side: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

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
        title: "Bienvenido a StudioKó",
        subtitle: "Nuestra historia, misión y el equipo detrás de nuestra empresa digital creativa"
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
      marketing: {
        title: "Meet Our Marketing Lead",
        name: "Fernanda Torres",
        bio: "Fernanda Torres is a dynamic marketing strategist with expertise in digital brand development and audience engagement. As Marketing Lead at StudioKó, she drives the brand strategy across both BosoZoku and Maikonik Media, ensuring cohesive messaging and impactful market presence.\n\nWith a deep understanding of contemporary digital marketing trends and consumer behavior, Fernanda crafts compelling campaigns that resonate with diverse audiences. Her innovative approach to storytelling and visual communication helps amplify StudioKó's creative projects and client success stories.\n\nFernanda's strategic vision and creative execution ensure that StudioKó's unique identity and values reach the right audiences at the right time, building meaningful connections between the company and its community."
      },
      team: {
        title: "Our Team",
        subtitle: "Meet the creative minds behind StudioKó",
        members: [
          {
            name: "Ramón Aguilera",
            role: "CEO & Creative Director",
            bio: "Ramón Aguilera is a multidisciplinary creative with extensive experience in game development, web design, and digital strategy.",
            image: "/team/ramon.jpg"
          },
          {
            name: "Miguel Millán",
            role: "COO & Digital Strategist",
            bio: "Miguel Millán is a digital strategist and creative leader with experience in multimedia project management and content production.",
            image: "/team/miguel.jpg"
          },
          {
            name: "Fernanda Torres",
            role: "Marketing Lead",
            bio: "Fernanda Torres is a dynamic marketing strategist with expertise in digital brand development and audience engagement.",
            image: "/team/fernanda.jpg"
          }
        ]
      },
      values: {
        title: "Our Mission & Values",
        subtitle: "The principles that guide our work and define our company culture",
        items: [
          {
            title: "Creativity",
            description: "We approach every project with fresh perspectives and innovative thinking to create unique digital experiences.",
            icon: Lightbulb
          },
          {
            title: "Excellence",
            description: "We are committed to delivering the highest quality in everything we create, from code to design to user experience.",
            icon: Award
          },
          {
            title: "Collaboration",
            description: "We believe in the power of teamwork and partnership, both within our organization and with our clients.",
            icon: Users
          },
          {
            title: "Innovation",
            description: "We continuously explore new technologies and methodologies to expand the boundaries of what's possible.",
            icon: Rocket
          }
        ],
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
        title: "Let's Create Something Amazing Together",
        subtitle: "Whether you're interested in BosoZoku's games or Maikonik Media's creative agency services, we'd love to hear from you.",
        primaryButton: "Get in Touch",
        secondaryButton: "Join Our Team"
      }
    },
    es: {
      hero: {
        title: "Bienvenido a StudioKó",
        subtitle: "Nuestra historia, misión y el equipo detrás de nuestra empresa digital creativa"
      },
      story: {
        title: "Nuestra Historia",
        p1: "StudioKó nació de la idea de que el arte y la tecnología no deberían vivir separados. Fundada en 2025, comenzó como un centro creativo moldeado por una profunda pasión por el diseño, la narrativa y el desarrollo. Con raíces tanto en el arte digital como en las experiencias interactivas, nuestro fundador imaginó un estudio donde la creatividad se encuentra con el código.",
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
        bio: "Miguel Millán es un estratega digital con experiencia en gestión de proyectos multimedia y producción de contenido. Como COO de StudioKó, dirige Maikonik Media, la división de soluciones digitales y creativas de la compañía.\n\nCon un enfoque meticuloso en la optimización de procesos y la excelencia operativa, Miguel supervisa la implementación de proyectos para garantizar que cada solución digital cumpla con los más altos estándares de calidad y efectividad. Su experiencia en edición y producción de contenido aporta una perspectiva única a cada proyecto.\n\nSu visión combina innovación tecnológica con estrategias de negocio efectivas, impulsando el crecimiento de StudioKó mientras mantiene el enfoque en crear experiencias digitales significativas para los clientes."
      },
      marketing: {
        title: "Conoce a Nuestra Líder de Marketing",
        name: "Fernanda Torres",
        bio: "Fernanda Torres es una estratega de marketing dinámico con experiencia en desarrollo de marcas digitales y engagement del público. Como Líder de Marketing en StudioKó, dirige la estrategia de marca a través de BosoZoku y Maikonik Media, asegurando mensajes coherentes y presencia de mercado impactante.\n\nCon una profunda comprensión de las tendencias de marketing digital contemporáneo y comportamiento del consumidor, Fernanda crea campañas convincentes que resonan con audiencias diversas. Su enfoque innovador en narrativa y comunicación visual ayuda a amplificar los proyectos creativos de StudioKó y las historias de éxito de los clientes.\n\nLa visión estratégica y ejecución creativa de Fernanda aseguran que la identidad única y valores de StudioKó alcancen las audiencias adecuadas en el momento adecuado, construyendo conexiones significativas entre la compañía y su comunidad."
      },
      team: {
        title: "Nuestro Equipo",
        subtitle: "Conoce las mentes creativas detrás de StudioKó",
        members: [
          {
            name: "Ramón Aguilera",
            role: "CEO & Director Creativo",
            bio: "Ramón Aguilera es un creativo multidisciplinario con amplia experiencia en desarrollo de videojuegos, diseño web y estrategia digital.",
            image: "/team/ramon.jpg"
          },
          {
            name: "Miguel Millán",
            role: "COO & Estratega Digital",
            bio: "Miguel Millán es un estratega digital y líder creativo con experiencia en gestión de proyectos multimedia y producción de contenido.",
            image: "/team/miguel.jpg"
          },
          {
            name: "Fernanda Torres",
            role: "Líder de Marketing",
            bio: "Fernanda Torres es una estratega de marketing dinámico con experiencia en desarrollo de marcas digitales y engagement del público.",
            image: "/team/fernanda.jpg"
          }
        ]
      },
      values: {
        title: "Nuestra Misión y Valores",
        subtitle: "Los principios que guían nuestro trabajo y definen nuestra cultura empresarial",
        items: [
          {
            title: "Creatividad",
            description: "Abordamos cada proyecto con perspectivas frescas y pensamiento innovador para crear experiencias digitales únicas.",
            icon: Lightbulb
          },
          {
            title: "Excelencia",
            description: "Estamos comprometidos con ofrecer la más alta calidad en todo lo que creamos, desde código hasta diseño y experiencia de usuario.",
            icon: Award
          },
          {
            title: "Colaboración",
            description: "Creemos en el poder del trabajo en equipo y las alianzas, tanto dentro de nuestra organización como con nuestros clientes.",
            icon: Users
          },
          {
            title: "Innovación",
            description: "Exploramos continuamente nuevas tecnologías y metodologías para expandir los límites de lo posible.",
            icon: Rocket
          }
        ],
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
        primaryButton: "Contáctanos",
        secondaryButton: "Únete a Nuestro Equipo"
      }
    }
  };

  // Use translations based on selected language
  const t = useMemo(() => content[language], [language])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 via-transparent to-maikonik/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-maikonik/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-32 mt-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-maikonik via-pink-400 to-maikonik bg-clip-text text-transparent">
            {t.hero.title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
        </motion.div>

        {/* Story Section */}
        <SectionTransition>
          <div className="container mx-auto px-4 py-24">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl" />
              <div className="container mx-auto px-4 py-12 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-maikonik bg-clip-text text-transparent">
                      {t.story.title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {t.story.p1}
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {t.story.p2}
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
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
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative aspect-video rounded-2xl overflow-hidden shadow-xl"
                  >
                    <Image
                      src="/ourstory.png"
                      alt="StudioKó Story"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </SectionTransition>

        {/* Team Section */}
        <SectionTransition>
          <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-maikonik to-primary bg-clip-text text-transparent">
                {t.team.title}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                {t.team.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {t.team.members.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glassmorphism rounded-xl p-6 text-center border border-border/40 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionTransition>

        {/* Values Section - Mejorada con animación de hover */}
        <SectionTransition>
          <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.values.title}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                {t.values.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {t.values.items.map((item, index) => (
                <div
                  key={item.title}
                  className="group bg-card border border-border rounded-lg p-6 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/60"
                >
                  <div className="mb-4 flex justify-center">
                    <item.icon className="h-8 w-8 text-primary icon-hover-animate" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center max-w-2xl mx-auto text-muted-foreground text-base">
              {t.values.mission}
            </div>
          </div>
        </SectionTransition>

        {/* Journey Section - Mejorada visualmente */}
        <SectionTransition>
          <div className="container mx-auto px-4 py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.journey.title}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                {t.journey.subtitle}
              </p>
            </div>
            <div className="relative">
              {/* Línea central con gradiente */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 rounded-full" style={{background: 'linear-gradient(to bottom, #6366f1 0%, #a855f7 100%)'}} />
              <div className="space-y-20">
                {t.journey.milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className="relative flex items-center min-h-[160px]"
                  >
                    {milestone.side === 'left' ? (
                      <>
                        <div className="w-1/2 pr-8 flex justify-end">
                          <div className="bg-card border border-border rounded-lg p-6 w-full max-w-md text-left shadow-lg transition-all duration-300">
                            <span className="block text-primary text-sm font-semibold mb-2">{milestone.year}</span>
                            <h3 className="text-lg font-bold mb-1">{milestone.title}</h3>
                            <p className="text-muted-foreground text-sm">{milestone.description}</p>
                          </div>
                        </div>
                        <div className="w-0 flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-primary border-4 border-background z-10 timeline-dot" />
                        </div>
                        <div className="w-1/2" />
                      </>
                    ) : (
                      <>
                        <div className="w-1/2" />
                        <div className="w-0 flex flex-col items-center">
                          <div className="w-5 h-5 rounded-full bg-primary border-4 border-background z-10 timeline-dot" />
                        </div>
                        <div className="w-1/2 pl-8 flex justify-start">
                          <div className="bg-card border border-border rounded-lg p-6 w-full max-w-md text-left shadow-lg transition-all duration-300">
                            <span className="block text-primary text-sm font-semibold mb-2">{milestone.year}</span>
                            <h3 className="text-lg font-bold mb-1">{milestone.title}</h3>
                            <p className="text-muted-foreground text-sm">{milestone.description}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SectionTransition>

        {/* CTA Section */}
        <SectionTransition>
          <div className="container mx-auto px-4 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
              <p className="text-xl text-muted-foreground mb-8">{t.cta.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-maikonik hover:opacity-90 transition-opacity"
                >
                  <Link href="/contact">{t.cta.primaryButton}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                >
                  <Link href="/careers">{t.cta.secondaryButton}</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </SectionTransition>
      </div>

      {/* Agregar estilos para animaciones */}
      <style jsx global>{`
        .timeline-dot {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(99,102,241,0.7); }
          70% { box-shadow: 0 0 0 10px rgba(99,102,241,0); }
          100% { box-shadow: 0 0 0 0 rgba(99,102,241,0); }
        }
        .icon-hover-animate {
          transition: transform 0.4s cubic-bezier(.4,2,.6,1);
        }
        .group:hover .icon-hover-animate {
          transform: translateX(8px) rotate(-8deg);
        }
      `}</style>
    </div>
  )
}
