import { MapPin, Phone, Mail, Clock, Globe } from 'lucide-react'
import { contactInfo } from '@/data/constants'

const items = [
  { icon: MapPin, text: contactInfo.address },
  { icon: Phone, text: contactInfo.phone },
  { icon: Mail, text: contactInfo.email },
  { icon: Clock, text: contactInfo.hours },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div key={item.text} className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-[10px] bg-[rgba(100,175,71,0.15)] text-primary flex items-center justify-center flex-shrink-0">
            <item.icon className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-[#555]">{item.text}</p>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-2 pt-2">
        <Globe className="w-4 h-4 text-primary" />
        <span className="text-sm text-[#555]">Nairobi, Kenya</span>
      </div>

      {/* Social */}
      <div className="pt-4">
        <p className="text-sm font-medium text-[#121212] mb-3">Follow Us</p>
        <div className="flex items-center gap-3">
          {['linkedin', 'twitter', 'facebook', 'youtube'].map((platform) => (
            <a
              key={platform}
              href="#"
              aria-label={platform}
              className="w-10 h-10 rounded-full border-2 border-solid border-[rgba(0,0,0,0.15)] flex items-center justify-center text-[rgba(0,0,0,0.35)] no-underline transition-all duration-300 hover:border-primary hover:text-primary hover:bg-[rgba(100,175,71,0.1)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {platform === 'linkedin' && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>}
                {platform === 'twitter' && <><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></>}
                {platform === 'facebook' && <><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></>}
                {platform === 'youtube' && <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></>}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
