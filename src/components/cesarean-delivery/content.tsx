import { Check, AlertTriangle } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import Counter from '@/shared/counter'
import ConditionSidebar from '@/shared/condition-sidebar'
import FaqAccordion from '@/shared/faq-accordion'
import { stats } from '@/constants/stats'
import { maternityConditionNav } from '@/constants/maternity-nav'
import {
    cesareanIntro, cesareanIndications, cesareanPreparation, cesareanSteps, cesareanRecovery,
    cesareanCostFactors, cesareanEligibility, cesareanNotNeededWhen, cesareanRisks, cesareanFaqs,
} from '@/constants/cesarean-delivery'

export default function CesareanDeliveryContent() {
    return (
        <Section className='bg-petal-white'>
            <Wrapper className='grid lg:grid-cols-[240px_1fr] gap-12 lg:gap-16'>
                <ConditionSidebar links={maternityConditionNav} category="Maternity" />

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
                        <RevealText as="h2" text="What is cesarean delivery?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        {cesareanIntro.map((p, i) => (
                            <Reveal key={i} delay={0.1 + i * 0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                            </Reveal>
                        ))}
                    </div>

                    <div>
                        <RevealText as="h2" text="When is a cesarean delivery needed?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <StaggerContainer className='grid md:grid-cols-2 gap-x-10 gap-y-1'>
                            {cesareanIndications.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <RevealText as="h2" text="Preparing for surgery" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <StaggerContainer className='flex flex-col'>
                            {cesareanPreparation.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <RevealText as="h2" text="Steps involved in the procedure" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {cesareanSteps.map((step, i) => (
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
                        <RevealText as="h2" text="Post-surgery recovery care" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <StaggerContainer className='flex flex-col'>
                            {cesareanRecovery.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                                        <Check size={12} strokeWidth={3} />
                                    </span>
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <RevealText as="h2" text="What determines the cost?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <div className='flex flex-wrap gap-2.5'>
                            {cesareanCostFactors.map((item) => (
                                <span key={item} className='inline-block text-sm text-plum-ink bg-rose-50 border border-rose-100 rounded-full px-5 py-2.5'>
                                    {item}
                                </span>
                            ))}
                        </div>
                        <Reveal delay={0.2}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6'>
                                Contact either branch directly for specific cost information.
                            </p>
                        </Reveal>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='p-6 rounded-card bg-rose-50/60 border border-rose-100'>
                            <p className='font-serif text-lg text-plum-ink mb-3'>When a C-section is typically recommended</p>
                            <div className='flex flex-col gap-2'>
                                {cesareanEligibility.map((item) => (
                                    <p key={item} className='text-sm text-warm-slate leading-relaxed'>{item}</p>
                                ))}
                            </div>
                        </div>
                        <div className='p-6 rounded-card bg-sage-50 border border-sage-100'>
                            <p className='font-serif text-lg text-plum-ink mb-3'>When a normal delivery is preferred instead</p>
                            <div className='flex flex-col gap-2'>
                                {cesareanNotNeededWhen.map((item) => (
                                    <p key={item} className='text-sm text-warm-slate leading-relaxed'>{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <RevealText as="h2" text="Risks & complications" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                            {cesareanRisks.map((item) => (
                                <StaggerItem key={item}>
                                    <div className='flex items-start gap-2.5 p-5 rounded-card bg-plum-ink h-full'>
                                        <AlertTriangle size={14} className='text-rose-300 shrink-0 mt-0.5' />
                                        <p className='text-sm text-rose-100/80 leading-relaxed'>{item}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <RevealText as="h2" text="FAQs related to cesarean delivery" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <FaqAccordion items={cesareanFaqs} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}