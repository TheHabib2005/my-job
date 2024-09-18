"use client"
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import React, { useState } from 'react'

const ApplyJobButton = () => {
    const [applyDialogOpen, setApplyDialogOpen] = useState(false)
    const [applicationForm, setApplicationForm] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        coverLetter: ''
    })



    const handleApplyNow = () => {
        setApplyDialogOpen(true)
    }



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setApplicationForm(prev => ({ ...prev, [name]: value }))
    }

    const handleFileChange = () => {

    }

    const handleSubmitApplication = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the application data to your backend
        console.log('Submitting application:', applicationForm)
        setApplyDialogOpen(false)
        // Reset form after submission
        setApplicationForm({
            name: '',
            email: '',
            phone: '',
            resume: null,
            coverLetter: ''
        })
    }
    return (
        <>
            <Button onClick={handleApplyNow}>
                <Send className="h-4 w-4 mr-2" />
                Apply Now
            </Button>

            {/* Apply Job Dialog */}
            <Dialog open={applyDialogOpen} onOpenChange={setApplyDialogOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Apply for {"Job Title"}</DialogTitle>
                        <DialogDescription>
                            Fill out the form below to apply for this position at {"Company-name"}.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmitApplication}>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={applicationForm.name}
                                    onChange={handleInputChange}
                                    className="col-span-3"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={applicationForm.email}
                                    onChange={handleInputChange}
                                    className="col-span-3"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phone" className="text-right">
                                    Phone
                                </Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={applicationForm.phone}
                                    onChange={handleInputChange}
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="resume" className="text-right">
                                    Resume
                                </Label>
                                <Input
                                    id="resume"
                                    name="resume"
                                    type="file"
                                    onChange={handleFileChange}
                                    className="col-span-3"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="coverLetter" className="text-right">
                                    Cover Letter
                                </Label>
                                <Textarea
                                    id="coverLetter"
                                    name="coverLetter"
                                    value={applicationForm.coverLetter}
                                    onChange={handleInputChange}
                                    className="col-span-3"
                                    rows={4}
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Submit Application</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ApplyJobButton