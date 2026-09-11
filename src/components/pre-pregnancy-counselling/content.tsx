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
    ppcIntro, ppcSessionIntro, ppcTopics, ppcDoctorRecommendations,
    ppcWhyConsiderIntro, ppcReasons,
} from '@/constants/pre-pregnancy-counselling'

export default function PrePregnancyCounsellingContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={maternityConditionNav} category='Maternity' />

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
                        <RevealText as="h2" text="What is pre-pregnancy counselling?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4'>
                            {ppcIntro.map((p, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* What happens during session */}
                    <div>
                        <RevealText as="h2" text="What happens during a pre-pregnancy counselling session?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-8'>{ppcSessionIntro}</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {ppcTopics.map((topic) => (
                                <StaggerItem key={topic.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                    <div>
                                        <p className='font-serif text-base text-plum-ink'>{topic.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed mt-1'>{topic.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Doctor may also recommend */}
                    <div>
                        <RevealText as="h2" text="Your doctor may also recommend" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <StaggerContainer className='flex flex-col'>
                            {ppcDoctorRecommendations.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Why consider */}
                    <div>
                        <RevealText as="h2" text="Why consider preconception counselling?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-6'>{ppcWhyConsiderIntro}</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {ppcReasons.map((item) => (
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