import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { validateContact } from '../../../lib/contact_validation'
import { buildEnquiryEmail, sanitizeContext } from '../../../lib/enquiry_email'
const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Which page the request came from (sent by the form; optional, cleaned before use).
    const context = sanitizeContext((body as { context?: unknown }).context)
    const email = buildEnquiryEmail(result.data, context)

    try {
        const { error } = await resend.emails.send({
            from: process.env.CONTACT_FROM_EMAIL!,
            to: (process.env.CONTACT_TO_EMAIL ?? '')
                .split(',')
                .map((address) => address.trim())
                .filter(Boolean),
            subject: email.subject,
            html: email.html,
            text: email.text,
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