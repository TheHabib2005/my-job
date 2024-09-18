"use client"
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import React from 'react'

const DeleteJob = () => {
    const handleDeleteSelected = () => {

    }
    return (
        <Button onClick={handleDeleteSelected} variant="destructive">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Job
        </Button>
    )
}

export default DeleteJob