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
    breastCancerIntro, breastCancerWhatIs, breastCancerOrigins,
    breastCancerSymptoms, breastCancerRiskFactors,
    breastCancerDiagnosisIntro, breastCancerDiagnosisTests,
    breastCancerTypesIntro, breastCancerTypeGroups,
    breastCancerSurgicalOptions, breastCancerRadiationIntro, breastCancerRadiationTechniques,
    breastCancerOtherTreatments, breastCancerTreatmentNote, breastCancerTreatmentFactors,
} from '@/constants/breast-cancer'

export default function BreastCancerContent() {
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
                        <RevealText as="h2" text="Breast Cancer Treatment — Comprehensive Breast Care" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4 mb-8'>
                            <Reveal>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{breastCancerIntro}</p>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{breastCancerWhatIs}</p>
                            </Reveal>
                        </div>
                        <p className='font-serif text-lg text-plum-ink mb-4'>Breast cancer usually begins from:</p>
                        <StaggerContainer className='grid sm:grid-cols-3 gap-6'>
                            {breastCancerOrigins.map((origin) => (
                                <StaggerItem key={origin.title}>
                                    <div className='flex flex-col gap-2 p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                        <p className='font-serif text-base text-plum-ink'>{origin.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed'>{origin.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Symptoms */}
                    <div>
                        <RevealText as="h2" text="Breast cancer signs & symptoms" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {breastCancerSymptoms.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Risk factors */}
                    <div>
                        <RevealText as="h2" text="Breast cancer risk factors" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {breastCancerRiskFactors.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <AlertTriangle size={16} className='text-sage-500 shrink-0 mt-0.5' />
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Diagnosis */}
                    <div>
                        <RevealText as="h2" text="How is breast cancer diagnosed?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{breastCancerDiagnosisIntro}</p>
                        </Reveal>
                        <StaggerContainer className='grid sm:grid-cols-2 gap-x-10 gap-y-1'>
                            {breastCancerDiagnosisTests.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-sage-50 text-sage-600 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Types */}
                    <div>
                        <RevealText as="h2" text="Breast cancer — types and subtypes" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{breastCancerTypesIntro}</p>
                        </Reveal>
                        <div className='grid md:grid-cols-2 gap-8'>
                            {breastCancerTypeGroups.map((group) => (
                                <div key={group.heading}>
                                    <p className='font-serif text-lg text-plum-ink mb-4'>{group.heading}</p>
                                    <StaggerContainer className='flex flex-col'>
                                        {group.items.map((item) => (
                                            <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                                <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                                    <Check size={12} strokeWidth={3} />
                                                </span>
                                                <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                            </StaggerItem>
                                        ))}
                                    </StaggerContainer>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Treatment */}
                    <div>
                        <RevealText as="h2" text="What are the possible treatments for breast cancer?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />

                        <p className='font-serif text-lg text-plum-ink mb-4'>Surgical process</p>
                        <StaggerContainer className='flex flex-col mb-8'>
                            {breastCancerSurgicalOptions.map((option) => (
                                <StaggerItem key={option.title} className='flex gap-5 py-4 border-b border-rose-100 last:border-0'>
                                    <div>
                                        <p className='font-serif text-base text-plum-ink'>{option.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed mt-1'>{option.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <p className='font-serif text-lg text-plum-ink mb-4'>Radiation therapy</p>
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-4'>{breastCancerRadiationIntro}</p>
                        </Reveal>
                        <ul className='flex flex-col gap-1.5 mb-8'>
                            {breastCancerRadiationTechniques.map((item) => (
                                <li key={item} className='flex items-start gap-2'>
                                    <Check size={14} strokeWidth={3} className='text-rose-500 shrink-0 mt-1' />
                                    <span className='text-sm text-warm-slate'>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <StaggerContainer className='grid sm:grid-cols-2 gap-6 mb-8'>
                            {breastCancerOtherTreatments.map((t) => (
                                <StaggerItem key={t.title}>
                                    <div className='flex flex-col gap-2 p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                        <p className='font-serif text-base text-plum-ink'>{t.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed'>{t.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <Reveal>
                            <p className='text-sm text-warm-slate leading-relaxed'>{breastCancerTreatmentNote}</p>
                        </Reveal>
                    </div>

                    {/* Factors affecting treatment */}
                    <div>
                        <RevealText as="h2" text="Factors affecting breast cancer treatment" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {breastCancerTreatmentFactors.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                                    <Check size={14} strokeWidth={3} className='text-rose-500 shrink-0 mt-1' />
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