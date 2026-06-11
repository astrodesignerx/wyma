'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

export function AboutHero() {
  const [scrolled, setScrolled] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0 && !scrolled) setScrolled(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrolled])

  return (
    <section className="page-hero-dark py-[360px] pb-[220px] text-center bg-[#121212] relative overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 fade-in relative">
        {/* Background WYMA text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-opacity duration-700"
          aria-hidden="true"
          style={{ opacity: scrolled ? 0.02 : 0 }}
        >
          <span
            className="font-serif text-[clamp(6rem,18vw,18rem)] font-bold leading-none text-white whitespace-nowrap"
          >
            WYMA
          </span>
        </div>
        <div className="relative z-[1]">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
          ABOUT WYMA
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-[800px] mx-auto mb-4">
          WYMA{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            New Frontiers Limited
          </span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-[650px] mx-auto">
          A Nairobi-based management consultancy committed to accelerating innovation through strategic leadership and
          effective change management.
        </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const el = document.getElementById('who-we-are')
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
        className="absolute bottom-0 left-1/2 z-[3] flex flex-col items-center gap-1 cursor-pointer animate-float transition-opacity duration-1000"
        style={{ opacity: loaded && !scrolled ? 1 : 0 }}
        aria-label="Scroll to next section"
      >
        <span className="font-heading text-[11px] font-semibold text-muted-foreground uppercase tracking-[2px]">
          Know More
        </span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </button>
    </section>
  )
}
