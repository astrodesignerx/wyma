import { advantages } from '@/data/constants'

export function WhyUs() {
  return (
    <section className="py-24 relative overflow-hidden" id="why-us">
      {/* Circle top-left */}
      <div className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] rounded-full border border-solid border-[rgba(255,255,255,0.04)] pointer-events-none" />

      <div className="mx-auto max-w-[1200px] px-6 relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-left">
            <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
              WHY CHOOSE US
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8">The WYMA Advantage</h2>
            {advantages.map((adv) => (
              <div key={adv.title} className="flex gap-4 mb-6">
                <div
                  className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 mt-0.5"
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
                <div className="advantage-text">
                  <h4 className="font-heading font-semibold text-white mb-1">{adv.title}</h4>
                  <p className="text-sm text-muted-foreground">{adv.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="fade-in-right">
            <div
              className="rounded-xl overflow-hidden h-[400px] bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/why-us.jpg)' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
