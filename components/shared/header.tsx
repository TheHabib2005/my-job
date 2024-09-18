"use client"
import { UserButton, useUser } from '@clerk/nextjs'
import { Heart, LogOut, Menu, User, Zap } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ToggleTheme } from '../ToggleTheme'
import { Button } from '../ui/button'

import {
    Sheet,
    SheetContent
} from "@/components/ui/sheet"


const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)


    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const { isSignedIn, isLoaded } = useUser()
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center bg-zinc-900/50">
            <Link className="flex items-center justify-center" href="/">
                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-2xl font-bold text-blue-600 dark:text-blue-400">InstaJob</span>
            </Link>
            <nav className="ml-auto mr-3 hidden gap-4 sm:gap-6 items-center md:flex">


                <Link className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="/find-job">
                    Find jobs
                </Link>

                <Link className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#">
                    About Us
                </Link>


            </nav>
            <div className='md:ml-0 ml-auto flex items-center gap-x-1'>
                <ToggleTheme />

                {
                    !isLoaded && isSignedIn && <User />
                }
                {
                    isSignedIn && <UserButton>
                        <UserButton.MenuItems>

                            <UserButton.Link
                                label="Saved Jobs"
                                labelIcon={<Heart size={15} />}
                                href="/saved-jobs"
                            />
                            <UserButton.Action label="manageAccount" />
                        </UserButton.MenuItems>
                    </UserButton>
                }
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={toggleSidebar}
                    aria-label="Toggle menu"
                >
                    <Menu className="h-5 w-5" />
                </Button>

            </div>
            {/* Mobile Sidebar */}

            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>

                <SheetContent className='border-none' >
                    <div className={` flex flex-col  h-full w-full`}>
                        <div className="flex justify-between items-center">
                            <Link className="flex items-center justify-center" href="/">
                                <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                <span className="ml-2 text-2xl font-bold text-blue-600 dark:text-blue-400">InstaJob</span>
                            </Link>

                        </div>
                        <nav className="p-2 mt-3 flex-1">
                            <Link className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="/" onClick={toggleSidebar}>
                                Home
                            </Link>
                            <Link className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="/find-job" onClick={toggleSidebar}>
                                Job Search
                            </Link>
                            <Link className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="/saved-jobs" onClick={toggleSidebar}>
                                Saved Jobs
                            </Link>
                            <Link className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="/profile" onClick={toggleSidebar}>
                                My Profile
                            </Link>
                        </nav>
                        <button className='flex  items-center p-2 bg-zinc-900 rounded-md'>
                            <LogOut />
                            <span>Logout</span>
                        </button>
                    </div>
                </SheetContent>
            </Sheet>

        </header>
    )
}

export default Header