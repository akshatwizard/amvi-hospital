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
    multiplesIntro, multiplesBirthIntro, multiplesVaginalBirthConditions, multiplesVaginalBirthNote,
    multiplesTypes, multiplesDiagnosisNote, multiplesComplications,
    multiplesBabyHealthRisks, multiplesDiagnosticTests,
} from '@/constants/twins-triplets-pregnancy'

export default function TwinsTripletsContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={maternityConditionNav} category="Maternity" />

                <div className='flex flex-col gap-20'>
                    {/* Author byline + stats */}
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

                    {/* Intro */}
                    <div>
                        <RevealText as="h2" text="Twins or triplets — multiple gestation care" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4'>
                            {multiplesIntro.map((p, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Types */}
                    <div>
                        <RevealText as="h2" text="Types of multiple pregnancies" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <div className='flex flex-wrap gap-2.5'>
                            {multiplesTypes.map((item) => (
                                <span key={item} className='inline-block text-sm text-plum-ink bg-rose-50 border border-rose-100 rounded-full px-5 py-2.5'>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* How multiples are born */}
                    <div>
                        <RevealText as="h2" text="How are multiples born?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-6'>{multiplesBirthIntro}</p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed mb-4'>
                                With twins, a vaginal birth may be possible if:
                            </p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col mb-6'>
                            {multiplesVaginalBirthConditions.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.15}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{multiplesVaginalBirthNote}</p>
                        </Reveal>
                    </div>

                    {/* Signs / diagnosis note */}
                    <div>
                        <RevealText as="h2" text="Signs of a multiple pregnancy" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{multiplesDiagnosisNote}</p>
                        </Reveal>
                    </div>

                    {/* Complications */}
                    <div>
                        <RevealText as="h2" text="What complications are linked to multiple births?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                            {multiplesComplications.map((item) => (
                                <StaggerItem key={item}>
                                    <div className='flex items-start gap-2.5 p-4 rounded-card bg-plum-ink h-full'>
                                        <AlertTriangle size={14} className='text-rose-300 shrink-0 mt-0.5' />
                                        <p className='text-sm text-rose-100/80 leading-relaxed'>{item}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Baby health risks */}
                    <div>
                        <RevealText as="h2" text="How can being pregnant with multiples affect your babies' health?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                            {multiplesBabyHealthRisks.map((item) => (
                                <StaggerItem key={item}>
                                    <div className='flex items-start gap-2.5 p-4 rounded-card bg-plum-ink h-full'>
                                        <AlertTriangle size={14} className='text-rose-300 shrink-0 mt-0.5' />
                                        <p className='text-sm text-rose-100/80 leading-relaxed'>{item}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Diagnostic tests */}
                    <div>
                        <RevealText as="h2" text="Diagnosis of multiple pregnancies" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm text-warm-slate leading-relaxed mb-6'>
                                The following tests help confirm and monitor a multiple pregnancy, and help avoid complications at the time of delivery:
                            </p>
                        </Reveal>
                        <StaggerContainer className='grid sm:grid-cols-3 gap-4'>
                            {multiplesDiagnosticTests.map((item) => (
                                <StaggerItem key={item}>
                                    <div className='p-5 rounded-card bg-rose-50/60 border border-rose-100 text-center'>
                                        <p className='text-sm text-plum-ink'>{item}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}