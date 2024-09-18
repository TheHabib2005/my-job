"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Search } from 'lucide-react'
import React, { useState } from 'react'

const SavedJobFilterForm = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [jobType, setJobType] = useState('All')
    const [JobTypeData] = useState([
        {
            id: 0,
            title: "All",
        },
        {
            id: 1,
            title: "Full-time",
        },
        {
            id: 2,
            title: "Part-time",
        },
        {
            id: 3,
            title: "Remote-job",
        },
    ])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        // Filter jobs based on search term and job type
        // const filteredJobs = jobs.filter(job =>
        //     job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        //     (jobType === 'All' || job.type === jobType)
        // )
        // setJobs(filteredJobs)
    }

    const jobTypeHtml =
        JobTypeData.map((type) => {
            return <SelectItem key={type.id} value={type.title}>{type.title}</SelectItem>

        });

    return (
        <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
                <Input
                    placeholder="Search job titles"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-1/2 flex-1"
                />
                <Select defaultValue={jobType} onValueChange={(e) => {
                    setJobType(e)


                }}>
                    <SelectTrigger className="w-64 focus:ring-0 focus:ring-offset-0">
                        <SelectValue placeholder="Select a Job type" />

                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            {jobTypeHtml}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Button type="submit" className="w-full md:w-auto">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                </Button>
            </div>
        </form>
    )
}

export default SavedJobFilterForm