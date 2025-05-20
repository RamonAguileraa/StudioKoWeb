"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Palette, Film, TrendingUp, Smartphone, Globe, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SectionTransition from "@/components/section-transition"
import AnimatedBlob from "@/components/animated-blob"

export default function MaikonikPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const portfolioItems = [
    { id: 1, title: "E-commerce Website", category: "web", image: "1" },
    { id: 2, title: "Brand Identity", category: "branding", image: "2" },
    { id: 3, title: "Mobile App", category: "mobile", image: "3" },
    { id: 4, title: "Marketing Campaign", category: "marketing", image: "4" },
    { id: 5, title: "UI/UX Design System", category: "design", image: "5" },
    { id: 6, title: "Corporate Video", category: "video", image: "6" },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Animated blobs */}
        <AnimatedBlob color="#F43F5E" size="600px" top="-300px" right="-300px" opacity={0.15} />
        <AnimatedBlob color="#FB7185" size="400px" bottom="-200px" left="-200px" opacity={0.1} delay={2} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-maikonik">Maikonik Media</h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Our creative and software agency delivering cutting-edge digital solutions for brands and businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-maikonik hover:bg-maikonik/90 transition-colors">
                  <a href="#services">Explore Services</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-maikonik text-maikonik hover:bg-maikonik/10 transition-colors"
                >
                  <a href="#portfolio">View Portfolio</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <Image
                  src="/placeholder.svg?height=720&width=1280&text=Maikonik Media"
                  alt="Maikonik Media Creative Agency"
                  width={1280}
                  height={720}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-maikonik rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <SectionTransition id="services" className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maikonik/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="bg-maikonik/10 rounded-full p-4 inline-flex mb-6">
                  <Globe className="h-8 w-8 text-maikonik" />
                </div>
                <h3 className="text-xl font-bold mb-3">Web Development</h3>
                <p className="text-muted-foreground mb-6">
                  Custom websites and web applications built with modern technologies and best practices.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    Responsive design
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    E-commerce solutions
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    Content management
                  </li>
                </ul>
                <Link
                  href="/maikonik/services/web"
                  className="text-sm font-medium text-maikonik flex items-center hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maikonik/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="bg-maikonik/10 rounded-full p-4 inline-flex mb-6">
                  <Smartphone className="h-8 w-8 text-maikonik" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mobile Development</h3>
                <p className="text-muted-foreground mb-6">
                  Native and cross-platform mobile applications for iOS and Android.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    User-centered design
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    Cross-platform solutions
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    App store optimization
                  </li>
                </ul>
                <Link
                  href="/maikonik/services/mobile"
                  className="text-sm font-medium text-maikonik flex items-center hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maikonik/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="bg-maikonik/10 rounded-full p-4 inline-flex mb-6">
                  <Palette className="h-8 w-8 text-maikonik" />
                </div>
                <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
                <p className="text-muted-foreground mb-6">
                  User-centered design solutions that enhance user experience and drive engagement.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    User research
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    Wireframing & prototyping
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    Usability testing
                  </li>
                </ul>
                <Link
                  href="/maikonik/services/design"
                  className="text-sm font-medium text-maikonik flex items-center hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maikonik/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="bg-maikonik/10 rounded-full p-4 inline-flex mb-6">
                  <Film className="h-8 w-8 text-maikonik" />
                </div>
                <h3 className="text-xl font-bold mb-3">Video Production</h3>
                <p className="text-muted-foreground mb-6">
                  High-quality video content for marketing, training, and storytelling.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    Corporate videos
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    Product demonstrations
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    Motion graphics
                  </li>
                </ul>
                <Link
                  href="/maikonik/services/video"
                  className="text-sm font-medium text-maikonik flex items-center hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maikonik/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="bg-maikonik/10 rounded-full p-4 inline-flex mb-6">
                  <MessageSquare className="h-8 w-8 text-maikonik" />
                </div>
                <h3 className="text-xl font-bold mb-3">Branding</h3>
                <p className="text-muted-foreground mb-6">Comprehensive brand identity development and strategy.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    Logo design
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    Brand guidelines
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    Brand messaging
                  </li>
                </ul>
                <Link
                  href="/maikonik/services/branding"
                  className="text-sm font-medium text-maikonik flex items-center hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maikonik/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="bg-maikonik/10 rounded-full p-4 inline-flex mb-6">
                  <TrendingUp className="h-8 w-8 text-maikonik" />
                </div>
                <h3 className="text-xl font-bold mb-3">Digital Marketing</h3>
                <p className="text-muted-foreground mb-6">
                  Strategic marketing solutions to grow your online presence and drive results.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    SEO optimization
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    Social media campaigns
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 bg-maikonik/10 rounded-full p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-maikonik"></div>
                    </div>
                    Content marketing
                  </li>
                </ul>
                <Link
                  href="/maikonik/services/marketing"
                  className="text-sm font-medium text-maikonik flex items-center hover:underline"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionTransition>

      {/* Portfolio Section */}
      <SectionTransition id="portfolio">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore our latest projects and creative work</p>
          </div>

          <div className="flex justify-center mb-8">
            <Tabs defaultValue="all" onValueChange={setActiveFilter}>
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="branding">Branding</TabsTrigger>
                <TabsTrigger value="video">Video</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Project ${item.id}`}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded-full bg-background/80 backdrop-blur-sm">
                      {item.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      A brief description of the project and the challenges we solved.
                    </p>
                    <Link
                      href={`/maikonik/portfolio/${item.id}`}
                      className="text-sm font-medium text-maikonik flex items-center hover:underline"
                    >
                      View Case Study
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="bg-gradient-to-r from-maikonik to-maikonik/80 hover:opacity-90 transition-opacity"
            >
              <Link href="/maikonik/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionTransition>

      {/* Case Studies */}
      <SectionTransition id="case-studies" className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Dive deeper into our most impactful projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-xl overflow-hidden aspect-video">
                <Image
                  src="/placeholder.svg?height=720&width=1280&text=Featured Case Study"
                  alt="Featured Case Study"
                  width={1280}
                  height={720}
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">E-commerce Platform Redesign</h3>
              <p className="text-muted-foreground mb-6">
                We helped a leading retailer transform their digital presence with a complete redesign of their
                e-commerce platform, resulting in a 45% increase in conversion rates and a 30% reduction in cart
                abandonment.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-bold text-maikonik">45%</h4>
                  <p className="text-sm text-muted-foreground">Increase in conversions</p>
                </div>
                <div>
                  <h4 className="font-bold text-maikonik">30%</h4>
                  <p className="text-sm text-muted-foreground">Reduction in cart abandonment</p>
                </div>
                <div>
                  <h4 className="font-bold text-maikonik">3x</h4>
                  <p className="text-sm text-muted-foreground">Mobile traffic growth</p>
                </div>
                <div>
                  <h4 className="font-bold text-maikonik">2.5M</h4>
                  <p className="text-sm text-muted-foreground">Monthly active users</p>
                </div>
              </div>
              <Button asChild className="bg-gradient-to-r from-maikonik to-maikonik/80 hover:opacity-90 transition-opacity">
                <Link href="/maikonik/case-studies/ecommerce-redesign">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glassmorphism rounded-xl p-6"
              >
                <div className="mb-6 rounded-lg overflow-hidden aspect-video">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Case Study ${item}`}
                    alt={`Case Study ${item}`}
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Case Study Title {item}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A brief overview of the project challenges and solutions implemented.
                </p>
                <Link
                  href={`/maikonik/case-studies/${item}`}
                  className="text-sm font-medium text-maikonik flex items-center hover:underline"
                >
                  Read Case Study
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Testimonials */}
      <SectionTransition>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">What our clients say about working with us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                company: "TechCorp Inc.",
                quote:
                  "Maikonik Media transformed our digital presence with a stunning website and effective marketing strategy. The results exceeded our expectations.",
                image: "1",
              },
              {
                name: "David Chen",
                company: "Retail Solutions",
                quote:
                  "The team at Maikonik delivered our mobile app on time and on budget. Their attention to detail and user experience expertise made all the difference.",
                image: "2",
              },
              {
                name: "Maria Rodriguez",
                company: "Global Brands",
                quote:
                  "Working with Maikonik on our brand refresh was a game-changer. They captured our vision perfectly and translated it into a cohesive identity.",
                image: "3",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glassmorphism rounded-xl p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4 rounded-full overflow-hidden h-12 w-12">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=${testimonial.name}`}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                <div className="flex text-maikonik">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="mr-1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionTransition>

      {/* Call to Action */}
      <SectionTransition className="bg-gradient-to-r from-maikonik/10 to-maikonik-light/10 dark:from-maikonik/20 dark:to-maikonik-light/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's work together to create exceptional digital experiences that drive results for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-maikonik to-maikonik/80 hover:opacity-90 transition-opacity">
                <Link href="/contact">Start a Project</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-maikonik text-maikonik hover:bg-maikonik/10 transition-colors"
              >
                <Link href="/studioko">Explore StudioKo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionTransition>
    </div>
  )
}
