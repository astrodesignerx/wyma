import Link from 'next/link'
import { MapPin, Mail, Phone, Globe } from 'lucide-react'
import { siteName, siteTagline, contactInfo, footerQuickLinks, footerServicesLinks } from '@/data/constants'

const socialLinks = [
  { href: '#', label: 'LinkedIn', icon: 'linkedin' },
  { href: '#', label: 'Twitter', icon: 'twitter' },
  { href: '#', label: 'Facebook', icon: 'facebook' },
  { href: '#', label: 'YouTube', icon: 'youtube' },
]

const contactItems = [
  { icon: MapPin, text: contactInfo.address },
  { icon: Phone, text: contactInfo.phone },
  { icon: Mail, text: contactInfo.email },
]

export function Footer() {
  return (
    <footer className="bg-[#121212] border-t-[3px] border-solid border-primary" role="contentinfo">
      <div className="mx-auto max-w-[1200px] px-6 py-16 fade-in">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand */}
          <div>
            <img
              src="/images/logo-primary.svg"
              alt="WYMA New Frontiers"
              className="h-[86px] w-auto"
            />
            <p className="mt-6 text-sm text-[rgba(255,255,255,0.65)] leading-relaxed max-w-[300px]">
              {siteTagline}
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border-2 border-solid border-[rgba(255,255,255,0.2)] flex items-center justify-center text-[rgba(255,255,255,0.4)] no-underline transition-all duration-300 hover:border-primary hover:text-primary hover:bg-[rgba(100,175,71,0.1)]"
                >
                  {s.icon === 'linkedin' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  )}
                  {s.icon === 'twitter' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  )}
                  {s.icon === 'facebook' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  )}
                  {s.icon === 'youtube' && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:ml-[60px]">
            <h3 className="font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="list-none m-0 p-0 space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[rgba(255,255,255,0.65)] no-underline transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-5">Services</h3>
            <ul className="list-none m-0 p-0 space-y-3">
              {footerServicesLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[rgba(255,255,255,0.65)] no-underline transition-colors duration-200 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-primary uppercase tracking-wider mb-5">Contact</h3>
            <ul className="list-none m-0 p-0 space-y-4">
              {contactItems.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[rgba(255,255,255,0.65)]">{item.text}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 mt-4">
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm text-[rgba(255,255,255,0.65)]">Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-solid border-[--color-border] flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[rgba(255,255,255,0.45)]">
          <span>&copy; {new Date().getFullYear()} {siteName}.</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
