

import React from 'react'
import Footer from '../shared/footer'
import Header from '../shared/header'

const PageWrapper = ({ children }: { children: React.ReactNode }) => {

    return (
        <main className='flex flex-col min-h-screen text-zinc-800 dark:bg-zinc-950 bg-white dark:text-white transition-colors duration-200'>
            <Header />

            {/* <DynamicImport /> */}
            {children}

            <Footer />

        </main>
    )
}

export default PageWrapper