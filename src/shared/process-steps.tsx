"use client"

import { Check } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '@/shared/stagger'
import { ProcessStep } from '@/types/condition-page'

export default function ProcessSteps({ steps }: { steps: ProcessStep[] }) {
    return (
        <StaggerContainer className='flex flex-col'>
            {steps.map((step, i) => (
                <StaggerItem key={step.title} className='py-6 border-b border-rose-100 last:border-0'>
                    <div className='flex gap-5'>
                        <span className='font-serif text-sm text-sage-500 shrink-0 w-6 pt-1'>{String(i + 1).padStart(2, "0")}</span>
                        <div className='flex-1'>
                            <p className='font-serif text-lg text-plum-ink mb-3'>{step.title}</p>
                            <ul className='flex flex-col gap-1.5'>
                                {step.points.map((point) => (
                                    <li key={point} className='flex items-start gap-2'>
                                        <Check size={14} strokeWidth={3} className='text-rose-500 shrink-0 mt-0.5' />
                                        <span className='text-sm text-warm-slate leading-relaxed'>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </StaggerItem>
            ))}
        </StaggerContainer>
    )
}