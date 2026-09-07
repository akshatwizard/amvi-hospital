"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { FaqItem } from '@/types/condition-page'

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <div className='flex flex-col'>
            {items.map((item, i) => {
                const open = openIndex === i
                return (
                    <div key={item.question} className='border-b border-rose-100'>
                        <button
                            onClick={() => setOpenIndex(open ? null : i)}
                            aria-expanded={open}
                            className='w-full flex items-center justify-between gap-4 py-5 text-left'
                        >
                            <span className='font-serif text-base md:text-lg text-plum-ink'>{item.question}</span>
                            <ChevronDown size={18} className={cn('shrink-0 text-sage-500 transition-transform', open && 'rotate-180')} />
                        </button>
                        <AnimatePresence initial={false}>
                            {open && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                    className='overflow-hidden'
                                >
                                    <p className='text-sm text-warm-slate leading-relaxed pb-5'>{item.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>
    )
}