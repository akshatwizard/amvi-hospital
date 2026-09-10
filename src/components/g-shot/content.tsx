"use client"

import Link from 'next/link'
import { Check, AlertTriangle, ArrowUpRight, X } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import { stats } from '@/constants/stats'
import { cosmeticGynecologyNav } from '@/constants/cosmetic-gynecology-nav'
import {
    gShotIntro, gShotAboutProcedure, gShotHowItWorks, gShotConcerns, gShotRecovery,
    gShotIdealCandidate, gShotNotRecommended, gShotSideEffects, gShotPros, gShotCons, gShotQuickFacts,
} from '@/constants/g-shot'

export default function GShotContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper>
                <Reveal>
                    <p className='text-xs text-warm-slate'>
                        Written &amp; medically reviewed by <span className='text-rose-700'>Dr. Shaivalini Kamarapu</span>
                        <br />
                        MBBS · MS (Obstetrics &amp; Gynaecology) · Fellowship in Reproductive Medicine · 20+ years of clinical experience
                    </p>
                </Reveal>

                <div className='grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16'>
                    <div className='flex flex-col gap-16'>
                        <div>
                            <RevealText as="h2" text="What is the G-Shot?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            {gShotIntro.map((p, i) => (
                                <Reveal key={i} delay={0.1 + i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl mb-4 last:mb-0'>{p}</p>
                                </Reveal>
                            ))}
                        </div>

                        <div>
                            <RevealText as="h2" text="About the procedure" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            {gShotAboutProcedure.map((p, i) => (
                                <Reveal key={i} delay={0.1 + i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl mb-4 last:mb-0'>{p}</p>
                                </Reveal>
                            ))}
                        </div>

                        <div>
                            <RevealText as="h2" text="How does the G-Shot work?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            <Reveal delay={0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl'>{gShotHowItWorks}</p>
                            </Reveal>
                        </div>

                        <div>
                            <RevealText as="h2" text="Concerns addressed" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                            <div className='flex flex-wrap gap-2.5'>
                                {gShotConcerns.map((item) => (
                                    <span key={item} className='inline-block text-sm text-plum-ink bg-rose-50 border border-rose-100 rounded-full px-5 py-2.5'>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <RevealText as="h2" text="Recovery" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            <Reveal delay={0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl'>{gShotRecovery}</p>
                            </Reveal>
                        </div>

                        <div className='grid sm:grid-cols-2 gap-8'>
                            <div>
                                <RevealText as="h2" text="Ideal candidate" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                                <Reveal delay={0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{gShotIdealCandidate}</p>
                                </Reveal>
                            </div>
                            <div>
                                <RevealText as="h2" text="Not recommended for" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                                <Reveal delay={0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{gShotNotRecommended}</p>
                                </Reveal>
                            </div>
                        </div>

                        <div>
                            <RevealText as="h2" text="Side effects" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                            <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                                {gShotSideEffects.map((item) => (
                                    <StaggerItem key={item}>
                                        <div className='flex items-start gap-2.5 p-4 rounded-card bg-plum-ink h-full'>
                                            <AlertTriangle size={14} className='text-rose-300 shrink-0 mt-0.5' />
                                            <p className='text-sm text-rose-100/80 leading-relaxed'>{item}</p>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>

                        <div className='grid sm:grid-cols-2 gap-8'>
                            <div>
                                <p className='font-serif text-xl text-plum-ink mb-4'>Pros</p>
                                <StaggerContainer className='flex flex-wrap gap-2.5'>
                                    {gShotPros.map((item) => (
                                        <StaggerItem key={item}>
                                            <span className='inline-flex items-center gap-2 text-sm text-plum-ink bg-sage-50 border border-sage-100 rounded-full px-4 py-2'>
                                                <Check size={13} className='text-sage-600' />
                                                {item}
                                            </span>
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>
                            </div>
                            <div>
                                <p className='font-serif text-xl text-plum-ink mb-4'>Cons</p>
                                <StaggerContainer className='flex flex-wrap gap-2.5'>
                                    {gShotCons.map((item) => (
                                        <StaggerItem key={item}>
                                            <span className='inline-flex items-center gap-2 text-sm text-plum-ink bg-rose-50 border border-rose-100 rounded-full px-4 py-2'>
                                                <X size={13} className='text-rose-500' />
                                                {item}
                                            </span>
                                        </StaggerItem>
                                    ))}
                                </StaggerContainer>
                            </div>
                        </div>
                    </div>

                    <div className='lg:sticky lg:top-24 lg:self-start flex flex-col gap-6'>
                        <div className='rounded-card bg-rose-50/60 border border-rose-100 p-6'>
                            <p className='text-xs text-sage-500 mb-4'>At a glance</p>
                            <div className='flex flex-col gap-4'>
                                {gShotQuickFacts.map((f) => (
                                    <div key={f.label} className='flex flex-col gap-1'>
                                        <p className='text-xs text-warm-slate'>{f.label}</p>
                                        <p className='font-serif text-sm text-plum-ink'>{f.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='rounded-card bg-plum-ink p-6'>
                            <StaggerContainer className='grid grid-cols-3 gap-3'>
                                {stats.map((stat) => (
                                    <StaggerItem key={stat.label} className='text-center'>
                                        <p className='font-serif text-lg text-petal-white'>
                                            <Counter value={stat.value} suffix={stat.suffix} />
                                        </p>
                                        <p className='text-[10px] text-rose-100/70 mt-1'>{stat.label}</p>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>
                </div>

                <div className='pt-4 border-t border-rose-100'>
                    <p className='text-xs text-sage-500 mb-6'>Explore Cosmetic Gynecology</p>
                    <StaggerContainer className='grid sm:grid-cols-2 md:grid-cols-3 gap-3'>
                        {cosmeticGynecologyNav.map((item) => (
                            <StaggerItem key={item.href}>
                                <Link
                                    href={item.href}
                                    className='group flex items-center justify-between gap-3 p-4 rounded-card bg-rose-50/60 border border-rose-100 hover:bg-rose-100 transition-colors'
                                >
                                    <p className='text-sm text-plum-ink'>{item.name}</p>
                                    <ArrowUpRight size={16} className='shrink-0 text-warm-slate group-hover:text-rose-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all' />
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </Wrapper>
        </Section>
    )
}