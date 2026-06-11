'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { serviceDetails } from '@/data/constants'
import { Button } from '@/components/ui/button'

const accentConfig: Record<string, { border: string; iconBg: string; iconColor: string; glow: string; rgb: string }> = {
  primary: {
    border: 'var(--color-primary)',
    iconBg: 'rgba(100,175,71,0.15)',
    iconColor: '#64AF47',
    glow: 'rgba(100,175,71,0.2), rgba(100,175,71,0.06)',
    rgb: '100,175,71',
  },
  secondary: {
    border: 'var(--color-secondary)',
    iconBg: 'rgba(174,207,55,0.15)',
    iconColor: '#AECF37',
    glow: 'rgba(174,207,55,0.2), rgba(174,207,55,0.06)',
    rgb: '174,207,55',
  },
  accent: {
    border: 'var(--color-accent)',
    iconBg: 'rgba(238,203,39,0.15)',
    iconColor: '#EECB27',
    glow: 'rgba(238,203,39,0.2), rgba(238,203,39,0.06)',
    rgb: '238,203,39',
  },
  danger: {
    border: 'var(--color-danger)',
    iconBg: 'rgba(225,50,57,0.15)',
    iconColor: '#E13239',
    glow: 'rgba(225,50,57,0.2), rgba(225,50,57,0.06)',
    rgb: '225,50,57',
  },
}

const iconMap: Record<string, React.ReactNode> = {
  'layout-dashboard': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
  ),
  search: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  ),
  'clipboard-list': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
  ),
  lightbulb: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
  ),
  'graduation-cap': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
  ),
}

function Card({ svc, cfg, index }: { svc: typeof serviceDetails[number]; cfg: typeof accentConfig[string]; index: number }) {
  const [pos, setPos] = useState({ x: 50, y: 50 })

  const serviceRouteMap: Record<string, string> = {
    'strategy-operations-organizational-development': '/services/strategy-operations-organizational-development',
    'research-market-intelligence': '/services/research-market-intelligence',
    'monitoring-evaluation': '/services/monitoring-evaluation-me',
    'entrepreneurship-business-development': '/services/entrepreneurship-business-development',
    'training-capacity-building': '/services/training-capacity-building',
    'risk-governance': '/services/risk-governance-value-assessments',
  }

  return (
    <div
      className={`group relative rounded-xl p-6 border border-[--color-card-border] bg-surface overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex flex-col fade-in-scale delay-${index + 1}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
      }}
    >
      {/* Spotlight glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(${cfg.rgb},0.3) 0%, rgba(${cfg.rgb},0.08) 30%, transparent 60%)`,
          filter: 'blur(20px)',
        }}
      />
      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 w-full h-[65%] pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to top, ${cfg.glow}, transparent)`,
        }}
      />
      <div className="relative z-[1] flex flex-col flex-1">
        <div
          className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-4"
          style={{ backgroundColor: cfg.iconBg, color: cfg.iconColor }}
        >
          {iconMap[svc.icon]}
        </div>
        <h3 className="font-heading text-base font-semibold text-white mb-2 flex-shrink-0">{svc.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-3">{svc.description}</p>
                  <Link href={serviceRouteMap[svc.id] || '/contact'}>
          <Button size="sm" className="self-start flex-shrink-0 text-xs px-3 py-1.5 hover:brightness-110" style={{ backgroundColor: cfg.iconColor }}>
            Learn More <ArrowRight className="w-3 h-3 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export function ServiceCards() {
  return (
    <section className="py-24 bg-[#121212]" id="services-cards">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
            OUR EXPERTISE
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Service Areas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceDetails.map((svc, i) => {
            const cfg = accentConfig[svc.accent]
            return <Card key={svc.id} svc={svc} cfg={cfg} index={i} />
          })}
        </div>
      </div>
    </section>
  )
}
