'use client'

import { useState, useRef, useEffect } from 'react'
import { Star, ExternalLink } from 'lucide-react'

const logoFiles = Array.from({ length: 14 }, (_, i) => `/images/logos/WYMA Logos-${String(i + 1).padStart(2, '0')}.svg`)

const clientUrls: Record<number, { name: string; url: string; previewImage: string }> = {
  0: { name: 'International Labour Organization', url: 'https://www.ilo.org', previewImage: 'https://www.ilo.org/themes/custom/ilo/node_modules/@ilo-org/brand-assets/dist/assets/favicon/maskable-icon-512x512.png' },
  1: { name: 'FIDA Kenya', url: 'https://fidakenya.org', previewImage: 'http://fidakenya.org/wp-content/uploads/2025/06/Judy-Thongori-Medium-1024x576.png' },
  2: { name: 'Cheshire Disability Services', url: 'https://cheshiredisabilityservices.org', previewImage: 'https://www.google.com/s2/favicons?domain=cheshiredisabilityservices.org&sz=64' },
  3: { name: 'EY', url: 'https://www.ey.com', previewImage: 'https://www.ey.com/content/dam/ey-unified-site/ey-com/en-gl/campaigns/fy25-splash/images/ey-big-sun-at-dawn-on-the-sea-with-beautiful-reflections-and-flocks-of-birds-in-flight-static-no-zoom-article-v3-thin.jpg' },
  4: { name: 'DRC', url: 'https://drc.ngo', previewImage: 'https://www.google.com/s2/favicons?domain=drc.ngo&sz=64' },
  5: { name: 'DSW', url: 'https://www.dsw.org', previewImage: 'https://www.dsw.org/wp-content/uploads/2023/10/home_MD_headerimage.webp' },
  6: { name: 'Terre des Hommes', url: 'https://terredeshommes.org', previewImage: 'https://www.google.com/s2/favicons?domain=terredeshommes.org&sz=64' },
  7: { name: 'SUPKEM', url: 'https://www.supkem.org', previewImage: 'https://www.google.com/s2/favicons?domain=supkem.org&sz=64' },
  8: { name: 'ActionAid', url: 'https://actionaid.org', previewImage: 'https://www.google.com/s2/favicons?domain=actionaid.org&sz=64' },
  9: { name: 'The Palladium Group', url: 'https://thepalladiumgroup.com/', previewImage: 'https://www.thepalladiumgroup.com/custom/images/Pal-OG.jpg' },
  10: { name: 'KISC', url: 'https://kisc.sc.ke', previewImage: 'https://kisc.sc.ke/wp-content/uploads/2025/09/COS_0479-scaled.jpg' },
  11: { name: 'IOM Kenya', url: 'https://kenya.iom.int', previewImage: 'https://kenya.iom.int/sites/g/files/tmzbdl926/files/styles/social_media/public/banner/2026-04/banners-drafts_converted14.jpg?h=9b485a40&itok=aYrQ_Gnr' },
  12: { name: 'Catholic Relief Services', url: 'https://www.crs.org', previewImage: 'https://www.crs.org/sites/default/files/dam/ijndecu0ks/test-hero_ssu2014088711_2880x1508.jpg' },
  13: { name: 'Nairobits', url: 'https://www.nairobits.com', previewImage: 'https://www.google.com/s2/favicons?domain=nairobits.com&sz=64' },
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
              {[...logoFiles, ...logoFiles].map((src, i) => {
                const client = clientUrls[i % logoFiles.length]
                return (
                <span
                  key={`${src}-${i}`}
                  id={`marquee-logo-${i}`}
                  className="relative flex items-center gap-10"
                  onMouseEnter={() => handleMouseEnter(i)}
                  onMouseLeave={handleMouseLeave}
                >
                  {client ? (
                    <a href={client.url} target="_blank" rel="noopener noreferrer" className="no-underline">
                      <img
                        src={src}
                        alt=""
                        className={`h-40 w-auto flex-shrink-0 transition-all duration-500 ${
                          hoveredIdx !== null && hoveredIdx !== i ? 'opacity-20 grayscale' : 'opacity-100'
                        }`}
                      />
                    </a>
                  ) : (
                    <img
                      src={src}
                      alt=""
                      className={`h-40 w-auto flex-shrink-0 transition-all duration-500 ${
                        hoveredIdx !== null && hoveredIdx !== i ? 'opacity-20 grayscale' : 'opacity-100'
                      }`}
                    />
                  )}
              {i < logoFiles.length * 2 - 1 && (
                <Star className={`w-5 h-5 text-primary flex-shrink-0 transition-all duration-500 ${
                  hoveredIdx !== null ? 'opacity-20' : 'opacity-100'
                }`} />
              )}
            </span>
          )})}
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
