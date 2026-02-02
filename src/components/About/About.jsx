import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function About() {

  const aboutInfo=[
    {id:1, header:"Information", val1:"Home", val2:"Explore", val3:"Travel",val4:"Blog"},
    {id:2, header:"Helpful Links", val1:"Destination", val2:"Support", val3:"Travel&Condition",val4:"Privacy"},
    {id:3, header:"Contact", val1:"+92 3124567890", val2:"xabcdefghi123@gmail.com"}
  ]

  return (
    <div id='about' className='bg-[#0095fd] flex gap-5 justify-center' >
      <div className=' text-white w-45 flex flex-col items-start gap-y-3 p-4 mt-7 mb-10'>
        <h1 className=' text-xl font-bold'>JourneyNest</h1>
        <div className='flex gap-x-1'>
        <button className='bg-[#00BFFF]  px-3 rounded-full hover:bg-[#0095fd]'><FontAwesomeIcon icon={faFacebookF} /></button>
        <button className='bg-[#00BFFF]  px-2.5 rounded-full hover:bg-[#0095fd]'><FontAwesomeIcon icon={faTwitter} /></button>
        <button className='bg-[#00BFFF] px-3 rounded-full hover:bg-[#0095fd]'><FontAwesomeIcon icon={faLinkedinIn} /></button>
        </div>
      </div>
      {aboutInfo.map((info)=>(
        <div key={info.id} className=' text-gray-200 text-xs font-medium w-45 flex flex-col items-start justify-start p-4 mt-7 mb-10'>
        <h5 className='mb-2 text-white text-sm font-bold'>{info.header}</h5>
        <a className='hover:text-gray-700'>{info.val1}</a>
        <a className='hover:text-gray-700'>{info.val2}</a>
        <a className='hover:text-gray-700'>{info.val3}</a>
        <a className='hover:text-gray-700'>{info.val4}</a>
      </div>
      ))}
    </div>
  )
}

export default About
