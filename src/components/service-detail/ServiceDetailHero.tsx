'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { ServicePageData } from '@/types'

const accentIcons: Record<string, React.ReactNode> = {
  'layout-dashboard': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
  ),
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  ),
  'clipboard-list': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
  ),
  lightbulb: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
  ),
  'graduation-cap': (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  ),
  shield: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
  ),
}

export function ServiceDetailHero({ data }: { data: ServicePageData }) {
  return (
    <section className="relative py-[260px] pb-[330px] bg-[#121212] overflow-hidden">
      <div className="mx-auto max-w-[900px] px-6 text-center fade-in relative">
        <div
          className="w-14 h-14 rounded-[12px] flex items-center justify-center mb-6 mx-auto"
          style={{ backgroundColor: `var(--color-${data.accent})20`, color: `var(--color-${data.accent})` }}
        >
          {accentIcons[data.icon]}
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-[1.15]">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {data.title}
          </span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-[650px] mx-auto mb-10 leading-relaxed">
          {data.heroTagline}
        </p>
        <Link href="/contact">
          <Button size="lg" className="text-base px-8 py-6 transition-all duration-300 hover:bg-gradient-to-br hover:from-primary hover:to-secondary">
            REQUEST THIS SERVICE
          </Button>
        </Link>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => {
          const el = document.getElementById('service-overview')
          if (el) {
            const navbar = document.querySelector('nav')
            const offset = navbar?.offsetHeight ?? 102
            const target = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top: target, behavior: 'smooth' })
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
