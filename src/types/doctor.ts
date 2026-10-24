export interface Doctor {
    id: string
    name: string
    designation: string
    experience: string
    /** Photo path. Leave out when no real photo is available — initials are shown instead. */
    image?: string
    bio: string
}

export interface LeadDoctor extends Doctor {
    image: string
    tagline: string
    achievements: string[]
    research?: string
    memberships: string[]
    expertise: string[]
    stats: { label: string; value: number; suffix: string }[]
}