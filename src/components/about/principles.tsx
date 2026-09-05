"use client"

import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { carePrinciples } from '@/constants/about_hospital'

export default function AboutPrinciples() {
    return (
        <Section className='bg-plum-ink'>
            <Wrapper>
                <div className='max-w-xl'>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-200 bg-petal-white/10 rounded-full px-3.5 py-1.5 w-fit'>
                            Our commitment
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="Complete care for women"
                        className='font-serif text-3xl md:text-4xl text-petal-white leading-[1.15] mt-4'
                        delay={0.1}
                    />
                </div>

                <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-2 mt-10'>
                    {carePrinciples.map((item) => (
                        <StaggerItem key={item} className='flex items-start gap-3 py-4 border-b border-petal-white/10'>
                            <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center'>
                                <Check size={12} strokeWidth={3} />
                            </span>
                            <p className='text-sm md:text-base text-rose-50/90 leading-relaxed'>{item}</p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Wrapper>
        </Section>
    )
}