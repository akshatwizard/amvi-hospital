import { AlertTriangle } from 'lucide-react'
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
    painlessDeliveryIntro, epidiuralSteps, painlessDeliveryAdvantages, painlessDeliveryDisadvantages,
    epiduralExplainer, painlessDeliveryAlternatives, painlessDeliveryFaqs,
} from '@/constants/painless-delivery'

export default function PainlessDeliveryContent() {
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
                        <RevealText as="h2" text="What is painless delivery?" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        {painlessDeliveryIntro.map((p, i) => (
                            <Reveal key={i} delay={0.1 + i * 0.1}>
                                <p className='text-sm md:text-base text-warm-slate leading-relaxed max-w-2xl'>{p}</p>
                            </Reveal>
                        ))}
                    </div>

                    <div>
                        <RevealText as="h2" text="How the epidural is given" className='font-serif text-2xl md:text-3xl text-plum-ink mb-8' />
                        <StaggerContainer className='flex flex-col'>
                            {epidiuralSteps.map((step, i) => (
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
                        <RevealText as="h2" text="Advantages of painless delivery" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <StaggerContainer className='flex flex-col'>
                            {painlessDeliveryAdvantages.map((item) => (
                                <StaggerItem key={item} className='flex items-start gap-3 py-2.5 border-b border-rose-100 last:border-0'>
                                    <span className='mt-1 shrink-0 size-1.5 rounded-full bg-sage-500' />
                                    <p className='text-sm text-plum-ink leading-relaxed'>{item}</p>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>

                    <div>
                        <RevealText as="h2" text="Disadvantages to be aware of" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <StaggerContainer className='grid sm:grid-cols-2 gap-4'>
                            {painlessDeliveryDisadvantages.map((item) => (
                                <StaggerItem key={item}>
                                    <div className='flex items-start gap-2.5 p-5 rounded-card bg-plum-ink h-full'>
                                        <AlertTriangle size={14} className='text-rose-300 shrink-0 mt-0.5' />
                                        <p className='text-sm text-rose-100/80 leading-relaxed'>{item}</p>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                        <Reveal delay={0.2}>
                            <p className='text-sm text-warm-slate leading-relaxed mt-6'>
                                Contact us before deciding what's right for you and your baby.
                            </p>
                        </Reveal>
                    </div>

                    <Reveal>
                        <div className='p-6 md:p-8 rounded-card bg-rose-50 border border-rose-100'>
                            <p className='font-serif text-lg text-plum-ink mb-2'>What is epidural anaesthesia?</p>
                            <p className='text-sm text-warm-slate leading-relaxed'>{epiduralExplainer}</p>
                        </div>
                    </Reveal>

                    <div>
                        <RevealText as="h2" text="Other options for near-painless labour" className='font-serif text-2xl md:text-3xl text-plum-ink mb-6' />
                        <div className='grid sm:grid-cols-2 gap-6'>
                            {painlessDeliveryAlternatives.map((option) => (
                                <Reveal key={option.name}>
                                    <div className='p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                                        <p className='font-serif text-lg text-plum-ink mb-2'>{option.name}</p>
                                        <p className='text-sm text-warm-slate leading-relaxed'>{option.description}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    <div>
                        <RevealText as="h2" text="FAQs related to painless delivery" className='font-serif text-2xl md:text-3xl text-plum-ink mb-4' />
                        <FaqAccordion items={painlessDeliveryFaqs} />
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}