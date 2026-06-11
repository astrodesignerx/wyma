import { ContactHero } from '@/components/contact/ContactHero'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { MapSection } from '@/components/contact/MapSection'
import { DualCTA } from '@/components/contact/DualCTA'
import { FAQSection } from '@/components/contact/FAQSection'

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-24 bg-[#f5f5f5]" id="contact-main">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16">
            <div className="fade-in-left">
              <ContactForm />
            </div>
            <div className="fade-in-right">
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
