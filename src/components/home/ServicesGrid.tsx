import { services } from '@/data/constants'

const accentColors: Record<string, { border: string; glow: string }> = {
  primary: { border: 'var(--color-primary)', glow: 'rgba(100,175,71,0.2), rgba(100,175,71,0.06)' },
  secondary: { border: 'var(--color-secondary)', glow: 'rgba(174,207,55,0.2), rgba(174,207,55,0.06)' },
  accent: { border: 'var(--color-accent)', glow: 'rgba(238,203,39,0.2), rgba(238,203,39,0.06)' },
  danger: { border: 'var(--color-danger)', glow: 'rgba(225,50,57,0.2), rgba(225,50,57,0.06)' },
}

const iconBg: Record<string, string> = {
  primary: 'rgba(100,175,71,0.15)',
  secondary: 'rgba(174,207,55,0.15)',
  accent: 'rgba(238,203,39,0.15)',
  danger: 'rgba(225,50,57,0.15)',
}

const iconColors: Record<string, string> = {
  primary: '#64AF47',
  secondary: '#AECF37',
  accent: '#EECB27',
  danger: '#E13239',
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

export function ServicesGrid() {
  return (
    <section className="py-[138px]" id="services-grid">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
            WHAT WE DO
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Our Service Areas</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => {
            const colors = accentColors[svc.accent]
            return (
              <div
                key={svc.id}
                className={`group relative rounded-xl p-8 border border-[--color-card-border] bg-surface overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:[transform:perspective(800px)_rotateY(-2deg)_rotateX(1deg)] fade-in-scale delay-${i + 1}`}
              >
                {/* Hover glow */}
                <div
                  className="absolute bottom-0 left-0 w-full h-[65%] pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(to top, ${colors.glow}, transparent)`,
                  }}
                />
                <div className="relative z-[1] flex flex-col h-full">
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-5"
                    style={{ backgroundColor: iconBg[svc.accent], color: iconColors[svc.accent] }}
                  >
                    {iconMap[svc.icon]}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-3">{svc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{svc.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
