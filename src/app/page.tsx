import React from 'react'
import Hero from './components/Hero'
import Featuredsection from './components/Featuredsection'
import MovingCards from './components/MovingCards'
import Webinars from './components/Webinars'
import Instructors from './components/Instructors'

const page = () => {
  return (
    <main className="min-h-screen bg-black/10 antialiased bg-grid-white/20">
      <Hero/>
      <Featuredsection/>
      <MovingCards/>
      <Webinars/>
      <Instructors/>
    </main>
  )
}

export default page