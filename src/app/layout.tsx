import type { Metadata } from 'next'
import { Montserrat, Open_Sans, Oswald, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollAnimationInit } from '@/components/layout/ScrollAnimationInit'
import { BackToTop } from '@/components/layout/BackToTop'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { LenisProvider } from '@/components/layout/LenisProvider'
import { HeroLightProvider } from '@/context/HeroLightContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'WYMA New Frontiers Limited — Management Consultancy',
  description:
    'Nairobi-based management consultancy accelerating innovation through strategic leadership, research, M&E, and capacity building.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${oswald.variable} ${playfair.variable} dark h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <HeroLightProvider>
          <Navbar />
          <ScrollAnimationInit />
          <BackToTop />
          <WhatsAppButton />
          <LenisProvider>
            <main className="flex-1">{children}</main>
            <Footer />
          </LenisProvider>
        </HeroLightProvider>
      </body>
    </html>
  )
}
