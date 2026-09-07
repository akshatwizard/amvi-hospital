"use client"

import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { locations } from '@/constants/locations'
import { contact_services } from '@/constants/contact_services'

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: wire this up to an actual submission endpoint (email service / API route)
        console.log(form)
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
                        as="h1"
                        text="Book a consultation"
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
                        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                            <div className='flex flex-col gap-1.5'>
                                <label htmlFor="name" className='text-xs text-warm-slate'>Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className='bg-rose-50/60 border border-rose-100 rounded-lg px-4 py-3 text-sm text-plum-ink outline-none focus:border-rose-400 transition-colors'
                                    placeholder="Your full name"
                                />
                            </div>

                            <div className='flex flex-col gap-1.5'>
                                <label htmlFor="phone" className='text-xs text-warm-slate'>Phone number</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    required
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    className='bg-rose-50/60 border border-rose-100 rounded-lg px-4 py-3 text-sm text-plum-ink outline-none focus:border-rose-400 transition-colors'
                                    placeholder="+91 00000 00000"
                                />
                            </div>

                            <div className='flex flex-col gap-1.5'>
                                <label htmlFor="service" className='text-xs text-warm-slate'>Service</label>
                                <select
                                    id="service"
                                    required
                                    value={form.service}
                                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                                    className='bg-rose-50/60 border border-rose-100 rounded-lg px-4 py-3 text-sm text-plum-ink outline-none focus:border-rose-400 transition-colors'
                                >
                                    <option value="" disabled>Select a service</option>
                                    {contact_services.map((s) => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </div>

                            <div className='flex flex-col gap-1.5'>
                                <label htmlFor="message" className='text-xs text-warm-slate'>Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className='bg-rose-50/60 border border-rose-100 rounded-lg px-4 py-3 text-sm text-plum-ink outline-none focus:border-rose-400 transition-colors resize-none'
                                    placeholder="Tell us a little about what you're looking for"
                                />
                            </div>

                            <button
                                type="submit"
                                className='inline-flex items-center justify-center rounded-full bg-rose-700 hover:bg-rose-800 text-petal-white text-sm px-6 py-3.5 transition-colors mt-2'
                            >
                                Submit
                            </button>
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