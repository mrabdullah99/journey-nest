import React from 'react'

function Home() {
  return (
    <div className='relative w-full flex items-center flex-col
    bg-cover bg-center' 
    style={{backgroundImage:"url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82dbd61a-d2d0-4c76-b90b-915417560ef0/d9812zn-cdfdfb9e-1ccf-4e31-8248-b0583fa19a50.jpg/v1/fill/w_1024,h_432,q_75,strp/austria_schnepfau_uwhd_21_9_2560x1080_wallpaper_by_aradilon_d9812zn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDMyIiwicGF0aCI6IlwvZlwvODJkYmQ2MWEtZDJkMC00Yzc2LWI5MGItOTE1NDE3NTYwZWYwXC9kOTgxMnpuLWNkZmRmYjllLTFjY2YtNGUzMS04MjQ4LWIwNTgzZmExOWE1MC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.tKF3IhVUYJqferuTrSwmvJQ7g6rR2HsWrUkBojJ6dm8')",
    height:"450px",
    }}
    >
      <h1 className='text-black mt-30 text-5xl font-bold'>Plan Your Trip With Journey</h1>
      <h1 className='text-black text-5xl font-bold'>Nest</h1>
      <br/>
      <h1 className='text-xl font-medium'>Travel to your favourite city with respectful of the</h1>
      <h1 className='text-xl font-medium'>environment</h1>
      <button className='bg-[#00BFFF] text-white font-bold py-1 px-2 mt-3 rounded-xl hover:bg-[#0095fd]'>Explore Now</button>
      <div className='absolute bg-gray-300 text-gray-800 h-25 w-210 top-100 font-medium flex justify-around items-center
      rounded-2xl shadow-2xl'>
        <div className='flex flex-col'>Location
          <input type='text' placeholder='Dream Destination'
           className='bg-white border-2 border-gray-500 rounded-lg pl-2'/>
        </div>
        <div className='flex flex-col'>Distance
        <input type='text' placeholder='11/Meters'
        className='bg-white border-2 border-gray-500 rounded-lg pl-2'/>
        </div>
        <div className='flex flex-col'>Price Range
        <input type='text' placeholder='$140-$500'
        className='bg-white border-2 border-gray-500 rounded-lg pl-2 '/>
        </div>
        <button className='bg-[#00BFFF] text-white font-bold px-3 py-1 rounded-xl hover:bg-[#0095fd]'>Search</button>
      </div>
    </div>
  )
}

export default Home
