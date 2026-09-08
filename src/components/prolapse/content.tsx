"use client"

import { Check, AlertTriangle } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import { stats } from '@/constants/stats'
import { urogynecologyConditionNav } from '@/constants/gynaecology-nav'
import {
    prolapseIntro, prolapseTypesIntro, prolapseCompartments, prolapseSeverityNote,
    prolapseCommonality, prolapseCauses, prolapseSymptoms,
    prolapseAssessmentNote, prolapseNonSurgical, prolapseProgressionNote,
    prolapseSurgicalIntro, prolapseSurgicalTypes,
} from '@/constants/prolapse'

export default function ProlapseContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={urogynecologyConditionNav} category='Urogynecology' />

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
                        <RevealText as="h2" text="What is prolapse?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{prolapseIntro}</p>
                        </Reveal>
                    </div>

                    {/* Types */}
                    <div>
                        <RevealText as="h2" text="What are the types of prolapse?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{prolapseTypesIntro}</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {prolapseCompartments.map((item) => (
                                <StaggerItem key={item.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                    <div>
                                        <p className='font-serif text-base text-plum-ink'>{item.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed mt-1'>{item.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6'>{prolapseSeverityNote}</p>
                        </Reveal>
                    </div>

                    {/* How common */}
                    <div>
                        <RevealText as="h2" text="How common is prolapse?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{prolapseCommonality}</p>
                        </Reveal>
                    </div>

                    {/* Causes */}
                    <div>
                        <RevealText as="h2" text="What are the causes of prolapse?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid sm:grid-cols-3 gap-6'>
                            {prolapseCauses.map((item) => (
                                <StaggerItem key={item}>
                                    <div className='flex items-start gap-3 p-5 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                        <AlertTriangle size={16} className='text-sage-500 shrink-0 mt-0.5' />
                                        <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Symptoms */}
                    <div>
                        <RevealText as="h2" text="What are the symptoms of prolapse?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>Many patients are asymptomatic. Symptoms include:</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {prolapseSymptoms.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Treatment */}
                    <div>
                        <RevealText as="h2" text="How can prolapse be treated?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{prolapseAssessmentNote}</p>
                        </Reveal>

                        <p className='font-serif text-lg text-plum-ink mb-4'>Non-surgical treatments</p>
                        <ul className='flex flex-col gap-1.5 mb-6'>
                            {prolapseNonSurgical.map((item) => (
                                <li key={item} className='flex items-start gap-2'>
                                    <Check size={14} strokeWidth={3} className='text-rose-500 shrink-0 mt-1' />
                                    <span className='text-sm text-warm-slate'>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed mb-8'>{prolapseProgressionNote}</p>
                        </Reveal>

                        <p className='font-serif text-lg text-plum-ink mb-4'>Surgical treatment</p>
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-6'>{prolapseSurgicalIntro}</p>
                        </Reveal>
                        <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                            {prolapseSurgicalTypes.map((item) => (
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