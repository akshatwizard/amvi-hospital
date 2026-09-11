"use client"

import { Check, TriangleAlert, AlertTriangle } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import FaqAccordion from '@/shared/faq-accordion'
import { stats } from '@/constants/stats'
import { maternityConditionNav } from '@/constants/maternity-nav'
import {
    hrpRiskCategories, hrpEmergencySigns, hrpWarningSignsIntro, hrpWarningSigns,
    hrpManagementIntro, hrpConditions, hrpPreventionIntro, hrpPreventionFactors,
    hrpDiagnosisIntro, hrpDiagnosisTests, hrpTreatmentIntro, hrpTreatments,
} from '@/constants/high-risk-pregnancy'
import { hrpFaqs } from '@/constants/high-risk-pregnancy-faqs'

export default function HighRiskPregnancyContent() {
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
                        <RevealText as="h2" text="Understanding high-risk pregnancy factors" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-6'>
                                A critical part of managing high-risk pregnancies is ascertaining the cause, or the risk factors that could lead to complications. High-risk pregnancy factors broadly split into four categories:
                            </p>
                        </Reveal>
                        <div className='flex flex-wrap gap-2.5'>
                            {hrpRiskCategories.map((item) => (
                                <span key={item} className='inline-block text-sm text-plum-ink bg-rose-50 border border-rose-100 rounded-full px-5 py-2.5'>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Emergency signs */}
                    <div>
                        <RevealText as="h2" text="Signs and symptoms — get immediate medical attention" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <Reveal>
                            <p className='text-sm text-warm-slate leading-relaxed mb-6'>
                                When you learn you are pregnant, consult your doctor about the possibility of a high-risk pregnancy, and openly discuss any pre-existing medical conditions. If you experience any of the following, it is essential to get immediate medical attention:
                            </p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col mb-8'>
                            {hrpEmergencySigns.map((item) => (
                                <StaggerItem key={item}>
                                    <div className='flex items-start gap-3 p-4 rounded-card bg-rose-50 border border-rose-200 mb-3 last:mb-0'>
                                        <TriangleAlert size={18} className='text-rose-600 shrink-0 mt-0.5' />
                                        <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>

                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed mb-4'>{hrpWarningSignsIntro}</p>
                        </Reveal>
                        <StaggerContainer className='grid sm:grid-cols-2 gap-3'>
                            {hrpWarningSigns.map((item) => (
                                <StaggerItem key={item}>
                                    <div className='flex items-start gap-2.5 p-4 rounded-card bg-plum-ink h-full'>
                                        <AlertTriangle size={14} className='text-rose-300 shrink-0 mt-0.5' />
                                        <p className='text-sm text-rose-100/80 leading-relaxed'>{item}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Management / conditions */}
                    <div>
                        <RevealText as="h2" text="High-risk pregnancy management" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{hrpManagementIntro}</p>
                        </Reveal>
                        <p className='font-serif text-lg text-plum-ink mb-4'>Conditions classified as high-risk pregnancy</p>
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {hrpConditions.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Prevention */}
                    <div>
                        <RevealText as="h2" text="Prevention" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-6'>{hrpPreventionIntro}</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {hrpPreventionFactors.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-sage-50 text-sage-600 flex items-center justify-center'>
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
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-6'>{hrpDiagnosisIntro}</p>
                        </Reveal>
                        <StaggerContainer className='grid sm:grid-cols-3 gap-4'>
                            {hrpDiagnosisTests.map((item) => (
                                <StaggerItem key={item}>
                                    <div className='p-5 rounded-card bg-rose-50/60 border border-rose-100 text-center'>
                                        <p className='text-sm text-plum-ink'>{item}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Treatment */}
                    <div>
                        <RevealText as="h2" text="Treatment" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{hrpTreatmentIntro}</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {hrpTreatments.map((t) => (
                                <StaggerItem key={t.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                    <div>
                                        <p className='font-serif text-base text-plum-ink'>{t.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed mt-1'>{t.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* FAQ */}
                    <div>
                        <RevealText as="h2" text="FAQs related to high-risk pregnancy" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <FaqAccordion items={hrpFaqs} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}