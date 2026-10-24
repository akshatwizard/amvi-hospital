import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Doctor } from '@/types/doctor'

function initials(name: string) {
    return name
        .replace(/^Dr\.?\s*/i, '')
        .split(/\s+/)
        .filter((w) => w.length > 1 || /[A-Z]/.test(w))
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join('')
}

// Doctor photo, or a branded initials panel when no real photo is on file
// (so one doctor's face is never shown for another).
export default function DoctorPhoto({ doctor, sizes, className }: { doctor: Doctor; sizes: string; className?: string }) {
    if (doctor.image) {
        return <Image src={doctor.image} alt={doctor.name} fill sizes={sizes} className={cn('object-cover object-top', className)} />
    }
    return (
        <div
            role="img"
            aria-label={doctor.name}
            className={cn('absolute inset-0 flex items-center justify-center bg-linear-to-br from-rose-100 to-rose-50', className)}
        >
            <span className='font-serif text-5xl text-rose-700/80 tracking-wide'>{initials(doctor.name)}</span>
        </div>
    )
}
