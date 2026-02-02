import React from 'react'
import {NavLink} from 'react-router'
function Navbar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    
    <nav className='absolute z-50 text-white min-h-10 w-full flex justify-between items-center 
      top-2 font-medium'>
      <div className='logo ml-4 font-extrabold'>
        JourneyNest
      </div>
      <div className=' flex space-x-10 mr-10'>
      <a onClick={() => scrollToSection('home')} className="hover:text-[#0095fd]">Home</a>
      <a onClick={() => scrollToSection('journey')} className="hover:text-[#0095fd]">Journeys</a>
      <a onClick={() => scrollToSection('blog')} className="hover:text-[#0095fd]">Blog</a>
      <a onClick={() => scrollToSection('offer')} className="hover:text-[#0095fd]">Offers</a>
      <a onClick={() => scrollToSection('about')} className="hover:text-[#0095fd]">About</a>
      <button onClick={() => scrollToSection('login')} className='bg-[#00BFFF] py-1 px-2 rounded-xl hover:bg-[#0095fd]'>LogIn</button>
      <button onClick={() => scrollToSection('signup')}className='bg-[#00BFFF] py-1 px-2 rounded-xl hover:bg-[#0095fd]'>SignUp</button>
      {/* bg-[#00e6e6]  bg-[#00c8c8] */}
      </div>
    </nav>
  )
}

export default Navbar
