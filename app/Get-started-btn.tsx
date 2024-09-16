"use client"

import { SignUp, useUser } from '@clerk/nextjs'
import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

const GetStartedBtn = () => {

    const { isSignedIn } = useUser();
    const [showModal, setShowModal] = useState(false)
    const hanldeClick = () => {

        if (isSignedIn) {

        } else {

            setShowModal(true)
        }
        // Add your custom logic here to handle the button click based on user's authentication state. For example, redirect to the sign-in page when not signed in.
    }


    return (
        <div >
            {
                showModal && <div className='w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-70 z-50' onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setShowModal(false)



                    }
                }}>
                    <SignUp afterSignUpUrl={"/"} />
                </div>
            }
            <button className="bg-white text-zinc-950 hover:bg-zinc-200 transition-colors p-3 rounded-md flex items-center" onClick={hanldeClick}>
                Get Started
                <ChevronRight className="ml-2 h-4 w-4" />
            </button>
        </div>
    )
}

export default GetStartedBtn