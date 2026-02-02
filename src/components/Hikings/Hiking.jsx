import React from 'react'
import img1 from './img1.webp'
import img2 from './img2.webp'
import img3 from './img3.webp'
import video from './video.mp4'
function Hiking() {

    const logos=[
        {id:1, img:img1,heading:"Breathtaking Destinations",description:"Explore Skardu’s serene lakes and Fairy Meadows’ majestic peaks—where adventure meets tranquility."},
        {id:2, img:img2,heading:"Unparalleled Travel Services", description:"Seamless experiences with luxury stays, guided tours, and expert planning."},
        {id:3, img:img3,heading:"Hassle Free Booking",description:"Easy reservations, flexible payments, and 24/7 support for stress-free travel."}
    ]
  return (
    <div id='explore' className=' p-30 pt-17 flex flex-col gap-5 items-center'>
      <div>
      <h1 className='text-3xl font-bold text-center'>Why Choose Us?</h1>
      </div>
      <div className=' h-50 flex gap-x-3'>
        {logos.map((logo)=>(
        <div key={logo.id} className=' h-50 w-80 flex flex-col items-center gap-y-2'>
            <img src={logo.img} className='h-23 w-23 rounded-full text-center' />
            <h3 className='text-lg font-bold'>{logo.heading}</h3>
            <p className='text-gray-500 text-xs font-medium text-center max-w-md mx-auto '>{logo.description}</p>
        </div>
        ))}
      </div>
      <div className='bg-[#0095fd] h-70 flex justify-center items-center p-10  rounded-md'>
        <div className=' w-105 pt-7 pl-5 flex flex-col gap-y-3.5'>
            <h1 className='text-white text-3xl font-bold'>WonderfulHouse Experience nin there</h1>
            <p className='text-gray-300 text-sm font-medium'>The Adventure subranking is based on an equally weighted average of scores from five country.</p>
        </div>
        <div className=" w-72 h-40 rounded-2xl">
             <video className="w-full h-full rounded-2xl" autoPlay loop muted playsInline>
             <source src={video} type="video/mp4" />
             Your browser does not support the video tag.
             </video>
        </div>
      </div>
    </div>
  )
}

export default Hiking
