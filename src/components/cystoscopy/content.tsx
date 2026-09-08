"use client"

import { Check, TriangleAlert } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import { stats } from '@/constants/stats'
import { urogynecologyConditionNav } from '@/constants/gynaecology-nav'
import {
    cystoscopyIntro, cystoscopyReasons, cystoscopyRisks,
    cystoscopyWarningSigns, cystoscopyProcedure,
} from '@/constants/cystoscopy'

export default function CystoscopyContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={urogynecologyConditionNav} />

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
                        <RevealText as="h2" text="What is cystoscopy?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{cystoscopyIntro}</p>
                        </Reveal>
                    </div>

                    {/* Why you need it */}
                    <div>
                        <RevealText as="h2" text="Why do you need a cystoscopy?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <div className='grid md:grid-cols-3 gap-8'>
                            {cystoscopyReasons.map((group) => (
                                <div key={group.heading}>
                                    <p className='font-serif text-base text-plum-ink mb-3'>{group.heading}</p>
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

                    {/* Risks */}
                    <div>
                        <RevealText as="h2" text="Cystoscopy carries a risk of complications, including" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid sm:grid-cols-3 gap-4'>
                            {cystoscopyRisks.map((item) => (
                                <StaggerItem key={item}>
                                    <div className='p-5 rounded-card bg-rose-50/60 border border-rose-100 text-center'>
                                        <p className='text-sm text-plum-ink'>{item}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Warning signs — genuine safety content, not a booking CTA */}
                    <div>
                        <RevealText as="h2" text="Signs and symptoms of a complication" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <Reveal>
                            <p className='text-sm md:text-base text-warm-slate leading-relaxed mb-6'>
                                Contact your doctor promptly if you experience any of the following after the procedure:
                            </p>
                        </Reveal>
                        <StaggerContainer className='flex flex-col gap-3'>
                            {cystoscopyWarningSigns.map((item) => (
                                <StaggerItem key={item}>
                                    <div className='flex items-start gap-3 p-4 rounded-card bg-rose-50 border border-rose-200'>
                                        <TriangleAlert size={18} className='text-rose-600 shrink-0 mt-0.5' />
                                        <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {/* Procedure */}
                    <div>
                        <RevealText as="h2" text="How is the cystoscopy procedure done?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4'>
                            {cystoscopyProcedure.map((p, i) => (
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