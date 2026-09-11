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
    ultrasoundIntro, ultrasoundBasics, ultrasoundImportance, ultrasoundReasons,
    ultrasound3d4dWhy, ultrasoundTypes, ultrasound3dBenefits, ultrasound4dBenefits,
} from '@/constants/3d-4d-ultrasound'

export default function UltrasoundContent() {
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
                        <RevealText as="h2" text="3D/4D ultrasound — real-time imaging of the fetus" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4 mb-4'>
                            {ultrasoundIntro.map((p, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                        <Reveal delay={0.2}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-4'>{ultrasoundBasics}</p>
                        </Reveal>
                        <Reveal delay={0.25}>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{ultrasoundImportance}</p>
                        </Reveal>
                    </div>

                    {/* Reasons */}
                    <div>
                        <RevealText as="h2" text="Reasons to get ultrasounds during pregnancy" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {ultrasoundReasons.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Why 3D/4D specifically */}
                    <div>
                        <RevealText as="h2" text="Why 3D and 4D sonograms are performed during pregnancy" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4'>
                            {ultrasound3d4dWhy.map((p, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Types comparison */}
                    <div>
                        <RevealText as="h2" text="What's the difference between 2D, Doppler, 3D and 4D ultrasounds?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {ultrasoundTypes.map((type) => (
                                <StaggerItem key={type.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                    <div>
                                        <p className='font-serif text-base text-plum-ink'>{type.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed mt-1'>{type.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Benefits */}
                    <div className='grid md:grid-cols-2 gap-10'>
                        <div>
                            <p className='font-serif text-lg text-plum-ink mb-4'>Benefits of 3D scan</p>
                            <StaggerContainer className='flex flex-col'>
                                {ultrasound3dBenefits.map((item) => (
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
                            <p className='font-serif text-lg text-plum-ink mb-4'>Benefits of 4D scan</p>
                            <StaggerContainer className='flex flex-col'>
                                {ultrasound4dBenefits.map((item) => (
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
                </div>
            </Wrapper>
        </Section>
    )
}