"use client"

import Link from "next/link"
import Image from "next/image"
import BackgroundParticles from "@/components/ui/background-particles"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Fotografia() {
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
        <h1 className="text-4xl font-bold mb-4 text-center">Fotografía Profesional</h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Capturamos la esencia de tu marca, productos y eventos con imágenes de alto impacto y calidad.
        </p>
        {/* Imagen de ejemplo */}
        <div className="mb-10 flex justify-center">
          <Image src="/images/photography-example.jpg" alt="Ejemplo de Fotografía Profesional" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        {/* Beneficios */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">¿Por qué elegir nuestra fotografía?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Fotografía de producto, corporativa, comercial y de eventos</li>
            <li>Retoque profesional y edición avanzada</li>
            <li>Entrega rápida y en alta resolución</li>
            <li>Dirección de arte y asesoría creativa</li>
            <li>Adaptación a tu estilo y necesidades</li>
            <li>Equipo profesional y experiencia comprobada</li>
          </ul>
        </div>
        {/* Proceso */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">¿Cómo trabajamos?</h2>
          <ol className="list-decimal pl-6 space-y-1 text-base">
            <li><b>Brief y objetivos:</b> Definimos el tipo de fotos y estilo.</li>
            <li><b>Shooting:</b> Realizamos la sesión en estudio, locación o donde lo necesites.</li>
            <li><b>Selección y retoque:</b> Editamos y mejoramos las mejores tomas.</li>
            <li><b>Entrega:</b> Recibes tus fotos listas para usar en web, redes o impresión.</li>
          </ol>
        </div>
        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            <div>
              <b>¿Pueden hacer fotos en mi empresa o evento?</b>
              <p>¡Claro! Nos desplazamos a donde lo necesites.</p>
            </div>
            <div>
              <b>¿Cuánto tardan en entregar las fotos?</b>
              <p>El tiempo depende del proyecto, pero siempre priorizamos la calidad y rapidez.</p>
            </div>
            <div>
              <b>¿Puedo pedir retoques específicos?</b>
              <p>Sí, adaptamos la edición a tus preferencias.</p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col items-center mt-12">
          <p className="text-lg mb-4 text-center">¿Tienes dudas o quieres cotizar una sesión? Escríbenos y recibe asesoría personalizada.</p>
          <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/80 transition text-lg">Contactar ahora</Link>
        </div>
      </div>
    </div>
  )
} 