"use client"

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { specialties } from '@/constants/specialties'

export default function Specialties() {
    return (
        <Section>
            <Wrapper>
                <div className='grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-16'>
                    <div className='md:sticky md:top-20 self-start'>
                        <Reveal>
                            <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                                What we treat
                            </span>
                        </Reveal>
                        <RevealText
                            as="h2"
                            text="Every stage of care, under one roof"
                            className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                            delay={0.1}
                        />
                        <Reveal delay={0.25}>
                            <p className='text-warm-slate mt-4 max-w-sm text-sm'>
                                From your first consultation to delivery day and beyond, our specialists cover
                                every area of women's health under one roof across both our centers.
                            </p>
                        </Reveal>
                    </div>

                    <StaggerContainer className='flex flex-col'>
                        {specialties.map((item) => (
                            <StaggerItem key={item.href}>
                                <Link
                                    href={item.href}
                                    className='group flex items-center gap-6 py-6 md:py-7 border-b border-rose-100 hover:bg-rose-50/60 -mx-4 px-4 transition-colors rounded-card'
                                >
                                    <span className='font-serif text-sm text-sage-500 shrink-0 w-6'>
                                        {item.index}
                                    </span>

                                    <div className='flex-1 min-w-0'>
                                        <p className='font-serif text-2xl md:text-3xl text-plum-ink group-hover:text-rose-700 transition-colors'>
                                            {item.name}
                                        </p>
                                        <p className='md:text-sm text-xs text-warm-slate mt-1 block'>
                                            {item.description}
                                        </p>
                                    </div>

                                    <ArrowUpRight
                                        size={22}
                                        className='shrink-0 text-warm-slate group-hover:text-rose-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all'
                                    />
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </Wrapper>
        </Section>
    )
}