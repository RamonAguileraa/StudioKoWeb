"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Award, Lightbulb, Users, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import SectionTransition from "@/components/section-transition"
import AnimatedBlob from "@/components/animated-blob"

export default function AboutPage() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

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
              About{" "}
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
              Our story, mission, and the team behind our creative digital company
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
              StudioKó was born from the idea that art and technology shouldn't live apart. Founded in 2018, it started as a creative hub shaped by a deep passion for design, storytelling, and development. With roots in both digital art and interactive experiences, our founder envisioned a studio where creativity meets code.
              </p>
              <p className="text-muted-foreground mb-6">
              What began as a small creative team grew into a full-spectrum digital company—combining bold aesthetics with smart functionality. As we evolved, so did our mission: to offer meaningful digital experiences that connect emotionally and perform flawlessly.
              </p>
              <p className="text-muted-foreground">
              Today, StudioKó colabora estrechamente con dos proyectos principales:
              <br />
             <span className="text-primary">🎮 BosoZoku</span>, un estudio independiente de videojuegos liderado por Ramón Aguilera, enfocado en experiencias interactivas y propiedad intelectual original, y
             <br />
              <span className="text-primary">🧠 Maikonik Media,</span> nuestra agencia digital que ofrece soluciones creativas y de software para marcas modernas.
              <br />
              Juntos, construimos mundos, plataformas e historias que dejan un impacto duradero.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our CEO</h2>
              <h3 className="text-xl font-bold text-primary mb-4">Ramón Aguilera</h3>
              <p className="text-muted-foreground mb-6">
              Ramón Aguilera es un creativo multidisciplinario con amplia experiencia en desarrollo de videojuegos, diseño web y estrategia digital. Como CEO de StudioKó y líder de BosoZoku, dirige la visión creativa de ambos proyectos, enfocándose en crear experiencias inmersivas basadas en la identidad cultural y narrativa innovadora.

              Con experiencia que va desde hackathons premiados hasta mentoría en desafíos internacionales de NASA, Ramón combina habilidad técnica y visión artística para expandir las fronteras de los medios interactivos. Su liderazgo impulsa proyectos como Tibucami, una aventura de acción 3D inspirada en la mitología Rarámuri, desarrollada por el equipo de BosoZoku.

              Continúa innovando en cada proyecto—ya sea construyendo mundos digitales o dando forma a experiencias de marca únicas.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our COO</h2>
              <h3 className="text-xl font-bold text-primary mb-4">Miguel Millán</h3>
              <p className="text-muted-foreground mb-6">
              Miguel Millán es un estratega digital y líder creativo con experiencia en gestión de proyectos multimedia y producción de contenido. Como COO de StudioKó, dirige Maikonik Media, la división de soluciones digitales y creativas de la compañía.
              Con un enfoque meticuloso en la optimización de procesos y la excelencia operativa, Miguel supervisa la implementación de proyectos para garantizar que cada solución digital cumpla con los más altos estándares de calidad y efectividad. Su experiencia en edición y producción de contenido aporta una perspectiva única a cada proyecto.
              Su visión combina innovación tecnológica con estrategias de negocio efectivas, impulsando el crecimiento de StudioKó mientras mantiene el enfoque en crear experiencias digitales significativas para los clientes.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our company culture
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
              <h3 className="text-xl font-bold mb-3">Creatividad</h3>
              <p className="text-muted-foreground">
                Abordamos cada proyecto con perspectivas frescas y pensamiento innovador para crear experiencias digitales únicas.
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
              <h3 className="text-xl font-bold mb-3">Excelencia</h3>
              <p className="text-muted-foreground">
                Estamos comprometidos con ofrecer la más alta calidad en todo lo que creamos, desde código hasta diseño y experiencia de usuario.
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
              <h3 className="text-xl font-bold mb-3">Colaboración</h3>
              <p className="text-muted-foreground">
                Creemos en el poder del trabajo en equipo y las alianzas, tanto dentro de nuestra organización como con nuestros clientes.
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
              <h3 className="text-xl font-bold mb-3">Innovación</h3>
              <p className="text-muted-foreground">
                Exploramos continuamente nuevas tecnologías y metodologías para expandir los límites de lo posible.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              Nuestra misión es crear experiencias digitales que combinen expresión artística con excelencia técnica,
              ofreciendo soluciones que no solo satisfagan las necesidades de nuestros clientes, sino que superen sus expectativas y creen un impacto duradero.
            </p>
          </div>
        </div>
      </SectionTransition>

      {/* Timeline */}
      <SectionTransition className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The key milestones in StudioKó's growth and evolution
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border"></div>

            {[
              {
                year: "2024",
                title: "Nacimiento de la Idea",
                description:
                  "A finales de 2024, nace la visión de crear una empresa digital que combine desarrollo de videojuegos y soluciones creativas. Esto llevó a los primeros conceptos de Maikonik y StudioKó.",
                side: "left",
              },
              {
                year: "Febrero 2025",
                title: "Comienza el Ludic Jam",
                description:
                  "El fundador conoce sobre el Ludic Jam y comienza a reunir un equipo multidisciplinario de compañeros para competir con propósito y creatividad.",
                side: "right",
              },
              {
                year: "Marzo 2025",
                title: "Nace Tibucami",
                description:
                  "Toma forma la idea central de Tibucami — un juego de aventuras culturalmente rico inspirado en la mitología Rarámuri, con narrativa única e identidad visual distintiva.",
                side: "left",
              },
              {
                year: "Abril 2025",
                title: "Logro en Ludic Jam",
                description:
                  "Durante el evento de 3 días, el equipo destaca entre 29 participantes y se convierte en uno de los 10 ganadores, obteniendo una beca completa al ganar la categoría de Emprendimiento.",
                side: "right",
              },
              {
                year: "Mayo 2025",
                title: "Se Forma StudioKó",
                description:
                  "StudioKó se funda oficialmente, estableciendo una colaboración estrecha con BosoZoku (estudio independiente de videojuegos) y creando Maikonik Media como su división de soluciones digitales.",
                side: "left",
              },
            ]
.map((item, index) => (
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

      {/* Team Section - Commented out for now
      <SectionTransition>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The talented individuals who make StudioKó's vision a reality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Ramón Aguilera", role: "Founder", image: "/founder.png" },
              { name: "Dorle Pérez", role: "Game Director", image: "/dorle.png" },
              { name: "Jean Lozano", role: "Lead Artist", image: "/jean.png" },
              { name: "Bernardo Islas", role: "Technical Director", image: "/berny.png" },
              { name: "David Salas", role: "Narrative Designer", image: "/deivi.png" },
              { name: "Gabriel Muñoz", role: "UI/UX Director", image: "/gabo.png" },
              { name: "Miguel Millán", role: "Lead Editor", image: "/enligne.png" }
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glassmorphism rounded-xl p-6 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <div className="flex justify-center space-x-3">
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  </Link>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild variant="outline">
              <Link href="/careers">
                Join Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionTransition>
      */}

      {/* Achievements */}
      <SectionTransition>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Awards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition of our journey, talent, and meaningful participation in the creative industry
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
                <h3 className="text-xl font-bold mb-2">Ludic Jam Winner – Entrepreneurship</h3>
                <p className="text-muted-foreground mb-4">
                  El equipo de BosoZoku, liderado por Ramón Aguilera, fue seleccionado como uno de los 10 ganadores entre 29 equipos en el Ludic Jam 2025, ganando la categoría de Emprendimiento y obteniendo una beca del 100%.
                </p>
                <div className="text-sm text-muted-foreground">Abril 2025</div>
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
                <h3 className="text-xl font-bold mb-2">NASA Space Apps Challenge – Mentor</h3>
                <p className="text-muted-foreground mb-4">
                  Participamos como mentores en el International NASA Space Apps Challenge, ayudando a equipos a mejorar su UX, comunicación y estrategias narrativas.
                </p>
                <div className="text-sm text-muted-foreground">Octubre 2024</div>
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
                <h3 className="text-xl font-bold mb-2">Tibucami – Reconocimiento Cultural y Artístico</h3>
                <p className="text-muted-foreground mb-4">
                  Tibucami, el juego original de aventuras 3D desarrollado por BosoZoku, ha sido reconocido por su identidad visual única e inspiración cultural Rarámuri, fusionando mitología con innovación en gameplay.
                </p>
                <div className="text-sm text-muted-foreground">Marzo 2025</div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Something Amazing Together</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ya sea que estés interesado en los videojuegos de BosoZoku o los servicios de agencia creativa de Maikonik Media, nos encantaría saber de ti.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-bosozoku to-maikonik hover:opacity-90 transition-opacity"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/careers">Join Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionTransition>
    </div>
  )
}
