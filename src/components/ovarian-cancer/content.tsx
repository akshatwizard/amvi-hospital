"use client"

import Image from 'next/image'
import { AlertTriangle } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import { stats } from '@/constants/stats'
import { cancersConditionNav } from '@/constants/gynaecology-nav'
import {
    ovarianCancerIntro, ovarianCancerTypesIntro, ovarianCancerTypes,
    ovarianCancerSymptomsIntro, ovarianCancerSymptoms,
    ovarianCancerCausesIntro, ovarianCancerRiskFactors,
    ovarianCancerTreatmentIntro, ovarianCancerTreatments, ovarianCancerTreatmentOutro,
} from '@/constants/ovarian-cancer'

export default function OvarianCancerContent() {
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
                    <div className='grid md:grid-cols-2 gap-10 items-center'>
                        <div>
                            <RevealText as="h2" text="What is ovarian cancer?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            <Reveal>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{ovarianCancerIntro}</p>
                            </Reveal>
                        </div>
                        <Reveal delay={0.15} className='relative w-full aspect-4/3 rounded-card overflow-hidden'>
                            <Image src="/images/gynaecology/ovarian-cancer-overview.jpeg" alt="Ovarian cancer overview" fill sizes="(min-width: 768px) 480px, 90vw" className='object-cover' />
                        </Reveal>
                    </div>

                    {/* Types */}
                    <div>
                        <RevealText as="h2" text="What are the types of ovarian cancer?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{ovarianCancerTypesIntro}</p>
                        </Reveal>
                        <StaggerContainer className='grid sm:grid-cols-3 gap-6'>
                            {ovarianCancerTypes.map((type) => (
                                <StaggerItem key={type.title}>
                                    <div className='flex flex-col gap-2 p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                        <p className='font-serif text-base text-plum-ink'>{type.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed'>{type.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Symptoms */}
                    <div>
                        <RevealText as="h2" text="What are the symptoms of ovarian cancer?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{ovarianCancerSymptomsIntro}</p>
                        </Reveal>
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {ovarianCancerSymptoms.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <AlertTriangle size={16} className='text-sage-500 shrink-0 mt-0.5' />
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Causes / risk factors */}
                    <div>
                        <RevealText as="h2" text="Causes of ovarian cancer" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{ovarianCancerCausesIntro}</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {ovarianCancerRiskFactors.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                                    <AlertTriangle size={16} className='text-sage-500 shrink-0 mt-0.5' />
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Treatment */}
                    <div>
                        <RevealText as="h2" text="What are the treatment options for ovarian cancer?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{ovarianCancerTreatmentIntro}</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {ovarianCancerTreatments.map((t) => (
                                <StaggerItem key={t.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                    <div>
                                        <p className='font-serif text-base text-plum-ink'>{t.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed mt-1'>{t.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6'>{ovarianCancerTreatmentOutro}</p>
                        </Reveal>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}