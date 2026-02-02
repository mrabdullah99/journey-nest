import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faForward,faBackward} from '@fortawesome/free-solid-svg-icons'
import Image1 from './Image1.jpeg'
import Image2 from './Image2.JPG'
import Image3 from './Image3.JPG'
import Image4 from './Image4.JPG'
import Image5 from './Image5.JPG'
import Image6 from './Image6.jpeg'
import Image7 from './Image7.jpeg'

function Journeys() {

  const destinations=[
    {id:"01", image:Image1, city:"Jeel Saif-Ul-Malook"},
    {id:"02", image:Image2, city:"Islamabad"},
    {id:"03", image:Image3, city:"Karachi"},
    {id:"04", image:Image4, city:"Badshahi Mosque"},
    {id:"05", image:Image5, city:"Swat Valley"},
    {id:"06", image:Image6, city:"Sakardu"},
    {id:"07", image:Image7, city:"Gilgit"}
  ]
  const [startId, setStartId] = useState(0);

  const showNextCard=()=>{
    if(endId!=isLastCard)
    setStartId(prevId=>prevId+1)
  }
  const showPreviousCard=()=>{
    if(startId!=isFirstCard)
    setStartId(prevId=>prevId-1)
  }
  const endId=startId+4
  const visibleCards = destinations.slice(startId, endId);
  const isLastCard=destinations.length
  const isFirstCard=0

  return (

    <div id='journey' className=' p-40 mt-20 flex flex-col items-center'>
      <div className='w-224 flex justify-between'>
        <div>
          <h1 className='text-3xl font-bold'>Popular Destinations</h1>
          <p className=' font-medium'>
          From historical cities to natural spectaculars, come see the best of the world!</p>
        </div>
        <div className='flex gap-x-2 mr-8'>
          <button className='text-3xl text-[#00BFFF] hover:text-[#0095fd]'
          onClick={showPreviousCard}><FontAwesomeIcon icon={faBackward} /></button>
          <button className='text-3xl text-[#00BFFF] hover:text-[#0095fd]' 
          onClick={showNextCard}><FontAwesomeIcon icon={faForward} /></button>
        </div>
      </div>
      <div className=' h-60 w-224 flex justify-between mt-7 gap-3 '>
        {visibleCards.map((card)=> (
          <div key={card.id} className='h-60 w-53 rounded-xl shadow-2xl overflow-hidden'>
            <img src={card.image} alt={card.city}
            className='w-full h-40 '/>
          <div className=' flex pl-2 pt-2 pb-2'>
            <h1 className='text-2xl font-bold'>{card.id}</h1>
            <p className='ml-2 mt-1'>{card.city}</p>
          </div>
            <p className='ml-2'>--------</p>
        </div>
        ))}
      </div>
    </div>
  )
}
export default Journeys