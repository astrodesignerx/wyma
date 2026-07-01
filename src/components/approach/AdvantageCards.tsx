import { advantages } from '@/data/constants'

export function AdvantageCards() {
  return (
    <section className="py-24 bg-[#f5f5f5]" id="why-us">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-3">
            WHY CHOOSE US
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#121212]">The WYMA Advantage</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              className={`group relative rounded-xl p-8 border border-[#e0e0e0] bg-white overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] fade-in-scale delay-${i + 1}`}
            >
              <div
                className="absolute bottom-0 left-0 w-full h-[65%] pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `linear-gradient(to top, rgba(100,175,71,0.08), rgba(100,175,71,0.02), transparent)`,
                }}
              />
              <div className="relative z-[1]">
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-5"
                  style={{ backgroundColor: adv.iconBg }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={adv.iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {adv.icon === 'map' && (
                      <>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                      </>
                    )}
                    {adv.icon === 'sliders' && (
                      <>
                        <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
                        <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
                        <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/>
                        <line x1="17" y1="16" x2="23" y2="16"/>
                      </>
                    )}
                    {adv.icon === 'trending-up' && (
                      <>
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
                        <polyline points="16 7 22 7 22 13"/>
                      </>
                    )}
                    {adv.icon === 'target' && (
                      <>
                        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                      </>
                    )}
                  </svg>
                </div>
                <h3 className="font-heading text-lg font-semibold text-[#121212] mb-3">{adv.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
