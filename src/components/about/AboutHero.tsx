'use client'

import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { useHeroLight } from '@/context/HeroLightContext'

export function AboutHero() {
  const { setLight } = useHeroLight()
  const [localLight, setLocalLight] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const transitioned = useRef(false)

  useLayoutEffect(() => {
    setLight(true)
    return () => setLight(false)
  }, [setLight])

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 50) {
        if (!transitioned.current) {
          transitioned.current = true
          setLocalLight(false)
          setLight(false)
        }
        if (!scrolled) setScrolled(true)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [setLight, scrolled])

  return (
    <section className="relative">
      {/* Solid background — covers entire section, one unified transition */}
      <div
        className="absolute inset-0 transition-colors duration-1000"
        style={{ backgroundColor: localLight ? '#ffffff' : '#121212' }}
      />

      {/* Dark overlay — covers entire section uniformly */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: 'linear-gradient(135deg, rgba(18,18,18,0.98) 0%, rgba(18,18,18,0.93) 50%, rgba(18,18,18,0.85) 100%)',
          opacity: localLight ? 0 : 1,
        }}
      />

      {/* Hero text area */}
      <div className="relative py-[360px] pb-[220px] text-center overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-6 fade-in relative z-[2]">
          {/* Background WYMA text */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-opacity duration-700"
            aria-hidden="true"
            style={{ opacity: localLight ? 0 : (scrolled ? 0.02 : 0) }}
          >
            <span className="font-serif text-[clamp(6rem,18vw,18rem)] font-bold leading-none text-white whitespace-nowrap">
              WYMA
            </span>
          </div>
          <div className="relative z-[1]">
            <span
              className={`inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors duration-1000 mb-3 ${localLight ? 'text-[#121212]' : 'text-[#EECB27]'}`}
            >
              ABOUT WYMA
            </span>
            <h1
              className={`font-heading text-4xl md:text-5xl font-bold max-w-[800px] mx-auto mb-4 transition-colors duration-1000 ${localLight ? 'text-[#121212]' : 'text-white'}`}
            >
              WYMA{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                New Frontiers Limited
              </span>
            </h1>
            <p
              className={`text-base md:text-lg max-w-[650px] mx-auto leading-relaxed transition-colors duration-1000 ${localLight ? 'text-[#555]' : 'text-muted-foreground'}`}
            >
              A Nairobi-based management consultancy committed to accelerating innovation through strategic leadership and
              effective change management.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => {
            if (!transitioned.current) {
              transitioned.current = true
              setLocalLight(false)
              setLight(false)
            }
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
          <span
            className={`font-heading text-[11px] font-semibold uppercase tracking-[2px] transition-colors duration-1000 ${localLight ? 'text-[#121212]' : 'text-muted-foreground'}`}
          >
            Know More
          </span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </button>
      </div>

      {/* Who We Are card — inside the section, same visual position */}
      <div className="relative py-24 pb-[156px] z-[2]" id="who-we-are">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex flex-col md:flex-row bg-surface rounded-xl overflow-hidden fade-in">
            <div className="flex-1 p-8 md:p-10">
              <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-2">
                WHO WE ARE
              </span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                About WYMA New Frontiers
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                WYMA New Frontiers Limited is a dynamic management consultancy headquartered in Nairobi, Kenya. We specialise
                in strategic advisory, research, monitoring &amp; evaluation, entrepreneurship development, and capacity
                building.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our team brings together decades of combined experience across public, private, and development sectors,
                delivering evidence-based solutions that drive measurable impact.
              </p>
            </div>
            <div
              className="md:w-[40%] min-h-[300px] bg-cover bg-center relative"
              style={{
                backgroundImage: 'linear-gradient(135deg, rgba(18,18,18,0.6), rgba(18,18,18,0.2)), url(/images/hero-bg.jpg)',
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, #1E1E1E 0%, rgba(30,30,30,0.6) 100%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
