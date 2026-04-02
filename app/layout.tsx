import './globals.css'
// DEMO MODE: Remove this import and <DemoModeBanner /> below for production-only builds
import { DemoModeBanner } from './components/DemoModeBanner'
import { Viewport, type Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant-garamond', weight: ['400', '500', '600', '700'], display: 'swap' })
const jost = Jost({ subsets: ['latin'], variable: '--font-jost', display: 'swap' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  const port = process.env.PORT || '3000'
  const host = process.env.HOST || 'localhost'
  return `http://${host}:${port}`
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'Lumina Fine Jewelry | Handcrafted Luxury Jewelry',
    template: `%s | Lumina Fine Jewelry`
  },
  description: 'Discover exquisite jewelry that captures light and imagination. Each Lumina piece is a testament to artistry, quality, and the enduring beauty of precious materials, handcrafted by master artisans.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-icon', sizes: '180x180', type: 'image/png' }
    ],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${jost.variable}`}>
      <body className="font-sans bg-gray-50 text-gray-900 antialiased">
        <DemoModeBanner />
        
          {children}
        
      </body>
    </html>
  )
}
