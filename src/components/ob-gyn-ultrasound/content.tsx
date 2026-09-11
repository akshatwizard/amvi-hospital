"use client"

import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import { stats } from '@/constants/stats'
import { maternityConditionNav } from '@/constants/maternity-nav'
import {
    obgynIntro, obgynBenefits, obgynFamilyMoment, obgynTransducers, obgynHowItWorks,
    obgynObstetricUses, obgynGynecologicUse, obgynLimitations,
    obgynProcedureNotes, obgynApplications,
} from '@/constants/ob-gyn-ultrasound'

export default function ObGynUltrasoundContent() {
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
                        <RevealText as="h2" text="What is an OB-GYN ultrasound?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-4'>{obgynIntro}</p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-4'>{obgynBenefits}</p>
                        </Reveal>
                        <Reveal delay={0.15}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-4'>{obgynFamilyMoment}</p>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-4'>{obgynTransducers}</p>
                        </Reveal>
                        <Reveal delay={0.25}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{obgynHowItWorks}</p>
                        </Reveal>
                    </div>

                    {/* Obstetric uses */}
                    <div>
                        <RevealText as="h2" text="Ultrasound for obstetrics and pregnancy" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <Reveal>
                            <p className='text-sm text-warm-slate leading-relaxed mb-6'>Obstetric ultrasounds are used at many stages of pregnancy:</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {obgynObstetricUses.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Gynecologic uses */}
                    <div>
                        <RevealText as="h2" text="Ultrasound for gynecologic diagnostics and evaluation" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-4'>{obgynGynecologicUse}</p>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{obgynLimitations}</p>
                        </Reveal>
                    </div>

                    {/* How it's performed */}
                    <div>
                        <RevealText as="h2" text="How we perform an OB-GYN ultrasound" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4 mb-8'>
                            {obgynProcedureNotes.map((p, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>

                        <p className='font-serif text-lg text-plum-ink mb-4'>Ultrasound can be used to perform the following</p>
                        <StaggerContainer className='grid sm:grid-cols-2 gap-x-10 gap-y-1'>
                            {obgynApplications.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-sage-50 text-sage-600 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}