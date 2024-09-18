import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default async function SavedJobsPageSkeleton() {

    return (
        <main className="flex-1 container mx-auto px-4 py-8 bg-zinc-950">
            <div className="h-9 bg-gray-200 dark:bg-zinc-900 rounded w-48 mb-8"></div>
            <Card className="mb-8">
                <CardHeader>
                    <div className="h-6 bg-gray-200 dark:bg-zinc-900 rounded w-40 mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded w-3/4"></div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full md:w-1/2 flex-1 h-10 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                            <div className="w-64 h-10 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                            <div className="w-full md:w-auto h-10 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                            <div className="w-full md:w-auto h-10 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="flex justify-between items-center mb-4">
                <div className="h-6 bg-gray-200 dark:bg-zinc-900 rounded w-40"></div>
                <div className="w-40 h-10 bg-gray-200 dark:bg-zinc-900 rounded"></div>

            </div>
            <div className="space-y-6">
                {[...Array(5)].map((_, index) => (
                    <Card key={index} className="animate-pulse">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="h-6 bg-gray-200 dark:bg-zinc-900 rounded w-3/4"></div>
                                <div className="w-5 h-5 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                            </div>
                            <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded w-1/2 mt-2"></div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-4">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="flex items-center">
                                        <div className="w-4 h-4 bg-gray-200 dark:bg-zinc-900 rounded-full mr-1"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded w-20"></div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end space-x-2">
                            <div className="w-24 h-10 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                            <div className="w-24 h-10 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </main>
    )
}