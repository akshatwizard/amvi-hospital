import Image from 'next/image'
import { FileText } from 'lucide-react'
import { certificates } from '@/constants/certificates'
import { cn } from '@/lib/utils'

// Grid of certificate cards. Each image opens the full-size file in a new tab.
export default function CertificateGrid({ limit, className }: { limit?: number; className?: string }) {
    const items = limit ? certificates.slice(0, limit) : certificates
    return (
        <ul className={cn('grid sm:grid-cols-2 lg:grid-cols-3 gap-6', className)}>
            {items.map((c) => (
                <li key={c.slug} className='flex flex-col rounded-card border border-rose-100 bg-white overflow-hidden'>
                    <a
                        href={c.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='relative block aspect-10/7 bg-rose-50'
                        aria-label={`View certificate: ${c.title}`}
                    >
                        <Image
                            src={c.image}
                            alt={`Certificate — ${c.title}, ${c.issuer}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className='object-contain p-2'
                        />
                    </a>
                    <div className='flex flex-col gap-1.5 p-5'>
                        <p className='font-serif text-lg text-plum-ink leading-snug'>{c.title}</p>
                        <p className='text-sm text-rose-700'>{c.issuer}</p>
                        <p className='text-sm text-warm-slate'>
                            {c.detail}
                            {c.date && <> · {c.date}</>}
                        </p>
                        {c.pdf && (
                            <a
                                href={c.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='inline-flex items-center gap-1.5 text-sm text-rose-700 underline underline-offset-4 decoration-rose-300 hover:decoration-rose-700 mt-1 w-fit'
                            >
                                <FileText size={14} aria-hidden="true" /> View certificate (PDF)
                            </a>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    )
}
