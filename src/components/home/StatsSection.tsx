'use client'

import { stats } from '@/data/constants'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'

const accentColors: Record<string, string> = {
  primary: '#64AF47',
  secondary: '#AECF37',
  accent: '#EECB27',
  danger: '#E13239',
}

function StatItemComponent({ target, suffix, label, accent }: { target: number; suffix: string; label: string; accent: string }) {
  const { display, ref } = useAnimatedCounter({ target, suffix })
  return (
    <div className="text-center fade-in-scale" ref={ref}>
      <div
        className="font-heading text-7xl font-extrabold leading-none mb-2"
        style={{ color: accentColors[accent] }}
      >
        {display}
      </div>
      <div className="text-xs text-[#555] tracking-wider uppercase font-medium">
        {label}
      </div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-24 bg-[#f5f5f5]" id="stats">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatItemComponent key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
