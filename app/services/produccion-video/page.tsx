"use client"

import Link from "next/link"
import Image from "next/image"
import BackgroundParticles from "../../components/ui/background-particles"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ProduccionVideo() {
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
        <h1 className="text-4xl font-bold mb-4 text-center">Producción de Video Profesional</h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Creamos videos que cuentan historias, venden y posicionan tu marca. Desde la idea hasta la entrega final, nos encargamos de todo.
        </p>
        {/* Imagen de ejemplo */}
        <div className="mb-10 flex justify-center">
          <Image src="/images/video-prod-example.jpg" alt="Ejemplo de Producción de Video" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        {/* Beneficios */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">¿Por qué elegirnos para tu video?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Producción integral: guion, grabación, edición y post-producción</li>
            <li>Videos corporativos, promocionales, testimoniales y más</li>
            <li>Motion graphics y animación profesional</li>
            <li>Equipo creativo y técnico de alto nivel</li>
            <li>Adaptación a tu presupuesto y objetivos</li>
            <li>Entrega en todos los formatos y plataformas</li>
          </ul>
        </div>
        {/* Proceso */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">¿Cómo trabajamos?</h2>
          <ol className="list-decimal pl-6 space-y-1 text-base">
            <li><b>Brief y objetivos:</b> Definimos el mensaje y el público.</li>
            <li><b>Guion y storyboard:</b> Planteamos la historia y visuales.</li>
            <li><b>Producción:</b> Grabamos y generamos el material.</li>
            <li><b>Edición y animación:</b> Damos vida y ritmo al video.</li>
            <li><b>Entrega y difusión:</b> Te entregamos el video listo para usar.</li>
          </ol>
        </div>
        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            <div>
              <b>¿Pueden grabar en cualquier ciudad?</b>
              <p>¡Sí! Cubrimos proyectos en todo el país y también realizamos videos 100% animados.</p>
            </div>
            <div>
              <b>¿Qué tipo de videos hacen?</b>
              <p>Corporativos, promocionales, testimoniales, animaciones, eventos y más.</p>
            </div>
            <div>
              <b>¿Puedo pedir cambios después de la entrega?</b>
              <p>Incluimos revisiones para que el resultado sea perfecto para ti.</p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col items-center mt-12">
          <p className="text-lg mb-4 text-center">¿Tienes dudas o quieres cotizar tu video? Escríbenos y recibe asesoría personalizada.</p>
          <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/80 transition text-lg">Contactar ahora</Link>
        </div>
      </div>
    </div>
  )
} 