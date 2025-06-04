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
      title: "Aroma Café",
      description: "Platform for independent coffee shops where users can discover, rate, and share their experiences in different cafés around the city.",
      image: "/projects/aromacafe.png",
      technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
      category: "Web Development",
      icon: Code2,
      github: "https://github.com/yourusername/aromacafe",
      live: "https://aromacafe.com"
    },
    {
      title: "Ramón Aguilera Portafolio",
      description: "Platform for independent coffee shops where users can discover, rate, and share their experiences in different cafés around the city.",
      image: "/projects/aromacafe.png",
      technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
      category: "Web Development",
      icon: Code2,
      github: "https://github.com/yourusername/aromacafe",
      live: "https://aromacafe.com"
    },
    {
      title: "Miguel Millán Portafolio",
      description: "Platform for independent coffee shops where users can discover, rate, and share their experiences in different cafés around the city.",
      image: "/projects/aromacafe.png",
      technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
      category: "Web Development",
      icon: Code2,
      github: "https://github.com/yourusername/aromacafe",
      live: "https://aromacafe.com"
    },
    {
      title: "Portafolio de Editor de Video",
      description: "Platform for independent coffee shops where users can discover, rate, and share their experiences in different cafés around the city.",
      image: "/projects/aromacafe.png",
      technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
      category: "Web Development",
      icon: Code2,
      github: "https://github.com/yourusername/aromacafe",
      live: "https://aromacafe.com"
    },
    {
      title: "Enligne",
      description: "App for managing virtual queues in local businesses, allowing users to book their turn from anywhere.",
      image: "/projects/enligne.png",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      category: "Mobile Development",
      icon: Briefcase,
      github: "https://github.com/yourusername/enligne",
      live: "https://enligne.app"
    },
    {
      title: "Rincón Café",
      description: "Social network for coffee lovers to share recipes, reviews, and events related to the coffee world.",
      image: "/projects/rinconcafe.png",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Chakra UI"],
      category: "Web Development",
      icon: Code2,
      github: "https://github.com/yourusername/rinconcafe",
      live: "https://rinconcafe.com"
    },
    {
      title: "TibuCami Page",
      description: "Personal page for content creators, with portfolio, blog, and social media links.",
      image: "/projects/tibucamipage.png",
      technologies: ["Gatsby", "GraphQL", "Styled Components"],
      category: "Branding",
      icon: Palette,
      github: "https://github.com/yourusername/tibucami",
      live: "https://tibucami.com"
    },
    {
      title: "Restaurant Promo Video",
      description: "Engaging promotional video showcasing the restaurant's ambiance, signature dishes, and dining experience.",
      image: "/projects/restaurant-promo.png",
      technologies: ["Adobe Premiere", "After Effects", "Color Grading"],
      category: "Video Editing",
      icon: Briefcase,
      github: "",
      live: "https://youtu.be/QnxMZ5ElFYY"
    },
    {
      title: "YouTube Channel Intro",
      description: "Dynamic and eye-catching YouTube channel introduction animation that captures viewer attention.",
      image: "/projects/youtube-intro.png",
      technologies: ["After Effects", "Motion Graphics", "Sound Design"],
      category: "Video Editing",
      icon: Briefcase,
      github: "",
      live: "https://youtu.be/AdMngOqDYTo"
    }
  ],
  es: [
    {
      title: "Aroma Café",
      description: "Plataforma web para cafeterías independientes donde los usuarios pueden descubrir, calificar y compartir sus experiencias en diferentes cafés de la ciudad.",
      image: "/projects/aromacafe.png",
      technologies: ["Next.js", "React", "Firebase", "Tailwind CSS"],
      category: "Desarrollo Web",
      icon: Code2,
      github: "https://github.com/yourusername/aromacafe",
      live: "https://aromacafe.com"
    },
    {
      title: "Enligne",
      description: "Aplicación para gestión de filas virtuales en negocios locales, permitiendo a los usuarios reservar su turno desde cualquier lugar.",
      image: "/projects/enligne.png",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io"],
      category: "Desarrollo Móvil",
      icon: Briefcase,
      github: "https://github.com/yourusername/enligne",
      live: "https://enligne.app"
    },
    {
      title: "Rincón Café",
      description: "Red social para amantes del café, donde pueden compartir recetas, reseñas y eventos relacionados con el mundo cafetero.",
      image: "/projects/rinconcafe.png",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Chakra UI"],
      category: "Desarrollo Web",
      icon: Code2,
      github: "https://github.com/yourusername/rinconcafe",
      live: "https://rinconcafe.com"
    },
    {
      title: "TibuCami Page",
      description: "Página personal para creadores de contenido, con portafolio, blog y enlaces a redes sociales.",
      image: "/projects/tibucamipage.png",
      technologies: ["Gatsby", "GraphQL", "Styled Components"],
      category: "Branding",
      icon: Palette,
      github: "https://github.com/yourusername/tibucami",
      live: "https://tibucami.com"
    },
    {
      title: "Video Promocional de Restaurante",
      description: "Video promocional cautivador que muestra el ambiente del restaurante, platillos distintivos y experiencia gastronómica.",
      image: "/projects/restaurant-promo.png",
      technologies: ["Adobe Premiere", "After Effects", "Color Grading"],
      category: "Edición de Video",
      icon: Briefcase,
      github: "",
      live: "https://youtu.be/QnxMZ5ElFYY"
    },
    {
      title: "Intro para Canal de YouTube",
      description: "Animación dinámica y llamativa para introducción de canal de YouTube que captura la atención del espectador.",
      image: "/projects/youtube-intro.png",
      technologies: ["After Effects", "Motion Graphics", "Sound Design"],
      category: "Edición de Video",
      icon: Briefcase,
      github: "",
      live: "https://youtu.be/AdMngOqDYTo"
    }
  ]
}

export default function ProjectsPage() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = {
    en: ["All", "Web Development", "Branding", "Mobile Development", "Video Editing"],
    es: ["Todos", "Desarrollo Web", "Branding", "Desarrollo Móvil", "Edición de Video"]
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-maikonik to-bosozoku bg-clip-text text-transparent py-2">
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
                    {project.category === "Video Editing" || project.category === "Edición de Video" ? (
                      <iframe
                        src={`${project.live.replace('youtu.be/', 'youtube.com/embed/')}?autoplay=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${project.live.split('/').pop()}&mute=1&modestbranding=1`}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                        frameBorder="0"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
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
                        {project.category !== "Video Editing" && 
                         project.category !== "Edición de Video" && 
                         project.category !== "Branding" && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`GitHub - ${project.title}`}
                          >
                            <Github className="w-5 h-5" />
                          </Link>
                        )}
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