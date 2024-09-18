import { delay } from '@/lib'
import React from 'react'
import HeroSectionForm from './shared/home-page/banner-form'

const Swrapper = async () => {
    await delay(5000)
    return (
        <HeroSectionForm />
    )
}

export default Swrapper