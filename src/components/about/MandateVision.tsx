import { Shield, Eye } from 'lucide-react'

export function MandateVision() {
  return (
    <section className="py-[120px] bg-[#f5f5f5]" id="mandate-vision">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mandate Card */}
          <div className="fade-in-scale delay-1 h-full">
            <div className="mission-vision-card relative rounded-2xl border border-gray-200 bg-white shadow-sm h-full">
              <div className="relative z-10 p-10 h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading text-2xl font-bold text-[#121212]">Our Mandate</h3>
                  <div className="rounded-full border-2 border-primary p-1.5 flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-base text-[#555] leading-relaxed">
                  To provide strategic advisory, research, evaluation, and capacity building services that strengthen
                  institutions and accelerate development outcomes across Kenya and the East African region.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="fade-in-scale delay-2 h-full">
            <div className="mission-vision-card relative rounded-2xl border border-gray-200 bg-white shadow-sm h-full">
              <div className="relative z-10 p-10 h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading text-2xl font-bold text-[#121212]">Our Vision</h3>
                  <div className="rounded-full border-2 border-primary p-1.5 flex-shrink-0">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <p className="text-base text-[#555] leading-relaxed">
                  A leading African management consultancy known for transforming organisations through evidence-based
                  strategy, innovation, and sustainable capacity development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
