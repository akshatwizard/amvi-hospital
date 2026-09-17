"use client"

import { AlertCircle } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { maternitySpecialistCareSigns } from '@/constants/maternity-hub'

export default function MaternityCareSigns() {
    return (
        <Section className='bg-plum-ink'>
            <Wrapper>
                <div className='max-w-xl'>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-200 bg-petal-white/10 rounded-full px-3.5 py-1.5 w-fit'>
                            When to ask for specialist care
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="Situations that call for closer monitoring"
                        className='font-serif text-3xl md:text-4xl text-petal-white leading-[1.15] mt-4'
                        delay={0.1}
                    />
                    <Reveal delay={0.2}>
                        <p className='text-rose-100/70 mt-4'>
                            None of these mean something is wrong — they just mean your pregnancy benefits from a more attentive care plan.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-2 mt-10'>
                    {maternitySpecialistCareSigns.map((item) => (
                        <StaggerItem key={item} className='flex items-start gap-3 py-4 border-b border-petal-white/10'>
                            <AlertCircle size={18} className='text-rose-300 shrink-0 mt-0.5' />
                            <p className='text-sm md:text-base text-rose-50/90 leading-relaxed'>{item}</p>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Wrapper>
        </Section>
    )
}
