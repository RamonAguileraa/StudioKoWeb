"use client"

import { useLanguage } from "@/context/language-context";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: {
    en: string;
    es: string;
  };
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Juan Pérez",
    role: "CEO",
    company: "TechCorp",
    content: {
      en: "StudioKo developed our e-commerce platform with a unique design and robust backend. Sales increased by 40% in three months!",
      es: "StudioKo desarrolló nuestra plataforma de e-commerce con un diseño único y un backend robusto. ¡Las ventas aumentaron un 40% en tres meses!"
    },
  },
  {
    id: 2,
    name: "María García",
    role: "Marketing Director",
    company: "InnovateMedia",
    content: {
      en: "Maikonik's video campaign for our brand launch was a hit. The creativity and production quality exceeded our expectations.",
      es: "La campaña de video de Maikonik para nuestro lanzamiento de marca fue un éxito. La creatividad y la calidad de producción superaron nuestras expectativas."
    },
  },
  {
    id: 3,
    name: "Carlos Rodríguez",
    role: "Founder",
    company: "StartupX",
    content: {
      en: "StudioKo's app for our logistics project is intuitive and reliable. Our operations are now much more efficient.",
      es: "La app de StudioKo para nuestro proyecto logístico es intuitiva y confiable. Nuestras operaciones ahora son mucho más eficientes."
    },
  },
  {
    id: 4,
    name: "Lucía Fernández",
    role: "Brand Manager",
    company: "EcoLife",
    content: {
      en: "Maikonik created a stunning brand identity and social media strategy for our eco-friendly products. Our online presence grew rapidly.",
      es: "Maikonik creó una identidad de marca impresionante y una estrategia de redes sociales para nuestros productos ecológicos. Nuestra presencia online creció rápidamente."
    },
  },
  {
    id: 5,
    name: "Miguel Torres",
    role: "CTO",
    company: "FinTechNow",
    content: {
      en: "StudioKo built a secure and scalable fintech dashboard for us. The project was delivered on time and with great attention to detail.",
      es: "StudioKo construyó un dashboard fintech seguro y escalable para nosotros. El proyecto se entregó a tiempo y con gran atención al detalle."
    },
  },
];

export default function TestimonialsCarousel() {
  const { language } = useLanguage();

  const movingItems = testimonials.map((t) => ({
    quote: t.content[language],
    name: t.name,
    title: `${t.role} • ${t.company}`,
  }));

  return (
    <div className="relative">
      <InfiniteMovingCards
        items={movingItems}
        direction="right"
        speed="normal"
        pauseOnHover
      />
    </div>
  );
} 