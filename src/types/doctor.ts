// Speciality used to pick an icon when a doctor has no photo.
export type DoctorSpeciality =
    | "gynaecology" | "fertility" | "radiology" | "paediatrics" | "internal-medicine"
    | "psychology" | "genetics" | "embryology" | "anaesthesia" | "orthopaedics" | "general-medicine"

export interface Doctor {
    id: string
    name: string
    designation: string
    experience: string
    /** Photo path. Leave out when no real photo is available — initials are shown instead. */
    image?: string
    bio: string
    speciality?: DoctorSpeciality
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