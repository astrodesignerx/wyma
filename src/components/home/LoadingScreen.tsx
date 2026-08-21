'use client'

import { useEffect, useState } from 'react'

export function LoadingScreen() {
  // Rendered hidden on both server and first client paint (no hydration
  // mismatch); shown only after mount for first-time visitors this session.
  const [show, setShow] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem('wyma_loaded') === 'true') return
    } catch {
      return
    }

    const showTimer = setTimeout(() => setShow(true), 0)
    const fadeTimer = setTimeout(() => {
      setFading(true)
      setTimeout(() => {
        setShow(false)
        try { sessionStorage.setItem('wyma_loaded', 'true') } catch {}
      }, 700)
    }, 900)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(fadeTimer)
    }
  }, [])

  if (!show) return null

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
