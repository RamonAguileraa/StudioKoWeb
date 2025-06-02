"use client"

import Link from "next/link"
import Image from "next/image"
import BackgroundParticles from "../../../components/ui/background-particles"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function RedesSociales() {
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
        <h1 className="text-4xl font-bold mb-4 text-center">Gestión de Redes Sociales</h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Potenciamos tu presencia en redes sociales con estrategias, contenido y gestión profesional que conecta con tu audiencia.
        </p>
        {/* Imagen de ejemplo */}
        <div className="mb-10 flex justify-center">
          <Image src="/images/social-media-example.jpg" alt="Ejemplo de Gestión de Redes Sociales" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        {/* Beneficios */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">¿Por qué confiar en nuestra gestión?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Estrategia y calendario de contenido personalizado</li>
            <li>Diseño gráfico y redacción creativa</li>
            <li>Gestión de comunidad y atención a clientes</li>
            <li>Campañas pagadas y orgánicas</li>
            <li>Reportes y análisis de resultados</li>
            <li>Adaptación a tendencias y plataformas</li>
          </ul>
        </div>
        {/* Proceso */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">¿Cómo trabajamos?</h2>
          <ol className="list-decimal pl-6 space-y-1 text-base">
            <li><b>Diagnóstico de redes:</b> Analizamos tu situación actual.</li>
            <li><b>Estrategia y planeación:</b> Definimos objetivos y tipo de contenido.</li>
            <li><b>Producción y publicación:</b> Creamos y publicamos el contenido.</li>
            <li><b>Gestión y monitoreo:</b> Interactuamos con tu comunidad y medimos resultados.</li>
            <li><b>Optimización:</b> Ajustamos la estrategia según los datos.</li>
          </ol>
        </div>
        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            <div>
              <b>¿Pueden crear contenido para cualquier red?</b>
              <p>Sí, trabajamos con Instagram, Facebook, LinkedIn, TikTok y más.</p>
            </div>
            <div>
              <b>¿Responden mensajes y comentarios?</b>
              <p>Gestionamos la comunidad y la atención a clientes.</p>
            </div>
            <div>
              <b>¿Recibiré reportes de resultados?</b>
              <p>Te enviamos reportes claros y recomendaciones de mejora.</p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col items-center mt-12">
          <p className="text-lg mb-4 text-center">¿Tienes dudas o quieres mejorar tus redes? Escríbenos y recibe asesoría personalizada.</p>
          <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/80 transition text-lg">Contactar ahora</Link>
        </div>
      </div>
    </div>
  )
} 