"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Instagram, Linkedin, Github, ArrowUp, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/language-context"
import { LegalDialog } from "@/components/legal-dialog"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const { language } = useLanguage()
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Translations
  const content = {
    en: {
      tagline: "Blending creativity and technology to craft exceptional digital experiences.",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      maikonik: "Maikonik Media",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    es: {
      tagline: "Combinando creatividad y tecnología para crear experiencias digitales excepcionales.",
      about: "Acerca de",
      services: "Servicios",
      portfolio: "Portafolio",
      contact: "Contacto",
      maikonik: "Maikonik Media",
      rights: "Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
    },
  }

  const t = content[language]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-r from-bosozoku/10 to-maikonik/10 dark:from-bosozoku/20 dark:to-maikonik/20">
      {/* Blob decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-bosozoku/10 dark:bg-bosozoku/20 rounded-full filter blur-3xl opacity-50 blob-animation"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-maikonik/10 dark:bg-maikonik/20 rounded-full filter blur-3xl opacity-50 blob-animation"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/Logo original.png"
                alt="StudioKo Logo"
                width={100}
                height={30}
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">{t.tagline}</p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/studioko"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com/company/studioko"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/studioko"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">StudioKó</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.portfolio}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t.maikonik}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/maikonik"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.about}
                </Link>
              </li>
              <li>
                <Link
                  href="/maikonik#services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/maikonik#portfolio"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.portfolio}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">{t.contact}</h4>
            <Button
              asChild
              variant="outline"
              className="w-full justify-start gap-2"
            >
              <Link href="/contact">
                <Phone className="h-4 w-4" />
                {t.contact}
              </Link>
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} StudioKó. {t.rights}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <LegalDialog type="privacy">
              <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {t.privacy}
              </button>
            </LegalDialog>
            <LegalDialog type="terms">
              <button className="text-xs text-muted-foreground hover:text-primary transition-colors">
                {t.terms}
              </button>
            </LegalDialog>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 p-3 rounded-full glassmorphism shadow-lg z-50 transition-all",
          showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        whileHover={{ y: -5 }}
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  )
}
