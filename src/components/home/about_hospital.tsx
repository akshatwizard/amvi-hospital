// components/about/about_hospital.tsx
"use client"

import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { facility_features, portfolio_areas } from '@/constants/about_hospital'

export default function AboutHospital() {
    return (
        <Section>
            <Wrapper>
                <div className='grid md:grid-cols-2 gap-12 md:gap-16'>
                    <div>
                        <Reveal>
                            <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                                About AMVI Hospital
                            </span>
                        </Reveal>

                        <RevealText
                            as="h2"
                            text="A daycare surgery centre built for women's health"
                            className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                            delay={0.1}
                        />

                        <Reveal delay={0.25}>
                            <p className='text-warm-slate mt-5 max-w-md text-sm md:text-base leading-relaxed'>
                                AMVI Hospital is a super-specialty daycare surgery centre focused entirely on
                                women&apos;s health, combining advanced medical and surgical care with both
                                inpatient and outpatient services. Multiple specialties sit under one roof,
                                backed by doctors of national and international standing.
                            </p>
                        </Reveal>

                        <Reveal delay={0.35}>
                            <div className='flex flex-wrap gap-2 mt-8'>
                                {portfolio_areas.map((area) => (
                                    <span
                                        key={area}
                                        className='text-xs md:text-sm text-rose-700 bg-rose-50 border border-rose-100 rounded-full px-4 py-2'
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </Reveal>
                    </div>

                    <div>
                        <StaggerContainer className='flex flex-col'>
                            {facility_features.map((feature) => (
                                <StaggerItem
                                    key={feature}
                                    className='flex items-start gap-3 py-5 border-b border-rose-100 last:border-0'
                                >
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm md:text-base text-plum-ink leading-relaxed'>
                                        {feature}
                                    </p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}