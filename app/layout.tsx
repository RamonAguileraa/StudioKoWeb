import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/context/language-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { GoogleAnalytics } from "@/components/analytics"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
}

export const metadata: Metadata = {
  title: {
    default: "StudioKó | Desarrollo Web y Agencia Creativa Digital",
    template: "%s | StudioKó"
  },
  description: "StudioKó es una empresa digital especializada en desarrollo web, aplicaciones móviles, marketing digital y producción audiovisual. Ofrecemos soluciones integrales con StudioKo (desarrollo) y Maikonik Media (creatividad).",
  keywords: [
    "desarrollo web",
    "aplicaciones móviles", 
    "marketing digital",
    "producción audiovisual",
    "diseño web",
    "SEO",
    "agencia digital",
    "desarrollo de software",
    "creación de contenido",
    "branding",
    "video producción",
    "fotografía profesional",
    "redes sociales",
    "BosoZoku",
    "Maikonik Media",
    "StudioKo"
  ],
  authors: [{ name: "StudioKó Team" }],
  creator: "StudioKó",
  publisher: "StudioKó",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://studioko.com'),
  alternates: {
    canonical: '/',
    languages: {
      'es': '/es',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://studioko.com',
    siteName: 'StudioKó',
    title: 'StudioKó | Desarrollo Web y Agencia Creativa Digital',
    description: 'StudioKó es una empresa digital especializada en desarrollo web, aplicaciones móviles, marketing digital y producción audiovisual. Ofrecemos soluciones integrales con StudioKo (desarrollo) y Maikonik Media (creatividad).',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StudioKó - Desarrollo Web y Agencia Creativa Digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@studioko',
    creator: '@studioko',
    title: 'StudioKó | Desarrollo Web y Agencia Creativa Digital',
    description: 'StudioKó es una empresa digital especializada en desarrollo web, aplicaciones móviles, marketing digital y producción audiovisual.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-google-verification',
    yandex: 'tu-codigo-yandex-verification',
    yahoo: 'tu-codigo-yahoo-verification',
  },
  category: 'technology',
  classification: 'Business',
  generator: 'Next.js',
  themeColor: '#000000',
  icons: {
    icon: [
      { url: '/fav/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { url: '/fav/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/fav/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/fav/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/fav/favicon.ico' }
    ],
    apple: [
      { url: '/fav/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/fav/android-chrome-512x512.png',
        color: '#000000'
      },
      {
        rel: 'manifest',
        url: '/fav/site.webmanifest'
      }
    ]
  },
  manifest: '/fav/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "StudioKó",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <Navbar />
            <main className="flex-1 overflow-visible">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        
        {/* Analytics */}
        <GoogleAnalytics 
          googleAnalyticsId={process.env.NEXT_PUBLIC_GA_ID}
          googleTagManagerId={process.env.NEXT_PUBLIC_GTM_ID}
        />
      </body>
    </html>
  )
}
