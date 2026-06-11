import { ServicesHero } from '@/components/services/ServicesHero'
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
