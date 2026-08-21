'use client'

import { useCallback } from 'react'
import { useLenis } from 'lenis/react'

/** Fixed navbar height, so scroll targets don't land underneath the header. */
function navbarOffset(): number {
  return document.querySelector('nav')?.offsetHeight ?? 102
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Programmatic scrolling, routed through Lenis.
 *
 * Never call `window.scrollTo` while Lenis owns the scroll. Lenis writes the
 * scroll position every frame and suppresses the resulting scroll event with an
 * internal flag. A native scroll write carries no such flag, so Lenis's
 * `onNativeScroll` treats it as external input and resyncs `targetScroll` to it.
 * Two writers then fight for the position: wheel input stops registering and the
 * scroll appears to halt until the user interacts again.
 *
 * Duration and easing are inherited from the root Lenis options in
 * `LenisProvider`, so every programmatic scroll matches the wheel feel.
 */
export function useSmoothScroll() {
  const lenis = useLenis()

  const scrollToSection = useCallback(
    (href: string) => {
      const el = document.getElementById(href.replace('#', ''))
      if (!el) return
      const offset = navbarOffset()

      if (lenis) {
        lenis.scrollTo(el, { offset: -offset, immediate: prefersReducedMotion() })
        return
      }
      // Lenis not mounted yet — native scrolling is safe precisely because
      // there is no Lenis loop to contend with.
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - offset,
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      })
    },
    [lenis]
  )

  const scrollToTop = useCallback(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: prefersReducedMotion() })
      return
    }
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }, [lenis])

  return { scrollToSection, scrollToTop }
}
