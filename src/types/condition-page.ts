import { LucideIcon } from "lucide-react"

export interface IconItem {
    icon: LucideIcon
    title: string
    description: string
}

export interface DiagnosisStep {
    title: string
    description: string
}

export interface Complication {
    title: string
    description: string
}

export interface Testimonial {
    quote: string
    name: string
}

export interface FaqItem {
    question: string
    answer: string
}

export interface ConditionNavLink {
    name: string
    href: string
}