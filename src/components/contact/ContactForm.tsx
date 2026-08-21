'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { serviceDetails, contactInfo } from '@/data/constants'

interface FormData {
  fullName: string
  organisation: string
  email: string
  phone: string
  service: string
  message: string
  // Honeypot — hidden from real users; bots that fill it are silently dropped server-side.
  website: string
}

const initialForm: FormData = {
  fullName: '',
  organisation: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  website: '',
}

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const validate = (): boolean => {
    if (!form.fullName.trim()) { setErrorMsg('Full name is required.'); return false }
    if (!form.email.trim()) { setErrorMsg('Email is required.'); return false }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setErrorMsg('Please enter a valid email.'); return false }
    if (!form.message.trim()) { setErrorMsg('Message is required.'); return false }
    setErrorMsg('')
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      // Bots that fill the hidden honeypot get a fake success and nothing is sent.
      if (form.website.trim() !== '') {
        setStatus('sent')
        setForm(initialForm)
        setErrorMsg('')
        setTimeout(() => setStatus('idle'), 4000)
        return
      }

      const res = await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'Full Name': form.fullName,
          Organisation: form.organisation,
          Email: form.email,
          Phone: form.phone,
          'Service Interested In': form.service,
          Message: form.message,
          _subject: `New Contact Form Submission — ${form.fullName.slice(0, 100)}`,
          _replyto: form.email,
          _template: 'table',
          _captcha: 'false',
          _honey: form.website,
        }),
      })
      if (!res.ok) throw new Error('Something went wrong. Please try again.')
      setStatus('sent')
      setForm(initialForm)
      setErrorMsg('')
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative bg-surface rounded-xl p-8">
      {/* Honeypot field — visually hidden and skipped by keyboard/screen readers */}
      <div aria-hidden="true" className="absolute w-px h-px overflow-hidden -m-px" style={{ clip: 'rect(0 0 0 0)' }}>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => handleChange('website', e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="form-group">
          <label htmlFor="fullName" className="block text-sm font-medium text-muted-foreground mb-1.5">
            Full Name <span className="text-destructive">*</span>
          </label>
            <Input
              id="fullName"
              required
              value={form.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className="bg-[rgba(100,175,71,0.15)] text-white focus-visible:ring-1"
              placeholder="Your full name"
            />
        </div>
        <div className="form-group">
          <label htmlFor="organisation" className="block text-sm font-medium text-muted-foreground mb-1.5">
            Organisation
          </label>
            <Input
              id="organisation"
              value={form.organisation}
              onChange={(e) => handleChange('organisation', e.target.value)}
              className="bg-[rgba(100,175,71,0.15)] text-white focus-visible:ring-1"
              placeholder="Your organisation"
            />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1.5">
            Email Address <span className="text-destructive">*</span>
          </label>
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="bg-[rgba(100,175,71,0.15)] text-white focus-visible:ring-1"
              placeholder="you@example.com"
            />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1.5">
            Phone Number
          </label>
            <Input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="bg-[rgba(100,175,71,0.15)] text-white focus-visible:ring-1"
              placeholder="+254 7XX XXX XXX"
            />
        </div>
        <div className="form-group sm:col-span-2">
          <label htmlFor="service" className="block text-sm font-medium text-muted-foreground mb-1.5">
            Service Interested In
          </label>
          <Select value={form.service} onValueChange={(v) => handleChange('service', v ?? '')}>
            <SelectTrigger id="service" className="bg-[rgba(100,175,71,0.15)] text-white focus-visible:ring-1">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent
              align="start"
              sideOffset={6}
              className="bg-surface border border-[--color-border] rounded-lg text-white shadow-[0_8px_30px_rgba(0,0,0,0.4)] p-2 w-[--anchor-width] ring-0"
            >
              <SelectItem value="">— None —</SelectItem>
              {serviceDetails.map((svc, i) => (
                <SelectItem
                  key={svc.slug}
                  value={svc.title}
                  style={{ animationDelay: `${i * 50}ms` }}
                  className="animate-[fadeInUp_0.3s_ease-out_both] hover:bg-[rgba(255,255,255,0.05)]"
                >{svc.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="form-group sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1.5">
            Message <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="bg-[rgba(100,175,71,0.15)] text-white focus-visible:ring-1 resize-none"
            placeholder="Tell us about your project..."
          />
        </div>
      </div>

      <div role="status" aria-live="polite">
        {errorMsg && (
          <p className="text-sm text-destructive mt-4">{errorMsg}</p>
        )}
        {status === 'sent' && (
          <p className="text-sm text-primary mt-4">Thank you — your message has been sent. We&apos;ll get back to you shortly.</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 px-8 py-6 text-base transition-transform duration-300 ease-out hover:scale-[1.03] hover:bg-gradient-to-br hover:from-primary hover:to-secondary"
      >
        {status === 'sending' ? 'SENDING...' : status === 'sent' ? 'MESSAGE SENT!' : (
          <>
            SEND MESSAGE <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </Button>
    </form>
  )
}
