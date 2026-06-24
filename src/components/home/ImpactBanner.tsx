'use client'

import { useState, useRef, useEffect } from 'react'
import { Star, ExternalLink } from 'lucide-react'

const logoFiles = Array.from({ length: 14 }, (_, i) => `/images/logos/WYMA Logos-${String(i + 1).padStart(2, '0')}.svg`)

const clientUrls: Record<number, { name: string; url: string; previewImage: string }> = {
  9: { name: 'The Palladium Group', url: 'https://thepalladiumgroup.com/', previewImage: 'https://www.thepalladiumgroup.com/custom/images/Pal-OG.jpg' },
}

const POPUP_HEIGHT = 180

export function ImpactBanner() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [showPopup, setShowPopup] = useState<number | null>(null)
  const [popupPos, setPopupPos] = useState({ x: 0, y: 0 })
  const [popupBelow, setPopupBelow] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const hideRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (hideRef.current) clearTimeout(hideRef.current)
    }
  }, [])

  function cancelHide() {
    if (hideRef.current) {
      clearTimeout(hideRef.current)
      hideRef.current = null
    }
  }

  function scheduleHide() {
    hideRef.current = setTimeout(() => {
      setHoveredIdx(null)
      setShowPopup(null)
    }, 300)
  }

  function handleMouseEnter(i: number) {
    cancelHide()
    clearTimeout(timerRef.current!)
    setHoveredIdx(i)
    setShowPopup(null)

    timerRef.current = setTimeout(() => {
      if (!clientUrls[i]) return
      const el = document.getElementById(`marquee-logo-${i}`)
      if (!el) return
      const rect = el.getBoundingClientRect()
      const spaceBelow = window.innerHeight - rect.bottom
      const below = spaceBelow >= POPUP_HEIGHT + 20
      setPopupBelow(below)
      setShowPopup(i)
      setPopupPos({ x: rect.left + rect.width / 2, y: below ? rect.bottom : rect.top })
    }, 500)
  }

  function handleMouseLeave() {
    clearTimeout(timerRef.current!)
    scheduleHide()
  }

  const client = showPopup !== null ? clientUrls[showPopup] : null

  return (
    <section className="bg-[#f5f5f5] text-[#121212] text-center pt-24 pb-0 flex flex-col" id="portfolio">
      <div className="mx-auto max-w-[1200px] px-6 pb-24">
        <div className="max-w-[700px] mx-auto fade-in">
          <span className="inline-block font-heading text-[11px] font-semibold tracking-[0.15em] uppercase text-primary mb-3">
            TRUSTED BY
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-base md:text-lg text-[#555] leading-relaxed">
            From baseline evaluations to strategic transformation — our work spans multiple sectors with measurable
            outcomes across Kenya and the region.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-[#f5f5f5] py-2 overflow-hidden">
        <div
          className="flex items-center gap-10 w-max transition-all duration-500"
          style={{
            animation: 'marquee-scroll 60s linear infinite',
            animationPlayState: hoveredIdx !== null ? 'paused' : 'running',
          }}
        >
          {[...logoFiles, ...logoFiles].map((src, i) => (
            <span
              key={`${src}-${i}`}
              id={`marquee-logo-${i}`}
              className="relative flex items-center gap-10"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={src}
                alt=""
                className={`h-40 w-auto flex-shrink-0 transition-all duration-500 ${
                  hoveredIdx !== null && hoveredIdx !== i ? 'opacity-20 grayscale' : 'opacity-100'
                }`}
              />
              {i < logoFiles.length * 2 - 1 && (
                <Star className={`w-5 h-5 text-primary flex-shrink-0 transition-all duration-500 ${
                  hoveredIdx !== null ? 'opacity-20' : 'opacity-100'
                }`} />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Popup link preview */}
      <div
        className={`fixed z-50 -translate-x-1/2 w-[280px] transition-opacity duration-[1500ms] ${
          client ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ left: popupPos.x, top: popupPos.y + (popupBelow ? 12 : -12 - POPUP_HEIGHT) }}
      >
        {client && (
          <a
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={cancelHide}
            onMouseLeave={scheduleHide}
            className="block bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-gray-200 no-underline overflow-hidden hover:shadow-[0_6px_30px_rgba(0,0,0,0.3)] transition-shadow duration-300"
          >
            <img src={client.previewImage} alt="" className="w-full h-28 object-cover" />
            <div className="p-3 flex items-start justify-between gap-2">
              <div className="flex flex-col gap-0.5">
                <span className="text-[#121212] font-medium text-sm">Visit {client.name}</span>
                <span className="text-[#888] text-xs truncate max-w-[200px]">{client.url}</span>
              </div>
              <ExternalLink className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            </div>
          </a>
        )}
      </div>
    </section>
  )
}
