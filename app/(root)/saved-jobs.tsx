// 'use client'

// import { useState, useEffect } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Select } from "@/components/ui/select"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Zap, Sun, Moon, Menu, X, Briefcase, MapPin, DollarSign, Clock, Search, Trash2, ExternalLink } from "lucide-react"
// import Link from "next/link"

// type Job = {
//   id: number;
//   title: string;
//   company: string;
//   location: string;
//   salary: string;
//   type: string;
//   dateAdded: string;
// }

// export default function SavedJobsPage() {
//   const [darkMode, setDarkMode] = useState(false)
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [searchTerm, setSearchTerm] = useState('')
//   const [jobType, setJobType] = useState('All')
//   const [selectedJobs, setSelectedJobs] = useState<number[]>([])
//   const [jobs, setJobs] = useState<Job[]>([
//     { id: 1, title: 'Senior Software Engineer', company: 'TechCorp', location: 'San Francisco, CA', salary: '$120,000 - $160,000', type: 'Full-time', dateAdded: '2023-06-15' },
//     { id: 2, title: 'Product Manager', company: 'InnovateCo', location: 'New York, NY', salary: '$100,000 - $130,000', type: 'Full-time', dateAdded: '2023-06-14' },
//     { id: 3, title: 'UX Designer', company: 'DesignHub', location: 'Remote', salary: '$80,000 - $110,000', type: 'Contract', dateAdded: '2023-06-13' },
//     { id: 4, title: 'Data Scientist', company: 'DataDrive', location: 'Boston, MA', salary: '$90,000 - $120,000', type: 'Full-time', dateAdded: '2023-06-12' },
//     { id: 5, title: 'Marketing Specialist', company: 'GrowthGenius', location: 'Chicago, IL', salary: '$60,000 - $80,000', type: 'Part-time', dateAdded: '2023-06-11' },
//   ])

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add('dark')
//     } else {
//       document.documentElement.classList.remove('dark')
//     }
//   }, [darkMode])

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode)
//   }

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen)
//   }

//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault()
//     // Filter jobs based on search term and job type
//     const filteredJobs = jobs.filter(job => 
//       job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (jobType === 'All' || job.type === jobType)
//     )
//     setJobs(filteredJobs)
//   }

//   const handleJobSelection = (jobId: number) => {
//     setSelectedJobs(prev => 
//       prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
//     )
//   }

//   const handleDeleteSelected = () => {
//     setJobs(prev => prev.filter(job => !selectedJobs.includes(job.id)))
//     setSelectedJobs([])
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200">
//       <header className="px-4 lg:px-6 h-16 flex items-center">
//         <Link className="flex items-center justify-center" href="#">
//           <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
//           <span className="ml-2 text-2xl font-bold text-blue-600 dark:text-blue-400">InstaJob</span>
//         </Link>
//         <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
//           <Link className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#">
//             Home
//           </Link>
//           <Link className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#">
//             Job Search
//           </Link>
//           <Link className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#">
//             Saved Jobs
//           </Link>
//           <Link className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#">
//             My Profile
//           </Link>
//         </nav>
//         <div className="flex items-center ml-auto md:ml-4">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={toggleDarkMode}
//             aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//           >
//             {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//           </Button>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="md:hidden ml-2"
//             onClick={toggleSidebar}
//             aria-label="Toggle menu"
//           >
//             <Menu className="h-5 w-5" />
//           </Button>
//         </div>
//       </header>
//       {/* Mobile Sidebar */}
//       <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
//         <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
//           <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Menu</span>
//           <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Close menu">
//             <X className="h-5 w-5" />
//           </Button>
//         </div>
//         <nav className="p-4">
//           <Link className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#" onClick={toggleSidebar}>
//             Home
//           </Link>
//           <Link className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#" onClick={toggleSidebar}>
//             Job Search
//           </Link>
//           <Link className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#" onClick={toggleSidebar}>
//             Saved Jobs
//           </Link>
//           <Link className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#" onClick={toggleSidebar}>
//             My Profile
//           </Link>
//         </nav>
//       </div>
//       <main className="flex-1 container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8">Saved Jobs</h1>
//         <Card className="mb-8">
//           <CardHeader>
//             <CardTitle>Filter Saved Jobs</CardTitle>
//             <CardDescription>Use the filters below to search through your saved jobs.</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSearch} className="space-y-4">
//               <div className="flex flex-col md:flex-row gap-4">
//                 <Input
//                   placeholder="Search job titles"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full md:w-1/2"
//                 />
//                 <Select
//                   value={jobType}
//                   onValueChange={setJobType}
//                   className="w-full md:w-1/4"
//                 >
//                   <option value="All">All Job Types</option>
//                   <option value="Full-time">Full-time</option>
//                   <option value="Part-time">Part-time</option>
//                   <option value="Contract">Contract</option>
//                   <option value="Internship">Internship</option>
//                 </Select>
//                 <Button type="submit" className="w-full md:w-auto">
//                   <Search className="h-4 w-4 mr-2" />
//                   Search
//                 </Button>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold">Your Saved Jobs</h2>
//           <Button onClick={handleDeleteSelected} variant="destructive" disabled={selectedJobs.length === 0}>
//             <Trash2 className="h-4 w-4 mr-2" />
//             Delete Selected
//           </Button>
//         </div>
//         <div className="space-y-6">
//           {jobs.map((job) => (
//             <Card key={job.id} className="hover:shadow-md transition-shadow">
//               <CardHeader>
//                 <div className="flex items-center justify-between">
//                   <CardTitle className="text-xl">{job.title}</CardTitle>
//                   <Checkbox
//                     checked={selectedJobs.includes(job.id)}
//                     onCheckedChange={() => handleJobSelection(job.id)}
//                   />
//                 </div>
//                 <CardDescription>{job.company}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
//                   <div className="flex items-center">
//                     <MapPin className="h-4 w-4 mr-1" />
//                     {job.location}
//                   </div>
//                   <div className="flex items-center">
//                     <DollarSign className="h-4 w-4 mr-1" />
//                     {job.salary}
//                   </div>
//                   <div className="flex items-center">
//                     <Clock className="h-4 w-4 mr-1" />
//                     {job.type}
//                   </div>
//                   <div className="flex items-center">
//                     <Briefcase className="h-4 w-4 mr-1" />
//                     Saved on {job.dateAdded}
//                   </div>
//                 </div>
//               </CardContent>
//               <CardFooter className="flex justify-end space-x-2">
//                 <Button variant="outline">
//                   <Link href={`/jobs/${job.id}`} className="flex items-center">
//                     <ExternalLink className="h-4 w-4 mr-2" />
//                     View Job
//                   </Link>
//                 </Button>
//                 <Button variant="destructive" onClick={() => setJobs(prev => prev.filter(j => j.id !== job.id))}>
//                   <Trash2 className="h-4 w-4 mr-2" />
//                   Remove
//                 </Button>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-gray-700">
//         <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 InstaJob. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Terms of Service
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Privacy Policy
//           </Link>
//           <Link className="text-xs hover:underline underline-offset-4" href="#">
//             Contact Us
//           </Link>
//         </nav>
//       </footer>
//     </div>
//   )
// }