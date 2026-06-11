export function MissionBanner() {
  return (
    <section className="py-[260px] bg-gradient-to-br from-primary to-secondary text-black text-center relative overflow-hidden" id="the-mission">
      {/* Circle top-right */}
      <div className="absolute top-[-200px] right-[-200px] w-[400px] h-[400px] rounded-full border border-solid border-[rgba(0,0,0,0.06)] pointer-events-none" />
      {/* Circle bottom-left */}
      <div className="absolute bottom-[-200px] left-[-200px] w-[400px] h-[400px] rounded-full border border-solid border-[rgba(0,0,0,0.06)] pointer-events-none" />

      <div className="mx-auto max-w-[800px] px-6 fade-in">
        <div className="relative z-[1] animate-float-vertical">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-black/60 mb-3">
            THE MISSION
          </span>
          <blockquote className="font-heading text-3xl md:text-4xl font-bold italic leading-[1.35] mt-6 text-black text-center">
            &ldquo;To accelerate <em className="italic text-white">innovation</em>&nbsp;through effective change leadership and management.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className="inline-block w-[60px] h-[1px] bg-black/30" />
            <span className="font-heading text-[11px] font-semibold text-black/50 uppercase tracking-[3px] whitespace-nowrap">
              STATEMENT OF INTENT
            </span>
            <span className="inline-block w-[60px] h-[1px] bg-black/30" />
          </div>
        </div>
      </div>
    </section>
  )
}
