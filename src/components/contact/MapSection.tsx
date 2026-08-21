export function MapSection() {
  return (
    <section className="py-24 bg-[#f5f5f5]" id="map">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-3">
            FIND US
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#121212]">Our Location</h2>
        </div>
        <div className="rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] fade-in">
          <iframe
            src="https://www.google.com/maps?q=Rehema+House,+Kaunda+Street,+Nairobi,+Kenya&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="WYMA New Frontiers Office Location"
          />
        </div>
      </div>
    </section>
  )
}
