import type { Metadata } from 'next'
import { ApproachHero } from '@/components/approach/ApproachHero'

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'Discovery, diagnosis, design, delivery: how WYMA New Frontiers turns evidence into strategy and measurable results for organisations in Kenya and East Africa.',
  alternates: { canonical: '/approach' },
}
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
