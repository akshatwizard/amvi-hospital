import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateContact } from '../../../lib/contact_validation'
const resend = new Resend(process.env.RESEND_API_KEY)
const escapeHtml = (str: string) =>
    str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')

export async function POST(req: Request) {
    let body: unknown
    try {
        body = await req.json()
    } catch {
        return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
    }
    const result = validateContact(body)
    if (!result.success) {
        return NextResponse.json(
            { error: 'Validation failed.', fieldErrors: result.errors },
            { status: 422 }
        )
    }

    const { name, phone, service, message } = result.data
    const safe = {
        name: escapeHtml(name),
        phone: escapeHtml(phone),
        service: escapeHtml(service),
        message: escapeHtml(message),
    }

    try {
        const { error } = await resend.emails.send({
            from: process.env.CONTACT_FROM_EMAIL!,
            to: (process.env.CONTACT_TO_EMAIL ?? '')
            .split(',')
            .map((email) => email.trim())
            .filter(Boolean),
            subject: `New consultation request: ${service} (${name.replace(/[\r\n]/g, ' ')})`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 520px;">
                    <h2 style="margin-bottom: 16px;">New consultation request</h2>
                    <table cellpadding="6" style="border-collapse: collapse;">
                        <tr><td><strong>Name</strong></td><td>${safe.name}</td></tr>
                        <tr><td><strong>Phone</strong></td><td>${safe.phone}</td></tr>
                        <tr><td><strong>Service</strong></td><td>${safe.service}</td></tr>
                        <tr><td valign="top"><strong>Message</strong></td><td>${safe.message || '—'}</td></tr>
                    </table>
                </div>
            `,
            text: `Name: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message || '-'}`,
        })

        if (error) {
            console.error('Resend error:', error)
            return NextResponse.json({ error: 'Failed to send email.' }, { status: 500 })
        }

        return NextResponse.json({ success: true })
    } catch (err) {
        console.error('Contact API error:', err)
        return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
    }
}