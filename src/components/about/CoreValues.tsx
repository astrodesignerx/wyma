'use client'

import { useState } from 'react'
import { coreValues } from '@/data/constants'

const iconMap: Record<string, React.ReactNode> = {
  users: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  award: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
  ),
  handshake: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><polyline points="9 12 11 14 15 10"/></svg>
  ),
  globe: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  ),
}

function ValueCard({ title, description, icon, index }: { title: string; description: string; icon: string; index: number }) {
  const [pos, setPos] = useState({ x: 50, y: 50 })

  return (
    <div
      className={`group relative rounded-xl p-8 border border-[--color-card-border] bg-surface overflow-hidden fade-in-scale delay-${index + 1}`}
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
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(100,175,71,0.35) 0%, rgba(100,175,71,0.1) 30%, transparent 60%)`,
          filter: 'blur(20px)',
        }}
      />
      <div className="relative z-[1]">
        <div className="w-10 h-10 rounded-[10px] bg-[rgba(100,175,71,0.15)] text-primary flex items-center justify-center mb-5">
          {iconMap[icon]}
        </div>
        <h3 className="font-heading text-lg font-semibold text-white mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function CoreValues() {
  return (
    <section className="py-24" id="core-values">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
            OUR VALUES
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Core Values</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v, i) => (
            <ValueCard key={v.title} title={v.title} description={v.description} icon={v.icon} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
