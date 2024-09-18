

import { getSavedJobs } from "@/actions/jobs.action"
import SavedJobFilterForm from "@/components/shared/saved-jobs/Filter-form"
import SavedJobcard from "@/components/shared/saved-jobs/SavedJobcard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"



export default async function SavedJobsPage() {

    const jobs = await getSavedJobs()

    return (
        <main className="flex-1 container mx-auto px-4 py-8 bg-zinc-950">
            <h1 className="text-3xl font-bold mb-8">Saved Jobs</h1>
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Filter Saved Jobs</CardTitle>
                    <CardDescription>Use the filters below to search through your saved jobs.</CardDescription>
                </CardHeader>
                <CardContent>
                    <SavedJobFilterForm />
                </CardContent>
            </Card>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Your Saved Jobs</h2>
            </div>
            <div className="space-y-6">
                {jobs?.map((job) => (
                    <SavedJobcard job={job} key={job.id} />
                ))}
            </div>
        </main>

    )
}