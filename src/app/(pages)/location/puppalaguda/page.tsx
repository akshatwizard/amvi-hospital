import type { Metadata } from "next"
import BranchPage from "@/components/branch/branch-page"
import { branches } from "@/constants/branches"

const branch = branches["puppalaguda"]

export const metadata: Metadata = {
    title: branch.title,
    description: branch.description,
    alternates: { canonical: "/location/puppalaguda" },
}

export default function Page() {
    return <BranchPage branch={branch} />
}
