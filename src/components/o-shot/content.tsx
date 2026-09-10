"use client"

import Link from 'next/link'
import { Check, ArrowUpRight } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import { stats } from '@/constants/stats'
import { cosmeticGynecologyNav } from '@/constants/cosmetic-gynecology-nav'
import {
    oShotIntro, oShotHowItWorks, oShotResults, oShotWhatToExpect,
    oShotComplications, oShotQuickFacts,
} from '@/constants/o-shot'

export default function OShotContent() {
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
                            <RevealText as="h2" text="What is O-Shot®?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            <Reveal delay={0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl'>{oShotIntro}</p>
                            </Reveal>
                        </div>

                        <div>
                            <RevealText as="h2" text="How does the O-Shot® work?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            <Reveal delay={0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl'>{oShotHowItWorks}</p>
                            </Reveal>
                        </div>

                        <div>
                            <RevealText as="h2" text="O-Shot® treatment results" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                            <StaggerContainer className='flex flex-wrap gap-2.5'>
                                {oShotResults.map((item) => (
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
                            <RevealText as="h2" text="What to expect during an O-Shot" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            {oShotWhatToExpect.map((p, i) => (
                                <Reveal key={i} delay={0.1 + i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl mb-4 last:mb-0'>{p}</p>
                                </Reveal>
                            ))}
                        </div>

                        <div>
                            <RevealText as="h2" text="O-Shot complications" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            <Reveal delay={0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl'>{oShotComplications}</p>
                            </Reveal>
                        </div>
                    </div>

                    <div className='lg:sticky lg:top-24 lg:self-start flex flex-col gap-6'>
                        <div className='rounded-card bg-rose-50/60 border border-rose-100 p-6'>
                            <p className='text-xs text-sage-500 mb-4'>At a glance</p>
                            <div className='flex flex-col gap-4'>
                                {oShotQuickFacts.map((f) => (
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