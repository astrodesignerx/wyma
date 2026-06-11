import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { fullName, organisation, email, phone, service, message } = body

    if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const to = process.env.CONTACT_EMAIL_TO || 'info@wyma-newfrontiers.com'
    const from = process.env.CONTACT_EMAIL_FROM || 'noreply@wyma-newfrontiers.com'

    const msg = {
      to,
      from,
      subject: `New Contact Form Submission — ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Name</td><td style="padding:8px;border:1px solid #ddd;">${fullName}</td></tr>
          ${organisation ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Organisation</td><td style="padding:8px;border:1px solid #ddd;">${organisation}</td></tr>` : ''}
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
          ${phone ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>` : ''}
          ${service ? `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Service</td><td style="padding:8px;border:1px solid #ddd;">${service}</td></tr>` : ''}
          <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message.replace(/\n/g, '<br>')}</td></tr>
        </table>
      `,
    }

    await sgMail.send(msg)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
