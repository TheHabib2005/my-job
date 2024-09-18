"use client"

import { SignIn, useUser } from '@clerk/nextjs'
import { Heart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../../ui/button'
import { delay } from '@/lib'
import ClipLoader from "react-spinners/ClipLoader";
import toast from 'react-hot-toast'
import { HeartFilledIcon } from '@radix-ui/react-icons'
const SavedJobButton = () => {

    const { isSignedIn } = useUser();
    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [jobSaved, setJobSaved] = useState(false)

    const bodyRef = useRef<any>();
    useEffect(() => {
        const body = window.document.body;
        bodyRef.current = body
    }, []);
    const my = async () => {
        setLoading(true)
        return new Promise(async (resolve, reject) => {
            try {
                await delay(1000)
                setLoading(false)
                setJobSaved(true)
                resolve(true)
            } catch (error) {
                reject()
            }
        })
    }
    const handleSavedJob = async () => {
        try {

            toast.promise(
                my(),
                {
                    loading: 'Saving...',
                    success: <b>Job saved!</b>,
                    error: <b>Could not save.</b>,
                }
            );
        } catch (error) {

        } finally {

        }
    }


    const toggleSaveJob = () => {

        if (!isSignedIn) {
            setShowModal(true)
            return
        }
        handleSavedJob()
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
            <Button disabled={loading || jobSaved} onClick={toggleSaveJob} className='p-3' variant={jobSaved ? "secondary" : "outline"}>
                {loading ? <ClipLoader className='mr-2' size={18} color='#fff' /> : jobSaved ? <HeartFilledIcon className='mr-2' /> : <Heart className="h-4 w-4 mr-2" />}
                {jobSaved ? 'Saved' : 'Save Job'}
            </Button>
        </div>
    )
}

export default SavedJobButton