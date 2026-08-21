const accentStyles: Record<string, { bg: string; text: string }> = {
  primary: { bg: 'rgba(100,175,71,0.2)', text: '#64AF47' },
  secondary: { bg: 'rgba(174,207,55,0.2)', text: '#AECF37' },
  accent: { bg: 'rgba(238,203,39,0.2)', text: '#EECB27' },
  danger: { bg: 'rgba(225,50,57,0.2)', text: '#E13239' },
}

const sectorsData = [
  {
    label: 'Development Agencies',
    description: 'Programme design, implementation support, and technical assistance for bilateral and multilateral partners.',
    accent: 'primary',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    label: 'NGOs',
    description: 'Organisational strengthening, monitoring & evaluation, and capacity building for civil society organisations.',
    accent: 'secondary',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.59 13.51 6.83 3.98" /><path d="m15.41 6.51-6.82 3.98" />
      </svg>
    ),
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    label: 'SMEs',
    description: 'Business advisory, digital transformation, and growth strategy for small and medium enterprises.',
    accent: 'accent',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    label: 'Corporates',
    description: 'Strategic planning, operational efficiency, and governance advisory for private sector companies.',
    accent: 'danger',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" />
      </svg>
    ),
    image: 'https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    label: 'Public Sector',
    description: 'Policy support, institutional reform, and public service delivery advisory for government agencies.',
    accent: 'primary',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /><path d="M9 9v.01" /><path d="M9 12v.01" /><path d="M9 15v.01" /><path d="M9 18v.01" />
      </svg>
    ),
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    label: 'Donor Programs',
    description: 'Grant management, results reporting, and impact evaluation for donor-funded initiatives.',
    accent: 'secondary',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    image: 'https://images.pexels.com/photos/6646850/pexels-photo-6646850.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

export function SectorsSection() {
  return (
    <section className="py-24" id="sectors">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-14 fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
            OUR REACH
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Sectors Served</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorsData.map((sector) => {
            const style = accentStyles[sector.accent] || accentStyles.primary
            return (
              <div
                key={sector.label}
                className="relative rounded-xl overflow-hidden fade-in-scale"
                style={{ border: '1px solid var(--color-card-border)' }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${sector.image})` }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/75" />
                <div className="relative z-[1] flex flex-col items-center justify-center py-14 px-8 min-h-[240px]">
                  <div className="mb-5" style={{ color: style.text }}>
                    {sector.icon}
                  </div>
                  <span className="font-heading text-base font-semibold text-white tracking-wide text-center mb-2">{sector.label}</span>
                  <p className="text-sm text-white/70 text-center leading-relaxed max-w-[240px]">{sector.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
