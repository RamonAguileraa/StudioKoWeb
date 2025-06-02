"use client"

import Link from "next/link"
import Image from "next/image"
import BackgroundParticles from "../../components/ui/background-particles"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function DesarrolloMarca() {
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
        <h1 className="text-4xl font-bold mb-4 text-center">Desarrollo de Marca</h1>
        <p className="text-lg text-muted-foreground mb-8 text-center">
          Construimos marcas sólidas, memorables y alineadas con tus valores y objetivos de negocio.
        </p>
        {/* Imagen de ejemplo */}
        <div className="mb-10 flex justify-center">
          <Image src="/images/brand-dev-example.jpg" alt="Ejemplo de Desarrollo de Marca" width={600} height={400} className="rounded-lg shadow-md" />
        </div>
        {/* Beneficios */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3">¿Por qué invertir en tu marca?</h2>
          <ul className="list-disc pl-6 space-y-2 text-base">
            <li>Estrategia de marca clara y diferenciadora</li>
            <li>Identidad visual profesional y coherente</li>
            <li>Manual de marca y recursos gráficos</li>
            <li>Posicionamiento y comunicación efectiva</li>
            <li>Conexión emocional con tu audiencia</li>
            <li>Soporte en el crecimiento y evolución de tu marca</li>
          </ul>
        </div>
        {/* Proceso */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">¿Cómo trabajamos?</h2>
          <ol className="list-decimal pl-6 space-y-1 text-base">
            <li><b>Diagnóstico de marca:</b> Analizamos tu situación y objetivos.</li>
            <li><b>Definición de estrategia:</b> Creamos el ADN de tu marca.</li>
            <li><b>Diseño visual:</b> Logotipo, paleta, tipografía y más.</li>
            <li><b>Manual y recursos:</b> Documentamos todo para tu equipo.</li>
            <li><b>Lanzamiento y acompañamiento:</b> Te apoyamos en la implementación.</li>
          </ol>
        </div>
        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Preguntas Frecuentes</h2>
          <div className="space-y-3">
            <div>
              <b>¿Pueden rediseñar mi marca actual?</b>
              <p>Sí, hacemos rediseños y evoluciones de marca.</p>
            </div>
            <div>
              <b>¿Incluyen manual de marca?</b>
              <p>Siempre entregamos un manual claro y fácil de usar.</p>
            </div>
            <div>
              <b>¿Pueden ayudarme a posicionar mi marca?</b>
              <p>Te asesoramos en comunicación, marketing y posicionamiento.</p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex flex-col items-center mt-12">
          <p className="text-lg mb-4 text-center">¿Tienes dudas o quieres fortalecer tu marca? Escríbenos y recibe asesoría personalizada.</p>
          <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/80 transition text-lg">Contactar ahora</Link>
        </div>
      </div>
    </div>
  )
} 