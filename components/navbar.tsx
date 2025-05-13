"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/context/language-context"

export default function Navbar() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  // Translations
  const content = {
    en: {
      home: "Home",
      divisions: "Divisions",
      bosozoku: "BosoZoku",
      maikonik: "Maikonik Media",
      about: "About Us",
      contact: "Contact",
      getInTouch: "Get in Touch",
    },
    es: {
      home: "Inicio",
      divisions: "Divisiones",
      bosozoku: "BosoZoku",
      maikonik: "Maikonik Media",
      about: "Nosotros",
      contact: "Contacto",
      getInTouch: "Contáctanos",
    },
  }

  const t = content[language]

  // Dynamic navigation links based on language
  const navLinks = [
    { name: t.home, href: "/" },
    {
      name: t.divisions,
      href: "#",
      submenu: [
        { name: t.bosozoku, href: "/bosozoku" },
        { name: t.maikonik, href: "/maikonik" },
      ],
    },
    { name: t.about, href: "/about" },
    { name: t.contact, href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glassmorphism py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-bosozoku to-maikonik bg-clip-text text-transparent"
          >
            StudioKó
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.submenu ? (
                <button
                  onClick={() => toggleSubmenu(link.name)}
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors",
                    pathname === link.href ? "text-primary" : "hover:text-primary",
                  )}
                >
                  {link.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    pathname === link.href ? "text-primary" : "hover:text-primary",
                  )}
                >
                  {link.name}
                </Link>
              )}

              {link.submenu && (
                <AnimatePresence>
                  {openSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 glassmorphism rounded-md shadow-lg py-1 z-10"
                    >
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm hover:bg-primary/10 transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <LanguageToggle />
          <ModeToggle />
          <Button asChild className="bg-gradient-to-r from-bosozoku to-maikonik hover:opacity-90 transition-opacity">
            <Link href="/contact">{t.getInTouch}</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          <LanguageToggle />
          <ModeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glassmorphism"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(link.name)}
                        className="flex items-center justify-between py-2 text-sm font-medium"
                      >
                        {link.name}
                        <ChevronDown
                          className={cn("h-4 w-4 transition-transform", openSubmenu === link.name ? "rotate-180" : "")}
                        />
                      </button>
                      <AnimatePresence>
                        {openSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 flex flex-col space-y-2 mt-2"
                          >
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                className="py-2 text-sm hover:text-primary transition-colors"
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "py-2 text-sm font-medium transition-colors",
                        pathname === link.href ? "text-primary" : "",
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Button
                asChild
                className="w-full bg-gradient-to-r from-bosozoku to-maikonik hover:opacity-90 transition-opacity"
              >
                <Link href="/contact">{t.getInTouch}</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
