import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => (
    <section className="bg-gray-100 dark:bg-zinc-950 py-16 transition-colors duration-200">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">The Easiest Way to Get Your New Job</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">Each month, more than 3 million job seekers turn to our website in their search for work, making over 140,000 applications every single day</p>
                    <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                        <Input placeholder="Job title, keywords..." className="flex-grow dark:bg-zinc-800 dark:text-white" />
                        <Input placeholder="Location" className="flex-grow sm:w-1/3 dark:bg-zinc-800 dark:text-white" />
                        <Button type="submit" className="w-full sm:w-auto">Search</Button>
                    </form>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Popular Searches: Designer, Web, IOS, PHP, Senior, Engineer
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:ml-8">
                    <Image
                        src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/banner1.png"
                        alt="Job seekers"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-auto"
                    />
                </div>
            </div>
        </div>
    </section>
)

export default HeroSection