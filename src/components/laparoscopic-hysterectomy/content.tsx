"use client"

import { Check, AlertTriangle } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ProcedureNav from '@/shared/procedure-nav'
import ExpandableList from '@/shared/expandable-list'
import FaqAccordion from '@/shared/faq-accordion'
import { stats } from '@/constants/stats'
import { laparoscopyNav } from '@/constants/laparoscopy-nav'
import {
    hysterectomyIntro, hysterectomyIndications, hysterectomyTypes, hysterectomyMethods,
    hysterectomyBenefits, hysterectomySteps, hysterectomyRecovery, hysterectomyRisks,
    hysterectomyTestimonials, hysterectomyFaqs,
} from '@/constants/laparoscopic-hysterectomy'

export default function LaparoscopicHysterectomyContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='gap-16!'>
                <ProcedureNav links={laparoscopyNav} category='Laparoscopic Surgery' />

                {/* Byline + stat chips */}
                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6'>
                    <Reveal>
                        <p className='text-xs text-warm-slate max-w-sm'>
                            Written &amp; medically reviewed by <span className='text-rose-700'>Dr. Shaivalini Kamarapu</span>
                            <br />
                            MBBS · MS (Obstetrics &amp; Gynaecology) · Fellowship in Reproductive Medicine · 20+ years of clinical experience
                        </p>
                    </Reveal>
                    <div className='flex gap-6'>
                        {stats.map((stat) => (
                            <div key={stat.label} className='text-center'>
                                <p className='font-serif text-xl text-rose-700'>
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </p>
                                <p className='text-[11px] text-warm-slate mt-0.5'>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Intro */}
                <div className='max-w-2xl'>
                    <RevealText as="h2" text="What is laparoscopic hysterectomy?" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                    <div className='flex flex-col gap-4 mt-4'>
                        {hysterectomyIntro.map((p, i) => (
                            <Reveal key={i} delay={0.1 + i * 0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* Indications — horizontal scroll chips */}
                <div>
                    <RevealText as="h2" text="When is hysterectomy recommended?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <div className='flex flex-wrap gap-3'>
                        {hysterectomyIndications.map((item) => (
                            <span
                                key={item}
                                className='shrink-0 text-sm text-plum-ink bg-rose-50 border border-rose-100 rounded-full px-5 py-2.5 whitespace-nowrap'
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Types — expandable numbered list */}
                <div>
                    <RevealText as="h2" text="Types of hysterectomy surgery" className='font-serif text-2xl md:text-3xl text-plum-ink mb-2' />
                    <Reveal delay={0.1}>
                        <p className='text-sm text-warm-slate mb-6 max-w-xl'>
                            The right type depends on your diagnosis, age, and long-term health considerations — tap
                            each to read more.
                        </p>
                    </Reveal>
                    <ExpandableList items={hysterectomyTypes} />
                </div>

                {/* Methods — horizontal scroll cards */}
                <div>
                    <RevealText as="h2" text="Surgical methods" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 '>
                        {hysterectomyMethods.map((m) => (
                            <div
                                key={m.name}
                                className='shrink-0 w-full p-6 rounded-card bg-rose-50/60 border border-rose-100 flex flex-col gap-2'
                            >
                                <p className='font-serif text-base text-plum-ink'>{m.name}</p>
                                <p className='text-sm text-warm-slate leading-relaxed'>{m.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits — pill cluster */}
                <div>
                    <RevealText as="h2" text="Benefits of the laparoscopic approach" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='flex flex-wrap gap-2.5'>
                        {hysterectomyBenefits.map((item) => (
                            <StaggerItem key={item}>
                                <span className='inline-flex items-center gap-2 text-sm text-plum-ink bg-sage-50 border border-sage-100 rounded-full px-4 py-2'>
                                    <Check size={13} className='text-sage-600' />
                                    {item}
                                </span>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* Procedure — vertical timeline, dark panel */}
                <div className='rounded-card bg-plum-ink p-8 md:p-10 -mx-5 md:mx-0'>
                    <RevealText as="h2" text="Step-by-step procedure" className='font-serif text-2xl md:text-3xl text-petal-white mb-8' />
                    <div className='relative'>
                        <div className='absolute left-4 top-2 bottom-2 w-px bg-rose-800' />
                        <StaggerContainer className='flex flex-col gap-8'>
                            {hysterectomySteps.map((step, i) => (
                                <StaggerItem key={step.title} className='relative flex gap-6 pl-0'>
                                    <span className='relative z-10 size-8 rounded-full bg-rose-700 text-petal-white font-serif text-xs flex items-center justify-center shrink-0'>
                                        {i + 1}
                                    </span>
                                    <div>
                                        <p className='font-serif text-base text-petal-white'>{step.title}</p>
                                        <p className='text-sm text-rose-100/70 leading-relaxed mt-1.5 max-w-xl'>{step.description}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>

                {/* Recovery & Risks — two panels */}
                <div className='grid md:grid-cols-2 gap-6'>
                    <div className='p-6 md:p-7 rounded-card bg-sage-50 border border-sage-100'>
                        <p className='font-serif text-lg text-plum-ink mb-4'>Recovery & aftercare</p>
                        <div className='flex flex-col gap-1'>
                            {hysterectomyRecovery.map((item) => (
                                <div key={item} className='flex items-start gap-2.5 py-2'>
                                    <Check size={14} className='text-sage-600 shrink-0 mt-0.5' />
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='p-6 md:p-7 rounded-card bg-rose-50 border border-rose-100'>
                        <p className='font-serif text-lg text-plum-ink mb-4'>Risks to be aware of</p>
                        <div className='flex flex-col gap-1'>
                            {hysterectomyRisks.map((item) => (
                                <div key={item} className='flex items-start gap-2.5 py-2'>
                                    <AlertTriangle size={14} className='text-rose-500 shrink-0 mt-0.5' />
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div>
                    <RevealText as="h2" text="Testimonials" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                    <StaggerContainer className='grid sm:grid-cols-2 gap-6'>
                        {hysterectomyTestimonials.map((t) => (
                            <StaggerItem key={t.name}>
                                <div className='flex flex-col gap-4 p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                    <p className='text-sm text-warm-slate leading-relaxed'>&ldquo;{t.quote}&rdquo;</p>
                                    <p className='text-sm text-rose-700 mt-auto'>{t.name}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                {/* FAQ */}
                <div>
                    <RevealText as="h2" text="FAQs related to laparoscopic hysterectomy" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                    <FaqAccordion items={hysterectomyFaqs} />
                </div>
            </Wrapper>
        </Section>
    )
}