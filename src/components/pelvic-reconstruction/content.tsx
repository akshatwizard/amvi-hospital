"use client"

import { Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import { stats } from '@/constants/stats'
import { urogynecologyConditionNav } from '@/constants/gynaecology-nav'
import {
    pelvicReconstructionIntro, pelvicReconstructionContext, pelvicReconstructionApproachNote,
    pelvicNonSurgical, pelvicSurgicalOptions, pelvicRoboticNote,
    pelvicReconstructiveTypes, pelvicRecoveryNote,
} from '@/constants/pelvic-reconstruction'

export default function PelvicReconstructionContent() {
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
                        <RevealText as="h2" text="What is pelvic reconstruction?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4'>
                            <Reveal>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{pelvicReconstructionIntro}</p>
                            </Reveal>
                            <Reveal delay={0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{pelvicReconstructionContext}</p>
                            </Reveal>
                        </div>
                    </div>

                    {/* Choosing an approach */}
                    <div>
                        <RevealText as="h2" text="Choosing between non-surgical and surgical care" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-3'>
                            {pelvicReconstructionApproachNote.map((p, i) => (
                                <Reveal key={i} delay={i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Non-surgical */}
                    <div>
                        <RevealText as="h2" text="Non-surgical treatments" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid sm:grid-cols-3 gap-6'>
                            {pelvicNonSurgical.map((item) => (
                                <StaggerItem key={item.title}>
                                    <div className='flex flex-col gap-2 p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                        <p className='font-serif text-base text-plum-ink'>{item.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed'>{item.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Surgical */}
                    <div>
                        <RevealText as="h2" text="Surgical treatment" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col mb-8'>
                            {pelvicSurgicalOptions.map((item) => (
                                <StaggerItem key={item.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                    <div>
                                        <p className='font-serif text-base text-plum-ink'>{item.title}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed mt-1'>{item.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.1}>
                            <p className='text-sm text-warm-slate leading-relaxed mb-8'>{pelvicRoboticNote}</p>
                        </Reveal>

                        <p className='font-serif text-lg text-plum-ink mb-4'>Types of reconstructive surgery</p>
                        <StaggerContainer className='flex flex-col'>
                            {pelvicReconstructiveTypes.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Recovery */}
                    <div>
                        <RevealText as="h2" text="What to expect after surgery" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <div className='p-6 rounded-card bg-sage-50 border border-sage-100'>
                                <p className='text-sm text-warm-slate leading-relaxed'>{pelvicRecoveryNote}</p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}