'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Briefcase, DollarSign, Edit2, Globe, Mail, MapPin, Phone, Save, User } from "lucide-react"
import Link from "next/link"
import { useState } from 'react'

export default function ProfilePage() {

    const [editMode, setEditMode] = useState(false)
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        bio: 'Experienced software engineer with a passion for creating innovative solutions.',
        website: 'https://johndoe.com',
        jobPreferences: {
            jobType: 'Full-time',
            salary: '$120,000 - $150,000',
            remote: true,
            industries: ['Technology', 'Finance', 'Healthcare']
        }
    })

    const applications = [
        { id: 1, position: 'Senior Software Engineer', company: 'TechCorp', status: 'Applied', date: '2023-06-15' },
        { id: 2, position: 'Full Stack Developer', company: 'WebSolutions', status: 'Interview', date: '2023-06-10' },
        { id: 3, position: 'Frontend Engineer', company: 'DesignHub', status: 'Rejected', date: '2023-06-05' },
    ]




    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setProfile(prev => ({ ...prev, [name]: value }))
    }

    const handleJobPreferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setProfile(prev => ({
            ...prev,
            jobPreferences: {
                ...prev.jobPreferences,
                [name]: type === 'checkbox' ? checked : value
            }
        }))
    }

    const saveProfile = () => {
        // Here you would typically send the updated profile to your backend
        console.log('Saving profile:', profile)
        setEditMode(false)
    }

    return (


        <main className="flex-1 container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">My Profile</h1>
                    <Button onClick={editMode ? saveProfile : toggleEditMode}>
                        {editMode ? <Save className="h-4 w-4 mr-2" /> : <Edit2 className="h-4 w-4 mr-2" />}
                        {editMode ? 'Save Changes' : 'Edit Profile'}
                    </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="col-span-1">
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-center">
                                <Avatar className="w-32 h-32">
                                    <AvatarImage src="/placeholder-user.jpg" alt={profile.name} />
                                    <AvatarFallback>{profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <User className="h-4 w-4 mr-2 text-gray-500" />
                                    {editMode ? (
                                        <Input name="name" value={profile.name} onChange={handleProfileChange} />
                                    ) : (
                                        <span>{profile.name}</span>
                                    )}
                                </div>
                                <div className="flex items-center">
                                    <Mail className="h-4 w-4 mr-2 text-gray-500" />
                                    {editMode ? (
                                        <Input name="email" value={profile.email} onChange={handleProfileChange} />
                                    ) : (
                                        <span>{profile.email}</span>
                                    )}
                                </div>
                                <div className="flex items-center">
                                    <Phone className="h-4 w-4 mr-2 text-gray-500" />
                                    {editMode ? (
                                        <Input name="phone" value={profile.phone} onChange={handleProfileChange} />
                                    ) : (
                                        <span>{profile.phone}</span>
                                    )}
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                                    {editMode ? (
                                        <Input name="location" value={profile.location} onChange={handleProfileChange} />
                                    ) : (
                                        <span>{profile.location}</span>
                                    )}
                                </div>
                                <div className="flex items-center">
                                    <Globe className="h-4 w-4 mr-2 text-gray-500" />
                                    {editMode ? (
                                        <Input name="website" value={profile.website} onChange={handleProfileChange} />
                                    ) : (
                                        <Link href={profile.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                                            {profile.website}
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="col-span-1 md:col-span-2">
                        <CardHeader>
                            <CardTitle>Professional Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <Label htmlFor="bio">Bio</Label>
                                {editMode ? (
                                    <Textarea id="bio" name="bio" value={profile.bio} onChange={handleProfileChange} className="mt-1" />
                                ) : (
                                    <p>{profile.bio}</p>
                                )}
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Job Preferences</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center">
                                        <Briefcase className="h-4 w-4 mr-2 text-gray-500" />
                                        <Label htmlFor="jobType" className="mr-2">Job Type:</Label>
                                        {editMode ? (
                                            <Input id="jobType" name="jobType" value={profile.jobPreferences.jobType} onChange={handleJobPreferenceChange} className="w-40" />
                                        ) : (
                                            <span>{profile.jobPreferences.jobType}</span>
                                        )}
                                    </div>
                                    <div className="flex items-center">
                                        <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                                        <Label htmlFor="salary" className="mr-2">Salary Range:</Label>
                                        {editMode ? (
                                            <Input id="salary" name="salary" value={profile.jobPreferences.salary} onChange={handleJobPreferenceChange} className="w-40" />
                                        ) : (
                                            <span>{profile.jobPreferences.salary}</span>
                                        )}
                                    </div>
                                    <div className="flex items-center">
                                        <Globe className="h-4 w-4 mr-2 text-gray-500" />
                                        <Label htmlFor="remote" className="mr-2">Remote Work:</Label>
                                        {editMode ? (
                                            <Switch id="remote" name="remote" checked={profile.jobPreferences.remote} onCheckedChange={(checked) => handleJobPreferenceChange({ target: { name: 'remote', type: 'checkbox', checked } } as React.ChangeEvent<HTMLInputElement>)} />
                                        ) : (
                                            <span>{profile.jobPreferences.remote ? 'Yes' : 'No'}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Application History</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="all" className="w-full">
                            <TabsList>
                                <TabsTrigger value="all">All Applications</TabsTrigger>
                                <TabsTrigger value="active">Active</TabsTrigger>
                                <TabsTrigger value="archived">Archived</TabsTrigger>
                            </TabsList>
                            <TabsContent value="all">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left py-2">Position</th>
                                            <th className="text-left py-2">Company</th>
                                            <th className="text-left py-2">Status</th>
                                            <th className="text-left py-2">Date Applied</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {applications.map((app) => (
                                            <tr key={app.id}>
                                                <td className="py-2">{app.position}</td>
                                                <td className="py-2">{app.company}</td>
                                                <td className="py-2">{app.status}</td>
                                                <td className="py-2">{app.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </TabsContent>
                            <TabsContent value="active">
                                <p>Active applications will be shown here.</p>
                            </TabsContent>
                            <TabsContent value="archived">
                                <p>Archived applications will be shown here.</p>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </main>
    )

}