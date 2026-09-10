"use client"

import { AlertTriangle, PhoneCall } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ProcedureNav from '@/shared/procedure-nav'
import { stats } from '@/constants/stats'
import { laparoscopyNav } from '@/constants/laparoscopy-nav'
import {
    diagnosticLapIntro, diagnosticLapReasons, diagnosticLapPreOpTests, diagnosticLapAnesthesia,
    diagnosticLapSteps, diagnosticLapComplications, diagnosticLapConversionNote, diagnosticLapWarningSigns,
} from '@/constants/diagnostic-laparoscopy'

export default function DiagnosticLaparoscopyContent() {
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
                    <RevealText as="h2" text="What is diagnostic laparoscopy?" className='font-serif text-2xl md:text-3xl text-plum-ink' />
                    <div className='flex flex-col gap-4 mt-4'>
                        {diagnosticLapIntro.map((p, i) => (
                            <Reveal key={i} delay={0.1 + i * 0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <div>
                    <RevealText as="h2" text="Why is it performed?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='flex flex-wrap gap-2.5'>
                        {diagnosticLapReasons.map((item) => (
                            <StaggerItem key={item}>
                                <span className='inline-block text-sm text-plum-ink bg-rose-50 border border-rose-100 rounded-full px-5 py-2.5'>
                                    {item}
                                </span>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <div>
                    <RevealText as="h2" text="Tests before the procedure" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='flex flex-wrap gap-2.5'>
                        {diagnosticLapPreOpTests.map((item) => (
                            <StaggerItem key={item}>
                                <span className='inline-block text-sm text-plum-ink bg-rose-50 border border-rose-100 rounded-full px-5 py-2.5'>
                                    {item}
                                </span>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <div>
                    <RevealText as="h2" text="What type of anaesthesia is used?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <div className='grid sm:grid-cols-2 gap-6'>
                        <div className='p-6 rounded-card bg-sage-50 border border-sage-100'>
                            <p className='font-serif text-base text-plum-ink mb-2'>Local anaesthesia</p>
                            <p className='text-sm text-warm-slate leading-relaxed'>{diagnosticLapAnesthesia.local}</p>
                        </div>
                        <div className='p-6 rounded-card bg-plum-ink'>
                            <p className='font-serif text-base text-petal-white mb-2'>General anaesthesia</p>
                            <p className='text-sm text-rose-100/70 leading-relaxed'>{diagnosticLapAnesthesia.general}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <RevealText as="h2" text="What to expect during the procedure" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                    <StaggerContainer className='flex flex-col'>
                        {diagnosticLapSteps.map((step, i) => (
                            <StaggerItem key={step.title} className='flex gap-5 py-5 border-b border-rose-100 last:border-0'>
                                <span className='font-serif text-sm text-sage-500 shrink-0 w-6'>{String(i + 1).padStart(2, "0")}</span>
                                <div>
                                    <p className='font-serif text-base text-plum-ink'>{step.title}</p>
                                    <p className='text-sm text-warm-slate leading-relaxed mt-1'>{step.description}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

                <div>
                    <RevealText as="h2" text="Possible complications" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                    <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                        {diagnosticLapComplications.map((item) => (
                            <StaggerItem key={item}>
                                <div className='flex items-start gap-2.5 p-5 rounded-card bg-plum-ink h-full'>
                                    <AlertTriangle size={14} className='text-rose-300 shrink-0 mt-0.5' />
                                    <p className='text-sm text-rose-100/80 leading-relaxed'>{item}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                    <Reveal delay={0.2}>
                        <p className='text-sm text-warm-slate leading-relaxed mt-6 max-w-2xl'>{diagnosticLapConversionNote}</p>
                    </Reveal>
                </div>

                <Reveal>
                    <div className='p-6 md:p-7 rounded-card bg-rose-50 border border-rose-100'>
                        <div className='flex items-center gap-2 mb-4'>
                            <PhoneCall size={18} className='text-rose-600' />
                            <p className='font-serif text-lg text-plum-ink'>Call your doctor if you notice</p>
                        </div>
                        <StaggerContainer className='flex flex-wrap gap-2.5'>
                            {diagnosticLapWarningSigns.map((item) => (
                                <StaggerItem key={item}>
                                    <span className='inline-block text-sm text-rose-800 bg-petal-white border border-rose-200 rounded-full px-4 py-2'>
                                        {item}
                                    </span>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </Reveal>
            </Wrapper>
        </Section>
    )
}