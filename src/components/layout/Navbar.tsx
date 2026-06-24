'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useNavbarScroll } from '@/hooks/useNavbarScroll'
import { useHeroLight } from '@/context/HeroLightContext'
import { navLinks, serviceDropdownItems, homeSectionItems, aboutSectionItems } from '@/data/constants'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

function scrollToSection(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    const navbar = document.querySelector('nav')
    const offset = navbar?.offsetHeight ?? 102
    const target = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: target, behavior: 'smooth' })
  }
}

function handleAboutNav(href: string, pathname: string) {
  if (pathname === '/about') {
    scrollToSection(href)
  } else {
    window.location.href = `/about${href}`
  }
}

export function Navbar() {
  const scrolled = useNavbarScroll()
  const pathname = usePathname()
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const [mobileHomeOpen, setMobileHomeOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href.split('#')[0])
  }

  const { isLight: heroLight } = useHeroLight()
  const isLightHero = ['/resources'].includes(pathname) || heroLight
  const navText = (active: boolean, whiteDefault = false) => {
    if (active) return 'text-primary'
    if (!scrolled && isLightHero) return 'text-black'
    return whiteDefault ? 'text-white' : 'text-[--color-muted]'
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[rgba(18,18,18,0.85)] backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.3)]' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between w-full h-[102px]">
        {/* Logo - gutter left */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center no-underline gap-3">
            <img
              src="/images/logo-icon.svg"
              alt=""
              className="h-10 w-auto"
            />
            <img
              src="/images/logo-text.svg"
              alt="WYMA New Frontiers"
              className="h-[32px] w-auto self-center transition-[filter] duration-500"
              style={{ filter: !scrolled && isLightHero ? 'brightness(0)' : 'none' }}
            />
          </Link>
        </div>

        {/* Desktop Nav - centered */}
        <ul className="hidden lg:flex items-center justify-center gap-4 list-none m-0 p-0 flex-1">
          {/* Home Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setHomeDropdownOpen(true)}
            onMouseLeave={() => setHomeDropdownOpen(false)}
          >
            <Link
              href="/"
              className={`text-sm font-medium no-underline px-3 py-2 transition-colors duration-300 hover:text-primary inline-flex items-center gap-1 ${navText(isActive('/'))}`}
            >
              Home <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            <ul
              className={`absolute top-full left-0 min-w-[200px] bg-surface border border-[--color-border] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-2 z-50 list-none m-0 transition-all duration-500 ${
                homeDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
              style={{ isolation: 'isolate' }}
            >
              {homeSectionItems.map((item, i) => (
                <li
                  key={item.href}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className={homeDropdownOpen ? 'animate-[fadeInUp_0.5s_ease-out_both]' : undefined}
                >
                    <button
                      onClick={() => {
                        setHomeDropdownOpen(false)
                        scrollToSection(item.href)
                      }}
                      className="w-full text-left text-sm no-underline px-4 py-2.5 rounded-md transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)] hover:text-primary text-[--color-muted] bg-transparent border-none cursor-pointer font-sans"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          {/* About Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <Link
              href="/about"
              className={`text-sm font-medium no-underline px-3 py-2 transition-colors duration-300 hover:text-primary inline-flex items-center gap-1 ${navText(isActive('/about'), true)}`}
            >
              About <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            <ul
              className={`absolute top-full left-0 min-w-[200px] bg-surface border border-[--color-border] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-2 z-50 list-none m-0 transition-all duration-500 ${
                aboutDropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
              style={{ isolation: 'isolate' }}
            >
              {aboutSectionItems.map((item, i) => (
                <li
                  key={item.href}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className={aboutDropdownOpen ? 'animate-[fadeInUp_0.5s_ease-out_both]' : undefined}
                >
                    <button
                      onClick={() => {
                        setAboutDropdownOpen(false)
                        handleAboutNav(item.href, pathname)
                      }}
                      className="w-full text-left text-sm no-underline px-4 py-2.5 rounded-md transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)] hover:text-primary text-[--color-muted] bg-transparent border-none cursor-pointer font-sans"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/services"
              className={`text-sm font-medium no-underline px-3 py-2 transition-colors duration-300 hover:text-primary inline-flex items-center gap-1 ${navText(isActive('/services'))}`}
            >
              Services <ChevronDown className="w-3.5 h-3.5" />
            </Link>
            <ul
              className={`absolute top-full left-0 min-w-[220px] bg-surface border border-[--color-border] rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-2 z-50 list-none m-0 transition-all duration-500 ${
                dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
              style={{ isolation: 'isolate' }}
            >
              {serviceDropdownItems.map((item, i) => (
                <li
                  key={item.href}
                  style={{ animationDelay: `${i * 100}ms` }}
                  className={dropdownOpen ? 'animate-[fadeInUp_0.5s_ease-out_both]' : undefined}
                >
                    <Link
                      href={item.href}
                      className="block text-sm no-underline px-4 py-2.5 rounded-md transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)] hover:text-primary text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          {navLinks.filter(l => l.label !== 'Home' && l.label !== 'About').map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium no-underline px-3 py-2 transition-colors duration-300 hover:text-primary ${navText(isActive(link.href))}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side - gutter right */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link href="/contact" className="hidden lg:block">
            <Button className="group relative overflow-hidden rounded-md text-white px-6 py-5 text-sm">
              <span className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 transition-opacity duration-1000 group-hover:opacity-100 pointer-events-none" />
              <span className="relative z-10">Request Consultation</span>
            </Button>
          </Link>

          {/* Mobile Menu Trigger */}
          <Sheet>
            <SheetTrigger className="lg:hidden flex items-center justify-center w-10 h-10 bg-transparent border-none cursor-pointer" aria-label="Toggle navigation menu" style={{ color: !scrolled && isLightHero ? '#000' : '#fff' }}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#121212] border-l border-[--color-border] w-[280px] p-6">
              <ul className="flex flex-col gap-1 list-none m-0 p-0 mt-8">
                {/* Mobile Home Dropdown */}
                <li>
                  <button
                    onClick={() => setMobileHomeOpen(!mobileHomeOpen)}
                    className="w-full flex items-center justify-between text-base text-[--color-muted] no-underline py-3 px-4 rounded-md transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)] hover:text-primary bg-transparent border-none cursor-pointer text-left font-sans"
                  >
                    Home <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileHomeOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileHomeOpen && (
                    <ul className="pl-4 list-none m-0">
                      {homeSectionItems.map((item) => (
                        <li key={item.href}>
                          <button
                            onClick={() => scrollToSection(item.href)}
                            className="w-full text-left text-sm no-underline py-2.5 px-4 rounded-md transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)] hover:text-primary text-[--color-muted] bg-transparent border-none cursor-pointer font-sans"
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                {/* Mobile About Dropdown */}
                <li>
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className="w-full flex items-center justify-between text-base text-[--color-muted] no-underline py-3 px-4 rounded-md transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)] hover:text-primary bg-transparent border-none cursor-pointer text-left font-sans"
                  >
                    About <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileAboutOpen && (
                    <ul className="pl-4 list-none m-0">
                      {aboutSectionItems.map((item) => (
                        <li key={item.href}>
                          <button
                            onClick={() => handleAboutNav(item.href, pathname)}
                            className="w-full text-left text-sm no-underline py-2.5 px-4 rounded-md transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)] hover:text-primary text-[--color-muted] bg-transparent border-none cursor-pointer font-sans"
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                {/* Mobile Services Dropdown */}
                <li>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="w-full flex items-center justify-between text-base text-[--color-muted] no-underline py-3 px-4 rounded-md transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)] hover:text-primary bg-transparent border-none cursor-pointer text-left font-sans"
                  >
                    Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileDropdownOpen && (
                    <ul className="pl-4 list-none m-0">
                    {serviceDropdownItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block text-sm no-underline py-2.5 px-4 rounded-md transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)] hover:text-primary text-white"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                    </ul>
                  )}
                </li>
                {navLinks.filter(l => l.label !== 'Home' && l.label !== 'About').map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block text-base no-underline py-3 px-4 rounded-md transition-colors duration-200 hover:bg-[rgba(255,255,255,0.05)] hover:text-primary ${isActive(link.href) ? 'text-primary' : 'text-[--color-muted]'}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-4">
                  <Link href="/contact" className="block">
                    <Button className="group relative overflow-hidden w-full rounded-md text-white px-6 py-5 text-sm">
                      <span className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 transition-opacity duration-1000 group-hover:opacity-100 pointer-events-none" />
                      <span className="relative z-10">Request Consultation</span>
                    </Button>
                  </Link>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
