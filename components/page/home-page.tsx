

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Briefcase, ChevronRight, Clock, Search, ThumbsUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {


  return (


    <section className="flex-1">

      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Your Dream Job, <span className="text-blue-600 dark:text-blue-400">Instantly</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                Find and apply to your perfect job in seconds. No more endless scrolling or complicated applications.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="flex-1 flex " placeholder="Job title or keyword" type="text" />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Why Choose InstaJob?
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border border-blue-200 dark:border-blue-800 p-6 rounded-lg bg-white dark:bg-gray-700">
              <Clock className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold">Lightning Fast</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Find relevant job listings in seconds, not hours.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-blue-200 dark:border-blue-800 p-6 rounded-lg bg-white dark:bg-gray-700">
              <ThumbsUp className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold">One-Click Apply</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Apply to jobs with a single click using your InstaJob profile.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-blue-200 dark:border-blue-800 p-6 rounded-lg bg-white dark:bg-gray-700">
              <Briefcase className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold">Personalized Matches</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Get job recommendations tailored to your skills and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Supercharge Your Job Search?
              </h2>
              <p className="max-w-[900px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of professionals {"who've"} found their dream jobs in record time with InstaJob.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-2">
                <Input placeholder="Enter your email" type="email" className="border border-white" />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Get Started Free
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                No credit card required. By signing up, you agree to our{" "}
                <Link className="underline underline-offset-2 hover:text-blue-500 dark:hover:text-blue-400" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
            Success Stories
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 border border-blue-200 dark:border-blue-800 p-6 rounded-lg bg-white dark:bg-gray-700">
              <img
                alt="Sarah J."
                className="rounded-full"
                height="80"
                src="/placeholder.svg?height=80&width=80"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <h3 className="text-xl font-bold">Sarah J.</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                I found my dream job in just 3 days using InstaJob. The process was incredibly smooth!
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-blue-200 dark:border-blue-800 p-6 rounded-lg bg-white dark:bg-gray-700">
              <img
                alt="Michael T."
                className="rounded-full"
                height="80"
                src="/placeholder.svg?height=80&width=80"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <h3 className="text-xl font-bold">Michael T.</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                The one-click apply feature saved me hours of time. I landed a great position within a week!
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border border-blue-200 dark:border-blue-800 p-6 rounded-lg bg-white dark:bg-gray-700">
              <img
                alt="Emily R."
                className="rounded-full"
                height="80"
                src="/placeholder.svg?height=80&width=80"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
              <h3 className="text-xl font-bold">Emily R.</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                The personalized job matches were spot-on. I found a role that perfectly fits my skills and aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>


  )
}