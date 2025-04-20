import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white py-3.5 px-10 shadow-lg'>
        <div className="logo ">
          <span className='font-extrabold text-3xl tracking-wider' style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span className='text-cyan-400'>क</span>aal<span className='text-cyan-400'>पथ</span>
          </span>
        </div>
        <ul className='flex gap-8 text-lg'>
          <Link to='/'><li className='cursor-pointer hover:font-semibold hover:text-cyan-400 transition-all duration-300' style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 'bold' }}>Home</li></Link>
          <Link to='task'><li className='cursor-pointer hover:font-semibold hover:text-cyan-400 transition-all duration-300' style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 'bold' }}>Your Tasks</li></Link>
          <Link to='about'><li className='cursor-pointer hover:font-semibold hover:text-cyan-400 transition-all duration-300' style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 'bold' }}>About</li></Link>
          <Link to='contact'><li className='cursor-pointer hover:font-semibold hover:text-cyan-400 transition-all duration-300' style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 'bold' }}>Contact</li></Link>
        </ul>
        {/* <button className='bg-cyan-400 text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-cyan-300 transition-all duration-300 shadow-md'>
          Login
        </button> */}
      </nav>
      <div className="h-0.5 bg-cyan-400"></div>
    </>
  )
}

export default Navbar
