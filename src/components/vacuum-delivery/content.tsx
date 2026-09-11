"use client"

import { Check, AlertTriangle } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import { stats } from '@/constants/stats'
import { maternityConditionNav } from '@/constants/maternity-nav'
import {
    vacuumIntro, vacuumIndications, vacuumBabyRisks, vacuumBabyNote,
    vacuumMotherRisks, vacuumFailureNote,
} from '@/constants/vacuum-delivery'

export default function VacuumDeliveryContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={maternityConditionNav} category="Maternity" />

                <div className='flex flex-col gap-20'>
                    <div>
                        <Reveal>
                            <p className='text-xs text-warm-slate'>
                                Written &amp; medically reviewed by <span className='text-rose-700'>Dr. Shaivalini Kamarapu</span>
                                <br />
                                MBBS · MS (Obstetrics &amp; Gynaecology) · Fellowship in Reproductive Medicine · 20+ years of clinical experience
                            </p>
                        </Reveal>
                        <StaggerContainer className='grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-rose-100 max-w-md'>
                            {stats.map((stat) => (
                                <StaggerItem key={stat.label}>
                                    <p className='font-serif text-xl md:text-2xl text-rose-700'>
                                        <Counter value={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className='text-xs text-warm-slate mt-1'>{stat.label}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <RevealText as="h2" text="What is vacuum delivery?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        {vacuumIntro.map((p, i) => (
                            <Reveal key={i} delay={0.1 + i * 0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-2xl mb-4 last:mb-0'>{p}</p>
                            </Reveal>
                        ))}
                    </div>

                    <div>
                        <RevealText as="h2" text="When and why is it done?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <StaggerContainer className='flex flex-col'>
                            {vacuumIndications.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <RevealText as="h2" text="Risks to the baby" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                            {vacuumBabyRisks.map((item) => (
                                <StaggerItem key={item}>
                                    <div className='flex items-start gap-2.5 p-5 rounded-card bg-plum-ink h-full'>
                                        <AlertTriangle size={14} className='text-rose-300 shrink-0 mt-0.5' />
                                        <p className='text-sm text-rose-100/80 leading-relaxed'>{item}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.2}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6 max-w-2xl'>{vacuumBabyNote}</p>
                        </Reveal>
                    </div>

                    <div>
                        <RevealText as="h2" text="Risks to the mother" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <StaggerContainer className='flex flex-col'>
                            {vacuumMotherRisks.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <AlertTriangle size={15} className='text-rose-500 shrink-0 mt-0.5' />
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.2}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6 max-w-2xl'>{vacuumFailureNote}</p>
                        </Reveal>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}