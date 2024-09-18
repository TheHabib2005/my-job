import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Briefcase, Clock, DollarSign, ExternalLink, MapPin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import DeleteJob from './delete-job-btn'

const SavedJobcard = ({ job }: { job: savedJobCardType }) => {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{job.title}</CardTitle>

                </div>
                <CardDescription>{job.company}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
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
                    <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        Saved on {job.dateAdded}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
                <Button variant="outline">
                    <Link href={`/find-job/${job.id}`} className="flex items-center">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Job
                    </Link>
                </Button>
                {/* <Button variant="destructive" onClick={() => setJobs(prev => prev.filter(j => j.id !== job.id))}>
                                <Trash2 className="h-4 w-4 mr-2" />
                                Remove
                            </Button> */}
                <DeleteJob />
            </CardFooter>
        </Card>
    )
}

export default SavedJobcard