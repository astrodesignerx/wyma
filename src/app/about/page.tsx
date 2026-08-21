import type { Metadata } from 'next'
import { AboutHero } from '@/components/about/AboutHero'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Who we are: WYMA New Frontiers is a Nairobi-based management consultancy with a decade of experience in strategy, research, M&E, and capacity building across Kenya and East Africa.',
  alternates: { canonical: '/about' },
}
import { MissionSection } from '@/components/about/MissionSection'
import { MandateVision } from '@/components/about/MandateVision'
import { CoreValues } from '@/components/about/CoreValues'
import { TeamSection } from '@/components/about/TeamSection'
import { AboutCTA } from '@/components/about/AboutCTA'

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <MandateVision />
      <CoreValues />
      <TeamSection />
      <AboutCTA />
    </>
  )
}
