import Script from 'next/script'

interface OrganizationSchema {
  name: string
  url: string
  logo: string
  description: string
  address: {
    type: string
    addressCountry: string
    addressLocality: string
  }
  contactPoint: {
    type: string
    telephone: string
    contactType: string
    email: string
  }
  sameAs: string[]
  founder: {
    type: string
    name: string
  }
  foundingDate: string
  numberOfEmployees: string
  industry: string
}

interface WebSiteSchema {
  name: string
  url: string
  description: string
  potentialAction: {
    type: string
    target: string
    'query-input': string
  }
}

interface ServiceSchema {
  type: string
  name: string
  description: string
  provider: {
    type: string
    name: string
  }
  areaServed: string
  serviceType: string
}

export function OrganizationJsonLd({ 
  name = "StudioKó",
  url = "https://studioko.com",
  logo = "https://studioko.com/logo.png",
  description = "StudioKó es una empresa digital especializada en desarrollo web, aplicaciones móviles, marketing digital y producción audiovisual.",
  address = {
    type: "PostalAddress",
    addressCountry: "ES",
    addressLocality: "España"
  },
  contactPoint = {
    type: "ContactPoint",
    telephone: "+34-XXX-XXX-XXX",
    contactType: "customer service",
    email: "info@studioko.com"
  },
  sameAs = [
    "https://www.linkedin.com/company/studioko",
    "https://twitter.com/studioko",
    "https://www.instagram.com/studioko",
    "https://www.facebook.com/studioko"
  ],
  founder = {
    type: "Person",
    name: "Equipo StudioKó"
  },
  foundingDate = "2023",
  numberOfEmployees = "5-10",
  industry = "Technology"
}: Partial<OrganizationSchema>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    address,
    contactPoint,
    sameAs,
    founder,
    foundingDate,
    numberOfEmployees,
    industry,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios Digitales",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Web",
            "description": "Desarrollo de sitios web y aplicaciones web modernas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desarrollo Móvil",
            "description": "Desarrollo de aplicaciones móviles nativas y multiplataforma"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Digital",
            "description": "Estrategias de marketing digital y SEO"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Producción Audiovisual",
            "description": "Producción de video, fotografía y contenido multimedia"
          }
        }
      ]
    }
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteJsonLd({ 
  name = "StudioKó",
  url = "https://studioko.com",
  description = "StudioKó - Desarrollo Web y Agencia Creativa Digital"
}: Partial<WebSiteSchema>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
    potentialAction: {
      type: "SearchAction",
      target: "https://studioko.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceJsonLd({ 
  type = "Service",
  name,
  description,
  provider = {
    type: "Organization",
    name: "StudioKó"
  },
  areaServed = "España",
  serviceType
}: ServiceSchema) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    provider,
    areaServed,
    serviceType
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQJsonLd({ questions }: { questions: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 