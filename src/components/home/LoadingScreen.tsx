'use client'

import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [hidden, setHidden] = useState(() => {
    try {
      return typeof window === 'undefined' || sessionStorage.getItem('wyma_loaded') === 'true'
    } catch {
      return true
    }
  })
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (!hidden) {
      const fadeTimer = setTimeout(() => {
        setFading(true)
        setTimeout(() => {
          setHidden(true)
          try { sessionStorage.setItem('wyma_loaded', 'true') } catch {}
        }, 700)
      }, 3000)

      return () => clearTimeout(fadeTimer)
    }
  }, [hidden])

  if (hidden) return null

  return (
    <div
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center transition-opacity duration-700"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <div className="flex flex-col items-center gap-8">
        <img
          src="/images/logo-icon.svg"
          alt="WYMA New Frontiers"
          className="h-16 w-auto opacity-80 brightness-0 invert"
        />
        <div className="w-7 h-7 border-[2.5px] border-white/20 border-t-primary rounded-full animate-spin" />
      </div>
    </div>
  )
}
