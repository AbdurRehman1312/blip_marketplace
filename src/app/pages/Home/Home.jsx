import Delivery from '@/components/Delivery/Delivery'
import Hero from '@/components/Hero/Hero'
import Work from '@/components/Work/Work'
import React from 'react'

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Work />
        <Delivery />
      </main>
    </>
  )
}

export default Home