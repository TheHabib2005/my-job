import React from 'react'
import { Clock, DollarSign, MapPin } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'



const JobCard = ({ logo, title, company, location, salary, type }: jobCardType) => (
    <Card className="dark:bg-zinc-900">
        <CardHeader className="flex flex-row items-center space-x-4">
            <Avatar className="h-12 w-12">
                <AvatarImage src={logo} alt={company} />
                <AvatarFallback>{company[0]}</AvatarFallback>
            </Avatar>
            <div>
                <CardTitle className="dark:text-white">{title}</CardTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400">{company}</p>
            </div>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center">
                    <MapPin className="mr-1 h-4 w-4" />
                    {location}
                </div>
                <div className="flex items-center">
                    <DollarSign className="mr-1 h-4 w-4" />
                    {salary}
                </div>
                <div className="flex items-center">
                    <Clock className="mr-1 h-4 w-4" />
                    {type}
                </div>
            </div>
        </CardContent>
        <CardFooter>
            <Button className="w-full">Apply Now</Button>
        </CardFooter>
    </Card>
)


export default JobCard