import React from 'react'
import JobCard from './JobCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const JobsOfTheDay = () => (
    <section className="py-16 dark:bg-zinc-950 transition-colors duration-200">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 dark:text-white">Jobs of the day</h2>
            <Tabs defaultValue="all">
                <TabsList className="mb-6 flex flex-wrap gap-2">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="design">Design</TabsTrigger>
                    <TabsTrigger value="marketing">Marketing</TabsTrigger>
                    <TabsTrigger value="development">Development</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <JobCard
                            logo="/company-logo1.svg"
                            title="UI/UX Designer"
                            company="LinkedIn"
                            location="New York, USA"
                            salary="$500 - $1000/month"
                            type="Full time"
                        />
                        <JobCard
                            logo="/company-logo2.svg"
                            title="Full Stack Developer"
                            company="Twitter"
                            location="San Francisco, USA"
                            salary="$1500 - $2500/month"
                            type="Part time"
                        />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    </section>
)


export default JobsOfTheDay