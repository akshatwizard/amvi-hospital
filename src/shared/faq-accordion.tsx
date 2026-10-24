"use client"

import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FaqItem } from '@/types/condition-page'
import JsonLd, { faqPageSchema } from '@/shared/json-ld'

// Every answer stays in the HTML (collapsed with CSS, not removed), so search
// engines can read all of them. The FAQPage schema is emitted alongside.
export default function FaqAccordion({ items, schema = true }: { items: FaqItem[]; schema?: boolean }) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const baseId = useId()

    return (
        <div className='flex flex-col'>
            {schema && items.length > 0 && <JsonLd data={faqPageSchema(items)} />}
            {items.map((item, i) => {
                const open = openIndex === i
                const panelId = `${baseId}-panel-${i}`
                const buttonId = `${baseId}-button-${i}`
                return (
                    <div key={item.question} className='border-b border-rose-100'>
                        <h3 className='m-0'>
                            <button
                                id={buttonId}
                                type="button"
                                onClick={() => setOpenIndex(open ? null : i)}
                                aria-expanded={open}
                                aria-controls={panelId}
                                className='w-full flex items-center justify-between gap-4 py-5 text-left'
                            >
                                <span className='font-serif text-base md:text-lg text-plum-ink'>{item.question}</span>
                                <ChevronDown size={18} className={cn('shrink-0 text-sage-500 transition-transform duration-300', open && 'rotate-180')} />
                            </button>
                        </h3>
                        <div
                            id={panelId}
                            role="region"
                            aria-labelledby={buttonId}
                            className={cn(
                                'grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                                open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                            )}
                        >
                            <div className='overflow-hidden' inert={!open}>
                                <p className='text-sm text-warm-slate leading-relaxed pb-5'>{item.answer}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
