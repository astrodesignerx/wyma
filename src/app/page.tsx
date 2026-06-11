import { HeroSection } from '@/components/home/HeroSection'
import { AboutSnippet } from '@/components/home/AboutSnippet'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { ImpactBanner } from '@/components/home/ImpactBanner'
import { MissionBanner } from '@/components/home/MissionBanner'
import { WhyUs } from '@/components/home/WhyUs'
import { CTABanner } from '@/components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSnippet />
      <ServicesGrid />
      <ImpactBanner />
      <MissionBanner />
      <WhyUs />
      <CTABanner />
    </>
  )
}
