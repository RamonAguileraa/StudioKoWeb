"use client"

import Link from "next/link"
import Image from "next/image"
import BackgroundParticles from "../../../components/ui/background-particles"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DesarrolloMovil() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-background py-24 px-4 relative overflow-hidden">
      <BackgroundParticles color="#6C2BD9" amount={32} />
      <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-lg p-10 border border-border/40 relative z-10">
        {/* Botón volver */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-primary hover:underline mb-6 text-base font-medium focus:outline-none"
          aria-label="Volver"
        >
          <ArrowLeft className="h-5 w-5" /> Volver
        </button>
        <h1 className="text-4xl font-bold mb-4 text-center">Desarrollo de Apps Móviles</h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Creamos aplicaciones móviles nativas y multiplataforma que conectan con tus usuarios y potencian tu negocio.
        </p>
        {/* Imagen de ejemplo */}
        <div className="mb-10 flex justify-center">
          <Image src="/images/mobile-dev-example.jpg" alt="Ejemplo de Desarrollo Móvil" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        {/* Beneficios */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">¿Por qué elegirnos para tu app?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Apps para iOS y Android, nativas o con tecnologías como React Native</li>
            <li>Diseño UI/UX atractivo y funcional</li>
            <li>Integración con sistemas, APIs y notificaciones push</li>
            <li>Publicación y posicionamiento en App Store y Google Play</li>
            <li>Soporte, mantenimiento y actualizaciones</li>
            <li>Desarrollo seguro, escalable y con las mejores prácticas</li>
          </ul>
        </div>
        {/* Proceso */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">¿Cómo trabajamos?</h2>
          <ol className="list-decimal pl-6 space-y-1 text-base">
            <li><b>Consultoría inicial:</b> Definimos objetivos y funcionalidades clave.</li>
            <li><b>Prototipado y diseño:</b> Creamos wireframes y diseño visual.</li>
            <li><b>Desarrollo ágil:</b> Programamos y te mostramos avances.</li>
            <li><b>Pruebas y publicación:</b> Garantizamos calidad y subimos tu app a las tiendas.</li>
            <li><b>Soporte y mejoras:</b> Te acompañamos en el crecimiento de tu app.</li>
          </ol>
        </div>
        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            <div>
              <b>¿Pueden desarrollar apps para cualquier sector?</b>
              <p>Sí, tenemos experiencia en apps para salud, educación, comercio, logística y más.</p>
            </div>
            <div>
              <b>¿La app será escalable y segura?</b>
              <p>Desarrollamos con las mejores prácticas para garantizar seguridad y crecimiento.</p>
            </div>
            <div>
              <b>¿Puedo actualizar mi app después?</b>
              <p>Sí, ofrecemos mantenimiento y nuevas funcionalidades a futuro.</p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col items-center mt-12">
          <p className="text-lg mb-4 text-center">¿Tienes dudas o quieres cotizar tu app? Escríbenos y recibe asesoría personalizada.</p>
          <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/80 transition text-lg">Contactar ahora</Link>
        </div>
      </div>
    </div>
  )
} 