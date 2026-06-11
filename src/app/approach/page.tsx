import { ApproachHero } from '@/components/approach/ApproachHero'
import { ApproachSection } from '@/components/about/ApproachSection'
import { AdvantageCards } from '@/components/approach/AdvantageCards'
import { CTABanner } from '@/components/home/CTABanner'

export default function ApproachPage() {
  return (
    <>
      <ApproachHero />
      <ApproachSection />
      <AdvantageCards />
      <CTABanner />
    </>
  )
}
