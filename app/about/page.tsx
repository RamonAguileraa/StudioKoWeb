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
                src="/placeholder.svg?height=1080&width=1920&text=StudioKó Team"
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
                StudioKó was founded in 2018 with a vision to create a digital company that seamlessly blends artistic
                creativity with technical excellence. Our founder's background in both game development and digital
                design shaped our unique approach to digital experiences.
              </p>
              <p className="text-muted-foreground mb-6">
                What began as a small indie game studio quickly expanded to include a full-service creative agency as we
                recognized the need for comprehensive digital solutions that prioritize both aesthetics and
                functionality.
              </p>
              <p className="text-muted-foreground">
                Today, StudioKó operates through two specialized divisions: BosoZoku for game development and Maikonik
                Media for creative and software solutions, allowing us to deliver exceptional digital experiences across
                multiple platforms and industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <Image
                  src="/placeholder.svg?height=800&width=800&text=Our Story"
                  alt="StudioKó Story"
                  width={800}
                  height={800}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-xl"></div>
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
              <div className="relative rounded-xl overflow-hidden aspect-square">
                <Image
                  src="/placeholder.svg?height=800&width=800&text=Miguel Kó"
                  alt="Miguel Kó - Founder"
                  width={800}
                  height={800}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-xl"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Founder</h2>
              <h3 className="text-xl font-bold text-primary mb-4">Miguel Kó</h3>
              <p className="text-muted-foreground mb-6">
                Miguel Kó is a visionary creative director with over 15 years of experience in both game development and
                digital design. His unique background combines technical expertise with artistic sensibility, allowing
                him to bridge the gap between these two worlds.
              </p>
              <p className="text-muted-foreground mb-6">
                After working with leading studios and agencies around the world, Miguel founded StudioKó in 2018 with a
                mission to create digital experiences that blend artistic expression with technical excellence.
              </p>
              <p className="text-muted-foreground mb-6">
                His work has been recognized with numerous awards, and he regularly speaks at industry conferences about
                the intersection of game design, user experience, and digital storytelling.
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
              <h3 className="text-xl font-bold mb-3">Creativity</h3>
              <p className="text-muted-foreground">
                We approach every project with fresh perspectives and innovative thinking to create unique digital
                experiences.
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
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to delivering the highest quality in everything we create, from code to design to user
                experience.
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
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and partnership, both within our team and with our clients.
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
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously explore new technologies and methodologies to push the boundaries of what's possible.
              </p>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              Our mission is to create digital experiences that blend artistic expression with technical excellence,
              delivering solutions that not only meet our clients' needs but exceed their expectations and create
              lasting impact.
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
                year: "2018",
                title: "Foundation",
                description: "StudioKó was founded as an indie game development studio",
                side: "left",
              },
              {
                year: "2019",
                title: "First Game Release",
                description: "Released our first indie game title to critical acclaim",
                side: "right",
              },
              {
                year: "2020",
                title: "Expansion",
                description: "Launched Maikonik Media division to offer creative and software services",
                side: "left",
              },
              {
                year: "2021",
                title: "Team Growth",
                description: "Expanded our team to include specialists across multiple disciplines",
                side: "right",
              },
              {
                year: "2022",
                title: "Tibucami Development",
                description: "Began development of our flagship game Tibucami",
                side: "left",
              },
              {
                year: "2023",
                title: "New Studio",
                description: "Moved to a larger studio space to accommodate our growing team",
                side: "right",
              },
              {
                year: "2024",
                title: "Today",
                description: "Continuing to grow and innovate across both divisions",
                side: "left",
              },
            ].map((item, index) => (
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

      {/* Team Section */}
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
              { name: "Miguel Kó", role: "Founder & Creative Director", image: "1" },
              { name: "Alex Rivera", role: "Game Director", image: "2" },
              { name: "Maya Chen", role: "Lead Artist", image: "3" },
              { name: "Carlos Mendez", role: "Lead Programmer", image: "4" },
              { name: "Sophia Kim", role: "Narrative Designer", image: "5" },
              { name: "David Park", role: "UI/UX Director", image: "6" },
              { name: "Elena Rodriguez", role: "Marketing Strategist", image: "7" },
              { name: "James Wilson", role: "Technical Director", image: "8" },
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
            <Button asChild variant="outline">
              <Link href="/careers">
                Join Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </SectionTransition>

      {/* Achievements */}
      <SectionTransition className="bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Awards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recognition of our work and contributions to the industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bosozoku/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-6 rounded-lg overflow-hidden aspect-video">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Ludic Jam Winner"
                    alt="Ludic Jam Winner"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Ludic Jam Winner</h3>
                <p className="text-muted-foreground mb-4">
                  Our team won first place at the Ludic Game Jam with an innovative game concept that combined unique
                  mechanics and storytelling.
                </p>
                <div className="text-sm text-muted-foreground">2022</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maikonik/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-6 rounded-lg overflow-hidden aspect-video">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=NASA Space Apps"
                    alt="NASA Space Apps Mentor"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">NASA Space Apps Mentor</h3>
                <p className="text-muted-foreground mb-4">
                  Our founder served as a mentor for the NASA Space Apps Challenge, guiding teams in developing
                  innovative solutions to space-related challenges.
                </p>
                <div className="text-sm text-muted-foreground">2021</div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="glassmorphism rounded-xl p-6 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-6 rounded-lg overflow-hidden aspect-video">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Design Excellence"
                    alt="Design Excellence Award"
                    width={600}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">Design Excellence Award</h3>
                <p className="text-muted-foreground mb-4">
                  Maikonik Media received recognition for outstanding design work in the annual Digital Design Awards
                  for a client project.
                </p>
                <div className="text-sm text-muted-foreground">2023</div>
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
              Whether you're interested in our game development or creative agency services, we'd love to hear from you.
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
