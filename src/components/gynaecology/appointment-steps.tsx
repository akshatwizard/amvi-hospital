"use client"

import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { appointmentSteps } from '@/constants/gynaecology'

export default function AppointmentSteps() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper>
                <div className='max-w-xl'>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                            First visit
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="What to expect at your first appointment"
                        className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                        delay={0.1}
                    />
                    <Reveal delay={0.2}>
                        <p className='text-warm-slate mt-4'>
                            Many women feel nervous about their first gynaecology visit. At AMVI, every
                            appointment is private, non-judgmental, and at your own pace.
                        </p>
                    </Reveal>
                </div>

                <StaggerContainer className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
                    {appointmentSteps.map((step, i) => (
                        <StaggerItem key={step.title}>
                            <div className='flex flex-col gap-3 p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                <span className='font-serif text-sm text-sage-500'>{String(i + 1).padStart(2, "0")}</span>
                                <p className='font-serif text-lg text-plum-ink'>{step.title}</p>
                                <p className='text-sm text-warm-slate leading-relaxed'>{step.description}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </Wrapper>
        </Section>
    )
}