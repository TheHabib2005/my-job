"use client"
import PageWrapper from '@/components/page/page-wrapper'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <PageWrapper>
            {children}
        </PageWrapper>
    )
}

export default layout