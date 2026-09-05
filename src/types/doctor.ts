export interface Doctor {
    id: string
    name: string
    designation: string
    experience: string
    image: string
    bio: string
}

export interface LeadDoctor extends Doctor {
    tagline: string
    achievements: string[]
    research?: string
    memberships: string[]
    expertise: string[]
    stats: { label: string; value: number; suffix: string }[]
}