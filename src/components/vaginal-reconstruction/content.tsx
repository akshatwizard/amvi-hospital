"use client"

import Link from 'next/link'
import { Check, AlertTriangle, ArrowUpRight } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import { stats } from '@/constants/stats'
import { cosmeticGynecologyNav } from '@/constants/cosmetic-gynecology-nav'
import {
    vaginalReconIntro, vaginalReconGraftOptions, vaginalReconAlsoHelpsWith, vaginalReconAdvantages,
    vaginalReconRejuvenationTypes, vaginalReconRecovery, vaginalReconBenefits, vaginalReconRisks, vaginalReconQuickFacts,
} from '@/constants/vaginal-reconstruction'

export default function VaginalReconstructionContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper>
                {/* Byline */}
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
                            <RevealText as="h2" text="What is vaginal reconstruction?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            {vaginalReconIntro.map((p, i) => (
                                <Reveal key={i} delay={0.1 + i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl'>{p}</p>
                                </Reveal>
                            ))}
                        </div>

                        <div>
                            <RevealText as="h2" text="How is it done?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            <Reveal delay={0.1}>
                                <p className='text-sm text-warm-slate mb-6 max-w-xl'>
                                    A cosmetic/plastic surgeon uses skin and muscle from another part of the body to
                                    create a new vagina, using one of the following approaches:
                                </p>
                            </Reveal>
                            <StaggerContainer className='flex flex-col'>
                                {vaginalReconGraftOptions.map((item) => (
                                    <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                                        <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                            <Check size={12} strokeWidth={3} />
                                        </span>
                                        <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>

                        <div className='grid sm:grid-cols-2 gap-6'>
                            <div className='p-6 rounded-card bg-rose-50/60 border border-rose-100'>
                                <p className='font-serif text-base text-plum-ink mb-3'>Also helpful for</p>
                                <div className='flex flex-col gap-2'>
                                    {vaginalReconAlsoHelpsWith.map((item) => (
                                        <p key={item} className='text-sm text-warm-slate leading-relaxed'>{item}</p>
                                    ))}
                                </div>
                            </div>
                            <div className='p-6 rounded-card bg-sage-50 border border-sage-100'>
                                <p className='font-serif text-base text-plum-ink mb-3'>Advantages</p>
                                <div className='flex flex-col gap-2'>
                                    {vaginalReconAdvantages.map((item) => (
                                        <p key={item} className='text-sm text-warm-slate leading-relaxed'>{item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <RevealText as="h2" text="Inner vs. outer vaginal rejuvenation" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                            <div className='grid sm:grid-cols-2 gap-6'>
                                {vaginalReconRejuvenationTypes.map((type) => (
                                    <Reveal key={type.title}>
                                        <div className='p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full flex flex-col gap-4'>
                                            <div>
                                                <p className='font-serif text-lg text-plum-ink mb-2'>{type.title}</p>
                                                <p className='text-sm text-warm-slate leading-relaxed'>{type.description}</p>
                                            </div>
                                            <div className='flex flex-col gap-1 mt-auto pt-3 border-t border-rose-100'>
                                                {type.links.map((link) => (
                                                    <Link
                                                        key={link.href}
                                                        href={link.href}
                                                        className='inline-flex items-center gap-1 text-sm text-rose-700 hover:text-rose-800 transition-colors w-fit'
                                                    >
                                                        {link.name}
                                                        <ArrowUpRight size={14} />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>

                        <div>
                            <RevealText as="h2" text="Recovery timeline" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                            <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                                {vaginalReconRecovery.map((item) => (
                                    <StaggerItem key={item} className='flex items-start gap-3 py-3 border-b border-rose-100 last:border-0'>
                                        <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                            <Check size={12} strokeWidth={3} />
                                        </span>
                                        <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>

                        <div>
                            <RevealText as="h2" text="Benefits patients report" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                            <StaggerContainer className='flex flex-wrap gap-2.5'>
                                {vaginalReconBenefits.map((item) => (
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
                            <RevealText as="h2" text="Potential risks" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                            <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                                {vaginalReconRisks.map((item) => (
                                    <StaggerItem key={item}>
                                        <div className='flex items-start gap-2.5 p-5 rounded-card bg-plum-ink h-full'>
                                            <AlertTriangle size={14} className='text-rose-300 shrink-0 mt-0.5' />
                                            <p className='text-sm text-rose-100/80 leading-relaxed'>{item}</p>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>
                    </div>

                    {/* Sticky quick facts card — replaces a nav sidebar */}
                    <div className='lg:sticky lg:top-24 lg:self-start flex flex-col gap-6'>
                        <div className='rounded-card bg-rose-50/60 border border-rose-100 p-6'>
                            <p className='text-xs text-sage-500 mb-4'>At a glance</p>
                            <div className='flex flex-col gap-4'>
                                {vaginalReconQuickFacts.map((f) => (
                                    <div key={f.label} className='flex items-center justify-between'>
                                        <p className='text-sm text-warm-slate'>{f.label}</p>
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

                {/* Browse other procedures — bottom nav grid instead of a top sidebar */}
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