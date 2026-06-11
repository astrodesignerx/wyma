import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ServiceDetailCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-16 rounded-xl bg-gradient-to-br from-primary to-secondary fade-in">
          <div className="flex-1">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-2">
              Ready to Get Started?
            </h2>
            <p className="text-base text-[rgba(0,0,0,0.7)]">
              Let&apos;s discuss how this service can benefit your organisation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link href="/contact">
              <Button className="bg-black text-white border-black hover:bg-[#222] hover:text-white px-8 py-6 text-base">
                SCHEDULE A CONSULTATION
              </Button>
            </Link>
            <Link href="/services">
              <Button className="bg-transparent border-black text-black hover:bg-black/10 px-8 py-6 text-base">
                <ArrowRight className="w-4 h-4 mr-2" /> VIEW ALL SERVICES
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
