"use client";

import { navItems } from '@/constants/menu';
import { cn } from '@/lib/utils';
import { Section, Wrapper } from '@/shared/sections'
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react';
import Link from 'next/link';
import React from 'react'

export default function DesktopNav() {
    const [active, setActive] = React.useState<string | null>(null)
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = React.useState<boolean | null>(false);
    const reduced = useReducedMotion()

    useMotionValueEvent(scrollY, "change", (current) => {
        if (current > 117) {
            setScrolled(true);
        } else {
            setScrolled(null);
        }
    });

    return (
        <Section className={cn(
            'hidden lg:block z-40 h-12 sticky top-0 bg-petal-white border-b border-rose-100 transition-colors duration-300 ease-in-out',
            scrolled && "bg-rose-600"
        )}>
            <Wrapper bare className='h-full'>
                <nav className='w-full h-full flex items-center gap-0.5'>
                    {navItems.map((item) => {
                        const has_sub_menu = !!item.sub_menu?.length;
                        const has_mega_menu = item.mega && !!item.columns?.length;
                        const has_dropdown = has_sub_menu || has_mega_menu;
                        const is_active = active === item.name;

                        return (
                            <div
                                key={item.name}
                                className='relative h-full'
                                onMouseEnter={() => has_dropdown && setActive(item.name)}
                                onMouseLeave={() => has_dropdown && setActive(null)}
                            >
                                <Link
                                    href={item.href}
                                    {...(item.new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className={cn(
                                        'relative flex items-center h-full gap-1 text-xs px-2 text-plum-ink hover:text-rose-700 transition-colors',
                                        scrolled && "text-petal-white hover:text-white"
                                    )}
                                >
                                    {item.name}
                                    {has_dropdown && (
                                        <ChevronDown className={cn(
                                            "size-3.5 transition-transform text-warm-slate",
                                            scrolled && "text-petal-white",
                                            is_active && "rotate-180"
                                        )} />
                                    )}
                                </Link>

                                <AnimatePresence>
                                    {has_sub_menu && is_active && (
                                        <motion.div
                                            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                                            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                            className="absolute top-full left-0 min-w-64 overflow-hidden"
                                        >
                                            <div className="bg-petal-white border border-rose-100 shadow-soft py-2">
                                                {item.sub_menu!.map((sub) => (
                                                    <Link
                                                        key={sub.name}
                                                        href={sub.href}
                                                        {...(sub.new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                        className="block px-4 py-1.5 text-xs text-warm-slate hover:bg-rose-50 hover:text-rose-700 transition-colors"
                                                    >
                                                        {sub.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <AnimatePresence>
                                    {has_mega_menu && is_active && (
                                        <motion.div
                                            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                                            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                                            className="absolute top-full max-w-max"
                                        >
                                            <div className="max-w-7xl mx-auto bg-petal-white border border-rose-100 shadow-soft p-8">
                                                <div className="grid grid-cols-[1fr_1fr_1fr_1.2fr] gap-8">
                                                    {item.columns!.map((col) => (
                                                        <div key={col.title}>
                                                            <div className="whitespace-nowrap text-sm text-sage-500 mb-3">
                                                                {col.title}
                                                            </div>
                                                            <div className="flex flex-col gap-1.5">
                                                                {col.items.map((sub) => (
                                                                    <Link
                                                                        key={sub.name}
                                                                        href={sub.href}
                                                                        {...(sub.new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                                        className="whitespace-nowrap text-xs text-warm-slate hover:text-rose-700 transition-colors"
                                                                    >
                                                                        {sub.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </nav>
            </Wrapper>
        </Section>
    )
}