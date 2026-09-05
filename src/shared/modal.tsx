"use client"

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { X } from 'lucide-react'
import { useLenis } from '@/providers/smooth_scroll_provider'

type ModalProps = {
    open: boolean
    onClose: () => void
    children: React.ReactNode
    labelledBy?: string
}

export default function Modal({ open, onClose, children, labelledBy }: ModalProps) {
    const reduced = useReducedMotion()
    const { startScroll, stopScroll } = useLenis();

    useEffect(() => {
        if (open) {
            stopScroll();
        } else {
            startScroll();
        }
        return () => startScroll();
    }, [open, stopScroll, startScroll]);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    if (typeof document === 'undefined') return null

    return createPortal(
        <AnimatePresence>
            {open && (
                <div className='fixed inset-0 z-100 flex items-center justify-center p-4'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='absolute inset-0 bg-plum-ink/60 backdrop-blur-sm'
                        onClick={onClose}
                    />
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={labelledBy}
                        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={reduced ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.97 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className='relative bg-petal-white rounded-card shadow-soft w-full max-w-lg max-h-[85vh] overflow-y-auto'
                    >
                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className='absolute top-4 right-4 text-plum-ink hover:text-rose-700 transition-colors z-10'
                        >
                            <X size={20} />
                        </button>
                        {children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.body
    )
}