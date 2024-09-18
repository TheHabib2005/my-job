"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

const HeroSectionForm = () => {
    const [inputQuery, setInputQuery] = useState<string>("");
    const [locationQuery, setLocationQuery] = useState<string>("");
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const router = useRouter();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputQuery(e.target.value);
    };
    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocationQuery(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        if (inputQuery.trim().length > 0 && locationQuery.trim().length > 0) {
            params.set("job-title", inputQuery.trim());
            params.set("job-location", locationQuery.trim());
            router.replace(`/find-job?${params}`)
        }
    };
    return (
        <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4" onSubmit={handleSubmit}>
            <Input value={inputQuery} onChange={handleInputChange} placeholder="Job title, keywords..." className="flex-grow dark:bg-zinc-800 dark:text-white" />
            <Input value={locationQuery} onChange={handleLocationChange} placeholder="Location" className="flex-grow sm:w-1/3 dark:bg-zinc-800 dark:text-white" />
            <Button type="submit" className="w-full sm:w-auto disabled:bg-zinc-600" disabled={inputQuery.trim().length === 0 || locationQuery.trim().length === 0}>Search</Button>
        </form>
    )
}

export default HeroSectionForm