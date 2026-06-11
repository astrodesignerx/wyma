import type { ServiceItem, StatItem, AdvantageItem, TeamMember, FAQItem, ServiceDetail, StepItem, ServicePageData } from '@/types'

export const siteName = 'WYMA New Frontiers'
export const siteTagline = 'Strategic leadership and innovation consulting for the East African frontier.'

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/approach', label: 'Approach' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export const homeSectionItems = [
  { href: '#about-snippet', label: 'Identity' },
  { href: '#services-grid', label: 'What We Do' },
  { href: '#portfolio', label: 'Impact' },
  { href: '#the-mission', label: 'The Mission' },
  { href: '#why-us', label: 'Why Choose Us' },
]

export const aboutSectionItems = [
  { href: '#who-we-are', label: 'Who We Are' },
  { href: '#our-mission', label: 'Our Mission' },
  { href: '#mandate-vision', label: 'Mandate & Vision' },
  { href: '#core-values', label: 'Core Values' },
  { href: '#team', label: 'Our Team' },
]

export const serviceDropdownItems = [
  { href: '/services/strategy-operations-organizational-development', label: 'Strategy & Development' },
  { href: '/services/research-market-intelligence', label: 'Research & Market Intelligence' },
  { href: '/services/entrepreneurship-business-development', label: 'Entrepreneurship & Business Development' },
  { href: '/services/monitoring-evaluation-me', label: 'Monitoring & Evaluation (M&E)' },
  { href: '/services/risk-governance-value-assessments', label: 'Risk, Governance & Value Assessments' },
  { href: '/services/training-capacity-building', label: 'Training & Capacity Building' },
]

export const services: ServiceItem[] = [
  {
    id: 'strategy',
    title: 'Strategy & Operations',
    description: 'Organisational development, strategic planning, operational efficiency, and change management for sustained growth.',
    icon: 'layout-dashboard',
    accent: 'primary',
  },
  {
    id: 'research',
    title: 'Research & Intelligence',
    description: 'Market research, surveys, labour market analysis, value chain analysis, and data systems for informed decision-making.',
    icon: 'search',
    accent: 'secondary',
  },
  {
    id: 'me',
    title: 'Monitoring & Evaluation',
    description: 'Baseline studies, mid-term and end-line evaluations, project monitoring systems, and performance reporting.',
    icon: 'clipboard-list',
    accent: 'accent',
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship',
    description: 'ILO-SIYB programs, SME advisory, digital transformation support, and structured business development services.',
    icon: 'lightbulb',
    accent: 'primary',
  },
  {
    id: 'training',
    title: 'Training & Capacity Building',
    description: 'Customised training programs, leadership development, technical assistance, and institutional capacity strengthening.',
    icon: 'graduation-cap',
    accent: 'secondary',
  },
  {
    id: 'risk',
    title: 'Risk & Governance',
    description: 'Risk assessment, governance audits, feasibility studies, and value-for-money analysis for prudent decision-making.',
    icon: 'shield',
    accent: 'danger',
  },
]

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'strategy-operations-organizational-development',
    title: 'Strategy, Operations & Organisational Development',
    description: 'Comprehensive strategic planning, operational restructuring, and organisational development to enhance institutional effectiveness and drive sustainable growth.',
    icon: 'layout-dashboard',
    accent: 'primary',
    href: '#strategy-operations-organizational-development',
  },
  {
    id: 'research-market-intelligence',
    title: 'Research & Market Intelligence',
    description: 'In-depth market research, labour market analysis, value chain assessments, and data-driven intelligence systems that inform strategic decision-making.',
    icon: 'search',
    accent: 'secondary',
    href: '#research-market-intelligence',
  },
  {
    id: 'monitoring-evaluation',
    title: 'Monitoring & Evaluation',
    description: 'Rigorous baseline studies, mid-term and end-line evaluations, project monitoring frameworks, and comprehensive performance reporting.',
    icon: 'clipboard-list',
    accent: 'accent',
    href: '#monitoring-evaluation',
  },
  {
    id: 'entrepreneurship-business-development',
    title: 'Entrepreneurship & Business Development',
    description: 'ILO-SIYB certified programs, SME advisory services, digital transformation support, and structured business development solutions.',
    icon: 'lightbulb',
    accent: 'primary',
    href: '#entrepreneurship-business-development',
  },
  {
    id: 'training-capacity-building',
    title: 'Training & Capacity Building',
    description: 'Customised training programs, leadership development initiatives, technical assistance, and institutional capacity strengthening for lasting impact.',
    icon: 'graduation-cap',
    accent: 'secondary',
    href: '#training-capacity-building',
  },
  {
    id: 'risk-governance',
    title: 'Risk, Governance & Value Assessments',
    description: 'Risk assessment frameworks, governance audits, feasibility studies, and value-for-money analysis enabling prudent and transparent decision-making.',
    icon: 'shield',
    accent: 'danger',
    href: '#risk-governance',
  },
]

export const approachSteps: StepItem[] = [
  {
    number: '01',
    icon: 'search',
    title: 'Discovery',
    description: 'We immerse ourselves in your context — conducting stakeholder interviews, data review, and landscape analysis.',
  },
  {
    number: '02',
    icon: 'message-circle',
    title: 'Diagnosis',
    description: 'We identify gaps, opportunities, and root causes using evidence-based diagnostic frameworks.',
  },
  {
    number: '03',
    icon: 'edit-3',
    title: 'Design',
    description: 'We co-create tailored strategies, implementation roadmaps, and measurable KPIs with your team.',
  },
  {
    number: '04',
    icon: 'check-circle',
    title: 'Delivery',
    description: 'We support execution through technical assistance, capacity building, and robust monitoring.',
  },
]

export const sectors = [
  'Health', 'Education', 'Agriculture', 'Financial Services',
  'Energy', 'Water & Sanitation', 'Governance', 'Trade & Industry',
  'ICT & Digital', 'Environment & Climate',
]

export const stats: StatItem[] = [
  { target: 10, suffix: '+', label: 'Years of Experience', accent: 'primary' },
  { target: 50, suffix: '+', label: 'Projects Delivered', accent: 'secondary' },
  { target: 80, suffix: '+', label: 'Clients Served', accent: 'accent' },
  { target: 20, suffix: '', label: 'Counties Covered', accent: 'danger' },
]

export const advantages: AdvantageItem[] = [
  {
    icon: 'map',
    title: 'Regional Expertise',
    description: 'Deep understanding of the East African market landscape and cultural nuances.',
    iconBg: 'rgba(100,175,71,0.15)',
    iconColor: '#64AF47',
  },
  {
    icon: 'sliders',
    title: 'Tailored Solutions',
    description: 'No cookie-cutter strategies. We design for your specific context and goals.',
    iconBg: 'rgba(174,207,55,0.15)',
    iconColor: '#AECF37',
  },
  {
    icon: 'trending-up',
    title: 'Evidence-Based',
    description: 'Every recommendation is grounded in rigorous research and data analysis.',
    iconBg: 'rgba(238,203,39,0.15)',
    iconColor: '#EECB27',
  },
  {
    icon: 'target',
    title: 'Measurable Impact',
    description: 'We define clear KPIs and deliver outcomes you can track and report.',
    iconBg: 'rgba(225,50,57,0.15)',
    iconColor: '#E13239',
  },
]

export const coreValues = [
  { icon: 'users', title: 'Collaboration', description: 'We partner closely with clients to co-create solutions that stick.' },
  { icon: 'award', title: 'Excellence', description: 'We uphold the highest standards of quality and rigour in everything we deliver.' },
  { icon: 'handshake', title: 'Integrity', description: 'We operate with transparency, honesty, and a steadfast commitment to ethics.' },
  { icon: 'globe', title: 'Contextual Relevance', description: 'We design solutions that respect and respond to local realities.' },
]

export const teamMembers: TeamMember[] = [
  { name: 'Winfred Y. Mwangi', role: 'Lead Consultant & Managing Director', bio: 'Over 15 years of experience in strategic advisory, M&E, and organisational development across East Africa.', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
  { name: 'James Ochieng', role: 'Senior Strategy Advisor', bio: 'Specialist in corporate strategy, operational efficiency, and public sector reform with 12+ years of experience.', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
  { name: 'Grace Akinyi', role: 'Head of Research & Evaluation', bio: 'Expert in mixed-methods research, impact evaluation, and data systems with a background in international development.', image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop' },
]

export const faqs: FAQItem[] = [
  {
    question: 'What types of organisations do you work with?',
    answer: 'We work with NGOs, government agencies, private sector companies, and multilateral organisations across Kenya and the region.',
  },
  {
    question: 'How long does a typical engagement last?',
    answer: 'Engagements range from short-term advisory (2–4 weeks) to multi-year institutional strengthening partnerships, depending on scope.',
  },
  {
    question: 'Do you offer services outside Nairobi?',
    answer: 'Yes. We have experience working across all 47 counties in Kenya and regionally within East Africa.',
  },
  {
    question: 'How do you ensure quality and impact?',
    answer: 'We use rigorous quality assurance frameworks, regular client feedback loops, and third-party validation to ensure measurable outcomes.',
  },
]

export const marqueeClients = [
  'Ministry of Health', 'USAID', 'World Bank', 'County Gov. of Nairobi',
  'UNDP', 'KCB Group', 'UNICEF', 'Equity Bank',
]

export const contactInfo = {
  address: 'Rehema House, Kaunda Street, Nairobi, Kenya',
  phone: '+254 700 000 000',
  email: 'info@wyma-newfrontiers.com',
  hours: 'Mon — Fri: 8:00 AM — 5:00 PM',
}

export const footerQuickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export const footerServicesLinks = [
  { href: '/services/strategy-operations-organizational-development', label: 'Strategy & Development' },
  { href: '/services/research-market-intelligence', label: 'Research & Intelligence' },
  { href: '/services/monitoring-evaluation-me', label: 'M&amp;E' },
  { href: '/services/entrepreneurship-business-development', label: 'Entrepreneurship' },
  { href: '/services/training-capacity-building', label: 'Training &amp; Capacity Building' },
  { href: '/services/risk-governance-value-assessments', label: 'Risk &amp; Governance' },
]

export const servicePageData: ServicePageData[] = [
  {
    slug: 'strategy-operations-organizational-development',
    title: 'Strategy, Operations & Organisational Development',
    shortTitle: 'Strategy, Operations & Organisational Development',
    heroTagline: 'Strengthening organisations through robust strategic planning, governance frameworks, and operational excellence.',
    overview: 'Our Strategy, Operations & Organisational Development practice helps organisations design and implement robust strategies that drive sustainable growth. We work with leadership teams to clarify vision, align operations, and build the institutional capacity needed to execute effectively. From governance reviews and policy development to organisational capacity assessments and sustainability frameworks, we provide the analytical rigor and hands-on support that transforms strategic intent into measurable results.',
    accent: 'primary',
    icon: 'layout-dashboard',
    offerings: [
      { title: 'Strategic Planning & Facilitation', description: 'Collaborative strategy development workshops and multi-year strategic plan formulation aligned with organisational goals.' },
      { title: 'Governance & Policy Reviews', description: 'Comprehensive governance audits, board effectiveness assessments, and policy framework development.' },
      { title: 'Organisational Capacity Assessments', description: 'Structured assessments to identify strengths, gaps, and opportunities for institutional strengthening.' },
      { title: 'Sustainability & Exit Strategy Frameworks', description: 'Designing sustainability models and transition plans for long-term programme viability.' },
    ],
    relatedSlugs: ['research-market-intelligence', 'risk-governance-value-assessments', 'training-capacity-building'],
  },
  {
    slug: 'research-market-intelligence',
    title: 'Research & Market Intelligence',
    shortTitle: 'Research & Market Intelligence',
    heroTagline: 'Data-driven insights and market analysis to power strategic decision-making and business growth.',
    overview: 'Our Research & Market Intelligence practice delivers data-driven insights that inform strategic decisions and unlock new opportunities. We combine rigorous research methodologies with deep sectoral expertise to produce actionable intelligence. Whether you need market sizing, competitor analysis, labour market studies, or value chain mapping, our team provides the evidence base your organisation needs to make confident, informed decisions.',
    accent: 'secondary',
    icon: 'search',
    offerings: [
      { title: 'Market Research & Analysis', description: 'Comprehensive market studies, consumer insights, and competitive landscape analysis for strategic positioning.' },
      { title: 'Survey Design & Data Collection', description: 'End-to-end survey design, fieldwork management, and data analysis using both quantitative and qualitative methods.' },
      { title: 'Labour Market & Value Chain Analysis', description: 'In-depth labour market assessments and value chain mapping to identify growth opportunities and skills gaps.' },
      { title: 'Data Systems & Dashboards', description: 'Design and implementation of data management systems and analytical dashboards for ongoing intelligence.' },
    ],
    relatedSlugs: ['strategy-operations-organizational-development', 'monitoring-evaluation-me', 'training-capacity-building'],
  },
  {
    slug: 'monitoring-evaluation-me',
    title: 'Monitoring & Evaluation (M&E)',
    shortTitle: 'Monitoring & Evaluation',
    heroTagline: 'Comprehensive M&E frameworks that track performance, demonstrate impact, and drive continuous improvement.',
    overview: 'Our Monitoring & Evaluation practice helps organisations build robust systems for tracking progress, measuring impact, and ensuring accountability. We design and implement M&E frameworks that are practical, rigorous, and aligned with international best practices. From baseline studies and mid-term reviews to end-line evaluations and real-time monitoring systems, we provide the tools and expertise needed to demonstrate measurable outcomes to stakeholders and funders.',
    accent: 'accent',
    icon: 'clipboard-list',
    offerings: [
      { title: 'Baseline Studies & Needs Assessments', description: 'Establishing evidence baselines and conducting needs assessments to inform programme design and measurement.' },
      { title: 'Mid-Term & End-Line Evaluations', description: 'Independent evaluations that assess programme effectiveness, efficiency, relevance, and sustainability.' },
      { title: 'M&E Framework Design', description: 'Developing results frameworks, logical models, and indicator systems aligned with programme objectives.' },
      { title: 'Performance Monitoring Systems', description: 'Implementing real-time monitoring tools and reporting dashboards for ongoing performance tracking.' },
    ],
    relatedSlugs: ['research-market-intelligence', 'training-capacity-building', 'risk-governance-value-assessments'],
  },
  {
    slug: 'entrepreneurship-business-development',
    title: 'Entrepreneurship & Business Development',
    shortTitle: 'Entrepreneurship & Business Development',
    heroTagline: 'Empowering entrepreneurs and SMEs with the tools, training, and advisory support to build thriving businesses.',
    overview: 'Our Entrepreneurship & Business Development practice empowers entrepreneurs and small businesses with the knowledge, tools, and support systems needed to start, grow, and sustain successful enterprises. As certified ILO-SIYB trainers, we deliver internationally recognised entrepreneurship development programmes alongside tailored SME advisory services, digital transformation support, and structured business development interventions.',
    accent: 'primary',
    icon: 'lightbulb',
    offerings: [
      { title: 'ILO-SIYB Programmes', description: 'Internationally certified Start and Improve Your Business training for aspiring and existing entrepreneurs.' },
      { title: 'SME Advisory Services', description: 'Tailored business advisory, financial management support, and growth strategy development for small enterprises.' },
      { title: 'Digital Transformation Support', description: 'Helping SMEs leverage technology for operations, marketing, and business process improvement.' },
      { title: 'Business Incubation & Acceleration', description: 'Structured programmes that guide entrepreneurs through ideation, validation, and scaling stages.' },
    ],
    relatedSlugs: ['strategy-operations-organizational-development', 'training-capacity-building', 'research-market-intelligence'],
  },
  {
    slug: 'training-capacity-building',
    title: 'Training & Capacity Building',
    shortTitle: 'Training & Capacity Building',
    heroTagline: 'Tailored training programmes that equip teams and organisations with the skills needed for excellence.',
    overview: 'Our Training & Capacity Building practice designs and delivers customised learning programmes that strengthen institutional and individual capacity. We take an evidence-based approach, starting with thorough needs assessments and ending with impact evaluation. Our facilitators bring deep subject matter expertise and adult learning methodologies to create engaging, practical training experiences that drive real behavioural change and organisational improvement.',
    accent: 'secondary',
    icon: 'graduation-cap',
    offerings: [
      { title: 'Training Needs Assessments', description: 'Systematic analysis of skills gaps and learning needs to inform targeted capacity building interventions.' },
      { title: 'Curriculum & Content Development', description: 'Design of training curricula, manuals, and learning materials tailored to specific organisational contexts.' },
      { title: 'Facilitation & Workshop Delivery', description: 'Expert facilitation of training workshops, retreats, and learning events using interactive methodologies.' },
      { title: 'Post-Training Evaluation', description: 'Measuring training effectiveness, knowledge retention, and behavioural change through structured evaluation.' },
    ],
    relatedSlugs: ['research-market-intelligence', 'entrepreneurship-business-development', 'strategy-operations-organizational-development'],
  },
  {
    slug: 'risk-governance-value-assessments',
    title: 'Risk, Governance & Value Assessments',
    shortTitle: 'Risk, Governance & Value Assessments',
    heroTagline: 'Strengthening governance frameworks and mitigating risk for organisational resilience and accountability.',
    overview: 'Our Risk, Governance & Value Assessments practice helps organisations build resilient governance structures, manage risk effectively, and ensure value for money in their operations and investments. We provide independent, evidence-based assessments that strengthen accountability, improve compliance, and enhance organisational decision-making. Our approach combines international best practices with deep understanding of the Kenyan regulatory and business environment.',
    accent: 'danger',
    icon: 'shield',
    offerings: [
      { title: 'Risk Management Frameworks', description: 'Designing enterprise risk management systems, risk registers, and mitigation strategies aligned with organisational objectives.' },
      { title: 'Governance Reviews & Audits', description: 'Comprehensive governance assessments, board evaluations, and institutional compliance reviews.' },
      { title: 'Value-for-Money Assessments', description: 'Independent evaluations of economy, efficiency, and effectiveness in programme and project investments.' },
      { title: 'Compliance & Regulatory Advisory', description: 'Guidance on regulatory compliance, institutional policies, and governance best practices.' },
    ],
    relatedSlugs: ['strategy-operations-organizational-development', 'monitoring-evaluation-me', 'training-capacity-building'],
  },
]
