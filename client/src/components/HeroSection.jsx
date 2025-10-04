import React from 'react'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()

  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/bg.webp")] bg-cover bg-center h-screen'>
      <h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110'>Farzi</h1>

      <div className='flex items-center gap-4 text-gray-300'>
        <span>Action | Thrill | Suspense</span>
        <div className='flex items-center gap-1'>
            <CalendarIcon className='w-4.5 h-4.5'/> 2022
        </div>
        <div className='flex items-center gap-1'>
            <ClockIcon className='w-4.5 h-4.5'/> 2h 8m
        </div>
      </div>
      <p className='max-w-md text-gray-300'>A brilliant small-time artist is catapulted into the high-stakes world of counterfeiting when he creates the perfect fake currency note</p>
      <button onClick={()=> navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
         Explore Movies
         <ArrowRight className="w-5 h-5"/>
      </button>
    </div>
  )
}

export default HeroSection
