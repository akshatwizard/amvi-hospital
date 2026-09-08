"use client"

import { Check, AlertTriangle } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import { stats } from '@/constants/stats'
import { cancersConditionNav } from '@/constants/gynaecology-nav'
import {
    endometrialCancerIntro, endometrialCancerSymptoms, endometrialCancerSymptomsNote,
    endometrialCancerRiskFactors, endometrialCancerRiskNote, endometrialCancerDiagnosis,
    endometrialCancerTreatmentFactors, endometrialCancerTreatmentOptions, endometrialCancerAfterTreatment,
} from '@/constants/endometrial-cancer'

export default function EndometrialCancerContent() {
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
                        <RevealText as="h2" text="What is endometrial cancer?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4'>
                            {endometrialCancerIntro.map((p, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Symptoms */}
                    <div>
                        <RevealText as="h2" text="Symptoms of endometrial cancer" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {endometrialCancerSymptoms.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6'>{endometrialCancerSymptomsNote}</p>
                        </Reveal>
                    </div>

                    {/* Risk factors */}
                    <div>
                        <RevealText as="h2" text="Risk factors" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {endometrialCancerRiskFactors.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <AlertTriangle size={16} className='text-sage-500 shrink-0 mt-0.5' />
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6'>{endometrialCancerRiskNote}</p>
                        </Reveal>
                    </div>

                    {/* Diagnosis */}
                    <div>
                        <RevealText as="h2" text="Diagnosis" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {endometrialCancerDiagnosis.map((step, i) => (
                                <StaggerItem key={step.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                    <span className='font-serif text-sm text-sage-500 shrink-0 w-6'>{String(i + 1).padStart(2, "0")}</span>
                                    <div>
                                        <p className='font-serif text-base text-plum-ink'>{step.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed mt-1'>{step.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Treatment */}
                    <div>
                        <RevealText as="h2" text="Treatment" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-4'>
                                The kind of treatment recommended will depend on:
                            </p>
                        </Reveal>
                        <ul className='flex flex-col gap-1.5 mb-8'>
                            {endometrialCancerTreatmentFactors.map((item) => (
                                <li key={item} className='flex items-start gap-2'>
                                    <Check size={14} strokeWidth={3} className='text-rose-500 shrink-0 mt-1' />
                                    <span className='text-sm text-warm-slate'>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <p className='font-serif text-lg text-plum-ink mb-4'>Treatment options</p>
                        <StaggerContainer className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8'>
                            {endometrialCancerTreatmentOptions.map((option) => (
                                <StaggerItem key={option}>
                                    <div className='p-4 rounded-card bg-rose-50/60 border border-rose-100 text-center'>
                                        <p className='text-sm text-plum-ink'>{option}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <Reveal delay={0.1}>
                            <div className='p-6 rounded-card bg-sage-50 border border-sage-100'>
                                <p className='font-serif text-lg text-plum-ink mb-2'>After treatment</p>
                                <p className='text-sm text-warm-slate leading-relaxed'>{endometrialCancerAfterTreatment}</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}