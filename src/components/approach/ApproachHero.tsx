'use client'

import { ChevronDown } from 'lucide-react'

export function ApproachHero() {
  return (
    <section className="relative py-[300px] pb-[160px] text-center bg-[#121212] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 fade-in relative">
        <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
          OUR APPROACH
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-[800px] mx-auto mb-4">
          {' '}
          <span className="text-white">Consulting</span>{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Approach
          </span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-[650px] mx-auto">
          We don&apos;t just advise; we engineer. Our four-stage methodology ensures that innovation is matched
          with operational stability and security from day zero.
        </p>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const el = document.getElementById('methodology')
          if (el) {
            const navbar = document.querySelector('nav')
            const offset = navbar?.offsetHeight ?? 102
            const target = el.getBoundingClientRect().top + window.scrollY - offset
            const start = window.scrollY
            const distance = target - start
            const duration = 900
            const startTime = performance.now()
            const ease = (t: number) => 1 - Math.pow(1 - t, 3)
            function scroll(t: number) {
              const elapsed = t - startTime
              const progress = Math.min(elapsed / duration, 1)
              window.scrollTo(0, start + distance * ease(progress))
              if (progress < 1) requestAnimationFrame(scroll)
            }
            requestAnimationFrame(scroll)
          }
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
