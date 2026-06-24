'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

const videoSources = [
  '/videos/slideshow-1.webm',
  '/videos/slideshow-2.webm',
  '/videos/slideshow-3.webm',
  '/videos/slideshow-4.webm',
]
const SLOT = 8000
const FADE = 1500

export function HeroSection() {
  const vid0Ref = useRef<HTMLVideoElement>(null!)
  const vid1Ref = useRef<HTMLVideoElement>(null!)
  const vid2Ref = useRef<HTMLVideoElement>(null!)
  const vid3Ref = useRef<HTMLVideoElement>(null!)

  const cycleRef = useRef({
    currentIdx: 0,
    timerId: 0 as unknown as ReturnType<typeof setTimeout>,
  })
  const [[f0, f1, f2, f3], setFade] = useState<number[]>([1, 0, 0, 0])
  const [, setTick] = useState(0)
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true

    const cr = cycleRef.current
    const players = [vid0Ref.current, vid1Ref.current, vid2Ref.current, vid3Ref.current]

    players.forEach((v, i) => {
      v.src = videoSources[i]
      v.muted = true
      v.playsInline = true
      v.load()
    })

    vid0Ref.current.play().catch(() => {})

    function cycle() {
      const nextIdx = (cr.currentIdx + 1) % videoSources.length
      const nextPlayer = players[nextIdx]

      nextPlayer.currentTime = 0

      cr.timerId = setTimeout(() => {
        const newFade = [0, 0, 0, 0]
        newFade[nextIdx] = 1
        setFade([...newFade])

        nextPlayer.play().catch(() => {})

        cr.timerId = setTimeout(() => {
          players[cr.currentIdx].pause()
          cr.currentIdx = nextIdx
          setTick((t) => t + 1)
          cycle()
        }, FADE)
      }, SLOT - FADE)
    }

    cr.timerId = setTimeout(cycle, SLOT - FADE)

    return () => {
      clearTimeout(cr.timerId as unknown as number)
    }
  }, [])

  const sectionBg = 'bg-black'

  return (
    <section className={`relative min-h-dvh flex items-center overflow-hidden ${sectionBg}`}>
      {/* Video slideshow layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={vid0Ref}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms]"
          style={{ opacity: f0 }}
        />
        <video
          ref={vid1Ref}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms]"
          style={{ opacity: f1 }}
        />
        <video
          ref={vid2Ref}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms]"
          style={{ opacity: f2 }}
        />
        <video
          ref={vid3Ref}
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms]"
          style={{ opacity: f3 }}
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(135deg, rgba(18,18,18,0.98) 0%, rgba(18,18,18,0.93) 50%, rgba(18,18,18,0.85) 100%)',
        }}
      />

      {/* Green glow bottom-right */}
      <div
        className="absolute bottom-[-700px] right-[-700px] w-[1400px] h-[1400px] z-[2] pointer-events-none animate-glow-pulse"
        style={{
          background: 'radial-gradient(ellipse, rgba(100,175,71,0.25) 0%, transparent 50%)',
        }}
      />

      {/* Glass reflection — diagonal sweep top-left to bottom-right */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.015) 25%, transparent 50%)',
          backgroundSize: '300% 300%',
          animation: 'glass-sweep 14s cubic-bezier(0.65, 0, 0.35, 1) infinite',
        }}
      />

      {/* Content */}
      <div className="relative z-[3] w-full mx-auto max-w-[1200px] px-6 py-40">
        <div className="max-w-[640px] fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
            NAIROBI BASED CONSULTANCY
          </span>
          <h1 className="font-heading text-[3.25rem] leading-[1.15] font-bold mb-6 text-white">
            Accelerating Innovation Through{' '}
            <span className="bg-gradient-to-br from-primary via-primary to-secondary bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-slide">
              Strategic Leadership
            </span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-[520px] mb-8 leading-relaxed">
            We help organisations in Kenya strengthen strategy, improve performance, and deliver measurable impact.
          </p>
          <Link href="/services">
            <Button size="lg" className="group relative overflow-hidden text-base px-8 py-6">
              <span className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 transition-opacity duration-1000 group-hover:opacity-100 pointer-events-none" />
              <span className="relative z-10 inline-flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="w-4 h-4 transition-all duration-1000 group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const el = document.getElementById('about-snippet')
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
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-primary" />
      </button>
    </section>
  )
}
