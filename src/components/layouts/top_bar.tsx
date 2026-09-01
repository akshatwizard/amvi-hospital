import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import ServiceTicker from './service-ticker'
import React from 'react'

export default function TopBar() {
    return (
        <Section className='bg-rose-100 hidden md:block'>
            <Wrapper className='md:py-2.5' bare>
                <div className='w-full flex items-center justify-between gap-6'>
                    <div className='flex items-center gap-6 shrink-0'>
                        <Link
                            href="tel:+919100009669"
                            className='flex items-center gap-2 text-xs text-plum-ink hover:text-rose-600 transition-colors'
                        >
                            <Phone size={14} className='text-rose-500 shrink-0' />
                            <span className='text-warm-slate'>Puppalaguda</span>
                            <span>+91 91000 09669</span>
                        </Link>
                        <span className='w-px h-3 bg-rose-300/60' aria-hidden="true" />
                        <Link
                            href="tel:+918008842200"
                            className='flex items-center gap-2 text-xs text-plum-ink hover:text-rose-600 transition-colors'
                        >
                            <Phone size={14} className='text-rose-500 shrink-0' />
                            <span className='text-warm-slate'>Attapur</span>
                            <span>+91 80088 42200</span>
                        </Link>
                    </div>

                    <ServiceTicker />

                    <Link
                        href="/contact"
                        className='text-xs text-plum-ink hover:text-rose-600 transition-colors underline underline-offset-4 decoration-rose-300 shrink-0'
                    >
                        Book appointment
                    </Link>
                </div>
            </Wrapper>
        </Section>
    )
}