import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Spanish Club Moscow | Club de Español en Moscú',
    template: '%s | Spanish Club Moscow',
  },
  description:
    'Comunidad de intercambio cultural hispano-ruso en Moscú. Reuniones gratuitas los viernes en Casa Agave + fiestas especiales mensuales. • Культурный обмен между испаноязычными и русскими в Москве.',
  keywords: [
    'Spanish Club Moscow',
    'club español Moscú',
    'intercambio cultural Moscú',
    'español ruso Moscú',
    'клуб испанского языка Москва',
    'Casa Agave Moscú',
    'Hispanic Moscow',
    'латиноамериканцы Москва',
  ],
  authors: [{ name: 'Spanish Club Moscow' }],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['ru_RU', 'en_US'],
    siteName: 'Spanish Club Moscow',
    title: 'Spanish Club Moscow — Donde el español y Rusia se encuentran',
    description:
      'Reuniones gratuitas los viernes en Casa Agave + fiestas especiales. Únete a la comunidad hispano-rusa de Moscú.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spanish Club Moscow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish Club Moscow',
    description: 'Comunidad hispano-rusa en Moscú. ¡Únete!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`dark ${inter.variable} ${playfair.variable}`}>
      <body className="bg-dark-bg text-white min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
