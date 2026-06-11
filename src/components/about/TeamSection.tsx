import { teamMembers } from '@/data/constants'

export function TeamSection() {
  return (
    <section className="py-24 bg-[#f5f5f5]" id="team">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-3">
            OUR TEAM
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#121212]">Leadership</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((m, i) => (
            <div
              key={m.name}
              className={`group relative rounded-xl border border-[#e0e0e0] bg-white overflow-hidden transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] fade-in-scale delay-${i + 1}`}
            >
              {/* Hover glow */}
              <div
                className="absolute bottom-0 left-0 w-full h-[65%] pointer-events-none opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(to top, rgba(100,175,71,0.15), rgba(100,175,71,0.04), transparent)',
                }}
              />
              <div className="relative z-[1]">
                <div className="w-full h-[360px] overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0"
                    />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-[#121212]">{m.name}</h3>
                  <p className="text-xs text-primary uppercase tracking-wider font-medium mb-3">{m.role}</p>
                  <p className="text-sm text-[#555] leading-relaxed">{m.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
