"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { MobileNav } from './mobile_nav'
import { useLenis } from '@/providers/smooth_scroll_provider'

export default function Header() {
    const [open, setOpen] = useState(false)
    const [expanded, setExpanded] = useState<string | null>(null)
    const { startScroll, stopScroll } = useLenis();


    const close = () => {
        setOpen(false)
        setExpanded(null)
    }

    useEffect(() => {
        if (open) {
            stopScroll();
        } else {
            startScroll();
        }
        return () => startScroll();
    }, [open, stopScroll, startScroll]);


    return (
        <>
            <header className='lg:relative sticky top-0 z-50 w-full lg:px-16 md:px-10 px-5 bg-petal-white border-b border-rose-100'>
                <div className='w-full max-w-7xl mx-auto flex items-center justify-between h-20'>
                    <Link href="/" className='shrink-0'>
                        <Image
                            src="/images/logo/amvi-logo.png"
                            alt="AMVI Hospital"
                            width={1536}
                            height={219}
                            priority
                            quality={100}
                            sizes="(min-width: 1024px) 320px, 200px"
                            className='w-60 lg:w-80 h-auto'
                        />
                    </Link>

                    <div className='flex items-center gap-3'>
                        <Link
                            href="/contact"
                            className='hidden sm:inline-flex items-center rounded-full bg-rose-600 hover:bg-rose-700 text-petal-white text-sm px-5 py-2.5 transition-colors'
                        >
                            Book appointment
                        </Link>

                        <button
                            onClick={() => setOpen((v) => !v)}
                            aria-expanded={open}
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            className='lg:hidden flex items-center justify-center size-10 rounded-full text-rose-700 hover:bg-rose-50 transition-colors'
                        >
                            {open ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

            </header>

            <AnimatePresence>
                {open &&
                    <MobileNav
                        open={open}
                        expanded={expanded}
                        setExpanded={setExpanded}
                        close={close}
                    />
                }
            </AnimatePresence>
        </>
    )
}
