

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const SkeletonLoader = () => (
    <div className="animate-pulse">
        <section className="bg-gray-100 dark:bg-zinc-950 py-16 transition-colors duration-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="h-10 bg-gray-300 dark:bg-zinc-800 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-300 dark:bg-zinc-800 rounded w-full mb-2"></div>
                        <div className="h-4 bg-gray-300 dark:bg-zinc-800 rounded w-5/6 mb-8"></div>
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
                            <div className="h-10 bg-gray-300 dark:bg-zinc-800 rounded flex-grow"></div>
                            <div className="h-10 bg-gray-300 dark:bg-zinc-800 rounded flex-grow sm:w-1/3"></div>
                            <div className="h-10 bg-gray-300 dark:bg-zinc-800 rounded w-full sm:w-auto"></div>
                        </div>
                        <div className="h-4 bg-gray-300 dark:bg-zinc-800 rounded w-2/3"></div>
                    </div>
                    <div className="w-full md:w-1/2 md:ml-8">
                        <div className="h-64 bg-gray-300 dark:bg-zinc-800 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 dark:bg-zinc-950 transition-colors duration-200">
            <div className="container mx-auto px-4">
                <div className="h-8 bg-gray-300 dark:bg-zinc-800 rounded w-1/4 mb-8"></div>
                <div className="h-10 bg-gray-300 dark:bg-zinc-800 rounded w-full mb-6"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map((i) => (
                        <Card key={i} className="dark:bg-zinc-900">
                            <CardHeader className="flex flex-row items-center space-x-4">
                                <div className="h-12 w-12 bg-gray-300 dark:bg-zinc-800 rounded-full"></div>
                                <div>
                                    <div className="h-5 bg-gray-300 dark:bg-zinc-800 rounded w-3/4 mb-2"></div>
                                    <div className="h-4 bg-gray-300 dark:bg-zinc-800 rounded w-1/2"></div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {[1, 2, 3].map((j) => (
                                        <div key={j} className="h-4 bg-gray-300 dark:bg-zinc-800 rounded w-1/4"></div>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter>
                                <div className="h-10 bg-gray-300 dark:bg-zinc-800 rounded w-full"></div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="bg-blue-600 dark:bg-blue-800 py-16 transition-colors duration-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <div className="h-8 bg-blue-500 dark:bg-blue-800 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-blue-500 dark:bg-blue-800 rounded w-full mb-2"></div>
                        <div className="h-4 bg-blue-500 dark:bg-blue-800 rounded w-5/6 mb-8"></div>
                        <div className="h-10 bg-blue-500 dark:bg-blue-800 rounded w-1/3"></div>
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8">
                        <div className="h-64 bg-blue-500 dark:bg-blue-800 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-gray-100 dark:bg-zinc-900 transition-colors duration-200">
            <div className="container mx-auto px-4">
                <div className="h-8 bg-gray-300 dark:bg-zinc-800 rounded w-1/4 mb-8"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="relative rounded-lg overflow-hidden aspect-video bg-gray-300 dark:bg-zinc-800"></div>
                    ))}
                </div>
            </div>
        </section>
    </div>
)
export default SkeletonLoader
// ... (Keep all the existing component definitions: HeroSection, JobCard, JobsOfTheDay, PromotionSection, JobsByLocation)

