import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceDetailHero } from '@/components/service-detail/ServiceDetailHero'
import { ServiceOverview } from '@/components/service-detail/ServiceOverview'
import { ServiceOfferings } from '@/components/service-detail/ServiceOfferings'
import { ServiceRelated } from '@/components/service-detail/ServiceRelated'
import { ServiceDetailCTA } from '@/components/service-detail/ServiceDetailCTA'
import { servicePageData } from '@/data/constants'

export function generateStaticParams() {
  return servicePageData.map((service) => ({ slug: service.slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const data = servicePageData.find((d) => d.slug === slug)
  if (!data) return {}
  return {
    title: data.shortTitle,
    description: data.heroTagline,
    alternates: { canonical: `/services/${data.slug}` },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = servicePageData.find((d) => d.slug === slug)
  if (!data) notFound()

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
