import type { ServicePageData } from '@/types'

export function ServiceOverview({ data }: { data: ServicePageData }) {
  return (
    <section className="py-24 bg-[#f5f5f5]" id="service-overview">
      <div className="mx-auto max-w-[900px] px-6 fade-in">
        <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-3">
          OVERVIEW
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#121212] mb-6">{data.shortTitle}</h2>
        <p className="text-[#555] leading-relaxed text-base md:text-lg">{data.overview}</p>
      </div>
    </section>
  )
}
