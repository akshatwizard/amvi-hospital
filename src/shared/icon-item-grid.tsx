"use client"

import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import { IconItem } from '@/types/condition-page'

export default function IconItemGrid({ items }: { items: IconItem[] }) {
    return (
        <StaggerContainer className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {items.map((item) => (
                <StaggerItem key={item.title}>
                    <div className='flex flex-col gap-3 p-6 rounded-card bg-rose-50/60 border border-rose-100 h-full'>
                        <item.icon size={22} strokeWidth={1.5} className='text-rose-600' />
                        <p className='font-serif text-base text-plum-ink'>{item.title}</p>
                        <p className='text-sm text-warm-slate leading-relaxed'>{item.description}</p>
                    </div>
                </StaggerItem>
            ))}
        </StaggerContainer>
    )
}