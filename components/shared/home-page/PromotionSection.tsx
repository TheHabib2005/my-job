import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const PromotionSection = () => (
    <section className="bg-blue-600 dark:bg-blue-800 text-white py-16 transition-colors duration-200">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Find The One {"That's"} Right For You</h2>
                    <p className="mb-8">Discover your perfect job match with our advanced search and personalized recommendations.</p>
                    <Button variant="secondary">Search Jobs</Button>
                </div>
                <div className="w-full md:w-1/2 md:pl-8">
                    <Image
                        src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/img1.png"
                        alt="Happy job seekers"
                        width={500}
                        height={300}
                        className="rounded-lg w-full h-auto"
                    />
                </div>
            </div>
        </div>
    </section>
)

export default PromotionSection