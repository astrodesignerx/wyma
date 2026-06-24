'use client'

import { stats } from '@/data/constants'
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter'

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { display, ref } = useAnimatedCounter({ target, suffix })

  return (
    <div
      ref={ref}
      className="rounded-xl p-8 bg-white border border-[#e0e0e0]"
    >
      <div className="font-heading text-5xl font-bold text-primary mb-2">
        {display}
      </div>
      <div className="font-heading text-sm font-semibold tracking-wider text-[#121212] uppercase mb-2">
        {label}
      </div>
      <p className="text-sm text-[#555] leading-relaxed font-semibold">
        {label === 'Years of Experience'
          ? 'Decade-long track record of excellence in the regional market.'
          : label === 'Projects Delivered'
            ? 'Successful implementation across diverse sectors and counties.'
            : 'Trusted partner for global NGOs, corporates, and public entities.'}
      </p>
    </div>
  )
}

export function AboutSnippet() {
  return (
    <section className="py-[178px] bg-[#f5f5f5]" id="about-snippet">
      <div className="mx-auto max-w-[1200px] px-6 fade-in">
        {/* Top: two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-3">
              IDENTITY
            </span>
            <h2 className="font-heading text-[2.5rem] md:text-[3rem] leading-[1.15] font-bold text-[#121212]">
              A Consultancy Built for the{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                East African Context
              </span>
            </h2>
          </div>
          <div>
            <span className="block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-transparent mb-3 select-none" aria-hidden="true">
              IDENTITY
            </span>
            <p className="text-[#555] leading-relaxed text-sm md:text-base">
              WYMA New Frontiers Limited is a corporate management consultancy firm registered in Kenya under the
              Companies Act (CAP 486), with offices in Nairobi. We provide advisory services, research, training,
              monitoring and evaluation, and consulting solutions designed to help organisations strengthen strategy,
              improve performance, and achieve sustainable growth.
            </p>
          </div>
        </div>

        {/* Bottom: three stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.slice(0, 3).map((stat) => (
            <StatCard key={stat.label} target={stat.target} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
