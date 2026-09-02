"use client"

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { Section, Wrapper } from '@/shared/sections'
import RevealText from '@/shared/reveal_text'
import Reveal from '@/shared/reveal'
import { faqs } from '@/constants/faqs'

export default function Faq() {
    const [open, setOpen] = useState<number | null>(0)

    return (
        <Section className='bg-petal-white'>
            <Wrapper>
                <div className='grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-16'>
                    <div className='md:sticky md:top-20 self-start'>
                        <Reveal>
                            <span className='inline-flex items-center gap-2 text-xs text-rose-700 bg-rose-50 rounded-full px-3.5 py-1.5 w-fit'>
                                Common questions
                            </span>
                        </Reveal>
                        <RevealText
                            as="h2"
                            text="Answers before you call"
                            className='font-serif text-3xl md:text-4xl text-plum-ink leading-[1.15] mt-4'
                            delay={0.1}
                        />
                        <Reveal delay={0.25}>
                            <p className='text-warm-slate mt-4 max-w-sm text-sm'>
                                Still have something on your mind? Call either branch directly and our team
                                will walk you through it.
                            </p>
                        </Reveal>
                    </div>

                    <div className='flex flex-col'>
                        {faqs.map((item, i) => {
                            const isOpen = open === i
                            return (
                                <div key={item.question} className='border-b border-rose-100'>
                                    <button
                                        onClick={() => setOpen(isOpen ? null : i)}
                                        className='w-full flex items-center justify-between gap-6 py-6 text-left'
                                    >
                                        <span className='font-serif text-lg md:text-xl text-plum-ink'>
                                            {item.question}
                                        </span>
                                        <motion.span
                                            animate={{ rotate: isOpen ? 45 : 0 }}
                                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                            className='shrink-0 size-8 rounded-full border border-rose-200 flex items-center justify-center text-rose-700'
                                        >
                                            <Plus size={16} />
                                        </motion.span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                                className='overflow-hidden'
                                            >
                                                <p className='text-warm-slate text-sm md:text-base leading-relaxed pb-6 max-w-lg'>
                                                    {item.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}