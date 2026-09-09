"use client"

import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import { stats } from '@/constants/stats'
import { infertilityConditionNav } from '@/constants/gynaecology-nav'
import { infertilityIntro, infertilityWhenToSeekHelp, infertilityGroups } from '@/constants/infertility-overview'

export default function InfertilityContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={infertilityConditionNav} category='Infertility' />

                <div className='flex flex-col gap-20'>
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

                    <div>
                        <RevealText as="h2" text="Understanding infertility" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <div className='flex flex-col gap-4 max-w-2xl'>
                            {infertilityIntro.map((p, i) => (
                                <Reveal key={i} delay={0.1 + i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <div>
                        <RevealText as="h2" text="When should you seek help?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {infertilityWhenToSeekHelp.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    {infertilityGroups.map((group) => (
                        <div key={group.title}>
                            <RevealText as="h2" text={group.title} className='font-serif text-2xl md:text-3xl text-plum-ink' />
                            <Reveal delay={0.1}>
                                <p className='text-sm text-warm-slate mt-3 mb-8 max-w-xl'>{group.blurb}</p>
                            </Reveal>
                            <StaggerContainer className='flex flex-col'>
                                {group.links.map((item) => (
                                    <StaggerItem key={item.href}>
                                        <Link
                                            href={item.href}
                                            className='group flex items-center gap-6 py-5 border-b border-rose-100 last:border-0 hover:bg-rose-50/60 -mx-4 px-4 transition-colors rounded-card'
                                        >
                                            <div className='flex-1 min-w-0'>
                                                <p className='font-serif text-lg md:text-xl text-plum-ink group-hover:text-rose-700 transition-colors'>
                                                    {item.name}
                                                </p>
                                                <p className='text-sm text-warm-slate mt-1'>{item.description}</p>
                                            </div>
                                            <ArrowUpRight
                                                size={20}
                                                className='shrink-0 text-warm-slate group-hover:text-rose-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all'
                                            />
                                        </Link>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </Section>
    )
}