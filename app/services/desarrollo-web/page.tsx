"use client"

import Link from "next/link"
import Image from "next/image"
import BackgroundParticles from "../../../components/ui/background-particles"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DesarrolloWeb() {
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
        <h1 className="text-4xl font-bold mb-4 text-center">Desarrollo Web Profesional</h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Creamos sitios y aplicaciones web a medida, modernos, rápidos y seguros, que impulsan tu presencia digital y generan resultados reales.
        </p>
        {/* Imagen de ejemplo */}
        <div className="mb-10 flex justify-center">
          <Image src="/images/web-dev-example.jpg" alt="Ejemplo de Desarrollo Web" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        {/* Beneficios */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">¿Por qué elegir nuestro desarrollo web?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Diseño 100% responsivo y adaptado a tu marca</li>
            <li>Optimización SEO y velocidad para destacar en Google</li>
            <li>Integración con sistemas, APIs y herramientas externas</li>
            <li>Panel de administración fácil de usar (CMS personalizado)</li>
            <li>Soporte y acompañamiento post-lanzamiento</li>
            <li>Desarrollo seguro, escalable y con las mejores tecnologías (Next.js, React, Node.js)</li>
          </ul>
        </div>
        {/* Proceso */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">¿Cómo trabajamos?</h2>
          <ol className="list-decimal pl-6 space-y-1 text-base">
            <li><b>Reunión inicial:</b> Analizamos tus objetivos y necesidades.</li>
            <li><b>Propuesta personalizada:</b> Te presentamos una solución a medida.</li>
            <li><b>Diseño UX/UI:</b> Creamos prototipos visuales y experiencia de usuario.</li>
            <li><b>Desarrollo ágil:</b> Programamos y te mostramos avances constantes.</li>
            <li><b>Pruebas y optimización:</b> Garantizamos calidad, seguridad y velocidad.</li>
            <li><b>Lanzamiento y soporte:</b> Publicamos tu web y te acompañamos en el crecimiento.</li>
          </ol>
        </div>
        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            <div>
              <b>¿Pueden integrar pagos, reservas o formularios avanzados?</b>
              <p>Sí, desarrollamos funcionalidades a medida según lo que tu negocio necesite.</p>
            </div>
            <div>
              <b>¿Mi web será fácil de administrar?</b>
              <p>¡Por supuesto! Te entregamos un panel intuitivo y capacitación si lo necesitas.</p>
            </div>
            <div>
              <b>¿Ofrecen mantenimiento y soporte?</b>
              <p>Sí, ofrecemos planes de soporte y mejoras continuas.</p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col items-center mt-12">
          <p className="text-lg mb-4 text-center">¿Tienes dudas o quieres cotizar tu proyecto? Escríbenos y recibe asesoría personalizada.</p>
          <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/80 transition text-lg">Contactar ahora</Link>
        </div>
      </div>
    </div>
  )
} 