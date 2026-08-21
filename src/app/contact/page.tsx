import type { Metadata } from 'next'
import { ContactHero } from '@/components/contact/ContactHero'
import { siteName, siteUrl, contactInfo } from '@/data/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Request a consultation with WYMA New Frontiers — Rehema House, Kaunda Street, Nairobi. Reach us by form, phone, or email.',
  alternates: { canonical: '/contact' },
}
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { MapSection } from '@/components/contact/MapSection'
import { DualCTA } from '@/components/contact/DualCTA'
import { FAQSection } from '@/components/contact/FAQSection'

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteName,
  url: siteUrl,
  email: contactInfo.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rehema House, Kaunda Street',
    addressLocality: 'Nairobi',
    addressCountry: 'KE',
  },
  openingHours: 'Mo-Fr 08:00-17:00',
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <ContactHero />
      <section className="py-24 bg-[#121212]" id="contact-main">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16">
            <div className="fade-in" style={{ transitionDelay: '0.15s' }}>
              <ContactForm />
            </div>
            <div className="fade-in" style={{ transitionDelay: '0.15s' }}>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      <MapSection />
      <DualCTA />
      <FAQSection />
    </>
  )
}
