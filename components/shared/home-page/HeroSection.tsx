import { delay } from '@/lib'
import dynamic from 'next/dynamic'
import Image from 'next/image'
const DynamicImport = dynamic(() => import("@/components/s-wrapper"), {
    loading: () => <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
        <div className="h-10 bg-gray-300 dark:bg-zinc-800 rounded flex-grow"></div>
        <div className="h-10 bg-gray-300 dark:bg-zinc-800 rounded flex-grow sm:w-1/3"></div>
        <div className="h-10 bg-gray-300 dark:bg-zinc-800 rounded w-full sm:w-auto"></div>
    </div>
})
const HeroSection = async () => {
    await delay(2000)
    return (
        <section className="bg-gray-100 dark:bg-zinc-950 py-16 transition-colors duration-200">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">The Easiest Way to Get Your New Job</h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-8">Each month, more than 3 million job seekers turn to our website in their search for work, making over 140,000 applications every single day</p>
                        {/* form */}
                        {/* <HeroSectionForm /> */}
                        <DynamicImport />
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Popular Searches: Designer, Web, IOS, PHP, Senior, Engineer
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:ml-8">
                        <Image
                            src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/homepage1/banner1.png"
                            alt="Job seekers"
                            width={400}
                            height={300}
                            className="rounded-lg  h-auto mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection