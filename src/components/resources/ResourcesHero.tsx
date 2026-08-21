'use client'

import { ChevronDown } from 'lucide-react'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export function ResourcesHero() {
  const { scrollToSection } = useSmoothScroll()
  return (
    <section className="relative py-[300px] pb-[220px] text-center bg-[#f5f5f5] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 fade-in relative">
        <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-3">
          OUR PORTFOLIO
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-[800px] mx-auto mb-4">
          <span className="text-[#121212]">Resources</span>{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            & Impact
          </span>
        </h1>
        <p className="text-base md:text-lg text-[#555] max-w-[650px] mx-auto">
          From baseline evaluations to strategic transformation — our work spans multiple sectors with measurable
          outcomes across Kenya and the region.
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          scrollToSection('stats')
        }}
        className="absolute bottom-10 left-1/2 z-[3] flex flex-col items-center gap-1 cursor-pointer animate-float"
        aria-label="Scroll to next section"
      >
        <span className="font-heading text-[11px] font-semibold text-muted-foreground uppercase tracking-[2px]">
          Explore
        </span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </button>
    </section>
  )
}
