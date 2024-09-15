'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Briefcase, Clock, DollarSign, MapPin, Search } from "lucide-react"
import Link from "next/link"
import { useState } from 'react'

export default function JobSearchPage() {

    const [searchTerm, setSearchTerm] = useState('')
    const [location, setLocation] = useState('')
    const [jobType, setJobType] = useState('Full-time')
    const [salary, setSalary] = useState([0, 200000])
    const [remoteOnly, setRemoteOnly] = useState(false)



    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically fetch job results based on the search criteria
        console.log('Searching for:', { searchTerm, location, jobType, salary, remoteOnly })
    }

    const jobResults = [
        { id: 1, title: 'Senior Software Engineer', company: 'TechCorp', location: 'San Francisco, CA', salary: '$120,000 - $160,000', type: 'Full-time' },
        { id: 2, title: 'Product Manager', company: 'InnovateCo', location: 'New York, NY', salary: '$100,000 - $130,000', type: 'Full-time' },
        { id: 3, title: 'UX Designer', company: 'DesignHub', location: 'Remote', salary: '$80,000 - $110,000', type: 'Contract' },
        { id: 4, title: 'Data Scientist', company: 'DataDrive', location: 'Boston, MA', salary: '$90,000 - $120,000', type: 'Full-time' },
        { id: 5, title: 'Marketing Specialist', company: 'GrowthGenius', location: 'Chicago, IL', salary: '$60,000 - $80,000', type: 'Part-time' },
    ]

    return (

        <main className="flex-1 container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Find Your Dream Job</h1>
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
                    <Select
                        value={jobType}
                        onValueChange={setJobType}
                    // className="w-full"
                    >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                    </Select>
                    <div className="flex items-center space-x-2">
                        <Switch
                            id="remote-only"
                            checked={remoteOnly}
                            onCheckedChange={setRemoteOnly}
                        />
                        <label htmlFor="remote-only">Remote Only</label>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Salary Range: ${salary[0]} - ${salary[1]}</label>
                    <Slider
                        min={0}
                        max={200000}
                        step={10000}
                        value={salary}
                        onValueChange={setSalary}
                        className="w-full"
                    />
                </div>
                <Button type="submit" className="w-full md:w-auto">
                    <Search className="h-4 w-4 mr-2" />
                    Search Jobs
                </Button>
            </form>
            <div className="space-y-6">
                {jobResults.map((job) => (
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
                ))}
            </div>
        </main>


    )
}