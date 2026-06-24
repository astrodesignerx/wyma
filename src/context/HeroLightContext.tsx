'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface HeroLightContextValue {
  isLight: boolean
  setLight: (v: boolean) => void
}

const HeroLightContext = createContext<HeroLightContextValue>({
  isLight: false,
  setLight: () => {},
})

export function HeroLightProvider({ children }: { children: ReactNode }) {
  const [isLight, setIsLight] = useState(false)

  return (
    <HeroLightContext.Provider value={{ isLight, setLight: setIsLight }}>
      {children}
    </HeroLightContext.Provider>
  )
}

export function useHeroLight() {
  return useContext(HeroLightContext)
}
