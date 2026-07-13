import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Teras Computer - Service Komputer Terpercaya di Kupang',
  description: 'Layanan service komputer, elektronik, dan penjualan laptop bekas berkualitas di Kupang. Teknisi berpengalaman, terpercaya, dan profesional.',
  generator: 'v0.app',
  keywords: 'service komputer, service laptop, printer, lcd, elektronik, kupang',
  icons: {
    icon: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-teras-computer-6liYjqMo2ZtUogslRokrtBHoNXqiub.png',
        type: 'image/png',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#d4a574',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body className={`${geistSans.className} antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
