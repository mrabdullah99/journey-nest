import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import img1 from './img1.jpg'
import img2 from './img2.webp'
import img3 from './img3.webp'
import img4 from './img4.jpeg'

function Blog() {

  const blogs=[
    {id:1, image:img1, heading:"Hingol National Park – Nature’s Hidden Gem", description:"A unique blend of mountains, beaches, and rock formations, featuring the iconic Princess of Hope and the serene Kund Malir Beach."},
    {id:2, image:img2, heading:"Serene Escape to Fairy Meadows", description:"A lush green paradise at the foot of Nanga Parbat, perfect for camping under the stars with stunning views of snow-covered peaks."},
    {id:3, image:img3, heading:"Swat – The Switzerland of Pakistan", description:"A scenic valley with lush landscapes, crystal-clear rivers, and historical gems, offering adventure and cultural exploration in every corner."},
    {id:4, image:img4, heading:"Mystical Beauty of Skardu", description:"A breathtaking valley with turquoise lakes, majestic peaks, and historic forts, offering a serene and adventurous retreat in Gilgit-Baltistan."}
  ]

  return (
    <div id='blog' className='flex flex-col gap-5 items-center p-15 px-46'>
      <div>
        <h1 className='text-3xl font-bold text-center'>Our best blog?</h1>
        <p className='font-medium text-center mt-2'>An insight to the incredible experience in the world.</p>
      </div>
      <div className='h-104 w-224 flex flex-wrap gap-x-2 gap-y-1 pt-1 pl-1'>
        {blogs.map((blog)=>(
          <div key={blog.id} className='h-50 w-110 flex gap-1 justify-center items-center'>
          <div className='h-48 w-52 rounded-2xl shadow-2xl flex justify-center items-center'>
          <img src={blog.image} className='h-46 w-50  rounded-2xl'/>
          </div>
          <div className='h-48 w-56 flex flex-col items-start gap-3.5 pt-1.5 pl-3'>
              <h3 className='text-lg font-bold'>{blog.heading}</h3>
              <p className='text-gray-500 text-xs font-medium '>{blog.description}</p>
              <button className='text-[#00BFFF] text-sm font-bold '>Read More <FontAwesomeIcon icon={faArrowRight}/></button>
          </div>
        </div>
        ))}
      </div>
      </div>
  )
}

export default Blog
