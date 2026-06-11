import { ServiceDetailHero } from '@/components/service-detail/ServiceDetailHero'
import { ServiceOverview } from '@/components/service-detail/ServiceOverview'
import { ServiceOfferings } from '@/components/service-detail/ServiceOfferings'
import { ServiceRelated } from '@/components/service-detail/ServiceRelated'
import { ServiceDetailCTA } from '@/components/service-detail/ServiceDetailCTA'
import { servicePageData } from '@/data/constants'

export default function ResearchMIPage() {
  const data = servicePageData.find(d => d.slug === 'research-market-intelligence')!
  return (
    <>
      <ServiceDetailHero data={data} />
      <ServiceOverview data={data} />
      <ServiceOfferings data={data} />
      <ServiceRelated data={data} />
      <ServiceDetailCTA />
    </>
  )
}
