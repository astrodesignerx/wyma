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
      const steps = 60
      const increment = target / steps
      const stepTime = duration / steps
      let current = 0

      function tick() {
        current += increment
        if (current >= target) {
          setDisplay(`${target}${suffix}`)
          return
        }
        setDisplay(`${Math.floor(current)}${suffix}`)
        requestAnimationFrame(() => setTimeout(tick, stepTime))
      }

      tick()
    }
  }, [target, suffix])

  return { display, ref }
}
