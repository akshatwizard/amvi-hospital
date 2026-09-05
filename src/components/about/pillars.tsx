"use client"

import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { aboutPillars } from '@/constants/about_hospital'

export default function AboutPillars() {
    return (
        <Section>
            <Wrapper>
                <div className='max-w-xl'>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-100 rounded-full px-3.5 py-1.5 w-fit'>
                            What guides us
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="Vision, mission and portfolio"
                        className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                        delay={0.1}
                    />
                </div>

                <StaggerContainer className='grid md:grid-cols-3 gap-6 mt-10'>
                    {aboutPillars.map((pillar) => (
                        <StaggerItem key={pillar.title}>
                            <div className='flex flex-col gap-3 p-6 rounded-card bg-petal-white border border-rose-100 h-full'>
                                <p className='font-serif text-xl text-rose-700'>{pillar.title}</p>
                                <p className='text-sm text-warm-slate leading-relaxed'>{pillar.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Wrapper>
        </Section>
    )
}