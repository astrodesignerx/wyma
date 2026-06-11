import { Star } from 'lucide-react'

const logoFiles = Array.from({ length: 14 }, (_, i) => `/images/logos/WYMA Logos-${String(i + 1).padStart(2, '0')}.svg`)

export function ImpactBanner() {
  return (
    <section className="bg-[#f5f5f5] text-[#121212] text-center pt-24 pb-0 flex flex-col" id="portfolio">
      <div className="mx-auto max-w-[1200px] px-6 pb-24">
        <div className="max-w-[700px] mx-auto fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-3">
            TRUSTED BY
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-base md:text-lg text-[#555] leading-relaxed">
            From baseline evaluations to strategic transformation — our work spans multiple sectors with measurable
            outcomes across Kenya and the region.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-[#f5f5f5] py-2 overflow-hidden">
        <div className="flex items-center gap-10 w-max" style={{ animation: 'marquee-scroll 60s linear infinite' }}>
          {[...logoFiles, ...logoFiles].map((src, i) => (
            <span key={`${src}-${i}`} className="flex items-center gap-10">
              <img
                src={src}
                alt=""
                className="h-40 w-auto flex-shrink-0"
              />
              {i < logoFiles.length * 2 - 1 && (
                <Star className="w-5 h-5 text-primary flex-shrink-0" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
