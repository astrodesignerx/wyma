import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AboutCTA() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-16 rounded-xl bg-gradient-to-br from-primary to-secondary fade-in">
          <div className="flex-1">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-2">
              Ready to Work With a<br /> Trusted Consultancy Partner?
            </h2>
            <p className="text-base text-[rgba(0,0,0,0.7)]">
              Discover how our strategic advisory can elevate your organisation.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/services">
              <Button className="bg-black text-white border-black hover:bg-[#222] hover:text-white px-8 py-6 text-base">
                EXPLORE OUR SERVICES <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
