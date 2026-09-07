"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ConditionNavLink } from '@/types/condition-page'

export default function ConditionSidebar({ links }: { links: ConditionNavLink[] }) {
    const pathname = usePathname()

    return (
        <nav className='hidden lg:sticky lg:top-24 lg:self-start lg:flex flex-col gap-1 border-r border-rose-100 pr-6'>
            <p className='text-xs text-sage-500 mb-2'>Gynaecology</p>
            {links.map((link) => {
                const active = pathname === link.href
                return (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                            'text-sm py-2 border-l-2 pl-3 transition-colors',
                            active
                                ? 'border-rose-600 text-rose-700 bg-rose-50/60'
                                : 'border-transparent text-warm-slate hover:text-rose-700 hover:border-rose-200'
                        )}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}