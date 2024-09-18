import { Popover, PopoverContent } from "@/components/ui/popover"
import { Building, Calendar, Clock, DollarSign, MapPin } from "lucide-react"

export default function Loading() {
    return (
        <div className="flex flex-col min-h-screen  transition-colors duration-200">
            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto animate-pulse">
                    <div className="h-9 bg-gray-200 dark:bg-zinc-900 rounded w-3/4 mb-4"></div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                        {[Building, MapPin, DollarSign, Clock, Calendar].map((Icon, index) => (
                            <div key={index} className="flex items-center">

                                <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded w-20"></div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 mb-8">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="h-9 bg-gray-200 dark:bg-zinc-900 rounded w-28"></div>
                        ))}
                        <Popover>

                            <PopoverContent className="w-auto p-2">
                                <div className="flex space-x-2">
                                    {[...Array(4)].map((_, index) => (
                                        <div key={index} className="w-8 h-8 bg-gray-200 dark:bg-zinc-900 rounded-full"></div>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="prose dark:prose-invert max-w-none space-y-6">
                        <div className="h-7 bg-gray-200 dark:bg-zinc-900 rounded w-1/3 mb-4"></div>
                        <div className="space-y-2">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="h-4 bg-gray-200 dark:bg-zinc-900 rounded w-full"></div>
                            ))}
                        </div>
                        <div className="h-7 bg-gray-200 dark:bg-zinc-900 rounded w-1/4 mb-4"></div>
                        <ul className="space-y-2">
                            {[...Array(5)].map((_, index) => (
                                <li key={index} className="flex items-center">
                                    <div className="h-4 w-4 bg-gray-200 dark:bg-zinc-900 rounded-full mr-2"></div>
                                    <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded w-5/6"></div>
                                </li>
                            ))}
                        </ul>
                        <div className="h-7 bg-gray-200 dark:bg-zinc-900 rounded w-1/4 mb-4"></div>
                        <ul className="space-y-2">
                            {[...Array(8)].map((_, index) => (
                                <li key={index} className="flex items-center">
                                    <div className="h-4 w-4 bg-gray-200 dark:bg-zinc-900 rounded-full mr-2"></div>
                                    <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded w-5/6"></div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    )
}