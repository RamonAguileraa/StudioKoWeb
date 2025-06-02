"use client"

import Link from "next/link"
import Image from "next/image"
import BackgroundParticles from "@/components/ui/background-particles"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function MarketingEstrategico() {
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
        <h1 className="text-4xl font-bold mb-4 text-center">Marketing Estratégico</h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Desarrollamos estrategias de marketing integrales, creativas y orientadas a resultados para posicionar y hacer crecer tu marca.
        </p>
        {/* Imagen de ejemplo */}
        <div className="mb-10 flex justify-center">
          <Image src="/images/strategic-marketing-example.jpg" alt="Ejemplo de Marketing Estratégico" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        {/* Beneficios */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">¿Por qué elegir nuestro marketing estratégico?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Planificación y ejecución de campañas efectivas</li>
            <li>Análisis de mercado y competencia</li>
            <li>Posicionamiento de marca y diferenciación</li>
            <li>Medición de resultados y optimización constante</li>
            <li>Equipo multidisciplinario y creativo</li>
            <li>Enfoque en retorno de inversión (ROI)</li>
          </ul>
        </div>
        {/* Proceso */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">¿Cómo trabajamos?</h2>
          <ol className="list-decimal pl-6 space-y-1 text-base">
            <li><b>Diagnóstico y objetivos:</b> Analizamos tu situación y metas.</li>
            <li><b>Estrategia personalizada:</b> Definimos el plan de acción.</li>
            <li><b>Implementación:</b> Ejecutamos campañas y acciones.</li>
            <li><b>Medición y mejora:</b> Optimizamos para lograr los mejores resultados.</li>
            <li><b>Reportes y comunicación:</b> Te mantenemos informado y alineado.</li>
          </ol>
        </div>
        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            <div>
              <b>¿Pueden crear campañas para cualquier sector?</b>
              <p>Sí, adaptamos la estrategia a tu industria y objetivos.</p>
            </div>
            <div>
              <b>¿Cómo miden el éxito de las campañas?</b>
              <p>Utilizamos métricas claras y reportes periódicos.</p>
            </div>
            <div>
              <b>¿Puedo solicitar cambios en la estrategia?</b>
              <p>Trabajamos de la mano contigo y ajustamos según tus necesidades.</p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col items-center mt-12">
          <p className="text-lg mb-4 text-center">¿Tienes dudas o quieres una estrategia para tu marca? Escríbenos y recibe asesoría personalizada.</p>
          <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/80 transition text-lg">Contactar ahora</Link>
        </div>
      </div>
    </div>
  )
} 