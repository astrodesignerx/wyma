import { AboutHero } from '@/components/about/AboutHero'
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
