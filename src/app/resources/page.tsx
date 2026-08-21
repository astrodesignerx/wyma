import type { Metadata } from 'next'
import { ResourcesHero } from '@/components/resources/ResourcesHero'

export const metadata: Metadata = {
  title: 'Resources & Impact',
  description:
    'Our track record in numbers: projects delivered, clients served, and sectors covered by WYMA New Frontiers across Kenya and East Africa.',
  alternates: { canonical: '/resources' },
}
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
