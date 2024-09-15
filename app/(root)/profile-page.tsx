// 'use client'

// import { useState, useEffect } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Switch } from "@/components/ui/switch"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Zap, Sun, Moon, Menu, X, User, Briefcase, MapPin, DollarSign, Clock, Mail, Phone, Globe, FileText, Edit2, Save } from "lucide-react"
// import Link from "next/link"

// export default function ProfilePage() {
//   const [darkMode, setDarkMode] = useState(false)
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const [editMode, setEditMode] = useState(false)
//   const [profile, setProfile] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     phone: '+1 (555) 123-4567',
//     location: 'San Francisco, CA',
//     bio: 'Experienced software engineer with a passion for creating innovative solutions.',
//     website: 'https://johndoe.com',
//     jobPreferences: {
//       jobType: 'Full-time',
//       salary: '$120,000 - $150,000',
//       remote: true,
//       industries: ['Technology', 'Finance', 'Healthcare']
//     }
//   })

//   const applications = [
//     { id: 1, position: 'Senior Software Engineer', company: 'TechCorp', status: 'Applied', date: '2023-06-15' },
//     { id: 2, position: 'Full Stack Developer', company: 'WebSolutions', status: 'Interview', date: '2023-06-10' },
//     { id: 3, position: 'Frontend Engineer', company: 'DesignHub', status: 'Rejected', date: '2023-06-05' },
//   ]

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

//   const toggleEditMode = () => {
//     setEditMode(!editMode)
//   }

//   const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setProfile(prev => ({ ...prev, [name]: value }))
//   }

//   const handleJobPreferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target
//     setProfile(prev => ({
//       ...prev,
//       jobPreferences: {
//         ...prev.jobPreferences,
//         [name]: type === 'checkbox' ? checked : value
//       }
//     }))
//   }

//   const saveProfile = () => {
//     // Here you would typically send the updated profile to your backend
//     console.log('Saving profile:', profile)
//     setEditMode(false)
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
//             My Profile
//           </Link>
//         </nav>
//       </div>
//       <main className="flex-1 container mx-auto px-4 py-8">
//         <div className="max-w-4xl mx-auto">
//           <div className="flex justify-between items-center mb-8">
//             <h1 className="text-3xl font-bold">My Profile</h1>
//             <Button onClick={editMode ? saveProfile : toggleEditMode}>
//               {editMode ? <Save className="h-4 w-4 mr-2" /> : <Edit2 className="h-4 w-4 mr-2" />}
//               {editMode ? 'Save Changes' : 'Edit Profile'}
//             </Button>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="col-span-1">
//               <CardHeader>
//                 <CardTitle>Personal Information</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex justify-center">
//                   <Avatar className="w-32 h-32">
//                     <AvatarImage src="/placeholder-user.jpg" alt={profile.name} />
//                     <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
//                   </Avatar>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="flex items-center">
//                     <User className="h-4 w-4 mr-2 text-gray-500" />
//                     {editMode ? (
//                       <Input name="name" value={profile.name} onChange={handleProfileChange} />
//                     ) : (
//                       <span>{profile.name}</span>
//                     )}
//                   </div>
//                   <div className="flex items-center">
//                     <Mail className="h-4 w-4 mr-2 text-gray-500" />
//                     {editMode ? (
//                       <Input name="email" value={profile.email} onChange={handleProfileChange} />
//                     ) : (
//                       <span>{profile.email}</span>
//                     )}
//                   </div>
//                   <div className="flex items-center">
//                     <Phone className="h-4 w-4 mr-2 text-gray-500" />
//                     {editMode ? (
//                       <Input name="phone" value={profile.phone} onChange={handleProfileChange} />
//                     ) : (
//                       <span>{profile.phone}</span>
//                     )}
//                   </div>
//                   <div className="flex items-center">
//                     <MapPin className="h-4 w-4 mr-2 text-gray-500" />
//                     {editMode ? (
//                       <Input name="location" value={profile.location} onChange={handleProfileChange} />
//                     ) : (
//                       <span>{profile.location}</span>
//                     )}
//                   </div>
//                   <div className="flex items-center">
//                     <Globe className="h-4 w-4 mr-2 text-gray-500" />
//                     {editMode ? (
//                       <Input name="website" value={profile.website} onChange={handleProfileChange} />
//                     ) : (
//                       <Link href={profile.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
//                         {profile.website}
//                       </Link>
//                     )}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card className="col-span-1 md:col-span-2">
//               <CardHeader>
//                 <CardTitle>Professional Information</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div>
//                   <Label htmlFor="bio">Bio</Label>
//                   {editMode ? (
//                     <Textarea id="bio" name="bio" value={profile.bio} onChange={handleProfileChange} className="mt-1" />
//                   ) : (
//                     <p>{profile.bio}</p>
//                   )}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-2">Job Preferences</h3>
//                   <div className="space-y-2">
//                     <div className="flex items-center">
//                       <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
//                       <Label htmlFor="jobType" className="mr-2">Job Type:</Label>
//                       {editMode ? (
//                         <Input id="jobType" name="jobType" value={profile.jobPreferences.jobType} onChange={handleJobPreferenceChange} className="w-40" />
//                       ) : (
//                         <span>{profile.jobPreferences.jobType}</span>
//                       )}
//                     </div>
//                     <div className="flex items-center">
//                       <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
//                       <Label htmlFor="salary" className="mr-2">Salary Range:</Label>
//                       {editMode ? (
//                         <Input id="salary" name="salary" value={profile.jobPreferences.salary} onChange={handleJobPreferenceChange} className="w-40" />
//                       ) : (
//                         <span>{profile.jobPreferences.salary}</span>
//                       )}
//                     </div>
//                     <div className="flex items-center">
//                       <Globe className="h-4 w-4 mr-2 text-gray-500" />
//                       <Label htmlFor="remote" className="mr-2">Remote Work:</Label>
//                       {editMode ? (
//                         <Switch id="remote" name="remote" checked={profile.jobPreferences.remote} onCheckedChange={(checked) => handleJobPreferenceChange({ target: { name: 'remote', type: 'checkbox', checked } } as React.ChangeEvent<HTMLInputElement>)} />
//                       ) : (
//                         <span>{profile.jobPreferences.remote ? 'Yes' : 'No'}</span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//           <Card className="mt-8">
//             <CardHeader>
//               <CardTitle>Application History</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <Tabs defaultValue="all" className="w-full">
//                 <TabsList>
//                   <TabsTrigger value="all">All Applications</TabsTrigger>
//                   <TabsTrigger value="active">Active</TabsTrigger>
//                   <TabsTrigger value="archived">Archived</TabsTrigger>
//                 </TabsList>
//                 <TabsContent value="all">
//                   <table className="w-full">
//                     <thead>
//                       <tr>
//                         <th className="text-left py-2">Position</th>
//                         <th className="text-left py-2">Company</th>
//                         <th className="text-left py-2">Status</th>
//                         <th className="text-left py-2">Date Applied</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {applications.map((app) => (
//                         <tr key={app.id}>
//                           <td className="py-2">{app.position}</td>
//                           <td className="py-2">{app.company}</td>
//                           <td className="py-2">{app.status}</td>
//                           <td className="py-2">{app.date}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </TabsContent>
//                 <TabsContent value="active">
//                   <p>Active applications will be shown here.</p>
//                 </TabsContent>
//                 <TabsContent value="archived">
//                   <p>Archived applications will be shown here.</p>
//                 </TabsContent>
//               </Tabs>
//             </CardContent>
//           </Card>
//         </div>
//       </main>
//       <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t dark:border-gray-700">
//         <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 InstaJob. All rights reserved.</p>
//         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
