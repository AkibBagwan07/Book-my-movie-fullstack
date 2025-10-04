import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {

 const [isOpen, setIsOpen] = useState(false)
 const {user} = useUser()
 const {openSignIn} = useClerk()

 const navigate = useNavigate()

 const {favoriteMovies} = useAppContext()

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-12 py-5'>
      <div className='flex items-center gap-2'>
      <img
  src={assets.logo}
  alt="logo"
  className="w-14 sm:w-12 md:w-12 h-auto min-w-[40px]"
/>

        {/* <h3 className='text-gray-300 font-bold text-lg'>Book My Movie</h3> */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-100 tracking-wide uppercase drop-shadow-sm">
  Book My Movie
</h3>
      </div>
      <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border border-gray-300/20 overflow-hidden transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>

        <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer' onClick={()=> setIsOpen(!isOpen)}/>

        <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/'>Home</Link>
        <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/movies'>Movies</Link>
        <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/'>Theaters</Link>
        <Link onClick={()=> {scrollTo(0,0); setIsOpen(false)}} to='/'>Releases</Link>
        {favoriteMovies.length > 0 && <Link onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to='/favorite'>Favorites</Link>}
      </div>

    <div className="flex items-center gap-4">
  <button
    onClick={() => navigate("/admin")}
    className="px-3 sm:px-4 md:px-6 py-1 sm:py-2 text-xs sm:text-sm md:text-base bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
  >
    Admin
  </button>

  {!user ? (
    <button
      onClick={openSignIn}
      className="px-3 sm:px-4 md:px-6 py-1 sm:py-2 text-xs sm:text-sm md:text-base bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
    >
      Login
    </button>
  ) : (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Action
          label="My Bookings"
          labelIcon={<TicketPlus width={15} />}
          onClick={() => navigate('/my-bookings')}
        />
      </UserButton.MenuItems>
    </UserButton>
  )}
</div>


  <MenuIcon
    className="md:hidden w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-white cursor-pointer"
    onClick={() => setIsOpen(!isOpen)}
  />
    </div>
  )
}

export default Navbar
