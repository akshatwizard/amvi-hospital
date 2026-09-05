"use client"

import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import { stats } from '@/constants/stats'
import { aboutIntro } from '@/constants/about_hospital'

const facilities = [
    "Two air-conditioned operation theatres for major and minor procedures",
    "Private air-conditioned suites and recovery rooms for post-operative care",
    "In-house pharmacy for immediate access to prescribed medication",
    "On-site diagnostic centre with the latest ultrasound equipment",
]

export default function AboutOverview() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper>
                <div className='grid md:grid-cols-2 gap-12 md:gap-16'>
                    <div className='flex flex-col gap-5'>
                        {aboutIntro.map((para, i) => (
                            <Reveal key={i} delay={i * 0.1}>
                                <p className='text-warm-slate text-sm md:text-base leading-relaxed'>{para}</p>
                            </Reveal>
                        ))}

                        <StaggerContainer className='grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-rose-100'>
                            {stats.map((stat) => (
                                <StaggerItem key={stat.label}>
                                    <p className='font-serif text-2xl md:text-3xl text-rose-700'>
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className='text-xs text-warm-slate mt-1'>{stat.label}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <Reveal>
                            <p className='font-serif text-xl text-plum-ink mb-4'>
                                A Daycare Surgery Centre, equipped for every step
                            </p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {facilities.map((item) => (
                                <StaggerItem
                                    key={item}
                                    className='flex items-start gap-3 py-4 border-b border-rose-100 last:border-0'
                                >
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm md:text-base text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}