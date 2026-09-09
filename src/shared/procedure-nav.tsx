"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { ConditionNavLink } from '@/types/condition-page'

export default function ProcedureNav({ links, category }: { links: ConditionNavLink[], category: string }) {
    const pathname = usePathname()
    const [emblaRef] = useEmblaCarousel({ align: 'start', dragFree: true, containScroll: 'trimSnaps' })

    return (
        <div className='border-b border-rose-100 -mx-5 md:mx-0 px-5 md:px-0'>
            <p className='text-xs text-sage-500 mb-3'>{category}</p>
            <div className='block overflow-hidden pb-4 -mb-px' ref={emblaRef}>
                <div className='flex gap-2'>
                    {links.map((link) => {
                        const active = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    'shrink-0 text-sm rounded-full px-4 py-2 transition-colors whitespace-nowrap select-none',
                                    active
                                        ? 'bg-rose-700 text-petal-white'
                                        : 'bg-rose-50 text-warm-slate hover:bg-rose-100 hover:text-rose-700'
                                )}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}