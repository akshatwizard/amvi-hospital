"use client"

import { Check, AlertTriangle } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import IconItemGrid from '@/shared/icon-item-grid'
import { stats } from '@/constants/stats'
import { cancersConditionNav } from '@/constants/gynaecology-nav'
import {
    cervicalCancerIntro, cervicalCancerSymptoms, cervicalCancerSymptomsNote,
    cervicalCancerRiskFactors, cervicalCancerDiagnosisIntro, cervicalCancerDiagnosisMethods,
    cervicalCancerStages, cervicalCancerTreatmentIntro, cervicalCancerCareTeam,
} from '@/constants/cervical-cancer'

export default function CervicalCancerContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={cancersConditionNav} />

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
                        <RevealText as="h2" text="What is cervical cancer?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{cervicalCancerIntro}</p>
                        </Reveal>
                    </div>

                    {/* Symptoms */}
                    <div>
                        <RevealText as="h2" text="Symptoms of cervical cancer" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {cervicalCancerSymptoms.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6'>{cervicalCancerSymptomsNote}</p>
                        </Reveal>
                    </div>

                    {/* Risk factors */}
                    <div>
                        <RevealText as="h2" text="Risk factors" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {cervicalCancerRiskFactors.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <AlertTriangle size={16} className='text-sage-500 shrink-0 mt-0.5' />
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Diagnosis */}
                    <div>
                        <RevealText as="h2" text="Diagnosis of cervical cancer" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{cervicalCancerDiagnosisIntro}</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {cervicalCancerDiagnosisMethods.map((method) => (
                                <StaggerItem key={method.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                    <div>
                                        <p className='font-serif text-base text-plum-ink'>{method.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed mt-1'>{method.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Stages */}
                    <div>
                        <RevealText as="h2" text="Stages of cervical cancer" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {cervicalCancerStages.map((stage) => (
                                <StaggerItem key={stage.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                    <span className='font-serif text-sm text-rose-700 shrink-0 w-16'>{stage.title}</span>
                                    <p className='text-sm text-warm-slate leading-relaxed'>{stage.description}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Treatment */}
                    <div>
                        <RevealText as="h2" text="Treatment options" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{cervicalCancerTreatmentIntro}</p>
                        </Reveal>
                        <IconItemGrid items={cervicalCancerCareTeam} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}