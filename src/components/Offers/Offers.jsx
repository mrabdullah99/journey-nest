import React from 'react'
import img1 from './img1.jpeg'
import img2 from './img2.jpeg'
import img3 from './img3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCarSide,faShower,faWifi,faVanShuttle,faArrowRight,faLocationDot} from '@fortawesome/free-solid-svg-icons'

function Offers() {

    const cards=[
        {id:1,image:img1,offer:"50000 PKR",location:"Shakarparian National Park, Garden Avenue, Islamabad"},
        {id:2,image:img2,offer:"35000 PKR",location:"Beach Avenue, Block 4, Clifton, Karachi, Sindh"},
        {id:3,image:img3,offer:"30000 PKR",location:"Neelum Valley Road, Ratti Gali, Azad Jammu & Kashmir"}
    ]
  return (
    <div id='offer' className=' p-20 flex flex-col items-center'>
          <div>
            <h1 className='text-3xl font-bold text-center'>Special Offers</h1>
            <p className=' font-medium text-center mt-2'>
              From historical cities to natural spectaculars, come see the best of the world!</p>
          </div>
          <div className='h-95 w-224 flex justify-between mt-10 gap-3 '>
            {cards.map((card)=>(
            <div key={card.id} className='bg-white h-95 w-73 rounded-xl shadow-2xl overflow-hidden'>
              <img src={card.image} alt={"error"}
              className='w-69 h-35 rounded-lg m-1.5 mb-4'/>
              <div className=' flex p-4 pt-0 flex-col gap-y-3'>
                <div className='w-64 flex justify-between'>
                <h1 className='text-xl font-bold'>{card.offer}</h1>
                <button className='bg-gray-100 text-[#00BFFF] font-medium text-sm rounded-xl py-1 px-2 mr-5 hover:bg-gray-300'>
                    For Rent</button>
                </div>
                <div className='flex gap-x-2 flex-wrap gap-y-2'>
                    <button className='bg-gray-100 text-sm text-gray-500 font-medium px-2 py-1 rounded-sm'>
                    <FontAwesomeIcon icon={faCarSide}/> 2 Beds</button>
                    <button className='bg-gray-100 text-sm text-gray-500 font-medium px-2 py-1 rounded-sm'>
                    <FontAwesomeIcon icon={faShower} /> 1 Bath</button>
                    <button className='bg-gray-100 text-sm text-gray-500 font-medium px-2 py-1 rounded-sm'>
                    <FontAwesomeIcon icon={faWifi} /> Wifi</button>
                    <button className='bg-gray-100 text-sm text-gray-500 font-medium px-2 py-1 rounded-sm'>
                    <FontAwesomeIcon icon={faVanShuttle} /> Shuttle</button>
                </div>
                <p className='text-sm text-gray-500 font-medium'>
                    <FontAwesomeIcon icon={faLocationDot} /> {card.location}</p>
                <button className='bg-[#00BFFF] text-white font-bold text-sm rounded-2xl py-1.5 px-3 
                hover:bg-[#0095fd]'>
                    View Details <FontAwesomeIcon icon={faArrowRight}/></button>
              </div>
            </div>
            ))}
          </div>
        </div>
  )
}

export default Offers
