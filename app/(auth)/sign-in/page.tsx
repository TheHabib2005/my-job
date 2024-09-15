import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <div className="fixed top-0 left-0 z-50 bg-black  w-full h-screen flex items-center justify-center">
            <SignIn />
        </div>
    )
}

export default page