"use client"

import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import { stats } from '@/constants/stats'
import { infertilityConditionNav } from '@/constants/gynaecology-nav'
import {
    stemCellIntro, stemCellDefinition, stemCellSource, stemCellTypes,
    stemCellTechniques, stemCellUsesIntro, stemCellUses, stemCellPofRole,
} from '@/constants/stem-cell-ivf'

export default function StemCellIvfContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={infertilityConditionNav} category='Infertility'/>

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
                        <RevealText as="h2" text="Stem cell IVF treatment — a regenerative medicine approach" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{stemCellIntro}</p>
                        </Reveal>
                    </div>

                    {/* What are stem cells */}
                    <div>
                        <RevealText as="h2" text="What are stem cells?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm text-warm-slate leading-relaxed mb-4'>Stem cells are cells which have:</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col mb-6'>
                            {stemCellDefinition.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed'>{stemCellSource}</p>
                        </Reveal>
                    </div>

                    {/* Types & techniques */}
                    <div className='grid md:grid-cols-2 gap-10'>
                        <div>
                            <p className='font-serif text-lg text-plum-ink mb-4'>Types of stem cells</p>
                            <StaggerContainer className='flex flex-col'>
                                {stemCellTypes.map((item) => (
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
                            <p className='font-serif text-lg text-plum-ink mb-4'>Techniques used in stem cell treatment</p>
                            <StaggerContainer className='flex flex-col'>
                                {stemCellTechniques.map((item) => (
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

                    {/* Uses */}
                    <div>
                        <RevealText as="h2" text="What are the uses of stem cell therapy in gynaecology?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm text-warm-slate leading-relaxed mb-6'>{stemCellUsesIntro}</p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col'>
                            {stemCellUses.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Role in POF */}
                    <div>
                        <RevealText as="h2" text="What is the role of stem cell therapy in premature ovarian failure?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4'>
                            {stemCellPofRole.map((p, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}