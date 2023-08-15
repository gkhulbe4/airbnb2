import React from 'react'
import Image from 'next/image'

function Mediumcards({img,title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out '>
        <div className='relative h-80 w-80'>
        <Image src={img} height={300} width={300} className='rounded-xl' />
        </div>
        <h3 className='text-2xl mt-3 mb-2 ml-2'>
            {title}
        </h3>
    </div>
  )
}

export default Mediumcards
