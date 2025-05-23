"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Play, Download, Users, Code, Palette, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionTransition from "@/components/section-transition"
import AnimatedBlob from "@/components/animated-blob"
import { useLanguage } from "@/context/language-context"

export default function BosoZokuPage() {
  const [videoPlaying, setVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLDivElement>(null)
  const isVideoInView = useInView(videoRef, { once: true, amount: 0.3 })
  const [activeTab, setActiveTab] = useState("story")
  const { language } = useLanguage()

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Animated blobs con mejor posicionamiento y animación */}
        <AnimatedBlob 
          color="#6C2BD9" 
          size="800px" 
          top="-400px" 
          left="-400px" 
          opacity={0.15}
          animationDuration={20}
        />
        <AnimatedBlob 
          color="#8B5CF6" 
          size="600px" 
          bottom="-300px" 
          right="-300px" 
          opacity={0.1} 
          delay={2}
          animationDuration={25}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-bosozoku"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  BosoZoku
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Un estudio independiente de desarrollo de videojuegos creando experiencias inmersivas inspiradas en mitologías culturales y estilos visuales únicos.
                </motion.p>
              </div>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-bosozoku hover:bg-bosozoku/90 transition-all duration-300 transform hover:scale-105"
                >
                  <a href="#tibucami">Descubre Tibucami</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-bosozoku text-bosozoku hover:bg-bosozoku/10 transition-all duration-300 transform hover:scale-105"
                >
                  <a href="#team">Conoce al Equipo</a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative rounded-xl overflow-hidden aspect-video transform transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/placeholder.svg?height=720&width=1280&text=BosoZoku"
                  alt="BosoZoku Game Development"
                  width={1280}
                  height={720}
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-bosozoku rounded-xl transform transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section con mejor diseño y animaciones */}
      <SectionTransition id="about" className="bg-muted/50 py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-bosozoku to-bosozoku-light bg-clip-text text-transparent">
              Sobre BosoZoku
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creando juegos que combinan narrativas culturales con gameplay innovador y experiencias únicas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="h-8 w-8 text-bosozoku" />,
                title: "Visión Creativa",
                description: "Nos inspiramos en diversas mitologías culturales para crear experiencias de juego únicas que cuentan historias significativas."
              },
              {
                icon: <Palette className="h-8 w-8 text-bosozoku" />,
                title: "Estilo Artístico",
                description: "Nuestro enfoque visual distintivo combina formas de arte tradicionales con técnicas modernas de diseño de juegos."
              },
              {
                icon: <Code className="h-8 w-8 text-bosozoku" />,
                title: "Excelencia Técnica",
                description: "Utilizamos tecnologías de vanguardia en el desarrollo de juegos para dar vida a nuestras visiones creativas."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glassmorphism rounded-xl p-8 text-center transform transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="bg-bosozoku/10 rounded-full p-4 inline-flex mb-6 transform transition-transform duration-300 hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              BosoZoku fue fundado con la misión de crear juegos que no solo entretengan sino que también preserven y celebren el patrimonio cultural a través de la narrativa interactiva. Nuestro equipo combina experiencia técnica con visión artística para crear experiencias de juego únicas y memorables.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-bosozoku text-bosozoku hover:bg-bosozoku/10 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/about">Descubre nuestra historia</Link>
            </Button>
          </motion.div>
        </div>
      </SectionTransition>

      {/* Tibucami Game Section */}
      <SectionTransition id="tibucami">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tibucami</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our flagship game inspired by Rarámuri mythology with unique stop-motion clay visuals
            </p>
          </div>

          <div ref={videoRef} className="relative rounded-xl overflow-hidden aspect-video mb-16 max-w-4xl mx-auto">
            <Image
              src="/placeholder.svg?height=720&width=1280&text=Tibucami Trailer"
              alt="Tibucami Game Trailer"
              width={1280}
              height={720}
              className="object-cover"
            />
            {!videoPlaying && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: isVideoInView ? 1 : 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-bosozoku hover:bg-bosozoku/90 transition-colors"
                  onClick={() => setVideoPlaying(true)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Trailer
                </Button>
              </motion.div>
            )}
          </div>

          <Tabs defaultValue="story" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="story">Story</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>
            <TabsContent value="story" className="mt-6 p-6 glassmorphism rounded-xl">
              <h3 className="text-2xl font-bold mb-4">The Story of Tibucami</h3>
              <p className="mb-4">
                Set in a world inspired by Rarámuri mythology, Tibucami follows the journey of a young clay figure who
                must navigate between the world of the living and the spirit realm to restore balance to their fractured
                world.
              </p>
              <p className="mb-4">
                As ancient forces awaken and threaten both realms, players must harness the power of ancestral spirits,
                solve environmental puzzles, and overcome challenging platforming sequences to fulfill an ancient
                prophecy.
              </p>
              <p>
                The game explores themes of cultural identity, environmental harmony, and the connection between past
                and present through its unique narrative and visual style.
              </p>
            </TabsContent>
            <TabsContent value="features" className="mt-6 p-6 glassmorphism rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Game Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-bosozoku/10 rounded-full p-1">
                    <div className="h-2 w-2 rounded-full bg-bosozoku"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">Unique Visual Style</h4>
                    <p className="text-muted-foreground">
                      Hand-crafted stop-motion inspired clay visuals that bring the world to life
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-bosozoku/10 rounded-full p-1">
                    <div className="h-2 w-2 rounded-full bg-bosozoku"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">Dual-World Gameplay</h4>
                    <p className="text-muted-foreground">
                      Seamlessly transition between the physical and spirit worlds to solve puzzles
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-bosozoku/10 rounded-full p-1">
                    <div className="h-2 w-2 rounded-full bg-bosozoku"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">Spirit Companions</h4>
                    <p className="text-muted-foreground">
                      Collect and bond with ancestral spirits that grant unique abilities
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-bosozoku/10 rounded-full p-1">
                    <div className="h-2 w-2 rounded-full bg-bosozoku"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">Environmental Storytelling</h4>
                    <p className="text-muted-foreground">
                      Discover the rich lore of the world through exploration and interaction
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 bg-bosozoku/10 rounded-full p-1">
                    <div className="h-2 w-2 rounded-full bg-bosozoku"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">Original Soundtrack</h4>
                    <p className="text-muted-foreground">
                      Immersive music inspired by traditional Rarámuri sounds and instruments
                    </p>
                  </div>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="gallery" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={`/placeholder.svg?height=400&width=400&text=Screenshot ${item}`}
                      alt={`Tibucami Screenshot ${item}`}
                      width={400}
                      height={400}
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-12 text-center">
            <Button asChild className="bg-bosozoku hover:bg-bosozoku/90 transition-colors">
              <Link href="#" className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download Press Kit
              </Link>
            </Button>
          </div>
        </div>
      </SectionTransition>

      {/* Team Section */}
      <SectionTransition id="team" className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The creative minds behind BosoZoku's game development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Alex Rivera", role: "Game Director", image: "1" },
              { name: "Maya Chen", role: "Lead Artist", image: "2" },
              { name: "Carlos Mendez", role: "Lead Programmer", image: "3" },
              { name: "Sophia Kim", role: "Narrative Designer", image: "4" },
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glassmorphism rounded-xl p-6 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=${member.name}`}
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
            <Button
              asChild
              variant="outline"
              className="border-bosozoku text-bosozoku hover:bg-bosozoku/10 transition-colors"
            >
              <Link href="/careers">
                <Users className="mr-2 h-4 w-4" />
                Join Our Team
              </Link>
            </Button>
          </div>
        </div>
      </SectionTransition>

      {/* Call to Action */}
      <SectionTransition className="bg-gradient-to-r from-bosozoku/10 to-bosozoku-light/10 dark:from-bosozoku/20 dark:to-bosozoku-light/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Collaborating?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ya seas un desarrollador de juegos, artista o narrador, siempre estamos abiertos a colaboraciones emocionantes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-bosozoku hover:bg-bosozoku/90 transition-colors">
                <Link href="/contact">Contáctanos</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-bosozoku text-bosozoku hover:bg-bosozoku/10 transition-colors"
              >
                <Link href="/maikonik">Explora Maikonik Media</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionTransition>
    </div>
  )
}
