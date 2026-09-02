"use client"

import Link from "next/link"
import Image from "next/image"
import { Dispatch, SetStateAction, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"
import { X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Overlay } from "@/shared/overlay"
import { navItems } from "@/constants/menu"

interface MobileNavProps {
    open: boolean;
    expanded: string | null;
    setExpanded: Dispatch<SetStateAction<string | null>>
    close: () => void;
}

export function MobileNav({ open, expanded, close, setExpanded }: MobileNavProps) {
    const reduced = useReducedMotion()

    useEffect(() => {
        if (!open) setExpanded(null)
    }, [open, setExpanded])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && close()
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [close])

    return (
        <div className="lg:hidden">
            <AnimatePresence>
                {open && (
                    <>
                        <Overlay on_click={close} className="z-50" />

                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-label="Site menu"
                            initial={reduced ? { opacity: 0 } : { x: "100%" }}
                            animate={reduced ? { opacity: 1 } : { x: 0 }}
                            exit={reduced ? { opacity: 0 } : { x: "100%" }}
                            transition={{ type: "tween", duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-petal-white shadow-soft overflow-y-auto"
                            data-lenis-prevent
                        >
                            <div className="flex items-center justify-between px-5 py-4 border-b border-rose-100">
                                <Link href="/" className="shrink-0" onClick={close}>
                                    <Image
                                        src="/images/logo/amvi-logo.png"
                                        alt="AMVI Hospital"
                                        width={1536}
                                        height={219}
                                        quality={100}
                                        className='w-48 h-auto'
                                    />
                                </Link>

                                <button onClick={close} aria-label="Close menu" className="p-1 text-plum-ink hover:text-rose-700 transition-colors">
                                    <X className="size-5" />
                                </button>
                            </div>

                            <div className="flex flex-col py-2">
                                {navItems.map((item) => {
                                    const has_sub_menu = !!item.sub_menu?.length
                                    const has_mega_menu = item.mega && !!item.columns?.length
                                    const is_expandable = has_sub_menu || has_mega_menu
                                    const is_expanded = expanded === item.name

                                    return (
                                        <div key={item.name} className="border-b border-rose-100/60">
                                            <div className="flex items-center justify-between px-5 py-3.5">
                                                <Link
                                                    href={item.href}
                                                    {...(item.new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                    onClick={close}
                                                    aria-disabled={item.disabled}
                                                    tabIndex={item.disabled ? -1 : undefined}
                                                    className={cn(
                                                        "text-sm text-plum-ink",
                                                        item.disabled && "pointer-events-none opacity-40"
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>

                                                {is_expandable && (
                                                    <button
                                                        onClick={() => setExpanded(is_expanded ? null : item.name)}
                                                        aria-label={`Toggle ${item.name} submenu`}
                                                        aria-expanded={is_expanded}
                                                        className="p-1 -m-1"
                                                    >
                                                        <ChevronDown
                                                            className={cn(
                                                                "size-4 text-sage-500 transition-transform",
                                                                is_expanded && "rotate-180"
                                                            )}
                                                        />
                                                    </button>
                                                )}
                                            </div>

                                            {/* Simple sub menu */}
                                            <AnimatePresence>
                                                {has_sub_menu && is_expanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: reduced ? 0.1 : 0.2 }}
                                                        className="overflow-hidden bg-rose-50/50"
                                                    >
                                                        {item.sub_menu!.map((sub) => (
                                                            <Link
                                                                key={sub.name}
                                                                href={sub.href}
                                                                {...(sub.new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                                onClick={close}
                                                                className="block px-8 py-2.5 text-sm text-warm-slate hover:text-rose-700 transition-colors"
                                                            >
                                                                {sub.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>

                                            {/* Mega menu — flattened into stacked column groups */}
                                            <AnimatePresence>
                                                {has_mega_menu && is_expanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: reduced ? 0.1 : 0.2 }}
                                                        className="overflow-hidden bg-rose-50/50"
                                                    >
                                                        <div className="px-8 py-4 flex flex-col gap-5">
                                                            {item.columns!.map((col) => (
                                                                <div key={col.title}>
                                                                    <div className="text-xs text-sage-500 mb-2">
                                                                        {col.title}
                                                                    </div>
                                                                    <div className="flex flex-col gap-2">
                                                                        {col.items.map((sub) => (
                                                                            <Link
                                                                                key={sub.name}
                                                                                href={sub.href}
                                                                                {...(sub.new_tab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                                                onClick={close}
                                                                                className="text-sm text-warm-slate hover:text-rose-700 transition-colors"
                                                                            >
                                                                                {sub.name}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}