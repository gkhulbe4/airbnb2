import React from 'react'
import Image from 'next/image'

function Smallcards({img, location, distance}) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 round-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200  '>

        <div className='relative h-16 w-16'>
            <Image src={img} className='rounded-lg' height={100} width={100}/>
        </div>
        <div>
            
            <h2>
                {location}
            </h2>

            <h3 className='text-gray-500'>
                {distance}
            </h3>


        </div>

      
    </div>
  )
}

export default Smallcards
