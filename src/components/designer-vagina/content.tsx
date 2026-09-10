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
    designerVaginaIntro, designerVaginaIncludes, designerVaginaPurpose, designerVaginaMisnomer,
    vulvaGlossary, designerVaginaAim, labiaplastyIntro, labiaplastyTechnique,
    labiaplastyCombinedNote, labiaplastyLaserNote, hymenoplastyIntro, hymenoplastyTypes,
    designerVaginaReasons, designerVaginaBenefits, designerVaginaCostNote, designerVaginaQuickFacts,
} from '@/constants/designer-vagina'

export default function DesignerVaginaContent() {
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
                            <RevealText as="h2" text="Designer vagina — an overview" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            {designerVaginaIntro.map((p, i) => (
                                <Reveal key={i} delay={0.1 + i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl mb-4'>{p}</p>
                                </Reveal>
                            ))}
                            <div className='flex flex-wrap gap-2.5 mb-4'>
                                {designerVaginaIncludes.map((item) => (
                                    <span key={item} className='inline-block text-sm text-plum-ink bg-rose-50 border border-rose-100 rounded-full px-5 py-2.5'>
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <Reveal delay={0.2}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl'>{designerVaginaPurpose}</p>
                            </Reveal>
                        </div>

                        <div>
                            <RevealText as="h2" text="What is designer vaginal rejuvenation?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            {designerVaginaMisnomer.map((p, i) => (
                                <Reveal key={i} delay={0.1 + i * 0.1}>
                                    <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl mb-6'>{p}</p>
                                </Reveal>
                            ))}
                            <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                                {vulvaGlossary.map((term) => (
                                    <StaggerItem key={term.title}>
                                        <div className='p-5 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                            <p className='font-serif text-base text-plum-ink mb-1'>{term.title}</p>
                                            <p className='text-sm text-warm-slate leading-relaxed'>{term.description}</p>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                            <Reveal delay={0.15}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl mt-6'>{designerVaginaAim}</p>
                            </Reveal>
                        </div>

                        <div>
                            <RevealText as="h2" text="Labiaplasty" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            <Reveal>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl mb-4'>{labiaplastyIntro}</p>
                            </Reveal>
                            <p className='font-serif text-lg text-plum-ink mb-3'>Technique</p>
                            <Reveal delay={0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl mb-4'>{labiaplastyTechnique}</p>
                            </Reveal>
                            <Reveal delay={0.15}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl mb-4'>{labiaplastyCombinedNote}</p>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl'>{labiaplastyLaserNote}</p>
                            </Reveal>
                        </div>

                        <div>
                            <RevealText as="h2" text="Hymenoplasty" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            <Reveal>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl mb-8'>{hymenoplastyIntro}</p>
                            </Reveal>
                            <StaggerContainer className='flex flex-col'>
                                {hymenoplastyTypes.map((type) => (
                                    <StaggerItem key={type.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                        <div>
                                            <p className='font-serif text-base text-plum-ink'>{type.title}</p>
                                            <p className='text-sm text-warm-slate leading-relaxed mt-1'>{type.description}</p>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                        </div>

                        <div>
                            <RevealText as="h2" text="Reasons for designer vaginal rejuvenation" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            <Reveal>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl'>{designerVaginaReasons}</p>
                            </Reveal>
                        </div>

                        <div>
                            <RevealText as="h2" text="Benefits" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                            <StaggerContainer className='flex flex-wrap gap-2.5'>
                                {designerVaginaBenefits.map((item) => (
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
                            <RevealText as="h2" text="Cost" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                            <Reveal>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-xl'>{designerVaginaCostNote}</p>
                            </Reveal>
                        </div>
                    </div>

                    <div className='lg:sticky lg:top-24 lg:self-start flex flex-col gap-6'>
                        <div className='rounded-card bg-rose-50/60 border border-rose-100 p-6'>
                            <p className='text-xs text-sage-500 mb-4'>At a glance</p>
                            <div className='flex flex-col gap-4'>
                                {designerVaginaQuickFacts.map((f) => (
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