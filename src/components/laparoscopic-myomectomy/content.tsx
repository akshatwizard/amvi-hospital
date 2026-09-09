"use client"

import { Check, AlertTriangle } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ProcedureNav from '@/shared/procedure-nav'
import { stats } from '@/constants/stats'
import { laparoscopyNav } from '@/constants/laparoscopy-nav'
import {
    myomectomyIntro, myomectomyIndications, myomectomyTesting, myomectomyBenefits,
    myomectomySteps, myomectomyRecovery, myomectomyRiskNote, myomectomyTestimonials,
} from '@/constants/laparoscopic-myomectomy'

export default function LaparoscopicMyomectomyContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='gap-16!'>
                <ProcedureNav links={laparoscopyNav} category='Laparoscopic Surgery' />

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

                <div className='max-w-2xl'>
                    <RevealText as="h2" text="What is laparoscopic myomectomy?" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                    <div className='flex flex-col gap-4 mt-4'>
                        {myomectomyIntro.map((p, i) => (
                            <Reveal key={i} delay={0.1 + i * 0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <div>
                    <RevealText as="h2" text="When is myomectomy recommended?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='flex flex-wrap gap-2.5'>
                        {myomectomyIndications.map((item) => (
                            <StaggerItem key={item}>
                                <span className='inline-block text-sm text-plum-ink bg-rose-50 border border-rose-100 rounded-full px-5 py-2.5'>
                                    {item}
                                </span>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <div>
                    <RevealText as="h2" text="Pre-surgical testing" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {myomectomyTesting.map((t) => (
                            <StaggerItem key={t.name}>
                                <div className='p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full flex flex-col gap-2'>
                                    <p className='font-serif text-base text-plum-ink'>{t.name}</p>
                                    <p className='text-sm text-warm-slate leading-relaxed'>{t.description}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <div>
                    <RevealText as="h2" text="Why choose laparoscopic myomectomy?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='flex flex-wrap gap-2.5'>
                        {myomectomyBenefits.map((item) => (
                            <StaggerItem key={item}>
                                <span className='inline-flex items-center gap-2 text-sm text-plum-ink bg-sage-50 border border-sage-100 rounded-full px-4 py-2'>
                                    <Check size={13} className='text-sage-600' />
                                    {item}
                                </span>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <div className='rounded-card bg-plum-ink p-8 md:p-10 -mx-5 md:mx-0'>
                    <RevealText as="h2" text="Step-by-step procedure" className='font-serif text-2xl md:text-3xl text-petal-white mb-8' />
                    <div className='relative'>
                        <div className='absolute left-4 top-2 bottom-2 w-px bg-rose-800' />
                        <StaggerContainer className='flex flex-col gap-8'>
                            {myomectomySteps.map((step, i) => (
                                <StaggerItem key={step.title} className='relative flex gap-6'>
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

                <div>
                    <RevealText as="h2" text="Recovery after surgery" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {myomectomyRecovery.map((item) => (
                            <StaggerItem key={item.title}>
                                <div className='p-5 rounded-card bg-sage-50 border border-sage-100 h-full'>
                                    <p className='font-serif text-sm text-plum-ink mb-1.5'>{item.title}</p>
                                    <p className='text-sm text-warm-slate leading-relaxed'>{item.description}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <Reveal>
                    <div className='flex items-start gap-3 p-6 rounded-card bg-rose-50 border border-rose-100'>
                        <AlertTriangle size={18} className='text-rose-500 shrink-0 mt-0.5' />
                        <p className='text-sm text-warm-slate leading-relaxed'>{myomectomyRiskNote}</p>
                    </div>
                </Reveal>

                <div>
                    <RevealText as="h2" text="Testimonials" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                    <StaggerContainer className='grid sm:grid-cols-2 gap-6'>
                        {myomectomyTestimonials.map((t) => (
                            <StaggerItem key={t.name}>
                                <div className='flex flex-col gap-4 p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                    <p className='text-sm text-warm-slate leading-relaxed'>&ldquo;{t.quote}&rdquo;</p>
                                    <p className='text-sm text-rose-700 mt-auto'>{t.name}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </Wrapper>
        </Section>
    )
}