import { ResourcesHero } from '@/components/resources/ResourcesHero'
import { StatsSection } from '@/components/home/StatsSection'
import { ImpactBanner } from '@/components/home/ImpactBanner'
import { SectorsSection } from '@/components/services/SectorsSection'
import { CTABanner } from '@/components/home/CTABanner'

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <StatsSection />
      <ImpactBanner />
      <SectorsSection />
      <CTABanner />
    </>
  )
}
