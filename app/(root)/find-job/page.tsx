

import My from "@/components/shared/my"
import { getJobsResult } from "@/lib/actions"

export default async function JobSearchPage() {

    // await delay(500)
    const jobs = await getJobsResult()

    return (

        <main className="flex-1 container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Find Your Dream Job</h1>
            <My jobs={jobs} />
        </main>


    )
}