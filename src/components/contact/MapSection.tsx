export function MapSection() {
  return (
    <section className="py-24" id="map">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
            FIND US
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Our Location</h2>
        </div>
        <div className="rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.3)] fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8468951986557!2d36.8178!3d-1.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4b8b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sRehema+House%2C+Kaunda+Street%2C+Nairobi!5e0!3m2!1sen!2ske!4v1"
            width="100%"
            height="400"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
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
