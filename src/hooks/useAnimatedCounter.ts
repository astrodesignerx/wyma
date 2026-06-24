'use client'

import { useEffect, useRef, useState } from 'react'

interface UseAnimatedCounterOptions {
  target: number
  suffix?: string
}

export function useAnimatedCounter({ target, suffix = '+' }: UseAnimatedCounterOptions) {
  const [display, setDisplay] = useState('0')
  const ref = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setDisplay(`${target}${suffix}`)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          animate()
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()

    function animate() {
      const duration = 2000
      const startTime = performance.now()

      function tick(now: number) {
        const elapsed = now - startTime
        const t = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        const current = Math.round(eased * target)
        setDisplay(`${current}${suffix}`)
        if (t < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }
  }, [target, suffix])

  return { display, ref }
}
