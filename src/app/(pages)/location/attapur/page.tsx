import type { Metadata } from "next"
import BranchPage from "@/components/branch/branch-page"
import { branches } from "@/constants/branches"

const branch = branches["attapur"]

export const metadata: Metadata = {
    title: branch.title,
    description: branch.description,
    alternates: { canonical: "/location/attapur" },
}

export default function Page() {
    return <BranchPage branch={branch} />
}
