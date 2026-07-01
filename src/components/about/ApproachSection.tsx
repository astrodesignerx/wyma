export function ApproachSection() {
  const steps = [
    {
      number: '1',
      title: 'Diagnostic',
      description:
        'Deep-dive into organizational structures to identify untapped value and core operational requirements.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
    },
    {
      number: '2',
      title: 'Engagement',
      description:
        'Collaborative gathering of qualitative and quantitative data to inform strategic decision-making.',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop',
    },
    {
      number: '3',
      title: 'Design',
      description:
        'Architecting solutions that align with organizational objectives and industry-leading best practices.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
    },
    {
      number: '4',
      title: 'Implementation',
      description:
        'Hands-on rollout with continuous feedback loops to ensure sustainable impact and performance tracking.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop',
    },
  ]

  return (
    <section className="py-24 bg-[#121212]" id="methodology">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
            THE PROCESS
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Our Consulting Approach
          </h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto leading-relaxed">
            A rigorous, four-step methodology designed to move from ambiguity to tangible, high-impact results.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-[900px] mx-auto">
          {/* Vertical dashed line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, rgba(238,203,39,0.3) 0px, rgba(238,203,39,0.3) 6px, transparent 6px, transparent 12px)',
            }}
          />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0
            return (
              <div key={i} className={`relative flex items-center mb-16 last:mb-0 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-[calc(50%-32px)] fade-in delay-${i + 1}`}>
                  <div className={isLeft ? 'text-right pr-4' : 'text-left pl-4'}>
                    <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-2">
                      STEP {i + 1}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[320px] inline-block">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center marker */}
                <div className="flex-shrink-0 w-16 flex justify-center relative z-10">
                  <div className="w-[46px] h-[46px] rounded-full bg-[#121212] border-2 border-[#EECB27] flex items-center justify-center shadow-[0_0_20px_rgba(238,203,39,0.25)]">
                    <span className="font-heading text-lg font-bold text-[#EECB27]">{step.number}</span>
                  </div>
                </div>

                {/* Image on opposite side */}
                <div className={`w-[calc(50%-32px)] fade-in delay-${i + 1}`}>
                  <div
                    className="rounded-xl overflow-hidden h-[200px] bg-cover bg-center shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                    style={{ backgroundImage: `url(${step.image})` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
