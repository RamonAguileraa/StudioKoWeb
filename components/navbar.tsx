"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Code2, Palette, Briefcase, Home, Phone, Users, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = {
  en: [
    { name: "Home", href: "/", icon: Home },
    { 
      name: "StudioKo", 
      href: "/studioko",
      description: "Software Development",
      icon: Code2
    },
    { 
      name: "Maikonik", 
      href: "/maikonik",
      description: "Creative Agency",
      icon: Palette
    },
    { name: "Services", href: "/services", icon: Wrench },
    { name: "Projects", href: "/projects", icon: Briefcase },
    { name: "About", href: "/about", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
  ],
  es: [
    { name: "Inicio", href: "/", icon: Home },
    { 
      name: "StudioKo", 
      href: "/studioko",
      description: "Desarrollo de Software",
      icon: Code2
    },
    { 
      name: "Maikonik", 
      href: "/maikonik",
      description: "Agencia Creativa",
      icon: Palette
    },
    { name: "Servicios", href: "/services", icon: Wrench },
    { name: "Proyectos", href: "/projects", icon: Briefcase },
    { name: "Nosotros", href: "/about", icon: Users },
    { name: "Contacto", href: "/contact", icon: Phone },
  ],
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/90 backdrop-blur-xl shadow-xl border-b border-border/40" 
          : "bg-background/50 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-primary via-maikonik to-bosozoku bg-clip-text text-transparent hover:from-maikonik hover:via-primary hover:to-bosozoku transition-all duration-500">
                StudioKo
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigation[language].map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg flex items-center space-x-2 ${
                    pathname === item.href 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  onMouseEnter={() => setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.description && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                
                {/* Dropdown for StudioKo and Maikonik */}
                {item.description && activeDropdown === item.href && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute left-0 mt-2 w-56 rounded-xl bg-background/95 backdrop-blur-xl shadow-xl border border-border/40 overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <item.icon className="w-5 h-5 text-primary" />
                        <h3 className="font-semibold text-sm">{item.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
            
            {/* Theme and Language Toggles */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-border/40">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <ThemeToggle />
            <LanguageToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border/40"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigation[language].map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      pathname === item.href 
                        ? "text-primary bg-primary/10" 
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </div>
                      {item.description && (
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      )}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
