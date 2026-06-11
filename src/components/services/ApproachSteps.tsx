import { approachSteps } from '@/data/constants'

const stepIcons: Record<string, React.ReactNode> = {
  search: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  ),
  'message-circle': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  ),
  'edit-3': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
  ),
  'check-circle': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  ),
}

export function ApproachSteps() {
  return (
    <section className="py-24 bg-[#f5f5f5]" id="approach">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-12 fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-3">
            OUR APPROACH
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#121212]">Consulting Approach</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachSteps.map((step, i) => (
            <div
              key={step.number}
              className={`rounded-xl p-6 border border-[#e0e0e0] bg-white text-center fade-in-scale delay-${i + 1}`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 rounded-full border-2 border-solid border-primary text-primary flex items-center justify-center font-heading text-sm font-bold">
                  {step.number}
                </div>
              </div>
              <div
                className="w-10 h-10 rounded-[10px] bg-[rgba(100,175,71,0.15)] text-primary flex items-center justify-center mx-auto mb-4"
              >
                {stepIcons[step.icon]}
              </div>
              <h3 className="font-heading text-base font-semibold text-[#121212] mb-2">{step.title}</h3>
              <p className="text-sm text-[#555] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
