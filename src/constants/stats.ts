import { UserRound, Stethoscope, Users } from "lucide-react"
import { Stat } from "@/types/stat"

export const stats: Stat[] = [
    { icon: UserRound, value: 20, suffix: "+", label: "Years of Experience" },
    { icon: Stethoscope, value: 20000, suffix: "+", label: "Successful Surgeries" },
    { icon: Users, value: 30000, suffix: "+", label: "Happy Families" },
]