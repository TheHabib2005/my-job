

import ApplyJobButton from "@/components/shared/btns/apply-job-btn"
import GetStartedBtn from "@/components/shared/btns/saved-job-btn"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { delay } from "@/lib"
import { Building, Calendar, Clock, DollarSign, Facebook, Linkedin, Mail, MapPin, Share2, Twitter } from "lucide-react"

export default async function ViewJobPage() {

    await delay(2000)

    const job = {
        id: '12345',
        title: 'Senior Software Engineer',
        company: 'TechCorp',
        location: 'San Francisco, CA',
        salary: '$120,000 - $160,000',
        type: 'Full-time',
        posted: '2 days ago',
        description: 'We are seeking a talented Senior Software Engineer to join our dynamic team. The ideal candidate will have a strong background in full-stack development, with expertise in React, Node.js, and cloud technologies. You will be responsible for designing, developing, and maintaining high-performance, scalable web applications.',
        responsibilities: [
            'Design and implement new features for our core product',
            'Collaborate with cross-functional teams to define and implement innovative solutions',
            'Write clean, maintainable, and efficient code',
            'Participate in code reviews and mentor junior developers',
            'Troubleshoot, debug, and upgrade existing systems',
        ],
        requirements: [
            '5+ years of experience in software development',
            'Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model',
            'Thorough understanding of React.js and its core principles',
            'Experience with popular React.js workflows (such as Flux or Redux)',
            'Familiarity with RESTful APIs and modern authorization mechanisms',
            'Knowledge of Node.js and Express.js',
            'Experience with cloud services (AWS, Azure, or GCP)',
            'Excellent problem-solving skills and attention to detail',
        ],
    }

    const shareUrl = `https://instajob.com/job/${job.id}`
    const shareText = `Check out this ${job.title} position at ${job.company}!`

    const shareLinks = [
        { name: 'Facebook', icon: Facebook, url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}` },
        { name: 'Twitter', icon: Twitter, url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}` },
        { name: 'LinkedIn', icon: Linkedin, url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}` },
        { name: 'Email', icon: Mail, url: `mailto:?subject=${encodeURIComponent(shareText)}&body=${encodeURIComponent(shareUrl)}` },
    ]


    return (
        <div className="flex flex-col min-h-screen dark:bg-zinc-900/80 dark:text-white transition-colors duration-200">

            <main className="flex-1 container mx-auto px-4 py-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                        <div className="flex items-center">
                            <Building className="h-4 w-4 mr-1" />
                            {job.company}
                        </div>
                        <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                        </div>
                        <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                        </div>
                        <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                        </div>
                        <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Posted {job.posted}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 mb-8">

                        <GetStartedBtn />
                        <ApplyJobButton />
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline">
                                    <Share2 className="h-4 w-4 mr-2" />
                                    Share
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-2">
                                <div className="flex space-x-2">
                                    {shareLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
                                            aria-label={`Share on ${link.name}`}
                                        >
                                            <link.icon className="h-5 w-5" />
                                        </a>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="prose dark:prose-invert max-w-none">
                        <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
                        <p>{job.description}</p>
                        <h3 className="text-xl font-semibold mt-6 mb-4">Responsibilities</h3>
                        <ul>
                            {job.responsibilities.map((responsibility, index) => (
                                <li key={index}><span className='mx-2 font-sans'>{index + 1}</span>{responsibility}</li>
                            ))}
                        </ul>
                        <h3 className="text-xl font-semibold mt-6 mb-4">Requirements</h3>
                        <ul>
                            {job.requirements.map((requirement, index) => (
                                <li key={index}><span className='mx-2 font-sans'>{index + 1}</span>{requirement}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>






        </div>
    )
}