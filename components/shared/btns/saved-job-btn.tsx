"use client"

import { SignIn, useUser } from '@clerk/nextjs'
import { Heart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../../ui/button'

const SavedJobButton = () => {

    const { isSignedIn } = useUser();
    const [showModal, setShowModal] = useState(false)
    const [jobSaved] = useState(false)


    const bodyRef = useRef<any>();
    useEffect(() => {
        const body = window.document.body;
        bodyRef.current = body
    }, [])


    const toggleSaveJob = () => {

        if (!isSignedIn) {
            setShowModal(true)
            return
        }


        // setJobSaved(!jobSaved)
    }

    useEffect(() => {
        return () => {
            bodyRef.current.classList.remove("hide-scroll-bar")
        }
    }, [])

    return (
        <div >
            {
                showModal && <div className='w-full h-screen fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-70 z-50' onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setShowModal(false)
                        bodyRef.current.classList.remove("hide-scroll-bar")


                    }
                }}>
                    <SignIn afterSignInUrl={"/profile"} />
                </div>
            }
            <Button onClick={toggleSaveJob} className='p-3' variant={jobSaved ? "secondary" : "outline"}>
                <Heart className="h-4 w-4 mr-2" />
                {jobSaved ? 'Saved' : 'Save Job'}
            </Button>
        </div>
    )
}

export default SavedJobButton