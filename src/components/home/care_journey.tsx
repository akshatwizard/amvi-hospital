"use client"

import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { journey_steps } from '@/constants/care_journey'

export default function CareJourney() {
    return (
        <Section className='bg-plum-ink'>
            <Wrapper>
                <div className='max-w-xl'>
                    <Reveal>
                        <span className='inline-flex items-center gap-2 text-xs text-rose-200 bg-rose-900/40 rounded-full px-3.5 py-1.5 w-fit'>
                            What to expect
                        </span>
                    </Reveal>
                    <RevealText
                        as="h2"
                        text="Your care journey, step by step"
                        className='font-serif text-3xl md:text-4xl text-petal-white leading-[1.15] mt-4'
                        delay={0.1}
                    />
                    <Reveal delay={0.25}>
                        <p className='text-rose-100/70 mt-4 text-sm md:text-base'>
                            Every patient&apos;s path looks a little different, but most follow the same shape —
                            from that first conversation to the day you finally meet your baby.
                        </p>
                    </Reveal>
                </div>

                <div className='relative mt-4'>
                    <div className='hidden md:block absolute top-5 left-0 right-0 h-px bg-rose-800' />
                    <StaggerContainer className='grid md:grid-cols-5 gap-10 md:gap-6 relative'>
                        {journey_steps.map((step, i) => (
                            <StaggerItem key={step.title} className='flex flex-col gap-4'>
                                <span className='relative z-10 size-10 rounded-full bg-rose-700 text-petal-white font-serif text-sm flex items-center justify-center shrink-0'>
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <p className='font-serif text-lg text-petal-white'>{step.title}</p>
                                    <p className='text-sm text-rose-100/60 mt-2 leading-relaxed'>
                                        {step.description}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </Wrapper>
        </Section>
    )
}