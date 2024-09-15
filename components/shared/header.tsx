"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { BriefcaseBusiness, Heart, Menu, User, X, Zap } from 'lucide-react'
import { ToggleTheme } from '../ToggleTheme'
import { Button } from '../ui/button'
import { UserButton, useUser } from '@clerk/nextjs'



const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    const { isSignedIn, isLoaded } = useUser()
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center">
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
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={toggleSidebar}
                    aria-label="Toggle menu"
                >
                    <Menu className="h-5 w-5" />
                </Button>
                {
                    !isLoaded && <User />
                }
                {
                    isSignedIn && <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Link
                                label="My Jobs"
                                labelIcon={<BriefcaseBusiness size={15} />}
                                href="/my-jobs"
                            />
                            <UserButton.Link
                                label="Saved Jobs"
                                labelIcon={<Heart size={15} />}
                                href="/saved-jobs"
                            />
                            <UserButton.Action label="manageAccount" />
                        </UserButton.MenuItems>
                    </UserButton>
                }


            </div>
            {/* Mobile Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-zinc-800 shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Menu</span>
                    <Button variant="ghost" size="icon" onClick={toggleSidebar} aria-label="Close menu">
                        <X className="h-5 w-5" />
                    </Button>
                </div>
                <nav className="p-4">
                    <Link className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#" onClick={toggleSidebar}>
                        Home
                    </Link>
                    <Link className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#" onClick={toggleSidebar}>
                        Job Search
                    </Link>
                    <Link className="block py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#" onClick={toggleSidebar}>
                        My Profile
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header