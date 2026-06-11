export function ApproachSection() {
  const steps = [
    {
      title: 'Organisational Diagnostic & Needs Assessment',
      description:
        'Deep-dive into organizational structures to identify untapped value and core operational requirements.',
    },
    {
      title: 'Stakeholder Engagement & Data Collection',
      description:
        'Collaborative gathering of qualitative and quantitative data to inform strategic decision-making.',
    },
    {
      title: 'Solution Design & Strategic Alignment',
      description:
        'Architecting solutions that align with organizational objectives and industry-leading best practices.',
    },
    {
      title: 'Implementation Support & Performance Monitoring',
      description:
        'Hands-on rollout with continuous feedback loops to ensure sustainable impact and performance tracking.',
    },
  ]

  return (
    <section className="py-24 bg-[#f5f5f5]" id="methodology">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div className="fade-in">
            <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-3">
              THE PROCESS
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#121212] mb-6">Our Process</h2>
            <p className="text-[#555] leading-relaxed mb-8">
              We don&apos;t just advise; we engineer. Our four-stage methodology ensures that innovation is matched
              with operational stability and security from day zero.
            </p>

            {/* Accelerated Delivery card */}
            <div className="rounded-xl p-6 bg-white border border-[#e0e0e0] mb-8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-[10px] bg-[rgba(100,175,71,0.15)] text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" />
                </svg>
              </div>
              <div>
                <div className="font-heading text-sm font-semibold tracking-wider text-primary uppercase mb-1">
                  ACCELERATED DELIVERY
                </div>
                <p className="text-sm text-[#555] leading-relaxed">
                  Rapid prototyping to production environments.
                </p>
              </div>
            </div>

            {/* Image */}
            <div
              className="rounded-xl overflow-hidden h-[240px] bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/approach.jpg)' }}
            />
          </div>

          {/* Right column — timeline */}
          <div className="fade-in relative flex flex-col justify-between">
            {/* Vertical line */}
            <div className="absolute left-[17px] top-0 bottom-0 w-px bg-[#ddd]" />

            {steps.map((step, i) => (
              <div key={i} className="flex gap-5 flex-1 items-center">
                {/* Diamond */}
                <div className="flex-shrink-0 w-[34px] flex justify-center">
                  <div className="w-[13px] h-[13px] rotate-45 bg-primary flex-shrink-0" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading text-lg font-semibold text-[#121212] mb-2">{step.title}</h3>
                  <p className="text-sm text-[#555] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
