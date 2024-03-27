"use client";
import React from 'react'
import { BackgroundBeams } from '../components/ui/background-beams';

const page = () => {
  return (
   <main>
    <div className='py-10 pt-40 min-h-screen bg-black '>
        <h1 className='text-center text-5xl font-bold pt-10'>Contact Us</h1>
        <p className='text-center pt-5 text-gray-400 w-[20rem] sm:w-[35rem] mx-auto'>We're here to help with any wuestions about our courses,programs,or
            events.Reach out and let us know how we can assist you in 
            your musical journey.
        </p>
        <form action="https://formspree.io/f/mvoewgkl" method='POST'>
          <div className='grid justify-center items-center'>
          <input type="email" placeholder='Enter your email' required className='m-5 p-5 w-full bg-transparent border'/>
           <textarea name="textarea" id="textarea" cols={10} rows={10} placeholder='Enter your message' required className='m-5 p-5 w-full bg-transparent border'></textarea>
           <button type='submit' className='bg-green-700 w-fit p-2 rounded-xl'>
            send message
          </button>
          </div>
        </form>
        <BackgroundBeams />
    </div>
   </main>
  )
}

export default page