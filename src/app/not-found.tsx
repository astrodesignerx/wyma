import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="min-h-dvh flex items-center justify-center bg-[#121212] pt-[102px]">
      <div className="mx-auto max-w-[600px] px-6 text-center">
        <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-[#EECB27] mb-3">
          404 — PAGE NOT FOUND
        </span>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
          This page doesn&apos;t exist
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
          The page you&apos;re looking for may have been moved or removed. Head back home or explore our services.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/">
            <Button size="lg" className="px-8 py-6 text-base">
              Back to Home
            </Button>
          </Link>
          <Link href="/services">
            <Button size="lg" variant="outline" className="group px-8 py-6 text-base">
              Our Services <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
