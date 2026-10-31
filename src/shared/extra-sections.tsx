import { Check } from 'lucide-react'
import RevealText from '@/shared/reveal_text'
import { extraSections, ExtraItem } from '@/constants/extra-content'

function Bullets({ items }: { items: string[] }) {
    return (
        <ul className='flex flex-col'>
            {items.map((b) => (
                <li key={b} className='flex items-start gap-3 py-2 border-b border-rose-100 last:border-0'>
                    <span className='mt-0.5 shrink-0 size-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center'>
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className='text-sm text-plum-ink leading-relaxed'>{b}</span>
                </li>
            ))}
        </ul>
    )
}

function Item({ item }: { item: ExtraItem }) {
    return (
        <div className='flex flex-col gap-2 rounded-card border border-rose-100 bg-white p-5 md:p-6'>
            <h3 className='font-serif text-lg md:text-xl text-plum-ink'>{item.title}</h3>
            {item.text && <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{item.text}</p>}
            {item.bullets && <Bullets items={item.bullets} />}
            {item.outro && <p className='text-sm text-warm-slate leading-relaxed'>{item.outro}</p>}
        </div>
    )
}

// Renders additional content sections for a page (see src/constants/extra-content.ts).
// Each section is a direct child, so it follows the parent column's spacing.
export default function ExtraSections({ path }: { path: string }) {
    const sections = extraSections(path)
    if (!sections.length) return null
    return (
        <>
            {sections.map((s) => (
                <div key={s.heading} className='flex flex-col gap-4 min-w-0'>
                    <RevealText as="h2" text={s.heading} className='font-serif text-2xl md:text-3xl text-plum-ink' />
                    {s.paragraphs?.map((p, i) => (
                        <p key={i} className='text-sm md:text-base text-warm-slate leading-relaxed'>{p}</p>
                    ))}
                    {s.bullets && <Bullets items={s.bullets} />}
                    {s.items && (
                        <div className='flex flex-col gap-4'>
                            {s.items.map((it) => <Item key={it.title} item={it} />)}
                        </div>
                    )}
                    {s.outro && <p className='text-sm md:text-base text-warm-slate leading-relaxed'>{s.outro}</p>}
                </div>
            ))}
        </>
    )
}
