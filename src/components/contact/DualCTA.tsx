import { Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contactInfo, phoneDigits } from '@/data/constants'

export function DualCTA() {
  return (
    <section className="py-24 bg-[#f5f5f5]" id="dual-cta">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 fade-in">
          <a href={`tel:${phoneDigits}`} className="no-underline">
            <Button size="lg" className="px-8 py-6 text-base transition-transform duration-300 ease-out hover:scale-[1.03] hover:bg-gradient-to-br hover:from-primary hover:to-secondary">
              <Phone className="w-5 h-5 mr-2" /> Call Us
            </Button>
          </a>
          <a href={`mailto:${contactInfo.email}`} className="no-underline">
            <Button size="lg" className="px-8 py-6 text-base transition-transform duration-300 ease-out hover:scale-[1.03] hover:bg-gradient-to-br hover:from-primary hover:to-secondary">
              <Mail className="w-5 h-5 mr-2" /> Email Us
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
