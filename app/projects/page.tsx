"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Github, ExternalLink, Code2, Palette, Briefcase } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { Card, CardContent } from "@/components/ui/card"

const projects = {
  en: [
    {
      title: "StudioKo Website",
      description: "Modern and responsive website built with Next.js 15, featuring a beautiful design and smooth animations.",
      image: "/studiokous.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      category: "Web Development",
      icon: Code2,
      github: "https://github.com/yourusername/studioko",
      live: "https://studioko.com"
    },
    {
      title: "Mikiyyo Branding",
      description: "Complete brand identity design including logo, color palette, typography, and brand guidelines.",
      image: "/mikiyyo.png",
      technologies: ["Branding", "UI/UX", "Typography", "Color Theory"],
      category: "Branding",
      icon: Palette,
      github: "https://github.com/yourusername/mikiyyo",
      live: "https://mikiyyo.com"
    },
    {
      title: "Digital Media Studio",
      description: "Professional digital media studio showcasing creative projects and innovative solutions.",
      image: "/digitalmedia.png",
      technologies: ["Digital Media", "Creative Design", "Visual Effects", "Animation"],
      category: "Digital Media",
      icon: Briefcase,
      github: "https://github.com/yourusername/digitalmedia",
      live: "https://digitalmedia.studio"
    }
  ],
  es: [
    {
      title: "Sitio Web StudioKo",
      description: "Sitio web moderno y responsivo construido con Next.js 14, con un diseño hermoso y animaciones suaves.",
      image: "/studiokous.png",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      category: "Desarrollo Web",
      icon: Code2,
      github: "https://github.com/yourusername/studioko",
      live: "https://studioko.com"
    },
    {
      title: "Branding Mikiyyo",
      description: "Diseño completo de identidad de marca incluyendo logo, paleta de colores, tipografía y guías de marca.",
      image: "/mikiyyo.png",
      technologies: ["Branding", "UI/UX", "Tipografía", "Teoría del Color"],
      category: "Branding",
      icon: Palette,
      github: "https://github.com/yourusername/mikiyyo",
      live: "https://mikiyyo.com"
    },
    {
      title: "Estudio de Medios Digitales",
      description: "Estudio profesional de medios digitales que muestra proyectos creativos y soluciones innovadoras.",
      image: "/digitalmedia.png",
      technologies: ["Medios Digitales", "Diseño Creativo", "Efectos Visuales", "Animación"],
      category: "Medios Digitales",
      icon: Briefcase,
      github: "https://github.com/yourusername/digitalmedia",
      live: "https://digitalmedia.studio"
    }
  ]
}

export default function ProjectsPage() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = {
    en: ["All", "Web Development", "Branding", "Mobile Development"],
    es: ["Todos", "Desarrollo Web", "Branding", "Desarrollo Móvil"]
  }

  const filteredProjects = activeCategory === "all" 
    ? projects[language]
    : projects[language].filter(project => project.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-maikonik to-bosozoku bg-clip-text text-transparent">
            {language === "en" ? "Our Projects" : "Nuestros Proyectos"}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === "en" 
              ? "Discover our latest work and innovative solutions"
              : "Descubre nuestro último trabajo y soluciones innovadoras"}
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories[language].map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category === "All" || category === "Todos" ? "all" : category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                (activeCategory === "all" && (category === "All" || category === "Todos")) ||
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden border-border/40 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <project.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm text-muted-foreground">{project.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`GitHub - ${project.title}`}
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label={`Live Demo - ${project.title}`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      </div>
                      <Link
                        href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        aria-label={`View Details - ${project.title}`}
                      >
                        {language === "en" ? "View Details" : "Ver Detalles"}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 