"use client"
import { Briefcase, Clock, DollarSign, MapPin } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

const Jobs = ({ jobResults }: {
    jobResults: {
        id: number,
        title: string,
        company: string,
        location: string,
        salary: string,
        type: string,
    }[]
}) => {





    return (
        <div className="space-y-6">

            {
                jobResults.map((job) => (
                    <div key={job.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center">
                                <Briefcase className="h-4 w-4 mr-1" />
                                {job.company}
                            </div>
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {job.location}
                            </div>
                            <div className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-1" />
                                {job.salary}
                            </div>
                            <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {job.type}
                            </div>
                        </div>
                        <Button className="mt-4" variant="outline">
                            <Link href={"/find-job/45"}>
                                View Job</Link>

                        </Button>
                    </div>
                ))
            }


        </div>
    )
}

export default Jobs