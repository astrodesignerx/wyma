'use client'

import { ChevronDown } from 'lucide-react'

export function ServicesHero() {
  return (
    <section className="relative py-[322px] bg-[#121212] overflow-hidden">
      <div className="flex items-center relative">
        {/* Left content */}
        <div className="flex-1 mx-auto max-w-[1200px] px-6 relative z-[2]">
          <div className="max-w-[520px] fade-in">
            <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
              OUR SPECIALIZED ECOSYSTEM
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-[1.2] mb-6">
              <span className="text-white">Management</span>{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Consultancy Services
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Strategic advisory, research, monitoring &amp; evaluation, entrepreneurship development, and capacity
              building solutions designed for measurable impact.
            </p>
          </div>
        </div>

        {/* Right word wall */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 pr-6 overflow-hidden flex items-center pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%)',
          }}
        >
          <div className="flex flex-col items-center w-full" style={{ animation: 'scroll-up 35s linear infinite', willChange: 'transform', backfaceVisibility: 'hidden' }}>
            {[
              'OPERATIONS', 'RESEARCH', 'STRATEGY', 'INTELLIGENCE',
              'EVALUATION', 'ENTREPRENEURSHIP',
              'OPERATIONS', 'RESEARCH', 'STRATEGY', 'INTELLIGENCE',
              'EVALUATION', 'ENTREPRENEURSHIP',
              'OPERATIONS', 'RESEARCH', 'STRATEGY', 'INTELLIGENCE',
              'EVALUATION', 'ENTREPRENEURSHIP',
              'OPERATIONS', 'RESEARCH', 'STRATEGY', 'INTELLIGENCE',
              'EVALUATION', 'ENTREPRENEURSHIP',
              'OPERATIONS', 'RESEARCH', 'STRATEGY', 'INTELLIGENCE',
              'EVALUATION', 'ENTREPRENEURSHIP',
              'OPERATIONS', 'RESEARCH', 'STRATEGY', 'INTELLIGENCE',
              'EVALUATION', 'ENTREPRENEURSHIP',
              'OPERATIONS', 'RESEARCH', 'STRATEGY', 'INTELLIGENCE',
              'EVALUATION', 'ENTREPRENEURSHIP',
              'OPERATIONS', 'RESEARCH', 'STRATEGY', 'INTELLIGENCE',
              'EVALUATION', 'ENTREPRENEURSHIP',
            ].map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="font-marquee text-[4rem] md:text-6xl font-semibold text-[rgba(255,255,255,0.06)] uppercase tracking-[3px] whitespace-nowrap leading-none py-4"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const el = document.getElementById('services-intro')
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
        <span className="font-heading text-[11px] font-semibold text-muted-foreground uppercase tracking-[2px]">Explore</span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </button>
    </section>
  )
}
