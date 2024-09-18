import HomePage from '@/components/page/home-page'
import { delay } from '@/lib'
import React from 'react'

const Home = async () => {
  await delay(500)
  return (
    <HomePage />
  )
}

export default Home