import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'

export default function ContactBanner() {
    return (
        <Section className='bg-rose-700'>
            <Wrapper className='py-16 md:py-20'>
                <div className='flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10'>
                    <div className='max-w-xl'>
                        <Reveal>
                            <span className='inline-flex items-center gap-2 text-xs text-rose-100 bg-rose-800/60 rounded-full px-3.5 py-1.5 w-fit'>
                                Ready when you are
                            </span>
                        </Reveal>
                        <RevealText
                            as="h2"
                            text="Let's talk about your next step"
                            className='font-serif text-3xl md:text-5xl text-petal-white leading-[1.1] mt-4'
                            delay={0.1}
                        />
                        <Reveal delay={0.25}>
                            <p className='text-rose-100/80 mt-4 text-sm md:text-base max-w-md'>
                                Book a consultation at either branch, or call directly if you'd rather speak
                                with our team first.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal delay={0.3}>
                        <div className='flex flex-col gap-4 shrink-0'>
                            <Link
                                href="/contact"
                                className='inline-flex items-center justify-center rounded-full bg-petal-white hover:bg-rose-50 text-rose-700 text-sm font-medium px-7 py-3.5 transition-colors'
                            >
                                Book an appointment
                            </Link>

                            <div className='flex flex-col gap-2'>
                                <a
                                    href="tel:+919100009669"
                                    className='inline-flex items-center gap-2 text-sm text-petal-white hover:text-rose-100 transition-colors'
                                >
                                    <Phone size={15} />
                                    Puppalaguda: +91 91000 09669
                                </a>
                                <a
                                    href="tel:+918008842200"
                                    className='inline-flex items-center gap-2 text-sm text-petal-white hover:text-rose-100 transition-colors'
                                >
                                    <Phone size={15} />
                                    Attapur: +91 80088 42200
                                </a>
                                <a
                                    href="mailto:amvihospitals@gmail.com"
                                    className='inline-flex items-center gap-2 text-sm text-rose-100/80 hover:text-petal-white transition-colors'
                                >
                                    <Mail size={15} />
                                    amvihospitals@gmail.com
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Wrapper>
        </Section>
    )
}