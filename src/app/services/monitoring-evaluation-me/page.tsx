import { ServiceDetailHero } from '@/components/service-detail/ServiceDetailHero'
import { ServiceOverview } from '@/components/service-detail/ServiceOverview'
import { ServiceOfferings } from '@/components/service-detail/ServiceOfferings'
import { ServiceRelated } from '@/components/service-detail/ServiceRelated'
import { ServiceDetailCTA } from '@/components/service-detail/ServiceDetailCTA'
import { servicePageData } from '@/data/constants'

export default function MonitoringEvaluationPage() {
  const data = servicePageData.find(d => d.slug === 'monitoring-evaluation-me')!
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
