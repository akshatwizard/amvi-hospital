"use client"

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/lib/utils'

type Item = { title: string; description: string }

export default function ExpandableList({ items }: { items: Item[] }) {
    const [open, setOpen] = useState<number | null>(0)

    return (
        <div className='flex flex-col'>
            {items.map((item, i) => {
                const isOpen = open === i
                return (
                    <div key={item.title} className='border-b border-rose-100'>
                        <button
                            onClick={() => setOpen(isOpen ? null : i)}
                            className='w-full flex items-center gap-5 py-6 text-left'
                        >
                            <span className='font-serif text-sm text-sage-500 shrink-0 w-6'>
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className='font-serif text-lg md:text-xl text-plum-ink flex-1'>{item.title}</span>
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
                                    <p className={cn('text-sm md:text-base text-warm-slate leading-relaxed pb-6 pl-11 max-w-2xl')}>
                                        {item.description}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}
        </div>
    )
}