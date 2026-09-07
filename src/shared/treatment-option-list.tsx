"use client"

import { Check } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import { TreatmentOption } from '@/types/condition-page'

export default function TreatmentOptionList({ options }: { options: TreatmentOption[] }) {
    return (
        <StaggerContainer className='flex flex-col'>
            {options.map((option, i) => (
                <StaggerItem key={option.title} className='py-6 border-b border-rose-100 last:border-0'>
                    <div className='flex gap-5'>
                        <span className='font-serif text-sm text-sage-500 shrink-0 w-6 pt-1'>{String(i + 1).padStart(2, "0")}</span>
                        <div className='flex-1'>
                            <p className='font-serif text-lg text-plum-ink'>{option.title}</p>
                            <p className='text-sm text-warm-slate leading-relaxed mt-2'>{option.description}</p>
                            {option.stats && (
                                <ul className='flex flex-col gap-1.5 mt-3'>
                                    {option.stats.map((stat) => (
                                        <li key={stat} className='flex items-start gap-2'>
                                            <Check size={14} strokeWidth={3} className='text-rose-500 shrink-0 mt-0.5' />
                                            <span className='text-sm text-plum-ink'>{stat}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </StaggerItem>
            ))}
        </StaggerContainer>
    )
}