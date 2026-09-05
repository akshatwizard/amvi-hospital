"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import { leadDoctor } from '@/constants/doctors'

export default function LeadProfile() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper>
                <div className='grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16'>
                    <div className='lg:sticky lg:top-24 lg:self-start flex flex-col gap-6'>
                        <Reveal className='relative w-full aspect-4/5 rounded-card overflow-hidden'>
                            <Image
                                src={leadDoctor.image}
                                alt={leadDoctor.name}
                                fill
                                priority
                                sizes="(min-width: 1024px) 420px, 90vw"
                                className='object-cover'
                            />
                        </Reveal>

                        <StaggerContainer className='grid grid-cols-3 gap-4'>
                            {leadDoctor.stats.map((stat) => (
                                <StaggerItem key={stat.label}>
                                    <p className='font-serif text-xl text-rose-700'>
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className='text-xs text-warm-slate mt-0.5'>{stat.label}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <Reveal>
                            <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                                {leadDoctor.experience} Years Experience
                            </span>
                        </Reveal>
                        <RevealText
                            as="h1"
                            text={leadDoctor.name}
                            className='font-serif text-3xl md:text-4xl text-plum-ink mt-4'
                            delay={0.1}
                        />
                        <Reveal delay={0.15}>
                            <p className='text-sm text-rose-700 mt-2'>{leadDoctor.designation}</p>
                        </Reveal>
                        <Reveal delay={0.25}>
                            <p className='text-warm-slate mt-5 leading-relaxed'>{leadDoctor.bio}</p>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <p className='font-serif text-xl text-plum-ink mt-8 mb-4'>Experience &amp; expertise</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {leadDoctor.achievements.map((item) => (
                                <StaggerItem
                                    key={item}
                                    className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'
                                >
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        {leadDoctor.research && (
                            <Reveal delay={0.1}>
                                <p className='font-serif text-xl text-plum-ink mt-8 mb-2'>Research</p>
                                <p className='text-sm text-warm-slate leading-relaxed'>{leadDoctor.research}</p>
                            </Reveal>
                        )}

                        <Reveal delay={0.1}>
                            <p className='font-serif text-xl text-plum-ink mt-8 mb-3'>Professional memberships</p>
                            <div className='flex flex-wrap gap-2'>
                                {leadDoctor.memberships.map((m) => (
                                    <span key={m} className='text-xs text-sage-600 bg-sage-50 rounded-full px-3 py-1.5'>{m}</span>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <p className='font-serif text-xl text-plum-ink mt-8 mb-3'>Areas of expertise</p>
                            <div className='flex flex-wrap gap-2'>
                                {leadDoctor.expertise.map((e) => (
                                    <span key={e} className='text-xs text-rose-700 bg-rose-50 rounded-full px-3 py-1.5'>{e}</span>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <Link
                                href="/contact"
                                className='inline-flex items-center rounded-full bg-rose-700 hover:bg-rose-800 text-petal-white text-sm px-6 py-3.5 transition-colors mt-8'
                            >
                                Book a consultation
                            </Link>
                        </Reveal>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}