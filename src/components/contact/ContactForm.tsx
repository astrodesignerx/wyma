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
import { serviceDetails } from '@/data/constants'

interface FormData {
  fullName: string
  organisation: string
  email: string
  phone: string
  service: string
  message: string
}

const initialForm: FormData = {
  fullName: '',
  organisation: '',
  email: '',
  phone: '',
  service: '',
  message: '',
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
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to send')
      setStatus('sent')
      setForm(initialForm)
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-[#e0e0e0] rounded-xl p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="form-group">
          <label htmlFor="fullName" className="block text-sm font-medium text-[#555] mb-1.5">
            Full Name <span className="text-destructive">*</span>
          </label>
            <Input
              id="fullName"
              value={form.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
              className="bg-[rgba(100,175,71,0.08)] border-[#d0d0d0] text-[#121212]"
              placeholder="Your full name"
            />
        </div>
        <div className="form-group">
          <label htmlFor="organisation" className="block text-sm font-medium text-[#555] mb-1.5">
            Organisation
          </label>
            <Input
              id="organisation"
              value={form.organisation}
              onChange={(e) => handleChange('organisation', e.target.value)}
              className="bg-[rgba(100,175,71,0.08)] border-[#d0d0d0] text-[#121212]"
              placeholder="Your organisation"
            />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="block text-sm font-medium text-[#555] mb-1.5">
            Email Address <span className="text-destructive">*</span>
          </label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="bg-[rgba(100,175,71,0.08)] border-[#d0d0d0] text-[#121212]"
              placeholder="you@example.com"
            />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="block text-sm font-medium text-[#555] mb-1.5">
            Phone Number
          </label>
            <Input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="bg-[rgba(100,175,71,0.08)] border-[#d0d0d0] text-[#121212]"
              placeholder="+254 7XX XXX XXX"
            />
        </div>
        <div className="form-group sm:col-span-2">
          <label htmlFor="service" className="block text-sm font-medium text-[#555] mb-1.5">
            Service Interested In
          </label>
          <Select value={form.service} onValueChange={(v) => handleChange('service', v ?? '')}>
            <SelectTrigger className="bg-[rgba(100,175,71,0.08)] border-[#d0d0d0] text-[#121212]">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-white border-[#e0e0e0] text-[#121212]">
              {serviceDetails.map((svc, i) => (
                <SelectItem
                  key={svc.id}
                  value={svc.title}
                  style={{ animationDelay: `${i * 50}ms` }}
                  className="animate-[fadeInUp_0.3s_ease-out_both]"
                >{svc.title}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="form-group sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-[#555] mb-1.5">
            Message <span className="text-destructive">*</span>
          </label>
          <Textarea
            id="message"
            rows={5}
            value={form.message}
            onChange={(e) => handleChange('message', e.target.value)}
            className="bg-[rgba(100,175,71,0.08)] border-[#d0d0d0] text-[#121212] resize-none"
            placeholder="Tell us about your project..."
          />
        </div>
      </div>

      {errorMsg && (
        <p className="text-sm text-destructive mt-4">{errorMsg}</p>
      )}

      <Button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 px-8 py-6 text-base hover:bg-gradient-to-br hover:from-primary hover:to-secondary"
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
