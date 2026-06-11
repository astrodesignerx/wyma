'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function useScrollAnimation() {
  const pathname = usePathname()

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(
      '.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale'
    )

    if (els.length === 0) return

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])
}
