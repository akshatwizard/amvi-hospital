"use client"

import { Check, ShieldCheck } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import { stats } from '@/constants/stats'
import { cancersConditionNav } from '@/constants/gynaecology-nav'
import {
    vulvarCancerIntro, vulvarCancerSymptoms, vulvarCancerDiagnosisIntro, vulvarCancerBiopsyNote,
    vulvarCancerStagingNote, vulvarCancerImaging, vulvarCancerStages, vulvarCancerTreatmentIntro,
    vulvarCancerProcedures, vulvarCancerFollowUp, vulvarCancerPrevention,
} from '@/constants/vulvar-cancer'

export default function VulvarCancerContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={cancersConditionNav} category='Cancer' />

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
                        <RevealText as="h2" text="What is vulvar cancer?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{vulvarCancerIntro}</p>
                        </Reveal>
                    </div>

                    {/* Symptoms */}
                    <div>
                        <RevealText as="h2" text="Symptoms" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {vulvarCancerSymptoms.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Diagnosis */}
                    <div>
                        <RevealText as="h2" text="Diagnosis" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4 mb-8'>
                            <Reveal>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{vulvarCancerDiagnosisIntro}</p>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{vulvarCancerBiopsyNote}</p>
                            </Reveal>
                            <Reveal delay={0.15}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{vulvarCancerStagingNote}</p>
                            </Reveal>
                        </div>
                        <p className='font-serif text-lg text-plum-ink mb-4'>Imaging tests</p>
                        <StaggerContainer className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                            {vulvarCancerImaging.map((item) => (
                                <StaggerItem key={item.title}>
                                    <div className='p-5 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                        <p className='font-serif text-base text-plum-ink mb-1'>{item.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed'>{item.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Stages */}
                    <div>
                        <RevealText as="h2" text="Stages of vulvar cancer" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {vulvarCancerStages.map((stage) => (
                                <StaggerItem key={stage.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                    <span className='font-serif text-sm text-rose-700 shrink-0 w-20'>{stage.title}</span>
                                    <p className='text-sm text-warm-slate leading-relaxed'>{stage.description}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Treatment */}
                    <div>
                        <RevealText as="h2" text="Treatment" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{vulvarCancerTreatmentIntro}</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {vulvarCancerProcedures.map((proc) => (
                                <StaggerItem key={proc.title} className='flex gap-5 py-4 border-b border-rose-100 last:border-0'>
                                    <div>
                                        <p className='font-serif text-base text-plum-ink'>{proc.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed mt-1'>{proc.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.1}>
                            <div className='mt-8 p-6 rounded-card bg-sage-50 border border-sage-100'>
                                <p className='text-sm text-warm-slate leading-relaxed'>{vulvarCancerFollowUp}</p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Prevention */}
                    <div>
                        <RevealText as="h2" text="Prevention" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {vulvarCancerPrevention.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                                    <ShieldCheck size={18} className='text-sage-500 shrink-0 mt-0.5' />
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