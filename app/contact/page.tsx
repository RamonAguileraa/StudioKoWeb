"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Send, Mail, Phone, MessageSquare, User, Building2, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionTransition from "@/components/section-transition"
import AnimatedBlob from "@/components/animated-blob"
import { useLanguage } from "@/context/language-context"

export default function ContactPage() {
  const { language } = useLanguage()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [activeTab, setActiveTab] = useState("form")
  const [formStep, setFormStep] = useState(1)
  const [selectedDay, setSelectedDay] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "general",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(formRef, { once: false, amount: 0.3 })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const nextStep = () => {
    setFormStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setFormStep((prev) => prev - 1)
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = language === 'es' ? 'El nombre es requerido' : 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = language === 'es' ? 'El correo es requerido' : 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = language === 'es' ? 'Correo electrónico inválido' : 'Invalid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = language === 'es' ? 'El mensaje es requerido' : 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'No especificada',
          interest: formData.interest,
          service: formData.service || 'No especificado',
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Error al enviar el correo')
      }

      setFormSubmitted(true)
      setFormData({
        name: "",
        email: "",
        company: "",
        interest: "general",
        service: "",
        message: "",
      })
    } catch (error) {
      console.error('Error al enviar el formulario:', error)
      setErrors({
        submit: language === 'es' ? 'Error al enviar el formulario. Por favor, intente nuevamente.' : 'Error submitting form. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleScheduleCall = () => {
    if (!selectedDay || !selectedTime) {
      return
    }

    const startDate = new Date()
    startDate.setHours(parseInt(selectedTime.split(":")[0]))
    startDate.setMinutes(0)
    startDate.setSeconds(0)

    const endDate = new Date(startDate)
    endDate.setMinutes(30) // Duración de 30 minutos

    const eventDetails = {
      text: "Llamada con StudioKó",
      details: "Consulta de 30 minutos con el equipo de StudioKó",
      location: "Llamada telefónica",
      start: startDate.toISOString(),
      end: endDate.toISOString(),
    }

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventDetails.text
    )}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(
      eventDetails.location
    )}&dates=${eventDetails.start.replace(/[-:]/g, "").split(".")[0]}Z/${eventDetails.end
      .replace(/[-:]/g, "")
      .split(".")[0]}Z`

    window.open(googleCalendarUrl, "_blank")
  }

  // Text content based on language
  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "We'd love to hear from you. Let's start a conversation.",
      contactInfo: "Contact Information",
      reachOut: "Reach out to us directly or fill out the form and we'll get back to you as soon as possible.",
      email: "Email",
      phone: "Phone",
      office: "Office",
      followUs: "Follow Us",
      formTitle: "Send Us a Message",
      nameLabel: "Full Name",
      namePlaceholder: "John Doe",
      emailLabel: "Email",
      emailPlaceholder: "john@example.com",
      companyLabel: "Company (Optional)",
      companyPlaceholder: "Your Company",
      interestLabel: "I'm interested in:",
      generalInquiry: "General Inquiry",
      gameDevLabel: "BosoZoku (Game Development)",
      creativeAgencyLabel: "Maikonik Media (Creative Agency)",
      serviceLabel: "Service",
      messageLabel: "Message",
      messagePlaceholder: "Tell us about your project or inquiry...",
      sendMessage: "Send Message",
      thankYou: "Thank You!",
      successMessage: "Your message has been sent successfully. We'll get back to you soon.",
      sendAnother: "Send Another Message",
      next: "Next",
      back: "Back",
      submit: "Submit",
      whatsappTitle: "Contact via WhatsApp",
      whatsappText: "Get a quick response by messaging us directly on WhatsApp",
      whatsappButton: "Chat on WhatsApp",
      callTitle: "Schedule a Call",
      callText: "Book a 30-minute consultation with our team",
      callButton: "Schedule Now",
      step1Title: "Basic Information",
      step2Title: "Project Details",
      step3Title: "Final Message",
      formTab: "Contact Form",
      whatsappTab: "WhatsApp",
      callTab: "Schedule a Call",
      interests: {
        general: "General Inquiry",
        webDesign: "Web Design & Development",
        digitalMarketing: "Digital Marketing",
        branding: "Branding & Identity",
        seo: "SEO & Content Strategy",
        socialMedia: "Social Media Management"
      },
    },
    es: {
      title: "Contáctanos",
      subtitle: "Nos encantaría saber de ti. Comencemos una conversación.",
      contactInfo: "Información de Contacto",
      reachOut:
        "Comunícate directamente con nosotros o completa el formulario y nos pondremos en contacto contigo lo antes posible.",
      email: "Correo Electrónico",
      phone: "Teléfono",
      office: "Oficina",
      followUs: "Síguenos",
      formTitle: "Envíanos un Mensaje",
      nameLabel: "Nombre Completo",
      namePlaceholder: "Juan Pérez",
      emailLabel: "Correo Electrónico",
      emailPlaceholder: "juan@ejemplo.com",
      companyLabel: "Empresa (Opcional)",
      companyPlaceholder: "Tu Empresa",
      interestLabel: "Estoy interesado en:",
      generalInquiry: "Consulta General",
      gameDevLabel: "BosoZoku (Desarrollo de Juegos)",
      creativeAgencyLabel: "Maikonik Media (Agencia Creativa)",
      serviceLabel: "Servicio",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntanos sobre tu proyecto o consulta...",
      sendMessage: "Enviar Mensaje",
      thankYou: "¡Gracias!",
      successMessage: "Tu mensaje ha sido enviado con éxito. Nos pondremos en contacto contigo pronto.",
      sendAnother: "Enviar Otro Mensaje",
      next: "Siguiente",
      back: "Atrás",
      submit: "Enviar",
      whatsappTitle: "Contactar por WhatsApp",
      whatsappText: "Obtén una respuesta rápida enviándonos un mensaje directamente por WhatsApp",
      whatsappButton: "Chatear por WhatsApp",
      callTitle: "Programar una Llamada",
      callText: "Reserva una consulta de 30 minutos con nuestro equipo",
      callButton: "Programar Ahora",
      step1Title: "Información Básica",
      step2Title: "Detalles del Proyecto",
      step3Title: "Mensaje Final",
      formTab: "Formulario de Contacto",
      whatsappTab: "WhatsApp",
      callTab: "Programar Llamada",
      interests: {
        general: "Consulta General",
        webDesign: "Diseño y Desarrollo Web",
        digitalMarketing: "Marketing Digital",
        branding: "Branding e Identidad",
        seo: "SEO y Estrategia de Contenidos",
        socialMedia: "Gestión de Redes Sociales"
      },
    },
  }

  const t = content[language]

  return (
    <div className="relative pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center">
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
              {t.title}{" "}
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
              {t.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <SectionTransition className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-24"
              >
                <h2 className="text-3xl font-bold mb-6">{t.contactInfo}</h2>
                <p className="text-muted-foreground mb-8">{t.reachOut}</p>

                <div className="space-y-6">
                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">{t.email}</h3>
                      <p className="text-muted-foreground">contact.studioko.dev@gmail.com
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">{t.phone}</h3>
                      <p className="text-muted-foreground">+52 (614) 465-9147</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                  </motion.div>
                </div>

                <motion.div
                  className="mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h3 className="text-xl font-bold mb-4">{t.followUs}</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/bosozoku.studio/"
                      className="bg-muted p-3 rounded-full hover:bg-primary/10 transition-colors hover:scale-110 transform duration-200"
                    >
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
                    <a
                      href="#"
                      className="bg-muted p-3 rounded-full hover:bg-primary/10 transition-colors hover:scale-110 transform duration-200"
                    >
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
                  </div>
                </motion.div>


              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-3" ref={formRef}>
              <Tabs defaultValue="form" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="form" className="text-sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {t.formTab}
                  </TabsTrigger>
                  <TabsTrigger value="whatsapp" className="text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                      <path d="M9.5 13.5c.5 1.5 2.5 2 4 1" />
                    </svg>
                    {t.whatsappTab}
                  </TabsTrigger>
                  <TabsTrigger value="call" className="text-sm">
                    <Phone className="mr-2 h-4 w-4" />
                    {t.callTab}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="form" className="mt-0">
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="glassmorphism rounded-xl p-8 text-center"
                    >
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-6 rounded-lg mb-6">
                        <div className="flex justify-center mb-4">
                          <div className="bg-green-200 dark:bg-green-800 rounded-full p-3">
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
                              className="text-green-600 dark:text-green-300"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{t.thankYou}</h3>
                        <p>{t.successMessage}</p>
                      </div>
                      <Button onClick={() => setFormSubmitted(false)}>{t.sendAnother}</Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                      transition={{ duration: 0.5 }}
                      className="glassmorphism rounded-xl p-8"
                    >
                      <h2 className="text-2xl font-bold mb-6">{t.formTitle}</h2>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                          <div
                            className="absolute left-0 top-0 h-1 bg-gradient-to-r from-bosozoku to-maikonik rounded-full"
                            style={{ width: `${(formStep / 3) * 100}%` }}
                          ></div>
                          <div className="flex justify-between mb-8 mt-4">
                            <div
                              className={`text-sm font-medium ${formStep >= 1 ? "text-primary" : "text-muted-foreground"}`}
                            >
                              {t.step1Title}
                            </div>
                            <div
                              className={`text-sm font-medium ${formStep >= 2 ? "text-primary" : "text-muted-foreground"}`}
                            >
                              {t.step2Title}
                            </div>
                            <div
                              className={`text-sm font-medium ${formStep >= 3 ? "text-primary" : "text-muted-foreground"}`}
                            >
                              {t.step3Title}
                            </div>
                          </div>
                        </div>

                        <AnimatePresence mode="wait">
                          {formStep === 1 && (
                            <motion.div
                              key="step1"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-6"
                            >
                              <div className="space-y-2">
                                <Label htmlFor="name" className="flex items-center">
                                  <User className="mr-2 h-4 w-4 text-muted-foreground" />
                                  {t.nameLabel}
                                </Label>
                                <Input
                                  id="name"
                                  name="name"
                                  placeholder={t.namePlaceholder}
                                  value={formData.name}
                                  onChange={handleChange}
                                  required
                                  className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="email" className="flex items-center">
                                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                                  {t.emailLabel}
                                </Label>
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  placeholder={t.emailPlaceholder}
                                  value={formData.email}
                                  onChange={handleChange}
                                  required
                                  className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="company" className="flex items-center">
                                  <Building2 className="mr-2 h-4 w-4 text-muted-foreground" />
                                  {t.companyLabel}
                                </Label>
                                <Input
                                  id="company"
                                  name="company"
                                  placeholder={t.companyPlaceholder}
                                  value={formData.company}
                                  onChange={handleChange}
                                  className="transition-all duration-300 focus:ring-2 focus:ring-primary"
                                />
                              </div>

                              <div className="pt-4">
                                <Button
                                  type="button"
                                  onClick={nextStep}
                                  className="w-full bg-gradient-to-r from-bosozoku to-maikonik hover:opacity-90"
                                >
                                  {t.next}
                                </Button>
                              </div>
                            </motion.div>
                          )}

                          {formStep === 2 && (
                            <motion.div
                              key="step2"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-6"
                            >
                              <div className="space-y-4">
                                <Label>{t.interestLabel}</Label>
                                <RadioGroup
                                  value={formData.interest}
                                  onValueChange={handleRadioChange}
                                  className="space-y-3"
                                >
                                  <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                                    <RadioGroupItem value="general" id="general" />
                                    <Label htmlFor="general" className="cursor-pointer flex-1">
                                      {t.interests.general}
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                                    <RadioGroupItem value="webDesign" id="webDesign" />
                                    <Label htmlFor="webDesign" className="cursor-pointer flex-1">
                                      {t.interests.webDesign}
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                                    <RadioGroupItem value="digitalMarketing" id="digitalMarketing" />
                                    <Label htmlFor="digitalMarketing" className="cursor-pointer flex-1">
                                      {t.interests.digitalMarketing}
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                                    <RadioGroupItem value="branding" id="branding" />
                                    <Label htmlFor="branding" className="cursor-pointer flex-1">
                                      {t.interests.branding}
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                                    <RadioGroupItem value="seo" id="seo" />
                                    <Label htmlFor="seo" className="cursor-pointer flex-1">
                                      {t.interests.seo}
                                    </Label>
                                  </div>
                                  <div className="flex items-center space-x-2 p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                                    <RadioGroupItem value="socialMedia" id="socialMedia" />
                                    <Label htmlFor="socialMedia" className="cursor-pointer flex-1">
                                      {t.interests.socialMedia}
                                    </Label>
                                  </div>
                                </RadioGroup>
                              </div>

                              {formData.interest === "maikonik" && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="space-y-2"
                                >
                                  <Label htmlFor="service">{t.serviceLabel}</Label>
                                  <Select
                                    value={formData.service}
                                    onValueChange={(value) => handleSelectChange("service", value)}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value="web">Web Development</SelectItem>
                                      <SelectItem value="mobile">Mobile Development</SelectItem>
                                      <SelectItem value="design">UI/UX Design</SelectItem>
                                      <SelectItem value="branding">Branding</SelectItem>
                                      <SelectItem value="marketing">Digital Marketing</SelectItem>
                                      <SelectItem value="video">Video Production</SelectItem>
                                    </SelectContent>
                                  </Select>
                                </motion.div>
                              )}

                              <div className="flex justify-between pt-4">
                                <Button type="button" variant="outline" onClick={prevStep}>
                                  {t.back}
                                </Button>
                                <Button
                                  type="button"
                                  onClick={nextStep}
                                  className="bg-gradient-to-r from-bosozoku to-maikonik hover:opacity-90"
                                >
                                  {t.next}
                                </Button>
                              </div>
                            </motion.div>
                          )}

                          {formStep === 3 && (
                            <motion.div
                              key="step3"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                              className="space-y-6"
                            >
                              <div className="space-y-4">
                                <Label htmlFor="message">{t.messageLabel}</Label>
                                <Textarea
                                  id="message"
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  placeholder={t.messagePlaceholder}
                                  className={`min-h-[150px] ${errors.message ? 'border-red-500' : ''}`}
                                />
                                {errors.message && (
                                  <p className="text-sm text-red-500">{errors.message}</p>
                                )}
                              </div>

                              <div className="flex justify-between pt-4">
                                <Button type="button" variant="outline" onClick={prevStep}>
                                  {t.back}
                                </Button>
                                {errors.submit && (
                                  <div className="p-3 rounded-lg bg-red-100 text-red-700">
                                    {errors.submit}
                                  </div>
                                )}
                                <Button
                                  type="submit"
                                  className="bg-gradient-to-r from-bosozoku to-maikonik hover:opacity-90"
                                  disabled={isSubmitting}
                                >
                                  {isSubmitting ? (
                                    <div className="flex items-center space-x-2">
                                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                      <span>{language === 'es' ? 'Enviando...' : 'Sending...'}</span>
                                    </div>
                                  ) : (
                                    <>
                                      <Send className="mr-2 h-4 w-4" />
                                      {t.sendMessage}
                                    </>
                                  )}
                                </Button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </form>
                    </motion.div>
                  )}
                </TabsContent>

                <TabsContent value="whatsapp" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glassmorphism rounded-xl p-8 text-center"
                  >
                    <div className="bg-green-500/10 rounded-full p-6 inline-flex mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M9.5 13.5c.5 1.5 2.5 2 4 1" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{t.whatsappTitle}</h3>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t.whatsappText}</p>
                    <Button
                      className="bg-green-500 hover:bg-green-600 transition-colors"
                      size="lg"
                      onClick={() => window.open("https://wa.me/52614283958", "_blank")}
                    >
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
                        className="mr-2"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M9.5 13.5c.5 1.5 2.5 2 4 1" />
                      </svg>
                      {t.whatsappButton}
                    </Button>
                  </motion.div>
                </TabsContent>

                <TabsContent value="call" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="glassmorphism rounded-xl p-8"
                  >
                    <div className="text-center mb-8">
                      <div className="bg-primary/10 rounded-full p-6 inline-flex mb-6">
                        <Phone className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{t.callTitle}</h3>
                      <p className="text-muted-foreground mb-8 max-w-md mx-auto">{t.callText}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                        <div
                          key={day}
                          className={`p-4 rounded-lg border ${
                            selectedDay === day
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary hover:bg-primary/5"
                          } transition-colors cursor-pointer`}
                          onClick={() => setSelectedDay(day)}
                        >
                          <div className="font-bold mb-2">{day}</div>
                          <div className="text-sm text-muted-foreground">9:00 AM - 5:00 PM</div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                      {["9:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map((time) => (
                        <div
                          key={time}
                          className={`p-3 rounded-lg border ${
                            selectedTime === time
                              ? "border-primary bg-primary/5"
                              : "border-border hover:border-primary hover:bg-primary/5"
                          } transition-colors cursor-pointer text-center`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-bosozoku to-maikonik hover:opacity-90" 
                      size="lg"
                      onClick={handleScheduleCall}
                      disabled={!selectedDay || !selectedTime}
                    >
                      {t.callButton}
                    </Button>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </SectionTransition>
    </div>
  )
}
