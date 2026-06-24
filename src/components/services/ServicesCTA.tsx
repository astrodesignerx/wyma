import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ServicesCTA() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-16 rounded-xl bg-gradient-to-br from-primary to-secondary fade-in">
          <div className="flex-1">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-black mb-2">
              Ready to Get Started?
            </h2>
            <p className="text-base text-[rgba(0,0,0,0.7)]">
              Let&apos;s discuss how WYMA can support your organisation&apos;s goals.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link href="/contact">
              <Button className="bg-black text-white border-black hover:bg-white hover:text-black hover:border-transparent px-8 py-6 text-base">
                GET IN TOUCH <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
