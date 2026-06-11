export function ContactHero() {
  return (
    <section className="page-hero-dark py-[260px] pb-[calc(4rem*2)] text-center bg-[#121212]">
      <div className="mx-auto max-w-[1200px] px-6 fade-in">
        <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
          GET IN TOUCH
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-[800px] mx-auto mb-4">
          Let&apos;s{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Start a Conversation
          </span>
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-[650px] mx-auto">
          Whether you need strategic advisory, research, evaluation, or capacity building — our team is ready to help.
        </p>
      </div>
    </section>
  )
}
