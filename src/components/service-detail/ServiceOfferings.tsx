import type { ServicePageData } from '@/types'

const accentConfig: Record<string, { rgb: string; color: string; bg: string }> = {
  primary: { rgb: '100,175,71', color: '#64AF47', bg: 'rgba(100,175,71,0.12)' },
  secondary: { rgb: '174,207,55', color: '#AECF37', bg: 'rgba(174,207,55,0.12)' },
  accent: { rgb: '238,203,39', color: '#EECB27', bg: 'rgba(238,203,39,0.12)' },
  danger: { rgb: '225,50,57', color: '#E13239', bg: 'rgba(225,50,57,0.12)' },
}

export function ServiceOfferings({ data }: { data: ServicePageData }) {
  const cfg = accentConfig[data.accent]

  return (
    <section className="py-24" id="service-offerings">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
            WHAT WE DELIVER
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Key Service Offerings</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.offerings.map((o, i) => (
            <div
              key={o.title}
              className={`group relative rounded-xl p-8 border border-[--color-card-border] bg-surface overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] fade-in-scale delay-${i + 1}`}
              style={{ borderLeft: `4px solid ${cfg.color}` }}
            >
              <div
                className="absolute bottom-0 left-0 w-full h-[65%] pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: `linear-gradient(to top, rgba(${cfg.rgb},0.15), rgba(${cfg.rgb},0.04), transparent)` }}
              />
              <div className="relative z-[1]">
                <h3 className="font-heading text-lg font-semibold text-white mb-3">{o.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
