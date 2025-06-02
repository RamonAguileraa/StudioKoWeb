"use client"

import Link from "next/link"
import Image from "next/image"
import BackgroundParticles from "../../../components/ui/background-particles"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function MarketingDigital() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-background py-24 px-4 relative overflow-hidden">
      <BackgroundParticles color="#F43F5E" amount={32} />
      <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-lg p-10 border border-border/40 relative z-10">
        {/* Botón volver */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-primary hover:underline mb-6 text-base font-medium focus:outline-none"
          aria-label="Volver"
        >
          <ArrowLeft className="h-5 w-5" /> Volver
        </button>
        <h1 className="text-4xl font-bold mb-4 text-center">Marketing Digital Estratégico</h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Potenciamos tu marca con estrategias digitales integrales, creativas y orientadas a resultados medibles.
        </p>
        {/* Imagen de ejemplo */}
        <div className="mb-10 flex justify-center">
          <Image src="/images/digital-marketing-example.jpg" alt="Ejemplo de Marketing Digital" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        {/* Beneficios */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">¿Por qué elegir nuestro marketing digital?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>SEO, SEM y campañas en Google y redes sociales</li>
            <li>Gestión profesional de redes y contenido</li>
            <li>Email marketing y automatización</li>
            <li>Analítica avanzada y reportes claros</li>
            <li>Estrategias personalizadas para tu sector</li>
            <li>Equipo creativo y técnico a tu servicio</li>
          </ul>
        </div>
        {/* Proceso */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">¿Cómo trabajamos?</h2>
          <ol className="list-decimal pl-6 space-y-1 text-base">
            <li><b>Diagnóstico digital:</b> Analizamos tu situación y oportunidades.</li>
            <li><b>Estrategia personalizada:</b> Definimos objetivos y canales clave.</li>
            <li><b>Implementación:</b> Ejecutamos campañas y acciones.</li>
            <li><b>Medición y optimización:</b> Mejoramos resultados constantemente.</li>
            <li><b>Reportes y comunicación:</b> Te mantenemos informado y alineado.</li>
          </ol>
        </div>
        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            <div>
              <b>¿Pueden gestionar mis redes y campañas?</b>
              <p>Sí, nos encargamos de todo el marketing digital de tu marca.</p>
            </div>
            <div>
              <b>¿Cuándo veré resultados?</b>
              <p>Depende del canal, pero desde el primer mes verás avances y reportes claros.</p>
            </div>
            <div>
              <b>¿Puedo elegir solo algunos servicios?</b>
              <p>¡Claro! Nos adaptamos a tus necesidades y presupuesto.</p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col items-center mt-12">
          <p className="text-lg mb-4 text-center">¿Tienes dudas o quieres una estrategia a medida? Escríbenos y recibe asesoría personalizada.</p>
          <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/80 transition text-lg">Contactar ahora</Link>
        </div>
      </div>
    </div>
  )
} 