"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const JobSearchForm = ({ applyFilter }: { applyFilter: () => void }) => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const [searchTerm, setSearchTerm] = useState(params.get("job-title") || "")
    const [location, setLocation] = useState(params.get("location") || "")
    const [jobType, setJobType] = useState(params.get("job-type") || "")
    const router = useRouter();
    const pathname = usePathname()
    const [JobTypeData] = useState([
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
        // Here you would typically fetch job results based on the search criteria
        // console.log('Searching for:', { searchTerm, location, jobType })

        params.set("job-title", searchTerm);
        params.set("location", location);
        params.set("job-type", jobType);
        router.replace(`${pathname}?${params}`)
        applyFilter()
    }


    const jobTypeHtml =
        JobTypeData.map((type) => {
            return <SelectItem key={type.id} value={type.title}>{type.title}</SelectItem>

        })


    return (
        <form onSubmit={handleSearch} className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <Input
                    placeholder="Job title or keyword"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                />
                <Input
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full"
                />

                <Select defaultValue={jobType} onValueChange={(e) => {
                    setJobType(e)


                }}>
                    <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0">
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
                    Search Jobs
                </Button>
            </div>


        </form>
    )
}

export default JobSearchForm