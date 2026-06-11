import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { ServicePageData } from '@/types'
import { servicePageData } from '@/data/constants'

export function ServiceRelated({ data }: { data: ServicePageData }) {
  const related = servicePageData.filter(d => data.relatedSlugs.includes(d.slug))

  return (
    <section className="py-24 bg-[#f5f5f5]" id="service-related">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-3">
            RELATED SERVICES
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#121212]">Explore More Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((r, i) => {
            return (
              <div
                key={r.slug}
                className={`group relative rounded-xl p-8 border border-[#e0e0e0] bg-white flex flex-col overflow-hidden transition-all duration-500 fade-in-scale delay-${i + 1}`}
              >
                {/* Water ripple overlay */}
                <div
                  className="absolute inset-0 pointer-events-none transition-transform duration-700 translate-y-full group-hover:translate-y-0"
                  style={{
                    background: 'linear-gradient(to top, #64AF47 0%, #AECF37 100%)',
                    transitionTimingFunction: 'cubic-bezier(0.05, 0.95, 0.25, 1)',
                  }}
                />
                <div className="relative z-[1] flex flex-col flex-1">
                  <h3 className="font-heading text-lg font-semibold text-[#121212] group-hover:text-white transition-colors duration-500 mb-2">{r.shortTitle}</h3>
                  <p className="text-sm text-[#555] group-hover:text-white/80 leading-relaxed transition-colors duration-500 flex-1 mb-6">{r.heroTagline}</p>
                  <Link href={`/services/${r.slug}`} className="mt-auto">
                    <Button className="px-5 py-2.5 text-xs bg-primary text-white group-hover:bg-white group-hover:text-primary transition-all duration-500">
                      LEARN MORE <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
