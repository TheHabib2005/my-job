"use client"
import React from 'react'
import Header from '../shared/header'
import Footer from '../shared/footer'

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='flex flex-col min-h-screen text-zinc-800 dark:bg-zinc-950 bg-white dark:text-white transition-colors duration-200'>
            <Header />

            {children}

            <Footer />

        </main>
    )
}

export default PageWrapper