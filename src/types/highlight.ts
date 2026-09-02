import { LucideIcon } from "lucide-react"

export type Highlight =
    | { kind: "stat"; icon: LucideIcon; value: number; suffix: string; label: string }
    | { kind: "reason"; icon: LucideIcon; title: string; description: string }