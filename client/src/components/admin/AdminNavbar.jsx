import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const AdminNavbar = () => {
  const navigate = useNavigate()
  
  return (
    <div className="flex justify-between items-center px-6 md:px-16 lg:px-36 py-4">

  <div onClick={()=> navigate("/")} className="cursor-pointer flex items-center gap-3">
    <Link to='/'>
      <img src={assets.logo} alt="logo" className="w-auto h-10 md:h-12" />
    </Link>
    <h3 className="text-lg md:text-2xl font-semibold text-gray-100 tracking-wide uppercase drop-shadow-sm">
      Book My Movie
    </h3>
  </div>

  <button
    onClick={() => navigate("/")}
    className="px-4 md:px-6 py-2 text-xs md:text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
  >
    Home
  </button>
</div>
  )
}

export default AdminNavbar
