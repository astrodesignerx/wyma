'use client'

import { ChevronDown } from 'lucide-react'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export function ApproachHero() {
  const { scrollToSection } = useSmoothScroll()
  return (
    <section className="relative min-h-dvh flex items-center text-center overflow-hidden bg-white">
      <div className="mx-auto max-w-[1200px] px-6 fade-in relative py-32">
        <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-3">
          OUR APPROACH
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-[800px] mx-auto mb-4 text-[#121212]">
          Consulting{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Approach
          </span>
        </h1>
        <p className="text-base md:text-lg text-[#555] max-w-[650px] mx-auto">
          We don&apos;t just advise; we engineer. Our four-stage methodology ensures that innovation is matched
          with operational stability and security from day zero.
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          scrollToSection('methodology')
        }}
        className="absolute bottom-10 left-1/2 z-[3] flex flex-col items-center gap-1 cursor-pointer animate-float"
        aria-label="Scroll to next section"
      >
        <span className="font-heading text-[11px] font-semibold text-[#555] uppercase tracking-[2px]">
          Explore
        </span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </button>
    </section>
  )
}
