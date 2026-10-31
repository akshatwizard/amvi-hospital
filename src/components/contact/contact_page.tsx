"use client"

import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle, CheckCircle2, AlertCircle} from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { locations } from '@/constants/locations'
import { contact_services } from '@/constants/contact_services'
import { getVisitContext } from '@/components/analytics/visit-tracker'

import {
    validateContact,
    contactFields,
    type ContactField,
    type ContactFormInput,
    type FieldErrors,
} from '../../lib/contact_validation'

const initialForm: ContactFormInput = { name: "", phone: "", service: "", message: "" }

const baseField =
    'bg-rose-50/60 border rounded-lg px-4 py-3 text-sm text-plum-ink outline-none transition-colors'
const okField = 'border-rose-100 focus:border-rose-400'
const badField = 'border-red-400 focus:border-red-500'

export default function ContactPage() {
    const [form, setForm] = useState<ContactFormInput>(initialForm)
    const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({})
    const [serverErrors, setServerErrors] = useState<FieldErrors>({})
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const result = validateContact(form)
    const clientErrors: FieldErrors = result.success ? {} : result.errors
    const errors: FieldErrors = { ...serverErrors, ...clientErrors }
    const errorFor = (f: ContactField) => (touched[f] ? errors[f] : undefined)

    const update = (field: ContactField, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }))
        setServerErrors((prev) => ({ ...prev, [field]: undefined }))
        if (status === 'success' || status === 'error') setStatus('idle')
    }

    const blur = (field: ContactField) => setTouched((prev) => ({ ...prev, [field]: true }))

    const fieldProps = (field: ContactField) => {
        const error = errorFor(field)
        return {
            id: field,
            name: field,
            value: form[field],
            onBlur: () => blur(field),
            'aria-invalid': !!error,
            'aria-describedby': error ? `${field}-error` : undefined,
            className: `${baseField} ${error ? badField : okField}`,
        }
    }

    const renderError = (field: ContactField) => {
        const error = errorFor(field)
        if (!error) return null
        return (
            <p id={`${field}-error`} role="alert" className='text-xs text-red-600'>
                {error}
            </p>
        )
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (status === 'loading') return
        setTouched({ name: true, phone: true, service: true, message: true })

        if (!result.success) {
            const firstInvalid = contactFields.find((f) => clientErrors[f])
            if (firstInvalid) document.getElementById(firstInvalid)?.focus()
            return
        }

        setStatus('loading')
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // trimmed + normalized values, plus which page the visitor came from (for the email)
                body: JSON.stringify({ ...result.data, context: getVisitContext() }),
            })

            if (res.status === 422) {
                const data = await res.json()
                setServerErrors(data.fieldErrors ?? {})
                setStatus('idle')
                return
            }

            if (!res.ok) throw new Error('Request failed')

            setStatus('success')
            // Lets Google Analytics count enquiries (mark "generate_lead" as a key event in GA).
            const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
            gtag?.('event', 'generate_lead', {
                form_name: 'appointment',
                service: result.data.service,
                from_page: getVisitContext().fromPath ?? '/contact',
            })
            setForm(initialForm)
            setTouched({})
            setServerErrors({})
        } catch {
            setStatus('error')
        }
    }

    return (
        <Section>
            <Wrapper>
                <div className='max-w-xl'>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                            Get in touch
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="Request an appointment"
                        className='font-serif text-4xl md:text-5xl text-plum-ink leading-[1.1] mt-4'
                        delay={0.1}
                    />
                    <Reveal delay={0.25}>
                        <p className='text-warm-slate mt-4 text-sm md:text-base'>
                            Fill out the form and our team will get back to you, or reach either branch
                            directly using the details alongside.
                        </p>
                    </Reveal>
                </div>

                <div className='grid lg:grid-cols-[1.2fr_1fr] gap-12 md:gap-16'>
                    <Reveal delay={0.2}>
                        <form onSubmit={handleSubmit} noValidate className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-1.5'>
                                <label htmlFor="name" className='text-xs text-warm-slate'>Name</label>
                                <input
                                    {...fieldProps('name')}
                                    type="text"
                                    autoComplete="name"
                                    maxLength={100}
                                    onChange={(e) => update('name', e.target.value)}
                                    placeholder="Your full name"
                                />
                                {renderError('name')}
                            </div>

                            <div className='flex flex-col gap-1.5'>
                                <label htmlFor="phone" className='text-xs text-warm-slate'>Phone number</label>
                                <input
                                    {...fieldProps('phone')}
                                    type="tel"
                                    inputMode="tel"
                                    autoComplete="tel"
                                    maxLength={20}
                                    onChange={(e) => update('phone', e.target.value.replace(/[^\d+\s-]/g, ''))}
                                    placeholder="+91 00000 00000"
                                />
                                {renderError('phone')}
                            </div>

                            <div className='flex flex-col gap-1.5'>
                                <label htmlFor="service" className='text-xs text-warm-slate'>Service</label>
                                <select
                                    {...fieldProps('service')}
                                    onChange={(e) => update('service', e.target.value)}
                                >
                                    <option value="" disabled>Select a service</option>
                                    {contact_services.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                                {renderError('service')}
                            </div>

                            <div className='flex flex-col gap-1.5'>
                                <div className='flex items-center justify-between'>
                                    <label htmlFor="message" className='text-xs text-warm-slate'>
                                        Message <span className='text-warm-slate/60'>(optional)</span>
                                    </label>
                                    <span className={`text-xs ${form.message.length > 1000 ? 'text-red-600' : 'text-warm-slate/60'}`}>
                                        {form.message.length}/1000
                                    </span>
                                </div>
                                <textarea
                                    {...fieldProps('message')}
                                    rows={4}
                                    onChange={(e) => update('message', e.target.value)}
                                    className={`${fieldProps('message').className} resize-none`}
                                    placeholder="Tell us a little about what you're looking for"
                                />
                                {renderError('message')}
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className='inline-flex items-center justify-center rounded-full bg-rose-700 hover:bg-rose-800 disabled:opacity-60 disabled:cursor-not-allowed text-petal-white text-sm px-6 py-3.5 transition-colors mt-2 cursor-pointer'
                            >
                                {status === 'loading' ? 'Sending...' : 'Submit'}
                            </button>

                            {status === 'success' && (
                                    <div
                                        role="status"
                                        className='flex items-start gap-3 rounded-xl border border-sage-500/30 bg-sage-500/10 p-4 md:p-5'
                                    >
                                        <CheckCircle2 size={22} className='text-sage-600 shrink-0 mt-0.5' />
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-sm font-medium text-plum-ink'>
                                                Thank you! Your request has been submitted successfully.
                                            </p>
                                            <p className='text-sm text-warm-slate leading-relaxed'>
                                                Our team will contact you shortly on the phone number you provided to confirm
                                                your consultation. For anything urgent, you can also call us or chat on WhatsApp.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div
                                        role="alert"
                                        className='flex items-start gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 md:p-5'
                                    >
                                        <AlertCircle size={22} className='text-rose-700 shrink-0 mt-0.5' />
                                        <div className='flex flex-col gap-1'>
                                            <p className='text-sm font-medium text-plum-ink'>
                                                We couldn't send your request.
                                            </p>
                                            <p className='text-sm text-warm-slate leading-relaxed'>
                                                Please try again in a moment, or reach us directly by phone or WhatsApp.
                                            </p>
                                        </div>
                                    </div>
                                )}
                        </form>
                    </Reveal>

                    <div className='flex flex-col gap-6'>
                        {locations.map((loc, i) => (
                            <Reveal key={loc.name} delay={0.25 + i * 0.1}>
                                <div className='flex flex-col gap-4 rounded-card bg-rose-50/60 border border-rose-100 p-6 md:p-7'>
                                    <p className='font-serif text-xl text-plum-ink'>{loc.name}</p>

                                    <div className='flex items-start gap-3'>
                                        <MapPin size={17} className='text-rose-500 shrink-0 mt-0.5' />
                                        <p className='text-sm text-plum-ink leading-relaxed'>{loc.address}</p>
                                    </div>

                                    <div className='flex items-center gap-3'>
                                        <Phone size={17} className='text-rose-500 shrink-0' />
                                        <a href={`tel:${loc.phoneHref}`} className='text-sm text-plum-ink hover:text-rose-700 transition-colors'>
                                            {loc.phoneDisplay}
                                        </a>
                                    </div>

                                    <div className='flex items-center gap-3'>
                                        <Mail size={17} className='text-rose-500 shrink-0' />
                                        <a href="mailto:amvihospitals@gmail.com" className='text-sm text-plum-ink hover:text-rose-700 transition-colors'>
                                            amvihospitals@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </Reveal>
                        ))}

                        <Reveal delay={0.45}>
                            <a
                                href="https://wa.me/+919100009669"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='inline-flex items-center justify-center gap-2 rounded-full bg-sage-500 hover:bg-sage-600 text-petal-white text-sm px-6 py-3.5 transition-colors w-full'
                            >
                                <MessageCircle size={16} />
                                Chat on WhatsApp
                            </a>
                        </Reveal>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}