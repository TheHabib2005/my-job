
export default function JobSearchSkeleton() {
    return (
        <main className="flex-1 container mx-auto px-4 py-8 animate-pulse">
            <div className="h-10 w-full bg-gray-200 dark:bg-zinc-900 rounded mb-8"></div>
            <form className="mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="h-10 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                    <div className="h-10 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                    <div className="h-10 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                    <div className="h-10 bg-gray-200 dark:bg-zinc-900 rounded"></div>
                </div>
            </form>
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
        </main>
    )
}