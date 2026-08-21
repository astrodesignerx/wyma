import type { Metadata } from 'next'
import { ServicesHero } from '@/components/services/ServicesHero'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Strategy & operations, research & market intelligence, monitoring & evaluation, entrepreneurship, training, and risk & governance consulting services in Nairobi, Kenya.',
  alternates: { canonical: '/services' },
}
import { ServicesIntro } from '@/components/services/ServicesIntro'
import { ServiceCards } from '@/components/services/ServiceCards'
import { ApproachSteps } from '@/components/services/ApproachSteps'
import { SectorsSection } from '@/components/services/SectorsSection'
import { ServicesCTA } from '@/components/services/ServicesCTA'

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesIntro />
      <ServiceCards />
      <ApproachSteps />
      <SectorsSection />
      <ServicesCTA />
    </>
  )
}
