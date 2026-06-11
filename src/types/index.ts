export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: string
  accent: 'primary' | 'secondary' | 'accent' | 'danger'
}

export interface StatItem {
  target: number
  suffix: string
  label: string
  accent: 'primary' | 'secondary' | 'accent' | 'danger'
}

export interface AdvantageItem {
  icon: string
  title: string
  description: string
  iconBg: string
  iconColor: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ServiceDetail extends ServiceItem {
  href: string
}

export interface StepItem {
  number: string
  icon: string
  title: string
  description: string
}

export interface ServiceOfferingItem {
  title: string
  description: string
}

export interface ServicePageData {
  slug: string
  title: string
  shortTitle: string
  heroTagline: string
  overview: string
  accent: 'primary' | 'secondary' | 'accent' | 'danger'
  icon: string
  offerings: ServiceOfferingItem[]
  relatedSlugs: string[]
}
