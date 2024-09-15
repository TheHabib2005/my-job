"use client"

import React, { useState } from 'react'
import JobSearchForm from './JobSearchForm';
import Jobs from './job-result';
import { delay } from '@/lib';

const My = ({ jobs }: {
    jobs: {
        id: number,
        title: string,
        company: string,
        location: string,
        salary: string,
        type: string,
    }[]
}) => {

    const [loading, setLoading] = useState(false);

    const applyFilter = async () => {
        try {
            setLoading(true);
            await delay(2000)
        } catch (error) {
            console.log(error);

        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <JobSearchForm applyFilter={applyFilter} />
            {
                loading ? (
                    <div className="space-y-6">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                                <div className="h-6 w-3/4 bg-gray-200 dark:bg-zinc-900 rounded mb-2"></div>
                                <div className="flex flex-wrap gap-4 mb-4">
                                    <div className="h-4 w-1/4 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                                    <div className="h-4 w-1/4 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                                    <div className="h-4 w-1/4 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                                    <div className="h-4 w-1/4 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                                </div>
                                <div className="h-10 w-24 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <Jobs jobResults={jobs} />
                )
            }
        </>
    )
}

export default My