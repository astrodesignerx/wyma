export function CompanyOverview() {
  return (
    <section className="py-24 pb-[156px]" id="who-we-are">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row bg-surface border-l-4 border-solid border-primary rounded-xl overflow-hidden fade-in">
          <div className="flex-1 p-8 md:p-10">
            <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-2">
              WHO WE ARE
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
              About WYMA New Frontiers
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              WYMA New Frontiers Limited is a dynamic management consultancy headquartered in Nairobi, Kenya. We specialise
              in strategic advisory, research, monitoring &amp; evaluation, entrepreneurship development, and capacity
              building.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our team brings together decades of combined experience across public, private, and development sectors,
              delivering evidence-based solutions that drive measurable impact.
            </p>
          </div>
          <div
            className="md:w-[40%] min-h-[300px] bg-cover bg-center relative"
            style={{
              backgroundImage: 'linear-gradient(135deg, rgba(18,18,18,0.6), rgba(18,18,18,0.2)), url(/images/hero-bg.jpg)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #1E1E1E 0%, rgba(30,30,30,0.6) 100%)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
