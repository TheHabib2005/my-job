import Footer from '@/components/shared/footer'
import Header from '@/components/shared/header'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='flex flex-col min-h-screen text-zinc-800 dark:bg-zinc-950 bg-white dark:text-white transition-colors duration-200'>
            <Header />

            {children}

            <Footer />

        </main>
    )
}

export default layout