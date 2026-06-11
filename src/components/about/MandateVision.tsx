import { Shield, Eye } from 'lucide-react'

export function MandateVision() {
  return (
    <section className="py-[120px] bg-[#f5f5f5]" id="mandate-vision">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mandate Card */}
          <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] fade-in-scale delay-1">
            {/* Rotating gradient border */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-spin" style={{ animationDuration: '3s', background: 'conic-gradient(from 0deg, #64AF47, #AECF37, transparent 40%, transparent 60%, #64AF47)' }} />
            {/* Bottom glow */}
            <div
              className="absolute bottom-0 left-0 w-full h-[65%] pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(to top, rgba(100,175,71,0.2) 0%, rgba(100,175,71,0.06) 50%, transparent 100%)',
              }}
            />
            {/* Bottom-right icon */}
            <div className="absolute bottom-6 right-6 pointer-events-none transition-colors duration-300 text-[#e8e8e8] group-hover:text-[#ccc] z-[1]">
              <Shield className="w-20 h-20" />
            </div>
            {/* Inner content */}
            <div className="relative z-[2] rounded-xl bg-white p-10 m-[3px]">
              <div className="mb-4 flex items-center">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#121212] mb-4">Our Mandate</h3>
              <p className="text-base text-[#555] leading-relaxed">
                To provide strategic advisory, research, evaluation, and capacity building services that strengthen
                institutions and accelerate development outcomes across Kenya and the East African region.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] fade-in-scale delay-2">
            {/* Rotating gradient border */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-spin" style={{ animationDuration: '3s', background: 'conic-gradient(from 0deg, #64AF47, #AECF37, transparent 40%, transparent 60%, #64AF47)' }} />
            {/* Bottom glow */}
            <div
              className="absolute bottom-0 left-0 w-full h-[65%] pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: 'linear-gradient(to top, rgba(100,175,71,0.2) 0%, rgba(100,175,71,0.06) 50%, transparent 100%)',
              }}
            />
            {/* Bottom-right icon */}
            <div className="absolute bottom-6 right-6 pointer-events-none transition-colors duration-300 text-[#e8e8e8] group-hover:text-[#ccc] z-[1]">
              <Eye className="w-20 h-20" />
            </div>
            {/* Inner content */}
            <div className="relative z-[2] rounded-xl bg-white p-10 m-[3px]">
              <div className="mb-4 flex items-center">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#121212] mb-4">Our Vision</h3>
              <p className="text-base text-[#555] leading-relaxed">
                A leading African management consultancy known for transforming organisations through evidence-based
                strategy, innovation, and sustainable capacity development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
