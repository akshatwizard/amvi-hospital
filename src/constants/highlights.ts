import { UserRound, Stethoscope, Users, Armchair, Video, Flower2, Layers, Sparkles, HeartPulse } from "lucide-react"
import { Highlight } from "@/types/highlight"

export const highlights: Highlight[] = [
    { kind: "stat", icon: UserRound, value: 20, suffix: "+", label: "Years of Experience" },
    { kind: "stat", icon: Stethoscope, value: 20000, suffix: "+", label: "Successful Surgeries" },
    { kind: "stat", icon: Users, value: 30000, suffix: "+", label: "Happy Families" },
    { kind: "stat", icon: Layers, value: 8, suffix: "+", label: "Specialties offered" },
    {
        kind: "reason",
        icon: HeartPulse,
        title: "Expert Nursing",
        description: "Skilled nurses deliver evidence-based care to improve outcomes.",
    },
    {
        kind: "reason",
        icon: Armchair,
        title: "Relatives Areas",
        description: "Relatives' areas are comfortable spaces near patients for gathering or waiting.",
    },
    {
        kind: "reason",
        icon: Video,
        title: "Provide Home Visit",
        description: "Get instant online gynecology advice on hysterectomy, fibroids, and endometriosis.",
    },
    {
        kind: "reason",
        icon: Sparkles,
        title: "Lovely Environment in hospital",
        description: "A pleasant hospital environment boosts comfort, healing, and well-being.",
    },
]